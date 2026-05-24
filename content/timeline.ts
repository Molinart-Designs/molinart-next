import type { LocalizedContent } from "@/content/i18n";

export type TimelinePanel = {
  id: string;
  year: string;
  dateAttr: string;
  headerHtml: string;
  columns: { title: string; bodyHtml: string }[];
};

export const timelineContent = {
  es: {
    heading: {
      accent: "Trayectoria",
      title: "De ejecución hands-on a ingeniería principal.",
      description:
        "Selecciona un año para ver roles, impacto técnico y cómo evolucionó la entrega de producto.",
    },
    experienceYearsStart: 2010,
    experienceYearsLabel: "Años de carrera.",
    navigation: {
      previous: "Anterior",
      next: "Siguiente",
    },
    panels: [
      {
        id: "2010",
        year: "2010",
        dateAttr: "01/01/2010",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Enero 2010</h4><h2 class="main-font"><b>Web / Full-Stack Developer</b> - Armageddon Entertainment Group</h2>`,
        columns: [
          {
            title: "Producto y plataformas",
            bodyHtml: `<p class="alt-font">Desarrollo hands-on de aplicaciones web y móviles, revistas digitales, CMS, herramientas internas y productos con panel administrativo.</p><p class="alt-font">Construcción de backend, APIs, interfaces y modelos de datos para iniciativas de negocio con foco en entrega confiable y evolución del producto.</p>`,
          },
          {
            title: "Infraestructura y crecimiento de equipo",
            bodyHtml: `<p class="alt-font">Operación de Linux, MySQL y servicios en Google Cloud para sostener aplicaciones en producción y resolver incidentes reales.</p><p class="alt-font">Coordinación técnica temprana, documentación y mejora de mantenibilidad en sistemas legacy — base para liderar arquitectura y entrega más adelante.</p>`,
          },
        ],
      },
      {
        id: "2019",
        year: "2019",
        dateAttr: "01/09/2019",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Septiembre 2019</h4><h2 class="main-font"><b>Full Stack Developer</b> - Blend MX</h2>`,
        columns: [
          {
            title: "Reconstrucción de plataforma",
            bodyHtml: `<p class="alt-font">Migración y reingeniería de productos legacy hacia stacks más escalables con Laravel, React, Python y APIs backend más claras.</p><p class="alt-font">Mejora de arquitectura, experiencia de usuario e infraestructura para sostener crecimiento sin perder continuidad operativa.</p>`,
          },
          {
            title: "SaaS, ERP y entrega",
            bodyHtml: `<p class="alt-font">Participación en sitios, CMS, trabajo relacionado con ERP y soluciones SaaS con bases de datos, servidores y ambientes cloud.</p><p class="alt-font">Traducción de requerimientos de negocio en implementaciones mantenibles, con ownership desde diseño hasta producción.</p>`,
          },
        ],
      },
      {
        id: "2021",
        year: "2021",
        dateAttr: "01/02/2021",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Febrero 2021</h4><h2 class="main-font"><b>Coordinador de desarrollo web y aplicaciones</b> - Siegfried Rhein Mexico</h2>`,
        columns: [
          {
            title: "Liderazgo de iniciativas",
            bodyHtml: `<p class="alt-font">Coordinación de iniciativas web y de aplicaciones en varias áreas, alineando ejecución técnica con prioridades de negocio.</p><p class="alt-font">Supervisión de entregas internas y de proveedores para proteger calidad, tiempos y claridad entre equipos.</p>`,
          },
          {
            title: "ERP y colaboración",
            bodyHtml: `<p class="alt-font">Aporte a iniciativas ERP y flujos empresariales, principalmente en frontend e implementación transversal.</p><p class="alt-font">Puente entre stakeholders, producto e ingeniería para convertir necesidades operativas en software utilizable.</p>`,
          },
        ],
      },
      {
        id: "2022",
        year: "2022",
        dateAttr: "01/12/2021",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Diciembre 2021</h4><h2 class="main-font"><b>Senior Full-Stack / Data-Driven Solutions Engineer</b> - Nagarro & IDS</h2>`,
        columns: [
          {
            title: "Plataformas empresariales",
            bodyHtml: `<p class="alt-font">Desarrollo y mantenimiento de aplicaciones enterprise con PHP, Laravel, React y Angular para equipos distribuidos y clientes exigentes.</p><p class="alt-font">APIs backend, módulos reutilizables y mejoras de rendimiento en sistemas que deben operar de forma estable en producción.</p>`,
          },
          {
            title: "Datos, reporting y modernización",
            bodyHtml: `<p class="alt-font">Soluciones orientadas a datos: reporting, visibilidad operativa y workflows que conectan negocio con sistemas técnicos.</p><p class="alt-font">Modernización incremental, nuevas capacidades y soporte a decisiones de arquitectura sin interrumpir operación.</p>`,
          },
        ],
      },
      {
        id: "2023",
        year: "2023",
        dateAttr: "01/04/2023",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Abril 2023 - Diciembre 2024</h4><h2 class="main-font"><b>Staff Software Engineer</b> - Solera Inc. <span class="text-yellow">/ Modernización enterprise</span></h2>`,
        columns: [
          {
            title: "Plataformas automotrices a escala",
            bodyHtml: `<p class="alt-font">Mantenimiento y modernización de plataformas empresariales para operaciones de reparación automotriz y talleres en múltiples mercados.</p><p class="alt-font">Trabajo con sistemas legacy en PHP/QCubed, flujos backend, reportes, datos financieros, procesos relacionados con facturación y APIs.</p>`,
          },
          {
            title: "Estabilidad, mentoría y ejecución",
            bodyHtml: `<p class="alt-font">Traducción de requerimientos de negocio en soluciones técnicas confiables, con debugging en producción y mejoras sostenibles.</p><p class="alt-font">Mentoría a desarrolladores junior, decisiones de arquitectura y colaboración con producto usando PHP, Laravel, JavaScript y MariaDB.</p>`,
          },
        ],
      },
      {
        id: "2024",
        year: "2024",
        dateAttr: "01/01/2024",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">2024</h4><h2 class="main-font"><b>IA / LLM y producto</b> - Molinart <span class="text-yellow">/ iniciativas independientes</span></h2>`,
        columns: [
          {
            title: "Sistemas RAG y asistentes de IA",
            bodyHtml: `<p class="alt-font">Diseño y despliegue de un backend de IA basado en RAG usando FastAPI, PostgreSQL con pgvector, embeddings de OpenAI, Docker y AWS ECS.</p><p class="alt-font">Flujos de respuesta fundamentados, manejo de confianza, disclaimers de seguridad y APIs listas para producción — IA conectada a datos reales, no comportamiento genérico de chatbot.</p>`,
          },
          {
            title: "Molinart: web, producto y cloud",
            bodyHtml: `<p class="alt-font">Desarrollo de sitios, aplicaciones y experiencias de producto para necesidades de negocio con frontend, backend, bases de datos y despliegue.</p><p class="alt-font">Evolución de Molinart desde desarrollo web hacia ingeniería full-stack, cloud-native y productos habilitados con IA.</p>`,
          },
        ],
      },
      {
        id: "2025",
        year: "2025",
        dateAttr: "01/01/2025",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Enero 2025 - Actual</h4><h2 class="main-font"><b>Principal Software Engineer</b> - Tensure <span class="text-yellow">(Mailchimp / Intuit)</span></h2>`,
        columns: [
          {
            title: "Growth engineering y experimentación",
            bodyHtml: `<p class="alt-font">Desarrollo orientado por experimentos dentro de un entorno SaaS de alta escala: notificaciones, mensajería, segmentación de usuarios y resultados medibles.</p><p class="alt-font">Conexión entre implementación técnica, hipótesis de producto, comportamiento de usuarios y objetivos de negocio con Node.js, React, PHP y PostgreSQL.</p>`,
          },
          {
            title: "Ejecución transversal en SaaS",
            bodyHtml: `<p class="alt-font">Colaboración con ingeniería, producto y diseño para convertir especificaciones en implementaciones confiables en plataforma.</p><p class="alt-font">Puente entre estrategia de producto, capacidades técnicas y resultados medibles — ejecución principal-level con ownership hands-on en código y revisión de diseño.</p>`,
          },
        ],
      },
    ] satisfies TimelinePanel[],
  },
  en: {
    heading: {
      accent: "Career",
      title: "From hands-on delivery to principal-level engineering.",
      description:
        "Select a year to explore roles, technical impact, and how product delivery evolved over time.",
    },
    experienceYearsStart: 2010,
    experienceYearsLabel: "Years in software.",
    navigation: {
      previous: "Previous",
      next: "Next",
    },
    panels: [
      {
        id: "2010",
        year: "2010",
        dateAttr: "01/01/2010",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">January 2010</h4><h2 class="main-font"><b>Web / Full-Stack Developer</b> - Armageddon Entertainment Group</h2>`,
        columns: [
          {
            title: "Products and platforms",
            bodyHtml: `<p class="alt-font">Hands-on delivery of web and mobile applications, digital magazines, CMS tools, internal systems, and admin-backed products.</p><p class="alt-font">Built backend APIs, interfaces, and data models for business initiatives with a focus on reliable shipping and product evolution.</p>`,
          },
          {
            title: "Infrastructure and team growth",
            bodyHtml: `<p class="alt-font">Operated Linux, MySQL, and Google Cloud services to support production applications and resolve real operational issues.</p><p class="alt-font">Early technical coordination, documentation, and legacy maintainability work that set the foundation for architecture ownership and team leadership.</p>`,
          },
        ],
      },
      {
        id: "2019",
        year: "2019",
        dateAttr: "01/09/2019",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">September 2019</h4><h2 class="main-font"><b>Full Stack Developer</b> - Blend MX</h2>`,
        columns: [
          {
            title: "Platform rebuild and modernization",
            bodyHtml: `<p class="alt-font">Migrated and re-engineered legacy products into more scalable Laravel and React-based platforms with clearer backend APIs.</p><p class="alt-font">Improved architecture, user experience, and infrastructure so the business could grow without breaking operational continuity.</p>`,
          },
          {
            title: "SaaS, ERP, and delivery ownership",
            bodyHtml: `<p class="alt-font">Contributed to sites, CMS work, ERP-related flows, and SaaS solutions across databases, servers, and cloud environments.</p><p class="alt-font">Translated business requirements into maintainable implementations with ownership from design through production.</p>`,
          },
        ],
      },
      {
        id: "2021",
        year: "2021",
        dateAttr: "01/02/2021",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">February 2021</h4><h2 class="main-font"><b>Web and Applications Development Coordinator</b> - Siegfried Rhein Mexico</h2>`,
        columns: [
          {
            title: "Initiative leadership",
            bodyHtml: `<p class="alt-font">Coordinated web and application initiatives across business areas, aligning technical execution with company priorities.</p><p class="alt-font">Supervised internal and vendor delivery to protect quality, timelines, and clarity between teams.</p>`,
          },
          {
            title: "ERP and cross-functional work",
            bodyHtml: `<p class="alt-font">Contributed to ERP and enterprise workflow initiatives, mainly on frontend and cross-team implementation.</p><p class="alt-font">Bridged stakeholders, product, and engineering to turn operational needs into usable software.</p>`,
          },
        ],
      },
      {
        id: "2022",
        year: "2022",
        dateAttr: "01/12/2021",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">December 2021</h4><h2 class="main-font"><b>Senior Full-Stack / Data-Driven Solutions Engineer</b> - Nagarro & IDS</h2>`,
        columns: [
          {
            title: "Enterprise platforms",
            bodyHtml: `<p class="alt-font">Developed and maintained enterprise applications with PHP, Laravel, React, and Angular for distributed teams and demanding client environments.</p><p class="alt-font">Backend APIs, reusable modules, and performance improvements on systems that must stay dependable in production.</p>`,
          },
          {
            title: "Data, reporting, and modernization",
            bodyHtml: `<p class="alt-font">Delivered data-oriented solutions for reporting, operational visibility, and workflows that connect business needs to technical systems.</p><p class="alt-font">Incremental modernization, new capabilities, and architecture support without disrupting live operations.</p>`,
          },
        ],
      },
      {
        id: "2023",
        year: "2023",
        dateAttr: "01/04/2023",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">April 2023 - December 2024</h4><h2 class="main-font"><b>Staff Software Engineer</b> - Solera Inc. <span class="text-yellow">/ Enterprise platform modernization</span></h2>`,
        columns: [
          {
            title: "Automotive enterprise platforms",
            bodyHtml: `<p class="alt-font">Maintained and modernized enterprise platforms used in automotive repair and workshop operations across multiple markets.</p><p class="alt-font">Worked with legacy PHP/QCubed systems, backend workflows, reporting, financial data, invoicing-related flows, and APIs.</p>`,
          },
          {
            title: "Production stability and leadership",
            bodyHtml: `<p class="alt-font">Translated business requirements into reliable technical solutions while debugging production issues and shipping sustainable improvements.</p><p class="alt-font">Mentored junior engineers, supported architecture decisions, and partnered with product using PHP, Laravel, JavaScript, and MariaDB.</p>`,
          },
        ],
      },
      {
        id: "2024",
        year: "2024",
        dateAttr: "01/01/2024",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">2024</h4><h2 class="main-font"><b>AI / LLM product engineering</b> - Molinart <span class="text-yellow">/ independent work</span></h2>`,
        columns: [
          {
            title: "RAG systems and AI assistants",
            bodyHtml: `<p class="alt-font">Designed and deployed a RAG-based AI backend using FastAPI, PostgreSQL with pgvector, OpenAI embeddings, Docker, and AWS ECS.</p><p class="alt-font">Built grounded answer flows, confidence handling, safety disclaimers, and production-oriented API endpoints — useful AI connected to real data, not generic chatbot behavior.</p>`,
          },
          {
            title: "Molinart: web, product, and cloud",
            bodyHtml: `<p class="alt-font">Built websites, applications, and product experiences for business needs across frontend, backend, databases, automation, and deployment.</p><p class="alt-font">Evolved the Molinart brand from web development into full-stack, cloud-native, and AI-enabled product engineering.</p>`,
          },
        ],
      },
      {
        id: "2025",
        year: "2025",
        dateAttr: "01/01/2025",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">January 2025 - Present</h4><h2 class="main-font"><b>Principal Software Engineer</b> - Tensure <span class="text-yellow">(Mailchimp / Intuit)</span></h2>`,
        columns: [
          {
            title: "Growth engineering and experimentation",
            bodyHtml: `<p class="alt-font">Contributed to experiment-driven product development in a high-scale SaaS environment: notifications, messaging flows, user segmentation, and measurable outcomes.</p><p class="alt-font">Connected technical implementation with product hypotheses, user behavior, and business goals using Node.js, React, PHP, and PostgreSQL.</p>`,
          },
          {
            title: "Cross-functional SaaS delivery",
            bodyHtml: `<p class="alt-font">Partnered with engineering, product, and design to turn specifications into reliable implementations on platform.</p><p class="alt-font">Bridged product strategy, technical capabilities, and measurable outcomes with principal-level ownership and hands-on execution in code and design review.</p>`,
          },
        ],
      },
    ] satisfies TimelinePanel[],
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string; description: string };
  experienceYearsStart: number;
  experienceYearsLabel: string;
  navigation: { previous: string; next: string };
  panels: readonly TimelinePanel[];
}>;
