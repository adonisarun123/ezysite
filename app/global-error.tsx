'use client'

/**
 * Root error boundary. Next.js renders this ONLY when the root layout itself
 * throws — it replaces the whole document, so it must render its own <html>/<body>.
 * Because the normal analytics scripts live in the (now-crashed) root layout,
 * we push the error straight onto window.dataLayer as a resilient fallback in
 * addition to calling trackError.
 */

import { useEffect } from 'react'
import { trackError } from '@/lib/analytics'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    const message = `${error.message}${error.digest ? ` (digest: ${error.digest})` : ''}`
    const path = typeof window !== 'undefined' ? window.location.pathname : 'unknown'
    try {
      // Resilient fallback: the root layout (which loads GA/GTM) failed, so push
      // directly to dataLayer in case window.gtag was never initialized.
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'page_error', error_type: 'root_layout_error', error_message: message, error_location: path })
      }
      trackError('root_layout_error', message, path)
    } catch {
      /* never let error logging throw inside the error boundary */
    }
  }, [error])

  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', margin: 0, padding: '1rem' }}>
        <div style={{ maxWidth: 420, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            We hit an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{ background: '#0074C8', color: '#fff', fontWeight: 600, borderRadius: 12, padding: '0.75rem 1.5rem', border: 'none', cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
