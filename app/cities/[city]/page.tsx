import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
// ... other imports ...

interface PageProps {
  params: { 
    city: string 
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)

  return {
    title: `Domestic Help Services in ${cityName} | EzyHelpers`,
    description: `Find reliable domestic help services in ${cityName}. Verified maids, cooks, nannies, drivers & more. Book trusted home services with EzyHelpers today!`,
    keywords: `domestic help ${cityName}, maid services ${cityName}, home services ${cityName}, cook services ${cityName}, nanny services ${cityName}`,
    openGraph: {
      title: `Home Services in ${cityName} - EzyHelpers`,
      description: `Get verified domestic help in ${cityName}. Professional maids, cooks, nannies & more. Background-checked staff for your peace of mind.`,
      url: `https://ezyhelpers.com/cities/${params.city}`,
      type: 'website',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `https://ezyhelpers.com/cities/${params.city}`
    }
  }
}

export default function CityPage({ params }: PageProps) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  
  return (
    <div>
      <Navbar />
      {/* Rest of the component JSX */}
    </div>
  )
} 