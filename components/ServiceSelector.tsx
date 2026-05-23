'use client'

/**
 * ServiceSelector
 *
 * Routes visitors based on what they need:
 *   - Domestic Helper + Bangalore  -> /cities/bangalore
 *   - Domestic Helper + Bareilly   -> /cities/bareilly
 *   - Care Giver                   -> /care-services
 *
 * Two render modes (controlled by the `mode` prop):
 *   1. "modal"   - Auto-shown overlay on first visit. Dismissible. Hidden for
 *                  30 days after a choice is made (localStorage).
 *   2. "section" - Inline homepage section. Always visible. No persistence
 *                  side-effects beyond what the modal sets.
 *
 * Flow (both modes):
 *   Step 1: Pick "Domestic Helper" or "Care Giver".
 *   Step 2 (Helper only): Pick "Bangalore" or "Bareilly".
 *   Care Giver routes immediately from Step 1.
 */

import { useEffect, useState, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  XMarkIcon,
  HomeModernIcon,
  HeartIcon,
  MapPinIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'

const STORAGE_KEY = 'ezy_service_selector_v1'
const DAYS_TO_REMEMBER = 30
const SHOW_DELAY_MS = 1500 // brief delay so the page paints first

type Choice = 'helper' | 'caregiver'
type City = 'bangalore' | 'bareilly'

const DESTINATIONS: Record<string, string> = {
  'helper:bangalore': '/cities/bangalore',
  'helper:bareilly': '/cities/bareilly',
  caregiver: '/care-services',
}

interface ServiceSelectorProps {
  /**
   * "modal"   = overlay popup auto-shown on first visit (use in ClientOnlyWidgets).
   * "section" = inline block always rendered (use on the homepage body).
   */
  mode: 'modal' | 'section'
}

/* ------------------------------------------------------------------ */
/*  Persistence helpers                                                */
/* ------------------------------------------------------------------ */

function isDismissed(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as { expiresAt?: number }
    if (!parsed?.expiresAt) return false
    return parsed.expiresAt > Date.now()
  } catch {
    return false
  }
}

function rememberChoice() {
  if (typeof window === 'undefined') return
  try {
    const expiresAt = Date.now() + DAYS_TO_REMEMBER * 24 * 60 * 60 * 1000
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ expiresAt }))
  } catch {
    /* ignore */
  }
}

/* ------------------------------------------------------------------ */
/*  Shared inner UI (used by both modal + inline section)              */
/* ------------------------------------------------------------------ */

function SelectorBody({
  step,
  setStep,
  onPickHelper,
  onPickCareGiver,
  onPickCity,
  compact = false,
}: {
  step: 1 | 2
  setStep: (s: 1 | 2) => void
  onPickHelper: () => void
  onPickCareGiver: () => void
  onPickCity: (city: City) => void
  compact?: boolean
}) {
  return (
    <div className={compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}>
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 mb-5">
        <span
          className={`h-1.5 rounded-full transition-all duration-300 ${
            step === 1 ? 'w-8 bg-primary-500' : 'w-4 bg-primary-200'
          }`}
        />
        <span
          className={`h-1.5 rounded-full transition-all duration-300 ${
            step === 2 ? 'w-8 bg-primary-500' : 'w-4 bg-primary-200'
          }`}
        />
      </div>

      {step === 1 ? (
        <>
          <div className="text-center mb-7">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              Who do you need help from?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Choose the type of helper and we&apos;ll take you to the right page.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Domestic Helper card */}
            <button
              type="button"
              onClick={onPickHelper}
              className="group relative text-left bg-white rounded-2xl border-2 border-neutral-100 hover:border-primary-500 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary-200"
              aria-label="Choose Domestic Helper"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary-500 transition-colors mb-4">
                <HomeModernIcon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                Domestic Helper
              </h3>
              <p className="text-sm text-text-secondary leading-snug">
                Maids, cooks, nannies, drivers &amp; more for your home.
              </p>
              <div className="mt-4 flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                Continue
                <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Care Giver card */}
            <button
              type="button"
              onClick={onPickCareGiver}
              className="group relative text-left bg-white rounded-2xl border-2 border-neutral-100 hover:border-trust-500 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-trust-200"
              aria-label="Choose Care Giver"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-trust-50 group-hover:bg-trust-500 transition-colors mb-4">
                <HeartIcon className="w-7 h-7 text-trust-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                Care Giver
              </h3>
              <p className="text-sm text-text-secondary leading-snug">
                Compassionate elderly &amp; patient care at home.
              </p>
              <div className="mt-4 flex items-center text-sm font-semibold text-trust-600 group-hover:text-trust-700">
                Continue
                <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-text-secondary">
            <CheckBadgeIcon className="w-4 h-4 text-success-500" />
            <span>Background-verified helpers &middot; 10,000+ families trust us</span>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="inline-flex items-center text-sm font-semibold text-text-secondary hover:text-primary-600 mb-4 group"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
            Back
          </button>

          <div className="text-center mb-7">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              Which city are you in?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Select your location to see services available near you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onPickCity('bangalore')}
              className="group text-left bg-white rounded-2xl border-2 border-neutral-100 hover:border-primary-500 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-500 transition-colors mb-3">
                <MapPinIcon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">
                Bangalore
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Karnataka &middot; All localities
              </p>
              <div className="mt-3 flex items-center text-sm font-semibold text-primary-600">
                View services
                <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            <button
              type="button"
              onClick={() => onPickCity('bareilly')}
              className="group text-left bg-white rounded-2xl border-2 border-neutral-100 hover:border-primary-500 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-500 transition-colors mb-3">
                <MapPinIcon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">
                Bareilly
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Uttar Pradesh &middot; All localities
              </p>
              <div className="mt-3 flex items-center text-sm font-semibold text-primary-600">
                View services
                <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ServiceSelector({ mode }: ServiceSelectorProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [step, setStep] = useState<1 | 2>(1)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  /* Modal mode: decide on mount whether to auto-show */
  useEffect(() => {
    setMounted(true)
    if (mode !== 'modal') return

    // Only auto-show on the homepage (and homepage variants)
    const allowed = pathname === '/' || pathname === ''
    if (!allowed) return
    if (isDismissed()) return

    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(t)
  }, [mode, pathname])

  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (mode !== 'modal') return
    if (visible) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mode, visible])

  /* Esc to close (modal only) */
  useEffect(() => {
    if (mode !== 'modal' || !visible) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [mode, visible])

  const closeModal = useCallback(() => {
    setVisible(false)
    // Soft-dismiss (no choice made): hide for the rest of this session only
    try {
      sessionStorage.setItem('ezy_service_selector_session_dismiss', '1')
    } catch {
      /* ignore */
    }
  }, [])

  const navigateTo = useCallback(
    (path: string) => {
      rememberChoice()
      if (mode === 'modal') setVisible(false)
      router.push(path)
    },
    [mode, router]
  )

  const handlePickHelper = () => setStep(2)
  const handlePickCareGiver = () => navigateTo(DESTINATIONS.caregiver)
  const handlePickCity = (city: City) =>
    navigateTo(DESTINATIONS[`helper:${city}`])

  /* -------------------- Render: modal mode -------------------- */
  if (mode === 'modal') {
    if (!mounted || !visible) return null

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-selector-title"
        onClick={closeModal}
      >
        <div
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent strip */}
          <div className="h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-trust-500" />

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 p-2 rounded-full text-neutral-500 hover:text-text-primary hover:bg-neutral-100 transition-all"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          <span id="service-selector-title" className="sr-only">
            Choose a service
          </span>

          <SelectorBody
            step={step}
            setStep={setStep}
            onPickHelper={handlePickHelper}
            onPickCareGiver={handlePickCareGiver}
            onPickCity={handlePickCity}
          />
        </div>
      </div>
    )
  }

  /* -------------------- Render: inline section mode -------------------- */
  return (
    <section
      id="service-selector"
      className="bg-gradient-to-b from-background-primary to-white py-12 sm:py-16"
      aria-labelledby="service-selector-section-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider">
            <CheckBadgeIcon className="w-4 h-4" />
            Find help in 30 seconds
          </span>
          <h2
            id="service-selector-section-title"
            className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-3"
          >
            What kind of help do you need?
          </h2>
          <p className="text-text-secondary mt-2 max-w-xl mx-auto">
            Tell us what you&apos;re looking for and we&apos;ll take you straight to the right service.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg ring-1 ring-neutral-100">
          <SelectorBody
            step={step}
            setStep={setStep}
            onPickHelper={handlePickHelper}
            onPickCareGiver={handlePickCareGiver}
            onPickCity={handlePickCity}
            compact
          />
        </div>
      </div>
    </section>
  )
}
