'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ezy_cookie_consent_v1'

/**
 * CookieConsent — high-acceptance consent banner.
 *
 * Design intent: maximise the share of visitors who grant analytics/marketing
 * consent so GTM, GA4, Facebook Pixel, Microsoft Clarity and Tawk.to actually
 * load. We do this by:
 *   - Showing a single prominent "Accept All" CTA on the banner.
 *   - Hiding the "Decline" path behind a subtle "Manage preferences" link.
 *   - Pre-selecting Analytics + Marketing in the preferences modal (the user
 *     still has to actively uncheck and Save to opt out).
 *   - NOT saving any decision if the user dismisses the banner without
 *     choosing — the banner just reappears next visit. (Previously we were
 *     reloading the page on "Decline" and persisting that state forever.)
 *
 * Persists user choice ('accepted' | 'declined') in localStorage under
 * `ezy_cookie_consent_v1`. On accept (full or partial-with-analytics),
 * dispatches a `cookieConsent:accepted` custom event so other client code
 * (GTMScript, ThirdPartyScripts) hot-loads tracking without a page reload.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsOn, setAnalyticsOn] = useState(true)
  const [marketingOn, setMarketingOn] = useState(true)

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

  const persistAccepted = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      /* ignore */
    }
    setVisible(false)
    setShowPreferences(false)
    try {
      window.dispatchEvent(new CustomEvent('cookieConsent:accepted'))
    } catch {
      /* ignore */
    }
  }

  const persistDeclined = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'declined')
    } catch {
      /* ignore */
    }
    setVisible(false)
    setShowPreferences(false)
    // No reload — tracking scripts gate themselves on the same key on next nav.
  }

  const acceptAll = () => persistAccepted()

  const savePreferences = () => {
    // Treat "any non-essential category enabled" as accepted, so GTM/GA4/etc
    // still load. Only an explicit "all off" save is treated as declined.
    if (analyticsOn || marketingOn) {
      persistAccepted()
    } else {
      persistDeclined()
    }
  }

  return (
    <>
      {/* Banner */}
      <div
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent"
        className="fixed bottom-16 lg:bottom-4 inset-x-2 lg:inset-x-auto lg:right-4 lg:max-w-md z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-4"
      >
        <p className="text-sm text-gray-700">
          We use cookies to improve your experience, analyse site usage and personalise content. By
          clicking <strong>Accept All</strong> you agree to our use of cookies. Read our{' '}
          <a href="/privacy-policy" className="text-primary-600 underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-3 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => setShowPreferences(true)}
            className="text-xs text-gray-500 hover:text-gray-700 underline underline-offset-2"
          >
            Manage preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            autoFocus
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Preferences modal */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie preferences"
          className="fixed inset-0 z-[60] flex items-end lg:items-center justify-center bg-black/40 p-4"
          onClick={() => setShowPreferences(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-900">Cookie preferences</h2>
            <p className="mt-2 text-sm text-gray-600">
              We use cookies in the following categories. Essential cookies are always on; the
              others help us improve EzyHelpers for you.
            </p>

            <div className="mt-4 space-y-3">
              <PrefRow
                title="Essential"
                description="Required for the site to function (security, navigation, form submission). Always on."
                checked
                disabled
              />
              <PrefRow
                title="Analytics"
                description="Helps us understand which pages are most useful and where to improve. (Google Analytics, Microsoft Clarity)"
                checked={analyticsOn}
                onChange={setAnalyticsOn}
              />
              <PrefRow
                title="Marketing"
                description="Lets us show more relevant offers and measure our campaigns. (Google Tag Manager, Facebook Pixel)"
                checked={marketingOn}
                onChange={setMarketingOn}
              />
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="button"
                onClick={savePreferences}
                className="text-sm text-gray-600 hover:text-gray-800 underline underline-offset-2"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                autoFocus
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function PrefRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (next: boolean) => void
}) {
  return (
    <label
      className={`flex items-start gap-3 p-3 rounded-lg border ${
        disabled ? 'border-gray-100 bg-gray-50' : 'border-gray-200 hover:bg-gray-50 cursor-pointer'
      }`}
    >
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="flex-1">
        <span className="block text-sm font-medium text-gray-900">{title}</span>
        <span className="block text-xs text-gray-500">{description}</span>
      </span>
    </label>
  )
}
