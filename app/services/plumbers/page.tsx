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
  title: 'Plumbing Repair in Bareilly – Trusted Local Plumbers',
  description: 'Get plumbing repair in Bareilly for leaks, pipe fittings, tap fixes, and clogged drains. Quick and professional service for your home needs.',
  keywords: 'plumbing repair bareilly, plumber bareilly, tap repair bareilly, drain cleaning bareilly',
}

export default function PlumbersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Plumbers", url: "https://ezyhelpers.com/services/plumbers" }
  ]

  const plumbingServices = [
    {
      title: "Leak Repairs & General Maintenance",
      description: "Quick water leak repair for dripping taps, damaged pipes, and faulty joints with preventive maintenance.",
      icon: WrenchScrewdriverIcon,
      features: ["Dripping Taps", "Damaged Pipes", "Faulty Joints", "Preventive Care"]
    },
    {
      title: "Toilet, Tap & Faucet Services",
      description: "Complete toilet repair, installation, and maintenance, including leaking taps and flush systems.",
      icon: BeakerIcon,
      features: ["Toilet Repair", "Tap Installation", "Flush Systems", "Faucet Replacement"]
    },
    {
      title: "Bathroom & Kitchen Plumbing",
      description: "End-to-end setup of showers, geysers, wash basins, kitchen sinks, and washing machines.",
      icon: HomeIcon,
      features: ["Shower Setup", "Geyser Install", "Wash Basins", "Kitchen Sinks"]
    },
    {
      title: "Water Heater (Geyser) Solutions",
      description: "Water heater repair and safe electric or gas geyser installations with electrical coordination.",
      icon: FireIcon,
      features: ["Heater Repair", "Safe Installation", "Electric & Gas", "Electrical Coordination"]
    },
    {
      title: "Drainage & Sewer Line Cleaning",
      description: "Unclog bathroom, kitchen, and toilet drains with sewer line cleaning to prevent backups.",
      icon: ExclamationTriangleIcon,
      features: ["Drain Unclogging", "Sewer Cleaning", "Backup Prevention", "Odour Removal"]
    },
    {
      title: "Pipe, Tank & Pump Services",
      description: "Expert water pipe repair, tank installations, cleaning, and pump setup for water flow.",
      icon: CubeIcon,
      features: ["Pipe Repair", "Tank Installation", "Tank Cleaning", "Pump Setup"]
    },
    {
      title: "Full Bathroom & Kitchen Solutions",
      description: "End-to-end plumbing work for renovations, ensuring water flow and waste systems function efficiently.",
      icon: CheckCircleIcon,
      features: ["Complete Renovation", "Water Flow", "Waste Systems", "Efficient Function"]
    }
  ]

  const faqs = [
    {
      question: "What plumbing services does EzyHelpers offer?",
      answer: "EzyHelpers provides a full range of plumbing services, including leak repair, pipe replacement, drain cleaning, toilet repair, bathroom fittings, kitchen plumbing, water heater installation, and emergency plumbing support. Our certified plumbers handle both minor issues and large-scale plumbing jobs with professional care."
    },
    {
      question: "Can I get emergency plumber services 24/7?",
      answer: "Yes, EzyHelpers offers 24/7 emergency plumber service for urgent problems like burst pipes, major leaks, or blocked drains. Our local plumbers respond quickly to control damage and restore your home’s plumbing system with minimal disruption."
    },
    {
      question: "Are your plumbers licensed and experienced?",
      answer: "Yes, all EzyHelpers plumbers are licensed and background verified. They have hands-on experience with Indian plumbing systems, are certified in safety standards, and can handle everything from repairs to full plumbing installations."
    },
    {
      question: "Can I book a same-day plumber near me?",
      answer: "Yes, same-day plumbing service is available in most major Indian cities. Whether it’s a leaking tap, broken pipe, or clogged sink, our plumbers can reach your location quickly and start work the same day."
    },
    {
      question: "Do you handle both small plumbing repairs and big projects?",
      answer: "Yes, we cover all plumbing work, from fixing leaking taps to full bathroom plumbing and pipeline replacements. Our plumbers are experienced in managing small repairs as well as large installations and upgrades."
    },
    {
      question: "Can your plumbers help with bathroom renovations?",
      answer: "Yes, our plumbers work on bathroom renovation projects, such as new fittings, pipelines, basin setups, shower installations, and drainage planning. We coordinate with your contractor or designer for seamless execution."
    },
    {
      question: "Do you fix geysers and water heater issues?",
      answer: "Yes, our plumbers handle the installation and repair of electric and gas water heaters. We fix geyser leaks, replace thermostats, repair heating elements, and ensure proper pipeline connection for safe usage."
    },
    {
      question: "How fast can a plumber reach my home?",
      answer: "In urgent cases, we can dispatch a local plumber within a few hours, depending on your city. For non-emergency jobs, we usually schedule the visit within 24 hours of booking."
    },
    {
      question: "Do you supply plumbing materials like taps and pipes?",
      answer: "Yes, we use quality plumbing supplies like ISI-marked pipes, branded taps, valves, and fittings. You can either use our materials or provide your own preferences before the job begins."
    },
    {
      question: "What if I only need a minor repair? Do I still need to book?",
      answer: "Definitely. We handle everything from minor repairs like dripping taps to major plumbing projects. No job is too small. Book online or give us a call, and we’ll take care of it."
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
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
              Reliable plumbing with upfront pricing, same-day support, and guaranteed service satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified & Experienced",
                description: "Certified plumbers with proven expertise deliver effective, long-lasting solutions for every plumbing need.",
                icon: ShieldCheckIcon,
                color: "text-indigo-600"
              },
              {
                title: "Transparent Pricing",
                description: "Get honest, upfront quotes before work starts. No hidden fees or surprise costs ever.",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Fast Same-Day Service",
                description: "Rapid response for urgent plumbing issues, often resolved with same-day service availability.",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "100% Satisfaction",
                description: "We ensure quality plumbing work and fix issues for free if you’re not satisfied.",
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
              Why Timely Plumbing Service Matters
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
                description: "Choose the plumbing service you need, such as leak repair, pipe fitting, or drain cleaning"
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
              What to Consider Before Booking Your Plumber
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For a smooth and effective plumbing service experience, a few considerations can make a big difference:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Detailed Problem Description",
                description: "Providing as much detail as possible about the issue (e.g., \"slow draining kitchen sink\", \"leaking pipe under the bathroom sink\", \"no hot water\") helps our plumbers come prepared.",
                icon: CheckCircleIcon
              },
              {
                title: "Accessibility",
                description: "Ensure the problem area is easily accessible for the plumber. Clearing items from under sinks or around water heaters can save time.",
                icon: WrenchScrewdriverIcon
              },
              {
                title: "Emergency vs Non-Emergency",
                description: "If it's a major leak or burst pipe, clearly state it's an emergency for priority dispatch.",
                icon: ExclamationTriangleIcon
              },
              {
                title: "Material Preferences (if applicable)",
                description: "For installations, if you have specific fixture brands or pipe materials in mind, let us know.",
                icon: CubeIcon
              },
              {
                title: "Availability",
                description: "While we strive for quick service, complex jobs or specific part requirements might extend the timeline. We'll communicate this clearly.",
                icon: ClockIcon
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

      {/* FAQ Section (disabled here to move after CTA) */}
      {false && (
      <section className="section-padding bg-gray-50">
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
      )}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
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
      
      {/* Explore Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Professional support for daily tasks and repairs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">Home Deep Cleaning</h3>
              <p className="text-gray-600 mb-3">Book a professional deep clean to refresh your entire home.</p>
              <Link href="/services/deep-cleaning" className="text-indigo-600 font-medium inline-flex items-center">Learn about Home Deep Cleaning Services <ArrowRightIcon className="h-4 w-4 ml-1"/></Link>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">Electrician Services</h3>
              <p className="text-gray-600 mb-3">Expert electricians for all your home wiring and appliance power needs.</p>
              <Link href="/services/electricians" className="text-indigo-600 font-medium inline-flex items-center">Learn about Electrician Services <ArrowRightIcon className="h-4 w-4 ml-1"/></Link>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">Gardener Services</h3>
              <p className="text-gray-600 mb-3">Maintain a beautiful home garden with experienced gardening help.</p>
              <Link href="/services/gardener" className="text-indigo-600 font-medium inline-flex items-center">Learn about Gardener Services <ArrowRightIcon className="h-4 w-4 ml-1"/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
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

      <Footer />
    </main>
  )
} 