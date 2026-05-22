# Molinart — Portfolio (Next.js)

Reconstrucción del portfolio [molinart.net](https://molinart.net/) en Next.js, manteniendo el diseño, animaciones y estructura del sitio Laravel original.

## Stack

- Next.js 16 (App Router) + TypeScript
- CSS original (`public/css/style.css`) + Bootstrap 4
- **pagePiling** — scroll vertical por secciones (escritorio ≥1280px)
- **Cronología horizontal** — `timeline.js` con Prev/Next
- **Owl Carousel** — carrusel de experiencia
- Barras de progreso animadas — `jquery.appear`
- Menú lateral deslizante + loader SVG

## Secciones (igual que el sitio en vivo)

1. Inicio / Hero (imagen, círculos animados, scroll mouse)
2. Resumen (4 pilares + barras de %)
3. Cronología de Carrera
4. Experiencia (carrusel)
5. Tecnologías (iconos)
6. Contacto (formulario visual; envío en fase posterior)

## Instalación

```bash
cd molinart-next
npm install --legacy-peer-deps
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). En pantallas anchas verás el scroll por secciones y la navegación lateral derecha como en el sitio original.

## Estructura

```
content/           # Textos y datos editables
public/css/        # style.css, pagepiling, owl
public/js/         # pagepiling, timeline
public/images/     # fondos, logo, slider, portfolio
src/components/molinart/   # Secciones y legacy-init
```

## Build / Vercel

```bash
npm run build
npm start
```

Despliega la carpeta `molinart-next` en Vercel sin variables de entorno.

## Próximas fases

- Ask Emilio AI (sección nueva)
- Envío de contacto (Resend)
- Supabase / IA si aplica

## Nota

El formulario de contacto replica el diseño del original; el botón **Enviar** permanece deshabilitado hasta integrar el backend.
