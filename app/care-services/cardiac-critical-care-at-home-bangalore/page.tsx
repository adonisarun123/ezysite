import type { Metadata } from 'next'
import CardiacCriticalCareView from '@/components/care-services/subpages/CardiacCriticalCareView'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const TITLE = 'Cardiac Critical Care at Home in Bangalore | EzyHelpers'
const DESCRIPTION =
  'Cardiac critical care at home in Bangalore — continuous cardiac monitoring, medication management and post-cardiac-event support at home.'
const CANONICAL = 'https://www.ezyhelpers.com/care-services/cardiac-critical-care-at-home-bangalore'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'cardiac critical care at home Bangalore, cardiac monitoring at home, post heart attack care, heart failure home care Bangalore',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages('/care-services/cardiac-critical-care-at-home-bangalore'),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'article',
    siteName: 'EzyHelpers',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <CardiacCriticalCareView />
}
