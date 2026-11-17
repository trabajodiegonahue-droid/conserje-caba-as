# 🏡 Conserje IA para cabañas – Puerto Varas

Web app donde cada cabaña tiene su página (`/cabana/<nombre>`) con wifi, horarios, reglas, estufa, contacto y recomendaciones, más un chat con **Gemini Flash** que responde **en el idioma del huésped** (español, inglés, portugués, alemán, italiano, francés, y cualquier otro), usando solo la información de esa cabaña.

Demo: `/cabana/los-arrayanes` (cabaña ficticia).

## Estructura

```
data/cabanas/los-arrayanes.json   ← datos de cada cabaña (1 archivo por cabaña)
public/cabana.html, app.js, styles.css  ← plantilla única (móvil primero)
api/chat.js      ← función serverless que llama a Gemini (la API key vive aquí)
api/cabana.js    ← entrega los datos de una cabaña
vercel.json      ← /cabana/:slug → plantilla
```

## Qué incluye cada página

| Sección | Campo del JSON |
|---|---|
| Portada, wifi, horarios | `nombre`, `lugar`, `descripcion`, `wifi`, `checkin`, `checkout` |
| Cómo llegar (aeropuerto, bus, auto) + botón Maps | `como_llegar` |
| Moverse: minibuses, buses y colectivos (dónde se toman, adónde van, precio) | `transporte_publico` |
| La casa: tinaja, parrilla, TV, calefón… | `equipos`, `donde_esta`, `otros`, `reglas` |
| Estufa paso a paso | `estufa` |
| Servicios extra con botón "Pedir" por WhatsApp | `extras` |
| Hoy: clima en vivo (Open-Meteo, gratis) + panoramas si llueve / si hay sol | `coordenadas`, `panoramas` |
| Restaurantes, tours | `restaurantes`, `tours` |
| Cerca: supermercado, farmacia, bencinera, cajero | `servicios_cercanos` |
| Antes de irte: checklist + reseñas | `checkout.lista`, `resenas` |
| Ayuda: anfitrión, reportar problema, imprevistos, 131/132/133 | `anfitrion`, `imprevistos` |

Cualquier campo que no pongas simplemente no aparece. El chat (Gemini) lee **todo** el JSON, así que cualquier dato que agregues ya lo puede responder.

> En la demo, los enlaces de `resenas` son de ejemplo: reemplázalos por el enlace real de tu ficha de Google o Airbnb.

## Panel del anfitrión (`/admin`)

Cada dueño edita su cabaña desde el celular en `https://TU-PROYECTO.vercel.app/admin`, sin tocar el JSON. Al guardar, el panel hace un *commit* en GitHub y Vercel publica el cambio solo en 1 o 2 minutos. No necesitas base de datos.

**Configurarlo en Vercel** (*Settings → Environment Variables*, luego *Redeploy*):

| Variable | Qué poner |
|---|---|
| `ADMIN_PASSWORD` | Tu clave de administrador: edita todas las cabañas y crea nuevas. |
| `CLAVES_CABANAS` | (Opcional) Claves de cada dueño: `los-arrayanes:clave1,el-mirador:clave2`. Cada uno solo puede editar la suya. |
| `GITHUB_REPO` | Tu repositorio, ej: `tu-usuario/conserje-caba-as`. |
| `GITHUB_BRANCH` | La rama que publica Vercel (normalmente `main`). |
| `GITHUB_TOKEN` | Un token de GitHub con permiso para escribir en ese repositorio (ver abajo). |

**Crear el token de GitHub:** en GitHub ve a *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*. En *Repository access* elige **solo** este repositorio, y en *Permissions → Contents* elige **Read and write**. Copia el token y pégalo en Vercel como `GITHUB_TOKEN`. Nunca lo pongas en el código.

En tu computador (`npm run dev`) el panel guarda directo en `data/cabanas/` y, si no configuraste `ADMIN_PASSWORD`, la clave es `admin`.

## Agregar una cabaña nueva

**Desde el panel:** entra a `/admin`, elige "＋ Nueva cabaña", escribe su dirección (ej. `el-mirador`) y tu `ADMIN_PASSWORD`.

**A mano:**

1. Copia `data/cabanas/los-arrayanes.json` como `data/cabanas/el-mirador.json`.
2. Cambia los datos (el campo `slug` debe ser igual al nombre del archivo; solo minúsculas, números y guiones).
3. Sube el cambio a GitHub → Vercel publica solo. La URL será `/cabana/el-mirador`.

Tip: genera un código QR con esa URL y déjalo impreso en la cabaña.

## Publicar gratis en Vercel (paso a paso)

1. **Clave de Gemini**: entra a https://aistudio.google.com/apikey con tu cuenta de Google → *Create API key* → cópiala. (El plan gratuito de Flash no pide tarjeta.)
2. **Cuenta en Vercel**: ve a https://vercel.com/signup y regístrate con *Continue with GitHub* (plan Hobby, gratis).
3. **Importar el proyecto**: en Vercel → *Add New… → Project* → elige el repositorio `conserje-caba-as` → *Import*.
4. **Configuración**: *Framework Preset* = **Other**. No cambies Build ni Output.
5. **Variable secreta**: en la misma pantalla abre *Environment Variables* y agrega
   - Name: `GEMINI_API_KEY` — Value: tu clave.
   (Opcional: `GEMINI_MODEL` si quieres fijar un modelo, por ejemplo `gemini-2.5-flash`. Por defecto usa `gemini-flash-latest`.)
6. Pulsa **Deploy**. En ~1 minuto tendrás una URL tipo `https://conserje-caba-as.vercel.app`.
7. Abre `https://TU-PROYECTO.vercel.app/cabana/los-arrayanes` y prueba el chat.

> Si agregas o cambias la variable después del primer deploy: *Settings → Environment Variables*, guárdala y luego *Deployments → ⋯ → Redeploy*.

La clave **nunca llega al navegador**: el celular habla con `/api/chat` y es esa función en el servidor de Vercel la que llama a Google.

## Probar en tu computador (opcional)

Requiere Node 18+.

```bash
cp .env.example .env   # y pega tu clave en GEMINI_API_KEY
npm run dev            # abre http://localhost:3000/cabana/los-arrayanes
```

## Notas

- El plan gratuito de Gemini tiene límites por minuto/día; si se superan, el chat muestra un aviso para reintentar.
- Los datos de la cabaña (incluida la clave del wifi) son visibles para quien tenga el enlace: comparte la URL solo con tus huéspedes.
- Google puede usar los datos del plan gratuito para mejorar sus productos; no pongas información sensible en los JSON.
