import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// If environment variables are missing, fall back to a lightweight mock so
// build doesn't crash on pages that import the client but don't actually use it.

export const supabase =
  !supabaseUrl || !supabaseAnonKey
    ? {
        auth: { user: () => null },
        from: () => ({ select: async () => ({ data: [], error: null }) }),
      }
    : createClient(supabaseUrl, supabaseAnonKey); 