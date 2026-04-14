const SITE_ORIGIN = 'https://www.ezyhelpers.com'

/**
 * Self-referencing hreflang (en-IN + x-default) for the current URL.
 * Google recommends including a self-reference in hreflang clusters.
 */
export function selfReferencingLanguages(pathname: string): Record<string, string> {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  const url = `${SITE_ORIGIN}${path}`
  return { 'en-IN': url, 'x-default': url }
}
