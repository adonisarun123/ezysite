'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ezy_cookie_consent_v1'

/**
 * CookieConsent — minimal GDPR-style consent banner.
 *
 * Persists user choice ('accepted' | 'declined') in localStorage under
 * `ezy_cookie_consent_v1`. On accept, dispatches a `cookieConsent:accepted`
 * custom event so other client code (e.g. ThirdPartyScripts) can hot-load
 * tracking scripts without a page reload. On decline, reloads to ensure no
 * tracking scripts remain mounted.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const decision = window.localStorage.getItem(STORAGE_KEY)
      if (decision !== 'accepted' && decision !== 'declined') {
        setVisible(true)
      }
    } catch {
      // localStorage unavailable (private mode etc) — fall back to showing banner
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      /* ignore */
    }
    setVisible(false)
    try {
      window.dispatchEvent(new CustomEvent('cookieConsent:accepted'))
    } catch {
      /* ignore */
    }
  }

  const decline = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'declined')
    } catch {
      /* ignore */
    }
    setVisible(false)
    // Reload so any already-mounted tracking scripts are gone.
    window.location.reload()
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-16 lg:bottom-4 inset-x-2 lg:inset-x-auto lg:right-4 lg:max-w-md z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-4"
    >
      <p className="text-sm text-gray-700">
        We use cookies for analytics and to improve your experience. You can accept all cookies or decline non-essential
        ones. Read our{' '}
        <a href="/privacy-policy" className="text-primary-600 underline">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button
          type="button"
          onClick={decline}
          className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={accept}
          className="px-3 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
