import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Optional Supabase integration.
 *
 * OpenBridge works fully without any backend: guest progress lives in the
 * browser's localStorage. Supabase is an OPTIONAL layer for classrooms and
 * NGOs that want anonymous, aggregate progress sync (see
 * `supabase/schema.sql`) — it is never required for the tutor to function,
 * and it never stores personal information.
 *
 * Enable by setting NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */

let cachedClient: SupabaseClient | null | undefined;

export function getSupabaseClient(): SupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  cachedClient =
    url && anonKey
      ? createClient(url, anonKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        })
      : null;

  return cachedClient;
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseClient() !== null;
}
