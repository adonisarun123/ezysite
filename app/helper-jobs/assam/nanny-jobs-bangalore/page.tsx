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
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Experienced Female Nanny Jobs in Bangalore | Apply Free',
    description: 'Care for children in safe and respectful homes. Nanny jobs in Bangalore for experienced women offer dignity, stability, and support at every step. Start your new journey today.',
    openGraph: {
        title: 'Experienced Female Nanny Jobs in Bangalore | Apply Free',
        description: 'Care for children in safe and respectful homes. Nanny jobs in Bangalore for experienced women offer dignity, stability, and support at every step. Start your new journey today.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Is the salary for nanny jobs paid on time?',
        answer: 'Yes, you receive your salary directly from the employer every month, usually between the 1st and 10th. We ensure families follow proper payment practices.',
    },
    {
        question: 'Will I get a separate room in live-in nanny jobs?',
        answer: 'Yes, most families provide a separate room, bed, or proper sleeping space along with food so you can stay comfortably. In some rare cases, you may need to share a room with the child or children, or a separate room may not be available. We always explain these details clearly before you accept the job, so you can decide comfortably.',
    },
    {
        question: 'Can I choose the child\'s age I want to care for?',
        answer: 'Yes, we match you based on your experience. You can work with newborns, toddlers, or school-age children, depending on your experience level.',
    },
    {
        question: 'What if I face a problem with the family?',
        answer: 'You can contact EzyHelpers anytime. We provide full support and help solve the issue or arrange a job change if needed.',
    },
    {
        question: 'What documents are required?',
        answer: 'You need Aadhaar card and a basic ID from Assam. We guide you during the registration process.',
    },
    {
        question: 'Are nanny jobs only for women?',
        answer: 'Most families prefer only female helpers for baby care.',
    },
    {
        question: 'How long is the training in Bangalore?',
        answer: 'Training usually takes 2 to 3 days and includes baby care skills, hygiene, and workplace behaviour.',
    },
    {
        question: 'How long does it take to get a nanny job in Bangalore?',
        answer: 'Usually, it takes 7 to 10 days from application to job start. If there is an urgent requirement, you can get nanny jobs in Bangalore immediately.',
    }
]

export default function NannyJobsAssamBangalorePage() {
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
                        { label: 'Nanny Jobs in Bangalore' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <span className="text-xs font-bold bg-rose-100 text-rose-800 px-2 py-1 rounded-md">English</span>
                            <Link href="/helper-jobs/assam/nanny-jobs-bangalore/hin" className="text-xs font-medium text-gray-500 hover:text-rose-600 transition-colors px-2 py-1 rounded-md hover:bg-rose-50">हिन्दी</Link>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-rose-800 via-rose-500 to-rose-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Nanny Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-rose-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                Start your journey from Assam to Bangalore with safe nanny jobs. Care for children, earn a steady income, and work in respectful homes with full support from EzyHelpers.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Salary Transparency Before Joining',
                                    'Direct Payment from Families',
                                    '100% Free Job Placement'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-rose-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Nanny Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-rose-100 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-rose-50 border-b border-rose-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-gray-600 font-medium mb-8">We focus on your safety, income, and long-term support.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free Job, No Fees',
                                    'Direct jobs, no middle agents',
                                    'Clear work details before joining',
                                    'Salary explained properly',
                                    'Monthly salary paid on time',
                                    'Training and guidance provided',
                                    'Help even after job placement'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-rose-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-rose-600" />
                                        <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-sm font-bold text-rose-700 max-w-3xl mx-auto mb-8">We provide verified nanny jobs in Bangalore and babysitter jobs in Bangalore for both freshers and experienced helpers. We guide you even after you start working so you feel safe and confident.</p>

                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-rose-700 shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Nanny Jobs Categories in Bangalore</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Choose the work that fits your lifestyle, experience, and comfort. We have three options for you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Live-in */}
                            <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                                    <HomeIcon className="w-6 h-6 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Live-in Nanny Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Stay and work in the same house. You live with the family full-time. These are also known as 24-hour babysitter jobs in Bangalore.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You will stay in the employer’s house and take full responsibility for baby care. A separate room or sleeping space and free food will be provided.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">Daily baby care work with proper rest time. You get 2 days off every month.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">New and experienced helpers looking for safe and long-term live-in nanny jobs in Bangalore, especially for newborn baby care in Bangalore.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You save money because rent and food are free, and you get stable long-term work.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                                    <BriefcaseIcon className="w-6 h-6 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Time Babysitter Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Fixed timing. You go home after work.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You take care of babies or children during fixed working hours and return to your own accommodation after work.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">8 to 10 hours daily with 1 weekly off.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want fixed timing and personal time after work.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You get a fixed monthly salary and a regular daily routine.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                                    <ClockIcon className="w-6 h-6 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Part-Time Babysitter Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Fewer hours. Extra income opportunity.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">Take care of babies or children for selected hours. Tasks include feeding, playing, and basic care support.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">4 to 6 hours daily in the morning or evening shift.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want flexible work or want to earn extra income.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You can manage your own time and work in multiple homes if needed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Salary for Nanny Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">We explain salary clearly before you travel from Assam.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-rose-600 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Working Hours</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="hover:bg-rose-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Live-in Nanny Jobs</td>
                                                <td className="px-6 py-4 font-bold text-rose-600">₹20,000 to ₹25,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Full-time stay</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Free food and stay</td>
                                            </tr>
                                            <tr className="hover:bg-rose-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Full-Time Babysitter Jobs</td>
                                                <td className="px-6 py-4 font-bold text-rose-600">₹16,000 to ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">8 to 10 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                            <tr className="hover:bg-rose-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Part-Time Babysitter Jobs</td>
                                                <td className="px-6 py-4 font-bold text-rose-600">₹8,000 to ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">4 to 6 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center text-sm font-bold text-gray-700 mt-6">Your salary depends on your experience, child’s age, and work responsibilities.</p>

                            <div className="mt-8 text-center flex justify-center gap-4">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-rose-700 shadow-md hover:shadow-lg transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Baby Care Job Responsibilities</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Families in Bangalore trust helpers from Assam for their caring nature and patience. Your daily work may include:</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Feeding babies and children on time',
                                    'Bathing and dressing children',
                                    'Handling newborn baby care in Bangalore homes',
                                    'Changing diapers and maintaining hygiene',
                                    'Playing games and engaging with toddlers',
                                    'Reading stories and supporting learning',
                                    'Keeping the baby area clean and safe',
                                    'Monitoring children at all times',
                                    'Taking children for walks or park visits',
                                    'Cleaning baby utensils and clothes',
                                    'Supporting parents in daily routines'
                                ].map((task, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-rose-50 rounded-xl border border-rose-100">
                                        <CheckCircleIcon className="w-6 h-6 text-rose-500 shrink-0" />
                                        <span className="font-bold text-gray-800">{task}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm font-bold text-rose-600 uppercase tracking-widest mt-8">We explain all responsibilities clearly before you start your work.</p>
                        </div>
                    </div>
                </section>
                
                {/* Training Support */}
                <section className="section-padding bg-gray-50 border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Training Support</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Before starting, we provide basic childcare training so you feel confident.</p>
                            </div>
                            
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-rose-700 mb-6 flex items-center justify-center gap-2">
                                    <SparklesIcon className="w-6 h-6" /> Training Includes:
                                </h3>
                                <ul className="space-y-4 max-w-2xl mx-auto">
                                    {[
                                        'How to hold and handle babies safely',
                                        'How to maintain hygiene for children',
                                        'How to keep babies and children safe',
                                        'How to communicate politely with families',
                                        'How to manage your work time properly'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1 bg-rose-100 rounded-full p-1 shrink-0">
                                                <CheckCircleIcon className="w-5 h-5 text-rose-600" />
                                            </div>
                                            <span className="text-gray-800 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-center text-sm font-bold text-rose-700">This training helps you work professionally and safely in any home.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Can Apply for Nanny Jobs in Bangalore</h2>
                                <p className="text-base text-gray-600 font-medium">You can apply if you fit any of the following.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Best Suited for", desc: "Female caregivers are preferred for baby care roles in most homes.", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "Age should be between 25 to 40 years for these jobs.", icon: UserCircleIcon },
                                    { title: "Basic Education Required", desc: "Only basic education is needed to understand instructions and daily tasks.", icon: AcademicCapIcon },
                                    { title: "Experience Requirement", desc: "Minimum 2 years of baby care or nanny experience is preferred.", icon: BriefcaseIcon },
                                    { title: "Experience Advantage", desc: "Experienced helpers can get a higher salary and better job opportunities.", icon: ChartBarIcon },
                                    { title: "Good Work Attitude", desc: "You must work honestly and follow all family rules carefully.", icon: HandThumbUpIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-rose-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-rose-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-rose-100 font-medium">We connect helpers like you with trusted nanny jobs in Bangalore without charging any fees.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Respectful jobs in Bangalore</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Safe and comfortable working conditions</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Helper welfare and long-term support</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Provided jobs for 5,000+ helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Served 10,000+ families across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Training aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Placement only in respectful homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Duties are explained clearly before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Continuous support after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Help during misunderstandings</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Assistance with job change</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> Regular salary and long-term work</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/20 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-300">Locations We Serve:</span> Bangalore | Bareilly | Mumbai | Hyderabad | Delhi NCR | Pune | Odisha, and more</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-gray-50 border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "You get baby care training, including newborn baby care basics and professional behaviour. A certificate is given after completion.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We provide a uniform coat and grooming kit to help you look professional.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You receive clear work agreements and continuous support.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your job is delayed, you can stay at our women’s hostel.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "Basic medical support is provided for emergency needs.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We place you only in homes that treat helpers with dignity.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "You can grow to higher-salaried jobs or even international placements.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "You receive your full salary every month without delay.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help build your profile for better job opportunities.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "From registration to placement, we guide you fully.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-rose-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-rose-50 rounded-3xl p-8 md:p-12 border border-rose-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-rose-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-gray-700 mb-8">Worried about where to stay in Bangalore? NEST is our hostel for women helpers from Assam.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-rose-800 shadow-sm border border-rose-100">Safe rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-rose-800 shadow-sm border border-rose-100">Daily meals</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-rose-800 shadow-sm border border-rose-100">Affordable stay</span>
                                </div>
                                
                                <p className="text-md font-bold text-rose-700 mb-8 max-w-2xl mx-auto">
                                    You settle comfortably before your job starts. No stress. No last-minute panic.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-rose-700 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="rose" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for Nanny Jobs</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">From your village in Assam to your new job in Bangalore, the process is simple.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-rose-100 rounded-full hidden sm:block"></div>

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
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-rose-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
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
                                className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-rose-700 shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-rose-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Opportunities don’t wait, and neither should you.</h2>
                            <p className="text-lg text-rose-100 mb-10 font-medium">Start your journey today with safe nanny jobs in Bangalore.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-rose-800 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
