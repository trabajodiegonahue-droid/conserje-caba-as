// Guarda la guía en el teléfono para que funcione sin internet (útil en zonas rurales).
const CACHE = 'conserje-v1';
const CORE = ['/cabana.html', '/styles.css', '/app.js', '/vendor/qrcode.js', '/icon-192.png', '/icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Red primero; si no hay conexión, lo guardado
async function networkFirst(req, fallbackUrl) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(fallbackUrl || req, res.clone());
    return res;
  } catch {
    return (await cache.match(fallbackUrl || req)) || Response.error();
  }
}

self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.origin === location.origin) {
    if (req.mode === 'navigate' && url.pathname.startsWith('/cabana/')) return e.respondWith(networkFirst(req, '/cabana.html'));
    if (url.pathname === '/api/cabana') return e.respondWith(networkFirst(req));
    if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/admin')) return; // chat y panel: siempre en línea
    return e.respondWith(networkFirst(req));
  }
  // Fuentes de Google: guardar la primera vez
  if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.open(CACHE).then(async (c) => (await c.match(req)) || fetch(req).then((r) => { c.put(req, r.clone()); return r; })));
  }
});
