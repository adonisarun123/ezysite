import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  BeakerIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  FireIcon,
  CubeIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'House Plumbing Repair in Bangalore | Water Problem Fix',
  description: 'Fix leaking taps, blocked drains, or bathroom issues with verified plumbers. Book same-day house plumbing repair in Bangalore with on-time professionals.',
  keywords: 'plumbing repair bangalore, plumber bangalore, tap repair bangalore, drain cleaning bangalore',
}

export default function PlumbersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Plumbers", url: "https://ezyhelpers.com/services/plumbers" }
  ]

  const plumbingServices = [
    {
      title: "Pipe Leakage Detection",
      description: "We detect and repair hidden or visible leaks to prevent water damage and mold buildup.",
      icon: WrenchScrewdriverIcon,
      features: ["Hidden Leaks", "Visible Leaks", "Damage Prevention", "Mold Control"]
    },
    {
      title: "Faucet & Shower Repairs",
      description: "We repair dripping taps and broken showers to restore water flow and stop wastage.",
      icon: BeakerIcon,
      features: ["Dripping Taps", "Broken Showers", "Flow Fix", "Stop Wastage"]
    },
    {
      title: "Toilet Repair",
      description: "We fix flush tanks and blockages to keep your bathroom clean and functional.",
      icon: HomeIcon,
      features: ["Flush Tanks", "Blockages", "Clean Fix", "Functional"]
    },
    {
      title: "Water Pressure Fix",
      description: "We fix low water pressure in high-rises to ensure strong, steady flow in all taps.",
      icon: FireIcon,
      features: ["High-rise Fix", "Strong Flow", "Steady Water", "All Taps"]
    },
    {
      title: "Bathroom Fitting",
      description: "We install or repair taps, wash basins, and fittings to improve bathroom usage and hygiene.",
      icon: CubeIcon,
      features: ["Tap Install", "Basin Fix", "Fitting Work", "Hygiene"]
    },
    {
      title: "Drain & Sink Cleaning",
      description: "We remove grease, hair, and debris to unclog bathroom or kitchen drains and sinks.",
      icon: CheckCircleIcon,
      features: ["Grease Remove", "Hair Clear", "Debris Clean", "Unclog"]
    },
    {
      title: "Pipe Replacement",
      description: "We replace damaged pipes with durable ones during home renovations or major plumbing upgrades.",
      icon: StarIcon,
      features: ["Damaged Pipes", "Durable Fix", "Renovation", "Upgrade"]
    },
    {
      title: "Emergency Plumbing",
      description: "We handle burst pipes and blockages any time with our 24/7 emergency plumber service.",
      icon: ExclamationTriangleIcon,
      features: ["24/7 Service", "Burst Pipes", "Blockages", "Quick Fix"]
    },
    {
      title: "Kitchen Sink & Drain",
      description: "We fix sink leaks, clogs, and faulty faucets to maintain a clean and efficient kitchen.",
      icon: WrenchScrewdriverIcon,
      features: ["Sink Leaks", "Clogs", "Faucets", "Clean Kitchen"]
    },
    {
      title: "Bathroom Appliances",
      description: "We install geysers, jets, and hand showers with proper fittings for safe water use.",
      icon: BeakerIcon,
      features: ["Geyser Install", "Jets", "Hand Shower", "Safe Use"]
    }
  ]

  const faqs = [
    {
      question: "Is plumbing help available for apartments in Bangalore?",
      answer: "Yes, our plumber services in Bangalore specialise in apartment complexes and high-rise buildings. We understand space constraints, neighbour considerations, and building-specific plumbing systems."
    },
    {
      question: "Do your plumbers handle bathroom renovation for traditional homes?",
      answer: "Yes, our bathroom renovation support includes complete upgrades for older homes, modern fixture installation, and space optimisation that is perfect for traditional houses."
    },
    {
      question: "Can I schedule a plumbing inspection before moving into a flat?",
      answer: "Yes, our pre-move plumbing inspections ensure that your new flat has leak-free and functional plumbing. It's a smart step to avoid post-move hassles or unexpected repair costs."
    },
    {
      question: "Do plumbers repair both PVC and metal plumbing systems?",
      answer: "Yes. Our trained plumbers handle all types of plumbing systems, including PVC, CPVC, GI, PEX, and copper piping, using tools and techniques suited for each material."
    },
    {
      question: "What causes frequent drain blockages in homes?",
      answer: "Drain blockages in homes are often caused by hair accumulation, soap residue, food particles, and hard water mineral deposits. Kitchen drains may also clog due to oil and grease buildup. Our drain cleaning service uses high-pressure water jetting to effectively remove all obstructions."
    },
    {
      question: "Do I need to buy the parts, or will your plumber bring them?",
      answer: "No need to worry. Our plumbers come fully prepared. When you book our house plumbing repair service in Bangalore, they will first inspect the issue and recommend the necessary parts. If replacements are needed, they'll either carry them or source genuine parts from trusted local suppliers. You won't have to visit a store or guess what's needed; we handle everything transparently and efficiently."
    },
    {
      question: "Do your plumbers work on Sundays or public holidays?",
      answer: "Yes, absolutely. Our plumber services in Bangalore are available seven days a week, including Sundays and public holidays. We understand that plumbing emergencies don't follow a calendar. Our verified plumbers are always ready to provide prompt, doorstep plumbing support."
    },
    {
      question: "How do I hire a local plumber in Bangalore?",
      answer: "With EzyHelpers, finding a reliable plumber nearby is no trouble at all. Just visit our website or call our customer support to book a certified plumber near you. We'll match you with a background-verified and experienced plumbing professional based on your location and service need. You can also schedule services for weekends or emergency slots. No need to search endlessly or deal with unreliable handymen."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/plumbers" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <BeakerIcon className="h-5 w-5 text-indigo-200 mr-2" />
              <span className="text-sm font-semibold">Trusted Plumbing Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Trusted Plumber Service for
              <span className="block bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                Leak Repairs & More
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-indigo-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Expert plumbing solutions for leaks, installations, and repairs. Same-day service, transparent pricing, and 100% satisfaction guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-indigo-800 hover:bg-indigo-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Plumber Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Emergency Plumbing
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">12K+</div>
                <div className="text-indigo-200 text-sm">Plumbing Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-indigo-200 text-sm">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-indigo-200 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                <div className="text-indigo-200 text-sm">Customer Rating</div>
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
              Why Choose EzyHelpers for Plumber Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable plumbing services with upfront pricing, fast response, 24/7 support, and guaranteed satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified & Experienced",
                description: "Certified plumbers bring years of experience, offering expert solutions for lasting results",
                icon: ShieldCheckIcon,
                color: "text-indigo-600"
              },
              {
                title: "Transparent Pricing",
                description: "Honest, upfront pricing before work begins with no surprise charges, just clear costs",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Fast Same-Day Service",
                description: "Quick response to plumbing emergencies, often providing same-day service for urgent issues",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "100% Satisfaction",
                description: "We guarantee quality plumbing work and will fix it if you're not satisfied",
                icon: StarIcon,
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
              Comprehensive Plumber Services by EzyHelpers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              One-stop platform for comprehensive home plumbing services with same-day or next-day service availability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {plumbingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-indigo-600 mr-1.5" />
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

      {/* Why It Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Timely Plumbing Service Matters?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plumbing problems might appear small, but if not addressed in time, they can lead to serious issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prevent Major Damages",
                description: "Fix leaks and blockages early to stop water damage that can weaken your home's structure",
                icon: ShieldCheckIcon
              },
              {
                title: "Save on Costly Repairs",
                description: "Timely service helps catch small issues before they turn into big, costly problems",
                icon: CheckCircleIcon
              },
              {
                title: "Healthy Living Environment",
                description: "Prevent mold and bacteria growth caused by leaks or dampness for family safety",
                icon: HomeIcon
              },
              {
                title: "Improve Water Efficiency",
                description: "Repairing leaks and faulty fixtures reduces water wastage and lowers your bills",
                icon: BeakerIcon
              },
              {
                title: "Avoid Emergency Disruptions",
                description: "Regular maintenance prevents sudden pipe bursts or clogged drains, saving stress",
                icon: ExclamationTriangleIcon
              }
            ].map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div key={index} className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
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
              How to Book a Plumber with EzyHelpers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Booking our home plumbing services is quick and easy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Service",
                description: "Choose the plumbing service you need such as leak repair, pipe fitting, or drain cleaning"
              },
              {
                step: "2",
                title: "Provide Your Details",
                description: "Share your name, address, phone number, and when you want the plumber to visit"
              },
              {
                step: "3",
                title: "Confirm Your Appointment",
                description: "We will confirm your booking quickly and schedule your plumber to arrive on time"
              },
              {
                step: "4",
                title: "Get Expert Help",
                description: "A verified, skilled plumber arrives prepared to fix your plumbing issues efficiently"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* Important Considerations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Things to Consider Before Hiring a Plumber
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential tips to choose the right plumber for hassle-free services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quick & Convenient Scheduling",
                description: "Same-day or next-day plumber services available, depending on location and time slot",
                icon: ClockIcon
              },
              {
                title: "Transparent Pricing",
                description: "Get clear, upfront quotes with no hidden charges. Pay only for agreed services",
                icon: CheckCircleIcon
              },
              {
                title: "Site Visits & Materials",
                description: "Major jobs may need site inspection. Material costs are extra if not supplied",
                icon: WrenchScrewdriverIcon
              }
            ].map((consideration, index) => {
              const IconComponent = consideration.icon
              return (
                <div key={index} className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {consideration.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {consideration.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our plumber services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Don't Let Plumbing Problems Stress You Out!
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Whether it's a leaking tap, clogged drain, or broken geyser, EzyHelpers has expert plumbers you can trust. Fast, affordable, and reliable service is just a call away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-indigo-800 hover:bg-indigo-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Your Plumber Now
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