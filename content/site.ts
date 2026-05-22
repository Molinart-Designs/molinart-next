import type { LocalizedContent } from "@/content/i18n";

export const siteConfig = {
  name: "Molinart",
  author: "Emilio Molina",
  url: "https://molinart.net",
} as const;

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/molina90", label: "Facebook" },
  { name: "Instagram", href: "https://www.instagram.com/emolinarts/", label: "Instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/molinart/", label: "LinkedIn" },
] as const;

export const siteMetadata = {
  es: {
    title: "Molinart | Emilio Molina",
    description:
      "Portafolio de Emilio Molina, Principal Software Engineer con experiencia en arquitectura full stack, modernización de plataformas, productos con IA y liderazgo técnico.",
    locale: "es_MX",
    keywords: [
      "Emilio Molina",
      "Principal Software Engineer",
      "desarrollo full stack",
      "arquitectura de software",
      "inteligencia artificial",
      "Molinart",
    ],
  },
  en: {
    title: "Molinart | Emilio Molina",
    description:
      "Portfolio of Emilio Molina, a Principal Software Engineer focused on full-stack architecture, platform modernization, AI-enabled products, and technical leadership.",
    locale: "en_US",
    keywords: [
      "Emilio Molina",
      "Principal Software Engineer",
      "full-stack development",
      "software architecture",
      "AI-enabled products",
      "Molinart",
    ],
  },
} as const satisfies LocalizedContent<{
  title: string;
  description: string;
  locale: string;
  keywords: readonly string[];
}>;

export const siteContent = {
  es: {
    navigation: [
      { id: "home", label: "Inicio", href: "#home" },
      { id: "about", label: "Perfil", href: "#about" },
      { id: "timeline", label: "Trayectoria", href: "#timeline" },
      { id: "portfolio", label: "Experiencia", href: "#portfolio" },
      { id: "technologies", label: "Tecnologías", href: "#technologies" },
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
      { id: "about", label: "Profile", href: "#about" },
      { id: "timeline", label: "Career", href: "#timeline" },
      { id: "portfolio", label: "Experience", href: "#portfolio" },
      { id: "technologies", label: "Technologies", href: "#technologies" },
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

export type NavigationItem = (typeof siteContent.es.navigation)[number];
