import type { Metadata } from 'next'
import VentilatorCareView from '@/components/care-services/subpages/VentilatorCareView'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const TITLE = 'Ventilator Care at Home in Bangalore | EzyHelpers'
const DESCRIPTION =
  'Ventilator care at home in Bangalore — invasive and non-invasive ventilation, settings management and 24/7 monitoring by critical-care nurses.'
const CANONICAL = 'https://www.ezyhelpers.com/care-services/ventilator-care-at-home-bangalore'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'ventilator care at home Bangalore, home ventilator support, non-invasive ventilation, BiPAP CPAP, critical care nurse Bangalore',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages('/care-services/ventilator-care-at-home-bangalore'),
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
  return <VentilatorCareView />
}
