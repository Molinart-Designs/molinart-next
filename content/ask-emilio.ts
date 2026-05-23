import type { LocalizedContent } from "@/content/i18n";

export const askEmilioContent = {
  es: {
    heading: {
      accent: "Ask Emilio AI",
      title: "Pregúntame sobre mi trayectoria.",
    },
    description:
      "Asistente con IA entrenado con el contexto profesional de Emilio. Pregunta por stack, liderazgo, proyectos o trabajo con IA.",
    badge: "En vivo",
    assistantName: "Asistente Molinart",
    assistantHint: "Respuestas basadas en el perfil publicado de Emilio",
    placeholder:
      "Ej.: ¿Qué experiencia tienes liderando equipos y modernizando plataformas?",
    submit: "Enviar pregunta",
    thinking: "Pensando…",
    errorGeneric: "No pudimos responder ahora. Intenta de nuevo en un momento.",
    errorConfig: "El asistente no está configurado en el servidor.",
    emptyAnswer: "Sin respuesta. Intenta reformular tu pregunta.",
    youLabel: "Tú",
    assistantLabel: "Emilio AI",
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
      "AI assistant grounded in Emilio’s published professional context. Ask about stack, leadership, projects, or AI work.",
    badge: "Live",
    assistantName: "Molinart Assistant",
    assistantHint: "Answers grounded in Emilio’s published profile",
    placeholder:
      "e.g. What is your experience leading teams and modernizing platforms?",
    submit: "Send question",
    thinking: "Thinking…",
    errorGeneric: "We could not reply right now. Please try again shortly.",
    errorConfig: "The assistant is not configured on the server.",
    emptyAnswer: "No answer returned. Try rephrasing your question.",
    youLabel: "You",
    assistantLabel: "Emilio AI",
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
  thinking: string;
  errorGeneric: string;
  errorConfig: string;
  emptyAnswer: string;
  youLabel: string;
  assistantLabel: string;
  suggestedQuestions: readonly string[];
}>;
