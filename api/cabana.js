import { getCabana } from '../lib/cabanas.js';

// GET /api/cabana?slug=los-arrayanes  → datos públicos de la cabaña
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método no permitido' });
  const slug = new URL(req.url, 'http://x').searchParams.get('slug');
  const cabana = await getCabana(slug);
  if (!cabana) return res.status(404).json({ error: 'Cabaña no encontrada' });
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  return res.status(200).json(cabana);
}
