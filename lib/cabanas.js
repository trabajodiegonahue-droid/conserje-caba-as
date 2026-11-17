import { readFile } from 'node:fs/promises';
import path from 'node:path';

const SLUG_RE = /^[a-z0-9-]{1,60}$/;

/** Lee data/cabanas/<slug>.json. Devuelve null si no existe o el slug es inválido. */
export async function getCabana(slug) {
  if (typeof slug !== 'string' || !SLUG_RE.test(slug)) return null;
  const file = path.join(process.cwd(), 'data', 'cabanas', `${slug}.json`);
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}
