import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
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
    ClockIcon as ClockSolidIcon,
    UserIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ShieldCheckIcon as OutlineShieldCheckIcon,
    HomeModernIcon as OutlineHomeModernIcon,
    HeartIcon as OutlineHeartIcon,
    ChartBarIcon,
    BanknotesIcon as OutlineBanknotesIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'


import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Elder Caretaker Jobs in Bangalore for Jharkhand Helpers',
    description: 'Caretaker jobs in Bangalore with clear duties, safe homes, training, and regular monthly salary. Live-in and full-time elderly care work.',
    openGraph: {
        title: 'Elder Caretaker Jobs in Bangalore for Jharkhand Helpers',
        description: 'Caretaker jobs in Bangalore with clear duties, safe homes, training, and regular monthly salary. Live-in and full-time elderly care work.',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need experience for Elderly Care helper jobs?',
        answer: 'No. Freshers can apply. Training is provided before placement.',
    },
    {
        question: 'Will I get training before starting work?',
        answer: 'Yes. Training includes cleaning methods, hygiene, behaviour, and safety practices.',
    },
    {
        question: 'Are food and room provided in 24-Hour Live-In Elderly Caretaker Jobs in Bangalore?',
        answer: 'Yes. Live-in helpers receive meals and a room or sleeping space.',
    },
    {
        question: 'Do I need to pay money to get a job?',
        answer: 'No. EzyHelpers does not charge any fees.',
    },
    {
        question: 'Can a husband and wife apply together?',
        answer: 'Yes. Couples from Jharkhand are welcome.',
    },
    {
        question: "Will someone guide me after reaching Bangalore?",
        answer: 'Yes. Our team provides full support and guidance.',
    },
    {
        question: "What documents are required?",
        answer: 'Aadhaar card and local ID proof are required. We assist during verification.',
    },
    {
        question: "Is there any agent involved?",
        answer: 'No. We connect helpers directly with families without middlemen.',
    }
]

export default function ElderlyCaretakerJobsBangalorePage() {
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
                        { label: 'Elderly Caretaker Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/elderly-caretaker-job-bangalore/hin"
                                className="w-10 h-5 bg-blue-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"
                                />
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Elderly Caretaker Jobs in Bangalore for Jharkhand Helpers</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-blue-100 max-w-5xl mx-auto">Looking for a safe Elderly Caretaker Job outside Jharkhand?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-xs sm:text-sm md:text-xl text-blue-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    Many helpers struggle with unclear duties, low pay, and unstable work. At EzyHelpers, we help you find respectful Elderly Caretaker jobs in Bangalore with clear roles, stable income, and continuous support.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ No registration charges</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Direct placement without agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Salary paid directly by the family</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overivew Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider mb-4 border border-blue-200">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Key Benefits Overview</h2>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Live-In Elderly Care Jobs</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹20,000 – ₹25,000<span className="text-sm font-medium text-gray-500 block mt-1">per month</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Free stay + free food included</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Full-Time Elderly Care Jobs</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹16,000 – ₹20,000<span className="text-sm font-medium text-gray-500 block mt-1">per month</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">8–10 working hours</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Part-Time Elderly Care Jobs</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">₹8,000 – ₹12,000<span className="text-sm font-medium text-gray-500 block mt-1">per month</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">4–6 working hours</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* What You Get Grid */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">What You Get with EzyHelpers</h3>
                                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "Safe workplaces with respectful families", icon: ShieldCheckIcon },
                                    { text: "Proper training in elderly care before you start work", icon: BriefcaseIcon },
                                    { text: "Long-term job opportunities for stable income", icon: StarIcon },
                                    { text: "Direct salary payment without delays", icon: BanknotesIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 ${index === 3 ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''}`}>
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <Link
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Call Now To Apply
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where You Can Get Elderly Caretaker Jobs Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Elderly Caretaker Job Categories</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <p className="text-lg md:text-xl text-gray-700 font-medium">As a senior care assistant in Bangalore, you will help elderly members with daily routines, personal care, and overall well-being. Families look for helpers like you who can support seniors with:</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {/* Hygiene and Grooming */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <HeartIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Hygiene and Grooming</h3>
                                </div>
                            </div>

                            {/* Mobility Assistance */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <UserGroupIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Mobility Assistance</h3>
                                </div>
                            </div>

                            {/* Medication Reminders */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <ClipboardDocumentListIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Medication Reminders</h3>
                                </div>
                            </div>

                            {/* Daily Routines and Supervision */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <ClockIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Daily Routines and Supervision</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Elderly Caretaker Jobs Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Types of Elderly Care Jobs in Bangalore</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">24-Hour Live-In Elderly Care Jobs</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">Best option for helpers coming from Jharkhand who need accommodation.</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Type of Work</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You stay full-time at the family’s house</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">A separate room or sleeping space is provided for you</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Free meals are included</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You assist with hygiene, mobility, and daily care</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Work Hours</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Day and night support as required</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Proper rest time during the day</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">2 days off per month</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers coming from Jharkhand to Bangalore</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers without accommodation in the city</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Those comfortable with live-in elderly care duties</span>
                                            </li>
                                        </ul>
                                        <p className="text-[13px] md:text-sm text-blue-800 bg-blue-50 p-3 rounded-xl border border-blue-100 font-medium leading-snug">
                                            24-hour live-in Elderly Care jobs are among the most secure opportunities in Bangalore.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Full-Time Elderly Care Jobs</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">Ideal for helpers who prefer fixed work hours.</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Type of Work</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You work fixed daily hours</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You can return home or to your room after work</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">No overnight stay required</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You assist with personal care and daily routines</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Work Hours</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">8–10 hours per day</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">1 weekly off</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers staying with relatives or shared accommodation</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Those who prefer fixed schedules and a better work-life balance</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Part-Time Elderly Care Jobs</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">Suitable for shorter working hours and specific support.</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Type of Work</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You assist seniors for specific hours each day</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Support with personal care, medication, and mobility</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Light elderly-related household tasks if needed</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Work Hours</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">4–6 hours per day</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Flexible schedule</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers looking for shorter working hours</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Those staying nearby or with relatives</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers comfortable with daytime elderly care</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12 mb-4">
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Apply Now for Elderly Care Jobs
                            </Link>
                        </div>

                        {/* Additional Information Section (Responsibilities & Who Can Apply) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">Elderly Care Work Responsibilities</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">Your daily duties may include:</p>
                                <ul className="space-y-4 mb-6 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Assist seniors with walking, sitting, and standing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Help with bathing, dressing, and hygiene</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Support meals and hydration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Give medicines on time as instructed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Provide companionship and emotional support</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Ensure safety inside the home</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Monitor routines and inform the family when needed</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <p className="text-blue-800 font-medium text-sm text-center">
                                        All duties are discussed clearly before joining.
                                    </p>
                                </div>
                            </div>

                            {/* Who Can Apply */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <UserIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">Who Can Apply</h3>
                                </div>
                                <ul className="space-y-5 mb-6 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Male & Female Caretakers</h4>
                                            <p className="text-gray-600 text-sm">Both men and women can apply</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Age: 18–40 years</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Education</h4>
                                            <p className="text-gray-600 text-sm">Basic reading and understanding</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Experience</h4>
                                            <p className="text-gray-600 text-sm">Freshers and experienced helpers are welcome</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <p className="text-blue-800 font-medium text-sm">
                                            Training is provided before placement, so you can start confidently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Trusted Helper Jobs</h2>
                                    <p className="text-blue-100 text-lg md:text-xl">
                                        We connect helpers like you with safe Domestic Helper jobs across India without charging any fees.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {/* We Focus On */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-100 border-b border-blue-700/50 pb-3">
                                            <HandThumbUpIcon className="w-6 h-6" /> We Focus On
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-blue-50 text-sm md:text-base">Respectful jobs in Bangalore</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-blue-50 text-sm md:text-base">Strict safety and background checks</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-blue-50 text-sm md:text-base">Helper welfare and long-term support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Why Helpers Trust EzyHelpers */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-100 border-b border-blue-700/50 pb-3">
                                            <ShieldCheckIcon className="w-6 h-6" /> Why Helpers Trust EzyHelpers
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Provided jobs for 5,000+ helpers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Supported 10,000+ families</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Training aligned with Domestic Workers Sector Skill Council (DWSSC) under Skill India</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Placement only in respectful homes</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Duties are explained clearly before joining</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Continuous support after placement</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Help during misunderstandings or job issues</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Assistance with job changes if needed</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">Regular salary and long-term work opportunities</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-900/50 rounded-2xl p-6 border border-blue-700/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-600">
                                            <HeartIcon className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-blue-300 uppercase tracking-wider font-bold mb-1">Our Belief</h4>
                                            <p className="font-medium text-white">Good Homes for Helpers. Good Helpers for Families.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-600">
                                            <GlobeAltIcon className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-blue-300 uppercase tracking-wider font-bold mb-1">Locations We Serve</h4>
                                            <p className="text-sm text-blue-50 line-clamp-2 pr-4">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Training & Certificate */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <AcademicCapIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Certificate</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Basic training related to your job role, and a certificate will be given after completion.</p>
                            </div>

                            {/* Look Professional */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Look Professional</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">EzyHelpers Coat and grooming kit is provided.</p>
                            </div>

                            {/* Safety & Security */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineShieldCheckIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Security</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Clear work agreements and regular support.</p>
                            </div>

                            {/* Stay Support */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineHomeModernIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Support</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Stay at our women’s hostel if placement is delayed.</p>
                            </div>

                            {/* Health Insurance */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineHeartIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Basic medical coverage for emergencies.</p>
                            </div>

                            {/* Respectful Work Environment */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                                    <HandThumbUpIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Respectful Work</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Homes that treat you with respect.</p>
                            </div>

                            {/* Future Opportunities */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                    <ChartBarIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Future Opportunities</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Good performance can lead to a higher salary or jobs in other cities/abroad.</p>
                            </div>

                            {/* Timely Salary */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineBanknotesIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Salary</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Paid directly by employers every month.</p>
                            </div>

                            {/* Job Profile Creation */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform duration-300">
                                    <UserCircleIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Profile Creation</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Build a profile to get better maid jobs.</p>
                            </div>

                            {/* Support at Every Step */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group lg:col-start-2">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                    <ChatBubbleLeftEllipsisIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Support at Every Step</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Help from registration to after placement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg">
                                            Women helpers can stay at NEST anytime in Bangalore.
                                        </p>
                                        <p className="text-gray-600 text-lg">
                                            The hostel offers safe, comfortable rooms, daily meals, and very affordable rates, making it easy for you to settle in and start your work.
                                        </p>
                                    </div>
                                    <Link href="/nest" className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                        Learn more about NEST
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer a Friend and Earn ₹500 Section */}
                <section className="section-padding bg-yellow-50 border-y border-yellow-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                        <GiftIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">Refer & Earn</h2>
                                    <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500!</h3>
                                    <p className="text-yellow-100 font-medium">*Terms and Conditions apply</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        Help your friends and relatives from Jharkhand get a domestic work job in Bangalore on EzyHelpers.
                                    </p>
                                    <h4 className="font-bold text-gray-900 text-lg mb-4">How to Refer:</h4>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">1</span>
                                            </div>
                                            <span className="text-gray-700 font-medium">Share their details via WhatsApp or call us</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">2</span>
                                            </div>
                                            <span className="text-gray-700 font-medium">Give your friend&apos;s name, age, and job preference</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">3</span>
                                            </div>
                                            <span className="text-gray-700 font-bold">They join EzyHelpers, complete placement, and you earn ₹500</span>
                                        </div>
                                    </div>
                                    <Link href="#" className="inline-block text-center bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
                                        Refer & Earn ₹500
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply for Senior Caregiver Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for Senior Caregiver Jobs in Bangalore</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-blue-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "Contact EzyHelpers", desc: "Call us or fill the online form. We will clearly explain available jobs, duties, and salary to you." },
                                    { step: 2, title: "Share Your Details", desc: "Tell us your name, age, experience, and any skills you have in elderly care, cooking, or cleaning." },
                                    { step: 3, title: "Training & Job Start", desc: "Attend basic training, complete document verification, meet the family, and begin your job with full support from us." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-blue-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Call Now to Start Your Job
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <FAQAccordion faqs={[
                                { question: "Are male Elderly Caretaker jobs in Bangalore available?", answer: "Yes. Male caretaker jobs are available based on family requirements." },
                                { question: "What does a senior caretaker job involve?", answer: "You will support elderly people with daily activities, safety, hygiene, and routines." },
                                { question: "Are these elderly care jobs safe for Jharkhand helpers?", answer: "Yes. We place you only in verified and respectful homes." },
                                { question: "Do caretaker jobs include night duty?", answer: "Only for specific live-in roles, and this is explained to you in advance." },
                                { question: "Can I work if I live with relatives in Bangalore?", answer: "Yes. Full-time and part-time jobs are suitable if you stay with relatives or in shared accommodation." },
                                { question: "Can I get better job opportunities later?", answer: "Yes. Good performance can help you move to higher-paying caretaker jobs or placements in other cities." },
                                { question: "Do I need special education for caretaker jobs?", answer: "No. Basic reading and understanding, along with elderly care skills, are enough." },
                                { question: "Can I refuse a job offer?", answer: "Yes. You are never forced to accept any job you are not comfortable with." }
                            ]} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-blue-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Begin a Better Life in Bangalore</h2>
                            <p className="text-lg md:text-xl mb-10 text-white font-medium">A safe home and respectful work can change your life. Take a confident step toward a better future where your hard work is truly valued.</p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    Start Your New Journey
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
