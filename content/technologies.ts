import type { LocalizedContent } from "@/content/i18n";

export type TechnologyItem = {
  name: string;
  iconUrl?: string;
};

export type TechnologyGroup = {
  id: string;
  title: string;
  summary: string;
  items: readonly TechnologyItem[];
};

const icon = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;

export const technologiesContent = {
  es: {
    heading: {
      accent: "Tecnologías",
      title: "Stack para SaaS, enterprise e IA.",
      description:
        "Tecnologías que uso para diseñar, construir, modernizar y escalar plataformas full-stack, SaaS, empresariales y habilitadas con IA.",
    },
    stats: {
      value: "6",
      label: "Áreas de enfoque",
    },
    groups: [
      {
        id: "backend",
        title: "Backend principal",
        summary:
          "APIs y servicios que sostienen producto: contratos claros, lógica de negocio, integraciones y despliegues mantenibles en entornos SaaS y enterprise.",
        items: [
          { name: "PHP", iconUrl: icon("php") },
          { name: "Laravel", iconUrl: icon("laravel") },
          { name: "Node.js", iconUrl: icon("nodedotjs") },
          { name: "Python", iconUrl: icon("python") },
          { name: "FastAPI", iconUrl: icon("fastapi") },
          { name: "Flask", iconUrl: icon("flask") },
          { name: "APIs REST" },
          { name: "Microservicios" },
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        summary:
          "Interfaces y experiencias de producto alineadas con backend y datos — desde SPAs y SSR hasta componentes reutilizables y flujos complejos.",
        items: [
          { name: "React", iconUrl: icon("react") },
          { name: "Next.js", iconUrl: icon("nextdotjs") },
          { name: "TypeScript", iconUrl: icon("typescript") },
          { name: "JavaScript", iconUrl: icon("javascript") },
          { name: "Angular", iconUrl: icon("angular") },
          { name: "Vue.js", iconUrl: icon("vuedotjs") },
          { name: "HTML5" },
          { name: "CSS3" },
        ],
      },
      {
        id: "databases",
        title: "Bases de datos",
        summary:
          "Modelado, consultas y optimización para reporting, transacciones y cargas de producción — incluyendo búsqueda vectorial para sistemas RAG.",
        items: [
          { name: "PostgreSQL", iconUrl: icon("postgresql") },
          { name: "MySQL", iconUrl: icon("mysql") },
          { name: "MariaDB", iconUrl: icon("mariadb") },
          { name: "MongoDB", iconUrl: icon("mongodb") },
          { name: "Optimización SQL" },
          { name: "pgvector" },
        ],
      },
      {
        id: "cloud",
        title: "Cloud y DevOps",
        summary:
          "Contenedores, pipelines y observabilidad para llevar software a producción con repetibilidad, seguridad operativa y escalado pragmático.",
        items: [
          { name: "AWS", iconUrl: icon("amazonaws") },
          { name: "Docker", iconUrl: icon("docker") },
          { name: "ECS Fargate" },
          { name: "ECR" },
          { name: "CloudWatch" },
          { name: "GitHub Actions", iconUrl: icon("githubactions") },
          { name: "GCP", iconUrl: icon("googlecloud") },
          { name: "CI/CD" },
        ],
      },
      {
        id: "ai",
        title: "Ingeniería IA / LLM",
        summary:
          "Asistentes y flujos con LLM conectados a datos reales: recuperación, grounding, evaluación y APIs listas para producto — no demos desconectadas.",
        items: [
          { name: "APIs de OpenAI", iconUrl: icon("openai") },
          { name: "Embeddings" },
          { name: "Sistemas RAG" },
          { name: "Búsqueda vectorial" },
          { name: "Prompt engineering" },
          { name: "Asistentes de IA" },
          { name: "Evaluación y grounding" },
        ],
      },
      {
        id: "architecture",
        title: "Arquitectura y liderazgo",
        summary:
          "Cómo trabajo con equipos y negocio: modernizar sin romper operación, diseñar para evolución y elevar estándares de ingeniería.",
        items: [
          { name: "Modernización legacy" },
          { name: "Arquitectura SaaS" },
          { name: "Mentoría técnica" },
          { name: "Diseño de sistemas" },
          { name: "Colaboración con producto" },
          { name: "Estándares de ingeniería" },
        ],
      },
    ] satisfies TechnologyGroup[],
  },
  en: {
    heading: {
      accent: "Technologies",
      title: "Stack for SaaS, enterprise, and AI.",
      description:
        "Technologies I use to design, build, modernize, and scale full-stack, SaaS, enterprise, and AI-enabled platforms.",
    },
    stats: {
      value: "6",
      label: "Engineering focus areas",
    },
    groups: [
      {
        id: "backend",
        title: "Core backend",
        summary:
          "APIs and services that carry the product: clear contracts, business logic, integrations, and maintainable delivery in SaaS and enterprise environments.",
        items: [
          { name: "PHP", iconUrl: icon("php") },
          { name: "Laravel", iconUrl: icon("laravel") },
          { name: "Node.js", iconUrl: icon("nodedotjs") },
          { name: "Python", iconUrl: icon("python") },
          { name: "FastAPI", iconUrl: icon("fastapi") },
          { name: "Flask", iconUrl: icon("flask") },
          { name: "REST APIs" },
          { name: "Microservices" },
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        summary:
          "Product interfaces aligned with backend and data — from SPAs and SSR to reusable components and complex user workflows.",
        items: [
          { name: "React", iconUrl: icon("react") },
          { name: "Next.js", iconUrl: icon("nextdotjs") },
          { name: "TypeScript", iconUrl: icon("typescript") },
          { name: "JavaScript", iconUrl: icon("javascript") },
          { name: "Angular", iconUrl: icon("angular") },
          { name: "Vue.js", iconUrl: icon("vuedotjs") },
          { name: "HTML5" },
          { name: "CSS3" },
        ],
      },
      {
        id: "databases",
        title: "Databases",
        summary:
          "Modeling, queries, and optimization for reporting, transactions, and production workloads — including vector search for RAG systems.",
        items: [
          { name: "PostgreSQL", iconUrl: icon("postgresql") },
          { name: "MySQL", iconUrl: icon("mysql") },
          { name: "MariaDB", iconUrl: icon("mariadb") },
          { name: "MongoDB", iconUrl: icon("mongodb") },
          { name: "SQL optimization" },
          { name: "pgvector" },
        ],
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        summary:
          "Containers, pipelines, and observability to ship software with repeatability, operational safety, and pragmatic scaling.",
        items: [
          { name: "AWS", iconUrl: icon("amazonaws") },
          { name: "Docker", iconUrl: icon("docker") },
          { name: "ECS Fargate" },
          { name: "ECR" },
          { name: "CloudWatch" },
          { name: "GitHub Actions", iconUrl: icon("githubactions") },
          { name: "GCP", iconUrl: icon("googlecloud") },
          { name: "CI/CD" },
        ],
      },
      {
        id: "ai",
        title: "AI / LLM engineering",
        summary:
          "LLM assistants and flows grounded in real data: retrieval, evaluation, and production APIs — not disconnected chatbot demos.",
        items: [
          { name: "OpenAI APIs", iconUrl: icon("openai") },
          { name: "Embeddings" },
          { name: "RAG systems" },
          { name: "Vector search" },
          { name: "Prompt engineering" },
          { name: "AI assistants" },
          { name: "Evaluation & grounding" },
        ],
      },
      {
        id: "architecture",
        title: "Architecture & leadership",
        summary:
          "How I work with teams and the business: modernize without breaking operations, design for evolution, and raise engineering standards.",
        items: [
          { name: "Legacy modernization" },
          { name: "SaaS architecture" },
          { name: "Technical mentoring" },
          { name: "System design" },
          { name: "Product collaboration" },
          { name: "Engineering standards" },
        ],
      },
    ] satisfies TechnologyGroup[],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string; description: string };
  stats: { value: string; label: string };
  groups: readonly TechnologyGroup[];
}>;
