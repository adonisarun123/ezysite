/**
 * Helper-jobs FAQ override layer.
 *
 * `getHelperJobFaqs(key, fallback)` returns the DB-stored FAQ list for a
 * helper-jobs page (key e.g. "helper-jobs/assam/nanny-jobs-bangalore") if
 * present, otherwise the `fallback` the page passes in. The return type
 * mirrors the fallback so callers stay fully typed.
 *
 * NOTE: the DB-backed implementation was lost with commit 207a933. Until the
 * schema is restored this returns the fallback, so pages show their committed
 * FAQs. Wire the Supabase lookup (by `key`) in here to re-enable.
 */
export async function getHelperJobFaqs<T>(key: string, fallback: T): Promise<T> {
  void key
  return fallback
}
