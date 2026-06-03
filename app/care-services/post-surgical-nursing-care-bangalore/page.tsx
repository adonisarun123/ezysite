import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import PostSurgicalNursingView from '@/components/care-services/subpages/PostSurgicalNursingView'

const SLUG = 'post-surgical-nursing-care-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const service = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: 'Post-Surgical Nursing Care at Home in Bangalore | EzyHelpers',
  description: service.description,
  keywords: [
    'post-surgical nursing Bangalore',
    'post-operative care at home Bangalore',
    'post-surgery nurse Bangalore',
    'recovery nursing at home Bangalore',
    'after surgery care Bangalore',
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
  return <PostSurgicalNursingView />
}
