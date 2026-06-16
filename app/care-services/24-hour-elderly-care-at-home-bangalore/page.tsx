import type { Metadata } from 'next'
import TwentyFourHourElderCareView from '@/components/care-services/subpages/TwentyFourHourElderCareView'

const PATH = '/care-services/24-hour-elderly-care-at-home-bangalore'
const SITE = 'https://www.ezyhelpers.com'

export const metadata: Metadata = {
  title: '24-Hour Elderly Care at Home in Bangalore | Live-in & Night Care | EzyHelpers',
  description:
    'Round-the-clock elderly care at home in Bangalore: bathing, meals, medication, mobility and overnight safety. Verified live-in caregivers, replacement guarantee.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: '24-Hour Elderly Care at Home in Bangalore | EzyHelpers',
    description:
      'Continuous home care for parents who are not safe alone: live-in or two-shift, verified caregivers, day and night.',
    url: `${SITE}${PATH}`,
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [
      {
        url: `${SITE}/og?title=24-Hour%20Elderly%20Care%20at%20Home%20Bangalore`,
        width: 1200,
        height: 630,
        alt: '24-hour elderly care at home in Bangalore',
      },
    ],
  },
}

const faqs = [
  {
    q: 'What does 24-hour elderly care at home involve?',
    a: 'A trained caregiver provides continuous support at home, either live-in or across two shifts covering day and night. They handle bathing, meals, medication reminders, mobility, overnight safety and companionship. EzyHelpers arranges verified caregivers in Bangalore, usually within 24 to 72 hours.',
  },
  {
    q: 'Is live-in care or two shifts better for round-the-clock elderly care?',
    a: 'For a parent who is mostly settled but unsafe alone, a single live-in caregiver is usually the most economical safe choice. For a parent who needs active care through the night, such as turning every couple of hours, two shifts or live-in with night cover keeps the caregiver rested and the parent safe.',
  },
  {
    q: 'How quickly can EzyHelpers arrange a 24-hour caregiver in Bangalore?',
    a: 'Placement typically takes 24 to 72 hours. Caregivers are background verified, and a replacement is arranged quickly if the match is not working. Call 080-31411776 to start.',
  },
  {
    q: 'Can a 24-hour caregiver also handle medical needs?',
    a: 'Attendants handle personal care, mobility and companionship. For medical tasks such as injections, wound care or vitals monitoring, EzyHelpers can add trained home nursing to the arrangement so your parent gets both levels of care.',
  },
]

export default function Page() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <TwentyFourHourElderCareView />
    </>
  )
}
