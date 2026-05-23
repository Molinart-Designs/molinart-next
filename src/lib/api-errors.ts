import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function jsonError(message: string, status: number, code?: string) {
  return NextResponse.json(
    code ? { error: message, code } : { error: message },
    { status },
  );
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

export const DEFAULT_GOOGLE_GENERATIVE_AI_MODEL = "gemini-3.1-flash-lite";

export function getGoogleGenerativeAiModel(): string {
  return process.env.GOOGLE_GENERATIVE_AI_MODEL || DEFAULT_GOOGLE_GENERATIVE_AI_MODEL;
}

export type AiProviderErrorCode =
  | "AI_QUOTA_EXCEEDED"
  | "AI_MODEL_INVALID"
  | "AI_PROVIDER_ERROR";

function collectErrorText(error: unknown): string {
  if (error instanceof Error) {
    const parts = [error.message];
    if (error.cause instanceof Error) {
      parts.push(error.cause.message);
    } else if (error.cause) {
      parts.push(String(error.cause));
    }
    return parts.join(" ");
  }
  return String(error);
}

function getStatusCode(error: unknown): number | undefined {
  if (typeof error !== "object" || error === null) {
    return undefined;
  }

  const record = error as Record<string, unknown>;
  if (typeof record.statusCode === "number") {
    return record.statusCode;
  }
  if (typeof record.status === "number") {
    return record.status;
  }

  const cause = record.cause;
  if (typeof cause === "object" && cause !== null) {
    const causeRecord = cause as Record<string, unknown>;
    if (typeof causeRecord.statusCode === "number") {
      return causeRecord.statusCode;
    }
    if (typeof causeRecord.status === "number") {
      return causeRecord.status;
    }
  }

  return undefined;
}

export function classifyAiProviderError(error: unknown): {
  message: string;
  status: number;
  code: AiProviderErrorCode;
} {
  const text = collectErrorText(error);
  const normalized = text.toUpperCase();
  const statusCode = getStatusCode(error);

  if (
    statusCode === 429 ||
    normalized.includes("RESOURCE_EXHAUSTED") ||
    normalized.includes("QUOTA") ||
    normalized.includes("RATE LIMIT")
  ) {
    return {
      message: "AI quota exceeded. Try again later or switch models.",
      status: 429,
      code: "AI_QUOTA_EXCEEDED",
    };
  }

  if (
    statusCode === 404 ||
    normalized.includes("NOT FOUND") ||
    normalized.includes("INVALID MODEL") ||
    normalized.includes("MODEL NOT") ||
    normalized.includes("UNKNOWN MODEL") ||
    normalized.includes("IS NOT SUPPORTED")
  ) {
    return {
      message: "AI model is invalid or unavailable for this API key.",
      status: 502,
      code: "AI_MODEL_INVALID",
    };
  }

  return {
    message: "AI provider error while generating a response.",
    status: 502,
    code: "AI_PROVIDER_ERROR",
  };
}

export function jsonAiProviderError(error: unknown) {
  const classified = classifyAiProviderError(error);
  console.error("chat ai provider", error);
  return jsonError(classified.message, classified.status, classified.code);
}
