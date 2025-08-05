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
  HeartIcon,
  StarIcon,
  HomeIcon,
  HandRaisedIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Elderly Care Services in Bareilly | Senior Care & Support | EzyHelpers',
  description: 'Professional elderly care services in Bareilly for senior citizens. Compassionate caregivers for daily assistance, medical support, and companionship.',
  keywords: 'elderly care Bareilly, senior care Bareilly, old age care Bareilly, caregiver Bareilly, nursing care, companion care',
  openGraph: {
    title: 'Professional Elderly Care Services in Bareilly - Senior Care & Support | EzyHelpers',
    description: 'Get compassionate elderly care services in Bareilly for your loved ones.',
    url: 'https://ezyhelpers.com/cities/bareilly/elderly-care',
    type: 'website',
  }
}

export default function BareillyElderlyCare() {
  const elderlyServices = [
    {
      title: "Daily Living Assistance",
      description: "Help with daily activities including bathing, dressing, meal preparation, and medication reminders",
      icon: HandRaisedIcon,
      features: ["Personal hygiene", "Meal preparation", "Medication reminders", "Mobility assistance"]
    },
    {
      title: "Medical Care Support",
      description: "Professional medical support including health monitoring, doctor visits, and medical coordination",
      icon: HeartIcon,
      features: ["Health monitoring", "Doctor appointments", "Medical coordination", "Emergency response"]
    },
    {
      title: "Companionship Care",
      description: "Emotional support and companionship to reduce loneliness and improve quality of life",
      icon: UserGroupIcon,
      features: ["Emotional support", "Social interaction", "Activity engagement", "Mental wellness"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Trained Caregivers",
      description: "Professional caregivers trained in elderly care with experience in handling senior citizens",
      icon: StarIcon
    },
    {
      title: "Compassionate Care",
      description: "Gentle and understanding approach with respect for dignity and individual preferences",
      icon: HeartIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock care services available for live-in or hourly assistance as needed",
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
            { label: 'Elderly Care Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <HeartIcon className="h-5 w-5 text-purple-300 mr-2" />
                <span className="text-sm font-semibold">Compassionate Senior Care</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Elderly Care Services
                <span className="block text-purple-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Professional and compassionate elderly care services in Bareilly for senior citizens with trained caregivers providing daily assistance and medical support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Get Elderly Care Services
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Care Support
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
                Comprehensive Elderly Care Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional care services designed to support senior citizens with dignity and compassion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {elderlyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-purple-600" />
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
                Why Choose EzyHelpers Elderly Care?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional elderly care with compassion and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-purple-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Get Elderly Care Services in Bareilly
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Professional and compassionate care for your loved ones
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Get Care Services
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