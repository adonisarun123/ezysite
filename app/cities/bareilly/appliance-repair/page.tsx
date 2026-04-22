import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

import NestCTA from '@/components/NestCTA'
import {
  ClockIcon,
  ShieldCheckIcon,
  HomeIcon,
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  StarIcon,
  SunIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  UserPlusIcon,
  ArrowRightIcon,
  CurrencyRupeeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  BoltIcon,
  CogIcon,
  ExclamationTriangleIcon,
  FireIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  TvIcon,
  VideoCameraIcon,
  CloudIcon,
  CubeIcon,
  ArrowPathIcon,
  SpeakerWaveIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'House Appliance Repairs in Bareilly - Same-Day Technicians',
  description: 'Need house appliance repairs in Bareilly? We fix washing machines, fridges, ovens, and more with expert technicians and fast service.',
  keywords: 'appliance repair Bareilly, AC repair Bareilly, fridge repair Bareilly, washing machine repair Bareilly, home appliance service',
  openGraph: {
    title: 'House Appliance Repairs in Bareilly - Same-Day Technicians',
    description: 'Need house appliance repairs in Bareilly? We fix washing machines, fridges, ovens, and more with expert technicians and fast service.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/appliance-repair',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/appliance-repair'
  }
}

export default function BareillyApplianceRepairPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What types of house appliance repairs are available in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers offers complete house appliance repairs in Bareilly for refrigerators, washing machines, microwaves, air conditioners, geysers, gas stoves, fans, and more. Whether your appliance has stopped working or is showing signs of a problem, our skilled home appliance technicians in Bareilly provide reliable same-day repair services with genuine parts and proper tools."
      }
    },{
      "@type": "Question",
      "name": "How fast can I get a home appliance technician in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With EzyHelpers, you can get a verified home appliance technician in Bareilly within 2 hours. We offer same-day appliance repair services for urgent issues. Our team responds quickly and arrives fully equipped to repair everything from fridges and washing machines to ACs and geysers."
      }
    },{
      "@type": "Question",
      "name": "What kinds of kitchen appliances do you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair a variety of kitchen appliances, including gas stoves, chimneys, microwaves, and RO water purifiers. Whether it’s burner problems, chimney smoke leaks, or broken heating elements, our technicians offer complete kitchen appliance solutions."
      }
    },{
      "@type": "Question",
      "name": "Can you help with emergency appliance repairs in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer emergency appliance repair service in Bareilly. Whether it’s a sudden fridge breakdown or a geyser failure at night, our technicians respond quickly to restore your appliance."
      }
    },{
      "@type": "Question",
      "name": "Can I schedule a home appliance repair at a convenient time in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers allows flexible scheduling for appliance repair in Bareilly. You can choose your preferred day and time, and our technician will arrive accordingly with all necessary tools and parts."
      }
    },{
      "@type": "Question",
      "name": "Do you offer repair services for both new and old appliances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we repair both new and old appliances in Bareilly. Our home appliance technicians are skilled in handling outdated models as well as the latest smart appliances, providing safe and lasting solutions."
      }
    },{
      "@type": "Question",
      "name": "What happens if an appliance can’t be repaired immediately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If an appliance needs additional parts or time, our technician will inform you clearly. We prioritise transparency and will schedule a quick follow-up visit to complete the repair at your convenience."
      }
    },{
      "@type": "Question",
      "name": "What types of microwaves do you repair in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair solo, grill, and convection microwave ovens in Bareilly. Our technicians fix heating issues, turntable problems, door errors, and electronic display faults across all popular brands."
      }
    },{
      "@type": "Question",
      "name": "Do you handle the installation of new appliances in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer installation services for appliances like washing machines, geysers, RO purifiers, and more in Bareilly. Proper setup ensures safety, efficiency, and long-term performance from day one."
      }
    },{
      "@type": "Question",
      "name": "Can I get a multi-appliance repair service in a single visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can request repairs for multiple appliances in a single visit in Bareilly. Just let us know in advance, and we will send a technician prepared to handle multiple tasks."
      }
    }]
  };


  const badges = [
    '✓ Verified Technicians',
    '✓ Certified Repair Specialists',
    '✓ Multi-Brand Repair Expertise',
  ]

  const metrics = [
    { value: '4.8★', label: 'Customer Rating' },
    { value: '24/7', label: 'Emergency Support' },
    { value: '2-Hour', label: 'Response Time' },
  ]

  const whyChooseFeatures = [
    'Skilled & Trained Technicians',
    'Fast Same-Day Service',
    'Emergency Repair Help',
    'Complete Appliance Solutions',
    'Repairs for All Major Brands',
    'Doorstep Service Across Bareilly',
    'Support for All Home Appliances'
  ]

  const applianceTypes = [
    { name: 'Refrigerator Repairs', desc: 'Fix cooling issues, freezer problems, and gas filling to keep food fresh.', icon: SparklesIcon },
    { name: 'Washing Machine Repairs', desc: 'Solve draining issues, spinning problems, and motor failures for smooth washing.', icon: CogIcon },
    { name: 'Microwave Repairs', desc: 'Heating issues, button faults, and power problems repaired safely.', icon: LightBulbIcon },
    { name: 'AC Repairs', desc: 'Cooling issues, gas refilling, servicing, and leakage fixes for summer comfort.', icon: BoltIcon },
    { name: 'Gas Stove Repairs', desc: 'Burner issues, gas leaks, and ignition problems checked by experts.', icon: FireIcon },
    { name: 'Geyser Repairs', desc: 'Repair instant water heaters and faulty heating elements for hot water anytime.', icon: SunIcon },
    { name: 'TV Repairs', desc: 'Fix display, sound, and picture problems quickly.', icon: HomeIcon },
    { name: 'Chimney Repairs', desc: 'Chimney cleaning, motor issues, and smoke leakage solved for a clean kitchen.', icon: HandRaisedIcon },
    { name: 'Cooler Repairs', desc: 'Repair airflow, cooling pads, and motor issues for better summer cooling.', icon: CogIcon },
    { name: 'Voltage Fluctuation Repairs', desc: 'Protect appliances from damage caused by power changes in Bareilly.', icon: ExclamationTriangleIcon },
    { name: 'Hard Water Solutions', desc: 'Prevent damage to washing machines and RO filters with proper descaling.', icon: ShieldCheckIcon },
  ]

  const applianceCategories = [
    { name: 'AC Repair', desc: 'Fast AC and cooler service.', icon: BoltIcon },
    { name: 'Fridge Repair', desc: 'Fix problems caused by power cuts.', icon: CubeIcon },
    { name: 'Washing Machine Repair', desc: 'Repair damage from hard water.', icon: ArrowPathIcon },
    { name: 'TV Repair', desc: 'Get TV sound and display fixed.', icon: TvIcon },
    { name: 'Geyser Repair', desc: 'Repair electric and gas geysers.', icon: FireIcon },
    { name: 'Electric Fan Repair', desc: 'Fix ceiling and table fans for smooth airflow.', icon: CogIcon },
    { name: 'Water Purifier Repair', desc: 'Repair RO and UV systems.', icon: BeakerIcon },
    { name: 'CCTV Camera Repair', desc: 'Fix home security cameras.', icon: VideoCameraIcon },
    { name: 'Microwave & Oven Repair', desc: 'Solve heating and button problems.', icon: LightBulbIcon },
    { name: 'Gas Stove Repair', desc: 'Fix burners, leaks, and ignition issues.', icon: FireIcon },
    { name: 'Chimney Repair', desc: 'Get chimney cleaning and repairs for smoke-free kitchens.', icon: CloudIcon },
  ]

  const process = [
    {
      step: "1",
      title: "Share Your Issue",
      description: "Tell us your appliance type and the exact problem you are facing."
    },
    {
      step: "2",
      title: "Pick a Convenient Time",
      description: "Choose a specific day and time slot that suits your family best."
    },
    {
      step: "3",
      title: "Expert Technician Visit",
      description: "Our verified professional arrives fully equipped for safe, reliable repairs."
    },
    {
      step: "4",
      title: "Quality Service & Support",
      description: "We ensure satisfaction and offer follow-up help whenever you need it."
    }
  ]


  const faqs: FAQItem[] = [
    { question: 'What types of house appliance repairs are available in Bareilly?', answer: 'EzyHelpers offers repair services for refrigerators, washing machines, microwaves, ACs, geysers, gas stoves, fans, and more. Whether the appliance has stopped working or has minor issues, our home appliance technicians in Bareilly provide same-day repairs with genuine parts.' },
    { question: 'How fast can I get a technician in Bareilly?', answer: 'You can get a verified technician within 2 hours. We provide fast same-day service for urgent repairs across Bareilly.' },
    { question: 'What kitchen appliances do you repair?', answer: 'We repair gas stoves, chimneys, microwaves, and RO purifiers. From burner issues to heating and smoke problems, our technicians fix everything.' },
    { question: 'Do you offer emergency appliance repairs in Bareilly?', answer: 'Yes. Whether your fridge stops at night or your geyser fails suddenly, we provide fast emergency repair help.' },
    { question: 'Can I choose a convenient time slot for repair?', answer: 'Yes. You can choose your preferred date and time. Our technician will come at the selected time.' },
    { question: 'Do you repair old and new appliances?', answer: 'Yes. We repair both old models and the latest smart appliances with care and skill.' },
    { question: 'What if an appliance cannot be repaired on the first visit?', answer: 'If additional parts are needed, the technician will inform you clearly and arrange a follow-up visit quickly.' },
    { question: 'What types of microwaves do you repair?', answer: 'We repair solo, grill, and convection microwaves. Our team fixes heating issues, turntable problems, and display errors.' },
    { question: 'Do you install new appliances?', answer: 'Yes. We install washing machines, geysers, RO systems, and more for safe and proper use.' },
    { question: 'Can I get multiple appliances repaired in one visit?', answer: 'Yes. You can request repair for more than one appliance. We will send a technician ready to handle multiple tasks.' },
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
            { label: 'Appliance Repair' }
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
                Professional House Appliance Repairs in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Fast, reliable, same-day appliance repair services in Bareilly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-10">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform">
                  Book Appliance Repair Now
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all">
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                {[
                  'Verified Technicians',
                  'Certified Specialists',
                  'Multi-Brand Expertise'
                ].map((badge, idx) => (
                  <span key={idx} className="text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 font-semibold">
                    ✓ {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1">4.8★</div>
                  <div className="text-indigo-100 font-medium">Customer Rating</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 leading-tight">24/7</div>
                  <div className="text-indigo-100 font-medium text-sm">Emergency Support</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 leading-tight">2-Hour</div>
                  <div className="text-indigo-100 font-medium text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Appliance Repair in Bareilly?</h2>
              <p className="text-gray-600">Choose EzyHelpers for fast, trusted, and professional appliance repair services. We make sure your appliances are repaired safely and correctly.</p>
            </div>

            <div className="bg-blue-100/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {whyChooseFeatures.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple and complete repair solutions for all your home appliances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applianceTypes.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appliance Types Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Types of Appliances We Repair
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We repair all types of appliances - old or new.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applianceCategories.map((appliance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <appliance.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
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

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                How to Book Our Appliance Repair Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple process to get your appliances fixed quickly and efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Easy solutions beyond appliance repairs for Bareilly homes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/plumber" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plumbing Services</h3>
                <p className="text-gray-600 mb-4">Fix all your water leakage and pipe problems quickly.</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn about plumbing services.<ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/electrician" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Services</h3>
                <p className="text-gray-600 mb-4">Get all your home wiring and light issues sorted out.</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn about electrical services.<ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/pest-control" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pest Control Services</h3>
                <p className="text-gray-600 mb-4">Safe treatments to keep your house pest-free.</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn about pest control<ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/cities/bareilly"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-blue-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
            {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center font-display">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Don't Let Appliance Problems Slow You Down!
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium font-body">
                Get fast appliance repair with EzyHelpers. Our trusted technicians fix issues quickly so your daily routine stays smooth and stress-free.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto font-display">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Appliance Repair Now
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

        {/* Why Regular Appliance Repair Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-4 border-indigo-600 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">How Regular Checkups Prevent Breakdowns</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Bareilly’s hot weather and power cuts put extra pressure on home appliances. Regular checkups are important to keep them working well.</p>
              <p className="font-medium text-indigo-900/80">Small issues like heavy vibrations, low cooling, or strange sounds are fixed early before they turn into failures.</p>
              <p>Our technicians use genuine parts to improve performance and help reduce electricity bills.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display text-center">FAQs</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "What types of house appliance repairs are available in Bareilly?",
                  answer: "EzyHelpers offers complete house appliance repairs in Bareilly for refrigerators, washing machines, microwaves, air conditioners, geysers, gas stoves, fans, and more. Whether your appliance has stopped working or is showing signs of a problem, our skilled home appliance technicians in Bareilly provide reliable same-day repair services with genuine parts and proper tools."
                },
                {
                  question: "How fast can I get a home appliance technician in Bareilly?",
                  answer: "With EzyHelpers, you can get a verified home appliance technician in Bareilly within 2 hours. We offer same-day appliance repair services for urgent issues. Our team responds quickly and arrives fully equipped to repair everything from fridges and washing machines to ACs and geysers."
                },
                {
                  question: "What kinds of kitchen appliances do you repair?",
                  answer: "We repair a variety of kitchen appliances, including gas stoves, chimneys, microwaves, and RO water purifiers. Whether it’s burner problems, chimney smoke leaks, or broken heating elements, our technicians offer complete kitchen appliance solutions."
                },
                {
                  question: "Can you help with emergency appliance repairs in Bareilly?",
                  answer: "Yes, we offer emergency appliance repair service in Bareilly. Whether it’s a sudden fridge breakdown or a geyser failure at night, our technicians respond quickly to restore your appliance."
                },
                {
                  question: "Can I schedule a home appliance repair at a convenient time in Bareilly?",
                  answer: "Yes, EzyHelpers allows flexible scheduling for appliance repair in Bareilly. You can choose your preferred day and time, and our technician will arrive accordingly with all necessary tools and parts."
                },
                {
                  question: "Do you offer repair services for both new and old appliances?",
                  answer: "Yes, we repair both new and old appliances in Bareilly. Our home appliance technicians are skilled in handling outdated models as well as the latest smart appliances, providing safe and lasting solutions."
                },
                {
                  question: "What happens if an appliance can’t be repaired immediately?",
                  answer: "If an appliance needs additional parts or time, our technician will inform you clearly. We prioritise transparency and will schedule a quick follow-up visit to complete the repair at your convenience."
                },
                {
                  question: "What types of microwaves do you repair in Bareilly?",
                  answer: "We repair solo, grill, and convection microwave ovens in Bareilly. Our technicians fix heating issues, turntable problems, door errors, and electronic display faults across all popular brands."
                },
                {
                  question: "Do you handle the installation of new appliances in Bareilly?",
                  answer: "Yes, we offer installation services for appliances like washing machines, geysers, RO purifiers, and more in Bareilly. Proper setup ensures safety, efficiency, and long-term performance from day one."
                },
                {
                  question: "Can I get a multi-appliance repair service in a single visit?",
                  answer: "Yes, you can request repairs for multiple appliances in a single visit in Bareilly. Just let us know in advance, and we will send a technician prepared to handle multiple tasks."
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
 />
    </>
  )
}