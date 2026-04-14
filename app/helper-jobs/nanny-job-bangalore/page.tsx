import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
    HeartIcon,
} from "@heroicons/react/24/outline";

import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import ReferEarnSection from "@/components/ReferEarnSection";


export const metadata: Metadata = {
    title: "Nanny Jobs in Bangalore for Female Helpers from Jharkhand",
    description:
        "EzyHelpers offers safe Nanny and Babysitter jobs in Bangalore for Jharkhand helpers with verified homes, fixed work, training, and long-term job support.",
    openGraph: {
        title: "Nanny Jobs in Bangalore for Female Helpers from Jharkhand",
        description:
            "EzyHelpers offers safe Nanny and Babysitter jobs in Bangalore for Jharkhand helpers with verified homes, fixed work, training, and long-term job support.",
        url: "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore",
        type: "website",
    },
    alternates: {
        canonical: "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore",
        languages: {
            "en": "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore",
            "hi": "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore/hin",
            "x-default": "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore"
        }
    },
};

const faqs: FAQItem[] = [
    {
        question: "Do I need prior experience?",
        answer: "No, freshers can apply. We provide training before placement.",
    },
    {
        question: "Will training be provided?",
        answer:
            "Yes, you will receive basic training in childcare, hygiene, safety, and behaviour.",
    },
    {
        question: "Are Live-in Nannies provided with food and a room?",
        answer:
            "Yes. Helpers in live-in jobs receive free meals along with a room or a bed/mattress, either private or shared.",
    },
    {
        question: "Do I need to pay for the job?",
        answer: "No, EzyHelpers does not charge helpers any fees.",
    },
    {
        question: "Is this a safe job for women coming from Jharkhand?",
        answer:
            "Yes. We place Nannies only in verified homes with proper agreements for safety.",
    },
    {
        question: "What if I do not like the family or job after joining?",
        answer:
            "You can inform EzyHelpers. We will try to resolve the issue or help with a job change.",
    },
    {
        question: "What kind of children will I take care of?",
        answer:
            "You may care for infants (0–1 year), toddlers (1–3 years), or school-going children (4–10 years), depending on the family’s requirements.",
    },
];

export default function NannyJobsBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Helper Jobs", href: "/helper-jobs" },
                        { label: "Nanny Jobs" },
                    ]}
                    rightContent={
                        <Link
                            href="/helper-jobs/nanny-job-bangalore/hin"
                            className="hidden md:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-200 z-10 hover:shadow-md transition-all"
                        >
                            <span className="text-sm font-medium text-gray-500">हिंदी</span>
                            <div className="relative inline-flex h-6 w-12 items-center rounded-full bg-rose-600 transition-colors">
                                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-7" />
                            </div>
                            <span className="text-sm font-bold text-gray-900">ENG</span>
                        </Link>
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">
                                Nanny Jobs in Bangalore
                            </h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-rose-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    Caring for children is valuable work. If you have childcare
                                    experience, EzyHelpers helps you get Nanny and Babysitter jobs
                                    in Bangalore with training, placement support, and respectful
                                    long-term career opportunities.
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

                {/* Salary & Benefits Overivew Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wider mb-4 border border-rose-200">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                                Salary & Key Benefits Overview
                            </h2>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-rose-600"></div>
                                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                                    Live-In Nanny Jobs
                                </h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-rose-600 mb-6">
                                    ₹20,000 to ₹25,000
                                    <span className="text-sm font-medium text-gray-500 block mt-1">
                                        per month
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            Free food and stay included
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            Separate room or sleeping space
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockSolidIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                                    Full-Time Babysitter Jobs
                                </h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">
                                    ₹16,000 to ₹20,000
                                    <span className="text-sm font-medium text-gray-500 block mt-1">
                                        per month
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            Fixed daily working hours
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            Weekly off as decided with family
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <SparklesIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                                    Part-Time Nanny Jobs
                                </h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">
                                    ₹8,000 to ₹12,000
                                    <span className="text-sm font-medium text-gray-500 block mt-1">
                                        per month
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            4 to 6 working hours daily
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            Flexible shifts available
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* What You Get Grid */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">
                                    Additional Benefits
                                </h3>
                                <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "Training before placement", icon: AcademicCapIcon },
                                    { text: "Health insurance support", icon: HeartIcon },
                                    {
                                        text: "Safe and respectful work environment",
                                        icon: ShieldCheckIcon,
                                    },
                                    {
                                        text: "Direct salary from the employer",
                                        icon: BriefcaseIcon,
                                    },
                                    { text: "Long-term work opportunities", icon: StarIcon },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 ${index === 4 ? "sm:col-span-2 md:col-span-1 md:col-start-2" : ""}`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-rose-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-rose-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Apply Now for Nanny Jobs in Bangalore
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where You Can Get Nanny Jobs Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                                Where You Can Get Nanny Jobs in Bangalore
                            </h2>
                            <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Flats and Apartments */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600 mb-4">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                                    Flats and Apartments
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Daily childcare support within family homes.
                                </p>
                            </div>

                            {/* Housing Societies */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600 mb-4">
                                    <ClipboardDocumentListIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                                    Housing Societies
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Childcare work in safe and secure residential communities.
                                </p>
                            </div>

                            {/* Normal Family Houses */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600 mb-4">
                                    <HeartIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                                    Normal Family Houses
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Taking care of children in a comfortable home environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Nanny Jobs Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                                Types of Nanny Jobs Available in Bangalore
                            </h2>
                            <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                            <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
                                We offer multiple childcare job options so you can choose
                                according to your comfort and lifestyle.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    1. Live-In or 24 Hour Nanny Jobs in Bangalore
                                </h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Type of Work:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Stay in the employer’s home
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Food provided daily
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Separate room or sleeping arrangement
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Work Hours:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Childcare support up to 12 hours daily
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Two days off per month
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Fixed routine with family
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Best For:
                                        </h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Female helpers from Jharkhand
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers wanting to save rent and food expenses
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers who are comfortable with live-in childcare
                                                    work
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-6">
                                        <Link
                                            href="/helper-registration"
                                            className="text-rose-600 font-semibold hover:text-rose-700 flex items-center gap-1 group"
                                        >
                                            Start Your Live-In Nanny Job Today{" "}
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    2. Full-Time Babysitter Jobs in Bangalore
                                </h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Type of Work:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Fixed daily working schedule
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    No overnight stay required
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Food only if agreed during hiring
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Work Hours:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Usually 8 to 10 hours per day
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    One weekly off
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Best For:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers who prefer fixed timings
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers living with relatives or in shared rooms
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers seeking a balanced daily routine
                                                </span>
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
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    3. Part-Time Nanny Jobs in Bangalore
                                </h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Type of Work:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Limited working hours
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    No overnight stay
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Only childcare-related duties
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Work Hours:
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    4 to 6 hours daily
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Morning or evening shifts
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Weekly off
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                                            Best For:
                                        </h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers wanting shorter working hours
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Helpers living nearby
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    Flexible childcare work seekers
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-6">
                                        <Link
                                            href="/helper-registration"
                                            className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1 group"
                                        >
                                            Register Now{" "}
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Information Section (Responsibilities) */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">
                                        Work Roles and Responsibilities
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">
                                    Your daily responsibilities focus only on children’s care.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <h4 className="text-lg font-bold text-gray-900 col-span-full mb-2">
                                        Childcare Duties:
                                    </h4>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Keeping children safe</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            Feeding babies and children
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            Bathing and dressing children
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            Preparing school tiffin
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            Getting children ready for school
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            Arranging toys, books, and bags
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            School drop and pickup, if required
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            Washing children’s clothes
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3 mt-2 md:col-span-2">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-semibold">
                                            Simple childcare-related cleaning
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 mt-8">
                                    <p className="text-rose-800 font-medium text-sm text-center">
                                        Only childcare work is assigned. Extra housework is not
                                        included.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Training Support Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                                    Training Support Before Job Placement
                                </h2>
                                <div className="w-20 h-1 bg-rose-500 mb-8 rounded-full"></div>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Before you start work, we make sure you receive basic
                                    childcare training so you feel confident while working.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Safe baby handling techniques",
                                        "Child hygiene practices",
                                        "Child safety awareness",
                                        "Games and learning activities",
                                        "Communication with families",
                                        "Time management during childcare work",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircleIcon className="w-4 h-4 text-rose-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <a
                                        href="tel:+918884443907"
                                        className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-rose-100 rounded-[2rem] transform rotate-3"></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-rose-50">
                                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                                        <AcademicCapIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Why Training Helps
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Our training program prepares you for the real-world
                                        challenges of childcare, ensuring you and the family have a
                                        smooth experience.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <ShieldCheckIcon className="w-5 h-5 text-rose-500" />
                                            Professional Certificate Provided
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <UserIcon className="w-5 h-5 text-rose-500" />
                                            Increases Confidence
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-rose-800 to-rose-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-700 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

                            <div className="relative z-10 text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-white">
                                    Who Can Apply
                                </h2>
                                <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full"></div>
                            </div>

                            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                            <UserIcon className="w-8 h-8 text-rose-300" />
                                            Female Nannies/Babysitters
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                                                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                                                <span className="text-lg text-rose-50">
                                                    <strong className="text-white">Age:</strong> 25–40
                                                    years
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                                                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                                                <span className="text-lg text-rose-50">
                                                    <strong className="text-white">Education:</strong>{" "}
                                                    Basic schooling is sufficient
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                                                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                                                <span className="text-lg text-rose-50">
                                                    <strong className="text-white">Experience:</strong>{" "}
                                                    Minimum 2 years experience
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-center bg-black/30 p-8 rounded-2xl border border-white/10">
                                        <div className="w-20 h-20 bg-rose-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-300">
                                            <CheckCircleIcon className="w-10 h-10" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 text-white">
                                            Ready to Apply?
                                        </h4>
                                        <p className="text-rose-100 mb-6">
                                            If you meet these requirements, we have respectful
                                            families waiting for your help.
                                        </p>
                                        <Link
                                            href="/helper-registration"
                                            className="inline-block bg-white text-rose-800 font-bold py-3 px-8 rounded-lg hover:bg-rose-50 transition-colors"
                                        >
                                            Register Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                                    About EzyHelpers – Trusted Helper Jobs
                                </h2>
                                <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                                    We connect helpers with safe Domestic Helper jobs across India
                                    without charging any fees.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display border-b pb-4">
                                    We Focus On:
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                    <div className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                                        <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                                            <StarIcon className="w-6 h-6" />
                                        </div>
                                        <p className="font-semibold text-gray-900">
                                            Respectful jobs in Bangalore
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                                        <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                                            <ShieldCheckIcon className="w-6 h-6" />
                                        </div>
                                        <p className="font-semibold text-gray-900">
                                            Strict safety and background checks
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                                        <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                                            <HeartIcon className="w-6 h-6" />
                                        </div>
                                        <p className="font-semibold text-gray-900">
                                            Helper welfare and long-term support
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-rose-600 to-rose-800 rounded-2xl p-8 text-center text-white my-8">
                                    <h3 className="text-xl font-medium text-rose-100 mb-2 uppercase tracking-wide">
                                        Our Belief
                                    </h3>
                                    <p className="text-2xl md:text-3xl font-bold font-display">
                                        "Good Homes for Helpers. Good Helpers for Families."
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display border-b pb-4 mt-12">
                                    Why Helpers Trust EzyHelpers:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Provided jobs for 5,000+ helpers",
                                        "Supported 10,000+ families",
                                        "Training aligned with the Domestic Workers Sector Skill Council (DWSSC) under Skill India",
                                        "Placement only in respectful homes",
                                        "Duties are explained clearly before joining",
                                        "Continuous support after placement",
                                        "Help during misunderstandings or job issues",
                                        "Assistance with job changes if needed",
                                        "Regular salary and long-term work opportunities",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Locations We Serve
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        "Bangalore",
                                        "Bareilly",
                                        "Mumbai",
                                        "Hyderabad",
                                        "Delhi NCR",
                                        "Pune",
                                        "Odisha",
                                        "and more",
                                    ].map((loc, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white border text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm"
                                        >
                                            {loc}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                                Support and Benefits for Helpers at EzyHelpers
                            </h2>
                            <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                            {[
                                {
                                    title: "Training & Certificate",
                                    desc: "Basic training related to your job role, and a certificate will be given after completion.",
                                    icon: AcademicCapIcon,
                                },
                                {
                                    title: "Look Professional",
                                    desc: "Coat and grooming kit provided.",
                                    icon: UserIcon,
                                },
                                {
                                    title: "Safety & Security",
                                    desc: "Clear work agreements and regular support.",
                                    icon: ShieldCheckIcon,
                                },
                                {
                                    title: "Stay Support",
                                    desc: "Stay at our women’s hostel if placement is delayed.",
                                    icon: HomeIcon,
                                },
                                {
                                    title: "Health Insurance",
                                    desc: "Basic medical coverage for emergencies.",
                                    icon: HeartIcon,
                                },
                                {
                                    title: "Respectful Work Environment",
                                    desc: "Homes that treat you with respect.",
                                    icon: StarIcon,
                                },
                                {
                                    title: "Future Opportunities",
                                    desc: "Good performance can lead to higher salary or jobs in other cities/abroad.",
                                    icon: GlobeAltIcon,
                                },
                                {
                                    title: "Timely Salary",
                                    desc: "Paid directly by employers every month.",
                                    icon: BriefcaseIcon,
                                },
                                {
                                    title: "Job Profile Creation",
                                    desc: "Build a profile to get better maid jobs.",
                                    icon: ClipboardDocumentListIcon,
                                },
                                {
                                    title: "Support at Every Step",
                                    desc: "Help from registration to after placement.",
                                    icon: UserIcon,
                                },
                            ].map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-4">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hostel NEST Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 font-bold rounded-full text-sm mb-6 w-max">
                                        Safe Accommodation
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
                                        NEST – Safe Hostel for Women Helpers
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        Women helpers can stay at NEST anytime in Bangalore. The
                                        hostel offers safe, comfortable rooms, daily meals, and very
                                        affordable rates, making it easy for you to settle in and
                                        start your work.
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href="/nest"
                                            className="inline-flex items-center text-rose-600 font-bold hover:text-rose-700 transition-colors group text-lg"
                                        >
                                            Learn more about NEST
                                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-rose-50 p-8 md:p-12 flex items-center justify-center relative min-h-[300px]">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-800 via-transparent to-transparent"></div>
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs relative z-10">
                                        <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm">
                                            <HomeIcon className="w-8 h-8 text-rose-500 mb-2" />
                                            <span className="font-semibold text-rose-900 text-sm">
                                                Comfortable Rooms
                                            </span>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm mt-8">
                                            <ShieldCheckIcon className="w-8 h-8 text-rose-500 mb-2" />
                                            <span className="font-semibold text-rose-900 text-sm">
                                                Safe & Secure
                                            </span>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm -mt-8">
                                            <UserIcon className="w-8 h-8 text-rose-500 mb-2" />
                                            <span className="font-semibold text-rose-900 text-sm">
                                                Women Only
                                            </span>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm">
                                            <FireIcon className="w-8 h-8 text-rose-500 mb-2" />
                                            <span className="font-semibold text-rose-900 text-sm">
                                                Daily Meals
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="rose" />


                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                                How to Apply for Nanny Jobs in Bangalore
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-rose-200 rounded-full"></div>

                                {[
                                    {
                                        step: 1,
                                        title: "Contact EzyHelpers",
                                        desc: "Call or register online and understand available Nanny and Babysitter jobs in Bangalore.",
                                    },
                                    {
                                        step: 2,
                                        title: "Share Your Details",
                                        desc: "Provide your age, experience, and skills. Our team explains suitable job options.",
                                    },
                                    {
                                        step: 3,
                                        title: "Training and Job Start",
                                        desc: "Attend childcare training, interview the family, approve the job, and begin work with support.",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative flex items-center justify-center mb-12 last:mb-0"
                                    >
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm md:text-base text-gray-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-rose-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm md:text-base text-gray-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-rose-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">
                                Work With Respect, Live With Confidence
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-rose-100">
                                Every helper deserves respect, safety, and kindness at work.
                                Find families who value your care and treat you like an
                                important part of their home.
                            </p>

                            <div className="flex justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-rose-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
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
    );
}
