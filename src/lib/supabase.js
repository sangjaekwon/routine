import { createClient } from '@supabase/supabase-js'

// Vite 환경변수(VITE_ 접두사만 클라이언트에 노출됨)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 키가 없으면(로컬에서 .env.local 미설정 등) 빌드/렌더는 깨지지 않고,
// 제출 시점에만 안내 메시지를 띄우도록 분기한다.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
