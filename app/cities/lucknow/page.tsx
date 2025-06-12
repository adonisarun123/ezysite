import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  BuildingLibraryIcon, 
  HeartIcon, 
  HomeIcon, 
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function LucknowPage() {
  const localServices = [
    {
      title: "Government Official Support",
      description: "Premium domestic help for government officials, IAS officers, and administrative staff in Uttar Pradesh's capital.",
      icon: BuildingLibraryIcon
    },
    {
      title: "Cultural Heritage Services", 
      description: "Specialized household assistance respecting Lucknow's rich cultural traditions and nawabi heritage.",
      icon: HeartIcon
    },
    {
      title: "Professional Family Support",
      description: "Reliable domestic help for business families, professionals, and expatriates in Lucknow.",
      icon: HomeIcon
    }
  ]

  const areas = [
    "Hazratganj", "Gomti Nagar", "Aliganj", "Indira Nagar", "Mahanagar", 
    "Aminabad", "Alambagh", "Rajajipuram", "Jankipuram", "Vikas Nagar",
    "Ashiyana", "Aashiana", "Sushant Golf City", "LDA Colony", "Chinhat"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-background-primary">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white pt-32 pb-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BuildingLibraryIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Premium House Help Services in Lucknow
              </h1>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                The City of Nawabs deserves exceptional domestic help services. From Hazratganj to Gomti Nagar, we provide trusted maids, cooks, nannies, and drivers for Lucknow's cultural lifestyle.
              </p>
                          {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link 
                href="/hire-helper" 
                className="group relative bg-white text-rose-800 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 min-w-[240px] text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>Book Helper in Lucknow</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                Tailored for Lucknow's Cultural Lifestyle
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique needs of Uttar Pradesh's cultural capital, we provide specialized domestic help services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {localServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="bg-amber-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="h-6 w-6 text-amber-600" />
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
                Service Areas in Lucknow
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We serve all major residential and commercial areas across Lucknow
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <MapPinIcon className="h-5 w-5 text-amber-600 mx-auto mb-2" />
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
                Popular Services in Lucknow
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Live-in Maids",
                  description: "24/7 household support for government and business families",
                  href: "/services/live-in-maids"
                },
                {
                  title: "Professional Cooks", 
                  description: "Authentic Awadhi cuisine and traditional cooking expertise",
                  href: "/services/cooks"
                },
                {
                  title: "Nanny Services",
                  description: "Cultural-sensitive childcare for traditional families",
                  href: "/services/nanny-babysitter"
                },
                {
                  title: "Driver Services",
                  description: "Reliable transportation across Lucknow's heritage areas",
                  href: "/services/drivers"
                }
              ].map((service, index) => (
                <Link key={index} href={service.href} className="block bg-amber-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-amber-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <span className="text-amber-600 font-medium">
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
                Why Choose EzyHelpers in Lucknow?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Deep understanding of Lucknow's cultural etiquette",
                "Experience with traditional and modern households", 
                "Knowledge of government office schedules",
                "Respect for cultural and religious practices",
                "Multilingual helpers (Hindi, Urdu, English)",
                "Familiarity with heritage and modern areas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-amber-600 mt-1 shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-amber-600 text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Ready to Simplify Your Life in Lucknow?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers across Lucknow who trust EzyHelpers for their domestic help needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="bg-white text-amber-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </Link>
              <Link href="tel:+919972571005" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
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
                  title: "Delhi",
                  description: "National Capital domestic help services",
                  href: "/cities/delhi"
                },
                {
                  title: "Kanpur", 
                  description: "Industrial City household assistance",
                  href: "/cities/kanpur"
                },
                {
                  title: "Noida",
                  description: "Corporate Hub professional support",
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
                  <span className="text-amber-600 font-medium hover:text-amber-700">
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