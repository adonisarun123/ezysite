import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import NriFamilyView from '@/components/care-services/subpages/NriFamilyView'

const PATH = '/care-services/nri-family-home-care-bangalore'

export const metadata: Metadata = {
  title: 'Home Care for NRI Families in Bangalore | Daily Updates, Time-Zone Aware | EzyHelpers',
  description:
    'Home care for ageing parents in Bangalore while you’re abroad — daily WhatsApp updates, weekly video calls, time-zone-aware emergencies, payment from anywhere.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function NriFamilyPage() {
  return <NriFamilyView />
}
