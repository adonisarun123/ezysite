import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    CheckCircleIcon,
    ClockIcon,
    HomeIcon,
    ClockIcon as ClockSolidIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    AcademicCapIcon,
    UserIcon,
    ShieldCheckIcon,
    FireIcon,
    StarIcon,
    GlobeAltIcon,
    HeartIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Reliable Home Cooks Jobs in Bangalore for Jharkhand Helpers',
    description: 'Get home cook jobs in Bangalore. Prepare daily meals, earn good salary. Live-in and part-time jobs available. Safe work for helpers. Join EzyHelpers.',
    openGraph: {
        title: 'Reliable Home Cooks Jobs in Bangalore for Jharkhand Helpers',
        description: 'Get home cook jobs in Bangalore. Prepare daily meals, earn good salary. Live-in and part-time jobs available. Safe work for helpers. Join EzyHelpers.',
        url: 'https://www.ezyhelpers.com/helper-jobs/home-cooks-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/home-cooks-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Are live-in Home Cooks provided with food and a room?',
        answer: 'Yes. Live-in Cooks receive free meals along with a room or sleeping space inside the family home.',
    },
    {
        question: 'What are the daily duties of a Home Cook in Bangalore?',
        answer: 'Daily duties include cooking meals, maintaining kitchen cleanliness, washing utensils, storing food safely, and following family recipes and timing.',
    },
    {
        question: 'Can I take rest during cooking hours?',
        answer: 'Yes. Work hours and rest breaks are discussed before joining so you get proper rest.',
    },
    {
        question: 'What if I don’t know modern kitchen appliances?',
        answer: 'We provide training on microwave, gas stove, mixer, oven, and other appliances before your placement.',
    },
    {
        question: 'Can I combine cooking and simple cleaning duties?',
        answer: 'Yes. Some families request light cleaning along with cooking, and the salary is adjusted accordingly.',
    },
    {
        question: 'Do I need prior experience to apply?',
        answer: 'No. Freshers can apply if you know basic cooking and kitchen work.',
    }
]

export default function HomeCookJobsBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Home Cook Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/home-cooks-job-bangalore/hin"
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">
                                Home Cooks Jobs in Bangalore for Jharkhand Helpers
                            </h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-teal-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    Busy families in Bangalore are looking for fresh, home-style meals every day. If you can cook basic food and keep the kitchen clean, EzyHelpers helps you get safe Home Cook jobs with clear duties and a timely salary.
                                </p>
                            </div>

                            <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                                    ✓ No registration charges
                                </div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                                    ✓ Direct placement without agents
                                </div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                                    ✓ Salary paid directly by the family
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider mb-4 border border-teal-200">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary and Key Benefits Overview</h2>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Live-In Cook Jobs</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-6">₹22,000 to ₹25,000<span className="text-sm font-medium text-gray-500 block mt-1">per month</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Free stay and food provided</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Long-term stable work</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Full-Time Cook Jobs</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹16,000 to ₹20,000<span className="text-sm font-medium text-gray-500 block mt-1">per month</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Fixed working hours</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Weekly off included</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Part-Time Cook Jobs</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">₹8,000 to ₹12,000<span className="text-sm font-medium text-gray-500 block mt-1">per month</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Short working hours</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">Flexible shifts</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Home Cooks Job Categories Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Home Cooks Job Categories</h2>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                As a Home Cook in Bangalore, your main role is to prepare meals and keep the kitchen clean while supporting families with their daily food needs. We guide you so you understand exactly what is expected.
                            </p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Live-In Cooking Jobs in Bangalore</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Type of Work</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You stay with the family with free room and meals</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You cook daily meals and manage the kitchen</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You follow the family&apos;s food preferences</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Work Hours</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Around 12 hours daily support</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">2 leaves per month</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers who want to save rent and food expenses</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers willing to live with the family</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Full-Time Cook Jobs in Bangalore</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Type of Work</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You cook breakfast, lunch, and dinner</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You maintain kitchen and dining cleanliness</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You help with groceries when required</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Work Hours</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">8 to 10 hours per day</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">6 working days with weekly off</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers from Jharkhand seeking stable daily work</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers who prefer fixed schedules</span>
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
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Part-Time Jobs in Bangalore</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Type of Work</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You cook selected meals such as breakfast or dinner</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You clean the kitchen after cooking</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">You arrange utensils and cooking areas</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Work Hours</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">4 to 6 hours depending on family needs</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Flexible shifts</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers wanting shorter working hours</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">Helpers who prefer flexible cooking schedules</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Additional Information Section (Responsibilities) */}
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mt-12 mb-12">
                    {/* Responsibilities */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                        <div className="flex flex-col items-center gap-4 mb-6 text-center">
                            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                <ClipboardDocumentListIcon className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-display">Work Roles and Responsibilities</h2>
                        </div>
                        <p className="text-gray-600 mb-6 font-medium text-center max-w-2xl mx-auto">
                            As a Home Cook in Bangalore, you will manage daily kitchen activities and make sure meal preparation runs smoothly for the family.
                        </p>

                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 mt-4">Daily Tasks Include</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Cook meals as per family choice, including North Indian, South Indian, Chinese, veg and non-veg food</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Prepare ingredients in advance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Wash utensils and clean kitchen counters</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Store food safely</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Keep the kitchen organised and hygienic</span>
                                </li>
                            </ul>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Assist with grocery shopping if required</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Follow recipes carefully</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Serve meals on time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Prepare tea and simple snacks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Inform families about grocery shortages</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Training Support and Cuisines Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                            {/* Training Support */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <AcademicCapIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">Training Support</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">At EzyHelpers, we provide basic training before placement so you feel confident and prepared for your job.</p>

                                <h4 className="font-bold text-gray-800 mb-4 px-2">Training Covers</h4>
                                <ul className="space-y-4 mb-6 flex-grow px-2">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Kitchen safety and hygiene</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Cooking for small and medium families</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Safe grocery handling</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Understanding family instructions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Using kitchen appliances</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Learning English names of vegetables and ingredients</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <p className="text-blue-800 font-medium text-sm text-center">
                                        This training helps you adjust easily to Home Cook jobs in Bangalore.
                                    </p>
                                </div>
                            </div>

                            {/* Who Can Apply */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <UserIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">Who Can Apply</h3>
                                </div>
                                <ul className="space-y-5 mb-6 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-teal-600 font-bold text-lg">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Female Home Cooks</h4>
                                            <p className="text-gray-600 text-sm">from Jharkhand</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-teal-600 font-bold text-lg">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Age: 18 to 45 years</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-teal-600 font-bold text-lg">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Basic schooling is enough</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-teal-600 font-bold text-lg">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Freshers & experienced helpers</h4>
                                            <p className="text-gray-600 text-sm">both are welcome</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheckIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <p className="text-teal-800 font-medium text-sm">
                                            Basic training is provided before placement.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-teal-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-teal-700 hover:shadow-lg transition-all duration-300 w-full"
                                    >
                                        Apply Today
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Types of Cuisines Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Types of Cuisines and Dishes You Will Prepare</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                            {/* South Indian */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                    <FireIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">South Indian Dishes</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                    Idli, Dosa, Upma, Sambhar, Rasam, Coconut Chutney, Lemon Rice, Curd Rice
                                </p>
                            </div>

                            {/* North Indian */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                                    <StarIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">North Indian Dishes</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                    Roti, Chapati, Dal, Sabzi, Paneer Curry, Gobi dishes, Vegetable rolls, Simple rice meals
                                </p>
                            </div>

                            {/* Chinese */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                                <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                                    <GlobeAltIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">Chinese & Indo-Chinese</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                    Fried Rice, Chowmein, Noodles, Vegetable or Chicken Manchurian
                                </p>
                            </div>

                            {/* Snacks */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left lg:col-start-1 lg:col-end-auto md:col-span-1">
                                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                                    <HeartIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">Snacks and Light Meals</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                    Sandwiches, Toast, Bread rolls, Evening snacks
                                </p>
                            </div>

                            {/* Veg and Non-Veg */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left lg:col-span-2 md:col-span-2">
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                                    <CheckCircleIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">Vegetarian and Non-Vegetarian Cooking</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                    Egg, Chicken, Fish, Paneer and daily vegetarian meals
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers Trusted Helper Jobs</h2>
                                    <p className="text-teal-100 text-lg md:text-xl">
                                        We connect helpers with safe Domestic Helper jobs across India without charging any fees, and we support you throughout your journey.
                                    </p>
                                </div>

                                <div className="max-w-5xl mx-auto">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-teal-700/50">
                                        <h3 className="text-xl md:text-2xl font-bold mb-8 flex justify-center items-center gap-2 text-teal-100 border-b border-teal-700/50 pb-4 text-center">
                                            <ShieldCheckIcon className="w-8 h-8" /> Why Helpers Trust EzyHelpers
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                            <ul className="space-y-4">
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Provided jobs for 5,000+ helpers</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Supported 10,000+ families</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Training aligned with Domestic Workers Sector Skill Council (DWSSC) under Skill India</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Placement only in respectful homes</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Duties explained clearly before joining</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-4 md:mt-0">
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Continuous support after placement</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Help during misunderstandings or job issues</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Assistance with job changes if needed</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50 text-sm md:text-lg font-medium">Regular salary and long-term work opportunities</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-teal-900/50 rounded-2xl p-6 border border-teal-700/50 backdrop-blur-sm mt-8 max-w-5xl mx-auto">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                            <HeartIcon className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">Our Belief</h4>
                                            <p className="font-medium text-white">Good Homes for Helpers. Good Helpers for Families.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                            <GlobeAltIcon className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">Locations We Serve</h4>
                                            <p className="text-sm text-teal-50 line-clamp-2 pr-4">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.</p>
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
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Training & Certificate */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300">
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
                                <p className="text-gray-600 font-medium leading-relaxed">Coat and grooming kit provided.</p>
                            </div>

                            {/* Safety & Security */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheckIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Security</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Clear work agreements and regular support.</p>
                            </div>

                            {/* Stay Support */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                    <HomeIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Support</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Stay at our women’s hostel if placement is delayed.</p>
                            </div>

                            {/* Health Insurance */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                                    <HeartIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Basic medical coverage for emergencies.</p>
                            </div>

                            {/* Respectful Work Environment */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                                    <UserIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Respectful Work Environment</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Homes that treat you with respect.</p>
                            </div>

                            {/* Future Opportunities */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                    <GlobeAltIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Future Opportunities</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Good performance can lead to higher salary or jobs in other cities/abroad.</p>
                            </div>

                            {/* Timely Salary */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    <ClockSolidIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Salary</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Paid directly by employers every month.</p>
                            </div>

                            {/* Job Profile Creation */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform duration-300">
                                    <FireIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Profile Creation</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Build a profile to get better maid jobs.</p>
                            </div>

                            {/* Support at Every Step */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group lg:col-start-2">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                    <ClipboardDocumentListIcon className="w-7 h-7" />
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
                                        <HomeIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
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
                                        <StarIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">Refer & Earn</h2>
                                    <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500!</h3>
                                    <p className="text-yellow-100 font-medium">*Terms and Conditions apply</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        Help your friends from Jharkhand find trusted housekeeping or security jobs in Bangalore. You get ₹500 when they join.
                                    </p>
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
                                            <span className="text-gray-700 font-medium">Give your friend’s name, age, and job preference</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">3</span>
                                            </div>
                                            <span className="text-gray-700 font-bold">They join EzyHelpers, complete placement, and you earn ₹500</span>
                                        </div>
                                    </div>
                                    <Link href="#" className="inline-block text-center bg-teal-600 text-white font-bold text-lg py-3 px-8 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300">
                                        Refer & Earn ₹500
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply for a Bangalore Cooking Job */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for a Bangalore Cooking Job</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-teal-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "Contact EzyHelpers", desc: "Call us or fill the form so we can explain job details clearly to you." },
                                    { step: 2, title: "Share Your Details", desc: "Tell us your name, age, experience, and cooking skills." },
                                    { step: 3, title: "Training and Job Placement", desc: "Attend training, meet families, approve the job yourself, and start work with our full support." }
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
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-teal-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
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
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-teal-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                                <p className="text-gray-600 mt-6 text-lg">Have questions about our home cook jobs? Find answers to commonly asked questions below.</p>
                            </div>
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-teal-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Your Skills Deserve Respect</h2>
                            <p className="text-lg md:text-xl mb-10 text-teal-100">Cooking is not just work; it is care, trust, and responsibility. Find families who value your effort and give you a place where your work truly matters.</p>

                            <div className="flex justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    Find a Respectful Home
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

