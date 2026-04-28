import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OnDemandHelpWizard from '@/components/on-demand-help/OnDemandHelpWizard'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import {
  BoltIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hourly Home Help on Demand — Bangalore Pilot | EzyHelpers',
  description:
    'Book screened household help by the hour in Bengaluru (HSR, Sarjapur Road, BTM, Haralur, Bellandur). Choose tasks, schedule 9 AM–7:30 PM slots with 60-minute advance booking, pay securely.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/on-demand-help',
    languages: selfReferencingLanguages('/on-demand-help'),
  },
}

export default function OnDemandHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-32 max-md:pb-40 md:pb-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur">
                Bengaluru pilot · Limited localities
              </p>
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Hourly home help, booked in advance
              </h1>
              <p className="mx-auto mt-6 text-lg leading-relaxed text-emerald-50 sm:text-xl">
                Pick chores, choose a slot inside our{' '}
                <strong className="font-semibold text-white">9:00 AM–7:30 PM</strong> service window, and confirm with
                secure payment—starting with{' '}
                <strong className="font-semibold text-white">HSR, Sarjapur Road, BTM Layout, Haralur &amp; Bellandur</strong>
                .
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#book-on-demand-help"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-emerald-900 shadow-lg transition hover:bg-emerald-50"
                >
                  Start booking
                  <ChevronDownIcon className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="tel:+919972571005"
                  className="inline-flex rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Call +91 9972571005
                </a>
              </div>
              <ul className="mx-auto mt-14 grid max-w-2xl gap-6 text-left text-sm text-emerald-50 sm:grid-cols-3 sm:text-center">
                <li className="rounded-xl bg-white/5 px-4 py-4 backdrop-blur">
                  <BoltIcon className="mx-auto mb-2 h-8 w-8 text-emerald-200" aria-hidden />
                  <strong className="block text-white">Mapped to your list</strong>
                  Select multiple chores for one continuous visit instead of juggling unknowns later.
                </li>
                <li className="rounded-xl bg-white/5 px-4 py-4 backdrop-blur">
                  <ClockIcon className="mx-auto mb-2 h-8 w-8 text-emerald-200" aria-hidden />
                  <strong className="block text-white">Planned visits only</strong>
                  Slots open when they are at least 60 minutes away—no shock same-minute requests on this flow.
                </li>
                <li className="rounded-xl bg-white/5 px-4 py-4 backdrop-blur">
                  <ShieldCheckIcon className="mx-auto mb-2 h-8 w-8 text-emerald-200" aria-hidden />
                  <strong className="block text-white">Straightforward checkout</strong>
                  Pay for 2h, 4h, 6h or 8h via Razorpay after we capture your timing and address.
                </li>
              </ul>
              <div className="mx-auto mt-12 max-w-xl rounded-xl border border-white/20 bg-black/20 px-5 py-4 text-sm text-emerald-100 backdrop-blur">
                <MapPinIcon className="mx-auto mb-2 h-6 w-6 text-emerald-200" aria-hidden />
                <strong className="font-semibold text-white">Coverage note:</strong> This landing experience is optimised
                for households in our pilot pockets. Need full placement support instead?{' '}
                <Link href="/hire-helper" className="font-semibold text-white underline underline-offset-4 hover:text-emerald-100">
                  Hire long-term help
                </Link>{' '}
                or{' '}
                <Link href="/services/on-demand-helpers" className="font-semibold text-white underline underline-offset-4 hover:text-emerald-100">
                  standard on-demand requests
                </Link>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-[1] -mt-10 px-4 pb-24 sm:px-6 lg:px-8 max-md:pb-28">
          <OnDemandHelpWizard />
        </section>
      </main>
      <Footer />
    </div>
  )
}
