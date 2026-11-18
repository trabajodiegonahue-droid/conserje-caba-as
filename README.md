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

**La portada muestra solo lo justo según el momento de la estadía** (con el enlace personal del huésped):

| Momento | Qué se ve arriba | Campos |
|---|---|---|
| Antes de llegar | Consejos prácticos + botón "Cómo llegar" | `antes_de_llegar` |
| Día de llegada | Primeros pasos + "si llegas de noche" | `primeros_pasos`, `como_llegar.noche` |
| Durante | Clima, un panorama según el clima, dónde comer hoy, consejo de temporada | `panoramas`, `restaurantes`, `temporada` |
| Último día | Hora de salida + lista para marcar + valoración | `checkout` |

Sin enlace personal se muestra "Durante". Debajo hay 6 apartados:

| Apartado | Campos del JSON |
|---|---|
| Llegar y moverse | `checkin`, `antes_de_llegar`, `como_llegar` (opciones, referencia, noche), `taxi`, `transporte_publico` |
| La casa | `fotos`, `estufa`, `equipos`, `donde_esta`, `otros`, `reglas`, `comodidades` |
| Comer | `restaurantes` (con `horario`, `precio` $/$$/$$$, `reserva`), `servicios_cercanos` |
| Qué hacer | clima en vivo (`coordenadas`), `panoramas` (lluvia / sol), `tours`, `temporada` (con `meses`) |
| Extras | `extras` (botón "Pedir" por WhatsApp) |
| Ayuda | `anfitrion`, números de emergencia, `bueno_saber`, `imprevistos` |

También: `bienvenida` (mensaje corto del anfitrión), `wifi` con QR, y `privado.codigo_acceso` (ver abajo).

Cualquier campo que no pongas simplemente no aparece. El chat (Gemini) lee todo el JSON menos la parte `privado`.

> En la demo, los restaurantes, almacenes y taxi son ficticios, y los enlaces de `resenas` son de ejemplo.

## Idiomas

La interfaz viene en 6 idiomas (español, inglés, portugués, alemán, italiano y francés) y se elige sola según el teléfono del huésped.

**El contenido** (reglas, pasos, recomendaciones…) lo escribes en español y se traduce desde el panel: **Datos básicos → Idiomas → Traducir a 5 idiomas**. Gemini traduce todo en unos segundos, tú revisas y tocas **Guardar**. Las traducciones quedan guardadas en el JSON (`traducciones`), así la página carga rápido, no gasta cuota en cada visita y funciona sin conexión.

Si después cambias un texto, el panel avisa "Hay textos nuevos sin traducir" para que vuelvas a traducir. Los nombres de negocios y calles no se traducen. El chat responde en cualquier idioma aunque no hayas traducido.

## Enlaces personales para cada huésped

Desde el panel (**Acceso y huéspedes → Enviar la guía a un huésped**) escribes el nombre y las fechas y el panel crea un enlace como `/cabana/los-arrayanes?g=…`. Con ese enlace el huésped ve:

- Un saludo con su nombre, sus fechas y la cuenta regresiva ("Faltan 3 días", "Noche 2 de 3", "Hoy es tu salida").
- **El código de la puerta, solo desde el día de llegada hasta el de salida.** Antes ve "Aparecerá el 20 nov".

El enlace va firmado: nadie puede cambiar las fechas ni inventar uno. El código vive en la parte `privado` del JSON, que **nunca** sale en la página pública ni se le entrega al chat de IA.

> Como el código queda guardado en tu repositorio de GitHub, deja el repositorio como **privado** y cambia el código de la caja de seguridad de vez en cuando.

## Instalable y sin internet

La guía se puede **instalar en el teléfono** como una app (botón al pie de la página; en iPhone: Compartir → Agregar a inicio) y **funciona sin conexión** una vez abierta, ideal para cabañas con mala señal. El chat sí necesita internet.

## Panel del anfitrión (`/admin`)

Cada dueño edita su cabaña desde el celular en `https://TU-PROYECTO.vercel.app/admin`, sin tocar el JSON. Al guardar, el panel hace un *commit* en GitHub y Vercel publica el cambio solo en 1 o 2 minutos. No necesitas base de datos.

**Configurarlo en Vercel** (*Settings → Environment Variables*, luego *Redeploy*):

| Variable | Qué poner |
|---|---|
| `ADMIN_PASSWORD` | Tu clave de administrador: edita todas las cabañas y crea nuevas. |
| `LINK_SECRET` | Una frase larga cualquiera para firmar los enlaces de huéspedes (si no la pones, se usa `ADMIN_PASSWORD`). Si la cambias, los enlaces ya enviados dejan de funcionar. |
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
