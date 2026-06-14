// Reviewable FAQ store for the website assistant ("Asha").
//
// Two jobs:
//  1. matchApprovedFaqs() — given the visitor's latest message, return approved
//     FAQ answers to inject into the model's context (keyword/text match).
//  2. logPendingFaq() — when the bot couldn't answer, queue the question for a
//     human to answer (deduped; bumps ask_count on repeats).
//
// Backed by the public.chatbot_faqs table (see supabase/chatbot_faqs.sql).
// Server-only: uses the service-role Supabase client.
import "server-only";
import { createSupabaseAdmin } from "@/lib/supabaseAdmin";

export interface ApprovedFaq {
  question: string;
  answer: string;
}

/** Normalize a question for dedupe + matching (lowercase, strip punctuation). */
export function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);
}

const STOPWORDS = new Set([
  "the", "a", "an", "is", "are", "do", "does", "can", "you", "i", "my", "me",
  "to", "for", "of", "in", "on", "and", "or", "what", "how", "when", "where",
  "your", "we", "with", "at", "it", "this", "that", "have", "need", "want",
]);

/** Content tokens from a message, minus stopwords (used for scoring). */
function tokens(s: string): string[] {
  return normalizeQuestion(s)
    .split(" ")
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
}

/**
 * Return up to `limit` approved FAQs relevant to the visitor's message.
 * Scoring: overlap between message tokens and each FAQ's keywords+question.
 * Pure keyword/text match — no embeddings, no extra API cost.
 */
export async function matchApprovedFaqs(
  message: string,
  limit = 3
): Promise<ApprovedFaq[]> {
  const msgTokens = tokens(message);
  if (msgTokens.length === 0) return [];

  const supabase = createSupabaseAdmin();
  if (!supabase) return [];

  // Pull approved rows (the set is small — a curated FAQ list, not a firehose).
  const { data, error } = await supabase
    .from("chatbot_faqs")
    .select("question, answer, keywords")
    .eq("status", "approved")
    .not("answer", "is", null)
    .limit(300);

  if (error || !data) return [];

  // Loose token equality: exact, or one is a prefix of the other (>=4 chars).
  // Cheaply absorbs plural/tense variants ("weekend"/"weekends") without a stemmer.
  const looseMatch = (a: string, b: string): boolean =>
    a === b ||
    (a.length >= 4 && b.startsWith(a)) ||
    (b.length >= 4 && a.startsWith(b));

  const scored = data
    .map((row) => {
      const hay = tokens(`${row.keywords ?? ""} ${row.question ?? ""}`);
      let score = 0;
      for (const t of hay) {
        if (msgTokens.some((m) => looseMatch(m, t))) score++;
      }
      // Light boost for a near-exact question match.
      if (normalizeQuestion(row.question ?? "") === normalizeQuestion(message)) {
        score += 5;
      }
      return { row, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map((s) => ({
    question: s.row.question as string,
    answer: s.row.answer as string,
  }));
}

/**
 * Queue an unanswered question for human review. Deduped on question_key:
 * a repeat asks bumps ask_count + last_asked_at instead of inserting a new row.
 * Never throws — logging must not break the chat.
 */
export async function logPendingFaq(
  question: string,
  page?: string | null
): Promise<void> {
  try {
    const q = question.trim();
    if (q.length < 4) return;
    const key = normalizeQuestion(q);
    if (!key) return;

    const supabase = createSupabaseAdmin();
    if (!supabase) return;

    // Does it already exist (in any status)? If so, bump and stop.
    const { data: existing } = await supabase
      .from("chatbot_faqs")
      .select("id, ask_count, status")
      .eq("question_key", key)
      .maybeSingle();

    if (existing) {
      // Don't resurrect rejected questions; just record the re-ask quietly.
      await supabase
        .from("chatbot_faqs")
        .update({
          ask_count: (existing.ask_count ?? 1) + 1,
          last_asked_at: new Date().toISOString(),
        })
        .eq("id", existing.id);
      return;
    }

    await supabase.from("chatbot_faqs").insert([
      {
        question_key: key,
        question: q.slice(0, 500),
        status: "pending",
        source: "chatbot",
        first_page: page ? String(page).slice(0, 200) : null,
      },
    ]);
  } catch (e) {
    console.error("logPendingFaq failed:", e);
  }
}
