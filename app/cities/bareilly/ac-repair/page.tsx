import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
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
  description:
    'Looking for air conditioner repair in Bareilly? Get reliable AC service, gas refill, leak repair, and maintenance by trained, verified technicians.',
  openGraph: {
    title: 'Air Conditioner Repair in Bareilly - AC Experts',
    description:
      'Looking for air conditioner repair in Bareilly? Get reliable AC service, gas refill, leak repair, and maintenance by trained, verified technicians.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/ac-repair',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/ac-repair'
  }
}

export default function BareillyACRepair() {
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
        <section className="relative bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Air Conditioner Repair in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Bareilly summers are very hot, and a working AC is important for comfort. EzyHelpers provides fast, reliable, and budget-friendly air conditioner repair in Bareilly to keep your home cool, safe, and energy-efficient during the entire season.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-blue-700 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  Book AC Repair Now
                </Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Emergency Support
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {badges.map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {b}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-5xl mx-auto">
                {metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-blue-100 text-sm">{m.label}</div>
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
        <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let AC Trouble Heat Up Your Home!</h2>
              <p className="text-xl mb-8 text-blue-100">Fix AC issues quickly with EzyHelpers. Stay cool and stress-free during Bareilly’s hot weather. Book your AC technician today.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-blue-700 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book AC Repair Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular AC Maintenance Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Regular AC Maintenance Matters for Every Bareilly Home</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-5xl mx-auto">
              <p>Regular AC servicing keeps your AC running smoothly, saves electricity, and prevents sudden breakdowns. Bareilly’s dust, heat, and power fluctuations make AC maintenance very important.</p>
              <p>Our air conditioner repair in Bareilly includes complete checks - filter cleaning, coil cleaning, gas level checks, drainage inspection, thermostat testing, and more. This keeps your AC cool even on the hottest days.</p>
              <p>Regular servicing also prevents hidden issues like fungus, dust blockage, water leakage, and electrical damage. Ignoring these can affect your AC’s cooling and your family’s health.</p>
              <p>EzyHelpers technicians understand Bareilly’s local weather and home needs. Whether it’s a split, window, or inverter AC, we ensure clean, long-lasting, and safe performance.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
