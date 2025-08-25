import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
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
      title: "Babysitter Services",
      description: "Trusted and experienced babysitters in Bareilly for safe, engaging childcare with flexible scheduling.",
      features: ["Trained in Child Safety", "Age-Appropriate Activities", "School Support & Homework Help", "Flexible Timing Options"],
      href: "/cities/bareilly/babysitter",
      icon: HeartIcon
    },
    {
      title: "Cook Services", 
      description: "Professional cooks in Bareilly skilled in local cuisine, traditional recipes, and dietary preferences.",
      features: ["North Indian & UP Specialties", "Customized Meal Plans", "Hygienic Food Preparation", "Festival & Event Cooking"],
      href: "/cities/bareilly/cooks",
      icon: ShoppingBagIcon
    },
    {
      title: "Driver Services",
      description: "Licensed and experienced drivers in Bareilly for safe, reliable transportation.",
      features: ["School & Office Commutes", "Local & Outstation Trips", "Safe & Professional Service", "Flexible Timing Options"],
      href: "/cities/bareilly/drivers",
      icon: TruckIcon
    },
    {
      title: "Elderly Care Services",
      description: "Compassionate elderly care in Bareilly with trained caregivers for personalized support.",
      features: ["Personal Care & Hygiene", "Medication Management", "Companionship & Support", "Mobility Assistance"],
      href: "/cities/bareilly/elderly-care",
      icon: UserGroupIcon
    },
    {
      title: "Full-Time Maid Services",
      description: "Reliable full-time maids in Bareilly for complete household management and daily tasks.",
      features: ["Daily Cleaning & Maintenance", "Laundry & Dishwashing", "Kitchen Organization", "Regular Home Support"],
      href: "/cities/bareilly/full-time-maid",
      icon: UsersIcon
    },
    {
      title: "Japa Services",
      description: "Expert newborn and mother care with traditional postpartum support in Bareilly.",
      features: ["Newborn Care & Massage", "Mother's Recovery Support", "Traditional Healing Practices", "24/7 Care Options"],
      href: "/services/japa",
      icon: SparklesIcon
    },
    {
      title: "Live-In Maid Services",
      description: "Dedicated live-in maids in Bareilly for round-the-clock household support and care.",
      features: ["24/7 Home Management", "Cooking & Cleaning", "Child & Elder Care", "Complete Domestic Support"],
      href: "/cities/bareilly/live-in-maid",
      icon: HomeIcon
    },
    {
      title: "On-Demand Helper Services",
      description: "Quick and reliable emergency help in Bareilly for urgent household needs.",
      features: ["Same-Day Service", "Emergency Support", "Flexible Hours", "No Long-Term Commitment"],
      href: "/cities/bareilly/on-demand-helper",
      icon: ClockIcon
    },
    {
      title: "Part-Time Maid Services",
      description: "Flexible part-time maids in Bareilly for customized household help when you need it.",
      features: ["2-6 Hour Shifts", "Morning/Evening Options", "Task-Specific Help", "Affordable Rates"],
      href: "/cities/bareilly/part-time-maid",
      icon: ClockIcon
    }
  ]

  const maintenanceServices = [
    {
      title: "AC Repair Services",
      description: "Expert AC repair in Bareilly for cooling issues, gas refills, and maintenance by certified technicians.",
      features: ["Quick gas leak detection and refilling", "Fix poor cooling problems", "Filter cleaning & replacement", "Voltage fluctuation damage repair"],
      href: "/services/ac-repair",
      icon: CogIcon
    },
    {
      title: "Appliance Repair Services",
      description: "Quick fix for all home appliances in Bareilly with expert technicians and doorstep service.",
      features: ["Refrigerator & washing machine repairs", "Microwave & TV repairs", "Gas stove & geyser fixes", "All major brands supported"],
      href: "/cities/bareilly/appliance-repair",
      icon: CogIcon
    },
    {
      title: "Carpenter Services",
      description: "Professional carpenter home service in Bareilly for reliable repairs and beautiful custom woodwork.",
      features: ["Traditional UP-style furniture repair", "Custom storage solutions", "Religious furniture setup", "Door & window repairs"],
      href: "/cities/bareilly/carpenter",
      icon: CogIcon
    },
    {
      title: "Electrician Services",
      description: "Trusted electrician in Bareilly for fan fittings, switches, wiring issues, and power problems.",
      features: ["House wiring & repairs", "Switch/socket repairs", "Fan & light installation", "Circuit breaker repair"],
      href: "/cities/bareilly/electrician",
      icon: LightBulbIcon
    },
    {
      title: "Deep Cleaning Services",
      description: "Professional home deep cleaning in Bareilly for spotless, germ-free living spaces.",
      features: ["Full house deep cleaning", "Kitchen & bathroom sanitization", "Carpet & mattress cleaning", "Post-festival cleanup"],
      href: "/cities/bareilly/home-cleaning",
      icon: SparklesIcon
    },
    {
      title: "House Shifting Services",
      description: "Professional household shifting services in Bareilly for stress-free local or long-distance moves.",
      features: ["Full house packing & unpacking", "Furniture dismantling & reassembly", "Safe transportation", "Loading & unloading"],
      href: "/services/house-shifting",
      icon: TruckIcon
    },
    {
      title: "Painter Services",
      description: "Professional painting services in Bareilly with premium finishes and timely completion.",
      features: ["Interior & exterior painting", "Weatherproof house painting", "Wall plastering & crack repairs", "Wood polish & varnishing"],
      href: "/cities/bareilly/painting",
      icon: PaintBrushIcon
    },
    {
      title: "Pest Control Services",
      description: "Safe and effective pest control for home in Bareilly to eliminate all types of pests.",
      features: ["Termite & cockroach control", "Mosquito & ant treatment", "Bed bug elimination", "Rat & rodent control"],
      href: "/services/pest-control",
      icon: ShieldExclamationIcon
    },
    {
      title: "Plumber Services",
      description: "Professional plumbing repair in Bareilly for leaks, pipe fittings, and drainage problems.",
      features: ["Pipe leakage & blockage repairs", "Bathroom fitting & repairs", "Water tank cleaning", "Drainage solutions"],
      href: "/cities/bareilly/plumber",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Sofa Cleaning Services",
      description: "Professional sofa cleaning services in Bareilly for stain and odor removal.",
      features: ["Fabric & leather sofa cleaning", "Stain & odor removal", "Sanitization & protection", "Same-day service"],
      href: "/cities/bareilly/sofa-cleaning",
      icon: SparklesIcon
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
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar", 
    "Rampur Garden", "Satellite", "Sanjay Nagar", "Delapir", "Quila", "Shamatganj",
    "Transport Nagar", "Model Town", "Subhash Nagar", "Rajendra Nagar"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Bareilly' }
        ]} 
      />
      
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
                          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Domestic Help Services</h2>
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