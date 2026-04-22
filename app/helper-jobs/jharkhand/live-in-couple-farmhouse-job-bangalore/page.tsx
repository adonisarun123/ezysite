import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ReferEarnSection from '@/components/ReferEarnSection'
import {
    BriefcaseIcon,
    StarIcon,
    PhoneIcon,
    CheckCircleIcon,
    ClockIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    GiftIcon,
    BuildingOfficeIcon,
    HomeModernIcon,
    UserGroupIcon,
    HomeIcon,
    UserIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ShieldCheckIcon as OutlineShieldCheckIcon,
    HomeModernIcon as OutlineHomeModernIcon,
    HeartIcon as OutlineHeartIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बैंगलोर में लिव-इन कपल फार्महाउस जॉब्स | पति-पत्नी',
    description: 'पति-पत्नी के लिए बैंगलोर और आस-पास के इलाकों में लिव-इन कपल फार्महाउस जॉब्स। मेंटेनेंस और सिक्योरिटी का काम।अच्छी सैलरी, मुफ़्त खाना और कमरा।अभी अप्लाई करें।',
    openGraph: {
        title: 'बैंगलोर में लिव-इन कपल फार्महाउस जॉब्स | पति-पत्नी',
        description: 'पति-पत्नी के लिए बैंगलोर और आस-पास के इलाकों में लिव-इन कपल फार्महाउस जॉब्स। मेंटेनेंस और सिक्योरिटी का काम।अच्छी सैलरी, मुफ़्त खाना और कमरा।अभी अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'What are live-in Couple Farmhouse Jobs in Bangalore?',
        answer: 'Jobs where a husband and wife work together and stay in a farmhouse, handling security, cleaning, gardening, and maintenance tasks.',
    },
    {
        question: 'Are these jobs inside Bangalore city or outside?',
        answer: 'Both. Most farmhouses are in calm areas near Bangalore, outside the main city.',
    },
    {
        question: 'Do we need previous experience for farmhouse jobs?',
        answer: 'No. Fresh couples can apply. Basic guidance is provided before placement.',
    },
    {
        question: 'How many hours do we have to work daily?',
        answer: 'No fixed hours. Complete assigned tasks properly, with flexibility in schedule.',
    },
    {
        question: 'Can we apply if we are from another state?',
        answer: 'Yes. While Jharkhand helpers are prioritised, couples from Odisha, West Bengal, Chhattisgarh, Bihar, and other states can also apply.',
    },
    {
        question: 'What type of accommodation is provided?',
        answer: 'Separate room or staff quarter with a bed, storage, and washroom access.',
    },
    {
        question: 'Do we have to take care of animals or pets?',
        answer: 'Only if it is mentioned in the job, some farmhouses have cows, dogs, or chickens.',
    }
]

export default function FarmhouseCoupleJobsBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Jharkhand', href: '/helper-jobs/jharkhand' },
                        { label: 'Live-In Couple Farmhouse Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore/hin"
                                className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"
                                />
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white whitespace-normal">Live-In Couple Farmhouse Jobs in Bangalore for Helpers from Jharkhand</h1>

                            <p className="text-sm md:text-2xl font-semibold mb-6 text-teal-100 max-w-5xl mx-auto">Work and stay together in Bangalore with your spouse in peaceful farmhouse settings. Handle security, cleaning, and maintenance while enjoying free room, food, and a fixed income.</p>

                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ No registration charges</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Direct placement without agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Salary paid directly by the family</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overivew Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider mb-4 border border-teal-200">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Key Benefits Overview</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 mx-auto text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">Live-In Couple Farmhouse Jobs</h3>
                                <div className="text-2xl md:text-4xl font-extrabold text-teal-600 mb-6 text-center">
                                    ₹25,000 – ₹35,000
                                    <span className="text-base font-medium text-gray-500 block mt-1">per month (for both)</span>
                                </div>
                                <ul className="space-y-4 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-teal-500" />
                                        </div>
                                        <span className="text-gray-700 font-bold text-sm">Free stay + free food included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-teal-500" />
                                        </div>
                                        <span className="text-gray-700 font-bold text-sm">Peaceful farmhouse environment outside city limits</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Grid */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">What You Get with EzyHelpers</h3>
                                    <div className="w-16 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                                    {[
                                        { text: "Safe job placement in safe farmhouses", icon: ShieldCheckIcon },
                                        { text: "Clear training & guidance before joining", icon: BriefcaseIcon },
                                        { text: "Respectful farmhouse owners", icon: HeartIcon },
                                        { text: "Long-term work opportunities", icon: StarIcon },
                                        { text: "Direct salary payment without delay", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-teal-50/30 p-4 rounded-xl border border-teal-50 hover:bg-teal-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-teal-600" />
                                            </div>
                                            <span className="font-bold text-gray-800 text-sm leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-14 rounded-xl hover:bg-teal-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Details Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Live-In Couple Farmhouse Helpers- Work Details</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">These jobs are best for husband-wife couples from Jharkhand who want to work together in Bangalore or nearby farmhouse areas.</p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Type of Work */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Type of Work</h3>
                                <ul className="space-y-4 flex-grow">
                                    {[
                                        "Stay inside the farmhouse all the time",
                                        "Separate room or staff quarter is provided",
                                        "Cooking items and food support included"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Work Includes */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                    <ClockIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Work Includes</h3>
                                <ul className="space-y-4 flex-grow">
                                    {[
                                        "Daily cleaning and maintenance work",
                                        "Garden and basic farm work",
                                        "Rest time available",
                                        "Weekly off as discussed before joining"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Best For */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                                    <StarIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Best For</h3>
                                <ul className="space-y-4 flex-grow">
                                    {[
                                        "Couples coming from Jharkhand",
                                        "Those wanting to save rent and food expenses",
                                        "People who prefer calm locations outside the city",
                                        "Couples are okay with working in the outer Bangalore areas"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-gray-500 italic">Exact location, stay, and surroundings are explained clearly before joining.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Live-In Couple Farmhouse Work Responsibilities</h2>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-teal-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-teal-600" />
                                        Daily Duties
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'Gatekeeping and security',
                                            'Cleaning rooms and open areas',
                                            'Taking care of pets or animals, if present',
                                            'Maintaining farmhouse cleanliness',
                                            'Small repairs and maintenance',
                                            'Removing dry leaves and waste',
                                            'Watering plants and garden upkeep'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-teal-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-bold">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Additional Duties */}
                                <div className="md:col-span-2 bg-teal-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-teal-400">
                                        <SparklesIcon className="w-8 h-8" />
                                        Additional Duties
                                    </h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'Helping owners during weekend visits',
                                            'Simple kitchen help or cleaning',
                                            'Basic farm or plantation support'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-teal-50 font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-teal-300 font-bold italic text-sm">Only mutually agreed-upon tasks are included. No hidden work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where You Can Get Farmhouse Jobs Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Where You Can Get Farmhouse Jobs</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <GlobeAltIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Bangalore City & Nearby Outskirts</h4>
                                        <p className="text-gray-600 text-sm font-medium">Live-in couple farmhouse jobs available within Bangalore or nearby areas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <ShieldCheckIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Peaceful and secure work environment</h4>
                                        <p className="text-gray-600 text-sm font-medium">Free stay and food included</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-100 flex flex-col items-center">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8 font-display">Who Can Apply</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
                                {[
                                    { text: "Husband–Wife Couples Only", icon: UserGroupIcon, check: true },
                                    { text: "Age: 25–45 years", icon: ClockIcon },
                                    { text: "Education: Basic schooling", icon: AcademicCapIcon },
                                    { text: "Experience: Freshers and experienced couples welcome", icon: StarIcon },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-teal-100">
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                            {item.check ? <CheckBadgeIcon className="w-6 h-6" /> : <item.icon className="w-6 h-6" />}
                                        </div>
                                        <span className="font-bold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 w-full text-center">
                                <p className="text-teal-800 font-bold">Full job guidance is given before joining</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <div className="text-center mb-12">
                                    <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white">About EzyHelpers – Trusted Helper Jobs</h2>
                                    <p className="text-teal-100 text-lg md:text-xl font-bold">
                                        We connect helpers like you with safe Domestic Helper jobs across India without charging any fees.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                        <h3 className="text-xl font-bold mb-6 text-teal-200 border-b border-white/10 pb-3">We Focus On</h3>
                                        <ul className="space-y-4">
                                            {['Respectful jobs in Bangalore', 'Strict safety and background checks', 'Helper welfare and long-term support'].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-bold mb-4 text-teal-200">Our Belief</h3>
                                        <p className="text-2xl md:text-4xl font-extrabold text-white italic">
                                            "Good Homes for Helpers. Good Helpers for Families."
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-xl md:text-3xl font-bold mb-8 text-center text-teal-200">Why Helpers Trust EzyHelpers</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            "Provided jobs for 5,000+ helpers",
                                            "Supported 10,000+ families",
                                            "Training aligned with Skill India (DWSSC)",
                                            "Placement only in respectful homes",
                                            "Duties are explained clearly before joining",
                                            "Continuous support after placement",
                                            "Help during misunderstandings or job issues",
                                            "Assistance with job changes if needed",
                                            "Regular salary and long-term work opportunities",
                                        ].map((item, idx) => (
                                            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                                <span className="font-bold text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10">
                                    <h4 className="text-teal-200 font-bold uppercase tracking-widest mb-2">Locations We Serve</h4>
                                    <p className="font-bold">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support & Benefits List */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Training & Certificate", desc: "Basic training related to your job role, and a certificate will be given after completion.", icon: AcademicCapIcon },
                                { title: "Look Professional", desc: "EzyHelpers Coat and grooming kit is provided.", icon: StarIcon },
                                { title: "Safety & Security", desc: "Clear work agreements and regular support.", icon: ShieldCheckIcon },
                                { title: "Stay Support", desc: "Stay at our women’s hostel if placement is delayed.", icon: HomeIcon },
                                { title: "Health Insurance", desc: "Basic medical coverage for emergencies.", icon: HeartIcon },
                                { title: "Respectful Work Environment", desc: "Homes that treat you with respect.", icon: UserGroupIcon },
                                { title: "Future Opportunities", desc: "Good performance can lead to higher salary or jobs in other cities/abroad.", icon: BriefcaseIcon },
                                { title: "Timely Salary", desc: "Paid directly by employers every month.", icon: BanknotesIcon },
                                { title: "Job Profile Creation", desc: "Build a profile to get better maid jobs.", icon: UserPlusIcon },
                                { title: "Support at Every Step", desc: "Help from registration to after placement.", icon: PhoneIcon },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4 text-teal-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-600 to-teal-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
                            <div className="p-8 md:p-12 text-white flex-1">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-teal-50 text-lg mb-8 font-bold">
                                    Women helpers can stay at NEST anytime in Bangalore. The hostel offers safe, comfortable rooms, daily meals, and very affordable rates, making it easy for you to settle in and start your work.
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-2 bg-white text-teal-700 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Learn more about NEST <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 h-64 md:h-full bg-teal-500/20 flex items-center justify-center p-8">
                                <HomeModernIcon className="w-32 h-32 text-white/20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="teal" />

                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">How to Apply for Live-In Couple Farmhouse Jobs</h2>
                            <p className="text-gray-600 text-lg font-bold">We keep the process simple so you can start quickly.</p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-teal-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Contact EzyHelpers", desc: "Call or fill the online form. We explain job types, salary, farmhouse duties, and stay arrangements clearly." },
                                    { step: 2, title: "Share Your Details", desc: "Give us both husband and wife’s names, age, skills, and any experience in security, cleaning, gardening, or maintenance." },
                                    { step: 3, title: "Training & Job Placement", desc: "Attend basic guidance sessions, complete document verification, interview with the farmhouse owner, and start work with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                        <div className="w-5/12 text-right pr-12">
                                            {index % 2 === 0 ? (
                                                <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm">
                                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm font-bold">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white">
                                            {item.step}
                                        </div>
                                        <div className="w-5/12 text-left pl-12">
                                            {index % 2 !== 0 ? (
                                                <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm">
                                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm font-bold">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-padding bg-teal-900 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl md:text-5xl text-white font-black mb-6 font-display">Your Journey To A Secure Future Begins Here.</h2>
                        <p className="text-teal-100 text-lg md:text-2xl mb-12 max-w-4xl mx-auto font-bold">
                            Work side-by-side, live securely, and build your savings. A peaceful farmhouse job is waiting for you. Apply now.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/helper-registration"
                                className="inline-flex py-4 px-12 bg-white text-teal-900 font-black text-xl rounded-xl hover:bg-teal-50 transition-all shadow-xl transform hover:scale-105"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex py-4 px-12 bg-transparent border-2 border-white text-white font-black text-xl rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display uppercase tracking-tight">FAQs</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

function CheckBadgeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.127-1.593 3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3a3.745 3.745 0 013.127 1.593 3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    )
}
