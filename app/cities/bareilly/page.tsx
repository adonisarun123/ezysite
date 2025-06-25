import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  HomeIcon,
  UsersIcon,
  HeartIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  CogIcon,
  LightBulbIcon,
  PaintBrushIcon,
  ShoppingBagIcon,
  TruckIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline'

export default function BareillyPage() {
  const domesticServices = [
    {
      title: "Live-In Maid Services",
      description: "24/7 dedicated household support with complete home care and personal assistance.",
      features: ["24/7 Support", "Full Home Management (Cleaning, Cooking, Care)", "Ideal for the elderly, families, & Working Professionals", "Background-Verified & Trained Helpers"],
      href: "/cities/bareilly/live-in-maid",
      icon: HomeIcon
    },
    {
      title: "Full-Time Maid Services", 
      description: "Daily 8–10 hour assistance to manage all your regular household work.",
      features: ["Fixed Daily Schedule (Morning to Evening)", "Cleaning, Cooking & Daily Maintenance", "Best for Couples & Small Families", "Affordable Monthly Packages"],
      href: "/cities/bareilly/full-time-maid",
      icon: UsersIcon
    },
    {
      title: "Part-Time Maid Services",
      description: "Flexible daily help for 2–6 hours as per your convenience.",
      features: ["Morning or Evening Shifts", "Specific Tasks Like Cleaning, cooking, babysitting", "Budget-Friendly for Small Households", "Reliable & Verified Maids"],
      href: "/cities/bareilly/part-time-maid",
      icon: ClockIcon
    },
    {
      title: "On-Demand Help Services",
      description: "Instant, same-day household assistance for urgent or one-time cleaning and chores.",
      features: ["Available Within a Few Hours", "Cleaning, Cooking, Washing & Other Tasks", "No Long-Term Commitment Required", "Verified Helpers for Short-Term Needs"],
      href: "/cities/bareilly/on-demand-helper",
      icon: SparklesIcon
    },
    {
      title: "Childcare / Nanny Services",
      description: "Loving babysitters for all ages with flexible, weekend-friendly support.",
      features: ["Babysitters for All Ages", "Educational & Fun Activities", "Flexible Timings Including Weekends"],
      href: "/services/nanny-babysitter",
      icon: HeartIcon
    },
    {
      title: "Elderly Care Services",
      description: "Trained caretakers offering daily assistance, medication help, and full-time care.",
      features: ["Trained Caregivers for Daily Support", "Medication Reminders & Mobility Help", "Full-Time or Day/Night Options"],
      href: "/services/elderly-care",
      icon: UserGroupIcon
    },
    {
      title: "Cooking Services",
      description: "Trained cooks for everyday meals or special events.",
      features: ["Daily Meal Preparation for Families", "Lunch Box / Tiffin Services", "Event & Party Cooking", "Veg & Non-Veg Options, Custom Diets"],
      href: "/services/cooks",
      icon: ShoppingBagIcon
    }
  ]

  const maintenanceServices = [
    {
      title: "Professional Domestic Helpers",
      description: "Daily cleaning and hygiene support by trained and reliable workers.",
      features: ["House sweeping, mopping, and dusting", "Kitchen, bathroom, and toilet cleaning", "Dishwashing and laundry", "Affordable monthly cleaning packages"],
      icon: SparklesIcon
    },
    {
      title: "Deep Cleaning Services",
      description: "Thorough seasonal and one-time cleaning for a fresh, healthy home.",
      features: ["Bedroom, living room & kitchen deep cleaning", "Sofa, carpet, mattress & curtain shampooing", "Festival or post-party cleanup", "Floor polishing, glass, and window cleaning"],
      href: "/services/deep-cleaning",
      icon: SparklesIcon
    },
    {
      title: "Electrician Services",
      description: "Licensed electricians for all types of electrical repairs and installations.",
      features: ["Fan, light, switch, and socket fixes", "AC installation, maintenance, and repairs", "Complete wiring and circuit work", "24/7 emergency electrical help"],
      href: "/services/electricians",
      icon: LightBulbIcon
    },
    {
      title: "Plumber Services",
      description: "Skilled plumbers for all water-related issues in your home.",
      features: ["Tap, pipe, and shower repairs", "Water leakage, drainage, and blockage fixes", "Bathroom fittings, motor, and tank repair", "On-demand plumbing help anytime"],
      href: "/services/plumbers",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Carpenter Services",
      description: "Professional carpenters for furniture and home woodwork solutions.",
      features: ["Door/window installation & repairs", "Furniture fixing and polishing", "Customized wooden cabinets and racks"],
      href: "/services/carpenters",
      icon: CogIcon
    },
    {
      title: "Painter Services",
      description: "Professional painting solutions to give your home a fresh, vibrant look.",
      features: ["Interior and exterior house painting", "Wall putty, waterproofing & texture finishes", "Quick touch-ups and full repainting", "Clean, mess-free, and affordable service"],
      href: "/services/painters",
      icon: PaintBrushIcon
    },
    {
      title: "Appliance Repair Services",
      description: "Fast and reliable repair of home appliances by trained technicians.",
      features: ["Washing machine, fridge, microwave & TV repair", "AC, geyser, fan & water purifier servicing", "All major brands supported", "At-home service with quick diagnosis and fix"],
      href: "/services/appliance-repair",
      icon: CogIcon
    },
    {
      title: "Driver Services",
      description: "Verified and experienced personal drivers for family, office, or long trips.",
      features: ["Daily, hourly, or monthly driver support", "Background-verified professionals", "Available for school drops, office commutes & personal use"],
      href: "/services/drivers",
      icon: TruckIcon
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Background Verified",
      description: "All our house helpers undergo thorough background checks and verification processes for your safety and peace of mind.",
      icon: ShieldCheckIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to address any concerns or requirements with our trusted house maid services in Bareilly.",
      icon: ClockIcon
    },
    {
      title: "Flexible Scheduling",
      description: "Services tailored to your schedule and convenience, from hourly to full-time arrangements in Bareilly.",
      icon: ClockIcon
    },
    {
      title: "Quality Assurance",
      description: "Regular quality checks and feedback systems to ensure excellent domestic helper service in Bareilly.",
      icon: StarIcon
    },
    {
      title: "Instant Replacement",
      description: "Quick replacement guarantee if you're not satisfied with the assigned house helper.",
      icon: CheckCircleIcon
    },
    {
      title: "Transparent Pricing",
      description: "Fair and transparent pricing with no hidden charges. Direct payment system ensures value for money.",
      icon: CheckCircleIcon
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <ShieldCheckIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-sm font-semibold">Police Verified & Background Checked</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Bareilly's Most Trusted
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                House Maid Service
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
              Find verified house maid service in Bareilly for cleaning, cooking, childcare & more. From trusted domestic helpers in Bareilly to expert home maintenance—EzyHelpers is your one-stop solution for every home need.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <ClockIcon className="h-4 w-4 text-green-300 mr-2" />
                <span className="text-sm font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <ChatBubbleLeftRightIcon className="h-4 w-4 text-green-300 mr-2" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircleIcon className="h-4 w-4 text-green-300 mr-2" />
                <span className="text-sm font-medium">Replacement Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/hire-helper" className="group bg-white text-indigo-800 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                <span className="flex items-center justify-center">
                  Book Verified Helper Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Get Free Consultation in 30 Minutes
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                <div className="text-blue-200 text-sm">Satisfied Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1,500+</div>
                <div className="text-blue-200 text-sm">Verified Helpers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.8/5</div>
                <div className="text-blue-200 text-sm">Star Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Help Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our House Maid Service in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of domestic help services, each designed to make your life easier and more comfortable.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Domestic Help Services</h3>
            <p className="text-center text-gray-600 mb-12">Reliable Domestic Helpers for Every Household Need in Bareilly</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domesticServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircleIcon className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {service.href && (
                      <Link href={service.href} className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center">
                        Learn More About {service.title}
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Home Maintenance & Repairs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Home Maintenance & Repairs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert Services to Keep Your Home Safe, Clean & Functional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.href && (
                    <Link href={service.href} className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                      Learn More
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers for House Maid Service in Bareilly?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with EzyHelpers, your one-stop platform for verified, affordable, and hassle-free home help services across Bareilly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How To Book */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How To Book?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get Help at Home in Just 3 Easy Steps – Fast, Hassle-Free & Personalized
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Requirements",
                description: "Call us or WhatsApp at +91 9972571005 to explain your need for live-in, full-time, or part-time help, including location and preferences."
              },
              {
                step: "2", 
                title: "Professional Matching",
                description: "We guarantee a callback within 30 minutes and share verified helper profiles, prioritising those who are experienced in your specific Bareilly area."
              },
              {
                step: "3",
                title: "Interview & Service Commencement", 
                description: "Schedule interviews with selected helpers and begin services only after you're fully satisfied. Final placement is completed within 24 to 72 hours."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Service Areas in Bareilly
            </h2>
            <p className="text-lg text-gray-600">
              Civil Lines, CB Ganj, Cantt, Badaun Road, Pilibhit Road, Izatnagar & nearby!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg px-6 py-3 text-center hover:shadow-md transition-shadow">
                <MapPinIcon className="h-5 w-5 text-indigo-600 mx-auto mb-1" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Transform Your Home Life in Bareilly?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who trust our house maid services in Bareilly for their domestic help needs. Get started today and experience the difference.
          </p>
          <Link href="/hire-helper" className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
            Book Your House Maid Service Now
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 