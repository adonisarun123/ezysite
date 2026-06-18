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
    title: 'Apply for Japa Maid Job in Bangalore Without Any Fees',
    description: 'Experienced in baby and mother care? Apply for a Japa maid job in Bangalore with food, accommodation, and a fixed monthly salary.',
    openGraph: {
        title: 'Apply for Japa Maid Job in Bangalore Without Any Fees',
        description: 'Experienced in baby and mother care? Apply for a Japa maid job in Bangalore with food, accommodation, and a fixed monthly salary.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'How much experience do I need for a newborn care job in Bangalore?',
        answer: 'You need at least 5 years of experience in mother and baby care, but it is not always mandatory. This is a skilled role, and families in Bangalore need someone they can trust.',
    },
    {
        question: 'Do I need to pay any fees to get a Japa maid job through EzyHelpers?',
        answer: 'No. EzyHelpers does not charge any fees to helpers. Getting a Japa maid job in Bangalore through us is completely free for you.',
    },
    {
        question: 'Is there any age limit for applying for Japa Maid jobs in Bangalore?',
        answer: 'Yes. You must be between 30 and 50 years old to apply for newborn care jobs or mother and baby care jobs in Bangalore.',
    },
    {
        question: 'Does EzyHelpers take any cut from my monthly salary?',
        answer: 'No. EzyHelpers does not take any portion of your salary. Whatever the employer pays you every month is fully yours to keep.',
    },
    {
        question: 'Will my salary be paid directly to me or through EzyHelpers?',
        answer: 'Your employer pays your full salary directly to you every month. EzyHelpers does not handle or hold your salary at any point.',
    },
    {
        question: 'How many days is Japa work for?',
        answer: 'Most Japa work in Bangalore lasts between 30 to 90 days, depending on the mother’s health, baby’s needs, and the family’s requirements.',
    }
]

export default function JapaMaidJobsAssamBangalorePage() {
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
                        { label: 'Japa Maid Jobs in Bangalore' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <span className="text-xs font-bold bg-pink-100 text-pink-800 px-2 py-1 rounded-md">English</span>
                            <Link href="/helper-jobs/assam/japa-maid-job-bangalore/hin" className="text-xs font-medium text-gray-500 hover:text-slate-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-50">हिन्दी</Link>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-pink-800 via-pink-600 to-pink-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Japa Maid Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-pink-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                If you are from Assam and have experience caring for newborn babies and mothers after delivery, we help you find safe and respectful Japa maid jobs in Bangalore with a fixed salary and full support.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Free Job Placement',
                                    'Safe and Respectful Homes',
                                    'On Time Salary Every Month'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-pink-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Japa Maid Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-pink-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-pink-50 border-b border-pink-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-pink-600 font-medium mb-8">We focus on your safety, income, and long-term support every single day.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free job, no fees at all',
                                    'Direct jobs, no middle agents',
                                    'Clear work details before you join',
                                    'Salary explained properly before travel',
                                    'Monthly salary is always paid on time',
                                    'Training and guidance are provided to you',
                                    'Help and support even after job placement'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-pink-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-pink-600" />
                                        <span className="text-sm font-bold text-pink-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-pink-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-pink-900 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-white border-b border-pink-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">Salary and Benefits for Japa Maid Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-pink-600 font-medium max-w-4xl mx-auto">You work with newborn babies and mothers during one of the most important times for the family. Because this work needs patience, experience, and proper newborn handling skills, Japa maid salaries are higher than regular housekeeping jobs in Bangalore.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-pink-200 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-pink-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Category</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Duration</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Experience</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-pink-100">
                                            <tr className="hover:bg-pink-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-pink-900">Japa Maid Job in Bangalore</td>
                                                <td className="px-6 py-4 font-bold text-pink-700">₹25,000 to ₹30,000</td>
                                                <td className="px-6 py-4 text-sm text-pink-600">Typical: 40 days to 3 months</td>
                                                <td className="px-6 py-4 text-sm text-pink-600">Free food and stay in most homes</td>
                                                <td className="px-6 py-4 text-sm text-pink-600 font-medium">Minimum 5 years in mother and baby care required</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-pink-50 border-b border-pink-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">Japa Maid Work in Bangalore</h2>
                                <p className="text-base md:text-lg text-pink-600 font-medium max-w-3xl mx-auto">Japa maid work focuses on caring for newborn babies and helping mothers recover comfortably after delivery. Families in Bangalore prefer experienced Assam helpers because of your patience, discipline, and caring nature.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                        <BriefcaseIcon className="w-8 h-8 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-4">Work Details</h3>
                                    <p className="text-pink-800 text-base leading-relaxed">You stay with the family and provide complete mother and baby care support during the recovery period after childbirth.</p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                        <ClockIcon className="w-8 h-8 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-4">Working Duration</h3>
                                    <p className="text-pink-800 text-base leading-relaxed">Most jobs continue for 40 days to 3 months, depending on the family’s requirements and the newborn baby’s care needs.</p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                        <UserGroupIcon className="w-8 h-8 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-4">Best For</h3>
                                    <p className="text-pink-800 text-base leading-relaxed">Experienced women helpers with strong newborn handling and mother care experience.</p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                        <HeartIcon className="w-8 h-8 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-4">Why Families Prefer Japa Maids</h3>
                                    <p className="text-pink-800 text-base leading-relaxed">Families need experienced support during post-delivery recovery and newborn care. Skilled Japa maids receive better salaries and more respect because this work needs trust, patience, and responsibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">Japa Maid Work Responsibilities</h2>
                                <p className="text-base md:text-lg text-pink-600 font-medium mb-8 max-w-3xl mx-auto">Families in Bangalore deeply respect helpers from Assam for your care, patience, and honesty. When you take a Japa maid job in Bangalore, your daily duties will include these tasks.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 relative">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-4 border-white">👶</div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-6 mt-4 text-center">Newborn Baby Care Duties</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Giving the newborn a daily oil massage and bath',
                                            'Feeding the baby on schedule',
                                            'Burping the baby properly after every feed',
                                            'Changing nappies and keeping the baby clean',
                                            'Rocking and settling the baby to sleep',
                                            'Watching over the baby\'s health and comfort'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-pink-900 text-sm">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 relative">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-4 border-white">👩‍🍼</div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-6 mt-4 text-center">New Mother Care Duties</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Preparing special nutritious meals for the new mother',
                                            'Giving the mother a traditional post-delivery body massage',
                                            'Helping the mother with feeding',
                                            'Supporting the mother with rest and daily comfort',
                                            'Assisting with light personal care and hygiene',
                                            'Reminding the mother about medicines and health routines'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-pink-900 text-sm">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 relative">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-4 border-white">🏠</div>
                                    <h3 className="text-xl font-bold text-pink-900 mb-6 mt-4 text-center">General Household Support</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Keeping the baby\'s room clean and tidy always',
                                            'Washing and sterilising baby bottles daily',
                                            'Washing and folding baby clothes carefully',
                                            'Preparing herbal drinks and tonics for the mother',
                                            'Helping with light kitchen work for the family',
                                            'Organising and arranging baby supplies and essentials'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-pink-900 text-sm">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <p className="text-center font-bold text-pink-700">We explain every duty clearly before you start your work.</p>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-pink-50 border-t border-pink-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">Who Can Apply for Japa Maid Jobs in Bangalore</h2>
                                <p className="text-base text-pink-600 font-medium">You can apply if you match these requirements for mother and baby care work in Bangalore.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Experience Required", desc: "Minimum 5 years in mother and baby care required.", icon: ChartBarIcon },
                                    { title: "Age Requirement", desc: "You should be between 30 and 50 years old.", icon: UserCircleIcon },
                                    { title: "Communication Skills", desc: "Basic Hindi or simple communication skills are helpful.", icon: ChatBubbleLeftEllipsisIcon },
                                    { title: "Work Nature", desc: "You should be patient, caring, clean, and comfortable handling newborn babies.", icon: HeartIcon },
                                    { title: "Health Condition", desc: "You must be physically fit and ready for live-in work when required.", icon: SparklesIcon },
                                    { title: "Trust and Discipline", desc: "Families prefer helpers who are respectful, responsible, and sincere towards work.", icon: ShieldCheckIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-pink-700" />
                                        </div>
                                        <h3 className="font-bold text-pink-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h3>
                                        <p className="text-sm text-pink-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-pink-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-pink-200 font-medium">We help experienced Assam helpers find safe Japa maid jobs in Bangalore and across India without charging any fees.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-pink-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Respectful jobs for women helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Safe and comfortable work environments</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Long-term support and welfare for helpers</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-pink-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Placed jobs for 5,000 or more helpers across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Served 10,000 or more families across the country</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Training aligned with DWSSC under Skill India programme</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-pink-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Clear work details before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Placement only in respectful homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Support whenever work issues happen</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-pink-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Help during job issues</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Assistance with job changes if required</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-pink-300 shrink-0" /> Long-term work opportunities and better salary growth</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">Locations We Serve:</span> Bangalore | Bareilly | Mumbai | Hyderabad | Delhi NCR | Pune | Odisha, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits and Support */}
                <section className="section-padding bg-pink-50 border-b border-pink-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">Benefits and Support for Assam Helpers</h2>
                                <p className="text-base text-pink-700 font-medium">We want you to feel safe and confident when you come to Bangalore for work.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "You get basic training for your Japa Maid job role. A certificate is given after you complete your training.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We give you an EzyHelpers coat and a grooming kit to help you feel confident on day one.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You receive clear written work agreements and our regular support throughout your placement period.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your placement is delayed, you can stay at our NEST women's hostel safely and comfortably.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "You get basic medical coverage for emergency health needs during your work period.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We place you only in homes that treat you with full respect, dignity, and care every day.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good work can lead to a higher salary or placement in other cities or abroad in future.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "Your employer pays your full salary directly to you every month. No delays, no excuses.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you build a strong profile to find better newborn care jobs and grow in your career.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "We help you from your first registration until well after you are placed and settled.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-pink-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-pink-700" />
                                        </div>
                                        <h3 className="font-bold text-pink-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-pink-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-pink-50 rounded-3xl p-8 md:p-12 border border-pink-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-pink-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-pink-700 mb-8">Worried about where to stay when you first reach Bangalore from Assam? NEST is our hostel built for women helpers like you.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-pink-800 shadow-sm border border-pink-200">Safe and secure rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-pink-800 shadow-sm border border-pink-200">Daily meals included</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-pink-800 shadow-sm border border-pink-200">Affordable and comfortable stay</span>
                                </div>
                                
                                <p className="text-md font-bold text-pink-700 mb-8 max-w-2xl mx-auto">
                                    You settle down comfortably before your japa maid job starts. No stress. No last-minute panic at all.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-pink-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-pink-800 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="pink" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-pink-50 border-t border-b border-pink-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">How to Apply for Japa Maid Jobs</h2>
                            <p className="text-base md:text-lg text-pink-700 max-w-2xl mx-auto font-medium">Moving from Assam to Bangalore for work is simple with EzyHelpers.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-pink-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "Contact and Registration", desc: "Call EzyHelpers or fill out the simple form. Share your mother and baby care experience with us." },
                                    { step: 2, title: "Job Matching", desc: "We shortlist suitable Japa maid jobs based on your experience and connect you with families." },
                                    { step: 3, title: "Video Interview and Confirmation", desc: "Talk with the family through a phone or video call and understand job details clearly. If both agree, confirm your joining." },
                                    { step: 4, title: "Training & Start Work", desc: "Attend 3 days of training, understand salary and job details clearly, and start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-pink-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-pink-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-pink-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-pink-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-pink-700">{item.desc}</p>
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
                                className="inline-flex items-center justify-center bg-pink-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-pink-800 shadow-md transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-pink-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Start Your New Journey with EzyHelpers</h2>
                            <p className="text-lg text-pink-200 mb-10 font-medium">Your experience in mother and baby care is your biggest strength. Let us turn it into a rewarding career in Bangalore. Apply today and take that first step forward.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-pink-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                            <h2 className="text-2xl md:text-4xl font-bold text-pink-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
