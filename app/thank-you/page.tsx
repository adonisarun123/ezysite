import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { getThankYouCopy } from '@/lib/thankYouContent'

export const metadata: Metadata = {
  title: 'Thank You | EzyHelpers',
  description: 'Your submission was received. The EzyHelpers team will follow up as needed.',
  robots: {
    index: false,
    follow: true,
  },
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; ref?: string }>
}) {
  const sp = await searchParams
  const type = typeof sp.type === 'string' ? sp.type : undefined
  const ref = typeof sp.ref === 'string' ? decodeURIComponent(sp.ref) : undefined
  const copy = getThankYouCopy(type, ref)

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Thank you' }]} />

      <main className="min-h-[60vh] bg-gray-50">
        <div className="container-custom py-16 sm:py-24">
          <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white px-8 py-12 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
              <CheckCircleIcon className="h-10 w-10 text-primary-600" aria-hidden />
            </div>
            <h1 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              {copy.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{copy.body}</p>
            {copy.refLabel ? (
              <div className="mt-8 rounded-xl border border-primary-100 bg-primary-50/80 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                  Reference
                </p>
                <p className="mt-1 font-mono text-lg font-semibold text-gray-900 break-all">
                  {copy.refLabel}
                </p>
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                Back to home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary-300 hover:text-primary-700"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
