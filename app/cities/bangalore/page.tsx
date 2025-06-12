import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ComputerDesktopIcon, 
  HeartIcon, 
  HomeIcon, 
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function BangalorePage() {
  const localServices = [
    {
      title: "Tech Professional Support",
      description: "Specialized domestic help for IT professionals and tech workers with flexible schedules and international work hours.",
      icon: ComputerDesktopIcon
    },
    {
      title: "Startup-Friendly Services", 
      description: "Flexible, on-demand help perfect for entrepreneurs and startup employees with unpredictable schedules.",
      icon: HeartIcon
    },
    {
      title: "Apartment Complex Services",
      description: "Experienced in serving gated communities and high-rise apartments throughout Bangalore's IT corridors.",
      icon: HomeIcon
    }
  ]

  const areas = [
    "Whitefield", "Electronic City", "Koramangala", "Indiranagar", "HSR Layout", 
    "BTM Layout", "Marathahalli", "Sarjapur Road", "Bannerghatta Road", "Yelahanka",
    "Hebbal", "JP Nagar", "Jayanagar", "Rajajinagar", "Malleshwaram"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-background-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ComputerDesktopIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Professional House Help Services in Bangalore
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              India's Silicon Valley deserves premium domestic help services. From Whitefield to Electronic City, we provide trusted maids, cooks, nannies, and drivers for Bangalore's dynamic lifestyle.
            </p>
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link 
                href="/hire-helper" 
                className="group relative bg-white text-blue-800 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 min-w-[240px] text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>Book Helper in Bangalore</span>
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
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Tailored for Bangalore's IT Lifestyle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the unique needs of India's tech capital, we provide specialized domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
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

      {/* Popular Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Popular Services in Bangalore
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Live-in Maids",
                description: "24/7 household support for busy IT professionals",
                href: "/services/live-in-maids"
              },
              {
                title: "Professional Cooks", 
                description: "Home-cooked meals for health-conscious techies",
                href: "/services/cooks"
              },
              {
                title: "Nanny Services",
                description: "Trusted childcare for working parents",
                href: "/services/nanny-babysitter"
              },
              {
                title: "Driver Services",
                description: "Reliable transportation across Bangalore traffic",
                href: "/services/drivers"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-blue-600 font-medium">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers in Bangalore?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Familiar with Bangalore's traffic patterns",
              "Experienced in IT corridor service areas", 
              "Flexible timing for tech professionals",
              "Understanding of corporate work schedules",
              "Multilingual helpers (English, Kannada, Hindi)",
              "Apartment complex entry protocols knowledge"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Simplify Your Life in Bangalore?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers across Bangalore who trust EzyHelpers for their domestic help needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </Link>
            <Link href="tel:+919972571005" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call +91 9972571005
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