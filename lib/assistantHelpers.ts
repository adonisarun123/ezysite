// Pure helpers for the website assistant (app/api/assistant/route.ts).
// Extracted to a lib module so they can be unit-tested (route files should
// only export HTTP handlers + route config).

// ── Server-side validators (never trust client or model alone) ────
export const SERVED_AREAS = [
  "bellandur", "sarjapur", "hsr", "hsr layout", "koramangala",
  "electronic city", "jp nagar", "jayanagar", "whitefield",
  "marathahalli", "varthur", "bangalore", "bengaluru", "bareilly",
  // Added Jun 2026 from chatbot_sessions demand analysis (confirmed served):
  "yelahanka", "rajarajeshwari nagar", "rajarajeshwari", "rr nagar",
  "banashankari", "arekere", "kammanhalli", "mahalakshmipuram",
];

export function isServedArea(area: string): boolean {
  const lower = area.toLowerCase().trim();
  return SERVED_AREAS.some((a) => lower.includes(a) || a.includes(lower));
}

// Valid Indian mobile: 10 digits starting 6–9, not an obvious fake.
export function isValidIndianMobile(phone: string | null): boolean {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, "");
  const ten = digits.length >= 10 ? digits.slice(-10) : digits;
  if (!/^[6-9]\d{9}$/.test(ten)) return false;
  if (/^(\d)\1{9}$/.test(ten)) return false; // 9999999999 etc.
  if (ten === "9876543210" || ten === "6789012345") return false;
  return true;
}

/** Booking reference like EZY-K7M2P9 (no easily-confused characters). */
export function generateBookingRef(): string {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `EZY-${s}`;
}

/** Merge an env-provided comma list with guaranteed recipients, de-duplicated. */
export function buildTo(envValue: string | undefined, guaranteed: string[]): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const e of [...(envValue || "").split(","), ...guaranteed]) {
    const t = e.trim();
    if (!t) continue;
    const k = t.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(t);
  }
  return out.join(", ");
}
