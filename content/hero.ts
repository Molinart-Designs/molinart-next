import type { LocalizedContent } from "@/content/i18n";

export const heroContent = {
  es: {
    greeting: "Hola, Yo soy",
    name: "EMILIO MOLINA.",
    tagline:
      "Principal Software Engineer con 16+ años creando, modernizando y escalando plataformas full stack.",
    subtitle:
      "Conecto arquitectura, producto y ejecución técnica para construir software confiable, flujos inteligentes y experiencias claras.",
  },
  en: {
    greeting: "Hello, I am",
    name: "EMILIO MOLINA.",
    tagline:
      "Principal Software Engineer with 16+ years building, modernizing, and scaling full-stack platforms.",
    subtitle:
      "I connect architecture, product thinking, and technical execution to ship reliable software, intelligent workflows, and clear experiences.",
  },
} as const satisfies LocalizedContent<{
  greeting: string;
  name: string;
  tagline: string;
  subtitle: string;
}>;
