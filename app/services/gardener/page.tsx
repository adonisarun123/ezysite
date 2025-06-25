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
  title: 'Home Gardener Services | Landscaping Experts | EzyHelpers',
  description: 'Professional home gardener services for lawn care, plant maintenance & landscaping. Expert gardeners available in residential neighbourhoods near you.',
  keywords: 'Home Gardener Services, landscaping, lawn care, plant maintenance, garden maintenance, professional gardeners',
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
      description: "Refresh and reorganize your outdoor space with enhanced aesthetics and vibrant new plantings.",
      icon: SparklesIcon,
      features: ["Layout Redesign", "New Plants", "Decorative Elements", "Modern Upgrade"]
    },
    {
      title: "Garden Maintenance",
      description: "Routine care including weeding, pruning, fertilizing, and pest control for healthy gardens.",
      icon: GlobeAltIcon,
      features: ["Regular Weeding", "Pruning & Trimming", "Fertilizing", "Pest Control"]
    },
    {
      title: "Lawn Care Services",
      description: "Professional lawn maintenance including mowing, aeration, and seasonal care for lush greenery.",
      icon: CheckCircleIcon,
      features: ["Lawn Mowing", "Soil Aeration", "Seasonal Care", "Grass Health"]
    },
    {
      title: "Plant Care & Treatment",
      description: "Expert plant care including watering schedules, disease treatment, and growth optimization.",
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
      question: "What gardening services do you provide?",
      answer: "We provide complete garden care including new garden setup, garden makeovers, routine maintenance, lawn care, plant care, and seasonal planting services."
    },
    {
      question: "Do you offer both one-time and regular garden services?",
      answer: "Yes, we offer flexible service options including one-time garden setup, weekly, monthly, or seasonal maintenance to suit your garden care needs."
    },
    {
      question: "What does garden maintenance include?",
      answer: "Our garden maintenance includes weeding, pruning and trimming, fertilizing, pest control, soil aeration, watering, and seasonal planting for healthy gardens."
    },
    {
      question: "Do you help with garden design and plant selection?",
      answer: "Yes, our gardeners evaluate sunlight, soil type, and space to plan garden layout and choose ideal flowers, shrubs, and trees based on your preferences."
    },
    {
      question: "How far in advance should I book gardening services?",
      answer: "We recommend booking at least 24 hours in advance for preferred slot availability. Please ensure clear garden access for smooth and timely service."
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
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
              Comprehensive garden care with trained professionals who understand your unique gardening needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled Gardeners",
                description: "Trained gardeners expertly handle planting, pruning, watering, and lawn care for year-round beauty",
                icon: ShieldCheckIcon,
                color: "text-green-600"
              },
              {
                title: "Flexible Service Options",
                description: "Choose weekly, monthly, or one-time gardening help with flexible scheduling for convenience",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "Transparent Pricing",
                description: "Affordable, high-quality garden care with clear pricing and no hidden fees",
                icon: CheckCircleIcon,
                color: "text-emerald-600"
              },
              {
                title: "Complete Garden Care",
                description: "From mowing lawns to trimming hedges and planting flowers, we manage all essential tasks",
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
                description: "Our skilled gardeners handle all tasks using right tools and techniques for beautiful results."
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
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
      
      <Footer />
    </main>
  )
} 