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
  BugAntIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  BeakerIcon,
  CloudIcon,
  ArchiveBoxIcon,
  MoonIcon,
  TruckIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Pest Control for Home in Bareilly - Safe & Effective',
  description:
    'Book pest control for home in Bareilly to remove cockroaches, termites, ants, mosquitoes, and rodents safely using long-lasting treatments.',
  openGraph: {
    title: 'Pest Control for Home in Bareilly - Safe & Effective',
    description:
      'Book pest control for home in Bareilly to remove cockroaches, termites, ants, mosquitoes, and rodents safely using long-lasting treatments.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/pest-control',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/pest-control'
  }
}

export default function BareillyPestControl() {
  const badges = [
    '✓ Verified Experts',
    '✓ Odour-Free Treatments',
    '✓ Transparent & Fair Pricing',
    '✓ Child & Pet-Safe',
  ]

  const metrics = [
    { value: 'Emergency ', label: 'Support' },
    { value: '100%', label: 'Safe for Families' },
    { value: '99%', label: 'Pest-Free Guarantee' },
  ]

  const whyChooseFeatures = [
    {
      title: 'Skilled & Certified Pest Control Team',
      description: 'Trained professionals handle all pest types safely.',
      icon: UserGroupIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Safe Pest Solutions for Family Health',
      description: 'We focus on protecting your loved ones.',
      icon: HeartIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Customised Pest Treatment Plans',
      description: 'Treatments are tailored to your home’s specific needs.',
      icon: ShieldCheckIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Complete Pest Solutions for Every Home',
      description: 'From kitchens to bedrooms, all areas covered.',
      icon: BugAntIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }, {
      title: 'Odourless Gel & Herbal Options',
      description: 'Safe for family and pets.',
      icon: BeakerIcon,
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }, {
      title: 'Affordable Pest Control Packages',
      description: 'Quality service at reasonable prices.',
      icon: CurrencyRupeeIcon,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
  ]


  const services = [
    { title: 'Termite Control', desc: "Protect wood and furniture from termite damage.", icon: BugAntIcon },
    { title: 'Monsoon Pest Prevention', desc: 'Stop all types of pests before they enter your home.', icon: CloudIcon },
    { title: 'Grain Storage Pest Control', desc: 'Keep grains and stored food safe from insects and rodents.', icon: ArchiveBoxIcon },
    { title: 'Mosquito Control', desc: 'Reduce mosquito breeding and prevent mosquito-borne diseases.', icon: ShieldCheckIcon },
    { title: 'Roach Killer', desc: 'Eliminate cockroaches from kitchens and living areas.', icon: BugAntIcon },
    { title: 'Ant Exterminator', desc: 'Quickly remove ant colonies and trails.', icon: BugAntIcon },
    { title: 'Bug Exterminator', desc: 'Remove crawling and flying bugs effectively.', icon: BugAntIcon },
    { title: 'Rat Control', desc: 'Safely remove rats and mice to prevent damage and disease.', icon: BeakerIcon },
    { title: 'Bed Bug Pest Control', desc: "Target hidden bed bugs for a good night’s sleep.", icon: MoonIcon },
  ]

  const areasWeClean = [
    'Mosquito Control',
    'Termite Control',
    'Bed Bug Control',
    'Ant Control',
    'General Pest Control',
    'Rodent Control (Rats & Mice)',
    'Cockroach Control (Kitchen & Home)'
  ]

  const steps = [
    { step: '1', title: 'Share Your Pest Issue', desc: 'Tell us the type of pest and your problem.' },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Choose a day and time that works best for your family.' },
    { step: '3', title: 'Expert Pest Control Visit', desc: 'A verified professional will come fully equipped to treat your home safely.' },
    { step: '4', title: 'Quality Service & Support', desc: 'We ensure your satisfaction and provide follow-up assistance.' },
  ]

  const explore = [
    { href: '/cities/bareilly/sofa-cleaning', title: 'Sofa Cleaning Services', desc: 'Get your sofas fresh and clean with professional deep cleaning.', cta: 'Learn more', icon: SwatchIcon },
    { href: '/cities/bareilly/ac-repair', title: 'Air Conditioner Repair', desc: 'Keep your home cool and comfortable all year with dependable AC repair and service.', cta: 'Learn more', icon: WrenchScrewdriverIcon },
    { href: '/cities/bareilly/house-shifting', title: 'Packers and Movers Services', desc: 'Hassle-free moving solutions for your home or office.', cta: 'Learn more', icon: TruckIcon },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What is a special pest control service?',
      answer:
        'Our pest control services target all home pests safely and effectively, including cockroaches, termites, mosquitoes, ants, rats, mice, bed bugs, and more. Treatments are long-lasting, eco-friendly, and safe for children and pets.',
    },
    {
      question: 'Do you offer same-day pest services in Bareilly?',
      answer:
        'Yes. Our verified local pest control experts can visit your home the same day to provide fast and effective treatments.',
    },
    {
      question: 'What types of pests do you treat in Bareilly homes?',
      answer:
        'We treat cockroaches, ants, termites, mosquitoes, rats, mice, bed bugs, and other common household pests using safe, odourless, and long-lasting solutions.',
    },
    {
      question: 'Do you handle cockroach infestations in Bareilly kitchens?',
      answer:
        'Yes, we provide specialised cockroach control in kitchens to maintain hygiene and remove roaches effectively and safely.',
    },
    {
      question: 'What are the benefits of regular pest control in Bareilly?',
      answer:
        'Regular pest control prevents infestations, protects health, reduces allergies, and avoids damage to furniture and stored food, keeping your home safe and clean year-round.',
    },
    {
      question: 'Is mosquito control available through EzyHelpers?',
      answer:
        'Yes. Our mosquito control reduces breeding and protects your family from mosquito-borne diseases.',
    },
    {
      question: 'Do you treat ant infestations in homes?',
      answer:
        'Yes. We target ant colonies and trails with safe treatments to stop them from coming back.',
    },
    {
      question: 'How do you prevent pests from returning after treatment in Bareilly?',
      answer:
        'We seal entry points, use preventive treatments, and provide hygiene tips and follow-up support to keep pests away long-term.',
    },
    {
      question: 'How often should I schedule pest control in Bareilly?',
      answer:
        "Every 3–6 months, depending on pest severity, season, and home conditions.",
    },
    {
      question: 'Are your pest control chemicals safe for children and pets?',
      answer:
        "Yes. We use non-toxic, eco-friendly, and child-safe chemicals. Safety is our top priority.",
    },
    {
      question: 'How do you identify pest entry points and prevent future infestations?',
      answer:
        'Our experts inspect walls, drains, windows, and other areas, seal gaps, and apply preventive treatments.',
    },
    {
      question: 'How do you handle pest control in food storage areas and kitchens?',
      answer:
        'We use food-safe, non-toxic methods to treat kitchens and storage areas without contaminating food or cooking spaces.',
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
            { label: 'Pest Control' },
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Pest Control for Home in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Protect your home and family with expert pest control in Bareilly. We handle cockroaches, ants, mosquitoes, termites, rats, and other pests using safe, eco-friendly methods.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-emerald-700 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  Book Pest Control Now
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Pest Service
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

        {/* Why Choose EzyHelpers for Pest Control in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers Pest Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">We provide trusted, safe, and effective pest control to keep your Bareilly home pest-free and comfortable.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Our Pest Control Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Our Pest Services in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Complete solutions to make your home safe, clean, and pest-free</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-100 via-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Areas We Clean Thoroughly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Pest Control For Home in Bareilly</h2>
              <p className="text-gray-600">We fix all kinds of pest problems, big and small, for your home in Bareilly.</p>
            </div>

            <div className="bg-green-100/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {areasWeClean.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Book ... */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Pest Control Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Booking our service is fast and easy. Follow these four simple steps:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">{st.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{st.title}</h3>
                  <p className="text-gray-600">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services in Bareilly</h2>
              <p className="text-lg text-gray-600">EzyHelpers offers more than just pest control. Check out our other trusted services.</p>
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
        <section className="section-padding bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don't Let Pests Ruin Your Home's Comfort!</h2>
              <p className="text-xl mb-8 text-emerald-100">Get pest control for your home in Bareilly quickly and safely with EzyHelpers. Our trusted professionals remove pests fast so you can enjoy a clean, safe, and comfortable home.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-emerald-700 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Pest Control Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular Pest Control Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Regular Pest Control Matters for Every Home in Bareilly</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
              <p>Pest control is not just a one-time task. It is essential to keep your home safe and healthy. Bareilly’s seasonal weather, nearby fields, and humid conditions can attract termites, cockroaches, mosquitoes, and rodents.</p>
              <p>At EzyHelpers, we focus on preventive pest management to stop pests before they become a problem. Our treatments are odour-free, child and pet-safe, and target entry points and breeding zones. Seasonal care options like monsoon cockroach control, termite inspection, and pre-winter rodent prevention ensure pests don’t return.</p>
              <p>Regular pest control also reduces the risk of diseases like dengue, typhoid, and skin infections, which is important for families with children, elderly members, or pets. With EzyHelpers, you get fast relief, long-term protection, and peace of mind.</p>
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
