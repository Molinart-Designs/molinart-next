import type { LocalizedContent } from "@/content/i18n";

export const experienceContent = {
  es: {
    heading: {
      accent: "Experiencia",
      title: "Áreas de impacto que puedo aportar.",
    },
    stats: {
      value: "16+",
      label: "Años de trayectoria",
    },
    items: [
      {
        id: "enterprise",
        image: "/images/corporative.jpg",
        imageAlt: "Plataformas SaaS y enterprise",
        overlayTitle: "Staff / Principal engineering",
        title: "Plataformas SaaS y enterprise",
        description:
          "Modernización de sistemas legacy, arquitectura full stack y APIs backend para flujos complejos — reportes, datos financieros, facturación y operaciones multi-mercado (p. ej. Solera). Combino ejecución hands-on con PHP, Laravel, Node.js, React y PostgreSQL con mentoría, estabilidad en producción y decisiones de arquitectura.",
      },
      {
        id: "growth",
        image: "/images/dashboard.jpg",
        imageAlt: "Growth engineering y producto",
        overlayTitle: "Growth & full stack",
        title: "Growth engineering y producto",
        description:
          "Entrega en entornos SaaS de alta escala (Mailchimp / Intuit): experimentos de crecimiento, notificaciones, segmentación y resultados medibles. Conecto backend APIs, datos y frontend con hipótesis de producto, comportamiento de usuarios y objetivos de negocio — sin perder rigor técnico ni calidad de implementación.",
      },
      {
        id: "ai-cloud",
        image: "/images/ai.jpg",
        imageAlt: "IA, cloud-native y liderazgo técnico",
        overlayTitle: "AI / LLM & cloud",
        title: "IA, cloud-native y liderazgo",
        description:
          "Ingeniería de productos con IA: sistemas RAG y asistentes con FastAPI, Python, Docker, AWS y PostgreSQL (pgvector). También reconstrucción de plataformas, automatización y trabajo independiente bajo Molinart — web, apps y soluciones habilitadas con IA con liderazgo técnico, documentación y estándares de equipo.",
      },
    ],
  },
  en: {
    heading: {
      accent: "Experience",
      title: "Areas of impact I bring to teams.",
    },
    stats: {
      value: "16+",
      label: "Years of experience",
    },
    items: [
      {
        id: "enterprise",
        image: "/images/corporative.jpg",
        imageAlt: "SaaS and enterprise platforms",
        overlayTitle: "Staff / Principal engineering",
        title: "SaaS & enterprise platforms",
        description:
          "Legacy modernization, full-stack SaaS architecture, and backend APIs for complex workflows — reporting, financial data, invoicing, and multi-market operations (e.g. Solera). I combine hands-on delivery with PHP, Laravel, Node.js, React, and PostgreSQL alongside mentoring, production debugging, and architecture judgment as a Staff / Principal Software Engineer.",
      },
      {
        id: "growth",
        image: "/images/dashboard.jpg",
        imageAlt: "Growth engineering and product delivery",
        overlayTitle: "Growth & full stack",
        title: "Growth engineering & product",
        description:
          "High-scale SaaS delivery (Mailchimp / Intuit): growth experiments, notifications, segmentation, and measurable product outcomes. I connect backend APIs, data, and frontend experiences to product hypotheses, user behavior, and business goals — with credible full-stack execution, not slide-deck engineering.",
      },
      {
        id: "ai-cloud",
        image: "/images/ai.jpg",
        imageAlt: "AI engineering, cloud-native systems, and technical leadership",
        overlayTitle: "AI / LLM & cloud",
        title: "AI, cloud-native & leadership",
        description:
          "AI product engineering: RAG systems and assistants with FastAPI, Python, Docker, AWS, and PostgreSQL (pgvector). I also deliver platform rebuilds, automation, and independent Molinart work — websites, applications, and AI-enabled solutions with technical leadership, clear documentation, and team standards.",
      },
    ],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  stats: { value: string; label: string };
  items: readonly {
    id: string;
    image: string;
    imageAlt: string;
    overlayTitle: string;
    title: string;
    description: string;
  }[];
}>;
