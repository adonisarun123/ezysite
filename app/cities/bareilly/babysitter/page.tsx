import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  HeartIcon,
  CurrencyRupeeIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  SparklesIcon,
  StarIcon,
  HomeIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Babysitter & Nanny Services in Bareilly | Safe Child Care | EzyHelpers',
  description: 'Trusted, background-verified babysitters and nannies in Bareilly for newborns, toddlers, and school kids. Available full-time, part-time, or live-in.',
  keywords: 'babysitter Bareilly, nanny services Bareilly, child care Bareilly, baby care Bareilly, verified babysitter, trained nanny',
  openGraph: {
    title: 'Professional Babysitter & Nanny Services in Bareilly - Safe Child Care | EzyHelpers',
    description: 'Get trusted, trained babysitters in Bareilly for safe and loving care of your children.',
    url: 'https://ezyhelpers.com/cities/bareilly/babysitter',
    type: 'website',
  }
}

export default function BareillyBabysitterPage() {
  const babysitterServices = [
    {
      title: "Daily Child Care",
      description: "Professional care for your child's daily needs including feeding, playing, and routine management",
      icon: HeartIcon,
      features: ["Feeding & meal prep", "Activity planning", "Routine management", "Safe play supervision"]
    },
    {
      title: "Educational Activities",
      description: "Age-appropriate learning activities and educational games to support your child's development",
      icon: AcademicCapIcon,
      features: ["Learning games", "Story reading", "Creative activities", "Homework help"]
    },
    {
      title: "Newborn Care",
      description: "Specialized care for newborns and infants with trained and experienced caregivers",
      icon: SparklesIcon,
      features: ["Infant feeding", "Sleep schedule", "Diaper changing", "Health monitoring"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Background Verified",
      description: "All babysitters undergo thorough police verification and background checks",
      icon: ShieldCheckIcon
    },
    {
      title: "First-Aid Trained",
      description: "Professional training in child safety, first-aid, and emergency response",
      icon: HandRaisedIcon
    },
    {
      title: "Quick Placement",
      description: "Fast placement within 24-72 hours for urgent childcare needs",
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
                  <Link href="/" className="text-gray-500 hover:text-pink-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-pink-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Babysitter Services</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <HeartIcon className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-sm font-semibold">Safe & Loving Child Care</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Babysitter & Nanny Services
                <span className="block text-pink-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Get trusted, trained babysitters in Bareilly for newborns, toddlers, and school-going kids, available full-time, part-time, or as live-in nannies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-pink-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book a Babysitter Today
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Trusted Care
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
                Services Offered by Our Babysitters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive childcare services tailored to your family's needs with professional caregivers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {babysitterServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-pink-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-pink-600" />
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
                Why Choose EzyHelpers Babysitter Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trusted childcare with local understanding and professional training
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-pink-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-pink-600 to-rose-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Book Your Babysitter in Bareilly Today
              </h2>
              <p className="text-xl mb-8 text-pink-100">
                Get safe, simple, and fast childcare solutions with EzyHelpers
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book a Babysitter Today
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