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
    UserGroupIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Domestic Helper Jobs in Bangalore | Free Jobs | EzyHelpers',
    description: 'Apply for trusted domestic helper jobs in Bangalore. Talk to families directly, get a fixed salary, leave, work hours and ongoing support.',
    openGraph: {
        title: 'Domestic Helper Jobs in Bangalore | Free Jobs | EzyHelpers',
        description: 'Apply for trusted domestic helper jobs in Bangalore. Talk to families directly, get a fixed salary, leave, work hours and ongoing support.',
        url: 'https://www.ezyhelpers.com/helper-jobs',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need to give money to get a job?',
        answer: 'No. You do not have to give any money. Registration and job help are completely free. We never take your salary or any fees.',
    },
    {
        question: 'Will I talk to the family before going to work?',
        answer: 'Yes. We will arrange a phone or video call with the family. You go only if you are comfortable and agree.',
    },
    {
        question: 'Will my salary and work time be fixed?',
        answer: 'Yes. Salary, working hours, weekly holidays, and leave are decided before you go and shared clearly.',
    },
    {
        question: 'Will I get food and a place to stay?',
        answer: 'For live-in work, food and room are usually provided. This is informed to you before you join.',
    },
    {
        question: 'What documents do I need to submit?',
        answer: 'You need to submit a copy of your Aadhaar card and local address proof for verification purposes.',
    },
    {
        question: 'What if the job does not suit me after joining?',
        answer: 'If the job does not suit you after joining, you can inform our team at any time. We will support you in changing the job safely.',
    },
    {
        question: 'Who will help if there is a problem at work?',
        answer: 'You can call our team anytime. We will speak to the family and help sort out the problem.',
    },
    {
        question: 'Can I go home for festivals, emergencies, or leave the job if needed?',
        answer: 'Yes. Leave and holidays are decided before joining. You can go home for festivals or emergencies as per the agreement. If you want to leave the job, please inform us in advance so we can arrange a replacement.',
    },
    {
        question: 'Can I apply for another job with you later?',
        answer: 'Yes. You can apply for another job with us later. Our team will check available jobs at that time and help you find a suitable one.',
    }
]

export default function HelperJobsPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs' }
                    ]}
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-purple-800 via-purple-500 to-purple-700 text-white pt-20 pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display leading-tight text-white whitespace-normal md:whitespace-nowrap">Helper Job Opportunities Across India</h1>

                            <p className="text-xl md:text-2xl font-semibold mb-6 text-purple-100 max-w-4xl mx-auto">Safe & Reliable Domestic Helper jobs Near You</p>

                            <div className="space-y-4 mb-10 max-w-5xl mx-auto">
                                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                                    Find honest, respectful, and trusted Helper jobs in Bangalore and other cities with EzyHelpers.
                                    <br className="hidden md:block" />
                                    We support women helpers from Odisha, Jharkhand, West Bengal, Bihar, Assam, and all Indian states.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center max-w-7xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ No middlemen or agents</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ No registration or placement fees</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Clear written work agreement</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Ongoing support even after you start work</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center w-full bg-white text-purple-700 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Register as a Helper – It's Free
                                </Link>

                                <Link
                                    href="#find-jobs-by-state"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    View Jobs by State
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-custom">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-gray-100 mt-4 mb-4">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10,000+</div>
                                <div className="text-purple-600 text-sm md:text-base font-medium">Happy Helpers Placed</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">9</div>
                                <div className="text-purple-600 text-sm md:text-base font-medium">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                                <div className="text-purple-600 text-sm md:text-base font-medium">Support Available</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">250+</div>
                                <div className="text-purple-600 text-sm md:text-base font-medium">Cities Covered</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Jobs Available Section */}
                <section className="section-padding bg-gray-100">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Job Categories – Types of Helper Jobs Available</h2>
                            <p className="text-lg text-gray-600">We offer a wide range of Housemaid Jobs in Bangalore and other regions, depending on your skills and interests</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Housekeeping Jobs", desc: "Cleaning, washing, mopping, and daily home maintenance work.", icon: UserGroupIcon },
                                { title: "Cooking / Kitchen Helper Jobs in Bangalore", desc: "Home cooking for families (vegetarian / non-vegetarian).", icon: HeartIcon },
                                { title: "Nanny / Babysitter Jobs", desc: "Baby care, child supervision, feeding, and daily child support.", icon: BriefcaseIcon },
                                { title: "Elderly Care Jobs", desc: "Daily support, companionship, and non-medical assistance for seniors.", icon: ShieldCheckIcon },
                                { title: "Patient Care Jobs", desc: "Non-medical care and daily help for patients at home.", icon: UserGroupIcon },
                                { title: "Live-in Housekeeping Couple Jobs", desc: "Husband-wife jobs for cleaning, maintenance, and home support with stay.", icon: UserGroupIcon },
                                { title: "Couple Security Jobs (Small Apartments)", desc: "Husband-wife watchman and security jobs for apartment buildings.", icon: UserGroupIcon },
                                { title: "Japa Maid Jobs", desc: "Mother and newborn care jobs (post-delivery support).", icon: UserGroupIcon },
                                { title: "Live-in Couple Jobs for Farmhouse", desc: "Husband-wife jobs for farmhouse care, security, and maintenance.", icon: UserGroupIcon }
                            ].map((job, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                                        <job.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                    <p className="text-gray-600 text-sm">{job.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Apply for Helper jobs - Registration is Free
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Find Helper jobs by State / Region */}
                <section id="find-jobs-by-state" className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Find Helper jobs by State / Region</h2>
                            <p className="text-md lg:text-lg text-gray-600 max-w-3xl mx-auto">Choose your state or region to see male and female helper jobs in Bangalore available for you</p>
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                            {[
                                "Jharkhand",
                                "Odisha",
                                "Assam",
                                "West Bengal",
                                "Bihar",
                                "Chhattisgarh",
                                "Uttar Pradesh",
                                "Uttarakhand",
                                "Madhya Pradesh",
                                "Andhra Pradesh",
                                "Telangana",
                                "Tamil Nadu",
                                "Kolkata"
                            ].map((state, index) => (
                                <Link
                                    key={index}
                                    href={`/helper-jobs/${state.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group bg-purple-50 hover:bg-purple-100 rounded-xl p-4 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
                                >
                                    <div className="text-sm md:text-lg font-bold text-purple-700 transition-colors">
                                        {state}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-gray-700 font-semibold">Select your state or city to view available Helper jobs</p>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center font-display">About EzyHelpers</h2>

                            <div className="space-y-6 text-center">
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                                    EzyHelpers <span className="font-bold text-purple-700 px-2 py-1 rounded">helps helpers like you</span> find <span className="font-bold text-blue-700 px-2 py-1 rounded">safe, respectful, and trusted jobs</span> across India.
                                </p>

                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                                    We connect you <span className="font-bold text-purple-700 px-2 py-1 rounded">directly with families</span>, without agents or middlemen.
                                </p>

                                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 shadow-lg border-2 border-purple-500 mt-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-200 mb-4">Our Aim is simple:</h3>
                                    <p className="text-xl md:text-2xl text-white leading-relaxed">
                                        To make sure every helper gets <span className="font-bold text-yellow-300 px-2 py-1 rounded">dignity, safety, clear work terms, and long-term support</span> before joining work and even after you start.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Helpers Trust EzyHelpers */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why Helpers Trust EzyHelpers</h2>
                        </div>

                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">We <span className="font-bold text-purple-700">never take any cut</span> from your salary</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700"><span className="font-bold text-purple-700">No agents, no middlemen</span>, no confusion</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">Job details are <span className="font-bold text-purple-700">clearly explained</span> before you join</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700"><span className="font-bold text-purple-700">Respect, safety, and dignity</span> always come first</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">Our support continues <span className="font-bold text-purple-700">even after you start working</span></p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">You speak <span className="font-bold text-purple-700">directly with the family</span> before accepting any job</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">We work with <span className="font-bold text-purple-700">DWSCC and Skill India</span> to support training, safety, and welfare</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">Your <span className="font-bold text-purple-700">salary, work hours, holidays, and leave</span> are fixed in writing</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">If a job is not suitable, we help you <span className="font-bold text-purple-700">change safely without pressure</span></p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">Our team speaks politely and treats you with <span className="font-bold text-purple-700">care and respect</span>, not as labour</p>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <CheckCircleIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">Thousands of helpers from <span className="font-bold text-purple-700">many states across</span> India already trust EzyHelpers</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits For You */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Benefits For You</h2>
                            <p className="text-lg text-gray-600">We help you find <span className="font-bold">safe and honest jobs</span></p>
                        </div>

                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Good Salary</h3>
                                <p className="text-gray-700 leading-relaxed">Your salary is fixed before joining and paid on time every month without delay.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Direct Salary from Employer</h3>
                                <p className="text-gray-700 leading-relaxed">You receive your full salary directly from the employer with no deductions or cuts.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Flexible Work Options</h3>
                                <p className="text-gray-700 leading-relaxed">Choose Live-in, Full-time, or Part-time Helper Jobs in Bangalore based on your needs and availability.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Free Basic Training</h3>
                                <p className="text-gray-700 leading-relaxed">Get basic training in cooking, baby care, elderly care, and housekeeping before joining.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">No Commission, No Agent</h3>
                                <p className="text-gray-700 leading-relaxed">We never charge helpers any money. There are no agents or hidden fees.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Written Job Agreement</h3>
                                <p className="text-gray-700 leading-relaxed">Salary, work hours, weekly off, and leave are clearly written and agreed in advance.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Emergency Stay Help</h3>
                                <p className="text-gray-700 leading-relaxed">In case you must leave your job suddenly, we help you stay safely in Nest, a women-only hostel in Bangalore, until a new job is arranged.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Weekly Check-In Calls</h3>
                                <p className="text-gray-700 leading-relaxed">Our team checks regularly to ensure food, safety, and work conditions are proper.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Refer & Earn ₹500</h3>
                                <p className="text-gray-700 leading-relaxed">Bring a friend from your village. If she completes 1 month, you get ₹500 as a referral reward.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Problem-Solving Assistance</h3>
                                <p className="text-gray-700 leading-relaxed">If any issue arises at work, our team speaks with the family and helps resolve it fairly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers?</h2>
                            <p className="text-lg text-gray-600">See the clear difference for yourself</p>
                        </div>

                        <div className="max-w-5xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-purple-600 to-blue-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20">Key Points</th>
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20">Local Agent / Middleman</th>
                                        <th className="p-4 text-left text-white font-bold text-lg">EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Registration Fee</td>
                                        <td className="p-4 text-gray-700 bg-red-50">They often take 15 days or 1 month of your salary as a "commission".</td>
                                        <td className="p-4 text-gray-700 bg-green-50"><span className="font-bold text-green-700 text-lg">FREE</span>. We never take a single rupee from your hard-earned salary.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Employee Safety</td>
                                        <td className="p-4 text-gray-700 bg-red-50">They send you to any house. No background check.</td>
                                        <td className="p-4 text-gray-700 bg-green-50 font-semibold">100% respectful and good homes.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Salary Rules / Payment</td>
                                        <td className="p-4 text-gray-700 bg-red-50">Only verbal promises. Employers can change salary later; may be delayed or partially deducted</td>
                                        <td className="p-4 text-gray-700 bg-green-50 font-semibold">Written contract. Salary, timing, and work are fixed; <span className="font-bold text-green-700 text-lg">guaranteed monthly payments</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Weekly Holidays / Leaves</td>
                                        <td className="p-4 text-gray-700 bg-red-50">Often no holidays; forced to work 30 days</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Fixed weekly off and monthly off as promised</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Emergency Help</td>
                                        <td className="p-4 text-gray-700 bg-red-50">May “switch off” phone when you have a problem</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Our team is always ready to support and guide you whenever you need help.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Respect & Dignity</td>
                                        <td className="p-4 text-gray-700 bg-red-50">Often no holidays; forced to work 30 days</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Professional partner: helpers are treated with respect</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Legal Contracts</td>
                                        <td className="p-4 text-gray-700 bg-red-50">Usually verbal promises; no written agreement</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Written contract covering salary, leave, and work hours</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Training & Skill Support</td>
                                        <td className="p-4 text-gray-700 bg-red-50">None; expected to manage on your own</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Basic skill training & practical tips for better work</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Referral & Bonuses</td>
                                        <td className="p-4 text-gray-700 bg-red-50">Rarely offered</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Earn ₹500 referral bonus for helping friends get jobs</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Job Matching / Choice</td>
                                        <td className="p-4 text-gray-700 bg-red-50">Limited; may force placement without choice</td>
                                        <td className="p-4 text-gray-700 bg-green-50">You choose city, job type, and interview families before accepting</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-900 bg-purple-50">Career Growth & Recognition</td>
                                        <td className="p-4 text-gray-700 bg-red-50">None</td>
                                        <td className="p-4 text-gray-700 bg-green-50">Opportunities for training, skill growth, and recognition programs</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Mobile-friendly card view */}
                            <div className="md:hidden space-y-4 mt-6">
                                <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden shadow-md">
                                    <div className="bg-purple-600 text-white font-bold p-3">Registration Fee</div>
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">Local Agent:</div>
                                        <div className="text-gray-700">They often take 15 days or 1 month of your salary as a "commission".</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">EzyHelpers:</div>
                                        <div className="text-gray-700"><span className="font-bold text-green-700 text-lg">FREE</span>. We never take a single rupee from your hard-earned salary.</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden shadow-md">
                                    <div className="bg-purple-600 text-white font-bold p-3">Employee Safety</div>
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">Local Agent:</div>
                                        <div className="text-gray-700">They send you to any house. No background check.</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">EzyHelpers:</div>
                                        <div className="text-gray-700 font-semibold ">100% respectful and good homes.</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden shadow-md">
                                    <div className="bg-purple-600 text-white font-bold p-3">Salary Rules / Payments</div>
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">Local Agent:</div>
                                        <div className="text-gray-700">Only verbal promises. Employers can change salary</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">EzyHelpers:</div>
                                        <div className="text-gray-700 font-semibold">Written contract. Salary, timing, and work are fixed.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center max-w-4xl mx-auto bg-purple-50 rounded-2xl p-8 border border-purple-100">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Start Your Helper Job Journey Today</h3>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                                Join thousands of domestic helpers from Odisha, Jharkhand, Bengal, Bihar, Assam, and other states that found <span className="font-bold text-purple-700">safe work and stable income</span> through EzyHelpers.
                            </p>
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                            >
                                Apply for Helper jobs Today
                            </Link>
                        </div>
                    </div>
                </section>

                {/* How to start your job */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Start Your Job with EzyHelpers</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Register Your Profile</h3>
                                <p className="text-gray-600">Call us or fill the online form. Share your skills, job preference, and expected salary.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Matched</h3>
                                <p className="text-gray-600">We connect you with respectful families that match your preferences. We will arrange an interview with the family over video call.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Start Working</h3>
                                <p className="text-gray-600">Once both sides agree, we confirm the placement, share the written job terms, and continue to support you throughout your work.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Ready to Start Your Career?</h2>
                            <p className="text-xl mb-8 text-purple-100">Join EzyHelpers today and connect with trusted families who value your work and skills.</p>

                            <div className="gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-white text-purple-700 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Call Now to Register – It’s Free!
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
