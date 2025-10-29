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
  WrenchScrewdriverIcon
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
  const applianceServices = [
    {
      title: "Refrigerator Repairs",
      description: "Quick fix for cooling issues, freezer problems, or gas filling to keep your food safe and fresh.",
      icon: SparklesIcon,
      features: ["Cooling system repair", "Gas filling service", "Compressor issues", "Thermostat problems"]
    },
    {
      title: "Washing Machine Repairs", 
      description: "Solve drain errors, spin troubles, or motor failures for hassle-free laundry.",
      icon: CogIcon,
      features: ["Drain blockage", "Motor replacement", "Spin mechanism", "Water level sensor"]
    },
    {
      title: "Microwave Repairs",
      description: "Heating problems, broken buttons, and power issues handled safely and fast.",
      icon: LightBulbIcon,
      features: ["Heating element", "Control panel", "Power supply", "Door mechanism"]
    },
    {
      title: "AC Repairs",
      description: "Reliable summer cooling, gas refills, servicing, and leak fixes to beat Bareilly heat.",
      icon: BoltIcon,
      features: ["Gas refilling", "Cooling coil cleaning", "Leak detection", "Filter replacement"]
    },
    {
      title: "Gas Stove Repairs",
      description: "Burner problems, gas leaks, or ignition faults are checked by trained pros.",
      icon: FireIcon,
      features: ["Burner cleaning", "Gas leak repair", "Ignition system", "Safety valve"]
    },
    {
      title: "Geyser Repairs",
      description: "Instant water heater service and element replacement for hot water anytime.",
      icon: WrenchScrewdriverIcon,
      features: ["Element replacement", "Thermostat issues", "Leak fixes", "Electrical checks"]
    },
    {
      title: "TV Repairs",
      description: "Fix picture, sound, or display issues without long downtime or confusion.",
      icon: HomeIcon,
      features: ["Screen display", "Audio problems", "Remote issues", "Cable connection"]
    },
    {
      title: "Chimney Repairs",
      description: "Chimney cleaning, motor issues, and smoke leakage solutions for healthy kitchens.",
      icon: WrenchScrewdriverIcon,
      features: ["Deep cleaning", "Motor service", "Smoke leakage fixes", "Filter replacement"]
    },
    {
      title: "Cooler Repairs",
      description: "Popular Bareilly cooling solution repaired for smooth airflow and fresh summer comfort.",
      icon: CogIcon,
      features: ["Pump replacement", "Fan motor", "Cooling pads", "Wiring checks"]
    },
    {
      title: "Voltage Fluctuation Repairs",
      description: "Protect appliances from Bareilly’s unstable power conditions, avoiding costly damage.",
      icon: ExclamationTriangleIcon,
      features: ["Stabilizer advice", "Component checks", "Surge damage repair", "Wiring fixes"]
    },
    {
      title: "Hard Water Solutions",
      description: "Stop damage to washing machines and RO units with proper descaling and service.",
      icon: ShieldCheckIcon,
      features: ["Descaling", "Filter checks", "Pipe cleaning", "Preventive care"]
    }
  ]

  const whyChooseFeatures = [
    { title: 'Skilled & Trained Technicians', description: 'Experienced professionals with expertise in all major appliance brands', icon: AcademicCapIcon },
    { title: 'Fast Same-Day Appliance Service', description: 'Quick response within 2 hours for urgent appliance breakdowns', icon: ClockIcon },
    { title: 'Emergency & Priority Repairs Available', description: 'Round-the-clock availability for urgent appliance emergencies', icon: ExclamationTriangleIcon },
    { title: 'Complete Appliance Repair Solutions', description: 'From minor repairs to major overhauls for all home appliances', icon: WrenchScrewdriverIcon },
    { title: 'Repairs for All Major Brands', description: 'Multi-brand repair expertise across leading appliances', icon: ShieldCheckIcon },
    { title: 'Doorstep Service Across Bareilly', description: 'Technicians available across all major localities in Bareilly', icon: MapPinIcon },
    { title: 'Support for Multiple Appliance Types', description: 'End-to-end solutions for kitchen and home appliances', icon: CogIcon },
  ]

  const applianceTypes = [
    { name: 'AC Repair', desc: 'Keep your home cool with fast AC and cooler service.' },
    { name: 'Fridge Repair', desc: 'Fix fridge problems caused by power cuts for fresh, safe food.' },
    { name: 'Washing Machine Repair', desc: 'Repair washing machines damaged by Bareilly’s hard water for smooth use.' },
    { name: 'TV Repair', desc: 'Enjoy your favourite shows again with fast TV repair solutions.' },
    { name: 'Geyser Repair', desc: 'Fix electric or gas geyser issues for instant hot water comfort.' },
    { name: 'Electric Fan Repair', desc: 'Get ceiling and table fans fixed for smooth, quiet performance.' },
    { name: 'Water Purifier Repair', desc: 'Clean and safe drinking water with RO and UV purifier repairs.' },
    { name: 'CCTV Camera Repair', desc: 'Fix home security camera problems to protect your house always.' },
    { name: 'Microwave & Oven Repairs', desc: 'Quickly fix heating or display issues in any microwave oven.' },
    { name: 'Gas Stove Repair', desc: 'Repair burners and leaks for safe and smooth daily cooking needs.' },
    { name: 'Chimney Repair', desc: 'Keep your kitchen smoke-free with reliable chimney cleaning and repairs.' },
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

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road"
  ]

  const faqs: FAQItem[] = [
    { question: 'What types of house appliance repairs are available in Bareilly?', answer: 'EzyHelpers offers complete house appliance repairs in Bareilly for refrigerators, washing machines, microwaves, air conditioners, geysers, gas stoves, fans, and more. Whether your appliance has stopped working or is showing signs of a problem, our skilled home appliance technicians in Bareilly provide reliable same-day repair services with genuine parts and proper tools.' },
    { question: 'How fast can I get a home appliance technician in Bareilly?', answer: 'With EzyHelpers, you can get a verified home appliance technician in Bareilly within 2 hours. We offer same-day appliance repair services for urgent issues. Our team responds quickly and arrives fully equipped to repair everything from fridges and washing machines to ACs and geysers.' },
    { question: 'What kinds of kitchen appliances do you repair?', answer: 'We repair a variety of kitchen appliances, including gas stoves, chimneys, microwaves, and RO water purifiers. Whether it’s burner problems, chimney smoke leaks, or broken heating elements, our technicians offer complete kitchen appliance solutions.' },
    { question: 'Can you help with emergency appliance repairs in Bareilly?', answer: 'Yes, we offer emergency appliance repair service in Bareilly. Whether it’s a sudden fridge breakdown or a geyser failure at night, our technicians respond quickly to restore your appliance.' },
    { question: 'Can I schedule a home appliance repair at a convenient time in Bareilly?', answer: 'Yes, EzyHelpers allows flexible scheduling for appliance repair in Bareilly. You can choose your preferred day and time, and our technician will arrive accordingly with all necessary tools and parts.' },
    { question: 'Do you offer repair services for both new and old appliances?', answer: 'Yes, we repair both new and old appliances in Bareilly. Our home appliance technicians are skilled in handling outdated models as well as the latest smart appliances, providing safe and lasting solutions.' },
    { question: 'What happens if an appliance can’t be repaired immediately?', answer: 'If an appliance needs additional parts or time, our technician will inform you clearly. We prioritise transparency and will schedule a quick follow-up visit to complete the repair at your convenience.' },
    { question: 'What types of microwaves do you repair in Bareilly?', answer: 'We repair solo, grill, and convection microwave ovens in Bareilly. Our technicians fix heating issues, turntable problems, door errors, and electronic display faults across all popular brands.' },
    { question: 'Do you handle the installation of new appliances in Bareilly?', answer: 'Yes, we offer installation services for appliances like washing machines, geysers, RO purifiers, and more in Bareilly. Proper setup ensures safety, efficiency, and long-term performance from day one.' },
    { question: 'Can I get a multi-appliance repair service in a single visit?', answer: 'Yes, you can request repairs for multiple appliances in a single visit in Bareilly. Just let us know in advance, and we will send a technician prepared to handle multiple tasks.' },
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
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-sm font-semibold">Same-Day Repairs Available</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                    Professional House Appliance Repairs in
                    <span className="block text-yellow-200">Bareilly</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                    Fast, trusted appliance repair technicians delivering same-day solutions to keep your Bareilly home running smoothly and stress-free.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Verified Technicians
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Genuine Parts
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Transparent Pricing
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                      href="/hire-helper"
                      className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      Book Appliance Repair Now
                    </Link>

                    <Link
                      href="tel:+919972571005"
                      className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Emergency Repair Service
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">4.8★</div>
                      <div className="text-blue-200 text-sm">Customer Rating</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-blue-200 text-sm">Emergency Support</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">2-Hour</div>
                      <div className="text-blue-200 text-sm">Response Time</div>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <SparklesIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Fridge Repair</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <BoltIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">AC Service</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <CogIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Washing Machine</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <WrenchScrewdriverIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">All Repairs</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                Comprehensive solutions for all your appliance repair needs in Bareilly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applianceServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
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

        {/* Why Choose Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers for Appliance Repair in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience trust, fast service, and skilled technicians for safe, reliable, and stress-free appliance repairs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blue-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                We fix all kinds of home appliances with expert precision
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applianceTypes.map((appliance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CogIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
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

        {/* Service Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Service Areas in Bareilly
              </h2>
              <p className="text-lg text-gray-600">
                Professional appliance repair services across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
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
                Explore Other Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/plumber" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plumbing Services</h3>
                <p className="text-gray-600 mb-4">Fix leakages and pipe problems</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/electrician" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Services</h3>
                <p className="text-gray-600 mb-4">Home wiring and light issues sorted</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/home-cleaning" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">Professional deep cleaning for a spotless, hygienic home</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
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
                Get your appliance repair handled fast with EzyHelpers for a hassle-free day
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
                  Call +91 9972571005
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preventive Checkups Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Regular Appliance Checkups Matter</h2>
              <p className="text-lg text-gray-600">Prevent sudden breakdowns and extend the life of your appliances with timely maintenance.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Avoid Costly Repairs</h3>
                <p className="text-gray-600 text-sm">Small issues are fixed early before they turn into expensive failures.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <CogIcon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Better Performance</h3>
                <p className="text-gray-600 text-sm">Appliances work efficiently, saving energy and delivering reliable results.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <ExclamationTriangleIcon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Local Challenges</h3>
                <p className="text-gray-600 text-sm">Power cuts and hard water in Bareilly can damage appliances—regular service helps prevent it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find quick answers about our house appliance repair services in Bareilly.</p>
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