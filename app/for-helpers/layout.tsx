import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

export const metadata: Metadata = {
  title: 'For Helpers | Join EzyHelpers as a Domestic Professional',
  description:
    'Work with EzyHelpers as a verified domestic helper. Fair opportunities, support, and placements across Indian cities.',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/for-helpers',
    languages: selfReferencingLanguages('/for-helpers'),
  },
}

export default function ForHelpersLayout({ children }: { children: ReactNode }) {
  return children
}
