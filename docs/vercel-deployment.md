# Despliegue en Vercel — Molinart Next

Guía paso a paso para publicar el portfolio con Ask Emilio AI y el formulario de contacto en producción.

**Requisitos previos:** cuenta en [GitHub](https://github.com), [Vercel](https://vercel.com), [Supabase](https://supabase.com), [Google AI Studio](https://aistudio.google.com/) (Gemini) y **Google Workspace** con SMTP (App Password).

---

## 1. Subir el repositorio a GitHub

1. Crea un repositorio nuevo en GitHub (vacío o con README).
2. En tu máquina, desde la raíz del monorepo o del proyecto:

```bash
git init
git add .
git commit -m "Initial commit: Molinart portfolio Next.js"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Si el código Next.js vive en una subcarpeta (`molinart-next/`), puedes:

- Subir solo esa carpeta como repo independiente, **o**
- Mantener el monorepo y configurar el **Root Directory** en Vercel (paso 4).

Asegúrate de que `.env.local` **no** esté en el commit (debe estar en `.gitignore`).

---

## 2. Importar el proyecto en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new).
2. **Import Git Repository** → elige el repo de GitHub.
3. Autoriza a Vercel si es la primera vez.

---

## 3. Framework preset: Next.js

Vercel suele detectar Next.js automáticamente.

| Campo | Valor |
|-------|--------|
| **Framework Preset** | Next.js |
| **Build Command** | `npm run build` (por defecto) |
| **Output Directory** | (dejar por defecto; Next.js App Router no usa `out` salvo export estático) |
| **Install Command** | `npm install` |

No cambies nada si la detección ya muestra Next.js 16.

---

## 4. Root Directory (si aplica)

Si el repositorio contiene más que `molinart-next/`:

1. En **Configure Project** → **Root Directory** → **Edit**.
2. Selecciona `molinart-next`.
3. Confirma.

Si el repo **es solo** el contenido de `molinart-next`, deja Root Directory en `/` (raíz).

---

## 5. Variables de entorno

En **Environment Variables** (Production, Preview y Development según prefieras), añade:

| Variable | Obligatoria | Notas |
|----------|-------------|--------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Sí (chat) | Solo servidor. Desde Google AI Studio. |
| `NEXT_PUBLIC_SUPABASE_URL` | Sí | URL del proyecto Supabase (`https://xxx.supabase.co`). |
| `SUPABASE_SERVICE_ROLE_KEY` | Sí | **Service role** — nunca en el cliente. |
| `SMTP_HOST` | Sí (contacto) | `smtp.gmail.com` |
| `SMTP_PORT` | Sí | `465` |
| `SMTP_SECURE` | Sí | `true` |
| `SMTP_USER` | Sí | `emilio@molinart.net` |
| `SMTP_APP_PASSWORD` | Sí | Contraseña de aplicación de Google (no la contraseña normal). |
| `CONTACT_TO_EMAIL` | Sí | `emilio@molinart.net` |

**Gmail / Workspace:** activa [verificación en dos pasos](https://myaccount.google.com/signinoptions/two-step-verification) y crea una [App Password](https://myaccount.google.com/apppasswords).

Copia los mismos nombres que en `.env.example`. No uses comillas en el panel de Vercel salvo que el valor las requiera.

**Importante:** después de guardar variables, un redeploy aplica los cambios en rutas ya desplegadas.

---

## 6. Ejecutar `schema.sql` en Supabase (antes de probar producción)

1. Abre tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard).
2. **SQL Editor** → **New query**.
3. Pega el contenido de `supabase/schema.sql` del repo.
4. **Run**.

Debes tener las tablas:

- `contacts`
- `chat_sessions`
- `chat_messages`

Haz esto **antes** de enviar formularios o chat en la URL de Vercel; si no, verás errores 500 al insertar.

---

## 7. Deploy

1. Clic en **Deploy**.
2. Espera a que termine el build (`npm run build` en los logs).
3. Anota la URL de producción, por ejemplo `https://molinart-xxx.vercel.app`.

Cada push a `main` puede generar un despliegue automático si dejaste activado **Production Branch**.

---

## 8. Probar en producción

### Páginas

| URL | Qué comprobar |
|-----|----------------|
| `https://TU_DOMINIO/es` | Home, secciones, Ask Emilio, contacto en español |
| `https://TU_DOMINIO/en` | Misma UI en inglés |

La raíz `/` debería redirigir a `/es` o `/en` según `Accept-Language` (proxy del proyecto).

### APIs

Sustituye `TU_DOMINIO` en los ejemplos. Ver también [testing.md](./testing.md).

**Contacto**

```bash
curl -sS -X POST "https://TU_DOMINIO/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prod Test",
    "email": "test@example.com",
    "message": "Mensaje de prueba desde Vercel."
  }'
```

Esperado: `{"success":true}` y fila en `contacts`.

**Chat**

```bash
curl -sS -X POST "https://TU_DOMINIO/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is your experience with Laravel and React?",
    "locale": "en"
  }'
```

Esperado: JSON con `sessionId` y `answer`.

En el navegador: sección **Ask Emilio AI** y formulario **Contacto** con la misma UI que en local.

---

## 9. Troubleshooting

### 503 — configuración faltante

**Síntoma en UI o curl:**

```json
{ "error": "AI service is not configured" }
```

o

```json
{ "error": "Database is not configured" }
```

**Solución**

1. Vercel → proyecto → **Settings** → **Environment Variables**.
2. Verifica que las variables existan en **Production** (no solo Preview).
3. **Redeploy** el último deployment.

---

### Errores de insert en Supabase (500)

**Síntoma:** `Could not save contact submission`, `Could not create chat session`, etc.

**Causas habituales**

- `schema.sql` no ejecutado en el proyecto Supabase correcto.
- `SUPABASE_SERVICE_ROLE_KEY` de otro proyecto o rotada.
- `NEXT_PUBLIC_SUPABASE_URL` mal copiada.

**Solución**

1. Confirma tablas en **Table Editor**.
2. Regenera service role key si hace falta (Settings → API).
3. Actualiza variables en Vercel y redeploy.
4. Revisa **Functions** / runtime logs en Vercel para el mensaje exacto de Supabase.

---

### Gmail SMTP — App Password o login

**Síntoma:** `503 Email service is not configured` o `500 Could not send notification email`.

**Solución**

1. Todas las variables `SMTP_*` y `CONTACT_TO_EMAIL` en Production.
2. App Password válida (cuenta con 2-Step Verification).
3. No uses `SMTP_APP_PASSWORD` con espacios; copia los 16 caracteres seguidos.
4. Revisa runtime logs en Vercel (`Invalid login`, `contact email failed`).
5. Volumen bajo/demo: Gmail SMTP es adecuado; para alto volumen considera otro proveedor más adelante.

---

### Errores de Gemini

**Síntoma:** chat devuelve 500 o `Unexpected error processing chat`.

**Solución**

1. Valida `GOOGLE_GENERATIVE_AI_API_KEY` en Production.
2. Comprueba cuotas en Google AI Studio.
3. El proyecto usa el modelo `gemini-2.0-flash`; si tu región/cuenta no lo soporta, ajusta el ID en `src/app/api/chat/route.ts` (solo si cambias código en un deploy futuro).
4. Redeploy tras corregir la key.

---

## 10. Notas de seguridad

| Regla | Detalle |
|-------|---------|
| **Service role** | `SUPABASE_SERVICE_ROLE_KEY` bypassa RLS. Solo en rutas servidor (`src/app/api/*`, `src/lib/supabase-server.ts`). **Nunca** en componentes `"use client"` ni en variables `NEXT_PUBLIC_*` excepto la URL pública. |
| **Claves de servidor** | `GOOGLE_GENERATIVE_AI_API_KEY`, `SMTP_APP_PASSWORD`, service role solo en Vercel env / `.env.local`. **Nunca** `NEXT_PUBLIC_` para SMTP. |
| **`.env.local`** | No commitear. Ya debe estar en `.gitignore`. Usa Vercel Environment Variables en prod. |
| **`NEXT_PUBLIC_`** | Solo expón lo que el navegador necesita (p. ej. `NEXT_PUBLIC_SUPABASE_URL`). La anon key de Supabase **no** se usa en este proyecto; no sustituyas service role por anon en el cliente. |
| **Preview deployments** | Si usas Preview en PRs, decide si las mismas keys de prod son aceptables o crea un proyecto Supabase de staging. |

---

## Checklist rápido

- [ ] Repo en GitHub
- [ ] Proyecto importado en Vercel (Next.js, root correcto)
- [ ] Variables de entorno en Production
- [ ] `supabase/schema.sql` ejecutado
- [ ] Deploy exitoso
- [ ] `/es` y `/en` OK
- [ ] `/api/contact` y `/api/chat` OK
- [ ] Email de prueba recibido (opcional)
- [ ] `.env.local` fuera de git

## Referencias

- [Pruebas locales](./testing.md)
- [README del proyecto](../README.md)
