import type { LocalizedContent } from "@/content/i18n";

export const summaryContent = {
  es: {
    heading: {
      accent: "Ingeniería full stack",
      title: "Plataformas SaaS, empresariales y con IA.",
    },
    intro:
      "Soy Ingeniero de Software Principal con más de 16 años de experiencia diseñando, construyendo y modernizando plataformas full-stack para entornos SaaS, empresariales y orientados a producto. Mi trabajo conecta APIs backend, experiencias frontend, bases de datos, infraestructura cloud y flujos de negocio en sistemas confiables que los equipos pueden operar y evolucionar.",
    detail:
      "En empresas como Solera, Mailchimp/Intuit, startups y proyectos de producto independientes, he trabajado en modernización legacy, experimentación de crecimiento, sistemas de reportes, flujos relacionados con facturación, aplicaciones habilitadas con IA y asistentes basados en RAG. Me mantengo cerca del código mientras ayudo a los equipos a tomar mejores decisiones de arquitectura, mejorar estándares de ingeniería y mentorear a otros desarrolladores.",
    experienceYearsStart: 2010,
    experienceYearsLabel: "Años construyendo software.",
    coreStrengthsTitle: "Fortalezas clave",
    coreStrengths: [
      "APIs backend y entrega full-stack",
      "Modernización de plataformas SaaS y empresariales",
      "Sistemas IA/LLM, RAG y automatización",
      "Arquitectura cloud-native y liderazgo técnico",
    ],
    pillars: [
      {
        id: "fullstack",
        title: "Backend y full stack",
        description:
          "Diseño e implemento APIs y productos con PHP, Laravel, Node.js, React, TypeScript y Python — con foco en contratos claros, datos consistentes y entrega mantenible.",
      },
      {
        id: "saas",
        title: "SaaS y enterprise",
        description:
          "Construyo plataformas para equipos de producto y operaciones: flujos de negocio, reporting, integraciones y sistemas que deben escalar con el uso real.",
      },
      {
        id: "cloud",
        title: "Cloud y modernización",
        description:
          "Modernizo sistemas legacy hacia arquitecturas cloud-native con Docker y AWS, PostgreSQL y MySQL, mejorando rendimiento, observabilidad y capacidad de evolución.",
      },
      {
        id: "ai",
        title: "IA / LLM y liderazgo",
        description:
          "Desarrollo asistentes, automatización y experiencias con LLM y RAG (FastAPI, Python), combinando ejecución hands-on con mentoring y decisiones de arquitectura.",
      },
    ],
  },
  en: {
    heading: {
      accent: "Full-stack engineering",
      title: "SaaS, enterprise, and AI-enabled systems.",
    },
    intro:
      "I am a Principal Software Engineer with 16+ years of experience designing, building, and modernizing full-stack platforms for SaaS, enterprise, and product-driven environments. My work connects backend APIs, frontend experiences, databases, cloud infrastructure, and business workflows into reliable systems that teams can operate and evolve.",
    detail:
      "Across companies such as Solera, Mailchimp/Intuit, startups, and independent product work, I have worked on legacy modernization, growth experimentation, reporting systems, invoicing-related workflows, AI-enabled applications, and RAG-based assistants. I stay close to the code while also helping teams make better architecture decisions, improve engineering standards, and mentor other developers.",
    experienceYearsStart: 2010,
    experienceYearsLabel: "Years building software.",
    coreStrengthsTitle: "Core strengths",
    coreStrengths: [
      "Backend APIs & full-stack delivery",
      "SaaS and enterprise platform modernization",
      "AI/LLM systems, RAG, and automation",
      "Cloud-native architecture and technical leadership",
    ],
    pillars: [
      {
        id: "fullstack",
        title: "Backend & full stack",
        description:
          "I design and ship APIs and product surfaces with PHP, Laravel, Node.js, React, TypeScript, and Python — emphasizing clear contracts, dependable data layers, and maintainable delivery.",
      },
      {
        id: "saas",
        title: "SaaS & enterprise",
        description:
          "I build platforms for product and operations teams: business workflows, reporting, integrations, and systems that need to scale with real-world usage.",
      },
      {
        id: "cloud",
        title: "Cloud & modernization",
        description:
          "I modernize legacy systems toward cloud-native architectures with Docker and AWS, PostgreSQL and MySQL, improving performance, observability, and long-term evolution.",
      },
      {
        id: "ai",
        title: "AI / LLM & leadership",
        description:
          "I deliver assistants, automation, and LLM/RAG experiences (FastAPI, Python) while staying hands-on in the codebase and supporting architecture decisions, standards, and mentoring.",
      },
    ],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  intro: string;
  detail: string;
  experienceYearsStart: number;
  experienceYearsLabel: string;
  coreStrengthsTitle: string;
  coreStrengths: readonly string[];
  pillars: readonly {
    id: string;
    title: string;
    description: string;
  }[];
}>;
