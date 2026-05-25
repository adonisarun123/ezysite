import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    CheckCircleIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    HomeIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ChartBarIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ArrowRightIcon,
    PhoneIcon,
    InformationCircleIcon,
    ClockIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
    SunIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Live-in Couple Housekeeping Jobs Bangalore | Apply Free',
    description: 'Live-in couple housekeeping jobs in Bangalore for Assam couples. Free stay, food, monthly salary and full placement support via EzyHelpers.',
    openGraph: {
        title: 'Live-in Couple Housekeeping Jobs Bangalore | Apply Free',
        description: 'Live-in couple housekeeping jobs in Bangalore for Assam couples. Free stay, food, monthly salary and full placement support via EzyHelpers.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Is food and stay provided in live-in couple jobs?',
        answer: 'Yes. Most Live-in Couple Housekeeping Work in Bangalore includes free food and stay for both husband and wife. Many employers provide a separate room or comfortable private sleeping space so couples can stay together safely and save more money every month.',
    },
    {
        question: 'What documents are required?',
        answer: 'Both partners need an Aadhaar card and any local ID from Assam. A marriage certificate is helpful but not always necessary.',
    },
    {
        question: 'Do we get one salary together or two separate salaries?',
        answer: 'Most Couple Housekeeping Work in Bangalore offers one combined monthly salary. Salary and duties are discussed clearly before joining.',
    },
    {
        question: 'Can we bring our children with us to Bangalore?',
        answer: 'Most live-in jobs do not allow children to stay in the employer’s house. Speak with our team for guidance.',
    },
    {
        question: 'Will the salary be paid on time?',
        answer: 'Yes. Employers generally pay salaries monthly between the 1st and 10th.',
    },
    {
        question: 'Is Bangalore safe for couples from Assam?',
        answer: 'Yes. Bangalore is a safe city, and our team remains available for support whenever needed.',
    },
    {
        question: 'Can couples from villages in Assam apply?',
        answer: 'Yes. Helpers from villages and small towns can also apply.',
    },
    {
        question: 'Can we change jobs later if needed?',
        answer: 'Yes. We support helpers if a job change becomes necessary.',
    }
]

export default function LiveInCoupleHousekeepingJobsAssamBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Assam', href: '/helper-jobs/assam' },
                        { label: 'Live-in Couple Housekeeping Jobs' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">Live-in Couple Jobs for Housekeeping in Bangalore</h1>
                            <p className="text-sm md:text-xl text-indigo-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Are you a husband and wife from Assam searching for stable income and safe work in Bangalore? We help couples get Couple Housekeeping Work in Bangalore with a fixed salary, free stay, food, and full support. Find trusted husband-wife house work in Bangalore with stable income and long-term opportunities.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Free Job for Both Partners',
                                    'Combined Salary Every Month',
                                    'Live-in Stay Provided'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-indigo-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply Now for Couple Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-indigo-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-indigo-50 border-b border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-indigo-600 font-medium mb-8">We focus on your safety, income, and long-term support.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Both husband and wife can earn together',
                                    'No rent expense in live-in jobs',
                                    'Better savings compared to Assam',
                                    'Stable monthly income',
                                    'Long-term work opportunities'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-indigo-600" />
                                        <span className="text-sm font-bold text-indigo-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-white border-b border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">Live-in Couple Housekeeping Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-indigo-600 font-medium max-w-3xl mx-auto">Stay and work together in the same house with trusted Couple Housekeeping Work in Bangalore opportunities.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <BriefcaseIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Work Details</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">The husband handles outdoor work, groceries, gardening, and maintenance support. The wife manages cleaning, laundry, kitchen help, and household organisation.</p>
                                </div>
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <ClockIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Working Time</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">24/7 Full-time stay with shared duties and 2 leaves every month.</p>
                                </div>
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <UserGroupIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Best For</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">Couples want long-term work, free stay, and better savings.</p>
                                </div>
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <BanknotesIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Why Choose This Job</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">You both earn together while saving on rent, food, and travel expenses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-indigo-50 border-b border-indigo-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">Salary for Couple Housekeeping Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-indigo-600 font-medium">We explain salary and work details clearly before you travel from Assam.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-indigo-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-indigo-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Food</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Accommodation</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Savings Benefit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-indigo-100">
                                            <tr className="hover:bg-indigo-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-indigo-900">Live-in Couple Helper Jobs</td>
                                                <td className="px-6 py-4 font-bold text-indigo-700">₹30,000 to ₹35,000 per month</td>
                                                <td className="px-6 py-4 text-sm text-indigo-600">Free meals provided</td>
                                                <td className="px-6 py-4 text-sm text-indigo-600">Free separate room or private sleeping space</td>
                                                <td className="px-6 py-4 text-sm text-indigo-600 font-medium">Most of your income can be saved and sent back to Assam</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="text-center text-sm font-bold text-indigo-700 mb-6">Your salary depends on work type, experience, and responsibilities.</p>

                            <div className="text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 shadow-md transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">Work Responsibilities for Live-in Housekeeping Couples</h2>
                                <p className="text-base md:text-lg text-indigo-600 font-medium mb-8">Families in Bangalore prefer Assam couples because they work responsibly and honestly.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700">👩</span>
                                        Common Responsibilities for Wife
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Sweeping and mopping',
                                            'Kitchen and bathroom cleaning',
                                            'Washing utensils and clothes',
                                            'Dusting and arranging household items',
                                            'Simple cooking support'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-indigo-900 text-lg">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700">👨</span>
                                        Common Responsibilities for Husband
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Gardening and outdoor cleaning',
                                            'Grocery and household support',
                                            'Car washing and parking help',
                                            'Security support',
                                            'Minor maintenance work'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-indigo-900 text-lg">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center max-w-3xl mx-auto mb-8 shadow-sm">
                                <h4 className="font-bold text-yellow-800 text-lg mb-2">Important Note</h4>
                                <p className="text-yellow-900 font-medium">Not every couple performs all tasks. Duties depend on the family’s requirements and are explained clearly before joining.</p>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 shadow-md transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories of Jobs */}
                <section className="section-padding bg-indigo-50 border-t border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">Categories of Live-in Couple Jobs in Bangalore</h2>
                                <p className="text-base text-indigo-700 font-medium max-w-3xl mx-auto">Choose couple of housekeeping work in Bangalore according to your skills and comfort for the right housekeeping couple job in Bangalore.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Full Property Caretaker Couple Jobs",
                                        desc: "Couples take care of big houses or villas. They handle cleaning, maintenance, checking the property, and daily work.",
                                        benefits: "Higher salary, private stay, full responsibility of the house",
                                        icon: HomeIcon
                                    },
                                    {
                                        title: "Cook and Housekeeping Couple Jobs",
                                        desc: "Wife cooks food, and husband helps with cleaning and other household work.",
                                        benefits: "Easy workload, comfortable living, and good family interaction",
                                        icon: SunIcon
                                    },
                                    {
                                        title: "Elderly Care Couple Jobs",
                                        desc: "Couples take care of elderly people and help them with their daily needs.",
                                        benefits: "Simple work, peaceful environment, respectful job",
                                        icon: HeartIcon
                                    },
                                    {
                                        title: "Driver and Housekeeping Couple Jobs",
                                        desc: "Husband drives the family car, and wife does house cleaning and support work.",
                                        benefits: "Good salary, different skills used, stable job",
                                        icon: WrenchScrewdriverIcon
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                                                <item.icon className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <h3 className="font-bold text-indigo-900 text-lg leading-tight">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-indigo-800 mb-4 font-medium">{item.desc}</p>
                                        <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                                            <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">Benefits</p>
                                            <p className="text-sm text-indigo-700 font-medium">{item.benefits}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-white border-t border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">Who Can Apply for Couple Housekeeping Jobs in Bangalore</h2>
                                <p className="text-base text-indigo-600 font-medium">You can apply for Couple Housekeeping Work in Bangalore if you meet the following conditions.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Husband and Wife Together", desc: "Husband and wife should be ready to work together", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "Preferred age is between 20 and 45 years.", icon: UserCircleIcon },
                                    { title: "Physical Fitness", desc: "Both should be healthy, active, and hardworking.", icon: HeartIcon },
                                    { title: "Basic Communication", desc: "Basic Hindi speaking skills are helpful.", icon: ChatBubbleLeftEllipsisIcon },
                                    { title: "Freshers Can Apply", desc: "No experience? We provide basic guidance and support.", icon: SparklesIcon },
                                    { title: "Experience Advantage", desc: "Experienced couples may receive better salary opportunities.", icon: ChartBarIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-indigo-50 p-6 rounded-2xl shadow-sm border border-indigo-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-indigo-700" />
                                        </div>
                                        <h3 className="font-bold text-indigo-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h3>
                                        <p className="text-sm text-indigo-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Trusted Couple Jobs Provider</h2>
                                <p className="text-lg text-indigo-200 font-medium">We help helpers from Assam find safe and respectful domestic work opportunities in Bangalore and other cities.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Respectful homes for helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Safe work environment</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Long-term employment support</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Clear communication before placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Jobs provided to 5,000+ helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Served families across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Training aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Placement only in respectful homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Duties are explained clearly before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Continuous support after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Help during job issues</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Assistance with job changes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Long-term work opportunities</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> Regular salary support</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">Locations We Serve:</span> Bangalore | Hyderabad | Delhi NCR | Pune | Mumbai | Bareilly | Assam and more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-indigo-50 border-b border-indigo-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                                <p className="text-base text-indigo-700 font-medium">We support couples at every step before and after placement.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "You get basic training for your job role. A certificate is given after you finish.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We give you an EzyHelpers coat and a grooming kit.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You receive clear work agreements and our regular support.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your placement is delayed, you can stay at our women's hostel.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "You get basic medical coverage for emergency needs.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We place you only in homes that treat you with respect.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good work can lead to a higher salary or jobs in other cities or abroad.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "Your employer pays your full salary directly to you every month.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you build a profile to find better maid jobs.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "We help you from registration until after you are placed.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-indigo-700" />
                                        </div>
                                        <h3 className="font-bold text-indigo-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-indigo-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-indigo-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-indigo-700 mb-8">Worried about where to stay in Bangalore? NEST is our hostel for women helpers from Assam.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-indigo-800 shadow-sm border border-indigo-200">Safe rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-indigo-800 shadow-sm border border-indigo-200">Daily meals</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-indigo-800 shadow-sm border border-indigo-200">Affordable stay</span>
                                </div>
                                
                                <p className="text-md font-bold text-indigo-700 italic mb-8 max-w-2xl mx-auto">
                                    You settle comfortably before your job starts. No stress. No last-minute panic.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="indigo" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-indigo-50 border-t border-b border-indigo-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">How to Apply for Couple Housekeeping Jobs</h2>
                            <p className="text-base md:text-lg text-indigo-700 max-w-2xl mx-auto font-medium">Moving from Assam to Bangalore for work is simple with EzyHelpers.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "Contact & Details Sharing", desc: "Call EzyHelpers or fill out the simple form. Share your skills and previous work experience with us." },
                                    { step: 2, title: "Job Matching", desc: "We shortlist and match you with suitable jobs based on your skills, then connect you with potential employers." },
                                    { step: 3, title: "Video Interview & Confirmation", desc: "Talk to the customer through a video call. If you agree, travel to Bangalore and confirm your joining." },
                                    { step: 4, title: "Training & Start Work", desc: "Attend 3 days of training, understand salary and job details clearly, and start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-indigo-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-indigo-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-indigo-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-indigo-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 shadow-md transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-indigo-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Start Building a Better Future Together</h2>
                            <p className="text-lg text-indigo-200 mb-6 font-medium">Many husband-wife couples from Assam are already working in Bangalore and saving more money every month. You can also build a stable future with a trusted Housekeeping Couple job opportunity in Bangalore.</p>
                            <p className="text-xl text-yellow-400 font-bold mb-10">No rent. No food expenses. Better savings. Stable work.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
