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
    PhoneIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'नैनी जॉब्स बैंगलोर में | महिलाओं के लिए सुरक्षित जॉब',
    description: 'बैंगलोर में भरोसेमंद परिवारों के साथ नैनी जॉब्स पाएं। महिलाओं के लिए सुरक्षित काम, अच्छी सैलरी, रहने और खाने की सुविधा के साथ बेहतर नौकरी के अवसर।',
    openGraph: {
        title: 'नैनी जॉब्स बैंगलोर में | महिलाओं के लिए सुरक्षित जॉब',
        description: 'बैंगलोर में भरोसेमंद परिवारों के साथ नैनी जॉब्स पाएं। महिलाओं के लिए सुरक्षित काम, अच्छी सैलरी, रहने और खाने की सुविधा के साथ बेहतर नौकरी के अवसर।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/nanny-jobs-in-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/nanny-jobs-in-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/nanny-jobs-in-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/nanny-jobs-in-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या सैलरी समय पर मिलती है?',
        answer: 'हाँ। सैलरी हर महीने तय तारीख पर सीधे परिवार से मिलती है।',
    },
    {
        question: 'क्या जॉब के लिए पैसे देने होते हैं?',
        answer: 'नहीं। EzyHelpers हेल्पर्स से कोई फीस नहीं लेता।',
    },
    {
        question: 'क्या ट्रेनिंग दी जाती है?',
        answer: 'हाँ। बच्चों की देखभाल और सुरक्षा की बेसिक ट्रेनिंग दी जाती है।',
    },
    {
        question: 'अगर जॉइन करने के बाद समस्या हो तो क्या करें?',
        answer: 'आप हमें तुरंत कॉल कर सकते हैं। हम समस्या सुलझाने या जरूरत हो तो नई जॉब दिलाने में मदद करते हैं।',
    },
    {
        question: 'कौन से डॉक्यूमेंट जरूरी हैं?',
        answer: 'आधार कार्ड और एक पहचान पत्र जरूरी है। रजिस्ट्रेशन में मदद की जाती है।',
    },
    {
        question: 'किस उम्र के बच्चों की देखभाल करनी होती है?',
        answer: 'परिवार की जरूरत के अनुसार नवजात, छोटे बच्चे या स्कूल जाने वाले बच्चों की देखभाल करनी होती है।',
    }
]

export default function NannyJobsOdishaBangaloreHindiPage() {
    return (
        <>
            <div lang="hi" className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'ओडिशा', href: '/helper-jobs/odisha/hin' },
                        { label: 'नैनी जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/nanny-jobs-in-bangalore"
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">ओडिशा हेल्पर्स के लिए बैंगलोर में नैनी जॉब्स</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    बच्चों की देखभाल जिम्मेदारी का काम है। अगर आपको बच्चों के साथ रहना और उनकी देखभाल करना आता है, तो बैंगलोर में नैनी और बेबीसिटर जॉब्स आपके लिए अच्छा मौका है।
                                    EzyHelpers ओडिशा के हेल्पर्स को सुरक्षित और भरोसेमंद परिवारों से जोड़ता है।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई फीस नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ बिना एजेंट के सीधे जॉब</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार से</div>
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
                                    { text: "डायरेक्ट जॉब, कोई एजेंट नहीं", icon: UserPlusIcon },
                                    { text: "जॉइन से पहले काम और सैलरी साफ बताई जाती है", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "हर महीने समय पर सैलरी", icon: BanknotesIcon },
                                    { text: "बेसिक ट्रेनिंग और सलाह", icon: AcademicCapIcon },
                                    { text: "जॉब मिलने के बाद भी मदद", icon: HeartIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-white p-4 rounded-xl border border-violet-100 shadow-sm`}>
                                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-violet-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
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

                {/* Types of Nanny Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में नैनी जॉब्स के प्रकार</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">आप अपनी सुविधा, अनुभव और समय के अनुसार काम चुन सकते हैं।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 text-violet-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में लिव इन नैनी जॉब्स</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम</h4>
                                        <p className="text-sm md:text-base text-gray-600">परिवार के घर में रहकर 24 घंटे बच्चों या शिशु की देखभाल करना। रहने की जगह और खाना दिया जाता है।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम की व्यवस्था</h4>
                                        <p className="text-sm md:text-base text-gray-600">रोज़ बच्चे की देखभाल। महीने में 2 छुट्टियाँ।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">जो ओडिशा से आकर बैंगलोर में सुरक्षित और लंबे समय की 24 घंटे नैनी जॉब चाहते हैं।</p>
                                        <p className="text-[13px] md:text-sm text-violet-800 bg-violet-50 p-3 rounded-xl border border-violet-100 font-medium leading-snug">
                                            <strong>क्यों चुनें:</strong> रहना और खाना फ्री होता है, इसलिए ज्यादा बचत होती है।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में फुल टाइम बेबीसिटर जॉब</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम</h4>
                                        <p className="text-sm md:text-base text-gray-600">तय समय पर बच्चों की देखभाल करना। काम के बाद अपने रहने की जगह पर लौटना।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <p className="text-sm md:text-base text-gray-600">रोज 8 से 10 घंटे। हफ्ते में 1 छुट्टी।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">जो तय समय और नियमित कमाई चाहते हैं।</p>
                                        <p className="text-[13px] md:text-sm text-blue-800 bg-blue-50 p-3 rounded-xl border border-blue-100 font-medium leading-snug">
                                            <strong>क्यों चुनें:</strong> फिक्स्ड सैलरी और नियमित काम मिलती है।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में पार्ट टाइम बेबीसिटर जॉब</h3>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम</h4>
                                        <p className="text-sm md:text-base text-gray-600">सुबह या शाम कुछ घंटों के लिए बच्चों की देखभाल। सिर्फ बच्चे से जुड़े काम।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <p className="text-sm md:text-base text-gray-600">रोज 4 से 6 घंटे। हफ्ते में 1 छुट्टी।</p>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही</h4>
                                        <p className="text-sm md:text-base text-gray-600 mb-4">जो कम घंटे काम करना चाहते हैं या अलग से कमाई चाहते हैं।</p>
                                        <p className="text-[13px] md:text-sm text-purple-800 bg-purple-50 p-3 rounded-xl border border-purple-100 font-medium leading-snug">
                                            <strong>क्यों चुनें:</strong> अपने समय के अनुसार काम और एक्स्ट्रा इनकम।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all"
                            >
                                अभी रजिस्टर करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Salary Table Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में नैनी जॉब के लिए सैलरी</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">सैलरी अनुभव, बच्चे की उम्र और काम के घंटों पर निर्भर करती है। जॉइन करने से पहले पूरी जानकारी दी जाती है।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                            <table className="w-full text-left">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">जॉब टाइप</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">मासिक सैलरी</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base">काम के घंटे</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">लिव इन नैनी जॉब्स</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹20,000 से ₹25,000</td>
                                        <td className="p-4 md:p-6 text-gray-600">रहना और खाना फ्री</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">फुल टाइम बेबीसिटर जॉब्स</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹16,000 से ₹20,000</td>
                                        <td className="p-4 md:p-6 text-gray-600">8 से 10 घंटे</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-gray-900">पार्ट टाइम बेबीसिटर जॉब्स</td>
                                        <td className="p-4 md:p-6 font-bold text-violet-700">₹8,000 से ₹12,000</td>
                                        <td className="p-4 md:p-6 text-gray-600">4 से 6 घंटे</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all"
                            >
                                आज ही हमसे संपर्क करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Responsibilities & Training */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-violet-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">बेबी केयर काम की जिम्मेदारियाँ</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium italic">बैंगलोर के परिवार ओडिशा के हेल्पर्स पर भरोसा करते हैं। आपके मुख्य काम हो सकते हैं:</p>
                                <ul className="space-y-4 mb-6 flex-grow">
                                    {[
                                        "बच्चे को समय पर खाना खिलाना",
                                        "बच्चे को नहलाना और कपड़े पहनाना",
                                        "खेलना और कहानी सुनाना",
                                        "स्कूल के लिए तैयार करना",
                                        "बच्चे के कपड़े धोना",
                                        "बच्चे के कमरे और सामान को साफ रखना",
                                        "बच्चे पर हर समय ध्यान रखना",
                                        "जरूरत हो तो पार्क या वॉक पर ले जाना"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-violet-700 font-bold text-sm bg-violet-50 p-4 rounded-xl border border-violet-100">
                                    सिर्फ बच्चों से जुड़े काम दिए जाते हैं। घर का अलग काम शामिल नहीं होता।
                                </p>
                            </div>

                            {/* Training */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-violet-600">
                                        <AcademicCapIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">जॉब से पहले ट्रेनिंग सपोर्ट</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">काम शुरू करने से पहले बेसिक चाइल्ड केयर ट्रेनिंग दी जाती है।</p>
                                <div className="space-y-4 flex-grow">
                                    <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">ट्रेनिंग में शामिल है:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "बच्चे को सुरक्षित तरीके से संभालना",
                                            "साफ सफाई का ध्यान रखना",
                                            "बच्चे की सुरक्षा के नियम",
                                            "परिवार से सही तरीके से बात करना",
                                            "समय का सही उपयोग"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href="tel:+918031411776"
                                        className="inline-flex items-center gap-2 text-violet-600 font-bold text-lg hover:gap-3 transition-all group"
                                    >
                                        👉 अभी कॉल करें <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">कौन अप्लाई कर सकता है</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                        <div className="bg-violet-50 rounded-3xl p-8 md:p-10 border border-violet-100">
                            <ul className="space-y-5">
                                {[
                                    "यह काम मुख्य रूप से महिलाओं के लिए है",
                                    "उम्र 25 से 40 साल",
                                    "बेसिक पढ़ाई पर्याप्त",
                                    "कम से कम 2 साल का अनुभव होना बेहतर"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <CheckCircleIcon className="w-6 h-6 text-violet-600" />
                                        </div>
                                        <span className="text-lg font-bold text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                                    <p className="text-violet-100 text-lg md:text-xl">
                                        हम ओडिशा और पूरे भारत के हेल्पर्स को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन बातों पर खास ध्यान देते हैं:
                                        </h3>
                                        <ul className="space-y-3">
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
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3">
                                            <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-medium">
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
                                                    <span className="leading-tight">DWSSC और Skill India के साथ हेल्पर ट्रेनिंग</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>सिर्फ अच्छे और इज्ज़तदार घरों में प्लेसमेंट</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>काम शुरू होने से पहले पूरी और साफ जानकारी</span>
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
                                            <p className="font-medium text-white">हेल्पर के लिए अच्छे घर, और परिवारों के लिए भरोसेमंद हेल्पर</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">सेवा के क्षेत्र</h4>
                                            <p className="text-sm text-violet-50 font-medium">बैंगलोर, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और अन्य।</p>
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
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display italic">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg font-medium">
                                            बैंगलोर में महिलाएँ जरूरत पड़ने पर NEST में रह सकती हैं।
                                        </p>
                                        <p className="text-gray-600 text-lg font-medium">
                                            सुरक्षित कमरे, रोज़ का भोजन और किफायती सुविधा उपलब्ध है।
                                        </p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-pink-600 font-bold text-lg hover:gap-3 transition-all group"
                                    >
                                        नेस्ट के बारे में और जानें <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">नैनी जॉब के लिए अप्लाई कैसे करें</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "1", title: "ईज़ीहेल्पर्स से संपर्क करें", desc: "सैलरी, खाने और रहने की जानकारी के लिए हमें कॉल करें या फॉर्म भरें।" },
                                { step: "2", title: "अपनी जानकारी साझा करें", desc: "अपना नाम, उम्र और काम का अनुभव बताएं।" },
                                { step: "3", title: "जॉब की जानकारी", desc: "काम की जिम्मेदारियां, समय, सुरक्षा नियम और महीने की छुट्टियां साफ समझें।" },
                                { step: "4", title: "जॉब के लिए यात्रा करें", desc: "जॉइन करने से पहले बैंगलोर आएं और बेसिक ट्रेनिंग लें।" },
                                { step: "5", title: "जॉब इंटरव्यू", desc: "वीडियो कॉल पर परिवार से बात करें, चयनित हों और नौकरी कन्फर्म करें।" },
                                { step: "6", title: "काम शुरू करें", desc: "ईज़ीहेल्पर्स के पूरे सपोर्ट के साथ अपनी नौकरी शुरू करें।" }
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
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display">मौके का इंतजार न करें।</h3>
                            <p className="text-gray-700 text-lg font-medium mb-8">
                                बैंगलोर में नैनी और बेबीसिटर जॉब्स आपका इंतजार कर रही हैं। कनेक्ट करें और अपने परिवार के लिए बेहतर भविष्य बनाएं।
                            </p>
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
            </div>
        </>
    )
}
