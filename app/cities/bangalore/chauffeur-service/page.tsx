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
    SparklesIcon,
    CalendarDaysIcon,
    ClipboardDocumentListIcon,
    GlobeAsiaAustraliaIcon,
    HeartIcon,
    ClockIcon,
    ShieldCheckIcon,
    FireIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ClockIcon as TimeIcon,
    HomeModernIcon,
    BoltIcon,
    TruckIcon,
    MapPinIcon,
    AcademicCapIcon,
    CurrencyDollarIcon,
    StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Chauffeur Service in Bangalore | Luxury Car Drivers',
    description: 'Hire verified, professional Chauffeurs in Bangalore for luxury cars. Flexible plans, Full-time, Live-in, or On-demand drivers ensure safe, premium travel for families.',
    openGraph: {
        title: 'Chauffeur Service in Bangalore | Luxury Car Drivers',
        description: 'Hire verified, professional Chauffeurs in Bangalore for luxury cars. Flexible plans, Full-time, Live-in, or On-demand drivers ensure safe, premium travel for families.',
        url: 'https://www.ezyhelpers.com/cities/bangalore/chauffeur-service',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/cities/bangalore/chauffeur-service'
    }
}

export default function BangaloreChauffeurService() {
    const faqs: FAQItem[] = [
        { question: 'What is a Chauffeur Service in Bangalore?', answer: 'A Chauffeur Service in Bangalore means you hire a trained driver to drive your own car. The car always belongs to you. The Chauffeur handles driving, parking, traffic, and safety so you can relax during daily travel, office commutes, or family trips.' },
        { question: 'What is the difference between a regular driver and a professional Chauffeur?', answer: 'A professional Chauffeur is trained to drive premium and high-end cars like BMW, Mercedes, or Audi. They follow proper driving manners, keep the car safe, and behave professionally. Regular drivers may not have this level of training or experience.' },
        { question: 'Can Chauffeurs in Bangalore use GPS or maps?', answer: 'Yes. Chauffeurs use Google Maps and navigation apps to choose the best routes. They understand Bangalore traffic and can handle busy roads, peak hours, and long travel days easily.' },
        { question: 'How quickly can I get a Chauffeur in Bangalore?', answer: 'Usually, it takes 5 to 7 days to arrange a Chauffeur, depending on availability. Sometimes, if a suitable driver is available, placement can happen sooner, even on the same day.' },
        { question: 'Can I hire a Chauffeur for a Mercedes or BMW?', answer: 'Yes. We provide drivers experienced in handling Mercedes, BMW, Audi, and other premium cars safely and reliably.' },
        { question: 'Are your Chauffeurs background-verified?', answer: 'Yes. All Chauffeurs are verified for Aadhaar, driving licence, and local address. Police or court verification can also be arranged if needed, at an extra cost.' },
        { question: 'Can a Chauffeur drive my car if it is new or high-end?', answer: 'Yes. Our Chauffeurs are trained to handle new and high-end cars safely. They follow traffic rules and take proper care of your vehicle during daily use.' },
        { question: 'Can Chauffeurs drive different types of cars?', answer: 'Yes. Chauffeurs can drive sedans, SUVs, and premium cars. They adjust their driving style based on the car and passenger comfort.' },
        { question: 'Do Chauffeurs know Bangalore traffic and local routes?', answer: 'Yes. Chauffeurs are familiar with Bangalore roads and traffic conditions. They know key areas like Whitefield, Koramangala, MG Road, Indiranagar, and Electronic City, helping you arrive on time.' },
        { question: 'How much does a Chauffeur Service in Bangalore cost?', answer: 'The cost depends on working hours, service type (part-time, full-time, or live-in), and the type of car. EzyHelpers shares clear pricing in advance with no hidden charges.' },
        { question: 'Can Chauffeurs drive both automatic and manual cars?', answer: 'Yes. EzyHelpers Chauffeurs are trained to drive both automatic and manual cars, including sedans, SUVs, and luxury vehicles. They adapt easily to different car models, transmission types, and driving conditions, ensuring smooth and safe travel across Bangalore.' },
    ]

    const areasWeClean = [
        'Drive premium and high-end cars smoothly and safely in Bangalore traffic',
        'Comfortable driving both automatic and manual cars',
        'Take proper care of the car and handle it carefully at all times',
        'Follow traffic rules, drive patiently, and behave politely on the road',
        'Help passengers get in and out of the car safely and assist with luggage if needed',
        'Keep the car clean, neat, and ready before every trip',
        'Drive courteously, politely, and attentively',
        'Follow daily schedules, routines, and travel habits',
        'Provide reliable support for airport transfers, meetings, and weekend family outings',
        'Plan optimal routes to avoid traffic delays during office rush hours and school timings'
    ]

    const whyChooseFeatures = [
        {
            title: 'Verified & Trusted Chauffeurs',
            description: 'All EzyHelpers Chauffeur drivers are ID-verified and background-checked for complete family safety.',
            icon: ShieldCheckIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Experienced in handling luxury cars safely',
            description: 'Our Chauffeurs are trained to handle luxury cars smoothly and safely, including both automatic and manual, with proper driving etiquette.',
            icon: TruckIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Flexible Service Options',
            description: 'Choose on-demand, part-time, full-time, or Live-in Chauffeur Service without long-term commitments.',
            icon: ClockIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Transparent Pricing Structure',
            description: 'Clear pricing is shared upfront with no hidden charges for Chauffeur Service in Bangalore.',
            icon: CurrencyDollarIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Quick Matching Process',
            description: 'We match suitable luxury car drivers quickly based on your schedule and vehicle requirements.',
            icon: BriefcaseIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Family-Centric Service Approach',
            description: 'Our Chauffeur Service is designed keeping the Indian family comfort, safety, and daily routines in mind.',
            icon: MapPinIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        }
    ];


    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Bangalore', href: '/cities/bangalore' },
                        { label: 'Chauffeur Service' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-amber-600 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Chauffeur Service in Bangalore Professional Luxury Car Drivers</h1>

                            <p className="text-lg lg:text-xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Hire experienced and verified Chauffeurs in Bangalore for your luxury car. Whether it's daily commutes, events, or short-term travel, our drivers provide safe, reliable, and comfortable rides and are familiar with handling high-end cars in city traffic.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-3xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Verified & background-checked professionals</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Trained for luxury vehicle handling</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Courteous and reliable driving</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Local route expertise</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-yellow-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book A Chauffeur
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Us
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-7xl mx-auto">
                                <div className="text-center">
                                    <div className="text-xl font-bold">99% Customer Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold">Years of experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold">Fast profile matching</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose EzyHelpers for Home Chef Services in Bangalore? */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers Chauffeur Service in Bangalore?</h2>
                            <p className="text-lg text-gray-600">Experienced Chauffeurs who handle luxury cars safely and reliably, helping Bangalore families with daily commutes, airport transfers, and city travel.</p>
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



                {/* What Does a Chauffeur Service Do */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Does a Chauffeur Service in Bangalore Do?</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Professional driving support designed for premium vehicles and stress-free travel</p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                                {areasWeClean.map((item, idx) => (
                                    <div key={idx} className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                                                    <CheckCircleIcon className="h-4 w-4 text-white" />
                                                </div>
                                            </div>
                                            <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Services Provided */}
                <section className="section-padding bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Chauffeur Service in Bangalore</h2>
                            <p className="text-lg text-gray-600">Choose a driver option that fits your travel needs and daily routine.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                            {/* Card 1 - Live-in Chauffeur Service */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">Live-in Chauffeur Service</h3>
                                    <h4 className="text-lg font-semibold text-yellow-600 mb-4">24/7 driving support at home</h4>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        A live-in chauffeur stays with your family and is available for daily, late-night, and emergency travel.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                                    <p className="font-semibold text-gray-900 mb-3">Best for:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Early morning or late-night travel</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Multiple daily trips</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Long-term, full-day car usage</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2 - Placeholder */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">Full-Time Chauffeur Service</h3>
                                    <h4 className="text-lg font-semibold text-yellow-600 mb-4">Daily driving during fixed hours</h4>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        A full-time chauffeur works set hours each day for office travel and regular city commuting.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                                    <p className="font-semibold text-gray-900 mb-3">Best for:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Office and business travel</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Fixed schedules</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Professionals and business owners</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 3 - Placeholder */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">Part-Time Chauffeur Service</h3>
                                    <h4 className="text-lg font-semibold text-yellow-600 mb-4">Driving support for a few hours</h4>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        A part-time chauffeur helps with specific trips during the day or evening.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                                    <p className="font-semibold text-gray-900 mb-3">Best for:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">School runs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Shopping or evening outings</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Short, planned travel needs</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 4 - Placeholder */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">On-Demand Chauffeur Service</h3>
                                    <h4 className="text-lg font-semibold text-yellow-600 mb-4">Driver, when you need one</h4>
                                    <p className="text-gray-700 leading-relaxed mb-12">
                                        Hire a chauffeur for short-term or one-day travel needs.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                                    <p className="font-semibold text-gray-900 mb-3">Best for:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Events and functions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Airport pickups and drops</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Guest or visitor travel</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-yellow-700 hover:to-orange-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Get Verified Driver
                            </Link>
                        </div>
                    </div>
                </section>


                {/* Essential Meal Planning for Best Results */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                                Who Should Hire a Chauffeur Service in Bangalore?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Ideal for families, professionals, and individuals valuing safety and comfort
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SparklesIcon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Working Professionals</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Reliable drivers for regular office commutes, business meetings, and airport pickups or drops, helping you save time and avoid daily driving stress.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FireIcon className="h-8 w-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Car Owners</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Chauffeurs are experienced in handling premium cars like Mercedes, BMW, and Audi, ensuring smooth, careful, and safe driving in city traffic.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <UserGroupIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">NRIs and Expatriates</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Premium Car Drivers familiar with Bangalore roads, residential areas, offices, and airports, offering comfortable and dependable support for everyday city travel.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Book Our Home Chef Services in Bangalore */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire a Chauffeur Driver in Bangalore</h2>
                            <p className="text-lg text-gray-600">Simple, fast, and hassle-free Chauffeur onboarding</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
                                <p className="text-gray-600">Share vehicle type, hours, language needs, and special requirements via call or website.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Matched Profiles</h3>
                                <p className="text-gray-600">Receive 2-3 verified luxury Chauffeur profiles with experience and checks.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm & Onboard</h3>
                                <p className="text-gray-600">Interview candidates and finalise. EzyHelpers manages verification, documentation, and a smooth onboarding process.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Enjoy Stress-Free Support</h3>
                                <p className="text-gray-600">Your Chauffeur begins service with ongoing support and assistance from EzyHelpers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Families Hire in Bangalore*/}
                <section className="section-padding bg-white">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Why Families in Bangalore Choose Chauffeur Service</h2>
                        <p className="text-lg text-gray-600 mb-6">A smarter alternative to daily driving stress and unreliable drivers</p>
                        <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
                            <p>Owning a premium car in Bangalore brings pride, but driving daily in traffic can be exhausting, especially during daily office commutes, school rush hours, or late-night airport drops. Many families initially rely on informal drivers or app-based options, but over time, issues arise, such as poor driving habits, lack of punctuality, and safety concerns.</p>
                            <p>A professional Chauffeur Service in Bangalore solves these problems. EzyHelpers provides trained car drivers who understand premium vehicle handling, follow road discipline, and respect family privacy. Families no longer worry about sudden unavailability during school and tuition travel or rushed mornings.</p>
                            <p>For high-end vehicles like Mercedes, BMW, or Audi, trained Chauffeurs ensure smooth rides, proper parking, and courteous behaviour. Parents feel confident sending seniors or children for weekend family outings or medical visits. Business owners appreciate professional conduct during meetings and client travel.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-yellow-500 via-orange-500 to-amber-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Upgrade Your Daily Travel with a Professional Chauffeur in Bangalore</h2>
                            <p className="text-xl mb-8 text-purple-100">EzyHelpers helps you hire experienced luxury car drivers in Bangalore who deliver smooth driving, disciplined etiquette, and complete peace of mind.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center bg-white text-yellow-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book Luxury Car Driver
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

                {/* Explore Other Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
                            <p className="text-lg text-gray-600">Trusted premium services for your family by EzyHelpers.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/cities/bangalore/travel-nanny" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                                <SparklesIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Nanny</h3>
                                <p className="text-gray-600 mb-4">Reliable on-demand childcare support for family trips, holidays, and short-term travel needs.</p>
                                <div className="flex items-center text-purple-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/educated-babysitter" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                                <AcademicCapIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Educated Babysitters</h3>
                                <p className="text-gray-600 mb-4">Qualified childcare professionals support homework, learning, discipline, and overall personality development.</p>
                                <div className="flex items-center text-indigo-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/home-chef" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                                <FireIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Home Chefs</h3>
                                <p className="text-gray-600 mb-4">Experienced chefs preparing hygienic, customised, home-style meals for everyday family needs.</p>
                                <div className="flex items-center text-emerald-600 font-semibold">Learn More</div>
                            </Link>
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
