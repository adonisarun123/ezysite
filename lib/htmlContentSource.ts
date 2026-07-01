/**
 * Page HTML override layer.
 *
 * Pages call `getHtmlContent(key)` first; if it returns a non-empty HTML
 * string the page renders that via <DbHtmlContent/>, otherwise the page falls
 * back to its committed static JSX. `key` is the page path, e.g.
 * "services/plumbers" or "cities/bangalore/cooks".
 *
 * NOTE: the original DB-backed implementation (Supabase `site_content`) was
 * lost with commit 207a933, which committed the consumers but none of this
 * data layer. Until the real schema is restored, this returns null so every
 * page renders its static content. To re-enable DB overrides, query your
 * `site_content` table by `key` here and return the stored HTML.
 */
export async function getHtmlContent(key: string): Promise<string | null> {
  void key
  return null
}
