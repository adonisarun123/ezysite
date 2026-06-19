/**
 * City-page "Quick Answer" override layer.
 *
 * `getCityQuickAnswer(key, fallback)` returns the DB-stored quick answer for a
 * city page (key e.g. "cities/bangalore") if present, otherwise the `fallback`
 * the page passes in. The return type mirrors the fallback.
 *
 * NOTE: the DB-backed implementation was lost with commit 207a933. Until the
 * schema is restored this returns the fallback, so pages show their committed
 * quick answer. Wire the Supabase lookup (by `key`) in here to re-enable.
 */
export async function getCityQuickAnswer<T>(key: string, fallback: T): Promise<T> {
  void key
  return fallback
}
