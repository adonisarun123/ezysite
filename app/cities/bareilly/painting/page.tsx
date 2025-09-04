import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { 
  PhoneIcon, 
  CheckCircleIcon,
  PaintBrushIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Painting Services Bareilly – Book Experts',
  description: 'Trusted professional painting services in Bareilly offering reliable, timely painting with expert surface preparation and finishing.',
  openGraph: {
    title: 'Professional Painting Services Bareilly – Book Experts',
    description: 'Trusted professional painting services in Bareilly offering reliable, timely painting with expert surface preparation and finishing.',
    url: 'https://ezyhelpers.com/cities/bareilly/painting',
    type: 'website',
  }
}

export default function BareillyPainting() {
  const faqs: FAQItem[] = [
    { question: 'Do you offer exterior painting services in Bareilly?', answer: 'Yes, our house painters in Bareilly provide full exterior painting solutions. We use weatherproof paints that protect homes from Bareilly’s heat, rain, and dust. Services include painting of walls, terraces, balconies, and boundary gates for a fresh, lasting look.' },
    { question: 'What areas of my home can you paint in Bareilly?', answer: 'Our house painters in Bareilly can paint all areas of your home, including bedrooms, living rooms, kitchens, bathrooms, pooja rooms, balconies, terraces, gates, and more. We also offer surface repairs before painting to ensure the best results.' },
    { question: 'Do you help with choosing colours for my home in Bareilly?', answer: 'Yes, our house painters in Bareilly offer free colour consultation as part of our painting services in Bareilly. Our experts help you choose shades that suit your home’s lighting, family preferences, and style goals.' },
    { question: 'Can you paint wooden and metal surfaces?', answer: 'Absolutely. We offer wood polishing, varnishing for furniture, and anti-rust painting for grills, gates, and railings. These services enhance the look and durability of wooden and metal fixtures in your Bareilly homes.' },
    { question: 'Do professional painting services in Bareilly include damp treatment before painting?', answer: 'Yes. Our painting services include the treatment of damp patches with anti-fungal solutions before painting. This prevents moisture damage and ensures that the paint adheres properly and lasts longer, especially during Bareilly’s monsoon season.' },
    { question: 'What repairs do your painters handle before painting walls in Bareilly?', answer: 'Our house painters in Bareilly repair wall cracks, peeling paint, uneven surfaces, and damp patches. Our painters apply putty and primer for a smooth base, ensuring the paint lasts longer and looks flawless in your Bareilly home.' },
    { question: 'Can I schedule painting services around my availability in Bareilly?', answer: 'Yes, we offer flexible scheduling. You can choose a time and date that fits your family’s routine. Our house painters in Bareilly will arrive as per your preference and complete the job efficiently.' },
    { question: 'Do you use putty and primer before painting in Bareilly?', answer: 'Yes, we always use putty and primer as part of our wall preparation process. This ensures smooth surfaces, better paint adhesion, and long-lasting results in all Bareilly painting projects.' },
    { question: 'Do you clean up after painting is done in Bareilly?', answer: 'Yes. We ensure complete post-painting clean-up. Our painters leave your space tidy, removing debris, used materials, and masking tape, so you can enjoy your freshly painted home without hassle.' },
    { question: 'Can I trust EzyHelpers for complete home painting in Bareilly?', answer: 'Yes. EzyHelpers provides end-to-end professional painting services in Bareilly. From colour advice and surface prep to finishing and cleanup, we are your trusted partner for safe, timely, and beautiful home transformations.' },
    { question: 'Do your painters paint metal grills, gates, and railings in Bareilly?', answer: 'Yes, our home painters in Bareilly paint metal grills, gates, and balcony railings using anti-rust paint to protect them and make them look fresh.' },
  ]

  const whyChoose = [
    'Skilled & Experienced Painters',
    'Fast, Timely Service',
    'Festival-Ready Quick Services',
    'Transparent & Fair Pricing',
    'Color Consultation Support',
    'Complete Painting Solution',
    '100% Premium Paints (Weather-Resistant)',
    'Monsoon-Proof Solutions',
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Painting Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <PaintBrushIcon className="h-5 w-5 text-purple-300 mr-2" />
                <span className="text-sm font-semibold">Professional Painting</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Professional Painting Services in Bareilly</h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Expert house painter in Bareilly offering professional interior and exterior painting services with premium finishes and timely completion.</p>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"> Free On-Site Paint Consultation</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"> Work Supervised by Painting Experts</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"> Festival & Occasion-Ready Service</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"> Clean & No-Mess Work Guarantee</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"> Quick & Timely Completion</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"> Premium Paint & Materials Used</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Painting Service Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Free Color Consultation
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Day</div>
                  <div className="text-purple-200 text-sm">Painting Start Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-purple-200 text-sm">Color Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1,500+</div>
                  <div className="text-purple-200 text-sm">Happy Homes Painted</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Professional Painting Services in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Professional Painting Services in Bareilly?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Trust our skilled painters in Bareilly to make your home beautiful quickly, safely, and at a fair price.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow hover:shadow-md border border-gray-100">
                  <div className="flex items-center text-gray-900 font-semibold"><CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Professional Painting Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Professional Painting Services in Bareilly</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interior Painting Solutions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Festival & Occasion Painting: Fresh looks for festivals & occasions</li>
                  <li>Kids' Room Creative Painting: Cartoon murals & educational designs</li>
                  <li>Pooja Room Special Colors: Traditional religious color combinations</li>
                  <li>Kitchen/Bathroom Painting: Moisture-resistant, easy-to-clean coats</li>
                  <li>Textured & Designer Walls: Transform plain walls into stunning masterpieces</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exterior Painting Services</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Weatherproof House Painting: Protects against the sun, heavy rains, and dust</li>
                  <li>Boundary Wall & Gate Painting: Enhances curb appeal with durable finishes</li>
                  <li>Terrace & Balcony Coatings: Keeps homes cooler in summer</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair & Preparation Work</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Wall Plastering & Crack Repairs: Fixes peeling, gaps & uneven surfaces</li>
                  <li>Dampness Treatment: Anti-fungal solutions for humid areas</li>
                  <li>Putty & Primer Services: Smooth base for a perfect paint finish</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Finishes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Wood Polish & Varnishing: Doors, windows & furniture shine</li>
                <li>Metal Grill & Railing Painting: Anti-rust protection for railings & gates</li>
                <li>POP Design & Decorative Work: Elegant decorative work for living rooms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Essential Wall Repairs for Long-Lasting Results */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Essential Wall Repairs for Long-Lasting Results</h2>
              <p className="text-gray-700 mb-4">Strong walls mean long-lasting paint!</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Crack Repair– Fix weather-related cracks for smooth surfaces</li>
                <li>Dampness Protection– Special treatment for monsoon-proof walls</li>
                <li>Perfect Surface Prep– Putty + primer for best paint grip</li>
              </ul>
              <p className="text-gray-700 mt-4">Why does this matter? Prevents peeling & saves money on frequent repainting!</p>
            </div>
          </div>
        </section>

        {/* Quality Materials & Expert Painting Techniques */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Quality Materials & Expert Painting Techniques</h2>
              <p className="text-gray-700 mb-6">Giving Bareilly Homes a Beautiful, Long-Lasting Finish</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Premium Paint Selection</h3>
              <p className="text-gray-700 mb-4">We use quality paints from trusted brands that perform well in Bareilly's climate. Our material selection prioritises durability and value for money.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Professional Tools & Techniques</h3>
              <p className="text-gray-700 mb-4">Our house painters in Bareilly use proper tools and proven techniques for smooth, even coverage. A professional application makes a significant difference in final results.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Color Consultation</h3>
              <p className="text-gray-700">Unsure about color choices? Our experts help Bareilly families select colors that suit their home's lighting, size, and family preferences.</p>
            </div>
          </div>
        </section>

        {/* How to Book Our Professional Painting Services in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Professional Painting Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Booking with EzyHelpers is fast and simple:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Need</h3>
                <p className="text-gray-600">Tell us what painting work you need done for your home.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick a Convenient Time</h3>
                <p className="text-gray-600">Choose a date and time that perfectly suits your family.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Painter Visits</h3>
                <p className="text-gray-600">Our skilled, verified painter arrives, fully prepared for the job.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Service & Support</h3>
                <p className="text-gray-600">We ensure your happiness and offer follow-up help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Simple solutions for Bareilly families beyond painting</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/sofa-cleaning" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sofa Cleaning Services</h3>
                <p className="text-gray-600 mb-4">Deep clean sofas for fresh, hygienic, and stain-free seating.</p>
                <div className="flex items-center text-purple-600 font-semibold">Learn About Sofa Cleaning Services</div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Repair Service</h3>
                <p className="text-gray-600 mb-4">Fix home appliances quickly for smooth, worry-free daily living.</p>
                <div className="flex items-center text-indigo-600 font-semibold">Learn About Appliance Repair Services</div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AC Repair Service</h3>
                <p className="text-gray-600 mb-4">Reliable AC repairs to stay cool during Bareilly’s extreme summers.</p>
                <div className="flex items-center text-emerald-600 font-semibold">Learn About AC Repair Services</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let Dull Walls Ruin Your Home!</h2>
              <p className="text-xl mb-8 text-purple-100">Book trusted professional painting services in Bareilly today for fresh, beautiful, stress-free walls. Your trusted house painter in Bareilly is just a call away!</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Painting Service Now
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