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
    UserGroupIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'ओडिशा हेल्पर्स के लिए बैंगलोर में लिव-इन पेशेंट केयर जॉब्स',
    description: 'ओडिशा के लोगों के लिए बैंगलोर में पेशेंट केयर जॉब्स। घर पर बुज़ुर्ग या बीमार लोगों की देखभाल का काम। मुफ्त खाना और रहने की सुविधा। कोई फीस नहीं। आज ही अप्लाई करें।',
    openGraph: {
        title: 'ओडिशा हेल्पर्स के लिए बैंगलोर में लिव-इन पेशेंट केयर जॉब्स',
        description: 'ओडिशा के लोगों के लिए बैंगलोर में पेशेंट केयर जॉब्स। घर पर बुज़ुर्ग या बीमार लोगों की देखभाल का काम। मुफ्त खाना और रहने की सुविधा। कोई फीस नहीं। आज ही अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/patient-care-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/patient-care-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/patient-care-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/patient-care-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या पेशेंट केयर जॉब के लिए मेडिकल डिग्री जरूरी है?',
        answer: 'नहीं। ये नॉन-मेडिकल मरीज की देखभाल का जॉब् हैं। बेसिक देखभाल और सीखने की इच्छा ही काफी है।',
    },
    {
        question: 'क्या लिव-इन पेशेंट केयर जॉब में खाना और रहने की सुविधा मिलती है?',
        answer: 'हाँ। ज्यादातर परिवार रहने की जगह और खाना देते हैं।',
    },
    {
        question: 'क्या बिना अनुभव वाले लोग अप्लाई कर सकते हैं?',
        answer: 'हाँ। नए लोग भी अप्लाई कर सकते हैं। काम शुरू करने से पहले ट्रेनिंग दी जाती है।',
    },
    {
        question: 'क्या इस जॉब के लिए कोई फीस देनी पड़ती है?',
        answer: 'नहीं। हेल्पर्स से कोई फीस नहीं ली जाती।',
    },
    {
        question: 'अगर जॉब में समस्या हो तो क्या करें?',
        answer: 'आप हमें बता सकते हैं। हम समस्या हल करने या दूसरी जॉब दिलाने की कोशिश करेंगे।',
    },
    {
        question: 'क्या छुट्टी मिलती है?',
        answer: 'हाँ। आमतौर पर हर महीने 2 दिन की छुट्टी मिलती है।',
    },
    {
        question: 'क्या खाना परिवार जैसा मिलता है?',
        answer: 'ज्यादातर घरों में वही खाना दिया जाता है जो परिवार खाता है।',
    }
]

export default function PatientCareJobsOdishaBangaloreHindiPage() {
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
                        { label: 'पेशेंट केयर' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/patient-care-job-bangalore"
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">ओडिशा हेल्पर्स के लिए बैंगलोर में पेशेंट केयर जॉब्स</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    अगर आप ज़िम्मेदार हैं और लोगों की देखभाल करना जानते हैं, तो बैंगलोर में पेशेंट केयर जॉब्स आपके लिए अच्छा मौका हो सकता है। इस काम में आप घर पर बीमार या बुज़ुर्ग लोगों की रोज़ाना देखभाल में मदद करते हैं और अच्छी कमाई भी कर सकते हैं।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ साफ और तय काम की जिम्मेदारियां</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ जॉइन करने के दौरान मदद</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ हर महीने समय पर सैलरी</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    पेशेंट केयर जॉब्स के लिए अप्लाई करें
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">जॉब लोकेशन: बैंगलोर</h2>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">ईज़ीहेल्पर्स को क्या अलग बनाता है</h3>
                                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "फ्री जॉब, कोई फीस नहीं", icon: ShieldCheckIcon },
                                    { text: "बिना एजेंट के सीधे प्लेसमेंट", icon: UserPlusIcon },
                                    { text: "जॉइन करने से पहले पूरी जानकारी", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "हर महीने समय पर सैलरी", icon: BanknotesIcon },
                                    { text: "काम से पहले ट्रेनिंग", icon: AcademicCapIcon },
                                    { text: "जॉब मिलने के बाद भी मदद", icon: HeartIcon },
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

                {/* Job Details Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">लिव-इन पेशेंट केयर हेल्पर जॉब डिटेल्स</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                    <UserGroupIcon className="w-6 h-6 text-violet-600" /> मरीज देखभाल सहायक के अन्य नाम:
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-gray-700">
                                    {[
                                        "पेशेंट केयरटेकर",
                                        "पेशेंट अटेंडेंट",
                                        "होम केयर हेल्पर",
                                        "पेशेंट साथी"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 bg-violet-50 p-3 rounded-xl border border-violet-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                    <InformationCircleIcon className="w-6 h-6 text-violet-600" /> बैंगलोर में परिवार इन कामों के लिए हेल्पर्स रखते हैं:
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-gray-700">
                                    {[
                                        "बिस्तर पर पड़े मरीज़ की देखभाल",
                                        "अक्षम मरीज़ की मदद",
                                        "बुज़ुर्गों की देखभाल",
                                        "सर्जरी के बाद की देखभाल"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 bg-blue-50 p-3 rounded-xl border border-blue-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-violet-800 font-bold bg-violet-50 p-4 rounded-xl border border-violet-100 italic text-sm">
                                    ये नॉन-मेडिकल पेशेंट केयर जॉब्स हैं। इसमें अस्पताल का इलाज या मशीन चलाना शामिल नहीं है।
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg"
                            >
                                आज ही हमसे संपर्क करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 24 Hours Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-violet-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10 text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display italic">बैंगलोर में 24 घंटे लिव-इन पेशेंट केयर जॉब्स</h2>
                                <p className="text-violet-100 text-lg md:text-xl font-bold italic">ओडिशा के कई हेल्पर्स इस तरह का काम चुनते हैं।</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                                            <HomeIcon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold italic">काम का प्रकार</h3>
                                    </div>
                                    <p className="text-lg text-violet-50 mb-6 font-bold leading-relaxed">
                                        आप मरीज़ के घर पर रहते हैं और रोज़ाना देखभाल में मदद करते हैं।
                                    </p>
                                    <ul className="space-y-3 font-bold text-violet-100 mb-6">
                                        <li className="flex items-center gap-2">✓ सोने के लिए साफ जगह दी जाती है</li>
                                        <li className="flex items-center gap-2">✓ रोज़ 3 बार खाना मिलता है</li>
                                        <li className="flex items-center gap-2">✓ परिवार के साथ रहकर काम करना होता है</li>
                                    </ul>
                                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl">
                                        <ClockIcon className="w-6 h-6 text-violet-300" />
                                        <span className="font-bold">पूरे दिन देखभाल का काम। आराम का समय। 2 दिन की छुट्टी।</span>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold italic mb-6">किसके लिए सही है</h3>
                                        <ul className="space-y-3 font-bold text-violet-100 mb-6">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span>जो बैंगलोर में लंबे समय तक काम करना चाहते हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span>जिनके पास शहर में रहने की जगह नहीं है</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span>जो घर में रहकर (लिव-इन) काम करने के लिए तैयार हों</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-violet-800 p-6 rounded-2xl border border-violet-700/50 shadow-inner">
                                        <h4 className="text-violet-200 text-xs font-bold uppercase tracking-widest mb-2">यह जॉब क्यों चुनें</h4>
                                        <p className="text-xl font-bold">रहना और खाना मुफ्त होने से पैसे बचाने में मदद मिलती है और परिवार को भेज सकते हैं।</p>
                                    </div>
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-violet-900/50 rounded-2xl p-6 border border-violet-700/50 backdrop-blur-sm font-bold">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <HeartIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">हमारा विश्वास</h4>
                                            <p className="text-white">हेल्पर के लिए अच्छे घर, और परिवारों के लिए भरोसेमंद हेल्पर</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 italic">सेवा के क्षेत्र</h4>
                                            <p className="text-sm text-violet-50">बैंगलोर, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और अन्य।</p>
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
                                { title: "सुरक्षा और स्पष्ट एग्रीमेंट", desc: "साफ वर्क एग्रीमेंट और लगातार मार्गदर्शन।", icon: OutlineShieldCheckIcon, color: "purple" },
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">मरीज की देखभाल का काम के लिए अप्लाई कैसे करें</h2>
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
                                    <p className="text-gray-600 text-sm font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-violet-50 p-8 rounded-3xl border border-violet-100 shadow-sm">
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display italic">ओडिशा में अपने परिवार के लिए बेहतर भविष्य बनाएं</h3>
                            <p className="text-gray-700 text-lg font-bold mb-8">
                                पक्का काम मिलने से आप अपने परिवार की अच्छी तरह मदद कर सकते हैं।बैंगलोर में कई हेल्पर्स पहले से सुरक्षित तरीके से काम कर रहे हैं।
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
            </main>
        </>
    )
}
