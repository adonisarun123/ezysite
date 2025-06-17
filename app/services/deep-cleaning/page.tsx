'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  SparklesIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  BeakerIcon,
  FireIcon,
  CubeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function DeepCleaningPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Deep Cleaning", url: "https://ezyhelpers.com/services/deep-cleaning" }
  ]

  const cleaningServices = [
    {
      title: "Full House Cleaning",
      description: "Thorough cleaning of every room, including dusting, vacuuming, mopping, and polishing for a fresh, hygienic space.",
      icon: HomeIcon,
      features: ["Every Room", "Dusting & Vacuuming", "Mopping & Polishing", "Fresh Space"]
    },
    {
      title: "Kitchen Deep Cleaning",
      description: "Degreasing stoves, scrubbing sinks, cleaning countertops and cabinets, restoring the heart of your home.",
      icon: FireIcon,
      features: ["Degreasing Stoves", "Scrub Sinks", "Clean Countertops", "Cabinet Cleaning"]
    },
    {
      title: "Bathroom Sanitization",
      description: "Deep cleaning of toilets, tiles, taps, and washbasins using hospital-grade disinfectants for germ-free bathrooms.",
      icon: BeakerIcon,
      features: ["Toilet Deep Clean", "Tile Cleaning", "Tap Sanitization", "Germ-Free"]
    },
    {
      title: "Living Room & Bedroom Cleaning",
      description: "Dusting fans and furniture, cleaning windows, vacuuming upholstery for spotless living spaces.",
      icon: CubeIcon,
      features: ["Dust Fans", "Clean Windows", "Vacuum Upholstery", "Spotless Rooms"]
    },
    {
      title: "Balcony & Utility Area Cleaning",
      description: "Removing dirt, stains, and clutter from balconies and utility areas, turning them into clean functional zones.",
      icon: SparklesIcon,
      features: ["Remove Dirt", "Stain Removal", "Clutter Clear", "Functional Zones"]
    },
    {
      title: "Post-Renovation Cleaning",
      description: "Detailed deep cleaning that removes construction dust, paint splatters, and debris for new homes.",
      icon: ShieldCheckIcon,
      features: ["Construction Dust", "Paint Removal", "Debris Clear", "New Home Ready"]
    },
    {
      title: "Sofa & Mattress Shampooing",
      description: "Fabric-safe shampooing to remove embedded dust, allergens, and stains, extending furniture life.",
      icon: StarIcon,
      features: ["Fabric Safe", "Dust Removal", "Allergen Free", "Extended Life"]
    },
    {
      title: "Appliance Cleaning",
      description: "Deep cleaning of fridges, ovens, chimney interiors, and fans for fully functional appliances.",
      icon: CheckCircleIcon,
      features: ["Fridge Cleaning", "Oven Deep Clean", "Chimney Interior", "Fan Cleaning"]
    }
  ]

  const faqs = [
    {
      question: "What does your house deep cleaning service include?",
      answer: "Our deep cleaning includes thorough cleaning of every room, kitchen degreasing, bathroom sanitization, living room and bedroom cleaning, balcony cleaning, and optional appliance cleaning."
    },
    {
      question: "Do you provide eco-friendly cleaning products?",
      answer: "Yes, we use safe, eco-friendly products and proven methods that are safe for your family and pets while delivering excellent cleaning results."
    },
    {
      question: "How long does a deep cleaning service take?",
      answer: "The duration depends on your home size and specific requirements. Typically, a 2BHK takes 4-6 hours, while larger homes may take longer. We provide time estimates during booking."
    },
    {
      question: "Are your cleaners background-verified?",
      answer: "Yes, all our house cleaners are background-checked, trained professionals who deliver safe, reliable deep cleaning with expert skills."
    },
    {
      question: "Do you guarantee satisfaction with your cleaning service?",
      answer: "Absolutely! We guarantee a deep clean you'll love. If you're not satisfied, we'll return and fix it, ensuring your home looks perfect."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/deep-cleaning" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <SparklesIcon className="h-5 w-5 text-cyan-200 mr-2" />
              <span className="text-sm font-semibold">Professional Deep Cleaning</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Professional House Cleaning
              <span className="block bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                for a Healthier Home
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-cyan-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Thorough, professional deep cleaning for every corner of your home. Safe, hygienic results using eco-friendly products with satisfaction guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-cyan-800 hover:bg-cyan-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Deep Cleaning
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call for Cleaning
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">20K+</div>
                <div className="text-cyan-200 text-sm">Homes Cleaned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-cyan-200 text-sm">Eco-Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                <div className="text-cyan-200 text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-cyan-200 text-sm">Support</div>
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
              Why Choose EzyHelpers for House Deep Cleaning?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert care, eco-friendly products, and guaranteed satisfaction with cleaning plans made just for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Cleaners",
                description: "Background-checked house cleaners deliver safe, reliable deep cleaning with expert skills",
                icon: ShieldCheckIcon,
                color: "text-cyan-600"
              },
              {
                title: "Custom Cleaning Plans",
                description: "Tailored cleaning plans for your specific home needs, covering everything perfectly",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Affordable Pricing",
                description: "Budget-friendly deep cleaning with transparent, clear prices and no hidden fees",
                icon: StarIcon,
                color: "text-yellow-600"
              },
              {
                title: "Satisfaction Guaranteed",
                description: "We guarantee a deep clean you'll love or we'll return and fix it perfectly",
                icon: SparklesIcon,
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
              Our House Deep Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of deep cleaning services to cover every part of your home with detail and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cleaningServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-cyan-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-cyan-600 mr-1.5" />
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

      {/* Who Is It For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Who Is It For?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our house cleaning services are ideal for various needs and lifestyles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Working Professionals",
                description: "Perfect for busy individuals who want a clean home without sacrificing work-life balance",
                icon: UserGroupIcon
              },
              {
                title: "Families for Special Occasions",
                description: "Ideal for households needing extra help to get homes spotless and festive-ready",
                icon: StarIcon
              },
              {
                title: "Moving Tenants",
                description: "Great for renters moving in or out who want thorough cleaning for fresh spaces",
                icon: HomeIcon
              },
              {
                title: "Routine Maintenance",
                description: "Suitable for those who want regular, reliable cleaning to keep homes fresh and healthy",
                icon: ClockIcon
              }
            ].map((target, index) => {
              const IconComponent = target.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-cyan-50 border border-cyan-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-cyan-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {target.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {target.description}
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
              How to Book Our Home Deep Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Booking your house cleaning services with EzyHelpers is easy and convenient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us What You Need",
                description: "Share your deep cleaning needs and preferred date through our easy online form"
              },
              {
                step: "2",
                title: "Get a Clear Quote",
                description: "We'll send you fair and transparent pricing based on your home size and cleaning tasks"
              },
              {
                step: "3",
                title: "Confirm Your Booking",
                description: "Approve the quote and book your cleaning appointment at a convenient time"
              },
              {
                step: "4",
                title: "Sit Back and Relax",
                description: "Our expert house cleaners will make your home deeply clean and fresh"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
              Common questions about our deep cleaning services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Ready for a Clean, Healthy Home Without the Stress?
            </h2>
            <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
              Let EzyHelpers take care of your deep cleaning needs with trusted experts, safe products, and easy booking. Just a fresh, sparkling home waiting for you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-cyan-800 hover:bg-cyan-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Deep Cleaning Today
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