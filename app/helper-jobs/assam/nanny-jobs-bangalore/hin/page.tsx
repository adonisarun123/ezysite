import type { Metadata } from 'next'
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
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'बैंगलोर में बच्चों की देखभाल का काम – मुफ़्त अप्लाई करें',
    description: 'असम से बैंगलोर में बच्चों की देखभाल का काम पाएँ। 2 साल के अनुभव वाली महिलाओं के लिए सुरक्षित नौकरी, ₹25,000 तक सैलरी और पूरी मदद। अभी अप्लाई करें।',
    openGraph: {
        title: 'बैंगलोर में बच्चों की देखभाल का काम – मुफ़्त अप्लाई करें',
        description: 'असम से बैंगलोर में बच्चों की देखभाल का काम पाएँ। 2 साल के अनुभव वाली महिलाओं के लिए सुरक्षित नौकरी, ₹25,000 तक सैलरी और पूरी मदद। अभी अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/nanny-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या समय पर पैसे मिलते हैं?',
        answer: 'हां। हर महीने की 10 तारीख से पहले परिवार की तरफ से सीधे आपकी सैलरी दी जाती है, ताकि आपको पैसे मिलने में कोई परेशानी न हो।',
    },
    {
        question: 'क्या रहने और खाना मिलता है?',
        answer: 'हां। 24 घंटे वाले लाइव-इन काम में आपको रहने के लिए अलग कमरा या सोने की जगह और रोज का खाना परिवार की तरफ से दिया जाता है।',
    },
    {
        question: 'क्या कोई फीस देनी पड़ती है?',
        answer: 'नहीं। यह नौकरी पूरी तरह मुफ्त है। EzyHelpers किसी भी तरह की फीस या पैसे नहीं लेता।',
    },
    {
        question: 'प्रशिक्षण कितने दिन का होता है?',
        answer: 'प्रशिक्षण आमतौर पर 3 दिन का आसान प्रशिक्षण होता है, जिसमें बच्चों की देखभाल, साफ-सफाई, अच्छा व्यवहार और काम करने के जरूरी तरीके सिखाए जाते हैं।',
    },
    {
        question: 'अगर समस्या हो तो क्या मदद मिलती है?',
        answer: 'हां। अगर काम के दौरान किसी भी तरह की परेशानी हो, तो हमारी टीम आपकी पूरी मदद करती है और जरूरत पड़ने पर परिवार से बात भी करती है।',
    },
    {
        question: 'काम कितने समय में मिलता है?',
        answer: 'आमतौर 7 से 10 दिन के अंदर काम मिल जाता है। अगर परिवार की तुरंत जरूरत हो और आपका प्रोफाइल सही हो, तो काम जल्दी भी मिल सकता है।',
    }
]

export default function NannyJobsAssamBangaloreHindiPage() {
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
                        { label: 'Nanny Jobs', href: '/helper-jobs/assam/nanny-jobs-bangalore/hin' },
                        { label: 'Hindi' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/nanny-jobs-bangalore" className="text-xs font-medium text-gray-500 hover:text-rose-600 transition-colors px-2 py-1 rounded-md hover:bg-rose-50">English</Link>
                            <span className="text-xs font-bold bg-rose-100 text-rose-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-rose-800 via-rose-600 to-rose-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में असम की अनुभवी महिलाओं के लिए बच्चों की देखभाल का काम</h1>
                            <p className="text-sm md:text-xl text-rose-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                अगर आपको बच्चों की देखभाल का अनुभव है, तो बैंगलोर में आपके काम की बहुत मांग है। ईज़ीहेल्पर्स आपको सुरक्षित परिवारों में सम्मानजनक नौकरी, रहने-खाने की सुविधा और समय पर सैलरी दिलाने में मदद करता है।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'काम और सैलरी की पूरी साफ जानकारी',
                                    'सीधे परिवार से पैसे मिलते हैं',
                                    'नौकरी बिलकुल मुफ़्त'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/hin/helper-registration" className="bg-white text-rose-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    बच्चों की देखभाल के काम के लिए आवेदन करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-rose-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-rose-50 border-b border-rose-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-rose-600 font-medium mb-8">हम आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर ध्यान देते हैं।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त नौकरी, कोई फ़ीस नहीं',
                                    'सीधे परिवारों से काम, कोई दलाल नहीं',
                                    'काम शुरू करने से पहले पूरी जानकारी दी जाती है',
                                    'सैलरी की पूरी साफ जानकारी दी जाती है',
                                    'हर महीने समय पर सैलरी मिलती है',
                                    'काम सीखने और समझने में पूरी मदद मिलती है',
                                    'काम मिलने के बाद भी हम साथ रहते हैं'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-rose-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-rose-600" />
                                        <span className="text-sm font-bold text-rose-800 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding bg-white border-b border-rose-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">बैंगलोर में बच्चों की देखभाल के काम के प्रकार</h2>
                                <p className="text-base md:text-lg text-rose-600 font-medium max-w-3xl mx-auto">आप अपने अनुभव और सुविधा के अनुसार काम चुन सकती हैं। केवल अनुभवी महिलाओं को ही बच्चों की देखभाल के काम के लिए चुना जाता है।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <HomeIcon className="w-24 h-24 text-rose-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <HomeIcon className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-rose-900 mb-2 relative z-10">बैंगलोर में 24 घंटे रहकर बच्चों की देखभाल का काम</h3>
                                    <p className="text-sm text-rose-700 mb-6 font-medium relative z-10">आप परिवार के घर में रहकर बच्चे की देखभाल का काम करेंगी। रहने और खाने की सुविधा परिवार की तरफ से दी जाती है।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-rose-700">आप परिवार के घर में रहकर बच्चों की पूरी देखभाल करेंगी। आप परिवार के साथ पूरे समय रहेंगे। इसे बैंगलोर में 24 घंटे वाला शिशु देखभाल का काम भी कहते हैं।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-rose-700">पूरा दिन बच्चों की देखभाल का काम रहेगा। महीने में दो छुट्टियां मिलेंगी।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-rose-700">जो लंबे समय तक सुरक्षित और स्थिर काम चाहती हैं और जिन्हें बच्चों की देखभाल का अच्छा अनुभव है।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-rose-100 mt-4">
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-rose-700 font-medium">रहने और खाने का खर्च नहीं होता, इसलिए पूरी कमाई बचती है।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <ClockIcon className="w-24 h-24 text-rose-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <ClockIcon className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-rose-900 mb-2 relative z-10">बैंगलोर में फुल टाइम बच्चों की देखभाल का काम</h3>
                                    <p className="text-sm text-rose-700 mb-6 font-medium relative z-10">समय तय रहता है। आपकी ड्यूटी सुबह से शाम तक होती है और उसके बाद आपको आराम का समय मिलता है。</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-rose-700">आप तय समय तक बच्चों की देखभाल करेंगी और काम खत्म होने के बाद अपने घर या कमरे लौट सकती हैं।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-rose-700">रोज 8 से 10 घंटे काम। हफ्ते में 1 छुट्टी।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-rose-700">उन लोगों के लिए जो तय समय और काम के बाद अपना समय चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-rose-100 mt-4">
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-rose-700 font-medium">हर महीने पक्की कमाई और रोज़ का तय काम मिलता है।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BriefcaseIcon className="w-24 h-24 text-rose-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <BriefcaseIcon className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-rose-900 mb-2 relative z-10">बैंगलोर में पार्ट टाइम बच्चों की देखभाल का काम</h3>
                                    <p className="text-sm text-rose-700 mb-6 font-medium relative z-10">कम घंटे का काम। अलग से कमाई का मौका।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-rose-700">बच्चों को खाना खिलाना, खेलना और हल्की देखभाल करना शामिल होता है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-rose-700">4 से 6 घंटे, सुबह या शाम की सुविधा के अनुसार। यह काम सिर्फ हफ्ते के अंत में या हफ्ते में कुछ दिनों के लिए भी उपलब्ध है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-rose-700">जो अपने समय के अनुसार काम करना चाहती हैं या ज्यादा कमाई करना चाहती हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-rose-100 mt-4">
                                            <p className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-rose-700 font-medium">आप अलग-अलग घरों में काम करके ज्यादा कमाई कर सकती हैं।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-rose-50 border-b border-rose-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">बैंगलोर में बच्चों की देखभाल के काम का सैलरी</h2>
                                <p className="text-base md:text-lg text-rose-600 font-medium">असम से आने से पहले आपको सैलरी और काम की पूरी साफ जानकारी दी जाती है। अनुभवी महिलाओं को ज्यादा जिम्मेदारी और बेहतर सैलरी मिल सकती है।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-rose-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-rose-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक कमाई</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का समय</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहने की सुविधा</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-rose-100">
                                            <tr className="hover:bg-rose-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-rose-900">चौबीस घंटे रहने वाला काम</td>
                                                <td className="px-6 py-4 font-bold text-rose-700">₹20,000 से ₹25,000</td>
                                                <td className="px-6 py-4 text-sm text-rose-600">पूरा समय</td>
                                                <td className="px-6 py-4 text-sm text-rose-600">मुफ्त खाना और रहना</td>
                                            </tr>
                                            <tr className="hover:bg-rose-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-rose-900">फुल टाइम काम</td>
                                                <td className="px-6 py-4 font-bold text-rose-700">₹16,000 से ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-rose-600">8 से 10 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-rose-600">शामिल नहीं</td>
                                            </tr>
                                            <tr className="hover:bg-rose-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-rose-900">पार्ट टाइम काम</td>
                                                <td className="px-6 py-4 font-bold text-rose-700">₹8,000 से ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-rose-600">4 से 6 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-rose-600">शामिल नहीं</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center font-bold text-rose-800 mb-6">आपकी कमाई आपके अनुभव और जिम्मेदारी पर निर्भर करती है।</p>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white border-b border-rose-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">बच्चों की देखभाल की जिम्मेदारियां</h2>
                                <p className="text-base md:text-lg text-rose-600 font-medium mb-8">आपका रोज का काम इस तरह हो सकता है। यह जिम्मेदारियाँ अनुभवी सहायिकाओं के लिए होती हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    'बच्चों को समय पर खाना खिलाना',
                                    'नहलाना और कपड़े पहनाना',
                                    'डायपर बदलना और सफाई रखना',
                                    'बच्चों के साथ खेलना',
                                    'कहानियां सुनाना और सीखने में मदद करना',
                                    'बच्चों की जगह साफ रखना',
                                    'हर समय बच्चे पर नज़र रखना',
                                    'बच्चों को घूमने या पार्क ले जाना',
                                    'बच्चों के बर्तन और कपड़े साफ रखना'
                                ].map((task, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-rose-50 rounded-xl border border-rose-100">
                                        <CheckCircleIcon className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                                        <span className="font-bold text-rose-900 text-lg">{task}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Training */}
                <section className="section-padding bg-rose-50 border-b border-rose-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">ट्रेनिंग और मदद</h2>
                                <p className="text-base md:text-lg text-rose-600 font-medium">काम शुरू करने से पहले आपको आसान ट्रेनिंग दिया जाता है ताकि आप परिवार और बच्चों के साथ सही तरीके से काम कर सकें।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "बच्चों को सुरक्षित तरीके से संभालना", icon: ShieldCheckIcon },
                                    { title: "साफ सफाई का ध्यान रखना", icon: SparklesIcon },
                                    { title: "बच्चों की सुरक्षा सीखना", icon: HeartIcon },
                                    { title: "परिवार से सही तरीके से बात करना", icon: ChatBubbleLeftEllipsisIcon },
                                    { title: "समय का सही उपयोग करना", icon: ClockIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 text-center flex flex-col items-center">
                                        <item.icon className="w-8 h-8 text-rose-600 mb-3" />
                                        <h3 className="text-lg font-bold text-rose-900">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-white border-b border-rose-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">कौन आवेदन कर सकता है</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "सबसे सही कौन है", desc: "यह नौकरी केवल महिलाओं के लिए है जिनके पास बच्चों की देखभाल का कम से कम 2 साल का अनुभव है।", icon: UserGroupIcon },
                                    { title: "उम्र सीमा", desc: "22 से 40 साल के बीच उम्र होनी चाहिए।", icon: UserCircleIcon },
                                    { title: "पढ़ाई", desc: "थोड़ी-बहुत पढ़ाई काफ़ी है। रोज़मर्रा के निर्देश समझ आने चाहिए।", icon: AcademicCapIcon },
                                    { title: "अनुभव", desc: "कम से कम 2 साल बच्चों की देखभाल का अनुभव जरूरी है।", icon: ChartBarIcon },
                                    { title: "अच्छा व्यवहार", desc: "ईमानदार, शांत स्वभाव का होना और घर के नियम मानना जरूरी है।", icon: HeartIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-rose-50 p-6 rounded-2xl shadow-sm border border-rose-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-rose-700" />
                                        </div>
                                        <h3 className="font-bold text-rose-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-rose-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-rose-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में</h2>
                                <p className="text-lg text-rose-200 font-medium">हम असम से आने वाली अनुभवी सहायिकाओं को मुफ्त में सुरक्षित और सम्मानजनक काम दिलाते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा उद्देश्य
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> सम्मानजनक काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> सुरक्षित माहौल देना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> लंबे समय तक मदद करना</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी उपलब्धि
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> 5000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> 10000 से ज्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> स्किल इंडिया के तहत प्रशिक्षण दिया</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> सिर्फ सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> काम मिलने के बाद भी मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी सहायता
                                    </h3>
                                    <ul className="space-y-3 text-sm text-rose-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> किसी भी परेशानी में मदद</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> जरूरत पर नया काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-rose-300 shrink-0" /> समय पर सैलरी और लंबे समय तक काम</li>
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
                <section className="section-padding bg-rose-50 border-b border-rose-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">ईज़ीहेल्पर्स में मिलने वाली सुविधाएँ और मदद</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको काम के हिसाब से बुनियादी ट्रेनिंग मिलेगी। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी दिया जाएगा।", icon: AcademicCapIcon },
                                    { title: "प्रोफेशनल दिखें", desc: "हम आपको ईज़ीहेल्पर्स का कोट और ग्रूमिंग किट देते हैं।", icon: SparklesIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको साफ लिखित जानकारी और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर नौकरी लगने में देर हो, तो आप हमारे महिला हॉस्टल में रह सकती हैं।", icon: HomeIcon },
                                    { title: "स्वास्थ्य बीमा", desc: "जरूरत पड़ने पर आपको बुनियादी इलाज की सुविधा मिलती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी या दूसरे शहरों में भी बेहतर मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देता है।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर नौकरी लगने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-rose-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-rose-700" />
                                        </div>
                                        <h3 className="font-bold text-rose-900 text-sm mb-2">{item.title}</h3>
                                        <p className="text-xs text-rose-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-rose-50 rounded-3xl p-8 md:p-12 border border-rose-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-rose-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-rose-700 mb-8">बैंगलोर आने के बाद रहने की परेशानी हो तो NEST में महिलाएं कुछ समय के लिए सुरक्षित रह सकती हैं, जब तक उनका काम शुरू नहीं हो जाता।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-rose-800 shadow-sm border border-rose-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-rose-800 shadow-sm border border-rose-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-rose-800 shadow-sm border border-rose-200">कम खर्च में रहने की सुविधा</span>
                                </div>
                                
                                <Link href="/hin/nest" className="inline-flex items-center justify-center bg-rose-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-rose-800 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="rose" location="असम" lang="hi" />

                {/* How to Apply */}
                <section className="section-padding bg-rose-50 border-t border-b border-rose-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">बच्चों की देखभाल की नौकरी के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-rose-700 max-w-2xl mx-auto font-medium">असम के गाँव से लेकर बैंगलोर में सुरक्षित और सम्मानजनक काम तक पहुँचना बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-rose-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फोन करें या फॉर्म भरें। अपनी जानकारी और बच्चों की देखभाल के कम से कम 2 साल के अनुभव के बारे में बताएं।" },
                                    { step: 2, title: "सही काम का मिलना", desc: "हम आपके अनुभव के अनुसार सही परिवार और बच्चों की देखभाल का काम चुनते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "वीडियो कॉल पर परिवार से बात करें। अगर दोनों तरफ से सहमति हो जाए तो आप बैंगलोर आकर काम शुरू कर सकती हैं।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन का ट्रेनिंग लें, सैलरी और काम की पूरी जानकारी अच्छे से समझें और पूरी सहायता के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-rose-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-rose-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-rose-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-rose-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-rose-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-center font-bold text-rose-800 mt-8 mb-6">बच्चों की देखभाल का काम पाना हमारे साथ आसान और सुरक्षित है। कोई दलाल नहीं, कोई परेशानी नहीं और हर कदम पर पूरी मदद मिलती है।</p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-rose-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-rose-800 shadow-md transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>
                
                {/* CTA */}
                <section className="section-padding bg-rose-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">मौके का इंतज़ार मत करिए।</h2>
                            <p className="text-lg text-rose-200 mb-10 font-medium">आज ही बैंगलोर में सुरक्षित बच्चों की देखभाल का काम शुरू करें।</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-rose-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> हमसे फ़ोन करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
