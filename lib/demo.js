// Modo demo: respuestas simples SIN IA, sacadas del JSON de la cabaña.
// Se usa cuando no hay GEMINI_API_KEY (o con DEMO_MODE=1). Sirve para mostrar la app.

const LANG_HINTS = {
  en: /\b(the|what|how|where|is|wifi password|can|we|i|do|time)\b/,
  pt: /\b(qual|onde|como|senha|podemos|você|voce|que horas|obrigad|lareira)\b/,
  de: /\b(wie|wo|ist|das|der|die|ich|wir|ofen|wann|passwort|essen)\b/,
  it: /\b(qual è|dove|come|posso|possiamo|stufa|mangiare|grazie|che ora)\b/,
  fr: /\b(quel|quelle|où|comment|est-ce|poêle|manger|merci|nous)\b/,
};

const L = {
  es: { rain: "Si llueve", sun: "Si hay sol", wifi: 'Wi-Fi', red: 'Red', clave: 'Clave', stove: 'Así se enciende la estufa:', safety: 'Seguridad', in: 'Check-in', out: 'Check-out', eat: 'Te recomiendo:', tours: 'Paseos recomendados:', rules: 'Reglas de la casa:', host: 'Tu anfitrión/a', emerg: 'Emergencias', unknown: 'No tengo esa información. Mejor consulta directamente con', hello: '¡Hola! Pregúntame por el wifi, la estufa, los horarios, dónde comer, tours o reglas.' },
  en: { rain: "If it rains", sun: "If it's sunny", wifi: 'Wi-Fi', red: 'Network', clave: 'Password', stove: 'How to light the stove:', safety: 'Safety', in: 'Check-in', out: 'Check-out', eat: 'I recommend:', tours: 'Recommended trips:', rules: 'House rules:', host: 'Your host', emerg: 'Emergencies', unknown: "I don't have that information. Please contact", hello: 'Hi! Ask me about the wifi, the stove, check-in/out, where to eat, tours or house rules.' },
  pt: { rain: "Se chover", sun: "Se fizer sol", wifi: 'Wi-Fi', red: 'Rede', clave: 'Senha', stove: 'Como acender a lareira:', safety: 'Segurança', in: 'Check-in', out: 'Check-out', eat: 'Recomendo:', tours: 'Passeios recomendados:', rules: 'Regras da casa:', host: 'Seu anfitrião', emerg: 'Emergências', unknown: 'Não tenho essa informação. Fale com', hello: 'Olá! Pergunte sobre o wifi, a lareira, horários, onde comer, passeios ou regras.' },
  de: { rain: "Bei Regen", sun: "Bei Sonne", wifi: 'WLAN', red: 'Netzwerk', clave: 'Passwort', stove: 'So zündest du den Ofen an:', safety: 'Sicherheit', in: 'Check-in', out: 'Check-out', eat: 'Meine Empfehlungen:', tours: 'Empfohlene Ausflüge:', rules: 'Hausregeln:', host: 'Deine Gastgeberin', emerg: 'Notfälle', unknown: 'Dazu habe ich keine Information. Bitte wende dich an', hello: 'Hallo! Frag mich nach WLAN, Ofen, Zeiten, Restaurants, Ausflügen oder Hausregeln.' },
  it: { rain: "Se piove", sun: "Se c'è sole", wifi: 'Wi-Fi', red: 'Rete', clave: 'Password', stove: 'Come accendere la stufa:', safety: 'Sicurezza', in: 'Check-in', out: 'Check-out', eat: 'Ti consiglio:', tours: 'Escursioni consigliate:', rules: 'Regole della casa:', host: 'Il tuo host', emerg: 'Emergenze', unknown: 'Non ho questa informazione. Contatta', hello: 'Ciao! Chiedimi del wifi, della stufa, degli orari, dove mangiare, escursioni o regole.' },
  fr: { rain: "S'il pleut", sun: "S'il fait beau", wifi: 'Wi-Fi', red: 'Réseau', clave: 'Mot de passe', stove: 'Comment allumer le poêle :', safety: 'Sécurité', in: 'Check-in', out: 'Check-out', eat: 'Je vous recommande :', tours: 'Excursions conseillées :', rules: 'Règles de la maison :', host: 'Votre hôte', emerg: 'Urgences', unknown: "Je n'ai pas cette information. Contactez", hello: 'Bonjour ! Demandez-moi le wifi, le poêle, les horaires, où manger, les excursions ou les règles.' },
};

const TOPICS = [
  ['tub', /tinaja|hot ?tub|jacuzzi|whirlpool|badefass|ofurô|ofuro|vasca|bain nordique/],
  ['extras', /extra|desayuno|breakfast|frühstück|colazione|petit[- ]d[ée]j|café da manhã|transfer|late check|precio|price|cuánto cuesta|how much|pedir|order/],
  ['arrive', /c[oó]mo llego|llegar|aeropuerto|airport|flughafen|aeroporto|a[ée]roport|terminal|bus station|get there|directions|anfahrt|chegar|arrivare/],
  ['transport', /\bbus|micro|colectivo|transporte|locomoci|public transport|öffentlich|ônibus|onibus|autobus|pullman|frutillar|puerto montt|llanquihue|ensenada|petrohu|moovit|taxi/],
  ['nearby', /supermerc|supermarket|farmacia|pharmacy|apotheke|farmácia|pharmacie|bencin|gas station|tankstelle|cajero|atm|geldautomat|almac[eé]n|shop|compras/],
  ['plans', /llueve|lluvia|rain|regen|chuva|pioggia|pluie|sol|sunny|sonne|clima|weather|wetter|tempo|meteo|qu[eé] hacemos|what to do/],
  ['power', /luz|corte|power|strom|energia|électricité|electricity|blackout|agua no|no hay agua|no water|sismo|terremoto|earthquake|erdbeben|terremoto|séisme|volc[aá]nic|erupci/],
  ['device', /tele|tv|netflix|parrilla|grill|asado|bbq|barbecue|calef[oó]n|hot water|warmwasser|água quente|acqua calda|eau chaude/],
  ['wifi', /wi-?fi|wlan|internet|clave|senha|password|passwort|mot de passe|contraseña/],
  ['stove', /estufa|stove|ofen|lareira|stufa|poêle|poele|fuego|fire|calefa|heat|leña|wood|frío|frio|cold/],
  ['checkout', /check-?out|salida|irnos|leave|abreise|partenza|départ|saída/],
  ['checkin', /check-?in|llegada|llave|key|arrival|ankunft|arrivo|arrivée|chegada|chave/],
  ['emergency', /emergencia|emergency|notfall|emergência|emergenza|urgence|hospital|incendio|fire alarm|ambulan/],
  ['eat', /comer|restaur|eat|food|cena|dinner|almuerzo|lunch|essen|mangiare|manger|comida|café|cafe/],
  ['tours', /tour|paseo|hacer|visit|ausflug|passeio|escursion|excursion|volcán|volcan|lago|lake|kayak|actividad/],
  ['rules', /regla|rule|regel|regra|regole|règle|fumar|smok|mascota|pet|ruido|noise|fiesta|party/],
  ['host', /anfitri|host|contact|teléfono|telefono|phone|whatsapp|llamar|call|gastgeber/],
  ['hello', /^(hola|hi|hello|hey|olá|ola|hallo|ciao|bonjour|buenas)\b/],
];

function detectLang(text) {
  const t = text.toLowerCase();
  for (const [lang, re] of Object.entries(LANG_HINTS)) if (re.test(t)) return lang;
  return 'es';
}

export function demoReply(cabana, text) {
  const t = text.toLowerCase();
  const lang = detectLang(t);
  const l = L[lang];
  const topic = TOPICS.find(([, re]) => re.test(t))?.[0];
  const a = cabana.anfitrion || {};
  const list = (arr) => arr.map((x) => `- **${x.nombre}** — ${[x.tipo, x.distancia, x.duracion].filter(Boolean).join(' · ')}`).join('\n');

  switch (topic) {
    case 'wifi': return `**${l.wifi}**\n- ${l.red}: **${cabana.wifi.red}**\n- ${l.clave}: **${cabana.wifi.clave}**\n\n${cabana.wifi.nota || ''}`;
    case 'stove': return `${l.stove}\n${cabana.estufa.pasos.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\n**${l.safety}:** ${cabana.estufa.seguridad}`;
    case 'checkout': return `**${l.out}: ${cabana.checkout.hora}**\n${cabana.checkout.instrucciones}`;
    case 'checkin': return `**${l.in}: ${cabana.checkin.hora}**\n${cabana.checkin.instrucciones}`;
    case 'emergency': return `**${l.emerg}:** ${cabana.otros?.emergencias || ''}\n\n${l.host}: **${a.nombre}** ${a.telefono}`;
    case 'eat': return `${l.eat}\n${list(cabana.restaurantes || [])}`;
    case 'tours': return `${l.tours}\n${list(cabana.tours || [])}`;
    case 'rules': return `${l.rules}\n${(cabana.reglas || []).map((r) => `- ${r}`).join('\n')}`;
    case 'host': return `${l.host}: **${a.nombre}**\n- ${a.telefono}\n- ${a.email || ''}\n\n${a.horario || ''}`;
    case 'tub': { const e = (cabana.equipos || []).find((x) => /tinaja/i.test(x.nombre)); const x = (cabana.extras || []).find((x) => /tinaja/i.test(x.nombre));
      return `**${e?.nombre || 'Tinaja'}**${x ? ` — ${x.precio}` : ''}\n${(e?.pasos || []).map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\n${e?.nota || ''}`; }
    case 'extras': return (cabana.extras || []).map((x) => `- **${x.nombre}** — ${x.precio}: ${x.detalle}`).join('\n') + `\n\nWhatsApp: **${a.nombre}** ${a.telefono}`;
    case 'arrive': return (cabana.como_llegar?.opciones || []).map((o) => `- **${o.desde}** (${o.tiempo}): ${o.detalle}`).join('\n') + `\n\n${cabana.como_llegar?.referencia || ''}`;
    case 'transport': { const tp = cabana.transporte_publico || {}; const t2 = text.toLowerCase();
      const pick = (tp.lineas || []).filter((x) => t2.split(/[^a-záéíóúñü]+/).some((w) => w.length > 4 && (x.nombre + ' ' + x.para).toLowerCase().includes(w)));
      const ls = pick.length ? pick : (tp.lineas || []);
      return ls.map((x) => `**${x.nombre}**\n- ${x.donde}\n- ${x.frecuencia}\n- ${x.precio}\n- ${x.consejo}`).join('\n\n') + (tp.aviso ? `\n\n${tp.aviso}` : ''); }
    case 'nearby': return (cabana.servicios_cercanos || []).map((s) => `- **${s.nombre}** — ${s.distancia} · ${s.horario}`).join('\n');
    case 'plans': { const P = cabana.panoramas || {}; const f = (k) => (P[k] || []).map((p) => `- **${p.nombre}**: ${p.nota}`).join('\n');
      return `**${l.rain}**\n${f('lluvia')}\n\n**${l.sun}**\n${f('sol')}`; }
    case 'power': return (cabana.imprevistos || []).map((x) => `- **${x.situacion}**: ${x.que_hacer}`).join('\n') + `\n\n**${l.emerg}:** 131 · 132 · 133`;
    case 'device': { const t2 = text.toLowerCase(); const e = (cabana.equipos || []).find((x) => (/tele|tv|netflix/.test(t2) && /tv/i.test(x.nombre)) || (/parrilla|grill|asado|bbq|barbecue/.test(t2) && /parrilla/i.test(x.nombre)) || (/calef|water|wasser|água|acqua|eau/.test(t2) && /calef/i.test(x.nombre))) || cabana.equipos?.[0];
      return `**${e.nombre}**\n${e.pasos.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\n${e.nota || ''}`; }
    case 'hello': return l.hello;
    default: return `${l.unknown} **${a.nombre}** (${a.telefono}).`;
  }
}
