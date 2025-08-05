import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  HomeIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  StarIcon,
  SunIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  UserPlusIcon,
  ArrowRightIcon,
  CurrencyRupeeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  BoltIcon,
  CogIcon,
  ExclamationTriangleIcon,
  FireIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional House Appliance Repair in Bareilly | Same-Day Service | EzyHelpers',
  description: 'Fast, trusted appliance repair technicians in Bareilly delivering same-day solutions for AC, fridge, washing machine & more. Expert repairs at your doorstep.',
  keywords: 'appliance repair Bareilly, AC repair Bareilly, fridge repair Bareilly, washing machine repair Bareilly, home appliance service',
  openGraph: {
    title: 'Professional House Appliance Repair in Bareilly - Same-Day Service',
    description: 'Fast, trusted appliance repair technicians delivering same-day solutions to keep your Bareilly home running smoothly and stress-free.',
    url: 'https://ezyhelpers.com/cities/bareilly/appliance-repair',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bareilly/appliance-repair'
  }
}

export default function BareillyApplianceRepairPage() {
  const applianceServices = [
    {
      title: "Refrigerator Repairs",
      description: "Quick fix for cooling issues, freezer problems, or gas filling",
      icon: SparklesIcon,
      features: ["Cooling system repair", "Gas filling service", "Compressor issues", "Thermostat problems"]
    },
    {
      title: "Washing Machine Repairs", 
      description: "Drain errors, spin troubles, motor failures fixed fast",
      icon: CogIcon,
      features: ["Drain blockage", "Motor replacement", "Spin mechanism", "Water level sensor"]
    },
    {
      title: "AC Repairs",
      description: "Gas refills, servicing, leak fixes for Bareilly heat",
      icon: BoltIcon,
      features: ["Gas refilling", "Cooling coil cleaning", "Leak detection", "Filter replacement"]
    },
    {
      title: "Microwave Repairs",
      description: "Heating problems, broken buttons, power issues resolved",
      icon: LightBulbIcon,
      features: ["Heating element", "Control panel", "Power supply", "Door mechanism"]
    },
    {
      title: "TV Repairs",
      description: "Picture, sound, or display issues fixed professionally",
      icon: HomeIcon,
      features: ["Screen display", "Audio problems", "Remote issues", "Cable connection"]
    },
    {
      title: "Gas Stove Repairs",
      description: "Burner problems, gas leaks, ignition faults handled safely",
      icon: FireIcon,
      features: ["Burner cleaning", "Gas leak repair", "Ignition system", "Safety valve"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Skilled & Trained Technicians",
      description: "Experienced professionals with expertise in all major appliance brands",
      icon: AcademicCapIcon
    },
    {
      title: "Fast Same-Day Service",
      description: "Quick response within 2 hours for urgent appliance breakdowns",
      icon: ClockIcon
    },
    {
      title: "Clear and Honest Pricing",
      description: "Transparent upfront pricing with no hidden charges or surprises",
      icon: CurrencyRupeeIcon
    },
    {
      title: "Complete Appliance Solutions",
      description: "From minor repairs to major overhauls for all home appliances",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Genuine Parts & Warranty",
      description: "Only authentic spare parts used with warranty on repairs",
      icon: ShieldCheckIcon
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock availability for urgent appliance emergencies",
      icon: ExclamationTriangleIcon
    }
  ]

  const applianceTypes = [
    "AC Repair", "Fridge Repair", "Washing Machine Repair", "TV Repair", 
    "Geyser Repair", "Electric Fan Repair", "Water Purifier Repair", 
    "CCTV Camera Repair", "Microwave & Oven Repairs", "Gas Stove Repair", 
    "Chimney Repair", "Cooler Repairs"
  ]

  const process = [
    {
      step: "1",
      title: "Share Your Issue",
      description: "Tell us the appliance type and exact problem you're facing"
    },
    {
      step: "2", 
      title: "Pick a Convenient Time",
      description: "Choose your preferred day and time slot for the visit"
    },
    {
      step: "3",
      title: "Expert Technician Visit",
      description: "Verified professional arrives fully equipped with tools and parts"
    },
    {
      step: "4",
      title: "Quality Service & Support",
      description: "Satisfaction ensured with follow-up help and warranty"
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road"
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
                <li className="text-gray-900 font-medium">House Appliance Repair Service</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-sm font-semibold">Same-Day Repairs Available</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                    Professional House Appliance Repairs in
                    <span className="block text-yellow-200">Bareilly</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                    Fast, trusted appliance repair technicians delivering same-day solutions to keep your Bareilly home running smoothly and stress-free.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Verified Technicians
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Genuine Parts
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Transparent Pricing
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                      href="/hire-helper"
                      className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      Book Appliance Repair Now
                    </Link>

                    <Link
                      href="tel:+919972571005"
                      className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Emergency Repair Service
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">4.8★</div>
                      <div className="text-blue-200 text-sm">Customer Rating</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-blue-200 text-sm">Emergency Support</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">2-Hour</div>
                      <div className="text-blue-200 text-sm">Response Time</div>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <SparklesIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Fridge Repair</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <BoltIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">AC Service</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <CogIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Washing Machine</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <WrenchScrewdriverIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">All Repairs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for all your appliance repair needs in Bareilly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applianceServices.map((service, index) => (
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
                Why Choose EzyHelpers for Appliance Repair in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience trust, fast service, and skilled technicians for safe, reliable, and stress-free appliance repairs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
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

        {/* Appliance Types Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Types of Appliances We Repair
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We fix all kinds of home appliances with expert precision
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {applianceTypes.map((appliance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <CogIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <span className="text-gray-700 font-medium text-sm">{appliance}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                How to Book Our Appliance Repair Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple process to get your appliances fixed quickly and efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Service Areas in Bareilly
              </h2>
              <p className="text-lg text-gray-600">
                Professional appliance repair services across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/plumber" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plumbing Services</h3>
                <p className="text-gray-600 mb-4">Fix leakages and pipe problems</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/electrician" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Services</h3>
                <p className="text-gray-600 mb-4">Home wiring and light issues sorted</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/home-cleaning" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">Safe treatments for a pest-free home</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-blue-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Don't Let Appliance Problems Slow You Down!
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get your appliance repair handled fast with EzyHelpers for a hassle-free day
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Appliance Repair Now
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