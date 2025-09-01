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
  title: 'Full House Deep Cleaning in Bareilly – Book Experts Now',
  description: 'Get home deep cleaning in Bareilly for kitchen, bathroom, and entire house sanitization. Experienced cleaners ensure spotless, hygienic results.',
  keywords: 'deep cleaning bareilly, home cleaning bareilly, bathroom cleaning bareilly, kitchen cleaning bareilly',
}

export default function DeepCleaningPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "Deep Cleaning", url: "https://ezyhelpers.com/services/deep-cleaning" }
  ]

  const cleaningServices = [
    {
      title: "Full House Cleaning",
      description: "Thorough cleaning of every room, including dusting, vacuuming, mopping, and polishing, for a fresh, hygienic space.",
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
      description: "Dusting fans and furniture, cleaning windows, and vacuuming upholstery for spotless living spaces.",
      icon: StarIcon,
      features: ["Dust Fans", "Clean Windows", "Vacuum Upholstery", "Spotless Rooms"]
    },
    {
      title: "Balcony & Utility Area Cleaning",
      description: "Removing dirt, stains, and clutter from balconies and utility areas, turning them into clean, functional zones.",
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
      icon: CubeIcon,
      features: ["Fabric Safe", "Dust Removal", "Allergen Free", "Extended Life"]
    },
    {
      title: "Appliance Cleaning",
      description: "Deep cleaning of fridges, ovens, chimney interiors, and fans for fully functional appliances.",
      icon: BeakerIcon,
      features: ["Fridge Cleaning", "Oven Deep Clean", "Chimney Interior", "Fan Cleaning"]
    }
  ]

  const faqs = [
    {
      question: "Do I need to stay home during deep cleaning?",
      answer: "No, it’s not mandatory. You can attend the initial walkthrough, explain your cleaning needs, and then step out. Many clients hand over keys and return to a sparkling clean home. Just keep valuables safe and accessible areas clear."
    },
    {
      question: "Is deep cleaning different from regular house cleaning?",
      answer: "Yes, deep cleaning is more detailed. It covers hard-to-reach spots like behind appliances, inside cabinets, and under furniture. It’s ideal for moving in after renovations or festive cleaning before Diwali or weddings."
    },
    {
      question: "Do your home cleaners bring their own cleaning supplies and equipment?",
      answer: "Yes, our team comes with all cleaning materials, including vacuum cleaners, scrubbers, microfibre cloths, and safe disinfectants. You don’t need to arrange anything for the service."
    },
    {
      question: "Can I book deep cleaning for today or urgently?",
      answer: "Same-day cleaning is available based on location and team availability. For larger homes or post-renovation jobs, booking 24–48 hours in advance is recommended to ensure slot availability."
    },
    {
      question: "Do you offer post-renovation or post-painting cleaning?",
      answer: "Yes, we specialise in post-renovation and post-paint cleaning. Our team removes paint splatters, cement dust, and debris, making your home ready for use after construction or wall painting."
    },
    {
      question: "Can I book only kitchen or bathroom deep cleaning?",
      answer: "Yes, we offer room-specific deep cleaning. You can book just a kitchen, bathroom, or sofa cleaning if required. These services are ideal for maintenance between full house cleans."
    },
    {
      question: "Do you provide move-in or move-out cleaning for tenants and homeowners?",
      answer: "Yes, our move-in/move-out cleaning includes floor scrubbing, wall stain removal, and appliance interiors, perfect before shifting into a new house or handing it back to the landlord."
    },
    {
      question: "Can you clean appliances and furniture, too?",
      answer: "Yes, we clean refrigerators, microwaves, chimneys, sofas, and mattresses. We use fabric-safe shampoos and steam tools to remove stains, grease, and odor from upholstery and appliances."
    },
    {
      question: "How is the deep cleaning price calculated?",
      answer: "Deep cleaning charges depend on various factors like the size of your home (1BHK, 2BHK, etc.), total carpet area, number of bathrooms, and the type of cleaning required. Prices may vary based on add-ons such as kitchen degreasing, sofa shampooing, mattress cleaning, wall or ceiling dust removal, and post-renovation cleanup. We offer a transparent quote after understanding your specific needs, no hidden charges, no surprises."
    },
    {
      question: "Do your cleaners help with decluttering and organizing?",
      answer: "Our cleaners do light tidying and basic organization as part of the deep cleaning process, like arranging items, clearing surfaces, and putting things back in place. For full home decluttering or expert-level organizing (like wardrobes, kitchens, or storage areas), we can connect you with our trusted professional organizing partners."
    },
    {
      question: "What is the best time to book a home deep cleaning service?",
      answer: "The ideal time to schedule deep cleaning is before major festivals, after renovation or painting work, when shifting homes, or during seasonal changes like pre-monsoon or post-winter. Regular deep cleaning every 3 to 6 months also helps maintain hygiene, prevent dust buildup, and keep your home fresh and allergy-free."
    },
    {
      question: "How often should I get my home deep cleaned?",
      answer: "For best results, we recommend deep cleaning every 3 to 6 months. Homes with children, pets, or high footfall may benefit from more frequent cleaning to maintain hygiene and reduce dust and allergens."
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
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
              Expert care, eco-friendly products, and guaranteed satisfaction with cleaning plans made just for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Cleaners",
                description: "Skilled, background-verified cleaners ensure safe and professional deep cleaning every single time.",
                icon: ShieldCheckIcon,
                color: "text-cyan-600"
              },
              {
                title: "Custom Cleaning Plans",
                description: "We create detailed cleaning plans tailored to match your home’s exact cleaning requirements.",
                icon: CheckCircleIcon,
                color: "text-green-600"
              },
              {
                title: "Affordable Pricing",
                description: "Clear, budget-friendly pricing with no hidden costs and complete value for every rupee spent.",
                icon: StarIcon,
                color: "text-yellow-600"
              },
              {
                title: "Satisfaction Guaranteed",
                description: "Not satisfied? We'll return and clean again until you're completely happy with the results.",
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
              How to Book Our Home Deep Cleaning Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Booking your house cleaning with EzyHelpers is simple, fast, and fully hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us What You Need",
                description: "Fill out our form with your cleaning needs and preferred service date online."
              },
              {
                step: "2",
                title: "Get a Clear Quote",
                description: "We’ll share a transparent quote based on home size and cleaning requirements."
              },
              {
                step: "3",
                title: "Confirm Your Booking",
                description: "Review the quote and confirm your cleaning appointment for a convenient time."
              },
              {
                step: "4",
                title: "Sit Back and Relax",
                description: "Our professional cleaners will arrive and deep clean every corner of your home."
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

      {/* Health & Lifestyle Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              The Health & Lifestyle Benefits of Professional Deep Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Beyond a visually spotless home, a professional deep clean by EzyHelpers offers significant advantages for your health, comfort, and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Improved Indoor Air Quality",
                text: "Deep cleaning removes built-up dust, pet hair, pollen, and other common allergens from floors, furniture, and fabrics, leading to noticeably fresher and cleaner air. This is especially helpful for people with allergies or breathing issues."
              },
              {
                title: "Enhanced Hygiene & Sanitization",
                text: "We go beyond surface cleaning, sanitizing high-touch areas, bathrooms, and kitchens with hospital-grade disinfectants. This eliminates harmful bacteria and viruses, significantly reducing the risk of illness."
              },
              {
                title: "Extended Lifespan of Furnishings",
                text: "Regular deep cleaning prevents the build-up of dirt and grit that can prematurely wear down carpets, upholstery, and hard surfaces, helping to preserve your home's assets and maintain their appearance."
              },
              {
                title: "Stress Reduction & Peace of Mind",
                text: "A clean and tidy home helps you feel more relaxed. When our professionals take care of the deep cleaning, you save time and effort so you can unwind and enjoy your fresh, peaceful space."
              },
              {
                title: "Odour Elimination",
                text: "Deep cleaning tackles the source of unpleasant odours, rather than just masking them, leaving your home smelling genuinely fresh and clean."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (moved here after benefits) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
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

      {/* Explore Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">From cleaning to carpentry, your home, fully cared for.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Carpenter Services</h3>
              <p className="text-gray-600 mb-3">Custom furniture, repairs, and fittings by skilled local carpenters.</p>
              <Link href="/services/carpenter" className="text-cyan-700 font-semibold hover:underline">Learn about Carpenter Services</Link>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Appliance Repair Services</h3>
              <p className="text-gray-600 mb-3">Fix your fridge, washing machine, or microwave with expert care.</p>
              <Link href="/services/appliance-repair" className="text-cyan-700 font-semibold hover:underline">Learn about Appliance Repair Services</Link>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Plumber Services</h3>
              <p className="text-gray-600 mb-3">Quick solutions for leaks, clogs, fittings, and water systems.</p>
              <Link href="/services/plumber" className="text-cyan-700 font-semibold hover:underline">Learn about Plumber Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (moved to last) */}
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

      {/* Footer follows after FAQs */}
      
      <Footer />
    </main>
  )
}