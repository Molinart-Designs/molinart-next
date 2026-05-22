import type { LocalizedContent } from "@/content/i18n";

export const skillBars = [
  { name: "PHP", value: 98 },
  { name: "JavaScript", value: 96 },
  { name: "TypeScript", value: 90 },
  { name: "Laravel", value: 95 },
  { name: "React / Next", value: 88 },
  { name: "Python", value: 90 },
  { name: "Node.js", value: 86 },
] as const;

export const summaryContent = {
  es: {
    heading: {
      accent: "Ingeniería full stack",
      title: "Con criterio de arquitectura.",
    },
    intro:
      "He liderado entregables técnicos para productos empresariales, sistemas internos y experiencias de cliente, convirtiendo necesidades de negocio en soluciones mantenibles.",
    experienceYearsStart: 2010,
    experienceYearsLabel: "Años construyendo software.",
    mainTechnologiesTitle: "Fortalezas técnicas",
    pillars: [
      {
        id: "architecture",
        title: "Arquitectura",
        description:
          "Diseño soluciones full stack, APIs y componentes escalables para plataformas empresariales con foco en confiabilidad y evolución del producto.",
      },
      {
        id: "modernization",
        title: "Modernización",
        description:
          "Trabajo sobre sistemas heredados y nuevos desarrollos para mejorar mantenibilidad, rendimiento y claridad operativa sin perder continuidad.",
      },
      {
        id: "ai",
        title: "AI / LLM",
        description:
          "Exploro asistentes, RAG, automatización y diseño de soluciones con LLM para llevar inteligencia aplicada a flujos reales.",
      },
      {
        id: "leadership",
        title: "Liderazgo técnico",
        description:
          "Colaboro con producto, diseño e ingeniería, mentoreo perfiles en crecimiento y bajo estrategia a ejecución medible.",
      },
    ],
  },
  en: {
    heading: {
      accent: "Full-stack engineering",
      title: "With architecture judgment.",
    },
    intro:
      "I have led technical delivery for enterprise products, internal systems, and customer-facing experiences by turning business needs into maintainable solutions.",
    experienceYearsStart: 2010,
    experienceYearsLabel: "Years building software.",
    mainTechnologiesTitle: "Technical strengths",
    pillars: [
      {
        id: "architecture",
        title: "Architecture",
        description:
          "I design full-stack solutions, APIs, and scalable components for enterprise platforms with reliability and product evolution in mind.",
      },
      {
        id: "modernization",
        title: "Modernization",
        description:
          "I work across legacy systems and new builds to improve maintainability, performance, and operational clarity without losing continuity.",
      },
      {
        id: "ai",
        title: "AI / LLM",
        description:
          "I explore assistants, RAG, automation, and LLM solution design to bring applied intelligence into real workflows.",
      },
      {
        id: "leadership",
        title: "Technical leadership",
        description:
          "I partner with product, design, and engineering, mentor growing engineers, and turn strategy into measurable execution.",
      },
    ],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  intro: string;
  experienceYearsStart: number;
  experienceYearsLabel: string;
  mainTechnologiesTitle: string;
  pillars: readonly {
    id: string;
    title: string;
    description: string;
  }[];
}>;
