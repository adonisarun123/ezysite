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
    GlobeAsiaAustraliaIcon,
    HeartIcon,
    ClockIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ClockIcon as TimeIcon,
    StarIcon,
    ShieldExclamationIcon,
    MapIcon,
    AcademicCapIcon,
    MusicalNoteIcon,
    SunIcon,
    PaperAirplaneIcon,
    BoltIcon,
    KeyIcon,
    FaceSmileIcon,
    CpuChipIcon,
    LifebuoyIcon,
    FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Premium Chauffeur Service | Luxury Car Drivers',
    description: 'Book EzyHelpers’ Premium Chauffeur Service for high-end luxury cars. Verified drivers provide safe rides in Mercedes, BMW, Audi, and more.',
    openGraph: {
        title: 'Premium Chauffeur Service | Luxury Car Drivers',
        description: 'Book EzyHelpers’ Premium Chauffeur Service for high-end luxury cars. Verified drivers provide safe rides in Mercedes, BMW, Audi, and more.',
        url: 'https://www.ezyhelpers.com/services/premium-chauffeur-service',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/premium-chauffeur-service'
    }
}

export default function ChauffeurServicePage() {
    const faqs: FAQItem[] = [
        { question: 'Are EzyHelpers chauffeurs verified and licensed?', answer: 'Yes. All chauffeurs are fully verified through ID checks, address verification, driving licence validation, and background screening. This ensures safe, reliable, and trusted chauffeur services for every customer.' },
        { question: 'Do chauffeurs know how to handle automatic and manual luxury cars?', answer: 'Yes. Our chauffeurs are trained to drive both automatic and manual luxury vehicles. They understand smooth acceleration, careful braking, and vehicle-specific handling required for premium cars.' },
        { question: 'Is my privacy respected while using chauffeur services?', answer: 'Absolutely. Our chauffeurs follow strict privacy and confidentiality guidelines. This makes the service suitable for business leaders, families, and clients who value discretion and professional behaviour.' },
        { question: 'What happens if I need a replacement chauffeur?', answer: 'If a chauffeur replacement is required for any reason, EzyHelpers will arrange a suitable chauffeur. We recommend providing at least 15 days’ prior notice so we can ensure a smooth transition and match a replacement that meets your exact requirements.' },
        { question: 'Can I hire a chauffeur without a long-term contract?', answer: 'Yes. You can hire chauffeurs on a short-term or on-demand basis without long-term commitments. This is ideal for events, special occasions, or temporary travel needs.' },
        { question: 'How soon can I start the Premium Chauffeur Service?', answer: 'Service can often begin quickly, depending on availability. Once you share your requirements and confirm the chauffeur, we coordinate a smooth and fast onboarding process.' },
        { question: 'Is the chauffeur dedicated only to my family or vehicle?', answer: 'Yes. When you choose a full-time or live-in chauffeur, the driver is dedicated exclusively to you and your vehicle during the service period.' },
        { question: 'Are chauffeurs trained to handle traffic and city driving conditions?', answer: 'Yes. Our chauffeurs are trained to manage city traffic, highways, peak-hour driving, and complex road conditions safely and calmly.' },
        { question: 'Is the chauffeur trained to handle breakdowns or emergencies?', answer: 'Yes. Chauffeurs have basic training to manage vehicle issues and stay calm during breakdowns while ensuring passenger safety.' },
        { question: 'Can I upgrade or change my service plan later?', answer: 'Yes. You can switch between full-time, part-time, or on-demand chauffeur services based on your changing needs. Pricing will also change in that case.' },
        { question: 'Is there customer support during the service period?', answer: 'Yes. EzyHelpers provides ongoing customer support throughout your chauffeur service for coordination and assistance.' },
    ]

    const whyChooseFeatures = [
        {
            title: '100% Background Verified',
            description: 'We follow strict verification standards for IDs, addresses, and license validity to ensure your family’s safety.',
            icon: ShieldCheckIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Expert Luxury Car Handling',
            description: 'Trained chauffeurs with experience in driving premium luxury sedans, SUVs, and high-end automatic vehicles.',
            icon: AcademicCapIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: 'Professional Etiquette',
            description: 'Our chauffeurs are punctual, respectful, and follow strict professional conduct suitable for elite households.',
            icon: FaceSmileIcon,
            bgColor: 'bg-slate-50',
            iconColor: 'text-slate-600'
        },
        {
            title: 'Route & Navigation Expertise',
            description: 'Excellent knowledge of local city routes and highway navigation to save time and ensure smooth travel.',
            icon: MapIcon,
            bgColor: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        }, {
            title: 'Safety First Approach',
            description: 'Focused on defensive driving, following traffic rules, and ensuring a secure environment for passengers.',
            icon: ShieldExclamationIcon,
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-600'
        }
    ]

    const premiumServices = [
        {
            title: 'Daily Commutes',
            description: 'Comfortable and secure daily travel in luxury vehicles',
            icon: TimeIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Outstation & Long-Distance Travel',
            description: 'Skilled chauffeurs for overnight or multi-city trips',
            icon: MapIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: 'Personal & Family Driver',
            description: 'School runs, shopping trips, and family outings',
            icon: UserGroupIcon,
            bgColor: 'bg-slate-50',
            iconColor: 'text-slate-600'
        },
        {
            title: 'Corporate Travel',
            description: 'Professional drivers for meetings, events, and conferences',
            icon: BriefcaseIcon,
            bgColor: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        }, {
            title: 'Event & Party Drives',
            description: "Safe late-night travel for parties and special occasions",
            icon: MusicalNoteIcon,
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-600'
        },
        {
            title: 'Leisure Travel',
            description: "Relaxed drives for vacations, golf clubs, and weekend plans",
            icon: SunIcon,
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-600'
        },
        {
            title: 'Airport Transfers',
            description: "On-time airport pick-up and drop in luxury cars",
            icon: PaperAirplaneIcon,
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-600'
        },
        {
            title: 'On-Demand Chauffeurs',
            description: "Short-term or instant bookings for special needs.",
            icon: BoltIcon,
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-600'
        }
    ]

    const shortServices = [
        { title: 'Corporate Executives', desc: 'Discreet, punctual, and professional travel', icon: BriefcaseIcon },
        { title: 'High-Net-Worth Families', desc: 'Trusted drivers for daily and family needs', icon: HomeIcon },
        { title: 'Luxury Car Owners', desc: 'Expert handling of high-value vehicles', icon: KeyIcon },
        { title: 'International Guests', desc: 'Comfortable local travel with professional drivers', icon: GlobeAsiaAustraliaIcon },
        { title: 'Elite Families', desc: 'Safe and reliable school and family transportation', icon: UserGroupIcon },
        { title: 'Busy Professionals', desc: 'Stress-free travel with verified chauffeurs', icon: TimeIcon },
    ];


    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Premium Chauffeur' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-8xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Premium Chauffeur Service for Luxury Cars</h1>

                            <p className="text-md lg:text-xl text-white/95 mb-8 leading-relaxed max-w-5xl mx-auto">Experience stress-free, elegant travel with EzyHelpers’ Premium Chauffeur Service. Hire trained luxury car drivers for both automatic and manual vehicles. Our chauffeurs ensure safety, comfort, professionalism, and top-class service every time you travel.</p>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Trained for Luxury Vehicles</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Courteous & Professional</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Licensed & Experienced</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ 100% Verified Chauffeurs</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Professional Appearance & Etiquette</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-blue-950 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book Your Chauffeur Now
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Now
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-bold flex items-center justify-center">
                                        4.9 <StarIcon className="h-6 w-6 text-white fill-yellow-500" />
                                    </div>
                                    <div className="text-blue-200 text-sm">Rated Service</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-blue-200 text-sm">Luxury Vehicles Served</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">Serving</div>
                                    <div className="text-blue-200 text-sm">Customers Pan-India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose EzyHelpers for Chauffeur Services? */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Your Professional Chauffeur?</h2>
                            <p className="text-lg text-gray-600">Reliable, verified, and well-behaved chauffeurs who prioritize your safety and comfort.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {whyChooseFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
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
                <section className="section-padding bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Services Do EzyHelpers Premium Chauffeurs Offer?</h2>
                            <p className="text-lg text-gray-600">Our luxury chauffeurs support all types of personal, family, and professional travel.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
                            {premiumServices.map((feature, index) => (
                                <div key={index} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                                    <div className={`${feature.bgColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-blue-800 hover:to-indigo-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Book Premium Chauffeur
                            </Link>
                        </div>
                    </div>
                </section>

                {/* When to Hire a Chauffeur */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                                When Do You Need a Professional Chauffeur?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Reliable mobility for every occasion and travel need.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mb-12 mx-auto">
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                        <ClockIcon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Daily City Commutes</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Avoid the stress of traffic and parking - focus on work or relax while our chauffeur handles the road.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                                        <MapIcon className="h-8 w-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Outstation Trips</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Enjoy highway journeys with an experienced driver who knows routes and maintains safe speeds.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                                        <BriefcaseIcon className="h-8 w-8 text-slate-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Corporate Executive travel</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Maintain professional image and time discipline with a chauffeur who understands etiquette and privacy.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center shrink-0">
                                        <StarIcon className="h-8 w-8 text-cyan-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Luxury Car Ownership</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Ensure your premium vehicle is handled by a trained driver who understands automatic systems and maintenance.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
                                        <HeartIcon className="h-8 w-8 text-sky-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Safe Family Travel</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Safe school drops, elderly mobility, and weekend family outings with a reliable driver you can trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Short List of Benefits */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Benefits from Hiring a Luxury Car Driver?</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our Premium Chauffeur Service is designed for people seeking exclusive, reliable travel.</p>
                        </div>

                        <div className="max-w-7xl mx-auto">
                            <h3 className="text-2xl font-bold text-blue-900 mb-10 text-center">Our Premium Chauffeur Service is ideal for:</h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {shortServices.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 flex items-start gap-5"
                                    >
                                        <div className="bg-blue-100 rounded-xl p-3 shrink-0">
                                            <service.icon className="h-7 w-7 text-blue-800" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-blue-900 text-white font-semibold text-lg py-3 px-8 rounded-xl hover:bg-blue-950 hover:shadow-lg transition-all duration-300"
                            >
                                Book Luxury Car Driver
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Types of Premium Chauffeur Services */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types Of Premium Chauffeur Services By EzyHelpers</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Flexible arrangements matching your unique requirements.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Live-In Chauffeur",
                                    desc: "A professional driver available round-the-clock for urgent or regular travel needs.",
                                    icon: HomeIcon,
                                    bgColor: "bg-blue-50",
                                    iconColor: "text-blue-700"
                                },
                                {
                                    title: "Full-Time Chauffeur",
                                    desc: "A dedicated driver manages daily travel and vehicle care as per your routine.",
                                    icon: BriefcaseIcon,
                                    bgColor: "bg-indigo-50",
                                    iconColor: "text-indigo-700"
                                },
                                {
                                    title: "Part-Time Chauffeur",
                                    desc: "Fixed-hour service for meetings, school drops, or errands at a lower cost.",
                                    icon: ClockIcon,
                                    bgColor: "bg-slate-50",
                                    iconColor: "text-slate-700"
                                },
                                {
                                    title: "On-Demand Chauffeur",
                                    desc: "Hire professional drivers for events, trips, or short-term needs without contracts.",
                                    icon: BoltIcon,
                                    bgColor: "bg-cyan-50",
                                    iconColor: "text-cyan-700"
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-2">
                                    <div className={`${service.bgColor} ${service.iconColor} rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <div className="w-12 h-1 bg-blue-100 mb-4 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers’ Luxury Car Driver Service Different?</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Understanding the key differences between luxury and regular drivers</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { title: "Expert Driving Skills", desc: "Luxury car drivers are trained to handle high-end vehicles smoothly and safely, unlike regular drivers with basic driving skills.", icon: AcademicCapIcon, color: "text-blue-700", bg: "bg-blue-50" },
                                { title: "Professional Behaviour", desc: "Luxury chauffeurs follow strict grooming, etiquette, and communication standards, offering a polished and respectful experience every time.", icon: FaceSmileIcon, color: "text-indigo-700", bg: "bg-indigo-50" },
                                { title: "Care for Luxury Cars", desc: "They drive carefully to protect costly cars like Mercedes or BMW, while regular drivers may lack such vehicle-specific care.", icon: HeartIcon, color: "text-slate-700", bg: "bg-slate-50" },
                                { title: "Knowledge of Advanced Technology", desc: "Luxury drivers understand modern car systems, navigation, and premium features, ensuring a smooth and comfortable journey.", icon: CpuChipIcon, color: "text-cyan-700", bg: "bg-cyan-50" },
                                { title: "Prepared for Emergencies", desc: "With basic emergency and first-aid knowledge, luxury drivers stay calm and responsive, keeping passengers safe in situations regular drivers may not handle.", icon: LifebuoyIcon, color: "text-sky-700", bg: "bg-sky-50" }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                    <div className={`${feature.bg} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Premium Chauffeur Service Matters ... */}
                <section className="section-padding bg-white">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Does Hiring a Premium Chauffeur Matter?</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
                            <p>Hiring a premium chauffeur is not just about having someone to drive your car. It is about trust, safety, and protecting the value and image that come with owning a luxury vehicle. At EzyHelpers, we understand the special expectations of high-end clients and the responsibility that comes with handling premium cars.</p>
                            <p>Our chauffeurs are trained to maintain complete discretion and respect privacy, making them suitable for business leaders, celebrities, and families who value confidentiality. They follow luxury service standards and carry themselves with professionalism that matches the class and sophistication of high-end vehicles.</p>
                            <p>With experienced care and attention, you can be confident that your valuable car is handled safely at all times. Every trip is managed with accuracy and planning, ensuring smooth routes, smart traffic handling, on-time arrivals, and a relaxed, worry-free travel experience.</p>
                        </div>
                    </div>
                </section>

                {/* How to Book Our Chauffeur Services */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How Can I Hire a Premium Chauffeur?</h2>
                            <p className="text-lg text-gray-600">Booking a Luxury Chauffeur has never been this simple.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
                                <p className="text-gray-600">Call or fill out the form with your car details and service needs.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a Chauffeur</h3>
                                <p className="text-gray-600">Review verified chauffeur profiles and select the best match.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Trial & Introduction</h3>
                                <p className="text-gray-600">Meet the driver and assess comfort and driving style.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Start the Service</h3>
                                <p className="text-gray-600">Begin service with full support and smooth coordination.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-blue-950 to-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl md:text-3xl text-white font-bold mb-6 font-display">Upgrade your travel experience with EzyHelpers’ premium chauffeur service. Book a professional chauffeur for your luxury car today and enjoy superior comfort, complete safety, and a truly stress-free, classy ride every time.</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center bg-white text-blue-950 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book Professional Chauffeur
                                </Link>

                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Us Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore Other Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services from EzyHelpers</h2>
                            <p className="text-lg text-gray-600">We extend premium lifestyle support beyond Chauffeurs, ensuring luxury living at every step.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/services/professional-chef-for-home" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                                <FireIcon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Chef Services</h3>
                                <p className="text-gray-600 mb-4">Skilled Chefs creating restaurant-quality meals in your own kitchen, tailored to your taste and daily schedule.</p>
                                <div className="flex items-center text-orange-600 font-semibold">Explore More</div>
                            </Link>

                            <Link href="/services/english-speaking-babysitters" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                                <HeartIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">English - Speaking Babysitter</h3>
                                <p className="text-gray-600 mb-4">Verified Childcare experts fluent in English, ensuring safe care, clear communication, and stress-free routines for children.</p>
                                <div className="flex items-center text-purple-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/services/japa-nanny-services" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                                <UserGroupIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Japa Services</h3>
                                <p className="text-gray-600 mb-4">Experienced Japa maids providing new mothers with recovery support, newborn care, and traditional Postnatal assistance.</p>
                                <div className="flex items-center text-indigo-600 font-semibold">Explore More</div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
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
