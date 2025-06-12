import Link from 'next/link'
import { 
  CogIcon, 
  HeartIcon, 
  HomeIcon, 
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function KanpurPage() {
  const localServices = [
    {
      title: "Industrial Worker Support",
      description: "Specialized domestic help for factory workers, engineers, and professionals in Kanpur's industrial areas.",
      icon: CogIcon
    },
    {
      title: "Business Community Services", 
      description: "Professional household assistance for business families and traders in Kanpur's commercial districts.",
      icon: HeartIcon
    },
    {
      title: "Educational Family Support",
      description: "Reliable domestic help for academic families and students in Kanpur's educational institutions area.",
      icon: HomeIcon
    }
  ]

  const areas = [
    "Civil Lines", "Swaroop Nagar", "Kidwai Nagar", "Govind Nagar", "Harsh Nagar", 
    "Kalyanpur", "Kakadeo", "Barra", "Shyam Nagar", "Tilak Nagar",
    "Mall Road", "Sarvodaya Nagar", "Vikas Nagar", "Krishna Nagar", "Gwaltoli"
  ]

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-600 to-gray-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CogIcon className="h-8 w-8 text-slate-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Reliable House Help Services in Kanpur
            </h1>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              The Industrial Capital of UP deserves quality domestic help services. From Civil Lines to Kalyanpur, we provide trusted maids, cooks, nannies, and drivers for Kanpur's industrial lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="btn-primary text-lg px-8 py-4">
                Book Helper in Kanpur
              </Link>
              <Link href="tel:+919972571005" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now
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
              Tailored for Kanpur's Industrial Lifestyle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the unique needs of Uttar Pradesh's industrial hub, we provide specialized domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-slate-600" />
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
              Service Areas in Kanpur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve all major residential and commercial areas across Kanpur
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <MapPinIcon className="h-5 w-5 text-slate-600 mx-auto mb-2" />
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
              Popular Services in Kanpur
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Live-in Maids",
                description: "24/7 household support for industrial working families",
                href: "/services/live-in-maids"
              },
              {
                title: "Professional Cooks", 
                description: "Traditional North Indian cuisine and healthy meal preparation",
                href: "/services/cooks"
              },
              {
                title: "Nanny Services",
                description: "Reliable childcare for busy working parents",
                href: "/services/nanny-babysitter"
              },
              {
                title: "Driver Services",
                description: "Safe transportation across Kanpur's industrial zones",
                href: "/services/drivers"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-slate-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-slate-600 font-medium">
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
              Why Choose EzyHelpers in Kanpur?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Understanding of industrial work schedules",
              "Experience with traditional and modern households", 
              "Flexible timing for shift workers",
              "Knowledge of Kanpur's industrial areas",
              "Multilingual helpers (Hindi, English)",
              "Affordable pricing for middle-class families"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-slate-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Simplify Your Life in Kanpur?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers across Kanpur who trust EzyHelpers for their domestic help needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-slate-600 hover:bg-gray-100 text-lg px-8 py-4">
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
                title: "Lucknow",
                description: "Capital City domestic help services",
                href: "/cities/lucknow"
              },
              {
                title: "Delhi", 
                description: "National Capital household assistance",
                href: "/cities/delhi"
              },
              {
                title: "Meerut",
                description: "Commercial Hub professional support",
                href: "/cities/meerut"
              }
            ].map((city, index) => (
              <Link key={index} href={city.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {city.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {city.description}
                </p>
                <span className="text-slate-600 font-medium hover:text-slate-700">
                  Explore Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 