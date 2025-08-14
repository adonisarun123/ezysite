import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  BoltIcon,
  HomeIcon,
  SparklesIcon,
  FireIcon,
  TvIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Electrical Appliance Repair in Bangalore | TV, AC, Fridge Fix',
  description: 'Fix all home appliances in Bangalore. TV, AC, fridge, washing machine repair. Expert technicians, doorstep service.',
  keywords: 'appliance repair bangalore, AC repair bangalore, TV repair bangalore, fridge repair bangalore, washing machine repair bangalore, home appliance repair',
}

export default function ApplianceRepairPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Appliance Repair", url: "https://ezyhelpers.com/services/appliance-repair" }
  ]

  const applianceServices = [
    {
      title: "Refrigerator Repair",
      description: "We repair cooling, compressor, and defrost issues in LG, Samsung, Whirlpool, Godrej, and more.",
      icon: BeakerIcon,
      features: ["Single & Double Door", "Side-by-Side Models", "Cooling Issues", "Compressor Problems"]
    },
    {
      title: "Washing Machine Repair",
      description: "We repair drum, motor, and control faults in IFB, Bosch, LG, and other top brands.",
      icon: SparklesIcon,
      features: ["Front Load", "Top Load", "Motor Issues", "Control Panel Fixes"]
    },
    {
      title: "Air Conditioner Repair",
      description: "We handle gas refills, compressor issues, and full servicing for major brands.",
      icon: BoltIcon,
      features: ["Split AC", "Window AC", "Cassette AC", "Gas Refills"]
    },
    {
      title: "Television Repair",
      description: "We fix screen, sound, and connectivity issues across all TV types from top brands like Samsung, LG, Mi, and Sony.",
      icon: TvIcon,
      features: ["LED TVs", "LCD TVs", "OLED TVs", "Smart TVs"]
    },
    {
      title: "Microwave Oven Repair",
      description: "We fix magnetron, control panel, and door issues in IFB, LG, Samsung, and other models.",
      icon: FireIcon,
      features: ["Solo", "Grill", "Convection", "Control Issues"]
    },
    {
      title: "Water Heater Repair",
      description: "We fix heating elements, thermostats, and pressure valve issues in Racold, Havells, and AO Smith geysers.",
      icon: BeakerIcon,
      features: ["Instant", "Storage", "Gas", "Electric"]
    },
    {
      title: "Electric Chimney Repair",
      description: "We repair suction, motor, and light issues in Faber, Glen, Elica, and other kitchen chimney models.",
      icon: HomeIcon,
      features: ["Modular", "Wall-Mount", "Auto-Clean", "Suction Fix"]
    },
    {
      title: "Other Appliances",
      description: "We also repair water purifiers, air fryers, OTGs, induction cooktops, mixers, and more.",
      icon: WrenchScrewdriverIcon,
      features: ["Water Purifiers", "Small Appliances", "Kitchen Gadgets", "Home Electronics"]
    }
  ]

  const faqs = [
    {
      question: "What makes your electrical appliance repair in Bangalore different?",
      answer: "Our multi-brand service expertise, genuine spare parts, and energy-efficient repairs make us a cost-effective and trustworthy option with warranty-backed service for modern Bangalore households."
    },
    {
      question: "Do you provide same-day appliance repair services?",
      answer: "Yes, we offer same-day repair service across Bangalore, depending on technician availability. Response time is typically 90 minutes in central zones and 2 hours in outer areas."
    },
    {
      question: "Which appliance brands do you service?",
      answer: "We handle appliances from major brands like LG, Samsung, Whirlpool, Bosch, Godrej, Haier, IFB, and more using expert multi-brand technical know-how. Call us to check support for your specific brand."
    },
    {
      question: "How do you handle broken appliance repair in Bangalore?",
      answer: "We begin with fast diagnostics to identify the core issue, then proceed with transparent pricing and on-the-spot repair using original spare parts."
    },
    {
      question: "Do you fix appliances making noise or overheating?",
      answer: "Yes. Our experts are trained to diagnose noise, vibration, and overheating problems and offer lasting solutions that restore performance."
    },
    {
      question: "Do you provide doorstep appliance repair in Bangalore?",
      answer: "Absolutely. EzyHelpers offers reliable doorstep repair services for all major appliances across Bangalore, ensuring convenient and professional fixes without you needing to step out."
    },
    {
      question: "Can I get a quote for appliance repair before booking?",
      answer: "Yes, we provide estimates based on the appliance issue. After a quick diagnosis, the technician will provide a transparent price quote before beginning the repair."
    },
    {
      question: "Do your technicians carry spare parts during the home visit?",
      answer: "Yes, our technicians usually carry common spare parts. If a rare part is required, we source it quickly and return promptly to complete the installation."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/appliance-repair" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <WrenchScrewdriverIcon className="h-5 w-5 text-red-200 mr-2" />
              <span className="text-sm font-semibold">Expert Appliance Repair</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Expert Home Appliance
              <span className="block bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                Repair Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-red-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Fast, reliable appliance repair at your doorstep. Same-day service with transparent pricing and guaranteed satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-red-800 hover:bg-red-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Repair Service
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Emergency Repair
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50K+</div>
                <div className="text-red-200 text-sm">Repairs Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-red-200 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                <div className="text-red-200 text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-red-200 text-sm">Satisfaction</div>
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
              Why Choose EzyHelpers for Appliance Repair?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trust, speed, and professional excellence combined to become your go-to provider for home appliance repair services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Technicians",
                description: "Trained technicians expertly diagnose and fix various appliances with reliable, safe repairs",
                icon: ShieldCheckIcon,
                color: "text-red-600"
              },
              {
                title: "Same-Day Service",
                description: "Book today for quick, same-day appliance repairs without disrupting your routine",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "Transparent Pricing",
                description: "Upfront pricing before starting work with no hidden fees for confident payment",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Wide Range Repairs",
                description: "Repair all appliances for any brand and model, making us your one-stop solution",
                icon: WrenchScrewdriverIcon,
                color: "text-purple-600"
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
              Our Appliance Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive repair solutions for all your home appliances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {applianceServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-red-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-red-600 mr-1.5" />
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

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How to Book Our Appliance Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fast and stress-free booking process in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Issue",
                description: "Tell us which appliance needs repair and describe the problem clearly"
              },
              {
                step: "2", 
                title: "Pick Convenient Time",
                description: "Choose a date and time slot that fits your schedule perfectly"
              },
              {
                step: "3",
                title: "Expert Technician Visit",
                description: "Skilled technician arrives with tools and spare parts for quick repair"
              },
              {
                step: "4",
                title: "Quality Service & Support",
                description: "After repair, we ensure your appliance works perfectly with ongoing support"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our appliance repair services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Don't Let Broken Appliances Slow You Down!
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed">
              Get your appliances fixed fast and easily with EzyHelpers. Our trusted technicians solve problems quickly so you can enjoy a hassle-free day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-red-800 hover:bg-red-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Repair Service Now
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