import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { 
  PhoneIcon, 
  CheckCircleIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sofa Cleaning Services in Bareilly - Stain & Odour Removal',
  description: 'Book sofa cleaning in Bareilly for all types of fabric. Remove stains, dust, and bad smells with eco-friendly products and expert handling.',
  openGraph: {
    title: 'Sofa Cleaning Services in Bareilly - Stain & Odour Removal',
    description: 'Book sofa cleaning in Bareilly for all types of fabric. Remove stains, dust, and bad smells with eco-friendly products and expert handling.',
    url: 'https://ezyhelpers.com/cities/bareilly/sofa-cleaning',
    type: 'website',
  }
}

export default function BareillySofaCleaning() {
  const badges = [
    'Verified & Trained Cleaning Professionals',
    'Eco-Friendly & Safe Products',
    'Same-Day Cleaning Available',
    '100% Safe for Family & Pets',
    'Weekend & Holiday Service',
  ]

  const metrics = [
    { value: '100%', label: 'Satisfaction Guarantee' },
    { value: 'Same-Day', label: 'Service Available' },
    { value: '1000+', label: 'Sofas Cleaned' },
    { value: 'Safe & Eco-Friendly', label: 'Products Used' },
  ]

  const services = [
    { title: '1. Fabric Sofa Cleaning', desc: 'Gentle deep cleaning for all fabrics, removing dirt and germs.' },
    { title: '2. Leather Sofa Care', desc: 'Special conditioning to prevent cracks and maintain shine.' },
    { title: '3. Stain Removal', desc: 'Tough removal for tea, coffee, grease, and food stains.' },
    { title: '4. Odor Treatment', desc: 'Clears pet smells, food odors, and musty damp sofa smells.' },
    { title: '5. Sanitization', desc: 'Kills 99% of germs, ensuring cleaner and healthier sofa seating areas.' },
    { title: '6. Cushion & Pillow Cleaning', desc: 'Restores comfort and hygiene to daily-use cushions and pillows.' },
    { title: '7. Upholstery Protection Treatment', desc: 'Adds stain-resistant coating to protect fabric and ease maintenance.' },
    { title: '8. Dust & Dirt Deep Cleaning', desc: "Removes embedded dust from Bareilly's polluted air." },
    { title: '9. Festival Preparation Cleaning', desc: 'Pre-Diwali/wedding special for guest-ready furniture.' },
    { title: '10. Pet Hair & Dander Removal', desc: 'Eliminates hair, dander, and pet odors completely.' },
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
    'Dining Chair Upholstery',
    'Sofa Beds & Convertible Sofas',
  ]

  const steps = [
    { step: '1', title: 'Share Your Requirements', desc: 'Tell us the sofa type, material, and any stain concerns.' },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Select a day and time that fits your family schedule.' },
    { step: '3', title: 'Expert Cleaner Visit', desc: 'The verified cleaner arrives with eco-friendly products and safe cleaning equipment.' },
    { step: '4', title: 'Quality Service & Support', desc: 'Thorough cleaning guaranteed with follow-up help for any issues.' },
  ]

  const explore = [
    { href: '/cities/bareilly/babysitter', title: 'Newborn Babycare Services', desc: 'Caring Japa maids for new mothers and newborn babies.', cta: 'Learn about Newborn Babycare' },
    { href: '/cities/bareilly/cooks', title: 'Cook Services', desc: 'Hire skilled cooks for daily meals or special occasions at home.', cta: 'Learn about Cook Services' },
    { href: '/cities/bareilly/live-in-maid', title: 'Live-in House Maid Services', desc: 'Find reliable live-in maids for full-time home support.', cta: 'Learn about Live-in House Maid Services' },
  ]

  const faqs: FAQItem[] = [
    { question: 'Do you offer sofa cleaning at home in Bareilly?', answer: 'Yes, EzyHelpers offers professional sofa cleaning at home in Bareilly. Our trained experts visit your home with advanced machines and eco-safe products. We clean sofas thoroughly at your doorstep without needing you to move furniture or carry it elsewhere.' },
    { question: 'Do you provide stain removal as part of sofa cleaning services in Bareilly?', answer: 'Yes, stain removal is a key part of our sofa cleaning services in Bareilly. We treat tough stains from tea, coffee, food spills, grease, and more using safe techniques that don’t damage the sofa fabric or leather.' },
    { question: 'Can you remove pet hair and pet smells from sofas?', answer: 'Yes, we remove pet hair, dander, and unpleasant pet odors during sofa cleaning at home in Bareilly. Our cleaning methods ensure the fabric is free from allergens and smells, making it safe and pleasant for your family and pets.' },
    { question: 'How do you clean leather sofas in Bareilly?', answer: 'Our leather sofa care service in Bareilly includes gentle cleaning, conditioning, and moisturising to maintain shine and prevent cracks. We avoid harsh chemicals and use products that protect leather from drying out or fading.' },
    { question: 'How long does sofa cleaning take?', answer: 'Sofa cleaning at home in Bareilly usually depends on the size, number of seats, material type, and level of dirt. We work efficiently without compromising on quality.' },
    { question: 'Do you clean sofa cushions and pillows too?', answer: 'Yes, we clean daily-use cushions and pillows along with your sofa. This helps remove dirt, dust, and bacteria, restoring hygiene and comfort to your seating area.' },
    { question: 'What if I have an antique or delicate sofa?', answer: 'We handle antique and delicate sofas with extra care. Our experts use gentle cleaning techniques and soft brushes suitable for vintage or fragile fabric to preserve their look and structure.' },
    { question: 'Can you remove allergens like dust mites during sofa cleaning?', answer: 'Yes, our deep sofa cleaning services in Bareilly target allergens like dust mites, pollen, and dander, making the sofa safer for people with asthma or allergies.' },
    { question: 'Is dry cleaning available for delicate sofa fabrics?', answer: 'Yes, we provide dry cleaning for delicate or non-water-resistant sofas. We inspect the fabric first and choose the safest method to clean it without causing damage.' },
    { question: 'Do you offer combo cleaning packages with other services?', answer: 'Yes, you can combine sofa cleaning with mattress cleaning, deep home cleaning, or curtain washing. Ask us about bundled deals when booking to save time and cost.' },
    { question: 'Is same-day sofa cleaning available in Bareilly?', answer: 'Yes, EzyHelpers provides same-day sofa cleaning at home in Bareilly for urgent needs. Whether you have guests arriving or a sudden spill, our team can reach your home quickly and deliver prompt, thorough cleaning.' },
    { question: 'Do you offer sofa shampooing services in Bareilly?', answer: 'Yes, our sofa cleaning services in Bareilly include deep shampooing using fabric-safe solutions. It removes embedded dirt, oil, and grime, leaving your sofa fresh and hygienic without damaging the upholstery.' },
    { question: 'Can I book sofa cleaning along with full home deep cleaning in Bareilly?', answer: 'Yes, you can easily combine sofa cleaning with full home deep cleaning in Bareilly. It’s a great way to refresh your entire living space in one go. Ask about available combo packages.' },
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Sofa Cleaning Services in Bareilly – Professional Sofa Cleaning at Home</h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Is your sofa looking dull, dusty, or stained? Our skilled professionals deliver deep sofa cleaning at home in Bareilly, restoring freshness and hygiene so your family enjoys a clean, healthy, and comfortable living space.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full bg-white text-indigo-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Sofa Cleaning Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call Now for Same-Day Service</Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {badges.map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">{b}</div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20 max-w-4xl mx-auto">
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
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Sofa Cleaning Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">EzyHelpers is your reliable choice for sofa cleaning at home in Bareilly.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Same-Day & Flexible Scheduling',
                'Fast Same-Day Sofa Cleaning',
                'Affordable Packages with No Hidden Fees',
                'Complete Sofa Care Solutions',
                'Safe, Chemical-Free Cleaning Solutions',
                'Trusted by 1000s of Bareilly Families',
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center text-gray-900 font-semibold"><CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Sofa Cleaning Services in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Sofa Cleaning Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Complete sofa cleaning and care for your family’s comfort</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Sofas We Clean in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Types of Sofas We Clean in Bareilly</h2>
            <p className="text-gray-700 mb-6">We cover every type of sofa material and design with professional sofa cleaning at home in Bareilly:</p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 list-disc pl-5">
              {types.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
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
                  <HomeIcon className={`${i === 0 ? 'text-indigo-600' : i === 1 ? 'text-blue-600' : 'text-emerald-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
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
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let a Dirty Sofa Spoil Your Home’s Look!</h2>              <p className="text-xl mb-8 text-indigo-100">Book professional sofa cleaning services in Bareilly and enjoy sparkling clean furniture without the hassle.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Sofa Cleaning Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"><PhoneIcon className="h-5 w-5 mr-2" />Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular Sofa Cleaning at Home in Bareilly Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Regular Sofa Cleaning at Home in Bareilly Matters</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Dusty sofas aren’t just unsightly; they can also affect your family’s health and comfort. In Bareilly, where dry weather, festival activity, and heavy pollution contribute to dust buildup, regular sofa cleaning plays a vital role in maintaining a hygienic home.</p>
              <p>At EzyHelpers, we go beyond surface wiping to offer deep sofa cleaning services that remove hidden dirt, dust mites, pet hair, food stains, and odor-causing bacteria from your upholstery. Our experts use advanced machines and fabric-safe, eco-friendly products to restore the cleanliness and freshness of your sofa without any risk to children, pets, or elders.</p>
              <p>Regular cleaning prevents the buildup of allergens that can trigger asthma, cough, or skin irritation, especially in homes with kids, pets, or senior citizens. It also extends the life of your sofa fabric and cushions, keeping your furniture looking and feeling new for longer.</p>
              <p>Whether it’s a fabric recliner, leather L-shaped sofa, or delicate velvet seating, we tailor our sofa cleaning at home in Bareilly to the specific material and cleaning requirement. By investing in periodic sofa cleaning with EzyHelpers, you’re not just maintaining your home’s aesthetics, but you are also protecting your family’s health, ensuring indoor air quality, and saving money by avoiding expensive upholstery replacements.</p>
              <p>A clean sofa is more than furniture; it’s where your family relaxes, guests gather, and memories are made. Keep it fresh, safe, and beautiful with EzyHelpers’ trusted sofa cleaning services in Bareilly.</p>
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