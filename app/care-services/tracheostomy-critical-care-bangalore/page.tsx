import type { Metadata } from 'next'
import TracheostomyCriticalCareView from '@/components/care-services/subpages/TracheostomyCriticalCareView'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const TITLE = 'Tracheostomy Critical Care at Home in Bangalore | EzyHelpers'
const DESCRIPTION =
  'Tracheostomy critical care at home in Bangalore — advanced airway management, suctioning and respiratory monitoring by critical-care nurses.'
const CANONICAL = 'https://www.ezyhelpers.com/care-services/tracheostomy-critical-care-bangalore'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'tracheostomy care at home Bangalore, airway management, tracheostomy suctioning, stoma care, critical care nurse Bangalore',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages('/care-services/tracheostomy-critical-care-bangalore'),
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
  return <TracheostomyCriticalCareView />
}
