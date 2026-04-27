import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client with elevated privileges (bypasses RLS).
 * Required for on-demand booking overlap enforcement.
 */
export function createSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
