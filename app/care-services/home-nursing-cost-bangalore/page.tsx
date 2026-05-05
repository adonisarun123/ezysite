import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import HomeNursingCostView from '@/components/care-services/subpages/HomeNursingCostView'

const PATH = '/care-services/home-nursing-cost-bangalore'

export const metadata: Metadata = {
  title: 'Home Nursing Cost in Bangalore (2026) | Pricing for Visits, Shifts & Live-In | EzyHelpers',
  description:
    'How much does home nursing actually cost in Bangalore? Transparent ranges for visits, 12-hour shifts, 24-hour cover, and live-in nursing — what changes the price, and what doesn’t.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Home Nursing Cost in Bangalore | EzyHelpers',
    description:
      'Transparent home nursing pricing for Bangalore — by visit, shift, and live-in arrangement.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'article',
  },
}

export default function HomeNursingCostPage() {
  return <HomeNursingCostView />
}
