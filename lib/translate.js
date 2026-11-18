// Traducción del contenido de la cabaña con Gemini.
// Se hace una vez desde el panel y queda guardada en el JSON ("traducciones"),
// así la página carga rápido, no gasta cuota en cada visita y funciona sin conexión.

export const LANGS = { en: 'English', pt: 'Brazilian Portuguese', de: 'German', it: 'Italian', fr: 'French' };

// Campos que no se traducen (códigos, enlaces, teléfonos, claves internas)
const SKIP = new Set(['slug', 'fotos', 'foto', 'url', 'telefono', 'whatsapp', 'email', 'mapa', 'icono', 'modo', 'reserva', 'coordenadas', 'comodidades', 'hora', 'meses', 'privado', 'traducciones', 'traducciones_meta', 'red', 'clave']);

/** Todos los textos traducibles: { "estufa.pasos.0": "Abre el tiraje…", … } */
export function sourceTexts(c) {
  const out = {};
  const walk = (o, p) => {
    if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${p}.${i}`));
    else if (o && typeof o === 'object') {
      for (const [k, v] of Object.entries(o)) {
        if (SKIP.has(k)) continue;
        if (k === 'tipo' && p.startsWith('servicios_cercanos')) continue; // tipo = clave interna
        if (k === 'precio' && p.startsWith('restaurantes')) continue;     // $, $$, $$$
        walk(v, p ? `${p}.${k}` : k);
      }
    } else if (typeof o === 'string' && o.trim()) out[p] = o;
  };
  walk(c, '');
  return out;
}

/** Huella de los textos en español, para saber si la traducción quedó vieja */
export function textsHash(map) {
  let h = 2166136261;
  for (const ch of JSON.stringify(Object.entries(map).sort())) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}

async function translateOne(src, lang, apiKey, model) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: `You translate the guest guide of a holiday cabin in Puerto Varas, Chile, from Spanish into ${LANGS[lang]}.
Rules: translate every value naturally and concisely, in a warm hospitality tone. Keep unchanged: names of businesses and restaurants, street names, brand names, prices, times, phone numbers and text in parentheses like "(ficticio)" (translate only that word). Geographic names may use the usual ${LANGS[lang]} form (e.g. "Volcán Osorno" → "Osorno Volcano").
Return ONLY a JSON object with exactly the same keys as the input.` }] },
      contents: [{ role: 'user', parts: [{ text: JSON.stringify(src) }] }],
      generationConfig: { temperature: 0.2, responseMimeType: 'application/json' },
    }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    console.error('Gemini translate', lang, r.status, JSON.stringify(data).slice(0, 300));
    throw Object.assign(new Error(r.status === 429 ? 'Gemini está ocupado (límite gratuito). Espera un minuto e intenta de nuevo.' : 'No se pudo traducir con Gemini.'), { status: 502 });
  }
  const text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
  let obj = {};
  try { obj = JSON.parse(text); } catch { throw Object.assign(new Error('Gemini devolvió una traducción inválida. Intenta de nuevo.'), { status: 502 }); }
  const clean = {};
  for (const k of Object.keys(src)) if (typeof obj[k] === 'string' && obj[k].trim()) clean[k] = obj[k];
  return clean;
}

/** Traduce a los 5 idiomas. Devuelve { traducciones, traducciones_meta } */
export async function translateCabana(c) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw Object.assign(new Error('Para traducir falta configurar GEMINI_API_KEY.'), { status: 500 });
  const model = process.env.GEMINI_MODEL || 'gemini-flash-latest';
  const src = sourceTexts(c);
  const langs = Object.keys(LANGS);
  const results = await Promise.all(langs.map((l) => translateOne(src, l, apiKey, model)));
  return {
    traducciones: Object.fromEntries(langs.map((l, i) => [l, results[i]])),
    traducciones_meta: { fecha: new Date().toISOString().slice(0, 10), hash: textsHash(src) },
  };
}
