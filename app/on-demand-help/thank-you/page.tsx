import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Payment confirmed | Hourly home help — Bangalore | EzyHelpers',
  description:
    'Your on-demand hourly booking payment was received. Our team will align your visit with the slot you selected.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/on-demand-help/thank-you',
  },
}

/**
 * Configure this URL as the payment success / redirect destination for each
 * Razorpay Payment Button used on `/on-demand-help`:
 * `https://www.ezyhelpers.com/on-demand-help/thank-you`
 *
 * Alternatively use `/thank-you?type=on-demand-help` if you prefer one shared thank-you route.
 */

export default async function OnDemandHelpThankYouPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const paymentIdRaw = sp.payment_id ?? sp['razorpay_payment_id']
  const paymentId =
    typeof paymentIdRaw === 'string' ? decodeURIComponent(paymentIdRaw).trim() : ''

  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-gradient-to-b from-emerald-50 to-gray-50">
        <div className="container-custom py-16 sm:py-24">
          <div className="mx-auto max-w-lg rounded-2xl border border-emerald-100 bg-white px-8 py-12 text-center shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircleIcon className="h-10 w-10 text-emerald-600" aria-hidden />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Bangalore pilot · hourly visit
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 sm:text-3xl">
              Payment received
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Thank you — your Razorpay payment went through. We already have your tasks, locality, duration, and slot
              from the booking wizard; our team will assign a helper for your scheduled window and contact you if anything
              needs confirmation.
            </p>

            {paymentId ? (
              <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50/80 px-4 py-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">Payment reference</p>
                <p className="mt-1 font-mono text-sm font-semibold text-gray-900 break-all">{paymentId}</p>
                <p className="mt-2 text-xs text-gray-600">
                  Save this if Razorpay passed it in the redirect URL — it helps support match your payment quickly.
                </p>
              </div>
            ) : null}

            <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-4 text-left text-sm text-gray-700">
              <p className="font-semibold text-gray-900">What happens next</p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-left">
                <li>We match your visit to an available helper in your pilot locality.</li>
                <li>You may receive a short call or WhatsApp if we need building access or timing detail.</li>
                <li>Visits follow the slot you chose (9:00 AM–7:30 PM window, booked at least 60 minutes ahead).</li>
              </ul>
            </div>

            <a
              href="tel:+919972571005"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden />
              Call +91 9972571005
            </a>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/on-demand-help"
                className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:border-emerald-400"
              >
                Back to hourly booking
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-300 hover:text-gray-900"
              >
                Home
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
