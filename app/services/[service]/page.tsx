import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NestCTA from '@/components/NestCTA'

interface PageProps {
  params: Promise<{
    service: string 
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const serviceName = service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${serviceName} Services | Professional & Verified | EzyHelpers`,
    description: `Get reliable ${serviceName.toLowerCase()} services from verified professionals. Background-checked staff, flexible timing options, and competitive rates.`,
    keywords: `${serviceName.toLowerCase()}, ${service} services, verified ${service}, professional ${service}, domestic help`,
    openGraph: {
      title: `Professional ${serviceName} Services - EzyHelpers`,
      description: `Book trusted ${serviceName.toLowerCase()} services. Verified staff, quality service, and complete peace of mind guaranteed.`,
      url: `https://www.ezyhelpers.com/services/${service}`,
      type: 'website',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `https://www.ezyhelpers.com/services/${service}`
    }
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const serviceName = service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with H1 */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Professional {serviceName} Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get reliable and professional {serviceName.toLowerCase()} services from verified experts. 
              Background-checked staff with flexible timing options and competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/hire-helper" 
                className="bg-white text-primary-800 hover:bg-primary-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Book {serviceName} Service
              </Link>
              <Link 
                href="tel:+918031411776" 
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Choose Our {serviceName} Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
                <p className="text-gray-600">Background-checked and experienced service providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
                <p className="text-gray-600">Choose convenient time slots that fit your schedule</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
                <p className="text-gray-600">Fair and transparent pricing with no hidden charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NestCTA />
      <Footer />
    </main>
  )
} 