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
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon
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
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm relative -top-7 md:-top-0 lg:-top-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/hin"
                                className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"
                                />
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-purple-800 via-purple-500 to-purple-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Domestic Helper Jobs In Bangalore  100% Free | EzyHelpers</h1>

                            <p className="text-xs sm:text-base md:text-2xl font-semibold mb-4 text-purple-100 max-w-5xl mx-auto">Looking For A Safe Job With A Good Salary? <br />Tired Of Agents Taking Money/False Promises?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-sm sm:text-base md:text-xl text-purple-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    At EzyHelpers, You Can Find Trusted Domestic Helper Jobs In Bangalore
                                </p>
                            </div>

                            <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[8px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ No Agents</div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[8px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ No Fees</div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-0 py-2 md:px-6 md:py-3 text-[8px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ No Commission</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[8px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ Job Support Always</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[8px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ Written Agreement</div>
                            </div>

                            <p className="text-sm sm:text-base md:text-xl font-semibold mb-6 text-yellow-300 max-w-4xl mx-auto">Move From Low-Paying Local Work To Stable Jobs With Dignity And Security</p>

                            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center w-full bg-white text-purple-700 font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    Free Registration
                                </Link>

                                <Link
                                    href="#find-jobs-by-state"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    Find Jobs Near You
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-custom">
                        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100 mt-4 mb-4">
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">5,000+</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">9</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">100%</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Direct Salary From Employer</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">₹0</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Registration/Placement Fees</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Jobs Available Section */}
                <section className="section-padding bg-gray-100">
                    <div className="container-custom">
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Job Categories</h2>
                            <p className="text-lg text-gray-600">Choose Work Based On Your Skills:</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                            {[
                                { title: "Housekeeping Jobs", desc: "Cleaning, Washing, Mopping, And Daily Housework.", icon: UserGroupIcon },
                                { title: "Cooking Jobs", desc: "Veg / Non-Veg Home Cooking For Families.", icon: HeartIcon },
                                { title: "Nanny / Babysitter", desc: "Baby Care, Feeding, And Child Supervision.", icon: BriefcaseIcon },
                                { title: "Elderly Care", desc: "Daily Help And Support For Senior Citizens At Home.", icon: ShieldCheckIcon },
                                { title: "Patient Care", desc: "Non-Medical Care And Daily Help For Patients At Home.", icon: UserGroupIcon },
                                { title: "Live-in Couple Jobs", desc: "Husband-Wife Jobs For Cleaning, Maintenance, And Home Support With Stay.", icon: UserGroupIcon },
                                { title: "Couple Security Jobs", desc: "Husband-Wife Watchman And Security Jobs For Apartment Buildings.", icon: UserGroupIcon },
                                { title: "Japa Maid Jobs", desc: "Mother & Newborn Care After Delivery.", icon: UserGroupIcon },
                                { title: "Farmhouse Couple Jobs", desc: "Husband-Wife Jobs For Farmhouse Care, Security, And Maintenance.", icon: UserGroupIcon }
                            ].map((job, index) => (
                                <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className="bg-purple-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                                        <job.icon className="h-5 w-5 md:h-6 md:w-6" />
                                    </div>
                                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 leading-tight">{job.title}</h3>
                                    <p className="text-gray-600 text-xs md:text-sm leading-snug">{job.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Find Helper jobs by State / Region */}
                <section id="find-jobs-by-state" className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Find Helper jobs by State / Region</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">Choose your state or region to see male and female helper jobs in Bangalore available for you</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    state: "Jharkhand",
                                    desc: "Stop Working For Low Local Wages And Move To Bangalore For High-Paying, Verified Jobs Where Your Safety And Dignity Come First.",
                                    features: ["Cooking, Cleaning, Baby & Elderly Care Jobs", "Live-In, Full-Time & Part-Time Options", "Clear Work Role Before Joining", "Fixed Monthly Income With Weekly Off", "Respectful Workplace"]
                                },
                                {
                                    state: "Odisha",
                                    desc: "Avoid The Fear Of Uncertain Work And Dishonest Middlemen By Joining Respectful Bangalore Families Who Provide Written Contracts And Timely Monthly Salaries.",
                                    features: ["Housemaid, Cook & Childcare Jobs", "Live-In & Day Work Available", "Written Job Details Provided", "Safe Stay & Food For Live-In Jobs", "Fixed Monthly Salary"]
                                },
                                {
                                    state: "Assam",
                                    desc: "Do Not Struggle With Limited Local Options Anymore; Apply For Stable Bangalore Jobs Where The Employer Pays Your Full Salary Directly And On-Time.",
                                    features: ["Multiple Household Job Categories", "Flexible Work Options", "Direct Payment From Employer", "Long-Term Job Stability", "Safe Working Environment"]
                                },
                                {
                                    state: "Bihar",
                                    desc: "Tired Of Paying Heavy Commissions To Agents? EzyHelpers Help You Find Honest Work In Bangalore With Zero Fees And Total Job Security.",
                                    features: ["Cook, Maid & Caregiver Jobs", "Support After Joining", "Clear Work Agreement", "Respectful Family Environment", "No Agent Fees"]
                                },
                                {
                                    state: "Chhattisgarh",
                                    desc: "Forget About Long Working Hours With No Rest; EzyHelpers Offers Fixed Timings, Weekly Holidays, And A Professional, Safe Working Environment For You.",
                                    features: ["Cleaning, Cooking & Home Support", "Full-Time & Live-In Positions", "Fixed Work Hours", "Support Even After Joining", "Safe And Trusted Homes"]
                                },
                                {
                                    state: "Uttar Pradesh",
                                    desc: "Escape The Struggle Of Finding A Steady Income By Choosing Reliable Household Work In Bangalore With Fixed Leaves And On-Time Salaries Paid.",
                                    features: ["Cooking, Housekeeping & Childcare", "Live-In & Full-Day Work Available", "Written Salary & Leave Terms", "Safe & Verified Homes Only", "Different Job Options"]
                                },
                                {
                                    state: "Uttarakhand",
                                    desc: "Stop Searching For Seasonal Work And Secure A Permanent, High-Paying Job In Bangalore With Direct Payments And No Hidden Agent Charges.",
                                    features: ["Multiple Job Categories Available", "Flexible Work Hours", "Direct Salary From Employer", "No Agent Or Commission", "Easy Job Change If Needed"]
                                },
                                {
                                    state: "Madhya Pradesh",
                                    desc: "Apply For Domestic Work In Bangalore And Discuss Salary And Duties Directly With Families.",
                                    features: ["Cook, Maid & Elder Support Jobs", "Live-In & Full-Day Options", "Clear Job Expectations", "No Registration Charges", "Interview With The Family Before Joining"]
                                },
                                {
                                    state: "Andhra Pradesh",
                                    desc: "Stop Waiting For Delayed Payments; Employers In Bangalore Pay Your Full Salary Directly Into Your Bank Account On A Fixed Date Every Month.",
                                    features: ["Flexible Work Hours", "Live-In & Full-Time Positions", "Direct Salary By Employer", "Quick Job Matching", "Regular Monthly Payment"]
                                },
                                {
                                    state: "Telangana",
                                    desc: "Avoid Low-Paying Local Jobs And Secure A Stable Future In Bangalore With Direct Bank Payments And Respectful Families Who Value Your Work.",
                                    features: ["Cooking, Cleaning & Care Roles", "Apartment & Independent Home Jobs", "Clear Work Duties", "Free Room & Food", "Direct Bank Transfer Salary"]
                                },
                                {
                                    state: "Tamil Nadu",
                                    desc: "Do Not Settle For Verbal Promises That Change Later; Get A Written Job Agreement From EzyHelpers That Ensures Your Rights And Safety.",
                                    features: ["Housekeeping, Cooking & Care Jobs", "Help If Any Problem Arises", "Written Job Agreement", "Fixed Offs And Work Hours", "Free Job, No Commission"]
                                },
                                {
                                    state: "Kolkata",
                                    desc: "Stop Dealing With Local Job Insecurity And Move To Bangalore For Trusted Domestic Helper Jobs That Offer A Fixed Income And Full Support For Helpers.",
                                    features: ["Babysitting, Cooking & Maid Jobs", "Full-Time & Live-In Roles", "Fixed Monthly Income", "Ongoing Support From Our Team", "No Registration Fee"]
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/helper-jobs/${item.state.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group bg-white rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-purple-700 mb-3 group-hover:text-purple-800 relative z-10">{item.state}</h3>

                                    <p className="text-gray-700 text-xs md:text-sm mb-5 leading-relaxed font-medium relative z-10">
                                        {item.desc}
                                    </p>

                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 font-semibold text-purple-600 text-sm group-hover:underline flex items-center gap-1 relative z-10">
                                        View Jobs in {item.state} <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About & Trust Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-purple-600 text-white text-xs font-bold tracking-wider mb-4">
                                ABOUT US
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">About EzyHelpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                                EzyHelpers Helps Domestic Helpers To Find Safe, Respectful, And Trusted Jobs Across India. We Connect You Directly With Families, Without Agents Or Middlemen
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl max-w-6xl mx-auto">
                            <div className="mb-0">
                                <h3 className="text-xl md:text-3xl font-bold text-purple-600 mb-8">Why Helpers Trust Us</h3>

                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
                                    {[
                                        "Speak Directly With The Family Before Accepting Any Job",
                                        "No Agents Or Middlemen. 100% Free Job Support",
                                        "Job Details Explained Clearly Before Joining",
                                        "Respect, Safety, And Dignity Come First",
                                        "Our Support Continues Even After You Start Work",
                                        "No Commission Or Salary Deductions Ever",
                                        "We Have Partnered With DWSCC And Skill India To Support Helpers' Welfare",
                                        "Written Job Terms For Clarity And Protection",
                                        "Safe Job Change Support If Work Is Not Suitable",
                                        "Thousands Of Helpers Across India Trust EzyHelpers"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-600 flex-shrink-0 mt-0.5 md:mt-1" />
                                            <p className="text-sm md:text-lg text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits For You */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Benefits For You</h2>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Good Salary</h3>
                                <p className="text-gray-700 leading-relaxed">Fixed Before Joining. Paid On Time.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Direct Salary</h3>
                                <p className="text-gray-700 leading-relaxed">Employer Pays You Directly. No Cuts.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Flexible Work Options</h3>
                                <p className="text-gray-700 leading-relaxed">Live-In, Full-Time, Or Part-Time Options.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Free Basic Training</h3>
                                <p className="text-gray-700 leading-relaxed">Cleaning, Cooking, Baby Care, And Elderly Care.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Written Agreement</h3>
                                <p className="text-gray-700 leading-relaxed">Salary, Leave, And Work Hours Fixed In Advance.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Emergency Stay Help</h3>
                                <p className="text-gray-700 leading-relaxed">Safe Women-Only Hostel Support If Needed.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Weekly Check-In Calls</h3>
                                <p className="text-gray-700 leading-relaxed">We Regularly Check Your Safety And Work Conditions.</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">Refer & Earn ₹500</h3>
                                <p className="text-gray-700 leading-relaxed">Bring A Friend And Earn ₹500 After 1 Month.</p>
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

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-gradient-to-r from-purple-600 to-blue-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2">Local Agent / Middleman</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2">EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            agent: "Take 15–30 Days' Salary As Commission",
                                            ezy: "100% FREE Registration. No Fees Ever"
                                        },
                                        {
                                            agent: "Send Helpers Without Proper Home Checks",
                                            ezy: "Verified And Respectful Families Only"
                                        },
                                        {
                                            agent: "Only Verbal Salary Promises",
                                            ezy: "Salary Fixed Before Joining"
                                        },
                                        {
                                            agent: "No Fixed Weekly Off",
                                            ezy: "Weekly Off And Leaves Clearly Decided"
                                        },
                                        {
                                            agent: "No Help During Emergencies",
                                            ezy: "Support Team Available When You Need Help"
                                        },
                                        {
                                            agent: "No Written Agreement",
                                            ezy: "Written Job Agreement For Safety"
                                        },
                                        {
                                            agent: "No Training Or Support",
                                            ezy: "Free Basic Training Provided"
                                        },
                                        {
                                            agent: "Limited Job Choice",
                                            ezy: "Choose Your Job And Family"
                                        },
                                        {
                                            agent: "No Growth Or Benefits",
                                            ezy: "Referral Bonus ₹500 & Skill Growth Support"
                                        }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-green-50">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4 mt-6">
                            {[
                                {
                                    agent: "Take 15–30 Days' Salary As Commission",
                                    ezy: "100% FREE Registration. No Fees Ever"
                                },
                                {
                                    agent: "Send Helpers Without Proper Home Checks",
                                    ezy: "Verified And Respectful Families Only"
                                },
                                {
                                    agent: "Only Verbal Salary Promises",
                                    ezy: "Salary Fixed Before Joining"
                                },
                                {
                                    agent: "No Fixed Weekly Off",
                                    ezy: "Weekly Off And Leaves Clearly Decided"
                                },
                                {
                                    agent: "No Help During Emergencies",
                                    ezy: "Support Team Available When You Need Help"
                                },
                                {
                                    agent: "No Written Agreement",
                                    ezy: "Written Job Agreement For Safety"
                                },
                                {
                                    agent: "No Training Or Support",
                                    ezy: "Free Basic Training Provided"
                                },
                                {
                                    agent: "Limited Job Choice",
                                    ezy: "Choose Your Job And Family"
                                },
                                {
                                    agent: "No Growth Or Benefits",
                                    ezy: "Referral Bonus ₹500 & Skill Growth Support"
                                }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden shadow-md">
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-bold text-red-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✗</span> Local Agent:
                                        </div>
                                        <div className="text-gray-700">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-bold text-green-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✓</span> EzyHelpers:
                                        </div>
                                        <div className="text-gray-700">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
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
                </section>

                {/* How to start your job */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Start Your Job with EzyHelpers</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
                                    <UserPlusIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Register Your Profile</h3>
                                <p className="text-gray-600">Call us or fill the online form. Share your skills, job preference, and expected salary.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
                                    <UserGroupIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Matched</h3>
                                <p className="text-gray-600">We connect you with respectful families that match your preferences. We will arrange an interview with the family over video call.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
                                    <BanknotesIcon className="w-8 h-8" />
                                </div>
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

            </main >
            <Footer />
        </>
    )
}
