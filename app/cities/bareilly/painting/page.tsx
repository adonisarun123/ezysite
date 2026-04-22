import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import NestCTA from '@/components/NestCTA'
import {
  PhoneIcon,
  CheckCircleIcon,
  PaintBrushIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CloudIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Painting Services Bareilly – Book Experts',
  description: 'Trusted professional painting services in Bareilly offering reliable, timely painting with expert surface preparation and finishing.',
  openGraph: {
    title: 'Professional Painting Services Bareilly – Book Experts',
    description: 'Trusted professional painting services in Bareilly offering reliable, timely painting with expert surface preparation and finishing.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/painting',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/painting'
  }
}

export default function BareillyPainting() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Do you offer exterior painting services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our house painters in Bareilly provide full exterior painting solutions. We use weatherproof paints that protect homes from Bareilly’s heat, rain, and dust. Services include painting of walls, terraces, balconies, and boundary gates for a fresh, lasting look."
      }
    },{
      "@type": "Question",
      "name": "What areas of my home can you paint in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our house painters in Bareilly can paint all areas of your home, including bedrooms, living rooms, kitchens, bathrooms, pooja rooms, balconies, terraces, gates, and more. We also offer surface repairs before painting to ensure the best results."
      }
    },{
      "@type": "Question",
      "name": "Do you help with choosing colours for my home in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our house painters in Bareilly offer free colour consultation as part of our painting services in Bareilly. Our experts help you choose shades that suit your home’s lighting, family preferences, and style goals."
      }
    },{
      "@type": "Question",
      "name": "Can you paint wooden and metal surfaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer wood polishing, varnishing for furniture, and anti-rust painting for grills, gates, and railings. These services enhance the look and durability of wooden and metal fixtures in your Bareilly homes."
      }
    },{
      "@type": "Question",
      "name": "Do professional painting services in Bareilly include damp treatment before painting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our painting services include the treatment of damp patches with anti-fungal solutions before painting. This prevents moisture damage and ensures that the paint adheres properly and lasts longer, especially during Bareilly’s monsoon season."
      }
    },{
      "@type": "Question",
      "name": "What repairs do your painters handle before painting walls in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our house painters in Bareilly repair wall cracks, peeling paint, uneven surfaces, and damp patches. Our painters apply putty and primer for a smooth base, ensuring the paint lasts longer and looks flawless in your Bareilly home."
      }
    },{
      "@type": "Question",
      "name": "Can I schedule painting services around my availability in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer flexible scheduling. You can choose a time and date that fits your family’s routine. Our house painters in Bareilly will arrive as per your preference and complete the job efficiently."
      }
    },{
      "@type": "Question",
      "name": "Do you use putty and primer before painting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we always use putty and primer as part of our wall preparation process. This ensures smooth surfaces, better paint adhesion, and long-lasting results in all Bareilly painting projects."
      }
    },{
      "@type": "Question",
      "name": "Do you clean up after painting is done in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We ensure complete post-painting clean-up. Our painters leave your space tidy, removing debris, used materials, and masking tape, so you can enjoy your freshly painted home without hassle."
      }
    },{
      "@type": "Question",
      "name": "Can I trust EzyHelpers for complete home painting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. EzyHelpers provides end-to-end professional painting services in Bareilly. From colour advice and surface prep to finishing and cleanup, we are your trusted partner for safe, timely, and beautiful home transformations."
      }
    },{
      "@type": "Question",
      "name": "Do your painters paint metal grills, gates, and railings in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our home painters in Bareilly paint metal grills, gates, and balcony railings using anti-rust paint to protect them and make them look fresh."
      }
    }]
  };

  const whyChooseFeatures = [
    {
      title: 'Skilled & Experienced Painters',
      description: 'Our painters know the right techniques to give your walls smooth and long-lasting results.',
      icon: HomeIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Fast, Timely Service',
      description: 'We start work quickly and finish on time so your home looks fresh for family events, festivals, or shifting.',
      icon: HomeIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Festival-Ready Quick Services',
      description: 'Need fast painting before Diwali, Eid, Holi, or house functions? We finish quickly without compromising quality.',
      icon: HomeIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Transparent & Fair Pricing',
      description: 'No hidden charges. We explain the cost clearly before work begins.',
      icon: HomeIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }, {
      title: 'Color Consultation Support',
      description: 'Our experts help you choose the right colors based on lighting, home size, and your style preferences.',
      icon: HomeIcon,
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }, {
      title: 'Complete Painting Solution',
      description: 'Interior, exterior, putty, primer, damp treatment—everything in one place.',
      icon: HomeIcon,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }, {
      title: '100% Premium Paints',
      description: 'We use high-quality, weather-resistant paints that suit Bareilly’s climate.',
      icon: HomeIcon,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }, {
      title: 'Monsoon-Proof Solutions',
      description: 'We offer damp-proof and anti-fungal treatments to protect your home during humid weather.',
      icon: HomeIcon,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
  ]

  const Services = [
    {
      title: "Interior Painting Solutions",
      icon: PaintBrushIcon,
      features: [
        { name: "Festival & Occasion Painting", desc: "Quick and fresh colors before any festival or home event." },
        { name: "Kids’ Room Creative Painting", desc: "Cartoon themes, fun patterns, and bright designs for children’s rooms." },
        { name: "Pooja Room Special Colors", desc: "Traditional and peaceful color options for prayer rooms." },
        { name: "Kitchen/Bathroom Painting", desc: "Moisture-resistant paints that stay clean and durable." },
        { name: "Textured & Designer Walls", desc: "Modern looks that give your wall a premium finish." }
      ]
    },
    {
      title: "Exterior Painting Services",
      icon: HomeIcon,
      features: [
        { name: "Weatherproof House Painting", desc: "Protection from heat, rain, and dust." },
        { name: "Boundary Wall & Gate Painting", desc: "Strong and attractive finishes for your outer walls and gate." },
        { name: "Terrace & Balcony Coatings", desc: "Keeps your home cooler and well-maintained during summers." }
      ]
    },
    {
      title: "Repair & Preparation Work",
      icon: WrenchScrewdriverIcon,
      features: [
        { name: "Wall Plastering & Crack Repairs", desc: "Fixes cracked, uneven, or damaged walls." },
        { name: "Dampness Treatment", desc: "Anti-fungal solutions for damp or wet walls." },
        { name: "Putty & Primer Services", desc: "Smooth surfaces that give your paint a perfect grip." }
      ]
    },
    {
      title: "Specialized Finishes",
      icon: CheckCircleIcon,
      features: [
        { name: "Wood Polish & Varnishing", desc: "Makes doors, windows, and furniture shine like new." },
        { name: "Metal Grill & Railing Painting", desc: "Anti-rust paint for metal gates, grills, and balcony railings." },
        { name: "POP & Decorative Work", desc: "Beautiful designs for ceilings and walls." }
      ]
    }
  ]

  const quality = [
    {
      title: "Premium Paint Selection",
      description: "We use trusted paint brands that offer durability, brightness, and a long-lasting finish in Bareilly’s weather.",
      icon: HomeIcon
    },
    {
      title: "Professional Tools & Techniques",
      description: "Our painters use rollers, brushes, sanding machines, and techniques that ensure neat, uniform finishing.",
      icon: HomeIcon
    },
    {
      title: "Color Consultation",
      description: "Not sure which color suits your home? We help you choose shades that match your style, lighting, and budget.",
      icon: HomeIcon
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Painting' }
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white focus:outline-none">
                Professional Painting Services in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Expert house painters in Bareilly for beautiful home transformations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-10 text-center">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Painting Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {[
                  'Skilled Painters',
                  'Premium Paints',
                  'Timely Completion',
                  'Surface Preparation'
                ].map((badge, idx) => (
                  <span key={idx} className="text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 font-semibold">
                    ✓ {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 leading-tight text-center text-center">50+</div>
                  <div className="text-indigo-100 font-medium text-sm text-center">Color Options</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 leading-tight text-center text-center text-center">2-Day</div>
                  <div className="text-indigo-100 font-medium text-sm text-center">Start Guarantee</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 text-center text-center text-center leading-tight">1500+</div>
                  <div className="text-indigo-100 font-medium text-sm text-center">Homes Painted</div>
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
              <p className="text-lg text-gray-600">Choose our experienced painters in Bareilly to make your home beautiful with safe, quick, and affordable painting work.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Services Provided */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Professional Painting Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Services.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mr-4 transform group-hover:rotate-6 transition-transform duration-300">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-pink-50/80 transition-colors duration-300">
                          <div className="mt-1 mr-3 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-pink-500 ring-2 ring-pink-200"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.name}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Wall Repairs for Long-Lasting Results */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Essential Wall Repairs for Long-Lasting Results
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strong, well-prepared walls help your paint last longer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Crack Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  Smoothens cracks and uneven lines.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CloudIcon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dampness Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stops fungus, moisture, and wall damage.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect Surface Prep</h3>
                <p className="text-gray-600 leading-relaxed">
                  Putty and primer ensure the paint sticks well and looks even.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 border border-pink-100 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-tr-full -ml-16 -mb-16 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why is this important?</h3>
                <p className="text-lg text-gray-700">
                  Proper wall preparation prevents peeling, saves money on repainting, and makes the finish smooth and durable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Materials & Expert Painting Techniques */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Makes Our Painting Service Better
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Giving Bareilly Homes a Beautiful, Long-Lasting Finish
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quality.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-pink-100 rounded-xl p-4 w-fit mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
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
                <div className="flex items-center text-purple-600 font-semibold">Learn More</div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Repair Service</h3>
                <p className="text-gray-600 mb-4">Fix home appliances quickly for smooth, worry-free daily living.</p>
                <div className="flex items-center text-indigo-600 font-semibold">Learn More</div>
              </Link>

              <Link href="/cities/bareilly/ac-repair" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AC Repair Service</h3>
                <p className="text-gray-600 mb-4">Reliable AC repairs to stay cool during Bareilly’s extreme summers.</p>
                <div className="flex items-center text-emerald-600 font-semibold">Learn More</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center font-display">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Don’t Let Dull Walls Ruin Your Home!
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium font-body leading-relaxed">
                Book trusted professional painting services in Bareilly and enjoy fresh, bright, beautiful walls without stress.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto font-display">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Painting Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg py-4 px-10 rounded-2xl transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-custom relative z-10 max-w-4xl border-l-4 border-indigo-600 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Surface Preparation: The Secret to Long-Lasting Paint
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Bareilly homes often face issues like cracks, dampness, and peeling paint, especially after the monsoon. Our expert painters follow a professional process to ensure your walls stay flawless for years.</p>
              <p className="font-medium text-indigo-900/80 italic">We handle everything: scraping old paint, filling cracks, applying anti-fungal treatments, and finishing with putty and primer for a smooth, bright makeover.</p>
              <p>Choosing EzyHelpers means you get more than just paint—you get a durable, beautiful transformation that protects your home.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display text-center">FAQs</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "Do you offer exterior painting services in Bareilly?",
                  answer: "Yes, our house painters in Bareilly provide full exterior painting solutions. We use weatherproof paints that protect homes from Bareilly’s heat, rain, and dust. Services include painting of walls, terraces, balconies, and boundary gates for a fresh, lasting look."
                },
                {
                  question: "What areas of my home can you paint in Bareilly?",
                  answer: "Our house painters in Bareilly can paint all areas of your home, including bedrooms, living rooms, kitchens, bathrooms, pooja rooms, balconies, terraces, gates, and more. We also offer surface repairs before painting to ensure the best results."
                },
                {
                  question: "Do you help with choosing colours for my home in Bareilly?",
                  answer: "Yes, our house painters in Bareilly offer free colour consultation as part of our painting services in Bareilly. Our experts help you choose shades that suit your home’s lighting, family preferences, and style goals."
                },
                {
                  question: "Can you paint wooden and metal surfaces?",
                  answer: "Absolutely. We offer wood polishing, varnishing for furniture, and anti-rust painting for grills, gates, and railings. These services enhance the look and durability of wooden and metal fixtures in your Bareilly homes."
                },
                {
                  question: "Do professional painting services in Bareilly include damp treatment before painting?",
                  answer: "Yes. Our painting services include the treatment of damp patches with anti-fungal solutions before painting. This prevents moisture damage and ensures that the paint adheres properly and lasts longer, especially during Bareilly’s monsoon season."
                },
                {
                  question: "What repairs do your painters handle before painting walls in Bareilly?",
                  answer: "Our house painters in Bareilly repair wall cracks, peeling paint, uneven surfaces, and damp patches. Our painters apply putty and primer for a smooth base, ensuring the paint lasts longer and looks flawless in your Bareilly home."
                },
                {
                  question: "Can I schedule painting services around my availability in Bareilly?",
                  answer: "Yes, we offer flexible scheduling. You can choose a time and date that fits your family’s routine. Our house painters in Bareilly will arrive as per your preference and complete the job efficiently."
                },
                {
                  question: "Do you use putty and primer before painting in Bareilly?",
                  answer: "Yes, we always use putty and primer as part of our wall preparation process. This ensures smooth surfaces, better paint adhesion, and long-lasting results in all Bareilly painting projects."
                },
                {
                  question: "Do you clean up after painting is done in Bareilly?",
                  answer: "Yes. We ensure complete post-painting clean-up. Our painters leave your space tidy, removing debris, used materials, and masking tape, so you can enjoy your freshly painted home without hassle."
                },
                {
                  question: "Can I trust EzyHelpers for complete home painting in Bareilly?",
                  answer: "Yes. EzyHelpers provides end-to-end professional painting services in Bareilly. From colour advice and surface prep to finishing and cleanup, we are your trusted partner for safe, timely, and beautiful home transformations."
                },
                {
                  question: "Do your painters paint metal grills, gates, and railings in Bareilly?",
                  answer: "Yes, our home painters in Bareilly paint metal grills, gates, and balcony railings using anti-rust paint to protect them and make them look fresh."
                }
              ]}
            />
          </div>
        </section>
      </main>

            <NestCTA />
      <Footer />
    </>
  )
}
