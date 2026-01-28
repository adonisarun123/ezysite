import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

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
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'House Appliance Repair Service' }
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional House Appliance Repairs in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Get fast, reliable, same-day appliance repair services in Bareilly with EzyHelpers. Our trained technicians repair refrigerators, washing machines, geysers, and other home appliances quickly and safely so your home stays comfortable, working, and free from daily problems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  Book Appliance Repair Now
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Repair Service
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {badges.map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {b}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-3xl mx-auto">
                {metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-emerald-100 text-sm">{m.label}</div>
                  </div>
                ))}
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
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
                Don't Let Appliance Problems Slow You Down!
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get fast appliance repair with EzyHelpers. Our trusted technicians fix issues quickly so your daily routine stays smooth and stress-free.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Appliance Repair Now
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

        {/* Why Regular Appliance Repair Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">How Regular Appliance Checkups Prevent Bigger Breakdowns in Bareilly Homes</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
              <p>Bareilly’s hot weather, power cuts, and hard water put extra pressure on home appliances. Regular checkups are important to keep your appliances working well. At EzyHelpers, our trained technicians carry out quick and affordable checkups to prevent major breakdowns.</p>
              <p>Small issues like heavy vibrations, low cooling, slow heating, or strange sounds are fixed early before they turn into bigger failures. Our technicians use proper tools and genuine parts to improve appliance performance and help reduce electricity bills.</p>
              <p>Regular servicing helps families avoid sudden breakdowns during festivals, summers, or busy days. It is especially useful for working couples, elderly people, and anyone who needs appliances to work smoothly every day. Book a preventive checkup with EzyHelpers and enjoy worry-free appliance use.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
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