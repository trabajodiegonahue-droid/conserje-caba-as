// Panel del anfitrión: edita los datos de la cabaña con formularios simples.
// Está ordenado con los mismos apartados que ve el huésped.
// Para agregar un campo nuevo, súmalo en SECTIONS.

// ── Íconos ──
const I = {
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8m-3 3 2 2m-4 0 2 2"/>',
  door: '<path d="M5 21V4a1 1 0 0 1 1-1h9l3 2v16"/><path d="M3 21h18M12 12v.5"/>',
  star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  fork: '<path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 21V3c-2 1.5-3 4-3 8h3"/>',
  bus: '<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 11h14M8 21v-3M16 21v-3"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  sos: '<path d="M12 3l9 16H3z"/><path d="M12 10v4M12 16.8v.2"/>',
  home: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  tub: '<path d="M3 11h18v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z"/><path d="M8 8c0-1 1-1 1-2s-1-1-1-2M12 8c0-1 1-1 1-2s-1-1-1-2M16 8c0-1 1-1 1-2s-1-1-1-2"/>',
  grill: '<path d="M4 9h16a8 8 0 0 1-16 0z"/><path d="M8 17l-2 4M16 17l2 4M9 5c0-1 1-1 1-2M14 5c0-1 1-1 1-2"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3c0 1 1 1 1 2M12 3c0 1 1 1 1 2"/>',
  wood: '<path d="M3 15l14-8 4 3-14 8z"/><path d="M7 18l-4-3"/>',
  car: '<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v3H3zM5 11h14"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  flame: '<path d="M12 21c-4 0-7-2.7-7-6.5 0-3.6 3-5.5 3.5-9.5 2.5 1.5 3.5 3.5 3.5 5.5 1-1 1.5-2 1.5-3.5C16.5 9 19 11.5 19 14.5c0 3.8-3 6.5-7 6.5z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.2"/>',
  plane: '<path d="M10.5 20l1.5-6-5 1.5L5 18l-1-1 2-3-3-1.5L4 11l4 .5L12 4c.8-.8 2.2-.8 2.5.5L13 9l5 1 2-2 1 1-1.5 3 1.5 3-1 1-2-2-5 1-.5 4-2 2z"/>',
  cart: '<path d="M3 4h2l2.5 11h11L21 7H6.2"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
  shop: '<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M10 20v-6h4v6"/>',
  plus: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
  fuel: '<path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h14M5 10h10M15 8l3 3v6a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
  atm: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h3"/>',
  up: '<path d="M12 19V5m-6 6 6-6 6 6"/>',
  down: '<path d="M12 5v14m-6-6 6 6 6-6"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  chev: '<path d="M9 5l7 7-7 7"/>',
  wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.8a5 5 0 0 1 6.8 0"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  chat: '<path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5z"/>',
};
const ico = (n) => `<svg viewBox="0 0 24 24">${I[n] || I.info}</svg>`;

const COMODIDADES = [['wifi', 'Wifi'], ['estufa', 'Estufa a leña'], ['tinaja', 'Tinaja'], ['parrilla', 'Parrilla'], ['vista', 'Vista al volcán'], ['cocina', 'Cocina equipada'], ['tv', 'Smart TV'], ['estacionamiento', 'Estacionamiento'], ['calefon', 'Agua caliente'], ['mascotas', 'Acepta mascotas'], ['ropa_cama', 'Ropa de cama'], ['botiquin', 'Botiquín'], ['lavadora', 'Lavadora'], ['terraza', 'Terraza'], ['kayak', 'Kayak'], ['cuna', 'Cuna']];
const ICONOS = [['tub', 'Tinaja'], ['grill', 'Parrilla'], ['tv', 'TV'], ['drop', 'Agua'], ['coffee', 'Comida'], ['wood', 'Leña'], ['car', 'Auto'], ['bus', 'Bus'], ['clock', 'Horario'], ['flame', 'Fuego'], ['key', 'Llave'], ['info', 'Otro']];

// ── Apartados (iguales a los que ve el huésped) ──
// Tipos de campo: text, textarea, time, tel, email, url, number, choice (botones), icon (selector visual),
// strings (lista de frases), list (lista de fichas con varios campos)
const SECTIONS = [
  { id: 'basicos', icon: 'home', title: 'Datos básicos', desc: 'Nombre, wifi y horarios', guest: '', groups: [
    { title: 'La cabaña', fields: [
      { path: 'nombre', label: 'Nombre de la cabaña', type: 'text', ph: 'Ej: Cabaña Los Arrayanes', required: true },
      { path: 'lugar', label: 'Ubicación corta', type: 'text', ph: 'Ej: Puerto Varas · Lago Llanquihue', help: 'Aparece en letras chicas arriba del nombre.' },
      { path: 'descripcion', label: 'Descripción', type: 'textarea', ph: 'Una o dos frases que describan la cabaña.' },
      { path: 'direccion', label: 'Dirección', type: 'text', ph: 'Ej: Camino a Ensenada km 4, Puerto Varas' },
    ] },
    { title: 'Fotos', help: 'La primera es la portada. Pega el enlace directo de cada foto (termina en .jpg, .png o .webp).', fields: [
      { path: 'fotos', type: 'images' },
    ] },
    { title: 'Mensaje de bienvenida', help: 'Aparece en la portada con tu nombre y firma. Escríbelo como si le hablaras al huésped.', fields: [
      { path: 'bienvenida', type: 'textarea', ph: 'Ej: Qué alegría recibirlos…' },
    ] },
    { title: 'Lo que ofrece la cabaña', help: 'Toca para marcar o desmarcar.', fields: [
      { path: 'comodidades', type: 'multi', options: COMODIDADES },
    ] },
    { title: 'Wifi', fields: [
      { path: 'wifi.red', label: 'Nombre de la red', type: 'text', ph: 'Ej: LosArrayanes_5G' },
      { path: 'wifi.clave', label: 'Clave', type: 'text', ph: 'Ej: volcan2024' },
      { path: 'wifi.nota', label: 'Qué hacer si falla', type: 'textarea', ph: 'Ej: Desenchufa el router 10 segundos.' },
    ] },
    { title: 'Horarios', fields: [
      { path: 'checkin.hora', label: 'Check-in desde', type: 'time' },
      { path: 'checkout.hora', label: 'Check-out hasta', type: 'time' },
    ] },
  ] },
  { id: 'acceso', icon: 'lock', title: 'Acceso y huéspedes', desc: 'Código de la puerta y enlaces personales', groups: [
    { title: 'Enviar la guía a un huésped', help: 'Crea un enlace con su nombre y fechas. Verá un saludo personal, la cuenta regresiva y el código de la puerta solo durante su estadía.', fields: [
      { type: 'linkgen' },
    ] },
    { title: 'Código de acceso', help: 'Privado: nunca aparece en la página pública ni en el chat. Solo lo ve un huésped con enlace, desde el día de su llegada hasta su salida.', fields: [
      { path: 'privado.codigo_acceso', label: 'Código', type: 'text', ph: 'Ej: 4821', half: true },
      { path: 'privado.nota_acceso', label: 'Dónde se usa', type: 'textarea', ph: 'Ej: Caja de seguridad gris a la derecha de la puerta.' },
    ] },
  ] },
  { id: 'llegar', icon: 'key', title: 'Llegar y moverse', desc: 'Antes de llegar, primeros pasos, taxi y buses', groups: [
    { title: 'Antes de llegar', help: 'Se muestra en la portada los días previos a la llegada. Pocas cosas y muy prácticas.', fields: [
      { path: 'antes_de_llegar', type: 'strings', add: 'Agregar consejo', ph: 'Ej: Compra en el centro: camino a la cabaña solo hay un almacén.' },
    ] },
    { title: 'Primeros pasos', help: 'Se muestra en la portada el día de llegada: lo que hay que hacer en los primeros 30 minutos.', fields: [
      { path: 'primeros_pasos', type: 'strings', add: 'Agregar paso', ph: 'Ej: Enciende la estufa con los pasos de La casa.' },
    ] },
    { title: 'Al llegar', fields: [
      { path: 'checkin.instrucciones', label: 'Cómo entrar a la cabaña', type: 'textarea', ph: 'Ej: La llave está en la caja de seguridad junto a la puerta…' },
      { path: 'como_llegar.referencia', label: 'Cómo reconocer la entrada', type: 'textarea', ph: 'Ej: Portón verde con letrero tallado.' },
      { path: 'como_llegar.mapa', label: 'Dirección para el botón de Google Maps', type: 'text', ph: 'Ej: Camino a Ensenada km 4, Puerto Varas' },
      { path: 'como_llegar.noche', label: 'Si llegan de noche', type: 'textarea', ph: 'Ej: La luz exterior se enciende sola. Estaciona frente al portón.' },
    ] },
    { title: 'Formas de llegar', fields: [
      { path: 'como_llegar.opciones', type: 'list', itemTitle: 'desde', itemSub: 'tiempo', add: 'Agregar forma de llegar', empty: 'Explica cómo llegar desde el aeropuerto, el terminal o en auto.', item: [
        { path: 'modo', label: 'Medio', type: 'choice', options: [['avion', 'Avión'], ['bus', 'Bus'], ['auto', 'Auto']] },
        { path: 'desde', label: 'Desde dónde', type: 'text', ph: 'Ej: Aeropuerto El Tepual' },
        { path: 'tiempo', label: 'Tiempo aproximado', type: 'text', ph: 'Ej: 35 min' },
        { path: 'detalle', label: 'Cómo hacerlo', type: 'textarea', ph: 'Paso a paso, con precios si los sabes.' },
      ] },
    ] },
    { title: 'Taxi de confianza', help: 'Lo más útil para moverse de noche. El huésped puede llamar con un toque.', fields: [
      { path: 'taxi', type: 'list', itemTitle: 'nombre', itemSub: 'telefono', add: 'Agregar taxi', item: [
        { path: 'nombre', label: 'Nombre', type: 'text', ph: 'Ej: Radio Taxi Lago' },
        { path: 'telefono', label: 'Teléfono', type: 'tel', ph: '+56 9 1234 5678' },
        { path: 'nota', label: 'Nota', type: 'textarea', ph: 'Ej: Al centro ~$8.000. De noche pídelo con anticipación.' },
      ] },
    ] },
    { title: 'Buses', help: 'Solo las líneas que de verdad sirven desde la cabaña (2 o 3 como máximo).', fields: [
      { path: 'transporte_publico.lineas', type: 'list', itemTitle: 'nombre', itemSub: 'precio', add: 'Agregar línea', item: [
        { path: 'nombre', label: 'Nombre', type: 'text', ph: 'Ej: Minibús a Ensenada' },
        { path: 'para', label: 'Adónde va', type: 'text' },
        { path: 'donde', label: 'Dónde se toma', type: 'textarea' },
        { path: 'mapa', label: 'Punto para Google Maps', type: 'text', ph: 'Ej: San Bernardo con Walker Martínez, Puerto Varas' },
        { path: 'frecuencia', label: 'Cada cuánto pasa', type: 'text' },
        { path: 'precio', label: 'Precio', type: 'text' },
        { path: 'consejo', label: 'Consejo', type: 'textarea' },
      ] },
      { path: 'transporte_publico.consejos', label: 'Consejos', type: 'strings', add: 'Agregar consejo' },
      { path: 'transporte_publico.aviso', label: 'Aviso', type: 'text', ph: 'Ej: Precios referenciales.' },
    ] },
  ] },
  { id: 'casa', icon: 'door', title: 'La casa', desc: 'Equipos, estufa y reglas', groups: [
    { title: 'Cómo funciona cada cosa', help: 'Tinaja, parrilla, TV, calefón… El huésped ve los pasos al tocar cada una.', fields: [
      { path: 'equipos', type: 'list', itemTitle: 'nombre', add: 'Agregar equipo', empty: 'Aún no hay equipos.', item: [
        { path: 'nombre', label: 'Nombre', type: 'text', ph: 'Ej: Tinaja caliente' },
        { path: 'icono', label: 'Ícono', type: 'icon' },
        { path: 'pasos', label: 'Pasos', type: 'strings', add: 'Agregar paso', ph: 'Escribe un paso' },
        { path: 'nota', label: 'Nota o advertencia', type: 'textarea', ph: 'Opcional' },
      ] },
    ] },
    { title: 'Estufa', fields: [
      { path: 'estufa.tipo', label: 'Tipo de estufa', type: 'text', ph: 'Ej: Estufa a leña de combustión lenta' },
      { path: 'estufa.pasos', label: 'Pasos para encenderla', type: 'strings', add: 'Agregar paso', ph: 'Escribe un paso' },
      { path: 'estufa.seguridad', label: 'Seguridad', type: 'textarea' },
      { path: 'estufa.lena', label: 'Dónde está la leña', type: 'textarea' },
    ] },
    { title: 'Dónde está cada cosa', fields: [
      { path: 'donde_esta', label: 'Sábanas, botiquín, extintor, tablero…', type: 'textarea' },
      { path: 'otros.agua_caliente', label: 'Agua caliente', type: 'textarea' },
      { path: 'otros.estacionamiento', label: 'Estacionamiento', type: 'textarea' },
      { path: 'otros.basura', label: 'Basura y reciclaje', type: 'textarea' },
    ] },
    { title: 'Reglas de la casa', fields: [
      { path: 'reglas', type: 'strings', add: 'Agregar regla', ph: 'Ej: No fumar dentro de la cabaña' },
    ] },
  ] },
  { id: 'extras', icon: 'star', title: 'Extras', desc: 'Servicios que se piden por WhatsApp', groups: [
    { title: 'Servicios extra', help: 'El huésped toca "Pedir" y te llega un WhatsApp con el pedido escrito.', fields: [
      { path: 'extras', type: 'list', itemTitle: 'nombre', itemSub: 'precio', add: 'Agregar servicio', empty: 'Aún no ofreces servicios extra.', item: [
        { path: 'nombre', label: 'Nombre', type: 'text', ph: 'Ej: Desayuno sureño' },
        { path: 'precio', label: 'Precio', type: 'text', ph: 'Ej: $12.000 por persona' },
        { path: 'detalle', label: 'Qué incluye', type: 'textarea' },
        { path: 'icono', label: 'Ícono', type: 'icon' },
        { path: 'foto', label: 'Foto (opcional)', type: 'image' },
      ] },
    ] },
  ] },
  { id: 'explorar', icon: 'compass', title: 'Qué hacer', desc: 'Panoramas, tours y consejos de temporada', groups: [
    { title: 'Panoramas si llueve', fields: [
      { path: 'panoramas.lluvia', type: 'list', itemTitle: 'nombre', add: 'Agregar panorama', item: [
        { path: 'nombre', label: 'Panorama', type: 'text' }, { path: 'nota', label: 'Consejo', type: 'textarea' }, { path: 'foto', label: 'Foto (opcional)', type: 'image' },
      ] },
    ] },
    { title: 'Panoramas si hay sol', fields: [
      { path: 'panoramas.sol', type: 'list', itemTitle: 'nombre', add: 'Agregar panorama', item: [
        { path: 'nombre', label: 'Panorama', type: 'text' }, { path: 'nota', label: 'Consejo', type: 'textarea' }, { path: 'foto', label: 'Foto (opcional)', type: 'image' },
      ] },
    ] },
    { title: 'Tours y paseos', fields: [
      { path: 'tours', type: 'list', itemTitle: 'nombre', itemSub: 'duracion', add: 'Agregar tour', item: [
        { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'duracion', label: 'Duración', type: 'text', ph: 'Ej: Medio día' }, { path: 'nota', label: 'Consejo', type: 'textarea' }, { path: 'foto', label: 'Foto (opcional)', type: 'image' },
      ] },
    ] },
    { title: 'Consejos de temporada', help: 'Se muestran solo en los meses que marques (sin meses = todo el año). Es el toque local que más se agradece.', fields: [
      { path: 'temporada', type: 'list', itemTitle: 'cuando', add: 'Agregar consejo', item: [
        { path: 'cuando', label: 'Cuándo', type: 'text', ph: 'Ej: Diciembre a febrero' },
        { path: 'meses', label: 'Meses', type: 'months' },
        { path: 'texto', label: 'Consejo', type: 'textarea', ph: 'Ej: Llegan los tábanos: usa ropa clara.' },
      ] },
    ] },
    { title: 'Clima en vivo', help: 'Ubicación de la cabaña para mostrar el clima. En Google Maps, mantén presionado sobre la cabaña y copia los dos números que aparecen.', fields: [
      { path: 'coordenadas.lat', label: 'Latitud', type: 'number', ph: '-41.3195', half: true },
      { path: 'coordenadas.lon', label: 'Longitud', type: 'number', ph: '-72.9854', half: true },
    ] },
  ] },
  { id: 'comer', icon: 'fork', title: 'Comer', desc: 'Restaurantes y almacenes', groups: [
    { title: 'Restaurantes', fields: [
      { path: 'restaurantes', type: 'list', itemTitle: 'nombre', itemSub: 'distancia', add: 'Agregar restaurante', item: [
        { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'tipo', label: 'Tipo de comida', type: 'text', ph: 'Ej: Pescados y mariscos' },
        { path: 'distancia', label: 'Distancia', type: 'text', ph: 'Ej: 10 min en auto' },
        { path: 'horario', label: 'Horario', type: 'text', ph: 'Ej: 13:00–23:00 · cierra lunes' },
        { path: 'precio', label: 'Precio', type: 'choice', options: [['$', '$ económico'], ['$$', '$$ medio'], ['$$$', '$$$ alto']] },
        { path: 'reserva', label: 'Reserva', type: 'choice', options: [['si', 'Necesaria'], ['recomendada', 'Recomendada'], ['no', 'No hace falta']] },
        { path: 'nota', label: 'Tu recomendación', type: 'textarea', ph: 'Ej: Pide el curanto en olla.' }, { path: 'foto', label: 'Foto (opcional)', type: 'image' },
      ] },
    ] },
    { title: 'Cerca de la cabaña', fields: [
      { path: 'servicios_cercanos', type: 'list', itemTitle: 'nombre', itemSub: 'distancia', add: 'Agregar lugar', item: [
        { path: 'tipo', label: 'Qué es', type: 'choice', options: [['supermercado', 'Supermercado'], ['almacen', 'Almacén'], ['farmacia', 'Farmacia'], ['bencinera', 'Bencinera'], ['cajero', 'Cajero']] },
        { path: 'nombre', label: 'Nombre', type: 'text' }, { path: 'distancia', label: 'Distancia', type: 'text' }, { path: 'horario', label: 'Horario', type: 'text', ph: 'Ej: 08:30–22:00' },
      ] },
    ] },
  ] },
  { id: 'salida', icon: 'check', title: 'Tu salida', desc: 'Check-out y reseñas', groups: [
    { title: 'Al irse', fields: [
      { path: 'checkout.instrucciones', label: 'Instrucciones de salida', type: 'textarea' },
      { path: 'checkout.lista', label: 'Lista para marcar antes de irse', type: 'strings', add: 'Agregar tarea', ph: 'Ej: Apagar la estufa' },
    ] },
    { title: 'Reseñas', fields: [
      { path: 'resenas.mensaje', label: 'Mensaje para pedir una reseña', type: 'textarea' },
      { path: 'resenas.enlaces', type: 'list', itemTitle: 'plataforma', add: 'Agregar enlace', item: [
        { path: 'plataforma', label: 'Plataforma', type: 'text', ph: 'Google, Airbnb, Booking…' }, { path: 'url', label: 'Enlace', type: 'url', ph: 'https://…' },
      ] },
    ] },
  ] },
  { id: 'ayuda', icon: 'sos', title: 'Ayuda', desc: 'Tu contacto, bueno saber y emergencias', groups: [
    { title: 'Tu contacto', fields: [
      { path: 'anfitrion.nombre', label: 'Tu nombre', type: 'text' },
      { path: 'anfitrion.telefono', label: 'Teléfono', type: 'tel', ph: '+56 9 1234 5678', half: true },
      { path: 'anfitrion.whatsapp', label: 'WhatsApp', type: 'tel', ph: '56912345678', help: 'Solo números, con 56 adelante.', half: true },
      { path: 'anfitrion.email', label: 'Email', type: 'email' },
      { path: 'anfitrion.horario', label: 'Cuándo te pueden contactar', type: 'textarea' },
      { path: 'anfitrion.foto', label: 'Tu foto (opcional)', type: 'image' },
      { path: 'anfitrion.idiomas', label: 'Idiomas que hablas', type: 'strings', add: 'Agregar idioma', ph: 'Ej: English' },
    ] },
    { title: 'Bueno saber', help: 'Datos prácticos para extranjeros: efectivo, propina, enchufes, agua, señal… Cortos.', fields: [
      { path: 'bueno_saber', type: 'list', itemTitle: 'tema', add: 'Agregar dato', item: [
        { path: 'tema', label: 'Tema', type: 'text', ph: 'Ej: Enchufes' }, { path: 'texto', label: 'Texto', type: 'textarea', ph: 'Ej: Tipo C y L, 220 V.' },
      ] },
    ] },
    { title: 'Emergencias', fields: [
      { path: 'otros.emergencias', label: 'Hospital y números útiles', type: 'textarea' },
      { path: 'imprevistos', label: 'Si pasa algo…', type: 'list', itemTitle: 'situacion', add: 'Agregar situación', item: [
        { path: 'situacion', label: 'Situación', type: 'text', ph: 'Ej: Se cortó la luz' }, { path: 'que_hacer', label: 'Qué hacer', type: 'textarea' },
      ] },
    ] },
  ] },
];

const $ = (s) => document.querySelector(s);
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let session = null;   // { slug, password, role, creating }
let draft = null;     // copia de trabajo de los datos
let current = null;   // apartado abierto (null = inicio del panel)
let dirty = false;
const open = new Set(); // fichas abiertas

// ── Rutas tipo "extras.2.precio" ──
const parts = (p) => p.split('.').map((k) => (/^\d+$/.test(k) ? +k : k));
const get = (obj, p) => parts(p).reduce((o, k) => (o == null ? undefined : o[k]), obj);
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
    e.target.value = e.target.value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9-]+/g, '-');
    $('#new-slug-preview').textContent = e.target.value || 'el-mirador';
  });

  $('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const isNew = $('#login-slug').value === '__new';
    const slug = isNew ? $('#new-slug').value.replace(/^-+|-+$/g, '') : $('#login-slug').value;
    if (!slug) return showLoginError('Escribe la dirección de la nueva cabaña.');
    login(slug, $('#login-pass').value);
  });

  try {
    const saved = JSON.parse(sessionStorage.getItem('adm'));
    if (saved?.slug && saved?.password) login(saved.slug, saved.password, true);
  } catch {}
}

function showLoginError(msg) { const el = $('#login-error'); el.textContent = msg; el.hidden = !msg; }

async function login(slug, password, silent = false) {
  showLoginError('');
  $('#login-btn').disabled = true; $('#login-btn').textContent = 'Entrando…';
  try {
    const res = await api({ action: 'login', slug, password });
    if (res.exists) {
      draft = (await api({ action: 'get', slug, password })).data;
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
  setDirty(session.creating);
  show(null);
}

function initials(n) {
  return n.replace(/^caba[ñn]a\s+/i, '').split(/\s+/).filter((w) => w.length > 2).map((w) => w[0]).join('').slice(0, 2).toUpperCase() || '✦';
}

// Resumen de cada apartado para las tarjetas del inicio
function summary(s) {
  const n = (p) => (get(draft, p) || []).length;
  const plural = (k, one, many) => `${k} ${k === 1 ? one : many}`;
  switch (s.id) {
    case 'basicos': return draft.wifi?.red ? `Wifi: ${draft.wifi.red} · ${n('fotos')} fotos` : 'Falta el wifi';
    case 'acceso': return draft.privado?.codigo_acceso ? 'Código configurado · crear enlace' : 'Falta el código de la puerta';
    case 'llegar': return `${plural(n('como_llegar.opciones'), 'forma de llegar', 'formas de llegar')} · ${n('taxi') ? 'taxi' : 'falta taxi'}`;
    case 'casa': return `${plural(n('equipos'), 'equipo', 'equipos')} · ${plural(n('reglas'), 'regla', 'reglas')}`;
    case 'extras': return plural(n('extras'), 'servicio', 'servicios');
    case 'explorar': return `${n('panoramas.lluvia') + n('panoramas.sol')} panoramas · ${n('tours')} tours`;
    case 'comer': return `${n('restaurantes')} restaurantes · ${n('servicios_cercanos')} lugares`;
    case 'salida': return plural(n('checkout.lista'), 'tarea', 'tareas');
    case 'ayuda': return draft.anfitrion?.telefono || 'Falta tu teléfono';
    default: return s.desc;
  }
}

function show(id) {
  current = id;
  const s = SECTIONS.find((x) => x.id === id);
  const name = draft.nombre || 'Nueva cabaña';
  $('#adm-mono').textContent = initials(name);
  $('#adm-name').textContent = name;
  $('#adm-back').hidden = !s;
  $('#adm-id').hidden = !!s;
  $('#adm-section').hidden = !s;
  $('#adm-section').textContent = s ? s.title : '';
  $('#adm-view').href = `/cabana/${session.slug}${s && s.id !== 'basicos' ? `#${s.id}` : ''}`;
  $('#adm-view').textContent = s ? 'Ver apartado' : 'Ver página';
  $('#adm-main').classList.add('anim');
  $('#adm-main').innerHTML = s ? sectionHTML(s) : homeHTML();
  window.scrollTo(0, 0);
  autosize();
}

function homeHTML() {
  const first = (draft.anfitrion?.nombre || '').split(' ')[0];
  return `<div class="adm-hello">
      <p class="eyebrow">${esc(draft.lugar || 'Panel del anfitrión')}</p>
      <h1>${first ? `Hola, <em>${esc(first)}</em>` : 'Tu <em>cabaña</em>'}</h1>
    </div>
    <ol class="howto">
      <li><b>1</b><span>Elige qué quieres cambiar</span></li>
      <li><b>2</b><span>Edita los textos</span></li>
      <li><b>3</b><span>Toca <strong>Guardar</strong></span></li>
    </ol>
    <p class="howto-note">Tus huéspedes ven los cambios en 1 o 2 minutos.</p>
    <div class="adm-tiles">${SECTIONS.map((s) => `<button class="adm-tile" type="button" data-open="${s.id}">
      <span class="ti">${ico(s.icon)}</span>
      <span class="tt"><strong>${esc(s.title)}</strong><small>${esc(summary(s))}</small></span>
      <span class="go">${ico('chev')}</span>
    </button>`).join('')}</div>`;
}

function sectionHTML(s) {
  const idx = SECTIONS.indexOf(s), next = SECTIONS[idx + 1];
  return `<div class="adm-page-head"><span class="ti">${ico(s.icon)}</span><div><h1>${esc(s.title)}</h1><p>${esc(s.desc)}</p></div></div>
    ${s.groups.map((g) => `<fieldset class="grp">
      <legend>${esc(g.title)}</legend>${g.help ? `<p class="grp-help">${esc(g.help)}</p>` : ''}
      <div class="grp-fields">${g.fields.map((f) => field(f)).join('')}</div>
    </fieldset>`).join('')}
    ${next ? `<button class="adm-next" type="button" data-open="${next.id}"><span><small>Siguiente</small><strong>${esc(next.title)}</strong></span>${ico('chev')}</button>` : ''}`;
}

function field(f, base = '') {
  const path = base ? `${base}.${f.path || ''}` : (f.path || '');
  const v = get(draft, path);
  const id = `f-${path.replace(/\./g, '-')}`;
  const label = f.label ? `<span class="lbl">${esc(f.label)}${f.required ? ' <i>obligatorio</i>' : ''}</span>` : '';
  const help = f.help ? `<small class="help">${esc(f.help)}</small>` : '';
  const ph = f.ph ? ` placeholder="${esc(f.ph)}"` : '';

  if (f.type === 'strings') {
    const items = arr(path);
    return `<div class="fld">${label}${help}
      <div class="strings">${items.map((s, i) => `<div class="str">
        <span class="num">${i + 1}</span>
        <textarea rows="1" id="${id}-${i}" data-path="${esc(path)}.${i}"${ph} aria-label="${esc(f.label || 'Elemento')} ${i + 1}">${esc(s)}</textarea>
        <span class="str-tools">
          <button type="button" class="ib" data-act="up" data-list="${esc(path)}" data-i="${i}" title="Subir" aria-label="Subir"${i === 0 ? ' disabled' : ''}>${ico('up')}</button>
          <button type="button" class="ib del" data-act="del" data-list="${esc(path)}" data-i="${i}" title="Eliminar" aria-label="Eliminar">${ico('trash')}</button>
        </span>
      </div>`).join('') || `<p class="empty">Aún no hay nada aquí.</p>`}</div>
      <button type="button" class="add" data-act="add" data-list="${esc(path)}" data-kind="string">＋ ${esc(f.add || 'Agregar')}</button></div>`;
  }

  if (f.type === 'list') {
    const items = arr(path);
    return `<div class="fld">${label}${help}
      <div class="cards">${items.map((it, i) => {
        const key = `${path}.${i}`, isOpen = open.has(key);
        const sub = f.itemSub && it[f.itemSub] ? it[f.itemSub] : '';
        const icon = it.icono || ({ avion: 'plane', bus: 'bus', auto: 'car', supermercado: 'cart', almacen: 'shop', farmacia: 'plus', bencinera: 'fuel', cajero: 'atm' })[it.modo || it.tipo];
        return `<div class="item${isOpen ? ' open' : ''}">
          <button type="button" class="item-head" data-toggle="${esc(key)}" aria-expanded="${isOpen}">
            ${icon ? `<span class="item-ico">${ico(icon)}</span>` : `<span class="num">${i + 1}</span>`}
            <span class="item-txt"><strong data-title-of="${esc(key)}">${esc(it[f.itemTitle] || 'Sin nombre')}</strong><small data-sub-of="${esc(key)}">${esc(sub)}</small></span>
            <span class="item-edit">${isOpen ? 'Cerrar' : 'Editar'}</span>
          </button>
          ${isOpen ? `<div class="item-body">
            ${f.item.map((sf) => field(sf, key)).join('')}
            <div class="item-foot">
              <button type="button" class="tb" data-act="up" data-list="${esc(path)}" data-i="${i}"${i === 0 ? ' disabled' : ''}>${ico('up')}Subir</button>
              <button type="button" class="tb" data-act="down" data-list="${esc(path)}" data-i="${i}"${i === items.length - 1 ? ' disabled' : ''}>${ico('down')}Bajar</button>
              <button type="button" class="tb del" data-act="del" data-list="${esc(path)}" data-i="${i}">${ico('trash')}Eliminar</button>
            </div>
          </div>` : ''}
        </div>`;
      }).join('') || `<p class="empty">${esc(f.empty || 'Aún no hay nada aquí.')}</p>`}</div>
      <button type="button" class="add" data-act="add" data-list="${esc(path)}" data-kind="object" data-title="${esc(f.itemTitle)}" data-sub="${esc(f.itemSub || '')}">＋ ${esc(f.add || 'Agregar')}</button></div>`;
  }

  if (f.type === 'images') {
    const items = arr(path);
    return `<div class="fld">${label}${help}
      <div class="thumbs">${items.map((src, i) => `<figure class="thumb${i === 0 ? ' first' : ''}"><img src="${esc(src)}" alt="" onerror="this.parentNode.classList.add('bad')"><span class="bad-msg">No se pudo cargar</span>${i === 0 ? '<b>Portada</b>' : ''}
        <span class="thumb-tools">${i > 0 ? `<button type="button" class="ib light" data-act="up" data-list="${esc(path)}" data-i="${i}" aria-label="Mover antes">${ico('up')}</button>` : ''}<button type="button" class="ib light del" data-act="del" data-list="${esc(path)}" data-i="${i}" aria-label="Quitar">${ico('trash')}</button></span></figure>`).join('')}
        <label class="thumb add-photo">${ico('image')}<span>Agregar foto</span></label></div>
      <div class="url-add" hidden><input type="url" placeholder="https://…/foto.jpg" data-url-for="${esc(path)}"><button type="button" class="tb" data-add-url="${esc(path)}">Agregar</button></div></div>`;
  }

  if (f.type === 'image') {
    const val = v || '';
    return `<label class="${f.half ? 'fld half' : 'fld'}" for="${id}">${label}${help}<span class="img-field">${val ? `<img src="${esc(val)}" alt="" onerror="this.style.visibility='hidden'">` : `<span class="img-ph">${ico('image')}</span>`}<input id="${id}" data-path="${esc(path)}" type="url" value="${esc(val)}" placeholder="Enlace de la foto (https://…)"></span></label>`;
  }

  if (f.type === 'months') {
    const sel = new Set(Array.isArray(v) ? v : []);
    const M = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `<div class="fld">${label}<div class="multi months">${M.map((m, i) =>
      `<button type="button" role="checkbox" aria-checked="${sel.has(i + 1)}" class="mchip${sel.has(i + 1) ? ' on' : ''}" data-month="${esc(path)}" data-val="${i + 1}">${m}</button>`).join('')}</div><small class="help">${sel.size ? '' : 'Sin meses marcados: se muestra todo el año.'}</small></div>`;
  }

  if (f.type === 'multi') {
    const sel = new Set(Array.isArray(v) ? v : []);
    return `<div class="fld">${label}${help}<div class="multi">${f.options.map(([val, lab]) =>
      `<button type="button" role="checkbox" aria-checked="${sel.has(val)}" class="mchip${sel.has(val) ? ' on' : ''}" data-multi="${esc(path)}" data-val="${esc(val)}">${sel.has(val) ? ico('check') : ''}${esc(lab)}</button>`).join('')}</div></div>`;
  }

  if (f.type === 'linkgen') {
    const d0 = new Date(), iso = (x) => new Date(d0.getTime() + x * 864e5).toISOString().slice(0, 10);
    return `<div class="linkgen">
      <label class="fld"><span class="lbl">Nombre del huésped</span><input id="lg-name" type="text" placeholder="Ej: Familia González" autocomplete="off"></label>
      <div class="lg-dates"><label class="fld"><span class="lbl">Llegada</span><input id="lg-in" type="date" value="${iso(1)}"></label>
      <label class="fld"><span class="lbl">Salida</span><input id="lg-out" type="date" value="${iso(4)}"></label></div>
      <button type="button" class="btn-primary" id="lg-make">${ico('link')}Crear enlace</button>
      <div class="lg-result" id="lg-result" hidden></div>
    </div>`;
  }

  if (f.type === 'choice') {
    return `<div class="fld">${label}${help}<div class="choices" role="radiogroup">${f.options.map(([val, lab]) =>
      `<button type="button" role="radio" aria-checked="${v === val}" class="choice${v === val ? ' on' : ''}" data-set="${esc(path)}" data-val="${esc(val)}">${esc(lab)}</button>`).join('')}</div></div>`;
  }

  if (f.type === 'icon') {
    return `<div class="fld">${label}${help}<div class="icons" role="radiogroup">${ICONOS.map(([val, lab]) =>
      `<button type="button" role="radio" aria-checked="${v === val}" class="icon-opt${v === val ? ' on' : ''}" data-set="${esc(path)}" data-val="${val}">${ico(val)}<span>${esc(lab)}</span></button>`).join('')}</div></div>`;
  }

  const val = v ?? '';
  const cls = f.half ? 'fld half' : 'fld';
  if (f.type === 'textarea') return `<label class="${cls}" for="${id}">${label}${help}<textarea id="${id}" data-path="${esc(path)}" rows="2"${ph}>${esc(val)}</textarea></label>`;
  const type = { number: 'number', time: 'time', tel: 'tel', email: 'email', url: 'url' }[f.type] || 'text';
  return `<label class="${cls}" for="${id}">${label}${help}<input id="${id}" data-path="${esc(path)}" data-type="${f.type}" type="${type}" value="${esc(val)}"${ph}${f.type === 'number' ? ' step="any" inputmode="decimal"' : ''}></label>`;
}

function autosize() {
  document.querySelectorAll('#adm-main textarea').forEach((t) => { t.style.height = 'auto'; t.style.height = `${t.scrollHeight + 2}px`; });
}
function rerender() { const y = window.scrollY; $('#adm-main').classList.remove('anim'); $('#adm-main').innerHTML = sectionHTML(SECTIONS.find((x) => x.id === current)); autosize(); window.scrollTo(0, y); }

// Escribir en los campos
document.addEventListener('input', (e) => {
  const el = e.target.closest('[data-path]'); if (!el || !draft) return;
  let v = el.value;
  if (el.dataset.type === 'number') v = v === '' ? undefined : Number(v);
  set(draft, el.dataset.path, v);
  if (el.tagName === 'TEXTAREA') { el.style.height = 'auto'; el.style.height = `${el.scrollHeight + 2}px`; }
  // Actualiza el título de la ficha mientras escribes
  const m = el.dataset.path.match(/^(.*\.\d+)\.([^.]+)$/);
  if (m) {
    const btn = document.querySelector(`[data-toggle="${CSS.escape(m[1])}"]`);
    const add = btn?.closest('.fld')?.querySelector(':scope > .add');
    if (add?.dataset.title === m[2]) btn.querySelector('[data-title-of]').textContent = v || 'Sin nombre';
    if (add?.dataset.sub === m[2]) btn.querySelector('[data-sub-of]').textContent = v || '';
  }
  setDirty(true);
});

// Botones
let armedDelete = null;
document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('[data-open]');
  if (openBtn) return show(openBtn.dataset.open);

  const tog = e.target.closest('[data-toggle]');
  if (tog) { const k = tog.dataset.toggle; open.has(k) ? open.delete(k) : open.add(k); return rerender(); }

  const mo = e.target.closest('[data-month]');
  if (mo) {
    const list = arr(mo.dataset.month), val = +mo.dataset.val, i = list.indexOf(val);
    i >= 0 ? list.splice(i, 1) : list.push(val); list.sort((x, y) => x - y);
    setDirty(true); return rerender();
  }
  const mc = e.target.closest('[data-multi]');
  if (mc) {
    const list = arr(mc.dataset.multi), i = list.indexOf(mc.dataset.val);
    i >= 0 ? list.splice(i, 1) : list.push(mc.dataset.val);
    setDirty(true); return rerender();
  }
  if (e.target.closest('.add-photo')) { const box = e.target.closest('.fld').querySelector('.url-add'); box.hidden = false; box.querySelector('input').focus(); return; }
  const au = e.target.closest('[data-add-url]');
  if (au) {
    const inp = au.parentNode.querySelector('input'), url = inp.value.trim();
    if (!/^https?:\/\//.test(url)) { inp.focus(); return toast('Pega un enlace que empiece con https://', 'err'); }
    arr(au.dataset.addUrl).push(url); setDirty(true); return rerender();
  }
  if (e.target.closest('#lg-make')) return makeLink();
  const cp = e.target.closest('[data-copy]');
  if (cp) { navigator.clipboard?.writeText(cp.dataset.copy).then(() => toast('Enlace copiado.')).catch(() => { const i = document.querySelector('#lg-url'); i?.select(); }); return; }

  const pick = e.target.closest('[data-set]');
  if (pick) { set(draft, pick.dataset.set, pick.dataset.val); setDirty(true); return rerender(); }

  const b = e.target.closest('[data-act]'); if (!b || !draft) return;
  const path = b.dataset.list, list = arr(path), i = +b.dataset.i;
  if (b.dataset.act === 'del') {
    // Confirmación en dos toques (sin ventanas emergentes)
    const key = `${path}.${i}`;
    if (armedDelete !== key) {
      armedDelete = key;
      b.classList.add('armed');
      const label = b.lastChild?.nodeType === 3 ? b.lastChild : null;
      if (label) label.textContent = '¿Seguro?'; else b.title = 'Toca otra vez para eliminar';
      setTimeout(() => { if (armedDelete === key) { armedDelete = null; b.classList.remove('armed'); if (label) label.textContent = 'Eliminar'; } }, 3000);
      return;
    }
    armedDelete = null;
    list.splice(i, 1);
    open.clear();
  }
  if (b.dataset.act === 'add') {
    list.push(b.dataset.kind === 'string' ? '' : {});
    if (b.dataset.kind === 'object') { open.clear(); open.add(`${path}.${list.length - 1}`); }
  }
  const swap = (j) => { [list[i], list[j]] = [list[j], list[i]]; const a = `${path}.${i}`, c = `${path}.${j}`; if (open.has(a)) { open.delete(a); open.add(c); } };
  if (b.dataset.act === 'up' && i > 0) swap(i - 1);
  if (b.dataset.act === 'down' && i < list.length - 1) swap(i + 1);
  rerender();
  if (b.dataset.act === 'add') {
    const sel = b.dataset.kind === 'string' ? `[data-path="${CSS.escape(`${path}.${list.length - 1}`)}"]` : `[data-path^="${CSS.escape(`${path}.${list.length - 1}.`)}"]:not([type=hidden])`;
    const el = document.querySelector(sel); el?.focus(); el?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  setDirty(true);
});

$('#adm-back').addEventListener('click', () => show(null));

async function makeLink() {
  const nombre = $('#lg-name').value.trim(), llegada = $('#lg-in').value, salida = $('#lg-out').value;
  if (!nombre) { $('#lg-name').focus(); return toast('Escribe el nombre del huésped.', 'err'); }
  if (!llegada || !salida || salida < llegada) return toast('Revisa las fechas: la salida debe ser después de la llegada.', 'err');
  const btn = $('#lg-make'); btn.disabled = true;
  try {
    const { path } = await api({ action: 'link', slug: session.slug, password: session.password, nombre, llegada, salida });
    const url = new URL(path, location.href).href;
    const msg = `¡Hola ${nombre}! Les comparto la guía de ${draft.nombre}: wifi, cómo llegar, recomendaciones y todo lo de la cabaña. El código de la puerta aparecerá ahí mismo el día de su llegada. ${url}`;
    $('#lg-result').hidden = false;
    $('#lg-result').innerHTML = `<input id="lg-url" readonly value="${esc(url)}" onclick="this.select()">
      <div class="lg-btns"><button type="button" class="tb" data-copy="${esc(url)}">${ico('copy')}Copiar</button>
      <a class="tb wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(msg)}">${ico('chat')}Enviar por WhatsApp</a>
      <a class="tb" target="_blank" rel="noopener" href="${esc(url)}">${ico('ext')}Probar</a></div>
      <small class="help">Si cambiaste el código, guarda antes de enviar.</small>`;
  } catch (err) { toast(err.message, 'err'); }
  finally { btn.disabled = false; }
}

function setDirty(v) {
  dirty = v;
  $('#save-btn').disabled = !v;
  $('#save-state').textContent = v ? 'Tienes cambios sin guardar' : 'Todo guardado';
  $('#savebar').classList.toggle('pending', v);
}

// Limpia campos vacíos antes de guardar
function clean(v) {
  if (Array.isArray(v)) return v.map(clean).filter((x) => x !== undefined && x !== '' && !(typeof x === 'object' && !Array.isArray(x) && !Object.keys(x).length));
  if (v && typeof v === 'object') {
    const o = {};
    for (const [k, x] of Object.entries(v)) { const c = clean(x); if (c !== undefined && c !== '') o[k] = c; }
    return o;
  }
  return typeof v === 'string' ? v.trim() : v;
}

$('#save-btn').addEventListener('click', async () => {
  const data = clean(draft);
  if (!data.nombre) { show('basicos'); return toast('Ponle un nombre a la cabaña antes de guardar.', 'err'); }
  $('#save-btn').disabled = true; $('#save-btn').textContent = 'Guardando…';
  try {
    const res = await api({ action: session.creating ? 'create' : 'save', slug: session.slug, password: session.password, data });
    session.creating = false;
    setDirty(false);
    toast(res.mode === 'github' ? 'Guardado. Tus huéspedes verán los cambios en 1 o 2 minutos.' : res.mode === 'demo' ? 'Guardado. Toca el botón de arriba para verlo como huésped.' : 'Guardado.');
    if (!current) show(null);
  } catch (err) {
    setDirty(true);
    toast(err.message, 'err');
  } finally {
    $('#save-btn').textContent = 'Guardar';
  }
});

$('#adm-logout').addEventListener('click', () => {
  const btn = $('#adm-logout');
  if (dirty && !btn.dataset.armed) {
    btn.dataset.armed = '1'; btn.textContent = '¿Salir sin guardar?';
    return toast('Tienes cambios sin guardar. Toca de nuevo para salir sin guardarlos.', 'err');
  }
  try { sessionStorage.removeItem('adm'); } catch {}
  location.reload();
});

window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });

initLogin();
