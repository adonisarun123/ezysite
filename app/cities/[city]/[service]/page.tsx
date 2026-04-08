import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NestCTA from '@/components/NestCTA'

interface PageProps {
  params: Promise<{ 
    city: string
    service: string 
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1)
  const serviceName = service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${serviceName} in ${cityName} | Verified Help | EzyHelpers`,
    description: `Get verified ${serviceName.toLowerCase()} services in ${cityName}. Professional, background-checked staff for your home needs. Book trusted help today!`,
    keywords: `${serviceName.toLowerCase()} ${cityName}, ${service} services ${cityName}, verified ${service} ${cityName}, domestic help ${cityName}`,
    openGraph: {
      title: `${serviceName} Services in ${cityName} - EzyHelpers`,
      description: `Professional ${serviceName.toLowerCase()} services in ${cityName}. Verified staff, competitive rates, and reliable service guaranteed.`,
      url: `https://www.ezyhelpers.com/cities/${city}/${service}`,
      type: 'website',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `https://www.ezyhelpers.com/cities/${city}/${service}`
    }
  }
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1)
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