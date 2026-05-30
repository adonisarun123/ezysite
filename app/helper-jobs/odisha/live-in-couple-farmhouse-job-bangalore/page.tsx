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
    UserIcon as OutlineUserIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'
import { JobPostingSchema } from '@/components/schema'

export const metadata: Metadata = {
    title: 'Live-in Couple For Farmhouse Jobs in Bangalore',
    description: 'Peaceful farmhouse caretaker jobs for couples in Bangalore. Live together, save more, zero placement fees. Direct employer salary.',
    openGraph: {
        title: 'Live-in Couple For Farmhouse Jobs in Bangalore',
        description: 'Peaceful farmhouse caretaker jobs for couples in Bangalore. Live together, save more, zero placement fees. Direct employer salary.',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Can we apply if we have a small child with us?',
        answer: 'It is possible, but not always allowed. Most families prefer couples without children because farmhouse caretaker jobs need full attention. If your child is older and goes to school, some families may agree. Please discuss this clearly with EzyHelpers before applying.',
    },
    {
        question: 'Can we cook our own food?',
        answer: 'Yes. In most farmhouse or private property jobs, couples get a small kitchen or cooking area. Families usually provide groceries, and you can cook food in your own space comfortably.',
    },
    {
        question: 'Does EzyHelpers charge money for finding a job?',
        answer: 'No. EzyHelpers never takes registration fees, placement charges, or commissions for farmhouse jobs in Bangalore for couples. Your full salary is yours.',
    },
    {
        question: 'How long does it take to get a job after contacting EzyHelpers?',
        answer: 'It may take a few days to a few weeks. We match you with the right live-in farmhouse caretaker jobs in Bangalore based on your profile. Once a suitable property is available, we guide you to come to Bangalore.',
    },
    {
        question: 'What is the notice period if we want to leave the job?',
        answer: 'Usually, the notice period is 15 to 30 days in caretaker jobs in Bangalore properties. In emergency situations, EzyHelpers helps talk to the employer and supports a smooth and safe exit.',
    }
]

export default function FarmhouseCoupleJobsOdishaBangalorePage() {
    return (
        <>
            <JobPostingSchema
                title="Live-in Couple For Farmhouse Jobs in Bangalore"
                description="Peaceful farmhouse caretaker jobs in Bangalore for couples from Odisha. Live together, save more, zero placement fees. Direct employer salary, on-site stay, property care duties, and steady income."
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
                        { label: 'Farmhouse Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore/hin"
                                className="w-10 h-5 bg-violet-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"
                                />
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-violet-800 via-violet-500 to-violet-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 font-bold ">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal ">Farmhouse Jobs in Bangalore for Couples from Odisha</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4 font-bold  leading-relaxed">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    Looking for peaceful outdoor work? Live-in Couple For Farmhouse Jobs in Bangalore offer on-site stay, property care duties, and steady income for couples seeking rural-style environments.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1 font-bold ">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ On-Site Accommodation</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Long-Term Placement</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Monthly Direct Salary</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold ">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    Apply for Couple Farmhouse Jobs
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

                {/* Location Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Job Location: Bangalore</h2>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8 ">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display ">What makes EzyHelpers different</h3>
                                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full  font-bold"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-bold  leading-tight">
                                {[
                                    { text: "Free Job, No Fees", icon: ShieldCheckIcon },
                                    { text: "Direct jobs, no agents involved", icon: UserPlusIcon },
                                    { text: "Clear work and salary explained before joining", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "Salary paid on time, every month", icon: BanknotesIcon },
                                    { text: "Training and guidance provided", icon: AcademicCapIcon },
                                    { text: "Help even after job placement", icon: HeartIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-white p-4 rounded-xl border border-violet-100 shadow-sm font-bold `}>
                                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 font-bold  leading-tight">
                                            <item.icon className="w-5 h-5 text-violet-600" />
                                        </div>
                                        <span className="font-bold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Live-In Farmhouse Jobs in Bangalore for Couples</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 text-center md:text-left  font-bold leading-relaxed">
                            <p className="text-lg text-gray-700 font-bold leading-relaxed mb-6 ">
                                Live-in farmhouse caretaker jobs in Bangalore are good for married couples who want peaceful and steady work. These jobs are usually in private properties, villas, or farmhouses. Compared to heavy city housework, this work is calmer and more stable. You both manage property care as a team and stay together.
                            </p>
                            <p className="text-violet-700 font-bold uppercase tracking-widest text-xs mb-8  leading-relaxed">Farmhouse owners in Bangalore trust couples from Odisha because of your honesty and discipline.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-bold  leading-relaxed">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3 leading-relaxed ">
                                        <OutlineUserIcon className="w-6 h-6 text-violet-600 font-bold  leading-relaxed" /> Husband's duties
                                    </h3>
                                    <ul className="space-y-3 font-bold text-gray-700  leading-relaxed">
                                        {[
                                            "Garden maintenance and lawn care",
                                            "Property security and gatekeeping",
                                            "Basic repairs and maintenance work",
                                            "Vehicle washing and driving if licensed",
                                            "Animal care if pets or farm animals"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3 leading-relaxed ">
                                        <HeartIcon className="w-6 h-6 text-pink-500 font-bold  leading-relaxed" /> Wife's duties
                                    </h3>
                                    <ul className="space-y-3 font-bold text-gray-700  leading-relaxed">
                                        {[
                                            "Housekeeping of main house & guest rooms",
                                            "Cooking for owners and visitors",
                                            "Keeping all indoor areas clean and tidy",
                                            "Indoor plant care",
                                            "Guest welcome and service"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 bg-violet-50 rounded-2xl p-8 border border-violet-100 font-bold  leading-relaxed">
                                <h3 className="text-lg font-bold text-violet-900 mb-4 flex items-center gap-2 leading-relaxed ">
                                    <SparklesIcon className="w-6 h-6 font-bold  leading-relaxed" /> Shared duties
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-gray-700  leading-relaxed">
                                    {[
                                        "Helping during owner visits",
                                        "Looking after entire property alone",
                                        "Property monitoring together",
                                        "Event support during gatherings",
                                        "Making sure no strangers enter"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></div>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-3 px-10 rounded-xl hover:bg-violet-700 transition-colors shadow-lg"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Salary for Farmhouse Caretaker Jobs in Bangalore</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm text-center leading-relaxed ">Salary depends on property size, experience, and responsibilities. We explain everything clearly before you travel.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                                <div className="w-20 h-20 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform  font-bold leading-relaxed">
                                    <OutlineHomeModernIcon className="w-10 h-10 font-bold  leading-relaxed" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 ">Farmhouse Jobs in Bangalore for Couples</h3>
                                <p className="text-violet-700 font-bold text-2xl md:text-3xl mb-4  leading-relaxed ">₹22,000 to ₹30,000</p>
                                <div className="space-y-2 font-bold text-gray-600 text-sm  leading-relaxed ">
                                    <p>✓ Free accommodation inside property</p>
                                    <p>✓ Electricity & water usually included</p>
                                </div>
                            </div>
                            <div className="bg-violet-900 rounded-3xl p-8 shadow-xl border border-violet-800 flex flex-col items-center text-center text-white group hover:-translate-y-2 transition-all">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-violet-100 mb-6 group-hover:scale-110 transition-transform  font-bold leading-relaxed">
                                    <SparklesIcon className="w-10 h-10 font-bold  leading-relaxed" />
                                </div>
                                <h3 className="text-xl font-bold mb-2  leading-relaxed">Live-in Farmhouse Caretaker Jobs</h3>
                                <p className="text-violet-100 font-bold text-2xl md:text-3xl mb-4  leading-relaxed">₹25,000 to ₹35,000</p>
                                <div className="space-y-2 font-bold text-violet-200 text-sm  leading-relaxed">
                                    <p>✓ 24-hour stay with food support</p>
                                    <p>✓ Sometimes groceries or allowance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Eligibility Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 font-bold ">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Who Can Apply</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm text-center  leading-relaxed">You can apply for a private property couple jobs in Bangalore if:</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold  leading-relaxed"></div>
                        </div>

                        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl font-bold ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-bold ">
                                {[
                                    "Married couples only",
                                    "Age between 21 and 50 years",
                                    "Basic education is enough",
                                    "Freshers welcome",
                                    "Willing to take care of property respectfully",
                                    "Experience in farming/security is advantage"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm text-gray-700  font-bold leading-relaxed">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0 font-bold  leading-relaxed" />
                                        <span className="text-sm md:text-base font-bold  leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white font-bold ">
                    <div className="container-custom font-bold ">
                        <div className="bg-gradient-to-br from-violet-800 to-violet-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden font-bold ">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 font-bold  leading-relaxed"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20 font-bold  leading-relaxed"></div>

                            <div className="relative z-10 font-bold ">
                                <div className="text-center max-w-3xl mx-auto mb-12 font-bold ">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white  leading-relaxed">About EzyHelpers – Trusted Helper Jobs</h2>
                                    <p className="text-violet-100 text-lg md:text-xl font-bold  leading-relaxed">
                                        We connect helpers like you with safe Domestic Helper jobs across India without charging any fees.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 font-bold  leading-relaxed">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 font-bold  leading-relaxed">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight  leading-relaxed">
                                            <HandThumbUpIcon className="w-6 h-6 font-bold  leading-relaxed" /> We Focus On
                                        </h3>
                                        <ul className="space-y-3 font-bold text-violet-50  leading-relaxed">
                                            <li className="flex items-start gap-2 ">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                <span className="text-sm md:text-base ">Respectful jobs in Bangalore</span>
                                            </li>
                                            <li className="flex items-start gap-2 ">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                <span className="text-sm md:text-base ">Strict safety and background checks</span>
                                            </li>
                                            <li className="flex items-start gap-2 ">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                <span className="text-sm md:text-base ">Helper welfare and long-term support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 lg:col-span-2 font-bold  leading-relaxed">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight  leading-relaxed">
                                            <ShieldCheckIcon className="w-6 h-6 font-bold  leading-relaxed" /> Why Helpers Trust EzyHelpers
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-bold  leading-relaxed">
                                            <ul className="space-y-3 font-bold  leading-relaxed">
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Provided jobs for 5,000+ helpers</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Supported 10,000+ families</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span className="leading-tight ">Training aligned with Sector Skill Council (DWSSC)</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Placement only in respectful homes</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3 font-bold  leading-relaxed">
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Continuous support after placement</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Help during misunderstandings or issues</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Assistance with job changes if needed</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0 font-bold  leading-relaxed"></div>
                                                    <span>Regular salary and long-term work</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-violet-900/50 rounded-2xl p-6 border border-violet-700/50 backdrop-blur-sm font-bold  leading-relaxed">
                                    <div className="flex items-center gap-4  font-bold leading-relaxed">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300 shadow-lg font-bold  leading-relaxed">
                                            <HeartIcon className="w-6 h-6 font-bold  leading-relaxed" />
                                        </div>
                                        <div className="font-bold  leading-relaxed">
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1  leading-relaxed">Our Belief</h4>
                                            <p className="text-white  font-bold leading-relaxed">Good Homes for Helpers. Good Helpers for Families.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4  font-bold leading-relaxed">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300 shadow-lg font-bold  leading-relaxed">
                                            <GlobeAltIcon className="w-6 h-6 font-bold  leading-relaxed" />
                                        </div>
                                        <div className="font-bold  leading-relaxed">
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1  leading-relaxed">Locations We Serve</h4>
                                            <p className="text-sm text-violet-50  font-bold leading-relaxed">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50 font-bold  leading-relaxed">
                    <div className="container-custom font-bold  leading-relaxed">
                        <div className="text-center mb-16 px-4 font-bold  leading-relaxed">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-relaxed">Support and Benefits for Helpers at EzyHelpers</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold  leading-relaxed"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto font-bold  leading-relaxed">
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
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group  font-bold leading-relaxed">
                                    <div className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300  font-bold leading-relaxed`}>
                                        <item.icon className="w-7 h-7 font-bold  leading-relaxed" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight  leading-relaxed">{item.title}</h3>
                                    <p className="text-gray-600 font-bold text-sm leading-relaxed ">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden font-bold  leading-relaxed">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10 font-bold  leading-relaxed" />
                    <div className="container-custom font-bold  leading-relaxed">
                        <div className="max-w-4xl mx-auto font-bold  leading-relaxed">
                            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group  font-bold leading-relaxed">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16 group-hover:scale-110 transition-transform font-bold  leading-relaxed"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16 font-bold  leading-relaxed"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center  font-bold leading-relaxed">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:rotate-12 transition-transform  font-bold leading-relaxed">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500 font-bold  leading-relaxed" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left  font-bold leading-relaxed">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display  leading-relaxed">NEST – Safe Hostel for Women Helpers</h2>
                                    <div className="space-y-4 mb-8 font-bold  leading-relaxed">
                                        <p className="text-gray-600 text-lg font-bold  leading-relaxed">
                                            Women helpers can stay at NEST anytime in Bangalore. Safe rooms, daily meals, and affordable stay help you settle comfortably before starting work.
                                        </p>
                                    </div>
                                    <Link
                                        href="/nest-hostel"
                                        className="inline-flex items-center gap-2 text-pink-600 text-lg hover:gap-3 transition-all group/cta font-bold  leading-relaxed"
                                    >
                                        Learn more about NEST <ArrowRightIcon className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform font-bold  leading-relaxed" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" location="Odisha" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50 font-bold  leading-relaxed">
                    <div className="container-custom font-bold  leading-relaxed text-center">
                        <div className="text-center mb-16 px-4 font-bold  leading-relaxed">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">How to Apply for Farmhouse Jobs in Bangalore for Couples</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs md:text-sm text-center  leading-relaxed">Six Simple Steps From Odisha to Your Job in Bangalore</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold  leading-relaxed text-center"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 font-bold  leading-relaxed text-center">
                            {[
                                { step: "1", title: "Contact EzyHelpers", desc: "Call us or fill the form for salary, food, and stay details." },
                                { step: "2", title: "Share Your Details", desc: "Provide your name, age, and experience in the Farmhouse job or home services." },
                                { step: "3", title: "Job Information", desc: "Understand duties, working hours, safety rules, and monthly off days clearly." },
                                { step: "4", title: "Travel for Job", desc: "Come to Bangalore and attend basic job training before joining." },
                                { step: "5", title: "Job Interview", desc: "Speak with the family via video call, get selected, and confirm the job." },
                                { step: "6", title: "Start Working", desc: "Begin your patient care job with full support from EzyHelpers." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 relative group hover:shadow-xl transition-all duration-300  font-bold leading-relaxed text-center">
                                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center text-lg mb-4 shadow-md group-hover:scale-110 transition-transform font-bold  leading-relaxed text-center mx-auto">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2  leading-relaxed text-center">{item.title}</h3>
                                    <p className="text-gray-600 text-xs font-bold leading-relaxed  text-center">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 max-w-3xl mx-auto bg-white p-10 rounded-[3rem] border border-violet-100 shadow-2xl relative overflow-hidden font-bold  leading-relaxed text-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 font-bold  leading-relaxed"></div>
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display leading-tight  px-4">Earn Double What You Earn in Odisha. Keep It All.</h3>
                            <p className="text-gray-700 text-lg font-bold mb-8  leading-relaxed">
                                No rent to pay. No food costs. No agent cuts. You both work, you both save. Pure savings. Pure progress.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold  leading-relaxed">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105 transition-all font-bold  leading-relaxed"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-white text-violet-700 py-4 px-12 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all text-lg shadow-sm font-bold  leading-relaxed"
                                >
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-white font-bold  leading-relaxed">
                    <div className="container-custom max-w-4xl font-bold  leading-relaxed">
                        <div className="text-center mb-12 px-4 font-bold  leading-relaxed">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display  leading-relaxed">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold  leading-relaxed"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
