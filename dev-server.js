// Servidor local mínimo que imita a Vercel (archivos de /public + funciones de /api).
// Uso: GEMINI_API_KEY=tu_clave npm run dev   →  http://localhost:3000/cabana/los-arrayanes
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

// Carga .env si existe (solo para desarrollo local)
if (existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const PORT = process.env.PORT || 3000;
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.status = (c) => { res.statusCode = c; return res; };
  res.json = (o) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(o)); return res; };

  try {
    if (url.pathname.startsWith('/api/')) {
      const name = url.pathname.slice(5).replace(/[^a-z0-9-]/gi, '');
      const mod = await import(`./api/${name}.js`);
      let body = '';
      for await (const chunk of req) body += chunk;
      try { req.body = body ? JSON.parse(body) : {}; } catch { req.body = {}; }
      return await mod.default(req, res);
    }
    let file = url.pathname === '/' ? '/index.html' : url.pathname;
    if (/^\/cabana\/[^/]+\/?$/.test(file)) file = '/cabana.html'; // igual que vercel.json
    const full = path.join(process.cwd(), 'public', path.normalize(file));
    if (!full.startsWith(path.join(process.cwd(), 'public'))) return res.status(403).end();
    const data = await readFile(full);
    res.setHeader('Content-Type', TYPES[path.extname(full)] || 'application/octet-stream');
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'ERR_MODULE_NOT_FOUND') return res.status(404).end('No encontrado');
    console.error(err);
    res.status(500).end('Error');
  }
}).listen(PORT, () => console.log(`Listo: http://localhost:${PORT}/cabana/los-arrayanes`));
