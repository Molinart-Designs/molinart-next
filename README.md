# Molinart — Portfolio (Next.js)

Portfolio moderno de **Emilio Molina / Molinart**, inspirado en la identidad visual de [molinart.net](https://molinart.net/) e implementado con React, Tailwind CSS y Framer Motion.

Incluye **Ask Emilio AI** (asistente con Gemini) y **formulario de contacto** con persistencia en Supabase y notificaciones por **Gmail SMTP** (Google Workspace).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (tokens Molinart)
- Framer Motion
- Vercel AI SDK + Google Gemini (`@ai-sdk/google`)
- Supabase (Postgres)
- Nodemailer + Gmail SMTP (email)
- Zod (validación API)
- i18n: `/es` (por defecto) y `/en`

## Arquitectura

```mermaid
flowchart LR
  Visitor[Visitante] --> UI[Next.js UI]
  UI --> ChatAPI["/api/chat"]
  UI --> ContactAPI["/api/contact"]
  ChatAPI --> Gemini[Gemini via AI SDK]
  ChatAPI --> Supabase[(Supabase)]
  ContactAPI --> Supabase
  ChatAPI --> SMTP[Gmail SMTP]
  ContactAPI --> SMTP
  SMTP --> Emilio[emilio@molinart.net]
  ChatAPI --> Context[ai-profile-context.ts]
```

## Secciones

1. Inicio / Home
2. Resumen / Summary
3. Cronología / Career Timeline
4. Experiencia / Experience
5. Tecnologías / Technologies
6. **Ask Emilio AI** (chat + Gemini)
7. **Contacto / Contact** (form + Supabase + Gmail SMTP)

## Instalación

```bash
cd molinart-next
npm install
cp .env.example .env.local
# Completa las variables (ver abajo)
npm run dev
```

- Español: [http://localhost:3000/es](http://localhost:3000/es)
- Inglés: [http://localhost:3000/en](http://localhost:3000/en)

## Variables de entorno

Copia `.env.example` → `.env.local`:

| Variable | Uso |
|----------|-----|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Gemini (solo servidor) |
| `GOOGLE_GENERATIVE_AI_MODEL` | Modelo Gemini (default: `gemini-3.1-flash-lite`; ej. `gemini-2.5-flash-lite`) |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Escritura server-side (nunca en el cliente) |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | `emilio@molinart.net` |
| `SMTP_APP_PASSWORD` | Contraseña de aplicación de Google (solo servidor) |
| `CONTACT_TO_EMAIL` | Destino de notificaciones |

## Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. Ejecuta el SQL en `supabase/schema.sql` (SQL Editor).
3. Copia URL y **service role key** al `.env.local`.

Tablas: `contacts`, `chat_sessions`, `chat_messages`.

## Gmail SMTP (Google Workspace)

1. Activa **verificación en dos pasos** en la cuenta de Google Workspace.
2. Crea una **Contraseña de aplicación**: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. Copia la contraseña en `SMTP_APP_PASSWORD` (sin espacios).
4. Usa `SMTP_USER=emilio@molinart.net` y `CONTACT_TO_EMAIL=emilio@molinart.net`.

Las credenciales SMTP solo viven en `.env.local` o en Vercel Environment Variables — nunca en el cliente.

## Pruebas locales de API

Con `npm run dev` en marcha, usa [docs/testing.md](./docs/testing.md) o los scripts:

```bash
bash scripts/test-contact.sh
bash scripts/test-chat.sh
bash scripts/test-chat-en.sh
```

## API

### `POST /api/chat`

```json
{
  "message": "What is your Laravel experience?",
  "sessionId": "optional-uuid",
  "visitorEmail": "optional@email.com",
  "locale": "es"
}
```

Respuesta: `{ "sessionId": "...", "answer": "..." }`

### `POST /api/contact`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+52...",
  "message": "Hello"
}
```

Respuesta: `{ "success": true }`

## Build

```bash
npm run build
npm start
```

## Despliegue en Vercel

Guía completa: [docs/vercel-deployment.md](./docs/vercel-deployment.md) — GitHub, variables de entorno, Supabase, deploy y pruebas en producción.

## Estructura

```
molinart-next/
├── content/                 # Textos i18n + ai-profile-context.ts
├── supabase/schema.sql
├── docs/testing.md          # curl y scripts de prueba API
├── docs/vercel-deployment.md # Despliegue en Vercel
├── docs/eval-cases.md       # Preguntas de evaluación
├── scripts/                 # test-contact.sh, test-chat.sh, …
├── src/app/api/             # chat, contact
├── src/components/sections/
├── src/lib/                 # supabase, email (SMTP), schemas
└── public/
```

## Mini Project Rubric Fit (BSG Institute)

| Criterio | Cómo se cumple |
|----------|----------------|
| **AI integration** | Ask Emilio AI con Gemini, system prompt acotado al perfil |
| **Backend / data** | Supabase guarda chats y contactos |
| **Notifications** | Gmail SMTP avisa a Emilio en contacto y señales de hiring en chat |
| **UX** | UI existente intacta; estados loading / error / éxito |
| **Security** | Keys solo en API routes; validación Zod |
| **Demo-ready** | Contexto curado sin RAG; setup documentado |

## Demo Script (5–7 min)

1. **Home (30 s)** — Presentar portfolio, i18n `/es` ↔ `/en`, navegación por secciones.
2. **Experience + Timeline (1 min)** — Recorrido visual de trayectoria y proyectos.
3. **Ask Emilio AI (2 min)** — Pregunta sugerida sobre stack; segunda pregunta de hiring para mostrar email (si SMTP configurado).
4. **Hallucination check (1 min)** — Pregunta fuera de contexto; verificar que no inventa datos.
5. **Contact form (1 min)** — Enviar lead de prueba; mostrar fila en Supabase y email recibido.
6. **Architecture (1 min)** — Diagrama Mermaid, variables de entorno, `schema.sql`.
7. **Cierre (30 s)** — Próximo paso: RAG/pgvector; no implementado en v1.

## Evaluación

Ver [docs/eval-cases.md](./docs/eval-cases.md) — 8 preguntas con comportamiento esperado.

## Licencia

Proyecto privado — portfolio personal.
