import type { LocalizedContent } from "@/content/i18n";

export const askEmilioContent = {
  es: {
    heading: {
      accent: "Ask Emilio AI",
      title: "Pregúntame sobre mi trayectoria.",
    },
    description:
      "Próximamente podrás consultar mi experiencia, stack, liderazgo y trabajo con IA mediante un asistente integrado en Molinart.",
    badge: "Próximamente",
    assistantName: "Asistente Molinart",
    assistantHint: "Vista previa — sin backend conectado",
    placeholder:
      "Ej.: ¿Qué experiencia tienes liderando equipos y modernizando plataformas?",
    submit: "Enviar pregunta",
    disabledTitle: "Disponible cuando se integre el SDK de IA",
    suggestedQuestions: [
      "¿Cuál es tu experiencia con arquitectura full stack y productos SaaS?",
      "¿Qué proyectos has liderado en entornos enterprise?",
      "¿Cómo combinas desarrollo, datos e inteligencia artificial?",
      "¿Qué stack usas para construir productos modernos con Next.js?",
    ],
  },
  en: {
    heading: {
      accent: "Ask Emilio AI",
      title: "Ask me about my career.",
    },
    description:
      "Soon you will be able to explore my experience, stack, leadership, and AI work through an assistant integrated into Molinart.",
    badge: "Coming soon",
    assistantName: "Molinart Assistant",
    assistantHint: "Preview — no backend connected",
    placeholder:
      "e.g. What is your experience leading teams and modernizing platforms?",
    submit: "Send question",
    disabledTitle: "Available when the AI SDK is integrated",
    suggestedQuestions: [
      "What is your experience with full-stack architecture and SaaS products?",
      "Which enterprise initiatives have you led?",
      "How do you combine engineering, data, and artificial intelligence?",
      "What stack do you use to build modern products with Next.js?",
    ],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  description: string;
  badge: string;
  assistantName: string;
  assistantHint: string;
  placeholder: string;
  submit: string;
  disabledTitle: string;
  suggestedQuestions: readonly string[];
}>;
