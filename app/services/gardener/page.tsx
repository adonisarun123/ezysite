import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  GlobeAltIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  SparklesIcon,
  SunIcon,
  BeakerIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Gardener in Bangalore | Plant Care & Maintenance',
  description: 'Hire gardeners in Bangalore for plant care and garden maintenance. Watering, trimming, and seasonal care.',
  keywords: 'gardener bangalore, garden maintenance bangalore, plant care bangalore, terrace garden bangalore',
}

export default function GardenerPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Gardener", url: "https://ezyhelpers.com/services/gardener" }
  ]

  const gardenerServices = [
    {
      title: "Set Up a New Garden",
      description: "Turn unused areas into beautiful green spaces with site evaluation, plant selection, and complete installation.",
      icon: SunIcon,
      features: ["Site Design", "Plant Selection", "Complete Setup", "Ongoing Care"]
    },
    {
      title: "Garden Makeover",
      description: "Refresh and reorganise your outdoor space with enhanced aesthetics and vibrant new plantings.",
      icon: SparklesIcon,
      features: ["Layout Redesign", "New Plants", "Decorative Elements", "Modern Upgrade"]
    },
    {
      title: "Garden Maintenance",
      description: "Routine care including weeding, pruning, fertilising, and pest control for healthy gardens.",
      icon: GlobeAltIcon,
      features: ["Regular Weeding", "Pruning & Trimming", "Fertilizing", "Pest Control"]
    },
    {
      title: "Lawn Care Services",
      description: "Professional lawn maintenance, including mowing, aeration, and seasonal care for lush greenery.",
      icon: CheckCircleIcon,
      features: ["Lawn Mowing", "Soil Aeration", "Seasonal Care", "Grass Health"]
    },
    {
      title: "Plant Care & Treatment",
      description: "Expert plant care, including watering schedules, disease treatment, and growth optimization.",
      icon: BeakerIcon,
      features: ["Watering Systems", "Disease Treatment", "Growth Care", "Plant Health"]
    },
    {
      title: "Seasonal Planting",
      description: "Seasonal flower and shrub planting to keep your garden vibrant and colorful year-round.",
      icon: StarIcon,
      features: ["Seasonal Flowers", "Shrub Planting", "Color Planning", "Year-round Beauty"]
    }
  ]

  const faqs = [
    {
      question: "Can I book a gardener for one-time garden cleaning or planting?",
      answer: "Yes, you can hire a gardener for one-time services like garden cleaning, new plant installation, or seasonal garden prep. It’s perfect for those who need help occasionally or want a quick garden refresh before festivals or events."
    },
    {
      question: "Do your gardeners help with plant selection for Indian weather?",
      answer: "Absolutely. Our gardeners suggest plants based on your region’s climate, sunlight, soil type, and your preferences. Whether you want flowering plants, herbs, or low-maintenance greens, we help you pick the best ones for Indian conditions."
    },
    {
      question: "Can I customise the gardening service based on my space?",
      answer: "Definitely. Whether you want a kitchen garden, flower bed, or peaceful Zen-style layout, we customise garden design, plants, and setup to match your space, lifestyle, and vision, be it balcony, terrace, or lawn."
    },
    {
      question: "Do your gardening services support organic gardening?",
      answer: "Yes, we promote chemical-free gardening using organic manure, composting, natural pest control, and eco-friendly soil enhancers. It’s safe for your family, pets, and the environment."
    },
    {
      question: "How often do I really need a gardener at home?",
      answer: "It depends on your garden size and the season. During active growing months, a weekly or bi-weekly visit helps keep things in shape. In cooler or off-seasons, monthly visits are usually enough. Regular care keeps your plants healthy and your garden looking fresh without becoming overgrown."
    },
    {
      question: "Do you offer lawn mowing and grass cutting services?",
      answer: "Yes, our garden maintenance includes lawn mowing, grass trimming, fertilization, weed control, and edging. We help keep your lawn neat, green, and ready for every season."
    },
    {
      question: "What common garden problems can your gardeners solve?",
      answer: "Our expert home gardeners fix issues like plant pests, leaf yellowing, fungal infections, overgrowth, dry soil, and poor drainage. We restore your garden’s health with safe, effective, and long-lasting solutions."
    },
    {
      question: "How do I take care of my plants between gardener visits?",
      answer: "We provide simple DIY garden care tips like watering schedules, pruning methods, plant feeding, and soil aeration. These help you maintain your garden's health and beauty between our gardener’s visits."
    },
    {
      question: "Do you offer balcony and terrace gardening services? What’s included?",
      answer: "Yes, EzyHelpers offers complete balcony and terrace gardening solutions. Whether you live in an apartment or have limited outdoor space, our gardeners can design and maintain beautiful green areas. Services include soil preparation, planter arrangements, vertical stands, waterproofing suggestions, plant selection (flowers, veggies, or decoratives), and ongoing care. We help you create a lush, functional garden even in the heart of the city."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/gardener" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <GlobeAltIcon className="h-5 w-5 text-green-200 mr-2" />
              <span className="text-sm font-semibold">Expert Garden Care</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
              Bring Your Garden to Life
              <span className="block bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                with Expert Care
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-green-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Professional home gardener services for beautiful, healthy outdoor spaces. From new setups to regular care, we make garden upkeep easy and affordable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-green-800 hover:bg-green-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Your Gardener
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call for Garden Care
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5K+</div>
                <div className="text-green-200 text-sm">Gardens Maintained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                <div className="text-green-200 text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-green-200 text-sm">Organic Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-green-200 text-sm">Support</div>
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
              Why Choose EzyHelpers for Your Garden Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive garden care from trained professionals who understand your home’s outdoor needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled Gardeners",
                description: "Experienced gardeners manage planting, pruning, watering, and lawn care with expert attention.",
                icon: ShieldCheckIcon,
                color: "text-green-600"
              },
              {
                title: "Flexible Service Options",
                description: "Book weekly, monthly, or one-time visits, whatever suits your garden’s schedule best.",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "Transparent Pricing",
                description: "Upfront pricing with no surprises, get affordable, reliable gardening help every time.",
                icon: CheckCircleIcon,
                color: "text-emerald-600"
              },
              {
                title: "Complete Garden Care",
                description: "We handle mowing, trimming, weeding, and planting, your entire garden, professionally managed.",
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
              Services Provided by EzyHelpers' Home Gardener
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end gardener services tailored to your space, lifestyle, and preferences for gardens of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gardenerServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
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
                        <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
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

      {/* How to Book */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How to Book a Home Gardener with EzyHelpers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Booking your home gardener is quick and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Reach Out Easily",
                description: "Contact us by phone or through our simple online form. Our team listens to your gardening needs."
              },
              {
                step: "2",
                title: "Get a Custom Quote",
                description: "Tell us about your garden size, plants, and tasks needed. We'll provide a tailored quote."
              },
              {
                step: "3",
                title: "Choose Your Schedule",
                description: "Pick a date and time that works best for you with flexible scheduling options."
              },
              {
                step: "4",
                title: "Professional Garden Care",
                description: "Our skilled gardeners handle all tasks using the right tools and techniques for beautiful results."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* Garden Care Tips */}
      <section className="section-padding bg-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Things to Consider Before Booking Professional Gardeners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important points to keep in mind before booking gardening services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advance Booking & Access",
                description: "Please book at least 24 hours in advance and ensure clear access to the garden for smooth service",
                icon: ClockIcon
              },
              {
                title: "Pricing Considerations",
                description: "Charges depend on garden size and required services. Custom quotes provided for your specific needs",
                icon: CheckCircleIcon
              },
              {
                title: "Special Requests",
                description: "Have specific plants, organic care needs, or special instructions? Let us know ahead of time",
                icon: StarIcon
              }
            ].map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deep Care Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How EzyHelpers Keeps Your Garden Thriving – All Year Round
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed">
            <p>
              Maintaining a lush, healthy garden requires more than just watering and sunlight; it demands timely care and expert intervention. At EzyHelpers, we go beyond basic maintenance to tackle deeper garden issues that often go unnoticed.
            </p>
            <p>
              Our experienced gardeners regularly monitor plant health and provide preventive care to avoid major setbacks. Whether it's treating soil imbalances, controlling pest outbreaks naturally, or trimming overgrowth, our team ensures your garden stays balanced and beautiful.
            </p>
            <p>
              We focus on eco-friendly solutions like organic composting, smart mulching, and natural pest deterrents that support plant vitality without harming the environment. Our services also include seasonal plant care, helping you choose the right species for different weather conditions, and preparing your garden for monsoons, heatwaves, or frost.
            </p>
            <p>
              If your plants aren’t blooming or leaves are wilting, we diagnose the root cause, be it poor drainage, compacted soil, or lack of nutrients, and fix it with specialised treatments. From revitalising lawns to restoring flower beds, EzyHelpers provides comprehensive garden care that fits your lifestyle and local climate.
            </p>
            <p>
              Let us take the guesswork out of gardening. With EzyHelpers, you get professional support, ongoing maintenance, and a garden that’s healthy, green, and thriving every season.
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
              Ready to Make Your Garden Beautiful?
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Let EzyHelpers' expert gardeners handle everything for you! No more stress, no more hard work, just a green, healthy garden you can enjoy every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-green-800 hover:bg-green-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Your Gardener Today
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions to make home life easier.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrician Services</h3>
              <p className="text-gray-600 mb-4">Expert electricians for all your home wiring and appliance power needs.</p>
              <Link href="/services/electricians" className="text-green-700 font-semibold inline-flex items-center">Learn about Electrician Services <ArrowRightIcon className="h-4 w-4 ml-1" /></Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber Services</h3>
              <p className="text-gray-600 mb-4">Quick solutions for leaks, clogs, fittings, and water systems.</p>
              <Link href="/services/plumbers" className="text-green-700 font-semibold inline-flex items-center">Learn about Plumber Services <ArrowRightIcon className="h-4 w-4 ml-1" /></Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Painting Services</h3>
              <p className="text-gray-600 mb-4">Interior or exterior, get smooth, professional paintwork done fast.</p>
              <Link href="/services/painting" className="text-green-700 font-semibold inline-flex items-center">Learn about Painting Services <ArrowRightIcon className="h-4 w-4 ml-1" /></Link>
            </div>
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
              Common questions about our gardener services
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

      <Footer />
    </main>
  )
} 