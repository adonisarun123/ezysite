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
  CalendarIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  SwatchIcon,
  BeakerIcon,
  ShieldCheckIcon,
  GiftIcon,
  FaceSmileIcon,
  FireIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sofa Cleaning Services in Bareilly - Stain & Odour Removal',
  description: 'Book sofa cleaning in Bareilly for all sofa types. Remove dust, stains, and bad smells with safe, eco-friendly products and expert care.',
  openGraph: {
    title: 'Sofa Cleaning Services in Bareilly - Stain & Odour Removal',
    description: 'Book sofa cleaning in Bareilly for all sofa types. Remove dust, stains, and bad smells with safe, eco-friendly products and expert care.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/sofa-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/sofa-cleaning'
  }
}

export default function BareillySofaCleaning() {
  const badges = [
    '✓ Verified Cleaners',
    '✓ Same-Day Cleaning',
    '✓ 100% Safe for Family & Pets',
  ]

  const whyChooseFeatures = [
    {
      title: 'Same-Day & Flexible Scheduling',
      description: 'We can clean your sofa the same day or at a time that suits you.',
      icon: CalendarIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Affordable Packages',
      description: 'No hidden costs; transparent pricing for all families.',
      icon: CurrencyRupeeIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Complete Sofa Care',
      description: 'We clean sofas fully, removing dust, stains, and odors.',
      icon: SparklesIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Safe, Chemical-Free Products',
      description: 'Eco-friendly products that are safe for kids and pets.',
      icon: HeartIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Trusted by Thousands',
      description: 'Bareilly families rely on our professional sofa cleaning services.',
      icon: UserGroupIcon,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
  ]

  const metrics = [
    { value: '100%', label: 'Satisfaction Guarantee' },
    { value: '1000+', label: 'Sofas Cleaned' },
    { value: 'Safe & Eco-Friendly', label: 'Products Used' },
  ]

  const cleaningServices = [
    { title: 'Fabric Sofa Cleaning', description: 'Deep cleaning for all fabric types, removing dirt and germs.', icon: SwatchIcon },
    { title: 'Leather Sofa Care', description: 'Special treatment to prevent cracks and maintain shine.', icon: SparklesIcon },
    { title: 'Stain Removal', description: 'Remove tea, coffee, grease, and food stains safely.', icon: BeakerIcon },
    { title: 'Odor Treatment', description: 'Get rid of pet smells, food odors, and musty smells.', icon: CloudIcon },
    { title: 'Sanitization', description: 'Kills 99% of germs, keeping your sofa safe.', icon: ShieldCheckIcon },
    { title: 'Cushion & Pillow Cleaning', description: 'Restore comfort and hygiene for daily-use cushions.', icon: SwatchIcon },
    { title: 'Fabric Protection', description: 'Add stain-resistant coating to make future cleaning easier.', icon: ShieldCheckIcon },
    { title: 'Dust & Dirt Deep Cleaning', description: 'Remove dust trapped in sofa fibres.', icon: CloudIcon },
    { title: 'Festival Preparation Cleaning', description: 'Pre-Diwali or wedding cleaning for guest-ready sofas.', icon: GiftIcon },
    { title: 'Pet Hair & Dander Removal', description: 'Remove hair, dander, and odors fully.', icon: HeartIcon },
  ]

  const types = [
    'Fabric Sofas',
    'Leather Sofas',
    'Velvet & Delicate Fabric Sofas',
    'Rexine & Synthetic Sofas',
    'L-Shape & Corner Sofas',
    'Recliner & Electric Sofas',
    'Wooden Frame Sofas',
    'Antique & Vintage Sofas',
    'Office & Commercial Seating',
    'Bean Bags & Floor Cushions',
    'Dining Chair Fabrics',
    'Sofa Beds & Convertible Sofas',
  ]

  const whyNeedFeatures = [
    {
      title: 'Wiping or vacuuming only cleans the surface. Deep dirt and allergens stay inside.',
      icon: ExclamationTriangleIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Wrong cleaning methods can damage fabric or fade sofa colors.',
      icon: ExclamationTriangleIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Tough stains like tea, coffee, or food may not come out.',
      icon: ExclamationTriangleIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Dust mites, pet hair, and bacteria may remain, affecting family health.',
      icon: ExclamationTriangleIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Professionals save your time and give long-lasting results safely.',
      icon: ExclamationTriangleIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
  ]

  const benefits = [
    "Deep cleaning removes dust, allergens, and germs, keeping kids and elders safe.",
    "Restores sofa colors, softness, and overall appearance.",
    "Extends sofa life, cushions, and delicate fabrics.",
    "Eliminates stubborn stains, odors, and pet smells.",
    "Uses eco-friendly products safe for family and pets."
  ]

  const steps = [
    { step: '1', title: 'Share Your Requirements', desc: 'Tell us the sofa type, material, and any stain concerns.' },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Select a day and time that fits your family schedule.' },
    { step: '3', title: 'Expert Cleaner Visit', desc: 'The verified cleaner arrives with eco-friendly products and safe cleaning equipment.' },
    { step: '4', title: 'Quality Service & Support', desc: 'Thorough cleaning guaranteed with follow-up help for any issues.' },
  ]

  const explore = [
    { href: '/cities/bareilly/babysitter', title: 'Newborn Babycare Services', desc: 'Caring Japa maids for new mothers and newborn babies.', cta: 'Learn about Newborn Babycare', icon: FaceSmileIcon },
    { href: '/cities/bareilly/cooks', title: 'Cook Services', desc: 'Hire skilled cooks for daily meals or special occasions at home.', cta: 'Learn about Cook Services', icon: FireIcon },
    { href: '/cities/bareilly/live-in-maid', title: 'Live-in House Maid Services', desc: 'Find reliable live-in maids for full-time home support.', cta: 'Learn about Live-in House Maid Services', icon: HomeIcon },
  ]

  const faqs: FAQItem[] = [
    { question: 'Do you offer sofa cleaning at home in Bareilly?', answer: 'Yes, EzyHelpers cleans sofas at home in Bareilly. Our trained experts use advanced machines and safe products. You don’t need to move your furniture anywhere.' },
    { question: 'Do you provide stain removal as part of sofa cleaning services in Bareilly?', answer: 'Yes. We remove tough stains from tea, coffee, food, and grease safely, without damaging your sofa.' },
    { question: 'Can you remove pet hair and smells from sofas?', answer: 'Yes. We remove pet hair, dander, and odors so your sofa is safe and fresh for family and pets.' },
    { question: 'How do you clean leather sofas in Bareilly?', answer: 'We gently clean and condition leather to keep it shiny and prevent cracks. No harsh chemicals are used.' },
    { question: 'How long does sofa cleaning take?', answer: 'Cleaning time depends on sofa size, number of seats, fabric type, and dirt level. We clean quickly but thoroughly.' },
    { question: 'Do you clean cushions and pillows too?', answer: 'Yes. Daily-use cushions and pillows are cleaned to remove dust and germs.' },
    { question: 'What if I have an antique or delicate sofa?', answer: 'We handle antique and delicate sofas carefully, using soft brushes and gentle cleaning methods.' },
    { question: 'Can you remove allergens like dust mites?', answer: 'Yes. Our deep cleaning removes dust mites, pollen, and dander, making it safer for people with asthma or allergies.' },
    { question: 'Is dry cleaning available for delicate sofa fabrics?', answer: 'Yes, we provide dry cleaning for delicate fabrics, ensuring no damage occurs.' },
    { question: 'Do you offer combo cleaning packages with other services?', answer: 'Yes, you can combine sofa cleaning with mattress cleaning, home deep cleaning, or curtain washing.' },
    { question: 'Is same-day sofa cleaning available in Bareilly?', answer: 'Yes. We provide same-day cleaning for urgent needs, so your sofa is ready for guests or emergencies.' },
    { question: 'Do you offer sofa shampooing services in Bareilly?', answer: 'Yes. We shampoo sofas with safe solutions to remove dirt, oil, and grime, leaving them fresh and hygienic.' },
    { question: 'Can I book sofa cleaning with full home cleaning in Bareilly?', answer: 'Yes. You can book both together to refresh your entire home in one go.' },
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Sofa Cleaning Services' }
          ]}
        />

        {/* Hero Section: H1 + Intro + CTA + Badges + Metrics */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Professional Sofa Cleaning Services in Bareilly</h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Is your sofa looking dirty, dusty, or stained? Our trained professionals clean sofas deeply at home in Bareilly, making them fresh, hygienic, and comfortable for your family. We handle all types of sofas carefully so your home stays clean and healthy.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-indigo-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Sofa Cleaning Now</Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call Now for Same-Day Service</Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {badges.map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">{b}</div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/20 mx-auto">
                {metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-indigo-200 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Sofa Cleaning Services in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Sofa Cleaning Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">EzyHelpers is the trusted choice for sofa cleaning at home in Bareilly.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

        {/* Our Sofa Cleaning Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Sofa Cleaning Services in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">We offer complete sofa cleaning for your home’s comfort and hygiene.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cleaningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-purple-100 rounded-xl p-3 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Sofas We Clean in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Sofas We Clean in Bareilly</h2>
              <p className="text-gray-600">We cover every type of sofa material and design with professional sofa cleaning at home in Bareilly:</p>
            </div>

            <div className="bg-purple-100/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {types.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Need Home Cleaning Can't Fully Clean Your Sofa in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Home Cleaning Can’t Fully Clean Your Sofa</h2>
              <p className="text-lg text-gray-600">Common Problems with Cleaning Your Sofa on Your Own</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyNeedFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why You Should Hire Professional Sofa Cleaning at Home in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Benefits of Professional Sofa Cleaning at Home in Bareilly</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-600 mt-1 shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sofa Cleaning at Home in Bareilly – Our Easy Booking Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Sofa Cleaning at Home in Bareilly – Our Easy Booking Process</h2>
              <p className="text-lg text-gray-600">Booking EzyHelpers for sofa cleaning services in Bareilly is quick and hassle-free:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">{st.step}</div>
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
              <p className="text-lg text-gray-600">Easy solutions beyond sofa cleaning for Bareilly homes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {explore.map((e, i) => (
                <Link key={i} href={e.href} className={`group rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${i === 0 ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100 hover:border-indigo-300' : i === 1 ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100 hover:border-blue-300' : 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-100 hover:border-emerald-300'}`}>
                  <e.icon className={`${i === 0 ? 'text-indigo-600' : i === 1 ? 'text-blue-600' : 'text-emerald-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-gray-600 mb-4">{e.desc}</p>
                  <div className={`${i === 0 ? 'text-indigo-600' : i === 1 ? 'text-blue-600' : 'text-emerald-600'} font-semibold`}>{e.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Don’t Let a Dirty Sofa Spoil Your Home’s Look! (Final CTA) */}
        <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let a Dirty Sofa Spoil Your Home’s Look!</h2>
              <p className="text-xl mb-8 text-indigo-100">Book professional sofa cleaning services in Bareilly and enjoy sparkling clean furniture without the hassle.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Sofa Cleaning Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call 080-31411776</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular Sofa Cleaning at Home in Bareilly Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Regular Sofa Cleaning at Home in Bareilly Matters</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
              <p>Dusty sofas aren’t just unsightly - they can affect your family’s health. In Bareilly, dry weather, festival activity, and pollution contribute to dust buildup, making regular sofa cleaning essential. EzyHelpers provides deep cleaning that removes dirt, dust mites, pet hair, stains, and odor-causing bacteria using advanced machines and eco-friendly products, keeping your sofas safe for children, pets, and elders. Regular cleaning prevents allergens, extends the life of your furniture, and restores colors and softness. Whether it’s a fabric recliner, a leather L-shaped sofa, or delicate velvet, our services protect your family’s health, maintain indoor air quality, and save money on replacements. A clean sofa is more than furniture - it’s where your family relaxes, and memories are made.</p>
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
