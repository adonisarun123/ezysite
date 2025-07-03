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
  BoltIcon,
  CurrencyRupeeIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  CogIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Electrician in Bareilly | Same-Day Electrical Repair | EzyHelpers',
  description: 'Certified electricians in Bareilly for wiring, electrical repairs, fan installation, and power solutions. Safe, reliable, and quick home electrical services.',
  keywords: 'electrician Bareilly, electrical repair Bareilly, wiring services Bareilly, fan installation Bareilly, electrical maintenance',
  openGraph: {
    title: 'Professional Electrician Services in Bareilly - Same-Day Service | EzyHelpers',
    description: 'Certified electricians delivering safe, reliable, and quick home electrical solutions in Bareilly.',
    url: 'https://ezyhelpers.com/cities/bareilly/electrician',
    type: 'website',
  }
}

export default function BareillyElectricianPage() {
  const electricalServices = [
    {
      title: "House Wiring & Installation",
      description: "Complete electrical wiring solutions for new constructions and rewiring of old homes",
      icon: BoltIcon,
      features: ["New house wiring", "Rewiring old homes", "Circuit installation", "Safety compliance"]
    },
    {
      title: "Switch & Socket Repairs",
      description: "Fix loose connections, faulty switches, and electrical outlet problems",
      icon: LightBulbIcon,
      features: ["Switch replacements", "Socket repairs", "Connection fixes", "Electrical upgrades"]
    },
    {
      title: "Fan & Light Installation",
      description: "Professional installation of ceiling fans, lights, and chandeliers",
      icon: CogIcon,
      features: ["Ceiling fan installation", "Light fixture setup", "Chandelier mounting", "Dimmer switches"]
    },
    {
      title: "Circuit Breaker Repairs",
      description: "MCB/ELCB tripping issues and electrical safety solutions",
      icon: ShieldCheckIcon,
      features: ["MCB replacement", "ELCB installation", "Safety switch fixes", "Circuit protection"]
    },
    {
      title: "Emergency Electrical Repairs",
      description: "24/7 power failure support and urgent electrical problem solutions",
      icon: ExclamationTriangleIcon,
      features: ["Power restoration", "Emergency fixes", "Fault detection", "Urgent repairs"]
    },
    {
      title: "Electrical Safety Checks",
      description: "Prevent short circuits and fire risks with comprehensive electrical inspections",
      icon: CheckCircleIcon,
      features: ["Safety inspections", "Risk assessment", "Preventive maintenance", "Compliance checks"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Same-Day Service",
      description: "Fast response within 2 hours for electrical emergencies in Bareilly",
      icon: ClockIcon
    },
    {
      title: "Certified & Licensed",
      description: "All electricians are properly licensed and trained for safe electrical work",
      icon: ShieldCheckIcon
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden charges for electrical services",
      icon: CurrencyRupeeIcon
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock support for electrical emergencies and power failures",
      icon: ExclamationTriangleIcon
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
                  <Link href="/" className="text-gray-500 hover:text-yellow-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-yellow-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Electrician Services</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <BoltIcon className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Safe & Licensed Electrical Work</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Electrician Services
                <span className="block text-yellow-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Certified electricians delivering safe, reliable, and quick home electrical solutions for all your power and wiring needs in Bareilly.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  ✓ Certified & Licensed
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  ✓ Same-Day Service
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  ✓ Safe & Reliable
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-yellow-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Electrician Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Service
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-yellow-200 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-yellow-200 text-sm">Emergency Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Hour</div>
                  <div className="text-yellow-200 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Electrical Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Electrical Repair Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional electrical solutions for homes and offices with certified electricians
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {electricalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-yellow-600" />
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
                Why Choose EzyHelpers' Electricians in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Safe, certified, and reliable electrical services for your home and family
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-yellow-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Home Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/plumber" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plumber Services</h3>
                <p className="text-gray-600 mb-4">Expert plumbing solutions for all water-related issues</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Repair</h3>
                <p className="text-gray-600 mb-4">Professional repair services for all home appliances</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/carpenter" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carpenter Services</h3>
                <p className="text-gray-600 mb-4">Professional furniture and woodwork solutions</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-yellow-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-yellow-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Don't Let Electrical Problems Disturb Your Home!
              </h2>
              <p className="text-xl mb-8 text-yellow-100">
                Book trusted electricians in Bareilly today for safe and reliable electrical solutions
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-yellow-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Electrician Now
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
