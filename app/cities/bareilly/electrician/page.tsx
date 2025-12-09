import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  CurrencyRupeeIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  CogIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Trusted Electrician in Bareilly - Fast Home Fixes',
  description: 'Looking for an electrician in Bareilly? Book expert service for fan fittings, switches, wiring issues, and power problems at your home.',
  openGraph: {
    title: 'Trusted Electrician in Bareilly - Fast Home Fixes',
    description: 'Looking for an electrician in Bareilly? Book expert service for fan fittings, switches, wiring issues, and power problems at your home.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/electrician',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/electrician'
  }
}

export default function BareillyElectricianPage() {
  const faqs: FAQItem[] = [
    {
      question: 'How can I find a trusted electrician in Bareilly?',
      answer:
        'You can find a trusted electrician in Bareilly through EzyHelpers. Our skilled and certified electricians are locally experienced, background-verified, and equipped with proper tools and safety gear to handle all electrical repairs with complete safety and compliance.',
    },
    {
      question: 'Are electricians in Bareilly available for house wiring services?',
      answer:
        'Yes, electricians in Bareilly are available for house wiring services, including safe installation and repairs for both old and new homes. Our certified electricians handle complete house wiring with proper safety standards and modern electrical codes.',
    },
    {
      question: 'Can I get same-day electrical repair services in Bareilly?',
      answer:
        'Yes, you can get same-day electrical repair services in Bareilly through EzyHelpers. Our skilled electricians provide fast, same-day service for switch repairs, fan installations, wiring issues, and other electrical problems with transparent pricing.',
    },
    {
      question: 'Do electricians in Bareilly handle switch and socket repairs?',
      answer:
        'Yes, electricians in Bareilly handle switch and socket repairs, including fixing loose connections, faulty switches, damaged sockets, and electrical connection issues. Our certified electricians ensure safe and proper functioning of all electrical switches and outlets.',
    },
    {
      question: 'Are fan and light installation services available in Bareilly?',
      answer:
        'Yes, fan and light installation services are available from electricians in Bareilly. Our certified electricians provide proper fitting for ceiling fans, lights, chandeliers, and other electrical fixtures with safe wiring and secure installation.',
    },
    {
      question: 'Do electricians in Bareilly handle old house wiring repairs?',
      answer:
        'Yes, electricians in Bareilly handle old house wiring repairs, including fixing damaged wires in traditional homes, upgrading outdated electrical systems, and safe rewiring for older constructions with modern safety standards and proper electrical codes.',
    },
    {
      question: 'Do your electricians repair ceiling fans?',
      answer:
        'Yes, electricians in Bareilly repair ceiling fans, including fixing wobbling fans, slow speed problems, motor issues, and electrical connection faults. Our skilled electricians ensure proper fan functioning with safe electrical connections and mechanical repairs.',
    },
    {
      question: "What services do EzyHelpers' electricians in Bareilly offer?",
      answer:
        "Our electricians in Bareilly provide house wiring, fan and light installation, switch/socket repairs, inverter and UPS installation, circuit breaker repairs, generator setup, safety checks, and emergency electrical services for homes.",
    },
    {
      question: 'What safety checks do your electricians perform?',
      answer:
        'Our electricians in Bareilly perform complete safety inspections, including checking for short circuits, loose wires, overloaded circuits, and faulty switchboards to prevent future hazards.',
    },
    {
      question: 'Are your electricians licensed to work in Bareilly?',
      answer:
        'Yes, all electricians provided by EzyHelpers are licensed, certified, and trained to deliver safe electrical services in Bareilly homes according to standard electrical codes.',
    },
  ]
  const electricalServices = [
    {
      title: "House Wiring & Installation",
      description: "Complete electrical wiring solutions for new constructions and rewiring of old homes",
      icon: BoltIcon,
      features: ["New house wiring", "Rewiring old homes", "Circuit installation", "Safety compliance"]
    },
    {
      title: "Switch/Socket Repairs",
      description: "Fix loose connections, faulty switches, and electrical outlet problems",
      icon: LightBulbIcon,
      features: ["Switch replacements", "Socket repairs", "Connection fixes", "Electrical upgrades"]
    },
    {
      title: "Fan & Light Installation",
      description: "Professional installation of ceiling fans, lights, and chandeliers",
      icon: CogIcon,
      features: ["Ceiling fan installation", "Light fixture setup", "Chandelier mounting", "Dimmer switches"]
    },
    {
      title: "Circuit Breaker Repair",
      description: "MCB/ELCB tripping issues and electrical safety solutions",
      icon: ShieldCheckIcon,
      features: ["MCB replacement", "ELCB installation", "Safety switch fixes", "Circuit protection"]
    },
    {
      title: "Electrical Safety Check",
      description: "Prevent short circuits and fire risks with comprehensive electrical inspections",
      icon: CheckCircleIcon,
      features: ["Safety inspections", "Risk assessment", "Preventive maintenance", "Compliance checks"]
    },
    {
      title: "Inverter/UPS Installation",
      description: "Reliable backup power setup with proper load assessment and wiring",
      icon: BoltIcon,
      features: ["Load calculation", "Safe installation", "Backup optimization", "Wiring compliance"]
    },
    {
      title: "Generator Setup",
      description: "Expert installation and maintenance of home generators for continuous power",
      icon: WrenchScrewdriverIcon,
      features: ["Home generator install", "Maintenance", "Safety ensuring", "Outage readiness"]
    },
    {
      title: "Emergency Electrical Repairs",
      description: "24/7 power failure support and urgent electrical problem solutions",
      icon: ExclamationTriangleIcon,
      features: ["Power restoration", "Emergency fixes", "Fault detection", "Urgent repairs"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Skilled & Certified Electricians",
      description: "Fast response within 2 hours for electrical emergencies in Bareilly",
      icon: AcademicCapIcon
    },
    {
      title: "Fast Same-Day Service",
      description: "All electricians are properly licensed and trained for safe electrical work",
      icon: ClockIcon
    },
    {
      title: "Clear and Honest Pricing",
      description: "Clear, upfront pricing with no hidden charges for electrical services",
      icon: CurrencyRupeeIcon
    },
    {
      title: "Complete Electrical Care",
      description: "Round-the-clock support for electrical emergencies and power failures",
      icon: ShieldCheckIcon
    },
    {
      title: "Emergency Power Experts",
      description: "Round-the-clock support for electrical emergencies and power failures",
      icon: ExclamationTriangleIcon
    }
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Electrician Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <BoltIcon className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Safe & Licensed Electrical Work</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Electrician in Bareilly - Trusted Electrical Repair Services for All Your Home Needs
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Facing power cuts or wiring faults? Our certified electricians in Bareilly deliver safe, reliable, and quick home electrical solutions.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Verified & Background-Checked Electricians</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Safe & Licensed Work</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Same-Day Electrical Solutions</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Transparent Upfront Pricing</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-yellow-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Electrician Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Electrical Service
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-yellow-200 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Quick</div>
                  <div className="text-yellow-200 text-sm">Fix</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Hour</div>
                  <div className="text-yellow-200 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers’ Electrician in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers’ Electrician in Bareilly?</h2>
              <p className="text-lg text-gray-600">Trust, safety, and local expertise for your Bareilly home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-yellow-100 rounded-xl p-3 w-fit mb-6"><feature.icon className="h-8 w-8 text-yellow-600" /></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Electrical Repair Services in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Electrical Repair Services in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Safe, professional solutions for every power problem in your Bareilly home</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {electricalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 rounded-xl p-3 mr-4"><service.icon className="h-8 w-8 text-yellow-600" /></div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Electrical Repairs We Handle */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Electrical Repairs We Handle</h2>
              <p className="text-gray-700 mb-4">Expert Solutions for Bareilly’s Power Problems</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Wiring & Rewiring: Fix old, damaged wires in traditional homes</li>
                <li>Electrical Appliance Repair: Troubleshoot fridge, AC & geyser power issues</li>
                <li>Power Fluctuation Protection: Stabilizers & surge protectors for safety</li>
                <li>Fan Repairs: Fix wobbling, slow speed & motor problems</li>
                <li>Lighting Solutions: Diwali lights, wedding decor & faulty bulbs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Electrical Challenges We Solve */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Local Electrical Challenges We Solve</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Frequent Power Cuts: Inverter & generator solutions</li>
                <li>Old Wiring Risks: Safe upgrades for traditional homes</li>
                <li>Voltage Fluctuations: Protection for appliances</li>
                <li>Summer Cooling Setup: AC & cooler electrical support</li>
                <li>Festival Lighting: Safe Diwali & wedding decorations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Book Our Electricians in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Electricians in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast and stress-free booking in just 4 easy steps:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Issue</h3>
                <p className="text-gray-600 leading-relaxed">Briefly explain your electrical problem and the required repair service.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick a Convenient Time</h3>
                <p className="text-gray-600 leading-relaxed">Select a day and time slot that suits you best.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Technician Visit</h3>
                <p className="text-gray-600 leading-relaxed">Our trained professional visits on time with tools for safe work.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Service & Support</h3>
                <p className="text-gray-600 leading-relaxed">Guaranteed satisfaction plus after-service support whenever you need help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Easy solutions beyond electrician services for Bareilly homes:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/carpenter" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carpentry & Furniture Services</h3>
                <p className="text-gray-600 mb-4">Repair or make wooden doors, cabinets, and furniture for a perfect fit.</p>
                <div className="flex items-center text-purple-600 font-semibold">Explore Carpentry Services <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>

              <Link href="/cities/bareilly/painting" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painting Services</h3>
                <p className="text-gray-600 mb-4">Give your home fresh, smooth, and long-lasting paint finishes from experts.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn About Painting Services <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>

              <Link href="/cities/bareilly/sofa-cleaning" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sofa Cleaning Services</h3>
                <p className="text-gray-600 mb-4">Deep-clean sofas, cushions, and upholstery to remove stains and keep them fresh.</p>
                <div className="flex items-center text-green-600 font-semibold">Explore Sofa Cleaning Services <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-yellow-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-yellow-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
                Don't Let Electrical Problems Disturb Your Home!
              </h2>
              <p className="text-xl mb-8 text-yellow-100">
                Book trusted electricians in Bareilly today for safe and reliable electrical solutions
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-yellow-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Electrician Now
                </Link>
                
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call +91 9972571005
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choosing a Local Electrician in Bareilly Makes a Difference */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choosing a Local Electrician in Bareilly Makes a Difference</h2>
              <p className="text-gray-700 mb-4">When it comes to electrical safety, hiring a trusted local electrician in Bareilly ensures not only faster service but also a deeper understanding of area-specific power issues. EzyHelpers connects you with certified electricians who are familiar with the common challenges faced in Bareilly homes, such as voltage fluctuations during summer, outdated wiring in older constructions, or frequent tripping due to unbalanced loads.</p>
              <p className="text-gray-700 mb-4">Unlike outstation technicians or unverified freelancers, our local electricians can quickly reach your location, assess the the problem, and offer safe and compliant repairs without delay. From understanding local power supply patterns to customising solutions based on your household’s electricity usage, our professionals deliver services that are relevant and reliable.</p>
              <p className="text-gray-700">Additionally, EzyHelpers' electricians come equipped with proper tools, ID verification, and full safety gear, so every electrical repair is done to the highest standard. Whether it’s an emergency fuse replacement or planning power backups during Bareilly’s power cuts, our team ensures your home stays functional and safe.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
