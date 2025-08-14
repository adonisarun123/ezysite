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
  CubeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sofa Cleaning Services in Bareilly - Stain & Odour Removal',
  description: 'Book sofa cleaning in Bareilly for all types of fabric. Remove stains, dust, and bad smells with eco-friendly products and expert handling.',
  keywords: 'sofa cleaning bareilly, sofa dry cleaning bareilly, sofa shampooing bareilly, sofa stain removal bareilly',
}

export default function SofaCleaningPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Sofa Cleaning", url: "https://ezyhelpers.com/services/sofa-cleaning" }
  ]

  const cleaningServices = [
    {
      title: "Fabric Sofa Cleaning",
      description: "Gentle deep cleaning for all fabrics, removing dirt and germs.",
      icon: SparklesIcon,
      features: ["Deep Clean", "Dirt Remove", "Germ Kill", "Fabric Safe"]
    },
    {
      title: "Leather Sofa Care",
      description: "Special conditioning to prevent cracks and maintain shine.",
      icon: BeakerIcon,
      features: ["Condition", "Crack Stop", "Shine Keep", "Long Life"]
    },
    {
      title: "Stain Removal",
      description: "Tough removal for tea, coffee, grease, and food stains.",
      icon: FireIcon,
      features: ["Tea Stains", "Coffee Marks", "Grease Gone", "Food Clean"]
    },
    {
      title: "Odor Treatment",
      description: "Clears pet smells, food odors, and musty damp sofa smells.",
      icon: SparklesIcon,
      features: ["Pet Smell", "Food Odor", "Damp Fresh", "Clean Air"]
    },
    {
      title: "Sanitization",
      description: "Kills 99% of germs, ensuring cleaner and healthier sofa seating areas.",
      icon: ShieldCheckIcon,
      features: ["Germ Kill", "Clean Seat", "Health Safe", "Fresh Use"]
    },
    {
      title: "Cushion & Pillow Cleaning",
      description: "Restores comfort and hygiene to daily-use cushions and pillows.",
      icon: HomeIcon,
      features: ["Comfort Fix", "Clean Fresh", "Daily Use", "Hygiene Plus"]
    },
    {
      title: "Upholstery Protection Treatment",
      description: "Adds stain-resistant coating to protect fabric and ease maintenance.",
      icon: ShieldCheckIcon,
      features: ["Stain Block", "Easy Clean", "Fabric Save", "Low Care"]
    },
    {
      title: "Dust & Dirt Deep Cleaning",
      description: "Removes embedded dust from Bareilly's polluted air.",
      icon: SparklesIcon,
      features: ["Dust Gone", "Deep Clean", "Air Fresh", "Pure Sit"]
    },
    {
      title: "Festival Preparation Cleaning",
      description: "Pre-Diwali/wedding special for guest-ready furniture.",
      icon: StarIcon,
      features: ["Event Ready", "Guest Fresh", "Special Clean", "Perfect Look"]
    },
    {
      title: "Pet Hair & Dander Removal",
      description: "Eliminates hair, dander, and pet odors completely.",
      icon: SparklesIcon,
      features: ["Hair Gone", "Dander Free", "Odor Clear", "Fresh Sofa"]
    }
  ]

  const sofaTypes = [
    "Fabric Sofas",
    "Leather Sofas",
    "Velvet & Delicate Fabric Sofas",
    "Rexine & Synthetic Sofas",
    "L-Shape & Corner Sofas",
    "Recliner & Electric Sofas",
    "Wooden Frame Sofas",
    "Antique & Vintage Sofas",
    "Office & Commercial Seating",
    "Bean Bags & Floor Cushions",
    "Dining Chair Upholstery",
    "Sofa Beds & Convertible Sofas"
  ]

  const faqs = [
    {
      question: "What is included in home deep cleaning in Bareilly?",
      answer: "Home deep cleaning in Bareilly includes dusting, mopping, bathroom and kitchen cleaning, sofa and mattress cleaning, sanitisation, and more. It ensures every area, from living rooms to pooja rooms, is hygienically cleaned for a healthier living space."
    },
    {
      question: "Why should I choose professional cleaning services in Bareilly?",
      answer: "Professional cleaning services in Bareilly like EzyHelpers offer trained cleaners, allergy-safe products, and high-quality tools to remove hidden dirt, allergens, and bacteria, making your home safer and more comfortable for your family."
    },
    {
      question: "Do you provide same-day deep cleaning services in Bareilly?",
      answer: "Yes, EzyHelpers offers same-day home deep cleaning in Bareilly, ideal for urgent needs like guest visits, post-events, or quick sanitation requirements. Our team responds within 2 hours of your booking."
    },
    {
      question: "Are your house cleaners background-verified and trained?",
      answer: "Yes, our professional cleaning services in Bareilly only include background-checked and trained cleaners who use safe techniques and follow hygiene protocols for a stress-free and reliable experience."
    },
    {
      question: "Do you offer kitchen deep cleaning in Bareilly?",
      answer: "Yes, our professional cleaning services in Bareilly include kitchen deep cleaning that removes grease, food stains, and bacteria from countertops, appliances, and cabinets. We make your cooking space safe, hygienic, and odor-free."
    },
    {
      question: "Do you offer post-festival home cleaning in Bareilly?",
      answer: "Yes, we offer post-Holi, Diwali, and wedding cleanups in Bareilly. Our team removes colour stains, oil, and mess, restoring your home's original shine after celebrations."
    },
    {
      question: "How often should I book home deep cleaning in Bareilly?",
      answer: "It's recommended to book professional home deep cleaning every 3 to 6 months in Bareilly to keep your home hygienic, fresh-smelling, and free of dust, pests, and illness-causing bacteria."
    },
    {
      question: "What is included in bathroom deep cleaning in Bareilly?",
      answer: "Bathroom deep cleaning includes scrubbing tiles, disinfecting fittings, removing stains, cleaning mirrors, and clearing drains. Our team ensures germ-free and sparkling clean bathrooms."
    },
    {
      question: "How long does a deep cleaning session take?",
      answer: "Depending on the size of your home and selected services, a deep cleaning session in Bareilly can take between 3 to 6 hours. Larger homes or post-construction jobs may take longer."
    },
    {
      question: "Do you clean glass windows and mirrors?",
      answer: "Yes, we provide streak-free glass and window cleaning in Bareilly. It's included in our standard and deep cleaning packages for a brighter, clearer home."
    },
    {
      question: "Can I book home deep cleaning in Bareilly for weekends or holidays?",
      answer: "Yes, you can easily schedule home deep cleaning in Bareilly on weekends or public holidays. We understand your busy schedule and make sure you get cleaning help when it suits you best."
    },
    {
      question: "Can I choose which rooms or areas to clean instead of the whole house?",
      answer: "Absolutely. With our professional cleaning services in Bareilly, you can choose to clean only specific rooms like the kitchen or bathrooms or even focus on certain items like windows or sofas."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/sofa-cleaning" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <SparklesIcon className="h-5 w-5 text-teal-200 mr-2" />
              <span className="text-sm font-semibold">Professional Sofa Cleaning</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Professional Sofa Cleaning
              <span className="block bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                at Your Home
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Is your sofa looking dull, dusty, or stained? Our skilled professionals deliver deep sofa cleaning at home in Bareilly, restoring freshness and hygiene.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-teal-800 hover:bg-teal-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Sofa Cleaning Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call for Same-Day Service
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-teal-200 text-sm">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Same-Day</div>
                <div className="text-teal-200 text-sm">Service Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-teal-200 text-sm">Sofas Cleaned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Safe & Eco</div>
                <div className="text-teal-200 text-sm">Friendly Products</div>
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
              Why Choose EzyHelpers for Sofa Cleaning?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EzyHelpers is your reliable choice for sofa cleaning at home in Bareilly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Same-Day Service",
                description: "Quick response and flexible scheduling for your convenience",
                icon: ClockIcon,
                color: "text-teal-600"
              },
              {
                title: "Safe Products",
                description: "Eco-friendly cleaning solutions safe for family and pets",
                icon: ShieldCheckIcon,
                color: "text-green-600"
              },
              {
                title: "Expert Cleaners",
                description: "Trained professionals with experience in all types of fabrics",
                icon: StarIcon,
                color: "text-yellow-600"
              },
              {
                title: "Complete Care",
                description: "Thorough cleaning, stain removal, and protection treatment",
                icon: CheckCircleIcon,
                color: "text-blue-600"
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
              Our Sofa Cleaning Services in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete sofa cleaning and care for your family's comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-teal-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-teal-600 mr-1.5" />
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

      {/* Types of Sofas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Types of Sofas We Clean in Bareilly
            </h2>
            <p className="text-lg text-gray-600">
              We cover every type of sofa material and design with professional sofa cleaning at home in Bareilly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sofaTypes.map((type, index) => (
              <div key={index} className="bg-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How to Book Our Sofa Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Booking EzyHelpers for sofa cleaning services in Bareilly is quick and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Requirements",
                description: "Tell us the sofa type, material, and any stain concerns."
              },
              {
                step: "2",
                title: "Pick a Convenient Time",
                description: "Select a day and time that fits your family schedule."
              },
              {
                step: "3",
                title: "Expert Cleaner Visit",
                description: "The verified cleaner arrives with eco-friendly products and safe cleaning equipment."
              },
              {
                step: "4",
                title: "Quality Service & Support",
                description: "Thorough cleaning guaranteed with follow-up help for any issues."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
              Common questions about our sofa cleaning services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Don't Let a Dirty Sofa Spoil Your Home's Look!
            </h2>
            <p className="text-xl text-teal-100 mb-10 leading-relaxed">
              Book professional sofa cleaning services in Bareilly and enjoy sparkling clean furniture without the hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-teal-800 hover:bg-teal-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Sofa Cleaning Now
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
