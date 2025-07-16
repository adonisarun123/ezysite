import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
// ... other imports ...

interface PageProps {
  params: { 
    service: string 
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const serviceName = params.service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${serviceName} Services | Professional & Verified | EzyHelpers`,
    description: `Get reliable ${serviceName.toLowerCase()} services from verified professionals. Background-checked staff, flexible timing options, and competitive rates.`,
    keywords: `${serviceName.toLowerCase()}, ${params.service} services, verified ${params.service}, professional ${params.service}, domestic help`,
    openGraph: {
      title: `Professional ${serviceName} Services - EzyHelpers`,
      description: `Book trusted ${serviceName.toLowerCase()} services. Verified staff, quality service, and complete peace of mind guaranteed.`,
      url: `https://ezyhelpers.com/services/${params.service}`,
      type: 'website',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `https://ezyhelpers.com/services/${params.service}`
    }
  }
}

export default function ServicePage({ params }: PageProps) {
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