import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full House Deep Cleaning in Bareilly – Book Experts Now',
  description: 'Get home deep cleaning in Bareilly for kitchen, bathroom, and entire house sanitization. Experienced cleaners ensure spotless, hygienic results.',
  openGraph: {
    title: 'Full House Deep Cleaning in Bareilly – Book Experts Now',
    description: 'Get home deep cleaning in Bareilly for kitchen, bathroom, and entire house sanitization. Experienced cleaners ensure spotless, hygienic results.',
    url: 'https://ezyhelpers.com/cities/bareilly/home-cleaning',
    type: 'website',
  }
}

export default function BareillyHomeCleaning() {
  const faqs: FAQItem[] = [
    { question: 'What is included in home deep cleaning in Bareilly?', answer: 'Home deep cleaning in Bareilly includes dusting, mopping, bathroom and kitchen cleaning, sofa and mattress cleaning, sanitisation, and more. It ensures every area, from living rooms to pooja rooms, is hygienically cleaned for a healthier living space.' },
    { question: 'Why should I choose professional cleaning services in Bareilly?', answer: 'Professional cleaning services in Bareilly like EzyHelpers offer trained cleaners, allergy-safe products, and high-quality tools to remove hidden dirt, allergens, and bacteria, making your home safer and more comfortable for your family.' },
    { question: 'How is deep cleaning different from regular cleaning?', answer: 'Deep cleaning targets hidden dust, bacteria, mold, and stains that routine cleaning misses. It involves intensive scrubbing, sanitisation, and cleaning of corners, fixtures, and furnishings, ensuring your Bareilly home stays truly hygienic.' },
    { question: 'Do you provide same-day deep cleaning services in Bareilly?', answer: 'Yes, EzyHelpers offers same-day home deep cleaning in Bareilly, ideal for urgent needs like guest visits, post-events, or quick sanitation requirements. Our team responds within 2 hours of your booking.' },
    { question: 'Are your house cleaners background-verified and trained?', answer: 'Yes, our professional cleaning services in Bareilly only include background-checked and trained cleaners who use safe techniques and follow hygiene protocols for a stress-free and reliable experience.' },
    { question: 'Do you offer kitchen deep cleaning in Bareilly?', answer: 'Yes, our professional cleaning services in Bareilly include kitchen deep cleaning that removes grease, food stains, and bacteria from countertops, appliances, and cabinets. We make your cooking space safe, hygienic, and odor-free.' },
    { question: 'Do you offer post-festival home cleaning in Bareilly?', answer: 'Yes, we offer post-Holi, Diwali, and wedding cleanups in Bareilly. Our team removes colour stains, oil, and mess, restoring your home’s original shine after celebrations.' },
    { question: 'How often should I book home deep cleaning in Bareilly?', answer: 'It’s recommended to book professional home deep cleaning every 3 to 6 months in Bareilly to keep your home hygienic, fresh-smelling, and free of dust, pests, and illness-causing bacteria.' },
    { question: 'What is included in bathroom deep cleaning in Bareilly?', answer: 'Bathroom deep cleaning includes scrubbing tiles, disinfecting fittings, removing stains, cleaning mirrors, and clearing drains. Our team ensures germ-free and sparkling clean bathrooms.' },
    { question: 'How long does a deep cleaning session take?', answer: 'Depending on the size of your home and selected services, a deep cleaning session in Bareilly can take between 3 to 6 hours. Larger homes or post-construction jobs may take longer.' },
    { question: 'Do you clean glass windows and mirrors?', answer: 'Yes, we provide streak-free glass and window cleaning in Bareilly. It’s included in our standard and deep cleaning packages for a brighter, clearer home.' },
    { question: 'Can I book home deep cleaning in Bareilly for weekends or holidays?', answer: 'Yes, you can easily schedule home deep cleaning in Bareilly on weekends or public holidays. We understand your busy schedule and make sure you get cleaning help when it suits you best.' },
    { question: 'Can I choose which rooms or areas to clean instead of the whole house?', answer: 'Absolutely. With our professional cleaning services in Bareilly, you can choose to clean only specific rooms like the kitchen or bathrooms or even focus on certain items like windows or sofas.' },
  ]

  const whyChooseFeatures = [
    { title: 'Trained & Skilled Home Cleaning Experts', description: 'Trust, hygiene, and professional excellence for a cleaner, safer home.', icon: StarIcon },
    { title: 'Fast & Same-Day Deep Cleaning Service', description: 'Quick response and efficient completion for urgent cleaning needs.', icon: ClockIcon },
    { title: 'Clear, Fair, and Honest Pricing Always', description: 'Transparent pricing with no hidden charges.', icon: ShieldCheckIcon },
    { title: 'Complete Home Cleaning & Sanitization Solutions', description: 'From deep cleaning to sanitisation for a healthier home.', icon: BeakerIcon },
  ]

  const cleaningServices = [
    { title: 'Deep House Cleaning', description: 'Full home dusting, mopping, and sanitisation for healthy, fresh living.', icon: SparklesIcon },
    { title: 'Kitchen Deep Clean', description: 'Remove grease, food stains, and bacteria for a safe cooking environment.', icon: WrenchScrewdriverIcon },
    { title: 'Bathroom Deep Clean', description: 'Clean tiles, fittings, and tough stains to maintain perfect hygiene.', icon: BeakerIcon },
    { title: 'Carpet Cleaning Services', description: 'Deep shampooing, vacuuming, and drying to remove dust, allergens, and germs.', icon: HomeIcon },
    { title: 'Mattress Cleaning Services', description: 'Get rid of dust mites, bedbugs, and bacteria for better sleep health.', icon: HomeIcon },
    { title: 'Sofa & Upholstery Cleaning', description: 'Complete sofa, cushion, and curtain cleaning for allergen-free living.', icon: HomeIcon },
    { title: 'Post-Construction Cleaning', description: 'Dust removal and debris clearing after renovation or construction.', icon: WrenchScrewdriverIcon },
    { title: 'Regular Maintenance Cleaning', description: 'Weekly or monthly packages for a consistently fresh home.', icon: ClockIcon },
    { title: 'Glass & Window Cleaning', description: 'Sparkling, streak-free windows and mirrors for a bright, clear view.', icon: SparklesIcon },
    { title: 'Disinfection & Sanitization', description: 'Kill germs and viruses to protect your family’s health.', icon: BeakerIcon },
    { title: 'Pre-Monsoon Deep Cleaning', description: 'Mold prevention, damp control, and deep cleaning before the rainy season.', icon: CloudIcon },
    { title: 'Post-Festival Cleanup', description: 'Clean up after Holi, Diwali, or weddings to restore your home.', icon: SparklesIcon },
    { title: 'Dust Control Solutions', description: 'Advanced techniques to remove Bareilly’s heavy dust from every surface.', icon: WrenchScrewdriverIcon },
    { title: 'Water Tank Cleaning', description: 'Safe, hygienic cleaning of your water storage tanks for a pure water supply.', icon: BeakerIcon },
  ]

  const areasWeClean = [
    'Living Room Deep Clean',
    'Bedroom Cleaning Services',
    'Kitchen Comprehensive Clean',
    'Bathroom Complete Sanitization',
    'Balcony & Terrace Cleaning',
    'Staircase & Entrance Cleaning',
    'Wardrobes & Cupboards Cleaning',
    'Pooja Room Cleaning',
    'Store Room Cleaning',
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Home Cleaning Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <SparklesIcon className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-sm font-semibold">Professional Deep Cleaning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Home Deep Cleaning in Bareilly — Trusted Cleaning Services
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Enjoy a spotless, germ-free home with professional cleaning services in Bareilly for fresh, healthy, and stress-free family living.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Verified & Background-Checked Cleaners</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Allergy-Safe Products</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Same-Day Cleaning Available</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Flexible Scheduling</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Bareilly Local Cleaning Experts</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-green-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Deep Cleaning Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Cleaning Service
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">900+</div>
                  <div className="text-green-200 text-sm">Bareilly homes cleaned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-green-200 text-sm">Satisfaction Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Hour</div>
                  <div className="text-green-200 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Home Deep Cleaning in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Home Deep Cleaning in Bareilly?</h2>
              <p className="text-lg text-gray-600">Trust, hygiene, and professional excellence for a cleaner, safer home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 rounded-xl p-3 mr-4"><feature.icon className="h-8 w-8 text-green-600" /></div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Home Deep Cleaning Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Home Deep Cleaning Services in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive solutions for all your home cleaning needs with professional cleaning services in Bareilly.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cleaningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Areas We Clean Thoroughly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Areas We Clean Thoroughly</h2>
              <p className="text-gray-700 mb-4">Keep Every Corner Of Your Bareilly Home Fresh and Hygienic</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {areasWeClean.map((item, idx) => (<li key={idx}>{item}</li>))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Book Our Professional Cleaning Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Professional Cleaning Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast, simple booking in just 4 steps.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Cleaning Need</h3>
                <p className="text-gray-600 leading-relaxed">Explain your problem and which rooms need deep cleaning.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick a Convenient Time</h3>
                <p className="text-gray-600 leading-relaxed">Choose a comfortable day and time that fits your schedule.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Cleaner Visit</h3>
                <p className="text-gray-600 leading-relaxed">The verified cleaner arrives fully equipped with safe, high-quality materials.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enjoy a Sparkling Home</h3>
                <p className="text-gray-600 leading-relaxed">Relax with a guaranteed fresh home and helpful follow-up support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let Dirt Take Over Your Home!</h2>
              <p className="text-xl mb-8 text-green-100">Book EzyHelpers today for the best deep cleaning services in Bareilly.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Deep Cleaning Now
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

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">More reliable services for Bareilly homes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/packers-and-movers" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Packers & Movers Services</h3>
                <p className="text-gray-600 mb-4">Safe, quick shifting of household items with careful packing.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn About Packers & Movers</div>
              </Link>

              <Link href="/cities/bareilly/carpenter" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carpentry & Furniture Services</h3>
                <p className="text-gray-600 mb-4">Repair or make furniture, shelves, doors, and woodwork.</p>
                <div className="flex items-center text-purple-600 font-semibold">Learn About Carpentry Services</div>
              </Link>

              <Link href="/cities/bareilly/painting" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painting & Wall Services</h3>
                <p className="text-gray-600 mb-4">Professional wall painting, texture finishes, and waterproofing solutions.</p>
                <div className="flex items-center text-green-600 font-semibold">Learn About Painting Services</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Regular Deep Cleaning Matters for Every Home in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Why Regular Deep Cleaning Matters for Every Home in Bareilly</h3>
              <p className="text-gray-700 mb-4">Deep cleaning isn’t just about a tidy space; it’s about creating a healthier, safer, and more comfortable living environment. In Bareilly, where seasonal dust, pollution, and humidity can quickly affect your home, regular professional cleaning plays a crucial role in maintaining hygiene and preventing long-term damage.</p>
              <p className="text-gray-700 mb-4">At EzyHelpers, we go beyond surface-level cleaning to target the hidden dirt, bacteria, and allergens that regular sweeping and mopping often miss. From disinfecting high-touch surfaces to scrubbing grime from kitchens and bathrooms, our professional cleaning services in Bareilly are designed to keep your home truly fresh and germ-free.</p>
              <p className="text-gray-700 mb-4">We focus on every detail, whether it’s removing grease from chimney filters, clearing mold-prone bathroom corners, deep vacuuming under furniture, or cleaning rarely touched areas like ceiling fans, curtain rods, and behind appliances. Our trained cleaners use eco-friendly, allergy-safe products that are safe for children, elders, and pets.</p>
              <p className="text-gray-700">By investing in regular home deep cleaning with EzyHelpers, you not only reduce the risk of infections, allergies, and pests but also protect the longevity of your furniture, flooring, and appliances. A clean home is not just about appearance, it’s about peace of mind and well-being. Let EzyHelpers help you maintain a clean, happy, and healthy home, without the stress of doing it all yourself.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
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