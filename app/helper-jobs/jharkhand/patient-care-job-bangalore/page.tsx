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
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Live-in Patient Care Jobs Bangalore: Earn upto ₹35k/month',
    description: 'Patient care helper job opportunities in Bangalore. Help patients in their homes. Simple work, good earnings. No experience necessary. Apply now.',
    openGraph: {
        title: 'Live-in Patient Care Jobs Bangalore: Earn upto ₹35k/month',
        description: 'Patient care helper job opportunities in Bangalore. Help patients in their homes. Simple work, good earnings. No experience necessary. Apply now.',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Who can apply for Patient Care jobs in Bangalore?',
        answer: 'Mostly women are preferred because many families request female helpers, but men can also apply especially for male patients or physical assistance roles. Experience helps but is not compulsory, and medical degrees are not required.',
    },
    {
        question: 'What duties are included in Patient Caretaker jobs in Bangalore?',
        answer: 'Work includes bathing support, feeding, medicine reminders, helping patients walk, and emotional care. Duties depend on whether the patient is elderly, bedridden, or disabled.',
    },
    {
        question: 'Do I need medical training for Patient Care assistant jobs in Bangalore?',
        answer: 'No medical training is required. These are home care helper jobs. Basic care skills, patience, and willingness to learn are enough. We explain duties clearly before joining.',
    },
    {
        question: 'What is the salary for home Patient Care jobs in Bangalore?',
        answer: 'Salary depends on experience and patient condition. Live-in 24 hour Patient Care jobs usually offer higher pay along with food and stay.',
    },
    {
        question: 'Is food and stay provided for Live-in Patient Care jobs?',
        answer: 'Yes. Families provide food and accommodation so you can save money while working.',
    },
    {
        question: 'Can freshers apply for home care jobs in Bangalore?',
        answer: 'Yes. Freshers can apply if they are responsible and ready to learn. We guide and support you throughout the process.',
    },
    {
        question: 'Will I get weekly off in Patient Care jobs?',
        answer: 'Helpers receive 2 days off per month. Leave details are explained before joining.',
    }
]

export default function PatientCareJobsBangalorePage() {
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
                        { label: 'Patient Care Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/patient-care-job-bangalore/hin"
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

                {/* Hero Section with Teal Gradient */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Patient Care Jobs in Bangalore for Live-in Helpers</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-indigo-100 max-w-5xl mx-auto">Work in Bangalore to earn better and support your family.</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-[13px] sm:text-sm md:text-xl text-indigo-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    With EzyHelpers, you get live-in Patient Care helper jobs helping elderly with daily care, food, cleanliness, movement, and comfort at home.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ No registration charges</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Direct placement without agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Salary paid directly by the family</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overview Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-indigo-100 uppercase">
                                Job Location: Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight">Salary & Key Benefits Overview</h2>
                        </div>

                        {/* Salary Card - Centered and Styled as per image */}
                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card - Styled as per image */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-indigo-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
                                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-indigo-600">
                                    <BriefcaseIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Live-in Patient Care Jobs</h3>
                                <div className="text-3xl font-black text-indigo-600 mb-6 font-display tracking-tight">
                                    ₹18,000 to ₹22,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1">per month</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">24-hour support with food and stay included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">Free accommodation inside the employer’s home</span>
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
                                        { text: "Safe Job Placement", icon: ShieldCheckIcon },
                                        { text: "Proper Training before joining", icon: BriefcaseIcon },
                                        { text: "Respectful Families", icon: HeartIcon },
                                        { text: "Stable long-term work opportunity", icon: StarIcon },
                                        { text: "Direct salary payment from the employer", icon: BanknotesIcon },
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
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Live-in Patient Care Helpers Job Categories</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* What is this job called */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">What is this job called?</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">Families may use different names for the same Patient Care work:</p>
                                <ul className="space-y-4">
                                    {['Patient Caretaker', 'Patient Attendant', 'Home Care Helper'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                            <span className="font-semibold text-sm md:text-base text-gray-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-xs md:text-base text-gray-600 font-medium italic">All mean helping a patient at home with daily care, comfort, and personal support.</p>
                            </div>

                            {/* Where are helpers needed */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">Where are helpers needed?</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">Families in Bangalore hire Live-in Patient Care helpers for:</p>
                                <ul className="space-y-4">
                                    {[
                                        'Bedridden Patient Care jobs',
                                        'Disabled Patient Care jobs',
                                        'Post-surgery care such as knee surgery and walking support'
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-indigo-500 mt-0.5" />
                                            <span className="font-semibold text-sm md:text-base text-gray-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Patient Care Jobs Section */}
                <section className="section-padding bg-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white">Types of Patient Care Jobs in Bangalore</h2>
                            <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <h3 className="text-xl md:text-3xl font-bold mb-6 text-indigo-100">Live-in Patient Care Jobs</h3>
                            <p className="text-base md:text-lg mb-10 text-indigo-50/90 font-medium leading-relaxed">In these jobs, you stay in the patient’s home and become part of the daily care routine.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3">
                                        Type of Work
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Staying with the patient full-time</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Separate sleeping space provided</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Free food from the family</span>
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
                                            <span className="text-indigo-50 text-sm md:text-base">Daily Patient Care work</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Proper rest time included</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">2 monthly offs fixed before joining</span>
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
                                            <span className="text-indigo-50 text-sm md:text-base">Helpers looking for stable long-term work</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Helpers without accommodation in Bangalore</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base">Helpers comfortable with full-time Patient Care</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-10 text-center text-indigo-200 font-medium italic text-sm md:text-base">These jobs are also searched as 24 Hour Patient Care Jobs in Bangalore and Home Nurse Jobs in Bangalore Non-Medical.</p>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Patient Care Work Responsibilities (Non-Medical)</h2>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">This is not a nurse job. No hospital or medical treatment is involved. We clearly explain duties so you know exactly what work you will do.</p>
                                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-indigo-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-indigo-600" />
                                        Daily Patient Care Duties
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'Diaper changing',
                                            'Sponging and body cleaning',
                                            'Changing clothes',
                                            'Feeding food and water',
                                            'Giving medicines as instructed by the family',
                                            'Giving insulin only if trained and instructed',
                                            'Helping with brushing teeth',
                                            'Urine bag changing',
                                            'Small bandage or Band-Aid changing',
                                            'Caring for bedridden and post-surgery patients'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-indigo-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-medium leading-tight">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Extra Duties */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-indigo-400">
                                        <SparklesIcon className="w-8 h-8" />
                                        Extra Duties Only if Discussed
                                    </h3>
                                    <ul className="space-y-6 mb-10">
                                        {[
                                            'Helping the patient sit or move safely',
                                            'Keeping the patient area clean',
                                            'Supporting daily comfort needs'
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5"></div>
                                                <span className="text-base md:text-lg text-indigo-50 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-indigo-300 font-bold italic">Only mutually agreed tasks are included. No hidden work.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-12">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-lg py-4 px-12 rounded-xl hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Apply for Patient Care Jobs
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 text-center">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Who Can Apply</h2>
                            <p className="text-base md:text-xl text-gray-600 mb-12 font-medium">We welcome helpers who are willing to learn and work sincerely.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                                {[
                                    { text: "Male and Female Patient Care Helpers", icon: UserGroupIcon },
                                    { text: "Age 18 to 45 years", icon: ClockIcon },
                                    { text: "Basic schooling is enough", icon: AcademicCapIcon },
                                    { text: "Freshers and experienced helpers welcome", icon: StarIcon },
                                    { text: "Basic training provided before placement", icon: ShieldCheckIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-indigo-50 p-5 rounded-2xl border border-indigo-100 h-full">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-gray-800 leading-tight">{item.text}</span>
                                    </div>
                                ))}
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
                                    {/* We Focus On */}
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

                                    {/* Our Belief */}
                                    <div className="flex flex-col justify-center text-center lg:text-left">
                                        <h3 className="text-xl font-black mb-4 text-indigo-300 uppercase tracking-wider">Our Belief</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-tight">
                                            "Good Homes for Helpers. Good Helpers for Families."
                                        </p>
                                    </div>
                                </div>

                                {/* Why Helpers Trust */}
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

                                {/* Locations and Register */}
                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-bold mb-4 text-indigo-200 uppercase tracking-widest flex items-center justify-center gap-3">
                                        <GlobeAltIcon className="w-6 h-6" /> Locations We Serve
                                    </h3>
                                    <p className="text-base md:text-xl font-bold mb-8 text-indigo-50">
                                        Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.
                                    </p>
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex py-4 px-12 bg-white text-indigo-900 font-black rounded-xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:scale-105"
                                    >
                                        Register With Us
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative blur elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50 border-y border-gray-100 overflow-hidden">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Training & Certificate", desc: "Basic training related to your job role, and a certificate will be given after completion.", icon: AcademicCapIcon },
                                { title: "Look Professional", desc: "Coat and grooming kit provided.", icon: SparklesIcon },
                                { title: "Safety & Security", desc: "Clear work agreements and regular support.", icon: ShieldCheckIcon },
                                { title: "Stay Support", desc: "Stay at our women’s hostel if placement is delayed.", icon: HomeIcon },
                                { title: "Health Insurance", desc: "Basic medical coverage for emergencies.", icon: HeartIcon },
                                { title: "Respectful Work Environment", desc: "Homes that treat you with respect.", icon: UserGroupIcon },
                                { title: "Future Opportunities", desc: "Good performance can lead to higher salary or jobs in other cities/abroad.", icon: ChartBarIcon },
                                { title: "Timely Salary", desc: "Paid directly by employers every month.", icon: BanknotesIcon },
                                { title: "Job Profile Creation", desc: "Build a profile to get better maid jobs.", icon: UserCircleIcon },
                                { title: "Support at Every Step", desc: "Help from registration to after placement.", icon: ChatBubbleLeftEllipsisIcon },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-start text-left">
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

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="bg-indigo-50 rounded-[2.5rem] p-8 md:p-16 border border-indigo-100 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto shadow-sm">
                            <div className="md:w-3/5 text-left order-2 md:order-1">
                                <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight leading-tight">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-base md:text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                                    Women helpers can stay at NEST anytime in Bangalore. The hostel offers safe, comfortable rooms, daily meals, and very affordable rates, making it easy for you to settle in and start your work.
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center bg-indigo-600 text-white font-black py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all shadow-xl group"
                                >
                                    Learn more about NEST
                                    <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            <div className="md:w-2/5 order-1 md:order-2 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-indigo-200/50 rounded-full blur-xl group-hover:bg-indigo-300/50 transition-colors"></div>
                                    <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform">
                                        <HomeModernIcon className="w-16 h-16 md:w-24 md:h-24 text-indigo-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-yellow-100">
                            {/* Left Side - Orange/Yellow Gradient */}
                            <div className="md:w-[38%] bg-gradient-to-b from-yellow-400 via-orange-500 to-orange-600 p-8 flex flex-col items-center justify-center text-center text-white">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                    <GiftIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-extrabold mb-1 font-display uppercase tracking-tight">Refer & Earn</h3>
                                <div className="text-4xl md:text-6xl font-black mb-3">₹500!</div>
                                <p className="text-[10px] md:text-xs opacity-90 font-bold">*Terms and Conditions apply</p>
                            </div>

                            {/* Right Side - Content */}
                            <div className="md:w-[62%] p-8 md:p-10 flex flex-col justify-center">
                                <h4 className="text-lg md:text-2xl font-black text-gray-900 mb-6 leading-tight">
                                    Help your friends and relatives from Jharkhand get a domestic work job in Bangalore on EzyHelpers.
                                </h4>

                                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">How to Refer:</p>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        'Share their details via WhatsApp or call us',
                                        'Give your friend’s name, age, and job preference',
                                        'They join EzyHelpers, complete placement, and you earn ₹500'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100 mt-0.5">
                                                <span className="text-xs font-bold text-indigo-600">{idx + 1}</span>
                                            </div>
                                            <span className="text-gray-700 font-bold text-sm md:text-base leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-600 text-white font-black py-4 px-8 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-2xl text-center"
                                >
                                    Refer & Earn ₹500
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display">How to Apply for Patient Care Jobs</h2>
                            <p className="text-gray-600 font-bold text-base md:text-lg">We keep the process simple so you can start quickly.</p>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
                            {[
                                {
                                    step: "1",
                                    title: "Contact EzyHelpers",
                                    desc: "Call or fill the online form. We explain job types, salary, and duties clearly.",
                                    icon: PhoneIcon
                                },
                                {
                                    step: "2",
                                    title: "Share Your Details",
                                    desc: "Give us your name, age, skills, and any experience in cleaning, cooking, or caregiving.",
                                    icon: UserPlusIcon
                                },
                                {
                                    step: "3",
                                    title: "Training & Job Placement",
                                    desc: "Attend training, complete verification, interview with the family, and start work with full support.",
                                    icon: SparklesIcon
                                }
                            ].map((step) => (
                                <div key={step.step} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg ring-4 ring-white">
                                        {step.step}
                                    </div>
                                    <div className="mt-6 mb-6 inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed text-xs md:text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-black text-indigo-800 mb-4">Call now</p>
                            <div className="w-16 h-1 bg-indigo-200 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* We Walk With You Section */}
                <section className="section-padding bg-indigo-50 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-8 font-display tracking-tight">We Walk With You at Every Step</h2>
                            <p className="text-base md:text-xl text-gray-700 mb-12 leading-relaxed font-bold">
                                From your first call to settling into a new home, you are supported and guided. Start a journey where someone truly understands your struggles and stands with you.
                            </p>
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-indigo-600 text-white font-black text-xl py-5 px-12 rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl transform hover:scale-105 group"
                            >
                                Connect With Us Today
                            </Link>
                        </div>
                    </div>
                    {/* Background accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
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
