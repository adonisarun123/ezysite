import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CostCalculatorView from '@/components/care-services/subpages/CostCalculatorView'

const PATH = '/care-services/cost-calculator'

export const metadata: Metadata = {
  title: 'Home Care Cost Calculator (Bangalore) | Estimate Your Monthly Spend | EzyHelpers',
  description:
    'Estimate the cost of home care in Bangalore — pick care type, hours, complexity, and live-in toggle to see an honest monthly range in seconds.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function CostCalculatorPage() {
  return <CostCalculatorView />
}
