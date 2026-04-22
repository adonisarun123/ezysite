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
  HomeIcon,
  UserGroupIcon,
  TruckIcon,
  ArchiveBoxIcon,
  ShieldCheckIcon,
  CubeIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  ArrowsUpDownIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  StarIcon,
  FaceSmileIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Household Shifting in Bareilly – Expert Packers',
  description: 'Looking for household shifting services in Bareilly? Our movers handle packing, safe transport, and careful unpacking for a smooth relocation.',
  openGraph: {
    title: 'Household Shifting in Bareilly – Expert Packers',
    description: 'Looking for household shifting services in Bareilly? Our movers handle packing, safe transport, and careful unpacking for a smooth relocation.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/household-shifting',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/household-shifting'
  }
}

export default function BareillyHouseShifting() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are household shifting services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Household shifting services in Bareilly include professional packing, loading, transporting, unloading, and setting up your belongings during a move. EzyHelpers ensures a smooth and safe transition from one home to another within the city or nearby areas."
      }
    },{
      "@type": "Question",
      "name": "Do you offer local house shifting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers provides local house shifting in Bareilly for flats, independent homes, and rental properties. Our team handles everything from packing to safe transportation and setup of your household items within Bareilly city limits."
      }
    },{
      "@type": "Question",
      "name": "Is furniture dismantling and reassembly included in household shifting services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our household shifting services in Bareilly include dismantling bulky furniture like beds and wardrobes before moving and reassembling them at your new home, ensuring safety and convenience."
      }
    },{
      "@type": "Question",
      "name": "Do you handle fragile items during local house shifting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we take extra care with fragile items such as glassware, mirrors, electronics, and decor by using bubble wrap, cushioning, and strong cartons to prevent damage during shifting in Bareilly."
      }
    },{
      "@type": "Question",
      "name": "How do you protect furniture during household shifting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During shifting, we carefully wrap all furniture using bubble wrap, foam padding, corrugated sheets, and thick blankets. This ensures maximum protection against scratches, dents, or damage throughout the moving process."
      }
    },{
      "@type": "Question",
      "name": "Do your household shifting services in Bareilly include packing support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our household shifting services in Bareilly include full packing support using strong, protective materials for furniture, electronics, kitchen items, clothes, and more, ensuring a safe, worry-free move."
      }
    },{
      "@type": "Question",
      "name": "What size of vehicle do you use for local house shifting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide suitable vehicles based on your home size. For local house shifting in Bareilly, we use mini trucks or medium-sized tempos for 1BHK, 2BHK, or similar household sizes."
      }
    },{
      "@type": "Question",
      "name": "Do I need to arrange labour separately for house shifting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Labour for loading, unloading, and handling your household items is included in our local house shifting services in Bareilly, so you don’t need to arrange anything separately."
      }
    },{
      "@type": "Question",
      "name": "What items can be shifted using EzyHelpers in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We shift all household items in Bareilly, including beds, sofas, mattresses, TVs, fridges, washing machines, kitchen utensils, and personal belongings, with complete safety and care."
      }
    },{
      "@type": "Question",
      "name": "Do you help set up furniture after shifting in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, once we unload your items at your new home, our Bareilly house-shifting team assists with placing and reassembling furniture as needed."
      }
    },{
      "@type": "Question",
      "name": "Is dismantling geysers, fans, or AC included in house shifting services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We help with basic uninstallation of fans and geysers as part of house shifting in Bareilly. AC uninstallation and installation should be done by a certified technician."
      }
    },{
      "@type": "Question",
      "name": "How early should I book household shifting services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To ensure availability, it's best to book household shifting services in Bareilly at least 2 to 3 days in advance, especially during weekends or end-of-month rushes."
      }
    },{
      "@type": "Question",
      "name": "Can you help shift within the same locality in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide hyper-local house shifting in Bareilly, which is perfect for moving homes within the same apartment complex, colony, or neighbourhood."
      }
    }]
  };
  const badges = [
    '✓ Verified Movers',
    '✓ Secure & Safe Transport',
    '✓ Transparent Pricing',
    '✓ Local & Long-Distance Shifting',
  ]

  const metrics = [
    { value: '2-Hour', label: 'Response Time' },
    { value: '500+', label: 'Homes Shifted' },
    { value: '100%', label: 'Damage-Free Guarantee' },
  ]

  const whyChooseFeatures = [
    {
      title: 'Trusted Local Packers & Movers',
      description: 'Experienced and reliable team.',
      icon: UserGroupIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Quick Same-Day Shifting',
      description: 'Move your home without delay.',
      icon: TruckIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Complete Packing & Moving Solution',
      description: 'From start to finish, we do it all.',
      icon: ArchiveBoxIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Damage-Free Handling',
      description: 'Our movers take care of your furniture and fragile items.',
      icon: ShieldCheckIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }, {
      title: 'Custom Packing',
      description: 'Special care for delicate or large items.',
      icon: CubeIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }, {
      title: 'Flexible Timing',
      description: 'Early morning, night, or any time that suits your schedule.',
      icon: ClockIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ]

  const Services = [
    { title: 'Full House Packing & Unpacking', description: 'Pack everything safely and unpack at your new home.', icon: HomeIcon },
    { title: 'Furniture Dismantling & Reassembling', description: 'Beds, wardrobes, tables – we dismantle and rebuild them safely.', icon: WrenchScrewdriverIcon },
    { title: 'Safe Transportation', description: 'Well-maintained vehicles ensure secure and reliable delivery of your items.', icon: TruckIcon },
    { title: 'Loading & Unloading Services', description: 'Heavy lifting is done carefully by trained staff.', icon: ArrowsUpDownIcon },
    { title: 'Fragile Item Packing', description: 'Extra care for glass, mirrors, electronics, and kitchenware.', icon: ShieldCheckIcon },
    { title: 'Vehicle Shifting (Car & Bike)', description: 'Safe transport of your vehicles along with your household.', icon: TruckIcon },
    { title: 'Office Shifting Services', description: 'Smooth relocation for offices with minimal disruption.', icon: BuildingOffice2Icon },
    { title: 'Inter-City Shifting', description: 'Reliable long-distance moving across India.', icon: MapPinIcon },
    { title: 'Specialized Item Handling', description: 'Idols, decorative items, and antiques are handled with special care.', icon: StarIcon },
  ]

  const types = [
    'Local House Shifting',
    'Intercity Relocation',
    'Apartment Shifting',
    'Independent House Moving',
    'Office Relocation',
    'Student Relocation',
    'Senior Citizen Moving',
    'Festival Season Shifting',
    'Emergency Shifting',
    'Partial Household Moving',
    'Fragile Items Transport',
    'Heavy Furniture Shifting'
  ]

  const steps = [
    { step: '1', title: 'Share Your Shifting Details', desc: "Tell us about your shifting needs, how many items, and where you're moving." },
    { step: '2', title: 'Pick a Convenient Time', desc: 'Choose a specific day and time slot that suits your family schedule.' },
    { step: '3', title: 'Verified Movers Visit', desc: 'Our verified moving professionals arrive fully equipped for safe, reliable household shifting.' },
    { step: '4', title: 'Safe Shifting Done', desc: 'Enjoy a stress-free shifting experience with unpacking and reassembly at your new place.' },
  ]

  const explore = [
    { href: '/cities/bareilly/ac-repair', title: 'AC Repair Services', desc: 'Beat the Bareilly heat with fast and reliable AC servicing and repairs.', cta: 'Learn about AC Repair Services', icon: WrenchScrewdriverIcon },
    { href: '/cities/bareilly/japa', title: 'Newborn Baby Care Services', desc: 'Gentle and expert care for your little one right at your home.', cta: 'Learn about Newborn Baby Care', icon: FaceSmileIcon },
    { href: '/cities/bareilly/sofa-cleaning', title: 'Sofa Cleaning Services', desc: 'Revive your sofa with professional deep cleaning for a fresh look.', cta: 'Learn about Sofa Cleaning Services', icon: SwatchIcon },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What are household shifting services in Bareilly?',
      answer:
        'Household shifting services include packing, loading, transporting, unloading, and setting up your belongings. EzyHelpers makes moving within Bareilly or nearby areas safe and smooth.',
    },
    {
      question: 'Do you offer local house shifting in Bareilly?',
      answer:
        'Yes, we provide local shifting for flats, independent homes, and rental properties, handling everything from packing to safe delivery.',
    },
    {
      question: 'Is furniture dismantling and reassembly included?',
      answer:
        'Yes. Our team dismantles bulky furniture like beds and wardrobes before moving and reassembles them at your new home.',
    },
    {
      question: 'Do you handle fragile items during shifting?',
      answer:
        'Yes. Glassware, mirrors, electronics, and decor are packed with bubble wrap and strong cartons for safety.',
    },
    {
      question: 'How do you protect furniture during shifting?',
      answer:
        'We wrap furniture with bubble wrap, foam padding, corrugated sheets, and blankets to prevent scratches and damage.',
    },
    {
      question: 'Do your shifting services include packing support?',
      answer:
        'Yes. We provide full packing for furniture, electronics, clothes, and kitchen items.',
    },
    {
      question: 'What size vehicle do you use for local house shifting?',
      answer:
        'We use mini trucks or medium-sized tempos based on your home size.',
    },
    {
      question: 'Do I need to arrange labour separately?',
      answer:
        'No. Labour for loading and unloading is included in our services.',
    },
    {
      question: 'What items can you shift?',
      answer:
        'We move beds, sofas, TVs, fridges, washing machines, kitchen utensils, and other household items safely.',
    },
    {
      question: 'Do you help set up furniture after shifting?',
      answer:
        'Yes. Our team helps arrange and reassemble furniture at your new home.',
    },
    {
      question: 'How early should I book shifting services?',
      answer:
        'Book 2–3 days in advance, especially on weekends or month-end, to ensure availability.',
    },
    {
      question: 'Can you help shift within the same locality?',
      answer:
        "Yes. We provide hyper-local shifting within your apartment complex, colony, or neighbourhood.",
    }
  ]

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
            { label: 'House Shifting' },
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
                Professional Household Shifting Services in Bareilly
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Fast, safe, and reliable household shifting services in Bareilly for stress-free moves.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-10 text-center">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Shifting Service Now
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
                {badges.map((badge, idx) => (
                  <span key={idx} className="text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 font-semibold">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10 text-center">
                    <div className="text-3xl font-extrabold text-white mb-1 leading-tight">{m.value}</div>
                    <div className="text-indigo-100 font-medium text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for House Shifting in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Household Shifting in Bareilly?</h2>
              <p className="text-lg text-gray-600">We combine trust, speed, and professional moving skills to make your shift easy and stress-free.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Our Household Shifting Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Household Shifting Services in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">We cover all your moving needs with care and professionalism:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-pink-100 rounded-xl p-3 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Shifting Services We Provide */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Shifting Services We Provide</h2>
              <p className="text-gray-600">We handle all kinds of household relocations, big and small.</p>
            </div>

            <div className="bg-rose-100/50 rounded-2xl p-8">
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
                  <e.icon className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-rose-600' : 'text-amber-600'} h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-gray-600 mb-4">{e.desc}</p>
                  <div className={`${i === 0 ? 'text-blue-600' : i === 1 ? 'text-rose-600' : 'text-amber-600'} font-semibold`}>{e.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center font-display">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Don’t Let Shifting Stress You Out!
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium font-body leading-relaxed">
                Get trusted, affordable household shifting in Bareilly with EzyHelpers. Our experts ensure a smooth, damage-free move so you can settle into your new home with ease.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto font-display">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Shifting Service Now
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

        {/* Why Professional Household Shifting Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-4 border-indigo-600 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Professional Household Shifting Matters
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
              <p>Shifting homes isn’t just moving things - it’s about keeping your valuables and memories safe. At EzyHelpers, we offer stress-free, damage-free home shifting tailored for Bareilly’s roads, traffic, and weather.</p>
              <p className="font-medium text-indigo-900/80 italic">Whether moving within areas like Civil Lines or across the city to Rajendra Nagar, our professional team packs, transports, and unpacks your items carefully.</p>
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
                  question: "What are household shifting services in Bareilly?",
                  answer: "Household shifting services in Bareilly include professional packing, loading, transporting, unloading, and setting up your belongings during a move. EzyHelpers ensures a smooth and safe transition from one home to another within the city or nearby areas."
                },
                {
                  question: "Do you offer local house shifting in Bareilly?",
                  answer: "Yes, EzyHelpers provides local house shifting in Bareilly for flats, independent homes, and rental properties. Our team handles everything from packing to safe transportation and setup of your household items within Bareilly city limits."
                },
                {
                  question: "Is furniture dismantling and reassembly included in household shifting services in Bareilly?",
                  answer: "Yes, our household shifting services in Bareilly include dismantling bulky furniture like beds and wardrobes before moving and reassembling them at your new home, ensuring safety and convenience."
                },
                {
                  question: "Do you handle fragile items during local house shifting in Bareilly?",
                  answer: "Yes, we take extra care with fragile items such as glassware, mirrors, electronics, and decor by using bubble wrap, cushioning, and strong cartons to prevent damage during shifting in Bareilly."
                },
                {
                  question: "How do you protect furniture during household shifting in Bareilly?",
                  answer: "During shifting, we carefully wrap all furniture using bubble wrap, foam padding, corrugated sheets, and thick blankets. This ensures maximum protection against scratches, dents, or damage throughout the moving process."
                },
                {
                  question: "Do your household shifting services in Bareilly include packing support?",
                  answer: "Yes, our household shifting services in Bareilly include full packing support using strong, protective materials for furniture, electronics, kitchen items, clothes, and more, ensuring a safe, worry-free move."
                },
                {
                  question: "What size of vehicle do you use for local house shifting in Bareilly?",
                  answer: "We provide suitable vehicles based on your home size. For local house shifting in Bareilly, we use mini trucks or medium-sized tempos for 1BHK, 2BHK, or similar household sizes."
                },
                {
                  question: "Do I need to arrange labour separately for house shifting in Bareilly?",
                  answer: "No. Labour for loading, unloading, and handling your household items is included in our local house shifting services in Bareilly, so you don’t need to arrange anything separately."
                },
                {
                  question: "What items can be shifted using EzyHelpers in Bareilly?",
                  answer: "We shift all household items in Bareilly, including beds, sofas, mattresses, TVs, fridges, washing machines, kitchen utensils, and personal belongings, with complete safety and care."
                },
                {
                  question: "Do you help set up furniture after shifting in Bareilly?",
                  answer: "Yes, once we unload your items at your new home, our Bareilly house-shifting team assists with placing and reassembling furniture as needed."
                },
                {
                  question: "Is dismantling geysers, fans, or AC included in house shifting services in Bareilly?",
                  answer: "We help with basic uninstallation of fans and geysers as part of house shifting in Bareilly. AC uninstallation and installation should be done by a certified technician."
                },
                {
                  question: "How early should I book household shifting services in Bareilly?",
                  answer: "To ensure availability, it's best to book household shifting services in Bareilly at least 2 to 3 days in advance, especially during weekends or end-of-month rushes."
                },
                {
                  question: "Can you help shift within the same locality in Bareilly?",
                  answer: "Yes, we provide hyper-local house shifting in Bareilly, which is perfect for moving homes within the same apartment complex, colony, or neighbourhood."
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
