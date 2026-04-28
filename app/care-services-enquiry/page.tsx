import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import CareServicesEnquiryForm from '@/components/care-services/CareServicesEnquiryForm'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

export const metadata: Metadata = {
  title: 'Request Home Care in Bangalore | EzyHelpers',
  description:
    'Submit a care enquiry for Bengaluru: home nursing, elderly care, attendants, and more. Our team responds quickly.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/care-services-enquiry',
    languages: selfReferencingLanguages('/care-services-enquiry'),
  },
}

export default function CareServicesEnquiryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <Breadcrumb
          variant="minimal"
          separator="chevron"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Care Services', href: '/home-care-services-bangalore' },
            { label: 'Enquiry' },
          ]}
        />
        <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bangalore care enquiry
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Share a few details so we can match you with the right nurse, caretaker, or attendant.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Prefer to browse first?{' '}
            <Link href="/home-care-services-bangalore" className="font-medium text-primary-600 hover:underline">
              Home care services overview
            </Link>
          </p>
          <div className="mt-10">
            <Suspense
              fallback={
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center text-gray-500">
                  Loading form…
                </div>
              }
            >
              <CareServicesEnquiryForm />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
