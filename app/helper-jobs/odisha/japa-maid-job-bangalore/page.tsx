import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
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
    InformationCircleIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'
import { JobPostingSchema } from '@/components/schema'

export const metadata: Metadata = {
    title: 'Japa Maid Job in Bangalore for Odisha Helpers',
    description: 'High-demand Japa Maid Jobs in Bangalore. Live-in mother & newborn care work. No agents, no fees, monthly salary ₹25,000–₹35,000.',
    openGraph: {
        title: 'Japa Maid Job in Bangalore for Odisha Helpers',
        description: 'High-demand Japa Maid Jobs in Bangalore. Live-in mother & newborn care work. No agents, no fees, monthly salary ₹25,000–₹35,000.',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'How long does a Japa Maid job in Bangalore usually last?',
        answer: 'A Japa Maid Job in Bangalore usually lasts 40 days to 3 months. Some families later offer a full-time newborn caregiver job in Bangalore based on your performance.',
    },
    {
        question: 'What age of babies will I be caring for?',
        answer: 'Japa Maids care for newborn babies from 0 to 3 months old. Sometimes the family may extend the job if they need continued newborn baby care support.',
    },
    {
        question: 'What happens if the family wants to extend my job?',
        answer: 'If both you and the family agree, the job can extend beyond the initial Japa period. Some families convert it into a full-time nanny position with an adjusted salary.',
    },
    {
        question: 'Can I apply if I am currently working in Odisha but want to shift to Bangalore?',
        answer: 'Yes. Many women from Odisha shift to Bangalore for better income. We guide you about training, travel, and the safe joining process for Japa Maid Jobs in Bangalore.',
    },
    {
        question: 'Is experience mandatory for women coming from Odisha?',
        answer: 'Yes. For Japa Maid Jobs in Bangalore, a minimum of 5 years of experience in mother and newborn baby care is compulsory because families expect skilled and confident helpers.',
    },
    {
        question: 'Can I choose to stay in Bangalore after the Japa job ends?',
        answer: 'Yes. If you perform well, we can help you find a long-term nanny or child care job in Bangalore so you can continue earning and saving.',
    }
]

export default async function JapaMaidJobsOdishaBangalorePage() {
  const __dbHtml = await getHtmlContent("helper-jobs/odisha/japa-maid-job-bangalore")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/odisha/japa-maid-job-bangalore", faqs)
    return (
        <>
            <main className="min-h-screen">
                <JobPostingSchema
                title="Japa Maid Job in Bangalore"
                description="Japa maid (newborn care) jobs in Bangalore for helpers from Odisha. Verified families, training, fair pay, long-term support."
                datePosted="2026-01-01"
                validThrough="2027-01-01"
                employmentType="FULL_TIME"
                jobLocation={{ addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" }}
            />
            <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Odisha', href: '/helper-jobs/odisha' },
                        { label: 'Japa Maid Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/japa-maid-job-bangalore/hin"
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

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal ">Japa Maid Jobs in Bangalore for Mother and Newborn Care For Helpers from Odisha</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    Experienced in newborn care? Japa Maid Jobs in Bangalore offer short-term maternity support roles with focused baby and mother care, helping you earn a higher salary through specialised skills.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Newborn Care Roles</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ Defined Time Period Work</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ Higher Skill-Based Pay</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    Apply for Japa Maid Jobs
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Job Location: Bangalore</h2>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display ">What makes EzyHelpers different</h3>
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
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Japa Maid Job Categories in Bangalore</h2>
                            <p className="text-gray-600 font-bold max-w-4xl mx-auto  leading-relaxed">
                                Japa Maid jobs come under mother and newborn care work. Families hire Japa Maids during the post-delivery period when both mother and baby need special attention.
                            </p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-gray-100">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

                            <div className="relative z-10 space-y-8">
                                <p className="text-lg text-gray-700 font-bold leading-relaxed">
                                    In Bangalore, many families prefer Odisha helpers because they understand newborn hygiene, massage techniques, feeding routines, and mother recovery care. This is not regular maid work. This is full responsibility for the mother and newborn baby care.
                                </p>

                                <div className="bg-violet-900 text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                                            <SparklesIcon className="w-10 h-10" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2 ">Live-In Japa Maid Jobs in Bangalore</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                                        <HomeIcon className="w-4 h-4" /> Work
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">Stay inside the employer’s house with a separate sleeping space, free food, and full responsibility for the mother and newborn baby care.</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                                        <ClockIcon className="w-4 h-4" /> Working Time
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">Full-time stay with round-the-clock newborn care, including night feeding, diaper changing, and proper 6 to 8 hours rest.</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                                        <HeartIcon className="w-4 h-4" /> Best For
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">Experienced women from Odisha who are confident in handling mother and newborn baby care in Japa Maid Jobs in Bangalore.</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                                        <HandThumbUpIcon className="w-4 h-4" /> Why Choose This Job
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">Save rent and travel costs while working 40, 60, or 90 days with possible permanent nanny opportunities.</p>
                                                </div>
                                            </div>
                                            <Link
                                                href="/helper-registration"
                                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold py-3 px-10 rounded-xl mt-8 hover:bg-violet-50 transition-colors shadow-lg"
                                            >
                                                Apply for Live-In Japa Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">Japa Maid Work Responsibilities</h2>
                            <p className="text-gray-600 font-bold max-w-3xl mx-auto  leading-relaxed">When you take Japa Maid Jobs in Bangalore, your duties are only related to mother and newborn baby care.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-violet-50 rounded-3xl p-8 md:p-10 border border-violet-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-bold text-violet-900 mb-6 flex items-center gap-2 border-b border-violet-200 pb-4 relative z-10 ">
                                    <SparklesIcon className="w-6 h-6" /> Daily Duties
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-gray-700 relative z-10">
                                    {[
                                        "Feeding the newborn baby",
                                        "Diaper changing and baby bathing",
                                        "Baby oil massage and care",
                                        "Watching the baby sleep and safety",
                                        "Cleaning baby bottles and toys",
                                        "Helping the mother rest and recover",
                                        "Mother's massage after delivery",
                                        "Washing baby clothes separately",
                                        "Keeping the mother and baby area clean"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 bg-white/50 p-3 rounded-xl border border-white backdrop-blur-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></div>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-3xl p-8 md:p-10 border border-blue-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 border-b border-blue-200 pb-4 relative z-10 ">
                                    <InformationCircleIcon className="w-6 h-6" /> Additional Duties
                                </h3>
                                <ul className="space-y-4 font-bold text-gray-700 relative z-10">
                                    {[
                                        "Helping prepare healthy food for the mother",
                                        "Washing baby bedsheets and clothes",
                                        "Small organisation related to baby care"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white backdrop-blur-sm">
                                            <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">Salary for Live-In Japa Maid Jobs in Bangalore</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto  leading-relaxed text-center">Your salary depends on experience, working hours, and family needs. We explain everything clearly before you join.</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-hidden rounded-[3rem] border border-gray-200 shadow-2xl bg-white relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                            <table className="w-full text-left relative z-10">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs md:text-sm">Job Type</th>
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs md:text-sm text-center">Monthly Salary</th>
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs md:text-sm text-center">Stay</th>
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs md:text-sm text-center">Food</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-violet-50 transition-colors group">
                                        <td className="p-6 font-bold text-gray-900  text-sm md:text-base">Live-In Mother and Newborn Care</td>
                                        <td className="p-6 font-bold text-violet-700 text-lg md:text-2xl text-center">₹25,000 to ₹30,000</td>
                                        <td className="p-6 text-gray-600 font-bold text-center  text-sm md:text-base">Included</td>
                                        <td className="p-6 text-gray-600 font-bold text-center  text-sm md:text-base">Included</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="p-8 bg-violet-900 text-white text-center font-bold  relative">
                                Food and stay are included in Live-In Japa Maid Jobs in Bangalore.
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg transform hover:scale-105"
                            >
                                <PhoneIcon className="w-6 h-6 mr-2" /> Contact Us Today
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Who Can Apply</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="bg-violet-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-800 to-violet-900 -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                {[
                                    "Experienced women helpers only",
                                    "Freshers not eligible",
                                    "Male helpers are not eligible",
                                    "Couples not applicable",
                                    "Age between 35 and 45 years",
                                    "Basic reading and writing",
                                    "Minimum 5 years of experience in mother and newborn care"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 font-bold text-violet-50 group/item hover:bg-white/20 transition-all">
                                        <CheckCircleIcon className="w-6 h-6 text-violet-300 shrink-0 group-hover/item:text-white transition-colors" />
                                        <span className="text-sm md:text-base leading-tight">{item}</span>
                                    </div>
                                ))}
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
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white ">About EzyHelpers – Trusted Helper Jobs</h2>
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
                                                <span className="text-sm md:text-base ">Respectful jobs in Bangalore</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base ">Strict safety and background checks</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base ">Helper welfare and long-term support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <ShieldCheckIcon className="w-6 h-6" /> Why Helpers Trust EzyHelpers
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-bold ">
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
                                                    <span>Duties are explained clearly before joining</span>
                                                </li>
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
                                                    <span>Regular salary and long-term work opportunities</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-violet-900/50 rounded-2xl p-6 border border-violet-700/50 backdrop-blur-sm font-bold">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300 shadow-lg">
                                            <HeartIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 ">Our Belief</h4>
                                            <p className="text-white ">Good Homes for Helpers. Good Helpers for Families.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300 shadow-lg">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 ">Locations We Serve</h4>
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
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">Support and Benefits for Helpers at EzyHelpers</h2>
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
                <section className="section-padding bg-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:rotate-12 transition-transform">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display  leading-tight">NEST – Safe Hostel for Women Helpers</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg font-bold  leading-relaxed">
                                            Women helpers can stay at NEST anytime in Bangalore. Safe rooms, daily meals, and affordable stay help you settle comfortably before starting work.
                                        </p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-pink-600 font-bold text-lg hover:gap-3 transition-all group/cta"
                                    >
                                        Contact us about accommodation <ArrowRightIcon className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
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
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">How to Apply for Japa Maid Jobs</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs md:text-sm text-center  leading-relaxed">Six Simple Steps From Your Village in Odisha to Your Workplace in Bangalore</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                            {[
                                { step: "1", title: "Contact EzyHelpers", desc: "Call us or fill the form for salary, food, and stay details." },
                                { step: "2", title: "Share Your Details", desc: "Provide your name, age, and experience in the Japa Maid job or home services." },
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
                                    <p className="text-gray-600 text-xs font-bold leading-relaxed ">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-violet-50 p-10 rounded-[3rem] border border-violet-100 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display  leading-tight px-4">Don't wait for a better opportunity to knock!</h3>
                            <p className="text-gray-700 text-lg font-bold mb-8  leading-relaxed">
                                Experienced Japa Maids from Odisha are in high demand in Bangalore. Contact EzyHelpers Now!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105 transition-all"
                                >
                                    Register Now
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
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight ">
                                Common Questions about Japa Maid Jobs
                            </h2>
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
