import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { PhoneIcon, CheckCircleIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Newborn Babycare in Bareilly – Trained Japa Maids',
  description:
    'Looking for newborn babycare in Bareilly? Hire trained Japa maids for postnatal care, baby feeding, massage, and support—safe, gentle, and experienced help.',
  openGraph: {
    title: 'Newborn Babycare in Bareilly – Trained Japa Maids',
    description:
      'Looking for newborn babycare in Bareilly? Hire trained Japa maids for postnatal care, baby feeding, massage, and support—safe, gentle, and experienced help.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/japa',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/japa'
  }
}

export default function BareillyJapa() {
  const badges = [
    '✅ Verified & Background-Checked Japa Maids',
    '✅ Traditional Postpartum Expertise',
    '✅ Certified in Mother & Baby First-Aid',
    '✅ Safe & Hygienic Practices',
    '✅ Flexible Booking Options',
    '✅ Traditional Postpartum Massage (Malish) Experts',
  ]

  const metrics = [
    { value: '4.9★', label: 'Family Satisfaction Rating' },
    { value: '100%', label: 'Background Verified' },
    { value: '1000+', label: 'Newborns & Mothers Helped' },
    { value: 'Hygiene', label: 'Protocol Trained' },
    { value: '24/7', label: 'Postpartum Care Support' },
  ]

  const whyChoose = [
    'Skilled & Experienced Japa Maids',
    'Trained in Postpartum Recovery Needs',
    'Customized Care for Every Family Setup',
    'Smooth & Quick Hiring Process in Bareilly',
    'Safe Newborn Handling & Malish (Massage)',
  ]

  const newbornCare = [
    { title: '24/7 Newborn Care', desc: 'Feeding, bathing, diaper change & sleep routine support' },
    { title: 'Lactation Guidance', desc: 'Help with feeding positions & solving milk supply issues' },
    { title: 'Umbilical Cord Care', desc: 'Safe cleaning & infection prevention for newborns' },
    { title: 'Baby Massage (Malish)', desc: 'Gentle oil massage for better sleep & digestion' },
    { title: 'Newborn Safety Tips', desc: 'Teaching parents safe holding, burping & swaddling' },
  ]

  const motherCare = [
    { title: 'Traditional Postpartum Massage (Malish)', desc: 'Reduces pain & speeds recovery' },
    { title: 'Healing North Indian Recipes', desc: 'Panjiri, Gond Laddu, Methi Paratha for strength' },
    { title: 'Personal Hygiene Care', desc: 'Safe bathing, wound care & infection prevention' },
    { title: 'Rest & Emotional Support', desc: 'Helps new moms recover without stress' },
    { title: 'Customized Diet Plans', desc: "Fresh ingredients from Bareilly’s local markets" },
  ]

  const specialized = [
    { title: 'C-Section Recovery Support', desc: 'Gentle postpartum help with massage and safe movement support for cesarean recovery.' },
    { title: 'Twin & Multiple Baby Care', desc: 'Skilled helpers manage feeding, sleep, and hygiene for twins or triplets with care.' },
    { title: 'Premature Baby Care', desc: 'Safe, gentle handling and feeding support for premature babies needing extra attention.' },
    { title: 'High-Risk Pregnancy Support', desc: 'Trained helpers assist mothers after high-risk pregnancies under proper medical guidance.' },
    { title: 'Feeding Support for Mothers', desc: 'Guidance for new mothers on gentle baby feeding techniques.' },
  ]

  const japaTypes = [
    { title: 'Live-In Japa Maids', desc: 'Stay 24/7 for full mother and baby care during recovery.' },
    { title: 'Full-Time Japa Maids', desc: '8–12 hours of daily help with massage, hygiene, and gentle care.' },
    { title: 'Part-Time Japa Maids', desc: 'Few hours daily support for essential newborn and mother tasks.' },
    { title: 'Night-Shift Japa Maids', desc: 'Overnight care with safe feeding, diaper changes, and baby soothing.' },
    { title: 'On-Demand Japa Maids', desc: 'Emergency, festival, or sudden help when you urgently need support.' },
  ]

  const steps = [
    { step: '1', title: 'Share Your Needs', desc: 'Tell us about your baby’s age & mother’s recovery stage' },
    { step: '2', title: 'Choose Your Care Plan', desc: 'Full-time, part-time, or emergency support' },
    { step: '3', title: 'Meet Your Certified Helper', desc: 'Background-checked & trained in newborn care' },
    { step: '4', title: 'Relax & Recover', desc: 'Let our Japa maid handle your baby’s care while you focus on healing.' },
  ]

  const explore = [
    { href: '/cities/bareilly/babysitter', title: 'Babysitter Services', desc: "Trusted, loving care for your children while you're away.", cta: 'Learn about Babysitter Services' },
    { href: '/cities/bareilly/elderly-care', title: 'Elderly Care Services', desc: 'Compassionate home support for your beloved senior family members.', cta: 'Learn about Elderly Care Services' },
    { href: '/cities/bareilly/cooks', title: 'Cook Services', desc: 'Enjoy delicious, home-cooked meals prepared by skilled chefs.', cta: 'Learn about Cook Services' },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What does a japa maid do as part of postpartum home care services in Bareilly?',
      answer:
        'As part of postpartum home care services in Bareilly, a japa maid assists new mothers with recovery massages, hygiene support, rest guidance, emotional care, and traditional North Indian food preparation, ensuring smooth healing and comfort after childbirth.',
    },
    {
      question: 'Do you provide postpartum home care services for C-section recovery in Bareilly?',
      answer:
        'Yes, our postpartum home care services in Bareilly include gentle support for C-section recovery. Our trained Japa maids assist with safe movement, hygiene, massage, and personalized care routines to help mothers heal comfortably after surgery.',
    },
    {
      question: 'Are Japa maids in Bareilly trained in baby massage?',
      answer:
        'Yes, EzyHelpers Japa maids are trained in traditional baby massage (malish) as part of our newborn babycare in Bareilly. These massages support healthy digestion, better sleep, and physical development for newborns, using safe, gentle, and time-tested techniques.',
    },
    {
      question: 'What kind of postpartum food is prepared by Japa maids in Bareilly?',
      answer:
        'Our japa maids prepare healing North Indian recipes such as panjiri, gond laddu, and methi paratha using fresh ingredients from Bareilly’s markets to help new mothers regain strength.',
    },
    {
      question: 'What hygiene measures are followed in postpartum home care in Bareilly?',
      answer:
        'EzyHelpers follows strict hygiene protocols, including handwashing, clean clothing, sanitization, and safe handling techniques to protect mothers and babies during postpartum home care in Bareilly.',
    },
    {
      question: 'Can I book newborn babycare services in Bareilly for night-time?',
      answer:
        'Yes. EzyHelpers offers night-shift baby caretakers who assist with feeding, diaper changes, and baby soothing throughout the night.',
    },
    {
      question: 'Can your newborn baby caretakers support premature baby care in Bareilly?',
      answer:
        'Yes, our japa maids in Bareilly are trained to handle premature babies with extra care, feeding support, and delicate handling routines.',
    },
    {
      question: 'Do you offer newborn babycare services for twins or multiple babies in Bareilly?',
      answer:
        'Yes, our experienced Japa maids in Bareilly can care for twins or triplets, managing feeding, sleep, and hygiene needs efficiently.',
    },
    {
      question: 'What does newborn safety guidance include in your service?',
      answer:
        'We teach safe holding, swaddling, burping, and sleeping practices to parents in Bareilly to ensure newborn safety at home.',
    },
    {
      question: 'What age of babies do your japa maids care for in Bareilly?',
      answer:
        'Our japa maids in Bareilly primarily care for newborns up to 3 months, offering expert support during the most delicate period after birth.',
    },
    {
      question: 'Why is postpartum home care important for new mothers in Bareilly?',
      answer:
        'Postpartum home care in Bareilly helps mothers heal physically and emotionally after childbirth with structured routines, massage, nutrition, and gentle support for a smooth recovery at home.',
    },
    {
      question: 'What is the difference between a japa maid and a nanny in Bareilly?',
      answer:
        'A japa maid in Bareilly specialises in postpartum recovery, newborn babycare, and traditional massage, focusing on the mother’s rest and healing. A nanny typically provides broader childcare support for older babies and children, without specialised postpartum expertise.',
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
            { label: 'Japa (Newborn Babycare)' },
          ]}
        />

        {/* Hero Section: H1 + Intro + CTA + Badges + Metrics */}
        <section className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Expert Newborn Babycare in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Gentle, trained postpartum care and japa maid services for mother and baby in Bareilly, with trusted local experience and traditional practices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-rose-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  Book Newborn Babycare!
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call 080-31411776
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {badges.map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {b}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 border-t border-white/20 max-w-5xl mx-auto">
                {metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-rose-100 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Newborn Babycare Services in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers for Newborn Babycare Services in Bareilly?
              </h2>
              <p className="text-lg text-gray-600">Gentle, caring, and culturally sensitive newborn babycare trusted by Bareilly families.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Newborn & Postpartum Care Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Newborn & Postpartum Care Services</h2>
              <p className="text-lg text-gray-600">Complete support for mother and baby, with Bareilly’s trusted japa maids.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Newborn Baby Care</h3>
                <div className="space-y-3">
                  {newbornCare.map((s, i) => (
                    <div key={i}>
                      <div className="font-semibold text-gray-900">{s.title}</div>
                      <div className="text-gray-600">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Postpartum Mother Care (Japa Care)</h3>
                <div className="space-y-3">
                  {motherCare.map((s, i) => (
                    <div key={i}>
                      <div className="font-semibold text-gray-900">{s.title}</div>
                      <div className="text-gray-600">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Japa Care Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Specialized Japa Care Services in Bareilly</h2>
              <p className="text-gray-700 mb-6">At EzyHelpers, we understand that every mother and baby is unique. That’s why our trained japa maids are skilled to handle special care situations with confidence and respect.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialized.map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                  <div className="text-lg font-bold text-gray-900 mb-1">✅ {s.title}</div>
                  <div className="text-gray-700">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Japa Maids in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Types of Japa Maids in Bareilly</h2>
            <p className="text-gray-700 mb-6">Every Bareilly family has different needs, so we offer flexible options to suit your lifestyle and budget:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {japaTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="text-lg font-bold text-gray-900">{t.title}</div>
                  <div className="text-gray-700">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Book Our Japa Maid Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Japa Maid Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Simple 4-step process for loving, professional care</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="bg-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">{st.step}</div>
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
              <p className="text-lg text-gray-600">Easy home help solutions beyond newborn babycare for Bareilly families</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {explore.map((e, i) => (
                <Link key={i} href={e.href} className={`group rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${i === 0 ? 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100 hover:border-rose-300' : i === 1 ? 'bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100 hover:border-purple-300' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100 hover:border-blue-300'}`}>
                  <HomeIcon className={`${i === 0 ? 'text-rose-600' : i === 1 ? 'text-purple-600' : 'text-blue-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-gray-600 mb-4">{e.desc}</p>
                  <div className={`${i === 0 ? 'text-rose-600' : i === 1 ? 'text-purple-600' : 'text-blue-600'} font-semibold`}>{e.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA: Welcome Your Newborn with Peace of Mind! */}
        <section className="section-padding bg-gradient-to-br from-rose-600 to-fuchsia-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Welcome Your Newborn with Peace of Mind!</h2>
              <p className="text-xl mb-8 text-rose-100">Let EzyHelpers provide the expert newborn babycare & Japa service in Bareilly that you deserve. Our trusted professionals are here to support you during this special time, allowing you to bond with your baby without worry.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-rose-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Newborn Babycare Now!</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Postpartum Home Care Is Essential... */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Postpartum Home Care Is Essential for Every New Mother in Bareilly</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Post-delivery care isn’t just about rest; it’s about structured healing, emotional support, and establishing a strong foundation for both mother and child. At EzyHelpers, our postpartum home care services in Bareilly focus on holistic recovery, blending trusted traditions with expert supervision to ensure mothers regain strength safely and confidently.</p>
              <p>Our trained Japa maids in Bareilly provide not just physical care but emotional reassurance, allowing new mothers to bond with their newborn without stress or overwhelm. From warm oil massages and personal hygiene support to preparing energy-boosting North Indian meals like panjiri and gond laddu, every step is carefully planned for faster recovery and better well-being.</p>
              <p>Our services go beyond basic help. Japa maids assist with safe umbilical cord care, soothing newborn massages (malish), feeding support, and teaching safe baby handling techniques, reducing the risk of infections, digestion issues, or poor feeding routines. For Caesarean mothers, they provide special assistance with mobility, posture, and wound care.</p>
              <p>By choosing EzyHelpers’ Japa maid services in Bareilly, you are not only ensuring your comfort and safety but also laying a strong, healthy foundation for your newborn’s growth. Expert care at home gives new parents the space to rest, recover, and truly enjoy the early days of parenthood.</p>
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
