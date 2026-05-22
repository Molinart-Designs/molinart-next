import type { LocalizedContent } from "@/content/i18n";

export const experienceContent = {
  es: {
    heading: {
      accent: "Experiencia",
      title: "Donde el software mueve negocio.",
    },
    stats: {
      value: "16+",
      label: "Años de trayectoria",
    },
    carousel: {
      previous: "Anterior",
      next: "Siguiente",
    },
    items: [
      {
        id: "platforms",
        image: "/images/corporative.jpg",
        imageAlt: "Plataformas empresariales",
        overlayTitle: "Arquitectura y producto",
        title: "Plataformas empresariales",
        description:
          "Aplicaciones, APIs y sistemas internos que traducen requisitos funcionales y no funcionales en entregables estables.",
      },
      {
        id: "data",
        image: "/images/dashboard.jpg",
        imageAlt: "Sistemas orientados a datos",
        overlayTitle: "Datos y operación",
        title: "Sistemas orientados a datos",
        description:
          "Dashboards, ERP, reporting y flujos que dan visibilidad operativa y ayudan a decidir con información útil.",
      },
      {
        id: "ai",
        image: "/images/ai.jpg",
        imageAlt: "Productos habilitados por inteligencia artificial",
        overlayTitle: "AI / LLM",
        title: "Productos con IA",
        description:
          "Automatización, experimentación y asistentes con LLM pensados para integrarse a productos y procesos reales.",
      },
    ],
  },
  en: {
    heading: {
      accent: "Experience",
      title: "Where software moves business.",
    },
    stats: {
      value: "16+",
      label: "Years of experience",
    },
    carousel: {
      previous: "Previous",
      next: "Next",
    },
    items: [
      {
        id: "platforms",
        image: "/images/corporative.jpg",
        imageAlt: "Enterprise platforms",
        overlayTitle: "Architecture and product",
        title: "Enterprise platforms",
        description:
          "Applications, APIs, and internal systems that turn functional and non-functional requirements into stable delivery.",
      },
      {
        id: "data",
        image: "/images/dashboard.jpg",
        imageAlt: "Data-driven systems",
        overlayTitle: "Data and operations",
        title: "Data-driven systems",
        description:
          "Dashboards, ERP work, reporting, and workflows that improve operational visibility and decision-making.",
      },
      {
        id: "ai",
        image: "/images/ai.jpg",
        imageAlt: "AI-enabled products",
        overlayTitle: "AI / LLM",
        title: "AI-enabled products",
        description:
          "Automation, experimentation support, and LLM assistants designed for real products and business processes.",
      },
    ],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  stats: { value: string; label: string };
  carousel: { previous: string; next: string };
  items: readonly {
    id: string;
    image: string;
    imageAlt: string;
    overlayTitle: string;
    title: string;
    description: string;
  }[];
}>;
