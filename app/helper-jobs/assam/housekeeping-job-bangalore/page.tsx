import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
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
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Housekeeping Jobs in Bangalore for Assam Helpers – Free Placement',
    description: 'Get housekeeping jobs in Bangalore from Assam with free placement, fixed salary up to ₹22,000, and full support. No agent fees. Apply now with EzyHelpers.',
    openGraph: {
        title: 'Housekeeping Jobs in Bangalore for Assam Helpers – Free Placement',
        description: 'Get housekeeping jobs in Bangalore from Assam with free placement, fixed salary up to ₹22,000, and full support. No agent fees. Apply now with EzyHelpers.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/housekeeping-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/housekeeping-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Will I get training before starting Housekeeping work in Bangalore?',
        answer: 'Yes. Basic training in cleaning, hygiene, communication, professional behaviour, and safety is provided before your placement.',
    },
    {
        question: 'Are food and room provided in 24-hour live-in house cleaning jobs?',
        answer: 'Yes. In live-in maid opportunities in Bangalore, you receive free meals and a separate room or sleeping space.',
    },
    {
        question: 'Do I need to pay money to get a housekeeping job?',
        answer: 'No. EzyHelpers does not charge any fees for Housekeeping jobs in Bangalore. It is completely free for you.',
    },
    {
        question: 'How long is the training in Bangalore?',
        answer: 'Training is usually 2 to 3 days covering cleaning skills, hygiene, and workplace behaviour.',
    },
    {
        question: 'Can I change my job if I do not like the family?',
        answer: 'Yes. We help you find a new housekeeping job if you face any problems with your current employer.',
    },
    {
        question: 'Is there any housekeeping job vacancy in Bangalore right now?',
        answer: 'Yes. We have many housekeeping job vacancies in Bangalore for Assam helpers. Contact us to know current openings.',
    },
    {
        question: 'Will I get a written agreement before joining?',
        answer: 'Yes. We give you a clear written agreement that explains your work, salary, and leave days.',
    },
    {
        question: 'Is there a difference between live-in and full-time housekeeping jobs in Bangalore?',
        answer: 'Yes. In a live-in job, you stay at the employer\'s house and get free food and accommodation. In a full-time job, you work fixed hours and then go back to your own place after work.',
    },
    {
        question: 'Does EzyHelpers take any money from my salary?',
        answer: 'No. EzyHelpers does not take any cut from your salary. What the employer pays you is fully yours.',
    },
    {
        question: 'How long does the whole process take from application to starting work?',
        answer: 'It usually takes one to two weeks from your initial call to starting work, including travel, training, and the family meeting. If there is an immediate requirement, you may also get a job instantly.',
    }
]

export default async function HousekeepingJobsAssamBangalorePage() {
  const __dbHtml = await getHtmlContent("helper-jobs/assam/housekeeping-job-bangalore")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/assam/housekeeping-job-bangalore", faqs)
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
                        { label: 'Housekeeping Jobs in Bangalore' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">English</span>
                            <Link href="/helper-jobs/assam/housekeeping-job-bangalore/hin" className="text-xs font-medium text-gray-500 hover:text-emerald-600 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50">हिन्दी</Link>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-500 to-emerald-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Housekeeping Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-emerald-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                Are you in Assam and ready to earn more in Bangalore? We help you get safe and respectful Housekeeping jobs in Bangalore with fixed salary, free stay options, and full support from us. You can send your full salary home every month.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Free Job Placement',
                                    'Safe and Respectful Homes',
                                    'On-Time Salary Every Month'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-emerald-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Housekeeping Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-emerald-100 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-emerald-50 border-b border-emerald-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-gray-600 font-medium">We focus on your safety, income, and long-term support.</p>
                        </div>
                        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                            {[
                                'Free Job, No Fees',
                                'Direct jobs, no middle agents',
                                'Clear work details before joining',
                                'Salary explained properly',
                                'Monthly salary paid on time',
                                'Training and guidance provided',
                                'Help even after job placement'
                            ].map((item, index) => (
                                <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200 flex items-center gap-2">
                                    <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">House Cleaning Jobs Categories in Bangalore</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Choose the work that fits your lifestyle and needs. We have three options for you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Live-in */}
                            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                    <HomeIcon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Live in Housekeeping Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Stay and work in the same house. You live with the family 24/7. These are also known as 24-hour housekeeping jobs in Bangalore.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You will stay in the employer’s house. A separate room or sleeping space and free food will be given to you.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">Full-time stay. You will do daily cleaning work. You get 2 days' leave every month.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">New & experienced helpers and those looking for safe and long-term live-in maid jobs in Bangalore.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You save all your money because rent and food are completely free.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                    <BriefcaseIcon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Time Housekeeping Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Fixed timing. You go back to your own room or accommodation after work. Food is not included unless discussed.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You have fixed working hours. After your duty finishes, you can go back to your room or house.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">8 to 10 hours daily. You get 1 off per week.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want regular timing and free time after work.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You get a fixed salary every month and a regular routine that never changes.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                    <ClockIcon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Part-Time Housekeeping Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Less working hours. Extra income for your family. We provide part-time housekeeping jobs in Bangalore.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">Cleaning, utensil washing, kitchen or bathroom work daily or weekly as per the house's needs.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">4 to 6 hours. Morning or evening shift as you prefer.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want flexible work or want to work in more than one house.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You can earn extra money and manage your own time freely.</p>
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
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Salary for Housekeeping Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">We always explain the salary clearly before you travel from Assam. Your salary depends on experience and work type.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-emerald-600 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Working Hours</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="hover:bg-emerald-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Live-in Housekeeping Jobs</td>
                                                <td className="px-6 py-4 font-bold text-emerald-600">₹18,000 to ₹22,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Full-time stay</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Free food and stay</td>
                                            </tr>
                                            <tr className="hover:bg-emerald-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Full-Time Housekeeping Jobs</td>
                                                <td className="px-6 py-4 font-bold text-emerald-600">₹16,000 to ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">8 to 10 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                            <tr className="hover:bg-emerald-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Part-Time House Cleaning Jobs</td>
                                                <td className="px-6 py-4 font-bold text-emerald-600">₹8,000 to ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">4 to 6 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all"
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
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Housekeeping Work Responsibilities</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Families in Bangalore respect helpers from Assam for your discipline and honesty. When you take housekeeping work in Bangalore, your daily duties may include these tasks.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Sweeping and mopping floors',
                                    'Cleaning the kitchen and bathrooms',
                                    'Washing utensils',
                                    'Dusting furniture and fans',
                                    'Arranging beds and rooms',
                                    'Washing and folding clothes',
                                    'Cleaning windows and doors',
                                    'Taking out garbage',
                                    'Helping with small kitchen work',
                                    'Organising household items'
                                ].map((task, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <CheckCircleIcon className="w-6 h-6 text-emerald-500 shrink-0" />
                                        <span className="font-bold text-gray-800">{task}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm font-bold text-emerald-600 uppercase tracking-widest mt-8">We explain everything clearly before you start.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-gray-50 border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Can Apply for Housekeeping Jobs in Bangalore</h2>
                                <p className="text-base text-gray-600 font-medium">You can apply if you fit any of the following.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Best Suited for", desc: "There is high demand for female housekeeping jobs in Bangalore in most homes. Opportunities are open for men as well.", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "You must be between 18 and 45 years old.", icon: UserCircleIcon },
                                    { title: "Basic Education Required", desc: "Basic education is enough. No high qualifications needed.", icon: AcademicCapIcon },
                                    { title: "Freshers Can Apply", desc: "No experience? No problem. We provide basic training.", icon: SparklesIcon },
                                    { title: "Experience Advantage", desc: "Previous experience means a better salary and more job options.", icon: ChartBarIcon },
                                    { title: "Good Work Attitude", desc: "You are honest, willing to work, and ready to follow house rules.", icon: HandThumbUpIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-emerald-600" />
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
                <section className="section-padding bg-emerald-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-emerald-100 font-medium">We connect helpers like you with trusted housekeeping maid jobs in Bangalore and across India without charging any fees.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Respectful jobs in Bangalore</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Safe and comfortable working conditions</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Helper welfare and long-term support</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Provided jobs for 5,000+ helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Served 10,000+ families across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Training aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Placement only in respectful homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Duties are explained clearly before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Continuous support after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Help during misunderstandings or job issues</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Assistance with job changes if needed</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> Regular salary and long-term work opportunities</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center bg-black/20 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-300">Locations We Serve:</span> Bangalore | Bareilly | Mumbai | Hyderabad | Delhi NCR | Pune | Odisha, and more.</p>
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
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-emerald-600" />
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
                        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-emerald-600" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-gray-700 mb-8">Worried about where to stay in Bangalore? NEST is our hostel for women helpers from Assam.</p>

                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-emerald-800 shadow-sm border border-emerald-100">Safe rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-emerald-800 shadow-sm border border-emerald-100">Daily meals</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-emerald-800 shadow-sm border border-emerald-100">Affordable stay</span>
                                </div>

                                <p className="text-md font-bold text-emerald-700 mb-8 max-w-2xl mx-auto">
                                    You settle comfortably before your job starts. No stress. No last-minute panic.
                                </p>

                                <Link href="/nest" className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-emerald-700 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="emerald" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for Housekeeping Jobs</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">From your village in Assam to your new workplace in Bangalore. It is very easy.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-100 rounded-full hidden sm:block"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
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
                                className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-emerald-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Choose the safest way to work in a big city.</h2>
                            <p className="text-lg text-emerald-100 mb-10 font-medium">Join thousands of helpers from Assam who trust EzyHelpers for respectful and secure work. Click the button below to speak with our friendly team.</p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-emerald-800 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
