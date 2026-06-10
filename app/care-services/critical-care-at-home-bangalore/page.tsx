import type { Metadata } from 'next'
import CriticalCareAtHomeView from '@/components/care-services/pillars/CriticalCareAtHomeView'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const TITLE = 'Critical Care (ICU) at Home in Bangalore | EzyHelpers'
const DESCRIPTION =
  'ICU and critical care at home in Bangalore. Ventilator support, tracheostomy care, multi-para monitoring and critical-care nurses — a complete, doctor-supervised ICU setup at home.'
const CANONICAL = 'https://www.ezyhelpers.com/care-services/critical-care-at-home-bangalore'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'critical care at home Bangalore, ICU at home Bangalore, ventilator care at home, ICU setup at home, home ICU, critical care nurses Bangalore',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages('/care-services/critical-care-at-home-bangalore'),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'website',
    siteName: 'EzyHelpers',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <CriticalCareAtHomeView />
}
