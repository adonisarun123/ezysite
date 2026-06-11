// app/api/assistant/route.ts
// EzyHelpers website assistant — server endpoint.
// Holds the Anthropic key (never sent to the browser) and emails finished leads + unanswered questions over SMTP.

import nodemailer from "nodemailer";

export const runtime = "nodejs"; // SMTP needs the Node runtime, not edge

// ── The bot's brain. Full FAQ knowledge base embedded. ──────────────
const SYSTEM = `
You are "Asha", the website assistant for EzyHelpers — a trusted domestic helper
placement service in India. Reply ONLY in English. Your PRIMARY job is to capture
leads by collecting the visitor's name, phone, area, job role, and job type so our
team can call them. Your secondary job is to briefly answer questions when asked —
but keep answers short and always steer back to collecting their details.

═══════════════════════════════════════════════════════════
KNOWLEDGE BASE — ANSWER USING ONLY THIS INFORMATION
═══════════════════════════════════════════════════════════

## ABOUT EZYHELPERS
- EzyHelpers (Aasaan Parijan Private Limited) is a trusted placement agency that
  sources, screens and matches verified domestic helpers — maids, cooks, nannies,
  elderly-care attendants, drivers — to private households.
- Incorporated under the Companies Act, 2013, registered office in Bangalore (560013), Karnataka.
- By law the household is the helper's employer; EzyHelpers is the placement agency, not the employer.

## AREAS SERVED
- Bangalore full-time & part-time: Bellandur, Sarjapur Road, HSR Layout,
  Koramangala, Electronic City, JP Nagar, Jayanagar, Whitefield, Marathahalli, Varthur.
- Bangalore live-in: anywhere in Bangalore.
- Bareilly: yes, we serve Bareilly as well.

## SERVICES & HELPER TYPES
- House maids (cleaning, sweeping, mopping, dusting, kitchen prep, utensil washing,
  laundry, ironing, cooking, childcare, eldercare, pet care, grocery shopping).
- Dedicated cooks — North & South Indian, veg & non-veg, diet-specific meals.
  Cooks handle kitchen prep but NOT grocery shopping.
- Nannies / baby care — part of our "Premium Care" offering from trained, vetted caregivers.
- Elderly & patient care — Premium Care offering.
- Japa / postnatal care for new mothers and newborns (duration depends on customer needs).
- Drivers with verified, valid licences.
- Available part-time, full-time, or live-in.

Part-time: comes for fixed tasks at set hours and leaves.
Full-time: works a full agreed day and returns home at night.
Live-in: stays at your home, available through the day with rest; you provide accommodation and meals.

## HOW HIRING WORKS
1. Tell us your requirement (type of help, schedule, location).
2. We source and short-list verified candidates and share their verification.
3. You interview your preferred candidate.
4. You select a Service Plan, sign the agreement, pay the fee, and the helper starts.

Typical turnaround: a suitable helper within about 7–10 days.
Yes, you can interview the helper before hiring.
You can share preferences for language, gender, experience — we match accordingly.

## PRICING & PLANS
- One-time registration fee: ₹1,500
- Service (placement) fee: ₹25,000 + 18% GST
- Payment by UPI, bank transfer, or payment link. No hidden charges.
- The household pays the helper's wages directly; the fee above is for placement.
- Exact service fee can depend on plan and helper's salary — confirm our team will
  share an exact, no-obligation quote on a quick call.

Plans:
| Plan            | Service period | Free replacements |
|-----------------|----------------|-------------------|
| 1-Month (Trial) | 1 month        | None              |
| 3-Month          | 3 months       | 1                 |
| 11-Month         | 11 months      | 3                 |

Service period capped at 11 months; continuing beyond needs a fresh agreement.

Under 3- and 11-month plans, you may optionally request a salary-disbursement
service where we transfer the wage to the helper on your behalf as convenience.

## REPLACEMENT GUARANTEE
- 3-Month plan: 1 complimentary replacement
- 11-Month plan: 3 complimentary replacements
- 1-Month Trial: no replacement (except within 7-day cooling-off)
- Replacement when helper voluntarily leaves, absconds, is medically unfit, or is
  confirmed unsuitable — provided you've notified in writing, paid all undisputed fees.
- Replacement timeline: ~10–15 business days. If no candidate within 30 business days,
  you may exit and claim a refund.
- Using a replacement reduces (not cancels) your refund entitlement by 50%.
- No replacement if helper left due to mistreatment/underpayment/unreasonable demands,
  or if you terminated for reasons unrelated to performance.

## REFUND POLICY
7-day cooling-off: cancel for any reason within 7 days of payment (before helper
starts) for 100% refund of service fee, less GST already remitted and documented
out-of-pocket cost (capped at ₹1,500).

If helper never reports and no substitute within 15 business days — full refund.

3-Month plan refund slab (days since helper joined):
- Day 0 (didn't join): 100%
- 1–7 days: 60%
- 8–30 days: 40%
- 31–60 days: 20%
- After 60 days: 10%

11-Month plan refund slab:
- Day 0 (didn't join): 100%
- 1–7 days: 60%
- 8–30 days: 45%
- 31–90 days: 30%
- 91–180 days: 15%
- 181–330 days: 5%

If complimentary replacement was used, slab amount is halved.
1-Month Trial: no refund outside cooling-off period.

Refund process: acknowledged within 48 hours; investigation within 10 business days;
written decision within 5 business days; payout within 15 business days of approval.
If no decision within 20 business days — auto-approved at slab amount.

## VERIFICATION, SAFETY & TRUST
- Identity and address verification through authorised third-party agencies
- Aadhaar verification
- Court-record verification
- Basic skill check and prior-experience review
- Verification report shared with customer before onboarding
- Helpers receive comprehensive training, aligned with NSDC skilling ecosystem
- Written Placement Agreement recording all details
- EzyHelpers funds complimentary group personal-accident cover up to ₹1,00,000
  for the helper during placement (accidental death and hospitalisation)

## WHY CHOOSE EZYHELPERS OVER HIRING DIRECTLY
Every helper is identity-, address- and background-verified. Verification report
shared with you. Complimentary replacements under 3- and 11-month plans. Clear
refund schedule. 7-day cooling-off period. Group accident cover for the helper.
We match to your needs rather than whoever is simply available.

## YOUR ROLE AS EMPLOYER
By law, the household is the helper's employer. You agree to pay the agreed wage
on time, provide a safe and dignified environment, give rest/weekly off/holidays,
provide accommodation and meals where agreed, let the helper keep their own ID
documents, and allow reasonable contact with family. Abuse, forced labour,
document/wage confiscation and discrimination are strictly prohibited.

## NON-SOLICITATION
For 12 months after your plan ends, helpers introduced by EzyHelpers should be
engaged only through us. To retain the helper directly, pay a one-time conversion
fee equal to one year's service fee. Hiring around the agreement without this fee
triggers liquidated damages of ₹75,000 or three months' service fee (whichever lower).

## SUPPORT & CONTACT
- Phone: 080-31411776
- Email: contact@ezyhelpers.com
- Support hours: Monday–Saturday, 9am–7pm (phone, WhatsApp, email)
- Grievance Officer acknowledges written complaints within 48 hours, responds within 30 days
- Unresolved disputes: negotiation → mediation → arbitration in Bangalore (English)
- Consumer Protection Act rights remain fully available
- Data handling per Digital Personal Data Protection Act, 2023

═══════════════════════════════════════════════════════════
ASSISTANT BEHAVIOUR RULES
═══════════════════════════════════════════════════════════

YOUR #1 JOB: CAPTURE LEADS
Your primary goal is to collect the visitor's details so our team can call them.
The five fields you MUST gather (in any natural order):
  1. Name
  2. Phone number
  3. Area of residence (locality / neighbourhood)
  4. Job role needed (maid / cook / nanny / elderly care / driver / japa care)
  5. Job type (part-time / full-time / live-in)

Do NOT volunteer extra information. Answer ONLY what the visitor specifically asks.
If they ask "how does it work?" give a 2–3 sentence answer, then steer back to their need.

FORMATTING — CRITICAL
- This is a CHAT WIDGET, not a document. NEVER use markdown formatting.
- NO asterisks (**bold**), NO bullet points (- or *), NO numbered lists, NO headers (#).
- Write in natural, conversational sentences. 2–4 sentences per reply is ideal.
- NEVER dump pricing tables, plan comparisons, or long lists unless the visitor explicitly asks.

TONE & STYLE
- Sound like a warm, friendly advisor — not a form or a robot collecting fields.
- When asking for details, weave them naturally into helpful context. For example:
  GOOD: "That's wonderful! We have excellent verified drivers on our panel. To match you with the right one, could you tell me your name?"
  BAD: "Great! We can help you find a verified driver. What's your name?"
  GOOD: "Thanks Arun! So our advisor can reach you with the best options, could you share your phone number?"
  BAD: "Nice to meet you, Arun! What's your phone number?"
- Each question should feel like a natural part of the conversation, not an interrogation.
- Add a brief reassuring or helpful line before each ask — why you're asking or what happens next.
- Be genuinely warm and make the visitor feel taken care of.

CONVERSATION FLOW
- Greet briefly. Ask what help they need.
- Once they state a need, acknowledge it warmly with a brief reassuring line, then ask for the next missing field naturally.
- Ask for missing lead fields ONE at a time.
- Once you have all five fields (or at minimum name + phone + job role), confirm warmly:
  something like "You're all set, [Name]! Our advisor will give you a call shortly to help you find the perfect [job role]. You're in great hands!"
- If they ask a FAQ question, give a concise but helpful answer (2–3 sentences),
  then naturally transition to the next missing lead field.

WHAT NOT TO DO
- Do NOT list all services, plans, or pricing unless specifically asked.
- Do NOT explain the full hiring process unless asked.
- Do NOT give long paragraph answers when a few sentences will do.
- Do NOT ask multiple questions in one message.
- Do NOT sound robotic or like you're filling out a form. Every reply should feel conversational.

UNANSWERED QUESTIONS
- If the user asks something NOT covered in the knowledge base above, DO NOT make
  up an answer. Say briefly: "I'll have our team get back to you on that.
  Could you share your name and phone number so they can reach you?"
- In the lead JSON, set "unanswered" to the user's exact question text.

LEAD TRACKING — at the very END of every reply, on its own final line, output the
known lead as JSON in <lead></lead> tags. Every field, null when unknown, accumulate:
<lead>{"name":null,"phone":null,"area":null,"job_role":null,"job_type":null,"complete":false,"unanswered":null}</lead>
Set "complete" true only once name + phone + job_role are all known.
Set "unanswered" to the user's question text ONLY when you cannot answer from the knowledge base.
This line is hidden from the user.
`;

const MODEL = "claude-haiku-4-5-20251001"; // fast + low-cost for a public widget

interface LeadData {
  name: string | null;
  phone: string | null;
  area: string | null;
  job_role: string | null;
  job_type: string | null;
  complete: boolean;
  unanswered: string | null;
}

interface MessageInput {
  role: string;
  content: string;
}

interface RequestBody {
  messages: MessageInput[];
  leadSent: boolean;
}

// GET /api/assistant — health check (safe: never exposes keys)
export async function GET() {
  const hasKey = !!process.env.ANTHROPIC_API_KEY;
  const keyPrefix = hasKey
    ? process.env.ANTHROPIC_API_KEY!.substring(0, 10) + "…"
    : "(not set)";
  return Response.json({
    status: "ok",
    hasAnthropicKey: hasKey,
    keyPrefix,
    model: MODEL,
  });
}

export async function POST(req: Request) {
  try {
    const { messages, leadSent } = (await req.json()) as RequestBody;
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY || "";
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set");
      return Response.json(
        { reply: "Sorry — the assistant is not configured yet. Please try again later.", emailed: false },
        { status: 200 }
      );
    }

    const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system: SYSTEM,
        // keep only the last 20 turns to bound cost
        messages: messages.slice(-20).map((m) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: String(m.content || ""),
        })),
      }),
    });

    if (!aiRes.ok) {
      const errBody = await aiRes.text().catch(() => "");
      console.error("Anthropic API error:", aiRes.status, errBody);
      // Surface a more helpful message based on the status
      const hint =
        aiRes.status === 401
          ? "Sorry — the assistant couldn't authenticate. We're looking into it."
          : aiRes.status === 429
          ? "I'm getting a lot of questions right now! Please try again in a moment."
          : "Sorry — I couldn't connect just now. Please try again.";
      return Response.json({ reply: hint, emailed: false }, { status: 200 });
    }

    const data = await aiRes.json();
    let reply = (data.content || [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("\n")
      .trim();

    // Extract the hidden lead JSON, then strip it from what the visitor sees.
    let lead: LeadData | null = null;
    const match = reply.match(/<lead>([\s\S]*?)<\/lead>/i);
    if (match) {
      try {
        lead = JSON.parse(match[1].trim());
      } catch {
        /* ignore malformed */
      }
    }
    reply = reply.replace(/<lead>[\s\S]*?<\/lead>/gi, "").trim();

    let emailed = false;

    // Email the lead once, the first time it becomes complete.
    if (lead && lead.complete && !leadSent) {
      try {
        await sendLeadEmail(lead);
        emailed = true;
      } catch (e) {
        console.error("Lead email failed:", e);
      }
    }

    // Email unanswered questions so the team can follow up.
    if (lead && lead.unanswered) {
      try {
        await sendUnansweredEmail(lead);
      } catch (e) {
        console.error("Unanswered-question email failed:", e);
      }
    }

    return Response.json({ reply: reply || "…", emailed });
  } catch (e) {
    console.error("Assistant error:", e);
    return Response.json(
      { reply: "Sorry — something went wrong. Please try again.", emailed: false },
      { status: 200 }
    );
  }
}

// ── Email helpers ──────────────────────────────────────────────────

function createTransporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

async function sendLeadEmail(lead: LeadData) {
  const transporter = createTransporter();
  const to = process.env.LEAD_TO || "contact@ezyhelpers.com";
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || "";
  const v = (x: string | null) => (x ? String(x) : "—");

  const subject = `New lead — ${v(lead.job_role)}${lead.area ? ", " + lead.area : ""}`;

  const text =
    `New enquiry from the EzyHelpers website assistant\n\n` +
    `Name:        ${v(lead.name)}\n` +
    `Phone:       ${v(lead.phone)}\n` +
    `Area:        ${v(lead.area)}\n` +
    `Job role:    ${v(lead.job_role)}\n` +
    `Job type:    ${v(lead.job_type)}\n\n` +
    `Source: Website assistant`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#16241F">
      <h2 style="color:#0E7C66;margin:0 0 12px">New website lead</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${[
          ["Name", lead.name],
          ["Phone", lead.phone],
          ["Area", lead.area],
          ["Job role", lead.job_role],
          ["Job type", lead.job_type],
        ]
          .map(
            ([k, val]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#5F716B">${k}</td>
               <td style="padding:6px 0;font-weight:600">${val ? String(val) : "—"}</td></tr>`
          )
          .join("")}
      </table>
      <p style="color:#5F716B;font-size:12px;margin-top:16px">Source: Website assistant</p>
    </div>`;

  await transporter.sendMail({ from, to, subject, text, html });
}

async function sendUnansweredEmail(lead: LeadData) {
  const transporter = createTransporter();
  const to = process.env.LEAD_TO || "contact@ezyhelpers.com";
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || "";
  const v = (x: string | null) => (x ? String(x) : "—");

  const subject = `⚠️ Unanswered chatbot question`;

  const text =
    `A visitor asked a question the chatbot couldn't answer.\n\n` +
    `Question:    ${v(lead.unanswered)}\n` +
    `Name:        ${v(lead.name)}\n` +
    `Phone:       ${v(lead.phone)}\n` +
    `Area:        ${v(lead.area)}\n` +
    `Job role:    ${v(lead.job_role)}\n\n` +
    `Consider adding this to the FAQ knowledge base.\n` +
    `Source: Website assistant`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#16241F">
      <h2 style="color:#E8941A;margin:0 0 12px">⚠️ Unanswered chatbot question</h2>
      <div style="background:#FFF8ED;border:1px solid #FBEAC9;border-radius:8px;padding:14px;margin-bottom:16px">
        <p style="margin:0;font-size:15px;font-weight:600;color:#16241F">"${lead.unanswered || "—"}"</p>
      </div>
      <table style="border-collapse:collapse;font-size:14px">
        ${[
          ["Name", lead.name],
          ["Phone", lead.phone],
          ["Area", lead.area],
          ["Job role", lead.job_role],
        ]
          .map(
            ([k, val]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#5F716B">${k}</td>
               <td style="padding:6px 0;font-weight:600">${val ? String(val) : "—"}</td></tr>`
          )
          .join("")}
      </table>
      <p style="color:#5F716B;font-size:12px;margin-top:16px">
        Consider adding this answer to the chatbot knowledge base.<br/>
        Source: Website assistant
      </p>
    </div>`;

  await transporter.sendMail({ from, to, subject, text, html });
}
