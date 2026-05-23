'use client'

/**
 * ServiceSelector
 *
 * Routes visitors based on what they need:
 *   - Domestic Helper + Bangalore  -> /cities/bangalore
 *   - Domestic Helper + Bareilly   -> /cities/bareilly
 *   - Care Giver                   -> /care-services
 *
 * Visual language matches /care-services:
 *   - Fraunces serif (font-careSerif) for headlines
 *   - Plus Jakarta Sans (font-careUi) for UI
 *   - Coral #FF385C accent, warm pastel surfaces, dark neutrals
 *   - Apple-style rounded-full pill buttons, italic emphasis, uppercase eyebrows
 *
 * Two render modes:
 *   1. "modal"   - First-visit overlay on the homepage; 30-day localStorage memory.
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
  ArrowLongRightIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const STORAGE_KEY = 'ezy_service_selector_v1'
const DAYS_TO_REMEMBER = 30
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
/*  Persistence helpers                                                */
/* ------------------------------------------------------------------ */

function isDismissed(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const sessionDismiss = sessionStorage.getItem(
      'ezy_service_selector_session_dismiss'
    )
    if (sessionDismiss === '1') return true
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
    <div className={`font-careUi ${compact ? 'p-6 sm:p-10' : 'p-8 sm:p-12'}`}>
      {/* Step indicator */}
      <div className="mb-6 flex items-center justify-center gap-2">
        <span
          className={`h-1 rounded-full transition-all duration-300 ${
            step === 1 ? 'w-10 bg-[#FF385C]' : 'w-4 bg-neutral-200'
          }`}
        />
        <span
          className={`h-1 rounded-full transition-all duration-300 ${
            step === 2 ? 'w-10 bg-[#FF385C]' : 'w-4 bg-neutral-200'
          }`}
        />
      </div>

      {step === 1 ? (
        <>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
              Two choices. One careful match.
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Who do you need help from?
              <br />
              <em className="font-careSerif font-normal italic text-[#FF385C]">
                We&apos;ll guide you from here.
              </em>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              Tell us whether you&apos;re looking for everyday help at home, or
              care for someone you love.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {/* Domestic Helper card */}
            <button
              type="button"
              onClick={onPickHelper}
              aria-label="Choose Domestic Helper"
              className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-gradient-to-br from-[#F2F7FB] via-[#E8F2F8] to-[#D6E8F4] p-7 text-left transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,116,200,0.45)] focus:outline-none focus:ring-2 focus:ring-[#0074C8]/40 focus:ring-offset-2 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#0074C8]/15 blur-3xl"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0074C8] ring-1 ring-[#0074C8]/20">
                <HomeModernIcon className="h-6 w-6" aria-hidden />
              </span>
              <p className="relative mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0074C8]">
                Everyday home help
              </p>
              <h3 className="relative mt-2 font-careSerif text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                Domestic Helper
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-neutral-700">
                Maids, cooks, nannies, drivers and more — matched to your home
                and routine.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                Continue
                <ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Care Giver card */}
            <button
              type="button"
              onClick={onPickCareGiver}
              aria-label="Choose Care Giver"
              className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-gradient-to-br from-[#FFF6F2] via-[#FFE4DA] to-[#FBC0AE] p-7 text-left transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(255,56,92,0.5)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:ring-offset-2 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FF385C]/20 blur-3xl"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#FF385C] ring-1 ring-[#FF385C]/20">
                <HeartIcon className="h-6 w-6" aria-hidden />
              </span>
              <p className="relative mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
                Care, brought home
              </p>
              <h3 className="relative mt-2 font-careSerif text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                Care Giver
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-neutral-700">
                Compassionate nurses, elderly &amp; patient care — verified and
                matched, not assigned.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                Continue
                <ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          <div className="mt-9 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
            <ShieldCheckIcon className="h-4 w-4 text-[#FF385C]" aria-hidden />
            <span>Verified helpers &middot; 10,000+ families trust us</span>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="group mb-6 inline-flex items-center text-sm font-semibold text-neutral-500 transition hover:text-neutral-900"
          >
            <ArrowLeftIcon className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back
          </button>

          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
              One more step
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Where are you?
              <br />
              <em className="font-careSerif font-normal italic text-[#FF385C]">
                We&apos;ll take it from there.
              </em>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              Pick your city to see verified helpers available near you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <button
              type="button"
              onClick={() => onPickCity('bangalore')}
              className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-7 text-left transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_14px_36px_-18px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-neutral-900/30 focus:ring-offset-2 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F7FB] text-[#0074C8] ring-1 ring-[#0074C8]/15">
                <MapPinIcon className="h-6 w-6" aria-hidden />
              </span>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Karnataka
              </p>
              <h3 className="mt-2 font-careSerif text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                Bangalore
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Verified maids, cooks, nannies &amp; drivers across all
                Bangalore localities.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                View services
                <ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => onPickCity('bareilly')}
              className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-7 text-left transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_14px_36px_-18px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-neutral-900/30 focus:ring-offset-2 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F7FB] text-[#0074C8] ring-1 ring-[#0074C8]/15">
                <MapPinIcon className="h-6 w-6" aria-hidden />
              </span>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Uttar Pradesh
              </p>
              <h3 className="mt-2 font-careSerif text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                Bareilly
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Trusted household helpers serving families across Bareilly.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                View services
                <ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
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

  /* Modal mode: decide whether to auto-show */
  useEffect(() => {
    setMounted(true)
    if (mode !== 'modal') return
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
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-neutral-950/55 p-4 backdrop-blur-sm animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-selector-title"
        onClick={closeModal}
      >
        <div
          className="relative my-8 w-full max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] ring-1 ring-neutral-200/70 animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* warm radial backdrop, matching care-services hero */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,56,92,0.07) 0%, rgba(255,255,255,0) 60%)',
            }}
          />

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-500 backdrop-blur transition hover:border-neutral-900 hover:text-neutral-900"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>

          <span id="service-selector-title" className="sr-only">
            Choose a service
          </span>

          <div className="relative">
            <SelectorBody
              step={step}
              setStep={setStep}
              onPickHelper={handlePickHelper}
              onPickCareGiver={handlePickCareGiver}
              onPickCity={handlePickCity}
            />
          </div>
        </div>
      </div>
    )
  }

  /* -------------------- Render: inline section mode -------------------- */
  return (
    <section
      id="service-selector"
      className="relative overflow-hidden bg-white font-careUi"
      aria-labelledby="service-selector-section-title"
    >
      {/* warm radial backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,56,92,0.05) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
            Find help in 30 seconds
          </p>
          <h2
            id="service-selector-section-title"
            className="mx-auto mt-4 max-w-3xl font-careSerif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
          >
            Choose what you need.
            <br />
            <em className="font-careSerif font-normal italic text-[#FF385C]">
              We&apos;ll take you there.
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Two simple paths — everyday domestic help for your home, or
            compassionate caregivers for someone you love.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
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
