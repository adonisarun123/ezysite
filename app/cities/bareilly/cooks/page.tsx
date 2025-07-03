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
  CurrencyRupeeIcon,
  StarIcon,
  HomeIcon,
  AcademicCapIcon,
  FireIcon,
  BeakerIcon,
  CakeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Cook Services in Bareilly | Skilled Cooks & Chefs | EzyHelpers',
  description: 'Hire trained cooks in Bareilly for home cooking, special events, and daily meal preparation. Background verified and experienced in various cuisines.',
  keywords: 'cook services Bareilly, chef services Bareilly, home cook Bareilly, meal preparation Bareilly, verified cook, professional chef',
  openGraph: {
    title: 'Professional Cook Services in Bareilly - Skilled Cooks & Chefs | EzyHelpers',
    description: 'Get professional cooks in Bareilly for delicious home-cooked meals and catering services.',
    url: 'https://ezyhelpers.com/cities/bareilly/cooks',
    type: 'website',
  }
}

export default function BareillyCoooksPage() {
  const cookingServices = [
    {
      title: "Daily Home Cooking",
      description: "Freshly prepared daily meals including breakfast, lunch, and dinner according to your taste preferences",
      icon: HomeIcon,
      features: ["Breakfast & lunch", "Traditional Indian", "Regional specialties", "Dietary preferences"]
    },
    {
      title: "Special Occasion Cooking",
      description: "Expert cooking for festivals, parties, and special events with traditional recipes and modern cuisine",
      icon: CakeIcon,
      features: ["Festival cooking", "Party catering", "Event meals", "Large quantity cooking"]
    },
    {
      title: "Specialized Cuisines",
      description: "Professional cooking for various cuisines including North Indian, South Indian, and regional specialties",
      icon: FireIcon,
      features: ["North Indian cuisine", "South Indian dishes", "Regional specialties", "International dishes"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Experienced Cooks",
      description: "Professional cooks with years of experience in home cooking and catering services",
      icon: StarIcon
    },
    {
      title: "Health & Hygiene",
      description: "Strict adherence to hygiene standards and health protocols for safe food preparation",
      icon: ShieldCheckIcon
    },
    {
      title: "Flexible Timing",
      description: "Available for full-time, part-time, or on-demand cooking services as per your needs",
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
                  <Link href="/" className="text-gray-500 hover:text-orange-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-orange-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Cook Services</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-yellow-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <FireIcon className="h-5 w-5 text-orange-300 mr-2" />
                <span className="text-sm font-semibold">Delicious Home Cooking</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Cook Services
                <span className="block text-orange-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Get skilled and experienced cooks in Bareilly for delicious home-cooked meals, special events, and daily meal preparation services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Hire a Cook Today
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Expert Cooks
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
                Professional Cooking Services We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cooking services for all your culinary needs with skilled and experienced cooks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cookingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-orange-600" />
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
                Why Choose EzyHelpers Cook Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional cooking services with quality assurance and local expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-orange-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Hire Professional Cooks in Bareilly Today
              </h2>
              <p className="text-xl mb-8 text-orange-100">
                Get delicious, home-cooked meals with our professional cooking services
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-orange-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Hire a Cook Today
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