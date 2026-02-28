import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    StarIcon,
    PhoneIcon,
    CheckCircleIcon,
    ClockIcon,
    HeartIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    GiftIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बैंगलोर में घरेलू हेल्पर जॉब्स | झारखंड से अप्लाई करें',
    description: 'बैंगलोर में सुरक्षित हेल्पर जॉब्स पाएं। झारखंड के हेल्पर्स बिना किसी एजेंट या फीस के सीधे अप्लाई कर सकते हैं। सम्मानजनक परिवार, लिखित एग्रीमेंट और पूरी मदद।',
    openGraph: {
        title: 'बैंगलोर में घरेलू हेल्पर जॉब्स | झारखंड से अप्लाई करें',
        description: 'बैंगलोर में सुरक्षित हेल्पर जॉब्स पाएं। झारखंड के हेल्पर्स बिना किसी एजेंट या फीस के सीधे अप्लाई कर सकते हैं। सम्मानजनक परिवार, लिखित एग्रीमेंट और पूरी मदद।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/hin'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या आधार देना जरूरी है?',
        answer: 'नहीं। वेरिफ़िकेशन के लिए, आधार कार्ड और लोकल एड्रेस प्रूफ की कॉपी WhatsApp पर भेजी जाती है और इसे सुरक्षित तरीके से सत्यापित किया जाता है।',
    },
    {
        question: 'सैलरी कैसे मिलेगी?',
        answer: 'सैलरी सीधे परिवार द्वारा आपके बैंक खाते में हर महीने की 10 तारीख से पहले भेजी जाती है।',
    },
    {
        question: 'अगर काम पसंद न आए तो क्या करें?',
        answer: 'ऐसी स्थिति में हमें बताएं। हम सुरक्षित तरीके से दूसरी जॉब ढूंढने में मदद करते हैं।',
    },
    {
        question: 'जॉइन करने के बाद मदद मिलेगी?',
        answer: 'हाँ, हमारी टीम समय-समय पर संपर्क करती है और किसी भी समस्या में मदद करती है।',
    },
    {
        question: 'क्या परिवार चुन सकते हैं?',
        answer: 'हाँ। पहले वीडियो कॉल होती है, आप आराम महसूस करें तभी जॉब फाइनल होती है।',
    },
    {
        question: "अगर बैंगलोर की भाषा नहीं आती तो?",
        answer: 'ज्यादातर परिवार हिंदी समझते हैं और हमारी टीम भी हिंदी में बात करती है, इसलिए आपको परेशानी नहीं होगी।',
    }
]

export default function HelperJobsJharkhandHinPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'झारखंड' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm relative -top-7 md:-top-0 lg:-top-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand"
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

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-2 leading-tight text-white whitespace-normal">भरोसेमंद डोमेस्टिक हेल्पर जॉब्स बैंगलोर में – झारखंड से आज ही अप्लाई करें</h1>

                            <p className="text-sm sm:text-base md:text-2xl font-semibold mb-4 text-teal-100 max-w-5xl mx-auto">क्या आप ऐसी नौकरी चाहते हैं जहाँ आपको सम्मान मिले, समय पर सैलरी मिले और हर समय मदद भी मिले?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-sm sm:text-base md:text-xl text-teal-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    हम EzyHelpers में झारखंड के घरेलू सहायक को बैंगलोर में अच्छे और भरोसेमंद परिवारों के साथ सीधे काम दिलाते हैं। यहाँ कोई एजेंट नहीं है और आपको किसी भी तरह की फीस नहीं देनी पड़ती।
                                </p>
                            </div>
                            <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ बैंगलोर में सुरक्षित जॉब्स</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ परिवार/मालिक द्वारा डायरेक्ट सैलरी</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ लिखा हुआ एग्रीमेंट</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ फ्री ट्रेनिंग</div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center w-full bg-white text-teal-700 font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    अप्लाई करें
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    हमें कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-custom">
                        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100 mt-4 mb-4">
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">5,000+</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">9</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">जॉब कैटेगरी</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">100%</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">एम्प्लॉयर से डायरेक्ट सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">₹0</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">रजिस्ट्रेशन/प्लेसमेंट फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Helper jobs */}
                <section id="find-jobs-by-state" className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">झारखंड हेल्पर्स के लिए बैंगलोर में जॉब्स</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">हम आपके अनुभव और हुनर के अनुसार अलग-अलग तरह की जॉब्स उपलब्ध कराते हैं। नीचे देखें और अपनी पसंद की नौकरी चुनें।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    state: "हाउसकीपिंग जॉब्स",
                                    slug: "housekeeping-jobs",
                                    desc: "घर की रोज़ सफाई करना, पोछा लगाना, बर्तन और कपड़े धोना और घर को साफ व व्यवस्थित रखना।",
                                    features: ["घर की रोज सफाई और पोछा करना", "बर्तन, कपड़े और लॉन्ड्री में मदद करना", "कमरों और फर्नीचर को साफ रखना", "लिव-इन या फुल-टाइम काम उपलब्ध"]
                                },
                                {
                                    state: "कुकिंग / किचन हेल्पर जॉब्स",
                                    slug: "cooking-kitchen-helper-jobs",
                                    desc: "परिवार के लिए शाकाहारी और मांसाहारी खाना बनाना, राशन संभालना और रसोई साफ रखना।",
                                    features: ["परिवार के लिए खाना बनाना", "खाने की व्यवस्था और राशन संभालने में मदद", "रसोई साफ और व्यवस्थित रखना", "लिव-इन या फुल-टाइम काम उपलब्ध"]
                                },
                                {
                                    state: "नैनी / बेबीसिटर जॉब्स",
                                    slug: "nanny-babysitter-jobs",
                                    desc: "बच्चों की देखभाल करना, उन्हें खिलाना, पढ़ाई में मदद करना और उनकी सुरक्षा का ध्यान रखना।",
                                    features: ["बच्चों की देखभाल और खाना खिलाना", "होमवर्क और खेल में मदद", "बच्चों को सुरक्षित और साफ रखना", "लिव-इन या फुल-टाइम काम उपलब्ध"]
                                },
                                {
                                    state: "एल्डरली केयर जॉब्स",
                                    slug: "elderly-care-jobs",
                                    desc: "बुज़ुर्गों की रोज़ की जरूरतों में मदद करना और उन्हें साथ व देखभाल देना।",
                                    features: ["बुज़ुर्गों के रोज़ाना कामों में मदद", "साथ और भावनात्मक सहारा देना", "चलने-फिरने और पर्सनल केयर में सहायता", "सुरक्षित और अच्छा घर का माहौल"]
                                },
                                {
                                    state: "पेशेंट केयर जॉब्स",
                                    slug: "patient-care-jobs",
                                    desc: "घर पर बीमार व्यक्ति की देखभाल करना और उनकी सुरक्षा और आराम का ध्यान रखना।",
                                    features: ["घर पर मरीज की देखभाल", "रोज़ाना कामों में सहायता", "आराम और सुरक्षा निश्चित", "लिव-इन या फुल-टाइम काम उपलब्ध"]
                                },
                                {
                                    state: "लिव-इन हाउसकीपिंग कपल जॉब्स",
                                    slug: "live-in-housekeeping-couple-jobs",
                                    desc: "पति-पत्नी मिलकर घर के काम संभालते हैं और घर की साफ-सफाई बनाए रखते हैं। रहने की सुविधा दी जाती है।",
                                    features: ["पति-पत्नी के लिए हाउसकीपिंग काम", "रोज़ाना घर के कामों में मदद", "घर और आसपास की देखभाल", "रहने की सुविधा उपलब्ध"]
                                },
                                {
                                    state: "कपल सिक्योरिटी जॉब्स",
                                    slug: "couple-security-jobs",
                                    desc: "पति-पत्नी मिलकर घर या अपार्टमेंट की सुरक्षा संभालते हैं और आने-जाने वालों पर नजर रखते हैं।",
                                    features: ["घर या अपार्टमेंट की सुरक्षा", "परिवार और घर को सुरक्षित रखना", "आने-जाने वालों की निगरानी", "ट्रेनिंग और पूरी सहायता"]
                                },
                                {
                                    state: "जपा मेड जॉब्स",
                                    slug: "japa-maid-jobs",
                                    desc: "डिलीवरी के बाद माँ और नवजात शिशु की देखभाल करना और सुधार में मदद करना।",
                                    features: ["माँ और शिशु की देखभाल", "बच्चे को खिलाने और संभालने में मदद", "माँ की रिकवरी में सहायता", "लिव-इन सुविधा और पूरी सहायता"]
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/helper-jobs/hin/${item.slug}`}
                                    className="group bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-teal-700 mb-3 group-hover:text-teal-800 relative z-10">{item.state}</h3>

                                    <p className="text-gray-700 text-sm md:text-sm mb-5 leading-relaxed font-medium relative z-10">
                                        {item.desc}
                                    </p>

                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 font-semibold text-teal-600 text-sm group-hover:underline flex items-center gap-1 relative z-10">
                                        और पढ़ें <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About & Trust Section */}
                <section className="section-padding bg-teal-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-600 text-white text-xs font-bold tracking-wider mb-4">
                                बैंगलोर क्यों?
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">बैंगलोर के परिवार झारखंड के हेल्पर्स को क्यों पसंद करते हैं</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                                बैंगलोर के कई परिवार खास तौर पर झारखंड के हेल्पर्स / घरेलू सहायकों को पसंद करते हैं क्योंकि:
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "भरोसेमंद होते हैं",
                                    "मेहनती होते हैं",
                                    "आसानी से ढल जाने वाले",
                                    "घरेलू काम के लिए अच्छे होते हैं",
                                    "लंबे समय तक नौकरी करते हैं"
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-3 py-1.5 md:px-6 md:py-3 rounded-full shadow-sm border border-teal-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-shadow duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                                        </div>
                                        <span className="text-xs md:text-lg font-semibold text-gray-800">{item}</span>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">EzyHelpers लोकल एजेंट्स से अलग क्यों है</h2>
                            <p className="text-lg text-gray-600">तुलना: झारखंड हेल्पर्स EzyHelpers पर क्यों भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-teal-500">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2">लोकल एजेंट्स</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2">EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            agent: "एक महीने की सैलरी कमीशन में लेते हैं",
                                            ezy: "फ्री रजिस्ट्रेशन – पूरी सैलरी आपकी"
                                        },
                                        {
                                            agent: "सिर्फ ज़ुबानी वादा करते हैं",
                                            ezy: "सैलरी, छुट्टी और काम के घंटे का लिखित एग्रीमेंट"
                                        },
                                        {
                                            agent: "समस्या होने पर कोई मदद नहीं",
                                            ezy: "जरूरत पड़ने पर हमारी टीम हमेशा साथ"
                                        },
                                        {
                                            agent: "काम के नियम साफ नहीं होते",
                                            ezy: "पहले दिन से साफ काम की जानकारी"
                                        },
                                        {
                                            agent: "सैलरी देर से या कटकर मिलती है",
                                            ezy: "समय पर पूरी सैलरी, कोई कटौती नहीं"
                                        },
                                        {
                                            agent: "इमरजेंसी में कोई सहायता नहीं",
                                            ezy: "इमरजेंसी में सुरक्षित रहने की मदद"
                                        }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-green-50">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4 mt-6">
                            {[
                                {
                                    agent: "एक महीने की सैलरी कमीशन में लेते हैं",
                                    ezy: "फ्री रजिस्ट्रेशन – पूरी सैलरी आपकी"
                                },
                                {
                                    agent: "सिर्फ ज़ुबानी वादा करते हैं",
                                    ezy: "सैलरी, छुट्टी और काम के घंटे का लिखित एग्रीमेंट"
                                },
                                {
                                    agent: "समस्या होने पर कोई मदद नहीं",
                                    ezy: "जरूरत पड़ने पर हमारी टीम हमेशा साथ"
                                },
                                {
                                    agent: "काम के नियम साफ नहीं होते",
                                    ezy: "पहले दिन से साफ काम की जानकारी"
                                },
                                {
                                    agent: "सैलरी देर से या कटकर मिलती है",
                                    ezy: "समय पर पूरी सैलरी, कोई कटौती नहीं"
                                },
                                {
                                    agent: "इमरजेंसी में कोई सहायता नहीं",
                                    ezy: "इमरजेंसी में सुरक्षित रहने की मदद"
                                }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border-2 border-teal-200 overflow-hidden shadow-md">
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-bold text-red-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✗</span> लोकल एजेंट:
                                        </div>
                                        <div className="text-gray-700">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-bold text-green-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✓</span> EzyHelpers:
                                        </div>
                                        <div className="text-gray-700">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section >

                {/* Benefits For You */}
                <section className="section-padding bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">झारखंड हेल्पर्स के लिए सैलरी और फायदे</h2>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                                झारखंड से ३ गुना ज्यादा कमाई — सुरक्षा और सम्मान के साथ</p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { title: "मासिक सैलरी", desc: "₹20,000–₹35,000 काम और अनुभव के अनुसार।", icon: BanknotesIcon },
                                { title: "झारखंड से ज्यादा कमाई", desc: "रांची, धनबाद, जमशेदपुर और आसपास के इलाकों से ज्यादा आय।", icon: StarIcon },
                                { title: "डायरेक्ट पेमेंट", desc: "सैलरी सीधे आपके बैंक खाते में। कोई देरी नहीं।", icon: CheckCircleIcon },
                                { title: "हुनर बढ़ाना", desc: "कुकिंग, केयर और हाउसकीपिंग की ट्रेनिंग से नए कौशल सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की सुविधा", desc: "लिव-इन जॉब में अलग कमरा, पंखा और लाइट।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "लिव-इन जॉब में रोज 3 समय का खाना।", icon: HeartIcon },
                                { title: "साप्ताहिक छुट्टी", desc: "फुल-टाइम में हफ्ते में 1 छुट्टी या लिव-इन में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "इमरजेंसी मदद", desc: "जरूरत पड़ने पर नेस्ट महिला हॉस्टल में सुरक्षित रहने की व्यवस्था।", icon: PhoneIcon },
                                { title: "रेफरल बोनस", desc: "कोई दोस्त या परिचित 1 महीना काम पूरा करे तो ₹500 बोनस।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md border-2 border-teal-100 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-50 rounded-full flex items-center justify-center mb-3 md:mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2 md:mb-3">{benefit.title}</h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">यह प्रक्रिया कैसे काम करती है</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-teal-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "ऑनलाइन रजिस्टर करें या हमें कॉल करें।" },
                                    { step: 2, title: "अपनी स्किल और जॉब पसंद बताएं।" },
                                    { step: 3, title: "वीडियो कॉल पर बात करवाई जाती है।" },
                                    { step: 4, title: "परिवार के साथ वीडियो कॉल।" },
                                    { step: 5, title: "जॉब कन्फर्म होती है।" },
                                    { step: 6, title: "सुरक्षित तरीके से बैंगलोर आएँ।" },
                                    { step: 7, title: "पूरी मदद के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-6 md:mb-8 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-xl font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-16 md:h-16 bg-teal-600 text-white rounded-full font-bold text-sm md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <h3 className="text-xs md:text-xl font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                घरेलू जॉब्स के लिए अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-10 rounded-xl border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
                            >
                                हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <section className="section-padding bg-yellow-50 border-y border-yellow-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                        <GiftIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2">अभी सिफ़ारिश करें और कमाएं</h2>
                                    <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500!</h3>
                                    <p className="text-yellow-100 font-medium">*नियम और शर्तें लागू</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        क्या आपके झारखंड में कोई दोस्त, पड़ोसी या जानने वाला बैंगलोर में काम करना चाहता है?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">उन्हें EzyHelpers से जोड़ें</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">और 1 महीना काम पूरा करें</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-bold">आपको ₹500 मिलेंगे</span>
                                        </div>
                                    </div>
                                    <p className="text-teal-600 font-bold text-lg bg-teal-50 py-2 px-4 rounded-lg text-center border border-teal-100">
                                        कोई सीमा नहीं — जितना रेफर करें उतना कमाएं।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                < section className="section-padding bg-teal-600 text-white" >
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xl md:text-4xl text-white font-bold mb-6">झारखंड के सैकड़ों हेल्पर्स की तरह सुरक्षित और भरोसेमंद काम शुरू करें।</p>
                            <p className="text-xl mb-8 text-teal-100">सम्मान से काम करें, ज्यादा कमाएं और अपने परिवार का सहारा बनें।</p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    बैंगलोर हेल्पर जॉब्स के लिए अप्लाई करें
                                </Link>
                                <Link
                                    href="#find-jobs-by-state"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                                >
                                    जॉब्स कैटेगरी देखे
                                </Link>
                            </div>
                        </div>
                    </div>
                </section >

                {/* FAQs */}
                < section className="section-padding bg-gray-50" >
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आम सवाल</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section >

            </main >
            <Footer />
        </>
    )
}
