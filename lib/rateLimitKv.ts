import 'server-only'
import { checkRateLimit as checkRateLimitMemory } from './auth'

/**
 * Distributed rate limiting + counter helpers backed by Vercel KV / Upstash
 * Redis (REST API). The previous limiter used a module-level Map, which on
 * serverless (Vercel) is PER-INSTANCE — so a caller spread across instances
 * bypassed the cap entirely, and the chatbot's LLM spend cap (real money) was
 * effectively unenforced. These helpers use a shared store so the cap is global.
 *
 * Configuration (set in Vercel project env, both provided automatically when
 * you attach a Vercel KV/Upstash store):
 *   KV_REST_API_URL    — e.g. https://xxxx.upstash.io
 *   KV_REST_API_TOKEN  — REST token
 *
 * When these are absent (local dev, preview without a store) every function
 * transparently falls back to the in-memory limiter so nothing breaks — the
 * fallback is just per-instance, same as before.
 */

const KV_URL = process.env.KV_REST_API_URL
const KV_TOKEN = process.env.KV_REST_API_TOKEN

export function kvConfigured(): boolean {
  return Boolean(KV_URL && KV_TOKEN)
}

/** Execute a single Upstash REST command: ['INCR', key], ['EXPIRE', key, secs], etc. */
async function kv(command: (string | number)[]): Promise<any> {
  const res = await fetch(KV_URL as string, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    // Never cache rate-limit reads/writes.
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`KV error ${res.status}`)
  const json = await res.json()
  return json.result
}

/**
 * Sliding-window-ish fixed-window rate limit using INCR + EXPIRE.
 * Returns allowed=false once `max` is exceeded within `windowSec`.
 * Falls back to the in-memory limiter if KV is unconfigured or errors.
 */
export async function checkRateLimitKV(
  identifier: string,
  max: number,
  windowSec: number
): Promise<{ allowed: boolean; remaining: number }> {
  if (!kvConfigured()) {
    const r = checkRateLimitMemory(identifier, max, windowSec * 1000)
    return { allowed: r.allowed, remaining: r.remaining }
  }
  try {
    const key = `rl:${identifier}`
    const count: number = await kv(['INCR', key])
    if (count === 1) {
      // First hit in this window — set the expiry.
      await kv(['EXPIRE', key, windowSec])
    }
    const allowed = count <= max
    return { allowed, remaining: Math.max(0, max - count) }
  } catch {
    // On any KV failure, fail OPEN to the in-memory limiter rather than
    // blocking legitimate traffic (availability over strictness here).
    const r = checkRateLimitMemory(identifier, max, windowSec * 1000)
    return { allowed: r.allowed, remaining: r.remaining }
  }
}

/**
 * Atomically add `amount` to a daily-rolling counter (e.g. LLM spend in cents)
 * and report whether the cap has been exceeded. Used for the assistant spend
 * cap so the budget is enforced globally, not per serverless instance.
 * `dayKey` should encode the UTC day, e.g. `spend:2026-06-14`.
 */
export async function incrementDailyCounter(
  dayKey: string,
  amount: number,
  cap: number
): Promise<{ total: number; exceeded: boolean; usedFallback: boolean }> {
  if (!kvConfigured()) {
    return { total: 0, exceeded: false, usedFallback: true }
  }
  try {
    const key = `cap:${dayKey}`
    const total: number = await kv(['INCRBY', key, Math.round(amount)])
    // Expire the counter ~48h out so day keys self-clean.
    if (total === Math.round(amount)) {
      await kv(['EXPIRE', key, 172800])
    }
    return { total, exceeded: total > cap, usedFallback: false }
  } catch {
    return { total: 0, exceeded: false, usedFallback: true }
  }
}

/** Read a daily counter without incrementing (pre-check). */
export async function readDailyCounter(dayKey: string): Promise<number> {
  if (!kvConfigured()) return 0
  try {
    const v = await kv(['GET', `cap:${dayKey}`])
    return v ? Number(v) : 0
  } catch {
    return 0
  }
}
