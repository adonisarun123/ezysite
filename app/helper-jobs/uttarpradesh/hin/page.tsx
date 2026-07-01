import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
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
import { getHelperJobFaqs } from '@/lib/helperJobsSource'

export const metadata: Metadata = {
    title: 'बैंगलोर में घर का काम, अच्छी सैलरी, अभी लगाएँ',
    description: 'उत्तर प्रदेश से बैंगलोर में घर का काम | सुरक्षित नौकरी, पूरी मदद के साथ आज ही शुरू करें',
    openGraph: {
        title: 'बैंगलोर में घर का काम, अच्छी सैलरी, अभी लगाएँ',
        description: 'उत्तर प्रदेश से बैंगलोर में घर का काम | सुरक्षित नौकरी, पूरी मदद के साथ आज ही शुरू करें',
        url: 'https://www.ezyhelpers.com/helper-jobs/uttarpradesh/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/uttarpradesh/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/uttarpradesh',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/uttarpradesh/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या बैंगलोर में घर का काम नए लोगों के लिए भी ठीक है?',
        answer: 'हाँ! हम नए लोगों को सिखाते हैं और साथ देते हैं। अच्छे घर और लिखित कागज़ से आप सुरक्षित रहते हैं और धीरे-धीरे अच्छे पैसे कमाने लगते हैं।',
    },
    {
        question: 'ईज़ीहेल्पर्स पर भरोसा क्यों करें?',
        answer: 'हम एजेंसी नहीं, एक कंपनी हैं। अब तक 5000+ हेल्पर्स को काम दिला चुके हैं, और आपके राज्य के लोग भी हमारे साथ पहले से काम कर रहे हैं। आपकी सैलरी सीधे ग्राहक से मिलती है, बीच में कोई कटौती नहीं होती। अगर कभी कोई दिक्कत आती है, तो हम आपके साथ रहते हैं और मदद करते हैं। और अगर आपको घर पसंद नहीं आता, तो हम आपका काम फ्री में बदलवा देते हैं।',
    },
    {
        question: 'क्या मैं काम खुद चुन सकता हूँ?',
        answer: 'हाँ! आप घर की सफाई, खाना, बच्चों की देखभाल, बुजुर्गों की देखभाल या और काम में से चुन सकते हैं। हम आपके हुनर के हिसाब से सही घर ढूँढ़ते हैं।',
    },
    {
        question: 'क्या पहले का अनुभव ज़रूरी है?',
        answer: 'हमेशा नहीं! हम नए और अनुभवी दोनों को काम देते हैं। आपके हुनर के हिसाब से काम मिलता है और आगे बढ़ने में मदद होती है।',
    },
    {
        question: 'अगर मैं काम बदलना चाहूँ तो क्या होगा?',
        answer: 'अगर आप खुश नहीं हैं तो आप हमें बता सकते हैं। हम आपको दूसरा सही काम दिलाने में मदद करते हैं और पूरी प्रक्रिया सुरक्षित रखते हैं।',
    }
]

export default async function HelperJobsUPHindiPage() {
  const __dbHtml = await getHtmlContent("helper-jobs/uttarpradesh/hin")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/uttarpradesh/hin", faqs)
    return (
        <>
            <div lang="hi" className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'उत्तर प्रदेश' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/uttarpradesh"
                                className="w-10 h-5 bg-amber-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"></div>
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-amber-800 via-amber-500 to-amber-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">उत्तर प्रदेश के लोगों के लिए बैंगलोर में घर का काम</h1>
                            <p className="text-sm sm:text-base md:text-xl text-amber-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                उन दलालों पर भरोसा करना बंद करें जो पैसे लेकर धोखा देते हैं। ईज़ीहेल्पर्स के साथ बैंगलोर में सुरक्षित घर का काम शुरू करें। काम से पहले सब कुछ लिखित में मिलता है। आपके पैसों और सुरक्षा की पूरी गारंटी है।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">यह नौकरी आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'सुरक्षित और स्थिर काम',
                                    'पैसा सीधे घरवालों से मिलता है',
                                    'लिखित समझौता होता है',
                                    'नया सीखने का मौका',
                                    'इज़्ज़त का माहौल'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-amber-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    बैंगलोर में काम के लिए अभी लगाएँ
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमें फ़ोन करें
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
                                <div className="text-lg md:text-4xl font-bold text-amber-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-amber-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">जॉब कैटेगरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-amber-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">डायरेक्ट सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-amber-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">उत्तर प्रदेश के लोगों के लिए बैंगलोर में काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">हम आपके हुनर, अनुभव और सुविधा के हिसाब से अलग-अलग काम देते हैं। आप अपनी पसंद का काम चुन सकते हैं।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    desc: "घर को साफ, सुथरा और परिवार के लिए आरामदायक रखें।",
                                    features: ["रोज़ कमरे, रसोई और बैठक साफ करें", "बर्तन, कपड़े और चादरें धोएँ", "झाड़ू-पोंछा लगाएँ", "बाथरूम साफ रखें", "घर की चीज़ें ठीक जगह रखें", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "खाना बनाने का काम",
                                    desc: "रोज़ की रसोई में परिवारों की मदद करें और खाना बनाएँ।",
                                    features: ["सरल शाकाहारी और मांसाहारी खाना बनाएँ", "सामग्री तैयार करें और राशन संभालें", "रसोई के बर्तन और काउंटर साफ रखें", "घर वालों की पसंद का खाना बनाएँ", "बचा हुआ खाना सही तरीके से रखें", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    desc: "धैर्य और ध्यान के साथ बच्चों की देखभाल करें।",
                                    features: ["बच्चों को खाना खिलाना", "खेलने और पढ़ाई में मदद करना", "साफ-सफाई का ध्यान रखना", "बच्चों को सुलाना", "खिलौने, कपड़े और कमरा ठीक रखें", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    desc: "बुज़ुर्गों की रोज़ की ज़रूरतों और आराम में मदद करें।",
                                    features: ["रोज़ के काम में मदद: नहाना, कपड़े, चलना-फिरना", "बताए अनुसार समय पर दवाइयाँ दें", "सरल और पौष्टिक खाना बनाएँ", "साफ, सुरक्षित और आरामदायक घर", "स्वास्थ्य पर नज़र रखें और बताएँ", "उनके साथ रहें, प्यार से बात करें"]
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    desc: "घर पर बीमार व्यक्ति की रोज़ की मदद और देखभाल करें।",
                                    features: ["खाने और चलने में सुरक्षित तरीके से मदद", "नहाने और साफ-फसफाई में मदद", "पलंग, कपड़े और आसपास साफ रखें", "आराम पर ध्यान रखें और ज़रूरत पर बताएँ", "परिवार या डॉक्टर की बात मानें", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "पति-पत्नी का घर संभालने का काम",
                                    desc: "पति-पत्नी मिलकर घर की जिम्मेदारियाँ उठाते हैं।",
                                    features: ["सफाई, रखरखाव और रोज़ का काम", "सफाई और कचरा उठाएँ", "घर को साफ और ठीक रखें", "परिवार की दी हुई जगह में रहें", "लंबा और टिकाऊ काम"]
                                },
                                {
                                    title: "पति-पत्नी के लिए चौकीदारी का काम",
                                    desc: "मिलकर घरों की रखवाली और निगरानी करें।",
                                    features: ["आने-जाने वालों और दरवाज़े पर ध्यान", "समय पर गेट खोलें और बंद करें", "दिन और रात की पाली में सतर्क रहें", "अगर कुछ गड़बड़ लगे तो तुरंत बताएं", "सुरक्षा से जुड़े सभी नियमों का पालन करें", "दोनों के लिए रहने की जगह"]
                                },
                                {
                                    title: "माँ और नवजात की देखभाल का काम",
                                    desc: "बच्चा होने के बाद माँ और नवजात शिशु की देखभाल करें।",
                                    features: ["ठीक होने में माँ की मदद करें", "बच्चे को दूध पिलाने और साफ रखने में मदद", "बच्चे के सोने और सफाई का ध्यान", "ज़रूरत हो तो रात की ड्यूटी", "परिवार के साथ मिलकर काम करें", "24 घंटे रहने का काम, पूरी देखभाल"]
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    desc: "मिलकर फार्महाउस की जगह संभालें।",
                                    features: ["घर और आसपास की जगह साफ करें", "पौधों को पानी दें और बगीचे की देखभाल", "ज़रूरत हो तो खाना बनाएँ", "जगह की रखवाली करें", "जानवर हों तो उनकी मदद करें", "खाने के साथ कमरा मिलेगा"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-amber-700 mb-3 group-hover:text-amber-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-amber-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        और जानें <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer UP Helpers */}
                <section className="section-padding bg-amber-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">बैंगलोर के घर उत्तर प्रदेश वालों को क्यों पसंद करते हैं</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['मेहनती और लगन से काम करते हैं', 'ईमानदार और भरोसेमंद', 'जल्दी सीखते हैं', 'लंबे समय तक टिकते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-amber-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-amber-600" />
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
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">देखिए क्यों उत्तर प्रदेश के लोग ईज़ीहेल्पर्स पर भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-amber-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "आपके पैसों का हिस्सा कमीशन में ले लेते हैं", ezy: "मुफ़्त का काम, पूरे पैसे आपके" },
                                        { agent: "वादों का कोई सबूत नहीं", ezy: "लिखित में सब तय, आपके हक़ की रक्षा" },
                                        { agent: "ज़रूरत पर जवाब देना बंद कर देते हैं", ezy: "हमारी टीम हर फ़ोन का जवाब देती है" },
                                        { agent: "काम या पैसे बाद में बदल सकते हैं", ezy: "काम शुरू करने से पहले सब बता देते हैं" },
                                        { agent: "पैसे देर से मिलते हैं या काट लेते हैं", ezy: "घर वाले सीधे समय पर पैसे देते हैं" },
                                        { agent: "कठिनाई में रहने की जगह नहीं देते", ezy: "सुरक्षित कठिनाई की व्यवस्था भी है" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-amber-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-amber-500 font-bold text-xl">✓</span>
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
                                { agent: "आपके पैसों का हिस्सा कमीशन में ले लेते हैं", ezy: "मुफ़्त का काम, पूरे पैसे आपके" },
                                { agent: "वादों का कोई सबूत नहीं", ezy: "लिखित में सब तय, आपके हक़ की रक्षा" },
                                { agent: "ज़रूरत पर जवाब देना बंद कर देते हैं", ezy: "हमारी टीम हर फ़ोन का जवाब देती है" },
                                { agent: "काम या पैसे बाद में बदल सकते हैं", ezy: "काम शुरू करने से पहले सब बता देते हैं" },
                                { agent: "पैसे देर से मिलते हैं या काट लेते हैं", ezy: "घर वाले सीधे समय पर पैसे देते हैं" },
                                { agent: "कठिनाई में रहने की जगह नहीं देते", ezy: "सुरक्षित कठिनाई की व्यवस्था भी है" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-amber-50">
                                        <div className="text-xs font-bold text-amber-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">उत्तर प्रदेश के लोगों को क्या-क्या मिलेगा</h2>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर है।", icon: BanknotesIcon },
                                { title: "उत्तर प्रदेश से ज़्यादा पैसे", desc: "लखनऊ, कानपुर, वाराणसी की नौकरियों से बहुत ज़्यादा।", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "सैलरी सीधे आपके बैंक में आती है, कोई कटौती नहीं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना बनाना, देखभाल, सफाई और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बिस्तर/गद्दा के साथ बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "रोज़ 8–10 घंटे के काम में हफ्ते में 1 छुट्टी या 24 घंटे काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलते वक्त नेस्ट हॉस्टल में मुफ़्त रहने की जगह (सिर्फ महिलाओं के लिए)।", icon: ShieldCheckIcon },
                                { title: "रेफरल बोनस", desc: "किसी योग्य व्यक्ति को जोड़ें, वह एक महीना काम पूरा करे तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-3 text-amber-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-amber-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-amber-100 rounded-full"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-amber-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-amber-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-amber-700 hover:shadow-lg transition-all"
                            >
                                अभी आवेदन करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-amber-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-amber-600 hover:bg-amber-50 transition-all"
                            >
                                हमें फ़ोन करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="amber" lang="hi" location="Uttar Pradesh" />

                {/* CTA Section */}
                <section className="section-padding bg-amber-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                उत्तर प्रदेश में कम पैसों पर काम करते न रहें। बैंगलोर आएँ, ज़्यादा कमाएँ, सुरक्षित रहें और अपने परिवार का अच्छा भविष्य बनाएँ। आज ही ईज़ीहेल्पर्स से जुड़ें।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-amber-50 font-bold italic opacity-90">
                                अपनी पसंद का काम चुनें और इज़्ज़त के साथ कमाएँ।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-amber-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    नौकरी के लिए आवेदन करें
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
                            <div className="w-32 h-1 bg-amber-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
