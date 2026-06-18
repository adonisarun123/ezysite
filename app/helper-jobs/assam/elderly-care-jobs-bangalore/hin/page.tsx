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
    title: 'बैंगलोर में बुजुर्गों की देखभाल की नौकरी – अच्छी सैलरी',
    description: 'बैंगलोर में बुजुर्गों की देखभाल की नौकरी पाएँ। बिना फीस काम, सम्मानजनक परिवार और पूरी मदद के साथ आज ही नई शुरुआत करें।',
    openGraph: {
        title: 'बैंगलोर में बुजुर्गों की देखभाल की नौकरी – अच्छी सैलरी',
        description: 'बैंगलोर में बुजुर्गों की देखभाल की नौकरी पाएँ। बिना फीस काम, सम्मानजनक परिवार और पूरी मदद के साथ आज ही नई शुरुआत करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/elderly-care-jobs-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/elderly-care-jobs-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/elderly-care-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/elderly-care-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या बुजुर्गों की देखभाल के काम के लिए मेडिकल जानकारी जरूरी है?',
        answer: 'बैंगलोर में बुजुर्ग देखभाल के काम के लिए ज्यादा मेडिकल जानकारी की ज़रूरत नहीं है लेकिन साफ-सफाई, दवाई का समय और बुनियादी देखभाल की समझ ज़रूरी है। रोज के काम को सुरक्षित और आत्मविश्वास के साथ करने के लिए ट्रेनिंग दी जाती है।',
    },
    {
        question: 'मुझे किस तरह के बुजुर्गों की देखभाल करनी होगी?',
        answer: 'आपको ऐसे बुजुर्गों की देखभाल करनी पड़ सकती है जिन्हें हल्की मदद चाहिए या जिन्हें रोजमर्रा के कामों में ज्यादा सहायता की जरूरत हो। काम शुरू होने से पहले हम सारी जानकारी देते हैं।',
    },
    {
        question: 'अगर मुझे परिवार पसंद न आए तो क्या मैं काम बदल सकता हूँ?',
        answer: 'हां। अगर आपको किसी तरह की परेशानी होती है तो हम आपकी मदद करते हैं और जरूरत पड़ने पर नया काम दिलाते हैं।',
    },
    {
        question: 'क्या काम शुरू करने से पहले लिखित जानकारी दी जाएगी?',
        answer: 'हां। हम आपको साफ लिखित जानकारी देते हैं जिसमें काम, सैलरी, छुट्टी और जिम्मेदारियों की पूरी जानकारी होती है।',
    },
    {
        question: 'क्या ईज़ीहेल्पर्स मेरी सैलरी में से पैसे काटता है?',
        answer: 'नहीं। ईज़ीहेल्पर्स आपकी सैलरी में से कोई कटौती नहीं करता। परिवार आपको सीधे पूरी सैलरी देता है।',
    },
    {
        question: 'बैंगलोर में बुजुर्गों की देखभाल की नौकरी के लिए कौन-कौन से कागज़ देने होते हैं?',
        answer: 'आपको आधार कार्ड और किसी पहचान पत्र की फोटो कॉपी देनी होती है। आप ये कागज़ व्हाट्सऐप पर भी भेज सकते हैं ताकि जांच हो सके। बाकी पूरी जानकारी हमारी टीम रजिस्ट्रेशन के समय समझा देती है।',
    },
    {
        question: 'क्या लाइव-इन बुजुर्ग देखभाल की नौकरी में खाना और रहने की सुविधा मिलती है?',
        answer: 'हां। लाइव-इन बुजुर्ग देखभाल के काम में परिवार की तरफ से दिन में 3 समय का खाना मिलता है। रहने के लिए अलग कमरा या सोने की सही जगह, खाट या गद्दा घर की सुविधा के अनुसार दिया जाता है।',
    }
]

export default async function ElderlyCareJobsAssamBangaloreHindiPage() {
  const __dbHtml = await getHtmlContent("helper-jobs/assam/elderly-care-jobs-bangalore/hin")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/assam/elderly-care-jobs-bangalore/hin", faqs)
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
                        { label: 'Elderly Care Jobs', href: '/helper-jobs/assam/elderly-care-jobs-bangalore/hin' },
                        { label: 'Hindi' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/elderly-care-jobs-bangalore" className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors px-2 py-1 rounded-md hover:bg-blue-50">English</Link>
                            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में असम के लोगों के लिए बुजुर्गों की देखभाल की नौकरी</h1>
                            <p className="text-sm md:text-xl text-blue-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                क्या आप असम से हैं और अपने परिवार के लिए अच्छी कमाई करना चाहते हैं? अब बैंगलोर में बुजुर्गों की देखभाल की नौकरी करके आप अपने परिवार का सहारा बन सकते हैं। यहाँ आपके काम की इज़्ज़त होती है और आपको सुरक्षित माहौल में काम मिलता है।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'मुफ़्त नौकरी दिलाने की सुविधा',
                                    'सम्मान देने वाला काम का माहौल',
                                    'हर महीने समय पर सैलरी'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/hin/helper-registration" className="bg-white text-blue-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    अभी नौकरी के लिए अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-blue-50 border-b border-blue-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-blue-600 font-medium mb-8">हम आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर ध्यान देते हैं ताकि आपको भरोसेमंद बुजुर्गों की देखभाल की नौकरी मिल सके।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त नौकरी, कोई फीस नहीं',
                                    'सीधे परिवारों से काम, कोई दलाल नहीं',
                                    'काम की पूरी जिम्मेदारियाँ पहले से समझाई जाती हैं',
                                    'सैलरी की जानकारी पहले साफ-साफ दी जाती है',
                                    'हर महीने समय पर पूरी सैलरी मिलती है',
                                    'बुजुर्गों की देखभाल की बुनियादी ट्रेनिंग दी जाती है',
                                    'काम मिलने के बाद भी हमारी मदद मिलती है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-blue-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm font-bold text-blue-800 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding bg-white border-b border-blue-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">बैंगलोर में बुजुर्गों की देखभाल के काम के अलग-अलग प्रकार</h2>
                                <p className="text-base md:text-lg text-blue-600 font-medium max-w-3xl mx-auto">आप अपनी सुविधा और जरूरत के हिसाब से काम चुन सकते हैं। हमारे पास बुजुर्गों की देखभाल के तीन तरह के काम उपलब्ध हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <HomeIcon className="w-24 h-24 text-blue-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <HomeIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-2 relative z-10">बैंगलोर में 24 घंटे रहने वाले बुजुर्गों की देखभाल के काम</h3>
                                    <p className="text-sm text-blue-700 mb-6 font-medium relative z-10">आप उसी घर में रहकर बुजुर्ग व्यक्ति की देखभाल करेंगे। इसे 24 घंटे वाला रहने का काम भी कहा जाता है।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-blue-700">आप परिवार के घर में रहेंगे और बुजुर्ग व्यक्ति की देखभाल करेंगे। आपको अलग कमरा या सोने की जगह और खाना मुफ्त मिलेगा।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-blue-700">पूरा समय घर में रहना होता है। रोज़ देखभाल और मदद करनी होती है। महीने में 2 छुट्टी मिलती है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-blue-700">जो लोग सुरक्षित, लंबे समय तक और रहने वाला काम चाहते हैं उनके लिए यह अच्छा है।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-blue-100 mt-4">
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-blue-700 font-medium">रहना और खाना मुफ्त होने से आप अपनी ज्यादा कमाई बचाकर घर भेज सकते हैं।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <ClockIcon className="w-24 h-24 text-blue-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <ClockIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-2 relative z-10">बैंगलोर में फुल टाइम बुजुर्गों की देखभाल का काम</h3>
                                    <p className="text-sm text-blue-700 mb-6 font-medium relative z-10">इसमें आपका काम का समय तय रहता है। काम पूरा होने के बाद आप अपने घर या रहने की जगह वापस जा सकते हैं।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-blue-700">आपको बुजुर्ग व्यक्ति की रोज की देखभाल करनी होगी जैसे चलने में मदद करना, दवाई समय पर याद दिलाना और रोजमर्रा के काम में सहायता करना।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-blue-700">रोज 8 से 10 घंटे काम। हफ्ते में 1 छुट्टी।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-blue-700">जो लोग तय समय का काम और काम के बाद अपना समय चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-blue-100 mt-4">
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-blue-700 font-medium">आपको हर महीने पक्की सैलरी और संतुलित दिनचर्या मिलती हैं।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BriefcaseIcon className="w-24 h-24 text-blue-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <BriefcaseIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-2 relative z-10">बैंगलोर में पार्ट टाइम बुजुर्गों की देखभाल का काम</h3>
                                    <p className="text-sm text-blue-700 mb-6 font-medium relative z-10">कम समय का काम जिसमें आप एक या एक से ज्यादा घरों में काम कर सकते हैं。</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-blue-700">बुजुर्ग व्यक्ति को साथ देना, छोटे कामों में मदद करना और रोज की ज़रूरी काम पर ध्यान रखना।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-blue-700">4 से 6 घंटे। सुबह या शाम की ड्यूटी उपलब्ध है। यह काम सिर्फ हफ्ते के अंत में (वीकेंड) या हफ्ते में कुछ ही दिनों के लिए भी उपलब्ध है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-blue-700">जो लोग कम समय का काम या दूसरे कमाई करना चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-blue-100 mt-4">
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-blue-700 font-medium">आप अपने समय के हिसाब से काम करके ज्यादा कमाई कर सकते हैं।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-blue-50 border-b border-blue-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">बैंगलोर में बुजुर्गों की देखभाल के काम की सैलरी</h2>
                                <p className="text-base md:text-lg text-blue-600 font-medium">असम से आने से पहले हम आपको सैलरी की पूरी जानकारी साफ-साफ बताते हैं ताकि बाद में कोई परेशानी न हो।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-blue-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-blue-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम के घंटे</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहना</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-blue-100">
                                            <tr className="hover:bg-blue-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-blue-900">24 घंटे रहने वाला बुजुर्गों की देखभाल का काम</td>
                                                <td className="px-6 py-4 font-bold text-blue-700">₹20,000 से ₹25,000</td>
                                                <td className="px-6 py-4 text-sm text-blue-600">पूरा समय रहना</td>
                                                <td className="px-6 py-4 text-sm text-blue-600">मुफ्त खाना और रहना</td>
                                            </tr>
                                            <tr className="hover:bg-blue-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-blue-900">फुल टाइम बुजुर्गों की देखभाल का काम</td>
                                                <td className="px-6 py-4 font-bold text-blue-700">₹16,000 से ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-blue-600">8 से 10 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-blue-600">शामिल नहीं</td>
                                            </tr>
                                            <tr className="hover:bg-blue-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-blue-900">पार्ट टाइम बुजुर्गों की देखभाल का काम</td>
                                                <td className="px-6 py-4 font-bold text-blue-700">₹8,000 से ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-blue-600">4 से 6 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-blue-600">शामिल नहीं</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center font-bold text-blue-800 mb-6">आपकी सैलरी आपके अनुभव, मरीज की हालत और जिम्मेदारियों पर निर्भर करती है।</p>
                            
                            <div className="text-center">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-blue-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-800 shadow-md transition-all"
                                >
                                    अभी अप्लाई करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white border-b border-blue-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">बुजुर्गों की देखभाल के काम की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-blue-600 font-medium mb-8">बैंगलोर के परिवार असम के लोगों की देखभाल करने की आदत और मेहनत को पसंद करते हैं। इस काम में आपको ये जिम्मेदारियाँ निभानी पड़ सकती हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    'बुजुर्गों को सुरक्षित तरीके से चलने और उठने-बैठने में मदद करना',
                                    'समय पर दवाई देना',
                                    'नहाने और साफ-सफाई में मदद करना',
                                    'खाना बनाना और खिलाना',
                                    'कमरा साफ और व्यवस्थित रखना',
                                    'साथ देना और बातचीत करना',
                                    'स्वास्थ्य की जानकारी परिवार को देना',
                                    'जरूरत पड़ने पर हल्की कसरत में मदद करना',
                                    'शौचालय जाने में सहायता करना',
                                    'बुजुर्ग व्यक्ति की सुरक्षा और आराम का ध्यान रखना'
                                ].map((task, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                                        <span className="font-bold text-blue-900 text-lg">{task}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                <h3 className="font-bold text-blue-900 mb-3 uppercase tracking-widest text-sm">जरूरत पड़ने पर अतिरिक्त जिम्मेदारियाँ:</h3>
                                <ul className="list-disc pl-5 space-y-2 text-blue-800 font-medium">
                                    <li>अस्पताल या डॉक्टर के पास साथ जाना</li>
                                    <li>24 घंटे वाले काम में रात में मदद करना</li>
                                    <li>बुजुर्ग से जुड़े हल्के काम करना</li>
                                </ul>
                            </div>
                            
                            <p className="text-center font-bold text-blue-800 mt-6">काम शुरू होने से पहले हम आपको सारी जिम्मेदारियाँ साफ-साफ समझाते हैं।</p>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-blue-50 border-b border-blue-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">बैंगलोर में बुजुर्गों की देखभाल के काम के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-blue-600 font-medium">अगर आप नीचे दी गई बातों को पूरा करते हैं तो आप आवेदन कर सकते हैं।</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "किसके लिए सबसे सही", desc: "बैंगलोर में महिला देखभालकर्ताओं की माँग ज्यादा रहती है। पुरुषों के लिए भी काम उपलब्ध है जैसे बुजुर्ग को उठाने या चलने-फिरने में मदद करना।", icon: UserGroupIcon },
                                    { title: "उम्र की जरूरत", desc: "18 से 40 साल तक के लोग आवेदन कर सकते हैं।", icon: UserCircleIcon },
                                    { title: "पढ़ाई की जरूरत", desc: "थोड़ी बहुत पढ़ाई काफी है। ज्यादा पढ़ाई जरूरी नहीं।", icon: AcademicCapIcon },
                                    { title: "नए लोग भी अप्लाई कर सकते हैं", desc: "अगर अनुभव नहीं है तो भी चिंता की बात नहीं। हम बुनियादी ट्रेनिंग देते हैं।", icon: SparklesIcon },
                                    { title: "अनुभव का फायदा", desc: "अगर पहले देखभाल का काम किया है तो ज्यादा सैलरी और अच्छे मौके मिल सकते हैं।", icon: ChartBarIcon },
                                    { title: "अच्छा व्यवहार", desc: "आप धैर्य रखने वाले, ईमानदार और बुजुर्गों का सम्मान करने वाले होने चाहिए।", icon: HeartIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-blue-700" />
                                        </div>
                                        <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-blue-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-blue-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – आपका भरोसेमंद साथी</h2>
                                <p className="text-lg text-blue-200 font-medium">हम आपके जैसे लोगों को बैंगलोर और पूरे भारत में भरोसेमंद घर के काम दिलाते हैं और इसके लिए कोई फीस नहीं लेते।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> सम्मानजनक काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> सुरक्षित और आरामदायक परिवार</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> लंबे समय तक मदद और सहयोग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> 5,000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> 10,000 से ज्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> स्किल इंडिया के अनुसार प्रशिक्षण</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> सिर्फ सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> काम मिलने के बाद भी लगातार मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> अगर कोई परेशानी हो तो सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> जरूरत होने पर नया काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> समय पर सैलरी और स्थिर काम</li>
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
                <section className="section-padding bg-blue-50 border-b border-blue-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">ईज़ीहेल्पर्स में मिलने वाली सुविधाएँ और मदद</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको बुजुर्गों की देखभाल, साफ-सफाई और सही तरीके से बात करने की ट्रेनिंग दी जाती है। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी मिलता है।", icon: AcademicCapIcon },
                                    { title: "प्रोफेशनल दिखें", desc: "हम आपको ईज़ीहेल्पर्स का कोट और साफ-सुथरे व प्रोफेशनल तरीके से रहने के लिए जरूरी सामान देते हैं।", icon: SparklesIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "साफ लिखित जानकारी और लगातार सहायता दी जाती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर काम शुरू होने में समय लगे तो सुरक्षित रहने की व्यवस्था में मदद की जाती है।", icon: HomeIcon },
                                    { title: "स्वास्थ्य सुविधा", desc: "जरूरत पड़ने पर आपको बुनियादी स्वास्थ्य बीमा की सुविधा दी जाती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी और बेहतर मौके मिल सकते हैं।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देता है।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर काम शुरू होने के बाद भी हम हमेशा आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-blue-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-blue-700" />
                                        </div>
                                        <h3 className="font-bold text-blue-900 text-sm mb-2">{item.title}</h3>
                                        <p className="text-xs text-blue-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-blue-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-blue-700 mb-8">बैंगलोर आने के बाद रहने की परेशानी हो तो NEST में महिलाएं कुछ समय के लिए सुरक्षित रह सकती हैं, जब तक उनका काम शुरू नहीं हो जाता।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-blue-800 shadow-sm border border-blue-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-blue-800 shadow-sm border border-blue-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-blue-800 shadow-sm border border-blue-200">कम खर्च में रहने की सुविधा</span>
                                </div>
                                
                                <Link href="/hin/nest" className="inline-flex items-center justify-center bg-blue-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-800 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="blue" location="असम" lang="hi" />

                {/* How to Apply */}
                <section className="section-padding bg-blue-50 border-t border-b border-blue-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">बुजुर्गों की देखभाल की नौकरी के लिए अप्लाई कैसे करें</h2>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फोन करें या फॉर्म भरें। अपने हुनर और पहले के अनुभव की जानकारी दें।" },
                                    { step: 2, title: "सही काम का मिलना", desc: "हम आपके अनुभव और सुविधा के हिसाब से सही काम ढूंढते हैं और परिवारों से बात करवाते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "वीडियो कॉल पर परिवार से बात करें। अगर दोनों राजी हों तो बैंगलोर आकर काम शुरू करें।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन की ट्रेनिंग लें, सैलरी और जिम्मेदारियाँ साफ-साफ समझें और पूरी मदद के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-blue-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-blue-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-blue-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-blue-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/hin/helper-registration"
                                className="inline-flex items-center justify-center bg-blue-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-800 shadow-md transition-all"
                            >
                                अभी अप्लाई करें
                            </Link>
                        </div>
                    </div>
                </section>
                
                {/* CTA */}
                <section className="section-padding bg-blue-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">आज लिया गया आपका फैसला आपका आने वाला कल बदल सकता है।</h2>
                            <p className="text-lg text-blue-200 mb-10 font-medium">बैंगलोर में बुजुर्गों की देखभाल की स्थिर नौकरी से आप नियमित कमाई कर सकते हैं, पैसे बचा सकते हैं और अपने परिवार के लिए बेहतर भविष्य बना सकते हैं।</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-blue-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    नई शुरुआत आज ही करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> अभी फोन करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
