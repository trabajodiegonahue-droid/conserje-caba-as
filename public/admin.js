// Panel del anfitrión: edita el JSON de la cabaña con formularios.
// El formulario se genera desde SCHEMA: para agregar un campo nuevo, basta con sumarlo aquí.

const ICONOS = [['tub', 'Tinaja'], ['grill', 'Parrilla'], ['tv', 'TV'], ['drop', 'Agua'], ['coffee', 'Café / desayuno'], ['wood', 'Leña'], ['car', 'Auto / transfer'], ['bus', 'Bus'], ['clock', 'Reloj'], ['flame', 'Fuego'], ['key', 'Llave'], ['info', 'Información']];

const SCHEMA = [
  { id: 'general', title: 'General', hint: 'Lo primero que ve el huésped al abrir la página.', fields: [
    { path: 'nombre', label: 'Nombre de la cabaña', type: 'text', required: true },
    { path: 'lugar', label: 'Ubicación corta', type: 'text', help: 'Ej: Puerto Varas · Lago Llanquihue' },
    { path: 'descripcion', label: 'Descripción', type: 'textarea' },
    { path: 'direccion', label: 'Dirección', type: 'text' },
    { path: 'coordenadas.lat', label: 'Latitud', type: 'number', help: 'Para el clima en vivo. En Google Maps: clic derecho sobre la cabaña → copia los números.' },
    { path: 'coordenadas.lon', label: 'Longitud', type: 'number' },
  ] },
  { id: 'estadia', title: 'Wifi y horarios', fields: [
    { path: 'wifi.red', label: 'Nombre de la red wifi', type: 'text' },
    { path: 'wifi.clave', label: 'Clave del wifi', type: 'text' },
    { path: 'wifi.nota', label: 'Si el wifi falla…', type: 'textarea' },
    { path: 'checkin.hora', label: 'Hora de check-in', type: 'time' },
    { path: 'checkin.instrucciones', label: 'Instrucciones de llegada', type: 'textarea' },
    { path: 'checkout.hora', label: 'Hora de check-out', type: 'time' },
    { path: 'checkout.instrucciones', label: 'Instrucciones de salida', type: 'textarea' },
    { path: 'checkout.lista', label: 'Lista para antes de irse', type: 'strings', add: 'Agregar tarea' },
  ] },
  { id: 'llegar', title: 'Cómo llegar', fields: [
    { path: 'como_llegar.referencia', label: 'Cómo reconocer la entrada', type: 'textarea' },
    { path: 'como_llegar.mapa', label: 'Dirección para Google Maps', type: 'text' },
    { path: 'como_llegar.opciones', label: 'Formas de llegar', type: 'list', itemTitle: 'desde', add: 'Agregar forma de llegar', item: [
      { path: 'desde', label: 'Desde', type: 'text' },
      { path: 'modo', label: 'Tipo', type: 'select', options: [['avion', 'Avión'], ['bus', 'Bus'], ['auto', 'Auto']] },
      { path: 'tiempo', label: 'Tiempo aproximado', type: 'text' },
      { path: 'detalle', label: 'Explicación', type: 'textarea' },
    ] },
  ] },
  { id: 'moverse', title: 'Transporte', hint: 'Buses, colectivos y minibuses: dónde se toman y adónde van.', fields: [
    { path: 'transporte_publico.aviso', label: 'Aviso general', type: 'textarea' },
    { path: 'transporte_publico.lineas', label: 'Líneas', type: 'list', itemTitle: 'nombre', add: 'Agregar línea', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' },
      { path: 'para', label: 'Adónde va', type: 'text' },
      { path: 'donde', label: 'Dónde se toma', type: 'textarea' },
      { path: 'mapa', label: 'Punto para Google Maps', type: 'text' },
      { path: 'frecuencia', label: 'Frecuencia', type: 'text' },
      { path: 'precio', label: 'Precio', type: 'text' },
      { path: 'consejo', label: 'Consejo', type: 'textarea' },
    ] },
    { path: 'transporte_publico.consejos', label: 'Consejos para moverse', type: 'strings', add: 'Agregar consejo' },
  ] },
  { id: 'casa', title: 'La casa', fields: [
    { path: 'equipos', label: 'Cómo funciona cada cosa', type: 'list', itemTitle: 'nombre', add: 'Agregar equipo', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' },
      { path: 'icono', label: 'Ícono', type: 'select', options: ICONOS },
      { path: 'pasos', label: 'Pasos', type: 'strings', add: 'Agregar paso' },
      { path: 'nota', label: 'Nota', type: 'textarea' },
    ] },
    { path: 'donde_esta', label: 'Dónde está cada cosa', type: 'textarea' },
    { path: 'reglas', label: 'Reglas de la casa', type: 'strings', add: 'Agregar regla' },
    { path: 'otros.agua_caliente', label: 'Agua caliente', type: 'textarea' },
    { path: 'otros.estacionamiento', label: 'Estacionamiento', type: 'textarea' },
    { path: 'otros.basura', label: 'Basura y reciclaje', type: 'textarea' },
  ] },
  { id: 'estufa', title: 'Estufa', fields: [
    { path: 'estufa.tipo', label: 'Tipo de estufa', type: 'text' },
    { path: 'estufa.pasos', label: 'Pasos para encenderla', type: 'strings', add: 'Agregar paso' },
    { path: 'estufa.seguridad', label: 'Seguridad', type: 'textarea' },
    { path: 'estufa.lena', label: 'Dónde está la leña', type: 'textarea' },
  ] },
  { id: 'extras', title: 'Extras', hint: 'Servicios que el huésped puede pedirte por WhatsApp.', fields: [
    { path: 'extras', label: 'Servicios extra', type: 'list', itemTitle: 'nombre', add: 'Agregar servicio', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' },
      { path: 'precio', label: 'Precio', type: 'text', help: 'Ej: $35.000' },
      { path: 'detalle', label: 'Detalle', type: 'textarea' },
      { path: 'icono', label: 'Ícono', type: 'select', options: ICONOS },
    ] },
  ] },
  { id: 'lugares', title: 'Comer y cerca', fields: [
    { path: 'restaurantes', label: 'Restaurantes', type: 'list', itemTitle: 'nombre', add: 'Agregar restaurante', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'tipo', label: 'Tipo de comida', type: 'text' },
      { path: 'distancia', label: 'Distancia', type: 'text' }, { path: 'nota', label: 'Recomendación', type: 'textarea' },
    ] },
    { path: 'servicios_cercanos', label: 'Servicios cercanos', type: 'list', itemTitle: 'nombre', add: 'Agregar servicio', item: [
      { path: 'tipo', label: 'Tipo', type: 'select', options: [['supermercado', 'Supermercado'], ['almacen', 'Almacén'], ['farmacia', 'Farmacia'], ['bencinera', 'Bencinera'], ['cajero', 'Cajero']] },
      { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'distancia', label: 'Distancia', type: 'text' }, { path: 'horario', label: 'Horario', type: 'text' },
    ] },
  ] },
  { id: 'explorar', title: 'Tours y panoramas', fields: [
    { path: 'tours', label: 'Tours y paseos', type: 'list', itemTitle: 'nombre', add: 'Agregar tour', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'duracion', label: 'Duración', type: 'text' }, { path: 'nota', label: 'Consejo', type: 'textarea' },
    ] },
    { path: 'panoramas.lluvia', label: 'Panoramas si llueve', type: 'list', itemTitle: 'nombre', add: 'Agregar panorama', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'nota', label: 'Nota', type: 'textarea' },
    ] },
    { path: 'panoramas.sol', label: 'Panoramas si hay sol', type: 'list', itemTitle: 'nombre', add: 'Agregar panorama', item: [
      { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'nota', label: 'Nota', type: 'textarea' },
    ] },
  ] },
  { id: 'ayuda', title: 'Anfitrión y ayuda', fields: [
    { path: 'anfitrion.nombre', label: 'Tu nombre', type: 'text' },
    { path: 'anfitrion.telefono', label: 'Teléfono', type: 'tel', help: 'Como se muestra: +56 9 1234 5678' },
    { path: 'anfitrion.whatsapp', label: 'WhatsApp', type: 'tel', help: 'Solo números con código de país: 56912345678' },
    { path: 'anfitrion.email', label: 'Email', type: 'email' },
    { path: 'anfitrion.horario', label: 'Horario de atención', type: 'textarea' },
    { path: 'otros.emergencias', label: 'Emergencias y hospital', type: 'textarea' },
    { path: 'imprevistos', label: 'Si pasa algo', type: 'list', itemTitle: 'situacion', add: 'Agregar situación', item: [
      { path: 'situacion', label: 'Situación', type: 'text' }, { path: 'que_hacer', label: 'Qué hacer', type: 'textarea' },
    ] },
    { path: 'resenas.mensaje', label: 'Mensaje para pedir reseña', type: 'textarea' },
    { path: 'resenas.enlaces', label: 'Enlaces de reseñas', type: 'list', itemTitle: 'plataforma', add: 'Agregar enlace', item: [
      { path: 'plataforma', label: 'Plataforma', type: 'text', help: 'Google, Airbnb, Booking…' }, { path: 'url', label: 'Enlace', type: 'url' },
    ] },
  ] },
];

const $ = (s) => document.querySelector(s);
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let session = null;   // { slug, password, role, creating }
let draft = null;     // copia de trabajo del JSON
let current = SCHEMA[0].id;
let dirty = false;

// ── Rutas tipo "extras.2.precio" ──
const parts = (p) => p.split('.').map((k) => (/^\d+$/.test(k) ? +k : k));
function get(obj, p) { return parts(p).reduce((o, k) => (o == null ? undefined : o[k]), obj); }
function set(obj, p, val) {
  const ks = parts(p); let o = obj;
  ks.slice(0, -1).forEach((k, i) => { if (o[k] == null) o[k] = typeof ks[i + 1] === 'number' ? [] : {}; o = o[k]; });
  o[ks.at(-1)] = val;
}
const arr = (p) => { let a = get(draft, p); if (!Array.isArray(a)) { a = []; set(draft, p, a); } return a; };

async function api(body) {
  const r = await fetch('/api/admin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.error || 'Algo salió mal. Intenta de nuevo.');
  return data;
}

function toast(msg, kind = 'ok') {
  const t = $('#toast');
  t.textContent = msg; t.className = `toast ${kind}`; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), 4500);
}

// ── Ingreso ──
async function initLogin() {
  const params = new URLSearchParams(location.search);
  let list = [];
  try { list = (await api({ action: 'list' })).cabanas; } catch {}
  $('#login-slug').innerHTML = list.map((c) => `<option value="${esc(c.slug)}">${esc(c.nombre)}</option>`).join('')
    + '<option value="__new">＋ Nueva cabaña (administrador)</option>';
  if (params.get('c')) $('#login-slug').value = params.get('c');
  const toggleNew = () => { $('#new-slug-wrap').hidden = $('#login-slug').value !== '__new'; };
  $('#login-slug').addEventListener('change', toggleNew); toggleNew();
  $('#new-slug').addEventListener('input', (e) => {
    e.target.value = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9-]+/g, '-');
    $('#new-slug-preview').textContent = e.target.value || 'el-mirador';
  });

  try {
    const saved = JSON.parse(sessionStorage.getItem('adm'));
    if (saved?.slug && saved?.password) return login(saved.slug, saved.password, true);
  } catch {}

  $('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const isNew = $('#login-slug').value === '__new';
    const slug = isNew ? $('#new-slug').value.replace(/^-+|-+$/g, '') : $('#login-slug').value;
    if (!slug) return showLoginError('Escribe la dirección de la nueva cabaña.');
    login(slug, $('#login-pass').value);
  });
}

function showLoginError(msg) { const el = $('#login-error'); el.textContent = msg; el.hidden = !msg; }

async function login(slug, password, silent = false) {
  showLoginError('');
  $('#login-btn').disabled = true; $('#login-btn').textContent = 'Entrando…';
  try {
    const res = await api({ action: 'login', slug, password });
    if (res.exists) {
      const r = await fetch(`/api/cabana?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' });
      draft = await r.json();
    } else {
      draft = { slug, nombre: '', lugar: 'Puerto Varas · Lago Llanquihue', wifi: {}, checkin: { hora: '15:00' }, checkout: { hora: '11:00', lista: [] }, anfitrion: {}, reglas: [] };
    }
    session = { slug, password, role: res.role, creating: !res.exists };
    try { sessionStorage.setItem('adm', JSON.stringify({ slug, password })); } catch {}
    openEditor();
  } catch (err) {
    try { sessionStorage.removeItem('adm'); } catch {}
    if (!silent) showLoginError(err.message);
  } finally {
    $('#login-btn').disabled = false; $('#login-btn').textContent = 'Entrar';
  }
}

// ── Editor ──
function openEditor() {
  $('#login').hidden = true;
  $('#editor').hidden = false;
  $('#savebar').hidden = false;
  $('#adm-view').href = `/cabana/${session.slug}`;
  $('#adm-tabs').innerHTML = SCHEMA.map((s) => `<a href="#${s.id}" data-id="${s.id}">${s.title}</a>`).join('');
  $('#adm-tabs').addEventListener('click', (e) => {
    const a = e.target.closest('a'); if (!a) return;
    e.preventDefault(); current = a.dataset.id; renderSection(); window.scrollTo(0, 0);
  });
  updateHeader();
  setDirty(session.creating);
  renderSection();
}

function updateHeader() {
  const n = draft.nombre || 'Nueva cabaña';
  $('#adm-name').textContent = n;
  $('#adm-mono').textContent = n.replace(/^caba[ñn]a\s+/i, '').split(/\s+/).filter((w) => w.length > 2).map((w) => w[0]).join('').slice(0, 2).toUpperCase() || '✦';
}

function input(f, path) {
  const v = get(draft, path) ?? '';
  const common = `id="f-${esc(path)}" data-path="${esc(path)}" data-type="${f.type}"`;
  if (f.type === 'textarea') return `<textarea ${common} rows="3">${esc(v)}</textarea>`;
  if (f.type === 'select') return `<select ${common}><option value="">—</option>${f.options.map(([val, lab]) => `<option value="${val}"${val === v ? ' selected' : ''}>${esc(lab)}</option>`).join('')}</select>`;
  const type = { number: 'number', time: 'time', tel: 'tel', email: 'email', url: 'url' }[f.type] || 'text';
  return `<input ${common} type="${type}" value="${esc(v)}"${f.type === 'number' ? ' step="any" inputmode="decimal"' : ''}${f.required ? ' required' : ''}>`;
}

function field(f, base = '') {
  const path = base ? `${base}.${f.path}` : f.path;
  const label = `<span class="fl">${esc(f.label)}</span>`;
  const help = f.help ? `<small class="help">${esc(f.help)}</small>` : '';

  if (f.type === 'strings') {
    const items = arr(path);
    return `<div class="fld group"><div class="group-head">${label}<span class="count">${items.length}</span></div>${help}
      <div class="strings">${items.map((s, i) => `<div class="str">
        <span class="num">${i + 1}</span>
        <textarea rows="1" data-path="${esc(path)}.${i}" data-type="text" aria-label="${esc(f.label)} ${i + 1}">${esc(s)}</textarea>
        ${tools(path, i, items.length)}
      </div>`).join('')}</div>
      <button type="button" class="add" data-act="add" data-list="${esc(path)}" data-kind="string">＋ ${esc(f.add || 'Agregar')}</button></div>`;
  }

  if (f.type === 'list') {
    const items = arr(path);
    return `<div class="fld group"><div class="group-head">${label}<span class="count">${items.length}</span></div>${help}
      <div class="cards">${items.map((it, i) => `<details class="card-item" data-title="${esc(f.itemTitle)}"${it.__open ? ' open' : ''}>
        <summary><span class="num">${i + 1}</span><strong>${esc(it[f.itemTitle] || 'Sin nombre')}</strong>${tools(path, i, items.length)}<span class="chev"></span></summary>
        <div class="card-body">${f.item.map((sf) => field(sf, `${path}.${i}`)).join('')}</div>
      </details>`).join('')}</div>
      <button type="button" class="add" data-act="add" data-list="${esc(path)}" data-kind="object">＋ ${esc(f.add || 'Agregar')}</button></div>`;
  }

  return `<label class="fld">${label}${input(f, path)}${help}</label>`;
}

function tools(path, i, n) {
  return `<span class="tools">
    <button type="button" data-act="up" data-list="${esc(path)}" data-i="${i}" aria-label="Subir"${i === 0 ? ' disabled' : ''}>↑</button>
    <button type="button" data-act="down" data-list="${esc(path)}" data-i="${i}" aria-label="Bajar"${i === n - 1 ? ' disabled' : ''}>↓</button>
    <button type="button" data-act="del" data-list="${esc(path)}" data-i="${i}" aria-label="Eliminar" class="del">✕</button>
  </span>`;
}

function renderSection() {
  const s = SCHEMA.find((x) => x.id === current);
  document.querySelectorAll('#adm-tabs a').forEach((a) => {
    const on = a.dataset.id === current; a.classList.toggle('active', on);
    if (on) a.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  });
  $('#adm-form').innerHTML = `<div class="sec-head adm-head"><h2>${esc(s.title)}</h2></div>${s.hint ? `<p class="adm-hint">${esc(s.hint)}</p>` : ''}
    <div class="panel adm-panel">${s.fields.map((f) => field(f)).join('')}</div>`;
  autosize();
}

function autosize() {
  document.querySelectorAll('#adm-form textarea').forEach((t) => { t.style.height = 'auto'; t.style.height = `${t.scrollHeight + 2}px`; });
}

// Escritura de campos
document.addEventListener('input', (e) => {
  const el = e.target.closest('[data-path]'); if (!el || !draft) return;
  let v = el.value;
  if (el.dataset.type === 'number') v = v === '' ? undefined : Number(v);
  set(draft, el.dataset.path, v);
  if (el.tagName === 'TEXTAREA') { el.style.height = 'auto'; el.style.height = `${el.scrollHeight + 2}px`; }
  if (el.dataset.path === 'nombre') updateHeader();
  const card = el.closest('.card-item');
  if (card && el.dataset.path.endsWith(`.${card.dataset.title}`)) card.querySelector('summary strong').textContent = el.value || 'Sin nombre';
  setDirty(true);
});

// Agregar / mover / eliminar
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]'); if (!b || !draft) return;
  e.preventDefault();
  const list = arr(b.dataset.list), i = +b.dataset.i;
  // Recordar qué tarjetas están abiertas
  document.querySelectorAll('.card-item').forEach((d) => {
    const p = d.querySelector('[data-path]')?.dataset.path; if (!p) return;
    const m = p.match(/^(.*)\.(\d+)\.[^.]+$/); if (m) { const it = get(draft, `${m[1]}.${m[2]}`); if (it && typeof it === 'object') it.__open = d.open; }
  });
  if (b.dataset.act === 'add') list.push(b.dataset.kind === 'string' ? '' : { __open: true });
  if (b.dataset.act === 'del') list.splice(i, 1);
  if (b.dataset.act === 'up' && i > 0) [list[i - 1], list[i]] = [list[i], list[i - 1]];
  if (b.dataset.act === 'down' && i < list.length - 1) [list[i + 1], list[i]] = [list[i], list[i + 1]];
  const y = window.scrollY; renderSection(); window.scrollTo(0, y);
  if (b.dataset.act === 'add') {
    const groups = [...document.querySelectorAll(`[data-list="${CSS.escape(b.dataset.list)}"][data-act="add"]`)];
    const last = groups[0]?.previousElementSibling?.lastElementChild?.querySelector('textarea, input');
    last?.focus();
  }
  setDirty(true);
});

function setDirty(v) {
  dirty = v;
  $('#save-btn').disabled = !v;
  $('#save-state').textContent = v ? 'Cambios sin guardar' : 'Todo guardado';
  $('#savebar').classList.toggle('pending', v);
}

// Limpia campos vacíos y marcas internas antes de guardar
function clean(v) {
  if (Array.isArray(v)) return v.map(clean).filter((x) => x !== undefined && x !== '' && !(typeof x === 'object' && !Array.isArray(x) && !Object.keys(x).length));
  if (v && typeof v === 'object') {
    const o = {};
    for (const [k, x] of Object.entries(v)) { if (k === '__open') continue; const c = clean(x); if (c !== undefined && c !== '') o[k] = c; }
    return o;
  }
  return typeof v === 'string' ? v.trim() : v;
}

$('#save-btn').addEventListener('click', async () => {
  const data = clean(draft);
  if (!data.nombre) { current = 'general'; renderSection(); return toast('Ponle un nombre a la cabaña antes de guardar.', 'err'); }
  $('#save-btn').disabled = true; $('#save-btn').textContent = 'Guardando…';
  try {
    const res = await api({ action: session.creating ? 'create' : 'save', slug: session.slug, password: session.password, data });
    session.creating = false;
    setDirty(false);
    toast(res.mode === 'github' ? 'Guardado. Tus huéspedes verán los cambios en 1 o 2 minutos.' : res.mode === 'demo' ? 'Guardado en esta demo. Abre “Ver página” para verlo.' : 'Guardado.');
  } catch (err) {
    setDirty(true);
    toast(err.message, 'err');
  } finally {
    $('#save-btn').textContent = 'Guardar cambios';
  }
});

$('#adm-logout').addEventListener('click', () => {
  const btn = $('#adm-logout');
  if (dirty && !btn.dataset.armed) { btn.dataset.armed = '1'; btn.textContent = '¿Descartar?'; return toast('Tienes cambios sin guardar. Toca “¿Descartar?” para salir sin guardar.', 'err'); }
  try { sessionStorage.removeItem('adm'); } catch {}
  location.reload();
});

window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });

initLogin();
