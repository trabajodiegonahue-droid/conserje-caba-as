import { timingSafeEqual } from 'node:crypto';

const same = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
};

/** Claves por cabaña: CLAVES_CABANAS="los-arrayanes:clave1,el-mirador:clave2" */
function ownerPasswords() {
  const out = {};
  for (const pair of (process.env.CLAVES_CABANAS || '').split(',')) {
    const i = pair.indexOf(':');
    if (i > 0) out[pair.slice(0, i).trim()] = pair.slice(i + 1).trim();
  }
  return out;
}

/**
 * Devuelve 'admin' (puede editar todas y crear), 'owner' (solo su cabaña) o null.
 * Sin ADMIN_PASSWORD, en tu computador la clave de administrador es "admin".
 */
export function checkPassword(slug, password) {
  if (!password) return null;
  const master = process.env.ADMIN_PASSWORD || (process.env.VERCEL ? '' : 'admin');
  if (master && same(password, master)) return 'admin';
  const own = ownerPasswords()[slug];
  if (own && same(password, own)) return 'owner';
  return null;
}
