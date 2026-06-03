import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getPillar } from '@/lib/careServices/newServices'
import HomeNursingCareView from '@/components/care-services/pillars/HomeNursingCareView'

const SLUG = 'home-nursing-care-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const pillar = getPillar(SLUG)

export const metadata: Metadata = {
  title: 'Home Nursing Care in Bangalore | GNM/B.Sc Verified Nurses — EzyHelpers',
  description: pillar.description,
  keywords: [
    'home nursing care Bangalore',
    'home nurse Bangalore',
    'wound care at home Bangalore',
    'IV therapy at home Bangalore',
    'catheter care at home Bangalore',
    'post-surgical nursing Bangalore',
    'injections at home Bangalore',
    'tracheostomy care at home Bangalore',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(CANONICAL),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Home Nursing Care in Bangalore | GNM/B.Sc Verified Nurses',
    description: pillar.description,
    siteName: 'EzyHelpers',
  },
}

export default function Page() {
  return <HomeNursingCareView />
}
