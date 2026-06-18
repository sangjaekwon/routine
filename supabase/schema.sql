-- 신청 폼(signups) 테이블 + RLS 정책
-- 실행 위치: Supabase 대시보드 > SQL Editor > New query > 붙여넣고 Run
-- 멱등(idempotent)하게 작성되어 여러 번 실행해도 안전합니다.

-- 1) 테이블 생성
create table if not exists public.signups (
  id         uuid primary key default gen_random_uuid(),
  contact    text        not null,
  job        text        not null,
  shift      text        not null,
  agree      boolean     not null default false,
  created_at timestamptz not null default now()
);

-- 2) RLS 활성화 (공개 폼이므로 행 단위 보안 필수)
alter table public.signups enable row level security;

-- 3) 익명(anon) 사용자에게 INSERT만 허용
--    (SELECT 정책은 만들지 않음 → 수집한 연락처를 공개로 읽을 수 없음)
drop policy if exists "anon can insert signups" on public.signups;
create policy "anon can insert signups"
  on public.signups
  for insert
  to anon, authenticated
  with check (true);
