import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import { 
  TruckIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  HomeIcon,
  SparklesIcon,
  CubeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Household Shifting in Bareilly – Expert Packers',
  description: 'Looking for household shifting services in Bareilly? Our movers handle packing, safe transport, and careful unpacking for a smooth relocation.',
  keywords: 'household shifting bareilly, packers and movers bareilly, house shifting bareilly, home relocation bareilly',
}

export default function HouseShiftingPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: "House Shifting", url: "https://ezyhelpers.com/services/house-shifting" }
  ]

  const shiftingServices = [
    {
      title: "Full House Packing & Unpacking",
      description: "We carefully pack all your belongings using high-quality materials and then unpack them at your new home, saving you time and effort.",
      icon: CubeIcon,
      features: ["Quality Packing", "Safe Unpacking", "Time Saving", "Full Service"]
    },
    {
      title: "Furniture Dismantling & Reassembling",
      description: "Our team can safely dismantle large furniture like beds, wardrobes, and dining tables and then reassemble them at your new place.",
      icon: HomeIcon,
      features: ["Safe Dismantling", "Expert Assembly", "Large Furniture", "Proper Tools"]
    },
    {
      title: "Safe Transportation",
      description: "We use well-maintained vehicles, equipped with GPS tracking, to ensure your goods travel safely and you can know where your things are at all times.",
      icon: TruckIcon,
      features: ["GPS Tracking", "Safe Transit", "Good Vehicles", "Real Updates"]
    },
    {
      title: "Loading & Unloading Services",
      description: "Our trained staff handles all the heavy lifting, ensuring your items are loaded and unloaded without damage.",
      icon: UserGroupIcon,
      features: ["Heavy Lifting", "Safe Loading", "Careful Unload", "No Damage"]
    },
    {
      title: "Fragile Item Packing",
      description: "Special care and packing materials are used for delicate items like glass, mirrors, electronics, and kitchenware.",
      icon: SparklesIcon,
      features: ["Special Care", "Safe Packing", "Delicate Items", "Extra Protection"]
    },
    {
      title: "Vehicle Shifting",
      description: "If you need to move your car or bike along with your household items, we provide safe and secure transport solutions.",
      icon: TruckIcon,
      features: ["Car Moving", "Bike Transit", "Safe Transport", "Full Coverage"]
    },
    {
      title: "Office Shifting Services",
      description: "Moving your office? We also handle commercial relocations with minimal disruption to your business.",
      icon: HomeIcon,
      features: ["Office Move", "Quick Setup", "Low Disruption", "Business Care"]
    },
    {
      title: "Inter-City Shifting",
      description: "Moving from Bareilly to another city in India? We have the experience and network to ensure a smooth long-distance move.",
      icon: TruckIcon,
      features: ["Long Distance", "Safe Transit", "Full Network", "Door to Door"]
    },
    {
      title: "Specialized Item Handling",
      description: "For pianos, large artworks, or other unique items, we have special tools and techniques to ensure their safe transport.",
      icon: SparklesIcon,
      features: ["Special Items", "Unique Tools", "Safe Methods", "Expert Care"]
    }
  ]

  const shiftingTypes = [
    "Local House Shifting",
    "Intercity Relocation",
    "Apartment Shifting",
    "Independent House Moving",
    "Office Relocation",
    "Student Relocation",
    "Senior Citizen Moving",
    "Festival Season Shifting",
    "Emergency Shifting",
    "Partial Household Moving",
    "Fragile Items Transport",
    "Heavy Furniture Shifting"
  ]

  const faqs = [
    {
      question: "What are household shifting services in Bareilly?",
      answer: "Household shifting services in Bareilly include professional packing, loading, transporting, unloading, and setting up your belongings during a move. EzyHelpers ensures a smooth and safe transition from one home to another within the city or nearby areas."
    },
    {
      question: "Do you offer local house shifting in Bareilly?",
      answer: "Yes, EzyHelpers provides local house shifting in Bareilly for flats, independent homes, and rental properties. Our team handles everything from packing to safe transportation and setup of your household items within Bareilly city limits."
    },
    {
      question: "Is furniture dismantling and reassembly included in household shifting services in Bareilly?",
      answer: "Yes, our household shifting services in Bareilly include dismantling bulky furniture like beds and wardrobes before moving and reassembling them at your new home, ensuring safety and convenience."
    },
    {
      question: "Do you handle fragile items during local house shifting in Bareilly?",
      answer: "Yes, we take extra care with fragile items such as glassware, mirrors, electronics, and decor by using bubble wrap, cushioning, and strong cartons to prevent damage during shifting in Bareilly."
    },
    {
      question: "How do you protect furniture during household shifting in Bareilly?",
      answer: "During shifting, we carefully wrap all furniture using bubble wrap, foam padding, corrugated sheets, and thick blankets. This ensures maximum protection against scratches, dents, or damage throughout the moving process."
    },
    {
      question: "Do your household shifting services in Bareilly include packing support?",
      answer: "Yes, our household shifting services in Bareilly include full packing support using strong, protective materials for furniture, electronics, kitchen items, clothes, and more, ensuring a safe, worry-free move."
    },
    {
      question: "What size of vehicle do you use for local house shifting in Bareilly?",
      answer: "We provide suitable vehicles based on your home size. For local house shifting in Bareilly, we use mini trucks or medium-sized tempos for 1BHK, 2BHK, or similar household sizes."
    },
    {
      question: "Do I need to arrange labour separately for house shifting in Bareilly?",
      answer: "No. Labour for loading, unloading, and handling your household items is included in our local house shifting services in Bareilly, so you don't need to arrange anything separately."
    },
    {
      question: "What items can be shifted using EzyHelpers in Bareilly?",
      answer: "We shift all household items in Bareilly, including beds, sofas, mattresses, TVs, fridges, washing machines, kitchen utensils, and personal belongings, with complete safety and care."
    },
    {
      question: "Do you help set up furniture after shifting in Bareilly?",
      answer: "Yes, once we unload your items at your new home, our Bareilly house-shifting team assists with placing and reassembling furniture as needed."
    },
    {
      question: "Is dismantling geysers, fans, or AC included in house shifting services in Bareilly?",
      answer: "We help with basic uninstallation of fans and geysers as part of house shifting in Bareilly. AC uninstallation and installation should be done by a certified technician."
    },
    {
      question: "How early should I book household shifting services in Bareilly?",
      answer: "To ensure availability, it's best to book household shifting services in Bareilly at least 2 to 3 days in advance, especially during weekends or end-of-month rushes."
    },
    {
      question: "Can you help shift within the same locality in Bareilly?",
      answer: "Yes, we provide hyper-local house shifting in Bareilly, which is perfect for moving homes within the same apartment complex, colony, or neighbourhood."
    }
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/services/house-shifting" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <TruckIcon className="h-5 w-5 text-orange-200 mr-2" />
              <span className="text-sm font-semibold">Professional House Shifting</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Professional Household Shifting
              <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                Services in Bareilly
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-orange-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Fast, safe, and reliable household shifting services in Bareilly for stress-free local or long-distance moves. We handle packing, loading, transport, and unpacking with care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-orange-800 hover:bg-orange-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Your Home Shifting
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Emergency Shifting Service
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2-Hour</div>
                <div className="text-orange-200 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-orange-200 text-sm">Homes Shifted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-orange-200 text-sm">Damage-Free Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-orange-200 text-sm">Support</div>
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
              Why Choose EzyHelpers for Household Shifting in Bareilly?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trust, speed, and professional moving excellence make us your best partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trusted Local Packers",
                description: "Experienced local movers ensure safe packing and shifting with complete care",
                icon: ShieldCheckIcon,
                color: "text-orange-600"
              },
              {
                title: "Quick Same-Day Shifting",
                description: "Fast response and efficient moving service for urgent relocations",
                icon: ClockIcon,
                color: "text-green-600"
              },
              {
                title: "Complete Moving Solution",
                description: "From packing to unpacking, we handle everything for stress-free moves",
                icon: CheckCircleIcon,
                color: "text-blue-600"
              },
              {
                title: "Damage-Free Guarantee",
                description: "Your belongings are protected with proper packing and careful handling",
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
              Our Household Shifting Services in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your shifting needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shiftingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-orange-600" />
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
                        <CheckCircleIcon className="h-3 w-3 text-orange-600 mr-1.5" />
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

      {/* Types of Shifting */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Types of Shifting Services We Provide
            </h2>
            <p className="text-lg text-gray-600">
              We handle all kinds of household relocations, big and small
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shiftingTypes.map((type, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <TruckIcon className="h-8 w-8 text-orange-600 mx-auto mb-4" />
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
              How to Book Our Household Shifting Services in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fast and stress-free booking process in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Shifting Details",
                description: "Tell us about your shifting needs, how many items, and where you're moving."
              },
              {
                step: "2",
                title: "Pick a Convenient Time",
                description: "Choose a specific day and time slot that suits your family schedule."
              },
              {
                step: "3",
                title: "Verified Movers Visit",
                description: "Our verified moving professionals arrive fully equipped for safe, reliable household shifting."
              },
              {
                step: "4",
                title: "Safe Shifting Done",
                description: "Enjoy a stress-free shifting experience with unpacking and reassembly at your new place."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
              Common questions about our household shifting services
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
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Don't Let Shifting Stress You Out!
            </h2>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed">
              Get trusted, affordable household shifting services in Bareilly with EzyHelpers. Our local experts ensure a smooth, damage-free move so you can settle into your new home without worries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white text-orange-800 hover:bg-orange-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Shifting Service Now
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
