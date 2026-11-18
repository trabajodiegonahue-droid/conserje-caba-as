import { checkPassword } from '../lib/auth.js';
import { listCabanas, saveCabana, SLUG_RE } from '../lib/storage.js';
import { getCabana } from '../lib/cabanas.js';
import { makeToken } from '../lib/guest.js';

// POST /api/admin  { action: 'list' | 'login' | 'save' | 'create', slug, password, data }
const MAX_BYTES = 200_000;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch { return {}; }
}

function validate(slug, data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return 'Datos inválidos.';
  if (typeof data.nombre !== 'string' || !data.nombre.trim()) return 'La cabaña necesita un nombre.';
  if (JSON.stringify(data).length > MAX_BYTES) return 'Los datos son demasiado grandes.';
  data.slug = slug;
  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });
  const { action, slug, password, data } = readBody(req);

  try {
    if (action === 'list') return res.status(200).json({ cabanas: await listCabanas() });

    if (!SLUG_RE.test(slug || '')) return res.status(400).json({ error: 'Nombre de cabaña inválido. Usa minúsculas, números y guiones.' });
    const role = checkPassword(slug, password);
    if (!role) { await wait(600); return res.status(401).json({ error: 'Clave incorrecta.' }); }

    if (action === 'login') {
      const exists = !!(await getCabana(slug));
      if (!exists && role !== 'admin') return res.status(404).json({ error: 'Esa cabaña no existe.' });
      return res.status(200).json({ ok: true, role, exists });
    }

    // Datos completos (incluye la parte privada) para editar
    if (action === 'get') {
      const data = await getCabana(slug);
      if (!data) return res.status(404).json({ error: 'Esa cabaña no existe.' });
      return res.status(200).json({ data });
    }

    // Enlace personalizado para un huésped
    if (action === 'link') {
      const { nombre, llegada, salida } = readBody(req);
      const token = makeToken({ slug, nombre, llegada, salida });
      return res.status(200).json({ path: `/cabana/${slug}?g=${token}` });
    }

    if (action === 'save' || action === 'create') {
      const existing = await getCabana(slug);
      if (action === 'create') {
        if (role !== 'admin') return res.status(403).json({ error: 'Solo el administrador puede crear cabañas.' });
        if (existing) return res.status(409).json({ error: 'Ya existe una cabaña con ese nombre.' });
      } else if (!existing) {
        return res.status(404).json({ error: 'Esa cabaña no existe.' });
      }
      const err = validate(slug, data);
      if (err) return res.status(400).json({ error: err });
      const result = await saveCabana(slug, data);
      return res.status(200).json({ ok: true, ...result });
    }

    return res.status(400).json({ error: 'Acción desconocida.' });
  } catch (e) {
    console.error(e);
    return res.status(e.status || 500).json({ error: e.message || 'Error al guardar.' });
  }
}
