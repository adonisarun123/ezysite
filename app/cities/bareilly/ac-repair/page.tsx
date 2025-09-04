import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { PhoneIcon, CheckCircleIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Air Conditioner Repair in Bareilly - Cooling Experts',
  description:
    'Looking for air conditioner repair in Bareilly? We offer trusted AC service, gas refills, leak fixes, and maintenance by certified technicians.',
  openGraph: {
    title: 'Air Conditioner Repair in Bareilly - Cooling Experts',
    description:
      'Looking for air conditioner repair in Bareilly? We offer trusted AC service, gas refills, leak fixes, and maintenance by certified technicians.',
    url: 'https://ezyhelpers.com/cities/bareilly/ac-repair',
    type: 'website',
  },
}

export default function BareillyACRepair() {
  const badges = [
    '✅ Verified & Background-Checked AC Technicians',
    '✅ Genuine Parts & Transparent Pricing',
    '✅ Local Bareilly Technicians, Always Nearby',
    '✅ Emergency Same-Day Visits',
    '✅ Multi-Brand AC Expertise',
  ]

  const metrics = [
    { value: '24/7', label: 'Emergency Support' },
    { value: '2-Hour', label: 'Response Time' },
    { value: '25+', label: 'Bareilly Service Areas Covered' },
    { value: '1,000+', label: 'Happy Bareilly Families' },
  ]

  const whyChoose = [
    'Skilled & Trained Technicians',
    'Fast Same-Day AC Service',
    'Clear and Honest Pricing',
    'Complete AC Repair Solutions',
    'Dedicated Customer Support',
  ]

  const services = [
    { title: '1. AC Gas Refilling & Leak Repair', desc: 'Quick gas leak detection and refilling to restore optimal cooling performance in 45°C+ temperatures.' },
    { title: '2. Cooling Performance Issues', desc: "Fix poor cooling problems caused by Bareilly's extreme summer heat and dust accumulation." },
    { title: '3. Filter Cleaning & Replacement', desc: 'Combat constant filter clogging from construction dust and pollution around Bareilly.' },
    { title: '4. Voltage Fluctuation Damage', desc: 'Repair AC units damaged by frequent power cuts and unstable electricity supply.' },
    { title: '5. Water Leakage Solutions', desc: 'Fix monsoon-related water leakage and humidity control problems during the rainy season.' },
    { title: '6. Fungus & Odor Treatment', desc: 'Eliminate post-monsoon fungus growth and bad odors from AC vents for fresh air.' },
    { title: '7. AC Installation & Uninstallation', desc: 'Professional setup and removal services for moving homes or upgrading units.' },
    { title: '8. Foam-Jet & Water-Jet Cleaning', desc: 'Deep cleaning services to remove stubborn dirt and improve cooling efficiency.' },
    { title: '9. Compressor Repairs', desc: 'Fix major compressor issues that cause complete AC breakdown before important events.' },
    { title: '10. Thermostat & Control Issues', desc: 'Repair faulty temperature controls and smart AC features for optimal comfort.' },
    { title: '11. Duct Cleaning & Maintenance', desc: 'Comprehensive duct cleaning to improve air quality and cooling distribution.' },
  ]

  const commonProblems = [
    'Poor Cooling Performance– Weak airflow due to dirty filters or gas leaks',
    'Dust & Pollution Clogging– Bareilly’s construction dust blocks filters fast',
    'Voltage Fluctuations– Power cuts damage AC compressors',
    'Water Leakage– Monsoon humidity causes drainage problems',
    'Fungus & Bad Odor– Unclean vents spread germs and foul smells',
  ]

  const otherVsUs = {
    other: [
      'Overcharge for simple repairs',
      'Don’t fix the problem permanently',
      'Hard to find in peak summer',
    ],
    us: [
      'Local Bareilly Technicians– Quick response',
      'No Repeat Visits Needed– One-time permanent fix',
      'Affordable Pricing– No overcharging',
    ],
  }

  const acTypes = ['✅ Split AC', '✅ Window AC', '✅ Inverter AC', '✅ Commercial AC', '✅ Tower & Cassette AC']

  const steps = [
    { step: '1', title: 'Share Your AC Issue', desc: 'Tell us your AC type and the exact cooling problem you are facing.' },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Choose a specific day and time slot that suits your family best.' },
    { step: '3', title: 'Expert AC Technician Visit', desc: 'Our verified professional arrives fully equipped for safe, reliable AC repairs.' },
    { step: '4', title: 'Quality Service & Support', desc: 'We ensure satisfaction and offer follow-up help whenever you need it.' },
  ]

  const explore = [
    { href: '/cities/bareilly/plumbing', title: 'Plumbing Services', desc: 'Leak fixes and pipe maintenance for stress-free water flow.', cta: 'Learn about plumbing services.' },
    { href: '/cities/bareilly/electrical', title: 'Electrical Services', desc: 'Fan, wiring, and light repairs by verified electricians.', cta: 'Learn about electrical services.' },
    { href: '/cities/bareilly/pest-control', title: 'Pest Control Services', desc: 'Safe and quick treatment to remove cockroaches, termites, and pests.', cta: 'Learn about pest control services.' },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What services are included in air conditioner repair in Bareilly?',
      answer:
        "Our air conditioner repair in Bareilly includes gas refilling, filter cleaning, thermostat repair, water leakage fixes, and full performance checks to keep your AC running efficiently during Bareilly's extreme heat.",
    },
    {
      question: 'Can you fix the poor cooling performance in my AC?',
      answer:
        "Yes, our AC technicians in Bareilly are trained to fix weak cooling caused by clogged filters, gas leaks, or thermostat issues. We ensure your AC cools effectively even during Bareilly's peak summer heat.",
    },
    {
      question: 'Do you clean or replace AC filters in Bareilly homes?',
      answer:
        "Yes, we offer filter cleaning and replacement services to combat dust from Bareilly's construction zones. Clean filters help improve air quality and cooling efficiency in your home.",
    },
    {
      question: 'Can you repair AC units damaged by voltage fluctuations?',
      answer:
        'Yes, our AC repair in Bareilly includes fixing units affected by voltage fluctuations and power cuts. We check electrical connections and damaged parts like compressors or PCBs.',
    },
    {
      question: 'Do you fix AC water leakage problems in Bareilly?',
      answer:
        'Yes, we repair water leakage caused by humidity or blocked drainage. Our Bareilly AC technicians ensure proper drainage to avoid damage and odor issues.',
    },
    {
      question: 'Can you remove bad odor and fungus from AC vents?',
      answer:
        'Yes, we treat fungus and foul odors caused by monsoon moisture. Our deep cleaning services refresh AC vents, ensuring clean and healthy air.',
    },
    {
      question: 'Do you offer AC installation and uninstallation in Bareilly?',
      answer:
        'Yes, we handle AC installation and uninstallation for home shifting or upgrades. Our best AC technicians in Bareilly ensure a safe, professional setup.',
    },
    {
      question: 'What are the most common AC problems in Bareilly?',
      answer:
        'AC issues include poor cooling, filter clogging from dust, water leakage, voltage-related damage, and odor from fungus. We fix all these with expert care.',
    },
    {
      question: 'Is same-day AC repair available in Bareilly?',
      answer:
        'Yes, same-day AC repair is available in Bareilly with EzyHelpers. Our local technicians ensure fast fixes, even during the summer rush.',
    },
    {
      question: 'Can you help during emergency AC breakdowns in Bareilly?',
      answer:
        'Yes, we offer emergency AC repair support in Bareilly with fast technician dispatch and priority service to restore comfort quickly.',
    },
    {
      question: 'How do I know if my AC needs servicing in Bareilly?',
      answer:
        'If your AC isn’t cooling properly, makes noise, leaks water, or smells musty, it’s time to call the best AC technician in Bareilly for a check-up.',
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
                Air Conditioner Repair in Bareilly: Keep Your Cool with EzyHelpers!
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Beat the scorching heat of Bareilly with EzyHelpers! We provide quick, reliable, and affordable air conditioner repair in Bareilly to ensure your home stays cool, comfortable, and energy-efficient throughout the summer and beyond.
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20 max-w-5xl mx-auto">
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

        {/* Why Choose ... */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Air Conditioner Repair in Bareilly?</h2>
              <p className="text-lg text-gray-600">Trust, speed, and professional care make us your first choice for AC repairs in Bareilly.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered ... */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Services Offered by EzyHelpers’ Best AC Technician in Bareilly</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions for all your Air Conditioner repair needs in Bareilly's challenging climate</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="font-semibold text-gray-900">{s.title}</div>
                  <div className="text-gray-600">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Is Your AC Failing ... */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Is Your AC Failing in Bareilly’s Extreme Heat? We Can Help!</h2>
            <p className="text-gray-700 mb-4">Bareilly’s scorching summers make ACs a necessity, not a luxury. But when your AC stops cooling, gas leaks, or trips due to voltage issues, your family’s comfort and health are at risk.</p>
            <div className="space-y-2 mb-6">
              {commonProblems.map((p, i) => (
                <div key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span className="text-gray-800">{p}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-6">
              <div className="font-semibold text-gray-900 mb-2">Don’t Suffer in the Heat!</div>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>✅ Fast AC Repair– Same-day service available</li>
                <li>✅ Emergency Fixes– Even during peak summer breakdowns</li>
                <li>✅ Long-Lasting Solutions– No repeated repair calls</li>
              </ul>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Bareilly Residents Trust EzyHelpers for AC Repairs?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-lg font-bold text-gray-900 mb-2">Other AC Technicians</div>
                <ul className="text-gray-700 list-disc pl-5 space-y-1">
                  {otherVsUs.other.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-lg font-bold text-gray-900 mb-2">EzyHelpers’ best AC technicians in Bareilly</div>
                <ul className="text-gray-700 list-disc pl-5 space-y-1">
                  {otherVsUs.us.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of AC Units We Service */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Types of AC Units We Service</h2>
            <p className="text-gray-700 mb-6">Complete AC servicing options for every Bareilly home:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acTypes.map((t, i) => (
                <div key={i} className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-6 border border-cyan-100 text-gray-900 font-semibold">
                  {t}
                </div>
              ))}
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
                  <HomeIcon className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-amber-600' : 'text-rose-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
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
              <p className="text-xl mb-8 text-blue-100">Fix your AC issues quickly with EzyHelpers. Stay cool and worry-free during Bareilly’s hot summer. Book your AC technician now and enjoy trusted, safe service.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-blue-700 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book AC Repair Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular AC Maintenance Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Regular AC Maintenance Matters for Every Bareilly Home</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Regular AC maintenance is not just about comfort; it’s about performance, savings, and safety. In Bareilly’s extreme summers and dusty environment, skipping timely service can lead to frequent breakdowns, costly repairs, and poor indoor air quality.</p>
              <p>Our air conditioner repair in Bareilly includes more than just emergency fixes. We focus on proactive inspections that extend the lifespan of your unit and improve its cooling efficiency. From filter cleaning and coil inspections to gas level checks and thermostat calibration, our technicians cover every detail to keep your AC running smoothly even during peak summer.</p>
              <p>Routine servicing also helps you avoid hidden issues like clogged ducts, fungus buildup, water leakage, or electrical faults caused by Bareilly’s frequent voltage fluctuations. Left untreated, these problems can affect your family's health and damage expensive AC components like the compressor or PCB board.</p>
              <p>With EzyHelpers, you get access to multi-brand AC experts who understand local climate challenges and household needs. Whether you own a split, window, or inverter unit, our technicians are equipped with genuine parts, updated tools, and real-time support.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
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
