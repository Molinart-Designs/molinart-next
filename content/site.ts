import type { LocalizedContent } from "@/content/i18n";

export const siteConfig = {
  name: "Molinart",
  author: "Emilio Molina",
  url: "https://www.molinart.net",
} as const;

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/molina90", label: "Facebook" },
  { name: "Instagram", href: "https://www.instagram.com/emolinarts/", label: "Instagram" },
  { name: "GitHub", href: "https://github.com/Molinart-Designs/", label: "GitHub" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/molinart/", label: "LinkedIn" },
] as const;

/** Used by JSON-LD Person.sameAs */
export const personSameAsUrls = socialLinks
  .filter((link) => link.name === "LinkedIn" || link.name === "GitHub")
  .map((link) => link.href);

export const siteMetadata = {
  es: {
    title: "Emilio Molina | Ingeniero de Software Principal, Full-Stack e IA",
    description:
      "Ingeniero de Software Principal con más de 16 años de experiencia construyendo plataformas SaaS, empresariales, full-stack y habilitadas con IA usando PHP, Laravel, Node.js, React, Python, PostgreSQL, Docker y AWS.",
    locale: "es_MX",
    keywords: [
      "Ingeniero de Software Principal",
      "Staff Software Engineer",
      "Desarrollador Full Stack",
      "Ingeniero IA",
      "arquitectura de software",
      "plataformas SaaS",
      "software empresarial",
      "modernización legacy",
      "APIs backend",
      "aplicaciones cloud-native",
      "AWS",
      "Docker",
      "PostgreSQL",
      "FastAPI",
      "Node.js",
      "React",
      "Laravel",
      "PHP",
      "sistemas RAG",
      "asistentes de IA",
      "liderazgo técnico",
    ],
    openGraph: {
      title: "Emilio Molina — Ingeniero de Software Principal & Full-Stack con IA",
      description:
        "Construyo y modernizo software empresarial, plataformas SaaS, APIs backend y productos habilitados con IA combinando arquitectura, pensamiento de producto y liderazgo técnico.",
    },
    twitter: {
      title: "Emilio Molina — Ingeniero de Software Principal & Full-Stack con IA",
      description:
        "Construyo y modernizo software empresarial, plataformas SaaS, APIs backend y productos habilitados con IA combinando arquitectura, pensamiento de producto y liderazgo técnico.",
    },
  },
  en: {
    title: "Emilio Molina | Principal Software Engineer, Full-Stack & AI Engineer",
    description:
      "Principal Software Engineer with 16+ years of experience building SaaS, enterprise, full-stack, and AI-enabled platforms using PHP, Laravel, Node.js, React, Python, PostgreSQL, Docker, and AWS.",
    locale: "en_US",
    keywords: [
      "Principal Software Engineer",
      "Staff Software Engineer",
      "Full-Stack Engineer",
      "AI Engineer",
      "LLM Engineer",
      "SaaS platforms",
      "enterprise software",
      "legacy modernization",
      "backend APIs",
      "cloud-native applications",
      "AWS",
      "Docker",
      "PostgreSQL",
      "FastAPI",
      "Node.js",
      "React",
      "Laravel",
      "PHP",
      "RAG systems",
      "AI assistants",
      "technical leadership",
    ],
    openGraph: {
      title: "Emilio Molina — Principal Software Engineer & AI/Full-Stack Developer",
      description:
        "I build and modernize enterprise software, SaaS platforms, backend APIs, and AI-enabled products with strong architecture, product thinking, and technical leadership.",
    },
    twitter: {
      title: "Emilio Molina — Principal Software Engineer & AI/Full-Stack Developer",
      description:
        "I build and modernize enterprise software, SaaS platforms, backend APIs, and AI-enabled products with strong architecture, product thinking, and technical leadership.",
    },
  },
} as const satisfies LocalizedContent<{
  title: string;
  description: string;
  locale: string;
  keywords: readonly string[];
  openGraph: { title: string; description: string };
  twitter: { title: string; description: string };
}>;

export const siteContent = {
  es: {
    navigation: [
      { id: "home", label: "Inicio", href: "#home" },
      { id: "about", label: "Resumen", href: "#about" },
      { id: "timeline", label: "Cronología de Carrera", href: "#timeline" },
      { id: "experience", label: "Experiencia", href: "#experience" },
      { id: "technologies", label: "Tecnologías", href: "#technologies" },
      { id: "ask-emilio", label: "Ask Emilio AI", href: "#ask-emilio" },
      { id: "contact", label: "Contacto", href: "#contact" },
    ],
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
    },
    language: {
      label: "Cambiar idioma",
      next: "English",
    },
    resume: {
      label: "Descargar CV",
      href: "/files/resume_emilio_esp.pdf",
      filename: "resume_emilio_esp.pdf",
    },
    footer: {
      copyright: (year: number) =>
        `(c) ${year} Molinart. Hecho por Emilio Molina.`,
    },
  },
  en: {
    navigation: [
      { id: "home", label: "Home", href: "#home" },
      { id: "about", label: "Summary", href: "#about" },
      { id: "timeline", label: "Career Timeline", href: "#timeline" },
      { id: "experience", label: "Experience", href: "#experience" },
      { id: "technologies", label: "Technologies", href: "#technologies" },
      { id: "ask-emilio", label: "Ask Emilio AI", href: "#ask-emilio" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    language: {
      label: "Change language",
      next: "Español",
    },
    resume: {
      label: "Download resume",
      href: "/files/resume_emilio_eng.pdf",
      filename: "resume_emilio_eng.pdf",
    },
    footer: {
      copyright: (year: number) =>
        `(c) ${year} Molinart. Built by Emilio Molina.`,
    },
  },
} as const;

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};
