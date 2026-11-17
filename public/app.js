// Textos de la interfaz. Los datos de la cabaña vienen del JSON; el chat responde en el idioma del huésped.
const T = {
  es: {
    concierge: 'Conserje', copy: 'Copiar', copied: 'Copiada', network: 'Red',
    tabs: { casa: 'La casa', estufa: 'Estufa', comer: 'Comer', explorar: 'Explorar', ayuda: 'Ayuda' },
    titles: { casa: 'La <em>casa</em>', estufa: 'Encender la <em>estufa</em>', comer: 'Dónde <em>comer</em>', explorar: 'Qué <em>explorar</em>', ayuda: 'Estamos para <em>ayudar</em>' },
    act: { wifi: 'Wi-Fi', whatsapp: 'WhatsApp', map: 'Cómo llegar', sos: 'Emergencia' },
    arrival: 'Llegada', departure: 'Salida', rules: 'Reglas', safety: 'Seguridad', wood: 'Leña',
    call: 'Llamar', hostRole: 'Tu anfitriona', sos: ['Ambulancia', 'Bomberos', 'Carabineros'], places: 'lugares',
    ask: 'Pregúntale a tu conserje…', online: 'Responde en tu idioma', demo: 'Modo demo · sin IA',
    placeholder: 'Escribe tu pregunta…',
    hello: (n) => `Hola, bienvenidos a **${n}**. Soy su conserje: pregúntenme por la casa, la estufa o qué hacer en Puerto Varas, a cualquier hora.`,
    chips: ['Clave del wifi', '¿Cómo prendo la estufa?', '¿A qué hora es el check-out?', '¿Dónde comer esta noche?'],
    error: 'No pude responder ahora. Intenta de nuevo o escribe a tu anfitrión.',
    notFound: 'No encontramos esta cabaña. Revisa el enlace.',
    footer: 'Conserje digital · respuestas basadas en la información de la cabaña',
  },
  en: {
    concierge: 'Concierge', copy: 'Copy', copied: 'Copied', network: 'Network',
    tabs: { casa: 'The house', estufa: 'Stove', comer: 'Eat', explorar: 'Explore', ayuda: 'Help' },
    titles: { casa: 'The <em>house</em>', estufa: 'Lighting the <em>stove</em>', comer: 'Where to <em>eat</em>', explorar: 'What to <em>explore</em>', ayuda: "We're here to <em>help</em>" },
    act: { wifi: 'Wi-Fi', whatsapp: 'WhatsApp', map: 'Directions', sos: 'Emergency' },
    arrival: 'Arrival', departure: 'Departure', rules: 'House rules', safety: 'Safety', wood: 'Firewood',
    call: 'Call', hostRole: 'Your host', sos: ['Ambulance', 'Fire', 'Police'], places: 'places',
    ask: 'Ask your concierge…', online: 'Replies in your language', demo: 'Demo mode · no AI',
    placeholder: 'Type your question…',
    hello: (n) => `Hello and welcome to **${n}**. I'm your concierge: ask me about the house, the stove or things to do in Puerto Varas, any time.`,
    chips: ['Wifi password', 'How do I light the stove?', 'What time is check-out?', 'Where to eat tonight?'],
    error: "I couldn't answer right now. Try again or message your host.",
    notFound: "We couldn't find this cabin. Please check the link.",
    footer: 'Digital concierge · answers based on this cabin’s information',
  },
  pt: {
    concierge: 'Concierge', copy: 'Copiar', copied: 'Copiada', network: 'Rede',
    tabs: { casa: 'A casa', estufa: 'Lareira', comer: 'Comer', explorar: 'Explorar', ayuda: 'Ajuda' },
    titles: { casa: 'A <em>casa</em>', estufa: 'Acender a <em>lareira</em>', comer: 'Onde <em>comer</em>', explorar: 'O que <em>explorar</em>', ayuda: 'Estamos aqui para <em>ajudar</em>' },
    act: { wifi: 'Wi-Fi', whatsapp: 'WhatsApp', map: 'Como chegar', sos: 'Emergência' },
    arrival: 'Chegada', departure: 'Saída', rules: 'Regras', safety: 'Segurança', wood: 'Lenha',
    call: 'Ligar', hostRole: 'Sua anfitriã', sos: ['Ambulância', 'Bombeiros', 'Polícia'], places: 'lugares',
    ask: 'Pergunte ao seu concierge…', online: 'Responde no seu idioma', demo: 'Modo demo · sem IA',
    placeholder: 'Escreva sua pergunta…',
    hello: (n) => `Olá, bem-vindos à **${n}**. Sou seu concierge: pergunte sobre a casa, a lareira ou o que fazer em Puerto Varas, a qualquer hora.`,
    chips: ['Senha do wifi', 'Como acendo a lareira?', 'Que horas é o check-out?', 'Onde jantar hoje?'],
    error: 'Não consegui responder agora. Tente de novo ou fale com o anfitrião.',
    notFound: 'Não encontramos esta cabana. Verifique o link.',
    footer: 'Concierge digital · respostas baseadas nas informações da cabana',
  },
  de: {
    concierge: 'Concierge', copy: 'Kopieren', copied: 'Kopiert', network: 'Netzwerk',
    tabs: { casa: 'Das Haus', estufa: 'Ofen', comer: 'Essen', explorar: 'Entdecken', ayuda: 'Hilfe' },
    titles: { casa: 'Das <em>Haus</em>', estufa: 'Den <em>Ofen</em> anzünden', comer: 'Wo man <em>isst</em>', explorar: 'Was es zu <em>entdecken</em> gibt', ayuda: 'Wir sind für Sie <em>da</em>' },
    act: { wifi: 'WLAN', whatsapp: 'WhatsApp', map: 'Anfahrt', sos: 'Notfall' },
    arrival: 'Ankunft', departure: 'Abreise', rules: 'Hausregeln', safety: 'Sicherheit', wood: 'Brennholz',
    call: 'Anrufen', hostRole: 'Ihre Gastgeberin', sos: ['Rettung', 'Feuerwehr', 'Polizei'], places: 'Orte',
    ask: 'Fragen Sie Ihren Concierge…', online: 'Antwortet in Ihrer Sprache', demo: 'Demo-Modus · ohne KI',
    placeholder: 'Ihre Frage…',
    hello: (n) => `Hallo und willkommen in der **${n}**. Ich bin Ihr Concierge: Fragen Sie mich zum Haus, zum Ofen oder zu Ausflügen in Puerto Varas, jederzeit.`,
    chips: ['WLAN-Passwort', 'Wie zünde ich den Ofen an?', 'Wann ist der Check-out?', 'Wo essen wir heute?'],
    error: 'Ich konnte gerade nicht antworten. Bitte erneut versuchen oder die Gastgeberin kontaktieren.',
    notFound: 'Diese Hütte wurde nicht gefunden. Bitte prüfen Sie den Link.',
    footer: 'Digitaler Concierge · Antworten basieren auf den Infos dieser Hütte',
  },
  it: {
    concierge: 'Concierge', copy: 'Copia', copied: 'Copiata', network: 'Rete',
    tabs: { casa: 'La casa', estufa: 'Stufa', comer: 'Mangiare', explorar: 'Esplorare', ayuda: 'Aiuto' },
    titles: { casa: 'La <em>casa</em>', estufa: 'Accendere la <em>stufa</em>', comer: 'Dove <em>mangiare</em>', explorar: 'Cosa <em>esplorare</em>', ayuda: 'Siamo qui per <em>aiutare</em>' },
    act: { wifi: 'Wi-Fi', whatsapp: 'WhatsApp', map: 'Indicazioni', sos: 'Emergenza' },
    arrival: 'Arrivo', departure: 'Partenza', rules: 'Regole', safety: 'Sicurezza', wood: 'Legna',
    call: 'Chiama', hostRole: 'La tua host', sos: ['Ambulanza', 'Pompieri', 'Polizia'], places: 'luoghi',
    ask: 'Chiedi al tuo concierge…', online: 'Risponde nella tua lingua', demo: 'Modalità demo · senza IA',
    placeholder: 'Scrivi la tua domanda…',
    hello: (n) => `Ciao e benvenuti a **${n}**. Sono il vostro concierge: chiedetemi della casa, della stufa o cosa fare a Puerto Varas, a qualsiasi ora.`,
    chips: ['Password del wifi', 'Come accendo la stufa?', "A che ora è il check-out?", 'Dove cenare stasera?'],
    error: "Non sono riuscito a rispondere. Riprova o scrivi all'host.",
    notFound: 'Non abbiamo trovato questa casetta. Controlla il link.',
    footer: 'Concierge digitale · risposte basate sulle informazioni della casetta',
  },
  fr: {
    concierge: 'Concierge', copy: 'Copier', copied: 'Copié', network: 'Réseau',
    tabs: { casa: 'La maison', estufa: 'Poêle', comer: 'Manger', explorar: 'Explorer', ayuda: 'Aide' },
    titles: { casa: 'La <em>maison</em>', estufa: 'Allumer le <em>poêle</em>', comer: 'Où <em>manger</em>', explorar: 'Que <em>explorer</em>', ayuda: 'Nous sommes là pour <em>aider</em>' },
    act: { wifi: 'Wi-Fi', whatsapp: 'WhatsApp', map: 'Itinéraire', sos: 'Urgence' },
    arrival: 'Arrivée', departure: 'Départ', rules: 'Règles', safety: 'Sécurité', wood: 'Bois',
    call: 'Appeler', hostRole: 'Votre hôte', sos: ['Ambulance', 'Pompiers', 'Police'], places: 'lieux',
    ask: 'Demandez à votre concierge…', online: 'Répond dans votre langue', demo: 'Mode démo · sans IA',
    placeholder: 'Votre question…',
    hello: (n) => `Bonjour et bienvenue à **${n}**. Je suis votre concierge : posez-moi vos questions sur la maison, le poêle ou que faire à Puerto Varas, à toute heure.`,
    chips: ['Mot de passe wifi', 'Comment allumer le poêle ?', 'Heure du check-out ?', 'Où dîner ce soir ?'],
    error: "Je n'ai pas pu répondre. Réessayez ou écrivez à votre hôte.",
    notFound: "Nous n'avons pas trouvé ce chalet. Vérifiez le lien.",
    footer: 'Concierge numérique · réponses basées sur les infos du chalet',
  },
};

// Íconos de línea
const I = {
  wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.8a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',
  chat: '<path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5z"/><path d="M9 10.5h6M9 13.5h4"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  sos: '<path d="M12 3l9 16H3z"/><path d="M12 10v4M12 16.8v.2"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8m-3 3 2 2m-4 0 2 2"/>',
  door: '<path d="M5 21V4a1 1 0 0 1 1-1h9l3 2v16"/><path d="M3 21h18M12 12v.5"/>',
  rule: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r=".6" fill="currentColor"/><circle cx="4" cy="12" r=".6" fill="currentColor"/><circle cx="4" cy="18" r=".6" fill="currentColor"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  car: '<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="13.5" r=".6" fill="currentColor"/><circle cx="16.5" cy="13.5" r=".6" fill="currentColor"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.2"/>',
  flame: '<path d="M12 21c-4 0-7-2.7-7-6.5 0-3.6 3-5.5 3.5-9.5 2.5 1.5 3.5 3.5 3.5 5.5 1-1 1.5-2 1.5-3.5C16.5 9 19 11.5 19 14.5c0 3.8-3 6.5-7 6.5z"/>',
  wood: '<path d="M3 15l14-8 4 3-14 8z"/><path d="M7 18l-4-3"/>',
  fork: '<path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 21V3c-2 1.5-3 4-3 8h3"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
};
const ico = (n) => `<svg viewBox="0 0 24 24">${I[n] || I.info}</svg>`;

const $ = (s) => document.querySelector(s);
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const slug = location.pathname.split('/').filter(Boolean).pop() || new URLSearchParams(location.search).get('slug');
let lang = pickLang();
let cabana = null;
let demoMode = false;
const history = []; // { role: 'user'|'assistant', text }

function pickLang() {
  try { const saved = localStorage.getItem('lang'); if (T[saved]) return saved; } catch {}
  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return T[nav] ? nav : 'es';
}

const monogram = (name) => name.replace(/^caba[ñn]a\s+/i, '').split(/\s+/).filter((w) => w.length > 2).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

function setLang(l) {
  lang = l;
  try { localStorage.setItem('lang', l); } catch {}
  document.documentElement.lang = l;
  $('#lang').value = l;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = T[l][el.dataset.i18n]; });
  $('#chat-input').placeholder = T[l].placeholder;
  $('#chat-sub').textContent = demoMode ? T[l].demo : T[l].online;
  if (cabana) render();
}

function row(icon, title, text, chips = []) {
  return `<div class="row"><span class="ri">${ico(icon)}</span><div class="rt">
    <strong>${esc(title)}</strong>${text ? `<p>${esc(text)}</p>` : ''}
    ${chips.length ? `<div class="meta">${chips.filter(Boolean).map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>` : ''}
  </div></div>`;
}

function sec(id, body, note = '') {
  return `<section class="sec" id="${id}"><div class="sec-head"><h2>${T[lang].titles[id]}</h2>${note ? `<span class="sec-note">${esc(note)}</span>` : ''}</div>${body}</section>`;
}

function render() {
  const c = cabana, t = T[lang], a = c.anfitrion || {};
  const ids = [];
  const out = [];

  // Accesos rápidos
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.direccion || c.nombre)}`;
  $('#actions').innerHTML = `
    <button class="action" id="act-wifi"><span class="i">${ico('wifi')}</span>${t.act.wifi}</button>
    ${a.whatsapp ? `<a class="action" href="https://wa.me/${encodeURIComponent(a.whatsapp)}" target="_blank" rel="noopener"><span class="i">${ico('chat')}</span>${t.act.whatsapp}</a>` : ''}
    <a class="action" href="${maps}" target="_blank" rel="noopener"><span class="i">${ico('pin')}</span>${t.act.map}</a>
    <a class="action sos" href="#ayuda"><span class="i">${ico('sos')}</span>${t.act.sos}</a>`;
  $('#act-wifi').onclick = copyWifi;

  // La casa
  const otrosIcons = { agua_caliente: 'drop', estacionamiento: 'car', basura: 'trash' };
  const casa = [
    row('key', `${t.arrival} · ${c.checkin?.hora || ''}`, c.checkin?.instrucciones),
    row('door', `${t.departure} · ${c.checkout?.hora || ''}`, c.checkout?.instrucciones),
    ...Object.entries(c.otros || {}).filter(([k]) => k !== 'emergencias').map(([k, v]) => row(otrosIcons[k] || 'info', k.replace(/_/g, ' ').replace(/^./, (m) => m.toUpperCase()), v)),
  ];
  out.push(sec('casa', `<div class="panel">${casa.join('')}</div>
    ${c.reglas?.length ? `<div class="panel" style="margin-top:10px">${row('rule', t.rules, '')}<ul style="margin:-6px 0 14px 48px;padding:0;color:#3e4b50;font-size:14px">${c.reglas.map((r) => `<li style="margin-bottom:6px">${esc(r)}</li>`).join('')}</ul></div>` : ''}`));
  ids.push('casa');

  // Estufa
  if (c.estufa) {
    const e = c.estufa;
    out.push(sec('estufa', `<div class="panel">
      <div class="stove-type">${ico('flame')}${esc(e.tipo)}</div>
      <ol class="steps">${(e.pasos || []).map((p) => `<li>${esc(p)}</li>`).join('')}</ol>
      ${e.lena ? `<div class="tip">${ico('wood')}<span><strong>${t.wood}.</strong> ${esc(e.lena)}</span></div>` : ''}
    </div>
    ${e.seguridad ? `<div class="warn">${ico('sos')}<span><strong>${t.safety}.</strong> ${esc(e.seguridad)}</span></div>` : ''}`));
    ids.push('estufa');
  }

  // Comer y explorar
  if (c.restaurantes?.length) {
    out.push(sec('comer', `<div class="panel">${c.restaurantes.map((r) => row('fork', r.nombre, r.nota, [r.tipo, r.distancia])).join('')}</div>`, `${c.restaurantes.length} ${t.places}`));
    ids.push('comer');
  }
  if (c.tours?.length) {
    out.push(sec('explorar', `<div class="panel">${c.tours.map((r) => row('compass', r.nombre, r.nota, [r.duracion])).join('')}</div>`, `${c.tours.length} ${t.places}`));
    ids.push('explorar');
  }

  // Ayuda
  out.push(sec('ayuda', `<div class="host">
      <div class="host-top"><span class="avatar">${esc((a.nombre || '?')[0])}</span><div><span>${t.hostRole}</span><strong>${esc(a.nombre || '')}</strong></div></div>
      ${a.horario ? `<p class="host-hours">${esc(a.horario)}</p>` : ''}
      <div class="host-btns">
        ${a.whatsapp ? `<a class="btn light" href="https://wa.me/${encodeURIComponent(a.whatsapp)}" target="_blank" rel="noopener">${ico('chat')}WhatsApp</a>` : ''}
        ${a.telefono ? `<a class="btn ghost" href="tel:${esc(a.telefono.replace(/\s/g, ''))}">${ico('phone')}${t.call}</a>` : ''}
      </div>
      <p class="host-hours" style="margin:0">${esc(a.telefono || '')}${a.email ? ` · ${esc(a.email)}` : ''}</p>
    </div>
    <div class="sos-grid">${['131', '132', '133'].map((n, i) => `<a href="tel:${n}"><strong>${n}</strong><span>${t.sos[i]}</span></a>`).join('')}</div>`));
  ids.push('ayuda');

  $('#sections').innerHTML = out.join('');
  $('#tabs').innerHTML = ids.map((id, i) => `<a href="#${id}" data-id="${id}"${i === 0 ? ' class="active"' : ''}>${t.tabs[id]}</a>`).join('');
  watchTabs();
  renderChips();
}

let observer;
function watchTabs() {
  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      document.querySelectorAll('.tabs a').forEach((a) => {
        const on = a.dataset.id === en.target.id;
        a.classList.toggle('active', on);
        if (on) a.scrollIntoView({ inline: 'nearest', block: 'nearest' });
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('.sec').forEach((s) => observer.observe(s));
}

async function copyWifi() {
  const btn = $('#copy-wifi');
  try { await navigator.clipboard.writeText(cabana.wifi?.clave || ''); } catch { return; }
  btn.classList.add('done');
  btn.querySelector('span').textContent = T[lang].copied;
  setTimeout(() => { btn.classList.remove('done'); btn.querySelector('span').textContent = T[lang].copy; }, 1600);
}

function renderChips() {
  $('#chips').innerHTML = T[lang].chips.map((q) => `<button type="button">${esc(q)}</button>`).join('');
  $('#chips').hidden = history.some((m) => m.role === 'user');
}

// Markdown mínimo y seguro para las respuestas
function md(text) {
  const lines = esc(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').split('\n');
  let html = '', list = null;
  for (const raw of lines) {
    const line = raw.trim();
    const ol = line.match(/^\d+[.)]\s+(.*)/), ul = line.match(/^[-*•]\s+(.*)/);
    const type = ol ? 'ol' : ul ? 'ul' : null;
    if (list && type !== list) { html += `</${list}>`; list = null; }
    if (type) { if (!list) { html += `<${type}>`; list = type; } html += `<li>${(ol || ul)[1]}</li>`; }
    else if (line) html += `<p>${line}</p>`;
  }
  if (list) html += `</${list}>`;
  return html;
}

function addMsg(role, text, extra = '') {
  const div = document.createElement('div');
  div.className = `msg ${role === 'user' ? 'user' : 'bot'} ${extra}`;
  if (role === 'user') div.textContent = text; else div.innerHTML = md(text);
  $('#messages').appendChild(div);
  $('#messages').scrollTop = $('#messages').scrollHeight;
  return div;
}

async function send(text) {
  text = text.trim();
  if (!text) return;
  history.push({ role: 'user', text });
  addMsg('user', text);
  renderChips();
  $('#chat-input').value = '';
  $('.send').disabled = true;
  const typing = addMsg('bot', '');
  typing.innerHTML = '<span class="typing"><span></span><span></span><span></span></span>';
  try {
    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, messages: history }),
    });
    const data = await r.json().catch(() => ({}));
    typing.remove();
    if (!r.ok) throw new Error(data.error || T[lang].error);
    history.push({ role: 'assistant', text: data.reply });
    addMsg('bot', data.reply);
    if (data.demo && !demoMode) { demoMode = true; $('#chat-sub').textContent = T[lang].demo; }
  } catch (err) {
    typing.remove();
    history.pop();
    addMsg('bot', err.message || T[lang].error, 'error');
  } finally {
    $('.send').disabled = false;
    $('#chat-input').focus();
  }
}

function openChat() {
  $('#chat').hidden = false;
  if (!$('#messages').children.length) addMsg('bot', T[lang].hello(cabana.nombre));
  setTimeout(() => $('#chat-input').focus(), 60);
}

async function init() {
  try {
    const r = await fetch(`/api/cabana?slug=${encodeURIComponent(slug || '')}`);
    if (!r.ok) throw new Error();
    cabana = await r.json();
  } catch {
    $('#loading').textContent = T[lang].notFound;
    return;
  }
  const m = monogram(cabana.nombre);
  document.title = `${cabana.nombre} · ${T[lang].concierge}`;
  $('#nombre').textContent = cabana.nombre;
  $('#descripcion').textContent = cabana.descripcion || '';
  $('#mono').textContent = m;
  $('#chat-mono').textContent = m;
  $('#foot-name').textContent = cabana.nombre;
  if (cabana.lugar) $('#lugar').textContent = cabana.lugar;
  $('#wifi-red').textContent = `${cabana.wifi?.red || ''}`;
  $('#wifi-clave').textContent = cabana.wifi?.clave || '—';
  $('#checkin').textContent = cabana.checkin?.hora || '—';
  $('#checkout').textContent = cabana.checkout?.hora || '—';

  $('#lang').addEventListener('change', (e) => setLang(e.target.value));
  $('#copy-wifi').addEventListener('click', copyWifi);
  $('#open-chat').addEventListener('click', openChat);
  $('#close-chat').addEventListener('click', () => ($('#chat').hidden = true));
  $('#chat-form').addEventListener('submit', (e) => { e.preventDefault(); send($('#chat-input').value); });
  $('#chips').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) send(b.textContent); });

  setLang(lang);
  $('#loading').hidden = true;
  $('#app').hidden = false;
  $('#open-chat').hidden = false;
}

init();
