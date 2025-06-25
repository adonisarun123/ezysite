import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  PaintBrushIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  SparklesIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'House Painting Services | Interior & Exterior | EzyHelpers',
  description: 'Professional house painting services for interior & exterior walls. Quality paints, expert painters & affordable rates in your area.',
  keywords: 'House Painting Services, interior painting, exterior painting, professional painters, quality paints, affordable rates',
}

export default function PaintersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Painters", url: "https://ezyhelpers.com/services/painters" }
  ]

  const paintingServices = [
    {
      title: "Interior Painting",
      description: "Give your walls a new life with elegant finishes using premium, low-odour paints for a clean, vibrant environment.",
      icon: HomeIcon,
      features: ["Premium Paints", "Low-Odour", "Vibrant Colors", "Clean Finish"]
    },
    {
      title: "Exterior House Painting",
      description: "Protect your building's exterior from dust, moisture, and UV damage with weatherproof paints.",
      icon: BuildingOfficeIcon,
      features: ["Weather Protection", "UV Resistant", "Moisture Proof", "Long-lasting"]
    },
    {
      title: "Texture & Stencil Designs",
      description: "Add a designer feel to your home with texture finishes and stencil art for accent walls and living rooms.",
      icon: SparklesIcon,
      features: ["Designer Look", "Texture Finish", "Stencil Art", "Accent Walls"]
    },
    {
      title: "Waterproofing Services",
      description: "Prevent wall dampness and leakage with advanced waterproofing solutions using high-quality sealants.",
      icon: BeakerIcon,
      features: ["Dampness Prevention", "Leak Protection", "Quality Sealants", "Long-term Protection"]
    },
    {
      title: "Wood Painting & Polishing",
      description: "Restore and enrich wooden furniture, doors, and frames with expert polishing and coating for durability.",
      icon: PaintBrushIcon,
      features: ["Wood Restoration", "Expert Polishing", "Durable Coating", "Enhanced Look"]
    },
    {
      title: "Metal & Grill Painting",
      description: "Get rust-free, stylish metal fixtures with specialized painting for gates, railings, and grills.",
      icon: ShieldCheckIcon,
      features: ["Rust Prevention", "Anti-corrosive", "Stylish Finish", "Metal Protection"]
    },
    {
      title: "Full Home Painting",
      description: "Complete end-to-end painting solutions for both new construction and renovation projects.",
      icon: CheckCircleIcon,
      features: ["Complete Solution", "New & Renovation", "End-to-end", "Professional Finish"]
    },
    {
      title: "Repainting & Touch-Up",
      description: "Revive faded or chipped walls with seamless repainting perfect for rentals and festive makeovers.",
      icon: StarIcon,
      features: ["Seamless Repair", "Color Matching", "Quick Touch-up", "Festive Ready"]
    }
  ]

  const faqs = [
    {
      question: "What types of painting services do you provide?",
      answer: "We offer interior painting, exterior painting, texture and stencil designs, waterproofing, wood painting and polishing, metal painting, full home painting, and repainting services."
    },
    {
      question: "Do you provide color consultation and design advice?",
      answer: "Yes, our experts provide color consultation and design advice during the free site visit to help you choose the best paints and finishes for your space."
    },
    {
      question: "What type of paints do you use?",
      answer: "We use premium, low-odour paints for interiors and weatherproof paints for exteriors. All our paints are from trusted brands and provide long-lasting, beautiful finishes."
    },
    {
      question: "How long does a painting project typically take?",
      answer: "Project timeline depends on the area size and type of work. We discuss expected start and finish dates during consultation and plan work to minimize disruption to your routine."
    },
    {
      question: "Do you handle surface preparation and cleanup?",
      answer: "Yes, we assist in shifting furniture, protecting floors during painting, and handle all surface preparation. We also clean the area after completion, leaving your home neat and fresh."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/painters" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <PaintBrushIcon className="h-5 w-5 text-purple-200 mr-2" />
              <span className="text-sm font-semibold">Expert Painting Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Transform Your Home with
              <span className="block bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                Expert Painting
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              From smooth interior finishes to weather-resistant exterior coatings, stylish textures, and waterproofing. We handle it all with care, speed, and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-purple-800 hover:bg-purple-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Painter Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Free Site Visit
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">8K+</div>
                <div className="text-purple-200 text-sm">Homes Painted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-purple-200 text-sm">Premium Paints</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                <div className="text-purple-200 text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-purple-200 text-sm">Support</div>
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
              Why Choose EzyHelpers for House Painting Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional painting services you can trust with quality, care & clarity at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled & Experienced Painters",
                description: "Professional painters deliver flawless finishes using expert techniques for long-lasting beauty",
                icon: ShieldCheckIcon,
                color: "text-purple-600"
              },
              {
                title: "Wide Range of Services",
                description: "Home painting, texture finishes, waterproofing, and metal polishing - customized solutions",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Clean & Efficient Work",
                description: "Work neatly, protect your space, and complete tasks efficiently with minimal disruption",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "Transparent Pricing",
                description: "Honest pricing with no hidden charges and reliable customer support at every stage",
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
              Our Complete Range of House Painting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wide variety of painting solutions tailored to suit every budget and preference while maintaining highest quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paintingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-purple-600 mr-1.5" />
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
              How to Book Our House Painting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with EzyHelpers is simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us What You Need",
                description: "Contact us by phone or online form. Share details about rooms, color choices, and special requests."
              },
              {
                step: "2",
                title: "Free Site Visit & Advice",
                description: "Our experts come to see the space, suggest best paints and finishes, and give clear price estimate."
              },
              {
                step: "3",
                title: "Approve & Schedule",
                description: "After you agree to the quote, we pick a date and time that suits you with minimal disruption."
              },
              {
                step: "4",
                title: "Quality Painting & Clean-Up",
                description: "Our skilled painters complete the job carefully and clean the area, leaving your home fresh."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* Important Considerations */}
      <section className="section-padding bg-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Things to Consider Before Booking Home Painters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important factors to keep in mind before you begin your painting journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pricing & Availability",
                description: "Costs vary based on area size, surface condition, and paint type. Early booking recommended for weekends",
                icon: ClockIcon
              },
              {
                title: "Project Timeline",
                description: "Discuss expected start and finish dates to plan ahead for your daily routine and activities",
                icon: StarIcon
              },
              {
                title: "Site Preparation",
                description: "We assist in shifting furniture and protecting floors during painting for a smooth process",
                icon: ShieldCheckIcon
              }
            ].map((consideration, index) => {
              const IconComponent = consideration.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                    {consideration.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {consideration.description}
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
              Common questions about our painting services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Ready to Give Your Home a Fresh, Beautiful Look?
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              At EzyHelpers, we make house painting easy, fast, and stress-free. No worries about messy work or delays, just expert painters who care about your home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-purple-800 hover:bg-purple-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Get Free Quote Today
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