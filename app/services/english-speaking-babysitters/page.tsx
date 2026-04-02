import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
    PhoneIcon,
    CheckCircleIcon,
    SparklesIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    StarIcon,
    ClockIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    HomeModernIcon,
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    BookOpenIcon,
    FaceSmileIcon,
    LightBulbIcon,
    LanguageIcon,
    PuzzlePieceIcon,
    GlobeAltIcon
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

export default function EnglishSpeakingBabysittersPage() {
    const faqs: FAQItem[] = [
        {
            question: 'What are English-speaking Babysitters and how are they different from regular Babysitters?',
            answer: 'English-speaking babysitters are trained caregivers who can talk fluently in English while taking care of your child. Unlike regular babysitters, they help children improve their English communication, vocabulary, and speaking confidence through daily interaction, stories, and small learning activities. They also ensure full safety, comfort, and routine care at home.'
        },
        {
            question: 'What is the minimum English fluency level of your English-speaking Nanny?',
            answer: 'Our nannies are comfortable speaking and understanding English clearly. They can read storybooks, teach simple English words, talk meaningfully with children, and guide them in daily activities. Their fluency helps children learn in a natural, simple, and enjoyable way.'
        },
        {
            question: 'Are your English-speaking Babysitters background-verified?',
            answer: 'Yes. Every Nanny goes through complete verification, including local address check, Aadhaar check, references, and skill assessment. If needed, police verification and health screening can also be arranged for extra safety and trust.'
        },
        {
            question: 'Can I request a trial period with the selected Babysitter?',
            answer: 'Yes. You can take a short trial at an additional cost to see how your child responds to the babysitter. This trial helps you understand their behaviour, care style, communication, and comfort before confirming long-term service.'
        },
        {
            question: 'How much do English-speaking Babysitters cost?',
            answer: 'The cost depends on working hours, type of service (hourly, full-time, or live-in), number of children, and any special needs. EzyHelpers provides transparent pricing with no hidden fees, ensuring safe and professional care at a fair rate.'
        },
        {
            question: 'What qualifications do your educated Nannies have?',
            answer: 'Our nannies are well-educated and trained in childcare. Most of them are DWSSC-trained and certified. They know how to manage routines, teach basic English, communicate politely, and take care of children responsibly.'
        },
        {
            question: 'Why choose a Nanny agency instead of finding a Babysitter independently?',
            answer: 'A professional agency like EzyHelpers gives you verified, trained, English-speaking babysitters. We handle all background checks, training, matching, and replacements. This gives you safety, support, and peace of mind—something you may not get when hiring independently.'
        }
    ]

    const whyChooseFeatures = [
        {
            title: 'Verified & Educated',
            description: 'Our babysitters are verified, trained, gentle, and provide safe childcare daily.',
            icon: ShieldCheckIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: 'Child Growth & Learning',
            description: 'Supports learning through stories, activities, English words, and games.',
            icon: AcademicCapIcon,
            bgColor: 'bg-violet-50',
            iconColor: 'text-violet-600'
        },
        {
            title: 'English Comm. Skills',
            description: 'Helps children improve communication, school understanding, and fluency.',
            icon: LanguageIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Flexible Timings',
            description: 'Choose from part-time, full-time, daily, or live-in flexible schedules.',
            icon: ClockIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: 'Language Development',
            description: 'Teaches new words, stories, and communication, supporting strong development.',
            icon: ChatBubbleLeftRightIcon,
            bgColor: 'bg-violet-50',
            iconColor: 'text-violet-600'
        }
    ]

    const serviceCategories = [
        { title: 'Early Learning Support', desc: 'Helps toddlers learn basic English words, colours, numbers, and concepts through stories and songs.', icon: BookOpenIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'School Readiness Help', desc: 'Builds discipline and focus. Helps children get ready for school with confidence and social interaction.', icon: AcademicCapIcon, color: 'text-violet-600', bg: 'bg-violet-50' },
        { title: 'Nutrition & Meal Support', desc: 'Prepares healthy meals, feeds children safely, and follows dietary needs or allergies carefully.', icon: SparklesIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Daily Routine Care', desc: 'Handles bathing, dressing, diaper changing, and hygiene in a caring and patient way.', icon: HeartIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Outdoor Play & Growth', desc: 'Encourages park play, exercise, and motor skills that help children stay active and strong.', icon: FaceSmileIcon, color: 'text-violet-600', bg: 'bg-violet-50' },
        { title: 'Sleep & Bedtime Routine', desc: 'Helps children wind down, follow a proper bedtime routine, and sleep peacefully.', icon: ClockIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Educational Play', desc: 'Engages children with English stories, puzzles, reading, and creative games for imagination.', icon: PuzzlePieceIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Homework Support', desc: 'Assists children with homework using simple explanations and gentle English guidance.', icon: LightBulbIcon, color: 'text-violet-600', bg: 'bg-violet-50' },
        { title: 'Emotional & Social Care', desc: 'Teaches kids how to express feelings, talk politely, and interact confidently with others.', icon: UserGroupIcon, color: 'text-purple-600', bg: 'bg-purple-50' }
    ]

    const whoBenefitsPoints = [
        { title: 'Working Parents', desc: 'Reliable English-speaking babysitters help manage daily childcare while parents focus on work.', icon: BriefcaseIcon },
        { title: 'Families Moving from Abroad', desc: 'English-speaking nannies help children adjust confidently and stay comfortable in a new environment.', icon: GlobeAltIcon },
        { title: 'Learning-Focused Parents', desc: 'Ideal for parents who want early learning, reading habits, and strong English communication skills.', icon: AcademicCapIcon },
        { title: 'Modern Educated Families', desc: 'Perfect for families who prefer smart, well-spoken, and trained babysitters for everyday childcare.', icon: HomeModernIcon }
    ]

    const parentPreferPoints = [
        { title: 'Supporting Busy Families', desc: 'Managing childcare routines, learning support, and daily supervision to make parents’ lives easier.' },
        { title: 'Early English Learning', desc: 'Fast language acquisition through daily stories, play, and simple conversation.' },
        { title: 'Better Educational Support', desc: 'Turning everyday activities into meaningful learning moments (reading, phonics, etc.).' },
        { title: 'Language Development', desc: 'Daily English conversations help children speak clearly and express themselves confidently.' },
        { title: 'Mental & Cognitive Growth', desc: 'Problem-solving, vocabulary building, and early learning exercises for overall development.' },
        { title: 'Easy Communication for Parents', desc: 'Instructions and expectations are shared easily by parents working in English environments.' },
        { title: 'Professionalism', desc: 'Maintaining discipline, privacy, polite communication, and a responsible attitude.' },
        { title: 'Creative Play & Fun Learning', desc: 'Using books, drawing, music, and activities for fun and engaging learning.' }
    ]

    const exploreServices = [
        { title: 'Professional Chef Services', desc: 'Expert chefs craft delicious, custom meals for your daily home needs.', href: '/services/professional-chef-for-home', icon: SparklesIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Chauffeurs for Luxury Cars', desc: 'Professional, safe, and discreet drivers for your premium vehicles.', href: '/services/premium-chauffeur-service', icon: BriefcaseIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Japa / Postpartum Care', desc: 'Expert support for mother and newborn care during the recovery phase.', href: '/services/japa-nanny-services', icon: HeartIcon, color: 'text-rose-600', bg: 'bg-rose-50' }
    ]

    return (
        <main className="min-h-screen">
            <Navbar />

            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'English-Speaking Babysitters' }
                ]}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-700 via-violet-600 to-indigo-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-24 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-24 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display leading-tight text-white tracking-tight">English-Speaking Babysitters for Modern Families</h1>

                        <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">EzyHelpers’ English-speaking babysitters build children’s confidence, manners, and communication skills, helping them speak fluently and interact better at school, home, and with others.</p>

                        <div className="flex flex-wrap gap-3 mb-8 justify-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm tracking-wider">✓ Verified Babysitters</div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm tracking-wider">✓ Educated Professionals</div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm tracking-wider">✓ Fluent in English Communication</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center w-full bg-white text-indigo-700 font-black text-xl py-5 px-6 rounded-2xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                Book a Babysitter Today
                            </Link>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center w-full bg-transparent text-white font-black text-xl py-5 px-6 rounded-2xl border-2 border-white/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                            >
                                <PhoneIcon className="h-6 w-6 mr-3" />
                                Call Now
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/20 max-w-2xl mx-auto items-center">
                            <div className="text-center">
                                <div className="text-3xl font-black flex items-center justify-center">
                                    4.9 <StarIcon className="h-7 w-7 text-white fill-yellow-400 ml-1" />
                                </div>
                                <div className="text-white/70 text-xs font-black uppercase tracking-widest mt-1">Rated Babysitters</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black uppercase">300+</div>
                                <div className="text-white/70 text-xs font-black uppercase tracking-widest mt-1">Bookings Done</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black uppercase">1,000+</div>
                                <div className="text-white/70 text-xs font-black uppercase tracking-widest mt-1">Families Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight">Why Choose Our English-Speaking Babysitters</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-3xl mx-auto italic">Delivering safe, educated, and fluent English babysitters who support learning, confidence, and daily childcare needs.</p>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {whyChooseFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(79,70,229,0.1)] transition-all duration-300 border border-gray-100 group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]">
                                <div className={`${feature.bgColor} rounded-2xl w-16 h-16 flex items-center justify-center mb-8 ${feature.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 font-display">{feature.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Services Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight">What Services Do Our English-Speaking Babysitters Provide?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-4xl mx-auto italic">Our trained babysitters offer complete childcare support, helping children grow emotionally, mentally, and physically every day.</p>
                        <div className="w-24 h-1.5 bg-violet-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
                        {serviceCategories.map((service, index) => (
                            <div key={index} className={`${service.bg} rounded-[2.5rem] p-10 border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2`}>
                                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm ${service.color} group-hover:scale-110 transition-transform`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 font-display group-hover:text-indigo-700 transition-colors">{service.title}</h3>
                                <p className="text-sm text-gray-700 font-semibold leading-relaxed mb-0">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/hire-helper"
                            className="inline-flex items-center justify-center bg-indigo-700 text-white font-black text-xl py-5 px-10 rounded-2xl hover:bg-indigo-800 hover:shadow-2xl transition-all transform hover:scale-105"
                        >
                            Book Educated Babysitter
                            <ArrowRightIcon className="h-5 w-5 ml-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who Benefits Section */}
            <section className="section-padding bg-gray-50 border-y border-gray-200">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight">Who Benefits from Premium English-Speaking Babysitter Services?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-4xl mx-auto">Exceptional childcare solutions designed for diverse family situations and unique parenting needs</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whoBenefitsPoints.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
                                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-black text-lg text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flexible Options Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight text-center">Flexible Babysitter Options for Every Home</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold text-center italic">Choose the right English-speaking babysitter plan based on your family’s routine and comfort.</p>
                        <div className="w-24 h-1.5 bg-violet-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: 'Live-In Babysitters', sub: '24-Hour Support', desc: 'A live-in English-speaking babysitter stays full-time, providing continuous childcare, safety, learning, and emotional support daily.', icon: HomeModernIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                            { title: 'Full-Time Babysitters', sub: '8–10 Hours Daily', desc: 'A full-time English-speaking babysitter manages routines, meals, learning, hygiene, and daily activities with consistent caring support.', icon: ClockIcon, color: 'text-violet-600', bg: 'bg-violet-50' },
                            { title: 'Part-Time Babysitters', sub: '2–6 Hours Support', desc: 'A part-time English-speaking babysitter assists with short childcare needs, learning time, play routines, and structured daily support.', icon: SparklesIcon, color: 'text-purple-600', bg: 'bg-purple-50' }
                        ].map((option, index) => (
                            <div key={index} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 text-center flex flex-col group hover:shadow-2xl transition-all duration-300">
                                <div className={`${option.bg} rounded-3xl w-24 h-24 flex items-center justify-center mb-8 mx-auto ${option.color} group-hover:scale-110 transition-transform`}>
                                    <option.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2 font-display uppercase tracking-tight">{option.title}</h3>
                                <p className={`${option.color} font-black text-sm mb-6 uppercase tracking-widest`}>{option.sub}</p>
                                <p className="text-gray-600/90 font-bold leading-relaxed">{option.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight">Why Parents Prefer Educated & Communicative Nannies</h2>
                        <p className="text-indigo-100 text-lg md:text-xl font-bold italic opacity-90">The essential role of an English-speaking educated Babysitter/Nanny</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {parentPreferPoints.map((point, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-indigo-500 transition-colors">
                                    <CheckCircleIcon className="h-7 w-7" />
                                </div>
                                <h3 className="text-lg font-black text-white mb-3 leading-tight">{point.title}</h3>
                                <p className="text-sm text-indigo-100 font-semibold leading-relaxed opacity-80">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How To Hire Segment */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight">How To Hire English-Speaking Babysitters</h2>
                        <p className="text-gray-600 text-lg md:text-xl font-bold italic">Quick, Reliable, and Transparent Hiring</p>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        {[
                            { step: 1, title: 'Share Your Requirements', desc: 'Tell us your child\'s age, routine, and care type through a call or online form.' },
                            { step: 2, title: 'Get Shortlisted Profiles', desc: 'We share verified English-speaking babysitter profiles that match your needs.' },
                            { step: 3, title: 'Interaction & Trial', desc: 'Conduct interviews or video calls and take a short trial to assess comfort.' },
                            { step: 4, title: 'Confirm & Start Service', desc: 'Your chosen babysitter starts, and our support team stays in touch for help.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-indigo-800 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300 border-4 border-white ring-2 ring-indigo-50">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 px-4 font-display">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed px-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Redesign */}
            <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[160px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-700 rounded-full blur-[140px] opacity-30 translate-y-1/2 -translate-x-1/4"></div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content Column */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20">
                                <LightBulbIcon className="h-5 w-5 text-indigo-300 mr-2" />
                                <span className="text-sm font-black uppercase tracking-widest text-indigo-100">Professional Childcare</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-display tracking-tight leading-[1.1]">Bring Professional Childcare Home Today</h2>
                            <p className="text-indigo-100/90 text-xl md:text-2xl mb-8 font-bold leading-relaxed italic max-w-xl">
                                Give your child a strong foundation in communication, behaviour, and early learning.
                            </p>
                            <p className="text-white/80 text-lg md:text-xl mb-12 font-bold leading-[1.6] max-w-2xl">
                                A skilled English-speaking Nanny is an investment in your child’s future and your family’s peace of mind.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center py-5 px-5 bg-white text-indigo-900 font-black text-lg rounded-2xl hover:bg-indigo-50 transition-all shadow-2xl hover:shadow-indigo-500/20 transform hover:scale-105"
                                >
                                    Book English-Speaking Babysitter
                                    <ArrowRightIcon className="h-5 w-5 ml-3" />
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center py-5 px-10 bg-white/10 backdrop-blur-md text-white font-black text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
                                >
                                    <PhoneIcon className="h-6 w-6 mr-3" />
                                    Call Us
                                </Link>
                            </div>
                        </div>

                        {/* Right Trust Card Column */}
                        <div className="relative hidden lg:block">
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 border border-white/20 shadow-2xl overflow-hidden group transition-all duration-500">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="text-2xl font-black text-white mb-10 border-b border-white/10 pb-6 font-display uppercase tracking-wider">Why Families Choose EzyHelpers</h3>

                                <div className="space-y-8">
                                    {[
                                        { icon: LanguageIcon, title: 'Fluent Communication', desc: 'Every nanny is comfortable taking meaningfully with children in English.' },
                                        { icon: ShieldCheckIcon, title: 'Verified Profiles', desc: 'Rigorous background checks including Aadhaar and local address verification.' },
                                        { icon: AcademicCapIcon, title: 'Educated Professionalism', desc: 'Training in routines, early learning, and polite educational support.' }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex gap-5 group items-start">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                                                <benefit.icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-lg text-white mb-1 leading-tight">{benefit.title}</h4>
                                                <p className="text-sm text-indigo-100/70 font-bold leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                    <div className="text-3xl font-black text-white mb-1 tracking-widest uppercase">1,000+</div>
                                    <div className="text-xs uppercase font-black text-indigo-300 tracking-widest">Educated Families Served</div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Other Services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display uppercase tracking-tight">Explore Other Services</h2>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {exploreServices.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className={`${service.bg} p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full`}
                            >
                                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${service.color}`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4 font-display">{service.title}</h3>
                                <p className="text-gray-600 font-bold leading-relaxed mb-10 flex-grow">{service.desc}</p>
                                <div className={`flex items-center font-black ${service.color} group-hover:translate-x-2 transition-transform`}>
                                    Learn More <ArrowRightIcon className="h-5 w-5 ml-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display">FAQs</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    )
}
