import type { LocalizedContent } from "@/content/i18n";

const items = [
  { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg" },
  { name: "Laravel", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/laravel.svg" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg" },
  { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" },
  { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" },
  { name: "Angular", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg" },
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" },
  { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" },
  { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" },
  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
  { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
  { name: "Google Cloud", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" },
  { name: "Playwright", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/playwright.svg" },
  { name: "Dart", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dart.svg" },
  { name: "Flutter", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flutter.svg" },
] as const;

export const technologiesContent = {
  es: {
    heading: {
      accent: "Tecnologías",
      title: "Para productos modernos.",
      description:
        "Lenguajes, frameworks, datos y herramientas que uso para llevar ideas a sistemas productivos.",
    },
    stats: {
      value: "20+",
      label: "Herramientas clave",
    },
    items,
  },
  en: {
    heading: {
      accent: "Technologies",
      title: "For modern products.",
      description:
        "Languages, frameworks, data tooling, and platforms I use to turn ideas into production systems.",
    },
    stats: {
      value: "20+",
      label: "Core tools",
    },
    items,
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string; description: string };
  stats: { value: string; label: string };
  items: typeof items;
}>;
