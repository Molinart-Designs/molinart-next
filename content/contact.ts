import type { LocalizedContent } from "@/content/i18n";

export const contactContent = {
  es: {
    heading: {
      accent: "Contacto",
      title: "Construyamos algo útil.",
    },
    description:
      "Puedes escribir por este formulario para conversar sobre producto, arquitectura o una oportunidad de ingeniería.",
    sidebar: {
      title: "Molinart.net",
      subtitle: "Gracias por visitar.",
    },
    form: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo",
      message: "Mensaje",
      spamNotice:
        "Uso este medio solo para contacto personal. Tu información se utilizará para responderte y se eliminará después de 15 días.",
      submit: "Enviar",
      sending: "Enviando…",
      success: "Mensaje enviado. Emilio te responderá pronto.",
      errorGeneric: "No se pudo enviar. Intenta de nuevo.",
      errorConfig: "El formulario no está configurado en el servidor.",
      validationRequired: "Completa los campos obligatorios.",
    },
  },
  en: {
    heading: {
      accent: "Contact",
      title: "Let us build something useful.",
    },
    description:
      "Use this form to start a conversation about product work, architecture, or an engineering opportunity.",
    sidebar: {
      title: "Molinart.net",
      subtitle: "Thanks for visiting.",
    },
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      spamNotice:
        "I use this channel only for personal contact. Your information will be used to reply and removed after 15 days.",
      submit: "Send",
      sending: "Sending…",
      success: "Message sent. Emilio will get back to you soon.",
      errorGeneric: "Could not send. Please try again.",
      errorConfig: "The form is not configured on the server.",
      validationRequired: "Please fill in the required fields.",
    },
  },
} as const satisfies LocalizedContent<{
  heading: { accent: string; title: string };
  description: string;
  sidebar: { title: string; subtitle: string };
  form: {
    name: string;
    phone: string;
    email: string;
    message: string;
    spamNotice: string;
    submit: string;
    sending: string;
    success: string;
    errorGeneric: string;
    errorConfig: string;
    validationRequired: string;
  };
}>;
