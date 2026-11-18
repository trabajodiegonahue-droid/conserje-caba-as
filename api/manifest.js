import { getCabana } from '../lib/cabanas.js';

// GET /api/manifest?slug=…  → para "Agregar a pantalla de inicio" con el nombre de cada cabaña
export default async function handler(req, res) {
  const slug = new URL(req.url, 'http://x').searchParams.get('slug');
  const c = await getCabana(slug);
  if (!c) return res.status(404).json({ error: 'Cabaña no encontrada' });
  res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600');
  res.end(JSON.stringify({
    name: c.nombre,
    short_name: c.nombre.replace(/^caba[ñn]a\s+/i, '').slice(0, 14),
    description: c.descripcion || '',
    start_url: `/cabana/${slug}`,
    scope: '/',
    display: 'standalone',
    background_color: '#101c22',
    theme_color: '#101c22',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  }));
}
