import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  TruckIcon, 
  HeartIcon, 
  HomeIcon, 
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function BareillyPage() {
  const localServices = [
    {
      title: "Trading Community Support",
      description: "Specialized domestic help for trading families, business owners, and commercial professionals in Bareilly's markets.",
      icon: TruckIcon
    },
    {
      title: "Service Sector Support", 
      description: "Professional household assistance for government employees, teachers, and service sector professionals.",
      icon: HeartIcon
    },
    {
      title: "Traditional Family Services",
      description: "Culturally sensitive domestic help respecting traditional values and customs of Bareilly families.",
      icon: HomeIcon
    }
  ]

  const areas = [
    "Civil Lines", "Cantt Area", "Subhash Nagar", "Pilibhit Road", "CB Ganj", 
    "Kotwali", "Faridpur", "Krishna Ganj", "Railway Road", "Kutubkhana",
    "Satellite Colony", "Parsakhera", "Nawabganj", "Qila", "Ramganga Vihar"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-background-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TruckIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Quality House Help Services in Bareilly
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              The Commercial Hub of Western UP deserves reliable domestic help services. From Civil Lines to CB Ganj, we provide trusted maids, cooks, nannies, and drivers for Bareilly's trading lifestyle.
            </p>
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link 
                href="/hire-helper" 
                className="group relative bg-white text-indigo-800 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 min-w-[240px] text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>Book Helper in Bareilly</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              Tailored for Bareilly's Commercial Lifestyle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the unique needs of Western UP's commercial center, we provide specialized domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
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
              Service Areas in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve all major residential and commercial areas across Bareilly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <MapPinIcon className="h-5 w-5 text-indigo-600 mx-auto mb-2" />
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
              Popular Services in Bareilly
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Live-in Maids",
                description: "24/7 household support for busy trading families",
                href: "/services/live-in-maids"
              },
              {
                title: "Professional Cooks", 
                description: "Traditional North Indian and local cuisine preparation",
                href: "/services/cooks"
              },
              {
                title: "Nanny Services",
                description: "Trusted childcare for working business families",
                href: "/services/nanny-babysitter"
              },
              {
                title: "Driver Services",
                description: "Reliable transportation across Bareilly's commercial areas",
                href: "/services/drivers"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-indigo-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-indigo-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-indigo-600 font-medium">
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
              Why Choose EzyHelpers in Bareilly?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Understanding of local business community needs",
              "Respect for traditional family values", 
              "Flexible timing for trading professionals",
              "Knowledge of Bareilly's market areas",
              "Multilingual helpers (Hindi, English, Urdu)",
              "Experience with both modern and traditional households"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-indigo-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-indigo-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Simplify Your Life in Bareilly?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers across Bareilly who trust EzyHelpers for their domestic help needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link href="tel:+919972571005" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
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
                title: "Meerut",
                description: "Sports Capital domestic help services",
                href: "/cities/meerut"
              },
              {
                title: "Lucknow", 
                description: "Capital City household assistance",
                href: "/cities/lucknow"
              },
              {
                title: "Delhi",
                description: "National Capital professional support",
                href: "/cities/delhi"
              }
            ].map((city, index) => (
              <Link key={index} href={city.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {city.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {city.description}
                </p>
                <span className="text-indigo-600 font-medium hover:text-indigo-700">
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