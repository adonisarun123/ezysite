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
    ChartBarIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ArrowRightIcon,
    PhoneIcon,
    InformationCircleIcon,
    ClockIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'बैंगलोर में असम हेल्पर्स के लिए घर में खाना बनाने की नौकरी',
    description: 'असम से बैंगलोर में घर में खाना बनाने की नौकरी पाएँ। सुरक्षित परिवार, बिना फीस काम, पूरी मदद और सम्मानजनक माहौल के साथ अभी जुड़ें।',
    openGraph: {
        title: 'बैंगलोर में असम हेल्पर्स के लिए घर में खाना बनाने की नौकरी',
        description: 'असम से बैंगलोर में घर में खाना बनाने की नौकरी पाएँ। सुरक्षित परिवार, बिना फीस काम, पूरी मदद और सम्मानजनक माहौल के साथ अभी जुड़ें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/home-cook-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या खाना बनाने की नौकरी पाने के लिए मुझे कोई फीस देनी होगी?',
        answer: 'नहीं, बिल्कुल नहीं। EzyHelpers के माध्यम से नौकरी पाना पूरी तरह मुफ्त है। हम हेल्पर्स से किसी भी प्रकार की फीस, एजेंट चार्ज या छिपे हुए पैसे नहीं लेते।',
    },
    {
        question: 'मैंने पहले कभी कुक का काम नहीं किया। क्या मैं फिर भी आवेदन कर सकती हूँ?',
        answer: 'हाँ, बिल्कुल। फ्रेशर्स भी आवेदन कर सकते हैं। अगर आपको अच्छा घर का खाना बनाना आता है और आप ईमानदारी से काम करना चाहती हैं, तो आप इस नौकरी के लिए योग्य हैं।',
    },
    {
        question: 'क्या मेरी सैलरी हर महीने समय पर मिलेगी?',
        answer: 'हाँ। परिवार आपकी पूरी सैलरी हर महीने की 10 तारीख से पहले सीधे आपको देता है। हमारी तरफ से कोई कटौती या देरी नहीं होती।',
    },
    {
        question: 'काम शुरू करने से पहले कितने दिनों की ट्रेनिंग मिलेगी?',
        answer: 'आपको बैंगलोर में 3 दिनों की ट्रेनिंग दी जाएगी। इसमें खाना बनाने की बेसिक बातें, सफाई, किचन संभालना और परिवार से अच्छे से बात करना सिखाया जाता है।',
    },
    {
        question: 'मुझे बैंगलोर आने के बाद रहने की चिंता है। मुझे क्या करना चाहिए?',
        answer: 'अगर नौकरी मिलने में थोड़ा समय लगता है, तो आप हमारे NEST हॉस्टल में रह सकती हैं। यह महिला हेल्पर्स के लिए सुरक्षित हॉस्टल है, जहाँ कम खर्च में रहने और खाने की सुविधा मिलती है।',
    },
    {
        question: 'आवेदन करने के बाद नौकरी मिलने में कितना समय लगता है?',
        answer: 'प्रक्रिया बहुत तेज है। आवेदन करने के बाद हम आपके लिए सही परिवार ढूंढते हैं, वीडियो कॉल करवाते हैं और नौकरी फाइनल करने में मदद करते हैं। ज्यादातर हेल्पर्स को 7 से 15 दिनों के अंदर काम मिल जाता है।',
    }
]

export default async function HomeCookJobsAssamBangaloreHindiPage() {
  const __dbHtml = await getHtmlContent("helper-jobs/assam/home-cook-jobs-bangalore/hin")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/assam/home-cook-jobs-bangalore/hin", faqs)
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Assam', href: '/helper-jobs/assam/hin' },
                        { label: 'Home Cook Jobs', href: '/helper-jobs/assam/home-cook-jobs-bangalore/hin' },
                        { label: 'Hindi' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/home-cook-jobs-bangalore" className="text-xs font-medium text-gray-500 hover:text-orange-600 transition-colors px-2 py-1 rounded-md hover:bg-orange-50">English</Link>
                            <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-orange-800 via-orange-600 to-orange-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में असम हेल्पर्स के लिए घर में खाना बनाने की नौकरी</h1>
                            <p className="text-sm md:text-xl text-orange-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                असम के लोग अपने स्वादिष्ट खाना बनाने के हुनर और मेहनती स्वभाव के लिए पसंद किए जाते हैं। हम आपको बैंगलोर के भरोसेमंद परिवारों में सुरक्षित और सम्मानजनक खाना बनाने का काम दिलाने में मदद करते हैं।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'सुरक्षित घर और अच्छा माहौल',
                                    'काम शुरू करने से पहले बुनियादी ट्रेनिंग',
                                    'सीधे परिवारों से काम, कोई फीस नहीं'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/hin/helper-registration" className="bg-white text-orange-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    रसोइया की नौकरी के लिए अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-orange-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-orange-50 border-b border-orange-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-orange-600 font-medium mb-8">हम आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर ध्यान देते हैं ताकि आप बिना परेशानी के काम कर सकें और अपने परिवार के लिए बेहतर भविष्य बना सकें।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त काम, कोई फीस नहीं',
                                    'सीधे परिवारों से काम, कोई दलाल नहीं',
                                    'काम की पूरी जानकारी पहले से दी जाती है',
                                    'सैलरी साफ-साफ बताई जाती है',
                                    'हर महीने समय पर सैलरी मिलती है',
                                    'ट्रेनिंग और सलाह दिया जाता है',
                                    'काम शुरू होने के बाद भी पूरी मदद मिलती है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-orange-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                                        <span className="text-sm font-bold text-orange-800 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding bg-white border-b border-orange-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">बैंगलोर में रसोइया की नौकरी के अलग-अलग प्रकार के काम</h2>
                                <p className="text-base md:text-lg text-orange-600 font-medium max-w-3xl mx-auto">आप अपनी जरूरत, अनुभव और सुविधा के हिसाब से काम चुन सकते हैं। हमारे पास तीन तरह के काम उपलब्ध हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <HomeIcon className="w-24 h-24 text-orange-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <HomeIcon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-orange-900 mb-2 relative z-10">बैंगलोर में 24 घंटे रहने वाले खाना बनाने के काम</h3>
                                    <p className="text-sm text-orange-700 mb-6 font-medium relative z-10">आप उसी घर में रहकर काम करेंगे। आप परिवार के साथ पूरे समय रहेंगे।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-orange-700">आप परिवार के घर में रहेंगे और रोज का खाना बनाएंगे। आपको अलग कमरा या सोने की जगह और खाना मिलेगा。</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-orange-700">पूरा समय रहना होता है। आपको रोज सुबह, दोपहर और रात का खाना बनाना होगा। महीने में 2 छुट्टी मिलती है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-orange-700">नए और अनुभवी दोनों लोगों के लिए अच्छा है। सुरक्षित और लंबे समय तक काम चाहने वालों के लिए सही है।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-orange-100 mt-4">
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-orange-700 font-medium">रहने और खाने का खर्च नहीं होता, इसलिए आप अपनी ज्यादा कमाई बचा सकते हैं और लंबे समय तक पक्का काम मिलता है।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <ClockIcon className="w-24 h-24 text-orange-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <ClockIcon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-orange-900 mb-2 relative z-10">बैंगलोर में फुल टाइम रसोइया का काम</h3>
                                    <p className="text-sm text-orange-700 mb-6 font-medium relative z-10">इसमें समय तय रहता है। काम खत्म होने के बाद आप अपने घर या रहने की जगह वापस जा सकते हैं। खाना तभी मिलेगा जब पहले से बात हुई हो।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-orange-700">आप परिवार की जरूरत के हिसाब से खाना बनाएंगे। काम खत्म होने के बाद आप अपने घर या कमरे वापस जा सकते हैं।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-orange-700">रोज 8 से 10 घंटे काम। हफ्ते में 1 छुट्टी।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-orange-700">उन लोगों के लिए जो तय समय और रोज का एक जैसा काम चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-orange-100 mt-4">
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-orange-700 font-medium">हर महीने पक्की सैलरी और एक तय रोज़ का काम मिलता है। परिवार के घर में रहने की जरूरत नहीं होती।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BriefcaseIcon className="w-24 h-24 text-orange-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <BriefcaseIcon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-orange-900 mb-2 relative z-10">बैंगलोर में पार्ट टाइम खाना बनाने का काम</h3>
                                    <p className="text-sm text-orange-700 mb-6 font-medium relative z-10">कम समय का काम और समय में सुविधा। हम सुबह और शाम दोनों समय के हिसाब से काम दिलाते हैं।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-orange-700">खाना बनाना, सब्जी काटना, खाने की तैयारी और जरूरत के हिसाब से रसोई की सफाई करना।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-orange-700">4 से 6 घंटे। सुबह या शाम की ड्यूटी उपलब्ध है। यह काम सिर्फ हफ्ते के अंत में (वीकेंड) या हफ्ते में कुछ ही दिनों के लिए भी उपलब्ध है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-orange-700">जो लोग अपने समय के हिसाब से काम करना चाहते हैं या एक से ज्यादा घरों में काम करना चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-orange-100 mt-4">
                                            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-orange-700 font-medium">आप ज्यादा कमाई कर सकते हैं और अपने समय को अपनी सुविधा के हिसाब से संभाल सकते हैं।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-orange-50 border-b border-orange-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">बैंगलोर में घर का खाना बनाने के काम की सैलरी</h2>
                                <p className="text-base md:text-lg text-orange-600 font-medium">असम से आने से पहले हम आपको सैलरी की पूरी जानकारी साफ-साफ बताते हैं ताकि बाद में कोई परेशानी न हो।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-orange-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-orange-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम के घंटे</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहना</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-orange-100">
                                            <tr className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-orange-900">24 घंटे रहने वाला खाना बनाने का काम</td>
                                                <td className="px-6 py-4 font-bold text-orange-700">₹18,000 से ₹22,000</td>
                                                <td className="px-6 py-4 text-sm text-orange-600">पूरे समय रहना</td>
                                                <td className="px-6 py-4 text-sm text-orange-600">मुफ्त खाना और रहना</td>
                                            </tr>
                                            <tr className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-orange-900">फुल टाइम खाना बनाने का काम</td>
                                                <td className="px-6 py-4 font-bold text-orange-700">₹16,000 से ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-orange-600">8 से 10 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-orange-600">शामिल नहीं</td>
                                            </tr>
                                            <tr className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-orange-900">पार्ट टाइम खाना बनाने का काम</td>
                                                <td className="px-6 py-4 font-bold text-orange-700">₹8,000 से ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-orange-600">4 से 6 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-orange-600">शामिल नहीं</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center font-bold text-orange-800 mb-6">आपकी सैलरी आपके अनुभव, खाने के प्रकार और काम के हिसाब से तय होती है।</p>
                            
                            <div className="text-center">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-orange-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-orange-800 shadow-md transition-all"
                                >
                                    अभी अप्लाई करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white border-b border-orange-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">रसोई के काम की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-orange-600 font-medium mb-8">बैंगलोर के परिवार असम के लोगों की मेहनत और साफ-सुथरे काम को पसंद करते हैं। खाना बनाने के काम में आपको ये जिम्मेदारियाँ निभानी पड़ सकती हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    'सुबह का नाश्ता, दोपहर और रात का खाना बनाना',
                                    'शाकाहारी और मांसाहारी खाना बनाना',
                                    'जरूरत के हिसाब से उत्तर भारतीय और दक्षिण भारतीय खाना बनाना',
                                    'सब्जी काटना और खाने की तैयारी करना',
                                    'रसोई को साफ और व्यवस्थित रखना',
                                    'खाना बनाने के बाद बर्तन साफ करना',
                                    'राशन और खाने का सामान संभालना',
                                    'साफ-सफाई और स्वच्छता का ध्यान रखना',
                                    'रसोई के छोटे कामों में मदद करना'
                                ].map((task, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                        <CheckCircleIcon className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                                        <span className="font-bold text-orange-900 text-lg">{task}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-center font-bold text-orange-800">काम शुरू करने से पहले हम आपको हर जिम्मेदारी साफ-साफ समझाते हैं ताकि आप आराम से काम कर सकें।</p>
                        </div>
                    </div>
                </section>
                
                {/* Different Types of Food / Cooking Styles */}
                <section className="section-padding bg-orange-50 border-b border-orange-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">खाना बनाने के अलग-अलग प्रकार और खास काम</h2>
                                <p className="text-base md:text-lg text-orange-600 font-medium">बैंगलोर के परिवार अलग-अलग तरह का खाना पसंद करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-900 mb-2">शाकाहारी खाना</h3>
                                    <p className="text-sm text-orange-700">परिवार की पसंद के हिसाब से शाकाहारी खाना बनाना। कई घरों में बिना प्याज और लहसुन के खाना भी बनाना पड़ सकता है।</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-900 mb-2">मांसाहारी खाना</h3>
                                    <p className="text-sm text-orange-700">चिकन, मटन, मछली और अंडे का खाना बनाना। साफ-सफाई और सही तरीके से खाना बनाना जरूरी होता है।</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-900 mb-2">उत्तर भारतीय खाना</h3>
                                    <p className="text-sm text-orange-700">रोटी, पराठा, सब्जी, पनीर और दाल जैसी रोज की चीजें बनाना।</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-900 mb-2">दक्षिण भारतीय खाना</h3>
                                    <p className="text-sm text-orange-700">इडली, डोसा, सांभर, रसम और चावल वाले खाने बनाना। स्थानीय खाने की थोड़ी जानकारी फायदेमंद होती है।</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-900 mb-2">चाय और हल्के नाश्ता</h3>
                                    <p className="text-sm text-orange-700">चाय, कॉफी और पोहा, उपमा जैसे हल्के नाश्ते बनाना।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white border-b border-orange-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">बैंगलोर में खाना बनाने के काम के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-orange-600 font-medium">अगर आप नीचे दी गई बातों को पूरा करते हैं, तो आप अप्लाई कर सकते हैं।</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "किसके लिए सबसे सही", desc: "बैंगलोर में रसोई के काम की मांग बहुत ज्यादा है। महिला और पुरुष दोनों अप्लाई कर सकते हैं।", icon: UserGroupIcon },
                                    { title: "उम्र की जरूरत", desc: "आपकी उम्र 18 से 45 साल के बीच होनी चाहिए।", icon: UserCircleIcon },
                                    { title: "पढ़ाई की जरूरत", desc: "थोड़ी बहुत पढ़ाई काफी है। आपको आसान निर्देश समझ आने चाहिए।", icon: AcademicCapIcon },
                                    { title: "नए लोग भी अप्लाई कर सकते हैं", desc: "अगर आपके पास अनुभव नहीं है तो भी चिंता नहीं। अगर आपको अच्छा खाना बनाना आता है, तो भी आप आवेदन कर सकते हैं।", icon: SparklesIcon },
                                    { title: "अनुभव का फायदा", desc: "अगर पहले खाना बनाने का काम किया है तो ज्यादा सैलरी और अच्छे मौके मिल सकते हैं।", icon: ChartBarIcon },
                                    { title: "अच्छा व्यवहार", desc: "आप ईमानदार हों, सीखने के लिए तैयार हों और घर के नियम मानें।", icon: HeartIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-orange-50 p-6 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-orange-700" />
                                        </div>
                                        <h3 className="font-bold text-orange-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-orange-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-orange-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – आपका भरोसेमंद साथी</h2>
                                <p className="text-lg text-orange-200 font-medium">हम आपके जैसे लोगों को बैंगलोर और पूरे भारत में भरोसेमंद परिवारों के साथ जोड़ते हैं। इसके लिए हम कोई फीस नहीं लेते।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> सम्मानजनक काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> सुरक्षित और आरामदायक माहौल</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> लंबे समय तक मदद और सहयोग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> 5,000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> 10,000 से ज्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> स्किल इंडिया के तहत प्रशिक्षण</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> सिर्फ सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> काम मिलने के बाद भी मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-orange-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> अगर कोई परेशानी हो तो सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> जरूरत होने पर नया काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-orange-300 shrink-0" /> समय पर सैलरी और लंबे समय तक काम</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">जिन शहरों में हम काम करते हैं:</span> बैंगलोर | बरेली | मुंबई | हैदराबाद | दिल्ली एनसीआर | पुणे | ओडिशा और अन्य शहर</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits and Support */}
                <section className="section-padding bg-orange-50 border-b border-orange-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">ईज़ीहेल्पर्स में मिलने वाली सुविधाएँ और मदद</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको काम के हिसाब से बुनियादी ट्रेनिंग मिलेगी। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी दिया जाएगा।", icon: AcademicCapIcon },
                                    { title: "प्रोफेशनल दिखें", desc: "हम आपको ईज़ीहेल्पर्स का कोट और ग्रूमिंग किट देते हैं।", icon: SparklesIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको साफ लिखित जानकारी और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर नौकरी लगने में देर हो, तो आप हमारे महिला हॉस्टल में रह सकती हैं।", icon: HomeIcon },
                                    { title: "स्वास्थ्य बीमा", desc: "जरूरत पड़ने पर आपको बुनियादी इलाज की सुविधा मिलती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी या दूसरे शहर और विदेश में भी मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देता है।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर नौकरी लगने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-orange-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-orange-700" />
                                        </div>
                                        <h3 className="font-bold text-orange-900 text-sm mb-2">{item.title}</h3>
                                        <p className="text-xs text-orange-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-orange-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-orange-700 mb-8">बैंगलोर आने के बाद रहने की परेशानी हो तो NEST में महिलाएं कुछ समय के लिए सुरक्षित रह सकती हैं, जब तक उनका काम शुरू नहीं हो जाता।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-orange-800 shadow-sm border border-orange-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-orange-800 shadow-sm border border-orange-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-orange-800 shadow-sm border border-orange-200">कम खर्च में रहने की सुविधा</span>
                                </div>
                                
                                <Link href="/hin/nest" className="inline-flex items-center justify-center bg-orange-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-orange-800 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="orange" location="असम" lang="hi" />

                {/* How to Apply */}
                <section className="section-padding bg-orange-50 border-t border-b border-orange-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">खाना बनाने की नौकरी के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-orange-700 max-w-2xl mx-auto font-medium">असम के गाँव से लेकर बैंगलोर में नए काम तक पहुँचना बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फोन करें या फॉर्म भरें। अपनी जानकारी और पहले किए गए काम का अनुभव बताएं।" },
                                    { step: 2, title: "सही काम का मिलना", desc: "हम आपके अनुभव के अनुसार सही परिवार और काम चुनते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "वीडियो कॉल पर परिवार से बात करें। अगर दोनों तरफ से सहमति हो जाए तो आप बैंगलोर आकर काम शुरू कर सकते हैं।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन का ट्रेनिंग लें, सैलरी और काम की पूरी जानकारी अच्छे से समझें और पूरी सहायता के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-orange-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-orange-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-orange-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-orange-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-center font-bold text-orange-800 mt-8 mb-6">खाना बनाने का काम पाना हमारे साथ आसान और सुरक्षित है। कोई दलाल नहीं, कोई परेशानी नहीं और हर कदम पर पूरी मदद मिलती है。</p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-orange-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-orange-800 shadow-md transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
