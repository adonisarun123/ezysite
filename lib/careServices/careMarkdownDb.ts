/**
 * Care-services markdown override fetch (DB-first priming).
 *
 * `readCareMarkdown.ts` calls `getCareMarkdownRaw(filename)` to optionally
 * prime its cache from Supabase (`site_content`, section 'care-services',
 * metadata.rawMarkdown). On null/error it transparently falls back to the
 * committed file under content/care-services/.
 *
 * NOTE: the DB-backed implementation was lost with commit 207a933. Until the
 * schema is restored this returns null, so care pages render from their
 * committed markdown files. Wire the Supabase lookup (by `filename`) here to
 * re-enable DB overrides.
 */
export async function getCareMarkdownRaw(filename: string): Promise<string | null> {
  void filename
  return null
}
