import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (typeof supabaseUrl !== 'string' || typeof supabaseAnonKey !== 'string') {
  throw new Error('Supabase URL and Anon Key must be provided')
}

const supabaseOptions = {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    broadcast: false, // 여기서 옵션을 설정
  },
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  supabaseOptions,
)
