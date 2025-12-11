import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import CTASection from '@/components/sections/CTASection';
import CaseStudyCard from '../components/CaseStudyCard';
import { getCaseStudy, getRelatedCaseStudies, caseStudies } from '../data/caseStudies';
import { CheckCircleIcon, StarIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

const RESPECT_LOYALTY_ACTIONS = [
    { action: 'Asking for tea or water before work', result: 'Creates emotional comfort before a long day' },
    { action: 'Addressing helpers by name instead of "maid"', result: 'Builds dignity and identity' },
    { action: 'Praising good work aloud', result: 'Reinforces job pride and purpose' },
    { action: 'Allowing emergency leaves or flexibility', result: 'Signals trust and empathy' },
    { action: 'Celebrating birthdays and festivals together', result: 'Creates a sense of belonging' },
    { action: 'Paying on time and transparently', result: 'Provides financial security and reliability' },
];

const RESPECT_HUMAN_ELEMENTS = [
    {
        title: 'Dignity',
        description: '"I matter" - the helper feels seen as a person, not a task list.'
    },
    {
        title: 'Belonging',
        description: '"I am part of this place" - small rituals create emotional attachment.'
    },
    {
        title: 'Security',
        description: '"I won\'t be mistreated here" - trust is earned through calm, kind interactions.'
    },
];

const RESPECT_IMPACT_STATEMENTS = [
    'A clean, organized home every single day without the churn of retraining.',
    'Zero disruption from helpers coming and going, which kept the routine steady.',
    'Emotional peace and reduced stress for Nisha, balancing parenting and work.',
    'More time for career and family because training new helpers was no longer required.',
    'A happy child who formed a bond with Rani and feels safe.',
    'A positive, supportive work-home atmosphere where Rani is treated like family.',
];

const RESPECT_RETENTION_SECTIONS = {
    preChallenge: (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">The Household Retention Problem Nobody Talks About</h2>
            <p className="text-gray-700 mb-3">
                Employee retention is a challenge in every industry, and domestic help is no different. Many Indian families live through the same cycle: a helper joins, works for a few months, and then leaves abruptly--sometimes without notice, sometimes for personal reasons, sometimes because a neighbor offered a slightly higher salary.
            </p>
            <p className="text-gray-700 mb-3">
                The constant turnover disrupts routines, creates stress, and fosters the belief that "good helpers never stay for long." But what if the real issue is not loyalty but how helpers feel in the homes where they work?
            </p>
            <p className="text-gray-700 italic">
                When helpers feel respected, they don't leave -- they stay.
            </p>
        </section>
    ),
    postResults: (
        <>
            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Key Insight from the Case Study: The Real Reason Helpers Stay</h3>
                <p className="text-gray-700 mb-4">
                    The household tasks, timings, and responsibilities were not dramatically different from previous jobs. The real difference was the emotional environment. Rani didn't stay because of a bigger salary or lighter workload -- she stayed because Nisha made her feel valued.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-gray-100 bg-red-50">
                        <p className="text-sm text-red-600 font-semibold mb-3">Helpers do NOT stay for:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>High salary alone</li>
                            <li>Light workload</li>
                            <li>Immediate necessity to earn</li>
                            <li>Absence of better options</li>
                        </ul>
                    </div>
                    <div className="p-5 rounded-2xl border border-gray-100 bg-green-50">
                        <p className="text-sm text-green-600 font-semibold mb-3">What made Rani stay:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Warm behaviour and kindness</li>
                            <li>Human treatment that acknowledged her dignity</li>
                            <li>The ritual of offering a cup of tea before work</li>
                            <li>Feeling seen and valued each day</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Human Psychology Behind Retention</h3>
                <p className="text-gray-700 mb-4">
                    Research shows every worker needs three core emotional experiences to stay engaged:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {RESPECT_HUMAN_ELEMENTS.map((item) => (
                        <div key={item.title} className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
                            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{item.title}</p>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-gray-700 mt-4">
                    When helpers feel valued, they take ownership, treat the home with care, and protect the family with loyalty. Rani chose to stay even after a neighbour offered ₹2,000 more, because, in her words, "Naya ghar mil jayega, par izzat har jagah nahi milti."
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">EzyHelpers POV</h3>
                <p className="text-gray-700 mb-4">
                    Verification, training, and matching are our basics, yet we've learned that true retention is built on relationships. While platforms can shortlist skilled helpers, only the family can make them feel respected.
                </p>
                <ul className="space-y-3 text-gray-700">
                    <li>Helpers need to be spoken to with kindness and calmness every day.</li>
                    <li>Breaks, emotional check-ins, and festival celebrations foster belonging.</li>
                    <li>Support instead of shouting builds security--helpers protect the household when they feel safe.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">What We Learned After Listening to Hundreds of Helpers & Families</h3>
                <p className="text-gray-700">
                    The pattern became clear: helpers leave because of behaviour, not salary. After speaking to families and reviewing work environments, we now emphasize creating healthy emotional ecosystems alongside skill matching. When helpers and families feel comfortable and respected, retention becomes natural, and the entire home feels happier.
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Employer-Helper Relationship: Simple Actions That Build Strong Loyalty</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {RESPECT_LOYALTY_ACTIONS.map((item) => (
                        <div key={item.action} className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                            <p className="text-sm font-semibold text-gray-500 mb-2">{item.action}</p>
                            <p className="text-gray-700 text-sm">{item.result}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Impact on Nisha's Life</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {RESPECT_IMPACT_STATEMENTS.map((statement) => (
                        <li key={statement}>{statement}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Conclusion</h3>
                <p className="text-gray-700 mb-3">
                    This story is a mirror for thousands of homes. Many families want helpers who stay long term. Loyalty does not come from salary or contracts--it comes from humanity.
                </p>
                <p className="text-gray-700 italic">
                    Respect = Retention.
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Final Thought</h3>
                <p className="text-gray-700 mb-3">
                    Every helper dreams of working with dignity. Every family dreams of someone who stays. The bridge between these dreams is respect.
                </p>
                <p className="text-xs text-gray-500">
                    Disclaimer: This case study is based on a real EzyHelpers customer experience. Names and identifiable details were altered for privacy.
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">About EzyHelpers</h3>
                <p className="text-gray-700">
                    EzyHelpers is India's trusted platform connecting families with trained, background-verified helpers across services like cleaning, cooking, babysitting, elderly care, live-in/full-time maids, drivers, and home maintenance. We strive for dignified employment by ensuring fair pay, transparent transactions, and safe working environments, while delivering reliable support to families.
                </p>
            </section>
        </>
    )
};

const CASE_STUDY_EXTRA_CONTENT: Record<string, { preChallenge?: JSX.Element; postResults?: JSX.Element }> = {
    'respect-equals-retention': RESPECT_RETENTION_SECTIONS,
    'chhote-break-bade-results': {
        preChallenge: (
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">When Palak Asked for a House Change</h2>
                <p className="text-gray-700 mb-3">
                    Palak, a 23-year-old live-in housemaid from Bihar, handled all housekeeping tasks yet worked nonstop from 6 AM to 10 PM. Even short pauses felt wrong, and the piling "extras" made her feel invisible and exhausted.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                    <li>Every request added guilt--she feared taking a break would seem lazy.</li>
                    <li>The routine offered no breathing space or predictability.</li>
                    <li>She quietly told EzyHelpers: "I want a new house."</li>
                </ul>
                <p className="text-gray-700">
                    The principle that saved the placement was clear: <strong>Chhote Break, Bade Results.</strong>
                </p>
            </section>
        ),
        postResults: (
            <>
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Impact of the Protected Break</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                            <p className="text-sm text-primary-600 font-semibold mb-2">Energy & Focus</p>
                            <p className="text-gray-700">Speed and focus returned almost instantly once she had half an hour to breathe.</p>
                        </div>
                        <div className="p-5 rounded-2xl border border-success-100 bg-success-50">
                            <p className="text-sm text-success-600 font-semibold mb-2">Loyalty</p>
                            <p className="text-gray-700">She declared, "Everything is fine now. I want to stay here."</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">EzyHelpers Lesson: Structure = Stability</h3>
                    <p className="text-gray-700 mb-3">
                        A guaranteed 30-minute break gave Palak permission to recharge. The family stopped piling on surprise tasks, and performance, mood, and communication all improved.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Breaks restore dignity and focus.</li>
                        <li>Predictability reduces stress.</li>
                        <li>Small breathing spaces equal big behavioural shifts.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Lessons for Every Household</h3>
                    <p className="text-gray-700 mb-3">
                        With one structured break, the family reclaimed calm and the helper stopped feeling invisible. The story is a reminder that rest is not laziness--it is a productivity investment that prevents quiet burnout.
                    </p>
                    <p className="text-gray-700 italic">
                        Rest = Retention. Structure = Stability.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 5: The Impact</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Her energy bounced back--she cleaned with more focus and less fatigue.</li>
                        <li>Her behaviour softened--she became communicative, cheerful, and relaxed.</li>
                        <li>Work quality improved--laundry stayed crisp, rooms tidy, initiative returned.</li>
                        <li>Mistakes reduced--no more missed dusting or delayed tasks.</li>
                        <li>Loyalty deepened--"Ab sab theek chal raha hai. Main yahin rehna chahti hoon."</li>
                        <li>The family realised a small break created trust--"We didn't realise 30 minutes could make such a big difference."</li>
                    </ul>
                    <p className="text-gray-700 mt-3 italic">
                        Rest = Retention. Structure = Stability. Breaks = Better Behaviour.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 6: Why Agencies Should Enforce Break Policies</h3>
                    <p className="text-gray-700 mb-3">
                        Families assume helpers can rest when free, but helpers feel guilty, afraid, and unsure. A fixed, enforced break gives them dignity, predictability, permission to breathe, and a mental reset.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Dignity through uninterrupted rest.</li>
                        <li>Predictability that protects mental space.</li>
                        <li>Permission to breathe without fear of being lazy.</li>
                        <li>Fresh perspective and better attitude for the family.</li>
                        <li>Long-term retention and a stable, peaceful home.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 7: The Biggest Lessons</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Helpers leave because of exhaustion and silence, not work.</li>
                        <li>Families aren't wrong--they simply lack awareness.</li>
                        <li>Communication and clarity can save placements.</li>
                        <li>Structured breaks solve what salary alone cannot.</li>
                        <li>"Chhote Break, Bade Results" is a retention strategy every household should adopt.</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                        This case shows what EzyHelpers stands for: not just providing helpers, but protecting helper-family relationships. Small change, big results, long-term stability.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers Different</h3>
                    <p className="text-gray-700 mb-3">
                        Most maid services focus purely on placement. EzyHelpers believes in protecting the relationship through ongoing communication, proactive mediation, and clear guidelines.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Ongoing communication support keeps families and helpers aligned.</li>
                        <li>Proactive mediation resolves silent issues before they escalate.</li>
                        <li>Training for families and helpers reinforces respectful expectations.</li>
                        <li>Clear guidelines protect everyone's dignity.</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                        Our verified maids have higher retention because we secure their emotional safety, not just their skills.
                    </p>
                </section>
            </>
        )
    },
    'kaam-ka-clear-system-helper-bhaagne-ka-chance-kam': {
        preChallenge: (
            <>
                <section className="mb-10">
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 font-semibold">The Hidden Reason Helpers Leave</p>
                    <p className="text-gray-700">
                        Every household wants a reliable maid, yet helpers quit silently. Families chalk it up to attitude, while helpers blame overwork. The real issue? Unclear expectations.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 1: The House Where Maids Kept Running Away</h3>
                    <p className="text-gray-700 mb-3">
                        A young Bangalore couple changed four maids in six months. Each left suddenly with vague excuses like "family issues" or "I can't continue." On paper, everything looked perfect--neat 2BHK, no kids, no pets--but beneath the surface something pushed helpers away.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>The helpers' departures were silent; nothing concrete was shared.</li>
                        <li>Every day brought unexpected additions: deep cleaning, guest prep, dog feeding.</li>
                        <li>In a survey of 47 recent helpers who quit, only 3 left for better pay. The rest left because of uncertainty.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 2: The Helper's Version Nobody Heard</h3>
                    <p className="text-gray-700 mb-3">
                        The last maid who left finally admitted: "Madam ka kaam kabhi khatam hi nahi hota." The work itself wasn't abusive, but the lack of predictability left her mentally exhausted.
                    </p>
                    <p className="text-gray-700">
                        Helpers weren't lazy--they were confused. They left not because the house was big but because they didn't know what would be added next.
                    </p>
                </section>
            </>
        ),
        postResults: (
            <>
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 3: The Turning Point</h3>
                    <p className="text-gray-700 mb-3">
                        When the same helper joined another household, the process wasn't rushed. A proper clarity discussion was organized before hiring, covering daily work, occasional tasks, timing, behavior, and communication.
                    </p>
                    <p className="text-gray-700 italic">
                        "Aapne sab pehle hi bata diya. Ab tension nahi hai."
                    </p>
                    <p className="text-gray-700">
                        She knew exactly what to expect--no surprises, no hidden workload.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 4: Immediate Change</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Arrived on time every day.</li>
                        <li>Worked confidently with a known routine.</li>
                        <li>Stayed cheerful, communicated openly, and looked in control.</li>
                        <li>The same helper stayed for over one year.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 5: Helpers Fear Uncertainty</h3>
                    <p className="text-gray-700 mb-3">
                        Families blame workload, attitude, or pay. The real fear for helpers is sudden changes, unspoken expectations, and being judged for not guessing new tasks. A clarity discussion reduced turnover by 70%.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 6: Why EzyHelpers Works Differently</h3>
                    <p className="text-gray-700 mb-3">
                        We don't just send maids; we ensure both sides start on the same page. We introduce trial sessions, video interviews, structured task conversations, and three-way discussions.
                    </p>
                    <p className="text-gray-700">
                        Clear expectations build trust faster than high salaries or strict rules. When clarity exists, confidence grows and retention becomes automatic.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 7: The Family Who Finally Found Stability</h3>
                    <p className="text-gray-700 mb-3">
                        The family realized one honest conversation eliminated months of stress. They stopped adding surprise tasks, kept communication simple, respected boundaries, and understood daily work. The result:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>The maid stayed long-term.</li>
                        <li>The home became stable and peaceful.</li>
                        <li>Replacements, frustration, and silent exits disappeared.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 8: Before You Blame the Maid</h3>
                    <p className="text-gray-700 mb-3">
                        When helpers quit, the knee-jerk reaction is to blame them. The reality: work is perfectly managed on paper, but expectations are invisible. Helpers are expected to read minds and match standards that were never explained.
                    </p>
                    <p className="text-gray-700">
                        Replace confusion with clear communication and realistic expectations. That fixes what replacements never will.
                    </p>
                    <p className="text-gray-700 italic">
                        Helpers don't leave homes--they leave confusion. Give clarity and you get stability.
                    </p>
                </section>
            </>
        )
    },
    'salary-time-pe-loyalty-pukka': {
        preChallenge: (
            <>
                <section className="mb-10">
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 font-semibold">The Hidden Crisis: When Salary Has No Date</p>
                    <p className="text-gray-700">
                        Trust in domestic help is built on keeping promises--especially paying on time. A delayed salary cracks dignity, fuels anxiety, and often triggers a sudden exit. This story isn"t about a bad helper or employer, but about how structured professionalism rebuilt the relationship between Rani and the Verma family.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 1: The Monthly Question</h3>
                    <p className="text-gray-700 mb-3">
                        Every month around the 10th, Rani asked, "Ma'am, salary kab milegi?" Mrs. Verma"s answers varied--"this weekend," "next Tuesday," "let me check." Payments arrived between the 8th and 20th, so Rani couldn"t plan rent, tuition, or groceries. In September she requested a new house.
                    </p>
                    <p className="text-gray-700">
                        The family assumed everything was fine. For Rani, those few days meant anger from her landlord and late tuition payments.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 2: "I'm Not Disrespected… Just Uncertain"</h3>
                    <p className="text-gray-700 mb-3">
                        Rani told the support executive: "The work is fine. The family is nice. But I can"t live like this anymore." The unpredictability forced her to borrow ₹500-₹800 and buy groceries in smaller, costlier bundles.
                    </p>
                    <p className="text-gray-700 italic">
                        "I feel like a beggar in my own job."
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 3: "We Pay Her--So What's Wrong?"</h3>
                    <p className="text-gray-700 mb-3">
                        Mrs. Verma was shocked. They paid every month! When asked the exact date, she paused--sometimes early, sometimes mid-month. She found repeated asking annoying: "We"re going to pay anyway, right?"
                    </p>
                    <p className="text-gray-700">
                        Her flexibility cost Rani actual money. To the Vermas a few days didn"t matter; to Rani it meant real expenses and stress.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 4: Different Financial Worlds</h3>
                    <p className="text-gray-700 mb-3">
                        The Vermas had savings and reserves. Rani lived on ₹25,000 with zero backup. A three-day delay meant late rent, borrowed cash, and expensive groceries. The unpredictability didn"t just stress her--it cost her.
                    </p>
                </section>
            </>
        ),
        postResults: (
            <>
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 5: The Intervention</h3>
                    <p className="text-gray-700 mb-3">
                        EzyHelpers proposed a fixed paydate--the 5th of every month. Mrs. Verma worried about cash or Sundays; the support team suggested UPI, paying early if the 5th fell on a Sunday, or standing bank instructions.
                    </p>
                    <p className="text-gray-700">
                        "You know what feels formal? Asking for salary three times. You know what feels friendly? Being so reliable your helper never has to ask."
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 6: Transformation</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                            <p className="text-sm font-semibold text-primary-600 mb-3">For Rani</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>No more borrowing.</li>
                                <li>Saved ₹500 monthly.</li>
                                <li>Felt respected.</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-2xl border border-success-100 bg-success-50">
                            <p className="text-sm font-semibold text-success-600 mb-3">For the Vermas</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>No reminders or ATM runs.</li>
                                <li>Rani became cheerful and involved.</li>
                                <li>Relationship felt more respectful.</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-2xl border border-primary-100 bg-primary-50">
                            <p className="text-sm font-semibold text-primary-700 mb-3">For the Relationship</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Payday became a symbol of respect.</li>
                                <li>Trust flourished.</li>
                                <li>Harmony replaced tension.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 7: Measurable Impact</h3>
                    <p className="text-gray-700 mb-3">
                        Rani now plans her month from the 2nd. Mrs. Verma admitted she didn"t realize irregular payments created tension. Fixed paydays replaced low-grade guilt with peace.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 8: Small Systems Prevent Big Problems</h3>
                    <p className="text-gray-700 mb-3">
                        The Vermas weren"t bad employers and Rani wasn"t difficult--they lacked clarity. A fixed salary date solves what replacements never will.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 9: Platform Insights</h3>
                    <p className="text-gray-700 mb-3">
                        Only 34% of helpers know the exact date they"ll be paid. The remaining 66% live in uncertainty. Those with fixed dates stay 2.5× longer--they"re happier, more loyal, and more stable.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 10: What You Can Do Today</h3>
                    <p className="text-gray-700 mb-3">
                        Ask: "What date is your salary?" If the helper can"t answer confidently, pick a date (1st-5th), communicate it clearly, set a reminder, use UPI, and stick to it. Five minutes, zero cost, huge impact.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 11: How EzyHelpers Helps</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Listen deeply--treat transfer requests as symptoms.</li>
                        <li>Diagnose objectively--engage both parties to uncover friction.</li>
                        <li>Set up simple systems (like fixed paydays) to remove confusion.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Part 12: Ready for Stability?</h3>
                    <p className="text-gray-700 mb-3">
                        Good helpers leave when basics are missing. At EzyHelpers, we build respectful, long-term relationships. Visit us to find verified helpers and the systems that keep them loyal.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Pay Discipline Drives Loyalty</h3>
                    <p className="text-gray-700">
                        Two-thirds of helpers live with pay uncertainty. Those who know the exact date stay 2.5× longer. It"s not about paying more--it"s about paying predictably.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Simple Systems Rule</h3>
                    <p className="text-gray-700">
                        A fixed date takes five minutes to set up and removes weeks of low-grade anxiety. A reminder, instruction, or UPI transfer turns transactional relationships into respectful partnerships.
                    </p>
                </section>
            </>
        )
    },
    'small-celebrations-big-bonding': {
        preChallenge: (
            <>
                <section className="mb-10">
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 font-semibold">From Loyalty to Belonging</p>
                    <p className="text-gray-700">
                        Families assume loyalty comes from salary or rules, but in live-in care it's shaped by how the helper feels. This story shows how a Bangalore couple built a bond with their babysitter--not through perks, but through one thoughtful Diwali gesture.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">The Sharma Family & Kavitha</h3>
                    <p className="text-gray-700 mb-3">
                        The Sharmas were first-time parents with a 9-month-old and demanding corporate jobs. Kavitha, a 26-year-old from Assam, arrived calm, gentle, and perfect with the baby. But she stayed quiet, never spoke up, and kept to herself.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>She did everything right--feeding, playtimes, naps, hygiene.</li>
                        <li>She never initiated conversation or accepted new clothes.</li>
                        <li>She didn't mention her family or festivals, and sat apart during meals.</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                        Mrs. Sharma felt the emotional distance. "She takes care of the baby beautifully, but I don't think she feels comfortable here," she told her husband. He replied, "Let's give it time." Yet the gap remained.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Diwali Week Reality Check</h3>
                    <p className="text-gray-700 mb-3">
                        Diwali brought sweets, decorations, and new clothes. Kavitha, however, had nothing prepared--no sari, no diya, no celebration. When Mrs. Sharma asked if Kavitha was celebrating, she revealed her mother had passed away and she hadn't celebrated since.
                    </p>
                    <p className="text-gray-700">
                        That evening, Mrs. Sharma prepared a gift bag with a silk saree, barfi, and ₹1,000--not as a bonus, but as a gesture of care. She simply said, "You are part of this home."
                    </p>
                </section>
            </>
        ),
        postResults: (
            <>
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">The Diwali Gesture That Opened Her Heart</h3>
                    <p className="text-gray-700 mb-3">
                        Kavitha accepted the gift quietly. The next morning she decorated the room with marigold strings, rangoli, and left a note saying this felt like her first Diwali since her mother passed. Mrs. Sharma cried.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>The smile returned, not just politely but genuinely.</li>
                        <li>She called the baby "our baby" and began contributing to the home.</li>
                        <li>She ate with the family and initiated conversations.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">A Loyalty Moment That Means Everything</h3>
                    <p className="text-gray-700 mb-3">
                        When a neighbor offered Kavitha higher pay, she declined. "Money comes and goes. Respect is what makes me stay," she told Mrs. Sharma. The couple realized the bond they had built--trust, belonging, and loyalty--was priceless.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">EzyHelpers Insight: Small Celebrations Build Big Bonds</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Helpers rarely receive personal acknowledgement; a single heartfelt gesture stands out.</li>
                        <li>Emotional wounds run deep--respect and belonging heal faster than perks.</li>
                        <li>Feeling "seen" creates loyalty stronger than salary hikes.</li>
                        <li>Human connection, especially during festivals, is the most powerful retention tool.</li>
                        <li>Small consistent gestures create long-term bonds.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Conclusion: Thoughtfulness Wins</h3>
                    <p className="text-gray-700 mb-3">
                        The story isn't about sweets or money--it's about thinking, human connection, and belonging. A ₹1,000 gesture opened the door for emotional security, a happier home, and a babysitter who now stands by the family.
                    </p>
                    <p className="text-gray-700">
                        At EzyHelpers we help families act on this lesson every day: loyalty is earned when helpers feel valued, respected, and included.
                    </p>
                </section>
            </>
        )
    }
};

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const caseStudy = getCaseStudy(params.slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found | EzyHelpers',
        };
    }

    return {
        title: caseStudy.seoTitle || `${caseStudy.title} | EzyHelpers Case Study`,
        description: caseStudy.seoDescription || caseStudy.summary,
        openGraph: {
            title: caseStudy.seoTitle || caseStudy.title,
            description: caseStudy.summary,
            type: 'article',
            url: `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`,
            publishedTime: caseStudy.publishedAt,
            modifiedTime: caseStudy.updatedAt,
        },
        twitter: {
            card: 'summary_large_image',
            title: caseStudy.seoTitle || caseStudy.title,
            description: caseStudy.summary,
        },
        alternates: {
            canonical: `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`,
        }
    };
}

export default function CaseStudyDetailPage({ params }: Props) {
    const caseStudy = getCaseStudy(params.slug);

    if (!caseStudy) {
        notFound();
    }

    const extraSections = CASE_STUDY_EXTRA_CONTENT[caseStudy.slug];

    const related = getRelatedCaseStudies(params.slug, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": caseStudy.title,
        "description": caseStudy.summary,
        "author": {
            "@type": "Organization",
            "name": "EzyHelpers"
        },
        "publisher": {
            "@type": "Organization",
            "name": "EzyHelpers",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ezyhelpers.com/ezyhelper_logo_new.png"
            }
        },
        "datePublished": caseStudy.publishedAt || "2023-01-01",
        "dateModified": caseStudy.updatedAt || caseStudy.publishedAt || "2023-01-01",
        "mainEntityOfPage": `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`,
        "keywords": [...caseStudy.serviceTypes, ...caseStudy.segmentTags].join(", ")
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ezyhelpers.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Case Studies",
                "item": "https://www.ezyhelpers.com/case-studies"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": caseStudy.shortTitle || caseStudy.title,
                "item": `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`
            }
        ]
    };

    return (
        <>
            <Navbar />
            <MainContent>
                {/* Schema Scripts */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />

                <article>
                    {/* Header / Hero */}
                    <header className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-16 pb-24 md:pt-24 md:pb-32 px-4 relative overflow-hidden">
                        {/* Abstract circular shapes for visual interest */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                        <div className="container mx-auto max-w-5xl relative z-10">
                            <Link href="/case-studies" className="inline-flex items-center text-primary-100 hover:text-white mb-8 transition-colors text-sm font-medium">
                                <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Case Studies
                            </Link>

                            <div className="flex flex-wrap gap-3 mb-6">
                                {caseStudy.serviceTypes.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
                                    {caseStudy.city}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-8">
                                {caseStudy.title}
                            </h1>

                            {/* Hero Metrics Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
                                <div>
                                    <div className="text-primary-200 text-sm uppercase tracking-wider font-semibold mb-1">{caseStudy.heroMetricLabel || 'Outcome'}</div>
                                    <div className="text-2xl md:text-3xl font-bold">{caseStudy.heroMetricValue}</div>
                                </div>
                                {caseStudy.metrics?.map(m => (
                                    <div key={m.label}>
                                        <div className="text-primary-200 text-sm uppercase tracking-wider font-semibold mb-1">{m.label}</div>
                                        <div className="text-2xl md:text-3xl font-bold">{m.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </header>

                    {/* At A Glance & Content */}
                    <div className="container mx-auto px-4 max-w-5xl -mt-16 relative z-20 pb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">At a Glance</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Client</span>
                                    <span className="font-semibold text-gray-900">{caseStudy.clientType} {caseStudy.clientName ? `- ${caseStudy.clientName}` : ''}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Location</span>
                                    <span className="font-semibold text-gray-900">{caseStudy.city}, {caseStudy.state}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Service</span>
                                    <span className="font-semibold text-gray-900">{caseStudy.serviceTypes[0]}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Results</span>
                                    <span className="font-semibold text-success-600">Verified & Placed</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-12">
                            {/* Main Content Column */}
                            <div className="md:col-span-8 prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">

                                {/* Additional Context (slug-specific stories) */}
                                {extraSections?.preChallenge}

                                {/* Challenge */}
                                <section className="mb-12">
                                    <h2>The Challenge</h2>
                                    {caseStudy.context && <p className="italic text-gray-500 mb-4">{caseStudy.context}</p>}
                                    <p>{caseStudy.challenge}</p>
                                </section>

                                {/* Approach */}
                                <section className="mb-12 bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 not-prose">
                                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">The EzyHelpers Approach</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.approach}</p>
                                    <div className="grid gap-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-800">In-depth requirement analysis</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-800">Strict background verification</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-800">Personalized matching & trial</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Solution */}
                                <section className="mb-12">
                                    <h2>Solution Implemented</h2>
                                    <p>{caseStudy.solution}</p>
                                </section>

                                {/* Results */}
                                <section className="mb-12">
                                    <h2>Key Results & Outcomes</h2>
                                    <p>{caseStudy.results}</p>
                                    {caseStudy.keyOutcomes && (
                                        <div className="grid gap-4 mt-6">
                                            {caseStudy.keyOutcomes.map((outcome, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-4 bg-success-50 rounded-lg">
                                                    <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center text-success-600 font-bold shrink-0">
                                                        {idx + 1}
                                                    </div>
                                                    <p className="font-medium text-gray-900 m-0">{outcome}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </section>

                                {/* Additional Insight (slug-specific stories) */}
                                {extraSections?.postResults}
                            </div>

                            {/* Sidebar Column */}
                            <div className="md:col-span-4 space-y-8">
                                {/* Testimonial Card */}
                                {caseStudy.testimonial && (
                                    <div className="bg-secondary-50 p-8 rounded-2xl relative">
                                        <div className="text-4xl text-primary-300 absolute top-4 left-6">"</div>
                                        <p className="text-gray-700 italic relative z-10 mb-6 font-medium">
                                            {caseStudy.testimonial.quote}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold">
                                                {caseStudy.testimonial.name ? caseStudy.testimonial.name[0] : 'C'}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{caseStudy.testimonial.name || 'Happy Customer'}</div>
                                                <div className="text-xs text-gray-500">{caseStudy.testimonial.roleOrRelation}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Mini CTA */}
                                <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
                                    <h4 className="font-bold text-lg mb-2">Need a similar helper?</h4>
                                    <p className="text-gray-400 text-sm mb-6">We can help you find verified support in 24 hours.</p>
                                    <a href="/hire-helper" className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Case Studies */}
                {related.length > 0 && (
                    <section className="bg-gray-50 py-16 border-t border-gray-200">
                        <div className="container mx-auto px-4 max-w-7xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center font-display">Similar Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map(cs => (
                                    <CaseStudyCard key={cs.slug} caseStudy={cs} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Main CTA */}
                <CTASection />
                <Footer />
            </MainContent>
        </>
    );
}
