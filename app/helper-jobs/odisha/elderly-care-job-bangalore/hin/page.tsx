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
    ArrowRightIcon,
    PhoneIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'एल्डरली केयर जॉब्स बैंगलोर में | बुजुर्ग देखभाल काम',
    description: 'बैंगलोर में एल्डरली केयर जॉब्स पाएं। बुजुर्गों की देखभाल का भरोसेमंद काम, अच्छा वेतन, सुरक्षित परिवार और रहने-खाने की सुविधा। आज ही EzyHelpers से जुड़ें।',
    openGraph: {
        title: 'एल्डरली केयर जॉब्स बैंगलोर में | बुजुर्ग देखभाल काम',
        description: 'बैंगलोर में एल्डरली केयर जॉब्स पाएं। बुजुर्गों की देखभाल का भरोसेमंद काम, अच्छा वेतन, सुरक्षित परिवार और रहने-खाने की सुविधा। आज ही EzyHelpers से जुड़ें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/elderly-care-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या बुजुर्गों की देखभाल की नौकरी के लिए नर्स होना जरूरी है?',
        answer: 'नहीं। आपको नर्स होने की जरूरत नहीं है। बुजुर्ग सिटिजन केयर अटेंडेंट के लिए सबसे ज़रूरी है धैर्य और दयालु स्वभाव। परिवार ऐसे भरोसेमंद हेल्पर चाहते हैं जो बुजुर्गों को अपने घर वालों जैसा समझकर देखभाल करें।',
    },
    {
        question: 'बैंगलोर में ट्रेनिंग कितने दिनों की होती है?',
        answer: 'ट्रेनिंग आमतौर पर 2 से 3 दिन की होती है। इसमें साफ-सफाई, बेसिक देखभाल की जानकारी और प्रोफेशनल व्यवहार सिखाया जाता है।',
    },
    {
        question: 'क्या मुझे सैलरी समय पर मिलेगी?',
        answer: 'हाँ। सैलरी हर महीने 1 तारीख से 10 तारीख के बीच सीधे दी जाती है।',
    },
    {
        question: 'क्या मैं केवल 8 या 10 घंटे काम करके बाहर रह सकता/सकती हूँ?',
        answer: 'हाँ। बैंगलोर में फुल-टाइम बुजुर्ग देखभाल की नौकरी में फिक्स घंटे मिलते हैं, और ड्यूटी के बाद आप अपने घर वापस जा सकते हैं।',
    },
    {
        question: 'क्या पुरुष भी अप्लाई कर सकते हैं?',
        answer: 'हाँ। बुजुर्ग केयर अटेंडेंट की नौकरी के लिए पुरुष हेल्पर की भी जरूरत होती है, खासकर पुरुष बुजुर्गों की देखभाल के लिए।',
    },
    {
        question: 'अगर परिवार अच्छा नहीं निकला तो क्या होगा?',
        answer: 'तुरंत हमें कॉल करें। हम परिवार से बात करेंगे या जरूरत पड़ने पर आपकी नौकरी बदलने की व्यवस्था करेंगे।',
    },
    {
        question: 'क्या मुझे परिवार जैसा ही खाना मिलेगा?',
        answer: 'अधिकतर परिवार अच्छा और पूरा खाना देते हैं। कुछ परिवार ओडिया खाना बनाने की भी अनुमति देते हैं।',
    },
    {
        question: 'मैं ओडिशा के गांव से हूँ और मेरे पास अनुभव नहीं है। क्या मैं अप्लाई कर सकता/सकती हूँ?',
        answer: 'हाँ। नए लोग भी अप्लाई कर सकते हैं। हम आपको बुजुर्गों की बेसिक देखभाल की ट्रेनिंग देते हैं। आपका अच्छा और देखभाल करने वाला स्वभाव सबसे ज्यादा मायने रखता है।',
    }
]

export default function ElderlyCareJobsOdishaBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'ओडिशा', href: '/helper-jobs/odisha/hin' },
                        { label: 'एल्डरली केयर' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/elderly-care-job-bangalore"
                                className="w-10 h-5 bg-violet-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                />
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">ENG</span>
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">ओडिशा हेल्पर्स के लिए बैंगलोर में एल्डरली केयर जॉब्स</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    क्या आप स्वभाव से धैर्यवान और देखभाल करने वाले हैं? बैंगलोर में एल्डरली केयर जॉब्स आपको बुजुर्ग सिटिज़न की सम्मान के साथ देखभाल करने और अच्छी कमाई करने का मौका देती हैं।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ सम्मानजनक काम का माहौल</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ साफ़ और तय जिम्मेदारियाँ</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ हर महीने नियमित सैलरी</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    आज ही अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-violet-900/50 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-xl hover:bg-violet-900/70 border border-violet-500/30 transition-colors shadow-lg flex items-center gap-2"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Different Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">जॉब लोकेशन: बैंगलोर</h2>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">EzyHelpers को क्या अलग बनाता है</h3>
                                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "फ्री जॉब, कोई फीस नहीं", icon: ShieldCheckIcon },
                                    { text: "बिना एजेंट के सीधे प्लेसमेंट", icon: UserPlusIcon },
                                    { text: "जॉइन करने से पहले काम और सैलरी की पूरी जानकारी", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "हर महीने समय पर सैलरी", icon: BanknotesIcon },
                                    { text: "काम से पहले ट्रेनिंग", icon: AcademicCapIcon },
                                    { text: "जॉब के बाद भी लगातार मदद", icon: HeartIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-white p-4 rounded-xl border border-violet-100 shadow-sm`}>
                                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-violet-600" />
                                        </div>
                                        <span className="font-bold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center mt-10 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    अभी अप्लाई करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Elderly Care Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">बैंगलोर में एल्डरली केयर जॉब्स के प्रकार</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">अपनी सुविधा और जरूरत के अनुसार काम चुनें।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 text-violet-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में लिव-इन एल्डरली केयर जॉब्स</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <p className="text-sm md:text-base text-gray-600">आप परिवार के घर में 24 घंटे रहकर बुजुर्ग की देखभाल करेंगे। अलग कमरा या सोने की जगह और मुफ्त खाना मिलेगा।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम की व्यवस्था</h4>
                                        <p className="text-sm md:text-base text-gray-600">ज़रूरत के अनुसार दिन और रात सहायता। दिन में आराम का समय मिलेगा। हर महीने 2 दिन की छुट्टी।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही है</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">ओडिशा से आने वाले हेल्पर्स जो सुरक्षित और लंबे समय तक काम चाहते हैं।</p>
                                        <p className="text-[13px] md:text-sm text-violet-800 bg-violet-50 p-3 rounded-xl border border-violet-100 font-bold leading-snug">
                                            यह जॉब क्यों चुनें: रहना और खाना मुफ्त होने से ज़्यादा बचत होती है।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में फुल-टाइम एल्डरली केयर हेल्पर जॉब्स</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <p className="text-sm md:text-base text-gray-600">बुजुर्ग को चलने, बैठने, खाने और दवा समय पर लेने में मदद करना। काम के बाद आप अपने रहने की जगह लौट सकते हैं।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <p className="text-sm md:text-base text-gray-600">रोज़ 8 से 10 घंटे। हफ्ते में 1 दिन छुट्टी।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही है</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">जो पहले से बैंगलोर में रह रहे हैं जो तय समय का काम चाहते हैं।</p>
                                        <p className="text-[13px] md:text-sm text-blue-800 bg-blue-50 p-3 rounded-xl border border-blue-100 font-bold leading-snug">
                                            यह जॉब क्यों चुनें: नियमित सैलरी और अपने लिए समय।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में पार्ट-टाइम बुज़ुर्गों की देखभाल की जॉब्स</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <p className="text-sm md:text-base text-gray-600">नहलाने, हल्की कसरत कराने, दवा याद दिलाने और साथ देने का काम।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <p className="text-sm md:text-base text-gray-600">रोज़ 4 से 6 घंटे। सुबह या शाम की ड्यूटी।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही है</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">कम घंटे काम करने वाले या एक से ज़्यादा घरों में काम करने वाले।</p>
                                        <p className="text-[13px] md:text-sm text-purple-800 bg-purple-50 p-3 rounded-xl border border-purple-100 font-bold leading-snug">
                                            यह जॉब क्यों चुनें: अतिरिक्त कमाई और समय की सुविधा।
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">बैंगलोर में बुजुर्ग केयर अटेंडेंट जॉब्स के लिए सैलरी</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">सैलरी आपके अनुभव, बुज़ुर्ग की स्वास्थ्य स्थिति और काम के घंटों पर निर्भर करती है।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                            <table className="w-full text-left">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">जॉब टाइप</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">मासिक सैलरी</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">विवरण</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">लिव-इन एल्डरली केयर</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹20,000 से ₹25,000</td>
                                        <td className="p-4 md:p-6 text-gray-600 font-bold">मुफ्त रहना और खाना</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">फुल-टाइम बुजुर्ग केयर</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹16,000 से ₹20,000</td>
                                        <td className="p-4 md:p-6 text-gray-600 font-bold">8 से 10 घंटे</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">पार्ट-टाइम बुजुर्ग केयर</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹8,000 से ₹12,000</td>
                                        <td className="p-4 md:p-6 text-gray-600 font-bold">4 से 6 घंटे</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-10 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg"
                            >
                                <PhoneIcon className="w-6 h-6 mr-2" /> हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">बुजुर्ग केयरटेकर की काम की जिम्मेदारियां</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto font-bold uppercase tracking-tight">रोज़ का काम बुज़ुर्ग की ज़रूरतों पर आधारित होगा।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                        <HeartIcon className="w-6 h-6" />
                                    </div>
                                    मुख्य जिम्मेदारियां
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "चलने, बैठने और खड़े होने में मदद",
                                        "नहलाने और कपड़े पहनाने में मदद",
                                        "समय पर खाना और पानी देना",
                                        "परिवार के बताए अनुसार दवा देना",
                                        "साथ बैठना और बात करना",
                                        "गिरने से बचाव करना",
                                        "स्वास्थ्य में बदलाव की जानकारी परिवार को देना",
                                        "ज़रूरत हो तो डॉक्टर के पास साथ जाना",
                                        "लिव-इन जॉब में रात में सहायता"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col justify-center text-center">
                                <div className="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-600 shadow-inner">
                                    <ClipboardDocumentListIcon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 font-display italic">विशेष नोट</h3>
                                <p className="text-lg text-gray-600 font-bold leading-relaxed mb-6">
                                    सिर्फ़ बुज़ुर्गों से जुड़े हल्के काम शामिल होते हैं। घर का भारी काम इसमें शामिल नहीं होता।
                                </p>
                                <div className="p-4 bg-violet-50 rounded-xl border border-violet-100 text-violet-800 font-bold">
                                    हमारा लक्ष्य बुजुर्गों को सम्मान और हेल्पर्स को सुरक्षा देना है।
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">कौन अप्लाई कर सकता है</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                        <div className="bg-violet-50 rounded-3xl p-8 md:p-10 border border-violet-100">
                            <ul className="space-y-5">
                                {[
                                    { text: "पुरुष और महिला केयरगिवर", icon: UserGroupIcon },
                                    { text: "उम्र 18 से 40 साल", icon: ClockIcon },
                                    { text: "बेसिक पढ़ना और समझना", icon: AcademicCapIcon },
                                    { text: "फ्रेशर्स और अनुभवी दोनों अप्लाई कर सकते हैं", icon: SparklesIcon }
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
                                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 shadow-lg transition-all transform hover:scale-105"
                                    >
                                        अभी अप्लाई करें
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
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white italic">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-violet-100 text-lg md:text-xl font-bold">
                                        हम ओडिशा और पूरे भारत के हेल्पर्स को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन बातों पर ध्यान देते हैं:
                                        </h3>
                                        <ul className="space-y-3 font-bold">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-violet-50 text-sm md:text-base">बैंगलोर में सम्मानजनक नौकरी</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-violet-50 text-sm md:text-base">सुरक्षित और विश्वसनीय परिवार</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-violet-50 text-sm md:text-base">हेल्पर की सुरक्षा और लंबे समय तक साथ</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-bold">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>5,000+ हेल्पर्स को नौकरी दिलाई</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>10,000+ परिवारों को सेवा दी</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span className="leading-tight">DWSSC और Skill India के साथ ट्रेनिंग</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>सिर्फ अच्छे और इज्ज़तदार घरों में प्लेसमेंट</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>प्लेसमेंट के बाद भी लगातार सपोर्ट</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>जरूरत पड़ने पर नौकरी बदलने में मदद</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>नियमित सैलरी और स्थायी काम</span>
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
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">हमारा विश्वास</h4>
                                            <p className="font-bold text-white">हेल्पर के लिए अच्छे घर, और परिवारों के लिए भरोसेमंद हेल्पर</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">सेवा के क्षेत्र</h4>
                                            <p className="text-sm text-violet-50 font-bold">बैंगलोर, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और अन्य।</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {[
                                { title: "ट्रेनिंग और सर्टिफिकेट", desc: "सफाई, स्वच्छता और काम के उपकरणों की बेसिक ट्रेनिंग।", icon: AcademicCapIcon, color: "violet" },
                                { title: "हमेशा प्रोफेशनल दिखें", desc: "ईज़ीहेल्पर्स की कोट और साफ-सुथरा रहने का सामान।", icon: BriefcaseIcon, color: "blue" },
                                { title: "सुरक्षा और स्पष्ट एग्रीमेंट", desc: "साफ वर्क एग्रीमेंट और लगातार सलाह।", icon: OutlineShieldCheckIcon, color: "purple" },
                                { title: "रहने की सुविधा", desc: "प्लेसमेंट में देरी होने पर महिलाओं के लिए हॉस्टल सुविधा।", icon: OutlineHomeModernIcon, color: "pink" },
                                { title: "हेल्थ इंश्योरेंस कवर", desc: "बेसिक मेडिकल इमरजेंसी के लिए सहायता।", icon: OutlineHeartIcon, color: "red" },
                                { title: "सम्मानजनक कार्य वातावरण", desc: "जहाँ आपको इज्ज़त और अच्छा व्यवहार मिले।", icon: HandThumbUpIcon, color: "yellow" },
                                { title: "भविष्य के अवसर", desc: "अच्छा काम करने पर दूसरे शहर या विदेश में बेहतर सैलरी के मौके।", icon: ChartBarIcon, color: "indigo" },
                                { title: "समय पर सैलरी", desc: "परिवार/मालिक से डायरेक्ट भुगतान।", icon: OutlineBanknotesIcon, color: "green" },
                                { title: "जॉब प्रोफाइल बनाना", desc: "आपकी स्किल और अनुभव के आधार पर बेहतर नौकरी के अवसर।", icon: UserCircleIcon, color: "sky" },
                                { title: "हर कदम पर साथ", desc: "रजिस्ट्रेशन से लेकर प्लेसमेंट तक पूरा सपोर्ट।", icon: ChatBubbleLeftEllipsisIcon, color: "orange" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed">{item.desc}</p>
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
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display italic">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg font-bold">
                                            बैंगलोर में महिलाएँ जरूरत पड़ने पर NEST में रह सकती हैं। सुरक्षित कमरे, रोज़ का भोजन और किफायती सुविधा उपलब्ध है।
                                        </p>
                                    </div>
                                    <Link
                                        href="/nest-hostel"
                                        className="inline-flex items-center gap-2 text-pink-600 font-bold text-lg hover:gap-3 transition-all group"
                                    >
                                        NEST के बारे में और जानें <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" lang="hi" location="Odisha" />

                {/* How to Apply */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">नौकरी के लिए अप्लाई कैसे करें</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "1", title: "ईज़ीहेल्पर्स से संपर्क करें", desc: "सैलरी, खाने और रहने की जानकारी के लिए हमें कॉल करें या फॉर्म भरें।" },
                                { step: "2", title: "अपनी जानकारी साझा करें", desc: "अपना नाम, उम्र और काम का अनुभव बताएं।" },
                                { step: "3", title: "जॉब की जानकारी", desc: "काम की जिम्मेदारियां, समय, सुरक्षा नियम और महीने की छुट्टियां साफ समझें।" },
                                { step: "4", title: "जॉब के लिए यात्रा करें", desc: "जॉइन करने से पहले बैंगलोर आएं और बेसिक ट्रेनिंग लें।" },
                                { step: "5", title: "जॉब इंटरव्यू", desc: "वीडियो कॉल पर परिवार से बात करें, और नौकरी कन्फर्म करें।" },
                                { step: "6", title: "काम शुरू करें", desc: "ईज़ीहेल्पर्स के पूरे सपोर्ट के साथ अपनी नौकरी शुरू करें।" }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-violet-50 p-8 rounded-3xl border border-violet-100 shadow-sm">
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg text-lg"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-white text-violet-700 font-bold py-4 px-10 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all text-lg"
                                >
                                    हमें कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight italic">
                                अक्सर पूछे जाने वाले सवाल
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
