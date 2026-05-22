# Molinart — Portfolio (Next.js)

Portfolio moderno de **Emilio Molina / Molinart**, inspirado en la identidad visual de [molinart.net](https://molinart.net/) e implementado con React, Tailwind CSS y Framer Motion.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (tokens Molinart)
- Framer Motion (animaciones sutiles)
- i18n: `/es` (por defecto) y `/en`
- Sin jQuery, Bootstrap, pagePiling, Owl Carousel ni CSS legacy

## Secciones

1. Inicio / Home
2. Resumen / Summary
3. Cronología de Carrera / Career Timeline
4. Experiencia / Experience (grid responsive)
5. Tecnologías / Technologies
6. Ask Emilio AI (frontend only, próximamente)
7. Contacto / Contact (formulario sin envío real)

## Instalación

```bash
cd molinart-next
npm install
npm run dev
```

- Español: [http://localhost:3000/es](http://localhost:3000/es)
- Inglés: [http://localhost:3000/en](http://localhost:3000/en)
- `/` redirige a `/es` o `/en` según `Accept-Language`

## Build

```bash
npm run build
npm start
```

## Estructura

```
molinart-next/
├── content/                 # Textos i18n (es/en)
├── public/images/           # Logo, fondos, fotos
├── public/files/            # CV en PDF
├── src/
│   ├── app/[lang]/         # layout + page
│   ├── components/
│   │   ├── layout/         # header, menú, nav bullets, footer
│   │   └── sections/       # 7 secciones
│   ├── hooks/              # useActiveSection
│   └── lib/                # utils (cn)
└── src/proxy.ts            # redirect / → /es|/en
```

## Próximas fases

- Ask Emilio AI (API + Vercel AI SDK)
- Envío de contacto (Resend u otro)
- Supabase u otros backends si aplican

## Licencia

Proyecto privado — portfolio personal.
