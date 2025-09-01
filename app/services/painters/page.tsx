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
  title: 'Professional Painting Services Bareilly – Book Experts',
  description: 'Trusted professional painting services in Bareilly offering reliable, timely painting with expert surface preparation and finishing.',
  keywords: 'painting services bareilly, house painting bareilly, interior painting bareilly, exterior painting bareilly',
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
      description: "Add a designer feel to your home with textured finishes and stencil art for accent walls and living rooms.",
      icon: PaintBrushIcon,
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
      icon: SparklesIcon,
      features: ["Wood Restoration", "Expert Polishing", "Durable Coating", "Enhanced Look"]
    },
    {
      title: "Metal & Grill Painting",
      description: "Get rust-free, stylish metal fixtures with specialised painting for gates, railings, and grills.",
      icon: FireIcon,
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
      description: "Revive faded or chipped walls with seamless repainting, perfect for rentals and festive makeovers.",
      icon: SparklesIcon,
      features: ["Seamless Repair", "Color Matching", "Quick Touch-up", "Festive Ready"]
    }
  ]

  const faqs = [
    {
      question: "Do EzyHelpers painters offer a free site inspection before painting?",
      answer: "Yes, we provide a free site visit. Our painters assess surface conditions, understand your requirements and recommend suitable painting methods and materials, ensuring accurate estimates and the right approach for your home’s painting needs."
    },
    {
      question: "How much does home painting cost?",
      answer: "Painting charges depend on area size, paint type, surface preparation, and whether it’s interior or exterior work. We provide competitive, transparent pricing with detailed free estimates after a site visit."
    },
    {
      question: "What paint brands do you use for home painting?",
      answer: "We use trusted brands like Asian Paints, Berger, Nerolac, and Dulux. Based on your budget, surface type, and finish preference, our team will recommend the best paints for long-lasting and beautiful results."
    },
    {
      question: "Is same-day house painting service available?",
      answer: "Same-day painting may be possible for small tasks like touch-ups or single walls. For full room or house painting, advance booking is recommended to ensure proper preparation and quality workmanship."
    },
    {
      question: "Can your painters help me choose paint colors and finishes?",
      answer: "Yes, our painters offer color consultation to help you select shades, finishes, and combinations that match your furniture, lighting, and style. We guide you using swatches, visual tools, and practical advice for the best outcome."
    },
    {
      question: "Do painters handle wall preparation before painting?",
      answer: "Absolutely. We prepare all surfaces by cleaning, crack-filling, sanding, and priming. Proper surface preparation is crucial for smooth paint application, longer durability, and professional-looking results in Indian home environments."
    },
    {
      question: "What should I do to prepare my home before painters arrive?",
      answer: "Please move furniture away from walls, take down wall décor, and cover fragile items. Our painters also protect floors and furniture with plastic sheets or covers to ensure cleanliness during the job."
    },
    {
      question: "Do your painters clean up after completing the work?",
      answer: "Yes, our painters ensure a full post-painting cleanup. We remove all tools, paint cans, and waste, leaving your home clean, organised, and ready to use immediately after the painting is done."
    },
    {
      question: "Can I hire painters for small jobs like one room or wall touch-ups?",
      answer: "Yes, you can. We handle all job sizes, from full home painting to quick touch-ups, single rooms, or wall patches. No task is too small for our experienced and professional painters."
    },
    {
      question: "What’s the best season to get house painting done?",
      answer: "The dry season (typically October to March) is best for painting, as it allows faster drying and a better finish. Avoid the monsoon, as humidity can affect paint adhesion and quality."
    },
    {
      question: "Do I need to buy paint separately, or is it included in the service?",
      answer: "You can choose either. We offer packages with or without paint. Our team can help you choose the right brand and finish, and even procure it for you at market price or with discounts."
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
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
              Professional painting services you can trust with quality, care & clarity at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled & Experienced Painters",
                description: "Trained professionals use expert techniques to ensure smooth, durable, and flawless paint finishes.",
                icon: ShieldCheckIcon,
                color: "text-purple-600"
              },
              {
                title: "Wide Range of Services",
                description: "From wall painting to waterproofing, get tailored solutions for every surface and need.",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Clean & Efficient Work",
                description: "We protect your space, maintain cleanliness, and finish projects quickly with minimal disruption.",
                icon: ClockIcon,
                color: "text-blue-600"
              },
              {
                title: "Transparent Pricing",
                description: "Clear estimates, no hidden fees, and full support from booking to project completion.",
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
                description: "Our experts come to see the space, suggest the best paints and finishes, and give a clear price estimate."
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
                description: "Costs vary based on area size, surface condition, and paint type. Early booking is recommended for weekends",
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

      {/* Why Professional Painting is More Than Just a Color Change */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Professional Painting is More Than Just a Color Change
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Painting isn’t just about adding colour; it’s about transforming your space in ways that enhance both function and feel. With EzyHelpers' professional painting services, you get more than just a beautiful finish.
              </p>
              <p>
                A well-executed paint job gives your home or office an instant facelift, improving aesthetics while reflecting your personality or brand. Whether you're going for a cosy, neutral vibe or a bold, statement-making look, our experts help you choose the right colours and finishes to match your vision.
              </p>
              <p>
                Beyond beauty, professional painting also protects. High-quality paint shields walls from moisture, dust, UV exposure, and daily wear, reducing maintenance costs and increasing durability. It also helps seal surfaces, preventing issues like mold or surface cracks.
              </p>
              <p>
                We use eco-friendly, low-VOC paints that are safer for children, pets, and the environment. This ensures better indoor air quality and fewer lingering odours, which is especially important in frequently used spaces. With EzyHelpers, painting becomes an investment in comfort, health, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-16 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
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

      {/* Explore Other Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
            <p className="text-lg text-gray-600">On-demand help for a stress-free home life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Home Deep Cleaning</h3>
              <p className="text-gray-600 mb-3">Book a professional deep clean to refresh your entire home.</p>
              <Link href="/services/deep-cleaning" className="text-purple-700 font-semibold hover:underline">Learn about Home Deep Cleaning Services</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Gardener Services</h3>
              <p className="text-gray-600 mb-3">Maintain a beautiful home garden with experienced gardening help.</p>
              <Link href="/services/gardener" className="text-purple-700 font-semibold hover:underline">Learn about Gardener Services</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Carpenter Services</h3>
              <p className="text-gray-600 mb-3">Custom furniture, repairs, and fittings by skilled local carpenters.</p>
              <Link href="/services/carpenters" className="text-purple-700 font-semibold hover:underline">Learn about Carpenter Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs (Last Section) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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