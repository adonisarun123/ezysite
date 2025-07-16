import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
// ... other imports ...

interface PageProps {
  params: { 
    city: string
    service: string 
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  const serviceName = params.service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${serviceName} in ${cityName} | Verified Help | EzyHelpers`,
    description: `Get verified ${serviceName.toLowerCase()} services in ${cityName}. Professional, background-checked staff for your home needs. Book trusted help today!`,
    keywords: `${serviceName.toLowerCase()} ${cityName}, ${params.service} services ${cityName}, verified ${params.service} ${cityName}, domestic help ${cityName}`,
    openGraph: {
      title: `${serviceName} Services in ${cityName} - EzyHelpers`,
      description: `Professional ${serviceName.toLowerCase()} services in ${cityName}. Verified staff, competitive rates, and reliable service guaranteed.`,
      url: `https://ezyhelpers.com/cities/${params.city}/${params.service}`,
      type: 'website',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `https://ezyhelpers.com/cities/${params.city}/${params.service}`
    }
  }
}

export default function CityServicePage({ params }: PageProps) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  const serviceName = params.service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    
  return (
    <div>
      <Navbar />
      {/* Rest of the component JSX */}
    </div>
  )
} 