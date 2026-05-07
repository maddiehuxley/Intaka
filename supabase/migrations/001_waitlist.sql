-- Intaka v0.1 — Waitlist table
-- Run this in Supabase SQL editor

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'intaka_landing',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (for the public waitlist form)
create policy "Anyone can join waitlist"
  on public.waitlist for insert
  to anon, authenticated
  with check (true);

-- Only service role can read (admin-only)
-- Default RLS already blocks reads from anon; nothing more to do.

create index if not exists waitlist_email_idx on public.waitlist (email);
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
