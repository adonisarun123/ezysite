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
  title: 'House Appliance Repairs in Bareilly - Same-Day Technicians',
  description: 'Need house appliance repairs in Bareilly? We fix washing machines, fridges, ovens, and more with expert technicians and fast service.',
  keywords: 'appliance repair bareilly, washing machine repair bareilly, fridge repair bareilly, ac repair bareilly, tv repair bareilly, home appliance repair',
}

export default function ApplianceRepairPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Appliance Repair", url: "https://ezyhelpers.com/services/appliance-repair" }
  ]

  const applianceServices = [
    {
      title: "Refrigerator Repairs",
      description: "Quick fix for cooling issues, freezer problems, or gas filling to keep your food safe and fresh.",
      icon: BeakerIcon,
      features: ["Cooling Issues", "Freezer Problems", "Gas Filling", "Compressor Repairs"]
    },
    {
      title: "Washing Machine Repairs",
      description: "Solve drain errors, spin troubles, or motor failures for hassle-free laundry.",
      icon: SparklesIcon,
      features: ["Drain Errors", "Spin Problems", "Motor Failures", "Control Panel Issues"]
    },
    {
      title: "Microwave Repairs",
      description: "Heating problems, broken buttons, and power issues handled safely and fast.",
      icon: FireIcon,
      features: ["Heating Problems", "Button Repairs", "Power Issues", "Door Fixes"]
    },
    {
      title: "AC Repairs",
      description: "Reliable summer cooling, gas refills, servicing, and leak fixes to beat Bareilly heat.",
      icon: BoltIcon,
      features: ["Cooling Issues", "Gas Refills", "Leak Fixes", "Regular Service"]
    },
    {
      title: "Gas Stove Repairs",
      description: "Burner problems, gas leaks, or ignition faults are checked by trained pros.",
      icon: FireIcon,
      features: ["Burner Issues", "Gas Leaks", "Ignition Faults", "Safety Checks"]
    },
    {
      title: "Geyser Repairs",
      description: "Instant water heater service and element replacement for hot water anytime.",
      icon: BeakerIcon,
      features: ["Element Repairs", "Thermostat Issues", "Installation", "Safety Checks"]
    },
    {
      title: "TV Repairs",
      description: "Fix picture, sound, or display issues without long downtime or confusion.",
      icon: TvIcon,
      features: ["Picture Issues", "Sound Problems", "Display Fixes", "Smart TV Support"]
    },
    {
      title: "Chimney Repairs",
      description: "Chimney cleaning, motor issues, and smoke leakage solutions for healthy kitchens.",
      icon: HomeIcon,
      features: ["Motor Issues", "Smoke Leakage", "Deep Cleaning", "Filter Change"]
    },
    {
      title: "Cooler Repairs",
      description: "Popular Bareilly cooling solution repaired for smooth airflow and fresh summer comfort.",
      icon: WrenchScrewdriverIcon,
      features: ["Motor Repairs", "Pump Issues", "Pad Replacement", "Regular Service"]
    },
    {
      title: "Hard Water Solutions",
      description: "Stop damage to washing machines and RO units with proper descaling and service.",
      icon: BeakerIcon,
      features: ["Descaling", "Filter Change", "Maintenance", "Performance Check"]
    }
  ]

  const faqs = [
    {
      question: "What types of house appliance repairs are available in Bareilly?",
      answer: "EzyHelpers offers complete house appliance repairs in Bareilly for refrigerators, washing machines, microwaves, air conditioners, geysers, gas stoves, fans, and more. Whether your appliance has stopped working or is showing signs of a problem, our skilled home appliance technicians in Bareilly provide reliable same-day repair services with genuine parts and proper tools."
    },
    {
      question: "How fast can I get a home appliance technician in Bareilly?",
      answer: "With EzyHelpers, you can get a verified home appliance technician in Bareilly within 2 hours. We offer same-day appliance repair services for urgent issues. Our team responds quickly and arrives fully equipped to repair everything from fridges and washing machines to ACs and geysers."
    },
    {
      question: "What kinds of kitchen appliances do you repair?",
      answer: "We repair a variety of kitchen appliances, including gas stoves, chimneys, microwaves, and RO water purifiers. Whether it's burner problems, chimney smoke leaks, or broken heating elements, our technicians offer complete kitchen appliance solutions."
    },
    {
      question: "Can you help with emergency appliance repairs in Bareilly?",
      answer: "Yes, we offer emergency appliance repair service in Bareilly. Whether it's a sudden fridge breakdown or a geyser failure at night, our technicians respond quickly to restore your appliance."
    },
    {
      question: "Can I schedule a home appliance repair at a convenient time in Bareilly?",
      answer: "Yes, EzyHelpers allows flexible scheduling for appliance repair in Bareilly. You can choose your preferred day and time, and our technician will arrive accordingly with all necessary tools and parts."
    },
    {
      question: "Do you offer repair services for both new and old appliances?",
      answer: "Yes, we repair both new and old appliances in Bareilly. Our home appliance technicians are skilled in handling outdated models as well as the latest smart appliances, providing safe and lasting solutions."
    },
    {
      question: "What happens if an appliance can't be repaired immediately?",
      answer: "If an appliance needs additional parts or time, our technician will inform you clearly. We prioritise transparency and will schedule a quick follow-up visit to complete the repair at your convenience."
    },
    {
      question: "Can I get a multi-appliance repair service in a single visit?",
      answer: "Yes, you can request repairs for multiple appliances in a single visit in Bareilly. Just let us know in advance, and we will send a technician prepared to handle multiple tasks."
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