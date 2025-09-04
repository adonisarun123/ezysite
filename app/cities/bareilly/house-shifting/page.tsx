import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { PhoneIcon, CheckCircleIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Household Shifting in Bareilly – Expert Packers',
  description:
    'Looking for household shifting services in Bareilly? Our movers handle packing, safe transport, and careful unpacking for a smooth relocation.',
  openGraph: {
    title: 'Household Shifting in Bareilly – Expert Packers',
    description:
      'Looking for household shifting services in Bareilly? Our movers handle packing, safe transport, and careful unpacking for a smooth relocation.',
    url: 'https://ezyhelpers.com/cities/bareilly/house-shifting',
    type: 'website',
  },
}

export default function BareillyHouseShifting() {
  const badges = [
    '✅ Verified & Background-Checked Movers',
    '✅Secure Packing & Safe Transport',
    '✅ Transparent Pricing with No Hidden Fees',
    '✅ Same-Day Shifting Available',
    '✅ Respectful Handling of All Your Items',
    '✅ Local & Long-Distance Shifting',
  ]

  const metrics = [
    { value: '2-Hour', label: 'Response Time' },
    { value: '500+', label: 'Homes Shifted' },
    { value: '100%', label: 'Damage-Free Guarantee' },
  ]

  const whyChoose = [
    'Trusted Local Packers & Movers',
    'Quick Same-Day Shifting',
    'Complete Packing & Moving Solution',
    'Damage-Free Handling with Trained Movers',
    'Custom Packing for All Items',
    'Flexible Time Slots Including Early Morning or Night Move',
  ]

  const services = [
    {
      title: '1. Full House Packing & Unpacking',
      desc:
        'We carefully pack all your belongings using high-quality materials and then unpack them at your new home, saving you time and effort.',
    },
    {
      title: '2. Furniture Dismantling & Reassembling',
      desc:
        'Our team can safely dismantle large furniture like beds, wardrobes, and dining tables and then reassemble them at your new place.',
    },
    {
      title: '3. Safe Transportation',
      desc:
        'We use well-maintained vehicles, equipped with GPS tracking, to ensure your goods travel safely and you can know where your things are at all times.',
    },
    {
      title: '4. Loading & Unloading Services',
      desc:
        'Our trained staff handles all the heavy lifting, ensuring your items are loaded and unloaded without damage.',
    },
    {
      title: '5. Fragile Item Packing',
      desc:
        'Special care and packing materials are used for delicate items like glass, mirrors, electronics, and kitchenware.',
    },
    {
      title: '6. Vehicle Shifting (Car & Bike)',
      desc:
        'If you need to move your car or bike along with your household items, we provide safe and secure transport solutions.',
    },
    {
      title: '7. Office Shifting Services',
      desc:
        'Moving your office? We also handle commercial relocations with minimal disruption to your business.',
    },
    {
      title: '8. Inter-City Shifting',
      desc:
        'Moving from Bareilly to another city in India? We have the experience and network to ensure a smooth long-distance move.',
    },
    {
      title: '9. Specialized Item Handling',
      desc:
        'For pianos, large artworks, or other unique items, we have special tools and techniques to ensure their safe transport.',
    },
  ]

  const types = [
    '✅ Local House Shifting',
    '✅ Intercity Relocation',
    '✅ Apartment Shifting',
    '✅ Independent House Moving',
    '✅ Office Relocation',
    '✅ Student Relocation',
    '✅ Senior Citizen Moving',
    '✅ Festival Season Shifting',
    '✅ Emergency Shifting',
    '✅ Partial Household Moving',
    '✅ Fragile Items Transport',
    '✅ Heavy Furniture Shifting',
  ]

  const steps = [
    { step: '1', title: 'Share Your Shifting Details', desc: "Tell us about your shifting needs, how many items, and where you're moving." },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Choose a specific day and time slot that suits your family schedule' },
    { step: '3', title: 'Verified Movers Visit', desc: 'Our verified moving professionals arrive fully equipped for safe, reliable household shifting.' },
    { step: '4', title: 'Safe Shifting Done', desc: 'Enjoy a stress-free shifting experience with unpacking and reassembly at your new place.' },
  ]

  const explore = [
    { href: '/cities/bareilly/ac-repair', title: 'AC Repair Services', desc: 'Beat the Bareilly heat with fast and reliable AC servicing and repairs.', cta: 'Learn about AC Repair Services' },
    { href: '/cities/bareilly/japa', title: 'Newborn Baby Care Services', desc: 'Gentle and expert care for your little one right at your home.', cta: 'Learn about Newborn Baby Care' },
    { href: '/cities/bareilly/sofa-cleaning', title: 'Sofa Cleaning Services', desc: 'Revive your sofa with professional deep cleaning for a fresh look.', cta: 'Learn about Sofa Cleaning Services' },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What are household shifting services in Bareilly?',
      answer:
        'Household shifting services in Bareilly include professional packing, loading, transporting, unloading, and setting up your belongings during a move. EzyHelpers ensures a smooth and safe transition from one home to another within the city or nearby areas.',
    },
    {
      question: 'Do you offer local house shifting in Bareilly?',
      answer:
        'Yes, EzyHelpers provides local house shifting in Bareilly for flats, independent homes, and rental properties. Our team handles everything from packing to safe transportation and setup of your household items within Bareilly city limits.',
    },
    {
      question: 'Is furniture dismantling and reassembly included in household shifting services in Bareilly?',
      answer:
        'Yes, our household shifting services in Bareilly include dismantling bulky furniture like beds and wardrobes before moving and reassembling them at your new home, ensuring safety and convenience.',
    },
    {
      question: 'Do you handle fragile items during local house shifting in Bareilly?',
      answer:
        'Yes, we take extra care with fragile items such as glassware, mirrors, electronics, and decor by using bubble wrap, cushioning, and strong cartons to prevent damage during shifting in Bareilly.',
    },
    {
      question: 'How do you protect furniture during household shifting in Bareilly?',
      answer:
        'During shifting, we carefully wrap all furniture using bubble wrap, foam padding, corrugated sheets, and thick blankets. This ensures maximum protection against scratches, dents, or damage throughout the moving process.',
    },
    {
      question: 'Do your household shifting services in Bareilly include packing support?',
      answer:
        'Yes, our household shifting services in Bareilly include full packing support using strong, protective materials for furniture, electronics, kitchen items, clothes, and more, ensuring a safe, worry-free move.',
    },
    {
      question: 'What size of vehicle do you use for local house shifting in Bareilly?',
      answer:
        'We provide suitable vehicles based on your home size. For local house shifting in Bareilly, we use mini trucks or medium-sized tempos for 1BHK, 2BHK, or similar household sizes.',
    },
    {
      question: 'Do I need to arrange labour separately for house shifting in Bareilly?',
      answer:
        'No. Labour for loading, unloading, and handling your household items is included in our local house shifting services in Bareilly, so you don’t need to arrange anything separately.',
    },
    {
      question: 'What items can be shifted using EzyHelpers in Bareilly?',
      answer:
        'We shift all household items in Bareilly, including beds, sofas, mattresses, TVs, fridges, washing machines, kitchen utensils, and personal belongings, with complete safety and care.',
    },
    {
      question: 'Do you help set up furniture after shifting in Bareilly?',
      answer:
        'Yes, once we unload your items at your new home, our Bareilly house-shifting team assists with placing and reassembling furniture as needed.',
    },
    {
      question: 'Is dismantling geysers, fans, or AC included in house shifting services in Bareilly?',
      answer:
        'We help with basic uninstallation of fans and geysers as part of house shifting in Bareilly. AC uninstallation and installation should be done by a certified technician.',
    },
    {
      question: 'How early should I book household shifting services in Bareilly?',
      answer:
        "To ensure availability, it's best to book household shifting services in Bareilly at least 2 to 3 days in advance, especially during weekends or end-of-month rushes.",
    },
    {
      question: 'Can you help shift within the same locality in Bareilly?',
      answer:
        'Yes, we provide hyper-local house shifting in Bareilly, which is perfect for moving homes within the same apartment complex, colony, or neighbourhood.',
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
            { label: 'House Shifting' },
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
                Professional Household Shifting Services in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Fast, safe, and reliable household shifting services in Bareilly for stress-free local or long-distance moves. We handle packing, loading, transport, and unpacking with care, ensuring your belongings reach their new home securely and on time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-rose-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  Book Your Home Shifting
                </Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Shifting Service
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
                    <div className="text-rose-100 text-sm">{m.label}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Household Shifting in Bareilly?</h2>
              <p className="text-lg text-gray-600">Trust, speed, and professional moving excellence make us your best partner.</p>
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

        {/* Our Household Shifting Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Household Shifting Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions for all your shifting needs</p>
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

        {/* Types of Shifting Services We Provide */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Types of Shifting Services We Provide</h2>
            <p className="text-gray-700 mb-6">We handle all kinds of household relocations, big and small.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {types.map((t, i) => (
                <div key={i} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100 text-gray-900 font-semibold">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Household Shifting Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast and stress-free booking process in just 4 simple steps</p>
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
              <p className="text-lg text-gray-600">Easy solutions for other home needs in Bareilly</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {explore.map((e, i) => (
                <Link key={i} href={e.href} className={`group rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${i === 0 ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-blue-100 hover:border-blue-300' : i === 1 ? 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100 hover:border-rose-300' : 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100 hover:border-amber-300'}`}>
                  <HomeIcon className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-rose-600' : 'text-amber-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-gray-600 mb-4">{e.desc}</p>
                  <div className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-rose-600' : 'text-amber-600'} font-semibold`}>{e.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-rose-600 to-fuchsia-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let Shifting Stress You Out!</h2>
              <p className="text-xl mb-8 text-rose-100">Get trusted, affordable household shifting services in Bareilly with EzyHelpers. Our local experts ensure a smooth, damage-free move so you can settle into your new home without worries.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-rose-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Shifting Service Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Professional Household Shifting Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Professional Household Shifting Matters for Every Bareilly Home</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Shifting homes isn’t just about moving items; it’s about protecting your memories, valuables, and peace of mind. At EzyHelpers, we focus on stress-free and damage-free relocations tailored to Bareilly’s homes, roads, and weather conditions.</p>
              <p>Whether you’re shifting within a locality like Civil Lines or moving across Bareilly to Rajendra Nagar, a professional moving service ensures that your items are packed properly, transported securely, and unpacked with care. This avoids the common issues seen with local transporters like last-minute delays, broken items, or poor handling of delicate belongings.</p>
              <p>Our experienced shifting team uses industry-grade packing materials such as bubble wrap, stretch film, and sturdy boxes to protect your items from dust, scratches, and breakage. From large wardrobes and glass dining tables to TVs and kitchenware, each item is packed according to its size and fragility.</p>
              <p>Our team is trained to manage shifting during peak traffic hours and seasonal challenges without compromising timelines or care quality. Investing in professional house shifting in Bareilly means saving time, avoiding stress, and protecting the things that matter most. Let EzyHelpers handle your move so you can focus on making your new house feel like home.</p>
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
