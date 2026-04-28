import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import CareServicesEnquiryForm from '@/components/care-services/CareServicesEnquiryForm'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { CARE_PILLAR_HREF } from '@/lib/careServices/registry'
import { PhoneIcon, CheckCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Request Home Care in Bangalore | EzyHelpers',
  description:
    'Submit a care enquiry for Bengaluru: home nursing, elderly care, attendants, and more. Our team responds quickly.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/care-services/enquiry',
    languages: selfReferencingLanguages('/care-services/enquiry'),
  },
}

export default function CareServicesEnquiryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 pt-24 pb-16 text-white lg:pb-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-25 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur">
            Bangalore care · Enquiry form
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Tell us what kind of <span className="text-emerald-200">home care</span> you need
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50">
            Nurses, caretakers, and attendants — matched to your patient&apos;s situation. Same team as our verified
            domestic placements.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur">
              <CheckCircleIcon className="mx-auto mb-2 h-8 w-8 text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold text-white">Verified network</p>
              <p className="mt-1 text-xs text-emerald-100">ID & background checks</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur">
              <ChatBubbleLeftRightIcon className="mx-auto mb-2 h-8 w-8 text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold text-white">Human matching</p>
              <p className="mt-1 text-xs text-emerald-100">Not random assignment</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur">
              <PhoneIcon className="mx-auto mb-2 h-8 w-8 text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold text-white">Quick response</p>
              <p className="mt-1 text-xs text-emerald-100">Typically within an hour</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        variant="minimal"
        separator="chevron"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Care Services', href: CARE_PILLAR_HREF },
          { label: 'Enquiry' },
        ]}
      />

      <main className="section-padding">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="-mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10 lg:-mt-16">
                <Suspense
                  fallback={
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-12 text-center text-gray-500">
                      Loading form…
                    </div>
                  }
                >
                  <CareServicesEnquiryForm />
                </Suspense>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                  <h2 className="font-display text-lg font-bold text-gray-900">Need help choosing?</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Read the overview of services first, then come back — or call us and we&apos;ll guide you in a few
                    minutes.
                  </p>
                  <Link
                    href={CARE_PILLAR_HREF}
                    className="mt-4 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    Home care services overview →
                  </Link>
                </div>
                <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-lg">
                  <h3 className="font-display text-lg font-bold">Call the care desk</h3>
                  <p className="mt-2 text-sm text-gray-300">Mon–Sun · Team on standby for urgent placement</p>
                  <a
                    href="tel:+918031411776"
                    className="mt-4 flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/15"
                  >
                    <PhoneIcon className="h-8 w-8 shrink-0 text-emerald-300" aria-hidden />
                    <div>
                      <span className="block text-xs uppercase tracking-wide text-gray-400">Bangalore</span>
                      <span className="text-lg font-bold">080-31411776</span>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
