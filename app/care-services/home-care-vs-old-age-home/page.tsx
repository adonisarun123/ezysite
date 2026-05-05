import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import HomeCareVsOldAgeHomeView from '@/components/care-services/subpages/HomeCareVsOldAgeHomeView'

const PATH = '/care-services/home-care-vs-old-age-home'

export const metadata: Metadata = {
  title: 'Home Care vs Old Age Home — Honest Comparison (Bangalore) | EzyHelpers',
  description:
    'A balanced comparison of home care and old age home options in Bangalore — emotional, financial, and practical considerations. We are honest about when each is right.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function HomeCareVsOldAgeHomePage() {
  return <HomeCareVsOldAgeHomeView />
}
