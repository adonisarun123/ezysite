import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  StarIcon,
  HomeIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Plumber Services in Bareilly | 24/7 Plumbing Repairs | EzyHelpers',
  description: 'Expert plumber services in Bareilly for all plumbing needs. 24/7 emergency plumbing repairs, installation, and maintenance services.',
  keywords: 'plumber Bareilly, plumbing services Bareilly, emergency plumber, pipe repair, bathroom plumbing, kitchen plumbing, water leakage',
  openGraph: {
    title: 'Professional Plumber Services in Bareilly - 24/7 Emergency Repairs | EzyHelpers',
    description: 'Get reliable plumber services in Bareilly for all your plumbing needs and emergencies.',
    url: 'https://ezyhelpers.com/cities/bareilly/plumber',
    type: 'website',
  }
}

export default function BareillyPlumber() {
  const plumbingServices = [
    {
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs including pipe bursts and water leakages",
      icon: ExclamationTriangleIcon,
      features: ["24/7 availability", "Pipe burst repair", "Water leakage", "Emergency response"]
    },
    {
      title: "Installation Services",
      description: "Professional installation of bathroom fittings, kitchen fixtures, and plumbing systems",
      icon: WrenchScrewdriverIcon,
      features: ["Bathroom installation", "Kitchen plumbing", "Fixture installation", "System setup"]
    },
    {
      title: "Maintenance & Repair",
      description: "Regular maintenance and repair services to keep your plumbing systems running smoothly",
      icon: Cog6ToothIcon,
      features: ["Regular maintenance", "Preventive care", "System optimization", "Performance check"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Licensed Plumbers",
      description: "Qualified and experienced plumbers with proper licensing and expertise",
      icon: ShieldCheckIcon
    },
    {
      title: "Quality Work",
      description: "High-quality workmanship with reliable solutions and long-lasting repairs",
      icon: StarIcon
    },
    {
      title: "Quick Response",
      description: "Fast response time for emergency calls and efficient service delivery",
      icon: ClockIcon
    }
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-100 py-4">
          <div className="container-custom">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-blue-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Plumber Services</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <WrenchScrewdriverIcon className="h-5 w-5 text-blue-300 mr-2" />
                <span className="text-sm font-semibold">24/7 Plumbing Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Plumber Services
                <span className="block text-blue-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Expert plumber services in Bareilly for all plumbing needs including emergency repairs, installations, and maintenance with 24/7 availability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book a Plumber
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Plumber
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
                Professional Plumbing Services We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive plumbing solutions for residential and commercial needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plumbingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
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
                Why Choose EzyHelpers Plumber Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional plumbing with reliable service and quality workmanship
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Get Plumber Services in Bareilly Today
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Professional plumbing solutions for all your needs with 24/7 emergency support
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book a Plumber
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