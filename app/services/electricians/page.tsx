'use client'

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

export default function ElectriciansPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Electricians", url: "https://ezyhelpers.com/services/electricians" }
  ]

  const electricianServices = [
    {
      title: "Electrical Repair Services",
      description: "Fix broken switches, flickering lights, and overloads safely and quickly with trained electricians.",
      icon: WrenchScrewdriverIcon,
      features: ["Switch Repair", "Light Fixing", "Overload Solutions", "Quick Service"]
    },
    {
      title: "Electrical Maintenance",
      description: "Regular checks, load tests, and surge protection to prevent problems and keep power steady.",
      icon: CheckCircleIcon,
      features: ["Regular Checks", "Load Tests", "Surge Protection", "Preventive Care"]
    },
    {
      title: "Electrical Installations",
      description: "Safely install fans, lights, ACs, geysers, and smart devices set up right for your home.",
      icon: HomeIcon,
      features: ["Fan Installation", "AC Setup", "Smart Devices", "Safe Setup"]
    },
    {
      title: "Residential Electrical Services",
      description: "Complete home electrical setups and system upgrades for renovations or new wiring needs.",
      icon: BoltIcon,
      features: ["Home Wiring", "System Upgrades", "Renovation Support", "Complete Setup"]
    },
    {
      title: "Emergency Electrician Services",
      description: "Quick help for sudden power failures or electrical issues, fixing problems fast when needed most.",
      icon: ExclamationTriangleIcon,
      features: ["24/7 Service", "Quick Response", "Power Restoration", "Emergency Fixes"]
    },
    {
      title: "Lighting Installation",
      description: "Energy-saving LED lights that brighten your home and cut down electricity bills.",
      icon: LightBulbIcon,
      features: ["LED Lighting", "Energy Saving", "Bright Homes", "Bill Reduction"]
    },
    {
      title: "Appliance Installation",
      description: "Safely connect home appliances, protecting them from power surges for long-lasting performance.",
      icon: FireIcon,
      features: ["Safe Connection", "Surge Protection", "Long-lasting", "Professional Setup"]
    }
  ]

  const faqs = [
    {
      question: "What types of electrical services do you provide?",
      answer: "We provide electrical repairs, maintenance, installations, residential wiring, emergency services, lighting installation, and appliance connections for all your home electrical needs."
    },
    {
      question: "Do you provide emergency electrical services?",
      answer: "Yes, we offer 24/7 emergency electrician services for sudden power failures or urgent electrical issues, providing quick response when you need us most."
    },
    {
      question: "Are your electricians certified and qualified?",
      answer: "All our electricians are trained, certified, and experienced professionals who ensure safe electrical work and meet all safety standards for your home."
    },
    {
      question: "Do you provide transparent pricing for electrical work?",
      answer: "Yes, we offer clear, honest pricing with upfront quotes after on-site inspection. No hidden charges, just transparent costs for all electrical services."
    },
    {
      question: "Can you help with both repairs and new installations?",
      answer: "Absolutely! We handle everything from minor electrical repairs and maintenance to complete new installations and home electrical system upgrades."
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

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
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