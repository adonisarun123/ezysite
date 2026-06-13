import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import NetworkMapLoader from '@/components/NetworkMapLoader'
import { MapPinIcon, UserGroupIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const revalidate = 3600

const TITLE = 'Our Helper Network Across India | EzyHelpers'
const DESCRIPTION =
  'Explore the EzyHelpers network on an interactive satellite map: 1,200+ verified helper locations across 29 Indian states — maids, cooks, nannies, drivers and caretakers.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ezyhelpers.com/our-network/helpers',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.ezyhelpers.com/og?title=Our%20Helper%20Network%20Across%20India',
        width: 1200,
        height: 630,
        alt: 'Our Helper Network Across India',
      },
    ],
  },
  alternates: { canonical: 'https://www.ezyhelpers.com/our-network/helpers' },
}

const stats = [
  { icon: UserGroupIcon, value: '1,200+', label: 'Helper pincode locations' },
  { icon: GlobeAltIcon, value: '29', label: 'States & union territories' },
  { icon: MapPinIcon, value: '250+', label: 'Cities and towns' },
  { icon: ShieldCheckIcon, value: '100%', label: 'Background verified' },
]

export default function HelperNetworkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Our Network', href: '/our-network/helpers' },
          { label: 'Helpers' },
        ]}
      />

      <section className="container-custom pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-4">
          Our Helper Network Across India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Every pin is a pincode where verified EzyHelpers professionals — maids, cooks,
          nannies, drivers and caretakers — are available. Spin the globe, zoom in like
          Google&nbsp;Earth, and tap any pin to see the locality.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary-50/60 border border-primary-100 rounded-xl p-4 text-center">
              <s.icon className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom pb-10">
        {/* ?v= is bumped whenever the dataset is regenerated (cache-bust) */}
        <NetworkMapLoader dataUrl="/data/network-helpers.geojson?v=2" color="#0E7C66" noun="helper location" />
        <p className="text-xs text-gray-500 mt-3">
          Locations shown at pincode level only. Drag to rotate · scroll to zoom · click
          clusters to expand · click a pin for locality details.
        </p>
      </section>

      <section className="container-custom pb-16">
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-display mb-1">
              See where the families we serve are
            </h2>
            <p className="text-gray-600 text-sm">
              Explore customer placements across Bangalore and beyond on the companion map.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/our-network/families" className="bg-primary-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-primary-700 transition-colors">
              View family placements
            </Link>
            <Link href="/hire-helper" className="border-2 border-primary-600 text-primary-600 font-semibold rounded-xl px-6 py-3 hover:bg-primary-600 hover:text-white transition-colors">
              Hire a helper
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
