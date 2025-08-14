import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  BoltIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  FireIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Trusted Electrician in Bareilly - Fast Home Fixes',
  description: 'Looking for an electrician in Bareilly? Book expert service for fan fittings, switches, wiring issues, and power problems at your home.',
  keywords: 'electrician bareilly, electrical repair bareilly, home wiring bareilly, electrical services bareilly',
}

export default function ElectriciansPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Electricians", url: "https://ezyhelpers.com/services/electricians" }
  ]

  const electricianServices = [
    {
      title: "House Wiring",
      description: "We handle complete home wiring or rewiring with proper insulation and safety for old and new constructions.",
      icon: WrenchScrewdriverIcon,
      features: ["Complete Wiring", "Safety Standards", "Proper Insulation", "New & Old Homes"]
    },
    {
      title: "Switch/Socket Repairs",
      description: "Our electricians fix loose switches, burnt sockets, and wiring faults to restore safe and stable power access.",
      icon: WrenchScrewdriverIcon,
      features: ["Switch Repairs", "Socket Fixes", "Wiring Faults", "Safe Access"]
    },
    {
      title: "Fan & Light Installation",
      description: "Proper installation of ceiling fans, decorative lights, and chandeliers with safe wiring and correct mounting support.",
      icon: LightBulbIcon,
      features: ["Fan Installation", "Light Fitting", "Safe Wiring", "Secure Mounting"]
    },
    {
      title: "Circuit Breaker Repair",
      description: "Resolve frequent MCB or ELCB tripping and upgrade faulty breakers to avoid electrical hazards and power disruption.",
      icon: ExclamationTriangleIcon,
      features: ["MCB Repair", "ELCB Fix", "Trip Prevention", "Safety Upgrade"]
    },
    {
      title: "Electrical Safety Check",
      description: "We inspect wires, boards, and load capacity to prevent shocks and fire risks and ensure home safety compliance.",
      icon: ShieldCheckIcon,
      features: ["Wire Inspection", "Board Check", "Load Testing", "Risk Prevention"]
    },
    {
      title: "Inverter/UPS Installation",
      description: "Get a reliable inverter or UPS setup with professional load assessment and wiring for an uninterrupted backup power supply.",
      icon: BoltIcon,
      features: ["Load Assessment", "Safe Setup", "Backup Power", "Proper Wiring"]
    },
    {
      title: "Generator Setup",
      description: "We provide expert installation and maintenance of home generators for safe, continuous power during outages in Bareilly.",
      icon: HomeIcon,
      features: ["Safe Install", "Power Backup", "Regular Service", "Load Balance"]
    },
    {
      title: "Emergency Electrical Repairs",
      description: "Our electricians are available 24/7 in Bareilly to fix sudden outages, sparks, or wiring problems on priority.",
      icon: BoltIcon,
      features: ["24/7 Service", "Quick Response", "Priority Fix", "Safety First"]
    }
  ]

  const faqs = [
    {
      question: "Do you offer same-day electrical repair services in Bareilly?",
      answer: "Yes, we offer same-day electrical repair services in Bareilly. Our skilled electricians provide fast service with transparent pricing and complete solutions for urgent electrical problems."
    },
    {
      question: "Do electricians in Bareilly handle house wiring services?",
      answer: "Yes, electricians in Bareilly are available for house wiring services, including safe installation and repairs for both old and new homes. Our certified electricians handle complete house wiring with proper safety standards and modern electrical codes."
    },
    {
      question: "Can I get same-day electrical repair services in Bareilly?",
      answer: "Yes, you can get same-day electrical repair services in Bareilly through EzyHelpers. Our skilled electricians provide fast service for switch repairs, fan installations, wiring issues, and other electrical problems with transparent pricing."
    },
    {
      question: "Do electricians in Bareilly handle switch and socket repairs?",
      answer: "Yes, electricians in Bareilly handle switch and socket repairs, including fixing loose connections, faulty switches, damaged sockets, and electrical connection issues. Our certified electricians ensure safe and proper functioning of all electrical switches and outlets."
    },
    {
      question: "Are fan and light installation services available in Bareilly?",
      answer: "Yes, fan and light installation services are available from electricians in Bareilly. Our certified electricians provide proper fitting for ceiling fans, lights, chandeliers, and other electrical fixtures with safe wiring and secure installation."
    },
    {
      question: "Do electricians in Bareilly handle old house wiring repairs?",
      answer: "Yes, electricians in Bareilly handle old house wiring repairs, including fixing damaged wires in traditional homes, upgrading outdated electrical systems, and safe rewiring for older constructions with modern safety standards and proper electrical codes."
    },
    {
      question: "Do your electricians repair ceiling fans?",
      answer: "Yes, electricians in Bareilly repair ceiling fans, including fixing wobbling fans, slow speed problems, motor issues, and electrical connection faults. Our skilled electricians ensure proper fan functioning with safe electrical connections and mechanical repairs."
    },
    {
      question: "What services do EzyHelpers' electricians in Bareilly offer?",
      answer: "Our electricians in Bareilly provide house wiring, fan and light installation, switch/socket repairs, inverter and UPS installation, circuit breaker repairs, generator setup, safety checks, and emergency electrical services for homes."
    },
    {
      question: "What safety checks do your electricians perform?",
      answer: "Our electricians in Bareilly perform complete safety inspections, including checking for short circuits, loose wires, overloaded circuits, and faulty switchboards to prevent future hazards."
    },
    {
      question: "Are your electricians licensed to work in Bareilly?",
      answer: "Yes, all electricians provided by EzyHelpers are licensed, certified, and trained to deliver safe electrical services in Bareilly homes according to standard electrical codes."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/electricians" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <BoltIcon className="h-5 w-5 text-blue-200 mr-2" />
              <span className="text-sm font-semibold">Expert Electrical Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Expert Electrician Services
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                at Your Doorstep
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Certified electricians for safe installations, repairs, and maintenance. Quick response, fair pricing, and peace of mind guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-blue-800 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Electrician Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Emergency Service
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15K+</div>
                <div className="text-blue-200 text-sm">Electrical Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-blue-200 text-sm">Safety First</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                <div className="text-blue-200 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers for Your Electrical Needs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Skilled electricians, quick response times, and fair pricing for stress-free electrical solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trusted Electricians",
                description: "Experienced local electricians resolve all electrical issues safely with clear, honest pricing",
                icon: ShieldCheckIcon,
                color: "text-blue-600"
              },
              {
                title: "Fast Emergency Response",
                description: "Quick response to electrical emergencies, sending skilled professionals for urgent issues",
                icon: ClockIcon,
                color: "text-red-600"
              },
              {
                title: "Flexible Scheduling",
                description: "Convenient appointments during day, evening, or weekends to suit your needs",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Complete Electrical Care",
                description: "Handle all electrical needs from new installations to repairs and routine maintenance",
                icon: BoltIcon,
                color: "text-yellow-600"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Reliable & Professional Electrician Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wide range of electrician services designed to ensure safety, efficiency, and long-term reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {electricianServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircleIcon className="h-3 w-3 text-blue-600 mr-1.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Timely Repairs Matter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Do Timely Electrical Repairs Matter?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential reasons to address electrical issues immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Prevent electrical fires and shocks due to faulty wiring",
                icon: ShieldCheckIcon
              },
              {
                title: "Cost Savings", 
                description: "Fixing minor issues early avoids expensive repairs later",
                icon: CheckCircleIcon
              },
              {
                title: "Energy Efficiency",
                description: "Well-maintained systems reduce power consumption",
                icon: BoltIcon
              },
              {
                title: "Appliance Protection",
                description: "Stable wiring avoids damage from voltage fluctuations",
                icon: HomeIcon
              },
              {
                title: "Uninterrupted Functionality",
                description: "Ensure reliable power supply for everyday life",
                icon: ClockIcon
              }
            ].map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div key={index} className="bg-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How to Book an Electrician?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick, reliable, and hassle-free electrical services at your doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Easy Appointment Booking",
                description: "Book your electrician online or via call in seconds with your preferred time slot"
              },
              {
                step: "2",
                title: "Certified Electrician Visit",
                description: "Trained, certified electrician arrives on time with all necessary tools"
              },
              {
                step: "3",
                title: "Problem Diagnosis & Quote",
                description: "Electrician inspects the issue and offers upfront quotes with no hidden costs"
              },
              {
                step: "4",
                title: "Safe, Efficient Service",
                description: "All work done with safety in mind, tested before leaving to ensure perfection"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our electrician services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Book Our Expert Electrician Services Today!
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Looking for expert electrical services? Contact EzyHelpers today and get connected to skilled local electricians who deliver quality and safety with every job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-blue-800 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Electrician Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call +91 9972571005
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 