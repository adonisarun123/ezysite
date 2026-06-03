import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getPillar } from '@/lib/careServices/newServices'
import PhysiotherapyAtHomeView from '@/components/care-services/pillars/PhysiotherapyAtHomeView'

const SLUG = 'physiotherapy-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const pillar = getPillar(SLUG)

export const metadata: Metadata = {
  title: 'Physiotherapy at Home in Bangalore | Certified Physiotherapists | EzyHelpers',
  description: pillar.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Physiotherapy at Home in Bangalore | EzyHelpers',
    description: pillar.description,
    siteName: 'EzyHelpers',
  },
}

export default function PhysiotherapyAtHomePage() {
  return <PhysiotherapyAtHomeView />
}
