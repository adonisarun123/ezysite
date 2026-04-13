'use client'

/**
 * ClientOnlyWidgets — wraps all ssr:false dynamic imports in a single client component.
 * Required for Next.js 15 which disallows ssr:false inside server components (layout.tsx).
 */

import dynamic from 'next/dynamic'

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

const LanguageSelectorPopup = dynamic(() => import('./LanguageSelectorPopup'), {
  ssr: false,
  loading: () => null
})

export default function ClientOnlyWidgets() {
  return (
    <>
      <LLMOptimization />
      <UrgencyCTA />
      <WhatsAppFloat />
      <LanguageSelectorPopup />
    </>
  )
}
