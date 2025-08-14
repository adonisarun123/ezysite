import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { 
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Air Conditioner Repair in Bareilly - Cooling Experts',
  description: 'Looking for air conditioner repair in Bareilly? We offer trusted AC service, gas refills, leak fixes, and maintenance by certified technicians.',
  keywords: 'ac repair bareilly, air conditioner repair bareilly, ac service bareilly, ac gas filling bareilly, ac technician bareilly'
}

export default function ACRepairPage() {
  const services = [
    {
      title: "AC Gas Refilling & Leak Repair",
      description: "Quick gas leak detection and refilling to restore optimal cooling performance in 45°C+ temperatures."
    },
    {
      title: "Cooling Performance Issues",
      description: "Fix poor cooling problems caused by Bareilly's extreme summer heat and dust accumulation."
    },
    {
      title: "Filter Cleaning & Replacement",
      description: "Combat constant filter clogging from construction dust and pollution around Bareilly."
    },
    {
      title: "Voltage Fluctuation Damage",
      description: "Repair AC units damaged by frequent power cuts and unstable electricity supply."
    },
    {
      title: "Water Leakage Solutions",
      description: "Fix monsoon-related water leakage and humidity control problems during the rainy season."
    },
    {
      title: "Fungus & Odor Treatment",
      description: "Eliminate post-monsoon fungus growth and bad odors from AC vents for fresh air."
    },
    {
      title: "AC Installation & Uninstallation",
      description: "Professional setup and removal services for moving homes or upgrading units."
    },
    {
      title: "Foam-Jet & Water-Jet Cleaning",
      description: "Deep cleaning services to remove stubborn dirt and improve cooling efficiency."
    },
    {
      title: "Compressor Repairs",
      description: "Fix major compressor issues that cause complete AC breakdown before important events."
    },
    {
      title: "Thermostat & Control Issues",
      description: "Repair faulty temperature controls and smart AC features for optimal comfort."
    },
    {
      title: "Duct Cleaning & Maintenance",
      description: "Comprehensive duct cleaning to improve air quality and cooling distribution."
    }
  ]

  const acTypes = [
    "Split AC",
    "Window AC",
    "Inverter AC",
    "Commercial AC",
    "Tower & Cassette AC"
  ]

  const commonProblems = [
    "Poor Cooling Performance– Weak airflow due to dirty filters or gas leaks",
    "Dust & Pollution Clogging– Bareilly's construction dust blocks filters fast",
    "Voltage Fluctuations– Power cuts damage AC compressors",
    "Water Leakage– Monsoon humidity causes drainage problems",
    "Fungus & Bad Odor– Unclean vents spread germs and foul smells"
  ]

  const faqs = [
    {
      question: "What services are included in air conditioner repair in Bareilly?",
      answer: "Our air conditioner repair in Bareilly includes gas refilling, filter cleaning, thermostat repair, water leakage fixes, and full performance checks to keep your AC running efficiently during Bareilly's extreme heat."
    },
    {
      question: "Can you fix the poor cooling performance in my AC?",
      answer: "Yes, our AC technicians in Bareilly are trained to fix weak cooling caused by clogged filters, gas leaks, or thermostat issues. We ensure your AC cools effectively even during Bareilly's peak summer heat."
    },
    {
      question: "Do you clean or replace AC filters in Bareilly homes?",
      answer: "Yes, we offer filter cleaning and replacement services to combat dust from Bareilly's construction zones. Clean filters help improve air quality and cooling efficiency in your home."
    },
    {
      question: "Can you repair AC units damaged by voltage fluctuations?",
      answer: "Yes, our AC repair in Bareilly includes fixing units affected by voltage fluctuations and power cuts. We check electrical connections and damaged parts like compressors or PCBs."
    },
    {
      question: "Do you fix AC water leakage problems in Bareilly?",
      answer: "Yes, we repair water leakage caused by humidity or blocked drainage. Our Bareilly AC technicians ensure proper drainage to avoid damage and odor issues."
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AC Repair' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <ShieldCheckIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-sm font-semibold">Certified & Background Checked AC Technicians</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Air Conditioner Repair in Bareilly: Keep Your Cool with EzyHelpers!
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
              Beat the scorching heat of Bareilly with EzyHelpers! We provide quick, reliable, and affordable air conditioner repair in Bareilly to ensure your home stays cool, comfortable, and energy-efficient throughout the summer and beyond.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <ClockIcon className="h-4 w-4 text-green-300 mr-2" />
                <span className="text-sm font-medium">2-Hour Response Time</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <ShieldCheckIcon className="h-4 w-4 text-green-300 mr-2" />
                <span className="text-sm font-medium">Genuine Parts</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircleIcon className="h-4 w-4 text-green-300 mr-2" />
                <span className="text-sm font-medium">100% Satisfaction</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-service" className="group bg-white text-blue-800 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book AC Repair Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call for Emergency Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our AC Repair Services in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your Air Conditioner repair needs in Bareilly's challenging climate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Types of AC Units We Service
            </h2>
            <p className="text-lg text-gray-600">
              Complete AC servicing options for every Bareilly home
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {acTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Is Your AC Failing in Bareilly's Extreme Heat? We Can Help!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bareilly's scorching summers make ACs a necessity, not a luxury. But when your AC stops cooling, gas leaks, or trips due to voltage issues, your family's comfort and health are at risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonProblems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <SparklesIcon className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Don't Let AC Trouble Heat Up Your Home!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Fix your AC issues quickly with EzyHelpers. Stay cool and worry-free during Bareilly's hot summer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-service" className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
              Book AC Repair Now
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="tel:+919972571005" className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call +91 9972571005
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
