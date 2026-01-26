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
  AcademicCapIcon,
  Battery100Icon,
  CpuChipIcon,
  SparklesIcon,
  SunIcon,
  SignalIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Trusted Electrician in Bareilly - Fast Home Fixes',
  description: 'Looking for an electrician in Bareilly? Book expert help for fan fittings, switches, wiring issues, and home power problems.',
  openGraph: {
    title: 'Trusted Electrician in Bareilly - Fast Home Fixes',
    description: 'Looking for an electrician in Bareilly? Book expert help for fan fittings, switches, wiring issues, and home power problems.',
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
        'You can find a trusted electrician in Bareilly with EzyHelpers. Our certified electricians are trained, background checked, and experienced in handling all types of electrical issues. They carry proper tools and follow safety rules to ensure safe and correct work every time.',
    },
    {
      question: 'Are electricians in Bareilly available for house wiring services?',
      answer:
        'Yes, electricians in Bareilly provide full house wiring services for both old and new homes. Our certified electricians follow modern electrical standards and install safe wiring systems that prevent overloads and future risks.',
    },
    {
      question: 'Can I get same-day electrical repair services in Bareilly?',
      answer: 'Yes, you can get same-day electrical repair services in Bareilly. EzyHelpers electricians offer quick support for switch repairs, fan fittings, wiring faults, and other home electrical problems with clear pricing.',
    },
    {
      question: 'Do electricians in Bareilly handle switch and socket repairs?',
      answer: 'Yes, electricians in Bareilly fix loose switches, damaged sockets, and wiring faults. Our certified electricians ensure every switchboard and socket works safely and properly after the repair.',
    },
    {
      question: 'Are fan and light installation services available in Bareilly?',
      answer: 'Yes, fan and light installation services are available in Bareilly. Our electricians install fans, tube lights, decorative lights, and chandeliers with correct wiring and firm support.',
    },
    {
      question: 'Do electricians in Bareilly handle old house wiring repairs?',
      answer: 'Yes, electricians in Bareilly repair old or damaged wiring in traditional homes. They update faults, replace unsafe wires, and upgrade old electrical systems to match modern safety rules.',
    },
    {
      question: 'Do your electricians repair ceiling fans?',
      answer: 'Yes, our electricians in Bareilly repair ceiling fans. They fix wobbling fans, noise issues, slow speed, and motor problems to make sure the fan works smoothly and safely.',
    },
    {
      question: "What services do EzyHelpers’ electricians in Bareilly offer?",
      answer: "Our electricians offer wiring, switch/socket repairs, fan/light installations, inverter setup, generator installation, safety checks, circuit breaker repair, and emergency electrical support for homes.",
    },
    {
      question: 'What safety checks do your electricians perform?',
      answer: 'Our electricians check for loose wires, short circuits, overloaded boards, and faulty switchboards. They ensure your home is safe from shocks, fire risks, and power failure issues.',
    },
    {
      question: 'Are your electricians licensed to work in Bareilly?',
      answer: 'Yes, all EzyHelpers electricians are licensed, trained, and certified to work safely in Bareilly homes. They follow proper electrical codes and complete every job with full safety standards.',
    },
  ]

  const repairservices = [
    { name: 'Wiring & Rewiring', desc: 'Fixing damaged or old wires in traditional houses', icon: BoltIcon },
    { name: 'Electrical Appliance Repair', desc: 'Solving fridge, AC, and geyser power problems', icon: WrenchScrewdriverIcon },
    { name: 'Power Fluctuation Protection', desc: 'Installing stabilizers & surge protectors', icon: SignalIcon },
    { name: 'Fan Repairs', desc: 'Solving wobbling, noise, speed, and motor issues', icon: CogIcon },
    { name: 'Lighting Solutions', desc: 'Fixing faulty bulbs, Diwali lights, and wedding decor', icon: SparklesIcon },
  ]

  const challenges = [
    { name: 'Frequent Power Cuts', desc: 'Inverter and generator help', icon: Battery100Icon },
    { name: 'Old Wiring Issues', desc: 'Safe upgrades for older homes', icon: ExclamationTriangleIcon },
    { name: 'Voltage Fluctuations', desc: 'Appliance protection solutions', icon: SignalIcon },
    { name: 'Summer Cooling Setup', desc: 'Electrical support for ACs and coolers', icon: SunIcon },
    { name: 'Festival Lighting Needs', desc: 'Safe installation and removal during Diwali & weddings', icon: SparklesIcon },
  ]

  const electricalServices = [
    {
      title: "House Wiring",
      description: "Complete wiring and rewiring for old and new homes with proper insulation and safety.",
      icon: HomeIcon,
    },
    {
      title: "Switch/Socket Repairs",
      description: "Fixing burnt sockets, loose switches, wiring faults, and connection problems safely.",
      icon: BoltIcon,
    },
    {
      title: "Fan & Light Installation",
      description: "Proper and secure installation of fans, lights, chandeliers, and decorative fittings.",
      icon: LightBulbIcon,
    },
    {
      title: "Circuit Breaker Repair",
      description: "Solving MCB/ELCB tripping and replacing faulty breakers to avoid hazards.",
      icon: CpuChipIcon,
    },
    {
      title: "Electrical Safety Check",
      description: "Full inspection of wires, boards, and load capacity to prevent shocks and fire risks.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Inverter/UPS Installation",
      description: "Professional setup to give your home reliable backup power during cuts.",
      icon: Battery100Icon,
    },
    {
      title: "Generator Setup",
      description: "Safe installation and maintenance of home generators for nonstop power.",
      icon: CogIcon,
    },
    {
      title: "Emergency Electrical Repairs",
      description: "24/7 support to fix sudden sparks, outages, short circuits, or wiring issues.",
      icon: ExclamationTriangleIcon,
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Skilled & Certified Electricians",
      description: "Our electricians are trained, experienced, and follow safety rules for every job.",
      icon: AcademicCapIcon
    },
    {
      title: "Fast Same-Day Service",
      description: "Quick support for urgent electrical issues like sparks, tripping, or sudden outages.",
      icon: ClockIcon
    },
    {
      title: "Clear and Honest Pricing",
      description: "No hidden charges. You know the final price before the work begins.",
      icon: CurrencyRupeeIcon
    },
    {
      title: "Complete Electrical Care",
      description: "From wiring to appliance issues, we fix all types of electrical problems.",
      icon: ShieldCheckIcon
    },
    {
      title: "Emergency Power Experts",
      description: "Available round the clock to solve sudden faults, power cuts, and breaker trips.",
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
                Professional Electrician in Bareilly
              </h1>

              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Facing power cuts or wiring faults? Our certified electricians in Bareilly offer safe, reliable, and quick electrical repair services for every home.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Verified Electricians</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Same-Day Electrical Service</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Clear & Upfront Pricing</div>
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
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
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
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-yellow-200 text-sm">Safe Electrical Work</div>
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
              <p className="text-lg text-gray-600">Simple, safe, and trusted electrical service for your Bareilly home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Safe, expert help for every power issue in your Bareilly home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {electricalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 rounded-xl p-3 mr-4"><service.icon className="h-8 w-8 text-yellow-600" /></div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Types of Electrical Repairs We Handle
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete electrical solutions for Bareilly homes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairservices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Local Electrical Challenges We Solve
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((appliance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <appliance.icon className="h-8 w-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="text-gray-900 font-semibold">{appliance.name}</div>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{appliance.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Book Our Electricians in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Electricians in Bareilly</h2>
              <p className="text-lg text-gray-600">Easy booking in four simple steps:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Issue</h3>
                <p className="text-gray-600 leading-relaxed">Tell us your electrical problem and what repair you need.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick a Convenient Time</h3>
                <p className="text-gray-600 leading-relaxed">Choose a date and time slot that works best for you.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Technician Visit</h3>
                <p className="text-gray-600 leading-relaxed">Our certified electrician arrives on time with the required tools.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Service & Support</h3>
                <p className="text-gray-600 leading-relaxed">You get proper repair work plus after-service support when needed.</p>
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
                <p className="text-gray-600 mb-4">Fix wooden doors, cabinets, and furniture with expert help.</p>
                <div className="flex items-center text-purple-600 font-semibold">Learn More <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>

              <Link href="/cities/bareilly/painting" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painting Services</h3>
                <p className="text-gray-600 mb-4">Smooth and long-lasting paintwork for a fresh look.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn More <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>

              <Link href="/cities/bareilly/sofa-cleaning" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sofa Cleaning Services</h3>
                <p className="text-gray-600 mb-4">Deep cleaning for sofas and cushions to remove stains and dust.</p>
                <div className="flex items-center text-green-600 font-semibold">Learn More <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
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
                Book a trusted electrician in Bareilly with EzyHelpers. From small switch issues to full wiring work, we fix everything with safety and care.
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
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choosing a Local Electrician in Bareilly Makes a Difference */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Choosing a Local Electrician in Bareilly Makes a Difference</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
              <p>Hiring a local electrician ensures faster service and a better understanding of Bareilly’s common electrical problems. Our certified electricians know how power supply behaves in different areas of Bareilly — whether it’s summer voltage fluctuations, old wiring in older homes, or frequent load-based tripping.</p>
              <p>Local electricians reach your home faster, identify the issue quickly, and offer safe repairs without delay. They understand the local usage pattern, the type of wiring commonly used in Bareilly homes, and the common causes of tripping or power cuts.</p>
              <p>EzyHelpers electricians carry proper safety gear, ID cards, and tools. Every repair — big or small — is done safely and correctly. Whether you need a quick fuse fix or want to prepare for summer outages, our professionals keep your home safe and working smoothly.</p>
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
