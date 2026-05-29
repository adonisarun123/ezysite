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
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'बैंगलोर में जापा मेड जॉब्स | ₹25k–₹30k सैलरी | EzyHelpers',
    description: 'बैंगलोर में जापा मेड जॉब्स ₹25,000–₹30,000 सैलरी के साथ। रहना और खाना शामिल हैं। सुरक्षित और फ्री जॉब के लिए EzyHelpers से जुड़ें।',
    openGraph: {
        title: 'बैंगलोर में जापा मेड जॉब्स | ₹25k–₹30k सैलरी | EzyHelpers',
        description: 'बैंगलोर में जापा मेड जॉब्स ₹25,000–₹30,000 सैलरी के साथ। रहना और खाना शामिल हैं। सुरक्षित और फ्री जॉब के लिए EzyHelpers से जुड़ें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/japa-maid-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'बैंगलोर में माँ और नवजात शिशु की देखभाल करने वाला काम आमतौर पर कितने समय तक चलता है?',
        answer: 'अधिकतर माँ और नवजात शिशु की देखभाल करने वाला काम 40 दिन से 3 महीने तक चलता है। कुछ परिवार बाद में फुल-टाइम नवजात देखभाल की जॉब भी ऑफर कर सकते हैं।',
    },
    {
        question: 'जापा मेड किस उम्र के बच्चों की देखभाल करती है?',
        answer: 'आमतौर पर जापा मेड 0 से 3 महीने तक के नवजात शिशु की देखभाल करती है।',
    },
    {
        question: 'अगर परिवार काम बढ़ाना चाहता है तो क्या होता है?',
        answer: 'अगर हेल्पर और परिवार दोनों सहमत हों तो जॉब आगे बढ़ सकती है या फुल-टाइम नैनी जॉब में बदल सकती है।',
    },
    {
        question: 'क्या दूसरे शहर से भी जच्चा-बच्चा केयर हेल्पर जॉब के लिए अप्लाई किया जा सकता है?',
        answer: 'हाँ। कई हेल्पर्स ओडिशा जैसे राज्यों से बैंगलोर आकर बेहतर सैलरी वाली जॉब करते हैं। जॉइनिंग से पहले पूरी जानकारी दी जाती है।',
    },
    {
        question: 'क्या जापा काम में घर का काम भी करना होता है?',
        answer: 'नहीं। जापा का काम मुख्य रूप से माँ और नवजात शिशु की देखभाल से जुड़ा होता है। अतिरिक्त काम तभी किया जाता है जब पहले से तय हो।',
    }
]

export default function JapaMaidJobsOdishaBangaloreHindiPage() {
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
                        { label: 'जापा सहायक जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/japa-maid-job-bangalore"
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display text-white whitespace-normal  leading-tight">बैंगलोर में माँ और नवजात शिशु की देखभाल के लिए जापा मेड जॉब्स</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    क्या आपको नवजात शिशु की देखभाल का अनुभव है? बैंगलोर में जापा मेड जॉब्स में माँ और नवजात शिशु की देखभाल का खास काम मिलता है। इस काम में आपकी हुनर और अनुभव के अनुसार अच्छी सैलरी मिल सकती है।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1 font-bold">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ नवजात शिशु की देखभाल का काम</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ तय समय की जॉब</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ अनुभव के अनुसार बेहतर सैलरी</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    जापा मेड जॉब्स के लिए अप्लाई करें
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">जॉब लोकेशन: बैंगलोर</h2>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display ">ईज़ीहेल्पर्स को क्या अलग बनाता है</h3>
                                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "फ्री जॉब, कोई फीस नहीं", icon: ShieldCheckIcon },
                                    { text: "डायरेक्ट जॉब, कोई एजेंट नहीं", icon: UserPlusIcon },
                                    { text: "जॉइन करने से पहले काम साफ़ बताया जाती है", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "सैलरी हर महीने समय पर मिलती है", icon: BanknotesIcon },
                                    { text: "ट्रेनिंग और सही सलाह", icon: AcademicCapIcon },
                                    { text: "जॉब मिलने के बाद भी सपोर्ट", icon: HeartIcon },
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight ">बैंगलोर में जच्चा-बच्चा केयर हेल्पर जॉब कैटेगरी</h2>
                            <p className="text-gray-600 font-bold max-w-4xl mx-auto  leading-relaxed">
                                जापा मेड जॉब्स माँ और नवजात शिशु की देखभाल से जुड़ी होती हैं। परिवार डिलीवरी के बाद के समय में जच्चा-बच्चा केयर हेल्पर रखते हैं, क्योंकि उस समय माँ और बच्चे को खास देखभाल की जरूरत होती है।
                            </p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-gray-100">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

                            <div className="relative z-10 space-y-8">
                                <p className="text-lg text-gray-700 font-bold leading-relaxed">
                                    बैंगलोर में कई परिवार ओडिशा के हेल्पर्स को पसंद करते हैं क्योंकि उन्हें नवजात की सफाई, मसाज, दूध पिलाने का समय और माँ की रिकवरी की देखभाल का अनुभव होता है। यह सामान्य मेड का काम नहीं है। यह पूरी तरह माँ और नवजात शिशु की देखभाल की जिम्मेदारी वाला काम है।
                                </p>

                                <div className="bg-violet-900 text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                                            <SparklesIcon className="w-10 h-10" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2 ">बैंगलोर में लिव-इन जापा मेड जॉब्स</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 ">
                                                        <HomeIcon className="w-4 h-4" /> काम
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">परिवार के घर में रहकर माँ और नवजात शिशु की देखभाल करनी होती है। रहने के लिए अलग जगह और खाना दिया जाता है।</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 ">
                                                        <ClockIcon className="w-4 h-4" /> काम करने का समय
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">पूरा समय रहकर नवजात शिशु की देखभाल करनी होती है। इसमें रात में दूध पिलाना, डायपर बदलना और दिन में आराम का समय भी शामिल होता है।</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 ">
                                                        <HeartIcon className="w-4 h-4" /> किन लोगों के लिए सही
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">ओडिशा के अनुभवी हेल्पर्स, जिनके पास माँ और नवजात शिशु की देखभाल का अनुभव है।</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-violet-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 ">
                                                        <HandThumbUpIcon className="w-4 h-4" /> यह जॉब क्यों चुनें
                                                    </h4>
                                                    <p className="text-white font-bold text-sm">40, 60 या 90 दिन काम करके किराया और हर दिन का खर्च बचाया जा सकता है। कई बार आगे चलकर स्थायी नैनी जॉब के मौके भी मिलते हैं।</p>
                                                </div>
                                            </div>
                                            <Link
                                                href="/helper-registration"
                                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold py-3 px-10 rounded-xl mt-8 hover:bg-violet-50 transition-colors shadow-lg"
                                            >
                                                जापा जॉब्स के लिए अप्लाई करें
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">माँ और नवजात शिशु की देखभाल का काम की जिम्मेदारियाँ</h2>
                            <p className="text-gray-600 font-bold max-w-3xl mx-auto  leading-relaxed">जापा मेड का काम मुख्य रूप से माँ और नवजात शिशु की देखभाल से जुड़ा होता है।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-violet-50 rounded-3xl p-8 md:p-10 border border-violet-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-bold text-violet-900 mb-6 flex items-center gap-2 border-b border-violet-200 pb-4 relative z-10 ">
                                    <SparklesIcon className="w-6 h-6" /> रोज़ के काम
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-gray-700 relative z-10">
                                    {[
                                        "नवजात को दूध पिलाना",
                                        "डायपर बदलना और बच्चे को नहलाना",
                                        "बेबी ऑयल से मसाज करना",
                                        "बच्चे की नींद और सुरक्षा का ध्यान रखना",
                                        "बच्चे की बोतल और खिलौने साफ़ करना",
                                        "माँ को आराम और स्वस्थ होने में मदद करना",
                                        "डिलीवरी के बाद माँ की मसाज करना",
                                        "बच्चे के कपड़े अलग से धोना",
                                        "माँ और बच्चे की जगह साफ़ रखना"
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
                                    <InformationCircleIcon className="w-6 h-6" /> अन्य काम
                                </h3>
                                <ul className="space-y-4 font-bold text-gray-700 relative z-10">
                                    {[
                                        "माँ के लिए हेल्दी खाना बनाने में मदद",
                                        "बच्चे की चादर और कपड़े धोना",
                                        "बच्चे की देखभाल से जुड़ी छोटी-छोटी व्यवस्था"
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">बैंगलोर में लिव-इन जापा मेड जॉब की सैलरी</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto leading-relaxed text-center ">सैलरी आपके अनुभव, काम के समय और परिवार की जरूरत पर निर्भर करती है।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-hidden rounded-[3rem] border border-gray-200 shadow-2xl bg-white relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                            <table className="w-full text-left relative z-10">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs md:text-sm ">विवरण</th>
                                        <th className="p-6 font-bold uppercase tracking-widest text-xs md:text-sm text-center ">जानकारी</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-6 font-bold text-gray-900 ">जॉब टाइप</td>
                                        <td className="p-6 font-bold text-gray-900 text-center ">लिव-इन माँ और नवजात शिशु की देखभाल</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-6 font-bold text-gray-900 ">महीने की सैलरी</td>
                                        <td className="p-6 font-bold text-violet-700 text-lg md:text-3xl text-center">₹25,000 से ₹30,000</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-6 font-bold text-gray-900 ">रहना</td>
                                        <td className="p-6 font-bold text-gray-600 text-center ">शामिल</td>
                                    </tr>
                                    <tr className="hover:bg-violet-50 transition-colors">
                                        <td className="p-6 font-bold text-gray-900 ">खाना</td>
                                        <td className="p-6 font-bold text-gray-600 text-center ">शामिल</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="p-8 bg-violet-900 text-white text-center font-bold  relative">
                                लिव-इन जापा मेड जॉब्स में रहने और खाने की सुविधा दी जाती है।
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg transform hover:scale-105"
                            >
                                <PhoneIcon className="w-6 h-6 mr-2" /> आज ही हमसे संपर्क करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">कौन अप्लाई कर सकता है</h2>
                            <p className="text-gray-600 font-bold max-w-2xl mx-auto  leading-relaxed text-center">बैंगलोर में माँ और नवजात शिशु की देखभाल करने वाला काम के लिए अप्लाई किया जा सकता है अगर:</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="bg-violet-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group font-bold">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-800 to-violet-900 -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 font-bold ">
                                {[
                                    "अनुभवी हेल्पर हों",
                                    "फ्रेशर्स योग्य नहीं हैं",
                                    "कपल्स के लिए यह जॉब नहीं है",
                                    "उम्र 35 से 45 साल के बीच",
                                    "बेसिक पढ़ना और लिखना आना चाहिए",
                                    "माँ और नवजात शिशु की देखभाल में कम से कम 5 साल का अनुभव"
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
                    <div className="container-custom font-bold">
                        <div className="bg-gradient-to-br from-violet-800 to-violet-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white ">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-violet-100 text-lg md:text-xl font-bold ">
                                        हम ओडिशा और पूरे भारत के हेल्पर्स को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight ">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन बातों पर ध्यान देते हैं:
                                        </h3>
                                        <ul className="space-y-3 font-bold text-violet-50 ">
                                            <li className="flex items-start gap-2 ">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">बैंगलोर में सम्मानजनक नौकरी</span>
                                            </li>
                                            <li className="flex items-start gap-2 ">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">सुरक्षित और विश्वसनीय परिवार</span>
                                            </li>
                                            <li className="flex items-start gap-2 ">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">हेल्पर की सुरक्षा और लंबे समय तक साथ</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50 lg:col-span-2 ">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base text-violet-50 font-bold ">
                                            <ul className="space-y-3 ">
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
                                                    <span className="leading-tight ">DWSSC और Skill India के साथ ट्रेनिंग</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>सिर्फ अच्छे और इज्ज़तदार घरों में प्लेसमेंट</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3 ">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>काम शुरू होने से पहले पूरी जानकारी</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>प्लेसमेंट के बाद भी लगातार सपोर्ट</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>जरूरत पड़ने पर नौकरी बदलने में मदद</span>
                                                </li>
                                                <li className="flex items-start gap-2 ">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                    <span>नियमित सैलरी और स्थायी काम</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-violet-900/50 rounded-2xl p-6 border border-violet-700/50 backdrop-blur-sm font-bold ">
                                    <div className="flex items-center gap-4 ">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300 shadow-lg">
                                            <HeartIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 ">हमारा विश्वास</h4>
                                            <p className="text-white ">हेल्पर के लिए अच्छे घर, और परिवारों के लिए भरोसेमंद हेल्पर</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 ">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300 shadow-lg">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 ">सेवा के क्षेत्र</h4>
                                            <p className="text-sm text-violet-50 ">बैंगलोर, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और अन्य।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-white font-bold ">
                    <div className="container-custom  font-bold">
                        <div className="text-center mb-16 px-4  font-bold">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold "></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto font-bold ">
                            {[
                                { title: "ट्रेनिंग और सर्टिफिकेट", desc: "सफाई, स्वच्छता और काम के उपकरणों की बेसिक ट्रेनिंग।", icon: AcademicCapIcon, color: "violet" },
                                { title: "हमेशा प्रोफेशनल दिखें", desc: "ईज़ीहेल्पर्स की कोट और साफ-सुथरा रहने का सामान।", icon: BriefcaseIcon, color: "blue" },
                                { title: "सुरक्षा और स्पष्ट एग्रीमेंट", desc: "साफ वर्क एग्रीमेंट और लगातार मार्गदर्शन।", icon: ShieldCheckIcon, color: "purple" },
                                { title: "रहने की सुविधा", desc: "प्लेसमेंट में देरी होने पर महिलाओं के लिए हॉस्टल सुविधा।", icon: OutlineHomeModernIcon, color: "pink" },
                                { title: "हेल्थ इंश्योरेंस कवर", desc: "बेसिक मेडिकल इमरजेंसी के लिए सहायता।", icon: HeartIcon, color: "red" },
                                { title: "सम्मानजनक कार्य वातावरण", desc: "जहाँ आपको इज्ज़त और अच्छा व्यवहार मिले।", icon: HandThumbUpIcon, color: "yellow" },
                                { title: "भविष्य के अवसर", desc: "अच्छा काम करने पर दूसरे शहर या विदेश में बेहतर सैलरी के मौके।", icon: ChartBarIcon, color: "indigo" },
                                { title: "समय पर सैलरी", desc: "परिवार/मालिक से डायरेक्ट भुगतान।", icon: BanknotesIcon, color: "green" },
                                { title: "जॉब प्रोफाइल बनाना", desc: "आपकी स्किल और अनुभव के आधार पर बेहतर नौकरी के अवसर।", icon: UserCircleIcon, color: "sky" },
                                { title: "हर कदम पर साथ", desc: "रजिस्ट्रेशन से लेकर प्लेसमेंट तक पूरा सपोर्ट।", icon: ChatBubbleLeftEllipsisIcon, color: "orange" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group ">
                                    <div className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300 `}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight ">{item.title}</h3>
                                    <p className="text-gray-600 font-bold text-sm leading-relaxed ">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-gray-50 relative overflow-hidden font-bold ">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10 font-bold " />
                    <div className="container-custom font-bold ">
                        <div className="max-w-4xl mx-auto font-bold ">
                            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group ">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16 group-hover:scale-110 transition-transform font-bold "></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16 font-bold "></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center  font-bold">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:rotate-12 transition-transform  font-bold">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500 font-bold " />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left  font-bold">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display leading-tight ">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                    <div className="space-y-4 mb-8 font-bold ">
                                        <p className="text-gray-600 text-lg font-bold  leading-relaxed">
                                            बैंगलोर में महिलाएँ जरूरत पड़ने पर NEST में रह सकती हैं। सुरक्षित कमरे, रोज़ का भोजन और किफायती सुविधा उपलब्ध है।
                                        </p>
                                    </div>
                                    <Link
                                        href="/nest-hostel"
                                        className="inline-flex items-center gap-2 text-pink-600 font-bold text-lg hover:gap-3 transition-all group/cta "
                                    >
                                        NEST के बारे में और जानें <ArrowRightIcon className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform font-bold " />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" lang="hi" location="Odisha" />

                {/* How to Apply */}
                <section className="section-padding bg-white font-bold ">
                    <div className="container-custom font-bold ">
                        <div className="text-center mb-16 px-4 font-bold ">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">जच्चा-बच्चा केयर हेल्पर जॉब के लिए अप्लाई कैसे करें</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs md:text-sm text-center  leading-relaxed">ईज़ीहेल्पर्स से संपर्क करें - 6 आसान कदम</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold "></div>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 font-bold ">
                            {[
                                { step: "1", title: "ईज़ीहेल्पर्स से संपर्क करें", desc: "सैलरी, खाने और रहने की जानकारी के लिए हमें कॉल करें या फॉर्म भरें।" },
                                { step: "2", title: "अपनी जानकारी साझा करें", desc: "अपना नाम, उम्र और काम का अनुभव बताएं।" },
                                { step: "3", title: "जॉब की जानकारी", desc: "काम की जिम्मेदारियाँ, समय, सुरक्षा नियम और महीने की छुट्टियाँ साफ समझें।" },
                                { step: "4", title: "जॉब के लिए यात्रा करें", desc: "जॉइन करने से पहले बैंगलोर आएं और बेसिक ट्रेनिंग लें।" },
                                { step: "5", title: "जॉब इंटरव्यू", desc: "वीडियो कॉल पर परिवार से बात करें, चयनित हों और नौकरी कन्फर्म करें।" },
                                { step: "6", title: "काम शुरू करें", desc: "ईज़ीहेल्पर्स के पूरे सपोर्ट के साथ अपनी नौकरी शुरू करें।" }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300  font-bold">
                                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md group-hover:scale-110 transition-transform ">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 ">{item.title}</h3>
                                    <p className="text-gray-600 text-xs font-bold leading-relaxed ">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-violet-50 p-10 rounded-[3rem] border border-violet-100 shadow-2xl relative overflow-hidden font-bold ">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 font-bold "></div>
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display  leading-tight px-4">एक बेहतर मौके का इंतज़ार न करें</h3>
                            <p className="text-gray-700 text-lg font-bold mb-8  leading-relaxed">
                                ओडिशा की अनुभवी माँ और नवजात शिशु की देखभाल का काम बैंगलोर में बहुत मांग है। ईज़ीहेल्पर्स से संपर्क करें और सुरक्षित जॉब के साथ अपना भविष्य बेहतर बनाएं।
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold ">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105 transition-all font-bold "
                                >
                                    अभी रजिस्टर करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-white text-violet-700 py-4 px-12 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all text-lg shadow-sm font-bold "
                                >
                                    हमें कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-white font-bold ">
                    <div className="container-custom max-w-4xl font-bold ">
                        <div className="text-center mb-12 px-4 font-bold ">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight ">
                                अक्सर पूछे जाने वाले सवाल
                            </h2>
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50 font-bold "></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
