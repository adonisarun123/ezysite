import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Carpenter Home Service in Bareilly – Skilled Work',
  description: 'Hire skilled carpenter home service in Bareilly for furniture repair, fitting, woodwork & custom installations. Reliable & trained professionals.',
  keywords: 'carpenter bareilly, carpenter home service bareilly, furniture repair bareilly, woodwork bareilly, carpenter near me bareilly',
}

export default function CarpentersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Carpenters", url: "https://ezyhelpers.com/services/carpenters" }
  ]

  const carpenterServices = [
    {
      title: "Wooden Furniture Repair (Traditional UP Style)",
      description: "Fix broken chairs, tables, and antique furniture with authentic craftsmanship.",
      icon: SparklesIcon,
      features: ["Traditional Repairs", "Antique Restoration", "Joint Fixing", "Finish Touch-ups"]
    },
    {
      title: "Custom Storage Solutions",
      description: "Space-saving cupboards, wardrobes, and shelves for large families.",
      icon: CubeIcon,
      features: ["Joint Family Storage", "Space-Saving Design", "Custom Wardrobes", "Durable Build"]
    },
    {
      title: "Religious Furniture",
      description: "Beautifully crafted wooden mandirs, pooja stands, and prayer benches.",
      icon: HomeIcon,
      features: ["Mandir Design", "Pooja Stands", "Prayer Benches", "Traditional Style"]
    },
    {
      title: "Door & Window Repairs",
      description: "Common in traditional Bareilly homes, fix squeaky doors, broken windows, and frames.",
      icon: WrenchScrewdriverIcon,
      features: ["Door Repairs", "Window Fixes", "Frame Work", "Hardware Replace"]
    },
    {
      title: "Modular Kitchen Setup",
      description: "Custom kitchen cabinets, shelves, and storage for easy cooking.",
      icon: HomeIcon,
      features: ["Cabinet Design", "Storage Solutions", "Easy Access", "Quality Finish"]
    },
    {
      title: "Study Table Solutions",
      description: "Strong, spacious study tables & bookshelves for kids & students.",
      icon: BuildingOfficeIcon,
      features: ["Student Desks", "Book Storage", "Ergonomic Design", "Durable Build"]
    },
    {
      title: "Bed & Cupboard Repairs",
      description: "Fix broken frames, hinges, and drawers smoothly.",
      icon: WrenchScrewdriverIcon,
      features: ["Frame Repairs", "Hinge Fixes", "Drawer Work", "Hardware Update"]
    },
    {
      title: "Window & Curtain Rod Fixing",
      description: "Secure fittings for curtains, blinds, and rods.",
      icon: BuildingOfficeIcon,
      features: ["Rod Installation", "Blind Fitting", "Secure Mounts", "Level Setup"]
    },
    {
      title: "Drill & Hang Services",
      description: "Wall mounts, shelves, and frames are installed safely.",
      icon: WrenchScrewdriverIcon,
      features: ["Wall Mounting", "Shelf Install", "Frame Hanging", "Safe Setup"]
    }
  ]

  const faqs = [
    {
      question: "Do you repair beds, cupboards, and wardrobes?",
      answer: "Yes. Our professional carpenter home service in Bareilly includes repairing bed frames, cupboard doors, hinges, drawers, and wardrobes. We fix loose parts, reinforce structures, and ensure all functions work smoothly to extend furniture's lifespan and usability."
    },
    {
      question: "Do you assemble new furniture in Bareilly?",
      answer: "Yes. EzyHelpers carpenters assemble new furniture and repair old furniture in Bareilly. Our verified professionals arrive equipped to set up beds, tables, cabinets, and more, saving you time and ensuring proper installation with no leftover parts or confusion."
    },
    {
      question: "Are furniture assembly services available in Bareilly?",
      answer: "Yes, professional furniture assembly services are available through our carpenter home service in Bareilly. Our skilled carpenters assemble new furniture and fix old pieces using the right tools and techniques, ensuring safe, sturdy, and accurate setup every time."
    },
    {
      question: "Do EzyHelpers' carpenters in Bareilly fix window and curtain rods?",
      answer: "Yes. We handle window and curtain rod installation and fixing. EzyHelpers carpenters ensure secure fitting of rods and blinds, checking stability and alignment so curtains and blinds operate smoothly and safely."
    },
    {
      question: "Can you provide drill and hang services in Bareilly?",
      answer: "Yes. Our service includes drill and hang jobs like installing wall mounts, shelves, picture frames, curtain rods, and other fixtures in Bareilly homes. Carpenters use proper anchors and measurements to ensure a neat and level finish."
    },
    {
      question: "What types of furniture repairs do you handle in Bareilly?",
      answer: "We offer wooden furniture repair in Bareilly, including fixing broken chairs, tables, antique items, and more. EzyHelpers carpenters are skilled in traditional UP-style craftsmanship, ensuring restored furniture looks and functions beautifully while preserving heritage value."
    },
    {
      question: "Do you build mandir and pooja furniture in Bareilly?",
      answer: "Yes. We offer dedicated mandir and prayer area setup services in Bareilly. EzyHelpers carpenters craft beautifully designed wooden mandirs, pooja stands, and prayer benches with traditional aesthetics and fine craftsmanship suited to your spiritual needs."
    },
    {
      question: "Can you repair doors and windows in Bareilly homes?",
      answer: "Absolutely. Through our carpenter home service in Bareilly, you can fix squeaky doors, broken windows, and damaged frames. They fix common household issues like misaligned doors, loose hinges, or window pane damage to restore smooth operation and home security."
    },
    {
      question: "What areas of the home do you cover with carpenter home service in Bareilly?",
      answer: "EzyHelpers covers all household carpentry needs in Bareilly, including living room furniture repair, kitchen cabinets, bedroom wardrobes, pooja room work, balcony shelves, staircase railing repair, and more. We deliver a comprehensive carpentry upgrade for every area of your home."
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