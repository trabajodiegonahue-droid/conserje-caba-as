import { createHmac, timingSafeEqual } from 'node:crypto';

// Enlaces personalizados para cada huésped: /cabana/<slug>?g=<token>
// El token lleva nombre y fechas, firmado para que nadie pueda inventarlo ni cambiar las fechas.

function secret() {
  return process.env.LINK_SECRET || process.env.ADMIN_PASSWORD || (process.env.VERCEL ? '' : 'clave-de-desarrollo');
}
const b64 = (buf) => Buffer.from(buf).toString('base64url');
const sign = (data) => createHmac('sha256', secret()).update(data).digest('base64url').slice(0, 24);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function makeToken({ slug, nombre, llegada, salida }) {
  if (!secret()) throw Object.assign(new Error('Falta configurar LINK_SECRET (o ADMIN_PASSWORD) en Vercel.'), { status: 500 });
  if (!DATE_RE.test(llegada) || !DATE_RE.test(salida) || salida < llegada) throw Object.assign(new Error('Revisa las fechas de llegada y salida.'), { status: 400 });
  const payload = b64(JSON.stringify({ s: slug, n: String(nombre || '').slice(0, 60), a: llegada, b: salida }));
  return `${payload}.${sign(payload)}`;
}

export function readToken(token, slug) {
  if (!token || !secret() || typeof token !== 'string') return null;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;
  const good = sign(payload);
  if (sig.length !== good.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(good))) return null;
  try {
    const p = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return p.s === slug ? { nombre: p.n, llegada: p.a, salida: p.b } : null;
  } catch { return null; }
}

/** Fecha de hoy en Chile, "AAAA-MM-DD" */
export const todayCL = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Santiago', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

/**
 * Lo que ve el huésped: sin la parte privada.
 * Con un enlace válido agrega sus datos, y el código de acceso solo entre la llegada y la salida.
 */
export function publicView(cabana, token) {
  const { privado, ...pub } = cabana;
  const guest = readToken(token, cabana.slug);
  if (!guest) return pub;
  pub.huesped = guest;
  const today = todayCL();
  if (privado && today >= guest.llegada && today <= guest.salida) pub.acceso = privado;
  else if (privado) pub.acceso_desde = guest.llegada;
  return pub;
}
