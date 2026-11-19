-- OpenBridge · optional classroom analytics schema
-- ------------------------------------------------
-- Designed for teachers/NGOs who want anonymous, aggregate insight into a
-- shared device or classroom. NO personal information is ever stored:
-- every child is a random, locally generated `anonymous_id` (a UUID kept
-- in the browser and rotatable at any time via "Clear my data").
--
-- The core tutor app does NOT require this schema (or Supabase at all).
-- Apply it only if you are enabling the optional classroom features.

-- Random ids for readers; no usernames, no emails, no device data.
create table if not exists public.readers (
  anonymous_id uuid primary key,
  created_at timestamptz not null default now()
);

-- One row per completed lesson attempt.
create table if not exists public.lesson_attempts (
  id bigint generated always as identity primary key,
  anonymous_id uuid not null references public.readers (anonymous_id),
  lesson_slug text not null,
  language text not null default 'en',
  accuracy int not null check (accuracy between 0 and 100),
  correct_count int not null,
  total_questions int not null,
  xp_earned int not null,
  reading_level_after int not null check (reading_level_after between 1 and 5),
  completed_at timestamptz not null default now()
);

create index if not exists lesson_attempts_anonymous_idx
  on public.lesson_attempts (anonymous_id, completed_at desc);

create index if not exists lesson_attempts_slug_idx
  on public.lesson_attempts (lesson_slug, completed_at desc);

-- Row level security: the anon key may only append attempts for a known
-- random reader id. No reads, no updates, no deletes through the anon key.
alter table public.readers enable row level security;
alter table public.lesson_attempts enable row level security;

create policy "anon can register a random reader"
  on public.readers for insert to anon with check (true);

create policy "anon can append lesson attempts"
  on public.lesson_attempts for insert to anon with check (true);

-- Aggregate views for teachers (read via an authenticated dashboard role).
create or replace view public.classroom_summary as
select
  lesson_slug,
  language,
  count(*)::int as attempts,
  round(avg(accuracy), 1) as avg_accuracy,
  count(distinct anonymous_id)::int as unique_readers
from public.lesson_attempts
group by lesson_slug, language
order by attempts desc;
