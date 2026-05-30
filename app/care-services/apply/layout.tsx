import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const PATH = '/care-services/apply'
const TITLE = 'Nursing & Caregiver Jobs at EzyHelpers | ANM, GNM, GDA Careers'
const DESCRIPTION =
  'Join EzyHelpers as an ANM, GNM, GDA or trained caregiver. Timely salary, hostel facility, insurance, safe & secure homes and 24/7 support. Apply in 1 minute.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'nursing jobs Bangalore',
    'ANM jobs',
    'GNM jobs',
    'GDA jobs',
    'caregiver jobs India',
    'home nursing jobs',
    'patient care jobs',
    'elderly care jobs',
    'EzyHelpers careers',
    'caregiver hiring',
  ],
  authors: [{ name: 'EzyHelpers' }],
  creator: 'EzyHelpers',
  publisher: 'EzyHelpers',
  category: 'Careers',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  // Reachable with ?source=... ad-tracking variants — noindex keeps the
  // parameterised duplicates out of the index while remaining a live ad target.
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    title: 'Build a stable nursing & caregiving career with EzyHelpers',
    description: DESCRIPTION,
    url: `https://www.ezyhelpers.com${PATH}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'EzyHelpers caregiver careers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nursing & caregiver jobs at EzyHelpers',
    description: DESCRIPTION,
    images: ['/twitter-card.jpg'],
  },
  other: { 'theme-color': '#0074C8' },
}

export default function CandidateApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
