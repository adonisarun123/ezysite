'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  CommandLineIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  CubeIcon
} from '@heroicons/react/24/outline'

export default function CarpentersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Carpenters", url: "https://ezyhelpers.com/services/carpenters" }
  ]

  const carpenterServices = [
    {
      title: "Custom Furniture Making",
      description: "Design unique beds, tables, sofas, and wardrobes crafted to match your style and room dimensions.",
      icon: CubeIcon,
      features: ["Custom Design", "Quality Materials", "Perfect Fit", "Unique Style"]
    },
    {
      title: "Modular Kitchen & Wardrobe",
      description: "Transform your interiors with space-saving modular installations from measurement to setup.",
      icon: HomeIcon,
      features: ["Space Saving", "Modern Design", "Complete Setup", "Quality Finish"]
    },
    {
      title: "Furniture Repair & Polishing",
      description: "Extend the life of your wooden furniture with top-notch repair and polishing services.",
      icon: SparklesIcon,
      features: ["Restore Structure", "Professional Polish", "Extend Life", "Like New Look"]
    },
    {
      title: "Door & Window Fixing",
      description: "Fix jammed doors or install new windows with smooth finishes and precise fittings.",
      icon: WrenchScrewdriverIcon,
      features: ["Precise Fitting", "Smooth Operation", "Quality Hardware", "Professional Install"]
    },
    {
      title: "Office & Commercial Carpentry",
      description: "Upgrade your office with tailored desks, counters, and shelves for enhanced functionality.",
      icon: BuildingOfficeIcon,
      features: ["Tailored Design", "Enhanced Function", "Professional Look", "Durable Build"]
    },
    {
      title: "Furniture Restoration",
      description: "Restore antique or damaged furniture to its former glory with expert craftsmanship.",
      icon: StarIcon,
      features: ["Antique Restoration", "Expert Craft", "Former Glory", "Fine Details"]
    }
  ]

  const faqs = [
    {
      question: "What types of carpentry services do you provide?",
      answer: "We offer custom furniture making, modular installations, furniture repair and polishing, door and window fixing, office carpentry, and furniture restoration services."
    },
    {
      question: "Do you provide custom furniture design?",
      answer: "Yes, we create custom furniture including beds, tables, sofas, and wardrobes designed to match your style and perfectly fit your room dimensions."
    },
    {
      question: "What materials do you use for carpentry work?",
      answer: "We use high-quality wood and materials that fit your budget while being strong enough to last long and look good. We discuss material options during consultation."
    },
    {
      question: "How do I get a quote for carpentry work?",
      answer: "After you tell us about your carpentry needs, we provide a clear, customized price estimate with no hidden charges so you know exactly what to expect."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, our skilled carpenters handle complete installation services including measurement, setup, and finishing for modular kitchens, wardrobes, and custom furniture."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/carpenters" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <CommandLineIcon className="h-5 w-5 text-yellow-200 mr-2" />
              <span className="text-sm font-semibold">Expert Carpentry Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Find the Best Carpenter
              <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-yellow-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Quality workmanship guaranteed! Expert carpenters for custom furniture, repairs, installations, and more with premium materials and precise craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-yellow-800 hover:bg-yellow-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Carpenter Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10K+</div>
                <div className="text-yellow-200 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5★</div>
                <div className="text-yellow-200 text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-yellow-200 text-sm">Quality Wood</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-yellow-200 text-sm">Support</div>
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
              Why Choose EzyHelpers for Carpenter Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted carpentry solutions backed by expertise, affordability, and hassle-free service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled Carpenters",
                description: "Personalized woodwork solutions from expert carpenters perfect for repairs, fittings, or new furniture",
                icon: ShieldCheckIcon,
                color: "text-yellow-600"
              },
              {
                title: "Affordable Pricing",
                description: "Quality carpentry at fair, transparent rates with no hidden costs, just honest pricing",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Quick Booking",
                description: "Book skilled carpenters easily by sharing requirements online or by phone",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "Reliable Service",
                description: "On-time arrivals, professional tools, and tidy completion without delays or follow-ups",
                icon: StarIcon,
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
              Our Comprehensive Carpenter Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive carpentry services tailored to your space, style, and budget with skilled local carpenters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpenterServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-yellow-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-yellow-600 mr-2" />
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
              How Our Carpenter Service Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple and hassle-free process to get quality carpentry work done
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Appointment",
                description: "Easily book your carpentry service online or by phone. Tell us what you need quickly and simply."
              },
              {
                step: "2",
                title: "Get Quote",
                description: "We provide a clear price estimate tailored to your job with no hidden charges."
              },
              {
                step: "3",
                title: "Schedule Visit",
                description: "Pick a convenient time and our skilled carpenter will arrive ready to begin work."
              },
              {
                step: "4",
                title: "Enjoy Professional Service",
                description: "Our carpenters finish the job carefully with quality tools for lasting results."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
              Common questions about our carpenter services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Get Connected with the Best Carpenter Near You!
            </h2>
            <p className="text-xl text-yellow-100 mb-10 leading-relaxed">
              Ready to fix, build, or improve your home with expert help? Don't wait; book the best carpenter today with EzyHelpers. Get quality work done on time and within your budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-yellow-800 hover:bg-yellow-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Carpenter Now
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