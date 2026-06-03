import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ReferEarnSection from '@/components/ReferEarnSection'
import {
    BriefcaseIcon,
    StarIcon,
    PhoneIcon,
    CheckCircleIcon,
    ClockIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'ओडिशा के काम करने वालों के लिए बैंगलोर में घर का काम',
    description: 'कम पैसों से तंग आ गए हैं? बैंगलोर में घर के काम की नौकरी लें। खाना बनाना, सफाई, देखभाल। नौकरी बिल्कुल मुफ़्त।',
    openGraph: {
        title: 'ओडिशा के काम करने वालों के लिए बैंगलोर में घर का काम',
        description: 'कम पैसों से तंग आ गए हैं? बैंगलोर में घर के काम की नौकरी लें। खाना बनाना, सफाई, देखभाल। नौकरी बिल्कुल मुफ़्त।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या मुझे पहचान पत्र देना जरूरी है?',
        answer: 'नहीं, आपको कोई कागज देने की जरूरत नहीं है। आप हमें पहचान पत्र की फोटो भेज सकते हैं, हम सुरक्षित तरीके से जांच कर लेते हैं।',
    },
    {
        question: 'मुझे पैसा कैसे मिलेगा?',
        answer: 'आपका पैसा हर महीने की 10 तारीख से पहले सीधे आपके खाते में भेज दिया जाता है। कोई कटौती या देरी नहीं होती।',
    },
    {
        question: 'अगर मुझे काम पसंद न आए या मुश्किल लगे तो?',
        answer: 'कोई बात नहीं। हमारी टीम आपको बिना किसी दबाव के दूसरा काम दिलाने में पूरी मदद करते हैं।',
    },
    {
        question: 'काम शुरू करने के बाद मदद मिलेगी?',
        answer: 'हाँ! हम हर हफ्ते आपसे बात करते हैं और किसी भी परेशानी में हमेशा आपकी मदद के लिए मौजूद रहते हैं।',
    },
    {
        question: 'क्या मैं खुद परिवार चुन सकता/सकती हूँ?',
        answer: 'हाँ, आप पहले वीडियो कॉल पर परिवार से बात कर सकते/सकती हैं। अगर आपको सही लगे, तभी आप काम स्वीकार करते हैं।',
    },
    {
        question: 'मुझे कितने समय तक काम करना होगा?',
        answer: 'घर वाले ज़्यादा समय तक रहना पसंद करते हैं, पर खुश न हों तो बदल सकते हैं। हम सब आसान बना देते हैं।',
    },
    {
        question: 'क्या काम से पहले घर देख सकते हैं?',
        answer: 'हाँ! अगर घर वाले ठीक समझें तो वीडियो दिखाते हैं। वरना वीडियो कॉल पर बात करके सब समझ सकते हैं।',
    }
]

export default function HelperJobsOdishaHindiPage() {
    return (
        <>
            <div lang="hi" className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'ओडिशा' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha"
                                className="w-10 h-5 bg-violet-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"></div>
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

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">ओडिशा के लोगों के लिए बैंगलोर में घर का काम</h1>
                            <p className="text-sm sm:text-base md:text-xl text-violet-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                ईज़ीहेल्पर्स ओडिशा के मेहनती लोगों को बैंगलोर में अच्छे घरों से जोड़ता है। आप सीधे अच्छे परिवारों के साथ काम करते हैं, पैसे समय पर मिलते हैं, और हम हर कदम पर आपके साथ हैं। कोई दलाल नहीं, कोई फीस नहीं, बस पक्का काम।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">यह नौकरी आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'बैंगलोर में सुरक्षित काम',
                                    'घर वाले सीधे पैसे देते हैं',
                                    'लिखित में सब कुछ तय होता है',
                                    'मुफ़्त में सिखाया जाता है'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-violet-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    बैंगलोर में काम के लिए अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमें कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-white py-6 md:py-10 border-b border-gray-100">
                    <div className="container-custom">
                        <div className="grid grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100">
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">जॉब कैटेगरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">डायरेक्ट पेमेंट</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में ओडिशा के लोगों के लिए काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">हम आपके अनुभव और पसंद के अनुसार अलग-अलग तरह के काम दिलाते हैं।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    desc: "रोज़ घर साफ रखना, बर्तन और कपड़े धोना, कमरे व्यवस्थित रखना।",
                                    features: ["रोज़ झाड़ू-पोंछा लगाना", "बर्तन, कपड़े और चादरें धोना", "कमरों और सामान को साफ रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम उपलब्ध"],
                                    href: "/helper-jobs/odisha/housekeeping-job-bangalore/hin"
                                },
                                {
                                    title: "खाना बनाने का काम",
                                    desc: "शाकाहारी और मांसाहारी खाना बनाना, राशन का ध्यान रखना, रसोई साफ रखना",
                                    features: ["परिवार के लिए रोज खाना बनाना", "राशन की योजना बनाने में मदद करना", "रसोई को साफ और व्यवस्थित रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम उपलब्ध"],
                                    href: "/helper-jobs/odisha/home-cook-jobs-in-bangalore/hin"
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    desc: "बच्चों को संभालना, खाना खिलाना, पढ़ाई में मदद करना, उनका ध्यान रखना।",
                                    features: ["बच्चों का ध्यान रखना और समय पर खाना देना", "पढ़ाई और खेलने में साथ देना", "बच्चों को सुरक्षित और साफ रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम उपलब्ध"],
                                    href: "/helper-jobs/odisha/nanny-jobs-in-bangalore/hin"
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    desc: "घर के बड़े-बुज़ुर्गों का ध्यान रखना, उनके साथ रहना, उनकी मदद करना।",
                                    features: ["बुज़ुर्गों के रोज़ के काम में मदद करना", "उनके साथ बैठना, बात करना", "चलने-फिरने और नहाने में मदद करना", "सुरक्षित और अच्छा घर का माहौल"],
                                    href: "/helper-jobs/odisha/elderly-care-job-bangalore/hin"
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    desc: "घर पर बीमार व्यक्ति की देखभाल करना और उन्हें आराम देना।",
                                    features: ["घर पर बीमार व्यक्ति की मदद करना", "रोज के कामों में सहायता करना", "आराम और सुरक्षा का ध्यान रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम उपलब्ध"],
                                    href: "/helper-jobs/odisha/patient-care-job-bangalore/hin"
                                },
                                {
                                    title: "पति-पत्नी का घर संभालने का काम",
                                    desc: "पति-पत्नी मिलकर घर का सारा काम संभालते हैं और घर साफ रखते हैं।",
                                    features: ["पति-पत्नी मिलकर सफाई और घर का काम करना", "रोज़ का काम और घर की देखभाल", "घर के आसपास की देखभाल भी", "रहने की जगह दी जाती है"],
                                    href: "/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore/hin"
                                },
                                {
                                    title: "पति-पत्नी का सुरक्षा का काम",
                                    desc: "पति-पत्नी मिलकर अपार्टमेंट या घर की रखवाली करते हैं।",
                                    features: ["पति-पत्नी मिलकर घर की देखभाल करना", "घर और परिवार को सुरक्षित रखें", "आने-जाने वालों पर ध्यान रखें", "काम सिखाया और समझाया जाता है"],
                                    href: "/helper-jobs/odisha/couple-security-job-bangalore/hin"
                                },
                                {
                                    title: "जापा सहायक का काम",
                                    desc: "डिलीवरी के बाद माँ और बच्चे की देखभाल करना।",
                                    features: ["माँ और नवजात का ध्यान रखना", "बच्चे को खिलाना और देखभाल करना", "माँ के ठीक होने में साथ देंना", "24 घंटे रहने का काम, पूरी मदद मिलेगी"],
                                    href: "/helper-jobs/odisha/japa-maid-job-bangalore/hin"
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    desc: "पति-पत्नी मिलकर बड़े फार्म की देखभाल करते हैं। रहने की जगह दी जाती है।",
                                    features: ["बड़े खेत या घर की देखभाल", "सफाई और रखरखाव करना", "पौधों और बगीचे का ध्यान रखना", "फार्म पर ही रहने की जगह मिलेगी"],
                                    href: "/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore/hin"
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group bg-white rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-violet-700 mb-3 group-hover:text-violet-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-violet-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        और जानें <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Odisha Helpers */}
                <section className="section-padding bg-violet-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">बैंगलोर के परिवार ओडिशा के लोगों को क्यों पसंद करते हैं</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">बैंगलोर के परिवार ओडिशा के लोगों को इसलिए बुलाते हैं:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['धैर्य और देखभाल करने का स्वभाव', 'जल्दी सीखने की आदत', 'लंबे समय तक काम करने की इच्छा', 'सम्मानजनक और शांत स्वभाव के होते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-violet-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-violet-600" />
                                        <span className="text-sm md:text-lg font-bold text-gray-800 uppercase tracking-tight leading-none">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">ईज़ीहेल्पर्स और दलाल में क्या फ़र्क है</h2>
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">देखिए क्यों ओडिशा के लोग ईज़ीहेल्पर्स पर भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-violet-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "एक महीने की पूरी सैलरी ले लेते हैं", ezy: "बिना फीस के जुड़ें और पूरा पैसा खुद रखें" },
                                        { agent: "सिर्फ बातों पर भरोसा, कोई लिखित नहीं", ezy: "सैलरी, छुट्टी और काम सब लिखित में" },
                                        { agent: "कोई दिक्कत आए तो फ़ोन नहीं उठाते", ezy: "कभी भी मदद के लिए संपर्क करें" },
                                        { agent: "काम के नियम बाद में बदल देते हैं", ezy: "पहले दिन से काम साफ बताया जाता है" },
                                        { agent: "पैसे देर से देते हैं या काट लेते हैं", ezy: "समय पर पैसे, कोई कटौती नहीं" },
                                        { agent: "कोई कठिनाई आए तो अकेले छोड़ देते हैं", ezy: "परेशानी में रहने की सुविधा और मदद" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-violet-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-violet-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4">
                            {[
                                { agent: "एक महीने की पूरी सैलरी ले लेते हैं", ezy: "बिना फीस के जुड़ें और पूरा पैसा खुद रखें" },
                                { agent: "सिर्फ बातों पर भरोसा, कोई लिखित नहीं", ezy: "सैलरी, छुट्टी और काम सब लिखित में" },
                                { agent: "कोई दिक्कत आए तो फ़ोन नहीं उठाते", ezy: "कभी भी मदद के लिए संपर्क करें" },
                                { agent: "काम के नियम बाद में बदल देते हैं", ezy: "पहले दिन से काम साफ बताया जाता है" },
                                { agent: "पैसे देर से देते हैं या काट लेते हैं", ezy: "समय पर पैसे, कोई कटौती नहीं" },
                                { agent: "कोई कठिनाई आए तो अकेले छोड़ देते हैं", ezy: "परेशानी में रहने की सुविधा और मदद" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-violet-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-violet-50">
                                        <div className="text-xs font-bold text-violet-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
                                        <div className="text-gray-700 text-sm font-bold">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">ओडिशा के लोगों को क्या-क्या मिलेगा</h2>
                            <p className="text-sm md:text-lg text-violet-700 font-bold italic mb-8 uppercase tracking-wide">
                                ओडिशा से 3 गुना ज़्यादा कमाएँ, इज़्ज़त और सुरक्षा के साथ
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर", icon: BanknotesIcon },
                                { title: "ओडिशा से ज़्यादा पैसे", desc: "भुवनेश्वर, कटक, राउरकेला से 3 गुना ज़्यादा कमाएँ।", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "सैलरी सीधे आपके बैंक में आती है, कोई कटौती नहीं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना बनाना, देखभाल, सफाई और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "रोज़ 8–10 घंटे के काम में हफ्ते में 1 छुट्टी या 24 घंटे काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलना हो या कोई दिक्कत हो, तो नेस्ट हॉस्टल में रहने की जगह मिलती है।", icon: ShieldCheckIcon },
                                { title: "रेफरल बोनस", desc: "किसी योग्य व्यक्ति को जोड़ें, वह एक महीना काम पूरा करे तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-3 text-violet-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-violet-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">काम कैसे मिलेगा</h2>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-violet-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "फ़ोन करें या ऑनलाइन फॉर्म भरें।" },
                                    { step: 2, title: "अपने काम का अनुभव और पसंद बताएँ।" },
                                    { step: 3, title: "हम आपकी जानकारी के हिसाब से सही घर ढूँढते हैं।" },
                                    { step: 4, title: "घर वालों से वीडियो कॉल पर बात करें।" },
                                    { step: 5, title: "काम पक्का करें और हमारी मदद से सुरक्षित जाएँ।" },
                                    { step: 6, title: "हमारी टीम के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-violet-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-10">
                                            {index % 2 !== 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-violet-700 hover:shadow-lg transition-all"
                            >
                                अभी आवेदन करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all"
                            >
                                हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" lang="hi" location="Odisha" />

                {/* CTA Section */}
                <section className="section-padding bg-violet-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                बैंगलोर में सुरक्षित काम करते हुए अपने घर वालों का सहारा बनें। यहाँ आपको सम्मान, अच्छी कमाई और पूरा साथ मिलेगा। आज ही ईज़ीहेल्पर्स से जुड़ें।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-violet-50 font-bold italic opacity-90">
                                अपनी पसंद का काम चुनें और इज़्ज़त के साथ कमाएँ।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    अभी फॉर्म भरें
                                </Link>
                                <Link
                                    href="/helper-jobs/hin"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    काम के प्रकार देखें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-xl mx-auto">
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
