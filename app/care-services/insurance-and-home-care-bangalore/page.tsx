import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import InsuranceHomeCareView from '@/components/care-services/subpages/InsuranceHomeCareView'

const PATH = '/care-services/insurance-and-home-care-bangalore'

export const metadata: Metadata = {
  title: 'Insurance & Home Care in Bangalore | What’s Covered & How to Claim | EzyHelpers',
  description:
    'How major Indian health insurance covers home nursing and home care — Niva Bupa, Star Health, Aditya Birla, Max Bupa. What qualifies, what doesn’t, and how to claim.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function InsuranceHomeCarePage() {
  return <InsuranceHomeCareView />
}
