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
  HomeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Sofa Cleaning Services in Bareilly | Deep Cleaning | EzyHelpers',
  description: 'Expert sofa cleaning services in Bareilly for deep cleaning, stain removal, and sanitization of all types of sofas and upholstery.',
  keywords: 'sofa cleaning Bareilly, upholstery cleaning Bareilly, furniture cleaning, deep cleaning, stain removal, sanitization services',
  openGraph: {
    title: 'Professional Sofa Cleaning Services in Bareilly - Deep Cleaning | EzyHelpers',
    description: 'Get expert sofa cleaning services in Bareilly for spotless and fresh furniture.',
    url: 'https://ezyhelpers.com/cities/bareilly/sofa-cleaning',
    type: 'website',
  }
}

export default function BareillySofaCleaning() {
  const cleaningServices = [
    {
      title: "Deep Sofa Cleaning",
      description: "Comprehensive deep cleaning for all types of sofas removing dirt, stains, and allergens",
      icon: SparklesIcon,
      features: ["Deep cleaning", "Stain removal", "Allergen removal", "Fabric protection"]
    },
    {
      title: "Upholstery Cleaning",
      description: "Professional cleaning services for all types of upholstered furniture and chairs",
      icon: HomeIcon,
      features: ["Chair cleaning", "Cushion cleaning", "Fabric restoration", "Odor removal"]
    },
    {
      title: "Sanitization Services",
      description: "Complete sanitization and disinfection of furniture for a healthy living environment",
      icon: ShieldCheckIcon,
      features: ["Disinfection", "Sanitization", "Health safety", "Germ protection"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Expert Cleaning",
      description: "Professional cleaners with expertise in handling all types of sofa materials",
      icon: StarIcon
    },
    {
      title: "Safe Products",
      description: "Eco-friendly and safe cleaning products that protect your furniture and family",
      icon: ShieldCheckIcon
    },
    {
      title: "Quick Service",
      description: "Efficient cleaning service with minimal disruption to your daily routine",
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
            { label: 'Sofa Cleaning Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <SparklesIcon className="h-5 w-5 text-indigo-300 mr-2" />
                <span className="text-sm font-semibold">Professional Furniture Cleaning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Sofa Cleaning Services
                <span className="block text-indigo-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Professional sofa cleaning services in Bareilly for deep cleaning, stain removal, and sanitization of all types of furniture and upholstery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-indigo-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Sofa Cleaning
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Cleaning
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
                Comprehensive furniture cleaning solutions for fresh and spotless upholstery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cleaningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-indigo-600" />
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
                Why Choose EzyHelpers Sofa Cleaning?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional furniture cleaning with quality service and safe methods
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-indigo-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Book Sofa Cleaning Services in Bareilly
              </h2>
              <p className="text-xl mb-8 text-indigo-100">
                Get professional furniture cleaning for fresh and spotless upholstery
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-indigo-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Sofa Cleaning
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