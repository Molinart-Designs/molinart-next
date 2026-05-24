import type { LocalizedContent } from "@/content/i18n";

export const heroContent = {
  es: {
    greeting: "Hola, soy",
    name: "EMILIO MOLINA.",
    tagline:
      "Ingeniero de Software Principal construyendo plataformas SaaS, empresariales y habilitadas con IA.",
    subtitle:
      "Con más de 16 años de experiencia, ayudo a convertir flujos de negocio complejos en productos de software confiables — desde modernización de sistemas legacy y APIs backend hasta plataformas cloud-native, asistentes de IA y experiencias impulsadas por LLMs.",
  },
  en: {
    greeting: "Hello, I am",
    name: "EMILIO MOLINA.",
    tagline:
      "Principal Software Engineer building scalable SaaS, enterprise, and AI-enabled platforms.",
    subtitle:
      "With 16+ years of experience, I help companies turn complex business workflows into reliable software products — from legacy modernization and backend APIs to cloud-native systems, AI assistants, and LLM-powered experiences.",
  },
} as const satisfies LocalizedContent<{
  greeting: string;
  name: string;
  tagline: string;
  subtitle: string;
}>;
