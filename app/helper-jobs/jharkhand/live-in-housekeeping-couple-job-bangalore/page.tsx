import type { Metadata } from 'next'
import Link from 'next/link'
import { whatsappSendUrl } from '@/lib/whatsappUrl'
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
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon,
    GlobeAltIcon,
    AcademicCapIcon,
    CheckBadgeIcon,
    ChatBubbleLeftRightIcon,
    CurrencyRupeeIcon,
    PlusIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Live-in Couple Housekeeping Jobs in Bangalore Apply Now',
    description: 'Husband-wife Live-in Housekeeping Couple jobs in Bangalore. Stay together, earn together with food, room, and job support. No fees.',
    openGraph: {
        title: 'Live-in Couple Housekeeping Jobs in Bangalore Apply Now',
        description: 'Husband-wife Live-in Housekeeping Couple jobs in Bangalore. Stay together, earn together with food, room, and job support. No fees.',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Are food and room provided in 24-Hour jobs in Bangalore?',
        answer: 'Yes. In live-in couple jobs in Bangalore, meals and a separate room or sleeping space are provided so you can live comfortably without extra expenses.',
    },
    {
        question: 'Can couples choose the type of work and house?',
        answer: 'Yes. You can choose work based on your comfort and experience. Options like driver and housekeeper or cook and housekeeping jobs are available.',
    },
    {
        question: 'How is the salary paid for Live-in couple jobs?',
        answer: 'Salary is paid directly by the family every month, usually between the 1st and 10th as discussed before joining.',
    },
    {
        question: 'Can couples take leave in live-in jobs?',
        answer: 'Yes. Couples receive two days off every month. Leave arrangements are decided before joining.',
    },
    {
        question: 'Can couples apply if one partner has no experience?',
        answer: 'Yes. You can apply even if one partner is new. We provide training in cleaning, cooking, and household management so you feel confident.',
    },
    {
        question: 'What if couples face problems at work?',
        answer: 'We support you at every step and help resolve concerns by coordinating with families whenever required.',
    },
    {
        question: 'Are live-in couple jobs good for first-time Bangalore helpers?',
        answer: 'Yes. These jobs are suitable for first-time helpers because we provide training, guidance, and safe placement support.',
    }
]

export default function HousekeepingCoupleJobsBangalorePage() {
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
                        { label: 'Housekeeping Couple Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore/hin"
                                className="w-10 h-5 bg-orange-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"></div>
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-orange-800 via-orange-600 to-orange-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white whitespace-normal">Live-in Housekeeping Couple Jobs in Bangalore for Helpers from Jharkhand</h1>

                            <p className="text-[13px] sm:text-sm md:text-2xl font-semibold mb-6 text-orange-100 max-w-5xl mx-auto leading-relaxed">Moving from Jharkhand to Bangalore should feel safe and simple. We help you find Live-in Housekeeping Couple jobs where you and your partner can work together confidently.</p>

                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ No registration charges</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Direct placement without agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Salary paid directly by the family</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-orange-700 font-bold text-lg py-4 px-12 rounded-xl hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105 leading-loose"
                                >
                                    Apply for Couple Jobs
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 leading-loose"
                                >
                                    Talk to Our Team Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-5 rounded-full bg-orange-50 text-orange-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-orange-100 uppercase">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight leading-tight">Salary and Key Benefits Overview</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-orange-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-600"></div>
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-orange-600">
                                    <BanknotesIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Live-in Housekeeping Couple Jobs</h3>
                                <div className="text-3xl font-extrabold text-orange-600 mb-6 font-display tracking-tight leading-tight">
                                    ₹30,000 to ₹35,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1 leading-snug">combined monthly salary</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-orange-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">Free stay plus free food included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-orange-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">Separate room or comfortable accommodation provided</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-orange-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">24-hour live-in work with proper rest time</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-50 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-black text-gray-900 font-display mb-3 leading-loose">What You Get with EzyHelpers</h3>
                                    <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                    {[
                                        { text: "Clear duties explained before joining", icon: ClipboardDocumentListIcon },
                                        { text: "Guidance and support throughout placement", icon: UserGroupIcon },
                                        { text: "Respectful family work environment", icon: HeartIcon },
                                        { text: "Stable long-term job opportunities", icon: StarIcon },
                                        { text: "Direct monthly salary payment by employers", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-orange-50/30 p-4 rounded-xl border border-orange-50 hover:bg-orange-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-orange-100/50 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4.5 h-4.5 text-orange-600" />
                                            </div>
                                            <span className="font-extrabold text-gray-800 text-xs leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-orange-600 text-white font-extrabold text-lg py-4 px-14 rounded-xl hover:bg-orange-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center"
                                    >
                                        Apply for Couple Jobs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Types Section */}
                <section className="section-padding bg-orange-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white leading-tight">Types of Live-in Housekeeping Couple Jobs in Bangalore</h2>
                            <p className="text-orange-100 max-w-3xl mx-auto font-medium leading-relaxed">As a Live-in Housekeeping Couple, you and your partner help families manage everyday household work efficiently. When couples work together, families feel comfortable and work becomes more organised.</p>
                            <div className="w-24 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <h3 className="text-xl md:text-3xl font-bold mb-6 text-orange-100 leading-loose">Live-in Housekeeping Couple Jobs</h3>
                            <p className="text-base md:text-lg mb-10 text-orange-50/90 font-medium leading-relaxed">These roles help you save rent and living expenses while both partners earn together.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-orange-200 border-b border-white/10 pb-3 leading-loose">
                                        Type of Work
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">You and your spouse stay together in the employer’s home</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Separate room or private space provided</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Free meals included</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Work Hours */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-orange-200 border-b border-white/10 pb-3 leading-loose">
                                        Work Hours
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Daily cleaning, cooking, and household support</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Proper rest time during the day</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Two monthly offs decided before joining</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Best For */}
                                <div className="md:col-span-2">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-orange-200 border-b border-white/10 pb-3 leading-loose">
                                        Best For
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Couples from Jharkhand</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Couples searching for jobs with food and accommodation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-orange-50 text-sm md:text-base leading-relaxed">Couples looking for trustworthy work opportunities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-center mt-12">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex py-4 px-10 bg-white text-orange-900 font-black rounded-xl hover:bg-orange-50 transition-all shadow-2xl transform hover:scale-105 leading-loose"
                                >
                                    Talk to Our Team Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">Live-in Housekeeping Couple Work Responsibilities</h2>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We always make sure responsibilities are explained clearly so you know exactly what work you will do.</p>
                                <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-orange-50 rounded-3xl p-8 md:p-10 border border-orange-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 leading-loose">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-orange-600" />
                                        Daily Duties
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'Sweep and mop floors',
                                            'Clean rooms, kitchen, and bathrooms',
                                            'Wash utensils',
                                            'Dust furniture and surfaces',
                                            'Cook simple meals if required',
                                            'Keep the house neat and organised'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-orange-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-bold leading-tight">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Additional Duties */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-orange-400 leading-loose">
                                        <SparklesIcon className="w-8 h-8" />
                                        Additional Duties If Agreed
                                    </h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'Basic gardening support',
                                            'Small household tasks',
                                            'Only duties discussed before joining'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-orange-50 font-bold leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-orange-300 font-bold italic text-sm leading-loose">Clear Expectations. Respectful Work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Grid */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">Where You Can Get Live-in Housekeeping Couple Jobs in Bangalore</h2>
                            <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Apartments", desc: "Daily cleaning and home support for working families.", icon: BuildingOfficeIcon },
                                { title: "Gated Communities", desc: "Regular housekeeping and maintenance work.", icon: BuildingOfficeIcon },
                                { title: "Villas", desc: "Full home care with stable long-term jobs.", icon: HomeModernIcon },
                                { title: "Family Homes", desc: "Support families in managing daily household routines.", icon: HomeIcon },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                                        <item.icon className="w-6 h-6 text-current" />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm font-semibold text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Categories Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">Other Couple Job Categories in Bangalore</h2>
                            <p className="text-gray-600 text-lg font-medium leading-relaxed">Along with Live-in Housekeeping Couple jobs in Bangalore, we also help couples explore other safe work options</p>
                            <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Driver and Housekeeper Couple Jobs", desc: "One partner manages driving duties while the other handles cleaning and home support.", icon: BriefcaseIcon },
                                { title: "Cook and Housekeeper Couple Jobs", desc: "Cooking meals for the family along with daily housekeeping responsibilities.", icon: StarIcon },
                                { title: "Caretaker and Housekeeping Couple Jobs", desc: "One partner supports elderly care or child care while the other manages cleaning tasks.", icon: HeartIcon }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12 px-4">
                            <p className="text-orange-600 font-extrabold text-lg md:text-2xl leading-normal">We help you choose work based on your skills and comfort.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-8 md:p-16 shadow-xl border border-orange-100 text-center px-4">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">Who Can Apply</h2>
                            <p className="text-base md:text-xl text-gray-600 mb-12 font-bold leading-relaxed">Husband–Wife Couples Applying Together</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                                {[
                                    { text: "Husband-wife couples only", icon: UserGroupIcon },
                                    { text: "Age: 20–40 years", icon: ClockIcon },
                                    { text: "Basic schooling is sufficient", icon: AcademicCapIcon },
                                    { text: "Freshers and experienced helpers welcome", icon: StarIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 h-full">
                                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-black text-gray-800 leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-white/50 p-6 rounded-2xl inline-block border border-white">
                                <p className="text-orange-700 font-black text-lg md:text-xl leading-loose">Basic Training is provided before placement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white text-center leading-tight">About EzyHelpers – Trusted Helper Jobs</h2>
                                <p className="text-orange-100 text-base md:text-2xl mb-16 text-center max-w-4xl mx-auto font-bold leading-relaxed">
                                    We connect helpers with safe Domestic Helper jobs across India without charging any fees.
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-inner">
                                        <h3 className="text-xl font-black mb-6 text-orange-300 uppercase tracking-wider leading-loose">We Focus On</h3>
                                        <ul className="space-y-4 text-center lg:text-left">
                                            {[
                                                'Respectful jobs in Bangalore',
                                                'Strict safety and background checks',
                                                'Helper welfare and long-term support'
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                                    <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-black mb-4 text-orange-300 uppercase tracking-wider leading-loose">Our Belief</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-tight text-center">
                                            "Good Homes for Helpers. Good Helpers for Families."
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-20">
                                    <h3 className="text-xl md:text-3xl font-black mb-10 text-center text-orange-300 leading-loose">Why Helpers Trust EzyHelpers</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { text: "Provided jobs for 5,000+ helpers", highlight: true },
                                            { text: "Supported 10,000+ families", highlight: true },
                                            { text: "Training aligned with Skill India (DWSSC)" },
                                            { text: "Placement only in respectful homes" },
                                            { text: "Duties explained clearly before joining" },
                                            { text: "Continuous support after placement" },
                                            { text: "Help during misunderstandings or job issues" },
                                            { text: "Assistance with job changes if needed" },
                                            { text: "Regular salary and long-term work opportunities" },
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-5 rounded-xl border border-white/20 flex items-center gap-4 ${item.highlight ? 'bg-orange-700/50 scale-105 shadow-lg' : 'bg-white/5'}`}>
                                                <CheckCircleIcon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                                                <span className="font-bold text-sm md:text-base leading-tight">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-black mb-4 text-orange-200 uppercase tracking-widest flex items-center justify-center gap-3 leading-loose">
                                        <GlobeAltIcon className="w-6 h-6" /> Locations We Serve
                                    </h3>
                                    <p className="text-base md:text-xl font-bold mb-8 text-orange-50 leading-relaxed">
                                        Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Training & Certificate", desc: "Basic training related to your job role, and a certificate will be given after completion.", icon: AcademicCapIcon },
                                { title: "Look Professional", desc: "Coat and grooming kit provided.", icon: StarIcon },
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
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-bold">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-600 to-orange-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
                            <div className="p-8 md:p-12 text-white flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display leading-tight">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-orange-100 text-lg mb-8 leading-relaxed font-bold">
                                    Women helpers can stay at NEST anytime in Bangalore. The hostel offers safe, comfortable rooms, daily meals, and very affordable rates, making it easy for you to settle in and start your work.
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-2 bg-white text-orange-700 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all leading-loose"
                                >
                                    Learn more about NEST <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 h-64 md:h-[450px] bg-orange-500/20 flex items-center justify-center p-8">
                                <HomeModernIcon className="w-32 h-32 md:w-48 md:h-48 text-white/20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="orange" />

                {/* Why Choose Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8 font-display leading-tight">Why Choose EzyHelpers for Couple Jobs in Bangalore?</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Completely Free Service", desc: "No registration fees or hidden charges. We help you for free.", icon: CheckBadgeIcon },
                                        { title: "Direct Communication", desc: "We connect you directly with the family. NO middle agents involved.", icon: ChatBubbleLeftRightIcon },
                                        { title: "Safe and Secure Environment", desc: "Work with verified families in safe neighbourhoods of Bangalore.", icon: ShieldCheckIcon },
                                        { title: "Steady Direct Salary", desc: "Get your salary directly from the family without any cuts or delays.", icon: CurrencyRupeeIcon }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-orange-600 shadow-sm border border-gray-100 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-lg text-gray-900 mb-1 leading-tight">{item.title}</h3>
                                                <p className="text-gray-600 font-bold text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative">
                                <div className="aspect-square bg-orange-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 text-orange-600/10 to-transparent"></div>
                                    <UserGroupIcon className="w-48 h-48 text-orange-600" />
                                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-50 max-w-[200px]">
                                        <p className="text-orange-600 font-extrabold text-sm leading-loose">Helping couples build a better future together in Bangalore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-20">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight leading-tight">How to Apply for Live-in Housekeeping Couple Jobs</h2>
                            <p className="text-gray-600 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">We keep the process simple so you can start quickly.</p>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto relative px-4">
                            {/* Central Connecting Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-100 hidden md:block"></div>

                            <div className="space-y-16 md:space-y-24">
                                {[
                                    {
                                        step: 1,
                                        title: "Contact Us",
                                        desc: "Call or fill the form. We explain job duties, stay details, and salary clearly so you understand everything."
                                    },
                                    {
                                        step: 2,
                                        title: "Share Details",
                                        desc: "Provide your name, age, experience, and skills like cleaning, cooking, or caregiving."
                                    },
                                    {
                                        step: 3,
                                        title: "Training and Job Start",
                                        desc: "Attend training, complete verification, interview with the family, and start work with full support."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Content Card */}
                                        <div className="w-full md:w-[42%] mb-8 md:mb-0 transition-all duration-300 hover:scale-[1.02] z-10">
                                            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] relative overflow-hidden group">
                                                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                
                                                {/* Step circle for mobile (hidden on md+) */}
                                                <div className="flex md:hidden w-12 h-12 bg-indigo-600 text-white rounded-full items-center justify-center font-black text-xl shadow-lg border-2 border-white mb-4">
                                                    {item.step}
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-tight">{item.title}</h3>
                                                <p className="text-gray-600 font-bold leading-relaxed text-sm md:text-base">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Center Number Circle for Desktop (hidden on sm/xs) */}
                                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center justify-center z-20 pointer-events-none">
                                            <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-2xl md:text-4xl shadow-[0_10px_30px_-5px_rgba(79,70,229,0.8)] border-4 border-white">
                                                {item.step}
                                            </div>
                                        </div>

                                        {/* Empty Space for layout balancing */}
                                        <div className="hidden md:block md:w-[42%]"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 md:mt-32 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-5 px-16 bg-indigo-600 text-white font-black text-xl rounded-2xl hover:bg-indigo-700 transition-all shadow-[0_20px_50px_-10px_rgba(79,70,229,0.5)] transform hover:scale-105 leading-loose"
                                >
                                    Apply Now or Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-padding bg-indigo-900 text-white overflow-hidden relative border-t border-indigo-800">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="container-custom relative z-10 text-center">
                        <h2 className="text-3xl md:text-6xl font-black mb-6 font-display text-white tracking-tight px-4 leading-tight">A Safe Beginning for Your New Journey</h2>
                        <p className="text-indigo-100 text-lg md:text-2xl mb-14 max-w-4xl mx-auto leading-relaxed font-bold opacity-90 px-4">
                            We help couples build a stable and respectful life in Bangalore where you stay together, support each other, and move forward with confidence.
                        </p>
                        <Link
                            href="/helper-registration"
                            className="w-[90%] sm:w-auto inline-flex py-5 px-16 bg-white text-indigo-900 font-black text-xl rounded-2xl hover:bg-indigo-50 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.25)] transform hover:scale-105 leading-loose"
                        >
                            Start Your Journey Today
                        </Link>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">Common Questions from Helpers</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
