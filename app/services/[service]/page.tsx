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
      {/* Rest of the component JSX */}
      <NestCTA />
      <Footer />
    </main>
  )
} 