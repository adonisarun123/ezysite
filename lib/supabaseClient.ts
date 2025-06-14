import type { SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | any;

if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createClient } = require('@supabase/supabase-js');
  client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
} else {
  client = {
    auth: { user: () => null },
    from: () => ({
      insert: async () => ({ data: null, error: null }),
      select: async () => ({ data: [], error: null }),
    }),
  } as any;
}

export const supabase = client; 