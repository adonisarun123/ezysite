import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Deep Cleaning & Home Cleaning Services in Bareilly | Professional Cleaners | EzyHelpers',
  description: 'Professional deep cleaning and home cleaning services in Bareilly. Expert cleaners for comprehensive house cleaning, sanitization, and maintenance.',
  keywords: 'home cleaning Bareilly, deep cleaning Bareilly, house cleaning Bareilly, professional cleaners, sanitization services, cleaning services',
  openGraph: {
    title: 'Professional Deep Cleaning & Home Cleaning Services in Bareilly | EzyHelpers',
    description: 'Get professional home cleaning services in Bareilly for a spotless and hygienic home.',
    url: 'https://ezyhelpers.com/cities/bareilly/home-cleaning',
    type: 'website',
  }
}

export default function BareillyHomeCleaning() {
  const cleaningServices = [
    {
      title: "Deep Cleaning Services",
      description: "Comprehensive deep cleaning for your entire home including hard-to-reach areas and detailed sanitization",
      icon: SparklesIcon,
      features: ["Complete house cleaning", "Deep sanitization", "Hard-to-reach areas", "Detailed cleaning"]
    },
    {
      title: "Regular Home Cleaning",
      description: "Routine cleaning services to maintain cleanliness and hygiene in your home on a regular basis",
      icon: HomeIcon,
      features: ["Weekly cleaning", "Monthly cleaning", "Customized schedules", "Maintenance cleaning"]
    },
    {
      title: "Specialized Cleaning",
      description: "Specialized cleaning services for kitchens, bathrooms, and other specific areas requiring expert attention",
      icon: WrenchScrewdriverIcon,
      features: ["Kitchen deep clean", "Bathroom sanitization", "Floor polishing", "Window cleaning"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Professional Equipment",
      description: "Modern cleaning equipment and eco-friendly products for effective and safe cleaning",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Trained Cleaners",
      description: "Experienced and trained cleaning professionals who ensure quality service delivery",
      icon: StarIcon
    },
    {
      title: "Flexible Scheduling",
      description: "Convenient scheduling options to fit your lifestyle and cleaning preferences",
      icon: ClockIcon
    }
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Home Cleaning Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <SparklesIcon className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-sm font-semibold">Professional Deep Cleaning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Home Cleaning Services
                <span className="block text-green-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Professional deep cleaning and home cleaning services in Bareilly with expert cleaners ensuring a spotless and hygienic living environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-green-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Cleaning Service
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Deep Clean
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Professional Cleaning Services We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleaning solutions for a spotless and hygienic home environment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cleaningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers Cleaning Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional cleaning with quality assurance and reliable service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Book Home Cleaning Services in Bareilly
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Get professional cleaning services for a spotless and hygienic home
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Cleaning Service
                </Link>
                
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call +91 9972571005
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 