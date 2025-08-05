import type { Metadata } from 'next'
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
  CalendarDaysIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  CommandLineIcon,
  BeakerIcon,
  BugAntIcon,
  GlobeAltIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Home Services | Maids, Cooks, Drivers & More | EzyHelpers',
  description: 'Complete home services including maids, cooks, drivers, electricians, plumbers & more. Professional, verified helpers for all your household needs.',
  keywords: 'home services, domestic help, maids, cooks, drivers, electricians, plumbers, household services, professional helpers',
}

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
      description: "24/7 domestic help for busy families across India. Get reliable live-in maids for cooking, cleaning, childcare, and eldercare with personalized service.",
      href: "/services/live-in-maids",
      icon: HomeIcon,
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      features: ["24/7 Presence", "₹18,000-25,000/month", "Specialized in One Area", "12-Hour Work Day"],
      serviceTypes: ["Live-In Housekeeper", "Live-In Cook", "Live-In Nanny", "Live-In Senior Caregiver"],
      trustIndicators: ["Background Verified", "Locally Experienced", "24-72hr Placement"],
      popular: false
    },
    {
      title: "Full-Time Maid Services", 
      description: "Reliable 8–10 hour daily maid service for working families and everyday households across India. Get trusted help for cleaning, cooking, childcare, or elderly care, customised to your routine.",
      href: "/services/full-time-maids",
      icon: ClockIcon,
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      features: ["8-10 Hours Daily", "₹12,000-20,000/month", "No Accommodation Needed", "Replacement Guarantee"],
      serviceTypes: ["Full-Time Housekeeper", "Full-Time Cook", "Full-Day Babysitter", "Full-Time Elderly Care Assistant"],
      trustIndicators: ["Background Verified", "Experienced in Urban Homes", "Safe and Trusted Maids"],
      popular: true
    },
    {
      title: "Part-Time Maid Services",
      description: "Quick and reliable part-time maids available for 2–6 hours daily. Ideal for cooking, cleaning, childcare, and eldercare with flexible timing options.",
      href: "/services/part-time-maids", 
      icon: CalendarDaysIcon,
      gradient: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      features: ["2-6 Hours Daily", "Same-Day Availability", "Budget-Friendly", "No Long-Term Commitment"],
      serviceTypes: ["Part-Time Cleaning", "Part-Time Cook", "Part-Time Babysitter", "Part-Time Elder Care"],
      trustIndicators: ["Background Verified", "Flexible Timing", "8K+ Happy Families"],
      popular: false
    },
    {
      title: "On-Demand Helper Services",
      description: "Need emergency help at home? Whether it's a last-minute mess, unexpected guests, or a missed maid visit, EzyHelpers offers instant, reliable on-demand maid and helper services.",
      href: "/services/on-demand-helpers",
      icon: BoltIcon,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      features: ["2-4 Hours Response", "Emergency Support", "Pay Per Task", "5,000+ Bookings"],
      serviceTypes: ["Emergency Cleaning", "One-Day Cook", "Short-Term Babysitter", "Event Helpers"],
      trustIndicators: ["Same-Day Availability", "Last-Minute Booking", "Quick Response"],
      popular: false
    },
    {
      title: "Nanny/Babysitter Services",
      description: "Looking for a trusted babysitter for your home? Get trusted, trained, and caring help for your child's safety, learning, and daily routines, right in your home.",
      href: "/services/nanny-babysitter",
      icon: AcademicCapIcon,
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
      features: ["Infant to Teen Care", "₹15,000-25,000/month", "Emergency On-Call", "CPR & First Aid Trained"],
      serviceTypes: ["Live-In Nanny", "Full-Time Babysitter", "Part-Time Babysitter", "Age-Specific Care"],
      trustIndicators: ["Meal & Nap Routines", "Trained & Verified", "Trusted by Parents Nationwide"],
      popular: false
    },
    {
      title: "Elderly Care Services",
      description: "From medication to companionship, EzyHelpers offers trusted in-home elderly care, ensuring your loved ones feel safe, supported, and never alone.",
      href: "/services/elderly-care",
      icon: HeartIcon,
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200",
      features: ["24/7 or Part-Time Care", "Medical Support", "Safety Monitoring", "Personalized Attention"],
      serviceTypes: ["Live-In Elderly Caretaker", "Full-Time Elderly Assistant", "Part-Time Elderly Helper", "Companion Care"],
      trustIndicators: ["Daily Routine Help", "Health Monitoring", "Hygiene Assistance"],
      popular: false
    },
    {
      title: "Cook Services",
      description: "Fresh, hygienic, and homestyle meals daily from verified professional home cooks. Personalised cooking tailored to your diet, culture, and daily routine.",
      href: "/services/cooks",
      icon: UserIcon,
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
      features: ["Multi-Cuisine Expertise", "Fresh Meal Preparation", "Kitchen Hygiene Standards", "₹6,000-25,000/month"],
      serviceTypes: ["Live-In Cooks", "Full-Time Cooks", "Part-Time Cooks", "Specialized Dietary Cooks"],
      trustIndicators: ["Veg & Non-Veg Cooking", "Regional & Daily Cuisine", "Trained for Hygiene"],
      popular: false
    },
    {
      title: "Driver Services",
      description: "Skip the stress of driving! Book a professional driver for family, office, or intercity travel. Safe, courteous, and always punctual.",
      href: "/services/drivers",
      icon: TruckIcon,
      gradient: "from-slate-500 to-gray-600",
      bgColor: "bg-slate-50", 
      iconColor: "text-slate-600",
      borderColor: "border-slate-200",
      features: ["Local Traffic Experts", "Background-Verified", "24/7 Available Service", "All Routes Covered"],
      serviceTypes: ["Live-In Car Driver", "Full-Time Car Driver", "On-Demand Driver", "Specialized Transport"],
      trustIndicators: ["Emergency Trip Support", "Flexible Hourly Bookings", "Polite & Professional"],
      popular: false
    }
  ]

  // Secondary services with enhanced content from markdown files
  const secondaryServices = [
    {
      title: "Electrical Appliance Repair",
      description: "Fast and expert servicing for all major electrical appliances, including refrigerators, washing machines, ACs, and more"
      href: "/services/appliance-repair",
      icon: WrenchScrewdriverIcon,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
      features: ["Same-Day Repairs Available", "Multi-Brand Service Expertise", "Genuine Spare Parts"],
      trustIndicators: ["100% Satisfaction Guaranteed", "Expert Technicians On Call", "Emergency Appliance Repair"],
      guarantee: "7 Days Availability"
    },
    {
      title: "Carpentry Repair Services",
      description: "Skilled carpenters for furniture repairs, modular fittings, and custom builds with quick, professional, and quality work",
      href: "/services/carpenters",
      icon: CommandLineIcon,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      features: ["Fast Same-Day Repairs", "Custom Furniture Solutions", "Neat Workmanship Guaranteed"],
      trustIndicators: ["100% Background-Verified", "Quality Materials Selection", "Professional Work Ethics"],
      guarantee: "24/7 Customer Support"
    },
    {
      title: "Home Electrical Repair",
      description: "Trusted electricians for safe wiring, lighting, EV charger setup, and smart upgrades with fast, licensed professionals",
      href: "/services/electricians",
      icon: BoltIcon,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      features: ["Expert in Repairs & Installations", "BESCOM-Compliant Work", "Energy-Saving Solutions"],
      trustIndicators: ["100% Safety Assured", "Licensed Electricians Only", "Instant Fault Diagnosis"],
      guarantee: "Same-Day Repairs Available"
    },
    {
      title: "Professional Gardener",
      description: "Expert gardening services from garden setup to seasonal care, customized to your space, be it terrace, balcony, or home garden",
      href: "/services/gardener",
      icon: GlobeAltIcon,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      features: ["Expert in Terrace & Balcony Gardening", "Seasonal Maintenance & Plant Care", "Organic Gardening Service"],
      trustIndicators: ["100% Background-Verified", "Certified Plant Care Specialists", "Same-Day Gardener Visit"],
      guarantee: "24/7 Customer Support"
    },
    {
      title: "Deep Clean Services",
      description: "Professional home cleaning that eliminates dust, germs, and stains to give your family a cleaner, healthier living environment",
      href: "/services/deep-cleaning",
      icon: SparklesIcon,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      features: ["Background Verified Cleaners", "Complete Sanitization and Disinfection", "Child and Pet-Safe Products"],
      trustIndicators: ["1200+ Homes Cleaned", "100% Quality Assurance", "2-Hour Response Time"],
      guarantee: "7 Days Service Availability"
    },
    {
      title: "Interior & Exterior Painting",
      description: "Trusted painters using premium paints, expert finishes, and fast completion for clean, reliable painting services",
      href: "/services/painters",
      icon: PaintBrushIcon,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      features: ["Free Color Consultation", "Premium Paints Only", "Weather-resistant Coatings"],
      trustIndicators: ["100% Dust-Free Service", "Zero Mess Guarantee", "50+ Color Options"],
      guarantee: "Complete Surface Preparation"
    },
    {
      title: "House Plumbing Repair",
      description: "Professional plumbing solutions for leaks, installations, and repairs with skilled professionals committed to quality service",
      href: "/services/plumbers",
      icon: BeakerIcon,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      features: ["Transparent Pricing Always", "Background-Checked Plumbers", "Emergency Plumbing Repairs"],
      trustIndicators: ["Same-Day Service Available", "On-Demand Visits", "Flexible Time Slots"],
      guarantee: "24/7 Emergency Available"
    }
  ]

  return (
    <>
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/20">
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

              {/* Locations Covered */}
              <div className="group relative text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>

                {/* Content */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 group-hover:border-sky-300/50 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <MapPinIcon className="h-6 w-6 text-white animate-pulse" />
                  </div>

                  {/* Number with gradient */}
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent mb-2 group-hover:from-sky-200 group-hover:to-blue-200 transition-all duration-500">
                    250+
                  </div>
                  <div className="text-sky-100 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Locations Covered
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.35s'}}></div>
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
              Trusted, background-verified domestic help services across India. From live-in maids to emergency helpers, we provide reliable solutions tailored to your lifestyle and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link 
                  key={index} 
                  href={service.href} 
                  className={`group relative ${service.bgColor} hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 rounded-3xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}

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
                    
                    {/* Key Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircleIcon className={`h-4 w-4 ${service.iconColor} group-hover:text-white/90 mr-2 transition-colors duration-300`} />
                          <span className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Types */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 group-hover:text-white/70 mb-2 uppercase tracking-wide transition-colors duration-300">
                        Service Options
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.serviceTypes.slice(0, 2).map((type, idx) => (
                          <span key={idx} className={`text-xs px-2 py-1 bg-white/60 group-hover:bg-white/20 ${service.iconColor} group-hover:text-white/90 rounded-full transition-all duration-300 border border-white/40`}>
                            {type}
                          </span>
                        ))}
                        {service.serviceTypes.length > 2 && (
                          <span className="text-xs px-2 py-1 bg-white/40 group-hover:bg-white/10 text-gray-500 group-hover:text-white/70 rounded-full transition-all duration-300">
                            +{service.serviceTypes.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {service.trustIndicators.map((indicator, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-green-100 group-hover:bg-green-500/20 text-green-700 group-hover:text-green-300 rounded-full transition-all duration-300 border border-green-200 group-hover:border-green-400/30">
                            ✓ {indicator}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced Learn More */}
                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
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

      {/* Secondary Services Section */}
      <section className="relative section-padding bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Cpath d='M30 0C46.569 0 60 13.431 60 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 10C18.954 10 10 18.954 10 30s8.954 20 20 20 20-8.954 20-20S41.046 10 30 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 rounded-full px-4 py-2 mb-6 shadow-sm">
              <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Expert Home Maintenance & Repair Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Comprehensive Home Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From electrical repairs to deep cleaning, our verified experts deliver quality home maintenance services with transparent pricing, same-day availability, and 100% satisfaction guaranteed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {secondaryServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link 
                  key={index} 
                  href={service.href} 
                  className={`group relative ${service.bgColor} hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 rounded-2xl p-6 border-2 ${service.borderColor} hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full blur-xl transform -translate-x-10 translate-y-10"></div>
                  </div>

                  {/* Guarantee Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-20">
                    {service.guarantee}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-6 w-6 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-4 leading-relaxed transition-colors duration-300 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="space-y-1 mb-3">
                      <div className="text-xs font-semibold text-gray-500 group-hover:text-white/70 mb-2">Key Features:</div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <CheckCircleIcon className={`h-3 w-3 ${service.iconColor} group-hover:text-white/90 mr-1.5 transition-colors duration-300 shrink-0`} />
                          <span className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="space-y-1 mb-4">
                      <div className="text-xs font-semibold text-gray-500 group-hover:text-white/70 mb-2">Trust Indicators:</div>
                      {service.trustIndicators.map((indicator, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <ShieldCheckIcon className={`h-3 w-3 text-green-600 group-hover:text-green-400 mr-1.5 transition-colors duration-300 shrink-0`} />
                          <span className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">{indicator}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More */}
                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-medium text-sm transition-colors duration-300`}>
                        Learn More
                      </span>
                      <ArrowRightIcon className={`h-4 w-4 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>
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
                <span className="hidden sm:inline">Call: +91 9972571005</span>
                <span className="sm:hidden">+91 9972571005</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      </main>
    </>
  )
} 