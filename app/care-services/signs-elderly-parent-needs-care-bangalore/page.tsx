import type { Metadata } from 'next'
import SignsParentNeedsCareView from '@/components/care-services/subpages/SignsParentNeedsCareView'

const PATH = '/care-services/signs-elderly-parent-needs-care-bangalore'
const SITE = 'https://www.ezyhelpers.com'

export const metadata: Metadata = {
  title: 'Signs Your Elderly Parent Needs a Caregiver | Bangalore | EzyHelpers',
  description:
    'The early warning signs that an ageing parent needs care at home, how to raise it without a fight, and where to start. Verified elderly caregivers in Bangalore.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: 'Signs Your Elderly Parent Needs a Caregiver | Bangalore',
    description:
      'Falls, weight loss, missed medications, memory changes and loneliness: the signs worth acting on before a crisis, and how to start.',
    url: `${SITE}${PATH}`,
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [
      {
        url: `${SITE}/og?title=Signs%20Your%20Parent%20Needs%20a%20Caregiver`,
        width: 1200,
        height: 630,
        alt: 'Signs your elderly parent needs a caregiver',
      },
    ],
  },
}

const faqs = [
  {
    q: 'What are the early signs an elderly parent needs a caregiver?',
    a: 'Watch for falls or new unsteadiness, unexplained weight loss, missed or muddled medications, memory changes that disrupt daily life, slipping personal hygiene, unopened post or unpaid bills, and a parent becoming withdrawn or lonely. One sign alone may be nothing; several together usually mean it is time to bring in help.',
  },
  {
    q: 'How do I raise the topic of a caregiver without upsetting my parent?',
    a: 'Frame care as support that keeps them independent longer, not a takeover. Start small with a few hours of help or respite care, let them keep choices over caregiver and tasks, and bring in a doctor or trusted relative rather than making it feel like the children decided for them.',
  },
  {
    q: 'Is my parent\'s forgetfulness normal ageing or dementia?',
    a: 'Occasional forgetting is normal. Missed medications, repeated questions in one conversation, confusion about the day, or getting lost on familiar routes are signs worth a doctor visit. A lot of dementia in India goes undiagnosed because families read early signs as ordinary ageing.',
  },
  {
    q: 'How do I start elderly care in Bangalore without committing to full-time help?',
    a: 'Begin with a few hours of elderly care or a companion for the lonely parts of the day, and add more only as needs grow. EzyHelpers offers a trial period so you can test the fit before committing. Call 080-31411776 to talk through your parent\'s situation.',
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
      <SignsParentNeedsCareView />
    </>
  )
}
