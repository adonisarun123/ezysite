'use client'

/**
 * ServiceSelector
 *
 * Routes visitors based on what they need:
 *   - Domestic Helper + Bangalore  -> /cities/bangalore
 *   - Domestic Helper + Bareilly   -> /cities/bareilly
 *   - Care Giver                   -> /care-services
 *
 * Visual language matches the EzyHelpers homepage brand:
 *   - Poppins (font-display) for headings, Inter body text (default)
 *   - Primary blue (#0074C8) accent with text-gradient on emphasis
 *   - rounded-xl white cards with primary-200 hover borders (same as ServicesSection)
 *   - .section-padding + .container-custom for layout consistency
 *
 * Two render modes:
 *   1. "modal"   - Overlay shown on every homepage visit. No persistence.
 *   2. "section" - Inline homepage section. Always rendered.
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
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const SHOW_DELAY_MS = 1500

type City = 'bangalore' | 'bareilly'

const DESTINATIONS: Record<string, string> = {
  'helper:bangalore': '/cities/bangalore',
  'helper:bareilly': '/cities/bareilly',
  caregiver: '/care-services',
}

interface ServiceSelectorProps {
  mode: 'modal' | 'section'
}

/* ------------------------------------------------------------------ */
/*  Shared inner UI                                                    */
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
    <div className={compact ? 'p-6 sm:p-10' : 'p-6 sm:p-8'}>
      {/* Step indicator */}
      <div className="mb-6 flex items-center justify-center gap-2">
        <span
          className={`h-1.5 rounded-full transition-all duration-300 ${
            step === 1 ? 'w-10 bg-primary-500' : 'w-4 bg-primary-100'
          }`}
        />
        <span
          className={`h-1.5 rounded-full transition-all duration-300 ${
            step === 2 ? 'w-10 bg-primary-500' : 'w-4 bg-primary-100'
          }`}
        />
      </div>

      {step === 1 ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-display">
              Who do you need <span className="text-gradient">help</span> from?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Choose the type of helper and we&apos;ll take you to the right page.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Domestic Helper card */}
            <button
              type="button"
              onClick={onPickHelper}
              aria-label="Choose Domestic Helper"
              className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {/* Animated background pattern, matching ServicesSection */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100/20 rounded-full group-hover:scale-150 group-hover:bg-primary-200/30 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100/20 rounded-full group-hover:scale-125 group-hover:bg-secondary-200/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                  <HomeModernIcon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-display">
                  Domestic Helper
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Maids, cooks, nannies, drivers &amp; more for your home.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                  Continue
                  <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>

            {/* Care Giver card */}
            <button
              type="button"
              onClick={onPickCareGiver}
              aria-label="Choose Care Giver"
              className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-trust-300 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-trust-500 focus:ring-offset-2"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-trust-100/20 rounded-full group-hover:scale-150 group-hover:bg-trust-200/30 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100/20 rounded-full group-hover:scale-125 group-hover:bg-secondary-200/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-trust-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                  <HeartIcon className="h-6 w-6 text-trust-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-display">
                  Care Giver
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Compassionate elderly &amp; patient care at home.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-trust-600 group-hover:text-trust-700">
                  Continue
                  <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <ShieldCheckIcon className="w-4 h-4 text-success-500" />
            <span>Background-verified helpers &middot; 10,000+ families trust us</span>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="group inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary-600 mb-4 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
            Back
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-display">
              Which <span className="text-gradient">city</span> are you in?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Select your location to see services available near you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button
              type="button"
              onClick={() => onPickCity('bangalore')}
              className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100/20 rounded-full group-hover:scale-150 group-hover:bg-primary-200/30 transition-all duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                  <MapPinIcon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 font-display">
                  Bangalore
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Karnataka &middot; All localities
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                  View services
                  <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onPickCity('bareilly')}
              className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100/20 rounded-full group-hover:scale-150 group-hover:bg-primary-200/30 transition-all duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                  <MapPinIcon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 font-display">
                  Bareilly
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Uttar Pradesh &middot; All localities
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                  View services
                  <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
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

  /* Modal mode: auto-show on every homepage visit (no persistence) */
  useEffect(() => {
    setMounted(true)
    if (mode !== 'modal') return
    const allowed = pathname === '/' || pathname === ''
    if (!allowed) return
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

  /* Esc to close */
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
  }, [])

  const navigateTo = useCallback(
    (path: string) => {
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-selector-title"
        onClick={closeModal}
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl my-8 max-w-2xl w-full overflow-hidden animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent strip — uses brand gradient */}
          <div className="h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-trust-500" />

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
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
      className="section-padding bg-background-primary"
      aria-labelledby="service-selector-section-title"
    >
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckBadgeIcon className="w-4 h-4" />
            Tell us what you need
          </span>
          <h2
            id="service-selector-section-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display"
          >
            What kind of <span className="text-gradient">help</span> do you need?
          </h2>
          <p className="text-lg text-gray-600">
            Tell us what you&apos;re looking for and we&apos;ll take you straight
            to the right service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100">
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
