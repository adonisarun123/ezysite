import { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
import { getServiceQuickAnswer } from '@/lib/serviceContentSource'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema'
import NestCTA from '@/components/NestCTA'
import { ServiceSchema } from '@/components/schema'
import QuickAnswer from '@/components/QuickAnswer'
import {
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  BoltIcon,
  HomeIcon,
  SparklesIcon,
  FireIcon,
  TvIcon,
  BeakerIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Home Appliance Repair | Expert Technicians | EzyHelpers',
  description: 'Book appliance repair for washing machines, fridges, ACs & more anywhere in India. Expert technicians, genuine parts. Serving Bangalore, Bareilly & more cities.',
  keywords: 'appliance repair, refrigerator repair, washing machine repair, microwave oven repair, AC repair, gas stove repair, geyser repair, TV repair, chimney repair, home appliance service',
  openGraph: {
    title: 'Home Appliance Repair | Expert Technicians | EzyHelpers',
    description: 'Book appliance repair for washing machines, fridges, ACs & more anywhere in India. Expert technicians, genuine parts. Serving Bangalore, Bareilly & more cities.',
    url: 'https://www.ezyhelpers.com/services/appliance-repair',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [{ url: "https://www.ezyhelpers.com/og?title=Home%20Appliance%20Repair", width: 1200, height: 630, alt: "Home Appliance Repair" }],
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/appliance-repair'
  }
}

export default async function ApplianceRepairPage() {
  const __dbHtml = await getHtmlContent("services/appliance-repair")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const quickAnswer = await getServiceQuickAnswer("appliance-repair", {
    question: "How do I book home appliance repair through EzyHelpers?",
    answer: "EzyHelpers provides verified technicians for washing machine, refrigerator, microwave, and other home appliance repairs. Book online or call 080-31411776 for a same-day or next-day visit with transparent, upfront pricing.",
  })

  const cities = [
    { name: 'Bangalore', href: '/cities/bangalore/appliance-repair' },
    { name: 'Bareilly', href: '/cities/bareilly/appliance-repair' },
    { name: 'Delhi', href: '/cities/delhi' },
    { name: 'Noida', href: '/cities/noida' },
    { name: 'Lucknow', href: '/cities/lucknow' },
    { name: 'Kanpur', href: '/cities/kanpur' },
    { name: 'Nagpur', href: '/cities/nagpur' },
    { name: 'Hyderabad', href: '/cities/hyderabad' },
    { name: 'Meerut', href: '/cities/meerut' },
    { name: 'Mumbai', href: '/cities/mumbai' }
  ]

  const breadcrumbs = [
    { name: "Home", url: "https://www.ezyhelpers.com" },
    { name: "Services", url: "https://www.ezyhelpers.com/services" },
    { name: "Appliance Repair", url: "https://www.ezyhelpers.com/services/appliance-repair" }
  ]

  const applianceServices = [
    {
      title: "Refrigerator Repair",
      description: "Expert refrigerator technicians offer fast, reliable repair for all major problems, ensuring your fridge works efficiently.",
      icon: BeakerIcon,
      features: ["Cooling Issues", "Gas Leaks", "Temperature Control", "All Brands"]
    },
    {
      title: "Washing Machine Repair",
      description: "Quick and effective repair services for top-load, front-load, and semi-automatic models.",
      icon: SparklesIcon,
      features: ["Drainage Problems", "Spin Cycle Errors", "Motor Faults", "All Models"]
    },
    {
      title: "Microwave Oven Repair",
      description: "Handle all types of oven repairs, including electrical malfunctions and component failures.",
      icon: FireIcon,
      features: ["Uneven Heating", "Turntable Issues", "Panel Replacement", "All Brands"]
    },
    {
      title: "Air Conditioner Repair",
      description: "AC repair experts handle all split and window units with quick, local service.",
      icon: BoltIcon,
      features: ["Gas Refills", "Cooling Issues", "Installation", "Maintenance"]
    },
    {
      title: "Gas Stove Repair",
      description: "Skilled technicians deliver fast and safe repairs to restore your gas stove's performance.",
      icon: FireIcon,
      features: ["Burner Ignition", "Gas Leakage", "Safety Checks", "Performance"]
    },
    {
      title: "Geyser Repair",
      description: "Professionals replace faulty heating elements and thermostats to get your geyser working again.",
      icon: BeakerIcon,
      features: ["Heating Elements", "Thermostats", "Temperature Fix", "Hot Water"]
    },
    {
      title: "TV Repair",
      description: "Efficient TV repair solutions across all major brands and models for any issues.",
      icon: TvIcon,
      features: ["Screen Issues", "Audio Problems", "Power Issues", "All Brands"]
    },
    {
      title: "Chimney Repair",
      description: "Repair suction motors, clean filters, and restore airflow performance for cleaner kitchen.",
      icon: HomeIcon,
      features: ["Suction Motors", "Filter Cleaning", "Airflow", "Kitchen Safety"]
    }
  ]

  const faqs = [
    {
      question: "Can I get same-day appliance repair at home?",
      answer: "Yes, EzyHelpers offers same-day appliance repair service in most Indian cities. If you book early, we can usually send a technician within a few hours. It's perfect for urgent problems like a non-working fridge, washing machine, or AC, especially during summer or busy days."
    },
    {
      question: "What types of appliances do you repair at home?",
      answer: "We repair all major home appliances, including refrigerators, washing machines, ACs, microwaves, geysers, kitchen chimneys, dishwashers, and TVs. Our experienced technicians can handle common issues and support most Indian households with reliable doorstep service for popular appliance models and brands."
    },
    {
      question: "Do you offer emergency appliance repair services near me?",
      answer: "Yes, we provide emergency appliance repair services in case of urgent breakdowns like fridge failure or AC not cooling. Just call us, and we'll try to send a nearby technician as quickly as possible based on your area and service availability."
    },
    {
      question: "Which appliance brands do your technicians service?",
      answer: "Our appliance technicians repair all major brands such as LG, Samsung, Whirlpool, IFB, Bosch, Godrej, Haier, Voltas, and more. Whether it's a high-end or budget model, we have experts certified to fix issues across most Indian and international appliance brands."
    },
    {
      question: "Is doorstep appliance repair service available?",
      answer: "Yes, our appliance repair service is 100% doorstep-based. The technician visits your home with the required tools and spare parts. You don’t need to carry the appliance anywhere; everything is checked, repaired, and tested at your location for maximum convenience."
    },
    {
      question: "How do I know if my appliance should be repaired or replaced?",
      answer: "Our technician will inspect the appliance and give an honest opinion. If repair is cost-effective and safe, we proceed. If not, we may suggest replacement. Your long-term savings, safety, and convenience always guide our recommendations."
    },
    {
      question: "Is the inspection or diagnosis free before repair?",
      answer: "Yes, we offer free inspection for most appliance repairs. The technician checks the problem, explains the solution, and gives you a price estimate before starting the repair. This helps you decide confidently without any upfront commitment."
    },
    {
      question: "Can you repair old or discontinued appliances?",
      answer: "Yes, we repair older appliances if spare parts are still available. Our appliance repair technicians are skilled in handling discontinued or vintage models and will let you know if the repair is practical or if replacement makes more sense."
    },
    {
      question: "Do you provide installation services for new appliances?",
      answer: "Yes, we offer professional installation for appliances like air conditioners, geysers, washing machines, and kitchen chimneys. Our technicians ensure proper connections, safe setup, and full testing so the appliance works correctly from the start."
    }
  ]

  return (
    <>
      <ServiceSchema serviceName={"Home Appliance Repair"} serviceDescription={"Book appliance repair for washing machines, fridges, ACs & more anywhere in India. Expert technicians, genuine parts. Serving Bangalore, Bareilly & more cities."} serviceType={"Home Appliance Repair"} serviceUrl={"https://www.ezyhelpers.com/services/appliance-repair"} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Can I get same-day appliance repair at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, EzyHelpers offers same-day appliance repair service in most Indian cities. If you book early, we can usually send a technician within a few hours. It's perfect for urgent problems like a non-working fridge, washing machine, or AC, especially during summer or busy days."
              }
            }, {
              "@type": "Question",
              "name": "What types of appliances do you repair at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We repair all major home appliances, including refrigerators, washing machines, ACs, microwaves, geysers, kitchen chimneys, dishwashers, and TVs. Our experienced technicians can handle common issues and support most Indian households with reliable doorstep service for popular appliance models and brands."
              }
            }, {
              "@type": "Question",
              "name": "Do you offer emergency appliance repair services near me?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide emergency appliance repair services in case of urgent breakdowns like fridge failure or AC not cooling. Just call us, and we'll try to send a nearby technician as quickly as possible based on your area and service availability."
              }
            }, {
              "@type": "Question",
              "name": "Which appliance brands do your technicians service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our appliance technicians repair all major brands such as LG, Samsung, Whirlpool, IFB, Bosch, Godrej, Haier, Voltas, and more. Whether it's a high-end or budget model, we have experts certified to fix issues across most Indian and international appliance brands."
              }
            }, {
              "@type": "Question",
              "name": "Is doorstep appliance repair service available?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our appliance repair service is 100% doorstep-based. The technician visits your home with the required tools and spare parts. You don’t need to carry the appliance anywhere; everything is checked, repaired, and tested at your location for maximum convenience."
              }
            }, {
              "@type": "Question",
              "name": "How do I know if my appliance should be repaired or replaced?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our technician will inspect the appliance and give an honest opinion. If repair is cost-effective and safe, we proceed. If not, we may suggest replacement. Your long-term savings, safety, and convenience always guide our recommendations."
              }
            }, {
              "@type": "Question",
              "name": "Is the inspection or diagnosis free before repair?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer free inspection for most appliance repairs. The technician checks the problem, explains the solution, and gives you a price estimate before starting the repair. This helps you decide confidently without any upfront commitment."
              }
            }, {
              "@type": "Question",
              "name": "Can you repair old or discontinued appliances?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we repair older appliances if spare parts are still available. Our appliance repair technicians are skilled in handling discontinued or vintage models and will let you know if the repair is practical or if replacement makes more sense."
              }
            }, {
              "@type": "Question",
              "name": "Do you provide installation services for new appliances?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer professional installation for appliances like air conditioners, geysers, washing machines, and kitchen chimneys. Our technicians ensure proper connections, safe setup, and full testing so the appliance works correctly from the start."
              }
            }, {
              "@type": "Question",
              "name": "Where can I book appliance repair services in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EzyHelpers offers appliance repair services in selected cities across India. Service availability, technician response times, pricing, and supported appliances may differ by location. Select your city above to view local service details before booking."
              }
            }]
          })
        }}
      />
      <main className="min-h-screen">
        <BreadcrumbSchema items={breadcrumbs} />
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <WrenchScrewdriverIcon className="h-5 w-5 text-red-200 mr-2" />
                <span className="text-sm font-semibold">Expert Appliance Repair</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
                Home Appliance Repair Across India: Expert Technicians
              </h1>

              <p className="text-xl lg:text-2xl text-red-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                Keep your home appliances running smoothly with expert appliance repair services in India. Find skilled technicians for washing machines, refrigerators, ACs, geysers, microwaves, and more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/hire-helper" className="group bg-white text-red-800 hover:bg-red-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                  <span className="flex items-center justify-center">
                    Book Repair Service
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Repair
                </Link>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50K+</div>
                  <div className="text-red-200 text-sm">Repairs Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Quick</div>
                  <div className="text-red-200 text-sm">Repairs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-red-200 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-red-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Available Cities Section */}
        <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 mb-4 border border-primary-100 shadow-sm">
                <MapPinIcon className="h-4 w-4 mr-2 text-primary-600 animate-bounce" />
                <span className="text-sm font-semibold">Service Coverage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Appliance Repair Locations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your city to view appliance repair services, technician availability, and booking options.
              </p>
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="group relative bg-white hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-700 p-5 rounded-2xl border border-gray-200/80 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center cursor-pointer"
                >
                  {/* Icon / Pin design */}
                  <div className="w-10 h-10 rounded-xl bg-primary-50 group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors duration-300">
                    <MapPinIcon className="h-5 w-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-base md:text-lg">
                    {city.name}
                  </span>
                  {/* View services indicator */}
                  <div className="mt-2 text-primary-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium flex items-center">
                    View Services
                    <ArrowRightIcon className="h-3 w-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm md:text-base text-gray-500 font-medium">
                More cities coming soon. Call us or visit your city page to confirm availability.
              </p>
            </div>
          </div>
        </section>

        <QuickAnswer
        question={quickAnswer.question}
        answer={quickAnswer.answer}
      />



        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers for Appliance Repair?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dependable, skilled, and quick, your all-in-one solution for appliance repair needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Technicians",
                  description: "Trained technicians expertly diagnose and fix various appliances with reliable, safe repairs",
                  icon: ShieldCheckIcon,
                  color: "text-red-600"
                },
                {
                  title: "Same-Day Service",
                  description: "Book today for quick, same-day appliance repairs without disrupting your routine",
                  icon: ClockIcon,
                  color: "text-blue-600"
                },
                {
                  title: "Transparent Pricing",
                  description: "Upfront pricing before starting work with no hidden fees for confident payment",
                  icon: CheckCircleIcon,
                  color: "text-green-600"
                },
                {
                  title: "Wide Range Repairs",
                  description: "Repair all appliances for any brand and model, making us your one-stop solution",
                  icon: WrenchScrewdriverIcon,
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

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive repair solutions for all your home appliances
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {applianceServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <CheckCircleIcon className="h-3 w-3 text-red-600 mr-1.5" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                How to Book Our Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fast and stress-free booking process in just 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Share Your Issue",
                  description: "Tell us which appliance needs repair and describe the problem clearly"
                },
                {
                  step: "2",
                  title: "Pick a Convenient Time",
                  description: "Choose a date and time slot that fits your schedule perfectly"
                },
                {
                  step: "3",
                  title: "Expert Technician Visit",
                  description: "Skilled technician arrives with tools and spare parts for quick repair"
                },
                {
                  step: "4",
                  title: "Quality Service & Support",
                  description: "After repair, we ensure your appliance works perfectly with ongoing support"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Tips Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Extend the Life of Your Appliances with Simple Maintenance Tips
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
              <p>
                At EzyHelpers, we believe that timely repairs combined with regular maintenance can greatly extend the lifespan of your home appliances. While our expert technicians are always ready to handle breakdowns, following a few easy care tips at home can help prevent many common issues. Routine cleaning and proper usage not only improve appliance performance but also reduce energy consumption and lower the risk of major failures.
              </p>
              <p>
                For example, regularly wiping down refrigerator door seals and vacuuming condenser coils can prevent cooling problems and increase energy efficiency. Washing machines benefit from monthly drum cleaning using hot water and mild cleaning agents like vinegar to remove soap scum and avoid unpleasant smells. Keeping the microwave interior clean and ensuring proper ventilation during use helps avoid electrical issues. In the case of air conditioners, cleaning or replacing filters monthly ensures better airflow and cooling. Even small actions like not overloading your washing machine or dishwasher can protect the motor and prevent wear and tear.
              </p>
              <p>
                During our repair visits, our appliance technicians are happy to share specific maintenance tips suited to your brand and model. These small, regular habits can go a long way in keeping your appliances efficient, safe, and long-lasting.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 font-display">
                Don't Let Broken Appliances Slow You Down!
              </h2>
              <p className="text-xl text-red-100 mb-10 leading-relaxed">
                Get your appliances fixed fast and easily with EzyHelpers. Our trusted technicians solve problems quickly so you can enjoy a hassle-free day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="group bg-white text-red-800 hover:bg-red-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                  <span className="flex items-center justify-center">
                    Book Repair Service Now
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call 080-31411776
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Trusted experts for every corner of your home.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carpenter Services</h3>
                <p className="text-gray-600 mb-3">Custom furniture, repairs, and fittings by skilled local carpenters.</p>
                <Link href="/services/carpenters" className="text-red-700 font-medium hover:underline">Learn about Carpenter Services</Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Electrician Services</h3>
                <p className="text-gray-600 mb-3">Expert electricians for all your home wiring and appliance power needs.</p>
                <Link href="/services/electricians" className="text-red-700 font-medium hover:underline">Learn about Electrician Services</Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gardener Services</h3>
                <p className="text-gray-600 mb-3">Maintain a beautiful home garden with experienced gardening help.</p>
                <Link href="/services/gardener" className="text-red-700 font-medium hover:underline">Learn about Gardener Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <NestCTA />
        <Footer />
      </main>
    </>
  )
}
