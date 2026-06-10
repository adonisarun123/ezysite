import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import ParkinsonsCareElderView from '@/components/care-services/subpages/ParkinsonsCareElderView'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('parkinsons-care-at-home-bangalore-elder')!
const PATH = `/care-services/${SERVICE.slug}`
const TITLE = `${SERVICE.title} | EzyHelpers`
const DESCRIPTION = SERVICE.description

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Duplicate-content consolidation (June 2026): this page targets the same
  // keyword as the established /care-services/parkinsons-care-at-home-bangalore page,
  // so we canonicalize to it. The page stays live for internal navigation.
  alternates: {
    canonical: `https://www.ezyhelpers.com/care-services/parkinsons-care-at-home-bangalore`,
    languages: selfReferencingLanguages('/care-services/parkinsons-care-at-home-bangalore'),
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
  return <ParkinsonsCareElderView />
}
