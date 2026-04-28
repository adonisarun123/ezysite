import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import CareServicesEnquiryForm from '@/components/care-services/CareServicesEnquiryForm'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { CARE_PILLAR_HREF } from '@/lib/careServices/registry'
import {
  PhoneIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

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
    <div className="min-h-screen bg-[#fbfbfd] text-neutral-900">
      <Navbar />

      <header className="relative flex min-h-[min(72svh,640px)] flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-28 text-center sm:px-6 sm:pb-16 sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(48,184,201,0.14),transparent_60%),radial-gradient(ellipse_60%_50%_at_90%_30%,rgba(255,107,139,0.08),transparent_55%),radial-gradient(ellipse_70%_60%_at_10%_70%,rgba(0,116,200,0.1),transparent_60%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_45%,black,transparent_78%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-2 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-md sm:text-[13px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Bangalore · Care enquiry
          </p>

          <h1 className="font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-neutral-950">
            Tell us what kind of{' '}
            <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-rose-500 bg-clip-text text-transparent">
              home care
            </span>{' '}
            you need
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[clamp(1rem,2.4vw,1.125rem)] leading-relaxed text-neutral-600">
            Nurses, caretakers, and attendants — matched to your patient&apos;s situation. Same verification standards
            as our domestic placements.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#care-enquiry-form"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary-600/25 transition hover:bg-primary-700"
            >
              Start the form
              <ArrowDownIcon className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="tel:+918031411776"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/10 bg-white/90 px-7 py-3.5 text-[15px] font-semibold text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              080-31411776
            </a>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3 sm:mt-16 sm:gap-4">
            {[
              {
                Icon: CheckIcon,
                title: 'Verified network',
                sub: 'ID & background checks',
                grad: 'from-sky-500 to-primary-500',
              },
              {
                Icon: ChatBubbleLeftRightIcon,
                title: 'Human matching',
                sub: 'Not random assignment',
                grad: 'from-teal-500 to-emerald-500',
              },
              {
                Icon: PhoneIcon,
                title: 'Quick response',
                sub: 'Typically within an hour',
                grad: 'from-rose-500 to-amber-500',
              },
            ].map(({ Icon, title, sub, grad }) => (
              <div
                key={title}
                className="flex max-w-[280px] flex-1 items-center gap-3 rounded-2xl border border-white/80 bg-white/75 px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md sm:min-w-[240px] sm:px-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow-md`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="text-left">
                  <strong className="block text-sm font-semibold text-neutral-900">{title}</strong>
                  <span className="text-xs text-neutral-500">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <Breadcrumb
        variant="minimal"
        separator="chevron"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Care Services', href: CARE_PILLAR_HREF },
          { label: 'Enquiry' },
        ]}
      />

      <main className="section-padding bg-[#fbfbfd]">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-16">
            <div id="care-enquiry-form" className="scroll-mt-28 lg:col-span-2">
              <div className="-mt-8 rounded-[28px] border border-black/[0.06] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-10 lg:-mt-14">
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
                <div className="rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  <h2 className="font-display text-lg font-bold text-neutral-900">Need help choosing?</h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    Read the overview of services first, then come back — or call us and we&apos;ll guide you in a few
                    minutes.
                  </p>
                  <Link
                    href={CARE_PILLAR_HREF}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Home care services overview <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary-900 via-primary-950 to-trust-900 p-6 text-white shadow-xl shadow-primary-900/30">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_100%_0%,rgba(0,180,255,0.12),transparent_55%)]"
                    aria-hidden
                  />
                  <div className="relative">
                    <h3 className="font-display text-lg font-bold">Call the care desk</h3>
                    <p className="mt-2 text-sm text-primary-100/90">Mon–Sun · Team on standby for urgent placement</p>
                    <a
                      href="tel:+918031411776"
                      className="mt-4 flex items-center gap-3 rounded-xl border border-trust-400/25 bg-white/10 p-4 transition hover:border-trust-300/40 hover:bg-white/[0.14]"
                    >
                      <PhoneIcon className="h-8 w-8 shrink-0 text-trust-200" aria-hidden />
                      <div>
                        <span className="block text-xs uppercase tracking-wide text-trust-200/80">Bangalore</span>
                        <span className="text-lg font-bold">080-31411776</span>
                      </div>
                    </a>
                  </div>
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
