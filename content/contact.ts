import type { LocalizedContent } from "@/content/i18n";

export type ContactSidebarLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const contactContent = {
  es: {
    heading: {
      accent: "Contacto",
      title: "¿Te interesa trabajar conmigo?",
    },
    description:
      "Estoy abierto a oportunidades seleccionadas en ingeniería de software Staff o Principal, desarrollo de productos habilitados con IA, arquitectura SaaS y liderazgo técnico. Puedes contactarme para roles, consultoría, colaboraciones o desarrollo de producto.",
    sidebar: {
      title: "Molinart",
      subtitle: "Enlaces útiles",
      links: [
        { label: "Preguntar a Emilio AI", href: "#ask-emilio" },
        { label: "Descargar CV", href: "/files/resume_emilio_esp.pdf" },
        {
          label: "Ver LinkedIn",
          href: "https://www.linkedin.com/in/molinart/",
          external: true,
        },
        {
          label: "Ver GitHub",
          href: "https://github.com/Molinart-Designs/",
          external: true,
        },
      ] satisfies ContactSidebarLink[],
    },
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      phone: "Teléfono",
      phonePlaceholder: "Opcional",
      email: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      message: "Mensaje",
      messagePlaceholder:
        "Cuéntame sobre el rol, proyecto o colaboración que tienes en mente.",
      spamNotice:
        "Uso este formulario solo para contacto profesional. Tu información se utilizará para responderte y se eliminará después de 15 días.",
      submit: "Contactar a Emilio",
      sending: "Enviando…",
      success: "Mensaje enviado. Emilio revisará tu solicitud y te responderá pronto.",
      errorGeneric: "No se pudo enviar el mensaje. Intenta de nuevo.",
      errorConfig: "El formulario no está configurado en el servidor.",
      validationRequired: "Completa nombre, correo y mensaje.",
    },
  },
  en: {
    heading: {
      accent: "Contact",
      title: "Interested in working together?",
    },
    description:
      "I’m open to selected opportunities in Staff or Principal Software Engineering, AI-enabled product development, SaaS architecture, and technical leadership. Reach out about roles, consulting, collaborations, or product work.",
    sidebar: {
      title: "Molinart",
      subtitle: "Quick links",
      links: [
        { label: "Ask Emilio AI", href: "#ask-emilio" },
        { label: "Download Resume", href: "/files/resume_emilio_eng.pdf" },
        {
          label: "View LinkedIn",
          href: "https://www.linkedin.com/in/molinart/",
          external: true,
        },
        {
          label: "View GitHub",
          href: "https://github.com/Molinart-Designs/",
          external: true,
        },
      ] satisfies ContactSidebarLink[],
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "Optional",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder:
        "Tell me about the role, project, or collaboration you have in mind.",
      spamNotice:
        "I use this form for professional inquiries only. Your information will be used to reply and removed after 15 days.",
      submit: "Contact Emilio",
      sending: "Sending…",
      success: "Message sent. Emilio will review your note and get back to you soon.",
      errorGeneric: "Could not send your message. Please try again.",
      errorConfig: "The form is not configured on the server.",
      validationRequired: "Please complete name, email, and message.",
    },
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  description: string;
  sidebar: {
    title: string;
    subtitle: string;
    links: readonly ContactSidebarLink[];
  };
  form: {
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    spamNotice: string;
    submit: string;
    sending: string;
    success: string;
    errorGeneric: string;
    errorConfig: string;
    validationRequired: string;
  };
}>;
