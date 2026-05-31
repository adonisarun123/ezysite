import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getPillar } from '@/lib/careServices/newServices'
import PalliativeCareAtHomeView from '@/components/care-services/pillars/PalliativeCareAtHomeView'

const SLUG = 'palliative-care-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const PILLAR = getPillar('palliative-care-at-home-bangalore')

export const metadata: Metadata = {
  title: 'Palliative Care at Home in Bangalore | Compassionate Comfort Care | EzyHelpers',
  description: PILLAR.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(CANONICAL),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    siteName: 'EzyHelpers',
    title: 'Palliative Care at Home in Bangalore | Compassionate Comfort Care',
    description: PILLAR.description,
  },
}

export default function Page() {
  return <PalliativeCareAtHomeView />
}
