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
    HomeModernIcon as OutlineHomeModernIcon,
    ChartBarIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ArrowRightIcon,
    PhoneIcon,
    InformationCircleIcon,
    TruckIcon,
    SunIcon,
    UserIcon as OutlineUserIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'बैंगलोर में भरोसेमंद लिव इन हाउसकीपिंग कपल जॉब',
    description: 'EzyHelpers के साथ बैंगलोर में लिव इन हाउसकीपिंग कपल जॉब शुरू करें। रहने की जगह, खाना और सैलरी सीधे परिवार से। ट्रेनिंग और सुरक्षित प्लेसमेंट।',
    openGraph: {
        title: 'बैंगलोर में भरोसेमंद लिव इन हाउसकीपिंग कपल जॉब',
        description: 'EzyHelpers के साथ बैंगलोर में लिव इन हाउसकीपिंग कपल जॉब शुरू करें। रहने की जगह, खाना और सैलरी सीधे परिवार से। ट्रेनिंग और सुरक्षित प्लेसमेंट।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या 24 घंटे रहने वाले कपल घरेलू हेल्पर्स जॉब में खाना और रहने की जगह मिलती है',
        answer: 'हाँ। लिव-इन कपल जॉब में कपल को रहने के लिए कमरा और रोज का खाना दिया जाता है।',
    },
    {
        question: 'सैलरी कौन देता है',
        answer: 'सैलरी हर महीने सीधे परिवार द्वारा दी जाती है।',
    },
    {
        question: 'क्या लिव इन जॉब में छुट्टी मिलती है',
        answer: 'हाँ। आमतौर पर हर महीने दो दिन की छुट्टी मिलती है।',
    },
    {
        question: 'क्या बिना अनुभव के भी अप्लाई किया जा सकता है',
        answer: 'हाँ। नए और अनुभवी दोनों लोग अप्लाई कर सकते हैं। जरूरत होने पर ट्रेनिंग दी जाती है।',
    },
    {
        question: 'लिव-इन कपल जॉब में रोज कौन-कौन से काम करने होते हैं?',
        answer: 'इस जॉब में आमतौर पर घर की सफाई, झाड़ू-पोछा, कपड़े धोना, बर्तन साफ करना और किचन साफ रखना जैसे काम होते हैं। कुछ घरों में खाना बनाना, बच्चों की देखभाल या बुजुर्गों की मदद भी करनी पड़ सकती है।',
    },
    {
        question: 'क्या कपल को हर महीने छुट्टी मिलती है?',
        answer: 'हाँ, अधिकतर परिवार हर महीने तय छुट्टियाँ देते हैं। छुट्टियों की संख्या और दिन जॉब शुरू होने से पहले ही परिवार और कपल के बीच तय कर दिए जाते हैं।',
    }
]

export default async function HousekeepingCoupleJobsOdishaBangaloreHindiPage() {
  const __dbHtml = await getHtmlContent("helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin", faqs)
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
                        { label: 'हाउसकीपिंग कपल जॉब' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore"
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal ">बैंगलोर में हाउसकीपिंग के लिए लिव-इन कपल जॉब्स</h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-violet-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none font-medium">
                                    क्या आप एक कपल के रूप में साथ काम करना चाहते हैं? बैंगलोर में लिव इन हाउसकीपिंग कपल जॉब्स पति पत्नी की जोड़ी को एक ही घर में रहने और काम करने का मौका देती हैं। इससे दोनों लोग मिलकर कमाई कर सकते हैं और खर्च भी कम रहता है।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कपल के लिए फ्री रहने की जगह</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ साफ बंटा हुआ काम</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ दोनों की मिलकर स्थिर कमाई</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 px-4 max-w-md mx-auto sm:max-w-none font-bold">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
                                >
                                    कपल जॉब्स के लिए अप्लाई करें
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

                {/* Offer Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">जॉब लोकेशन: बैंगलोर</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 shadow-xl border border-violet-100 max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display ">EzyHelpers को क्या अलग बनाता है</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "फ्री जॉब, कोई फीस नहीं", icon: ShieldCheckIcon },
                                    { text: "बिना एजेंट के सीधे परिवार से काम", icon: UserPlusIcon },
                                    { text: "जॉइन करने से पहले पूरी जानकारी", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "हर महीने समय पर सैलरी", icon: BanknotesIcon },
                                    { text: "काम से पहले ट्रेनिंग और मार्गदर्शन", icon: AcademicCapIcon },
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                            {[
                                { title: "रहने की जगह", desc: "कपल को रहने के लिए अलग कमरा या सोने की जगह दी जाती है। इससे आराम और सम्मान बना रहता है।", icon: HomeIcon },
                                { title: "खाना", desc: "परिवार की तरफ से रोज तीन बार खाना दिया जाता है। इससे खाने का खर्च नहीं होता।", icon: SunIcon },
                                { title: "काम और आराम", desc: "घर के काम पति-पत्नी मिलकर करते हैं। आराम का समय मिलता है और हर महीने दो तय छुट्टियाँ भी मिलती हैं।", icon: BriefcaseIcon },
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
                                    <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed  text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center max-w-3xl mx-auto bg-violet-900 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold mb-4 ">यह किन लोगों के लिए सही है</h3>
                            <p className="text-lg font-bold text-violet-50 leading-relaxed">
                                ओडिशा के ऐसे कपल जो बैंगलोर में सुरक्षित और लंबे समय तक चलने वाली जॉब चाहते हैं और अच्छी कमाई करना चाहते हैं।
                            </p>
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold py-3 px-10 rounded-xl mt-6 hover:bg-violet-50 transition-colors shadow-lg"
                            >
                                अभी अप्लाई करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">लिव इन कपल जॉब में काम की जिम्मेदारियां</h2>
                            <p className="text-gray-600 font-bold max-w-3xl mx-auto ">बैंगलोर में परिवार ऐसे कपल को पसंद करते हैं जो मिलकर जिम्मेदारी से काम संभाल सकें।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                    <SparklesIcon className="w-6 h-6 text-violet-600" /> रोज के काम
                                </h3>
                                <ul className="grid grid-cols-1 gap-4 font-bold text-gray-700">
                                    {[
                                        "घर में झाड़ू और पोछा लगाना",
                                        "कमरे, बाथरूम और बालकनी साफ करना",
                                        "कपड़े धोना और सुखाना",
                                        "कपड़े प्रेस करना और अलमारी ठीक रखना",
                                        "खाने के बाद बर्तन धोना",
                                        "किचन को साफ और स्वच्छ रखना",
                                        "जरूरत होने पर घर के छोटे कामों में मदद करना",
                                        "जरूरत हो तो किराने का सामान लाना"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-violet-50 p-4 rounded-xl border border-violet-100">
                                            <CheckCircleIcon className="w-5 h-5 text-violet-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4 uppercase tracking-tight">
                                    <InformationCircleIcon className="w-6 h-6 text-blue-600" /> जॉइन करने से पहले तय होने वाले काम
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { text: "सादा घर का खाना बनाना", icon: SparklesIcon },
                                        { text: "ड्राइविंग अगर लाइसेंस हो", icon: TruckIcon },
                                        { text: "बच्चों की देखभाल में मदद", icon: HeartIcon },
                                        { text: "बुजुर्गों की देखभाल में मदद", icon: HeartIcon },
                                        { text: "बगीचे की देखभाल", icon: GlobeAltIcon },
                                        { text: "पालतू जानवरों की देखभाल", icon: OutlineUserIcon }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-violet-200 hover:bg-violet-50 transition-all">
                                            <item.icon className="w-6 h-6 text-violet-500 mb-2" />
                                            <span className="font-bold text-gray-800 text-sm">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Types Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">बैंगलोर में 24 घंटे रहने वाली कपल जॉब्स के प्रकार</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                            <table className="w-full text-left font-bold">
                                <thead className="bg-violet-600 text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-xs md:text-sm">जॉब का प्रकार</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-xs md:text-sm">किसके लिए सही है</th>
                                        <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-xs md:text-sm">मुख्य फायदे</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        { type: "फुल प्रॉपर्टी केयरटेकर कपल जॉब", best: "बड़े घर या विला संभाल सकने वाले कपल", benefit: "ज्यादा संयुक्त सैलरी, अलग रहने की सुविधा" },
                                        { type: "कुक और हाउसकीपिंग कपल जॉब", best: "जहाँ पत्नी खाना बनाती है, पति सफाई संभालता है", benefit: "काम का बंटवारा आसान, परिवार के साथ संपर्क" },
                                        { type: "बुजुर्ग देखभाल कपल जॉब", best: "बुजुर्गों की देखभाल में सहज कपल", benefit: "हल्का काम, सम्मानजनक माहौल" },
                                        { type: "ड्राइवर और हाउसकीपिंग कपल जॉब", best: "जहाँ पति ड्राइविंग करता है, पत्नी घर का काम", benefit: "कई हुनर की कद्र, बेहतर सैलरी" }
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-violet-50 transition-colors">
                                            <td className="p-4 md:p-6 text-violet-900 text-sm md:text-base">{item.type}</td>
                                            <td className="p-4 md:p-6 text-gray-700 text-xs md:text-sm ">{item.best}</td>
                                            <td className="p-4 md:p-6 text-gray-600 text-xs md:text-sm">{item.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-violet-700 transition-all shadow-lg"
                            >
                                <PhoneIcon className="w-6 h-6 mr-2" /> आज ही हमसे संपर्क करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">बैंगलोर में लिव इन कपल जॉब्स की सैलरी</h2>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto  leading-relaxed">सैलरी घर के आकार, परिवार के सदस्यों की संख्या और काम के प्रकार पर निर्भर करती है।</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
                                <div className="space-y-8">
                                    <div className="bg-violet-50 p-6 rounded-3xl border border-violet-100 flex items-center gap-6">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-violet-600 shadow-sm font-bold text-2xl">₹</div>
                                        <div>
                                            <h4 className="text-violet-800 font-bold uppercase tracking-widest text-xs mb-1 ">मासिक सैलरी</h4>
                                            <p className="text-violet-900 font-bold text-2xl md:text-3xl">₹30,000 से ₹35,000</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 font-bold text-gray-700">
                                        <div className="flex items-center gap-3">
                                            <SunIcon className="w-6 h-6 text-green-500" />
                                            <span>फ्री खाना</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <HomeIcon className="w-6 h-6 text-green-500" />
                                            <span>फ्री कमरा</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-violet-900 text-white p-8 md:p-12 rounded-[2rem] shadow-xl relative group text-center md:text-left">
                                    <div className="absolute inset-0 bg-violet-800 rounded-[2rem] transform group-hover:scale-105 transition-transform -z-10"></div>
                                    <p className="text-xl md:text-2xl font-bold font-display  leading-tight">रहने और खाने का खर्च नहीं होने से आपकी कमाई का बड़ा हिस्सा बचत के रूप में घर भेजा जा सकता है।</p>
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-white text-violet-700 font-bold py-3 px-10 rounded-xl mt-8 hover:bg-violet-50 transition-colors shadow-lg"
                                    >
                                        अभी अप्लाई करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Eligibility Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">लिव इन कपल जॉब के लिए कौन अप्लाई कर सकता है</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "पति पत्नी साथ काम करना चाहते हों",
                                    "उम्र 21 से 50 साल के बीच हो",
                                    "बेसिक पढ़ाई हो",
                                    "नए और अनुभवी दोनों लोग अप्लाई कर सकते हैं",
                                    "ईमानदारी से काम करने के लिए तैयार हों"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm font-bold text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why it works section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">ओडिशा के कपल्स के लिए लिव-इन हाउसकीपिंग कपल जॉब क्यों बेहतर है</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {[
                                { title: "साथ में रहना", desc: "आप एक ही घर में रहते और काम करते हैं, जिससे रोज एक-दूसरे का सहारा मिलता है।", icon: HomeIcon },
                                { title: "दो लोगों की कमाई, कम खर्च", desc: "दोनों लोग कमाते हैं। किराया नहीं देना पड़ता और खाने का खर्च भी नहीं होता।", icon: BanknotesIcon },
                                { title: "सुरक्षित माहौल", desc: "हम आपको ऐसे सम्मानजनक परिवारों में काम दिलाते हैं जो आपकी प्राइवेसी का ध्यान रखते हैं।", icon: ShieldCheckIcon },
                                { title: "बेहतर भविष्य की योजना", desc: "बच्चों की पढ़ाई या ओडिशा में नया घर बनाने के लिए पैसे बचा सकते हैं।", icon: ChartBarIcon }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md flex flex-col items-center text-center group hover:bg-violet-600 transition-colors duration-300">
                                    <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 text-violet-600 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 font-bold text-sm leading-relaxed group-hover:text-violet-50 transition-colors ">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                            <Link
                                href="/helper-registration"
                                className="bg-violet-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105 transition-all"
                            >
                                लिव-इन कपल जॉब के लिए अप्लाई करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-violet-800 to-violet-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white ">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-violet-100 text-lg md:text-xl font-bold">
                                        हम ओडिशा और पूरे भारत के हेल्पर्स को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-violet-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-100 border-b border-violet-700/50 pb-3 uppercase tracking-tight">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन बातों पर ध्यान देते हैं:
                                        </h3>
                                        <ul className="space-y-3 font-bold text-violet-50">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">बैंगलोर में सम्मानजनक नौकरी</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">सुरक्षित और विश्वसनीय परिवार</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">हेल्पर की सुरक्षा और लंबे समय तक साथ</span>
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
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 ">हमारा विश्वास</h4>
                                            <p className="text-white">हेल्पर के लिए अच्छे घर, और परिवारों के लिए भरोसेमंद हेल्पर</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-violet-800 rounded-full flex items-center justify-center flex-shrink-0 border border-violet-600 text-violet-300">
                                            <GlobeAltIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-violet-300 uppercase tracking-wider font-bold mb-1 ">सेवा के क्षेत्र</h4>
                                            <p className="text-sm text-violet-50">बैंगलोर, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और अन्य।</p>
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
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display ">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display ">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg font-bold">
                                            बैंगलोर में महिलाएँ जरूरत पड़ने पर NEST में रह सकती हैं। सुरक्षित कमरे, रोज़ का भोजन और किफायती सुविधा उपलब्ध है।
                                        </p>
                                    </div>
                                    <Link
                                        href="/contact"
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
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display  leading-tight">पति-पत्नी का घर की सफाई का काम के लिए अप्लाई कैसे करें</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs md:text-sm text-center ">ओडिशा से बैंगलोर तक - 6 आसान कदम</p>
                            <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
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
                                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
                                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-xs font-bold leading-relaxed ">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16 max-w-3xl mx-auto bg-white p-10 rounded-[3rem] border border-violet-100 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                            <h3 className="text-xl md:text-3xl font-bold text-violet-900 mb-4 font-display leading-tight px-4 ">पति-पत्नी साथ काम करके अपने परिवार के लिए सुरक्षित भविष्य बना सकते हैं।</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto sm:max-w-none">
                                <Link
                                    href="/helper-registration"
                                    className="bg-violet-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-violet-700 shadow-lg text-lg transform hover:scale-105"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="bg-white text-violet-700 font-bold py-4 px-12 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all text-lg shadow-sm"
                                >
                                    हमारी टीम से बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight italic">
                                अक्सर पूछे जाने वाले सवाल
                            </h2>
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
