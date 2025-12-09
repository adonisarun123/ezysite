import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
import {
  MapPinIcon,
  SparklesIcon,
  CheckCircleIcon,
  BeakerIcon,
  ScissorsIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  PencilSquareIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Gardener in Bangalore | Plant Care & Maintenance',
  description:
    'Hire gardeners in Bangalore for plant care and garden maintenance. Watering, trimming, and seasonal care.',
  openGraph: {
    title: 'Gardener in Bangalore | Plant Care & Maintenance',
    description:
      'Hire gardeners in Bangalore for plant care and garden maintenance. Watering, trimming, and seasonal care.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/gardener',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/gardener'
  }
}

export default function BangaloreGardenerPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Gardener', url: 'https://ezyhelpers.com/cities/bangalore/gardener' }
  ]

  const trustBadges = [
    'Expert in Terrace & Balcony Gardening',
    'Seasonal Maintenance & Plant Care',
    'Clean, Neat Gardening Practices',
    'Punctual and Professional Service'
  ]

  const highlights = [
    { title: 'Same-Day', subtitle: 'Gardener Visit' },
    { title: 'Garden', subtitle: 'Experts' },
    { title: '100%', subtitle: 'Background-Verified' },
    { title: 'Certified', subtitle: 'Plant Care Specialists' }
  ]

  const whyChoose = [
    'Terrace & Balcony Garden Experts',
    'Safe & Organic Gardening',
    'Flexible Timing Options',
    'Custom Garden Plans',
    'Gardening for All Seasons',
    'Easy Booking & Timely Visits'
  ]

  const services = [
    {
      title: 'Garden Setup for New Homes',
      description: 'Transform your empty balcony, terrace, or yard into a beautiful green space.',
      points: [
        'Site visit & garden planning',
        'Choosing and planting the right plants',
        'Organic soil preparation',
        'Drip irrigation system setup'
      ]
    },
    {
      title: 'Garden Makeover Services',
      description: 'Give your old garden a fresh, new look with creative updates.',
      points: [
        'New layout and design ideas',
        'Adding pots, lights, and decor',
        'Trendy planters and styles',
        'Colourful seasonal plants'
      ]
    },
    {
      title: 'Garden Maintenance in Bangalore',
      description: 'Keep your garden healthy and neat with regular care.',
      points: [
        'Removing weeds and improving soil',
        'Adding fertilizers when needed',
        'Trimming and shaping plants',
        'Safe, organic pest control'
      ]
    },
    {
      title: 'Lawn Maintenance Service',
      description: 'Maintain a lush, green lawn all year round.',
      points: [
        'Regular grass cutting',
        'Loosening soil for better growth',
        'Caring for seasonal grass types',
        'Monitoring for any lawn issues'
      ]
    },
    {
      title: 'Plant Care & Treatment',
      description: 'Resolve issues such as yellowing leaves, pest infestations, and slow growth.',
      points: [
        'Timely watering based on plant type',
        'Identifying diseases early',
        'Giving proper nutrients',
        'Regular plant health check-ups'
      ]
    },
    {
      title: 'Seasonal Garden Cleanup',
      description: 'Get your garden ready for each season: summer, monsoon, or winter.',
      points: [
        'Adding mulch and protective covers',
        'Clearing fallen leaves and debris',
        'Preventing pests with natural care',
        'Changing plants as per the season'
      ]
    },
    {
      title: 'Terrace & Balcony Gardening',
      description: 'Make the most of small spaces with smart garden setups.',
      points: [
        'Vertical plant walls',
        'Easy-to-maintain green options',
        'Growing herbs and vegetables',
        'Small irrigation system setups'
      ]
    },
    {
      title: 'Organic Gardening Service',
      description: 'Go green with eco-safe, chemical-free gardening.',
      points: [
        'Using home-made compost',
        'Natural fertilizers and boosters',
        'Organic ways to keep pests away',
        'Enriching soil with cow dung and bio-fertilizers'
      ]
    }
  ]

  const personas = [
    { title: 'Apartment Dwellers & IT Professionals', description: 'Low-maintenance balcony and terrace garden care for busy urban lifestyles.' },
    { title: 'Villa Owners & Large Properties', description: 'Full-service landscape upkeep for villas and independent homes.' },
    { title: 'Senior Citizens & Garden Enthusiasts', description: 'Gentle garden help for elders who love plants but need physical support.' },
    { title: 'Eco-Conscious Families', description: 'Organic gardening with chemical-free care; safe for kids, pets, and nature.' }
  ]

  const process = [
    { step: '1', title: 'Tell Us Your Needs', description: 'Call or fill out the form. Share your garden size, issues, or desired service.', icon: PencilSquareIcon },
    { step: '2', title: 'Receive a Quote', description: 'Get a custom quote based on your plant types, garden size, and tasks.', icon: AdjustmentsHorizontalIcon },
    { step: '3', title: 'Choose a Time Slot', description: 'Pick a date and time for the visit, including options for weekends.', icon: ClockIcon },
    { step: '4', title: 'Expert Garden Service', description: 'Our professional gardener arrives with tools and offers detailed care.', icon: ShieldCheckIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    {
      question: 'How often should I schedule garden maintenance?',
      answer:
        'It depends on the plant types, but we recommend weekly or monthly visits to ensure a healthy garden.'
    },
    {
      question: 'Can gardeners help set up an organic kitchen garden?',
      answer:
        'Yes, they can grow vegetables and herbs using organic, chemical-free methods that are safe and healthy for your family.'
    },
    {
      question: 'Do gardeners treat plant diseases and pests?',
      answer:
        'Yes, our experienced gardeners can detect issues early and use organic methods to manage pests and diseases safely.'
    },
    {
      question: 'Do gardeners offer low-maintenance garden options?',
      answer:
        'Yes, they can suggest drought-tolerant plants and design easy-care gardens that are perfect for busy people who want greenery without daily effort.'
    },
    {
      question: 'Can gardeners arrange seasonal flowers for special occasions?',
      answer:
        'Yes, they plant seasonal blooms and can create flower setups for festivals or events to keep your garden fresh and colourful.'
    },
    {
      question: 'Do gardeners offer help with garden planning and design?',
      answer:
        'Yes, they give expert advice on garden layout, plant selection, and styling, whether it&rsquo;s for a small balcony or a large villa garden.'
    },
    {
      question: 'How do I find a gardener in my area?',
      answer:
        'To find a gardener near you, simply visit EzyHelpers or call our helpline. We connect you with experienced local gardeners for home gardens, balconies, villas, and apartment spaces, matched to your exact location and needs.'
    },
    {
      question: 'How to pick a gardener?',
      answer:
        'Look for experience, plant knowledge, and service reliability. At EzyHelpers, all our gardeners are pre-verified and skilled in different garden styles, including organic, terrace, and villa setups.'
    },
    {
      question: 'What can a gardener do?',
      answer:
        'Gardeners handle planting, pruning, soil preparation, composting, pest control, lawn care, and full garden design.'
    },
    {
      question: 'What are the duties of a gardener?',
      answer:
        'A gardener&rsquo;s main duties include watering, weeding, pruning, fertilising, disease control, seasonal planting, and general garden upkeep. With EzyHelpers, you can expect trained gardeners who take full care of your plants, ensuring healthy growth and beautiful, green surroundings all year round.'
    }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Gardening Services',
      'Garden Maintenance',
      'Lawn Care',
      'Terrace & Balcony Gardening',
      'Organic Gardening'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/gardener" />
        <LocalBusinessSchema {...localBusinessProps} />

        <Navbar />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <MapPinIcon className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="text-sm font-semibold">Professional Gardeners Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display leading-tight text-white drop-shadow-lg">Professional Gardener in Bangalore</h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">From garden setup to seasonal care, EzyHelpers provides expert gardening services customized to your space, be it a terrace, balcony, or home garden.</p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book a Gardener Now</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call 080-31411776</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/20">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">{h.title}</div>
                      <div className="text-primary-200 text-sm">{h.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-3 gap-6">
                    {[SparklesIcon, BeakerIcon, ScissorsIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Gardening</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose a Professional Gardener in Bangalore for Your Garden Needs?</h2>
              <p className="text-lg text-gray-600">Complete garden solutions from setup to seasonal care for every type of home garden</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What services does your garden caretaker in Bangalore offer for homes?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Full-range home garden services designed for Bangalore&rsquo;s urban homes and lifestyles</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((svc, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{svc.title}</h3>
                  {svc.description && (
                    <p className="text-gray-700 mb-3">{svc.description}</p>
                  )}
                  <ul className="space-y-2">
                    {svc.points.map((p, pi) => (
                      <li key={pi} className="flex items-start text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Benefits */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Benefits from Our Gardening Services in Bangalore?</h2>
              <p className="text-lg text-gray-600">Diverse home garden service solutions for varied residential landscapes and lifestyle needs.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {personas.map((p, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{p.title}</h3>
                  <p className="text-gray-700">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book a Garden Caretaker in Bangalore?</h2>
              <p className="text-lg text-gray-600">Book your garden caretaker in Bangalore in 4 simple steps:</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, idx) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={idx} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Ready to Transform Your Dream Garden?</h2>
            <p className="text-lg text-gray-600 mb-6">Enjoy a healthy, relaxing outdoor space without the hard work. EzyHelpers&rsquo; gardener services in Bangalore deliver results you can see and feel.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Your Gardener Today
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="tel:+918031411776" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call 080-31411776
              </Link>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted gardening services across all Bangalore neighborhoods</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {bangaloreAreas.map((a, idx) => (
                  <div key={idx} className="flex items-center bg-white rounded-lg px-4 py-3 text-gray-800 border border-gray-100">
                    <MapPinIcon className="h-5 w-5 text-primary-600 mr-2" /> {a}
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">And many more areas across Bangalore</p>
                <Link href="/hire-helper" className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800">
                  Check Service in Your Area
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Home Services in Bangalore</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions to make urban living easier across Bangalore.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Home Electrical Services in Bangalore', href: '/cities/bangalore/electrician', description: 'From lighting to inverter setup, our electricians ensure safe power.' },
                { title: 'Plumbing Services in Bangalore', href: '/services/plumbers', description: 'Fix leaks, blockages, and quick, reliable fittings.' },
                { title: 'Painting Services in Bangalore', href: '/services/painters', description: 'Revamp interiors or exteriors with high-quality paintwork.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.title.includes('Electrical') ? 'Explore Electrician Services' : card.title.includes('Plumbing') ? 'Explore Plumbing Services' : 'Explore Painting Services'}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
              <FAQAccordion
                faqs={[
                  {
                    question: 'How often should I schedule garden maintenance?',
                    answer:
                      'It depends on the plant types, but we recommend weekly or monthly visits to ensure a healthy garden.'
                  },
                  {
                    question: 'Can gardeners help set up an organic kitchen garden?',
                    answer:
                      'Yes, they can grow vegetables and herbs using organic, chemical-free methods that are safe and healthy for your family.'
                  },
                  {
                    question: 'Do gardeners treat plant diseases and pests?',
                    answer:
                      'Yes, our experienced gardeners can detect issues early and use organic methods to manage pests and diseases safely.'
                  },
                  {
                    question: 'Do gardeners offer low-maintenance garden options?',
                    answer:
                      'Yes, they can suggest drought-tolerant plants and design easy-care gardens that are perfect for busy people who want greenery without daily effort.'
                  },
                  {
                    question: 'Can gardeners arrange seasonal flowers for special occasions?',
                    answer:
                      'Yes, they plant seasonal blooms and can create flower setups for festivals or events to keep your garden fresh and colourful.'
                  },
                  {
                    question: 'Do gardeners offer help with garden planning and design?',
                    answer:
                      'Yes, they give expert advice on garden layout, plant selection, and styling, whether it&rsquo;s for a small balcony or a large villa garden.'
                  },
                  {
                    question: 'How do I find a gardener in my area?',
                    answer:
                      'To find a gardener near you, simply visit EzyHelpers or call our helpline. We connect you with experienced local gardeners for home gardens, balconies, villas, and apartment spaces, matched to your exact location and needs.'
                  },
                  {
                    question: 'How to pick a gardener?',
                    answer:
                      'Look for experience, plant knowledge, and service reliability. At EzyHelpers, all our gardeners are pre-verified and skilled in different garden styles, including organic, terrace, and villa setups.'
                  },
                  {
                    question: 'What can a gardener do?',
                    answer:
                      'Gardeners handle planting, pruning, soil preparation, composting, pest control, lawn care, and full garden design.'
                  },
                  {
                    question: 'What are the duties of a gardener?',
                    answer:
                      'A gardener&rsquo;s main duties include watering, weeding, pruning, fertilising, disease control, seasonal planting, and general garden upkeep. With EzyHelpers, you can expect trained gardeners who take full care of your plants, ensuring healthy growth and beautiful, green surroundings all year round.'
                  }
                ]}
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
