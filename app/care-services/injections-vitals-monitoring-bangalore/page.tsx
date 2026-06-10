import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import InjectionsVitalsView from '@/components/care-services/subpages/InjectionsVitalsView'

const SLUG = 'injections-vitals-monitoring-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const service = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: 'Injections & Vitals Monitoring at Home in Bangalore | EzyHelpers',
  description: service.description,
  keywords: [
    'injections at home Bangalore',
    'insulin injection at home Bangalore',
    'vitals monitoring at home Bangalore',
    'blood pressure check at home Bangalore',
    'nurse for injection Bangalore',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(CANONICAL),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: service.title,
    description: service.description,
    siteName: 'EzyHelpers',
  },
}

export default function Page() {
  return <InjectionsVitalsView />
}
