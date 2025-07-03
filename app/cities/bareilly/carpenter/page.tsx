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
  WrenchScrewdriverIcon,
  CogIcon,
  CurrencyRupeeIcon,
  HomeIcon,
  BoltIcon,
  PaintBrushIcon,
  BuildingOffice2Icon,
  RectangleStackIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  SparklesIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Carpenter Services in Bareilly | Custom Furniture & Repair | EzyHelpers',
  description: 'Skilled carpenters in Bareilly for furniture repair, custom woodwork, mandir making, and home carpentry. Same-day service with transparent pricing.',
  keywords: 'carpenter Bareilly, furniture repair Bareilly, custom furniture Bareilly, mandir carpenter Bareilly, wood work services Bareilly',
  openGraph: {
    title: 'Expert Carpenter Services in Bareilly - Custom Furniture & Repairs | EzyHelpers',
    description: 'Professional carpenters offering reliable home repairs, custom woodwork, and exceptional craftsmanship in Bareilly.',
    url: 'https://ezyhelpers.com/cities/bareilly/carpenter',
    type: 'website',
  }
}

export default function BareillyCarpentersPage() {
  const carpentryServices = [
    {
      title: "Custom Furniture Making",
      description: "Bespoke furniture crafted to your specifications with quality wood and traditional techniques",
      icon: BuildingOffice2Icon,
      features: ["Custom wardrobes & cupboards", "Study tables & chairs", "Bed frames & storage", "Kitchen cabinets"]
    },
    {
      title: "Furniture Repair & Restoration",
      description: "Expert repair of wooden furniture including chairs, tables, and antique pieces",
      icon: WrenchScrewdriverIcon,
      features: ["Chair & table repairs", "Drawer fixes", "Hinge replacements", "Antique restoration"]
    },
    {
      title: "Mandir & Religious Furniture",
      description: "Specialized in creating beautiful mandirs and prayer furniture with traditional designs",
      icon: HomeIcon,
      features: ["Custom mandir designs", "Prayer benches", "Religious storage", "Traditional woodwork"]
    },
    {
      title: "Door & Window Services",
      description: "Door frame installation, window repairs, and wooden door manufacturing",
      icon: RectangleStackIcon,
      features: ["Door frame fitting", "Window repairs", "Handle installations", "Lock mechanism fixes"]
    },
    {
      title: "Modular Kitchen Setup",
      description: "Complete kitchen carpentry including cabinets, shelves, and storage solutions",
      icon: CogIcon,
      features: ["Kitchen cabinets", "Shelving systems", "Pantry organization", "Counter support"]
    },
    {
      title: "Storage Solutions",
      description: "Custom storage options for every room including wardrobes and built-in solutions",
      icon: RectangleStackIcon,
      features: ["Walk-in wardrobes", "Under-stair storage", "Built-in shelving", "Closet organization"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Local Wood Market Expertise",
      description: "Deep knowledge of Bareilly's wood markets for cost-effective material sourcing",
      icon: MapPinIcon
    },
    {
      title: "Traditional & Modern Skills",
      description: "Expertise in both traditional Bareilly craftsmanship and modern woodworking techniques",
      icon: AcademicCapIcon
    },
    {
      title: "Same-Day Service Available",
      description: "Quick response for urgent repairs and fast completion of small projects",
      icon: ClockIcon
    },
    {
      title: "Transparent Pricing",
      description: "Fixed pricing with no hidden costs - free on-site estimation for all projects",
      icon: CurrencyRupeeIcon
    },
    {
      title: "Quality Materials",
      description: "Premium wood selection with monsoon-resistant options for Bareilly's climate",
      icon: ShieldCheckIcon
    },
    {
      title: "Dust-Free Work",
      description: "Clean working practices with proper dust control and site cleanup",
      icon: SparklesIcon
    }
  ]

  const carpentryProcess = [
    {
      step: "1",
      title: "Share Your Need",
      description: "Tell us what furniture or woodwork needs fixing or building"
    },
    {
      step: "2",
      title: "Free Estimation Visit",
      description: "Our carpenter visits for measurement and cost estimation"
    },
    {
      step: "3",
      title: "Material Selection",
      description: "Choose from quality wood options within your budget"
    },
    {
      step: "4",
      title: "Expert Craftsmanship",
      description: "Skilled carpentry work with follow-up support"
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road"
  ]

  const carpentryTypes = [
    "Furniture Repair", "Custom Wardrobes", "Mandir Making", "Door Installation", 
    "Kitchen Cabinets", "Study Tables", "Bed Frames", "Storage Solutions",
    "Window Repairs", "Antique Restoration", "Built-in Furniture", "Shelving Systems"
  ]

  const specializedServices = [
    {
      title: "Festival Furniture",
      description: "Special furniture for festivals and occasions",
      icon: SparklesIcon
    },
    {
      title: "Joint Family Solutions",
      description: "Storage solutions for large families",
      icon: HomeIcon
    },
    {
      title: "Student Furniture",
      description: "Study desks and educational furniture",
      icon: AcademicCapIcon
    },
    {
      title: "Monsoon-Proof Wood",
      description: "Weather-resistant wood options",
      icon: ShieldCheckIcon
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
                  <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-green-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Carpenter Services</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Local Expertise & Traditional Skills</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Carpenter Services
                <span className="block text-green-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Skilled carpenters offering reliable home repairs, beautiful custom woodwork, and exceptional craftsmanship to enhance your Bareilly home.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  ✓ Local Wood Market Expertise
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  ✓ Traditional & Modern Work
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  ✓ Transparent Pricing
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-green-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Carpenter Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Same-Day Service
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">Bareilly's Choice</div>
                  <div className="text-green-200 text-sm">for Home Carpentry</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Safe & Certified</div>
                  <div className="text-green-200 text-sm">Professional Carpenters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Fixed Pricing</div>
                  <div className="text-green-200 text-sm">No Surprises</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Carpentry Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Professional Carpentry Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete woodworking solutions from furniture repair to custom creations with traditional Bareilly craftsmanship
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carpentryServices.map((service, index) => (
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
                Why Choose EzyHelpers for Carpentry in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local expertise meets professional service for all your woodworking and furniture needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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

        {/* Specialized Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Specialized Carpentry for Bareilly Homes
              </h2>
              <p className="text-lg text-gray-600">
                Understanding local needs and cultural preferences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-lg p-3 w-fit mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carpentry Types */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Types of Carpentry Work We Do
              </h2>
              <p className="text-lg text-gray-600">
                From simple repairs to complex custom furniture projects
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {carpentryTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300"
                >
                  <WrenchScrewdriverIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                How to Book Our Carpenter Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple process from consultation to completion with transparent pricing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {carpentryProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Service Areas in Bareilly
              </h2>
              <p className="text-lg text-gray-600">
                Professional carpentry services available across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
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
              <Link href="/cities/bareilly/painting" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <PaintBrushIcon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painting Services</h3>
                <p className="text-gray-600 mb-4">Professional house painting and wall finishing services</p>
                <div className="flex items-center text-orange-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/electrician" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrician Services</h3>
                <p className="text-gray-600 mb-4">Electrical installations and repair services for your home</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Repair</h3>
                <p className="text-gray-600 mb-4">Expert repair services for all home appliances</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-green-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Don't Let Furniture Problems Bother You!
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Book a skilled carpenter now for hassle-free home woodwork solutions
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Carpenter Now
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
