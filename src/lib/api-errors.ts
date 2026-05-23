import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export function jsonValidationError(error: ZodError) {
  return NextResponse.json(
    {
      error: "Validation failed",
      details: error.flatten().fieldErrors,
    },
    { status: 400 },
  );
}

export function isGoogleAiConfigured(): boolean {
  return Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
}
