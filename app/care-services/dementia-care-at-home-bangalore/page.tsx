import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import DementiaCareAtHomeView from '@/components/care-services/subpages/DementiaCareAtHomeView'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('dementia-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`
const TITLE = `${SERVICE.title} | EzyHelpers`
const DESCRIPTION = SERVICE.description

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Duplicate-content consolidation (June 2026): this page targets the same
  // keyword as the established /care-services/dementia-alzheimers-care-bangalore page,
  // so we canonicalize to it. The page stays live for internal navigation.
  alternates: {
    canonical: `https://www.ezyhelpers.com/care-services/dementia-alzheimers-care-bangalore`,
    languages: selfReferencingLanguages('/care-services/dementia-alzheimers-care-bangalore'),
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
  return <DementiaCareAtHomeView />
}
