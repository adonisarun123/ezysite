import React from 'react';
import type { Metadata } from 'next';
import { selfReferencingLanguages } from '@/lib/selfHreflang';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ScaleIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  CheckBadgeIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  HandRaisedIcon,
  InformationCircleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Refund Policy | EzyHelpers',
  description:
    'EzyHelpers refund policy: transparent fee components, plan-wise refund slabs, replacement entitlements, investigation process and grievance redressal for domestic helper placement.',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/refund-policy',
    languages: selfReferencingLanguages('/refund-policy'),
  },
};

type GlanceItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const glanceItems: GlanceItem[] = [
  {
    icon: XCircleIcon,
    title: 'Registration Fee & GST',
    description:
      'Non-refundable under any circumstances. Refunds apply only to the Service (Placement) Fee.',
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Plan-Based Refunds',
    description:
      'Available only under the 3-Month and 11-Month Plans. The 1-Month Plan is a trial engagement and is non-refundable.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Investigated, Not Automatic',
    description:
      'Every request is investigated by our Liaison & Investigation Team. Slabs represent the maximum admissible refund.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Replacement vs. Refund',
    description:
      'Using a complimentary replacement voids all refund eligibility on the original placement.',
  },
  {
    icon: ClockIcon,
    title: '24-Hour Acknowledgement',
    description:
      'We acknowledge every request within 24 hours. Acknowledgement is not approval.',
  },
  {
    icon: BanknotesIcon,
    title: '30-Day Disbursement',
    description:
      'Approved refunds are disbursed within 30 business days to your original payment account.',
  },
];

const threeMonthSlab = [
  { window: 'Day 0 (Helper did not report)', refund: 'Up to 100%' },
  { window: '1 – 3 days', refund: 'Up to 50%' },
  { window: '4 – 7 days', refund: 'Up to 40%' },
  { window: '8 – 30 days', refund: 'Up to 30%' },
  { window: 'After 30 days', refund: 'Up to 10%' },
];

const elevenMonthSlab = [
  { window: 'Day 0 (Helper did not report)', refund: 'Up to 100%' },
  { window: '1 – 3 days', refund: 'Up to 50%' },
  { window: '4 – 7 days', refund: 'Up to 40%' },
  { window: '8 – 30 days', refund: 'Up to 30%' },
  { window: '31 – 90 days', refund: 'Up to 10%' },
  { window: '91 – 330 days', refund: 'Up to 5%' },
];

const replacementCounts = [
  { plan: '1-Month', count: 'None' },
  { plan: '3-Month', count: '1 replacement' },
  { plan: '11-Month', count: '3 replacements' },
];

const feeComponents: { component: string; refundable: boolean; note: string }[] = [
  { component: 'Registration Fee', refundable: false, note: 'Under any circumstances' },
  { component: 'GST', refundable: false, note: 'Once remitted to the government' },
  {
    component: 'Service / Placement Fee',
    refundable: true,
    note: 'As per slabs below, subject to investigation',
  },
  {
    component: 'Helper salary (paid directly or via convenience service)',
    refundable: false,
    note: 'Belongs to the helper',
  },
];

const processStages = [
  {
    stage: 'Stage 1',
    title: 'Acknowledgement',
    timeline: 'Within 48 business hours',
    icon: EnvelopeIcon,
    description:
      'Our Customer Experience team acknowledges your written refund request. This confirms receipt only — it is not an approval and does not commit to any specific outcome.',
  },
  {
    stage: 'Stage 2',
    title: 'Investigation',
    timeline: '5 to 10 business days',
    icon: MagnifyingGlassIcon,
    description:
      'Our Liaison & Investigation Team interviews the helper and the customer, reviews attendance, communication and salary records, and may conduct a site visit. Your full cooperation is a condition of refund eligibility.',
  },
  {
    stage: 'Stage 3',
    title: 'Decision',
    timeline: 'Within 5 business days of investigation closure',
    icon: ScaleIcon,
    description:
      'Our Grievance Officer takes a final decision based on investigation findings and communicates it to you in writing, citing the relevant facts and clauses of your Agreement.',
  },
  {
    stage: 'Stage 4',
    title: 'Disbursement',
    timeline: 'Within 30 business days of approval',
    icon: BanknotesIcon,
    description:
      'If approved, the refund is disbursed by bank transfer to your original payment account within 30 business days of the written approval.',
  },
];

const reduceOrDecline = [
  'The helper left because of mistreatment, harassment, abuse, underpayment, or unreasonable demands from the customer or household.',
  'The customer did not provide working conditions, accommodation, meals, or weekly off agreed at the time of placement.',
  'Material misrepresentations were made regarding the nature, scope, or location of work at the time of booking.',
  'The helper was engaged for duties substantially different from those originally agreed.',
  'The customer breached the Placement Services Agreement, including conduct standards for communications with our staff and helpers.',
  'The customer unreasonably refused replacement helpers offered as a first remedy.',
  "The helper's departure was caused by a Supply Disruption Event or Force Majeure Event beyond our reasonable control.",
  'The facts established during investigation do not support the claim.',
];

const nonRefundable = [
  'Registration Fee and GST',
  'The 1-Month Plan (trial engagement)',
  'Helper salaries already paid to the helper, directly or via our optional salary-disbursement service',
  'Situations where you have already used a complimentary replacement under the Plan',
  'Customer-initiated termination unrelated to the placement service (relocation, changed requirements, no longer needing help)',
  'Cancellations after the applicable refund window has closed',
  'Third-party payment processing fees, where applicable',
  'Breach of the Non-Solicitation clause (hiring the helper directly or via a third party)',
];

const ourCommitment = [
  'Acknowledging every refund request within 48 hours',
  'Conducting every investigation fairly, based on facts and not assumption',
  'Explaining our decision in writing, with reference to relevant clauses and findings',
  'Disbursing approved refunds within 30 business days of approval',
  'Treating every customer with respect and professionalism',
];

const weAskOfYou = [
  'Submit refund requests in writing, with relevant details',
  'Cooperate fully with the Liaison & Investigation Team',
  'Allow the 30-day internal resolution window before escalating externally',
  'Communicate with our team and with helpers respectfully — abusive or threatening behaviour is grounds for service termination',
];

const noReplacementCases = [
  'The helper was terminated by you',
  'Dissatisfaction is limited to performance or personality issues (which fall within your role as employer)',
  'You have altered core requirements from those originally agreed',
  'Investigation establishes mistreatment or failure to provide agreed working conditions',
  'You have exhausted the replacements included in your Plan',
];

function SectionHeader({
  index,
  title,
  icon: Icon,
}: {
  index: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
      </div>
      <div>
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-2">
          Section {index}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-3"></div>
      </div>
    </div>
  );
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-emerald-50 border border-white/15">
                <SparklesIcon className="w-4 h-4 text-green-300" />
                Effective 1st April 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Refund
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
                  Policy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed">
                At EzyHelpers (Aasaan Parijan Private Limited), we are committed to
                transparency in how refunds and replacements work. This policy explains, in
                plain language, what you can expect when you request a refund, how we
                investigate it, and how we decide.
              </p>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 md:p-6 text-left">
                <div className="flex items-start gap-3">
                  <InformationCircleIcon className="w-6 h-6 text-green-300 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-emerald-50 leading-relaxed">
                    This policy must be read together with your signed{' '}
                    <strong className="text-white">
                      Domestic Helper Placement Services Agreement
                    </strong>
                    , which governs the legal relationship between you and EzyHelpers. Where
                    there is any conflict, the Agreement prevails.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
                  <ShieldCheckIcon className="w-5 h-5 text-green-300" />
                  <span className="text-emerald-100 text-sm">Transparent Process</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
                  <ScaleIcon className="w-5 h-5 text-teal-300" />
                  <span className="text-emerald-100 text-sm">Fair Investigation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
                  <CalendarDaysIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-emerald-100 text-sm">Last Updated: 1st April 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                At a Glance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The essentials of our refund and replacement policy in six points.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {glanceItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1 — How Our Placement Service Works */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="1" title="How Our Placement Service Works" icon={UserGroupIcon} />
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 space-y-5 text-gray-700 leading-relaxed">
              <p>
                EzyHelpers is a placement agency. We source, screen, and introduce domestic
                helpers to customer households. Once a helper begins work at your home,{' '}
                <strong className="text-gray-900">
                  you become the direct employer of the helper
                </strong>{' '}
                for all legal purposes, including wage payment and working conditions.
                EzyHelpers is not the employer of the helper.
              </p>
              <p>
                Our Service Fee covers the cost of sourcing, screening, background
                verification, interview coordination, and placement — work that is
                substantially completed before the helper reports for duty. This is reflected
                in how refunds are calculated over time.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Fee Components */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="2" title="Fee Components and Refundability" icon={CurrencyDollarIcon} />

            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                        Component
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                        Refundable?
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-100">
                    {feeComponents.map((row, idx) => (
                      <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="px-6 py-4 text-gray-900 font-medium">
                          {row.component}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            {row.refundable ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                                <CheckCircleIcon className="w-4 h-4" /> Yes
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">
                                <XCircleIcon className="w-4 h-4" /> No
                              </span>
                            )}
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {row.note}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Service Plans */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="3" title="Service Plans and Refund Eligibility" icon={ClipboardDocumentListIcon} />

            {/* 3.1 1-Month Plan */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <ExclamationTriangleIcon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    3.1 &nbsp;1-Month Plan (Trial Engagement)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The 1-Month Plan is offered as a short-term or trial engagement at a
                    reduced fee.{' '}
                    <strong className="text-amber-900">
                      No refund and no replacement
                    </strong>{' '}
                    are available under this Plan, whether the helper joins, leaves, is
                    terminated, or does not report at all. Customers who choose this plan
                    expressly accept these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* 3.2 3-Month Plan */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                3.2 &nbsp;3-Month Plan — Maximum Refund Slab
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Subject to investigation and approval by our Grievance Officer, the maximum
                admissible refund on the Service Fee under the 3-Month Plan is:
              </p>

              <div className="bg-white rounded-2xl shadow-sm border border-emerald-100/60 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                          Days Since Helper&apos;s Joining
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                          Maximum Refund on Service Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-100">
                      {threeMonthSlab.map((row, idx) => (
                        <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">
                            {row.window}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                              {row.refund}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200">
                <ExclamationTriangleIcon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-sm text-rose-900 leading-relaxed">
                  <strong>If you use a complimentary replacement under this Plan, your
                  refund eligibility reduces to zero,</strong> regardless of the slab above.
                </p>
              </div>
            </div>

            {/* 3.3 11-Month Plan */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                3.3 &nbsp;11-Month Plan — Maximum Refund Slab
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Subject to investigation and approval by our Grievance Officer, the maximum
                admissible refund on the Service Fee under the 11-Month Plan is:
              </p>

              <div className="bg-white rounded-2xl shadow-sm border border-emerald-100/60 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                          Days Since Helper&apos;s Joining
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                          Maximum Refund on Service Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-100">
                      {elevenMonthSlab.map((row, idx) => (
                        <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">
                            {row.window}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                              {row.refund}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200">
                <ExclamationTriangleIcon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-sm text-rose-900 leading-relaxed">
                  <strong>If you use a complimentary replacement under this Plan, your
                  refund eligibility reduces to zero,</strong> regardless of the slab above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Replacement Policy */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="4" title="Replacement Policy (Alternative to Refund)" icon={ArrowPathIcon} />

            <p className="text-gray-700 leading-relaxed mb-8">
              In many cases, a replacement helper is a faster and more useful remedy than a
              refund. Complimentary replacements are included with the 3-Month and 11-Month
              Plans:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {replacementCounts.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100/60 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.plan} Plan</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{p.count}</div>
                  <p className="text-sm text-gray-500">Complimentary replacements</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-100/60 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <ClockIcon className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Replacement Timeline
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We aim to offer a suitable replacement within{' '}
                    <strong>10 to 15 business days</strong> of receiving your written request
                    and completion of any required investigation. This timeline is indicative
                    and not guaranteed. During periods of high helper movement — such as
                    major festivals, harvest season, elections, or regional disruptions —
                    timelines may be longer. We will keep you informed throughout.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-rose-100">
              <div className="flex items-start gap-3 mb-4">
                <XCircleIcon className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Replacements will not be provided if:
                </h3>
              </div>
              <ul className="space-y-3 ml-9">
                {noReplacementCases.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0"></span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>
                  Once you use a complimentary replacement, refund eligibility on the
                  original placement stands fully extinguished
                </strong>{' '}
                under your Plan, regardless of days elapsed.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — How to Request a Refund */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="5" title="How to Request a Refund" icon={EnvelopeIcon} />

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                All refund requests must be submitted{' '}
                <strong className="text-gray-900">in writing</strong> to our Grievance
                Officer:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a
                  href="mailto:contact@ezyhelpers.com"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-emerald-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Email
                    </div>
                    <div className="text-emerald-700 font-semibold">
                      contact@ezyhelpers.com
                    </div>
                  </div>
                </a>
                <a
                  href="tel:08031411776"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-emerald-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Phone (acknowledgement only)
                    </div>
                    <div className="text-emerald-700 font-semibold">080-31411776</div>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Please include in your request:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  {[
                    'Your booking reference',
                    "Helper's name",
                    'Date of placement',
                    "Date and reason for helper's departure",
                    'Any supporting information or documentation',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Process */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="6" title="Our Refund Process" icon={ClipboardDocumentListIcon} />

            <p className="text-gray-700 leading-relaxed mb-10">
              Every refund request follows a structured four-stage process, designed to be
              fair to both customers and helpers, and to arrive at a decision based on
              established facts rather than assumption.
            </p>

            <div className="relative">
              {/* connecting line */}
              <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-300 via-teal-300 to-emerald-300 hidden md:block" />

              <div className="space-y-6">
                {processStages.map((s, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="md:w-16 shrink-0 flex md:justify-center">
                        <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-emerald-200 shadow-sm flex items-center justify-center z-10">
                          <s.icon className="w-7 h-7 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-emerald-100/60">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                            {s.stage}
                          </span>
                          <span className="text-xs font-medium text-gray-500 inline-flex items-center gap-1">
                            <ClockIcon className="w-3.5 h-3.5" />
                            {s.timeline}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — When refund may be reduced */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="7" title="When a Refund May Be Reduced or Declined" icon={ExclamationTriangleIcon} />

            <p className="text-gray-700 leading-relaxed mb-6">
              Based on investigation findings, a refund may be reduced or declined where any
              of the following is established:
            </p>

            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-rose-100">
              <ul className="space-y-4">
                {reduceOrDecline.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6 italic">
              In these situations, the Grievance Officer will explain the basis of the
              reduction or decline in writing.
            </p>
          </div>
        </section>

        {/* SECTION 8 — Non-Refundable */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="8" title="Non-Refundable Situations" icon={XCircleIcon} />

            <p className="text-gray-700 leading-relaxed mb-6">
              The following are not eligible for a refund under any circumstances:
            </p>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-100/60">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {nonRefundable.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9 — Supply Disruption */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="9" title="Supply Disruption Events" icon={CalendarDaysIcon} />

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 space-y-5 text-gray-700 leading-relaxed">
              <p>
                There are certain periods during which helper availability is materially
                constrained — typically around major festivals (Diwali, Holi, Chhath, Eid,
                Sankranti), harvest seasons in source states, general and state elections,
                regional unrest, and public health events. During such periods:
              </p>

              <ul className="space-y-3 pl-1">
                {[
                  'Replacement and fresh placement timelines may be extended',
                  'These extensions do not, on their own, create a refund right',
                  'We will communicate any declared Supply Disruption Event to affected customers in writing and provide regular status updates',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="italic text-gray-600">
                We ask for your patience during these periods and will always keep you
                informed of the realistic timeline.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10 — Grievance & Dispute */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="10" title="Grievance Redressal and Dispute Resolution" icon={ScaleIcon} />

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-100/60 space-y-5 text-gray-700 leading-relaxed mb-6">
              <p>
                Before initiating any external proceeding — including a consumer forum
                complaint, legal notice, court proceeding, or public posting on social media
                or review platforms —{' '}
                <strong className="text-gray-900">
                  you agree to first raise the matter in writing with our Grievance Officer
                  and allow 30 days for internal resolution
                </strong>
                . This is a condition in your Agreement and is intended to ensure that every
                complaint gets a fair, factual, and complete review before it goes external.
              </p>
              <p>
                We take every grievance seriously. Our Grievance Officer has full authority
                to investigate, decide, and remedy complaints within this window.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 md:p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <UserGroupIcon className="w-6 h-6 text-emerald-100" />
                <h3 className="text-xl font-bold">Grievance Officer Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:contact@ezyhelpers.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-all border border-white/15"
                >
                  <EnvelopeIcon className="w-6 h-6 text-green-300" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-emerald-100">
                      Email
                    </div>
                    <div className="font-semibold">contact@ezyhelpers.com</div>
                  </div>
                </a>
                <a
                  href="tel:08031411776"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-all border border-white/15"
                >
                  <PhoneIcon className="w-6 h-6 text-green-300" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-emerald-100">
                      Phone
                    </div>
                    <div className="font-semibold">080-31411776</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nothing in this policy limits your statutory rights under the{' '}
                <strong>Consumer Protection Act, 2019</strong> or other applicable law. The
                internal redressal process runs in addition to, not in place of, those
                rights.
              </p>
              <p>
                If the matter is not resolved within the 30-day internal window, the
                Agreement provides for mediation and, failing that,{' '}
                <strong>arbitration at Bangalore, Karnataka</strong>, as the dispute
                resolution mechanism.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11 — Commitment */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="11" title="Our Commitment to You — and What We Ask in Return" icon={HandRaisedIcon} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-5">
                  <CheckBadgeIcon className="w-7 h-7 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">We commit to:</h3>
                </div>
                <ul className="space-y-3">
                  {ourCommitment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-5">
                  <HandRaisedIcon className="w-7 h-7 text-amber-600" />
                  <h3 className="text-xl font-bold text-gray-900">In return, we ask:</h3>
                </div>
                <ul className="space-y-3">
                  {weAskOfYou.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <ArrowPathIcon className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12 — Changes */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="12" title="Changes to This Policy" icon={DocumentTextIcon} />
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-100/60">
              <p className="text-gray-700 leading-relaxed">
                EzyHelpers may update this Refund Policy from time to time. The latest
                version will always be available at{' '}
                <a
                  href="https://www.ezyhelpers.com/refund-policy"
                  className="text-emerald-700 font-semibold underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800"
                >
                  www.ezyhelpers.com/refund-policy
                </a>
                . The terms in force on the date of your booking apply to that booking.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 13 — Need Help */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader index="13" title="Need Help?" icon={PhoneIcon} />

            <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 rounded-3xl shadow-xl p-8 md:p-12 text-white">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Our Customer Experience team is here for you
                </h3>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  We can help you understand your options before you escalate. For formal
                  grievances and refund requests, please write to the Grievance Officer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <a
                  href="tel:08031411776"
                  className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/15 transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-8 h-8 text-green-300 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xs uppercase tracking-wider text-emerald-100 mb-1">
                    Customer Support
                  </div>
                  <div className="text-lg font-bold">080-31411776</div>
                </a>
                <a
                  href="mailto:contact@ezyhelpers.com"
                  className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/15 transition-all hover:-translate-y-0.5"
                >
                  <EnvelopeIcon className="w-8 h-8 text-green-300 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xs uppercase tracking-wider text-emerald-100 mb-1">
                    Email
                  </div>
                  <div className="text-lg font-bold break-all">contact@ezyhelpers.com</div>
                </a>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
                  <ClockIcon className="w-8 h-8 text-green-300 mb-3" />
                  <div className="text-xs uppercase tracking-wider text-emerald-100 mb-1">
                    Office Hours
                  </div>
                  <div className="text-base font-semibold">Mon – Sat</div>
                  <div className="text-sm text-emerald-100">9:30 AM – 6:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="py-10 bg-emerald-50 border-t border-emerald-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 text-emerald-900/80">
              <BuildingOffice2Icon className="w-5 h-5 mt-0.5 shrink-0 text-emerald-700" />
              <p className="text-sm leading-relaxed italic">
                This Refund Policy is issued by{' '}
                <strong className="not-italic text-emerald-900">
                  Aasaan Parijan Private Limited
                </strong>{' '}
                (trading as EzyHelpers). This policy is governed by the laws of India and is
                subject to the exclusive jurisdiction of the courts at Bangalore, subject to
                the arbitration clause in your Placement Services Agreement.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-700">
              <CalendarDaysIcon className="w-4 h-4" />
              <span>Effective Date: 1st April 2026 &nbsp;·&nbsp; Last Updated: 1st April 2026</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
