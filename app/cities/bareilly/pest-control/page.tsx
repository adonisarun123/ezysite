import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { PhoneIcon, CheckCircleIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Pest Control for Home in Bareilly - Safe & Effective',
  description:
    'Book pest control for home in Bareilly to eliminate cockroaches, termites, rodents, and ants using safe, odourless, long-lasting treatments.',
  openGraph: {
    title: 'Pest Control for Home in Bareilly - Safe & Effective',
    description:
      'Book pest control for home in Bareilly to eliminate cockroaches, termites, rodents, and ants using safe, odourless, long-lasting treatments.',
    url: 'https://ezyhelpers.com/cities/bareilly/pest-control',
    type: 'website',
  },
}

export default function BareillyPestControl() {
  const badges = [
    '✅ Verified & Background-Checked Experts',
    '✅ Odour-Free Treatments',
    '✅ Same-Day Pest Control Available',
    '✅ Transparent & Fair Pricing',
    '✅ Multi-Room and Whole-Home Coverage',
    '✅ Child & Pet-Safe',
  ]

  const metrics = [
    { value: '500+', label: 'Homes Protected' },
    { value: '100%', label: 'Safe for Families' },
    { value: '30-Day', label: 'Post-Service Guarantee' },
  ]

  const whyChoose = [
    'Skilled & Certified Pest Control Team',
    'Safe Pest Solutions for Family Health',
    'Customised Pest Treatment Plans',
    'Complete Pest Solutions for Every Home',
    'Odourless Gel & Herbal Options Available',
    'Affordable Pest Control Packages',
  ]

  const services = [
    { title: '1. Termite Control', desc: "Protect your home's wood from termites with our complete, damage-preventing control services." },
    { title: '2. Monsoon Pest Prevention', desc: 'Special treatments prevent monsoon pests like cockroaches and mosquitoes from entering your home.' },
    { title: '3. Grain Storage Pest Control', desc: 'Keep stored grains safe from insects and rodents with our effective traditional home solutions.' },
    { title: '4. Mosquito Control', desc: 'Safe, effective methods reduce mosquitoes, protecting your family from disease and irritation.' },
    { title: '5. Roach Killer', desc: 'Target stubborn cockroaches for a clean, hygienic kitchen and home environment.' },
    { title: '6. Ant Exterminator', desc: 'Get rid of ant colonies quickly, keeping your food and home free from invaders.' },
    { title: '7. Bug Exterminator', desc: 'Comprehensive solution clears your home of all crawling and flying bugs effectively.' },
    { title: '8. Rat Control', desc: 'Safely remove rats and mice, preventing disease and damage with our solutions.' },
    { title: '9. Bed Bug Pest Control', desc: "Our specialised service targets hidden bed bugs, ensuring your family a good night's sleep." },
  ]

  const types = [
    '✅ Mosquito Control',
    '✅ Termite Control',
    '✅ Bed Bug Control',
    '✅ Cockroach Control (Kitchen & Home)',
    '✅ Ant Control',
    '✅ Rodent Control (Rats & Mice)',
    '✅ General Pest Control',
  ]

  const steps = [
    { step: '1', title: 'Share Your Pest Issue', desc: 'Tell us your pest type and the exact problem you are facing at home.' },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Choose a specific day and time slot that suits your family schedule best.' },
    { step: '3', title: 'Expert Pest Control Visit', desc: 'Our verified professional arrives fully equipped for safe, effective treatments.' },
    { step: '4', title: 'Quality Service & Support', desc: 'We ensure satisfaction and offer follow-up help whenever you need it.' },
  ]

  const explore = [
    { href: '/cities/bareilly/sofa-cleaning', title: 'Sofa Cleaning Services', desc: 'Get your sofas fresh and clean with professional deep cleaning.', cta: 'Learn about Sofa Cleaning Services' },
    { href: '/cities/bareilly/pest-control', title: 'Pest Control Services', desc: 'Safe treatments to keep your house pest-free from all kinds of bugs.', cta: 'Learn about Pest Control Services' },
    { href: '/cities/bareilly/house-shifting', title: 'Packers and Movers Services', desc: 'Hassle-free moving solutions for your home or office.', cta: 'Learn about Packers and Movers Services' },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'Do you offer same-day pest services in Bareilly?',
      answer:
        'Yes, we offer same-day pest services in Bareilly. Our local, background-verified pest control experts respond quickly with effective solutions to eliminate pests and restore hygiene to your home without delay.',
    },
    {
      question: 'What types of pests do you treat in Bareilly homes?',
      answer:
        'We treat a wide range of pests in Bareilly homes, including termites, cockroaches, ants, mosquitoes, rats, mice, bed bugs, and general bugs, using safe and effective pest control treatments.',
    },
    {
      question: 'Do you handle cockroach infestations in Bareilly kitchens?',
      answer:
        'Yes, we provide specialised cockroach pest control in Bareilly, especially for kitchens. Our solutions are safe, fast-acting, and effective in eliminating roaches and keeping your kitchen hygienic.',
    },
    {
      question: 'What are the benefits of regular pest control in Bareilly?',
      answer:
        'Regular pest control in Bareilly prevents infestations, protects health, reduces allergies, and stops long-term damage to furniture and food. It keeps your home clean, safe, and stress-free all year round.',
    },
    {
      question: 'Is mosquito control available through EzyHelpers?',
      answer:
        'Yes, EzyHelpers provides mosquito control using safe methods that reduce mosquito breeding and protect your family from mosquito-borne diseases.',
    },
    {
      question: 'Do you treat ant infestations in homes?',
      answer:
        'Yes, we provide ant control service by targeting colonies and trails with safe, effective treatments that prevent them from returning.',
    },
    {
      question: 'How do you prevent pests from returning after treatment in Bareilly?',
      answer:
        'We prevent pest recurrence in Bareilly through targeted treatment, sealing entry points, hygiene tips, and follow-up services to maintain long-term pest-free conditions.',
    },
    {
      question: 'How often should I schedule pest control in Bareilly?',
      answer:
        'We recommend pest control every 3 to 6 months in Bareilly, depending on pest severity, season, and home conditions, to ensure ongoing protection.',
    },
    {
      question: 'Are your pest control chemicals safe for children and pets?',
      answer:
        "Yes, our pest control for homes uses child-safe and pet-friendly chemicals. We apply eco-friendly, odour-free treatments that are non-toxic and safe for kids, elderly people, and pets. Your family’s health and safety are our top priority.",
    },
    {
      question: 'How do you identify pest entry points and prevent future infestations?',
      answer:
        "Our pest services in Bareilly include a full inspection to find pest entry points like wall gaps, drain outlets, or window cracks. We seal these areas and apply preventive barriers to stop pests from returning, ensuring long-term protection for your home.",
    },
    {
      question: 'How do you handle pest control in food storage areas and kitchens?',
      answer:
        'We take extra care while treating kitchens and food storage areas. We use food-safe, non-toxic pest control methods that target pests without contaminating your cooking or storage spaces, keeping your family and food protected.',
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
                Professional Pest Control for Home in Bareilly—Safe & Effective Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Protect your home and family with professional pest control in Bareilly that targets cockroaches, ants, mosquitoes, termites, and more. Our trained experts use safe, eco-friendly methods to eliminate pests and ensure long-lasting hygiene and comfort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-emerald-700 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  Book Pest Control Now
                </Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
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

        {/* Why Choose ... */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers Pest Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">Trusted, effective, and safe solutions to keep your Bareilly home pest-free and peaceful.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Pest Services in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Pest Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Complete solutions to keep your home safe, clean, and pest-free</p>
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

        {/* Types of Pest Control For Home in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Types of Pest Control For Home in Bareilly</h2>
            <p className="text-gray-700 mb-6">We fix all kinds of pest problems, big and small, for your home in Bareilly.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {types.map((t, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 text-gray-900 font-semibold">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Pest Control Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast and stress-free booking process in just 4 simple steps</p>
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
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Easy solutions beyond pest control for Bareilly homes:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {explore.map((e, i) => (
                <Link key={i} href={e.href} className={`group rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${i === 0 ? 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100 hover:border-rose-300' : i === 1 ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-100 hover:border-emerald-300' : 'bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-100 hover:border-indigo-300'}`}>
                  <HomeIcon className={`${i === 0 ? 'text-rose-600' : i === 1 ? 'text-emerald-600' : 'text-indigo-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-gray-600 mb-4">{e.desc}</p>
                  <div className={`${i === 0 ? 'text-rose-600' : i === 1 ? 'text-emerald-600' : 'text-indigo-600'} font-semibold`}>{e.cta}</div>
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
              <p className="text-xl mb-8 text-emerald-100">Get your pest control for your home in Bareilly handled fast and easily with EzyHelpers. Our trusted professionals solve problems quickly so you can enjoy a hassle-free, clean, and healthy home.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-emerald-700 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Pest Control Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular Pest Control Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Regular Pest Control Matters for Every Home in Bareilly</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Pest control is not just a one-time fix; it’s a vital part of maintaining a clean, safe, and healthy home. In Bareilly, seasonal weather changes, nearby fields, and humid conditions can attract a wide range of pests. Without proper prevention, common issues like termites, cockroaches, mosquitoes, and rodents can quickly turn into costly and harmful infestations.</p>
              <p>At EzyHelpers, we focus on preventive pest management to protect your home before pests become a serious problem. We use odour-free, family-safe treatments that target breeding zones and entry points while protecting your home from future invasions. We also offer seasonal pest care options such as monsoon cockroach control, termite inspections before renovation, and pre-winter rodent prevention. This proactive approach ensures pests don’t return, especially during Bareilly’s high-risk seasons when insects and rodents seek shelter indoors.</p>
              <p>Our pest control treatments help reduce the risk of diseases like dengue, typhoid, and skin infections, which is especially important for families with kids, elders, or pets. By choosing EzyHelpers for your pest control for home in Bareilly, you’re investing in peace of mind. You get not only immediate relief from pests but also long-term protection, saving your home from damage, contamination, and repeated expenses.</p>
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
