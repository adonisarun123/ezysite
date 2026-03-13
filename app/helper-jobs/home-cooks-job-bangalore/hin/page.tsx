import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    CheckCircleIcon,
    ClockIcon,
    HomeIcon,
    ClockIcon as ClockSolidIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    AcademicCapIcon,
    UserIcon,
    ShieldCheckIcon,
    FireIcon,
    StarIcon,
    GlobeAltIcon,
    HeartIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'झारखंड हेल्पर्स के लिए बैंगलोर में भरोसेमंद होम कुक जॉब्स',
    description: 'बैंगलोर में होम कुक जॉब्स पाएं। रोज़ खाना बनाएं, अच्छी सैलरी पाएं। लिव-इन और पार्ट-टाइम जॉब्स उपलब्ध हैं। हेल्पर्स के लिए सुरक्षित काम। ईज़ीहेल्पर्स से जुड़ें।',
    openGraph: {
        title: 'झारखंड हेल्पर्स के लिए बैंगलोर में भरोसेमंद होम कुक जॉब्स',
        description: 'बैंगलोर में होम कुक जॉब्स पाएं। रोज़ खाना बनाएं, अच्छी सैलरी पाएं। लिव-इन और पार्ट-टाइम जॉब्स उपलब्ध हैं। हेल्पर्स के लिए सुरक्षित काम। ईज़ीहेल्पर्स से जुड़ें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/home-cooks-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/home-cooks-job-bangalore/hin'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या लिव-इन होम कुक्स को खाना और कमरा दिया जाता है?',
        answer: 'हाँ। लिव-इन कुक्स को फ़्री खाना और परिवार के घर के अंदर एक कमरा या सोने की जगह मिलती है।',
    },
    {
        question: 'बैंगलोर में होम कुक के रोज़ के काम क्या हैं?',
        answer: 'रोज़ के कामों में खाना बनाना, किचन की सफ़ाई बनाए रखना, बर्तन धोना, खाना सुरक्षित तरीके से रखना, और परिवार की रेसिपी और टाइमिंग को फ़ॉलो करना शामिल है।',
    },
    {
        question: 'क्या मैं खाना पकाने के समय आराम कर सकता हूँ?',
        answer: 'हाँ। जॉइन करने से पहले काम के घंटे और आराम के ब्रेक पर बात की जाती है ताकि आपको सही आराम मिल सके।',
    },
    {
        question: 'अगर मुझे मॉडर्न किचन मशीनों के बारे में नहीं पता तो क्या होगा?',
        answer: 'हम प्लेसमेंट से पहले माइक्रोवेव, गैस स्टोव, मिक्सर, ओवन और दूसरे उपकरणों पर ट्रेनिंग देते हैं।',
    },
    {
        question: 'क्या मैं खाना पकाने और आसान सफाई का काम साथ कर सकता हूँ?',
        answer: 'हाँ। कुछ परिवार खाना बनाने के साथ हल्की सफाई की रिक्वेस्ट करते हैं, और सैलरी उसी हिसाब से तय की जाती है।',
    },
    {
        question: 'क्या मुझे अप्लाई करने के लिए पहले का अनुभव चाहिए?',
        answer: 'नहीं। अगर आपको बेसिक खाना बनाना और किचन का काम आता है, तो फ्रेशर्स भी अप्लाई कर सकते हैं।',
    }
]

export default function HomeCookJobsBangaloreHindiPage() {
    return (
        <div className="noto-sans-devanagari-hindi">
            <main className="min-h-screen">
                <Navbar />

                <div className="mb-4">
                    <Breadcrumb
                        sticky={true}
                        items={[
                            { label: 'होम', href: '/hin' },
                            { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                            { label: 'कुक की नौकरी' }
                        ]}
                        rightContent={
                            <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                                <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                                <Link
                                    href="/helper-jobs/home-cooks-job-bangalore"
                                    className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                                >
                                    <div
                                        className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                    />
                                </Link>
                                <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                            </div>
                        }
                    />
                </div>

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">
                                झारखंड हेल्पर्स के लिए बैंगलोर में होम कुक जॉब्स
                            </h1>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                                <p className="text-xs sm:text-sm md:text-xl text-teal-50/90 leading-loose max-w-sm mx-auto md:max-w-none">
                                    बैंगलोर में घरेलू कुक की नौकरी अब आसान है। बेसिक इंडियन खाना बनाने वालों के लिए ईज़ीहेल्पर्स सुरक्षित घर, साफ़ जिम्मेदारियाँ और समय पर सैलरी के साथ भरोसेमंद काम दिलाता है।
                                </p>
                            </div>

                            <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                                    ✓ कोई रजिस्ट्रेशन फीस नहीं
                                </div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                                    ✓ बिना एजेंट के सीधे जॉब प्लेसमेंट
                                </div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                                    ✓ सैलरी सीधे परिवार द्वारा दी जाती है
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Salary & Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider mb-4 border border-teal-200">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">सैलरी और खास फ़ायदों एक नज़र में</h2>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">लिव-इन कुक जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-6">₹22,000 से ₹25,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">मुफ़्त रहना और खाना दिया जाता है</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">24 घंटे घर में रहने वाला काम</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">लंबे समय तक चलने वाला पक्का काम</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">फुल-टाइम कुक जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹16,000 से ₹20,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">काम के तय घंटे</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">हफ़्ते में छुट्टी शामिल</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">पार्ट-टाइम कुक जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">₹8,000 से ₹12,000<span className="text-sm font-medium text-gray-500 block mt-1">हर महीने</span></div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">काम के कम घंटे</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">अपने हिसाब से काम का समय</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Home Cooks Job Categories Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">घर में कुक की अलग-अलग नौकरी के प्रकार</h2>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                बैंगलोर में कुक के तौर पर आपका मेन काम खाना बनाना और किचन को साफ़ रखना है, साथ ही परिवार की रोज़ की खाने की ज़रूरतों में मदद करना है। हम आपको राह दिखाते हैं ताकि आप ठीक से समझ सकें कि आपसे क्या उम्मीद की जाती है।
                            </p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">1. बैंगलोर में लिव-इन कुकिंग जॉब्स (24 घंटे घर में रहने वाला काम)</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का प्रकार</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप परिवार के साथ रहेंगे, आपको मुफ़्त कमरा और खाना मिलेगा।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप रोज़ खाना बनाएंगे और किचन संभालेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप परिवार की खाने की पसंद का ध्यान रखेंगे।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम की व्यवस्था</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज़ लगभग 12 घंटे सहयोग</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हर महीने 2 छुट्टियां</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो हेल्पर किराया और खाने का खर्च बचाना चाहते हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो हेल्पर परिवार के साथ रहना चाहते हैं</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">2. बैंगलोर में फुल-टाइम कुक जॉब्स</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का टाइप</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप नाश्ता, दोपहर का खाना और रात का खाना बनाएंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप किचन और डाइनिंग की सफ़ाई बनाए रखेंगे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">ज़रूरत पड़ने पर आप किराने का सामान लाने में मदद करेंगे।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हर दिन 8 से 10 घंटे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हफ़्ते में छुट्टी के साथ 6 काम के दिन</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">झारखंड के हेल्पर जो रोज़ाना पक्का काम ढूंढ रहे हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो हेल्पर फिक्स्ड समय पसंद करते हैं</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3. बैंगलोर में पार्ट-टाइम जॉब्स</h3>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम का टाइप</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप नाश्ता या डिनर जैसा चुना हुआ खाना बनाएँगे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप खाना बनाने के बाद किचन साफ़ करेंगे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">आप बर्तन और खाना पकाने की जगह व्यवस्थित करेंगे</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">परिवार की ज़रूरत के हिसाब से 4 से 6 घंटे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">अपनी सुविधा से शिफ्ट</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">सबसे अच्छे लोग कम काम के घंटे चाहने वाले हेल्पर्स के लिए</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो हेल्पर्स लचीला कुकिंग समय पसंद करते हैं</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Additional Information Section (Responsibilities) */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mt-12 mb-12">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex flex-col items-center gap-4 mb-6 text-center">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-display leading-loose">घरेलू रसोइया के काम की ज़िम्मेदारियाँ</h2>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium text-center max-w-2xl mx-auto leading-loose">
                                    बैंगलोर में होम कुक के तौर पर आप रोज़ाना के किचन के काम संभालेंगे और यह पक्का करेंगे कि परिवार के लिए खाना आसानी से तैयार हो जाए।
                                </p>

                                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 mt-4 leading-loose">रोज़ाना के कामों में शामिल हैं</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">परिवार की पसंद के हिसाब से खाना बनाना — नॉर्थ इंडियन, साउथ इंडियन, चाइनीज़, वेज और नॉन-वेज खाना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">खाने का सामान पहले से तैयार करना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">बर्तन धोना और किचन काउंटर साफ़ करना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">खाना सुरक्षित तरीके से स्टोर करना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">किचन को साफ़ और स्वच्छतािक रखना</span>
                                        </li>
                                    </ul>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">ज़रूरत पड़ने पर किराने की खरीदारी में मदद करना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">रेसिपी को ध्यान से फ़ॉलो करना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">समय पर खाना परोसना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">चाय और आसान नाश्ता तैयार करना</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">परिवार को किराने की कमी के बारे में बताना</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Training Support and Cuisines Section */}
                <section className="section-padding bg-gray-50 border-y border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto space-y-16">
                            {/* Training Block */}
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-display relative z-10">ट्रेनिंग सपोर्ट</h2>
                                <p className="text-lg text-gray-700 mb-8 max-w-3xl relative z-10">
                                    ईज़ीहेल्पर्स में, हम आपको प्लेसमेंट से पहले बेसिक ट्रेनिंग देते हैं ताकि आप भरोसे के साथ अपनी नौकरी शुरू कर सकें।
                                </p>

                                <div className="mt-4 mb-4 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800">ट्रेनिंग में शामिल है:</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 text-sm md:text-base">
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <AcademicCapIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">किचन की सेफ्टी और स्वच्छता</span>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <AcademicCapIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">छोटे और मीडियम परिवारों के लिए खाना बनाना</span>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <AcademicCapIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">किराने का सामान सुरक्षित तरीके से संभालना</span>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <AcademicCapIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">परिवार के निर्देश समझना</span>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <AcademicCapIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">किचन के सामान का सही इस्तेमाल</span>
                                    </div>
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <AcademicCapIcon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">सब्जियों और सामान के इंग्लिश नाम सीखना</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cuisines Block */}
                            <div>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 font-display text-center">आप किस तरह के खाने और डिश बनाएंगे</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Cuisine Card */}
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                            <FireIcon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">साउथ इंडियन डिश</h3>
                                        <p className="text-gray-600">इडली, डोसा, उपमा, सांभर, रसम, नारियल चटनी, लेमन राइस, दही चावल</p>
                                    </div>
                                    {/* Cuisine Card */}
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                            <FireIcon className="w-6 h-6 text-red-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">नॉर्थ इंडियन डिश</h3>
                                        <p className="text-gray-600">रोटी, चपाती, दाल, सब्ज़ी, पनीर करी, गोभी डिश, वेजिटेबल रोल, सिंपल चावल</p>
                                    </div>
                                    {/* Cuisine Card */}
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                            <FireIcon className="w-6 h-6 text-yellow-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">चाइनीज़ डिश</h3>
                                        <p className="text-gray-600">फ्राइड राइस, चाउमीन, नूडल्स, वेजिटेबल या चिकन मंचूरियन</p>
                                    </div>
                                    {/* Cuisine Card */}
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <FireIcon className="w-6 h-6 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">स्नैक्स और हल्का खाना</h3>
                                        <p className="text-gray-600">सैंडविच, टोस्ट, ब्रेड रोल, शाम का नाश्ता</p>
                                    </div>
                                    {/* Cuisine Card */}
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                            <FireIcon className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">वेजिटेरियन और नॉन-वेजिटेरियन खाना</h3>
                                        <p className="text-gray-600">अंडा, चिकन, मछली, पनीर और रोज़ाना का शाकाहारी खाना</p>
                                    </div>
                                </div>
                            </div>

                            {/* Who Can Apply Block */}
                            <div className="bg-teal-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
                                <div className="max-w-4xl mx-auto relative z-10">
                                    <h2 className="text-2xl md:text-4xl font-bold mb-10 font-display flex items-center gap-3 justify-center md:justify-start">
                                        <UserIcon className="w-8 h-8 text-teal-400" />
                                        कौन अप्लाई कर सकता है
                                    </h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-4 p-4 bg-teal-800/40 rounded-xl border border-teal-700/50 hover:bg-teal-800/60 transition-colors">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-400 flex-shrink-0" />
                                            <span className="text-base md:text-lg font-medium text-teal-50">झारखंड की महिला होम कुक</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-teal-800/40 rounded-xl border border-teal-700/50 hover:bg-teal-800/60 transition-colors">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-400 flex-shrink-0" />
                                            <span className="text-base md:text-lg font-medium text-teal-50">उम्र 18 से 45 साल के बीच</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-teal-800/40 rounded-xl border border-teal-700/50 hover:bg-teal-800/60 transition-colors">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-400 flex-shrink-0" />
                                            <span className="text-base md:text-lg font-medium text-teal-50">बेसिक शिक्षा काफी है</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-teal-800/40 rounded-xl border border-teal-700/50 hover:bg-teal-800/60 transition-colors">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-400 flex-shrink-0" />
                                            <span className="text-base md:text-lg font-medium text-teal-50">फ्रेशर्स और अनुभवी - दोनों का स्वागत है</span>
                                        </div>
                                    </div>

                                    <div className="mt-10 flex justify-center md:justify-start">
                                        <a href="tel:+919876543210" className="inline-block bg-white text-teal-900 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center border-2 border-white">
                                            आज ही अप्लाई करें
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-teal-900 text-white relative overflow-hidden text-sm md:text-base">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                            <p className="text-xl md:text-2xl font-light mb-8 text-white leading-loose">
                                हम झारखंड और पूरे भारत के हेल्पर को <span className="font-bold text-white bg-teal-700/80 px-2 py-1 border-b-2 border-teal-400">बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स</span> से जोड़ते हैं।
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-6 text-left">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <h3 className="text-teal-300 font-bold text-xl mb-2 flex items-center gap-2">
                                    <HeartIcon className="w-6 h-6" /> हम इन पर ध्यान देते हैं:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">बैंगलोर में इज्ज़तदार नौकरी</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">सुरक्षित और भरोसेमंद परिवार</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4 md:mt-0">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">हेल्पर की भलाई और लंबे समय तक समर्थन</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <h3 className="text-teal-300 font-bold text-xl mb-2 flex items-center gap-2">
                                    <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">5,000+ हेल्पर को नौकरियां दी गई</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">10,000+ परिवारों को सपोर्ट किया</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">DWSSC और Skill India के साथ हेल्पर ट्रेनिंग</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">सिर्फ इज्ज़तदार घरों में प्लेसमेंट</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4 md:mt-0">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">काम शुरू होने से पहले पूरी जानकारी</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">प्लेसमेंट के बाद लगातार सपोर्ट</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">नौकरी बदलने में भी मदद</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                                            <span className="text-teal-50 text-sm md:text-lg font-medium">नियमित सैलरी और लंबे समय तक नौकरी</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-teal-900/50 rounded-2xl p-6 border border-teal-700/50 backdrop-blur-sm mt-8 max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 text-left">
                                <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                    <HeartIcon className="w-6 h-6 text-teal-300" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">हमारा मानना:</h4>
                                    <p className="font-medium text-white">हेल्पर के लिए अच्छे घर, परिवारों के लिए अच्छे हेल्पर</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-left">
                                <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                    <GlobeAltIcon className="w-6 h-6 text-teal-300" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">जहाँ हम सेवा देते हैं</h4>
                                    <p className="text-sm text-teal-50 line-clamp-2 pr-4">बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली एनसीआर, पुणे, ओडिशा और अन्य।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">सपोर्ट और खास फायदे</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Training & Certificate */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                                    <AcademicCapIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">ट्रेनिंग और सर्टिफिकेट</h3>
                                <p className="text-gray-600 font-medium leading-loose">काम की बुनियादी ट्रेनिंग के साथ-साथ आपको सर्टिफिकेट भी दिया जाएगा।</p>
                            </div>

                            {/* Stay Support */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <HomeIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">सुरक्षित रहने की जगह</h3>
                                <p className="text-gray-600 font-medium leading-loose">नौकरी मिलने तक हमारे सुरक्षित महिला हॉस्टल में रुकने की सुविधा।</p>
                            </div>

                            {/* Safety & Security */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheckIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">पूरी सुरक्षा</h3>
                                <p className="text-gray-600 font-medium leading-loose">भरोसेमंद काम, स्पष्ट नियम और ईज़ीहेल्पर्स का लगातार साथ।</p>
                            </div>

                            {/* Look Professional */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">प्रोफेशनल किट</h3>
                                <p className="text-gray-600 font-medium leading-loose">काम के लिए एप्रन और ग्रूमिंग किट दी जाएगी।</p>
                            </div>

                            {/* Timely Salary */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    <AcademicCapIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">सही समय पर सैलरी</h3>
                                <p className="text-gray-600 font-medium leading-loose">आपका पूरा वेतन आपको सीधा मिलेगा, ईज़ीहेल्पर्स कोई कमीशन नहीं लेता।</p>
                            </div>

                            {/* Future Opportunities */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                    <GlobeAltIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">करियर में तरक्की</h3>
                                <p className="text-gray-600 font-medium leading-loose">अच्छा काम करने पर ज़्यादा पैसे और विदेश के प्रोजेक्ट्स में भी मौका।</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <HomeIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">NEST – महिला हेल्पर्स के लिए हॉस्टल</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg">
                                            बैंगलोर आकर काम शुरू करने के दौरान रहने की चिंता न करें।
                                        </p>
                                        <p className="text-gray-600 text-lg">
                                            NEST एक ऐसा सुरक्षित और घर जैसा हॉस्टल है जहाँ झारखंड की महिला हेल्पर्स को बहुत कम खर्च में साफ़ कमरे और घर जैसा खाना मिलता है।
                                        </p>
                                    </div>
                                    <Link href="/nest" className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                        NEST के बारे में और जानें
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-yellow-50 border-y border-yellow-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                        <StarIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display uppercase tracking-tight">रेफरल</h2>
                                    <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500</h3>
                                    <p className="text-yellow-50 font-medium">इनाम पाएं</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        अपने साथ और लोगों को भी जोड़ें और हर रेफरल पर ₹500 तक का इनाम कमाएं।
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-yellow-700 font-bold text-sm">1</span>
                                            </div>
                                            <span className="text-gray-700 font-medium">अपने दोस्त या रिश्तेदार का नाम और नंबर हमें बताएं</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-yellow-700 font-bold text-sm">2</span>
                                            </div>
                                            <span className="text-gray-700 font-medium">उन्हें ईज़ीहेल्पर्स के साथ रजिस्टर कराएं</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-yellow-700 font-bold text-sm">3</span>
                                            </div>
                                            <span className="text-gray-700 font-bold">नौकरी शुरू होते ही अपना इनाम पाएं</span>
                                        </div>
                                    </div>
                                    <Link href="https://wa.me/919876543210" className="inline-block text-center bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-orange-700 hover:shadow-xl transition-all duration-300">
                                        अभी रेफर करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply for a Bangalore Cooking Job */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">आवेदन कैसे करें</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-4">बैंगलोर में कुक की नौकरी पाना अब आसान है। इन तीन स्टेप्स को फॉलो करें:</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-teal-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "रजिस्ट्रेशन", desc: "हमें 9876543210 पर कॉल करें या फॉर्म भरें और अपनी जानकारी साझा करें।" },
                                    { step: 2, title: "इंटरव्यू और ट्रेनिंग", desc: "हम आपकी स्किल्स चेक करेंगे और ज़रूरत पड़ने पर बेसिक ट्रेनिंग देंगे।" },
                                    { step: 3, title: "नौकरी शुरू करें", desc: "सही परिवार के साथ जुड़ें, अपना एग्रीमेंट साइन करें और सुरक्षित काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-lg text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-teal-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-lg text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-teal-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल (FAQs)</h2>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                                <p className="text-gray-600 mt-6 text-lg">हमारी कुक की नौकरियों के बारे में सवाल हैं? नीचे दिए गए सामान्य सवालों के जवाब पढ़ें।</p>
                            </div>
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-teal-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-5xl font-bold mb-6 font-display text-white">सम्मान और बेहतर सैलरी आपका इंतज़ार कर रहे हैं</h2>
                            <p className="text-lg md:text-xl mb-10 text-teal-50">बैंगलोर के अच्छे घरों में अपनी जगह बनाएं। आज ही ईज़ीहेल्पर्स के साथ जुड़ें।</p>

                            <div className="flex justify-center flex-wrap gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-700 font-extrabold text-lg py-5 px-12 rounded-2xl hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-extrabold text-lg py-5 px-12 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                                >
                                    9876543210 पर कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
