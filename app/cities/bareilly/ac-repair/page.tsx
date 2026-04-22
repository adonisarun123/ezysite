import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import NestCTA from '@/components/NestCTA'
import {
  PhoneIcon,
  CheckCircleIcon,
  HomeIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  BeakerIcon,
  SparklesIcon,
  CloudIcon,
  BoltIcon,
  Cog6ToothIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Air Conditioner Repair in Bareilly - AC Experts',
  description: 'Looking for air conditioner repair in Bareilly? We offer trusted AC service, gas refills, leak fixes, and maintenance by certified technicians.',
  openGraph: {
    title: 'Air Conditioner Repair in Bareilly - AC Experts',
    description: 'Looking for air conditioner repair in Bareilly? We offer trusted AC service, gas refills, leak fixes, and maintenance by certified technicians.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/air-conditioner-repair',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/air-conditioner-repair'
  }
}

export default function BareillyACRepair() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What services are included in air conditioner repair in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our air conditioner repair in Bareilly includes gas refilling, filter cleaning, thermostat repair, water leakage fixes, and full performance checks to keep your AC running efficiently during Bareilly's extreme heat."
      }
    },{
      "@type": "Question",
      "name": "Can you fix the poor cooling performance in my AC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our AC technicians in Bareilly are trained to fix weak cooling caused by clogged filters, gas leaks, or thermostat issues. We ensure your AC cools effectively even during Bareilly's peak summer heat."
      }
    },{
      "@type": "Question",
      "name": "Do you clean or replace AC filters in Bareilly homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer filter cleaning and replacement services to combat dust from Bareilly's construction zones. Clean filters help improve air quality and cooling efficiency in your home."
      }
    },{
      "@type": "Question",
      "name": "Can you repair AC units damaged by voltage fluctuations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our AC repair in Bareilly includes fixing units affected by voltage fluctuations and power cuts. We check electrical connections and damaged parts like compressors or PCBs."
      }
    },{
      "@type": "Question",
      "name": "Do you fix AC water leakage problems in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we repair water leakage caused by humidity or blocked drainage. Our Bareilly AC technicians ensure proper drainage to avoid damage and odor issues."
      }
    },{
      "@type": "Question",
      "name": "Can you remove bad odor and fungus from AC vents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we treat fungus and foul odors caused by monsoon moisture. Our deep cleaning services refresh AC vents, ensuring clean and healthy air."
      }
    },{
      "@type": "Question",
      "name": "Do you offer AC installation and uninstallation in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we handle AC installation and uninstallation for home shifting or upgrades. Our best AC technicians in Bareilly ensure a safe, professional setup."
      }
    },{
      "@type": "Question",
      "name": "What are the most common AC problems in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AC issues include poor cooling, filter clogging from dust, water leakage, voltage-related damage, and odor from fungus. We fix all these with expert care."
      }
    },{
      "@type": "Question",
      "name": "Is same-day AC repair available in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, same-day AC repair is available in Bareilly with EzyHelpers. Our local technicians ensure fast fixes, even during the summer rush."
      }
    },{
      "@type": "Question",
      "name": "Can you help during emergency AC breakdowns in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer emergency AC repair support in Bareilly with fast technician dispatch and priority service to restore comfort quickly."
      }
    },{
      "@type": "Question",
      "name": "How do I know if my AC needs servicing in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your AC isn’t cooling properly, makes noise, leaks water, or smells musty, it’s time to call the best AC technician in Bareilly for a check-up."
      }
    }]
  };
  const badges = [
    '✓ Verified AC Technicians',
    '✓ Emergency Same-Day Visits',
    '✓ Multi-Brand AC Repair Experts',
  ]

  const metrics = [
    { value: 'Emergency ', label: 'Support' },
    { value: '2-Hour', label: 'Response Time' },
    { value: '1,000+', label: 'Happy Bareilly Families' },
  ]

  const whyChooseFeatures = [
    {
      title: 'Skilled & Experienced Technicians',
      description: 'Our AC experts can handle all types of AC problems.',
      icon: UserGroupIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Same-Day Quick Service',
      description: 'Most issues are solved on the same day, even in peak summer.',
      icon: ClockIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Transparent & Fair Pricing',
      description: 'No hidden charges or unnecessary part replacements.',
      icon: CurrencyRupeeIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Complete AC Repair Solutions',
      description: 'We fix cooling issues, gas leaks, filters, drainage, odor, and more.',
      icon: WrenchScrewdriverIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
  ]

  const cleaningServices = [
    { title: 'AC Gas Refilling & Leak Repair', description: 'Fix gas leaks and refill coolant to restore proper cooling.', icon: BeakerIcon },
    { title: 'Cooling Issues & Low Cooling Fix', description: 'Troubleshoot and repair ACs that are not cooling properly.', icon: WrenchScrewdriverIcon },
    { title: 'Filter Cleaning & Replacement', description: 'Clean or replace clogged filters for better airflow.', icon: SparklesIcon },
    { title: 'Water Leakage Repair', description: 'Fix indoor unit water dripping and drainage blockages.', icon: CloudIcon },
    { title: 'AC Installation & Uninstallation', description: 'Professional setup, removal, and shifting support.', icon: WrenchScrewdriverIcon },
    { title: 'Deep Cleaning (Foam Jet / Water Jet)', description: 'Remove dust and dirt buildup for improved cooling.', icon: SparklesIcon },
    { title: 'Compressor & Motor Repair', description: 'Repair or replace faulty compressors, motors, and major parts.', icon: BoltIcon },
    { title: 'Thermostat & Control Problems', description: 'Fix temperature control issues, remote problems, and sensor faults.', icon: Cog6ToothIcon },
  ]

  const commonProblems = [
    'Poor Cooling – Caused by clogged filters or low gas',
    'Dust Clogging – Bareilly’s dust blocks filter quickly',
    'Voltage & Power Issues – Power cuts damage AC parts',
    'Water Leakage – Monsoon moisture blocks drainage',
    'Bad Smell & Fungus – Unclean vents spread odor',
  ]

  const otherVsUs = {
    other: [
      'Charge extra for small issues',
      'Do temporary fixes that fail again',
      'Hard to find during summer',
    ],
    us: [
      'Local technicians for fast response',
      'Permanent, long-lasting repair work',
      'Affordable and transparent service',
    ],
  }

  const steps = [
    { step: '1', title: 'Share Your AC Issue', desc: 'Tell us your AC type and the exact cooling problem you are facing.' },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Choose a specific day and time slot that suits your family best.' },
    { step: '3', title: 'Expert AC Technician Visit', desc: 'Our verified technicians arrive fully equipped for safe, reliable AC repairs.' },
    { step: '4', title: 'Quality Service & Support', desc: 'We ensure satisfaction and offer follow-up help whenever you need it.' },
  ]

  const explore = [
    { href: '/cities/bareilly/plumber', title: 'Plumbing Services', desc: 'Leak fixes and pipe repair for smooth water flow.', cta: 'Learn More', icon: WrenchScrewdriverIcon },
    { href: '/cities/bareilly/electrician', title: 'Electrical Services', desc: 'Light, fan, wiring, and switchboard repairs.', cta: 'Learn More', icon: BoltIcon },
    { href: '/cities/bareilly/pest-control', title: 'Pest Control Services', desc: 'Safe, quick treatment for cockroaches, ants, termites, and more.', cta: 'Learn More', icon: ShieldCheckIcon },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What services are included in air conditioner repair in Bareilly?',
      answer:
        "Our AC repair includes gas refilling, filter cleaning, thermostat fixing, leakage repair, and complete checks to keep your AC cooling well during Bareilly’s heat.",
    },
    {
      question: 'Can you fix poor cooling issues?',
      answer:
        "Yes. Our Bareilly AC experts fix weak cooling caused by dust, low gas, or thermostat problems.",
    },
    {
      question: 'Do you replace AC filters in Bareilly?',
      answer:
        "Yes. We clean or replace filters blocked by Bareilly’s dust and pollution.",
    },
    {
      question: 'Do you repair ACs damaged by voltage issues?',
      answer:
        'Yes. We fix AC units damaged by Bareilly’s frequent power cuts and voltage changes.',
    },
    {
      question: 'Do you fix AC water leakage?',
      answer:
        'Yes. We repair water leakage caused by humidity or drainage blockages.',
    },
    {
      question: 'Can you remove fungus or bad smell from AC vents?',
      answer:
        'Yes. We clean vents and treat fungus to give fresh, clean air.',
    },
    {
      question: 'Do you handle AC installation and uninstallation?',
      answer:
        'Yes. We safely install or remove ACs during home shifting or upgrades.',
    },
    {
      question: 'What are the common AC problems in Bareilly?',
      answer:
        'Poor cooling, dust blockage, water leakage, voltage damage, and bad odor.',
    },
    {
      question: 'Do you offer same-day AC repair in Bareilly?',
      answer:
        'Yes. Same-day service is available across Bareilly.',
    },
    {
      question: 'Can you help during emergency breakdowns?',
      answer:
        'Yes. We offer emergency visits and quick fixes.',
    },
    {
      question: 'How do I know if my AC needs servicing?',
      answer:
        'If your AC is not cooling, smells bad, leaks water, or makes noise, it needs servicing.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'AC Repair' },
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white focus:outline-none">
                Air Conditioner Repair in Bareilly: Keep Your Cool with EzyHelpers!
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Professional AC Service, Gas Refills, and Leak Fixes in Bareilly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-10 text-center">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book AC Repair Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {badges.map((badge, idx) => (
                  <span key={idx} className="text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 font-semibold text-white">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10 text-center">
                    <div className="text-3xl font-extrabold text-white mb-1 leading-tight">{m.value}</div>
                    <div className="text-indigo-100 font-medium text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Air Conditioner Repair in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Air Conditioner Repair in Bareilly?</h2>
              <p className="text-lg text-gray-600">We offer trusted and quick AC repair in Bareilly with complete comfort and care.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our AC Cleaning Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 font-display">What Services Are Offered by EzyHelpers’ AC Technicians in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple, reliable, and professional AC repair solutions for your home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cleaningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-100 via-sky-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-100 rounded-xl p-3 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Is Your AC Failing ... */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Struggling With AC Issues in Bareilly? Get Expert Help Fast</h2>
              <p className="text-gray-700 max-w-5xl mx-auto">Bareilly’s harsh summers make AC a must-have. But when your AC stops cooling, leaks water, or trips due to power issues, daily life becomes difficult.</p>
            </div>

            <div className="mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Common AC Problems in Bareilly:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {commonProblems.map((p, i) => (
                  <div key={i} className="flex items-start bg-red-50 p-4 rounded-xl border border-red-100 transition-all hover:shadow-md">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3 shrink-0" />
                    <span className="text-gray-800 font-medium text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 font-weight-700 text-3xl mb-4">Don’t Suffer in the Heat!</div>
              <ul className="flex flex-wrap justify-center gap-4 text-gray-700 mb-6">
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-6 w-6 text-green-600 shrink-0" /> <span>Fast AC Repair– Same-day visits</span></li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-6 w-6 text-green-600 shrink-0" /> <span>Emergency Support– Quick service during breakdowns</span></li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-6 w-6 text-green-600 shrink-0" /> <span>Long-Lasting Solutions– No repeated complaints</span></li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-blue-700 text-white font-semibold text-lg py-3 px-6 rounded-xl hover:bg-blue-800 transition-all duration-300">Book AC Repair Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-blue-700 font-semibold text-lg py-3 px-6 rounded-xl border-2 border-blue-700 hover:bg-blue-50 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call: +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bareilly Residents Trust ... */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Bareilly Residents Trust EzyHelpers?</h2>
              <p className="text-gray-600">See the difference between local technicians and verified experts.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Others */}
              <div className="bg-white rounded-2xl p-8 border border-gray-300 opacity-100 hover:shadow-xl transition-all">
                <div className="text-xl font-bold text-gray-700 mb-6 flex items-center">
                  <XMarkIcon className="h-6 w-6 mr-2 text-gray-600" />
                  Other Technicians
                </div>
                <ul className="space-y-4">
                  {otherVsUs.other.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <XMarkIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Us */}
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-100 shadow-xl relative overflow-hidden transform md:-translate-y-2">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Top Rated</div>
                <div className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 mr-2 text-blue-600" />
                  EzyHelpers
                </div>
                <ul className="space-y-4">
                  {otherVsUs.us.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-800 font-medium">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book ... */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Air Conditioner Repair Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast and stress-free booking process in just 4 simple steps</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">{st.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{st.title}</h3>
                  <p className="text-gray-600">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Simple solutions beyond AC repairs for Bareilly homes:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {explore.map((e, i) => (
                <Link key={i} href={e.href} className={`group rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${i === 0 ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-blue-100 hover:border-blue-300' : i === 1 ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-amber-100 hover:border-amber-300' : 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100 hover:border-rose-300'}`}>
                  <e.icon className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-amber-600' : 'text-rose-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-gray-600 mb-4">{e.desc}</p>
                  <div className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-amber-600' : 'text-rose-600'} font-semibold`}>{e.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center font-display">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Don’t Let AC Trouble Heat Up Your Home!
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium font-body leading-relaxed">
                Fix AC issues quickly with EzyHelpers. Stay cool and stress-free during Bareilly’s hot weather. Book your AC technician today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto font-display">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book AC Repair Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg py-4 px-10 rounded-2xl transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular AC Maintenance Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-4 border-indigo-600 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Regular AC Maintenance Matters
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Regular AC servicing keeps your AC running smoothly, saves electricity, and prevents sudden breakdowns. Bareilly’s dust, heat, and power fluctuations make AC maintenance very important.</p>
              <p className="font-medium text-indigo-900/80">Our air conditioner repair in Bareilly includes complete checks - filter cleaning, coil cleaning, gas level checks, and more, ensuring peak cooling performance.</p>
              <p>Ignoring maintenance can lead to fungus, dust blockage, and electrical damage, affecting both your AC’s lifespan and your family’s health.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display text-center">FAQs</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "What services are included in air conditioner repair in Bareilly?",
                  answer: "Our air conditioner repair in Bareilly includes gas refilling, filter cleaning, thermostat repair, water leakage fixes, and full performance checks to keep your AC running efficiently during Bareilly's extreme heat."
                },
                {
                  question: "Can you fix the poor cooling performance in my AC?",
                  answer: "Yes, our AC technicians in Bareilly are trained to fix weak cooling caused by clogged filters, gas leaks, or thermostat issues. We ensure your AC cools effectively even during Bareilly's peak summer heat."
                },
                {
                  question: "Do you clean or replace AC filters in Bareilly homes?",
                  answer: "Yes, we offer filter cleaning and replacement services to combat dust from Bareilly's construction zones. Clean filters help improve air quality and cooling efficiency in your home."
                },
                {
                  question: "Can you repair AC units damaged by voltage fluctuations?",
                  answer: "Yes, our AC repair in Bareilly includes fixing units affected by voltage fluctuations and power cuts. We check electrical connections and damaged parts like compressors or PCBs."
                },
                {
                  question: "Do you fix AC water leakage problems in Bareilly?",
                  answer: "Yes, we repair water leakage caused by humidity or blocked drainage. Our Bareilly AC technicians ensure proper drainage to avoid damage and odor issues."
                },
                {
                  question: "Can you remove bad odor and fungus from AC vents?",
                  answer: "Yes, we treat fungus and foul odors caused by monsoon moisture. Our deep cleaning services refresh AC vents, ensuring clean and healthy air."
                },
                {
                  question: "Do you offer AC installation and uninstallation in Bareilly?",
                  answer: "Yes, we handle AC installation and uninstallation for home shifting or upgrades. Our best AC technicians in Bareilly ensure a safe, professional setup."
                },
                {
                  question: "What are the most common AC problems in Bareilly?",
                  answer: "AC issues include poor cooling, filter clogging from dust, water leakage, voltage-related damage, and odor from fungus. We fix all these with expert care."
                },
                {
                  question: "Is same-day AC repair available in Bareilly?",
                  answer: "Yes, same-day AC repair is available in Bareilly with EzyHelpers. Our local technicians ensure fast fixes, even during the summer rush."
                },
                {
                  question: "Can you help during emergency AC breakdowns in Bareilly?",
                  answer: "Yes, we offer emergency AC repair support in Bareilly with fast technician dispatch and priority service to restore comfort quickly."
                },
                {
                  question: "How do I know if my AC needs servicing in Bareilly?",
                  answer: "If your AC isn’t cooling properly, makes noise, leaks water, or smells musty, it’s time to call the best AC technician in Bareilly for a check-up."
                }
              ]}
            />
          </div>
        </section>
      </main>

            <NestCTA />
      <Footer />
    </>
  )
}
