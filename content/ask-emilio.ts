import type { LocalizedContent } from "@/content/i18n";

export const askEmilioContent = {
  es: {
    heading: {
      accent: "Pregunta a Emilio AI",
      title: "Explora mi trayectoria antes de contactarme.",
    },
    description:
      "Usa este asistente para explorar mi experiencia, liderazgo técnico, proyectos, decisiones de arquitectura, trabajo con IA y por qué podría ser un buen candidato para tu equipo de ingeniería.",
    secondaryNote:
      "El asistente está basado en mi contexto profesional público y está diseñado para responder preguntas sobre mi experiencia, habilidades y trayectoria. No tiene acceso a información privada ni puede comprometer disponibilidad, tarifas o términos contractuales.",
    badge: "En vivo",
    assistantName: "Asistente Molinart",
    assistantHint: "Respuestas basadas en el perfil profesional publicado de Emilio",
    placeholder:
      "Ej.: ¿Qué experiencia tiene Emilio con modernización legacy y arquitectura SaaS?",
    submit: "Enviar pregunta",
    thinking: "Pensando…",
    errorGeneric: "No pudimos responder en este momento. Intenta de nuevo en unos instantes.",
    errorConfig: "El asistente no está configurado en el servidor.",
    emptyAnswer: "No hubo respuesta. Intenta reformular tu pregunta.",
    youLabel: "Tú",
    assistantLabel: "Emilio AI",
    suggestedQuestions: [
      "¿Por qué Emilio sería un buen candidato para un rol Staff Software Engineer?",
      "¿Qué experiencia tiene Emilio con IA y sistemas LLM?",
      "¿Con qué plataformas backend y cloud ha trabajado Emilio?",
      "¿Cómo ha liderado proyectos de modernización técnica?",
      "¿Qué tipo de empresas o roles encajan con la experiencia de Emilio?",
    ],
  },
  en: {
    heading: {
      accent: "Ask Emilio AI",
      title: "Explore my background before you reach out.",
    },
    description:
      "Use this assistant to explore my experience, technical leadership, projects, architecture decisions, AI work, and why I could be a strong fit for your engineering team.",
    secondaryNote:
      "The assistant is grounded in my public professional context and is designed to answer questions about my background, skills, and work experience. It does not have access to private data and cannot confirm availability, rates, or contract terms.",
    badge: "Live",
    assistantName: "Molinart Assistant",
    assistantHint: "Answers grounded in Emilio’s published professional profile",
    placeholder:
      "e.g. Why would Emilio be a strong fit for a Principal Software Engineer role?",
    submit: "Send question",
    thinking: "Thinking…",
    errorGeneric: "We could not reply right now. Please try again in a moment.",
    errorConfig: "The assistant is not configured on the server.",
    emptyAnswer: "No answer was returned. Try rephrasing your question.",
    youLabel: "You",
    assistantLabel: "Emilio AI",
    suggestedQuestions: [
      "Why would Emilio be a strong fit for a Staff Software Engineer role?",
      "What experience does Emilio have with AI and LLM systems?",
      "What backend and cloud platforms has Emilio worked with?",
      "How has Emilio led technical modernization projects?",
      "What kind of companies or roles match Emilio’s background?",
    ],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  description: string;
  secondaryNote: string;
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
