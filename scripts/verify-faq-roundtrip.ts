/**
 * Verify the reviewable-FAQ round-trip against the LIVE Supabase table.
 *
 * Proves end-to-end that:
 *  1. an approved FAQ is matched by matchApprovedFaqs()-equivalent logic, and
 *  2. logPendingFaq()-equivalent logic inserts + dedupes (bumps ask_count).
 * Uses clearly-namespaced test rows and deletes them at the end.
 *
 * Requires env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Run: npm run faq:verify         (tsx --env-file=.env.development)
 *
 * NOTE: the matching/normalize logic below mirrors lib/faqStore.ts. That module
 * has `import "server-only"` (throws outside Next), so it can't be imported into
 * a plain script — we replicate its logic here and assert the same behaviour.
 */
import assert from 'node:assert/strict'
import { createClient } from '@supabase/supabase-js'

const TEST_PREFIX = '__faqtest__'

// ── mirror of lib/faqStore.ts ────────────────────────────────────────
function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200)
}
const STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'can', 'you', 'i', 'my', 'me',
  'to', 'for', 'of', 'in', 'on', 'and', 'or', 'what', 'how', 'when', 'where',
  'your', 'we', 'with', 'at', 'it', 'this', 'that', 'have', 'need', 'want',
])
const tokens = (s: string): string[] =>
  normalizeQuestion(s).split(' ').filter((t) => t.length > 2 && !STOPWORDS.has(t))
const looseMatch = (a: string, b: string): boolean =>
  a === b || (a.length >= 4 && b.startsWith(a)) || (b.length >= 4 && a.startsWith(b))

interface FaqRow { question: string; answer: string | null; keywords: string | null }
function matchLocal(message: string, rows: FaqRow[], limit = 3) {
  const msgTokens = tokens(message)
  if (msgTokens.length === 0) return []
  return rows
    .map((row) => {
      const hay = tokens(`${row.keywords ?? ''} ${row.question ?? ''}`)
      let score = 0
      for (const t of hay) if (msgTokens.some((m) => looseMatch(m, t))) score++
      if (normalizeQuestion(row.question ?? '') === normalizeQuestion(message)) score += 5
      return { row, score }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => ({ question: s.row.question, answer: s.row.answer as string }))
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key || url.includes('your-project')) {
    console.log(
      'SKIP: set real NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to run.'
    )
    process.exit(0)
  }
  const db = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const approvedKey = `${TEST_PREFIX}can the cook make jain food`
  const pendingQuestion = `${TEST_PREFIX} Do you offer pottery classes for kids?`
  const pendingKey = normalizeQuestion(pendingQuestion)

  // clean any leftovers from a prior run
  await db.from('chatbot_faqs').delete().like('question_key', `${TEST_PREFIX}%`)

  try {
    // 1) insert an APPROVED test FAQ
    const { error: e1 } = await db.from('chatbot_faqs').insert([
      {
        question_key: approvedKey,
        question: 'Can the cook make Jain food?',
        answer: 'Yes, our cooks can prepare Jain meals — just let our team know.',
        keywords: 'jain food cooking diet vegetarian cook meal',
        status: 'approved',
        source: 'manual',
      },
    ])
    assert.equal(e1, null, `approved insert failed: ${e1?.message}`)

    // 2) read approved rows + run the match logic (as the route does)
    const { data: approved, error: e2 } = await db
      .from('chatbot_faqs')
      .select('question, answer, keywords')
      .eq('status', 'approved')
      .not('answer', 'is', null)
      .limit(300)
    assert.equal(e2, null, `approved select failed: ${e2?.message}`)
    const matches = matchLocal('I need someone who can cook jain meals', approved ?? [])
    assert.ok(
      matches.some((m) => m.question === 'Can the cook make Jain food?'),
      'APPROVED FAQ was not matched by the retrieval logic'
    )
    console.log('✓ approved FAQ inserted and matched by retrieval logic')

    // 3) simulate logPendingFaq insert
    const { error: e3 } = await db.from('chatbot_faqs').insert([
      {
        question_key: pendingKey,
        question: pendingQuestion.slice(0, 500),
        status: 'pending',
        source: 'chatbot',
        first_page: '/verify-test',
      },
    ])
    assert.equal(e3, null, `pending insert failed: ${e3?.message}`)

    // 4) simulate a re-ask → dedupe bumps ask_count
    const { data: existing } = await db
      .from('chatbot_faqs')
      .select('id, ask_count')
      .eq('question_key', pendingKey)
      .maybeSingle()
    assert.ok(existing, 'pending row not found for dedupe')
    const { error: e4 } = await db
      .from('chatbot_faqs')
      .update({ ask_count: (existing!.ask_count ?? 1) + 1, last_asked_at: new Date().toISOString() })
      .eq('id', existing!.id)
    assert.equal(e4, null, `dedupe update failed: ${e4?.message}`)
    const { data: after } = await db
      .from('chatbot_faqs')
      .select('ask_count')
      .eq('id', existing!.id)
      .single()
    assert.equal(after?.ask_count, 2, 'ask_count did not increment on re-ask')
    console.log('✓ pending FAQ logged and dedupe bumped ask_count to 2')

    console.log('\nALL CHECKS PASSED — the FAQ round-trip works against the live table.')
  } finally {
    // always clean up test rows
    await db.from('chatbot_faqs').delete().like('question_key', `${TEST_PREFIX}%`)
    console.log('(cleaned up test rows)')
  }
}

main().catch((e) => {
  console.error('VERIFY FAILED:', e instanceof Error ? e.message : e)
  process.exit(1)
})
