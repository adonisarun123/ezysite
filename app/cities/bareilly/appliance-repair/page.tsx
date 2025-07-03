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
  BoltIcon,
  ComputerDesktopIcon,
  CogIcon,
  CurrencyRupeeIcon,
  BeakerIcon,
  FireIcon,
  Squares2X2Icon,
  SparklesIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Appliance Repair in Bareilly | Same-Day Service | EzyHelpers',
  description: 'Fast, trusted appliance repair technicians in Bareilly for AC, fridge, washing machine, TV repair. Same-day service with genuine parts & transparent pricing.',
  keywords: 'appliance repair Bareilly, AC repair Bareilly, fridge repair Bareilly, washing machine repair Bareilly, TV repair Bareilly, home appliance service',
  openGraph: {
    title: 'Professional Appliance Repair in Bareilly - Same-Day Service Available | EzyHelpers',
    description: 'Expert appliance repair technicians delivering same-day solutions for all home appliances in Bareilly.',
    url: 'https://ezyhelpers.com/cities/bareilly/appliance-repair',
    type: 'website',
  }
}

export default function BareillyApplianceRepairPage() {
  const repairServices = [
    {
      title: "AC Repair & Servicing",
      description: "Complete air conditioner repair, gas refills, and maintenance for Bareilly's hot summers",
      icon: SparklesIcon,
      features: ["Gas refilling & leak repair", "Cooling performance restoration", "Filter cleaning & replacement", "Compressor & motor repairs"]
    },
    {
      title: "Refrigerator Repair",
      description: "Quick fixes for cooling issues, freezer problems, and electrical faults in all fridge brands",
      icon: Squares2X2Icon,
      features: ["Cooling system repair", "Compressor replacement", "Thermostat calibration", "Door seal fixes"]
    },
    {
      title: "Washing Machine Repair",
      description: "Expert solutions for drain errors, spin troubles, and motor failures in washing machines",
      icon: CogIcon,
      features: ["Motor & belt replacement", "Drain pump cleaning", "Spin cycle restoration", "Control panel fixes"]
    },
    {
      title: "TV & Display Repair",
      description: "Professional TV repair for picture, sound, and display issues across all brands",
      icon: ComputerDesktopIcon,
      features: ["Screen & display fixes", "Audio system repair", "Remote control issues", "Smart TV connectivity"]
    },
    {
      title: "Microwave & Oven Repair",
      description: "Heating problems, broken buttons, and power issues fixed with genuine parts",
      icon: FireIcon,
      features: ["Heating element repair", "Control panel fixes", "Door mechanism repair", "Timer & settings restoration"]
    },
    {
      title: "Geyser & Water Heater Repair",
      description: "Instant water heater service, element replacement, and thermostat repairs",
      icon: BeakerIcon,
      features: ["Heating element replacement", "Thermostat calibration", "Safety valve checks", "Tank cleaning services"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Same-Day Repair Service",
      description: "Fast response within 2 hours for urgent appliance repairs in Bareilly",
      icon: ClockIcon
    },
    {
      title: "Genuine Parts & Components",
      description: "Only authentic spare parts used with manufacturer warranty for lasting repairs",
      icon: CheckCircleIcon
    },
    {
      title: "Verified & Trained Technicians",
      description: "Background-checked professionals with expertise in all major appliance brands",
      icon: ShieldCheckIcon
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden charges - you pay only what's quoted",
      icon: CurrencyRupeeIcon
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock customer support for emergency appliance breakdowns",
      icon: ExclamationTriangleIcon
    },
    {
      title: "Brand Expertise",
      description: "Certified repair services for all major brands including LG, Samsung, Whirlpool, Haier",
      icon: AcademicCapIcon
    }
  ]

  const repairProcess = [
    {
      step: "1",
      title: "Share Your Appliance Issue",
      description: "Tell us the appliance type, brand, and exact problem you're facing"
    },
    {
      step: "2",
      title: "Schedule Convenient Time",
      description: "Choose your preferred date and time slot for the technician visit"
    },
    {
      step: "3",
      title: "Expert Diagnosis & Repair",
      description: "Our certified technician arrives with tools and genuine parts"
    },
    {
      step: "4",
      title: "Quality Testing & Support",
      description: "Thorough testing and follow-up support to ensure satisfaction"
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road"
  ]

  const applianceTypes = [
    "AC Repair", "Fridge Repair", "Washing Machine Repair", "TV Repair", 
    "Geyser Repair", "Electric Fan Repair", "Water Purifier Repair", 
    "Microwave & Oven Repairs", "Gas Stove Repair", "Chimney Repair"
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
                <li className="text-gray-900 font-medium">Appliance Repair Service</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Same-Day Repair Available</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Appliance Repair
                <span className="block text-blue-200">in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Fast, trusted appliance repair technicians delivering same-day solutions to keep your Bareilly home running smoothly and stress-free.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Repair Service Now
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
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-blue-200 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Emergency Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Hour</div>
                  <div className="text-blue-200 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Appliance Repair Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Appliance Repair Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for all your appliance repair needs with expert technicians and genuine parts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairServices.map((service, index) => (
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
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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

        {/* Appliance Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Types of Appliances We Repair
              </h2>
              <p className="text-lg text-gray-600">
                Expert repair services for all major home appliances and brands
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {applianceTypes.map((appliance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
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
                How to Book Our Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple 4-step process to get your appliances fixed quickly and efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairProcess.map((step, index) => (
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
                Professional appliance repair services available across all major areas in Bareilly
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
                Explore Other Home Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/electrician" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrician Services</h3>
                <p className="text-gray-600 mb-4">Professional electrical repairs and installations for your home</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/plumber" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plumber Services</h3>
                <p className="text-gray-600 mb-4">Expert plumbing solutions for all water-related issues</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/carpenter" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carpenter Services</h3>
                <p className="text-gray-600 mb-4">Professional furniture and woodwork solutions</p>
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