import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
    HeartIcon,
    ClockIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ClockIcon as TimeIcon,
    AcademicCapIcon,
    StarIcon,
    BookOpenIcon,
    FaceSmileIcon,
    IdentificationIcon,
    LightBulbIcon,
    ChatBubbleBottomCenterTextIcon,
    LanguageIcon,
    ClipboardDocumentCheckIcon,
    UserIcon,
    SunIcon,
    MoonIcon,
    PuzzlePieceIcon,
    PencilSquareIcon,
    HomeModernIcon,
    CalendarIcon,
    MapPinIcon,
    PhoneIcon,
    GlobeAsiaAustraliaIcon,
    CheckCircleIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Trusted English-Speaking Babysitters at Home',
    description: 'Hire verified English-speaking Babysitters who help children build confidence, manners, and fluent communication through caring and professional home support.',
    openGraph: {
        title: 'Trusted English-Speaking Babysitters at Home',
        description: 'Hire verified English-speaking Babysitters who help children build confidence, manners, and fluent communication through caring and professional home support.',
        url: 'https://www.ezyhelpers.com/services/english-speaking-babysitters',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/english-speaking-babysitters'
    }
}

export default function BabysitterServicePage() {
    const faqs: FAQItem[] = [
        { question: 'What are English-speaking Babysitters and how are they different from regular Babysitters?', answer: 'English-speaking babysitters are trained caregivers who can talk fluently in English while taking care of your child. Unlike regular babysitters, they help children improve their English communication, vocabulary, and speaking confidence through daily interaction, stories, and small learning activities. They also ensure full safety, comfort, and routine care at home.' },
        { question: 'What is the minimum English fluency level of your English-speaking Nanny?', answer: 'Our nannies are comfortable speaking and understanding English clearly. They can read storybooks, teach simple English words, talk meaningfully with children, and guide them in daily activities. Their fluency helps children learn in a natural, simple, and enjoyable way.' },
        { question: 'Are your English-speaking Babysitters background-verified?', answer: 'Yes. Every Nanny goes through complete verification, including local address check, Aadhaar check, references, and skill assessment. If needed, police verification and health screening can also be arranged for extra safety and trust.' },
        { question: 'Can I request a trial period with the selected Babysitter?', answer: 'Yes. You can take a short trial at an additional cost to see how your child responds to the babysitter. This trial helps you understand their behaviour, care style, communication, and comfort before confirming long-term service.' },
        { question: 'How much do English-speaking Babysitters cost?', answer: 'The cost depends on working hours, type of service (hourly, full-time, or live-in), number of children, and any special needs. EzyHelpers provides transparent pricing with no hidden fees, ensuring safe and professional care at a fair rate.' },
        { question: 'What qualifications do your educated Nannies have?', answer: 'Our nannies are well-educated and trained in childcare. Most of them are DWSSC-trained and certified. They know how to manage routines, teach basic English, communicate politely, and take care of children responsibly.' },
        { question: 'Why choose a Nanny agency instead of finding a Babysitter independently?', answer: 'A professional agency like EzyHelpers gives you verified, trained, English-speaking babysitters. We handle all background checks, training, matching, and replacements. This gives you safety, support, and peace of mind—something you may not get when hiring independently.' },
    ]

    const whyChooseFeatures = [
        {
            title: 'Verified & Educated Caregivers',
            description: 'Our English-speaking babysitters are verified, trained, gentle, and provide safe childcare daily.',
            icon: IdentificationIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Focus on Child Growth & Learning',
            description: 'Each babysitter supports learning through stories, activities, English words, and confidence-building games.',
            icon: LightBulbIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: 'Strong English Communication Skills',
            description: 'An English-speaking babysitter helps children improve communication, school understanding, and daily English fluency.',
            icon: ChatBubbleBottomCenterTextIcon,
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600'
        },
        {
            title: 'Flexible Timings',
            description: 'Choose an English-speaking babysitter for part-time, full-time, daily, or live-in flexible schedules.',
            icon: ClockIcon,
            bgColor: 'bg-slate-50',
            iconColor: 'text-slate-600'
        }, {
            title: 'English Fluency',
            description: 'Every babysitter teaches new words, stories, and communication skills, supporting strong language development.',
            icon: LanguageIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }
    ]

    const premiumServices = [
        {
            title: 'Early Learning Support',
            description: 'Helps toddlers learn basic English words, colours, numbers, and simple concepts through stories, songs, and playful activities.',
            icon: AcademicCapIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'School Readiness Help',
            description: 'Builds discipline, manners, and focus. Helps children get ready for school with confidence and better social interaction.',
            icon: ClipboardDocumentCheckIcon,
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600'
        },
        {
            title: 'Daily Routine Care',
            description: 'Handles bathing, dressing, diaper changing, and hygiene in a caring and patient way.',
            icon: UserIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: 'Outdoor Play & Physical Growth',
            description: 'Encourages park play, exercise, and motor skills that help children stay active and strong.',
            icon: SunIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        }, {
            title: 'Sleep & Bedtime Routine',
            description: "Helps children wind down, follow a proper bedtime routine, and sleep peacefully.",
            icon: MoonIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Educational Play',
            description: "Engages children with English-based stories, puzzles, reading time, and creative games that improve imagination and learning.",
            icon: PuzzlePieceIcon,
            bgColor: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        }, {
            title: 'Homework Support',
            description: "Assists children with homework using simple explanations and gentle English guidance.",
            icon: PencilSquareIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Emotional & Social Care',
            description: "Teaches kids how to express feelings, talk politely, and interact confidently with others.",
            icon: HeartIcon,
            bgColor: 'bg-slate-50',
            iconColor: 'text-slate-600'
        }
    ]

    const services = [
        { title: 'Working Parents', desc: 'Reliable English-speaking babysitters help manage daily childcare while parents focus on work.', icon: BriefcaseIcon },
        { title: 'Families Moving to India from Abroad', desc: 'English-speaking nannies help children adjust confidently, stay comfortable, and communicate clearly in a new environment.', icon: GlobeAsiaAustraliaIcon },
        { title: 'Learning-Focused Parents', desc: 'Ideal for parents who want early learning, reading habits, and strong English communication skills.', icon: LightBulbIcon },
        { title: 'Modern Educated Families', desc: 'Perfect for families who prefer smart, well-spoken, and trained babysitters for everyday childcare.', icon: StarIcon },
    ];


    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'English-Speaking Babysitter' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">English-Speaking Babysitters for Modern Families</h1>

                            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">EzyHelpers’ English-speaking babysitters build children’s confidence, manners, and communication skills, helping them speak fluently and interact better at school, home, and with others.</p>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Verified Babysitters</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Educated Professionals</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Fluent in English Communication</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-indigo-950 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book a Babysitter Today
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Now
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-bold flex items-center justify-center">
                                        4.9 <StarIcon className="h-6 w-6 text-white fill-yellow-500" />
                                    </div>
                                    <div className="text-indigo-200 text-sm">Rated Babysitters</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">300+</div>
                                    <div className="text-indigo-200 text-sm">Bookings</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">1000+</div>
                                    <div className="text-indigo-200 text-sm">Families Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose EzyHelpers for Babysitter Services? */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Our English-Speaking Babysitters</h2>
                            <p className="text-lg text-gray-600">Delivering safe, educated, and fluent English babysitters who support learning, confidence, and daily childcare needs.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {whyChooseFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                    <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Provided */}
                <section className="section-padding bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Services Do our English-Speaking Babysitters Provide?</h2>
                            <p className="text-lg text-gray-600">Our trained babysitters offer complete childcare support, helping children grow emotionally, mentally, and physically every day.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
                            {premiumServices.map((feature, index) => (
                                <div key={index} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1">
                                    <div className={`${feature.bgColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-purple-800 hover:to-indigo-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Book Educated Babysitter
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories of Babysitter Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Who Benefits from Premium English-Speaking Babysitter Services?</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Exceptional childcare solutions designed for diverse family situations and unique parenting needs</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="bg-purple-100 rounded-xl p-3 w-fit mb-6">
                                        <service.icon className="h-8 w-8 text-purple-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Flexible Babysitter Options for Every Home */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Babysitter Options for Every Home</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the right English-speaking babysitter plan based on your family’s routine and comfort.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-1">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-purple-700 group-hover:scale-110 transition-transform">
                                    <HomeModernIcon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 h-auto lg:h-14 flex items-center">Live-In Babysitters <br /> (24-Hour Support)</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">A live-in English-speaking babysitter stays full-time, providing continuous childcare, safety, learning, and emotional support daily.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-1">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-indigo-700 group-hover:scale-110 transition-transform">
                                    <ClockIcon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 h-auto lg:h-14 flex items-center">Full-Time Babysitters <br /> (8–10 Hours Daily)</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">A full-time English-speaking babysitter manages routines, meals, learning, hygiene, and daily activities with consistent caring support.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-1">
                                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-pink-700 group-hover:scale-110 transition-transform">
                                    <CalendarIcon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 h-auto lg:h-14 flex items-center">Part-Time Babysitters <br /> (2–6 Hours)</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">A part-time English-speaking babysitter assists with short childcare needs, learning time, play routines, and structured daily support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Parents Prefer Educated & Communicative Nannies</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">The essential role of an English-speaking educated Babysitter/Nanny</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Supporting Busy Families", desc: "Our English-speaking babysitters make parents’ lives easier by managing childcare routines, learning support, and daily supervision.", icon: UserGroupIcon, color: "text-purple-600", bg: "bg-purple-50" },
                                { title: "Early English Learning", desc: "Children pick up English faster when they hear it daily through stories, play, and simple conversation.", icon: LanguageIcon, color: "text-indigo-600", bg: "bg-indigo-50" },
                                { title: "Better Educational Support", desc: "Educated nannies turn everyday activities into meaningful learning moments through reading, phonics, and practice.", icon: AcademicCapIcon, color: "text-pink-600", bg: "bg-pink-50" },
                                { title: "Mental & Cognitive Growth", desc: "Babysitters support problem-solving, vocabulary building, and early learning exercises that help overall development.", icon: LightBulbIcon, color: "text-blue-600", bg: "bg-blue-50" },
                                { title: "Easy Communication for Parents", desc: "Parents who work in English-speaking jobs can easily share instructions, routines, and expectations.", icon: ChatBubbleBottomCenterTextIcon, color: "text-red-600", bg: "bg-red-50" },
                                { title: "Professionalism", desc: "Educated nannies maintain discipline, privacy, polite communication, and a responsible attitude.", icon: ShieldCheckIcon, color: "text-teal-600", bg: "bg-teal-50" },
                                { title: "Creative Play & Fun Learning", desc: "They use books, drawing, music, and activities to make learning fun and engaging.", icon: PuzzlePieceIcon, color: "text-orange-600", bg: "bg-orange-50" }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                                    <div className={`${feature.bg} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Book */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book an English-Speaking Babysitter?</h2>
                            <p className="text-lg text-gray-600">Quick, Reliable, and Transparent Hiring</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
                                <p className="text-gray-600">Tell us your child's age, routine, and the type of care you need through a call or an online form.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Shortlisted Profiles</h3>
                                <p className="text-gray-600">We share verified English-speaking babysitter profiles that match your needs.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Interaction & Trial</h3>
                                <p className="text-gray-600">You can conduct interviews or video calls with selected babysitters, assess them.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm & Start Service</h3>
                                <p className="text-gray-600">Once confirmed, your chosen babysitter starts working, and our support team stays in touch for help.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-purple-800 to-indigo-950 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Bring Professional Childcare Home Today</h2>
                            <p className="text-xl mb-8 text-indigo-100">Give your child a strong foundation in communication, behaviour, and early learning. A skilled English-speaking Nanny is an investment in your child’s future and your family’s peace of mind.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center bg-white text-indigo-950 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book English-speaking Babysitter
                                </Link>

                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Us Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore Other Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
                            <p className="text-lg text-gray-600">Complete Home & Family Support by EzyHelpers</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/services/professional-chef-for-home" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <UserIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Chef Services</h3>
                                <p className="text-gray-600 mb-4">Get skilled chefs who prepare homely, traditional, or international meals.</p>
                                <div className="flex items-center text-blue-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/services/chauffeur-for-luxury-cars" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                                <IdentificationIcon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Chauffeurs for Luxury Cars</h3>
                                <p className="text-gray-600 mb-4">Professional drivers for safe and punctual travel in premium cars.</p>
                                <div className="flex items-center text-orange-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/services/japa-nanny-services" className="group bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300">
                                <HeartIcon className="h-12 w-12 text-slate-700 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Japa / Postpartum Care</h3>
                                <p className="text-gray-600 mb-4">Trained newborn and mother-care helpers for feeding, massage, and recovery.</p>
                                <div className="flex items-center text-slate-700 font-semibold">Learn More</div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
