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
  title: 'Home Appliance Repair Services | Expert Technicians | Ezy',
  description: 'Professional home appliance repair services for washing machines, fridges, ACs & more. Expert technicians with genuine parts, serving homes across India.',
  keywords: 'Home Appliance Repair Services, appliance repair, washing machine repair, refrigerator repair, AC repair, expert technicians',
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
      description: "Expert refrigerator technicians offer fast, reliable repair for all major problems, ensuring your fridge works efficiently.",
      icon: BeakerIcon,
      features: ["Cooling Issues", "Gas Leaks", "Temperature Control", "All Brands"]
    },
    {
      title: "Washing Machine Repair", 
      description: "Quick and effective repair services for top-load, front-load, and semi-automatic models.",
      icon: SparklesIcon,
      features: ["Drainage Problems", "Spin Cycle Errors", "Motor Faults", "All Models"]
    },
    {
      title: "Microwave Oven Repair",
      description: "Handle all types of oven repairs, including electrical malfunctions and component failures.",
      icon: FireIcon,
      features: ["Uneven Heating", "Turntable Issues", "Panel Replacement", "All Brands"]
    },
    {
      title: "Air Conditioner Repair",
      description: "AC repair experts handle all split and window units with quick, local service.",
      icon: BoltIcon,
      features: ["Gas Refills", "Cooling Issues", "Installation", "Maintenance"]
    },
    {
      title: "Gas Stove Repair",
      description: "Skilled technicians deliver fast and safe repairs to restore your gas stove's performance.",
      icon: FireIcon,
      features: ["Burner Ignition", "Gas Leakage", "Safety Checks", "Performance"]
    },
    {
      title: "Geyser Repair",
      description: "Professionals replace faulty heating elements and thermostats to get your geyser working again.",
      icon: BeakerIcon,
      features: ["Heating Elements", "Thermostats", "Temperature Fix", "Hot Water"]
    },
    {
      title: "TV Repair",
      description: "Efficient TV repair solutions across all major brands and models for any issues.",
      icon: TvIcon,
      features: ["Screen Issues", "Audio Problems", "Power Issues", "All Brands"]
    },
    {
      title: "Chimney Repair",
      description: "Repair suction motors, clean filters, and restore airflow performance for cleaner kitchen.",
      icon: HomeIcon,
      features: ["Suction Motors", "Filter Cleaning", "Airflow", "Kitchen Safety"]
    }
  ]

  const faqs = [
    {
      question: "How does the on-demand home appliance repair service work?",
      answer: "You can easily book a home appliance repair technician online or by phone. Simply describe the issue to our customer support representative and select a convenient time slot. A trained appliance repair technician will visit your home, inspect the faulty device, identify the problem, and perform the repair using the right tools and genuine parts, all without requiring you to transport the appliance."
    },
    {
      question: "How soon can I get a home appliance repair technician?",
      answer: "We offer same-day and emergency home appliance repair services depending on technician availability in your area. During the booking process, you can check real-time availability and select a preferred time for a quick and convenient fix."
    },
    {
      question: "What appliances do you repair?",
      answer: "Our home appliance repairers handle a wide range of appliances, including refrigerators, washing machines, air conditioners, microwaves, ovens, dishwashers, geysers, kitchen chimneys, and televisions. We service all major brands and models with expertise in both common and complex issues."
    },
    {
      question: "How much do appliance repairs cost?",
      answer: "The cost depends on the type of appliance, the complexity of the issue, and the parts required. We offer upfront pricing and free diagnosis. You'll receive a clear and transparent quote before any work is done."
    },
    {
      question: "Do you provide same-day appliance repair?",
      answer: "Yes, we provide same-day home appliance repair services for urgent problems like refrigerator breakdowns, AC malfunctions, or washing machine issues. For faster assistance, contact us early in the day to schedule your repair."
    },
    {
      question: "Do you repair all appliance brands?",
      answer: "Yes, we repair appliances from all major manufacturers, including Samsung, LG, Whirlpool, Godrej, Bosch, IFB, and many others. Our appliance repair technicians are trained across multiple brand models."
    },
    {
      question: "What areas do you cover for appliance repair?",
      answer: "Our home appliance repair services are available across multiple cities and suburbs. Just search for \"appliance repair technician near me\" to check coverage and book a reliable service provider in your area."
    },
    {
      question: "Can you repair appliances at my home?",
      answer: "Yes, we provide convenient doorstep appliance repair. Our technicians bring necessary tools and spare parts for on-site service, eliminating the need to carry your appliance to a service centre."
    },
    {
      question: "How do I know if my appliance needs repair or replacement?",
      answer: "Our expert technicians assess the appliance thoroughly and give honest recommendations. Depending on the appliance's condition, age, and problem severity, we help you decide whether a cost-effective repair or replacement is best."
    },
    {
      question: "Do you use genuine spare parts for repairs?",
      answer: "Yes, we use genuine and quality spare parts sourced from authorised suppliers to ensure proper functionality and long-lasting results after repair."
    },
    {
      question: "Can you repair old or vintage appliances?",
      answer: "We can often repair older or discontinued appliances if compatible parts are available. Our technicians have experience with vintage models and can suggest suitable alternatives if original components are no longer manufactured."
    },
    {
      question: "What should I do before the technician arrives?",
      answer: "Please clear the area around the appliance, ensure easy access, and note any error codes or specific symptoms. Having your purchase invoice or warranty details handy can also be useful during the service."
    },
    {
      question: "Do you provide emergency appliance repair services?",
      answer: "Yes, we handle emergency repairs for critical situations like refrigerator failures, AC issues during hot weather, or any major appliance malfunctions affecting your daily life."
    },
    {
      question: "How do I get a quote for appliance repair?",
      answer: "You can reach out to us with your appliance type and issue description to get an initial estimate. After diagnosis, our technician will provide an accurate quote based on the repair needs."
    },
    {
      question: "Do you offer appliance installation services?",
      answer: "Yes, we offer installation services for new appliances, including proper setup, safe connections, and performance checks to ensure everything runs smoothly from day one."
    },
    {
      question: "How do I know the home appliance technician is qualified and trustworthy?",
      answer: "All our home appliance repairers are background-verified and certified professionals. They are trained to handle different appliances and brands with expertise and professionalism."
    },
    {
      question: "What happens if the appliances can't be repaired on-site?",
      answer: "If on-site repair is not possible due to the nature of the issue or lack of required parts, the technician will explain the situation and suggest next steps. This may include a follow-up visit or carrying the appliance to a workshop if necessary."
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