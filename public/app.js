// Textos de la interfaz (los datos de la cabaña vienen del JSON; el chat traduce el contenido).
const T = {
  es: {
    welcome: 'Bienvenidos a', wifi: 'Wi-Fi', network: 'Red', password: 'Clave', copy: 'Copiar clave', copied: '¡Copiada!',
    times: 'Horarios', rules: 'Reglas de la casa', stove: 'Cómo usar la estufa', safety: 'Seguridad', wood: 'Leña',
    host: 'Contacto del anfitrión', call: 'Llamar', restaurants: 'Restaurantes', tours: 'Tours y paseos', more: 'Más información',
    checkinInfo: 'Llegada', checkoutInfo: 'Salida',
    ask: 'Pregúntale al conserje', concierge: 'Conserje virtual', online: 'Responde en tu idioma 🌍',
    placeholder: 'Escribe tu pregunta…',
    hello: (n) => `¡Hola! 👋 Soy el conserje virtual de ${n}. Pregúntame lo que necesites sobre la cabaña o la zona.`,
    chips: ['¿Cuál es la clave del wifi?', '¿Cómo prendo la estufa?', '¿A qué hora es el check-out?', '¿Dónde puedo comer?'],
    error: 'Hubo un problema. Intenta de nuevo o contacta al anfitrión.',
    notFound: 'No encontramos esta cabaña. Revisa el enlace.',
    footer: 'Conserje con IA · Las respuestas se basan en la información de esta cabaña.',
  },
  en: {
    welcome: 'Welcome to', wifi: 'Wi-Fi', network: 'Network', password: 'Password', copy: 'Copy password', copied: 'Copied!',
    times: 'Times', rules: 'House rules', stove: 'How to use the stove', safety: 'Safety', wood: 'Firewood',
    host: 'Host contact', call: 'Call', restaurants: 'Restaurants', tours: 'Tours & trips', more: 'More info',
    checkinInfo: 'Arrival', checkoutInfo: 'Departure',
    ask: 'Ask the concierge', concierge: 'Virtual concierge', online: 'Replies in your language 🌍',
    placeholder: 'Type your question…',
    hello: (n) => `Hi! 👋 I'm the virtual concierge of ${n}. Ask me anything about the cabin or the area.`,
    chips: ["What's the wifi password?", 'How do I light the stove?', 'What time is check-out?', 'Where can we eat?'],
    error: 'Something went wrong. Try again or contact the host.',
    notFound: "We couldn't find this cabin. Please check the link.",
    footer: 'AI concierge · Answers are based on this cabin’s information.',
  },
  pt: {
    welcome: 'Bem-vindos à', wifi: 'Wi-Fi', network: 'Rede', password: 'Senha', copy: 'Copiar senha', copied: 'Copiada!',
    times: 'Horários', rules: 'Regras da casa', stove: 'Como usar a lareira', safety: 'Segurança', wood: 'Lenha',
    host: 'Contato do anfitrião', call: 'Ligar', restaurants: 'Restaurantes', tours: 'Passeios', more: 'Mais informações',
    checkinInfo: 'Chegada', checkoutInfo: 'Saída',
    ask: 'Pergunte ao concierge', concierge: 'Concierge virtual', online: 'Responde no seu idioma 🌍',
    placeholder: 'Escreva sua pergunta…',
    hello: (n) => `Olá! 👋 Sou o concierge virtual da ${n}. Pergunte o que precisar sobre a cabana ou a região.`,
    chips: ['Qual é a senha do wifi?', 'Como acendo a lareira?', 'Que horas é o check-out?', 'Onde podemos comer?'],
    error: 'Houve um problema. Tente novamente ou fale com o anfitrião.',
    notFound: 'Não encontramos esta cabana. Verifique o link.',
    footer: 'Concierge com IA · As respostas se baseiam nas informações desta cabana.',
  },
  de: {
    welcome: 'Willkommen in der', wifi: 'WLAN', network: 'Netzwerk', password: 'Passwort', copy: 'Passwort kopieren', copied: 'Kopiert!',
    times: 'Zeiten', rules: 'Hausregeln', stove: 'So benutzt du den Ofen', safety: 'Sicherheit', wood: 'Brennholz',
    host: 'Kontakt zum Gastgeber', call: 'Anrufen', restaurants: 'Restaurants', tours: 'Ausflüge & Touren', more: 'Weitere Infos',
    checkinInfo: 'Ankunft', checkoutInfo: 'Abreise',
    ask: 'Frag den Concierge', concierge: 'Virtueller Concierge', online: 'Antwortet in deiner Sprache 🌍',
    placeholder: 'Schreib deine Frage…',
    hello: (n) => `Hallo! 👋 Ich bin der virtuelle Concierge der ${n}. Frag mich alles über die Hütte oder die Umgebung.`,
    chips: ['Wie lautet das WLAN-Passwort?', 'Wie zünde ich den Ofen an?', 'Wann ist der Check-out?', 'Wo können wir essen?'],
    error: 'Etwas ist schiefgelaufen. Versuch es erneut oder kontaktiere den Gastgeber.',
    notFound: 'Diese Hütte wurde nicht gefunden. Bitte prüfe den Link.',
    footer: 'KI-Concierge · Die Antworten basieren auf den Informationen dieser Hütte.',
  },
  it: {
    welcome: 'Benvenuti a', wifi: 'Wi-Fi', network: 'Rete', password: 'Password', copy: 'Copia password', copied: 'Copiata!',
    times: 'Orari', rules: 'Regole della casa', stove: 'Come usare la stufa', safety: 'Sicurezza', wood: 'Legna',
    host: "Contatto dell'host", call: 'Chiama', restaurants: 'Ristoranti', tours: 'Tour ed escursioni', more: 'Altre informazioni',
    checkinInfo: 'Arrivo', checkoutInfo: 'Partenza',
    ask: 'Chiedi al concierge', concierge: 'Concierge virtuale', online: 'Risponde nella tua lingua 🌍',
    placeholder: 'Scrivi la tua domanda…',
    hello: (n) => `Ciao! 👋 Sono il concierge virtuale di ${n}. Chiedimi tutto sulla casetta o sulla zona.`,
    chips: ['Qual è la password del wifi?', 'Come accendo la stufa?', "A che ora è il check-out?", 'Dove possiamo mangiare?'],
    error: "Si è verificato un problema. Riprova o contatta l'host.",
    notFound: 'Non abbiamo trovato questa casetta. Controlla il link.',
    footer: 'Concierge con IA · Le risposte si basano sulle informazioni di questa casetta.',
  },
  fr: {
    welcome: 'Bienvenue à', wifi: 'Wi-Fi', network: 'Réseau', password: 'Mot de passe', copy: 'Copier le mot de passe', copied: 'Copié !',
    times: 'Horaires', rules: 'Règles de la maison', stove: 'Utiliser le poêle', safety: 'Sécurité', wood: 'Bois',
    host: "Contact de l'hôte", call: 'Appeler', restaurants: 'Restaurants', tours: 'Excursions', more: "Plus d'infos",
    checkinInfo: 'Arrivée', checkoutInfo: 'Départ',
    ask: 'Demandez au concierge', concierge: 'Concierge virtuel', online: 'Répond dans votre langue 🌍',
    placeholder: 'Écrivez votre question…',
    hello: (n) => `Bonjour ! 👋 Je suis le concierge virtuel de ${n}. Posez-moi vos questions sur le chalet ou la région.`,
    chips: ['Quel est le mot de passe wifi ?', 'Comment allumer le poêle ?', "À quelle heure est le check-out ?", 'Où manger ?'],
    error: "Un problème est survenu. Réessayez ou contactez l'hôte.",
    notFound: "Nous n'avons pas trouvé ce chalet. Vérifiez le lien.",
    footer: 'Concierge IA · Les réponses se basent sur les informations de ce chalet.',
  },
};

const $ = (s) => document.querySelector(s);
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const slug = location.pathname.split('/').filter(Boolean).pop() || new URLSearchParams(location.search).get('slug');
let lang = pickLang();
let cabana = null;
const history = []; // { role: 'user'|'assistant', text }

function pickLang() {
  try { const saved = localStorage.getItem('lang'); if (T[saved]) return saved; } catch {}
  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return T[nav] ? nav : 'es';
}

function setLang(l) {
  lang = l;
  try { localStorage.setItem('lang', l); } catch {}
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = T[l][el.dataset.i18n]; });
  document.querySelectorAll('.lang button').forEach((b) => b.classList.toggle('active', b.dataset.lang === l));
  $('#chat-input').placeholder = T[l].placeholder;
  $('#chat-sub').textContent = T[l].online;
  if (cabana) { renderSections(); renderChips(); }
}

function section(icon, title, body, open = false) {
  return `<details${open ? ' open' : ''}><summary><span>${icon}</span>${esc(title)}</summary><div class="section-body">${body}</div></details>`;
}

function renderSections() {
  const c = cabana, t = T[lang], parts = [];
  parts.push(section('🔑', `${t.checkinInfo} / ${t.checkoutInfo}`,
    `<p><strong>Check-in ${esc(c.checkin?.hora)}</strong> — ${esc(c.checkin?.instrucciones)}</p>
     <p><strong>Check-out ${esc(c.checkout?.hora)}</strong> — ${esc(c.checkout?.instrucciones)}</p>`));
  if (c.reglas?.length) parts.push(section('📋', t.rules, `<ul>${c.reglas.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>`));
  if (c.estufa) parts.push(section('🔥', t.stove,
    `<p><strong>${esc(c.estufa.tipo)}</strong></p>
     <ol>${(c.estufa.pasos || []).map((p) => `<li>${esc(p)}</li>`).join('')}</ol>
     ${c.estufa.seguridad ? `<p class="note">⚠️ <strong>${t.safety}:</strong> ${esc(c.estufa.seguridad)}</p>` : ''}
     ${c.estufa.lena ? `<p>🪵 <strong>${t.wood}:</strong> ${esc(c.estufa.lena)}</p>` : ''}`));
  if (c.anfitrion) {
    const a = c.anfitrion;
    parts.push(section('👋', t.host,
      `<p><strong>${esc(a.nombre)}</strong><br>${esc(a.telefono)}${a.email ? `<br>${esc(a.email)}` : ''}</p>
       ${a.horario ? `<p>${esc(a.horario)}</p>` : ''}
       <div class="contact-actions">
         ${a.whatsapp ? `<a class="btn" href="https://wa.me/${encodeURIComponent(a.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>` : ''}
         ${a.telefono ? `<a class="btn alt" href="tel:${esc(a.telefono.replace(/\s/g, ''))}">${t.call}</a>` : ''}
       </div>`));
  }
  const places = (list) => list.map((p) => `<div class="place"><strong>${esc(p.nombre)}</strong>
     <small>${esc([p.tipo, p.distancia, p.duracion].filter(Boolean).join(' · '))}</small>
     ${p.nota ? `<div>${esc(p.nota)}</div>` : ''}</div>`).join('');
  if (c.restaurantes?.length) parts.push(section('🍽️', t.restaurants, places(c.restaurantes)));
  if (c.tours?.length) parts.push(section('🚣', t.tours, places(c.tours)));
  if (c.otros) parts.push(section('ℹ️', t.more, `<ul>${Object.values(c.otros).map((v) => `<li>${esc(v)}</li>`).join('')}</ul>`));
  $('#sections').innerHTML = parts.join('');
}

function renderChips() {
  $('#chips').innerHTML = T[lang].chips.map((q) => `<button type="button">${esc(q)}</button>`).join('');
  $('#chips').hidden = history.some((m) => m.role === 'user');
}

// Markdown mínimo y seguro para las respuestas del bot
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
  } catch (err) {
    typing.remove();
    history.pop(); // permite reintentar sin romper el historial
    addMsg('bot', err.message || T[lang].error, 'error');
  } finally {
    $('.send').disabled = false;
    $('#chat-input').focus();
  }
}

function openChat() {
  $('#chat').hidden = false;
  if (!$('#messages').children.length) addMsg('bot', T[lang].hello(cabana.nombre));
  setTimeout(() => $('#chat-input').focus(), 50);
}

async function init() {
  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  try {
    const r = await fetch(`/api/cabana?slug=${encodeURIComponent(slug || '')}`);
    if (!r.ok) throw new Error();
    cabana = await r.json();
  } catch {
    $('#loading').textContent = T[lang].notFound;
    return;
  }
  document.title = `${cabana.nombre} · Conserje`;
  $('#nombre').textContent = cabana.nombre;
  $('#direccion').textContent = cabana.direccion || '';
  if (cabana.foto) $('#hero').style.backgroundImage = `url("${encodeURI(cabana.foto)}")`;
  $('#wifi-red').textContent = cabana.wifi?.red || '—';
  $('#wifi-clave').textContent = cabana.wifi?.clave || '—';
  $('#checkin').textContent = cabana.checkin?.hora || '—';
  $('#checkout').textContent = cabana.checkout?.hora || '—';

  $('#copy-wifi').addEventListener('click', async (e) => {
    try { await navigator.clipboard.writeText(cabana.wifi?.clave || ''); e.target.textContent = T[lang].copied; setTimeout(() => (e.target.textContent = T[lang].copy), 1500); } catch {}
  });
  $('#open-chat').addEventListener('click', openChat);
  $('#close-chat').addEventListener('click', () => ($('#chat').hidden = true));
  $('#chat-form').addEventListener('submit', (e) => { e.preventDefault(); send($('#chat-input').value); });
  $('#chips').addEventListener('click', (e) => { if (e.target.tagName === 'BUTTON') send(e.target.textContent); });

  setLang(lang);
  $('#loading').hidden = true;
  $('#app').hidden = false;
  $('#open-chat').hidden = false;
}

init();
