/**
 * Safely serialize an object to a JSON-LD string for injection via
 * dangerouslySetInnerHTML. JSON.stringify does NOT escape `<`, so a value
 * containing `</script>` (e.g. a user-authored FAQ answer) would terminate the
 * <script> tag early — breaking the structured data and opening an XSS vector.
 * Escaping `<`, `>`, and `&` to their unicode forms keeps the JSON valid while
 * making it impossible to break out of the script element.
 */
export function jsonLdHtml(schema: unknown): string {
  return JSON.stringify(schema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}
