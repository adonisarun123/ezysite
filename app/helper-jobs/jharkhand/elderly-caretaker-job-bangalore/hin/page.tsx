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
    ClockIcon as ClockSolidIcon,
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
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'झारखंड हेल्पर्स के लिए बैंगलोर में एल्डर केयरटेकर जॉब्स',
    description: 'बेंगलुरु में केयरटेकर जॉब्स जिसमें साफ़ काम, सुरक्षित घर, ट्रेनिंग और नियमित महीने की सैलरी हो। लिव-इन और फुल-टाइम बुज़ुर्गों की देखभाल का काम।',
    openGraph: {
        title: 'झारखंड हेल्पर्स के लिए बैंगलोर में एल्डर केयरटेकर जॉब्स',
        description: 'बेंगलुरु में केयरटेकर जॉब्स जिसमें साफ़ काम, सुरक्षित घर, ट्रेनिंग और नियमित महीने की सैलरी हो। लिव-इन और फुल-टाइम बुज़ुर्गों की देखभाल का काम।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore/hin',
        type: 'website',
        images: [
            {
                url: 'https://www.ezyhelpers.com/images/elderly-caretaker-og.jpg',
                width: 1200,
                height: 630,
                alt: 'झारखंड हेल्पर्स के लिए बैंगलोर में एल्डर केयरटेकर जॉब्स',
            },
        ],
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/elderly-caretaker-job-bangalore'
        }
    },
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need experience for Elderly Care helper jobs?',
        answer: 'No. Freshers can apply. Training is provided before placement.',
    },
    {
        question: 'Will I get training before starting work?',
        answer: 'Yes. Training includes cleaning methods, hygiene, behaviour, and safety practices.',
    },
    {
        question: 'Are food and room provided in 24-Hour Live-In Elderly Caretaker Jobs in Bangalore?',
        answer: 'Yes. Live-in helpers receive meals and a room or sleeping space.',
    },
    {
        question: 'Do I need to pay money to get a job?',
        answer: 'No. EzyHelpers does not charge any fees.',
    },
    {
        question: 'Can a husband and wife apply together?',
        answer: 'Yes. Couples from Jharkhand are welcome.',
    },
    {
        question: "Will someone guide me after reaching Bangalore?",
        answer: 'Yes. Our team provides full support and guidance.',
    },
    {
        question: "What documents are required?",
        answer: 'Aadhaar card and local ID proof are required. We assist during verification.',
    },
    {
        question: "Is there any agent involved?",
        answer: 'No. We connect helpers directly with families without middlemen.',
    }
]

export default function ElderlyCaretakerJobsBangalorePage() {
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
                        { label: 'Elderly Caretaker Jobs' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">English</span>
                            <Link
                                href="/helper-jobs/jharkhand/elderly-caretaker-job-bangalore"
                                className="w-10 h-5 bg-blue-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                />
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">झारखंड हेल्पर्स के लिए बैंगलोर में एल्डर केयरटेकर जॉब्स</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-blue-100 max-w-5xl mx-auto">झारखंड से बाहर एक सुरक्षित एल्डर केयरटेकर जॉब की तलाश है?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-xs sm:text-sm md:text-xl text-blue-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    कई हेल्पर्स को साफ़ काम, कम सैलरी और बार-बार बदलने वाले काम से दिक्कत होती है। हम ईज़ीहेल्पर्स में, आपको बैंगलोर में सिर्फ़ बच्चों की देखभाल का काम, हर महीने तय सैलरी वाली जॉब और लगातार सपोर्ट के साथ सम्मानजनक एल्डर केयरटेकर जॉब्स देता है!
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई रजिस्ट्रेशन चार्ज नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ बिना एजेंट के डायरेक्ट प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाएगी</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overivew Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider mb-4 border border-blue-200">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">सैलरी और खास फ़ायदे</h2>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">बुजुर्गों की देखभाल के लिए लिव-इन जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹20,000 – ₹25,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">फ्री रहना + फ्री खाना शामिल</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">24 घंटे घर में रहने वाला काम</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">बुजुर्गों की देखभाल के लिए फुल-टाइम जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹16,000 – ₹20,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">8–10 काम के घंटे</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">बुजुर्गों की देखभाल के लिए पार्ट-टाइम जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">₹8,000 – ₹12,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">4–6 काम के घंटे</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* What You Get Grid */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">ईज़ीहेल्पर्स के साथ आपको क्या मिलता है</h3>
                                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "इज़्ज़त देने वाले परिवारों के साथ सुरक्षित नौकरी का माहौल / जगह", icon: ShieldCheckIcon },
                                    { text: "काम शुरू करने से पहले एल्डरली केयर में सही ट्रेनिंग", icon: BriefcaseIcon },
                                    { text: "पक्का पैसा के लिए लंबे समय तक जॉब के मौके", icon: StarIcon },
                                    { text: "बिना देरी के डायरेक्ट सैलरी पेमेंट", icon: BanknotesIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 ${index === 3 ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''}`}>
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    अप्लाई करने के लिए अभी कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where You Can Get Elderly Caretaker Jobs Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">एल्डरली केयरटेकर जॉब कैटेगरी</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <p className="text-lg md:text-xl text-gray-700 font-medium">बैंगलोर में एक सीनियर केयर असिस्टेंट के तौर पर, आप बुज़ुर्ग सदस्यों को रोज़ाना के कामों, व्यक्तिगत देखभाल और पूरी सेहत में मदद करेंगे। परिवार आप जैसे हेल्पर ढूंढते हैं जो सीनियर सिटिज़न की मदद कर सकें:</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {/* Hygiene and Grooming */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <HeartIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">स्वच्छता और सिंगार</h3>
                                </div>
                            </div>

                            {/* Mobility Assistance */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <UserGroupIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">चलने-फिरने में मदद</h3>
                                </div>
                            </div>

                            {/* Medication Reminders */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <ClipboardDocumentListIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">दवाई समय पर देना</h3>
                                </div>
                            </div>

                            {/* Daily Routines and Supervision */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <ClockIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">रोज़ का काम और निगरानी करना</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Elderly Caretaker Jobs Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में बुज़ुर्गों की देखभाल की नौकरियों के प्रकार</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">1. 24-घंटे लिव-इन बुज़ुर्गों की देखभाल की नौकरियां</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप परिवार के साथ 24 घंटे घर में रहेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आपके लिए एक अलग कमरा या सोने की जगह दी जाएगी।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">मुफ्त खाना शामिल होगा।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप स्वच्छता चलने-फिरने में मदद और रोज़ की देखभाल में मदद करेंगे।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम की व्यवस्था</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">ज़रूरत के हिसाब से दिन और रात सपोर्ट करेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">दिन में ठीक से आराम का समय मिलेगा।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हर महीने 2 दिन की छुट्टी मिलेगी।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है:</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">झारखंड से बैंगलोर आने वाले हेल्पर।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">शहर में बिना रहने की जगह वाले हेल्पर।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो लिव-इन बुज़ुर्गों की देखभाल के काम में सहज होंगे।</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">2. फुल-टाइम बुज़ुर्गों की देखभाल की नौकरियां</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप रोज़ाना तय घंटे काम करेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">काम के बाद घर या अपने कमरे में लौट सकते हैं।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रात भर रुकने की ज़रूरत नहीं होगी।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप खुद का ध्यान / रोज़ का काम में मदद करेंगे।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हर दिन 8–10 घंटे काम करेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हफ़्ते में 1 छुट्टी मिलेगी।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रिश्तेदारों के साथ रहने वाले हेल्पर या शेयर्ड अकोमोडेशन वाले।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो लोग फिक्स्ड शेड्यूल और बेहतर वर्क-लाइफ बैलेंस पसंद करेंगे।</span>
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
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3. पार्ट-टाइम एल्डरली केयर जॉब्स</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप हर दिन कुछ खास घंटों के लिए सीनियर्स की मदद करेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">व्यक्तिगत देखभाल, दवा और चलने-फिरने में मदद करेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">ज़रूरत पड़ने पर सीनियर्स से जुड़े हल्के घरेलू काम करेंगे।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हर दिन 4–6 घंटे काम करेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">अपने हिसाब से काम करने का समय मिलेगा।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">कम काम के घंटे चाहने वाले हेल्पर्स।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो आस-पास या रिश्तेदारों के साथ रहेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">दिन में एल्डरली केयर में आराम से काम करना चाहने वाले हेल्पर्स।</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12 mb-4">
                            <Link
                                href="tel:+919972571005"
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                अभी अप्लाई करें
                            </Link>
                        </div>

                        {/* Additional Information Section (Responsibilities & Who Can Apply) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">एल्डरली केयर वर्क की ज़िम्मेदारियाँ</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">आपकी रोज़ की ड्यूटी में ये शामिल हो सकते हैं:</p>
                                <ul className="space-y-4 mb-6 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">बुज़ुर्गों को चलने, बैठने और खड़े होने में मदद करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">नहलाने, कपड़े पहनाने और साफ़-सफ़ाई में मदद करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">खाने-पीने का ध्यान रखना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">बताए गए समय पर दवाइयां देना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">उनके साथ बातचीत करना और भावनात्मक सहारा देना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">घर के अंदर सुरक्षा का ध्यान रखना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">रूटीन पर नज़र रखना और ज़रूरत पड़ने पर परिवार को बताना</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <p className="text-blue-800 font-medium text-sm text-center">
                                        ज्वाइन करने से पहले सारी ड्यूटी साफ़-साफ़ डिस्कस की जाती हैं।
                                    </p>
                                </div>
                            </div>

                            {/* Who Can Apply */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <UserIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">कौन अप्लाई कर सकता है</h3>
                                </div>
                                <ul className="space-y-5 mb-6 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">मेल और फीमेल केयरटेकर</h4>
                                            <p className="text-gray-600 text-sm">पुरुष और महिलाएँ दोनों अप्लाई कर सकते हैं</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">उम्र: 18–40 साल</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">पढ़ाई</h4>
                                            <p className="text-gray-600 text-sm">बेसिक पढ़ना और समझना</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">अनुभव</h4>
                                            <p className="text-gray-600 text-sm">फ्रेशर्स और अनुभवी हेल्पर्स दोनों का स्वागत है</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <p className="text-blue-800 font-medium text-sm">
                                            काम शुरू करने से पहले ट्रेनिंग दी जाती है, ताकि आप पूरे भरोसे के साथ शुरुआत कर सकें।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-blue-100 text-lg md:text-xl">
                                        हम झारखंड और पूरे भारत के हेल्पर को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {/* We Focus On */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-100 border-b border-blue-700/50 pb-3">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन पर ध्यान देते हैं
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-blue-50 text-sm md:text-base">बैंगलोर में इज्ज़तदार नौकरी</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-blue-50 text-sm md:text-base">सुरक्षित और भरोसेमंद परिवार</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-blue-50 text-sm md:text-base">हेल्पर की भलाई और लंबे समय तक समर्थन</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Why Helpers Trust EzyHelpers */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-100 border-b border-blue-700/50 pb-3">
                                            <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">5,000+ हेल्पर को नौकरियां दी गई</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">10,000+ परिवारों को सपोर्ट किया</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">DWSSC और Skill India के साथ हेल्पर ट्रेनिंग</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">सिर्फ इज्ज़तदार घरों में प्लेसमेंट</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">काम शुरू होने से पहले पूरी जानकारी</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">प्लेसमेंट के बाद लगातार सपोर्ट</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">नौकरी बदलने में भी मदद</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-50 text-sm md:text-base">नियमित सैलरी और लंबे समय तक नौकरी</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-1 inline-flex shadow-lg ring-1 ring-white/30">
                                        <Link
                                            href="/helper-jobs/jharkhand/elderly-caretaker-job-bangalore"
                                            className="px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 text-blue-100 hover:text-white hover:bg-white/10"
                                        >
                                            English
                                        </Link>
                                        <span className="px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 bg-white text-blue-600 shadow-sm pointer-events-none">
                                            हिंदी
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-900/50 rounded-2xl p-6 border border-blue-700/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-600">
                                            <HeartIcon className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-blue-300 uppercase tracking-wider font-bold mb-1">हमारा मानना</h4>
                                            <p className="font-medium text-white">हेल्पर के लिए अच्छे घर, परिवारों के लिए अच्छे हेल्पर</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-600">
                                            <GlobeAltIcon className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-blue-300 uppercase tracking-wider font-bold mb-1">हम कहाँ सर्विस देते हैं</h4>
                                            <p className="text-sm text-blue-50 line-clamp-2 pr-4">बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली एनसीआर, पुणे, ओडिशा और अन्य शहर।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Training & Certificate */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <AcademicCapIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">ट्रेनिंग और सर्टिफिकेट</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">सफाई, स्वच्छता और काम के सामान का बेसिक ट्रेनिंग</p>
                            </div>

                            {/* Look Professional */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">हमेशा प्रोफेशनल दिखें</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">ईज़ीहेल्पर्स की कोट और साफ-सुथरा दिखने के लिए सामान</p>
                            </div>

                            {/* Safety & Security */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineShieldCheckIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">सुरक्षा और सुरक्षा समझौता</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">क्लियर वर्क एग्रीमेंट और लगातार मदद</p>
                            </div>

                            {/* Stay Support */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineHomeModernIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">रहने की मदद</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">प्लेसमेंट में देर हो तो विमेंस हॉस्टल में रहना</p>
                            </div>

                            {/* Health Insurance */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineHeartIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">हेल्थ इंश्योरेंस कवरेज</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">बेसिक मेडिकल इमरजेंसी के लिए</p>
                            </div>

                            {/* Respectful Work Environment */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                                    <HandThumbUpIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">सम्मानजनक काम का माहौल</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">जहाँ आपको इज्ज़त और अच्छा व्यवहार मिले</p>
                            </div>

                            {/* Future Opportunities */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                    <ChartBarIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">भविष्य के मौके</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">अच्छे प्रदर्शन पर दूसरे शहर या विदेश में उच्च सैलरी</p>
                            </div>

                            {/* Timely Salary */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineBanknotesIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">समय पर सैलरी</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">डायरेक्ट पेमेंट परिवार/मालिक से</p>
                            </div>

                            {/* Job Profile Creation */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform duration-300">
                                    <UserCircleIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">जॉब प्रोफ़ाइल बनाना</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">आपकी स्किल्स और काम का अनुभव से बेहतर जॉब पाने के लिए</p>
                            </div>

                            {/* Support at Every Step */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group lg:col-start-2">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                    <ChatBubbleLeftEllipsisIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">हर कदम पर सपोर्ट</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">रजिस्ट्रेशन से प्लेसमेंट तक</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg">
                                            बैंगलोर में महिलाएँ किसी भी समय NEST में रह सकती हैं।
                                        </p>
                                        <p className="text-gray-600 text-lg">
                                            हॉस्टल में सुरक्षित और आरामदायक कमरे, रोज़ का खाना और बहुत ही सस्ती कीमतें हैं, ताकि आप आराम से रहकर अपना काम शुरू कर सकें।
                                        </p>
                                    </div>
                                    <Link href="/nest" className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                        NEST के बारे में और जानें
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer a Friend and Earn ₹500 Section */}
                <ReferEarnSection variant="blue" location="झारखंड" lang="hi" />

                {/* How to Apply for Senior Caregiver Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में सीनियर केयरगिवर जॉब्स के लिए अप्लाई कैसे करें</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-blue-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "ईज़ीहेल्पर्स से संपर्क करें", desc: "हमें कॉल करें या ऑनलाइन फॉर्म भरें। हम आपको अवेलेबल जॉब्स, ज़िम्मेदारियाँ और सैलरी के बारे में साफ-साफ बताएंगे।" },
                                    { step: 2, title: "अपनी डिटेल्स शेयर करें", desc: "हमें अपना नाम, उम्र, अनुभव और बुज़ुर्गों की देखभाल, खाना पकाने या सफाई में आपके पास जो भी काम के हुनर हैं, उनके बारे में बताएं।" },
                                    { step: 3, title: "ट्रेनिंग और जॉब शुरू करें", desc: "सरल ट्रेनिंग में शामिल हों, डॉक्यूमेंट वेरिफिकेशन पूरा करें, परिवार से मिलें, और हमारे पूरे सपोर्ट के साथ अपनी जॉब शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-blue-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <Link
                                href="tel:+919972571005"
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                जॉब शुरू करने के लिए अभी कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <FAQAccordion faqs={[
                                { question: "क्या बैंगलोर में मेल एल्डरली केयरटेकर जॉब्स उपलब्ध हैं?", answer: "हाँ। मेल केयरटेकर जॉब्स परिवार की ज़रूरतों के आधार पर उपलब्ध हैं।" },
                                { question: "सीनियर केयरटेकर जॉब में क्या-क्या शामिल है?", answer: "आप रोज़ाना के कामों, सुरक्षा, साफ़-सफ़ाई और रूटीन में बुज़ुर्ग लोगों की मदद करेंगे।" },
                                { question: "क्या ये एल्डरली केयर जॉब्स झारखंड हेल्पर्स के लिए सुरक्षित हैं?", answer: "हाँ। हम आपको सिर्फ़ सम्मानजनक और भरोसेमंद घरों में रखते हैं।" },
                                { question: "क्या केयरटेकर जॉब्स में नाइट ड्यूटी शामिल है?", answer: "सिर्फ़ खास लिव-इन काम की जिम्मेदारियाँ के लिए, और यह आपको पहले से समझा दिया जाता है।" },
                                { question: "क्या मैं बैंगलोर में रिश्तेदारों के साथ रहकर काम कर सकता/सकती हूँ?", answer: "हाँ। अगर आप रिश्तेदारों के साथ रहते हैं, तो फुल-टाइम और पार्ट-टाइम जॉब्स आपके लिए सही हैं।" },
                                { question: "क्या मुझे बाद में बेहतर जॉब के मौके मिल सकते हैं?", answer: "हाँ। अच्छा परफॉर्मेंस आपको ज़्यादा सैलरी वाली केयरटेकर जॉब या दूसरे शहरों में प्लेसमेंट दिलाने में मदद कर सकता है।" },
                                { question: "क्या मुझे केयरटेकर जॉब के लिए खास पढ़ाई की ज़रूरत है?", answer: "नहीं। बेसिक पढ़ना और समझना, साथ ही बुज़ुर्गों की देखभाल के हुनर, काफी हैं।" },
                                { question: "क्या मैं जॉब ऑफर मना कर सकता/सकती हूँ?", answer: "हाँ। आपको कभी भी ऐसी कोई जॉब लेने के लिए मजबूर नहीं किया जाता जिसमें आप कम्फर्टेबल न हों।" }
                            ]} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-blue-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">बैंगलोर में एक बेहतर जीवन की शुरुआत करें</h2>
                            <p className="text-lg md:text-xl mb-10 text-white font-medium">एक सुरक्षित घर और सम्मानजनक काम आपकी ज़िंदगी बदल सकता है। बेहतर भविष्य की ओर आत्मविश्वास के साथ कदम बढ़ाएं, जहाँ आपकी मेहनत की सच्ची कद्र हो।</p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    अपनी नई शुरुआत करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>




            </main>
            <Footer />
        </>
    )
}
