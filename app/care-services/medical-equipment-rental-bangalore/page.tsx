import type { Metadata } from 'next'
import { getPillar } from '@/lib/careServices/newServices'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import MedicalEquipmentView from '@/components/care-services/pillars/MedicalEquipmentView'

const SLUG = 'medical-equipment-rental-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`

const pillar = getPillar('medical-equipment-rental-bangalore')

export const metadata: Metadata = {
  title: `${pillar.title} | EzyHelpers`,
  description: pillar.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: `${pillar.title} | EzyHelpers`,
    description: pillar.description,
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
}

export default function Page() {
  return <MedicalEquipmentView />
}
