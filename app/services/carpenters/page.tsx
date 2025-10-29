import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
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
  title: 'Expert Carpenter Services | Home Repairs | EzyHelpers',
  description: 'Professional carpenter services for furniture repair, woodwork & home improvements. Skilled craftsmen available for all carpentry needs across major cities.',
  keywords: 'carpenter services, custom furniture, modular kitchen, wardrobe, furniture repair, door window fixing, office carpentry, furniture restoration',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/carpenters'
  }
}

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
      features: ["Space-Saving", "Modern Design", "Complete Setup", "Quality Finish"]
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
      icon: SparklesIcon,
      features: ["Antique Restoration", "Expert Craft", "Former Glory", "Fine Details"]
    }
  ]

  const faqs = [
    {
      question: "What types of carpenter services does EzyHelpers provide?",
      answer: "EzyHelpers offers a full range of carpenter services, including furniture repair, modular kitchen installation, wardrobe fitting, door/window repair, wood polishing, and custom woodwork for homes and offices. Whether it’s new furniture or fixing old items, our expert carpenters are experienced in all kinds of residential and commercial projects."
    },
    {
      question: "Can I book a carpenter for same-day service?",
      answer: "Yes, based on availability, you can get same-day carpenter service in many cities across India. Whether it’s urgent furniture repair, door fixing, or installation, we aim to connect you with a reliable local carpenter quickly."
    },
    {
      question: "What is the cost of hiring a carpenter?",
      answer: "Carpentry charges depend on work type, material, and labor. EzyHelpers offers free site visits and provides a detailed quote after inspection. We ensure transparent pricing with no hidden charges, whether it’s a small repair or a full furniture project."
    },
    {
      question: "How quickly can a carpenter reach my home?",
      answer: "We usually assign a local carpenter within 24 hours. In many cases, we provide same-day or next-day carpenter visits, especially for urgent repair work. Timely service is our top priority."
    },
    {
      question: "Do your carpenters work with all types of wood?",
      answer: "Yes, our expert carpenters are experienced to work with teak, plywood, MDF, engineered wood, and other materials. We also help you choose the right wood for durability, style, and budget, based on the Indian climate and usage."
    },
    {
      question: "Do you offer carpenter services for modular furniture and kitchens?",
      answer: "Absolutely. We provide expert carpentry for modular kitchens, wardrobes, TV units, and space-saving furniture. Our carpenters follow modern designs and install everything as per your home layout."
    },
    {
      question: "Do you offer emergency carpenter services near me?",
      answer: "Yes, we offer emergency carpentry services in major Indian cities. For broken furniture, jammed doors, or urgent safety issues, we try to send a carpenter to your location as quickly as possible."
    },
    {
      question: "Will the carpenter bring tools and materials?",
      answer: "Yes, our carpenters come prepared with essential tools. If specific materials are needed, they’ll inform you in advance or help procure them at the best rates locally."
    },
    {
      question: "Can I schedule the carpenter at my convenient time?",
      answer: "Yes, you can choose a time slot that suits your availability. We offer flexible bookings so our carpenter arrives at your home or office as per your schedule."
    },
    {
      question: "Do you offer furniture assembly and dismantling?",
      answer: "Yes, we provide carpenter services for furniture assembly, dismantling, and shifting support. Whether it’s a new bed, table, or wardrobe, our carpenters will install it securely at your home."
    },
    {
      question: "Can I hire a carpenter for small repair work only?",
      answer: "Of course. You can book us for minor repairs like loose hinges, broken legs, creaking doors, or damaged handles. No job is too small; we fix everything with care."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
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

      {/* Important Considerations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Important Considerations for Your Carpentry Project</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Before booking your carpenters, keep these points in mind for a smooth experience:</p>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700">
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Project Scope Clarity:</strong> Clearly define your needs, whether it's a minor repair, a custom build, or an installation. This helps our carpenters come prepared with the right tools and expertise.</li>
              <li><strong>Material Preferences:</strong> If you have specific wood types (e.g., teak, plywood, MDF) or finishes in mind, communicate them upfront. Our experts can also guide you on the best materials for your project and budget.</li>
              <li><strong>Design Consultation:</strong> For custom projects, we offer design consultations to ensure your vision is perfectly translated into the final product.</li>
              <li><strong>Timelines:</strong> While we strive for quick service, complex carpentry work might require more time. We'll provide estimated timelines upfront.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What to Expect During Your Carpenter Visit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">When you book a carpenter through EzyHelpers, we ensure a seamless and professional experience from start to finish:</p>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700">
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Timely Arrival</strong> at your preferred time slot</li>
              <li><strong>One-on-One Consultation</strong> to understand your exact carpentry needs</li>
              <li><strong>Expert Inspection & Material Guidance</strong> tailored to your project</li>
              <li><strong>Transparent Estimates</strong> are provided on-site or shortly after for larger jobs</li>
              <li><strong>Neat, Skilled Workmanship</strong> with minimal disruption to your home</li>
              <li><strong>Complete Cleanup</strong> after the job is done, leaving your space tidy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Custom Woodwork */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Custom Woodwork Designed for Your Home</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Our expert carpenters create custom woodwork that’s practical, beautiful, and built to last:</p>
          </div>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <ul className="list-disc pl-6 space-y-2">
              <li>Space-saving wardrobes and modular storage</li>
              <li>Study tables, bookshelves, and display units</li>
              <li>Beds with built-in storage solutions</li>
              <li>TV units, shoe racks, and mandir cabinets</li>
              <li>Decorative wooden partitions and wall panels</li>
            </ul>
            <p className="mt-6">We bring your design ideas to life with precision craftsmanship.</p>
          </div>
        </div>
      </section>

      {/* Quick Repair Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Quick Repair Services for Damaged Woodwork</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Need fast fixes for damaged furniture or fittings? Our carpenters are available for prompt, professional wood repair, including</p>
          </div>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <ul className="list-disc pl-6 space-y-2">
              <li>Wobbly chairs, broken bed frames, and loose joints</li>
              <li>Swollen or jammed doors and windows</li>
              <li>Termite-affected furniture restoration</li>
              <li>Cabinet, drawer, or handle repair</li>
              <li>General wear-and-tear fixes to restore usability</li>
            </ul>
            <p className="mt-6">Same-day service may be available depending on technician availability.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Comprehensive Carpenter Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive carpentry services tailored to your space, style, and budget with skilled local carpenters</p>
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How Our Carpenter Service Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple and hassle-free process to get quality carpentry work done</p>
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
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

      {/* Explore Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Quick, convenient help for all household needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Appliance Repair Services</h3>
              <p className="text-gray-600 mb-3">Fix your fridge, washing machine, or microwave with expert care.</p>
              <Link href="/services/appliance-repair" className="text-yellow-700 font-medium hover:underline">Learn about Appliance Repair Services</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber Services</h3>
              <p className="text-gray-600 mb-3">Quick solutions for leaks, clogs, fittings, and water systems.</p>
              <Link href="/services/plumbers" className="text-yellow-700 font-medium hover:underline">Learn about Plumber Services</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Deep Cleaning</h3>
              <p className="text-gray-600 mb-3">Book a professional deep clean to refresh your entire home.</p>
              <Link href="/services/deep-cleaning" className="text-yellow-700 font-medium hover:underline">Learn about Home Deep Cleaning Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
          </div>

          {/* SEO Schema for FAQs */}
          <FAQSchema faqs={faqs} />

          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 