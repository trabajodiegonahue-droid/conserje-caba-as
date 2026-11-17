import { readdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'data', 'cabanas');
export const SLUG_RE = /^[a-z0-9-]{1,60}$/;

/** Lista las cabañas: [{ slug, nombre }] */
export async function listCabanas() {
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.json'));
  return Promise.all(files.map(async (f) => {
    const slug = f.replace(/\.json$/, '');
    try { return { slug, nombre: JSON.parse(await readFile(path.join(DIR, f), 'utf8')).nombre || slug }; }
    catch { return { slug, nombre: slug }; }
  }));
}

/**
 * Guarda la cabaña.
 * - Si hay GITHUB_TOKEN y GITHUB_REPO (en Vercel): hace un commit en GitHub → Vercel vuelve a publicar solo (~1 min).
 * - En tu computador (npm run dev): escribe el archivo directamente.
 */
export async function saveCabana(slug, data) {
  const json = JSON.stringify(data, null, 2) + '\n';
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_REPO) return saveToGitHub(slug, json);
  if (process.env.VERCEL) {
    throw Object.assign(new Error('Para guardar desde el panel falta configurar GITHUB_TOKEN y GITHUB_REPO en Vercel (ver README).'), { status: 500 });
  }
  await writeFile(path.join(DIR, `${slug}.json`), json, 'utf8');
  return { mode: 'local' };
}

async function saveToGitHub(slug, json) {
  const repo = process.env.GITHUB_REPO; // ej: "usuario/conserje-caba-as"
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!repo) throw Object.assign(new Error('Falta la variable GITHUB_REPO (ej: usuario/repositorio).'), { status: 500 });
  const url = `https://api.github.com/repos/${repo}/contents/data/cabanas/${slug}.json`;
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'conserje-cabanas',
  };

  // Si el archivo ya existe necesitamos su "sha"
  let sha;
  const cur = await fetch(`${url}?ref=${encodeURIComponent(branch)}`, { headers });
  if (cur.ok) sha = (await cur.json()).sha;
  else if (cur.status !== 404) throw Object.assign(new Error(`GitHub respondió ${cur.status} al leer el archivo.`), { status: 502 });

  const r = await fetch(url, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `${sha ? 'Actualiza' : 'Crea'} ${slug} desde el panel`,
      content: Buffer.from(json, 'utf8').toString('base64'),
      branch,
      ...(sha && { sha }),
    }),
  });
  if (!r.ok) {
    const detail = await r.text();
    console.error('GitHub', r.status, detail.slice(0, 300));
    throw Object.assign(new Error(`GitHub no aceptó el cambio (${r.status}). Revisa el token y el nombre del repositorio.`), { status: 502 });
  }
  return { mode: 'github' };
}
