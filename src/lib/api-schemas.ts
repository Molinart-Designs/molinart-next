import { z } from "zod";

export const chatRequestSchema = z.object({
  message: z.string().trim().min(1).max(2000),
  sessionId: z.string().uuid().optional(),
  visitorEmail: z.string().email().optional(),
  locale: z.enum(["es", "en"]).optional().default("es"),
});

export const contactRequestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1).max(4000),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
