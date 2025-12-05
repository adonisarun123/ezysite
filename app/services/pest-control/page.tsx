import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  SparklesIcon,
  BeakerIcon,
  BugAntIcon,
  FireIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Pest Control for Home in Bareilly - Safe & Effective',
  description: 'Book pest control for home in Bareilly to eliminate cockroaches, termites, rodents, and ants using safe, odourless, long-lasting treatments.',
  keywords: 'pest control bareilly, termite control bareilly, cockroach control bareilly, pest control service bareilly',
}

export default function PestControlPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Pest Control", url: "https://ezyhelpers.com/services/pest-control" }
  ]

  const pestServices = [
    {
      title: "Termite Control",
      description: "Protect your home's wood from termites with our complete, damage-preventing control services.",
      icon: BugAntIcon,
      features: ["Wood Protection", "Damage Prevention", "Complete Control", "Long Lasting"]
    },
    {
      title: "Monsoon Pest Prevention",
      description: "Special treatments prevent monsoon pests like cockroaches and mosquitoes from entering your home.",
      icon: SparklesIcon,
      features: ["Monsoon Ready", "Pest Prevention", "Safe Entry", "Full Protection"]
    },
    {
      title: "Grain Storage Pest Control",
      description: "Keep stored grains safe from insects and rodents with our effective traditional home solutions.",
      icon: ShieldCheckIcon,
      features: ["Grain Safety", "Insect Control", "Rodent Stop", "Safe Storage"]
    },
    {
      title: "Mosquito Control",
      description: "Safe, effective methods reduce mosquitoes, protecting your family from disease and irritation.",
      icon: BugAntIcon,
      features: ["Disease Stop", "Safe Methods", "Family Care", "Long Effect"]
    },
    {
      title: "Roach Killer",
      description: "Target stubborn cockroaches for a clean, hygienic kitchen and home environment.",
      icon: ExclamationTriangleIcon,
      features: ["Kitchen Clean", "Home Hygiene", "Full Control", "Safe Methods"]
    },
    {
      title: "Ant Exterminator",
      description: "Get rid of ant colonies quickly, keeping your food and home free from invaders.",
      icon: BugAntIcon,
      features: ["Colony Control", "Food Safety", "Quick Action", "Full Clear"]
    },
    {
      title: "Bug Exterminator",
      description: "Comprehensive solution clears your home of all crawling and flying bugs effectively.",
      icon: BugAntIcon,
      features: ["All Bugs", "Full Clear", "Safe Methods", "Long Effect"]
    },
    {
      title: "Rat Control",
      description: "Safely remove rats and mice, preventing disease and damage with our solutions.",
      icon: ExclamationTriangleIcon,
      features: ["Safe Remove", "Disease Stop", "Damage Block", "Full Control"]
    },
    {
      title: "Bed Bug Pest Control",
      description: "Our specialised service targets hidden bed bugs, ensuring your family a good night's sleep.",
      icon: BugAntIcon,
      features: ["Deep Clean", "Full Remove", "Safe Sleep", "Long Effect"]
    }
  ]

  const faqs = [
    {
      question: "Do you offer same-day pest services in Bareilly?",
      answer: "Yes, we offer same-day pest services in Bareilly. Our local, background-verified pest control experts respond quickly with effective solutions to eliminate pests and restore hygiene to your home without delay."
    },
    {
      question: "What types of pests do you treat in Bareilly homes?",
      answer: "We treat a wide range of pests in Bareilly homes, including termites, cockroaches, ants, mosquitoes, rats, mice, bed bugs, and general bugs, using safe and effective pest control treatments."
    },
    {
      question: "Do you handle cockroach infestations in Bareilly kitchens?",
      answer: "Yes, we provide specialised cockroach pest control in Bareilly, especially for kitchens. Our solutions are safe, fast-acting, and effective in eliminating roaches and keeping your kitchen hygienic."
    },
    {
      question: "What are the benefits of regular pest control in Bareilly?",
      answer: "Regular pest control in Bareilly prevents infestations, protects health, reduces allergies, and stops long-term damage to furniture and food. It keeps your home clean, safe, and stress-free all year round."
    },
    {
      question: "Is mosquito control available through EzyHelpers?",
      answer: "Yes, EzyHelpers provides mosquito control using safe methods that reduce mosquito breeding and protect your family from mosquito-borne diseases."
    },
    {
      question: "Do you treat ant infestations in homes?",
      answer: "Yes, we provide ant control service by targeting colonies and trails with safe, effective treatments that prevent them from returning."
    },
    {
      question: "How do you prevent pests from returning after treatment in Bareilly?",
      answer: "We prevent pest recurrence in Bareilly through targeted treatment, sealing entry points, hygiene tips, and follow-up services to maintain long-term pest-free conditions."
    },
    {
      question: "How often should I schedule pest control in Bareilly?",
      answer: "We recommend pest control every 3 to 6 months in Bareilly, depending on pest severity, season, and home conditions, to ensure ongoing protection."
    },
    {
      question: "Are your pest control chemicals safe for children and pets?",
      answer: "Yes, our pest control for homes uses child-safe and pet-friendly chemicals. We apply eco-friendly, odour-free treatments that are non-toxic and safe for kids, elderly people, and pets. Your family's health and safety are our top priority."
    },
    {
      question: "How do you identify pest entry points and prevent future infestations?",
      answer: "Our pest services in Bareilly include a full inspection to find pest entry points like wall gaps, drain outlets, or window cracks. We seal these areas and apply preventive barriers to stop pests from returning, ensuring long-term protection for your home."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/pest-control" />
      
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
              <ShieldCheckIcon className="h-5 w-5 text-green-200 mr-2" />
              <span className="text-sm font-semibold">Safe & Effective Pest Control</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Professional Pest Control
              <span className="block bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                for Your Home
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-green-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Protect your home and family with professional pest control in Bareilly that targets cockroaches, ants, mosquitoes, termites, and more. Our trained experts use safe, eco-friendly methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-green-800 hover:bg-green-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Pest Control Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call 080-31411776
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-green-200 text-sm">Homes Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-green-200 text-sm">Safe for Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">30-Day</div>
                <div className="text-green-200 text-sm">Post-Service Guarantee</div>
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
              Why Choose EzyHelpers for Pest Control?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trust, safety, and local expertise for your Bareilly home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled & Certified Team",
                description: "Our pest control experts are trained and certified to handle all types of pest problems safely",
                icon: ShieldCheckIcon,
                color: "text-green-600"
              },
              {
                title: "Safe Solutions",
                description: "We use eco-friendly, child and pet-safe products that effectively eliminate pests",
                icon: CheckCircleIcon,
                color: "text-blue-600"
              },
              {
                title: "Custom Treatment Plans",
                description: "Tailored pest control solutions based on your specific pest problems and home needs",
                icon: StarIcon,
                color: "text-yellow-600"
              },
              {
                title: "Complete Protection",
                description: "Comprehensive pest solutions with follow-up service and prevention tips",
                icon: BugAntIcon,
                color: "text-red-600"
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
              Our Pest Control Services in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete solutions to keep your home safe, clean, and pest-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pestServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1.5" />
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

      {/* Local Challenges */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Local Pest Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common pest problems in Bareilly homes and how we handle them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Monsoon Pests",
                description: "Special treatments to prevent monsoon-related pest invasions",
                icon: BugAntIcon
              },
              {
                title: "Food Storage",
                description: "Protect stored grains and food items from insects and rodents",
                icon: ShieldCheckIcon
              },
              {
                title: "Seasonal Changes",
                description: "Adapt pest control methods based on Bareilly's weather patterns",
                icon: SparklesIcon
              }
            ].map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <div key={index} className="bg-green-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
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
              How to Book Our Pest Control Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fast and stress-free booking process in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Pest Issue",
                description: "Tell us your pest type and the exact problem you are facing at home."
              },
              {
                step: "2",
                title: "Pick a Convenient Time",
                description: "Choose a specific day and time slot that suits your family schedule best."
              },
              {
                step: "3",
                title: "Expert Pest Control Visit",
                description: "Our verified professional arrives fully equipped for safe, effective treatments."
              },
              {
                step: "4",
                title: "Quality Service & Support",
                description: "We ensure satisfaction and offer follow-up help whenever you need it."
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

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our pest control services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Don't Let Pests Ruin Your Home's Comfort!
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Get your pest control handled fast and easily with EzyHelpers. Our trusted professionals solve problems quickly so you can enjoy a hassle-free, clean, and healthy home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-green-800 hover:bg-green-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Pest Control Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call 080-31411776
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
