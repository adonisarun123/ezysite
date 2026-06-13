'use client'

/**
 * GlobalPageTracking — mounted once in ClientOnlyWidgets so enhanced page-view
 * AND scroll-depth tracking fire on EVERY route. Previously <PageTracking> was
 * only mounted on /market-overview, so page_view + scroll_depth events never
 * fired site-wide. This derives a pageCategory from the pathname (so GA4 can
 * segment scroll/engagement by section) and additionally emits service_view on
 * /services/* pages, which was a defined-but-never-fired event.
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackPageView,
  trackServiceView,
  trackEmailClick,
  trackExternalLink,
  trackCitySelect,
  trackError,
} from '@/lib/analytics'
import { useScrollTracking } from '@/hooks/useScrollTracking'

/** Map a pathname to a coarse GA4 page category used as the scroll-depth dimension. */
function categoryFor(pathname: string): string {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/services')) return 'service'
  if (pathname.startsWith('/cities')) return 'city'
  if (pathname.startsWith('/care-services')) return 'care'
  if (pathname.startsWith('/blog')) return 'blog'
  if (pathname.startsWith('/careers') || pathname.startsWith('/helper-jobs')) return 'careers'
  if (pathname.startsWith('/hire-helper') || pathname.startsWith('/book-now')) return 'booking'
  return 'general'
}

export default function GlobalPageTracking() {
  const pathname = usePathname()
  const category = categoryFor(pathname)

  // Scroll-depth events (25/50/75/90/100%) for every route, tagged by category.
  useScrollTracking({ pageType: category, enabled: true })

  // Enhanced page_view on each navigation. lastTracked guards against duplicate
  // fires when other props change but the path hasn't.
  const lastTracked = useRef<string | null>(null)
  useEffect(() => {
    if (lastTracked.current === pathname) return
    lastTracked.current = pathname

    trackPageView(pathname, document.title, category)

    // service_view: fire on a specific service page (/services/<slug>), not the
    // /services index, so the count reflects real service interest.
    if (category === 'service') {
      const slug = pathname.replace(/^\/services\/?/, '').split('/')[0]
      if (slug) {
        const serviceName = slug.replace(/-/g, ' ')
        trackServiceView(serviceName, 'service_page')
      }
    }
  }, [pathname, category])

  // Delegated click listener: catches mailto: and outbound links anywhere on the
  // page without having to instrument each <a> individually. Capture phase + a
  // closest('a') walk so clicks on nested elements (icons/spans) still resolve.
  useEffect(() => {
    if (typeof document === 'undefined') return

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null
      if (!anchor) return

      const rawHref = anchor.getAttribute('href') || ''
      if (!rawHref) return

      // mailto: → email_click
      if (rawHref.toLowerCase().startsWith('mailto:')) {
        const email = rawHref.slice('mailto:'.length).split('?')[0]
        trackEmailClick(email, window.location.pathname)
        return
      }

      // Internal city link (/cities/<name>) → city_select. Matches the top-level
      // city hub only, not deep service pages like /cities/bangalore/cooks.
      const cityMatch = rawHref.match(/^\/cities\/([^/?#]+)\/?(?:[?#].*)?$/)
      if (cityMatch) {
        const cityName = decodeURIComponent(cityMatch[1]).replace(/-/g, ' ')
        trackCitySelect(cityName, 'link')
        return
      }

      // Outbound http(s) link to a different host → external_link.
      // Skips tel:, whatsapp, anchors, and same-origin internal navigation
      // (which is already covered by page_view tracking).
      if (/^https?:\/\//i.test(rawHref)) {
        try {
          const url = new URL(rawHref, window.location.href)
          if (url.host && url.host !== window.location.host) {
            trackExternalLink(url.href, (anchor.textContent || '').trim().slice(0, 80), window.location.pathname)
          }
        } catch {
          /* malformed href — ignore */
        }
      }
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  // Catch client-side errors that never reach a React error boundary
  // (async handlers, event callbacks, rejected promises) → page_error event.
  useEffect(() => {
    if (typeof window === 'undefined') return

    const onError = (e: ErrorEvent) => {
      trackError(
        'window_error',
        `${e.message || 'unknown'}${e.filename ? ` @ ${e.filename}:${e.lineno || 0}` : ''}`,
        window.location.pathname
      )
    }
    const onRejection = (e: PromiseRejectionEvent) => {
      const reason = e.reason
      const msg = reason instanceof Error ? reason.message : String(reason)
      trackError('unhandled_rejection', msg.slice(0, 300), window.location.pathname)
    }

    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onRejection)
    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onRejection)
    }
  }, [])

  return null
}
