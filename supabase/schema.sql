-- Molinart — Ask Emilio AI + contact leads
-- Run in Supabase SQL Editor

create extension if not exists "pgcrypto";

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  source text not null default 'contact_form',
  created_at timestamptz not null default now()
);

create table if not exists chat_sessions (
  id uuid primary key default gen_random_uuid(),
  visitor_email text,
  locale text not null default 'es',
  created_at timestamptz not null default now()
);

create table if not exists chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references chat_sessions(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  model text,
  created_at timestamptz not null default now()
);

create index if not exists idx_chat_messages_session_id
  on chat_messages(session_id, created_at);

create index if not exists idx_contacts_created_at
  on contacts(created_at desc);
