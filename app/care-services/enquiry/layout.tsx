import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const PATH = '/care-services/enquiry'
const TITLE = 'Request Home Care in Bangalore | EzyHelpers'
const DESCRIPTION =
  'Tell us about your care need in Bengaluru — nurses, caretakers, attendants, and elderly care, matched with empathy. Our care desk replies within the hour on business days.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'home care enquiry Bangalore',
    'home nursing Bangalore',
    'elderly care Bangalore',
    'caretaker Bangalore',
    'patient care Bangalore',
    'home attendant Bangalore',
    'trained attendant Bangalore',
    'home healthcare Bangalore',
    'EzyHelpers care services',
    'verified caretaker Bangalore',
    'NRI parent care Bangalore',
  ],
  authors: [{ name: 'EzyHelpers' }],
  creator: 'EzyHelpers',
  publisher: 'EzyHelpers',
  category: 'Care services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    title: 'Tell us what kind of care your loved one needs — EzyHelpers',
    description: DESCRIPTION,
    url: `https://www.ezyhelpers.com${PATH}`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EzyHelpers — care services enquiry, Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request home care in Bangalore — EzyHelpers',
    description: DESCRIPTION,
    images: ['/twitter-card.jpg'],
  },
  other: {
    'theme-color': '#FF385C',
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    ICBM: '12.9716, 77.5946',
  },
}

export default function CareServicesEnquiryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
