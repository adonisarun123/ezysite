import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    CheckCircleIcon,
    ClockIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
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
    ArrowRightIcon,
    PhoneIcon,
    UserGroupIcon,
    InformationCircleIcon,
    ShieldExclamationIcon,
    CameraIcon,
    KeyIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Apply for Live-in Couple Security Jobs in Bangalore',
    description: 'Start Couple Security Jobs in Bangalore with EzyHelpers. Direct employer placement, fixed salary, and full support after joining.',
    openGraph: {
        title: 'Apply for Live-in Couple Security Jobs in Bangalore',
        description: 'Start Couple Security Jobs in Bangalore with EzyHelpers. Direct employer placement, fixed salary, and full support after joining.',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/couple-security-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/couple-security-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/couple-security-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/couple-security-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do we both need security experience for a couple watchman jobs in Bangalore?',
        answer: 'No. Freshers from Odisha can apply. We give basic training in security duties and communication before placement in a live-in husband-wife security job in Bangalore.',
    },
    {
        question: 'Will we get a private room as a couple in Live-in jobs?',
        answer: 'Yes. In Live-in security couple jobs in Bangalore, you get a separate quarter or room for private use.',
    },
    {
        question: 'Do we have to pay any fees to EzyHelpers to get this job?',
        answer: 'No. We do not charge any registration fees or placement fees for a Live-in Husband-Wife Security Job in Bangalore.',
    },
    {
        question: 'Will my wife have to do housekeeping or cooking for residents?',
        answer: 'No. In a security couple job, the wife supports security or light common area work only. Cooking or personal housekeeping is a separate role and must be agreed with an extra salary.',
    },
    {
        question: 'What about food arrangements?',
        answer: 'In Live-in jobs, three meals a day are usually provided. Sometimes cooking gas and allowance are given. This is confirmed before joining.',
    },
    {
        question: 'Can we have our children live with us?',
        answer: 'Mostly, quarters are for husband and wife only. Some large societies may allow children, but this must be discussed before joining.',
    },
    {
        question: 'Can we cook our own food if we do not like the provided meals?',
        answer: 'In most Live-in positions, meals are provided. If you prefer cooking, it can be discussed during the interview and agreed before joining.',
    }
]

export default function CoupleSecurityJobsOdishaBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Odisha', href: '/helper-jobs/odisha' },
                        { label: 'Couple Security Jobs' }
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">Live-in Husband-Wife Security Job in Bangalore for Odisha Helpers</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    Strong, alert, and disciplined? Couple Security Jobs in Bangalore are ideal for husband and wife teams seeking stable income, shared accommodation, and long-term security work together.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Joint Placement Opportunity</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Accommodation Provided</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Fixed Monthly Salary</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    Apply for Couple Security Jobs
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

                {/* Different Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Job Location: Bangalore</h2>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">What makes EzyHelpers different</h3>
                                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "Free Job, No Fees", icon: ShieldCheckIcon },
                                    { text: "Direct jobs, no agents involved", icon: UserPlusIcon },
                                    { text: "Clear work and salary explained before joining", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "Salary paid on time, every month", icon: BanknotesIcon },
                                    { text: "Training and guidance provided", icon: AcademicCapIcon },
                                    { text: "Help even after job placement", icon: HeartIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-white p-4 rounded-xl border border-violet-100 shadow-sm`}>
                                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-violet-600" />
                                        </div>
                                        <span className="font-bold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-10 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Types Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Types of Security & Caretaker Jobs in Bangalore</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">Choose the role that best matches your strength and comfort.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-20 h-20 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 shrink-0">
                                        <ShieldExclamationIcon className="w-10 h-10" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Live-in Husband-Wife Security Job in Bangalore</h3>
                                        <p className="text-violet-600 font-bold mb-6 italic">Stay and work together in the same property</p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                    <HomeIcon className="w-5 h-5 text-violet-500" /> Stay
                                                </h4>
                                                <p className="text-gray-600 font-medium">You will stay inside the apartment, villa, bungalow, or independent house.</p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                    <BriefcaseIcon className="w-5 h-5 text-violet-500" /> Duties
                                                </h4>
                                                <p className="text-gray-600 font-medium">Husband manages gate duty and night security. Wife supports with common area cleaning.</p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                    <ClockIcon className="w-5 h-5 text-violet-500" /> Working Time
                                                </h4>
                                                <p className="text-gray-600 font-medium">Full-time stay. Day and night duty in shifts. 2 days leave every month.</p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                    <HeartIcon className="w-5 h-5 text-violet-500" /> Best For
                                                </h4>
                                                <p className="text-gray-600 font-medium">Married couples looking for a safe, long-term Live-in Husband-Wife Security Job in Bangalore.</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-violet-50 p-6 rounded-2xl border border-violet-100 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-violet-600 font-bold text-xl">₹</div>
                                            <div>
                                                <h4 className="text-violet-800 font-bold uppercase tracking-wider text-xs mb-1">Why Choose This Job</h4>
                                                <p className="text-violet-900 font-bold text-lg">You save money because rent and food are free.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Salary for Live-in Couple Security Jobs in Bangalore</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Salary depends on property size, experience, and responsibilities.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                            <table className="w-full text-left">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Job Type</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Monthly Salary</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Stay</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">Live-in Husband-Wife Security Job</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700 text-lg md:text-xl">₹30,000 to ₹35,000 <span className="text-xs md:text-sm text-gray-500 block">combined income</span></td>
                                        <td className="p-4 md:p-6 text-gray-600 font-bold">Free stay and food</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {[
                                { title: "Free stay", icon: HomeIcon },
                                { title: "No rent", icon: BanknotesIcon },
                                { title: "Lower expenses mean higher savings", icon: ChartBarIcon },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-violet-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-gray-800">{item.title}</span>
                                </div>
                            ))}
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

                {/* Responsibilities Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Security Work Responsibilities for Couples from Odisha</h2>
                            <p className="text-gray-600 font-medium max-w-3xl mx-auto">Families respect Odisha couples for loyalty and discipline. In a Live-in Husband-Wife Security Job in Bangalore, your duties may include:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Gate Control", desc: "Monitor the main gate and entry-exit", icon: ShieldCheckIcon },
                                { title: "Register Entry", desc: "Maintain the visitor register and vehicle numbers", icon: ClipboardDocumentListIcon },
                                { title: "Property Patrol", desc: "Patrol the property on day and night shifts", icon: BriefcaseIcon },
                                { title: "CCTV Watch", desc: "Watch CCTV cameras if available", icon: CameraIcon },
                                { title: "Parcel Safety", desc: "Manage parcel delivery and safety", icon: ShieldCheckIcon },
                                { title: "Garden Care", desc: "Basic garden watering and plant care", icon: GlobeAltIcon },
                                { title: "Reporting", desc: "Report minor maintenance issues", icon: InformationCircleIcon },
                                { title: "Common Cleaning", desc: "Clean common areas like the lobby, stairs, and lift", icon: SparklesIcon },
                                { title: "Resident Help", desc: "Help residents with small requests if agreed", icon: HandThumbUpIcon }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md flex items-start gap-4 hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Who Can Apply</h2>
                            <p className="text-gray-600 font-medium">You and your spouse can apply if:</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="bg-violet-50 rounded-[3rem] p-8 md:p-12 border border-violet-100 shadow-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Legally married husband and wife",
                                    "Age between 21 and 50 years",
                                    "Freshers or experienced couples",
                                    "Ready to stay together at the work location",
                                    "Physically fit for security duty",
                                    "Honest and responsible"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-violet-50 shadow-sm font-bold text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105 transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-gray-50">
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
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>Duties are explained clearly before joining</span>
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
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {[
                                { title: "Training & Certificate", desc: "Basic training related to your job role, and a certificate will be given after completion.", icon: AcademicCapIcon, color: "violet" },
                                { title: "Look Professional", desc: "EzyHelpers Coat and grooming kit is provided.", icon: BriefcaseIcon, color: "blue" },
                                { title: "Safety & Security", desc: "Clear work agreements and regular support.", icon: OutlineShieldCheckIcon, color: "purple" },
                                { title: "Stay Support", desc: "Stay at our women’s hostel if placement is delayed.", icon: OutlineHomeModernIcon, color: "pink" },
                                { title: "Health Insurance", desc: "Basic medical coverage for emergencies.", icon: OutlineHeartIcon, color: "red" },
                                { title: "Respectful Work Environment", desc: "Homes that treat you with respect.", icon: HandThumbUpIcon, color: "yellow" },
                                { title: "Future Opportunities", desc: "Good performance can lead to a higher salary or jobs in other cities/abroad.", icon: ChartBarIcon, color: "indigo" },
                                { title: "Timely Salary", desc: "Paid directly by employers every month.", icon: OutlineBanknotesIcon, color: "green" },
                                { title: "Job Profile Creation", desc: "Build a profile to get better maid jobs.", icon: UserCircleIcon, color: "sky" },
                                { title: "Support at Every Step", desc: "Help from registration to after placement.", icon: ChatBubbleLeftEllipsisIcon, color: "orange" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
                                            Women helpers can stay at NEST anytime in Bangalore.
                                        </p>
                                        <p className="text-gray-600 text-lg font-bold">
                                            Safe rooms, daily meals, and affordable stay help you settle comfortably before starting work.
                                        </p>
                                    </div>
                                    <Link
                                        href="/nest-hostel"
                                        className="inline-flex items-center gap-2 text-pink-600 font-bold text-lg hover:gap-3 transition-all group"
                                    >
                                        Learn more about NEST <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" location="Odisha" />

                {/* How to Apply */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">How to Apply for Live-in Couple Jobs</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm text-center">Six Simple Steps From Your Village in Odisha to Your New Workplace</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "1", title: "Contact EzyHelpers", desc: "Call us or fill the form for salary, food, and stay details." },
                                { step: "2", title: "Share Your Details", desc: "Provide your name, age, and experience in Couple job or home services." },
                                { step: "3", title: "Job Information", desc: "Understand duties, working hours, safety rules, and monthly off days clearly." },
                                { step: "4", title: "Travel for Job", desc: "Come to Bangalore and attend basic job training before joining." },
                                { step: "5", title: "Job Interview", desc: "Speak with the family via video call, get selected, and confirm the job." },
                                { step: "6", title: "Start Working", desc: "Begin your patient care job with full support from EzyHelpers." }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-violet-50 p-10 rounded-[3rem] border border-violet-100 shadow-sm">
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display italic">Work together as a couple and earn a steady income in Bangalore.</h3>
                            <p className="text-gray-700 text-lg font-bold mb-8">
                                Start your work journey safely with EzyHelpers, from registration to joining and post-placement.
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
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight italic">
                                Common Questions about Couple Security Jobs
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
