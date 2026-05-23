const LEAD_KEYWORDS = [
  "hire",
  "hiring",
  "contrat",
  "empleo",
  "job",
  "vacan",
  "freelance",
  "consult",
  "propuesta",
  "proposal",
  "project",
  "proyecto",
  "oportunidad",
  "opportunity",
  "rate",
  "tarifa",
  "presupuesto",
  "budget",
  "contact",
  "contacto",
  "email",
  "correo",
  "available",
  "disponib",
  "colabor",
  "work together",
  "trabajemos",
];

export function messageSignalsLeadIntent(message: string): boolean {
  const normalized = message.toLowerCase();
  return LEAD_KEYWORDS.some((keyword) => normalized.includes(keyword));
}
