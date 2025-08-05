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
  PaintBrushIcon,
  StarIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Painting Services in Bareilly | Interior & Exterior Painters | EzyHelpers',
  description: 'Expert painting services in Bareilly for interior and exterior walls. Professional painters with quality paints and perfect finish guarantee.',
  keywords: 'painting services Bareilly, interior painting Bareilly, exterior painting Bareilly, wall painting, professional painters, house painting',
  openGraph: {
    title: 'Professional Painting Services in Bareilly - Interior & Exterior | EzyHelpers',
    description: 'Get expert painting services in Bareilly for beautiful and long-lasting paint jobs.',
    url: 'https://ezyhelpers.com/cities/bareilly/painting',
    type: 'website',
  }
}

export default function BareillyPainting() {
  const paintingServices = [
    {
      title: "Interior Painting",
      description: "Professional interior painting services for walls, ceilings, and rooms with premium quality paints",
      icon: HomeIcon,
      features: ["Wall painting", "Ceiling painting", "Room painting", "Premium paints"]
    },
    {
      title: "Exterior Painting", 
      description: "Weather-resistant exterior painting services for building facades and outdoor surfaces",
      icon: PaintBrushIcon,
      features: ["Building facade", "Weather resistant", "Outdoor surfaces", "Long-lasting finish"]
    },
    {
      title: "Texture & Design",
      description: "Decorative textures, patterns, and custom designs to enhance the aesthetic appeal of your space",
      icon: SparklesIcon,
      features: ["Decorative textures", "Custom patterns", "Design work", "Aesthetic enhancement"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Skilled Painters",
      description: "Experienced painters with expertise in various painting techniques and finishes",
      icon: StarIcon
    },
    {
      title: "Quality Materials",
      description: "Premium quality paints and materials for long-lasting and beautiful results",
      icon: ShieldCheckIcon
    },
    {
      title: "Timely Completion",
      description: "Efficient project management ensuring timely completion without compromising quality",
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
            { label: 'Painting Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <PaintBrushIcon className="h-5 w-5 text-purple-300 mr-2" />
                <span className="text-sm font-semibold">Professional Painting</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Painting Services
                <span className="block text-purple-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Expert painting services in Bareilly for interior and exterior walls with professional painters and premium quality materials.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Painting Service
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Painters
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
                Professional Painting Services We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive painting solutions for interior and exterior surfaces with quality finish
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {paintingServices.map((service, index) => (
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
                Why Choose EzyHelpers Painting Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional painting with skilled craftsmen and premium materials
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
        <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Get Professional Painting Services in Bareilly
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Transform your space with expert painting services and premium quality finish
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Painting Service
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