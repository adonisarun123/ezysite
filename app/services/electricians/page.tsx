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
  title: 'Home Electrical Repair Services in Bangalore | Quick Fix',
  description: 'Hire trusted electrical repair services in Bangalore for safe wiring, lighting, EV charger setup, and smart upgrades with fast, licensed professionals.',
  keywords: 'electrical repair bangalore, electrician bangalore, home wiring bangalore, electrical services bangalore',
}

export default function ElectriciansPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Electricians", url: "https://ezyhelpers.com/services/electricians" }
  ]

  const electricianServices = [
    {
      title: "Electrical Wiring & Rewiring",
      description: "Old or damaged wires? Our electricians handle complete rewiring with safety-grade materials.",
      icon: WrenchScrewdriverIcon,
      features: ["Complete Rewiring", "Safety Materials", "Old Wire Fix", "Modern Standards"]
    },
    {
      title: "Decorative & Functional Lighting",
      description: "From ambient LED installations to festive lighting for events and homes.",
      icon: LightBulbIcon,
      features: ["LED Install", "Ambient Light", "Festive Setup", "Energy Saving"]
    },
    {
      title: "Inverter & UPS Installation",
      description: "Reliable inverter setups for homes and apartments to tackle Bangalore's outages.",
      icon: BoltIcon,
      features: ["Power Backup", "UPS Setup", "Outage Fix", "Quick Install"]
    },
    {
      title: "Switch & Socket Repairs",
      description: "Fix burnt sockets, loose switches, or tripping circuits quickly and safely.",
      icon: WrenchScrewdriverIcon,
      features: ["Socket Fix", "Switch Repair", "Circuit Check", "Safe Fixes"]
    },
    {
      title: "Smart Home Installations",
      description: "We install smart lighting, home automation devices, and digital control systems.",
      icon: HomeIcon,
      features: ["Smart Lights", "Automation", "Digital Control", "Modern Tech"]
    },
    {
      title: "EV Charging Points",
      description: "Electric vehicle charging stations for environmentally conscious Bangaloreans in apartments and independent homes.",
      icon: BoltIcon,
      features: ["EV Chargers", "Safe Setup", "Home Install", "Eco-Friendly"]
    },
    {
      title: "Circuit Breaker Services",
      description: "Resolve frequent tripping and install MCB/ELCB with safety certifications.",
      icon: ExclamationTriangleIcon,
      features: ["MCB Install", "ELCB Setup", "Trip Fix", "Safety Check"]
    },
    {
      title: "Electrical Safety Checks",
      description: "Electrical safety inspections and earthing checks for new homes and safety approval.",
      icon: ShieldCheckIcon,
      features: ["Safety Audit", "Earth Check", "Risk Review", "Compliance"]
    }
  ]

  const faqs = [
    {
      question: "Can electricians handle apartment complex electrical work?",
      answer: "Yes, our electricians in Bangalore are familiar with apartment electrical systems, building management coordination, and residential complex electrical protocols."
    },
    {
      question: "Do electricians install EV charging points?",
      answer: "Yes. We install EV charging stations, provide power upgrades, and ensure EV-ready setups for eco-conscious Bangalore residents."
    },
    {
      question: "Can electricians upgrade old apartment wiring?",
      answer: "Yes, we provide complete electrical rewiring, safety upgrades, and modern electrical system installation for older Bangalore apartments."
    },
    {
      question: "Do electricians work around busy professional schedules?",
      answer: "Yes, we offer flexible timing, including weekends, evening visits, and low-disruption electrical services for working families."
    },
    {
      question: "Do electricians handle home office electrical setups?",
      answer: "Yes, electricians can install dedicated circuits, extra plug points, and safely set up electrical connections for computers, Wi-Fi, and other work-from-home devices."
    },
    {
      question: "Do electricians do wiring?",
      answer: "Yes, electricians handle all types of wiring tasks, like new installations, rewiring, and repairs for homes, offices, appliances, and smart devices to ensure safe electrical connections."
    },
    {
      question: "What is a professional electrician?",
      answer: "A professional electrician is a trained expert who installs, repairs, and maintains electrical systems safely and efficiently, following safety standards and using the right tools and techniques."
    },
    {
      question: "What is the cost of an electrician in Bangalore?",
      answer: "The cost depends on the type of service, job complexity, materials required, and time taken. Contact us for a free estimate."
    },
    {
      question: "How do I know if my house needs electrical rewiring?",
      answer: "If you notice flickering lights, frequent trips, burning smells, or outdated wires, your home may need rewiring. A licensed electrician can inspect and advise you."
    },
    {
      question: "What are the signs of an electrical problem at home?",
      answer: "Common signs include sparks, warm switchboards, flickering lights, buzzing sounds, or burning smells. These should be inspected immediately."
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