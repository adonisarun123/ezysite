/**
 * Service-page "Quick Answer" override layer.
 *
 * `getServiceQuickAnswer(slug, fallback)` returns the DB-stored quick answer
 * for a service if present, otherwise the `fallback` the page passes in. The
 * return type mirrors the fallback, so callers stay fully typed.
 *
 * NOTE: the DB-backed implementation was lost with commit 207a933. Until the
 * schema is restored this returns the fallback, so pages show their committed
 * quick answer. Wire the Supabase lookup (by `slug`) in here to re-enable.
 */
export async function getServiceQuickAnswer<T>(slug: string, fallback: T): Promise<T> {
  void slug
  return fallback
}
