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
  title: 'Expert Electrician Services for Your Home | EzyHelpers',
  description: 'Certified electrician services for wiring, repairs & installations. Emergency electrical work available 24/7 by licensed experts in your locality.',
  keywords: 'electrician services, electrical repair, home wiring, electrical maintenance, lighting installation, appliance installation, emergency electrician',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/electricians'
  }
}

export default function ElectriciansPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Electricians", url: "https://ezyhelpers.com/services/electricians" }
  ]

  const electricianServices = [
    {
      title: 'Electrical Repair Services',
      description: 'Fix broken switches, flickering lights, and overloads safely and quickly with trained electricians.',
      icon: WrenchScrewdriverIcon,
      features: ['Switch Repair', 'Light Fixing', 'Overload Solutions', 'Quick Service']
    },
    {
      title: 'Electrical Maintenance',
      description: 'Regular checks, load tests, and surge protection to prevent problems and keep power steady.',
      icon: ShieldCheckIcon,
      features: ['Regular Checks', 'Load Tests', 'Surge Protection', 'Preventive Care']
    },
    {
      title: 'Electrical Installations',
      description: 'Safely install fans, lights, ACs, geysers, and smart devices set up right for your home.',
      icon: LightBulbIcon,
      features: ['Fan Installation', 'AC Setup', 'Smart Devices', 'Safe Setup']
    },
    {
      title: 'Residential Electrical Services',
      description: 'Complete home electrical setups and system upgrades for renovations or new wiring needs.',
      icon: HomeIcon,
      features: ['Home Wiring', 'System Upgrades', 'Renovation Support', 'Complete Setup']
    },
    {
      title: 'Emergency Electrician Services',
      description: 'Quick help for sudden power failures or electrical issues, fixing problems fast when needed most.',
      icon: ExclamationTriangleIcon,
      features: ['24/7 Service', 'Quick Response', 'Power Restoration', 'Emergency Fixes']
    },
    {
      title: 'Lighting Installation',
      description: 'Energy-saving LED lights that brighten your home and cut down electricity bills.',
      icon: LightBulbIcon,
      features: ['LED Lighting', 'Energy Saving', 'Bright Homes', 'Bill Reduction']
    },
    {
      title: 'Appliance Installation',
      description: 'Safely connect home appliances, protecting them from power surges for long-lasting performance.',
      icon: BoltIcon,
      features: ['Safe Connection', 'Surge Protection', 'Long-lasting', 'Professional Setup']
    }
  ]

  const faqs = [
    {
      question: "Are EzyHelpers' electricians certified and licensed?",
      answer: "Yes, all our electricians are licensed and certified as per Indian electrical safety norms. They are experienced in residential and commercial wiring, repairs, and installations, ensuring your home or business stays safe and compliant."
    },
    {
      question: "Can I book an electrician for same-day service?",
      answer: "Yes, EzyHelpers offers same-day electrician service for urgent issues. Whether it’s a fuse problem or sudden power failure, our nearby electricians can reach your home quickly and fix it on the spot."
    },
    {
      question: "What common electrical issues do your electricians handle?",
      answer: "Our electricians fix power cuts, tripping issues, short circuits, faulty switches, flickering lights, and wiring faults. We also troubleshoot appliance connection issues and overload problems, ensuring your home remains safe and functional."
    },
    {
      question: "Do you offer complete electrical inspections for homes?",
      answer: "Yes, we provide detailed home electrical inspections. This includes wiring checks, load testing, switchboard analysis, and fault diagnosis to ensure everything is safe, up-to-date, and compliant with electrical safety guidelines."
    },
    {
      question: "Can EzyHelpers install appliances like fans, geysers, or ACs?",
      answer: "Yes, EzyHelpers' electricians can install commonly used electrical appliances such as ceiling fans, wall fans, geysers (standard types), exhaust fans, light fixtures, tube lights, LED panels, switchboards, MCBs, and inverters. We ensure secure wiring, proper grounding, safety compliance, and thorough performance testing for every installation. "
    },
    {
      question: "Can you upgrade my old electrical system or switchboard?",
      answer: "Definitely. We perform wiring replacements, switchboard upgrades, and load-balancing work to make your electrical system safer and capable of handling today’s modern appliances and energy needs."
    },
    {
      question: "Do you provide electricians for both small and large electrical jobs?",
      answer: "Yes, we handle everything from minor repairs like fixing a switch to large projects like full house rewiring or DB box installation. Our electricians carry all the tools to complete the job efficiently."
    },
    {
      question: "I don’t know what’s causing the electrical issue. Can you help?",
      answer: "Of course. Our electricians will perform a full electrical diagnosis to find and fix hidden problems. You don’t need to identify the issue; we’ll take care of everything from start to finish."
    },
    {
      question: "Is it safe to hire an online electrician for home repairs?",
      answer: "Yes, it is safe when booked through trusted platforms like EzyHelpers. All our electricians are background verified and certified. We ensure professional service with proper tools, safety gear, and transparent pricing, giving you reliable home repair without the risk of hiring unknown freelancers."
    },
    {
      question: "Is it safe to let the electrician work alone at home?",
      answer: "Yes, if you book through a trusted service like EzyHelpers. All our electricians are background-verified and trained to work professionally. We also share their details in advance, so you can feel secure even if they are working alone at your home."
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
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
              
              <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
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
                <div className="text-2xl font-bold text-white mb-1">Same-Day</div>
                <div className="text-blue-200 text-sm">Service</div>
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
              Skilled electricians, fast service, and fair rates for worry-free electrical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trusted Electricians",
                description: "Qualified local electricians fix all issues safely with transparent and honest pricing.",
                icon: ShieldCheckIcon,
                color: "text-blue-600"
              },
              {
                title: "Fast Emergency Response",
                description: "Rapid help during power issues with quick-dispatch, certified electrical professionals.",
                icon: ClockIcon,
                color: "text-red-600"
              },
              {
                title: "Flexible Scheduling",
                description: "Book electricians at your convenience—daytime, evenings, or even on weekends.",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Complete Electrical Care",
                description: "From installations to repairs, we cover all your home’s electrical service needs.",
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
              Wide range of electrical services designed to ensure safety, efficiency, and long-term reliability
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
                description: "Ensure a reliable power supply for everyday life",
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
                description: "Trained, certified electricians arrive on time with all necessary tools"
              },
              {
                step: "3",
                title: "Problem Diagnosis & Quote",
                description: "The electrician inspects the issue and offers upfront quotes with no hidden costs"
              },
              {
                step: "4",
                title: "Safe, Efficient Service",
                description: "All work is done with safety in mind, and tested before leaving to ensure perfection"
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

      {/* Why Regular Electrical Maintenance Matters for Every Home */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Regular Electrical Maintenance Matters for Every Home</h2>
          </div>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed">
            <p>Routine electrical maintenance isn’t just about fixing problems; it’s about preventing them before they happen. At EzyHelpers, we emphasise proactive care to keep your home’s electrical system running safely and efficiently all year round. Whether it’s a residential flat or a multi-floor home, periodic inspections can help avoid unexpected breakdowns, reduce fire risks, and improve overall power efficiency.</p>
            <p>Our electricians perform comprehensive maintenance checks that include inspecting power outlets, tightening loose connections, and identifying faulty wiring that may go unnoticed during daily use. We also verify that load capacities are properly balanced to prevent frequent tripping, overheating, or damage to your appliances.</p>
            <p>In addition to checking your switchboards and circuit breakers, we ensure the health of your grounding (earthing) system, critical for both shock protection and appliance safety. Special attention is given to high-consumption appliances like air conditioners, geysers, and microwaves, ensuring they're securely and correctly connected.</p>
            <p>By investing in regular electrical maintenance with EzyHelpers, you’re not only protecting your home and loved ones but you are also saving money by extending the lifespan of expensive appliances and avoiding emergency repair costs. A safe home is a maintained home.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
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

      {/* Explore Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">All-in-one home services for modern living.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber Services</h3>
              <p className="text-gray-600 mb-3">Quick solutions for leaks, clogs, fittings, and water systems.</p>
              <Link href="/services/plumbers" className="text-blue-700 font-medium hover:underline">Learn about Plumber Services</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Deep Cleaning</h3>
              <p className="text-gray-600 mb-3">Book a professional deep clean to refresh your entire home.</p>
              <Link href="/services/deep-cleaning" className="text-blue-700 font-medium hover:underline">Learn about Home Deep Cleaning Services</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Painting Services</h3>
              <p className="text-gray-600 mb-3">Interior or exterior, get smooth, professional paintwork done fast.</p>
              <Link href="/services/painters" className="text-blue-700 font-medium hover:underline">Learn about Painting Services</Link>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
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
              
              <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call 080-31411776
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 
