'use client'

/**
 * ClientOnlyWidgets — wraps all ssr:false dynamic imports in a single client component.
 * Required for Next.js 15 which disallows ssr:false inside server components (layout.tsx).
 */

import dynamic from 'next/dynamic'

/** Sitewide page_view + scroll_depth + service_view tracking (mounted globally). */
const GlobalPageTracking = dynamic(() => import('./GlobalPageTracking'), {
  ssr: false,
  loading: () => null
})

const LLMOptimization = dynamic(() => import('./LLMOptimization'), {
  ssr: false,
  loading: () => null
})

const UrgencyCTA = dynamic(() => import('./UrgencyCTA'), {
  ssr: false,
  loading: () => null
})

const WhatsAppFloat = dynamic(() => import('./WhatsAppFloat'), {
  ssr: false,
  loading: () => null
})

/** Care-specific WhatsApp widget — renders only on /care-services/* paths. */
const CareWhatsAppFloat = dynamic(() => import('./care-services/CareWhatsAppFloat'), {
  ssr: false,
  loading: () => null
})

/** Care-specific quick call-back form — renders only on /care-services/* paths. */
const CareCallbackFloat = dynamic(() => import('./care-services/CareCallbackFloat'), {
  ssr: false,
  loading: () => null
})

const LanguageSelectorPopup = dynamic(() => import('./LanguageSelectorPopup'), {
  ssr: false,
  loading: () => null
})

const MobileStickyCTA = dynamic(() => import('./MobileStickyCTA'), {
  ssr: false,
  loading: () => null
})

/** AI chat assistant — "Asha" floating widget for FAQ + lead capture. */
const EzyHelpersAssistant = dynamic(() => import('./EzyHelpersAssistant'), {
  ssr: false,
  loading: () => null
})

/** First-visit service selector modal — auto-shown on homepage; remembers choice for 30 days. */
const ServiceSelectorModal = dynamic(() => import('./ServiceSelector'), {
  ssr: false,
  loading: () => null
})

export default function ClientOnlyWidgets() {
  return (
    <>
      <GlobalPageTracking />
      <LLMOptimization />
      <UrgencyCTA />
      <WhatsAppFloat />
      <CareWhatsAppFloat />
      <CareCallbackFloat />
      <LanguageSelectorPopup />
      <ServiceSelectorModal mode="modal" />
      <MobileStickyCTA />
      <EzyHelpersAssistant />
    </>
  )
}
