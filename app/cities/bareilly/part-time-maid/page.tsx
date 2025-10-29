import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { 
  CheckCircleIcon,
  PhoneIcon,
  HeartIcon,
  SparklesIcon,
  HomeIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  BanknotesIcon,
  SunIcon,
  ClockIcon,
  AcademicCapIcon,
  UsersIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  StarIcon,
  MapPinIcon,
  BeakerIcon,
  BoltIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Best Part-Time Maid in Bareilly – Flexible Timings',
  description: 'Get a part-time maid in Bareilly for morning or evening help. Choose trained maids for cleaning, cooking, or daily tasks as per your convenience.',
  openGraph: {
    title: 'Best Part-Time Maid in Bareilly – Flexible Timings',
    description: 'Get a part-time maid in Bareilly for morning or evening help. Choose trained maids for cleaning, cooking, or daily tasks as per your convenience.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/part-time-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/part-time-maid'
  }
}

export default function BareillyPartTimeMaidPage() {
  const services = [
    {
      title: "Daily Cooking",
      description: "Fresh meals like roti, sabzi, and dal during morning or evening as per schedule",
      icon: HeartIcon,
      features: ["Traditional home cooking", "Fresh roti & sabzi", "Dal & rice preparation", "Family taste preferences"]
    },
    {
      title: "Cleaning & Mopping", 
      description: "Sweeping, mopping, and dusting all rooms daily to keep home neat and clean",
      icon: SparklesIcon,
      features: ["Daily room cleaning", "Floor mopping", "Dusting furniture", "Fresh & hygienic home"]
    },
    {
      title: "Washing & Ironing",
      description: "Washing, drying, folding, and ironing clothes properly for neat arrangement",
      icon: HomeIcon,
      features: ["Clothes washing", "Proper drying", "Neat folding", "Ironing service"]
    },
    {
      title: "Kitchen Management",
      description: "Cleaning kitchen, washing utensils, arranging shelves for cooking readiness",
      icon: BuildingOffice2Icon,
      features: ["Kitchen cleaning", "Utensil washing", "Shelf organization", "Cooking prep"]
    },
    {
      title: "Bathroom Cleaning",
      description: "Wash and clean toilets, washrooms, and tiles for fresh daily hygiene",
      icon: ShoppingBagIcon,
      features: ["Toilet cleaning", "Washroom sanitization", "Tile cleaning", "Fresh hygiene"]
    },
    {
      title: "Shopping Assistance",
      description: "Help with buying vegetables, groceries from nearby markets during work hours",
      icon: BanknotesIcon,
      features: ["Market visits", "Vegetable selection", "Grocery shopping", "Local market knowledge"]
    }
  ]

  const timeSlots = [
    {
      title: "Morning Slots",
      time: "6:00 AM - 10:00 AM",
      description: "Perfect for working women who need help before office hours",
      icon: SunIcon,
      features: ["Pre-office cooking", "House cleaning", "Breakfast preparation", "Fresh start to day"]
    },
    {
      title: "Evening Slots",
      time: "4:00 PM - 8:00 PM",
      description: "Ideal for families who need help after work and school hours",
      icon: ClockIcon,
      features: ["Post-work assistance", "Dinner preparation", "Evening cleaning", "Family time support"]
    }
  ]

  const idealFor = [
    {
      title: "Working Women",
      description: "Daily 2–4 hours help before or after office time for working professionals",
      icon: AcademicCapIcon
    },
    {
      title: "Nuclear Families",
      description: "Short-time maid for daily cleaning and kitchen tasks in small households",
      icon: UsersIcon
    },
    {
      title: "Seniors Living Alone",
      description: "Light cooking, cleaning, and regular household support made easy",
      icon: UserGroupIcon
    },
    {
      title: "Teachers & School Staff",
      description: "Midday or school-hour help for meals and cleaning around teaching schedules",
      icon: AcademicCapIcon
    },
    {
      title: "Summer & Monsoon Relief",
      description: "Extra seasonal support during hot months or heavy rains",
      icon: HeartIcon
    },
    {
      title: "Budget-Conscious Families",
      description: "Affordable household help without full-time commitment",
      icon: BanknotesIcon
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Expert in Cooking & Cleaning",
      description: "Specialized in both cooking fresh meals and thorough house cleaning tasks",
      icon: HeartIcon
    },
    {
      title: "Flexible 2-4 Hour Slots",
      description: "Choose morning or evening slots that fit your work and family schedule",
      icon: ClockIcon
    },
    {
      title: "Hindi & Local Language",
      description: "Fluent in Hindi and familiar with Bareilly's local customs and traditions",
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: "School Hours Friendly",
      description: "Perfect timing to match school hours and working women's schedules",
      icon: CalendarDaysIcon
    },
    {
      title: "Seasonal Support Available",
      description: "Extra help during peak summer, monsoon, and festival seasons",
      icon: StarIcon
    },
    {
      title: "Local Shopping Knowledge",
      description: "Knows best local markets and shopping routines in Bareilly",
      icon: ShoppingBagIcon
    }
  ]

  const specializedServices = [
    {
      title: "Part-Time Babysitters",
      description: "Short-time care for kids with feeding, bathing, and playtime activities",
      icon: HeartIcon,
      features: ["Child supervision", "Feeding assistance", "Bathing help", "Play activities"]
    },
    {
      title: "Part-Time Elderly Helpers",
      description: "Assistance with walking, hygiene, medicines, and simple care for elders",
      icon: UserGroupIcon,
      features: ["Mobility support", "Hygiene assistance", "Medicine reminders", "Companionship"]
    },
    {
      title: "Part-Time Cooks",
      description: "Cooking fresh roti, sabzi, dal, and snacks as per family taste",
      icon: BeakerIcon,
      features: ["Fresh cooking", "Traditional recipes", "Family preferences", "Healthy meals"]
    },
    {
      title: "Part-Time Drivers",
      description: "Available for school drops, local errands, and short-distance travel",
      icon: BuildingOffice2Icon,
      features: ["School transportation", "Local errands", "Market visits", "Safe driving"]
    }
  ]

  const process = [
    {
      step: "1",
      title: "Share Your Requirement",
      description: "Tell us your family needs, preferred timing, and specific tasks"
    },
    {
      step: "2", 
      title: "Maid Shortlisting",
      description: "We shortlist 2-3 background-verified maids matching your preferences"
    },
    {
      step: "3",
      title: "Interview & Finalize",
      description: "Interview directly via call or video and choose who fits best"
    },
    {
      step: "4",
      title: "Easy Onboarding",
      description: "Maid joins with proper documentation and timing confirmation"
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road"
  ]

  return (
    <>
    <main className="min-h-screen">
      <Navbar />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Bareilly', href: '/cities/bareilly' },
          { label: 'Part-Time Maid Service' }
        ]} 
      />
      
      {/* Hero Section (markdown-aligned) */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white pt-20 pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Part-Time Maid in Bareilly – Flexible, Daily Help That Fits Your Schedule</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
              Looking for trusted household help without a full-time stay? EzyHelpers connects you with verified part-time maids in Bareilly who work for 2–6 hours a day, perfect for cleaning, cooking, and other essential chores. Whether it’s morning, afternoon, or evening, get professional help that adapts to your lifestyle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-green-700 font-semibold text-lg py-4 px-8 rounded-xl shadow-md hover:bg-gray-100 transition-all">Book a Part-Time Maid</Link>
              <Link href="tel:+919972571005" className="inline-flex items-center justify-center text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Us for Quick Booking
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                'Background-Checked Maids',
                'Daily, Weekly & Custom Time Slots',
                'Replacement Within 24 Hours',
                'Maids Trained in Hygiene & Food Safety',
                'Flexible Contracts with No Stay-In',
                'Timings Tailored to Your Routine'
              ].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <span className="text-emerald-300">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
              {[
                { value: '2–6 Hrs', label: 'Daily Availability' },
                { value: 'Budget-Friendly', label: 'Hourly Pricing' },
                { value: 'No Stay-In', label: 'Privacy & Comfort Maintained' },
                { value: 'Local Reach', label: 'Available Across 20+ Bareilly Areas' },
                { value: 'Flexible', label: 'Custom Schedules for Each Home' }
              ].map((m, i) => (
                <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-4 py-5">
                  <div className="text-lg font-extrabold">{m.value}</div>
                  <div className="mt-1 text-blue-50/90 text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose (markdown) */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Why Choose EzyHelpers for a Part-Time Maid in Bareilly?</h2>
          <p className="text-lg text-gray-600 text-center mb-6">Thousands of Bareilly families trust us for reliable and flexible maid services. Our platform is built for comfort, trust, and consistency.</p>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            {[
              'Experienced & Verified Local Maids',
              'Maids Available for 2–6 Hour Daily Shifts',
              'Affordable Hour-Based Pricing',
              'Morning, Afternoon & Evening Slots',
              'Daily, Weekly, or Festive Options',
              'Quick Replacements in Case of Issues'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2"><CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
      </section>

        {/* Time Slots Section */}
        <section className="section-padding bg-white">
        <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Flexible Time Slots Available
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect time slot that matches your daily routine and family schedule
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 rounded-xl p-3 mr-4 group-hover:bg-green-200 transition-colors duration-300">
                      <slot.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{slot.title}</h3>
                      <div className="text-green-600 font-semibold">{slot.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{slot.description}</p>
                  <ul className="space-y-2">
                    {slot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Who Needs Section */}
        <section className="section-padding bg-gray-50">
        <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Who Needs Part-Time Maid Services in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ideal for those who need flexible, short-duration household help
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-4 w-fit mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers Part-Time Maid in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bareilly families trust us for reliable, short-time daily household support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Specialized Services */}
        <section className="section-padding bg-white">
        <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Specialized Part-Time Maid Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right helper for your home with flexible hours and specialized skills
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                4-Step Easy Booking Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple and transparent process to get your perfect part-time maid
              </p>
              </div>
              
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
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

        {/* Service Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Service Areas in Bareilly
              </h2>
              <p className="text-lg text-gray-600">
                Part-time maid services available across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                More Home Services in Bareilly
              </h2>
              </div>
              
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/full-time-maid" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <UsersIcon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Time Maid Service</h3>
                <p className="text-gray-600 mb-4">8–10 hours of dedicated household help for busy families</p>
                <div className="flex items-center text-orange-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/live-in-maid" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Live-In Maid Service</h3>
                <p className="text-gray-600 mb-4">Round-the-clock household support & complete care</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </div>
                  </Link>

              <Link href="/cities/bareilly/on-demand-helper" className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant On-Demand Helper</h3>
                <p className="text-gray-600 mb-4">Same-day emergency help for festivals & urgent needs</p>
                <div className="flex items-center text-red-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
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

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
              Book Your Part-Time Maid in Bareilly Today
            </h2>
              <p className="text-xl mb-8 text-green-100">
                Get flexible, reliable, and affordable household support that fits your schedule
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Part-Time Maid Now
              </Link>
              
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  )
} 