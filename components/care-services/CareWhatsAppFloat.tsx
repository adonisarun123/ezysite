'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { trackWhatsAppClick } from '@/lib/analytics'
import { whatsappSendUrl } from '@/lib/whatsappUrl'

/**
 * CareWhatsAppFloat — care-specific click-to-chat widget.
 *
 * Mounted globally via ClientOnlyWidgets, but renders ONLY on /care-services/*
 * paths. Generates a per-page pre-filled WhatsApp message so the family doesn't
 * have to introduce themselves twice. Apple-clean visual language — pill on
 * desktop, compact green roundel on mobile, slight delay before appearing so
 * it doesn't compete with hero LCP.
 *
 * The generic <WhatsAppFloat /> in components/WhatsAppFloat.tsx is suppressed
 * on /care-services/* (see that file) so the two never overlap.
 */

const CARE_WHATSAPP_NUMBER = '+919972571005'

/** Per-page pre-filled message. Falls back to a generic care message. */
function messageForPath(path: string | null): string {
  if (!path || !path.startsWith('/care-services')) {
    return 'Hi! I’m exploring home care services in Bangalore — could you help me find the right option?'
  }
  const tail = path.replace(/^\/care-services\/?/, '').split('?')[0].replace(/\/$/, '')

  // Hub
  if (tail === '' || tail === 'enquiry') {
    return 'Hi! I’m exploring home care services in Bangalore. Could a care advisor help me decide?'
  }

  // Condition pages
  if (tail === 'stroke-care-at-home-bangalore')
    return 'Hi, I’d like to ask about stroke care at home in Bangalore.'
  if (tail === 'dementia-alzheimers-care-bangalore')
    return 'Hi, I’d like to ask about dementia / Alzheimer’s care at home in Bangalore.'
  if (tail === 'bedridden-patient-care-bangalore')
    return 'Hi, I’d like to ask about bedridden patient care at home in Bangalore.'
  if (tail === 'post-surgery-recovery-bangalore')
    return 'Hi, we have a post-surgery recovery and need home care advice. Could you help?'
  if (tail === 'cancer-care-at-home-bangalore')
    return 'Hi, we’re looking at cancer / oncology home care in Bangalore. Could you help?'
  if (tail === 'parkinsons-care-at-home-bangalore')
    return 'Hi, I’d like to ask about Parkinson’s home care in Bangalore.'

  // Cost / decision pages
  if (tail === 'home-nursing-cost-bangalore')
    return 'Hi, I’d like an exact quote for home nursing in Bangalore.'
  if (tail === 'cost-calculator')
    return 'Hi, I just used the cost calculator and would like a precise quote.'
  if (tail === 'home-nurse-vs-caretaker')
    return 'Hi, I’m unsure whether we need a nurse or a caretaker. Could a care advisor help?'
  if (tail === 'live-in-vs-day-shift-caregiver')
    return 'Hi, I’d like advice on live-in vs day-shift care for our situation.'
  if (tail === 'home-care-vs-old-age-home')
    return 'Hi, I’d like to talk through home care vs old-age-home options for my parent.'
  if (tail === 'care-quiz')
    return 'Hi, I just took the care assessment quiz and would like to discuss the recommendation.'

  // Locality pages
  if (tail === 'elderly-care-whitefield-bangalore')
    return 'Hi, I’m looking for elderly care in Whitefield, Bangalore.'
  if (tail === 'elderly-care-hsr-layout-bangalore')
    return 'Hi, I’m looking for elderly care in HSR Layout, Bangalore.'
  if (tail === 'elderly-care-koramangala-bangalore')
    return 'Hi, I’m looking for elderly care in Koramangala, Bangalore.'

  // Strategic pages
  if (tail === 'insurance-and-home-care-bangalore')
    return 'Hi, I’d like to ask about insurance coverage for home care in Bangalore.'
  if (tail === 'hospital-discharge-care-bangalore')
    return 'Hi, we have a hospital discharge coming up and need home care set up. Could you help?'
  if (tail === 'nri-family-home-care-bangalore')
    return 'Hi, I’m an NRI and would like to arrange home care for my parent in Bangalore.'

  // Trust pages
  if (tail === 'caregiver-verification-process')
    return 'Hi, I read about your caregiver verification process — could we discuss our requirement?'
  if (tail === 'caregiver-training')
    return 'Hi, I’d like to talk to a care advisor about a placement.'
  if (tail === 'care-leadership')
    return 'Hi, could a senior care advisor call us to assess our situation?'

  // Cluster pages — cluster name lifted from the slug
  const clusterMap: Record<string, string> = {
    'home-care-services-bangalore': 'home care',
    'home-healthcare-services-bangalore': 'home healthcare',
    'home-nursing-services-bangalore': 'home nursing',
    'elderly-care-services-bangalore': 'elderly care',
    'caretaker-services-bangalore': 'a caretaker',
    'patient-care-services-bangalore': 'patient care',
    'home-attendant-services-bangalore': 'a home attendant',
    'trained-attendant-services-bangalore': 'a trained attendant',
  }
  if (clusterMap[tail]) return `Hi, I’d like to ask about ${clusterMap[tail]} services in Bangalore.`

  return 'Hi! I’m exploring home care services in Bangalore. Could a care advisor help me?'
}

export default function CareWhatsAppFloat() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Slight delay so the widget doesn't compete with hero LCP.
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  const onCarePath = useMemo(
    () => Boolean(pathname && pathname.startsWith('/care-services')),
    [pathname],
  )

  const message = useMemo(() => messageForPath(pathname), [pathname])

  if (!onCarePath || !mounted || dismissed) return null

  const handleClick = () => {
    trackWhatsAppClick(CARE_WHATSAPP_NUMBER, message, 'care_floating_button')
    const url = whatsappSendUrl(CARE_WHATSAPP_NUMBER, message)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="fixed bottom-5 right-4 z-40 max-w-[calc(100vw-1.5rem)] sm:bottom-6 sm:right-6"
      role="region"
      aria-label="Care advisor on WhatsApp"
    >
      <div className="relative flex flex-col items-end gap-2">
        {/* Expanded message preview (desktop click / mobile tap) */}
        {expanded ? (
          <div className="relative w-[280px] overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:w-[320px]">
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
              aria-label="Dismiss"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>
            <div className="bg-gradient-to-br from-[#1F8A4C] to-[#168042] px-4 py-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                Care advisor
              </p>
              <p className="mt-1 text-sm font-semibold">EzyHelpers · Bangalore</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-[13px] leading-relaxed text-neutral-700">
                Replies typically within minutes between 9am–9pm IST. Tell us the situation — we’ll
                recommend the right care.
              </p>
              <p className="mt-3 rounded-xl bg-neutral-50 px-3 py-2 text-[13px] leading-snug text-neutral-700">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  Pre-filled message
                </span>
                {message}
              </p>
              <button
                type="button"
                onClick={handleClick}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F8A4C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#168042] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Open WhatsApp
              </button>
              <p className="mt-2 text-center text-[11px] text-neutral-400">
                You can edit the message before sending
              </p>
            </div>
          </div>
        ) : null}

        {/* Pill / circle trigger */}
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Hide care advisor chat' : 'Open care advisor chat on WhatsApp'}
          className="group inline-flex items-center gap-2 rounded-full border border-[#1F8A4C]/15 bg-white py-2.5 pl-2.5 pr-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.16)] active:scale-[0.98]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F8A4C] text-white">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
          <span className="hidden flex-col text-left sm:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Care advisor
            </span>
            <span className="text-sm font-semibold leading-tight text-neutral-900">
              Chat on WhatsApp
            </span>
          </span>
          <span className="flex flex-col text-left sm:hidden">
            <span className="text-sm font-semibold leading-tight text-neutral-900">
              Care advisor
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.84.748 5.505 2.058 7.813L0 32l8.313-2.058C10.495 31.252 13.16 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.25 22.563c-.313.875-1.563 1.625-2.563 1.813-.688.125-1.563.188-2.563-.188-1.063-.375-2.438-.875-4.188-1.813-3.5-1.875-5.75-5.5-5.938-5.75-.188-.25-1.5-2-1.5-3.813s.938-2.688 1.313-3.063c.375-.375.813-.438 1.063-.438s.5 0 .75.013c.25.013.563-.125.875.688.313.813 1.063 2.625 1.188 2.813.125.188.188.438.063.688-.125.25-.188.375-.375.563-.188.188-.375.438-.563.625-.188.188-.375.375-.188.75.188.375.875 1.438 1.875 2.313 1.313 1.125 2.375 1.5 2.75 1.625.375.125.625.125.813-.063.188-.188.813-.938 1.063-1.25.25-.313.5-.25.813-.125.313.125 2 .938 2.313 1.125.313.188.563.25.625.438.063.188.063 1.063-.25 1.938z" />
    </svg>
  )
}
