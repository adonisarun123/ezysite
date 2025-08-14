import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Deep Cleaning Services in Bangalore | Home Sanitize',
  description: 'Deep cleaning services in Bangalore for full home hygiene. Includes kitchen, bathroom, and sofa cleaning by trained professionals with safe products.',
  keywords: 'deep cleaning services bangalore, home cleaning bangalore, bathroom cleaning bangalore, kitchen cleaning bangalore',
}

export default function DeepCleaningPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Deep Cleaning", url: "https://ezyhelpers.com/services/deep-cleaning" }
  ]

  const cleaningServices = [
    {
      title: "Living Room & Bedroom",
      description: "We deep clean sofas, floors, furniture, and fixtures for a fresh, dust-free environment.",
      icon: HomeIcon,
      features: ["Sofa Cleaning", "Floor Mopping", "Furniture Clean", "Dust Removal"]
    },
    {
      title: "Kitchen Deep Clean",
      description: "We degrease tiles, stovetops, cabinets, and sinks to ensure a hygienic, odor-free kitchen.",
      icon: FireIcon,
      features: ["Tile Cleaning", "Stove Degreasing", "Cabinet Clean", "Sink Scrubbing"]
    },
    {
      title: "Complete Bathroom Cleaning",
      description: "We scrub tiles, taps, toilets, and mirrors to effectively remove stains and bacterial buildup.",
      icon: BeakerIcon,
      features: ["Tile Scrubbing", "Tap Cleaning", "Toilet Clean", "Mirror Polish"]
    },
    {
      title: "Balcony & Terrace",
      description: "We clean railings, grills, cobwebs, and walls for tidy outdoor relaxation areas.",
      icon: SparklesIcon,
      features: ["Railing Clean", "Grill Wash", "Cobweb Remove", "Wall Clean"]
    },
    {
      title: "Study & Home Office",
      description: "Dusting desks, chairs, bookshelves, and electronics for a clean and productive workspace.",
      icon: CubeIcon,
      features: ["Desk Clean", "Chair Dust", "Shelf Clean", "Electronics"]
    },
    {
      title: "Wardrobe & Storage",
      description: "Our home cleaners clean inside and outside of wardrobes and cabinets to remove dust and allergens.",
      icon: HomeIcon,
      features: ["Inside Clean", "Outside Clean", "Dust Remove", "Allergen Free"]
    },
    {
      title: "Pooja Room Cleaning",
      description: "Respectful cleaning of idols, shelves, and floors using gentle, non-abrasive products.",
      icon: StarIcon,
      features: ["Idol Clean", "Shelf Clean", "Floor Mop", "Gentle Care"]
    },
    {
      title: "Utility Areas",
      description: "Deep cleaning laundry zones, washing machines, and sinks for a clutter-free, functional space.",
      icon: CheckCircleIcon,
      features: ["Laundry Area", "Machine Clean", "Sink Clean", "Declutter"]
    },
    {
      title: "Post-Renovation Clean",
      description: "Scrubs away cement, paint, and dust after renovation or before you shift to a new home.",
      icon: ShieldCheckIcon,
      features: ["Cement Clean", "Paint Remove", "Dust Clear", "Move-in Ready"]
    },
    {
      title: "Sanitization Service",
      description: "We clean and sanitize frequently touched surfaces using strong disinfectants for a germ-free home.",
      icon: BeakerIcon,
      features: ["Surface Clean", "Disinfection", "Germ Kill", "Safe Home"]
    }
  ]

  const faqs = [
    {
      question: "How often should I book home cleaning in Bangalore?",
      answer: "It depends on your home and lifestyle. For working professionals with less time for regular cleaning, monthly deep cleaning is ideal. Families with kids or allergy concerns may benefit from services every two weeks. For general upkeep, a thorough cleaning every 3 to 4 months helps maintain hygiene and freshness."
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer: "Yes, we use eco-friendly and non-toxic cleaning products that are completely safe for households with kids, elderly members, and pets. Our goal is to ensure deep cleanliness without compromising your family's safety or indoor air quality."
    },
    {
      question: "Do you clean windows and balconies in Bangalore homes?",
      answer: "Yes, we clean windows, glass panels, grills, and balcony spaces. Bangalore's dust and pollution can make these areas look dull. Our service brings back shine and cleanliness so your windows are spotless and balconies are inviting again."
    },
    {
      question: "Do you offer apartment deep cleaning services?",
      answer: "Yes, we specialise in deep cleaning services for apartments, gated communities, and high-rise buildings in Bangalore. Our team uses compact equipment suited for apartment layouts and ensures every corner is cleaned, including balconies and shared areas."
    },
    {
      question: "How long does a deep cleaning take?",
      answer: "Deep cleaning typically takes 4 to 8 hours, depending on your home's size and the depth of cleaning required. If your home hasn't been cleaned in a while, or if it's a post-renovation service, it may take a bit longer for the best results."
    },
    {
      question: "What is the difference between regular house cleaning and deep cleaning?",
      answer: "Regular house cleaning typically involves basic upkeep like dusting, sweeping, and wiping surfaces. Deep cleaning, on the other hand, reaches under furniture, scrubs stubborn stains, disinfects surfaces, and targets hidden dust and grime. It's a more thorough, detailed, and hygienic cleaning solution."
    },
    {
      question: "Is deep cleaning more expensive than regular cleaning?",
      answer: "Yes, deep cleaning usually costs more than regular cleaning because it takes more time, involves stronger tools and products, and covers more areas in detail. It's designed to deliver long-lasting cleanliness and better hygiene."
    },
    {
      question: "What are the benefits of deep cleaning your house?",
      answer: "Deep cleaning removes layers of dust, allergens, and bacteria that regular cleaning misses. It improves air quality, reduces health risks, and makes your home feel fresher. It also helps protect furniture and appliances, extending their lifespan with proper care."
    },
    {
      question: "Can I book deep cleaning just for one room or area?",
      answer: "Yes, you can choose to clean specific areas like only the kitchen, bathrooms, or balconies. We offer flexible plans based on your needs."
    },
    {
      question: "Do I need to be at home during the deep cleaning service?",
      answer: "Not necessarily. Many of our clients go about their day while we handle the cleaning professionally and securely. Our background-verified staff ensures secure and professional service, whether you're present or not."
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