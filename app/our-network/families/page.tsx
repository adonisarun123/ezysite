import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import NetworkMapLoader from '@/components/NetworkMapLoader'
import { HomeIcon, MapPinIcon, GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline'

export const revalidate = 3600

const TITLE = 'Families We Serve Across India | EzyHelpers'
const DESCRIPTION =
  'See where EzyHelpers has placed verified domestic help: an interactive satellite map of customer placements across Bangalore, Bareilly, Lucknow and more.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ezyhelpers.com/our-network/families',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.ezyhelpers.com/og?title=Families%20We%20Serve%20Across%20India',
        width: 1200,
        height: 630,
        alt: 'Families We Serve Across India',
      },
    ],
  },
  alternates: { canonical: 'https://www.ezyhelpers.com/our-network/families' },
}

const stats = [
  { icon: HomeIcon, value: '115+', label: 'Placement pincodes' },
  { icon: MapPinIcon, value: '95+', label: 'Bangalore localities' },
  { icon: GlobeAltIcon, value: '5', label: 'States served' },
  { icon: StarIcon, value: '4.5/5', label: 'On Google (528 reviews)' },
]

export default function FamiliesNetworkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Our Network', href: '/our-network/helpers' },
          { label: 'Families' },
        ]}
      />

      <section className="container-custom pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-4">
          Families We Serve Across India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Each pin marks a pincode where families have hired verified EzyHelpers
          professionals — from Whitefield and HSR Layout in Bangalore to homes in
          Bareilly and Lucknow. Locations are shown at pincode level only; no
          personal details are ever displayed.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-secondary-50/60 border border-secondary-100 rounded-xl p-4 text-center">
              <s.icon className="h-6 w-6 text-secondary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom pb-10">
        <NetworkMapLoader dataUrl="/data/network-customers.geojson" color="#D85A30" noun="family placement" />
        <p className="text-xs text-gray-500 mt-3">
          Locations shown at pincode level only. Drag to rotate · scroll to zoom · click
          clusters to expand · click a pin for locality details.
        </p>
      </section>

      <section className="container-custom pb-16">
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-display mb-1">
              Want to join them?
            </h2>
            <p className="text-gray-600 text-sm">
              Verified helpers are available in 1,200+ pincodes across 29 states — see the
              helper network, or book yours in 24–72 hours.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/our-network/helpers" className="border-2 border-primary-600 text-primary-600 font-semibold rounded-xl px-6 py-3 hover:bg-primary-600 hover:text-white transition-colors">
              View helper network
            </Link>
            <Link href="/hire-helper" className="bg-primary-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-primary-700 transition-colors">
              Hire a helper
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
