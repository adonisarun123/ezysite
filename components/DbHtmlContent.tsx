interface DbHtmlContentProps {
  /** Pre-rendered HTML string fetched from the CMS/DB via getHtmlContent(). */
  content: string
}

/**
 * Renders a stored HTML string for pages whose content lives in the DB.
 * Pages only mount this when getHtmlContent() returns a non-empty string;
 * otherwise they render their committed static JSX instead.
 *
 * Presentational only, so it works in both server and client components.
 * If/when DB overrides are re-enabled, verify the markup/styling here matches
 * the original migration's renderer.
 */
export default function DbHtmlContent({ content }: DbHtmlContentProps) {
  return (
    <div
      className="db-html-content prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
