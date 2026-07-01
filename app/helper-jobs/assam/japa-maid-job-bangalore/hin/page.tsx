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
    UserGroupIcon,
    BuildingOfficeIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'अनुभवी महिलाओं के लिए जच्चा-बच्चा संभालने वाली नौकरी – बैंगलोर',
    description: 'क्या आपको डिलीवरी के बाद जच्चा-बच्चा संभालने का अनुभव है? अनुभवी महिलाओं के लिए बैंगलोर में ₹30,000 तक सैलरी, रहने की सुविधा और मुफ़्त प्लेसमेंट। अभी अप्लाई करें।',
    openGraph: {
        title: 'अनुभवी महिलाओं के लिए जच्चा-बच्चा संभालने वाली नौकरी – बैंगलोर',
        description: 'क्या आपको डिलीवरी के बाद जच्चा-बच्चा संभालने का अनुभव है? अनुभवी महिलाओं के लिए बैंगलोर में ₹30,000 तक सैलरी, रहने की सुविधा और मुफ़्त प्लेसमेंट। अभी अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/japa-maid-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'डिलीवरी के बाद माँ-बच्चे की देखभाल करने वाली नौकरी के लिए कितना अनुभव जरूरी है?',
        answer: 'बैंगलोर में कई परिवार माँ और बच्चे की देखभाल का 5 साल तक का अनुभव पसंद करते हैं, लेकिन यह जरूरी नहीं है। अगर आपको जच्चा-बच्चा संभालने का अच्छा अनुभव और सही जानकारी है, तो आप फिर भी अप्लाई कर सकते हैं। यह जिम्मेदारी वाला काम होता है, इसलिए परिवार भरोसेमंद व्यक्ति चाहते हैं।',
    },
    {
        question: 'क्या ईज़ीहेल्पर्स के जरिए यह काम पाने के लिए फीस देनी पड़ती है?',
        answer: 'नहीं। ईज़ीहेल्पर्स काम दिलाने के लिए कोई फीस नहीं लेता। यह पूरी तरह मुफ्त है।',
    },
    {
        question: 'क्या बैंगलोर में जच्चा-बच्चा संभालने वाली नौकरी के लिए उम्र की कोई सीमा है?',
        answer: 'हां। आवेदन करने के लिए आपकी उम्र 30 से 50 साल के बीच होनी चाहिए।',
    },
    {
        question: 'क्या ईज़ीहेल्पर्स मेरी हर महीने की सैलरी से कुछ काटता है?',
        answer: 'नहीं। ईज़ीहेल्पर्स आपकी सैलरी में से कोई कटौती नहीं करता। पूरी सैलरी आपकी होती है।',
    },
    {
        question: 'क्या सैलरी सीधे मुझे मिलेगी या ईज़ीहेल्पर्स के जरिए मिलेगी?',
        answer: 'हर महीने परिवार आपको सीधे पूरी सैलरी देता है। ईज़ीहेल्पर्स आपकी सैलरी अपने पास नहीं रखता।',
    },
    {
        question: 'जापा का काम कितने दिनों का होता है?',
        answer: 'बैंगलोर में ज्यादातर जापा का काम 30 से 90 दिनों तक होता है। यह माँ और बच्चे की जरूरत और परिवार की आवश्यकता पर निर्भर करता है।',
    }
]

export default async function JapaMaidJobAssamBangaloreHindiPage() {
  const faqItems = await getHelperJobFaqs("helper-jobs/assam/japa-maid-job-bangalore/hin", faqs)
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs' },
                        { label: 'असम', href: '/helper-jobs/assam' },
                        { label: 'बैंगलोर में जापा नौकरी' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/japa-maid-job-bangalore" className="text-xs font-medium text-gray-500 hover:text-slate-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-50">English</Link>
                            <span className="text-xs font-bold bg-pink-100 text-pink-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-pink-800 via-pink-600 to-rose-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में असम के लोगों के लिए जच्चा-बच्चा संभालने की नौकरी</h1>
                            <p className="text-sm md:text-xl text-pink-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                बैंगलोर में अनुभवी महिलाओं की बहुत मांग है जो नवजात बच्चे और माँ की देखभाल अच्छे से कर सकें। हम आपको सुरक्षित और सम्मानजनक काम दिलाने में मदद करते हैं।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'महिलाओं के लिए भरोसेमंद काम',
                                    'सुरक्षित और सम्मानजनक परिवार',
                                    'हर महीने समय पर सैलरी'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-pink-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    नौकरी के लिए अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-pink-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-slate-50 border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-slate-600 font-medium mb-8">हम हर दिन आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर ध्यान देते हैं।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त नौकरी, कोई फीस नहीं',
                                    'सीधे परिवारों से काम, कोई दलाल नहीं',
                                    'काम की पूरी जानकारी पहले से दी जाती है',
                                    'सैलरी साफ-साफ समझाई जाती है',
                                    'हर महीने समय पर सैलरी मिलती है',
                                    'काम सीखने में मदद और गाइडेंस दी जाती है',
                                    'काम मिलने के बाद भी पूरी मदद मिलती है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-pink-600" />
                                        <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-pink-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-pink-700 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-white border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में माँ-बच्चे की देखभाल करने वाली नौकरी की सैलरी और सुविधाएँ</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium">आप नवजात बच्चे और नई माँ की देखभाल जैसे बहुत जिम्मेदारी वाले काम करते हैं। इस काम में धैर्य, अनुभव और बच्चे को संभालने की सही समझ जरूरी होती है। इसलिए बैंगलोर में इस काम की सैलरी सामान्य घर के काम से ज्यादा होती है।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-pink-800 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">अवधि</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहना</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">अनुभव</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900 min-w-[200px]">बैंगलोर में जच्चा-बच्चा संभालने की नौकरी</td>
                                                <td className="px-6 py-4 font-bold text-pink-700 min-w-[150px]">₹25,000 से ₹30,000</td>
                                                <td className="px-6 py-4 text-sm text-slate-600 min-w-[150px]">आमतौर पर 40 दिन से 3 महीने</td>
                                                <td className="px-6 py-4 text-sm text-slate-600 min-w-[150px]">ज़्यादातर घरों में खाना-रहना मुफ़्त</td>
                                                <td className="px-6 py-4 text-sm text-slate-600 min-w-[200px]">5 साल का अनुभव चाहिए, लेकिन यह जरूरी नहीं है।</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-slate-50 border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में माँ-बच्चे की देखभाल का काम</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto">बैंगलोर के परिवार असम के लोगों को उनके धैर्य, अनुशासन और देखभाल के स्वभाव की वजह से पसंद करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><BriefcaseIcon className="w-6 h-6 text-pink-600"/> काम की जानकारी</h3>
                                        <p className="text-slate-700 font-medium">आप परिवार के साथ रहकर बच्चे के जन्म के बाद की पूरी देखभाल की जिम्मेदारी संभालते हैं।</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><ClockIcon className="w-6 h-6 text-pink-600"/> काम का समय</h3>
                                        <p className="text-slate-700 font-medium">ज़्यादातर नौकरियाँ 40 दिन से 3 महीने तक चलती हैं, यह परिवार की ज़रूरत और नवजात शिशु की देखभाल पर निर्भर करता है।</p>
                                    </div>
                                    
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><UserGroupIcon className="w-6 h-6 text-pink-600"/> किसके लिए अच्छा है</h3>
                                        <p className="text-slate-700 font-medium">उन अनुभवी लोगों के लिए, जिन्हें नवजात शिशु की देखभाल और माँ की सेवा का अच्छा अनुभव हो।</p>
                                    </div>
                                </div>

                                <div className="bg-pink-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <HeartIcon className="w-48 h-48 text-white" />
                                    </div>
                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-pink-700 pb-4">परिवार जच्चा-बच्चा संभालने वाले को क्यों पसंद करते हैं</h3>
                                        <p className="text-pink-100 mb-6 font-medium leading-relaxed">डिलीवरी के बाद परिवार को भरोसेमंद और अनुभवी सहारे की ज़रूरत होती है। कुशल और समझदार देखभाल करने वाले को ज़्यादा सैलरी और सम्मान मिलता है क्योंकि यह काम विश्वास, धैर्य और जिम्मेदारी माँगता है।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">डिलीवरी के बाद माँ-बच्चे की देखभाल के काम की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium mb-8">जब आप बैंगलोर में माँ-बच्चे की देखभाल की नौकरी लेते हैं, तो आपके रोज़ के काम में ये काम शामिल होते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                                    <h3 className="font-bold text-xl text-pink-900 mb-4 flex items-center gap-2"><HeartIcon className="w-6 h-6"/> नवजात बच्चे की देखभाल</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'बच्चे को रोज तेल मालिश और नहलाना',
                                            'नवजात बच्चे को समय पर दूध पिलाना',
                                            'हर बार दूध पिलाने के बाद बच्चे को सही तरीके से डकार दिलाना',
                                            'नैपी बदलना और बच्चे को साफ रखना',
                                            'बच्चे को सुलाना और संभालना',
                                            'बच्चे की तबीयत और आराम का ध्यान रखना'
                                        ].map((task, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-800">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                                    <h3 className="font-bold text-xl text-rose-900 mb-4 flex items-center gap-2"><UserPlusIcon className="w-6 h-6"/> नई माँ की देखभाल</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'नई माँ के लिए पौष्टिक खाना बनाना',
                                            'डिलीवरी के बाद शरीर की पारंपरिक मालिश करना',
                                            'माँ को बच्चे को दूध पिलाने में मदद करना',
                                            'आराम और रोजमर्रा की जरूरतों में मदद करना',
                                            'हल्की व्यक्तिगत देखभाल और साफ-सफाई में मदद करना',
                                            'समय पर दवाई और स्वास्थ्य का ध्यान दिलाना'
                                        ].map((task, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-800">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2"><HomeIcon className="w-6 h-6"/> घर के हल्के काम</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'बच्चे का कमरा साफ और व्यवस्थित रखना',
                                            'बच्चे की बोतलें रोज साफ और कीटाणुरहित करना',
                                            'बच्चे के कपड़े धोना और तह करना',
                                            'नई माँ के लिए हर्बल ड्रिंक और काढ़ा बनाना',
                                            'रसोई के हल्के काम में मदद करना',
                                            'बच्चे का सामान सही तरीके से रखना'
                                        ].map((task, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-800">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center mt-8 text-pink-700 font-bold bg-pink-50 p-4 rounded-xl inline-block w-full">
                                काम शुरू करने से पहले हम हर जिम्मेदारी आपको साफ-साफ समझाते हैं।
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-slate-50 border-t border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में जापा नौकरी के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-slate-600 font-medium">अगर आप नीचे दी गई योग्यताएँ पूरी करते हैं, तो आप अप्लाई कर सकते हैं।</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                {[
                                    'अनुभव की ज़रूरत: माँ और बच्चे की देखभाल में कम से कम 5 साल का अनुभव ज़रूरी है।',
                                    'उम्र की जरूरत: आपकी उम्र 30 से 50 साल के बीच होनी चाहिए।',
                                    'बातचीत की क्षमता: थोड़ी बहुत हिंदी या सामान्य बातचीत आ जाए तो अच्छा है।',
                                    'काम का स्वभाव: आप धैर्य रखने वाले, साफ-सुथरे और नवजात बच्चे को संभालने में सहज होने चाहिए।',
                                    'स्वास्थ्य की स्थिति: आप शारीरिक रूप से स्वस्थ हों और ज़रूरत पड़ने पर घर में रहकर काम कर सकते हों।',
                                    'भरोसा और अनुशासन: परिवार ऐसे लोगों को पसंद करते हैं जो जिम्मेदार, सम्मानजनक और ईमानदारी से काम करते हैं।'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 text-center font-bold text-slate-800 w-full sm:w-auto flex-1 min-w-[280px]">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-pink-600 text-white font-bold text-base py-3 px-10 rounded-xl hover:bg-pink-700 shadow-md transition-all"
                                >
                                    अभी अप्लाई करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-slate-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – आपका भरोसेमंद साथी</h2>
                                <p className="text-lg text-slate-300 font-medium">हम असम के अनुभवी लोगों को बैंगलोर और पूरे भारत में सुरक्षित काम दिलाने में मदद करते हैं। इसके लिए हम कोई फीस नहीं लेते।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-pink-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सम्मानजनक काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सुरक्षित और आरामदायक माहौल</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> लंबे समय तक मदद और सहयोग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-pink-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> 5,000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> 10,000 से ज्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> स्किल इंडिया के तहत प्रशिक्षण दिया जाता है</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-pink-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सिर्फ सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> काम मिलने के बाद भी पूरी मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-pink-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> अगर कोई परेशानी हो तो सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> जरूरत होने पर नया काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> लंबे समय तक काम और ज्यादा सैलरी के मौके</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-pink-400">जिन शहरों में हम काम करते हैं:</span> बैंगलोर | बरेली | मुंबई | हैदराबाद | दिल्ली एनसीआर | पुणे | ओडिशा और अन्य शहर</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-slate-50 border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">असम से आने वाले लोगों के लिए सुविधाएँ और मदद</h2>
                                <p className="text-base text-slate-600 font-medium">हम चाहते हैं कि आप बैंगलोर आकर सुरक्षित और भरोसे के साथ काम शुरू करें।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको माँ-बच्चे की देखभाल के काम के लिए बुनियादी ट्रेनिंग मिलती है। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी दिया जाता है।", icon: AcademicCapIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको साफ-लिखित काम का एग्रीमेंट और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर नौकरी लगने में देर हो जाए, तो आप हमारे नेस्ट महिला हॉस्टल में सुरक्षित रह सकते हैं।", icon: HomeIcon },
                                    { title: "स्वास्थ्य बीमा", desc: "जरूरत पड़ने पर आपको बुनियादी स्वास्थ्य बीमा की सुविधा मिलती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी या दूसरे शहर और विदेश में भी मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देता है। कोई कटौती नहीं।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर काम शुरू होने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-pink-700" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-pink-50 rounded-3xl p-8 md:p-12 border border-pink-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-pink-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-slate-700 mb-8">क्या आपको असम से बैंगलोर आने के बाद रहने की चिंता है? नेस्ट महिलाओं के लिए बनाया गया सुरक्षित हॉस्टल है।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-pink-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-pink-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-pink-200">कम खर्च में आरामदायक रहने की सुविधा</span>
                                </div>
                                
                                <p className="text-md font-bold text-slate-700 mb-8 max-w-2xl mx-auto">
                                    आप आराम से रह सकते हैं जब तक आपका काम शुरू नहीं हो जाता। कोई तनाव नहीं। कोई परेशानी नहीं।
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-pink-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-pink-700 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="pink" lang="hi" location="असम" />

                {/* How to Apply */}
                <section className="section-padding bg-slate-50 border-t border-b border-slate-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">माँ-बच्चे की देखभाल की नौकरी के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">असम से बैंगलोर आकर नया काम शुरू करना ईज़ीहेल्पर्स के साथ बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-pink-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फोन करें या फॉर्म भरें। माँ और बच्चे की देखभाल का अपना अनुभव हमें बताएं।" },
                                    { step: 2, title: "सही काम का मिलान", desc: "हम आपके अनुभव के हिसाब से सही काम ढूंढते हैं और परिवारों से बात करवाते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "फोन या वीडियो कॉल पर परिवार से बात करें और काम की पूरी जानकारी समझें। अगर दोनों राजी हों, तो काम पक्का करें।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन की ट्रेनिंग लें, सैलरी और काम की पूरी जानकारी समझें और हमारी मदद के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-pink-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-pink-700 shadow-md transition-all"
                            >
                                अभी अप्लाई करें और नई शुरुआत करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-pink-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">ईज़ीहेल्पर्स के साथ नई शुरुआत करें</h2>
                            <p className="text-lg text-pink-100 mb-10 font-medium">माँ और बच्चे की देखभाल का आपका अनुभव आपकी सबसे बड़ी ताकत है। आइए, इसे बैंगलोर में अच्छी कमाई और सम्मानजनक भविष्य में बदलते हैं। आज ही आवेदन करें और नई शुरुआत करें।</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-pink-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> हमसे संपर्क करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
