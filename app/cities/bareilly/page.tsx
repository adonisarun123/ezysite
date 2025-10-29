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
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Maid Service in Bareilly – Safe & Verified',
  description:
    'Searching for a reliable house maid in Bareilly? Hire domestic helpers for cleaning, cooking, and caregiving, all under one trusted platform.',
  keywords: 'house maid bareilly, domestic helper bareilly, maid service bareilly, cleaning maid bareilly, cooking maid bareilly',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly'
  }
}

export default function BareillyPage() {
  const trustBadges = [
    '✅ Trained & Background Verified',
    '✅ Free Replacement Guarantee',
    '✅ Quick Helper Matching',
    '✅ 24/7 Customer Support'
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Bareilly' }
        ]}
      />

      <div className="bg-background-primary">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display">
                Bareilly’s Most Reliable House Maid Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Find verified house maids and helpers in Bareilly for cleaning, cooking, childcare, home maintenance and repairs, and more. EzyHelpers offers trusted house helpers in Bareilly, ensuring trained staff and smooth household support with flexible schedules.
              </p>

              {/* Service Assurance Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center justify-center text-center">
                    <div className="w-full bg-white/10 rounded-lg py-3 px-3 text-sm text-blue-100 font-medium">
                      {badge}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/hire-helper" className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                  Book Verified House Help
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link href="tel:+919972571005" className="group inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Domestic Staff Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Trusted Domestic Staff – Maids, Drivers & More in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Daily home management made simple with verified maids, nannies, drivers, cooks, and elderly care helpers you can rely on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Live-In Maid",
                  description: "Stay-in maids offering 12-hour daily household help for families needing full-day support.",
                  features: ["12-hour daily assistance", "Support with daily household routines", "Long-term domestic support"],
                  href: "/cities/bareilly/live-in-maid",
                  linkText: "Learn More About Live-In Maids"
                },
                {
                  title: "Full-Time Maid",
                  description: "Daily maids for regular household chores from morning until evening.",
                  features: ["8-10 hours daily cleaning and care", "Trained for home responsibilities", "Fixed-time daily assistance"],
                  href: "/cities/bareilly/full-time-maid",
                  linkText: "Learn More About Full-Time Maids"
                },
                {
                  title: "Part-Time Maid",
                  description: "Flexible hourly maids for small homes or working professionals.",
                  features: ["Flexible 2-6 hour schedules", "Kitchen and cleaning support", "Morning or evening slots"],
                  href: "/cities/bareilly/part-time-maid",
                  linkText: "Learn More About Part-Time Maids"
                },
                {
                  title: "On-Demand Helper",
                  description: "Instant maid service for urgent cleaning or emergency support during events.",
                  features: ["Same-day availability", "No long-term commitments", "Ideal for events or urgent needs"],
                  href: "/cities/bareilly/on-demand-helper",
                  linkText: "Learn More About On-Demand Helpers"
                },
                {
                  title: "Babysitter",
                  description: "Trusted babysitters for newborns, toddlers, and school-aged children with flexible care.",
                  features: ["Trained in child care", "Flexible shift timings", "Verified and caring professionals"],
                  href: "/cities/bareilly/babysitter",
                  linkText: "Learn More About Babysitters"
                },
                {
                  title: "Japa Maid",
                  description: "Trained Japa maids for postnatal care, baby feeding, massage, and new mother support.",
                  features: ["Newborn baby care", "Mother postnatal support", "Traditional baby massage"],
                  href: "/cities/bareilly/japa",
                  linkText: "Learn More About Japa Maids"
                },
                {
                  title: "Elderly Care",
                  description: "Trained caretakers for seniors requiring hygiene help, medication, and companionship.",
                  features: ["Personal care and hygiene help", "Medication reminders", "Companionship and emotional support"],
                  href: "/cities/bareilly/elderly-care",
                  linkText: "Learn More About Elderly Care"
                },
                {
                  title: "Cook",
                  description: "Daily cooks prepare meals based on your dietary preferences and traditional UP cuisine.",
                  features: ["Authentic UP cuisine", "Customized meal prep", "Full-day or part-time options"],
                  href: "/cities/bareilly/cooks",
                  linkText: "Learn More About Cooks"
                },
                {
                  title: "Driver",
                  description: "Verified drivers for daily commutes, school pickups, and family transportation.",
                  features: ["Licensed local drivers", "Hourly or full-day bookings", "Trained for family safety"],
                  href: "/cities/bareilly/drivers",
                  linkText: "Learn More About Drivers"
                }
              ].map((service, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="text-blue-600 font-medium hover:text-blue-700">
                    {service.linkText}
                    {' '}→
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Home Maintenance Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Home Maintenance Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From repairs to installations, hire skilled technicians and service professionals for every part of your home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Carpenter",
                  description: "Skilled carpenters for furniture repair, fitting, and custom woodwork installations.",
                  features: ["Furniture repair & assembly", "Door, window & shelf fitting", "Custom woodwork support"],
                  href: "/cities/bareilly/carpenter",
                  linkText: "Learn More About Carpenters"
                },
                {
                  title: "Electrician",
                  description: "Certified electricians for fan fittings, switches, wiring issues, and power problems.",
                  features: ["Fan, light & wiring repair", "Switch & socket installation", "Safe and quick service"],
                  href: "/cities/bareilly/electrician",
                  linkText: "Learn More About Electricians"
                },
                {
                  title: "Appliance Repair",
                  description: "Expert technicians for washing machines, fridges, ACs, and all home appliances.",
                  features: ["Same-day appliance service", "AC, fridge, washer repair", "Expert technicians"],
                  href: "/cities/bareilly/appliance-repair",
                  linkText: "Learn More About Appliance Repair"
                },
                {
                  title: "Plumber",
                  description: "Professional plumbers for leaks, pipe fittings, tap fixes, and drainage solutions.",
                  features: ["Leak & blockage repairs", "Bathroom & kitchen plumbing", "Emergency plumbing service"],
                  href: "/cities/bareilly/plumber",
                  linkText: "Learn More About Plumbers"
                },
                {
                  title: "Painter",
                  description: "Professional painters for interior and exterior painting with expert surface preparation.",
                  features: ["Interior & exterior painting", "Wall repair & preparation", "Premium paint finishes"],
                  href: "/cities/bareilly/painting",
                  linkText: "Learn More About Painters"
                }
              ].map((service, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="text-blue-600 font-medium hover:text-blue-700">
                    {service.linkText}
                    {' '}→
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why EzyHelpers Is the Best Choice for House Maid Services in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the ease of hiring a verified, reliable house helper in Bareilly through our platform. Here's what sets us apart:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Background Verified</h3>
                <p className="text-gray-600 leading-relaxed">Every house helper in Bareilly we provide undergoes Aadhaar verification and address verification, ensuring safety and trust in your home.</p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Flexible Scheduling Options</h3>
                <p className="text-gray-600 leading-relaxed">Whether you need a few hours, half a day, or full-time help, our house help services in Bareilly are tailored to your daily routine and comfort.</p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Quick Placements & Replacements</h3>
                <p className="text-gray-600 leading-relaxed">Need urgent help? We ensure fast placement of house helpers in Bareilly, often within 24–72 hours. Not happy with the match? We provide quick and easy replacements at no extra cost.</p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Trained & Experienced Helpers</h3>
                <p className="text-gray-600 leading-relaxed">All our house helpers in Bareilly are trained in household duties like cleaning, cooking, childcare, and elder care, ensuring professional support every day.</p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldExclamationIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Transparent Pricing</h3>
                <p className="text-gray-600 leading-relaxed">No hidden charges or surprise fees. With EzyHelpers, you get upfront pricing and packages that suit every budget.</p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Wide Service Coverage in Bareilly</h3>
                <p className="text-gray-600 leading-relaxed">We cover all major neighbourhoods in Bareilly, making it easier to find trusted local house help services near you, fast and reliable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How To Book */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                How To Book a House Helper in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get a House Helper in Bareilly in Just 3 Easy Steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Share Your Requirements</h3>
                <p className="text-gray-600">Call or WhatsApp us to explain whether you need part-time, full-time, or live-in house help services.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Professional Matching</h3>
                <p className="text-gray-600">We quickly share verified profiles of experienced house helpers in Bareilly who meet your specific home needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Interview & Placement</h3>
                <p className="text-gray-600">Speak with shortlisted helpers, choose the one that fits your needs, and get them placed at your home within 24 to 72 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about house maid services in Bareilly
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How do I hire a verified house maid in Bareilly?",
                    answer: "Simply contact EzyHelpers via call or WhatsApp, share your requirements, and we'll match you with verified house helpers in Bareilly within 24-72 hours. All our helpers undergo Aadhaar and address verification for your safety."
                  },
                  {
                    question: "What types of house help services are available in Bareilly?",
                    answer: "We offer live-in maids, full-time maids, part-time maids, on-demand maids, babysitters, japa maids, elderly care, cooks, drivers, and home maintenance services including carpenters, electricians, plumbers, painters, and cleaning services."
                  },
                  {
                    question: "Are the house helpers in Bareilly background verified?",
                    answer: "Yes, every house helper we provide undergoes thorough Aadhaar verification and address verification. We ensure safety and trust by conducting proper background checks before placement."
                  },
                  {
                    question: "What if I'm not satisfied with the house helper?",
                    answer: "We provide free replacement within 7 days if you're not satisfied with the helper. Our commitment is to ensure you find the right house help that matches your requirements and comfort level."
                  },
                  {
                    question: "How much does it cost to hire a house maid in Bareilly?",
                    answer: "Our pricing is transparent with no hidden charges. Costs vary based on the type of service (part-time, full-time, or live-in), duration, and specific requirements. Contact us for customized pricing that suits your budget."
                  },
                  {
                    question: "Do you provide house help services across all areas in Bareilly?",
                    answer: "Yes, we provide house help services across all major neighborhoods and localities in Bareilly. Our wide service coverage ensures you can find trusted local house help services near you quickly and reliably."
                  },
                  {
                    question: "Can I get urgent or same-day house help in Bareilly?",
                    answer: "Yes, for urgent requirements, we offer on-demand maid services that can be arranged within 24-72 hours. Contact us immediately for emergency house help needs, and we'll do our best to provide quick assistance."
                  },
                  {
                    question: "What training do the house helpers receive?",
                    answer: "All our house helpers in Bareilly are trained in essential household duties including cleaning, cooking, childcare, and elder care. They receive professional training to ensure they provide quality service and maintain household standards."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
              Book Trusted House Helper Services in Bareilly Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of happy customers who trust EzyHelpers for verified house helpers in Bareilly. Start today and make home life stress-free with dependable domestic help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hire-helper" className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                Book Your House Helper
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="tel:+919972571005" className="group inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 