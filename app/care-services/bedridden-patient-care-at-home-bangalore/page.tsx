import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import BedriddenPatientCareView from '@/components/care-services/subpages/BedriddenPatientCareView'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('bedridden-patient-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`
const TITLE = `${SERVICE.title} | EzyHelpers`
const DESCRIPTION = SERVICE.description

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Duplicate-content consolidation (June 2026): this page targets the same
  // keyword as the established /care-services/bedridden-patient-care-bangalore page,
  // so we canonicalize to it. The page stays live for internal navigation.
  alternates: {
    canonical: `https://www.ezyhelpers.com/care-services/bedridden-patient-care-bangalore`,
    languages: selfReferencingLanguages('/care-services/bedridden-patient-care-bangalore'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'website',
  },
}

export default function Page() {
  return <BedriddenPatientCareView />
}
