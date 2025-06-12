import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  BuildingLibraryIcon, 
  HeartIcon, 
  HomeIcon, 
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
  FireIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  TruckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export default function DelhiPage() {
  const localServices = [
    {
      title: "Government Quarters Support",
      description: "Specialized domestic help for government officials and diplomatic families in Central Delhi and VIP areas.",
      icon: BuildingLibraryIcon
    },
    {
      title: "Corporate Executive Services", 
      description: "Premium household assistance for business leaders and executives in Delhi's commercial districts.",
      icon: HeartIcon
    },
    {
      title: "Cultural Family Support",
      description: "Domestic help experienced with Delhi's diverse cultural needs and traditional household requirements.",
      icon: HomeIcon
    }
  ]

  const areas = [
    "Lutyens Delhi", "Connaught Place", "Khan Market", "South Delhi", "Vasant Vihar", 
    "Defence Colony", "Greater Kailash", "Lajpat Nagar", "Karol Bagh", "Rajouri Garden",
    "Pitampura", "Rohini", "Dwarka", "Janakpuri", "Safdarjung"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-background-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-pink-700 to-rose-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/3 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Icon with Animation */}
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-2xl">
                <BuildingLibraryIcon className="h-10 w-10 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-white/10 rounded-full mx-auto animate-ping" />
            </div>
            
            {/* Enhanced Typography */}
            <div className="space-y-2 mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                <BuildingLibraryIcon className="h-4 w-4 inline mr-2" />
                National Capital of India
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                Elite House Help
                <span className="block text-pink-100">Services in Delhi</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-pink-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Distinguished domestic help services for India's national capital. From Lutyens Delhi to South Delhi, 
              we provide <span className="text-white font-semibold">trusted maids, cooks, nannies, and drivers</span>.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link 
                href="/hire-helper" 
                className="group relative bg-white text-red-800 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 min-w-[240px] text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>Book Helper in Delhi</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link 
                href="tel:+919972571005" 
                className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 min-w-[200px]"
              >
                <PhoneIcon className="h-6 w-6 mr-3 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                <span>Call Now</span>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10,000+</div>
                <div className="text-pink-200 text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">4.8★</div>
                <div className="text-pink-200 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24-72hr</div>
                <div className="text-pink-200 text-sm">Quick Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 rounded-full px-6 py-3 mb-6">
              <span className="text-red-700 font-semibold text-sm">Our Specialized Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Tailored for Delhi's
              <span className="block bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-transparent">Political Lifestyle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the unique needs of India's national capital, we provide specialized domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
              const IconComponent = service.icon
              const colors = [
                { bg: 'from-red-500 to-pink-600', light: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
                { bg: 'from-pink-500 to-rose-600', light: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' },
                { bg: 'from-rose-500 to-red-600', light: 'bg-rose-50', icon: 'text-rose-600', border: 'border-rose-200' }
              ]
              const colorScheme = colors[index]
              
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gray-200"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Enhanced Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${colorScheme.light} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${colorScheme.border} border`}>
                      <IconComponent className={`h-8 w-8 ${colorScheme.icon} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 w-16 h-16 ${colorScheme.light} rounded-2xl opacity-0 group-hover:opacity-50 animate-ping`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-red-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 rounded-full px-6 py-3 mb-6">
              <MapPinIcon className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-700 font-semibold text-sm">Complete Coverage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Service Areas in 
              <span className="block bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-transparent">Delhi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We serve all major residential and governmental areas across Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => {
              const isPopular = ['Lutyens Delhi', 'South Delhi', 'Connaught Place'].includes(area)
              return (
                <div 
                  key={index} 
                  className={`group relative bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                    isPopular ? 'border-red-200 bg-gradient-to-br from-white to-red-50' : 'border-gray-100'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {isPopular && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div className="relative mb-3">
                    <div className={`w-10 h-10 mx-auto rounded-lg flex items-center justify-center ${
                      isPopular ? 'bg-red-100 border-2 border-red-200' : 'bg-gray-100'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <MapPinIcon className={`h-5 w-5 ${isPopular ? 'text-red-600' : 'text-gray-600'} group-hover:text-red-700`} />
                    </div>
                    {isPopular && (
                      <div className="absolute inset-0 w-10 h-10 mx-auto bg-red-100 rounded-lg opacity-0 group-hover:opacity-50 animate-ping" />
                    )}
                  </div>
                  
                  <span className={`font-semibold text-sm ${
                    isPopular ? 'text-red-700' : 'text-gray-700'
                  } group-hover:text-red-800 transition-colors`}>
                    {area}
                  </span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )
            })}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-700 font-medium">All areas covered with verified helpers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-red-100 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-pink-100 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 rounded-full px-6 py-3 mb-6">
              <StarIcon className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-700 font-semibold text-sm">Most Requested</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Popular Services in 
              <span className="block bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-transparent">Delhi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our most popular domestic help services tailored for Delhi families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Live-in Maids",
                description: "Professional household support for government and diplomatic families",
                href: "/services/live-in-maids",
                icon: HomeIcon,
                color: { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' }
              },
              {
                title: "Professional Cooks", 
                description: "Multi-cuisine expertise for Delhi's diverse culinary preferences",
                href: "/services/cooks",
                icon: FireIcon,
                color: { bg: 'from-orange-500 to-red-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
              },
              {
                title: "Nanny Services",
                description: "Educated childcare for professional and diplomatic families",
                href: "/services/nanny-babysitter",
                icon: HeartIcon,
                color: { bg: 'from-pink-500 to-rose-500', light: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' }
              },
              {
                title: "Driver Services",
                description: "Experienced navigation through Delhi's complex road networks",
                href: "/services/drivers",
                icon: TruckIcon,
                color: { bg: 'from-emerald-500 to-green-500', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' }
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link 
                  key={index} 
                  href={service.href} 
                  className="group block bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gray-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${service.color.light} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${service.color.border} border-2`}>
                      <IconComponent className={`h-8 w-8 ${service.color.text} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 w-16 h-16 ${service.color.light} rounded-2xl opacity-0 group-hover:opacity-50 animate-ping`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <div className={`inline-flex items-center ${service.color.text} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  {/* Bottom gradient accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="section-padding bg-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100 to-transparent rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 rounded-full px-6 py-3 mb-6">
              <ShieldCheckIcon className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-700 font-semibold text-sm">Local Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Why Choose EzyHelpers
              <span className="block bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-transparent">in Delhi?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep local knowledge and expertise tailored specifically for Delhi families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding of government protocols and security",
                icon: ClockIcon,
                color: "blue"
              },
              {
                title: "Experience with diplomatic household requirements",
                icon: HomeIcon,
                color: "emerald"
              },
              {
                title: "Flexible timing for political and business schedules",
                icon: StarIcon,
                color: "purple"
              },
              {
                title: "Knowledge of Delhi's VIP areas and protocols",
                icon: MapPinIcon,
                color: "orange"
              },
              {
                title: "Multilingual helpers (Hindi, English, Punjabi)",
                icon: UserGroupIcon,
                color: "pink"
              },
              {
                title: "Familiar with Delhi's cultural diversity",
                icon: CurrencyRupeeIcon,
                color: "green"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              const colors = {
                blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
                emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-emerald-600' },
                purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
                orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' },
                pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200', gradient: 'from-pink-500 to-pink-600' },
                green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', gradient: 'from-green-500 to-green-600' }
              }
              const colorScheme = colors[benefit.color as keyof typeof colors]
              
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 ${colorScheme.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${colorScheme.border} border`}>
                      <IconComponent className={`h-6 w-6 ${colorScheme.icon} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 w-12 h-12 ${colorScheme.bg} rounded-xl opacity-0 group-hover:opacity-50 animate-ping`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-gray-900 font-semibold leading-relaxed group-hover:text-gray-800 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  {/* Checkmark */}
                  <div className="absolute top-4 right-4">
                    <CheckCircleIcon className={`h-5 w-5 ${colorScheme.icon} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </div>
              )
            })}
          </div>
          
          {/* Additional Trust Elements */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">100% Verified</h4>
              <p className="text-gray-600 text-sm">Background checked helpers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">24-72 Hour</h4>
              <p className="text-gray-600 text-sm">Quick placement guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">4.8★ Rating</h4>
              <p className="text-gray-600 text-sm">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-red-700 via-red-800 to-pink-900 text-white text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Header */}
            <div className="mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <span className="text-white font-semibold text-sm">Get Started Today</span>
              </div>
                             <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display text-white">
                 Ready to Simplify Your Life
                 <span className="block text-pink-100">in Delhi?</span>
               </h2>
                             <p className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                 Join <span className="text-white font-bold">thousands of satisfied customers</span> across Delhi who trust EzyHelpers for their domestic help needs.
               </p>
            </div>
            
            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/hire-helper" className="group relative bg-white text-red-800 font-bold text-xl px-12 py-6 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="relative z-10 flex items-center">
                  <span>Get Started Today</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center bg-transparent border-2 border-white/40 text-white font-bold text-xl px-12 py-6 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                <PhoneIcon className="h-6 w-6 mr-4 group-hover:animate-pulse" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Call Now</div>
                  <div>+91 9972571005</div>
                </div>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
                                 <div className="text-left">
                   <div className="text-white font-bold">100% Verified</div>
                   <div className="text-pink-100 text-sm">Background Checked</div>
                 </div>
               </div>
               
               <div className="flex items-center justify-center space-x-3">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                   <ClockIcon className="h-6 w-6 text-white" />
                 </div>
                 <div className="text-left">
                   <div className="text-white font-bold">24-72 Hours</div>
                   <div className="text-pink-100 text-sm">Quick Placement</div>
                 </div>
               </div>
               
               <div className="flex items-center justify-center space-x-3">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                   <StarIcon className="h-6 w-6 text-white" />
                 </div>
                 <div className="text-left">
                   <div className="text-white font-bold">4.8★ Rating</div>
                   <div className="text-pink-100 text-sm">Customer Satisfaction</div>
                 </div>
              </div>
            </div>
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
                title: "Bangalore", 
                description: "IT Capital household assistance",
                href: "/cities/bangalore"
              },
              {
                title: "Noida",
                description: "IT Hub professional support",
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
                <span className="text-red-600 font-medium hover:text-red-700">
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