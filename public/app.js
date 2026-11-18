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
    chips: ['Clave del wifi', '¿Cómo prendo la estufa?', '¿Qué hacemos si llueve?', '¿Cómo pido la tinaja?', '¿Dónde comer esta noche?'],
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
    chips: ['Wifi password', 'How do I light the stove?', 'What to do if it rains?', 'How do I book the hot tub?', 'Where to eat tonight?'],
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

// Textos de las secciones nuevas (se suman a T)
const T2 = {
  es: {
    tabs: { moverse: 'Moverse', llegar: 'Llegar', extras: 'Extras', hoy: 'Hoy', cerca: 'Cerca', salida: 'Salida' },
    titles: { moverse: 'Moverse en <em>bus y colectivo</em>', llegar: 'Cómo <em>llegar</em>', extras: 'Servicios <em>extra</em>', hoy: 'Hoy en <em>Puerto Varas</em>', cerca: 'Lo que hay <em>cerca</em>', salida: 'Antes de <em>irte</em>' },
    tWhere: 'Dónde se toma', tFreq: 'Frecuencia', tFare: 'Precio', tGoes: 'Va a', tTips: 'Consejos', whereIs: 'Dónde está cada cosa', howTo: 'Cómo funciona', order: 'Pedir', orderNote: 'Se piden por WhatsApp a tu anfitriona.',
    ifRain: 'Si llueve', ifSun: 'Si hay sol', suggested: 'Recomendado hoy', maps: 'Abrir en Maps', reference: 'Referencia',
    review: 'Déjanos una reseña', report: 'Reportar un problema', reportNote: 'Escribe qué pasó y adjunta una foto en WhatsApp.', incidents: 'Si pasa algo',
    example: 'ejemplo', feels: 'Ahora', checked: 'listo',
    wx: { clear: 'Despejado', partly: 'Parcial', cloudy: 'Nublado', fog: 'Neblina', drizzle: 'Llovizna', rain: 'Lluvia', snow: 'Nieve', storm: 'Tormenta' },
    kinds: { supermercado: 'Supermercado', almacen: 'Almacén', farmacia: 'Farmacia', bencinera: 'Bencinera', cajero: 'Cajero' },
  },
  en: {
    tabs: { moverse: 'Get around', llegar: 'Getting here', extras: 'Extras', hoy: 'Today', cerca: 'Nearby', salida: 'Check-out' },
    titles: { moverse: 'Getting around by <em>bus</em>', llegar: 'Getting <em>here</em>', extras: 'Extra <em>services</em>', hoy: 'Today in <em>Puerto Varas</em>', cerca: "What's <em>nearby</em>", salida: 'Before you <em>leave</em>' },
    tWhere: 'Where to catch it', tFreq: 'Frequency', tFare: 'Fare', tGoes: 'Goes to', tTips: 'Tips', whereIs: 'Where things are', howTo: 'How it works', order: 'Order', orderNote: 'Ordered via WhatsApp with your host.',
    ifRain: 'If it rains', ifSun: 'If it’s sunny', suggested: 'Suggested today', maps: 'Open in Maps', reference: 'Landmark',
    review: 'Leave us a review', report: 'Report a problem', reportNote: 'Tell us what happened and attach a photo on WhatsApp.', incidents: 'If something happens',
    example: 'example', feels: 'Now', checked: 'done',
    wx: { clear: 'Clear', partly: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', snow: 'Snow', storm: 'Storm' },
    kinds: { supermercado: 'Supermarket', almacen: 'Corner shop', farmacia: 'Pharmacy', bencinera: 'Gas station', cajero: 'ATM' },
  },
  pt: {
    tabs: { moverse: 'Transporte', llegar: 'Chegar', extras: 'Extras', hoy: 'Hoje', cerca: 'Perto', salida: 'Saída' },
    titles: { moverse: 'Ônibus e <em>colectivos</em>', llegar: 'Como <em>chegar</em>', extras: 'Serviços <em>extras</em>', hoy: 'Hoje em <em>Puerto Varas</em>', cerca: 'O que há <em>perto</em>', salida: 'Antes de <em>partir</em>' },
    tWhere: 'Onde pegar', tFreq: 'Frequência', tFare: 'Preço', tGoes: 'Vai para', tTips: 'Dicas', whereIs: 'Onde fica cada coisa', howTo: 'Como funciona', order: 'Pedir', orderNote: 'Peça pelo WhatsApp à sua anfitriã.',
    ifRain: 'Se chover', ifSun: 'Se fizer sol', suggested: 'Recomendado hoje', maps: 'Abrir no Maps', reference: 'Referência',
    review: 'Deixe uma avaliação', report: 'Relatar um problema', reportNote: 'Conte o que aconteceu e envie uma foto no WhatsApp.', incidents: 'Se algo acontecer',
    example: 'exemplo', feels: 'Agora', checked: 'feito',
    wx: { clear: 'Céu limpo', partly: 'Parcial', cloudy: 'Nublado', fog: 'Neblina', drizzle: 'Garoa', rain: 'Chuva', snow: 'Neve', storm: 'Tempestade' },
    kinds: { supermercado: 'Supermercado', almacen: 'Mercearia', farmacia: 'Farmácia', bencinera: 'Posto', cajero: 'Caixa eletrônico' },
  },
  de: {
    tabs: { moverse: 'Unterwegs', llegar: 'Anreise', extras: 'Extras', hoy: 'Heute', cerca: 'In der Nähe', salida: 'Abreise' },
    titles: { moverse: 'Mit <em>Bus und Colectivo</em>', llegar: 'Die <em>Anreise</em>', extras: 'Zusätzliche <em>Services</em>', hoy: 'Heute in <em>Puerto Varas</em>', cerca: 'In der <em>Nähe</em>', salida: 'Vor der <em>Abreise</em>' },
    tWhere: 'Abfahrt', tFreq: 'Takt', tFare: 'Preis', tGoes: 'Fährt nach', tTips: 'Tipps', whereIs: 'Wo was zu finden ist', howTo: 'So funktioniert’s', order: 'Bestellen', orderNote: 'Per WhatsApp bei Ihrer Gastgeberin bestellen.',
    ifRain: 'Bei Regen', ifSun: 'Bei Sonne', suggested: 'Heute empfohlen', maps: 'In Maps öffnen', reference: 'Orientierung',
    review: 'Bewertung schreiben', report: 'Problem melden', reportNote: 'Beschreiben Sie das Problem und senden Sie ein Foto per WhatsApp.', incidents: 'Falls etwas passiert',
    example: 'Beispiel', feels: 'Jetzt', checked: 'erledigt',
    wx: { clear: 'Klar', partly: 'Teils bewölkt', cloudy: 'Bewölkt', fog: 'Nebel', drizzle: 'Niesel', rain: 'Regen', snow: 'Schnee', storm: 'Gewitter' },
    kinds: { supermercado: 'Supermarkt', almacen: 'Laden', farmacia: 'Apotheke', bencinera: 'Tankstelle', cajero: 'Geldautomat' },
  },
  it: {
    tabs: { moverse: 'Spostarsi', llegar: 'Arrivare', extras: 'Extra', hoy: 'Oggi', cerca: 'Vicino', salida: 'Partenza' },
    titles: { moverse: 'Muoversi in <em>autobus</em>', llegar: 'Come <em>arrivare</em>', extras: 'Servizi <em>extra</em>', hoy: 'Oggi a <em>Puerto Varas</em>', cerca: 'Cosa c’è <em>vicino</em>', salida: 'Prima di <em>partire</em>' },
    tWhere: 'Dove si prende', tFreq: 'Frequenza', tFare: 'Prezzo', tGoes: 'Va a', tTips: 'Consigli', whereIs: 'Dove trovare le cose', howTo: 'Come funziona', order: 'Ordina', orderNote: 'Si ordinano su WhatsApp alla tua host.',
    ifRain: 'Se piove', ifSun: 'Se c’è sole', suggested: 'Consigliato oggi', maps: 'Apri in Maps', reference: 'Riferimento',
    review: 'Lasciaci una recensione', report: 'Segnala un problema', reportNote: 'Racconta cosa è successo e allega una foto su WhatsApp.', incidents: 'Se succede qualcosa',
    example: 'esempio', feels: 'Ora', checked: 'fatto',
    wx: { clear: 'Sereno', partly: 'Parz. nuvoloso', cloudy: 'Nuvoloso', fog: 'Nebbia', drizzle: 'Pioggerella', rain: 'Pioggia', snow: 'Neve', storm: 'Temporale' },
    kinds: { supermercado: 'Supermercato', almacen: 'Alimentari', farmacia: 'Farmacia', bencinera: 'Benzinaio', cajero: 'Bancomat' },
  },
  fr: {
    tabs: { moverse: 'Se déplacer', llegar: 'Accès', extras: 'Extras', hoy: 'Aujourd’hui', cerca: 'À proximité', salida: 'Départ' },
    titles: { moverse: 'Se déplacer en <em>bus</em>', llegar: 'Comment <em>venir</em>', extras: 'Services <em>en plus</em>', hoy: 'Aujourd’hui à <em>Puerto Varas</em>', cerca: 'À <em>proximité</em>', salida: 'Avant de <em>partir</em>' },
    tWhere: 'Où le prendre', tFreq: 'Fréquence', tFare: 'Prix', tGoes: 'Dessert', tTips: 'Conseils', whereIs: 'Où trouver les choses', howTo: 'Mode d’emploi', order: 'Commander', orderNote: 'À commander par WhatsApp auprès de votre hôte.',
    ifRain: 'S’il pleut', ifSun: 'S’il fait beau', suggested: 'Conseillé aujourd’hui', maps: 'Ouvrir dans Maps', reference: 'Repère',
    review: 'Laissez-nous un avis', report: 'Signaler un problème', reportNote: 'Décrivez le problème et joignez une photo sur WhatsApp.', incidents: 'En cas d’imprévu',
    example: 'exemple', feels: 'Maintenant', checked: 'fait',
    wx: { clear: 'Dégagé', partly: 'Éclaircies', cloudy: 'Nuageux', fog: 'Brouillard', drizzle: 'Bruine', rain: 'Pluie', snow: 'Neige', storm: 'Orage' },
    kinds: { supermercado: 'Supermarché', almacen: 'Épicerie', farmacia: 'Pharmacie', bencinera: 'Station-service', cajero: 'Distributeur' },
  },
};
for (const l of Object.keys(T2)) {
  const { tabs, titles, ...rest } = T2[l];
  Object.assign(T[l].tabs, tabs);
  Object.assign(T[l].titles, titles);
  Object.assign(T[l], rest);
}

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
  tub: '<path d="M3 11h18v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z"/><path d="M8 8c0-1 1-1 1-2s-1-1-1-2M12 8c0-1 1-1 1-2s-1-1-1-2M16 8c0-1 1-1 1-2s-1-1-1-2"/>',
  grill: '<path d="M4 9h16a8 8 0 0 1-16 0z"/><path d="M8 17l-2 4M16 17l2 4M9 5c0-1 1-1 1-2M14 5c0-1 1-1 1-2"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3c0 1 1 1 1 2M12 3c0 1 1 1 1 2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  plane: '<path d="M10.5 20l1.5-6-5 1.5L5 18l-1-1 2-3-3-1.5L4 11l4 .5L12 4c.8-.8 2.2-.8 2.5.5L13 9l5 1 2-2 1 1-1.5 3 1.5 3-1 1-2-2-5 1-.5 4-2 2z"/>',
  bus: '<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 11h14M8 21v-3M16 21v-3"/><circle cx="8.5" cy="14.5" r=".6" fill="currentColor"/><circle cx="15.5" cy="14.5" r=".6" fill="currentColor"/>',
  cart: '<path d="M3 4h2l2.5 11h11L21 7H6.2"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
  shop: '<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M10 20v-6h4v6"/>',
  plus: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
  fuel: '<path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h14M5 10h10M15 8l3 3v6a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
  atm: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z"/>',
  rain: '<path d="M7 15a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 6.5 4.3 4.3 0 0 1 17.5 15z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
  snow: '<path d="M7 15a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 6.5 4.3 4.3 0 0 1 17.5 15z"/><path d="M8 19v.1M12 20v.1M16 19v.1"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>',
  tool: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
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
  if (cabana) { render(); renderInstall(); }
}

function row(icon, title, text, chips = []) {
  return `<div class="row"><span class="ri">${ico(icon)}</span><div class="rt">
    <strong>${esc(title)}</strong>${text ? clampText(text, 120) : ''}
    ${chips.length ? `<div class="meta">${chips.filter(Boolean).map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>` : ''}
  </div></div>`;
}

const mapsUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const waUrl = (num, text) => `https://wa.me/${encodeURIComponent(num)}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Clima en vivo (Open-Meteo, gratis y sin clave)
let weather = null;
const WX = (code) => code <= 1 ? ['clear', 'sun'] : code <= 2 ? ['partly', 'cloud'] : code === 3 ? ['cloudy', 'cloud']
  : code <= 48 ? ['fog', 'cloud'] : code <= 57 ? ['drizzle', 'rain'] : code <= 67 ? ['rain', 'rain']
  : code <= 77 ? ['snow', 'snow'] : code <= 82 ? ['rain', 'rain'] : code <= 86 ? ['snow', 'snow'] : ['storm', 'rain'];
const isWet = (code) => code >= 45;

async function loadWeather() {
  const k = cabana.coordenadas;
  if (!k) return;
  try {
    const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${k.lat}&longitude=${k.lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset&timezone=auto&forecast_days=4`);
    if (!r.ok) throw new Error();
    weather = await r.json();
  } catch { weather = null; }
  if (cabana) render();
}

function weatherCard() {
  const t = T[lang];
  if (!weather?.current) return '';
  const [cond, icon] = WX(weather.current.weather_code);
  const days = (weather.daily?.time || []).slice(1, 4).map((d, i) => {
    const code = weather.daily.weather_code[i + 1];
    const name = new Intl.DateTimeFormat(lang, { weekday: 'short' }).format(new Date(d + 'T12:00'));
    return `<div class="wx-day"><span>${esc(name)}</span>${ico(WX(code)[1])}<b>${Math.round(weather.daily.temperature_2m_max[i + 1])}°</b><small>${Math.round(weather.daily.temperature_2m_min[i + 1])}°</small></div>`;
  }).join('');
  return `<div class="wx">
    <div class="wx-now"><span class="wx-anim ${icon}">${ico(icon)}</span><div><strong>${Math.round(weather.current.temperature_2m)}°</strong><span>${t.wx[cond]}${weather.ejemplo ? ` · ${t.example}` : ''}</span>${weather.daily?.sunset?.[0] ? `<span class="wx-sun">${ico('sunset')}${t.sunset} ${weather.daily.sunset[0].slice(11, 16)}</span>` : ''}</div></div>
    <div class="wx-days">${days}</div>
  </div>`;
}

// ── Apartados: cada uno es una página propia (#llegar, #casa, …) ──
const T3 = {
  es: { restaurants: 'Restaurantes', tours: 'Tours y paseos', need: '¿Qué necesitas?', back: 'Inicio', see: 'Ver',
    tabs: { llegar: 'Llegada', comer: 'Comer y comprar', salida: 'Tu salida', moverse: 'Moverse', explorar: 'Explorar' },
    titles: { comer: 'Comer y <em>comprar</em>', explorar: 'Qué <em>explorar</em>' },
    tileDesc: { llegar: 'Aeropuerto, bus, auto y check-in', casa: 'Tinaja, TV, estufa y reglas', extras: 'Tinaja, desayuno, transfer…', explorar: 'Clima, panoramas y tours', comer: 'Restaurantes y almacenes', moverse: 'Buses, minibuses y colectivos', salida: 'Check-out y reseñas', ayuda: 'Tu anfitriona y emergencias' } },
  en: { restaurants: 'Restaurants', tours: 'Tours & trips', need: 'What do you need?', back: 'Home', see: 'Open',
    tabs: { llegar: 'Arrival', comer: 'Eat & shop', salida: 'Check-out', moverse: 'Get around', explorar: 'Explore' },
    titles: { comer: 'Eat & <em>shop</em>', explorar: 'What to <em>explore</em>' },
    tileDesc: { llegar: 'Airport, bus, car and check-in', casa: 'Hot tub, TV, stove and rules', extras: 'Hot tub, breakfast, transfer…', explorar: 'Weather, ideas and tours', comer: 'Restaurants and shops', moverse: 'Buses, minibuses and colectivos', salida: 'Check-out and reviews', ayuda: 'Your host and emergencies' } },
  pt: { restaurants: 'Restaurantes', tours: 'Passeios', need: 'Do que você precisa?', back: 'Início', see: 'Ver',
    tabs: { llegar: 'Chegada', comer: 'Comer e comprar', salida: 'Sua saída', moverse: 'Transporte', explorar: 'Explorar' },
    titles: { comer: 'Comer e <em>comprar</em>', explorar: 'O que <em>explorar</em>' },
    tileDesc: { llegar: 'Aeroporto, ônibus, carro e check-in', casa: 'Ofurô, TV, lareira e regras', extras: 'Ofurô, café da manhã, transfer…', explorar: 'Clima, passeios e tours', comer: 'Restaurantes e mercados', moverse: 'Ônibus, vans e colectivos', salida: 'Check-out e avaliações', ayuda: 'Sua anfitriã e emergências' } },
  de: { restaurants: 'Restaurants', tours: 'Touren & Ausflüge', need: 'Was brauchen Sie?', back: 'Start', see: 'Öffnen',
    tabs: { llegar: 'Ankunft', comer: 'Essen & Einkaufen', salida: 'Abreise', moverse: 'Unterwegs', explorar: 'Entdecken' },
    titles: { comer: 'Essen & <em>Einkaufen</em>', explorar: 'Was es zu <em>entdecken</em> gibt' },
    tileDesc: { llegar: 'Flughafen, Bus, Auto, Check-in', casa: 'Badefass, TV, Ofen, Regeln', extras: 'Badefass, Frühstück, Transfer…', explorar: 'Wetter, Ideen und Touren', comer: 'Restaurants und Läden', moverse: 'Busse und Colectivos', salida: 'Check-out und Bewertungen', ayuda: 'Gastgeberin und Notfälle' } },
  it: { restaurants: 'Ristoranti', tours: 'Tour ed escursioni', need: 'Di cosa hai bisogno?', back: 'Home', see: 'Apri',
    tabs: { llegar: 'Arrivo', comer: 'Mangiare e spesa', salida: 'Partenza', moverse: 'Spostarsi', explorar: 'Esplorare' },
    titles: { comer: 'Mangiare e <em>spesa</em>', explorar: 'Cosa <em>esplorare</em>' },
    tileDesc: { llegar: 'Aeroporto, bus, auto e check-in', casa: 'Vasca, TV, stufa e regole', extras: 'Vasca, colazione, transfer…', explorar: 'Meteo, idee e tour', comer: 'Ristoranti e negozi', moverse: 'Autobus e colectivos', salida: 'Check-out e recensioni', ayuda: 'La tua host ed emergenze' } },
  fr: { restaurants: 'Restaurants', tours: 'Excursions', need: 'De quoi avez-vous besoin ?', back: 'Accueil', see: 'Ouvrir',
    tabs: { llegar: 'Arrivée', comer: 'Manger & courses', salida: 'Départ', moverse: 'Se déplacer', explorar: 'Explorer' },
    titles: { comer: 'Manger & <em>courses</em>', explorar: 'Que <em>explorer</em>' },
    tileDesc: { llegar: 'Aéroport, bus, voiture, check-in', casa: 'Bain nordique, TV, poêle, règles', extras: 'Bain nordique, petit-déj, transfert…', explorar: 'Météo, idées et excursions', comer: 'Restaurants et commerces', moverse: 'Bus et colectivos', salida: 'Check-out et avis', ayuda: 'Votre hôte et urgences' } },
};
for (const l of Object.keys(T3)) {
  const { tabs, titles, ...rest } = T3[l];
  Object.assign(T[l].tabs, tabs); Object.assign(T[l].titles, titles); Object.assign(T[l], rest);
}

// ── Textos de los detalles visuales ──
const T4 = {
  es: { steps: 'pasos', more: 'Ver más', less: 'Ver menos', greet: ['Buenos días', 'Buenas tardes', 'Buenas noches'], sunset: 'Atardecer', picks: 'Hoy te recomendamos', special: 'Para hacerlo especial', qr: 'QR', qrTitle: 'Comparte el wifi', qrHint: 'Apunta la cámara de otro teléfono a este código para conectarse.', of: 'de', ready: 'listo', howCatch: 'Cómo tomarlo', allDone: '¡Todo listo! Buen viaje.' },
  en: { steps: 'steps', more: 'More', less: 'Less', greet: ['Good morning', 'Good afternoon', 'Good evening'], sunset: 'Sunset', picks: 'Our picks for today', special: 'Make it special', qr: 'QR', qrTitle: 'Share the wifi', qrHint: 'Point another phone’s camera at this code to connect.', of: 'of', ready: 'done', howCatch: 'How to catch it', allDone: 'All set! Safe travels.' },
  pt: { steps: 'passos', more: 'Ver mais', less: 'Ver menos', greet: ['Bom dia', 'Boa tarde', 'Boa noite'], sunset: 'Pôr do sol', picks: 'Recomendados de hoje', special: 'Para tornar especial', qr: 'QR', qrTitle: 'Compartilhe o wifi', qrHint: 'Aponte a câmera de outro celular para este código para conectar.', of: 'de', ready: 'feito', howCatch: 'Como pegar', allDone: 'Tudo pronto! Boa viagem.' },
  de: { steps: 'Schritte', more: 'Mehr', less: 'Weniger', greet: ['Guten Morgen', 'Guten Tag', 'Guten Abend'], sunset: 'Sonnenuntergang', picks: 'Heute empfohlen', special: 'Für besondere Momente', qr: 'QR', qrTitle: 'WLAN teilen', qrHint: 'Mit der Kamera eines anderen Handys scannen, um sich zu verbinden.', of: 'von', ready: 'erledigt', howCatch: 'So steigen Sie ein', allDone: 'Alles erledigt! Gute Reise.' },
  it: { steps: 'passaggi', more: 'Altro', less: 'Meno', greet: ['Buongiorno', 'Buon pomeriggio', 'Buonasera'], sunset: 'Tramonto', picks: 'Consigliati oggi', special: 'Per renderlo speciale', qr: 'QR', qrTitle: 'Condividi il wifi', qrHint: 'Inquadra questo codice con la fotocamera di un altro telefono per connetterti.', of: 'di', ready: 'fatto', howCatch: 'Come prenderlo', allDone: 'Tutto pronto! Buon viaggio.' },
  fr: { steps: 'étapes', more: 'Plus', less: 'Moins', greet: ['Bonjour', 'Bon après-midi', 'Bonsoir'], sunset: 'Coucher du soleil', picks: 'Nos idées du jour', special: 'Pour un moment spécial', qr: 'QR', qrTitle: 'Partager le wifi', qrHint: 'Visez ce code avec l’appareil photo d’un autre téléphone pour vous connecter.', of: 'sur', ready: 'fait', howCatch: 'Comment le prendre', allDone: 'Tout est prêt ! Bon voyage.' },
};
for (const l of Object.keys(T4)) Object.assign(T[l], T4[l]);

Object.assign(I, {
  bed: '<path d="M3 18V7M3 13h18v5M21 18v-3a3 3 0 0 0-3-3h-7v1"/><circle cx="7" cy="10.5" r="1.8"/>',
  paw: '<circle cx="7" cy="9" r="1.6"/><circle cx="11" cy="6" r="1.6"/><circle cx="15" cy="6.5" r="1.6"/><circle cx="18" cy="10" r="1.6"/><path d="M8 17c0-3 2-5 4.5-5s4.5 2 4.5 5c0 1.5-1.2 2.5-2.6 2.2-1.2-.3-2.6-.3-3.8 0C9.2 19.5 8 18.5 8 17z"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3 3 0 0 1 0 6M21 20c0-2.6-1.6-4.8-4-5.6"/>',
  nosmoke: '<path d="M3 15h12v3H3zM18 15v3M21 15v3M4 4l16 16"/><path d="M18 11c0-2-1.5-2.5-1.5-4"/>',
  recycle: '<path d="M7 19H4.5a1.5 1.5 0 0 1-1.3-2.2L5.5 13M12 5l1.3-2.2a1.5 1.5 0 0 1 2.6 0L18.5 7M17 19h2.5a1.5 1.5 0 0 0 1.3-2.2L18.5 13"/><path d="M9 21l-2-2 2-2M10 6l2-1 1 2.3M20 11l-1.5 2-2.3-.6"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 14h3v3h-3zM20 14v.1M14 20.5h.1M17.5 20.5H21V17"/>',
  sunset: '<path d="M3 18h18M6 14a6 6 0 0 1 12 0M12 3v4M5 7l1.5 1.5M19 7l-1.5 1.5M8 21h8"/>',
  extinguisher: '<path d="M9 8h6v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/><path d="M12 8V5M9 5h6M15 5l3-2"/>',
  flash: '<path d="M8 3h8l-1 6H9z"/><path d="M9 9v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9"/>',
  med: '<rect x="3" y="6" width="18" height="14" rx="2.5"/><path d="M9 6V4h6v2M12 10v6M9 13h6"/>',
  chevd: '<path d="M6 9l6 6 6-6"/>',
  chev: '<path d="M9 5l7 7-7 7"/>',
});

// Ícono según palabras clave (reglas y "dónde está cada cosa")
const KEYICON = [
  [/fum|smok|rauch|fumo/i, 'nosmoke'], [/mascota|pet|perro|gato/i, 'paw'], [/silencio|ruido|noise|23:00|22:00/i, 'moon'],
  [/huésped|personas|fiesta|evento|guests/i, 'users'], [/recicla|vidrio|plástico|basura/i, 'recycle'],
  [/sábana|frazada|toalla|cama|almohada/i, 'bed'], [/botiquín|remedio|primeros auxilios/i, 'med'], [/linterna|vela/i, 'flash'],
  [/extintor/i, 'extinguisher'], [/tablero|eléctric|automático|luz/i, 'bolt'], [/llave/i, 'key'], [/leña/i, 'wood'],
];
const iconFor = (text, fallback = 'info') => (KEYICON.find(([re]) => re.test(text)) || [, fallback])[1];

// Arte de color para las tarjetas (sin fotos)
const ARTS = [
  ['#1f4d5c', '#7fb0b8'], ['#2b3a2e', '#8fae7e'], ['#3b2a35', '#d39a7a'], ['#22303d', '#e2b48c'], ['#2c3e45', '#c9d3d6'],
];
const art = (s) => { let h = 0; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return ARTS[h % ARTS.length]; };

// Texto corto: primera oración
const firstSentence = (s = '') => (String(s).match(/^.*?[.;](\s|$)/) || [s])[0].replace(/[.;]\s*$/, '');

// ═══ Detalles premium ═══
const AMEN = {
  es: { wifi: 'Wifi rápido', estufa: 'Estufa a leña', tinaja: 'Tinaja caliente', parrilla: 'Parrilla', vista: 'Vista al volcán', cocina: 'Cocina equipada', tv: 'Smart TV', estacionamiento: 'Estacionamiento', calefon: 'Agua caliente', mascotas: 'Acepta mascotas', ropa_cama: 'Ropa de cama', botiquin: 'Botiquín', lavadora: 'Lavadora', terraza: 'Terraza', kayak: 'Kayak', cuna: 'Cuna' },
  en: { wifi: 'Fast wifi', estufa: 'Wood stove', tinaja: 'Hot tub', parrilla: 'BBQ grill', vista: 'Volcano view', cocina: 'Full kitchen', tv: 'Smart TV', estacionamiento: 'Parking', calefon: 'Hot water', mascotas: 'Pets allowed', ropa_cama: 'Bed linen', botiquin: 'First-aid kit', lavadora: 'Washer', terraza: 'Terrace', kayak: 'Kayak', cuna: 'Crib' },
  pt: { wifi: 'Wifi rápido', estufa: 'Lareira a lenha', tinaja: 'Ofurô', parrilla: 'Churrasqueira', vista: 'Vista do vulcão', cocina: 'Cozinha equipada', tv: 'Smart TV', estacionamiento: 'Estacionamento', calefon: 'Água quente', mascotas: 'Aceita pets', ropa_cama: 'Roupa de cama', botiquin: 'Kit de primeiros socorros', lavadora: 'Máquina de lavar', terraza: 'Terraço', kayak: 'Caiaque', cuna: 'Berço' },
  de: { wifi: 'Schnelles WLAN', estufa: 'Holzofen', tinaja: 'Badefass', parrilla: 'Grill', vista: 'Vulkanblick', cocina: 'Voll ausgestattete Küche', tv: 'Smart-TV', estacionamiento: 'Parkplatz', calefon: 'Warmwasser', mascotas: 'Haustiere erlaubt', ropa_cama: 'Bettwäsche', botiquin: 'Erste-Hilfe-Set', lavadora: 'Waschmaschine', terraza: 'Terrasse', kayak: 'Kajak', cuna: 'Babybett' },
  it: { wifi: 'Wifi veloce', estufa: 'Stufa a legna', tinaja: 'Vasca calda', parrilla: 'Barbecue', vista: 'Vista sul vulcano', cocina: 'Cucina attrezzata', tv: 'Smart TV', estacionamiento: 'Parcheggio', calefon: 'Acqua calda', mascotas: 'Animali ammessi', ropa_cama: 'Biancheria', botiquin: 'Kit di pronto soccorso', lavadora: 'Lavatrice', terraza: 'Terrazza', kayak: 'Kayak', cuna: 'Culla' },
  fr: { wifi: 'Wifi rapide', estufa: 'Poêle à bois', tinaja: 'Bain nordique', parrilla: 'Barbecue', vista: 'Vue sur le volcan', cocina: 'Cuisine équipée', tv: 'Smart TV', estacionamiento: 'Parking', calefon: 'Eau chaude', mascotas: 'Animaux acceptés', ropa_cama: 'Linge de lit', botiquin: 'Trousse de secours', lavadora: 'Lave-linge', terraza: 'Terrasse', kayak: 'Kayak', cuna: 'Lit bébé' },
};
const AMEN_ICON = { wifi: 'wifi', estufa: 'flame', tinaja: 'tub', parrilla: 'grill', vista: 'mountain', cocina: 'pot', tv: 'tv', estacionamiento: 'car', calefon: 'drop', mascotas: 'paw', ropa_cama: 'bed', botiquin: 'med', lavadora: 'washer', terraza: 'sun', kayak: 'wave', cuna: 'users' };

const T5 = {
  es: { hi: 'Hola', yourStay: 'Tu estadía', nights: (n) => `${n} ${n === 1 ? 'noche' : 'noches'}`, before: (d) => (d === 1 ? 'Llegas mañana' : `Faltan ${d} días`), arriveToday: 'Hoy llegas', night: (i, n) => `Noche ${i} de ${n}`, lastDay: 'Hoy es tu salida', after: 'Gracias por tu visita',
    access: 'Código de acceso', reveal: 'Toca para ver', accessFrom: (d) => `Aparecerá el ${d}`, from: (n) => `Un mensaje de ${n}`, read: 'Leer completo', close: 'Cerrar', speaks: 'Habla', offers: 'Lo que ofrece la cabaña', seeAll: (n) => `Ver las ${n}`, seeLess: 'Ver menos', gallery: 'Galería',
    rateQ: '¿Cómo estuvo tu estadía?', rateHigh: '¡Gracias! Una reseña nos ayuda muchísimo.', rateLow: (h) => `Lamentamos que no haya sido perfecto. Cuéntale a ${h} qué podemos mejorar.`, tellHost: (h) => `Escribir a ${h}`,
    install: 'Instalar en tu teléfono', installed: 'Disponible sin conexión', iosHint: 'En Safari toca Compartir ⬆︎ y luego “Agregar a inicio”.' },
  en: { hi: 'Hello', yourStay: 'Your stay', nights: (n) => `${n} ${n === 1 ? 'night' : 'nights'}`, before: (d) => (d === 1 ? 'You arrive tomorrow' : `${d} days to go`), arriveToday: 'You arrive today', night: (i, n) => `Night ${i} of ${n}`, lastDay: 'Check-out day', after: 'Thank you for staying',
    access: 'Door code', reveal: 'Tap to reveal', accessFrom: (d) => `Available on ${d}`, from: (n) => `A note from ${n}`, read: 'Read more', close: 'Close', speaks: 'Speaks', offers: 'What this place offers', seeAll: (n) => `Show all ${n}`, seeLess: 'Show less', gallery: 'Gallery',
    rateQ: 'How was your stay?', rateHigh: 'Thank you! A review helps us a lot.', rateLow: (h) => `Sorry it wasn’t perfect. Tell ${h} what we can improve.`, tellHost: (h) => `Message ${h}`,
    install: 'Add to your phone', installed: 'Available offline', iosHint: 'In Safari tap Share ⬆︎ then “Add to Home Screen”.' },
  pt: { hi: 'Olá', yourStay: 'Sua estadia', nights: (n) => `${n} ${n === 1 ? 'noite' : 'noites'}`, before: (d) => (d === 1 ? 'Você chega amanhã' : `Faltam ${d} dias`), arriveToday: 'Você chega hoje', night: (i, n) => `Noite ${i} de ${n}`, lastDay: 'Hoje é sua saída', after: 'Obrigado pela visita',
    access: 'Código de acesso', reveal: 'Toque para ver', accessFrom: (d) => `Disponível em ${d}`, from: (n) => `Uma mensagem de ${n}`, read: 'Ler tudo', close: 'Fechar', speaks: 'Fala', offers: 'O que a cabana oferece', seeAll: (n) => `Ver as ${n}`, seeLess: 'Ver menos', gallery: 'Galeria',
    rateQ: 'Como foi sua estadia?', rateHigh: 'Obrigado! Uma avaliação ajuda muito.', rateLow: (h) => `Sentimos que não foi perfeito. Conte a ${h} o que podemos melhorar.`, tellHost: (h) => `Escrever para ${h}`,
    install: 'Instalar no celular', installed: 'Disponível offline', iosHint: 'No Safari toque em Compartilhar ⬆︎ e “Adicionar à Tela de Início”.' },
  de: { hi: 'Hallo', yourStay: 'Ihr Aufenthalt', nights: (n) => `${n} ${n === 1 ? 'Nacht' : 'Nächte'}`, before: (d) => (d === 1 ? 'Anreise morgen' : `Noch ${d} Tage`), arriveToday: 'Anreise heute', night: (i, n) => `Nacht ${i} von ${n}`, lastDay: 'Heute ist Abreise', after: 'Danke für Ihren Besuch',
    access: 'Zugangscode', reveal: 'Antippen zum Anzeigen', accessFrom: (d) => `Verfügbar ab ${d}`, from: (n) => `Eine Nachricht von ${n}`, read: 'Weiterlesen', close: 'Schließen', speaks: 'Spricht', offers: 'Ausstattung', seeAll: (n) => `Alle ${n} anzeigen`, seeLess: 'Weniger', gallery: 'Galerie',
    rateQ: 'Wie war Ihr Aufenthalt?', rateHigh: 'Danke! Eine Bewertung hilft uns sehr.', rateLow: (h) => `Schade, dass es nicht perfekt war. Sagen Sie ${h}, was wir verbessern können.`, tellHost: (h) => `${h} schreiben`,
    install: 'Auf dem Handy installieren', installed: 'Offline verfügbar', iosHint: 'In Safari auf Teilen ⬆︎ und „Zum Home-Bildschirm“ tippen.' },
  it: { hi: 'Ciao', yourStay: 'Il tuo soggiorno', nights: (n) => `${n} ${n === 1 ? 'notte' : 'notti'}`, before: (d) => (d === 1 ? 'Arrivi domani' : `Mancano ${d} giorni`), arriveToday: 'Arrivi oggi', night: (i, n) => `Notte ${i} di ${n}`, lastDay: 'Oggi è la partenza', after: 'Grazie della visita',
    access: 'Codice di accesso', reveal: 'Tocca per vedere', accessFrom: (d) => `Disponibile dal ${d}`, from: (n) => `Un messaggio di ${n}`, read: 'Leggi tutto', close: 'Chiudi', speaks: 'Parla', offers: 'Cosa offre la casetta', seeAll: (n) => `Mostra tutti i ${n}`, seeLess: 'Mostra meno', gallery: 'Galleria',
    rateQ: 'Com’è andato il soggiorno?', rateHigh: 'Grazie! Una recensione ci aiuta tanto.', rateLow: (h) => `Ci dispiace che non sia stato perfetto. Racconta a ${h} cosa migliorare.`, tellHost: (h) => `Scrivi a ${h}`,
    install: 'Installa sul telefono', installed: 'Disponibile offline', iosHint: 'In Safari tocca Condividi ⬆︎ e “Aggiungi a Home”.' },
  fr: { hi: 'Bonjour', yourStay: 'Votre séjour', nights: (n) => `${n} ${n === 1 ? 'nuit' : 'nuits'}`, before: (d) => (d === 1 ? 'Arrivée demain' : `J-${d}`), arriveToday: 'Arrivée aujourd’hui', night: (i, n) => `Nuit ${i} sur ${n}`, lastDay: 'Jour du départ', after: 'Merci de votre visite',
    access: 'Code d’accès', reveal: 'Touchez pour voir', accessFrom: (d) => `Disponible le ${d}`, from: (n) => `Un mot de ${n}`, read: 'Lire la suite', close: 'Fermer', speaks: 'Parle', offers: 'Ce que propose le chalet', seeAll: (n) => `Voir les ${n}`, seeLess: 'Voir moins', gallery: 'Galerie',
    rateQ: 'Comment s’est passé votre séjour ?', rateHigh: 'Merci ! Un avis nous aide beaucoup.', rateLow: (h) => `Désolés que tout n’ait pas été parfait. Dites à ${h} ce que nous pouvons améliorer.`, tellHost: (h) => `Écrire à ${h}`,
    install: 'Installer sur le téléphone', installed: 'Disponible hors ligne', iosHint: 'Dans Safari, touchez Partager ⬆︎ puis « Sur l’écran d’accueil ».' },
};
for (const l of Object.keys(T5)) Object.assign(T[l], T5[l]);

Object.assign(I, {
  mountain: '<path d="M2 20l7-12 4 6 2-3 7 9z"/><path d="M7.5 10.5l1.5 1 1.5-1"/>',
  pot: '<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 10h20M9 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2"/>',
  washer: '<rect x="4" y="3" width="16" height="18" rx="2.5"/><circle cx="12" cy="13" r="4.5"/><path d="M8 6.5h.1M11 6.5h3"/>',
  wave: '<path d="M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 19c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M8 11l4-7 4 7"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  quote: '<path d="M10 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3M20 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3"/>',
  download: '<path d="M12 4v11m-5-5 5 5 5-5M5 20h14"/>',
});

// Portadas topográficas generadas (cuando no hay foto): curvas de nivel únicas para cada nombre
const PALETTES = [['#1d3b45', '#a9cdd1'], ['#283a2d', '#b3c9a3'], ['#3a2c2a', '#e5bb95'], ['#262f3a', '#d9cdb8'], ['#2f3e3d', '#cdd7d6']];
function seedOf(s) { let h = 2166136261; for (const ch of String(s)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { return () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const topoCache = new Map();
function topo(name) {
  if (topoCache.has(name)) return topoCache.get(name);
  const r = rng(seedOf(name)), [bg, line] = PALETTES[seedOf(name) % PALETTES.length];
  let d = '';
  const peaks = 2 + Math.floor(r() * 2);
  for (let p = 0; p < peaks; p++) {
    const cx = 20 + r() * 160, cy = 15 + r() * 110, rings = 6 + Math.floor(r() * 5), step = 7 + r() * 4;
    const ph = [r() * 6.28, r() * 6.28, r() * 6.28], amp = [0.12 + r() * 0.1, 0.06 + r() * 0.06, 0.03];
    for (let k = 1; k <= rings; k++) {
      const pts = [];
      for (let i = 0; i < 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        const rad = k * step * (1 + amp[0] * Math.sin(2 * a + ph[0] + k * 0.15) + amp[1] * Math.sin(3 * a + ph[1]) + amp[2] * Math.sin(5 * a + ph[2]));
        pts.push([cx + rad * Math.cos(a), cy + rad * 0.82 * Math.sin(a)]);
      }
      const mid = (i) => { const a = pts[i % 48], b = pts[(i + 1) % 48]; return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; };
      let s = `M${mid(0).map((v) => v.toFixed(1)).join(' ')}`;
      for (let i = 1; i <= 48; i++) { const c = pts[i % 48], m = mid(i); s += `Q${c[0].toFixed(1)} ${c[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`; }
      d += s + 'Z';
    }
  }
  const svg = `<svg class="topo" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="200" height="140" fill="${bg}"/><path d="${d}" fill="none" stroke="${line}" stroke-opacity=".38" stroke-width=".55"/></svg>`;
  topoCache.set(name, svg);
  return svg;
}
// Foto si existe; si no carga o no hay, la portada topográfica
const cover = (name, foto) => `${topo(name)}${foto ? `<img class="cover-img" src="${esc(foto)}" alt="" loading="lazy" onerror="this.remove()">` : ''}`;

// Fechas de la estadía
const dayNum = (s) => Math.round(new Date(`${s}T12:00:00`).getTime() / 864e5);
const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const fmtDay = (s) => new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short' }).format(new Date(`${s}T12:00:00`));

function stayStatus(g) {
  const t = T[lang], today = dayNum(todayStr()), a = dayNum(g.llegada), b = dayNum(g.salida), n = Math.max(1, b - a);
  if (today < a) return { label: t.before(a - today), phase: 'before' };
  if (today === a) return { label: t.arriveToday, phase: 'during', pct: 0 };
  if (today < b) return { label: t.night(today - a + 1, n), phase: 'during', pct: (today - a) / n };
  if (today === b) return { label: t.lastDay, phase: 'last', pct: 1 };
  return { label: t.after, phase: 'after', pct: 1 };
}

function stayHead() {
  const g = cabana.huesped, t = T[lang];
  if (!g) return '';
  const st = stayStatus(g), n = Math.max(1, dayNum(g.salida) - dayNum(g.llegada));
  return `<div class="stay-head">
      <div><span class="label">${t.yourStay}</span><strong>${fmtDay(g.llegada)} — ${fmtDay(g.salida)}</strong><small>${t.nights(n)}</small></div>
      <span class="stay-pill ${st.phase}">${esc(st.label)}</span>
    </div>
    ${st.pct !== undefined ? `<div class="stay-bar"><i style="width:${Math.round(st.pct * 100)}%"></i></div>` : ''}`;
}

function accessRow() {
  const t = T[lang];
  if (cabana.acceso?.codigo_acceso) {
    return `<div class="stay-access">
      <div class="wifi-icon">${ico('lock')}</div>
      <div class="wifi-text"><span class="label">${t.access}</span>
        <button class="code" id="code-btn" data-code="${esc(cabana.acceso.codigo_acceso)}" aria-live="polite"><span class="dots">• • • •</span><small>${t.reveal}</small></button>
        ${cabana.acceso.nota_acceso ? `<p class="code-note" hidden>${esc(cabana.acceso.nota_acceso)}</p>` : ''}
      </div>
    </div>`;
  }
  if (cabana.acceso_desde) {
    return `<div class="stay-access locked"><div class="wifi-icon">${ico('lock')}</div>
      <div class="wifi-text"><span class="label">${t.access}</span><strong class="soon">${t.accessFrom(fmtDay(cabana.acceso_desde))}</strong></div></div>`;
  }
  return '';
}

function letterHTML() {
  const c = cabana, a = c.anfitrion || {}, t = T[lang];
  if (!c.bienvenida) return '';
  const face = a.foto ? `<img src="${esc(a.foto)}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${esc((a.nombre || '?')[0])}'}))">` : `<span>${esc((a.nombre || '?')[0])}</span>`;
  return `<section class="letter reveal">
    <div class="letter-top"><div class="face">${face}</div><div><span class="label">${t.from(esc(a.nombre || ''))}</span>
      ${a.idiomas?.length ? `<small>${t.speaks} ${esc(a.idiomas.join(' · '))}</small>` : ''}</div></div>
    <p class="letter-txt clamp3" id="letter-txt">${esc(c.bienvenida)}</p>
    <div class="letter-foot"><button class="more" type="button" id="letter-more">${t.read}</button><span class="sign">${esc(a.nombre || '')}</span></div>
  </section>`;
}

let amenOpen = false;
function amenitiesHTML() {
  const list = (cabana.comodidades || []).filter((k) => AMEN.es[k]);
  if (!list.length) return '';
  const t = T[lang], shown = amenOpen ? list : list.slice(0, 6);
  return `<section class="amen reveal"><h2 class="sec-h">${t.offers}</h2>
    <div class="amen-grid">${shown.map((k, i) => `<div class="am" style="--i:${i}">${ico(AMEN_ICON[k] || 'check')}<span>${esc((AMEN[lang] || AMEN.es)[k])}</span></div>`).join('')}</div>
    ${list.length > 6 ? `<button class="ghost-btn" type="button" id="amen-toggle">${amenOpen ? t.seeLess : t.seeAll(list.length)}</button>` : ''}
  </section>`;
}

function galleryHTML() {
  const f = cabana.fotos || [];
  if (f.length < 2) return '';
  return `<section class="strip"><div class="row-head"><h2>${T[lang].gallery}</h2></div>
    <div class="scroller gallery">${f.map((src, i) => `<figure class="ph reveal" style="--i:${i}">${cover(cabana.nombre + i, src)}</figure>`).join('')}</div></section>`;
}

function rateHTML() {
  const c = cabana, a = c.anfitrion || {}, t = T[lang];
  let saved = 0; try { saved = +localStorage.getItem(`rate-${slug}`) || 0; } catch {}
  const out = !saved ? '' : saved >= 4
    ? `<p>${t.rateHigh}</p><div class="review-btns">${(c.resenas?.enlaces || []).map((r) => `<a class="btn light" target="_blank" rel="noopener" href="${esc(r.url)}">${esc(r.plataforma)}</a>`).join('')}</div>`
    : `<p>${t.rateLow(esc(a.nombre || ''))}</p>${a.whatsapp ? `<div class="review-btns"><a class="btn light" target="_blank" rel="noopener" href="${waUrl(a.whatsapp, `Hola ${a.nombre}, mi estadía en ${c.nombre} fue de ${saved}/5. Quería comentarte: `)}">${ico('chat')}${t.tellHost(esc(a.nombre || ''))}</a></div>` : ''}`;
  return `<div class="review"><p class="rq">${t.rateQ}</p>
    <div class="stars-pick" role="radiogroup">${[1, 2, 3, 4, 5].map((n) => `<button type="button" role="radio" aria-checked="${n === saved}" aria-label="${n}" data-rate="${n}" class="${n <= saved ? 'on' : ''}" style="--i:${n}">${ico('star')}</button>`).join('')}</div>
    <div class="rate-out">${out}</div></div>`;
}

document.addEventListener('click', (e) => {
  const code = e.target.closest('#code-btn');
  if (code) { code.classList.add('shown'); code.innerHTML = `<span class="digits">${esc(code.dataset.code.split('').join(' '))}</span>`; document.querySelector('.code-note')?.removeAttribute('hidden'); return; }
  if (e.target.closest('#letter-more')) { const p = $('#letter-txt'); const open = p.classList.toggle('open'); e.target.textContent = open ? T[lang].close : T[lang].read; return; }
  if (e.target.closest('#amen-toggle')) { amenOpen = !amenOpen; render(); return; }
  const star = e.target.closest('[data-rate]');
  if (star) { try { localStorage.setItem(`rate-${slug}`, star.dataset.rate); } catch {} render(); }
});

const PAGE_ICONS = { llegar: 'key', casa: 'door', extras: 'star', explorar: 'compass', comer: 'fork', moverse: 'bus', salida: 'check', ayuda: 'sos' };
let blkIndex = 0;
const blk = (title, html) => `<section class="blk reveal" style="--i:${blkIndex++}">${title ? `<h3 class="blk-title">${esc(title)}</h3>` : ''}${html}</section>`;
let planTab = null, routeTab = 0;

function buildPages() {
  const c = cabana, t = T[lang], a = c.anfitrion || {};
  const P = {};
  const page = (fn) => { blkIndex = 0; return fn(); };

  if (c.como_llegar || c.checkin) P.llegar = page(() => {
    const L = c.como_llegar || {}, mIco = { avion: 'plane', bus: 'bus', auto: 'car' };
    const ops = L.opciones || [];
    const sel = ops[Math.min(routeTab, ops.length - 1)];
    return blk('', `<div class="arrive">
        <div class="arrive-time"><span class="label">Check-in</span><strong>${esc(c.checkin?.hora || '—')}</strong></div>
        <p>${esc(c.checkin?.instrucciones || '')}</p>
      </div>`)
      + (ops.length ? blk(t.tabs.llegar, `<div class="route-pick" role="tablist">${ops.map((o, i) => `<button role="tab" class="${o === sel ? 'on' : ''}" data-route="${i}">${ico(mIco[o.modo] || 'pin')}<span>${esc(firstSentence(o.desde).replace(/\s*\(.*\)/, ''))}</span></button>`).join('')}</div>
        <div class="route-card" key="${routeTab}">
          <div class="route-top"><span class="big-ico">${ico(mIco[sel.modo] || 'pin')}</span><div><strong>${esc(sel.desde)}</strong>${sel.tiempo && sel.tiempo !== '—' ? `<span class="chip">${esc(sel.tiempo)}</span>` : ''}</div></div>
          ${clampText(sel.detalle, 160)}
        </div>`) : '')
      + blk('', `${L.referencia ? `<div class="landmark">${ico('pin')}<span><small>${t.reference}</small>${esc(L.referencia)}</span></div>` : ''}
        <a class="btn wide" href="${mapsUrl(L.mapa || c.direccion || c.nombre)}" target="_blank" rel="noopener">${ico('pin')}${t.maps}</a>`);
  });

  P.casa = page(() => {
    const otrosIcons = { agua_caliente: 'drop', estacionamiento: 'car', basura: 'trash' };
    const equipos = (c.equipos || []).map((e) => `<details class="dev"><summary><span class="ri">${ico(e.icono)}</span><strong>${esc(e.nombre)}</strong><span class="chev"></span></summary>
        <ol class="steps small">${(e.pasos || []).map((p) => `<li>${esc(p)}</li>`).join('')}</ol>${e.nota ? `<p class="dev-note">${esc(e.nota)}</p>` : ''}</details>`).join('');
    const e = c.estufa;
    const spots = (c.donde_esta || '').split(/\.\s+|\.$/).map((x) => x.trim()).filter(Boolean);
    const otros = Object.entries(c.otros || {}).filter(([k]) => !['emergencias', 'agua_caliente'].includes(k));
    return [
      equipos ? blk(t.howTo, `<div class="panel devs">${equipos}</div>`) : '',
      e ? blk(t.tabs.estufa, `<details class="dev stove"><summary><span class="ri hot">${ico('flame')}</span><strong>${esc(e.tipo || t.tabs.estufa)}<small>${(e.pasos || []).length} ${t.steps || 'pasos'}</small></strong><span class="chev"></span></summary>
          <ol class="steps">${(e.pasos || []).map((p) => `<li>${esc(p)}</li>`).join('')}</ol>
          ${e.lena ? `<div class="tip">${ico('wood')}<span><strong>${t.wood}.</strong> ${esc(e.lena)}</span></div>` : ''}
        </details>${e.seguridad ? `<div class="warn">${ico('sos')}<span><strong>${t.safety}.</strong> ${esc(e.seguridad)}</span></div>` : ''}`) : '',
      spots.length ? blk(t.whereIs, `<div class="spots">${spots.map((s, i) => `<div class="spot reveal" style="--i:${i}"><span>${ico(iconFor(s))}</span><p>${esc(s)}</p></div>`).join('')}</div>`) : '',
      otros.length ? blk('', `<div class="panel">${otros.map(([k, v]) => row(otrosIcons[k] || 'info', k.replace(/_/g, ' ').replace(/^./, (m) => m.toUpperCase()), v)).join('')}</div>`) : '',
      c.reglas?.length ? blk(t.rules, `<div class="rule-grid">${c.reglas.map((r, i) => `<div class="rule reveal" style="--i:${i}"><span>${ico(iconFor(r, 'check'))}</span><p>${esc(r)}</p></div>`).join('')}</div>`) : '',
    ].join('');
  });

  if (c.extras?.length) P.extras = page(() => blk('', `<div class="extra-grid">${c.extras.map((x, i) => { return `<article class="extra reveal" style="--i:${i}">
        <div class="extra-art">${cover(x.nombre, x.foto)}<span class="art-ico">${ico(x.icono)}</span><span class="price">${esc(x.precio || '')}</span></div>
        <div class="extra-body"><strong>${esc(x.nombre)}</strong>${clampText(x.detalle, 70)}
        ${a.whatsapp ? `<a class="order" target="_blank" rel="noopener" href="${waUrl(a.whatsapp, `Hola ${a.nombre}, quisiera pedir: ${x.nombre} (${c.nombre}). ¡Gracias!`)}">${ico('chat')}${t.order}</a>` : ''}</div>
      </article>`; }).join('')}</div>
      <p class="fine">${t.orderNote}</p>`));

  if (c.panoramas || c.tours?.length) P.explorar = page(() => {
    let plans = '';
    if (c.panoramas) {
      const wet = weather?.current ? isWet(weather.current.weather_code) : true;
      const tab = planTab || (wet ? 'lluvia' : 'sol');
      plans = blk(t.tabs.hoy, `${weatherCard()}
        <div class="seg" role="tablist">
          ${['lluvia', 'sol'].map((k) => `<button role="tab" data-plan="${k}" class="${k === tab ? 'on' : ''}">${ico(k === 'lluvia' ? 'rain' : 'sun')}${k === 'lluvia' ? t.ifRain : t.ifSun}${(k === 'lluvia') === wet && weather?.current ? `<i>${t.suggested}</i>` : ''}</button>`).join('')}
        </div>
        <div class="cards-row">${(c.panoramas[tab] || []).map((p, i) => card(p.nombre, p.nota, tab === 'lluvia' ? 'coffee' : 'sun', '', i, p.foto)).join('')}</div>`);
    }
    return plans + (c.tours?.length ? blk(t.tours, `<div class="panel">${c.tours.map((r) => row('compass', r.nombre, r.nota, [r.duracion])).join('')}</div>`) : '');
  });

  if (c.restaurantes?.length || c.servicios_cercanos?.length) P.comer = page(() => {
    const k = { supermercado: 'cart', almacen: 'shop', farmacia: 'plus', bencinera: 'fuel', cajero: 'atm' };
    return (c.restaurantes?.length ? blk(t.restaurants, `<div class="cards-row">${c.restaurantes.map((r, i) => card(r.nombre, r.nota, 'fork', [r.tipo, r.distancia].filter(Boolean).join(' · '), i, r.foto)).join('')}</div>`) : '')
      + (c.servicios_cercanos?.length ? blk(t.tabs.cerca, `<div class="near-grid">${c.servicios_cercanos.map((s, i) => `<a class="near reveal" style="--i:${i}" target="_blank" rel="noopener" href="${mapsUrl(`${s.nombre} ${c.lugar?.split('·')[0] || ''}`)}">
          <span class="near-ico">${ico(k[s.tipo] || 'pin')}</span>
          <span class="kind">${esc(t.kinds[s.tipo] || s.tipo || '')}</span>
          <strong>${esc(s.nombre)}</strong>
          <small>${esc(s.distancia || '')}</small>
          ${s.horario ? `<small class="hours">${ico('clock')}${esc(firstSentence(s.horario.split('·')[0]))}</small>` : ''}
        </a>`).join('')}</div>`) : '');
  });

  if (c.transporte_publico?.lineas?.length) P.moverse = page(() => {
    const tp = c.transporte_publico;
    return blk('', `${tp.aviso ? `<p class="notice">${ico('info')}<span>${esc(tp.aviso)}</span></p>` : ''}
      <div class="lines">${tp.lineas.map((l, i) => `<article class="line reveal" style="--i:${i}">
        <header><span class="ri">${ico(l.icono || 'bus')}</span><div><strong>${esc(l.nombre)}</strong>${l.para ? `<small>${esc(l.para)}</small>` : ''}</div></header>
        <div class="facts">
          ${l.donde ? `<div class="fact">${ico('pin')}<span>${esc(firstSentence(l.donde))}</span></div>` : ''}
          ${l.frecuencia ? `<div class="fact">${ico('clock')}<span>${esc(firstSentence(l.frecuencia))}</span></div>` : ''}
          ${l.precio ? `<div class="fact money"><b>$</b><span>${esc(firstSentence(l.precio))}</span></div>` : ''}
        </div>
        <details class="line-more"><summary>${t.howCatch}${ico('chevd')}</summary>
          ${l.donde ? `<p>${esc(l.donde)}</p>` : ''}
          ${l.consejo ? `<p class="line-tip">${ico('info')}<span>${esc(l.consejo)}</span></p>` : ''}
          ${l.mapa ? `<a class="line-map" target="_blank" rel="noopener" href="${mapsUrl(l.mapa)}">${ico('pin')}${t.maps}</a>` : ''}
        </details>
      </article>`).join('')}</div>`)
      + (tp.consejos?.length ? blk(t.tTips, `<div class="tips-row">${tp.consejos.map((x, i) => `<div class="tipcard reveal" style="--i:${i}"><b>${i + 1}</b><p>${esc(x)}</p></div>`).join('')}</div>`) : '');
  });

  P.salida = page(() => {
    const done = readChecks(), list = c.checkout?.lista || [];
    const n = list.filter((_, i) => done[i]).length;
    return blk('', `<div class="arrive out">
        <div class="arrive-time"><span class="label">Check-out</span><strong>${esc(c.checkout?.hora || '—')}</strong></div>
        ${clampText(c.checkout?.instrucciones, 110)}
      </div>`)
      + (list.length ? blk('', `<div class="panel checklist">
          <div class="progress">${ring(n, list.length)}<div><strong id="prog-n">${n} ${t.of} ${list.length}</strong><span id="prog-msg">${n === list.length ? t.allDone : t.ready}</span></div></div>
          <div class="checks">${list.map((x, i) => `<label class="check"><input type="checkbox" id="chk-${i}" data-i="${i}"${done[i] ? ' checked' : ''}><span class="box">${ico('check')}</span><span>${esc(x)}</span></label>`).join('')}</div>
        </div>`) : '')
      + ((c.resenas || c.anfitrion?.whatsapp) ? blk('', rateHTML()) : '');
  });

  P.ayuda = page(() => blk('', `<div class="host">
      <div class="host-top"><span class="avatar">${esc((a.nombre || '?')[0])}</span><div><span>${t.hostRole}</span><strong>${esc(a.nombre || '')}</strong></div></div>
      ${a.horario ? `<p class="host-hours">${esc(firstSentence(a.horario))}</p>` : ''}
      <div class="host-btns">
        ${a.whatsapp ? `<a class="btn light" href="${waUrl(a.whatsapp)}" target="_blank" rel="noopener">${ico('chat')}WhatsApp</a>` : ''}
        ${a.telefono ? `<a class="btn ghost" href="tel:${esc(a.telefono.replace(/\s/g, ''))}">${ico('phone')}${t.call}</a>` : ''}
      </div>
    </div>
    <div class="sos-grid">${['131', '132', '133'].map((n, i) => `<a class="reveal" style="--i:${i}" href="tel:${n}"><strong>${n}</strong><span>${t.sos[i]}</span></a>`).join('')}</div>
    ${a.whatsapp ? `<a class="report" target="_blank" rel="noopener" href="${waUrl(a.whatsapp, `Hola ${a.nombre}, tengo un problema en ${c.nombre}: `)}">
      <span class="ri">${ico('tool')}</span><span><strong>${t.report}</strong><small>${t.reportNote}</small></span>${ico('ext')}</a>` : ''}`)
    + (c.imprevistos?.length ? blk(t.incidents, `<div class="panel devs">${c.imprevistos.map((x) => `<details class="dev"><summary><span class="ri">${ico(iconFor(x.situacion, 'bolt'))}</span><strong>${esc(x.situacion)}</strong><span class="chev"></span></summary><p class="dev-note" style="margin-top:0">${esc(x.que_hacer)}</p></details>`).join('')}</div>`) : ''));

  return P;
}

// Texto largo → 2 líneas con "Ver más"
function clampText(text, max = 120) {
  if (!text) return '';
  if (text.length <= max) return `<p class="txt">${esc(text)}</p>`;
  return `<div class="clampbox"><p class="txt clamp">${esc(text)}</p><button type="button" class="more" data-more>${T[lang].more}</button></div>`;
}

// Tarjeta con arte de color (panoramas, restaurantes)
function card(title, note, icon, meta, i, foto) {
  return `<article class="pcard reveal" style="--i:${i}">
    <div class="pcard-art">${cover(title, foto)}<span class="art-ico">${ico(icon)}</span></div>
    <div class="pcard-body"><strong>${esc(title)}</strong>${meta ? `<small>${esc(meta)}</small>` : ''}${note ? `<p>${esc(note)}</p>` : ''}</div>
  </article>`;
}

function ring(n, total) {
  const C = 2 * Math.PI * 22, off = C * (1 - (total ? n / total : 0));
  return `<svg class="ring" viewBox="0 0 52 52"><circle cx="26" cy="26" r="22" class="ring-bg"/><circle cx="26" cy="26" r="22" class="ring-fg" stroke-dasharray="${C}" stroke-dashoffset="${off}" data-c="${C}"/></svg>`;
}

const ORDER = ['llegar', 'casa', 'extras', 'explorar', 'comer', 'moverse', 'salida', 'ayuda'];
const route = () => decodeURIComponent(location.hash.slice(1));
let shownRoute = null, homeY = 0;

function render() {
  const c = cabana, t = T[lang];
  const pages = buildPages();
  const r = route();
  const onPage = !!pages[r];

  // Saludo y datos del momento en la portada
  const h = new Date().getHours();
  $('#greet').textContent = t.greet[h < 12 ? 0 : h < 20 ? 1 : 2] + (c.huesped?.nombre ? `, ${c.huesped.nombre}` : '');
  $('#stay-head').innerHTML = stayHead();
  $('#stay-access').innerHTML = accessRow();
  $('#letter').innerHTML = letterHTML();
  $('#amen').innerHTML = amenitiesHTML();
  $('#gallery').innerHTML = galleryHTML();
  const chips = [];
  if (weather?.current) {
    const [cond, icon] = WX(weather.current.weather_code);
    chips.push(`<span class="hchip">${ico(icon)}${Math.round(weather.current.temperature_2m)}° ${esc(t.wx[cond])}</span>`);
  }
  const sunset = weather?.daily?.sunset?.[0];
  if (sunset) chips.push(`<span class="hchip">${ico('sunset')}${t.sunset} ${sunset.slice(11, 16)}</span>`);
  $('#hero-chips').innerHTML = chips.join('');

  // Accesos rápidos
  $('#actions').innerHTML = `
    <button class="action" id="act-wifi"><span class="i">${ico('qr')}</span>${t.qr} Wi-Fi</button>
    ${c.anfitrion?.whatsapp ? `<a class="action" href="${waUrl(c.anfitrion.whatsapp)}" target="_blank" rel="noopener"><span class="i">${ico('chat')}</span>${t.act.whatsapp}</a>` : ''}
    <a class="action" href="${mapsUrl(c.como_llegar?.mapa || c.direccion || c.nombre)}" target="_blank" rel="noopener"><span class="i">${ico('pin')}</span>${t.act.map}</a>
    <a class="action sos" href="#ayuda"><span class="i">${ico('sos')}</span>${t.act.sos}</a>`;
  $('#act-wifi').onclick = openQR;

  // Apartados
  $('#need').textContent = t.need;
  $('#tiles').innerHTML = ORDER.filter((id) => pages[id]).map((id, i) => {
    let desc = t.tileDesc[id];
    if (id === 'explorar' && weather?.current) desc = `${Math.round(weather.current.temperature_2m)}° · ${t.wx[WX(weather.current.weather_code)[0]]}`;
    if (id === 'salida' && c.checkout?.hora) desc = `Check-out ${c.checkout.hora}`;
    if (id === 'llegar' && c.checkin?.hora) desc = `Check-in ${c.checkin.hora}`;
    return `<a class="tile reveal${id === 'ayuda' ? ' tile-help' : ''}" style="--i:${i}" href="#${id}"><span class="ti">${ico(PAGE_ICONS[id])}</span><strong>${esc(t.tabs[id])}</strong><small>${esc(desc)}</small></a>`;
  }).join('');

  // Recomendados de hoy (según el clima) y extras destacados
  const wet = weather?.current ? isWet(weather.current.weather_code) : true;
  const picks = [...(c.panoramas?.[wet ? 'lluvia' : 'sol'] || []).map((p) => [p.nombre, p.nota, wet ? 'coffee' : 'sun', p.foto]), ...(c.tours || []).slice(0, 2).map((p) => [p.nombre, p.duracion, 'compass', p.foto])];
  $('#picks').innerHTML = picks.length ? `<div class="row-head"><h2>${t.picks}</h2><a href="#explorar">${t.see} ${ico('chev')}</a></div>
    <div class="scroller">${picks.map(([n, note, icon, foto], i) => { return `<a href="#explorar" class="mini reveal" style="--i:${i}">${cover(n, foto)}<span class="mini-shade"></span><span class="mini-ico">${ico(icon)}</span><strong>${esc(n)}</strong><small>${esc(firstSentence(note || ''))}</small></a>`; }).join('')}</div>` : '';
  $('#special').innerHTML = c.extras?.length ? `<div class="row-head"><h2>${t.special}</h2><a href="#extras">${t.see} ${ico('chev')}</a></div>
    <div class="scroller">${c.extras.map((x, i) => { return `<a href="#extras" class="mini extra-mini reveal" style="--i:${i}">${cover(x.nombre, x.foto)}<span class="mini-shade"></span><span class="mini-ico">${ico(x.icono)}</span><strong>${esc(x.nombre)}</strong><small class="mini-price">${esc(x.precio || '')}</small></a>`; }).join('')}</div>` : '';

  // Página de apartado
  $('#home').hidden = onPage;
  $('#page').hidden = !onPage;
  if (onPage) {
    $('#page-name').textContent = t.tabs[r];
    $('#page-back-label').textContent = t.back;
    $('#page-title').innerHTML = t.titles[r] || esc(t.tabs[r]);
    $('#page-ico').innerHTML = ico(PAGE_ICONS[r]);
    $('#page-body').innerHTML = pages[r];
    const list = ORDER.filter((id) => pages[id]), next = list[list.indexOf(r) + 1];
    $('#page-next').innerHTML = next ? `<a class="next" href="#${next}"><span><small>${t.see}</small><strong>${esc(t.tabs[next])}</strong></span><span class="next-ico">${ico(PAGE_ICONS[next])}</span></a>` : '';
  }

  if (r !== shownRoute) {
    if (onPage && !pages[shownRoute]) homeY = window.scrollY;
    window.scrollTo(0, onPage ? 0 : homeY);
    const el = onPage ? $('#page') : $('#home');
    el.classList.remove('enter'); void el.offsetWidth; el.classList.add('enter');
    shownRoute = r;
  } else {
    document.querySelectorAll('.reveal').forEach((x) => x.classList.add('shown'));
  }

  document.querySelectorAll('[data-plan]').forEach((b) => b.addEventListener('click', () => { planTab = b.dataset.plan; render(); }));
  document.querySelectorAll('[data-route]').forEach((b) => b.addEventListener('click', () => { routeTab = +b.dataset.route; render(); }));
  document.querySelectorAll('.check input').forEach((cb) => cb.addEventListener('change', onCheck));
  renderChips();
}

function onCheck(e) {
  const cb = e.target, t = T[lang];
  const d = readChecks(); d[cb.dataset.i] = cb.checked;
  try { localStorage.setItem(`checks-${slug}`, JSON.stringify(d)); } catch {}
  const all = document.querySelectorAll('.check input'), n = [...all].filter((x) => x.checked).length;
  const fg = document.querySelector('.ring-fg');
  if (fg) fg.style.strokeDashoffset = fg.dataset.c * (1 - n / all.length);
  $('#prog-n').textContent = `${n} ${t.of} ${all.length}`;
  $('#prog-msg').textContent = n === all.length ? t.allDone : t.ready;
  document.querySelector('.checklist')?.classList.toggle('complete', n === all.length);
}

// "Ver más" en textos largos
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-more]'); if (!b) return;
  const box = b.closest('.clampbox'); const open = box.classList.toggle('open');
  b.textContent = open ? T[lang].less : T[lang].more;
});

// QR del wifi para compartir
function wifiEsc(s = '') { return String(s).replace(/([\;,:"])/g, '\\$1'); }
function openQR() {
  const w = cabana.wifi || {}, t = T[lang];
  let svg = '';
  try {
    if (window.qrcode) {
      qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
      const qr = qrcode(0, 'M');
      qr.addData(`WIFI:T:WPA;S:${wifiEsc(w.red)};P:${wifiEsc(w.clave)};;`);
      qr.make();
      svg = qr.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
    }
  } catch {}
  $('#qr-title').textContent = t.qrTitle;
  $('#qr-hint').textContent = t.qrHint;
  $('#qr-code').innerHTML = svg || `<p>${esc(w.red || '')}</p>`;
  $('#qr-net').textContent = w.red || '';
  $('#qr-pass').textContent = w.clave || '';
  $('#qr-sheet').hidden = false;
}

// Paralaje suave del volcán
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const scene = document.querySelector('.scene');
    if (scene && y < 700) scene.style.transform = `translateY(${y * 0.25}px)`;
    ticking = false;
  });
}, { passive: true });

function readChecks() {
  try { return JSON.parse(localStorage.getItem(`checks-${slug}`)) || {}; } catch { return {}; }
}

window.addEventListener('hashchange', () => { if (cabana) render(); });

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
    const q = new URLSearchParams(location.search).get('g');
    let g = q;
    try { if (q) localStorage.setItem(`guest-${slug}`, q); else g = localStorage.getItem(`guest-${slug}`); } catch {}
    const r = await fetch(`/api/cabana?slug=${encodeURIComponent(slug || '')}${g ? `&g=${encodeURIComponent(g)}` : ''}`);
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
  $('#page-mono').textContent = m;
  $('#foot-name').textContent = cabana.nombre;
  $('#host-link').href = `/admin?c=${encodeURIComponent(slug)}`;
  if (cabana.lugar) $('#lugar').textContent = cabana.lugar;
  if (cabana.fotos?.[0]) $('#hero').insertAdjacentHTML('afterbegin', `<img class="hero-photo" src="${esc(cabana.fotos[0])}" alt="" onload="this.classList.add('ok')" onerror="this.remove()"><span class="hero-shade"></span>`);
  $('#wifi-red').textContent = `${cabana.wifi?.red || ''}`;
  $('#wifi-clave').textContent = cabana.wifi?.clave || '—';
  $('#checkin').textContent = cabana.checkin?.hora || '—';
  $('#checkout').textContent = cabana.checkout?.hora || '—';

  $('#lang').addEventListener('change', (e) => setLang(e.target.value));
  $('#copy-wifi').addEventListener('click', copyWifi);
  $('#open-chat').addEventListener('click', openChat);
  $('#close-chat').addEventListener('click', () => ($('#chat').hidden = true));
  $('#qr-sheet').addEventListener('click', (e) => { if (e.target.id === 'qr-sheet' || e.target.closest('#qr-close')) $('#qr-sheet').hidden = true; });
  $('#copy-wifi').insertAdjacentHTML('beforebegin', `<button class="copy qr-btn" id="qr-btn" aria-label="QR">${ico('qr')}</button>`);
  $('#qr-btn').addEventListener('click', openQR);
  $('#chat-form').addEventListener('submit', (e) => { e.preventDefault(); send($('#chat-input').value); });
  $('#chips').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) send(b.textContent); });

  setLang(lang);
  setupPWA();
  loadWeather();
  $('#loading').hidden = true;
  $('#app').hidden = false;
  $('#open-chat').hidden = false;
}

// ═══ Instalar en el teléfono y uso sin conexión ═══
let installEvt = null;
const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
function renderInstall() {
  const box = $('#install'); if (!box) return;
  const t = T[lang];
  if (standalone()) { box.innerHTML = `<span class="ios-hint">${ico('check')} ${t.installed}</span>`; return; }
  if (installEvt || isIOS()) box.innerHTML = `<button class="install" id="install-btn" type="button">${ico('download')}${t.install}</button><p class="ios-hint" id="ios-hint" hidden>${t.iosHint}</p>`;
  else box.innerHTML = '';
}
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; renderInstall(); });
document.addEventListener('click', async (e) => {
  if (!e.target.closest('#install-btn')) return;
  if (installEvt) { installEvt.prompt(); await installEvt.userChoice.catch(() => {}); installEvt = null; renderInstall(); }
  else $('#ios-hint').hidden = false;
});
function setupPWA() {
  try {
    const link = document.createElement('link');
    link.rel = 'manifest'; link.href = `/api/manifest?slug=${encodeURIComponent(slug)}`;
    document.head.appendChild(link);
    if ('serviceWorker' in navigator && /^https:|^http:\/\/localhost/.test(location.href)) navigator.serviceWorker.register('/sw.js').catch(() => {});
  } catch {}
  renderInstall();
}

init();
