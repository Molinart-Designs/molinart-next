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
      title: "De desarrollo web a producto a escala.",
      description:
      "Selecciona un año para recorrer roles, entregables y aprendizajes clave.",
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
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Enero 2010</h4><h2 class="main-font"><b>Web Developer / Full-Stack Developer</b> - Armageddon Entertainment Group</h2>`,
        columns: [
          {
            title: "Productos y plataformas",
            bodyHtml: `<p class="alt-font">Desarrollo de aplicaciones web y móviles, revistas digitales, CMS, herramientas internas y un directorio de hoteles con panel administrativo.</p><p class="alt-font">Construcción de backend, interfaces y estructuras de datos para distintas iniciativas del negocio.</p>`,
          },
          {
            title: "Infraestructura y liderazgo",
            bodyHtml: `<p class="alt-font">Administración de Linux, MySQL y servicios en Google Cloud Platform para sostener aplicaciones en producción.</p><p class="alt-font">Coordinación de equipo y mejora de mantenibilidad en sistemas heredados.</p>`,
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
            title: "Modernización",
            bodyHtml: `<p class="alt-font">Migración y reingeniería de plataformas existentes con Laravel, Python, React y tecnologías web modernas.</p><p class="alt-font">Participación en sitios, CMS, ERP y soluciones SaaS con foco en rendimiento y evolución.</p>`,
          },
          {
            title: "Operación técnica",
            bodyHtml: `<p class="alt-font">Gestión de bases de datos, servidores y ambientes cloud.</p><p class="alt-font">Coordinación técnica para entregar proyectos desde el planteamiento hasta producción.</p>`,
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
            title: "Coordinación",
            bodyHtml: `<p class="alt-font">Gestión de iniciativas web y de aplicaciones en varias áreas, alineando ejecución técnica con objetivos de negocio.</p><p class="alt-font">Supervisión de esfuerzos internos y de proveedores para cuidar calidad y tiempos.</p>`,
          },
          {
            title: "ERP y colaboracion",
            bodyHtml: `<p class="alt-font">Aporte a iniciativas relacionadas con ERP, principalmente en frontend e implementación transversal.</p><p class="alt-font">Mejora de comunicación entre equipos técnicos y stakeholders.</p>`,
          },
        ],
      },
      {
        id: "2022",
        year: "2022",
        dateAttr: "01/12/2021",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Diciembre 2021</h4><h2 class="main-font"><b>Senior Full-Stack Developer / Data-Driven Solutions Engineer</b> - Nagarro & IDS</h2>`,
        columns: [
          {
            title: "Full stack y datos",
            bodyHtml: `<p class="alt-font">Desarrollo y mantenimiento de aplicaciones empresariales con PHP, Laravel, React y Angular.</p><p class="alt-font">Entrega de soluciones orientadas a datos para reporting, visibilidad operativa y toma de decisiones.</p>`,
          },
          {
            title: "Soluciones escalables",
            bodyHtml: `<p class="alt-font">Modernización de plataformas, nuevas funcionalidades y mejoras de rendimiento y usabilidad.</p><p class="alt-font">Colaboración con equipos distribuidos para aterrizar requerimientos de cliente.</p>`,
          },
        ],
      },
      {
        id: "2023",
        year: "2023",
        dateAttr: "01/04/2023",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">Abril 2023 - Diciembre 2024</h4><h2 class="main-font"><b>Senior Staff Software Engineer</b> - Solera Inc.</h2>`,
        columns: [
          {
            title: "Arquitectura y estabilidad",
            bodyHtml: `<p class="alt-font">Diseño e implementación de soluciones escalables para plataformas empresariales.</p><p class="alt-font">Traducción de requisitos a entregables técnicos, APIs, componentes y mejoras sostenibles.</p>`,
          },
          {
            title: "Liderazgo",
            bodyHtml: `<p class="alt-font">Investigación y resolución de defectos en sistemas establecidos.</p><p class="alt-font">Mentoría a ingenieros junior y soporte a decisiones técnicas con PHP, Laravel, QCubed, JavaScript y MariaDB.</p>`,
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
            title: "Producto y experimentacion",
            bodyHtml: `<p class="alt-font">Contribución a notificaciones de crecimiento y desarrollo de producto guiado por experimentos en un entorno SaaS de gran escala.</p><p class="alt-font">Trabajo con segmentación, mensajes, tratamientos de email y decisiones informadas por datos.</p>`,
          },
          {
            title: "Ejecucion transversal",
            bodyHtml: `<p class="alt-font">Colaboración con ingeniería, producto y diseño para convertir especificaciones en implementaciones confiables.</p><p class="alt-font">Puente entre estrategia de producto, capacidades de plataforma y resultados medibles con Node, React, PHP y PostgreSQL.</p>`,
          },
        ],
      },
    ] satisfies TimelinePanel[],
  },
  en: {
    heading: {
      accent: "Career",
      title: "From web delivery to product at scale.",
      description:
        "Select a year to explore roles, delivery highlights, and the work that shaped the path.",
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
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">January 2010</h4><h2 class="main-font"><b>Web Developer / Full-Stack Developer</b> - Armageddon Entertainment Group</h2>`,
        columns: [
          {
            title: "Products and platforms",
            bodyHtml: `<p class="alt-font">Built web and mobile applications, digital magazines, CMS products, internal tools, and a hotel directory with an admin panel.</p><p class="alt-font">Delivered backend systems, interfaces, and database structures for several business initiatives.</p>`,
          },
          {
            title: "Infrastructure and leadership",
            bodyHtml: `<p class="alt-font">Managed Linux, MySQL, and Google Cloud Platform services for production applications.</p><p class="alt-font">Coordinated a team and improved maintainability in legacy systems.</p>`,
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
            title: "Modernization",
            bodyHtml: `<p class="alt-font">Migrated and reengineered existing platforms with Laravel, Python, React, and modern web technologies.</p><p class="alt-font">Contributed to sites, CMS work, ERP, and SaaS solutions with performance and evolution in mind.</p>`,
          },
          {
            title: "Technical operations",
            bodyHtml: `<p class="alt-font">Managed databases, servers, and cloud environments.</p><p class="alt-font">Helped carry projects from early definition through production delivery.</p>`,
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
            title: "Coordination",
            bodyHtml: `<p class="alt-font">Coordinated web and application initiatives across business areas, aligning technical execution with business goals.</p><p class="alt-font">Supervised internal and vendor-led efforts for quality and timely delivery.</p>`,
          },
          {
            title: "ERP collaboration",
            bodyHtml: `<p class="alt-font">Contributed to ERP-related initiatives, mainly in frontend and cross-functional implementation support.</p><p class="alt-font">Improved collaboration between technical teams and stakeholders.</p>`,
          },
        ],
      },
      {
        id: "2022",
        year: "2022",
        dateAttr: "01/12/2021",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">December 2021</h4><h2 class="main-font"><b>Senior Full-Stack Developer / Data-Driven Solutions Engineer</b> - Nagarro & IDS</h2>`,
        columns: [
          {
            title: "Full stack and data",
            bodyHtml: `<p class="alt-font">Developed and maintained enterprise applications with PHP, Laravel, React, and Angular.</p><p class="alt-font">Delivered data-driven solutions for reporting, operational visibility, and decision-making.</p>`,
          },
          {
            title: "Scalable solutions",
            bodyHtml: `<p class="alt-font">Modernized platforms, delivered new features, and improved performance and usability.</p><p class="alt-font">Collaborated with distributed teams to turn client requirements into scalable solutions.</p>`,
          },
        ],
      },
      {
        id: "2023",
        year: "2023",
        dateAttr: "01/04/2023",
        headerHtml: `<h4 class="text-yellow main-font font-weight-normal">April 2023 - December 2024</h4><h2 class="main-font"><b>Senior Staff Software Engineer</b> - Solera Inc.</h2>`,
        columns: [
          {
            title: "Architecture and stability",
            bodyHtml: `<p class="alt-font">Designed and implemented scalable software solutions for enterprise platforms.</p><p class="alt-font">Translated business requirements into technical delivery, APIs, components, and sustainable improvements.</p>`,
          },
          {
            title: "Leadership",
            bodyHtml: `<p class="alt-font">Investigated and resolved defects in established systems.</p><p class="alt-font">Mentored junior engineers and supported technical decisions with PHP, Laravel, QCubed, JavaScript, and MariaDB.</p>`,
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
            title: "Product and experimentation",
            bodyHtml: `<p class="alt-font">Contribute to growth notifications and experiment-driven product development in a high-scale SaaS environment.</p><p class="alt-font">Work with segmentation, messaging flows, email treatments, and data-informed product decisions.</p>`,
          },
          {
            title: "Cross-functional execution",
            bodyHtml: `<p class="alt-font">Partner with engineering, product, and design to turn specifications into reliable implementations.</p><p class="alt-font">Bridge product strategy, platform capabilities, and measurable outcomes with Node, React, PHP, and PostgreSQL.</p>`,
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
