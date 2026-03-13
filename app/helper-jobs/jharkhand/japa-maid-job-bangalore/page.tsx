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

export const metadata: Metadata = {
    title: 'Japa Maid Job in Bangalore | Experienced Jharkhand Helpers',
    description: 'Apply for a Japa Maid job in Bangalore for experienced women from Jharkhand. Live-in newborn care jobs with safe homes, food, stay and support.',
    openGraph: {
        title: 'Japa Maid Job in Bangalore | Experienced Jharkhand Helpers',
        description: 'Apply for a Japa Maid job in Bangalore for experienced women from Jharkhand. Live-in newborn care jobs with safe homes, food, stay and support.',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/japa-maid-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/japa-maid-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Is experience mandatory?',
        answer: 'Yes. At least 5 years in newborn and mother care is required.',
    },
    {
        question: 'How long does a Japa Maid job last?',
        answer: 'Typically 40 days to 3 months. Some families may offer full-time positions later.',
    },
    {
        question: 'Can male helpers or couples apply?',
        answer: 'No. Only experienced women helpers can apply.',
    },
    {
        question: 'Are food and accommodation provided?',
        answer: 'Yes. Live-in Japa Maid Jobs include free food and a separate room.',
    },
    {
        question: 'Do Japa Maids do housecleaning?',
        answer: 'No. Only baby and mother care unless agreed otherwise.',
    },
    {
        question: 'Can Japa Maid jobs pay more than regular maid jobs?',
        answer: 'Yes. Postnatal care jobs usually pay more due to specialised skills and experience.',
    },
    {
        question: 'What is the difference between Japa Maid Jobs and regular babysitter jobs?',
        answer: 'Japa Maid Jobs focus on postpartum care for newborns and mothers. Babysitter jobs do not require this level of newborn care experience.',
    }
]

export default function JapaMaidJobBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Jharkhand', href: '/helper-jobs/jharkhand' },
                        { label: 'Japa Maid Job' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/japa-maid-job-bangalore/hin"
                                className="w-10 h-5 bg-pink-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"></div>
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-pink-800 via-pink-600 to-pink-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white whitespace-normal">Japa Maid Job in Bangalore for Helpers from Jharkhand</h1>

                            <p className="text-[13px] sm:text-sm md:text-2xl font-semibold mb-6 text-pink-100 max-w-5xl mx-auto leading-relaxed">Japa Maids are in high demand in Bangalore! Experienced women from Jharkhand can secure safe, respected jobs caring for mothers and newborns, live comfortably, and build a stable future with EzyHelpers.</p>

                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ No registration charges</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Direct placement without agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Salary paid directly by the family</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-pink-700 font-bold text-lg py-4 px-12 rounded-xl hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105 leading-loose"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 leading-loose"
                                >
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-5 rounded-full bg-pink-50 text-pink-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-pink-100 uppercase">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight leading-tight">Salary and Key Benefits Overview</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-pink-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-pink-600"></div>
                                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-pink-600">
                                    <BanknotesIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-loose">Live-in Japa Maid Jobs</h3>
                                <div className="text-3xl font-black text-pink-600 mb-6 font-display tracking-tight leading-tight">
                                    ₹25,000 to ₹30,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1 leading-loose">monthly salary</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-pink-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">Free food and a separate room or sleeping space are provided</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-pink-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">24-hour newborn and mother care with proper rest time</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-50 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-black text-gray-900 font-display mb-3 leading-loose">What You Get with EzyHelpers</h3>
                                    <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                    {[
                                        { text: "Clear duties explained before joining", icon: ClipboardDocumentListIcon },
                                        { text: "Guidance and support throughout placement", icon: UserGroupIcon },
                                        { text: "Respectful family work environment", icon: HeartIcon },
                                        { text: "Stable long-term job opportunities", icon: StarIcon },
                                        { text: "Direct monthly salary payment by employers", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-pink-50/30 p-4 rounded-xl border border-pink-50 hover:bg-pink-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-pink-100/50 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4.5 h-4.5 text-pink-600" />
                                            </div>
                                            <span className="font-extrabold text-gray-800 text-xs leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-pink-600 text-white font-black text-lg py-4 px-14 rounded-xl hover:bg-pink-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center leading-loose"
                                    >
                                        Apply for Japa Maid Jobs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Types Section */}
                <section className="section-padding bg-pink-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white leading-tight">Live-in Japa Maid Jobs in Bangalore– Work Details</h2>
                            <p className="text-pink-100 max-w-3xl mx-auto font-medium leading-relaxed">Live-In Japa Maid Jobs are ideal for experienced women from Jharkhand who need stay and food in Bangalore.</p>
                            <div className="w-24 h-1 bg-pink-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-pink-200 border-b border-white/10 pb-3 leading-loose">
                                        Type of Work
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">Stay inside the employer's house 24/7</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">A separate room or sleeping space is provided</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">Free food is included</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Work Hours */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-pink-200 border-b border-white/10 pb-3 leading-loose">
                                        Work Hours
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">24-hour newborn baby care and mother support</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">Proper rest time during the day</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">2 monthly offs as discussed before joining</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Best For */}
                                <div className="md:col-span-2">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-pink-200 border-b border-white/10 pb-3 leading-loose">
                                        Best For
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">Experienced women from Jharkhand</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">Helpers who want to save money on rent and food</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">Helpers without accommodation in the city</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">Live-in Japa Maid Work Responsibilities</h2>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We always make sure responsibilities are explained clearly so you know exactly what work you will do.</p>
                                <div className="w-24 h-1 bg-pink-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-pink-50 rounded-3xl p-8 md:p-10 border border-pink-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 leading-loose">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-pink-600" />
                                        Daily Duties
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'Feed the newborn baby',
                                            'Diaper changing & baby bathing',
                                            'Monitor baby’s sleep and safety',
                                            'Clean baby bottles and toys',
                                            'Baby massage & mother massage',
                                            'Help mother rest and recover',
                                            'Keep baby’s and mother’s room clean',
                                            'Wash baby clothes separately'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-pink-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-bold leading-tight">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Additional Duties */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-pink-400 leading-loose">
                                        <SparklesIcon className="w-8 h-8" />
                                        Additional Duties
                                    </h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'Prepare healthy food for mother',
                                            'Wash baby bedsheets and clothes',
                                            'Organise baby care items',
                                            'Only agreed work; no hidden tasks'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-pink-50 font-bold leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-pink-300 font-bold italic text-sm leading-loose">Clear Expectations. Respectful Work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-pink-50 rounded-3xl p-8 md:p-16 shadow-xl border border-pink-100 text-center px-4">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">Who Can Apply</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                                {[
                                    { text: "Experienced women only (freshers not eligible)", icon: UserGroupIcon },
                                    { text: "Age: 35–45 years", icon: ClockIcon },
                                    { text: "Education: Basic reading and writing are enough", icon: AcademicCapIcon },
                                    { text: "Experience: Minimum 5 years in mother and baby care required", icon: StarIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-pink-100 h-full">
                                        <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0 text-pink-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-black text-gray-800 leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-white/50 p-6 rounded-2xl inline-block border border-white">
                                <p className="text-pink-700 font-black text-lg md:text-xl leading-loose">Male helpers and couples are not applicable for this role.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Duration Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-pink-100">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 font-display text-center leading-tight">Job Duration</h2>
                            <div className="space-y-6">
                                {[
                                    "Typical: 40 days to 3 months",
                                    "Some families may later offer full-time newborn caregiver positions",
                                    "Duration depends on mother’s recovery and family needs"
                                ].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircleIcon className="w-5 h-5 text-pink-600" />
                                        </div>
                                        <p className="text-lg text-gray-700 font-bold">{text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-4 px-10 bg-pink-600 text-white font-black rounded-xl hover:bg-pink-700 transition-all shadow-xl transform hover:scale-105 leading-loose"
                                >
                                    Check Availability
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-pink-800 to-pink-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white text-center leading-tight">About EzyHelpers – Trusted Helper Jobs</h2>
                                <p className="text-pink-100 text-base md:text-2xl mb-16 text-center max-w-4xl mx-auto font-bold leading-relaxed">
                                    We connect helpers with safe Domestic Helper jobs across India without charging any fees.
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-inner">
                                        <h3 className="text-xl font-black mb-6 text-pink-300 uppercase tracking-wider leading-loose">We Focus On</h3>
                                        <ul className="space-y-4 text-center lg:text-left">
                                            {[
                                                'Respectful jobs in Bangalore',
                                                'Strict safety and background checks',
                                                'Helper welfare and long-term support'
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                                    <div className="w-2 h-2 rounded-full bg-pink-400 shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-black mb-4 text-pink-300 uppercase tracking-wider leading-loose">Our Belief</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-tight text-center">
                                            "Good Homes for Helpers. Good Helpers for Families."
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-20">
                                    <h3 className="text-xl md:text-3xl font-black mb-10 text-center text-pink-300 leading-loose">Why Helpers Trust EzyHelpers</h3>
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
                                            <div key={idx} className={`p-5 rounded-xl border border-white/20 flex items-center gap-4 ${item.highlight ? 'bg-pink-700/50 scale-105 shadow-lg' : 'bg-white/5'}`}>
                                                <CheckCircleIcon className="w-6 h-6 text-pink-400 flex-shrink-0" />
                                                <span className="font-bold text-sm md:text-base leading-tight">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-black mb-4 text-pink-200 uppercase tracking-widest flex items-center justify-center gap-3 leading-loose">
                                        <GlobeAltIcon className="w-6 h-6" /> Locations We Serve
                                    </h3>
                                    <p className="text-base md:text-xl font-bold mb-8 text-pink-50 leading-relaxed">
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
                            <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
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
                                    <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center mb-4 text-pink-600">
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
                    <div className="container-custom px-4">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-700 to-pink-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center border-4 border-white/20">
                            <div className="p-8 md:p-12 text-white flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display leading-tight uppercase tracking-tight">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-pink-100 text-lg mb-8 leading-loose font-black px-1">
                                    Women helpers can stay at NEST anytime in Bangalore. The hostel offers safe, comfortable rooms, daily meals, and very affordable rates, making it easy for you to settle in and start your work.
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-2 bg-white text-pink-700 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all leading-loose shadow-xl transform hover:scale-105"
                                >
                                    Learn more about NEST <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="hidden md:flex w-1/3 h-[450px] bg-white/10 items-center justify-center relative overflow-hidden">
                                <HomeModernIcon className="w-48 h-48 text-white" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/50 to-pink-900"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <section className="section-padding bg-pink-50 border-y border-pink-100">
                    <div className="container-custom px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-pink-600 to-pink-800 p-10 flex flex-col items-center justify-center text-center text-white relative">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-inner text-white">
                                        <GiftIcon className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold mb-2 font-display leading-loose uppercase tracking-widest">Refer a Friend</h2>
                                    <h3 className="text-6xl md:text-7xl font-black mb-4 leading-none tracking-tighter">₹500!</h3>
                                    <p className="text-pink-200 font-black text-sm uppercase tracking-widest">*Terms and Conditions apply</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">Refer a Friend and Earn ₹500</h2>
                                    <p className="text-lg text-gray-600 font-black mb-8 leading-relaxed">
                                        Help your friends and relatives from Jharkhand get a domestic work job in Bangalore on EzyHelpers.
                                    </p>
                                    <div className="space-y-5 mb-10">
                                        {[
                                            "Share their details via WhatsApp or call us",
                                            "Give your friend’s name, age, and job preference",
                                            "They join EzyHelpers, complete placement, and you earn ₹500"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="w-7 h-7 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-pink-200 border-2 border-white">
                                                    <span className="text-white text-xs font-black">{i + 1}</span>
                                                </div>
                                                <span className={`text-gray-700 font-bold text-base leading-relaxed ${i === 2 ? 'text-pink-700 font-black' : ''}`}>{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="https://wa.me/918031411776"
                                        className="inline-flex items-center justify-center gap-3 bg-green-600 text-white font-black py-5 px-10 rounded-2xl hover:bg-green-700 transition-all shadow-xl transform hover:scale-105 text-center leading-loose text-lg"
                                    >
                                        <PhoneIcon className="w-6 h-6" /> Refer & Earn ₹500
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight leading-tight uppercase">How to Apply for Japa Maid Jobs</h2>
                            <div className="w-24 h-2 bg-pink-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto relative px-4">
                            {/* Central Connecting Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-100 via-pink-600 to-pink-100 hidden md:block opacity-50"></div>

                            <div className="space-y-16 md:space-y-24">
                                {[
                                    {
                                        step: 1,
                                        title: "Step 1: Contact EzyHelpers",
                                        desc: "Call us or fill the online form. We explain duties, stay, and salary clearly."
                                    },
                                    {
                                        step: 2,
                                        title: "Step 2: Share Your Details",
                                        desc: "Provide your name, age, and experience in newborn or mother care."
                                    },
                                    {
                                        step: 3,
                                        title: "Step 3: Job Matching & Start",
                                        desc: "Attend training, complete verification, interview with the family, and start work with full support."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Content Card */}
                                        <div className="w-full md:w-[45%] mb-8 md:mb-0 transition-all duration-500 hover:scale-[1.03]">
                                            <div className="bg-white p-10 md:p-12 rounded-[3rem] border-2 border-pink-50 shadow-[0_20px_70px_-20px_rgba(236,72,153,0.15)] hover:shadow-[0_25px_80px_-20px_rgba(236,72,153,0.25)] relative overflow-hidden group">
                                                <div className="absolute top-0 left-0 w-3 h-full bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-6 leading-tight font-display uppercase tracking-tight">{item.title}</h3>
                                                <p className="text-gray-600 font-black leading-relaxed text-base md:text-lg opacity-80">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Center Number Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-none mb-10 md:mb-0">
                                            <div className="w-20 h-20 md:w-28 md:h-28 bg-pink-600 text-white rounded-full flex items-center justify-center font-black text-3xl md:text-5xl shadow-[0_15px_45px_-10px_rgba(236,72,153,0.8)] border-8 border-white ring-4 ring-pink-50 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-700"></div>
                                                <span className="relative z-10">{item.step}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 md:mt-32 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-5 px-16 bg-pink-600 text-white font-black text-xl rounded-2xl hover:bg-pink-700 transition-all shadow-[0_20px_50px_-10px_rgba(236,72,153,0.5)] transform hover:scale-105 leading-loose"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-padding bg-pink-900 text-white overflow-hidden relative border-t border-pink-800">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="container-custom relative z-10 text-center">
                        <h2 className="text-3xl md:text-6xl font-black mb-6 font-display text-white tracking-tight px-4 leading-tight">Make a Difference Every Day</h2>
                        <p className="text-pink-100 text-lg md:text-2xl mb-14 max-w-4xl mx-auto leading-relaxed font-bold opacity-90 px-4">
                            Help mothers and newborns while building a meaningful career that brings pride, purpose, and respect to your life.
                        </p>
                        <Link
                            href="/helper-registration"
                            className="w-[90%] sm:w-auto inline-flex py-5 px-16 bg-white text-pink-900 font-black text-xl rounded-2xl hover:bg-pink-50 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.25)] transform hover:scale-105 leading-loose"
                        >
                            Join Today
                        </Link>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">Postnatal Care FAQs</h2>
                            <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
