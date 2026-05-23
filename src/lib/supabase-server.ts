import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type ContactRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  source: string;
  created_at: string;
};

export type ChatSessionRow = {
  id: string;
  visitor_email: string | null;
  locale: string;
  created_at: string;
};

export type ChatMessageRow = {
  id: string;
  session_id: string;
  role: "user" | "assistant" | "system";
  content: string;
  model: string | null;
  created_at: string;
};

let cachedClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return cachedClient;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
