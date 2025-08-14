import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { 
  ComputerDesktopIcon, 
  HomeIcon, 
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hire Reliable Maid for Home in Bangalore | Trained Helpers',
  description: 'Find background-verified maids and helpers in Bangalore for daily chores, cooking, babysitting, elderly care, driving, and home repairs, all in one place.',
  keywords: 'maid for home bangalore, domestic helpers bangalore, verified maids bangalore, house help services bangalore, home services bangalore'
}

export default function BangalorePage() {
  const areas = [
    "Whitefield", "Electronic City", "Koramangala", "Indiranagar", "HSR Layout", 
    "BTM Layout", "Marathahalli", "Sarjapur Road", "Bannerghatta Road", "Yelahanka",
    "Hebbal", "JP Nagar", "Jayanagar", "Rajajinagar", "Malleshwaram"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Bangalore' }
        ]} 
      />
      
      <div className="bg-background-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HomeIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Trusted Maid for Home in Bangalore
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              From trusted maids for homes in Bangalore to professional cooks and drivers, we bring you verified helpers tailored to your lifestyle, schedule, and household needs.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 max-w-4xl mx-auto">
              {[
                { icon: ShieldCheckIcon, text: "Verified Domestic Helpers" },
                { icon: ClockIcon, text: "Quick Replacements Within 7 Days" },
                { icon: MapPinIcon, text: "Service Coverage Across All Areas" },
                { icon: UserGroupIcon, text: "Trusted by Bangalore Families" },
                { icon: ChatBubbleLeftRightIcon, text: "Flexible Service Slots Every Day" }
              ].map((indicator, index) => {
                const IconComponent = indicator.icon
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-blue-100/20 rounded-lg flex items-center justify-center mb-2">
                      <IconComponent className="h-5 w-5 text-blue-100" />
                    </div>
                    <span className="text-sm text-blue-100 font-medium">{indicator.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link 
                href="/hire-helper" 
                className="group relative bg-white text-blue-800 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 min-w-[240px] text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>Book a Verified Maid Today</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link 
                href="tel:+919972571005" 
                className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 min-w-[200px]"
              >
                <PhoneIcon className="h-6 w-6 mr-3 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                <span>Talk to Our Experts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers in Bangalore?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From apartments to villas, EzyHelpers provides the right helpers and maids for homes in Bangalore, tailored to your lifestyle needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced in IT Corridor Service Areas",
                description: "From Whitefield to Outer Ring Road, our trained helpers serve homes across Bangalore's major localities.",
                icon: ComputerDesktopIcon
              },
              {
                title: "Flexible Timing for Corporate Professionals", 
                description: "We offer time slots that fit IT shift hours, remote work, and corporate routines to match your demanding work schedule.",
                icon: ClockIcon
              },
              {
                title: "Multilingual Helpers (English, Kannada, Hindi)",
                description: "Communicate easily with helpers fluent in regional languages and comfortable with basic English.",
                icon: ChatBubbleLeftRightIcon
              },
              {
                title: "Apartment Entry Protocols Knowledge",
                description: "Our helpers understand visitor protocols, ID checks, and digital gate apps used in gated communities.",
                icon: ShieldCheckIcon
              },
              {
                title: "Helpers for All Types of Homes in Bangalore",
                description: "Whether independent houses or gated apartments, helpers are trained to work with minimal supervision.",
                icon: HomeModernIcon
              },
              {
                title: "Trusted by Families Across Bangalore",
                description: "Thousands of households already trust EzyHelpers for safe, consistent, and professional home support.",
                icon: UserGroupIcon
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600" />
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

      {/* Service Areas */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Service Areas in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve all major residential and commercial areas across Bangalore
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <MapPinIcon className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Staff Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Trusted Domestic Staff – Maids, Drivers & More in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Daily home management made simple with verified maids, nannies, drivers, cooks, and elderly care helpers you can rely on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Live-in Maid",
                description: "24/7 domestic help for busy families across Bangalore. From Whitefield to Jayanagar, get reliable live-in maids for cooking, cleaning, childcare, and eldercare.",
                features: ["24/7 stay-in assistance", "12-hour daily support", "Trained in modern home care"],
                href: "/services/live-in-maids"
              },
              {
                title: "Full-Time Maid",
                description: "Reliable 8–10 hour daily maid service for working families. Get trusted help for cleaning, cooking, childcare, or elderly care, customised to your routine.",
                features: ["8-10 hours daily support", "Experienced in urban homes", "Safe and trusted maids"],
                href: "/services/full-time-maids"
              },
              {
                title: "Part-Time Maid",
                description: "Quick and reliable part-time maids in Bangalore, available for 2–6 hours daily. Ideal for cooking, cleaning, childcare, and eldercare.",
                features: ["2-6 hour flexible slots", "Background verified", "Same-day availability"],
                href: "/services/part-time-maids"
              },
              {
                title: "On-Demand Maid",
                description: "Need emergency help at home? Get instant, reliable on-demand maid service for last-minute guests, missed maids, urgent cooking, event help, and babysitting.",
                features: ["Same-day availability", "Emergency support", "Pay per task"],
                href: "/services/on-demand-helpers"
              },
              {
                title: "Babysitter",
                description: "Get trusted, trained, and caring help for your child's safety, learning, and daily routines, right in your home.",
                features: ["Meal & nap routines", "Infant to teen care", "Trained & verified babysitters"],
                href: "/services/nanny-babysitter"
              },
              {
                title: "Elderly Care",
                description: "From medication to companionship, we offer trusted in-home elderly care in Bangalore, ensuring your loved ones feel safe, supported, and never alone.",
                features: ["Daily routine help", "Health monitoring", "Personalized attention"],
                href: "/services/elderly-care"
              },
              {
                title: "Cook",
                description: "Fresh, hygienic, and homestyle meals daily from verified professional home cooks in Bangalore. Personalised cooking tailored to your diet, culture, and daily routine.",
                features: ["Multi-cuisine expertise", "Fresh meal preparation", "Kitchen hygiene standards"],
                href: "/services/cooks"
              },
              {
                title: "Driver",
                description: "Skip the stress of driving! Book a professional driver in Bangalore for family, office, or intercity travel. Safe, courteous, and always punctual.",
                features: ["Bangalore traffic experts", "Background-verified", "24/7 available service"],
                href: "/services/drivers"
              }
            ].map((service, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More About {service.title}s →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Maintenance Services */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Home Maintenance Services — More Than Just a Maid Helper in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From repairs to deep cleaning, hire skilled technicians and service pros for every part of your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Carpenter",
                description: "Get expert carpentry help in Bangalore for furniture repairs, modular installations, and custom woodwork tailored to your space.",
                features: ["Quick fixes for everyday furniture", "Custom built-ins for any room", "Safe, verified professionals"],
                href: "/services/carpenters"
              },
              {
                title: "Electrician",
                description: "Upgrading switches or fixing faulty wiring? Get reliable, safe, and certified electrical repair and installation services in Bangalore.",
                features: ["Licensed electricians only", "Same-day repairs & installations", "Energy-saving solutions"],
                href: "/services/electricians"
              },
              {
                title: "Gardener",
                description: "From garden setup to seasonal care, expert gardening services customized to your space, be it a terrace, balcony, or home garden.",
                features: ["Terrace & balcony experts", "Seasonal maintenance", "Organic gardening practices"],
                href: "/services/gardener"
              },
              {
                title: "Appliance Repair",
                description: "Fix all home appliances in Bangalore with expert technicians. TV, AC, fridge, washing machine repair with doorstep service.",
                features: ["Same-day repairs available", "Genuine spare parts", "Multi-brand expertise"],
                href: "/services/appliance-repair"
              },
              {
                title: "Plumber",
                description: "Get instant help for all plumbing problems in Bangalore, from leaking taps and bathroom fittings to clogged drains.",
                features: ["Same-day service", "Transparent pricing", "Background-checked plumbers"],
                href: "/services/plumbers"
              },
              {
                title: "Home Deep Cleaning",
                description: "Experience professional home cleaning in Bangalore. We eliminate dust, germs, and stains for a cleaner, healthier living environment.",
                features: ["Complete sanitization", "Child and pet-safe products", "Flexible scheduling"],
                href: "/services/deep-cleaning"
              },
              {
                title: "Painter",
                description: "Hire trusted painters in Bangalore for clean, reliable painting services using premium paints, expert finishes, and fast completion.",
                features: ["Premium paints only", "Dust-free methods", "Weather-resistant coatings"],
                href: "/services/painters"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More About {service.title}s →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Lifestyle Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Tailored for Bangalore's IT Lifestyle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the unique needs of Bangalore's fast-paced lifestyle, we offer specialised maids and helpers for homes in Bangalore, ensuring reliable and professional support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Professional Support",
                description: "Specialised domestic help for IT professionals and tech workers with flexible schedules and shifting hours.",
                icon: ComputerDesktopIcon
              },
              {
                title: "Double Income Household Support",
                description: "Efficient home management tailored for busy couples maximising dual professional incomes with minimal domestic stress.",
                icon: UserGroupIcon
              },
              {
                title: "Apartment Complex Services",
                description: "Experienced in serving gated communities and high-rise apartments throughout Bangalore's IT corridors.",
                icon: HomeModernIcon
              },
              {
                title: "Remote Worker Support",
                description: "Specialised domestic help for remote professionals with flexible schedules and work-from-home routines.",
                icon: HomeIcon
              },
              {
                title: "Support for Unpredictable Schedules",
                description: "On-demand helpers are available for early morning, late-night, and irregular timing requirements.",
                icon: ClockIcon
              },
              {
                title: "Modern Home Specialists",
                description: "Trained staff familiar with modular kitchens, smart appliances, and high-rise apartment protocols.",
                icon: WrenchScrewdriverIcon
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How to Book a Maid for Home in Bangalore in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us What You Need",
                description: "Select the type of service – maid, cook, driver, babysitter, or elderly care, and your timing and location preferences.",
                icon: ChatBubbleLeftRightIcon
              },
              {
                step: "2", 
                title: "Get Matched with Verified Helpers",
                description: "We'll match you with background-verified, trained professionals available near your location.",
                icon: ShieldCheckIcon
              },
              {
                step: "3",
                title: "Confirm and Relax",
                description: "Schedule your service, make a secure payment, and enjoy hassle-free home support. Replacements and customer support included.",
                icon: CheckCircleIcon
              }
            ].map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-10 mb-6">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Hire a Maid for Home in Bangalore?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stop worrying about household chores. EzyHelpers brings you the most trusted maids & helpers in Bangalore, right at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Book a Maid Now
            </Link>
            <Link href="tel:+919972571005" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call: +91 9972571005
            </Link>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              We Also Serve Other Cities
            </h2>
            <p className="text-lg text-gray-600">
              Explore our services in other major Indian cities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mumbai",
                description: "Financial Capital domestic help services",
                href: "/cities/mumbai"
              },
              {
                title: "Delhi", 
                description: "National Capital household assistance",
                href: "/cities/delhi"
              },
              {
                title: "Noida",
                description: "IT Hub professional support services",
                href: "/cities/noida"
              }
            ].map((city, index) => (
              <Link key={index} href={city.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {city.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {city.description}
                </p>
                <span className="text-blue-600 font-medium hover:text-blue-700">
                  Explore Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
} 