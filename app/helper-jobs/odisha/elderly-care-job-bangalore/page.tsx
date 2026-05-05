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
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Elderly Care Jobs in Bangalore – Senior Care Work',
    description: 'Vacancies open for elderly care jobs in Bangalore. Care work for seniors in homes. Men and women helpers can apply. Simple process.',
    openGraph: {
        title: 'Elderly Care Jobs in Bangalore – Senior Care Work',
        description: 'Vacancies open for elderly care jobs in Bangalore. Care work for seniors in homes. Men and women helpers can apply. Simple process.',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need to be a nurse for Elderly care jobs in Bangalore?',
        answer: 'No. You do not need to be a nurse. Senior citizen care attendants mainly need patience and kindness. Families want reliable helpers who treat elders like their own.',
    },
    {
        question: 'How long is the training in Bangalore?',
        answer: 'Training is usually 2 to 3 days. It covers hygiene, basic care skills, and professional behaviour.',
    },
    {
        question: 'Will I get my salary on time?',
        answer: 'Yes. Salary is paid directly between the 1st and the 10th every month.',
    },
    {
        question: 'Can I work only 8 or 10 hours and stay outside?',
        answer: 'Yes. Full-time elderly care helper jobs in Bangalore allow fixed hours, and you can return home after duty.',
    },
    {
        question: 'Can I apply if I am a man?',
        answer: 'Yes. Male helpers are needed for senior care attendant jobs in Bangalore, especially for male elders.',
    },
    {
        question: 'What if the family is not good?',
        answer: 'Call us immediately. We will talk to the family or arrange a job change if needed.',
    },
    {
        question: 'Will I get the same food as the family?',
        answer: 'Most families provide proper food. Some allow cooking Odia food also.',
    },
    {
        question: 'Do I need to know about medical machines?',
        answer: 'No. We teach the simple use of a BP machine or sugar testing strips during elderly care helper job training in Bangalore.',
    },
    {
        question: 'Can I talk to my family daily?',
        answer: 'Yes. You can speak to your family during rest time.',
    },
    {
        question: 'Are night duties required in live-in Elderly care jobs?',
        answer: 'It depends on the elder’s condition. We explain clearly before placement.',
    },
    {
        question: 'I am from a village in Odisha with no experience. Can I apply?',
        answer: 'Yes. Freshers can apply. We train you in basic elderly care work. Your caring nature matters most.',
    }
]

export default function ElderlyCareJobsOdishaBangalorePage() {
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
                        { label: 'Elderly Care Jobs' }
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Elderly Care Jobs in Bangalore for Odisha Helpers</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    Patient and caring by nature? Elderly Care Jobs in Bangalore give you the opportunity to support senior citizens with dignity while earning a good income and working in peaceful environments.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Respectful Work Environment</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Defined Care Responsibilities</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Regular Salary Cycle</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    Apply for Elderly Care Jobs
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Job Location: Bangalore</h2>
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
                                        <span className="font-semibold text-gray-800">{item.text}</span>
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

                {/* Types of Elderly Care Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Types of Elderly Care Jobs in Bangalore</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Choose work that fits your lifestyle and needs.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 text-violet-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Live-In Elderly Care Jobs in Bangalore</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Stay and work in the same house</h4>
                                        <p className="text-sm md:text-base text-gray-600 font-bold mb-2">Work</p>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">You will stay in the employer’s home and take care of the senior full-time. Separate room or space and free food will be given.</p>
                                        <p className="text-sm md:text-base text-gray-600 font-bold mb-2">Working Time</p>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">24-hour stay with proper rest time. 2 days leave every month.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">Helpers from Odisha looking for safe, long-term live-in senior care work in Bangalore.</p>
                                        <p className="text-[13px] md:text-sm text-violet-800 bg-violet-50 p-3 rounded-xl border border-violet-100 font-medium leading-snug">
                                            <strong>Why Choose This Job:</strong> You save maximum money because rent and food are free.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Full-Time Elderly Care Helper Jobs</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Fixed timing. Go home after work.</h4>
                                        <p className="text-sm md:text-base text-gray-600 font-bold mb-2">Work</p>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">You help seniors with walking, eating, medicine reminders, and daily support. After duty, you go back to your room or a relative’s house.</p>
                                        <p className="text-sm md:text-base text-gray-600 font-bold mb-2">Working Time</p>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">8 to 10 hours daily. 1 weekly off.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">Helpers from Odisha already staying in Bangalore who want fixed timing and personal freedom.</p>
                                        <p className="text-[13px] md:text-sm text-blue-800 bg-blue-50 p-3 rounded-xl border border-blue-100 font-medium leading-snug">
                                            <strong>Why Choose This Job:</strong> You get a regular salary and time for yourself.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Part-Time Elderly Care Jobs</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Less hours. Extra income.</h4>
                                        <p className="text-sm md:text-base text-gray-600 font-bold mb-2">Work</p>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">You visit for a few hours to help with bathing, exercise, or elder support work.</p>
                                        <p className="text-sm md:text-base text-gray-600 font-bold mb-2">Working Time</p>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">4 to 6 hours daily. Morning or evening shift.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Best For</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">Helpers who want flexible timing or want to work in more than one house.</p>
                                        <p className="text-[13px] md:text-sm text-purple-800 bg-purple-50 p-3 rounded-xl border border-purple-100 font-medium leading-snug">
                                            <strong>Why Choose This Job:</strong> You can earn extra income and manage your own time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Table Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary for Senior Care Attendant Jobs in Bangalore</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">Your salary depends on experience, the senior's health condition, and working hours. We clearly explain the salary before you travel.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                            <table className="w-full text-left">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Job Type</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Monthly Salary</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Working Hours</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">Stay</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">Live-In Elderly Care</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹20,000 to ₹25,000</td>
                                        <td className="p-4 md:p-6 text-gray-600">Full-time stay</td>
                                        <td className="p-4 md:p-6 text-gray-600 font-medium">Free food and stay</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">Full-Time Senior Care</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹16,000 to ₹20,000</td>
                                        <td className="p-4 md:p-6 text-gray-600">8 to 10 hours daily</td>
                                        <td className="p-4 md:p-6 text-gray-400 italic">Not provided</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">Part-Time Senior Care</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹8,000 to ₹12,000</td>
                                        <td className="p-4 md:p-6 text-gray-600">4 to 6 hours daily</td>
                                        <td className="p-4 md:p-6 text-gray-400 italic">Not provided</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-10 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg"
                            >
                                <PhoneIcon className="w-6 h-6 mr-2" /> Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Senior Caretaker Work Responsibilities</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto font-medium">Families in Bangalore respect elderly care helpers for patience and kindness. Your duties may include:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                        <HeartIcon className="w-6 h-6" />
                                    </div>
                                    Daily Elderly Care Duties
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Help the elderly person walk safely inside the house",
                                        "Support while sitting, standing, or getting out of bed",
                                        "Assist with bathing, dressing, grooming, and hygiene",
                                        "Help during meals and ensure proper food and water intake",
                                        "Give medicines on time as told by the family",
                                        "Sit, talk, and reduce loneliness",
                                        "Offer emotional support with calm behaviour",
                                        "Prevent falls and stay alert",
                                        "Inform family about health or behaviour changes"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                            <SparklesIcon className="w-6 h-6" />
                                        </div>
                                        Additional Responsibilities
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Accompany to hospital or doctor visits",
                                            "Provide night support in live-in elderly care jobs",
                                            "Help with light elder-related tasks only"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0"></div>
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8 bg-violet-50 p-6 rounded-2xl border border-violet-100 italic text-violet-800 font-medium">
                                    Note: We ensure that your workload is respectful and manageable, focused entirely on the elder's wellbeing.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Who Can Apply</h2>
                            <p className="text-gray-600 font-medium">Senior Care attendant jobs in Bangalore are open for:</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                        <div className="bg-violet-50 rounded-3xl p-8 md:p-10 border border-violet-100">
                            <ul className="space-y-5">
                                {[
                                    { text: "Men and Women Caregivers", icon: UserGroupIcon },
                                    { text: "Age between 18 and 40 years", icon: ClockIcon },
                                    { text: "Basic education to read medicine names", icon: AcademicCapIcon },
                                    { text: "Freshers can apply", icon: SparklesIcon },
                                    { text: "Kind, patient, and honest nature", icon: HeartIcon }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-violet-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-lg md:text-xl font-bold text-gray-800">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 text-center">
                                <p className="text-gray-700 text-lg mb-8 font-medium">If you truly care for elders and want to earn more, we are ready to guide you.</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 shadow-lg transition-all transform hover:scale-105"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
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
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Trusted Helper Jobs</h2>
                                    <p className="text-violet-100 text-lg md:text-xl">
                                        We connect helpers like you with safe Domestic Helper jobs across India without charging any fees.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3">
                                            <HandThumbUpIcon className="w-6 h-6" /> We Focus On
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-violet-50 text-sm md:text-base">Respectful jobs in Bangalore</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-violet-50 text-sm md:text-base">Strict safety and background checks</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-violet-50 text-sm md:text-base">Helper welfare and long-term support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3">
                                            <ShieldCheckIcon className="w-6 h-6" /> Why Helpers Trust EzyHelpers
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-medium">
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-violet-900/50 rounded-2xl p-6 border border-violet-700/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <HeartIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">Our Belief</h4>
                                            <p className="font-medium text-white">Good Homes for Helpers. Good Helpers for Families.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">Locations We Serve</h4>
                                            <p className="text-sm text-violet-50 font-medium">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
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
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
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
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg font-medium">
                                            Women helpers can stay at NEST anytime in Bangalore.
                                        </p>
                                        <p className="text-gray-600 text-lg font-medium">
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">How to Apply for Elderly Care Jobs</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">We guide you step-by-step and ensure a smooth and safe job start.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "1", title: "Contact EzyHelpers", desc: "Call us or fill the form for salary, food, and stay details." },
                                { step: "2", title: "Share Your Details", desc: "Provide your name, age, and experience in the elderly care job or home services." },
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
                                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-violet-50 p-8 rounded-3xl border border-violet-100 shadow-sm">
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display">Your Caregiving Skills Are Needed Now.</h3>
                            <p className="text-gray-700 text-lg font-medium mb-8">
                                Families are actively looking for reliable elderly care helpers who can support their loved ones with respect. Apply through EzyHelpers today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg text-lg"
                                >
                                    Register Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-white text-violet-700 font-bold py-4 px-10 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all text-lg"
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
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight">
                                Common Questions about Elderly Care Jobs
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
