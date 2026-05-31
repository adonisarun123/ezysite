import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import PainSymptomManagementView from '@/components/care-services/subpages/PainSymptomManagementView'

const SLUG = 'pain-symptom-management-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Pain & Symptom Management at Home in Bangalore | EzyHelpers',
  description:
    SERVICE?.description ??
    'Pain and symptom management at home in Bangalore — comfort care for pain, breathlessness, nausea and discomfort during serious illness.',
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
    title: 'Pain & Symptom Management at Home in Bangalore',
    description:
      SERVICE?.description ??
      'Compassionate pain and symptom comfort care at home in Bangalore for serious illness.',
  },
}

export default function Page() {
  return <PainSymptomManagementView />
}
