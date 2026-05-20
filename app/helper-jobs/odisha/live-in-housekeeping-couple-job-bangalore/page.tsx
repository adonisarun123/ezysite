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
    HomeModernIcon as OutlineHomeModernIcon,
    ChartBarIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ArrowRightIcon,
    PhoneIcon,
    InformationCircleIcon,
    TruckIcon,
    SunIcon,
    UserIcon as OutlineUserIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'
import { JobPostingSchema } from '@/components/schema'

export const metadata: Metadata = {
    title: 'Trusted Live-in Housekeeping Couple in Bangalore',
    description: 'Start your Live-in Housekeeping Couple in Bangalore job with EzyHelpers. Direct employer payment, training, and safe placements.',
    openGraph: {
        title: 'Trusted Live-in Housekeeping Couple in Bangalore',
        description: 'Start your Live-in Housekeeping Couple in Bangalore job with EzyHelpers. Direct employer payment, training, and safe placements.',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Can we look for a couple job if we have a small child?',
        answer: 'For a 24 hour Live in Couple job in Bangalore, it is difficult to manage a young child. Most employers prefer couples without children staying in. Please discuss openly with us.',
    },
    {
        question: 'Who pays us? The family or EzyHelpers?',
        answer: 'The family pays you directly. We do not take or handle your salary. We only ensure you receive payment on time.',
    },
    {
        question: 'What if we face problems or mistreatment from the family?',
        answer: 'Contact us immediately if there is a salary delay, overwork, or disrespect. We speak with the family and solve the issue. If not solved, we help you change jobs without fees.',
    },
    {
        question: 'Can we change jobs if we do not like the family?',
        answer: 'Yes, but first try to resolve it through our support. If the situation is not good, we arrange a better placement.',
    },
    {
        question: 'What happens if we want to return to Odisha permanently?',
        answer: 'You can return anytime. Give one month\'s notice, collect pending salary, and leave properly so your job record stays good for the future.',
    }
]

export default function HousekeepingCoupleJobsOdishaBangalorePage() {
    return (
        <>
            <JobPostingSchema
                title="Live-in Housekeeping Couple Jobs in Bangalore"
                description="Trusted live-in housekeeping couple jobs in Bangalore for husband-wife teams from Odisha. Direct employer payment, training, safe placements, and on-site accommodation."
                datePosted="2026-01-01"
                validThrough="2027-01-01"
                employmentType="FULL_TIME"
                jobLocation={{ addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' }}
                applicantLocationRequirements="IN"
            />
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Odisha', href: '/helper-jobs/odisha' },
                        { label: 'Housekeeping Couple Jobs' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-violet-800 via-violet-500 to-violet-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">Live-in Couple Jobs for Housekeeping in Bangalore</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    Want to work together as a couple? Live-in Housekeeping Couple Jobs in Bangalore provide shared stay, divided responsibilities, and stable income for husband and wife teams.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Free Stay for a Couple</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Clearly Divided Work</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Stable Combined Income</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    Apply for Couple Jobs
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-violet-900/50 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-xl hover:bg-violet-900/70 border border-violet-500/30 transition-colors shadow-lg flex items-center gap-2"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    Talk to Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offer Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">What 24-Hour Couple Jobs in Bangalore Offer</h2>
                            <p className="text-gray-600 font-bold max-w-2xl mx-auto">In a Live in Couple job in Bangalore for housekeeping, you both stay inside the employer’s house.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Accommodation", desc: "You get a separate room or private sleeping space. We make sure your dignity and privacy are respected.", icon: HomeIcon },
                                { title: "Food", desc: "Three daily meals are provided by the employer. You do not spend money on groceries.", icon: SunIcon },
                                { title: "Work", desc: "Daily household and caretaker responsibilities are shared between husband and wife. Rest time and 2 off-days included.", icon: BriefcaseIcon },
                            ].map((item, index) => (
                                <div key={index} className="bg-violet-50 rounded-3xl p-8 border border-violet-100 shadow-xl hover:shadow-2xl transition-all group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-violet-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed italic text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center max-w-3xl mx-auto bg-violet-900 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold mb-4 italic">Best Suitable For</h3>
                            <p className="text-lg font-bold text-violet-50 leading-relaxed">
                                Couples from Odisha who want a safe, long-term Live-in-Couple job in Bangalore for husband and wife with stable income.
                            </p>
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold py-3 px-10 rounded-xl mt-6 hover:bg-violet-50 transition-colors shadow-lg"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Work Responsibilities for Live-in Couples</h2>
                            <p className="text-gray-600 font-bold max-w-3xl mx-auto italic">Families in Bangalore value couples from Odisha for teamwork and honesty.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                    <SparklesIcon className="w-6 h-6 text-violet-600" /> Common Shared Duties
                                </h3>
                                <ul className="grid grid-cols-1 gap-4 font-bold text-gray-700">
                                    {[
                                        "Sweep and mop the house daily",
                                        "Clean rooms, bathrooms, and balconies",
                                        "Wash clothes and dry them properly",
                                        "Iron clothes and arrange cupboards",
                                        "Wash utensils after meals",
                                        "Keep the kitchen clean and hygienic",
                                        "Help with small household work when needed",
                                        "Buy groceries or daily items if asked"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-violet-50 p-4 rounded-xl border border-violet-100">
                                            <CheckCircleIcon className="w-5 h-5 text-violet-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4 uppercase tracking-tight">
                                    <InformationCircleIcon className="w-6 h-6 text-blue-600" /> Special Duties (Decided Before Joining)
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { text: "Cooking simple home food", icon: SparklesIcon },
                                        { text: "Driving with valid licence", icon: TruckIcon },
                                        { text: "Childcare support", icon: HeartIcon },
                                        { text: "Elderly Care assistance", icon: HeartIcon },
                                        { text: "Gardening work", icon: GlobeAltIcon },
                                        { text: "Pet Care", icon: OutlineUserIcon }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-violet-200 hover:bg-violet-50 transition-all">
                                            <item.icon className="w-6 h-6 text-violet-500 mb-2" />
                                            <span className="font-bold text-gray-800 text-sm">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Types Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Types of Live-in Couple Jobs in Bangalore</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-sm italic">Choose work that matches both your skills and comfort.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                            <table className="w-full text-left font-bold">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-xs md:text-sm">Job Type</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-xs md:text-sm">Best For</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-xs md:text-sm">Key Benefits</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        { type: "Full Property Caretaker", best: "Couples managing large homes/villas", benefit: "Higher salary, independent living, responsibility" },
                                        { type: "Cook and Housekeeping", best: "Wife cooks, husband manages cleaning", benefit: "Shared workload, comfortable stay, interaction" },
                                        { type: "Elderly Care Couple Jobs", best: "Couples caring for senior citizens", benefit: "Lighter work, respectful environment" },
                                        { type: "Driver and Housekeeping", best: "Husband drives, wife manages housework", benefit: "Multiple skills valued, better pay" }
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-violet-50 transition-colors">
                                            <td className="p-4 md:p-6 text-violet-900 text-sm md:text-base">{item.type}</td>
                                            <td className="p-4 md:p-6 text-gray-700 text-xs md:text-sm italic">{item.best}</td>
                                            <td className="p-4 md:p-6 text-gray-600 text-xs md:text-sm">{item.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg"
                            >
                                <PhoneIcon className="w-6 h-6 mr-2" /> Contact Us Today
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic leading-tight">Salary for Live-in Couple Jobs in Bangalore</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto italic leading-relaxed">Everything is explained clearly before you travel from Odisha.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
                                <div className="space-y-8">
                                    <div className="bg-violet-50 p-6 rounded-3xl border border-violet-100 flex items-center gap-6">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-violet-600 shadow-sm font-bold text-2xl">₹</div>
                                        <div>
                                            <h4 className="text-violet-800 font-bold uppercase tracking-widest text-xs mb-1 italic">Monthly Salary</h4>
                                            <p className="text-violet-900 font-bold text-2xl md:text-3xl">₹30,000 - ₹35,000</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 font-bold text-gray-700">
                                        <div className="flex items-center gap-3">
                                            <SunIcon className="w-6 h-6 text-green-500" />
                                            <span>Free meals provided</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <HomeIcon className="w-6 h-6 text-green-500" />
                                            <span>Free separate room or private sleeping space</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-violet-900 text-white p-8 md:p-12 rounded-[2rem] shadow-xl relative group">
                                    <div className="absolute inset-0 bg-violet-800 rounded-[2rem] transform group-hover:scale-105 transition-transform -z-10"></div>
                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-4">Savings Benefit</h4>
                                    <p className="text-2xl md:text-3xl font-bold font-display italic leading-tight">Most of your income can be saved and sent back to Odisha</p>
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-white text-violet-700 font-bold py-3 px-10 rounded-xl mt-8 hover:bg-violet-50 transition-colors shadow-lg"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                             </div>
                        </div>
                    </div>
                </section>

                {/* Eligibility Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Who Can Apply for Live-in Couple Jobs</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Husband and wife are legally married",
                                    "Age between 21 and 50 years",
                                    "Basic education is enough",
                                    "Freshers are welcome, and training is provided",
                                    "Experienced couples get a better salary",
                                    "Ready to work honestly and follow house rules"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm font-bold text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why it works section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Why Live-in Housekeeping Couple Jobs Works Best for Odisha Couples</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {[
                                { title: "Stay Together", desc: "You live and work in the same home and support each other daily.", icon: HomeIcon },
                                { title: "Double Income Single Expense", desc: "Two people earning. No rent. No food cost. More savings.", icon: BanknotesIcon },
                                { title: "Safe Environment", desc: "We place you in respectful families who value privacy.", icon: ShieldCheckIcon },
                                { title: "Stronger Future Planning", desc: "Save for children's education, a new house in Odisha, or a small business.", icon: ChartBarIcon }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md flex flex-col items-center text-center group hover:bg-violet-600 transition-colors duration-300">
                                    <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 text-violet-600 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 font-bold text-sm leading-relaxed group-hover:text-violet-50 transition-colors italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="/helper-registration"
                                className="bg-violet-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105 transition-all"
                            >
                                Apply for Live-in Couple Jobs
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-violet-800 to-violet-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white italic">About EzyHelpers – Trusted Helper Jobs</h2>
                                    <p className="text-violet-100 text-lg md:text-xl font-bold">
                                        We connect helpers like you with safe Domestic Helper jobs across India without charging any fees.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <HandThumbUpIcon className="w-6 h-6" /> We Focus On
                                        </h3>
                                        <ul className="space-y-3 font-bold text-violet-50">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">Respectful jobs in Bangalore</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">Strict safety and background checks</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">Helper welfare and long-term support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <ShieldCheckIcon className="w-6 h-6" /> Why Helpers Trust EzyHelpers
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-bold">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Provided jobs for 5,000+ helpers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Supported 10,000+ families</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span className="leading-tight">Training aligned with Domestic Workers Sector Skill Council (DWSSC) under Skill India</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Placement only in respectful homes</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Continuous support after placement</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Help during misunderstandings or job issues</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Assistance with job changes if needed</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Regular salary and long-term work opportunities</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-violet-900/50 rounded-2xl p-6 border border-violet-700/50 backdrop-blur-sm font-bold">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <HeartIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">Our Belief</h4>
                                            <p className="text-white">Good Homes for Helpers. Good Helpers for Families.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">Locations We Serve</h4>
                                            <p className="text-sm text-violet-50">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.</p>
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
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {[
                                { title: "Training & Certificate", desc: "Basic training related to your job role, and a certificate will be given after completion.", icon: AcademicCapIcon, color: "violet" },
                                { title: "Look Professional", desc: "EzyHelpers Coat and grooming kit is provided.", icon: BriefcaseIcon, color: "blue" },
                                { title: "Safety & Security", desc: "Clear work agreements and regular support.", icon: ShieldCheckIcon, color: "purple" },
                                { title: "Stay Support", desc: "Stay at our women’s hostel if placement is delayed.", icon: OutlineHomeModernIcon, color: "pink" },
                                { title: "Health Insurance", desc: "Basic medical coverage for emergencies.", icon: HeartIcon, color: "red" },
                                { title: "Respectful Work Environment", desc: "Homes that treat you with respect.", icon: HandThumbUpIcon, color: "yellow" },
                                { title: "Future Opportunities", desc: "Good performance can lead to a higher salary or jobs in other cities/abroad.", icon: ChartBarIcon, color: "indigo" },
                                { title: "Timely Salary", desc: "Paid directly by employers every month.", icon: BanknotesIcon, color: "green" },
                                { title: "Job Profile Creation", desc: "Build a profile to get better maid jobs.", icon: UserCircleIcon, color: "sky" },
                                { title: "Support at Every Step", desc: "Help from registration to after placement.", icon: ChatBubbleLeftEllipsisIcon, color: "orange" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-bold text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display italic">NEST – Safe Hostel for Women Helpers</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg font-bold">
                                            Women helpers can stay at NEST anytime in Bangalore. Safe rooms, daily meals, and affordable stay help you settle comfortably before starting work.
                                        </p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-pink-600 font-bold text-lg hover:gap-3 transition-all group"
                                    >
                                        Contact us about accommodation <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" location="Odisha" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic leading-tight">How to Apply for Live-in Couple Jobs</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs md:text-sm text-center italic">Six Simple Steps From Your Village in Odisha to Your New Workplace</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "1", title: "Contact EzyHelpers", desc: "Call us or fill the form for salary, food, and stay details." },
                                { step: "2", title: "Share Your Details", desc: "Provide your name, age, and experience in a housekeeping job or home services." },
                                { step: "3", title: "Job Information", desc: "Understand duties, working hours, safety rules, and monthly off days clearly." },
                                { step: "4", title: "Travel for Job", desc: "Come to Bangalore and attend basic job training before joining." },
                                { step: "5", title: "Job Interview", desc: "Speak with the family via video call, get selected, and confirm the job." },
                                { step: "6", title: "Start Working", desc: "Begin your patient care job with full support from EzyHelpers." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
                                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-xs font-bold leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-white p-10 rounded-[3rem] border border-violet-100 shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display italic leading-tight px-4">Apply now and start a safer, better future with EzyHelpers</h3>
                            <p className="text-gray-700 text-lg font-bold mb-8 italic">
                                If you and your spouse want to work together, stay together, and earn with dignity, this Live-in Couple job in Bangalore for husband and wife is the right opportunity for you.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-white text-violet-700 font-bold py-4 px-12 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all text-lg shadow-sm"
                                >
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight italic">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
