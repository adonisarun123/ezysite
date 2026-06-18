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
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    HomeIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ChartBarIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ArrowRightIcon,
    PhoneIcon,
    InformationCircleIcon,
    ClockIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Home Cook Jobs in Bangalore – Apply Free Today',
    description: 'Apply for home cook jobs in Bangalore from Assam with safe placement, guidance, and full support. Join thousands of helpers working confidently and securely.',
    openGraph: {
        title: 'Home Cook Jobs in Bangalore – Apply Free Today',
        description: 'Apply for home cook jobs in Bangalore from Assam with safe placement, guidance, and full support. Join thousands of helpers working confidently and securely.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I have to pay any fees to get a cooking job through EzyHelpers?',
        answer: 'No, not at all. Getting a job through EzyHelpers is completely free. We never charge any fees from helpers. No hidden charges, no agent fees, nothing.',
    },
    {
        question: 'I have never worked as a cook before. Can I still apply?',
        answer: 'Yes, absolutely. Freshers are welcome to apply. If you can cook tasty homemade food and are willing to work sincerely, you are eligible for the job.',
    },
    {
        question: 'Will my salary be paid on time every month?',
        answer: 'Yes. The family pays your full salary directly to you before 10th of every month. There are no deductions from our side and no delays.',
    },
    {
        question: 'How many days of training will I get before starting work?',
        answer: 'You will get 3 days of training in Bangalore. This covers cooking basics, hygiene, kitchen handling, and how to communicate well with the family.',
    },
    {
        question: 'I am worried about where to stay when I first arrive in Bangalore. What should I do?',
        answer: 'If your job placement takes some time, you can stay at our NEST hostel. It is a safe hostel for women helpers with affordable rooms and daily meals.',
    },
    {
        question: 'How long does it take to get a cooking job after I apply?',
        answer: 'The process is quick. Once you apply, we match you with a suitable family, arrange a video call, and help you confirm the job. Most helpers get placed within 7 to 15 days of applying.',
    }
]

export default async function HomeCookJobsAssamBangalorePage() {
  const __dbHtml = await getHtmlContent("helper-jobs/assam/home-cook-jobs-bangalore")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/assam/home-cook-jobs-bangalore", faqs)
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Assam', href: '/helper-jobs/assam' },
                        { label: 'Home Cook Jobs in Bangalore' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-1 rounded-md">English</span>
                            <Link href="/helper-jobs/assam/home-cook-jobs-bangalore/hin" className="text-xs font-medium text-gray-500 hover:text-orange-600 transition-colors px-2 py-1 rounded-md hover:bg-orange-50">हिन्दी</Link>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-orange-800 via-orange-500 to-orange-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Home Cook Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-orange-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                People from Assam are appreciated for their delicious cooking skills and hardworking nature. We help you find safe and respectful cooking work with trusted families in Bangalore.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Safe Kitchen Workplaces',
                                    'Basic Training Included',
                                    'Direct Jobs, No Fees'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-orange-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Home Cook Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-orange-100 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-orange-50 border-b border-orange-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-gray-600 font-medium mb-8">We focus on your safety, income, and long-term support so you can work without stress and build a better future for yourself and your family.</p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free Job, No Fees',
                                    'Direct jobs, no middle agents',
                                    'Clear cooking work details before joining',
                                    'Salary explained properly with no confusion',
                                    'Monthly salary paid on time without delay',
                                    'Training and guidance provided for cooking work',
                                    'Help even after job placement, if any issues'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-orange-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                                        <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm font-bold text-orange-700">We provide verified home cook jobs in Bangalore for both freshers and experienced helpers. Whether you are a veg cook, a non-veg cook, or a multi-cuisine cook, we guide you properly and support you even after you start working.</p>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">House Cooking Jobs Categories in Bangalore</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Choose the cooking job that fits your lifestyle, experience, and comfort. We have three options available based on your needs.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Live-in */}
                            <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <HomeIcon className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Live in Home Cook Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Stay and work in the same house. You live with the family 24 hours a day. These are also known as a 24-hour cook job in Bangalore or a full-time live-in cook in Bangalore.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You will stay in the employer’s house and cook daily meals. A separate room or sleeping space and free food will be given to you.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">Full-time stay. You will prepare breakfast, lunch, and dinner daily. You get 2 days' leave every month.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">New & experienced helpers and those looking for safe and long-term live-in cook jobs in Bangalore.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You save most of your money because rent and food are completely free, and you have stable, long-term work.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <BriefcaseIcon className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Time Home Cook Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Fixed timing cooking job. You go back to your room or accommodation after work. Food is not included unless discussed in advance.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You cook meals as per family requirements. After your duty finishes, you can go back to your room or house.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">8 to 10 hours daily. You get 1 off per week.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want regular timing and fixed routine cooking work.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You get a fixed salary every month and a stable daily routine without staying at the employer’s home.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <ClockIcon className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Part-Time Cook Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Less working hours and a flexible schedule. We provide part-time cook jobs in Bangalore for morning or evening shifts.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">Cooking meals, cutting vegetables, preparing food, and basic kitchen cleaning, depending on the house's needs.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">4 to 6 hours. Morning cook or evening cook options available.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want flexible work or want to work in multiple houses.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You can earn extra money and manage your time freely while working in more than one home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Salary for Home Cook Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">We always explain the salary clearly before you travel from Assam so there is no confusion.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-orange-600 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Working Hours</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="hover:bg-orange-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Live-in Home Cook Jobs</td>
                                                <td className="px-6 py-4 font-bold text-orange-600">₹18,000 to ₹22,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Full-time stay</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Free food and stay</td>
                                            </tr>
                                            <tr className="hover:bg-orange-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Full-Time Cook Jobs</td>
                                                <td className="px-6 py-4 font-bold text-orange-600">₹16,000 to ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">8 to 10 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                            <tr className="hover:bg-orange-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Part-Time Cook Jobs</td>
                                                <td className="px-6 py-4 font-bold text-orange-600">₹8,000 to ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">4 to 6 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="text-center text-sm font-bold text-gray-700 mt-6">Your salary depends on your cooking experience, the type of food you can cook, and the work type.</p>

                            <div className="mt-8 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-orange-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-orange-700 shadow-md hover:shadow-lg transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Home Cook Work Responsibilities</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Families in Bangalore respect helpers from Assam for their discipline and cooking skills. When you take a cooking job in Bangalore, your daily duties may include these tasks.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Preparing breakfast, lunch, and dinner',
                                    'Cooking veg and non-veg food',
                                    'North Indian and South Indian cooking as required',
                                    'Cutting vegetables and preparing ingredients',
                                    'Keeping the kitchen clean and organised',
                                    'Washing utensils after cooking',
                                    'Managing grocery items and storage',
                                    'Following hygiene and cleanliness rules',
                                    'Helping with small kitchen-related work',
                                    'Maintaining proper food quality and taste'
                                ].map((task, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                        <CheckCircleIcon className="w-6 h-6 text-orange-500 shrink-0" />
                                        <span className="font-bold text-gray-800">{task}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm font-bold text-orange-600 uppercase tracking-widest mt-8">We explain all responsibilities clearly before you start work so you feel confident and comfortable.</p>
                        </div>
                    </div>
                </section>

                {/* Cooking Categories and Specialisations */}
                <section className="section-padding bg-gray-50 border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Cooking Categories and Specialisations</h2>
                                <p className="text-base text-gray-600 font-medium">Families in Bangalore follow different food styles.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Veg Cook Jobs", desc: "Prepare vegetarian meals based on family preference. This may include simple daily food or strict no onion and no garlic cooking as required." },
                                    { title: "Non-Veg Cooking Jobs", desc: "Cook chicken, mutton, fish, or egg dishes as per the family’s taste. Clean handling and proper cooking methods are important." },
                                    { title: "North Indian Cook Jobs", desc: "Prepare Rotis, Parathas, Sabzi, Paneer dishes, and different types of Dal for daily meals in many homes." },
                                    { title: "South Indian Cook Jobs", desc: "Make Idli, Dosa, Sambar, Rasam, and rice-based meals. Basic knowledge of local dishes is helpful." },
                                    { title: "Basic Snacks and Tea Preparation", desc: "Prepare tea, coffee, and simple snacks like Poha, Upma, or light evening items for the family." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h3 className="font-bold mb-2 uppercase tracking-tight text-orange-600">{item.title}</h3>
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Can Apply for Home Cook Jobs in Bangalore</h2>
                                <p className="text-base text-gray-600 font-medium">You can apply if you match any of the following conditions.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Best Suited for", desc: "There is a high demand for kitchen helper jobs in Bangalore. Male cooks and Female cooks can apply.", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "You must be between 18 and 45 years old.", icon: UserCircleIcon },
                                    { title: "Basic Education Required", desc: "Basic education is enough. You should understand simple instructions.", icon: AcademicCapIcon },
                                    { title: "Freshers Can Apply", desc: "No experience? No problem. We provide basic cooking training before placement.", icon: SparklesIcon },
                                    { title: "Experience Advantage", desc: "Experienced cooks get better salaries and more job options, like veg cook, non-veg cook, or multi-cuisine cook.", icon: ChartBarIcon },
                                    { title: "Good Work Attitude", desc: "You should be honest, willing to learn, and ready to follow house rules.", icon: HandThumbUpIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-orange-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-orange-100 font-medium">We connect helpers like you with trusted cooking jobs in Bangalore and across India without charging any fees.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Respectful jobs in Bangalore</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Safe and comfortable working conditions</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Helper welfare and long-term support</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Provided jobs for 5,000+ helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Served 10,000+ families across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Training aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Placement only in respectful homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Duties are explained clearly before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Continuous support after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Help during misunderstandings or job issues</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Assistance with job changes if needed</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> Regular salary and long-term work opportunities</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center bg-black/20 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-300">Locations We Serve:</span> Bangalore | Bareilly | Mumbai | Hyderabad | Delhi NCR | Pune | Odisha, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-gray-50 border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "You get basic training for your job role. A certificate is given after you finish.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We give you an EzyHelpers coat and a grooming kit.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You receive clear work agreements and our regular support.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your placement is delayed, you can stay at our women's hostel.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "You get basic medical coverage for emergency needs.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We place you only in homes that treat you with respect.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good work can lead to a higher salary or jobs in other cities or abroad.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "Your employer pays your full salary directly to you every month.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you build a profile to find better maid jobs.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "We help you from registration until after you are placed.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-orange-600" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-gray-700 mb-8">Worried about where to stay in Bangalore? NEST is our safe hostel, specially for women helpers from Assam.</p>

                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-orange-800 shadow-sm border border-orange-100">Safe rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-orange-800 shadow-sm border border-orange-100">Daily meals</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-orange-800 shadow-sm border border-orange-100">Affordable stay</span>
                                </div>

                                <p className="text-md font-bold text-orange-700 mb-8 max-w-2xl mx-auto">
                                    You can settle comfortably before your job starts without stress or last-minute problems.
                                </p>

                                <Link href="/nest" className="inline-flex items-center justify-center bg-orange-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-orange-700 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="orange" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for Cooking Jobs</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">From your village in Assam to your new cooking job in Bangalore, the process is very easy.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-100 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "Contact & Details Sharing", desc: "Call EzyHelpers or fill out the simple form. Share your skills and previous work experience with us." },
                                    { step: 2, title: "Job Matching", desc: "We shortlist and match you with suitable jobs based on your skills, then connect you with potential employers." },
                                    { step: 3, title: "Video Interview & Confirmation", desc: "Talk to the customer through a video call. If you agree, travel to Bangalore and confirm your joining." },
                                    { step: 4, title: "Training & Start Work", desc: "Attend 3 days of training, understand salary and job details clearly, and start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12 mb-8">
                            <p className="text-sm md:text-base font-bold text-orange-700">Getting a cooking job is simple and fast with us. No confusion, no agents, and full guidance from start to work. Contact us now and get started.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-orange-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-orange-700 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
