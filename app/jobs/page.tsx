import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import JobsPageClient from './JobsPageClient'

export const metadata: Metadata = {
  title: 'Helper Jobs in Bangalore | Domestic Helper Jobs | EzyHelpers',
  description:
    'Apply for verified helper jobs in Bangalore including housekeeping, cooking, baby care, elderly care, live-in helper and part-time maid jobs with EzyHelpers.',
  openGraph: {
    title: 'Helper Jobs in Bangalore | Domestic Helper Jobs | EzyHelpers',
    description:
      'Apply for verified helper jobs in Bangalore including housekeeping, cooking, baby care, elderly care, live-in helper and part-time maid jobs with EzyHelpers.',
    url: 'https://www.ezyhelpers.com/jobs',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/jobs',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How can I apply for helper jobs at EzyHelpers?',
    answer:
      'Browse the open jobs on this page, click "Apply Now" on any job card, and our team will reach out to you on WhatsApp. You can share your name, experience, and preferred location to get matched with a suitable family.',
  },
  {
    question: 'Is there any fee for applying?',
    answer:
      'No. EzyHelpers does not charge candidates any fee for applying or for getting placed. Registration, interviews, and matching with families are completely free for helpers.',
  },
  {
    question: 'What documents are required?',
    answer:
      'You will need a copy of your Aadhaar card and a local address proof. If you have prior work experience, sharing reference details from a previous employer is helpful but not mandatory.',
  },
  {
    question: 'What types of helper jobs are available?',
    answer:
      'We offer full-time, part-time, and live-in helper jobs across Bangalore. Job categories include housekeeping, cooking (North Indian, South Indian, vegetarian), baby care, elderly care, patient care, and personal driver roles.',
  },
  {
    question: 'How soon will the EzyHelpers team contact me?',
    answer:
      'After you click Apply Now on WhatsApp, our placement team usually responds within a few hours on the same working day. We will then arrange a call with the family before you take up the job.',
  },
]

export default function JobsPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Helper Jobs in Bangalore',
    description:
      'Verified domestic helper jobs in Bangalore including housekeeping, cooking, baby care, elderly care, live-in helper and part-time maid roles.',
    url: 'https://www.ezyhelpers.com/jobs',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <>
      <Navbar />

      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Helper Jobs' }]}
      />

      <main className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-white blur-3xl" />
          </div>

          <div className="container-custom relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-white/20">
                <CheckBadgeIcon className="h-4 w-4" />
                Verified Jobs · Free to Apply
              </span>

              <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Helper Jobs in Bangalore
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
                Apply for verified domestic helper jobs near you with EzyHelpers.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
                Find verified domestic helper jobs in Bangalore with EzyHelpers. Apply for housekeeping,
                cooking, baby care, elderly care, live-in helper and part-time maid jobs. Click Apply Now
                to connect with our team on WhatsApp.
              </p>

              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium text-white/85 sm:text-sm">
                {[
                  'Housekeeping',
                  'Cooking',
                  'Baby Care',
                  'Elderly Care',
                  'Live-in Jobs',
                ].map((tag, idx, arr) => (
                  <li key={tag} className="flex items-center">
                    <span>{tag}</span>
                    {idx < arr.length - 1 && (
                      <span className="ml-3 h-1 w-1 rounded-full bg-white/50" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                <TrustBadge
                  icon={<ShieldCheckIcon className="h-5 w-5" />}
                  title="Verified families"
                  subtitle="Background-checked employers"
                />
                <TrustBadge
                  icon={<CurrencyRupeeIcon className="h-5 w-5" />}
                  title="Fixed salary"
                  subtitle="Clear pay & weekly off"
                />
                <TrustBadge
                  icon={<CheckBadgeIcon className="h-5 w-5" />}
                  title="100% free for helpers"
                  subtitle="No registration fee"
                />
              </div>
            </div>
          </div>
        </section>

        <JobsPageClient />

        <section
          aria-labelledby="jobs-faq-heading"
          className="bg-white py-14 sm:py-20"
        >
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="jobs-faq-heading"
                className="font-display text-2xl font-bold text-gray-900 sm:text-3xl"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Quick answers about applying for helper jobs with EzyHelpers.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}

function TrustBadge({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
        {icon}
      </span>
      <div className="text-left">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/80">{subtitle}</p>
      </div>
    </div>
  )
}
