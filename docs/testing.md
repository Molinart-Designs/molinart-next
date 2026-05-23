# Local API testing

Prueba las rutas del backend con el servidor de desarrollo en marcha:

```bash
npm run dev
```

Base URL por defecto: `http://localhost:3000`

También puedes usar los scripts en `scripts/` (requieren `curl` y Bash).

---

## POST /api/contact

### curl manual

```bash
curl -sS -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Demo",
    "email": "jane.demo@example.com",
    "phone": "+52 55 1234 5678",
    "message": "Hola Emilio, me interesa conversar sobre un proyecto Laravel + React."
  }'
```

### Respuesta exitosa (HTTP 200)

```json
{
  "success": true
}
```

Qué verificar:

- Fila nueva en Supabase → tabla `contacts`.
- Email en la bandeja de `CONTACT_TO_EMAIL` (si Gmail SMTP está configurado).

### Script

```bash
bash scripts/test-contact.sh
```

---

## POST /api/chat

### curl manual (español, intención de hiring)

```bash
curl -sS -X POST "http://localhost:3000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Buscamos un ingeniero senior para un proyecto Laravel y React de 6 meses. ¿Te interaría?",
    "locale": "es"
  }'
```

### Segunda pregunta (misma sesión)

Copia `sessionId` de la respuesta anterior:

```bash
curl -sS -X POST "http://localhost:3000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "¿Qué experiencia tienes con Mailchimp y experimentación de producto?",
    "sessionId": "PEGAR-UUID-AQUI",
    "locale": "es"
  }'
```

### Respuesta exitosa (HTTP 200)

```json
{
  "sessionId": "550e8400-e29b-41d4-a716-446655440000",
  "answer": "Texto generado por el asistente..."
}
```

Qué verificar:

- Filas en `chat_sessions` y `chat_messages` (roles `user` y `assistant`).
- Posible email de lead si el mensaje dispara palabras clave de hiring (ver `src/lib/lead-intent.ts`).

### Scripts

```bash
bash scripts/test-chat.sh
bash scripts/test-chat-en.sh
```

---

## Errores frecuentes

### Variables de entorno faltantes (HTTP 503)

**Síntoma**

```json
{
  "error": "AI service is not configured"
}
```

o

```json
{
  "error": "Database is not configured"
}
```

o

```json
{
  "error": "Email service is not configured"
}
```

**Causa:** `.env.local` incompleto o el servidor no se reinició tras editarlo.

**Qué revisar**

| Ruta | Variables necesarias |
|------|----------------------|
| `/api/chat` | `GOOGLE_GENERATIVE_AI_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |
| `/api/contact` | Supabase + `SMTP_*`, `CONTACT_TO_EMAIL` |
| `/api/chat` (lead email) | SMTP cuando el mensaje dispara hiring intent |
| Email | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_APP_PASSWORD`, `CONTACT_TO_EMAIL` |

Reinicia: `Ctrl+C` y `npm run dev`.

---

### Credenciales Supabase inválidas (HTTP 500)

**Síntoma**

```json
{
  "error": "Could not save contact submission"
}
```

o errores similares al crear sesión o mensajes de chat.

**Causa habitual**

- `SUPABASE_SERVICE_ROLE_KEY` incorrecta o revocada.
- `NEXT_PUBLIC_SUPABASE_URL` de otro proyecto.
- Tablas no creadas → ejecuta `supabase/schema.sql`.

**Consola del servidor:** mensajes `contact insert`, `chat session create`, etc.

---

### Gmail SMTP — App Password o envío (HTTP 500 / sin correo)

**Síntoma**

```json
{ "error": "Email service is not configured" }
```

(HTTP 503) o

```json
{ "error": "Could not send notification email" }
```

(HTTP 500)

**Causas habituales**

- Falta `SMTP_APP_PASSWORD` o variables SMTP incompletas.
- No tienes **verificación en dos pasos** en la cuenta Google Workspace.
- Usas la contraseña normal de Gmail en lugar de una **Contraseña de aplicación**.
- `SMTP_SECURE=true` con puerto `465`; si usas `587`, prueba `SMTP_SECURE=false` y puerto `587`.

**Qué hacer**

1. Google Account → **Seguridad** → **Verificación en dos pasos** (activada).
2. Crear App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. Pegar en `SMTP_APP_PASSWORD` (16 caracteres, sin espacios).
4. `SMTP_USER` y `CONTACT_TO_EMAIL` = `emilio@molinart.net`.
5. Reinicia `npm run dev` y revisa logs (`contact email failed`, `Invalid login`).

---

### Gemini — API key (HTTP 500)

**Síntoma**

```json
{
  "error": "Unexpected error processing chat"
}
```

**Causas habituales**

- `GOOGLE_GENERATIVE_AI_API_KEY` ausente, mal copiada o sin permisos.
- Cuota / billing de Google AI Studio agotada.
- Modelo no disponible en la región (el proyecto usa `gemini-2.0-flash`).

**Qué hacer**

1. Genera una key en [Google AI Studio](https://aistudio.google.com/).
2. Ponla en `.env.local` como `GOOGLE_GENERATIVE_AI_API_KEY`.
3. Reinicia `npm run dev` y vuelve a probar `scripts/test-chat.sh`.

---

### Validación (HTTP 400)

**Síntoma**

```json
{
  "error": "Validation failed",
  "details": { ... }
}
```

**Causa:** JSON mal formado, campos vacíos, email inválido o `sessionId` que no es UUID.

---

## Validación rápida con jq (opcional)

Si tienes [jq](https://jqlang.org/) instalado:

```bash
bash scripts/test-chat.sh | jq .
bash scripts/test-contact.sh | jq .
```
