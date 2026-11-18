import { getCabana } from '../lib/cabanas.js';
import { publicView } from '../lib/guest.js';

// GET /api/cabana?slug=los-arrayanes[&g=token]  → datos de la cabaña para el huésped
// Nunca entrega la parte "privado" salvo el código de acceso a un huésped con enlace válido y en sus fechas.
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método no permitido' });
  const q = new URL(req.url, 'http://x').searchParams;
  const cabana = await getCabana(q.get('slug'));
  if (!cabana) return res.status(404).json({ error: 'Cabaña no encontrada' });
  const token = q.get('g');
  res.setHeader('Cache-Control', token ? 'private, no-store' : 's-maxage=60, stale-while-revalidate=300');
  return res.status(200).json(publicView(cabana, token));
}
