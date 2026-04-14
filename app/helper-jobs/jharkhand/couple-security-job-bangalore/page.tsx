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
    AcademicCapIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Live-in Couple Security jobs in Bangalore for Husband-Wife',
    description: 'Stay and work together! Husband-wife security jobs in Bangalore apartments. Separate room and daily food included. Safe and long-term work for couples.',
    openGraph: {
        title: 'Live-in Couple Security jobs in Bangalore for Husband-Wife',
        description: 'Stay and work together! Husband-wife security jobs in Bangalore apartments. Separate room and daily food included. Safe and long-term work for couples.',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Are food and room provided in 24-Hour Live-in Security jobs in Bangalore?',
        answer: 'Yes. In 24-hour Live-in Security jobs in Bangalore, helpers get daily food and a room to stay. A separate room or security quarter is provided, depending on the house.',
    },
    {
        question: 'Is previous experience required for a husband-wife security job in Bangalore?',
        answer: 'No. Both freshers and experienced helpers can apply. EzyHelpers provides basic security training so couples without experience can work confidently.',
    },
    {
        question: 'What happens if I face problems at work or want to change my job?',
        answer: 'We help resolve issues quickly and support job changes if needed so you always feel secure.',
    },
    {
        question: 'What skills are helpful for Couple Security jobs?',
        answer: 'Alertness, discipline, communication, and basic physical fitness are helpful skills.',
    },
    {
        question: 'What if the employer does not pay the salary on time?',
        answer: 'Salary is usually paid between the 1st and 10th. If delays happen, we help resolve the issue quickly.',
    },
    {
        question: 'Can we switch to other jobs through EzyHelpers later?',
        answer: 'Yes. We offer multiple Domestic Helper jobs across India and help based on your experience.',
    },
    {
        question: 'What if we have children? Can they stay with us?',
        answer: 'Live-in Security jobs are usually only for husband-wife couples. This is explained clearly before joining.',
    },
    {
        question: 'What documents are needed for Couple Security jobs?',
        answer: 'Aadhar card and local ID proof are required for verification.',
    }
]

export default function CoupleSecurityJobsBangalorePage() {
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
                        { label: 'Couple Security Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/couple-security-job-bangalore/hin"
                                className="w-10 h-5 bg-indigo-600 rounded-full p-1 relative transition-colors inline-block"
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
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Couple Security Job in Bangalore for Helpers from Jharkhand</h1>

                            <p className="text-[13px] sm:text-sm md:text-2xl font-semibold mb-4 text-indigo-100 max-w-5xl mx-auto">Stay together, work together, and build a better future.</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-[13px] sm:text-sm md:text-xl text-indigo-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    Coming to Bangalore from your hometown and starting a new life is not easy. That’s why EzyHelpers connects husband-wife helpers from Jharkhand with live-in jobs where both of you can stay together and begin work comfortably.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ No registration charges</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Direct placement without agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Salary paid directly by the family</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105"
                                >
                                    Register Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
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
                            <span className="inline-block py-1.5 px-5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-indigo-100 uppercase">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight">Salary & Key Benefits Overview</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-indigo-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
                                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-indigo-600">
                                    <BanknotesIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Live-in Couple Security Jobs</h3>
                                <div className="text-3xl font-black text-indigo-600 mb-6 font-display tracking-tight">
                                    ₹30,000 to ₹35,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1">combined monthly salary</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">Free food and stay included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">Separate room or security quarter provided</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">24-hour live-in work arrangement</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-50 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-black text-gray-900 font-display mb-3">What You Get with EzyHelpers</h3>
                                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                    {[
                                        { text: "Stable long-term work opportunities", icon: StarIcon },
                                        { text: "Training before job placement", icon: GraduateIcon },
                                        { text: "Ongoing guidance and support", icon: UserGroupIcon },
                                        { text: "Respectful family work environments", icon: HeartIcon },
                                        { text: "Direct salary payment every month", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-indigo-50/30 p-4 rounded-xl border border-indigo-50 hover:bg-indigo-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-indigo-100/50 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4.5 h-4.5 text-indigo-600" />
                                            </div>
                                            <span className="font-extrabold text-gray-800 text-xs leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-indigo-600 text-white font-black text-lg py-4 px-14 rounded-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding bg-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white">Couple Security Job Categories in Bangalore</h2>
                            <p className="text-indigo-100 max-w-2xl mx-auto font-medium">As a Couple Security Helper, you and your spouse will work together as a watchman couple.</p>
                            <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <h3 className="text-xl md:text-3xl font-bold mb-6 text-indigo-100">Live-in Couple Security Jobs</h3>
                            <p className="text-base md:text-lg mb-10 text-indigo-50/90 font-medium leading-relaxed">This is ideal for Jharkhand helpers who need room and food in Bangalore and want to save money.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3">
                                        Type of Work
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Stay inside the employer’s house 24/7</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Be available for security work</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Separate room or a security quarter provided</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Daily meals included</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Work Hours */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3">
                                        Work Hours
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Day and night security work</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Proper rest during the day</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">2 monthly offs decided before joining</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Best For */}
                                <div className="md:col-span-2">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3">
                                        Best For
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Couples coming from Jharkhand</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Couples without a house in Bangalore</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Couples who want to save on rent and food expenses</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-center mt-12">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-4 px-10 bg-white text-indigo-900 font-black rounded-xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:scale-105"
                                >
                                    Apply for Live-in Couple Security Jobs
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
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Couple Security Work Responsibilities</h2>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">We always explain your duties clearly before you join so there’s no confusion.</p>
                                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-indigo-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-indigo-600" />
                                        Your Daily Watchman Duties
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'Watch main gate and compound',
                                            'Check visitor entry and exit',
                                            'Open and close gates or doors',
                                            'Protect the property',
                                            'Report suspicious activity',
                                            'Light cleaning of gate area',
                                            'Water plants near the gate',
                                            'Collect milk packets or parcels'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-indigo-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-medium leading-tight">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Notice */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-indigo-400">
                                        <SparklesIcon className="w-8 h-8" />
                                        Clear Work Policy
                                    </h3>
                                    <p className="text-base md:text-lg text-indigo-50 font-medium leading-relaxed mb-10">
                                        Only mutually agreed security tasks are included. There’s no hidden work. We ensure your workload is fair and discussed beforehand.
                                    </p>
                                    <div className="mt-auto bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-indigo-300 font-bold italic">Reliable and Safe Work for Couples.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Couple Watchman Jobs in Bangalore Are Available In</h2>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Independent Houses", desc: "Gate security and property monitoring for private family homes.", icon: HomeIcon },
                                { title: "Residential Buildings", desc: "Daily watchman duties, visitor entry and safety supervision.", icon: BuildingOfficeIcon },
                                { title: "Private Bungalows", desc: "Full property security responsibility with stable work.", icon: HomeModernIcon },
                                { title: "Small Apartment Complexes", desc: "Gate handling and security support for apartments.", icon: BuildingOfficeIcon },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                                        <item.icon className="w-6 h-6 text-current" />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm font-semibold text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl p-8 md:p-16 shadow-xl border border-indigo-100 text-center">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Who Can Apply</h2>
                            <p className="text-base md:text-xl text-gray-600 mb-12 font-medium">We welcome couples who are willing to learn and work sincerely.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                                {[
                                    { text: "Husband-wife couples only", icon: UserGroupIcon },
                                    { text: "Age: 20–45 years", icon: ClockIcon },
                                    { text: "Basic schooling is enough", icon: AcademicCapIcon },
                                    { text: "Freshers and experienced helpers welcome", icon: StarIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-indigo-100 h-full">
                                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-gray-800 leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-4 px-12 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all shadow-2xl transform hover:scale-105"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white text-center">About EzyHelpers – Trusted Helper Jobs</h2>
                                <p className="text-indigo-100 text-base md:text-2xl mb-16 text-center max-w-4xl mx-auto font-medium leading-relaxed">
                                    We connect helpers like you with safe Domestic Helper jobs across India without charging any fees.
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-inner">
                                        <h3 className="text-xl font-black mb-6 text-indigo-300 uppercase tracking-wider">We Focus On</h3>
                                        <ul className="space-y-4">
                                            {[
                                                'Respectful jobs in Bangalore',
                                                'Strict safety and background checks',
                                                'Helper welfare and long-term support'
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col justify-center text-center lg:text-left">
                                        <h3 className="text-xl font-black mb-4 text-indigo-300 uppercase tracking-wider">Our Belief</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-tight text-center">
                                            "Good Homes for Helpers. Good Helpers for Families."
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-20">
                                    <h3 className="text-xl md:text-3xl font-black mb-10 text-center text-indigo-300">Why Helpers Trust EzyHelpers</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { text: "Provided jobs for 5,000+ helpers", highlight: true },
                                            { text: "Supported 10,000+ families", highlight: true },
                                            { text: "Training aligned with DWSSC under Skill India" },
                                            { text: "Placement only in respectful homes" },
                                            { text: "Duties explained clearly before joining" },
                                            { text: "Continuous support after placement" },
                                            { text: "Help during misunderstandings or job issues" },
                                            { text: "Assistance with job changes if needed" },
                                            { text: "Regular salary and long-term work opportunities" },
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-5 rounded-xl border border-white/20 flex items-center gap-4 ${item.highlight ? 'bg-indigo-700/50 scale-105 shadow-lg' : 'bg-white/5'}`}>
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                                                <span className="font-bold text-sm md:text-base">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-bold mb-4 text-indigo-200 uppercase tracking-widest flex items-center justify-center gap-3">
                                        <GlobeAltIcon className="w-6 h-6" /> Locations We Serve
                                    </h3>
                                    <p className="text-base md:text-xl font-bold mb-8 text-indigo-50">
                                        Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Support and Benefits Section */}
                    <section className="section-padding bg-gray-50">
                        <div className="container-custom">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {[
                                    { title: "Training & Certificate", desc: "Basic training related to your job role, and a certificate will be given after completion.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "EzyHelpers Coat and grooming kit is provided.", icon: StarIcon },
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
                                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* NEST Hostel Section */}
                    <section className="section-padding bg-white">
                        <div className="container-custom">
                            <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
                                <div className="p-8 md:p-12 text-white flex-1">
                                    <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                    <p className="text-indigo-100 text-lg mb-8 leading-relaxed font-medium">
                                        Women helpers can stay at NEST anytime in Bangalore. The hostel offers safe, comfortable rooms, daily meals, and very affordable rates, making it easy for you to settle in and start your work.
                                    </p>
                                    <Link
                                        href="/nest"
                                        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all"
                                    >
                                        Learn more about NEST <ArrowRightIcon className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="w-full md:w-1/3 h-64 md:h-full bg-indigo-500/20 flex items-center justify-center p-8">
                                    <HomeModernIcon className="w-32 h-32 text-white/20" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Refer & Earn Section */}
                    <section className="section-padding bg-indigo-50 border-y border-indigo-100">
                        <div className="container-custom">
                            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-200">
                                <div className="md:flex">
                                    <div className="md:w-5/12 bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 flex flex-col items-center justify-center text-center text-white">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                            <GiftIcon className="w-10 h-10 text-white" />
                                        </div>
                                        <h2 className="text-3xl md:text-2xl font-bold mb-2 font-display">Refer and Earn</h2>
                                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500!</h3>
                                        <p className="text-indigo-100 font-medium">*Terms and Conditions apply</p>
                                    </div>
                                    <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Refer a Friend and Earn ₹500</h2>
                                        <p className="text-lg text-gray-600 font-medium mb-6">
                                            Help your friends and relatives from Jharkhand get a domestic work job in Bangalore on EzyHelpers.
                                        </p>
                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium">Share their details via WhatsApp or call us</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium">Give your friend’s name, age, and job preference</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-bold">They join EzyHelpers, complete placement, and you earn ₹500</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={whatsappSendUrl('918031411776')}
                                            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-700 transition-all shadow-lg transform hover:scale-105 text-center"
                                        >
                                            <PhoneIcon className="w-5 h-5" /> Refer & Earn ₹500
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How to Apply Section */}
                    <section className="section-padding bg-white">
                        <div className="container-custom">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">How to Apply for Couple Security jobs</h2>
                                <p className="text-gray-600 text-lg font-medium">We keep the process simple so you can start quickly.</p>
                                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="relative">
                                    {/* Connecting Line */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100 rounded-full"></div>

                                    {[
                                        { step: 1, title: "Contact EzyHelpers", desc: "Call or fill the online form to ask about duties, stay, or salary." },
                                        { step: 2, title: "Share Your Details", desc: "Give your name, age, experience, and skills." },
                                        { step: 3, title: "Training & Job Joining", desc: "Attend training, do a video interview, and start work with full support." }
                                    ].map((item, index) => (
                                        <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                            {/* Left Side */}
                                            <div className="w-5/12 text-right pr-8 md:pr-12">
                                                {index % 2 === 0 ? (
                                                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm transition-all hover:shadow-md">
                                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                                        <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                                                    </div>
                                                ) : null}
                                            </div>

                                            {/* Center Circle */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full font-bold text-xl md:text-2xl shadow-lg z-10 border-4 border-white">
                                                {item.step}
                                            </div>

                                            {/* Right Side */}
                                            <div className="w-5/12 text-left pl-8 md:pl-12">
                                                {index % 2 !== 0 ? (
                                                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm transition-all hover:shadow-md">
                                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                                        <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 text-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex py-4 px-12 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all shadow-2xl transform hover:scale-105"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="section-padding bg-indigo-900 text-white overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="container-custom relative z-10 text-center">
                            <h2 className="text-3xl md:text-6xl font-black mb-8 font-display text-white">Start Your New Beginning Together</h2>
                            <p className="text-indigo-100 text-lg md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                                Leave uncertainty behind and begin a safer journey together in Bangalore, where respect, stability, and dignity help couples build a peaceful future step by step.
                            </p>
                            <Link
                                href="/helper-registration"
                                className="inline-flex py-5 px-16 bg-white text-indigo-900 font-black text-xl rounded-2xl hover:bg-indigo-50 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] transform hover:scale-105"
                            >
                                Begin Your Journey
                            </Link>
                        </div>
                    </section>

                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Common Questions from Helpers</h2>
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

function GraduateIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.64l7.74-4.493M12 4.5l7.74 4.492m-7.74 0L4.26 8.992m0 0l7.74 4.493m0 0v5.25m-7.74-9.743l7.74 4.493" />
        </svg>
    )
}
