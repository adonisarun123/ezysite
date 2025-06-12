'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, generalFAQs, serviceFAQs } from '@/components/schema'
import { 
  HomeIcon, 
  ClockIcon, 
  UserGroupIcon,
  BoltIcon,
  HeartIcon,
  UserIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ArrowRightIcon,
  TruckIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

export default function ServicesPage() {
  // Breadcrumb schema for services page
  const breadcrumbs = [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" }
  ]

  // Combined FAQs for services page
  const servicePageFAQs = [...generalFAQs, ...serviceFAQs]

  const services = [
    {
      title: "Live-In Maid Services",
      description: "24/7 dedicated household support with comprehensive home management and care",
      href: "/services/live-in-maids",
      icon: HomeIcon,
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      features: ["24/7 Support", "Comprehensive Care", "Background Verified"],
      popular: false
    },
    {
      title: "Full-Time Maid Services", 
      description: "Daily home management during fixed hours without live-in commitment",
      href: "/services/full-time-maids",
      icon: ClockIcon,
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      features: ["Fixed Hours", "Daily Care", "Professional Staff"],
      popular: true
    },
    {
      title: "Part-Time Maid Services",
      description: "Flexible cleaning and household support on your schedule and budget",
      href: "/services/part-time-maids", 
      icon: CalendarDaysIcon,
      gradient: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      features: ["Flexible Schedule", "Budget Friendly", "No Contracts"],
      popular: false
    },
    {
      title: "On-Demand Helper Services",
      description: "Instant help for emergencies, events, and unexpected household needs",
      href: "/services/on-demand-helpers",
      icon: BoltIcon,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      features: ["Same-Day Service", "Emergency Ready", "No Commitment"],
      popular: false
    },
    {
      title: "Nanny/Babysitter Services",
      description: "Expert childcare tailored to your family's schedule and specific needs",
      href: "/services/nanny-babysitter",
      icon: AcademicCapIcon,
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
      features: ["Child Safety", "Qualified Staff", "Flexible Hours"],
      popular: false
    },
    {
      title: "Elderly Care Services",
      description: "Compassionate day-and-night support for aging loved ones with dignity",
      href: "/services/elderly-care",
      icon: HeartIcon,
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200",
      features: ["Compassionate Care", "Medical Support", "24/7 Available"],
      popular: false
    },
    {
      title: "Cook Services",
      description: "Professional meal preparation with diverse cuisines and dietary options",
      href: "/services/cooks",
      icon: UserIcon,
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
      features: ["Multiple Cuisines", "Dietary Options", "Fresh Meals"],
      popular: false
    },
    {
      title: "Driver Services",
      description: "Safe and reliable transportation for all your travel and commute needs",
      href: "/services/drivers",
      icon: TruckIcon,
      gradient: "from-slate-500 to-gray-600",
      bgColor: "bg-slate-50", 
      iconColor: "text-slate-600",
      borderColor: "border-slate-200",
      features: ["Licensed Drivers", "Safe Travel", "Flexible Timing"],
      popular: false
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={servicePageFAQs} aboutPage="https://ezyhelpers.com/services" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-28 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Animated Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M60 0C93.137 0 120 26.863 120 60s-26.863 60-60 60S0 93.137 0 60 26.863 0 60 0zm0 10C32.386 10 10 32.386 10 60s22.386 50 50 50 50-22.386 50-50S87.614 10 60 10zm0 20C76.569 30 90 43.431 90 60s-13.431 30-30 30-30-13.431-30-30 13.431-30 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">India's #1 Domestic Help Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
              Professional Domestic
              <span className="block bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Helper Services
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-primary-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              From daily housekeeping to specialized care, find trusted professionals for every home service need. Verified, reliable, and tailored to your lifestyle.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border border-white/20 text-white">
                <CheckCircleIcon className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                Background Verified
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border border-white/20 text-white">
                <ShieldCheckIcon className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                Trusted Professionals
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border border-white/20 text-white">
                <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                5-Star Rated
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Hire Helper Now
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-white hover:shadow-xl">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Call +91 9972571005</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
            </div>

            {/* Enhanced Colorful Stats with Effects */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/20">
              {/* Happy Customers */}
              <div className="group relative text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 group-hover:border-pink-300/50 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <HeartIcon className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  
                  {/* Number with gradient */}
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent mb-2 group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-500">
                    50K+
                  </div>
                  <div className="text-pink-100 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Happy Customers
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>

              {/* Service Categories */}
              <div className="group relative text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 group-hover:border-emerald-300/50 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <SparklesIcon className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  
                  {/* Number with gradient */}
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-500">
                    8
                  </div>
                  <div className="text-emerald-100 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Service Categories
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>

              {/* Support Available */}
              <div className="group relative text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 group-hover:border-amber-300/50 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <ClockIcon className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  
                  {/* Number with gradient */}
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-2 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-500">
                    24/7
                  </div>
                  <div className="text-amber-100 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Support Available
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Complete Home Care Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of domestic help services, each designed to make your life easier and more comfortable
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link 
                  key={index} 
                  href={service.href} 
                  className={`group relative ${service.bgColor} rounded-3xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                  onMouseEnter={(e) => {
                    const gradients = [
                      'linear-gradient(to bottom right, #3b82f6, #4f46e5)',
                      'linear-gradient(to bottom right, #10b981, #0d9488)',
                      'linear-gradient(to bottom right, #8b5cf6, #7c3aed)',
                      'linear-gradient(to bottom right, #f97316, #dc2626)',
                      'linear-gradient(to bottom right, #ec4899, #f43f5e)',
                      'linear-gradient(to bottom right, #14b8a6, #0891b2)',
                      'linear-gradient(to bottom right, #f59e0b, #ea580c)',
                      'linear-gradient(to bottom right, #64748b, #4b5563)'
                    ]
                    e.currentTarget.style.background = gradients[index]
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = ''
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircleIcon className={`h-4 w-4 ${service.iconColor} group-hover:text-white/90 mr-2 transition-colors duration-300`} />
                          <span className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Enhanced Learn More */}
                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg z-20">
                      Most Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with India's most trusted domestic help platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Background Verified",
                description: "All our helpers undergo thorough background checks and verification processes",
                icon: ShieldCheckIcon,
                color: "text-green-600"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support to address any concerns or requirements",
                icon: HeartIcon,
                color: "text-red-600"
              },
              {
                title: "Flexible Scheduling",
                description: "Services tailored to your schedule and convenience, from hourly to full-time",
                icon: CalendarDaysIcon,
                color: "text-blue-600"
              },
              {
                title: "Quality Assurance",
                description: "Regular quality checks and feedback systems to ensure excellent service",
                icon: StarIcon,
                color: "text-yellow-600"
              },
              {
                title: "Instant Replacement",
                description: "Quick replacement guarantee if you're not satisfied with the assigned helper",
                icon: BoltIcon,
                color: "text-orange-600"
              },
              {
                title: "Transparent Pricing",
                description: "One-time commission, then direct payment to helpers. Full transparency ensures fairness for everyone",
                icon: CheckCircleIcon,
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-28">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Ready to Transform Your Home Life?
            </h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              Join thousands of satisfied customers who trust EzyHelpers for their domestic help needs. Get started today and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Now
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Call Now for Consultation</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 