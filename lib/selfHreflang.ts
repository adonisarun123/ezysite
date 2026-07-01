const SITE_ORIGIN = 'https://www.ezyhelpers.com'

/**
 * Self-referencing hreflang (en-IN + x-default) for the current URL.
 * Google recommends including a self-reference in hreflang clusters.
 */
export function selfReferencingLanguages(pathnameOrUrl: string): Record<string, string> {
  // Callers pass either a path ("/care-services/foo") or an already-absolute
  // canonical URL ("https://www.ezyhelpers.com/care-services/foo"). Detect the
  // latter so we never double-prefix the origin (which produced 404-ing
  // "https://www.ezyhelpers.com/https:/www.ezyhelpers.com/..." hreflang URLs).
  let url: string
  if (/^https?:\/\//i.test(pathnameOrUrl)) {
    url = pathnameOrUrl
  } else {
    const path = pathnameOrUrl.startsWith('/') ? pathnameOrUrl : `/${pathnameOrUrl}`
    url = `${SITE_ORIGIN}${path}`
  }
  return { 'en-IN': url, 'x-default': url }
}
