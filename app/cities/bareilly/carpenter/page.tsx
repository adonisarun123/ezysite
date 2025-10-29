import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { 
  ClockIcon, 
  PhoneIcon, 
  ArrowRightIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  CurrencyRupeeIcon,
  HomeIcon,
  BoltIcon,
  RectangleStackIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Carpenter Home Service in Bareilly – Skilled Work',
  description: 'Hire skilled carpenter home service in Bareilly for furniture repair, fitting, woodwork & custom installations. Reliable & trained professionals.',
  openGraph: {
    title: 'Carpenter Home Service in Bareilly – Skilled Work',
    description: 'Hire skilled carpenter home service in Bareilly for furniture repair, fitting, woodwork & custom installations. Reliable & trained professionals.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/carpenter',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/carpenter'
  }
}

export default function BareillyCarpentersPage() {
  const carpentryServices = [
    { title: 'Wooden Furniture Repair (Traditional UP Style)', description: 'Fix broken chairs, tables, and antique furniture with authentic craftsmanship.' },
    { title: 'Custom Storage Solutions for Joint Family Homes', description: 'Space-saving cupboards, wardrobes, and shelves for large families.' },
    { title: 'Religious Furniture (Mandir & Prayer Area Setup)', description: 'Beautifully crafted wooden mandirs, pooja stands, and prayer benches.' },
    { title: 'Door & Window Repairs', description: 'Common in traditional Bareilly homes, fix squeaky doors, broken windows, and frames.' },
    { title: 'Modular Kitchen Setup for Bareilly Homes', description: 'Custom kitchen cabinets, shelves, and storage for easy cooking.' },
    { title: 'Study Table Solutions for Student Families', description: 'Strong, spacious study tables & bookshelves for kids & students.' },
    { title: 'Bed, Cupboard & Wardrobe Repairs', description: 'Fix broken frames, hinges, and drawers smoothly.' },
    { title: 'Furniture Assembly & Repairs', description: 'Assemble new furniture or fix old furniture with care.' },
    { title: 'Window & Curtain Rod Fixing', description: 'Secure fittings for curtains, blinds, and rods.' },
    { title: 'Drill & Hang Services', description: 'Wall mounts, shelves, and frames are installed safely.' },
  ]

  const whyChooseFeatures = [
    { title: 'Skilled & Experienced Carpenters', description: 'Traditional skills, trusted professionals, and transparent pricing make EzyHelpers the best choice for carpenter home service in Bareilly.', icon: AcademicCapIcon },
    { title: 'Fast Same-Day Woodwork Services', description: 'Quick response and timely completion for urgent carpentry needs.', icon: ClockIcon },
    { title: 'Fair and Transparent Pricing', description: 'Clear estimates with no hidden charges and honest pricing.', icon: CurrencyRupeeIcon },
    { title: 'Complete Carpentry Solutions for Bareilly Homes', description: 'From small repairs to custom furniture for every room.', icon: WrenchScrewdriverIcon },
    { title: 'Free On-Site Estimation', description: 'We visit, inspect, and provide a transparent on-site estimate.', icon: MapPinIcon },
    { title: 'Dust-Free & Clean Work', description: 'Proper dust control and cleanup after every job.', icon: SparklesIcon },
  ]

  const carpentryProcess = [
    { step: '1', title: 'Share Your Need', description: 'Tell us your carpentry work; what needs fixing or building.' },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a date and time that perfectly suits your family.' },
    { step: '3', title: 'Expert Carpenter Visits', description: 'Our skilled, verified carpenter arrives, fully prepared for the job.' },
    { step: '4', title: 'Quality Service & Support', description: 'We ensure your happiness and offer follow-up help.' },
  ]

  const faqs: FAQItem[] = [
    { question: 'Do you repair beds, cupboards, and wardrobes?', answer: "Yes. Our professional carpenter home service in Bareilly includes repairing bed frames, cupboard doors, hinges, drawers, and wardrobes. We fix loose parts, reinforce structures, and ensure all functions work smoothly to extend furniture's lifespan and usability." },
    { question: 'Do you assemble new furniture in Bareilly?', answer: 'Yes. EzyHelpers carpenters assemble new furniture and repair old furniture in Bareilly. Our verified professionals arrive equipped to set up beds, tables, cabinets, and more, saving you time and ensuring proper installation with no leftover parts or confusion.' },
    { question: 'Are furniture assembly services available in Bareilly?', answer: 'Yes, professional furniture assembly services are available through our carpenter home service in Bareilly. Our skilled carpenters assemble new furniture and fix old pieces using the right tools and techniques, ensuring safe, sturdy, and accurate setup every time.' },
    { question: 'Do EzyHelpers’ carpenters in Bareilly fix window and curtain rods?', answer: 'Yes. We handle window and curtain rod installation and fixing. EzyHelpers carpenters ensure secure fitting of rods and blinds, checking stability and alignment so curtains and blinds operate smoothly and safely.' },
    { question: 'Can you provide drill and hang services in Bareilly?', answer: ' Yes. Our service includes drill and hang jobs like installing wall mounts, shelves, picture frames, curtain rods, and other fixtures in Bareilly homes. Carpenters use proper anchors and measurements to ensure a neat and level finish.' },
    { question: 'What types of furniture repairs do you handle in Bareilly?', answer: 'We offer wooden furniture repair in Bareilly, including fixing broken chairs, tables, antique items, and more. EzyHelpers carpenters are skilled in traditional UP-style craftsmanship, ensuring restored furniture looks and functions beautifully while preserving heritage value.' },
    { question: 'Do you build mandir and pooja furniture in Bareilly?', answer: 'Yes. We offer dedicated mandir and prayer area setup services in Bareilly. EzyHelpers carpenters craft beautifully designed wooden mandirs, pooja stands, and prayer benches with traditional aesthetics and fine craftsmanship suited to your spiritual needs.' },
    { question: 'Can you repair doors and windows in Bareilly homes?', answer: 'Absolutely. Through our carpenter home service in Bareilly, you can fix squeaky doors, broken windows, and damaged frames. They fix common household issues like misaligned doors, loose hinges, or window pane damage to restore smooth operation and home security.' },
    { question: 'What areas of the home do you cover with carpenter home service in Bareilly?', answer: 'EzyHelpers covers all household carpentry needs in Bareilly, including living room furniture repair, kitchen cabinets, bedroom wardrobes, pooja room work, balcony shelves, staircase railing repair, and more. We deliver a comprehensive carpentry upgrade for every area of your home.' },
  ]

  // (no additional constants)

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Carpenter Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Local Expertise & Traditional Skills</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Carpenter Home Service in Bareilly –
                <span className="block text-green-200">Reliable & Skilled Carpenters for Your Home in Bareilly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                EzyHelpers offers professional carpenters in Bareilly for reliable home repairs, beautiful custom woodwork, and exceptional craftsmanship to enhance your living space.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Transparent Pricing & Local Expertise</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Same-Day Carpentry Repairs</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Locally Experienced Carpenters</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Skilled in Traditional & Modern Work</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✅ Quality Tools & Premium Materials</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-green-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Carpenter Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Same-Day Service Available
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/20 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">Bareilly's Choice</div>
                  <div className="text-green-200 text-sm">For Home Carpentry</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Safe & Certified</div>
                  <div className="text-green-200 text-sm">Professional Carpenters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Fixed Pricing</div>
                  <div className="text-green-200 text-sm">No Surprises</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Always On Time</div>
                  <div className="text-green-200 text-sm">For Your Convenience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section (placed before Services Offered as per Markdown) */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Carpenter Home Service in Bareilly?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Traditional skills, trusted professionals, and transparent pricing make EzyHelpers the best choice for carpenter home service in Bareilly.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-6"><feature.icon className="h-8 w-8 text-green-600" /></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered by Our Professional Carpenters in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Services Offered by Our Professional Carpenters in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive solutions for all your home's wood and furniture needs.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carpentryServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Carpenter Services for Bareilly Homes */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Specialized Carpenter Services for Bareilly Homes</h2>
              <p className="text-lg text-gray-600">Custom Woodwork Solutions Designed for Bareilly's Homes and Lifestyles</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="bg-green-100 rounded-lg p-3 w-fit mx-auto mb-4"><HomeIcon className="h-8 w-8 text-green-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mandir & Prayer Furniture</h3>
                <p className="text-sm text-gray-600">Custom wooden mandirs, pooja stands & sacred storage, crafted with traditional designs for spiritual homes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="bg-green-100 rounded-lg p-3 w-fit mx-auto mb-4"><CogIcon className="h-8 w-8 text-green-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Kitchen Solutions</h3>
                <p className="text-sm text-gray-600">Modular kitchens designed for Bareilly’s cooking style, with spice racks, sturdy countertops & easy utensil access.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="bg-green-100 rounded-lg p-3 w-fit mx-auto mb-4"><AcademicCapIcon className="h-8 w-8 text-green-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Study Tables for Students</h3>
                <p className="text-sm text-gray-600">Ergonomic study desks with book storage & proper lighting support help Bareilly’s students focus better.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="bg-green-100 rounded-lg p-3 w-fit mx-auto mb-4"><RectangleStackIcon className="h-8 w-8 text-green-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Storage for Joint Families</h3>
                <p className="text-sm text-gray-600">Space-saving wardrobes, multi-section cupboards & clever storage while keeping large family homes organised.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Materials & Expertise */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Local Materials & Expertise</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Knowledge of Bareilly’s Wood Markets– Best quality wood at fair prices</li>
                <li>Monsoon-Resistant Wood Options– Prevents damage in humid weather</li>
                <li>Cost-Effective Solutions– Save money with locally sourced materials</li>
              </ul>
            </div>
          </div>
        </section>

        {/* (Removed Carpentry Types section as per Markdown alignment) */}

        {/* How to Book Our Professional Carpenter in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Professional Carpenter in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Booking Carpenter Home Service is easy and quick! Follow these 4 simple steps:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {carpentryProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Easy solutions beyond carpentry for Bareilly homes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/on-demand-helper" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <HandRaisedIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">On-Demand Helpers</h3>
                <p className="text-gray-600 mb-4">Need quick help with daily tasks? Book reliable local helpers.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn about On-Demand Helpers <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>

              <Link href="/cities/bareilly/drivers" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Driver Services</h3>
                <p className="text-gray-600 mb-4">Hire trusted drivers for local trips or outstation travel anytime.</p>
                <div className="flex items-center text-yellow-600 font-semibold">Learn about Driver Services <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>

              <Link href="/cities/bareilly/electrician" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrician Services</h3>
                <p className="text-gray-600 mb-4">Expert electricians for all your home wiring and appliance power needs.</p>
                <div className="flex items-center text-green-600 font-semibold">Learn about Electrician Services <ArrowRightIcon className="h-4 w-4 ml-2" /></div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-green-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section (placed before Maintenance and FAQs as per Markdown) */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don't Let Furniture Problems Bother You!</h2>
              <p className="text-xl mb-8 text-green-100">Get your carpenter home service in Bareilly handled quickly and reliably with EzyHelpers. Our trusted, professional carpenters solve your issues fast so you can relax in a hassle-free home.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Carpenter Now
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

        {/* Why Regular Carpentry Maintenance Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Regular Carpentry Maintenance Matters for Bareilly Homes</h3>
              <p className="text-gray-700 mb-4">Woodwork in Indian homes, especially in Bareilly’s traditional and joint family households, plays a crucial role in both function and heritage. At EzyHelpers, we believe that professional carpentry is not just about building new furniture but about preserving and enhancing your home through regular maintenance and skilled repairs.</p>
              <p className="text-gray-700 mb-4">Over time, wooden furniture, doors, windows, and storage units suffer from wear and tear due to humidity, termites, seasonal changes, or simply daily use. Small issues like loose hinges, cracked panels, or swollen door frames, if ignored, can turn into costly replacements. Our professional carpenters in Bareilly are trained to spot these early signs and fix them efficiently, saving you time, money, and hassle.</p>
              <p className="text-gray-700 mb-4">We handle everything from restoring antique wooden furniture and fixing pooja mandirs to repairing study desks, kitchen cabinets, and wardrobes. Whether you need to adjust a jammed drawer or reinforce a weak bed frame, our carpenters bring local knowledge, traditional UP-style craftsmanship, and modern tools to ensure long-lasting quality.</p>
              <p className="text-gray-700">With EzyHelpers’ carpenter home service in Bareilly, you also get access to seasonal wood care, like using monsoon-resistant treatments to prevent warping or selecting cost-effective materials from trusted local markets. Regular inspections and upkeep not only enhance the look of your interiors but also extend the life of your woodwork.</p>
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
