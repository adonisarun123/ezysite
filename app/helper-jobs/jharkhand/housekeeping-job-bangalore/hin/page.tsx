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

export const metadata: Metadata = {
    title: 'झारखंड हेल्पर्स के लिए बैंगलोर में भरोसेमंद हाउसकीपिंग जॉब्स',
    description: 'झारखंड से हेल्पर्स के लिए बैंगलोर में फुल-टाइम और लिव-इन हाउसकीपिंग जॉब्स। फिक्स्ड सैलरी, सम्मानित परिवार और पूरा सपोर्ट',
    openGraph: {
        title: 'झारखंड हेल्पर्स के लिए बैंगलोर में भरोसेमंद हाउसकीपिंग जॉब्स',
        description: 'झारखंड से हेल्पर्स के लिए बैंगलोर में फुल-टाइम और लिव-इन हाउसकीपिंग जॉब्स। फिक्स्ड सैलरी, सम्मानित परिवार और पूरा सपोर्ट',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/housekeeping-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/housekeeping-job-bangalore/hin'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या मुझे हाउसकीपिंग हेल्पर जॉब्स के लिए अनुभव चाहिए?',
        answer: 'नहीं। अगर आप नए हैं तो भी अप्लाई कर सकते हैं। पहले ट्रेनिंग दिया जाएगा।',
    },
    {
        question: 'क्या मुझे काम शुरू करने से पहले ट्रेनिंग मिलेगी?',
        answer: 'हाँ। इसमें साफ-सफाई के तरीके, हाइजीन, बात-चीत का तरीका और सुरक्षा से जुड़ी बातें सिखाई जाती हैं।',
    },
    {
        question: 'क्या मुझे काम शुरू करने से पहले ट्रेनिंग मिलेगा?',
        answer: 'हाँ। सफाई, स्वच्छता, व्यवहार और सुरक्षा सिखाई जाएगी।',
    },
    {
        question: 'क्या लिव-इन जॉब्स में खाना और रहने की जगह मिलती है?',
        answer: 'हाँ। अलग कमरा/रहने की जगह और खाना मिलेगा।',
    },
    {
        question: 'क्या मुझे पैसे देने होंगे?',
        answer: 'नहीं। हम कभी कोई फीस नहीं लेते।',
    },
    {
        question: "क्या पति-पत्नी एक साथ अप्लाई कर सकते हैं?",
        answer: 'हाँ। झारखंड से कपल्स अप्लाई कर सकते हैं।',
    },
    {
        question: "कौन से डॉक्यूमेंट चाहिए?",
        answer: 'आधार कार्ड और लोकल ID प्रूफ। वेरिफ़िकेशन में मदद करेंगे।',
    },
    {
        question: "क्या कोई एजेंट शामिल है?",
        answer: 'नहीं। हम हेल्पर को सीधे परिवार से जोड़ते हैं।',
    }
]

export default function HousekeepingJobsBangaloreHinPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'झारखंड', href: '/helper-jobs/jharkhand/hin' },
                        { label: 'हाउसकीपिंग जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm relative -top-7 md:-top-0 lg:-top-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/housekeeping-job-bangalore"
                                className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                />
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">झारखंड के हेल्पर्स के लिए बैंगलोर में हाउसकीपिंग जॉब</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-teal-100 max-w-5xl mx-auto">ईज़ीहेल्पर्स में, हम आपको बैंगलोर में हाउसकीपिंग जॉब पाने में मदद करते हैं। हम आपको ऐसे परिवारों से जोड़ते हैं जो भरोसेमंद हैं, और आपको ट्रेनिंग, सुरक्षित माहौल और लंबे समय तक काम की सुविधा देते हैं।</p>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई रजिस्ट्रेशन फीस नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ बिना एजेंट के सीधे जॉब प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाती है</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overivew Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider mb-4 border border-teal-200">
                                नौकरी का स्थान: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">जॉब लोकेशन: बैंगलोर</h2>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">लिव-इन हाउसकीपिंग जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-6">₹18,000 – ₹22,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">फ्री रहने और खाना शामिल</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">फुल-टाइम हाउसकीपिंग जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹16,000 – ₹20,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">8–10 घंटे काम के तय समय</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">पार्ट-टाइम हाउसक्लीनिंग जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">₹8,000 – ₹12,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">4–6 घंटे रोज़ाना काम</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* What You Get Grid */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">और भी फायदे</h3>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "सुरक्षित नौकरी का इंतज़ाम", icon: ShieldCheckIcon },
                                    { text: "जुड़ने से पहले आसान ट्रेनिंग", icon: BriefcaseIcon },
                                    { text: "सम्मानजनक परिवार", icon: HeartIcon },
                                    { text: "लंबे समय तक चलने वाली नौकरी के मौके", icon: StarIcon },
                                    { text: "सीधे और समय पर सैलरी", icon: BanknotesIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 ${index === 4 ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''}`}>
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <Link
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    अभी कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where You Can Get Housekeeping Jobs Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में हाउसकीपिंग जॉब कहाँ मिलती है</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {/* Apartments */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                    <BuildingOfficeIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">अपार्टमेंट</h3>
                                    <p className="text-sm md:text-base text-gray-600">वर्किंग परिवारों के घर में रोज़ की सफाई और घर के काम में मदद।</p>
                                </div>
                            </div>

                            {/* Gated Communities */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                    <BuildingOfficeIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">गेटेड सोसाइटी</h3>
                                    <p className="text-sm md:text-base text-gray-600">नियमित हाउसकीपिंग और घर की देखभाल का काम।</p>
                                </div>
                            </div>

                            {/* Villas */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                    <HomeModernIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">विला</h3>
                                    <p className="text-sm md:text-base text-gray-600">पूरे घर की जिम्मेदारी के साथ पक्का और लंबे समय की नौकरी।</p>
                                </div>
                            </div>

                            {/* Family Homes */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                    <UserGroupIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">फैमिली होम</h3>
                                    <p className="text-sm md:text-base text-gray-600">परिवार के हर दिन के घर के काम संभालने में सहायता।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Housekeeping Jobs Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में हाउसकीपिंग जॉब्स के प्रकार</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">लिव-इन हाउसकीपिंग जॉब्स (24/7 घर में रहकर काम)</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">अगर आप झारखंड से आ रहे हैं और रहने की जगह चाहिए तो यह सबसे अच्छा विकल्प है।</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">घर में 24/7 रहकर सफाई और काम करना</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">अलग कमरा या सोने की जगह दी जाती है</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">दिन के तीन समय का खाना मुफ्त</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज़ाना घर की सफाई</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">दिन में आराम का समय</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">महीने में 2 छुट्टियाँ (पहले तय की जाती हैं)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है:</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">झारखंड से आने वाले हेल्पर</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हेल्पर्स जो किराया और खाने का खर्च बचाना चाहते हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो बैंगलोर में बिना रहने की जगह के हेल्पर हैं</span>
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
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">फुल-टाइम हाउसकीपिंग जॉब्स (पूरा दिन काम)</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">अगर आप फिक्स्ड काम के घंटे चाहते हैं तो यह आपके लिए सही है।</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज़ काम के तय घंटे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">काम के बाद अपने घर लौटना</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रात में नहीं रहना</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज़ाना 8–10 घंटे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हफ्ते में 1 छुट्टी (पहले तय)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रिश्तेदारों या शेयर वाले घर में रहने वाले हेल्पर</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">काम और निजी जिंदगी संतुलित रखना चाहने वाले</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">तय समय पर काम करना पसंद करने वाले</span>
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
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">पार्ट-टाइम हाउसकीपिंग जॉब्स (कुछ घंटे का काम)</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">अगर आप कम घंटे काम करना चाहते हैं और अपने समय के अनुसार नौकरी चुनना पसंद करते हैं, तो यह सही है।</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">किचन, बाथरूम या लिविंग रूम जैसी जगहों की सफाई</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">फर्नीचर और जगहों पर धूल झाड़ना</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज़ाना सफाई बनाए रखना</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">परिवार की ज़रूरत के हिसाब से रोज़ाना 4–6 घंटे</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">सुविधा के अनुसार काम चाहने वाले हेल्पर</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">काम चाहने वाले हेल्पर</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">कई छोटे काम संभालने वाले</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information Section (Responsibilities & Who Can Apply) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">हाउसकीपिंग के काम की ज़िम्मेदारियाँ</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">आपके रोज़ाना के कामों में ये शामिल हो सकते हैं:</p>
                                <ul className="space-y-4 mb-6 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">झाड़ू और पोछा लगाना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">कमरे, किचन और बाथरूम साफ़ करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">बर्तन धोना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">फर्नीचर और जगहों पर धूल झाड़ना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">पूरी सफाई बनाए रखना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">कपड़े धोना और तह करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">किचन में मदद करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">जरूरी घर का काम</span>
                                    </li>
                                </ul>
                                <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mt-auto">
                                    <p className="text-teal-800 font-medium text-sm text-center">
                                        हम सिर्फ़ वही काम शामिल करते हैं जो आपसे सहमति से तय किए गए हों, ताकि आपको सही पता हो कि क्या करना है।
                                    </p>
                                </div>
                            </div>

                            {/* Who Can Apply */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
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
                                            <h4 className="font-bold text-gray-900 text-lg">पुरुष और महिला हाउसकीपर</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">पति-पत्नी जोड़ा एक साथ अप्लाई कर सकते हैं</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">उम्र: 18–45 साल</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">बेसिक पढ़ाई पर्याप्त</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">5</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">फ्रेशर्स और अनुभवी</h4>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <p className="text-blue-800 font-medium text-sm">
                                            आज ही अप्लाई करें और बैंगलोर में भरोसेमंद घर की सफाई और देखभाल करने का जॉब पक्की करें।
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
                        <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-teal-100 text-lg md:text-xl">
                                        हम झारखंड और पूरे भारत के हेल्पर को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {/* We Focus On */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-teal-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-teal-100 border-b border-teal-700/50 pb-3">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन पर ध्यान देते हैं:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-teal-50 text-sm md:text-base">बैंगलोर में इज्ज़तदार नौकरी</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-teal-50 text-sm md:text-base">सुरक्षित और भरोसेमंद परिवार</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-teal-50 text-sm md:text-base">हेल्पर की भलाई और लंबे समय तक समर्थन</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Why Helpers Trust EzyHelpers */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-teal-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-teal-100 border-b border-teal-700/50 pb-3">
                                            <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">5,000+ हेल्पर को नौकरियां दी गई</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">10,000+ परिवारों को सपोर्ट किया</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">DWSSC और Skill India के साथ हेल्पर ट्रेनिंग</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">सिर्फ इज्ज़तदार घरों में प्लेसमेंट</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">काम शुरू होने से पहले पूरी जानकारी</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">प्लेसमेंट के बाद लगातार सपोर्ट</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">नौकरी बदलने में भी मदद</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">नियमित सैलरी और लंबे समय तक नौकरी</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-teal-900/50 rounded-2xl p-6 border border-teal-700/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                            <HeartIcon className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">हमारा विश्वास</h4>
                                            <p className="font-medium text-white">हेल्पर्स के लिए अच्छे घर। परिवारों के लिए अच्छे हेल्पर्स।</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                            <GlobeAltIcon className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">हम कहाँ-कहाँ सेवाएँ देते हैं</h4>
                                            <p className="text-sm text-teal-50 line-clamp-2 pr-4">बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और भी बहुत...</p>
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
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Training & Certificate */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300">
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
                                <p className="text-gray-600 font-medium leading-relaxed">आपकी स्किल्स और काम का अनुभव से  बेहतर जॉब पाने के लिए</p>
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
                                            बैंगलोर में महिलाएँ जरूरत पड़ने पर NEST में रह सकती हैं।
                                        </p>
                                        <p className="text-gray-600 text-lg">
                                            सुरक्षित कमरे, रोज़ का खाना और किफायती सुविधा उपलब्ध है।
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
                <section className="section-padding bg-yellow-50 border-y border-yellow-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                        <GiftIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">रेफर करें और कमाएं</h2>
                                    <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500!</h3>
                                    <p className="text-yellow-100 font-medium">*नियम और शर्तें लागू</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        -झारखंड के दोस्तों को बैंगलोर में घरेलू काम की नौकरी दिलाने में मदद करें।
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">1</span>
                                            </div>
                                            <span className="text-gray-700 font-medium">WhatsApp पर डिटेल्स भेजें या कॉल करें</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">2</span>
                                            </div>
                                            <span className="text-gray-700 font-medium">नाम, उम्र और जॉब पसंद बताएं</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 font-bold text-sm">3</span>
                                            </div>
                                            <span className="text-gray-700 font-bold">दोस्त 1 महीना पूरा करे → ₹500 पाएं</span>
                                        </div>
                                    </div>
                                    <Link href="#" className="inline-block text-center bg-teal-600 text-white font-bold text-lg py-3 px-8 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300">
                                        रेफर करें और ₹500 कमाएं
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply for Housekeeping Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">हाउसकीपिंग जॉब्स के लिए अप्लाई कैसे करें</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-teal-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "ईज़ीहेल्पर्स से संपर्क करें", desc: "कॉल करें या ऑनलाइन फ़ॉर्म भरें। हम आपको जॉब के प्रकार, और पूरी जानकारी बताते हैं।" },
                                    { step: 2, title: "अपनी जानकारी साझा करें", desc: "हमें अपना नाम, उम्र, स्किल्स और सफाई, खाना बनाना या देखभाल का कोई भी अनुभव बताएं।" },
                                    { step: 3, title: "ट्रेनिंग और नौकरी लगवाना", desc: "ट्रेनिंग लें, वेरिफ़िकेशन पूरा करें, परिवार के साथ इंटरव्यू दें और काम शुरू करें।" }
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
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-teal-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
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
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                अभी कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल (FAQs)</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-teal-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">क्या आप अपनी हाउसकीपिंग जॉब शुरू करने के लिए तैयार हैं?</h2>
                            <p className="text-lg md:text-xl mb-6 text-teal-100">झारखंड के हजारों हेल्पर्स हम पर भरोसा करते हैं क्योंकि हम सुरक्षित घर, भरोसेमंद काम और सम्मानजनक माहौल देते हैं।</p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    रजिस्टर करें
                                </Link>
                                <Link
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                                >
                                    कॉल करें
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
