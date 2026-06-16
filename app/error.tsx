'use client'

/**
 * Route-segment error boundary. Next.js renders this when a rendering error is
 * thrown in a route segment below the root layout. We log it to GA4 via
 * trackError (page_error event) so client-side crashes are visible in
 * analytics, then offer recovery via reset().
 */

import { useEffect } from 'react'
import Link from 'next/link'
import { trackError } from '@/lib/analytics'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    trackError(
      'react_render_error',
      `${error.message}${error.digest ? ` (digest: ${error.digest})` : ''}`,
      typeof window !== 'undefined' ? window.location.pathname : 'unknown'
    )
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We hit an unexpected error. You can try again, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-primary-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-primary-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border-2 border-primary-600 text-primary-600 font-semibold rounded-xl px-6 py-3 hover:bg-primary-50 transition-colors"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
