"use client";
// components/EzyHelpersAssistant.tsx
// Floating chat widget. Also opens from your hero search bar via a window event:
//   window.dispatchEvent(new CustomEvent("ezy:open", { detail: { query: "part-time cook in HSR" } }))
// Drop <EzyHelpersAssistant /> once in your root layout. No keys or business logic here.

import React, { useState, useRef, useEffect, useCallback } from "react";

const GREETING =
  "Namaste \u{1F64F} I'm Asha from EzyHelpers. Looking for a maid, cook, nanny, or other home help? Or looking for work yourself? Tell me what you need and I'll connect you with our team!";

const BUBBLE_TEXT = "Hi! Need help finding trusted home help? \u{1F44B}";
const BUBBLE_DELAY = 2000; // ms before greeting bubble appears
const SESSION_KEY = "ezw_opened"; // sessionStorage: bubble already shown/dismissed
const STORE_MSGS = "ezw_msgs"; // sessionStorage: conversation history
const STORE_LEAD = "ezw_lead_sent"; // sessionStorage: lead already emailed
const STORE_TX = "ezw_tx_sent"; // sessionStorage: transcript already emailed
const STORE_SID = "ezw_sid"; // sessionStorage: stable session id for chat logging
const IDLE_TIMEOUT = 3 * 60 * 1000; // 3 minutes idle timeout
const MAX_INPUT_CHARS = 600;

// Quick-reply options shown after greeting
const QUICK_REPLIES: { label: string; message: string }[] = [
  { label: "Maid", message: "I need a maid" },
  { label: "Cook", message: "I need a cook" },
  { label: "Nanny", message: "I need a nanny" },
  { label: "Elderly Care", message: "I need elderly care" },
  { label: "Driver", message: "I need a driver" },
  { label: "Japa Care", message: "I need japa care" },
  { label: "I'm looking for work", message: "I'm a helper looking for work" },
];

// Suggested questions shown below the quick replies
const SUGGESTED_QUESTIONS: string[] = [
  "How does hiring work?",
  "What are your charges?",
  "Are helpers background-verified?",
  "How soon can a helper start?",
  "What if the helper doesn't work out?",
  "Which areas do you serve?",
];

// ── Spam / profanity filter (strong words only — mild words go to the bot,
//    which handles them gracefully) ─────────────────────────────────
const PROFANITY_LIST = [
  "fuck", "bitch", "bastard",
  "chutiya", "madarchod", "behenchod", "bhosdi", "lund", "randi",
];
const PROFANITY_RE = new RegExp(`\\b(${PROFANITY_LIST.join("|")})\\b`, "i");

export function isSpamOrGibberish(text: string): string | null {
  const trimmed = text.trim();
  // Too short (single char that's not a number or common reply)
  if (trimmed.length < 2 && !/^\d$/.test(trimmed)) return "too_short";
  // Way too long for a chat message
  if (trimmed.length > MAX_INPUT_CHARS) return "too_long";
  // Phone-number attempts (digits with optional +/spaces/dashes/parens) must
  // always reach the assistant — even repetitive ones like 9999999999 — so
  // Asha can reply in context ("that number looks incorrect, could you
  // re-check?") instead of a canned gibberish reply derailing the lead flow.
  const phoneLike = /^[+\d][\d\s\-()]{5,}$/.test(trimmed);
  // Mostly same character repeated
  if (!phoneLike && /^(.)\1{5,}$/.test(trimmed.replace(/\s/g, ""))) return "gibberish";
  // Random consonant strings (no vowels in 8+ latin chars — skip non-latin scripts)
  if (/^[^aeiouAEIOU\s\d]{8,}$/.test(trimmed) && /^[\x00-\x7F]+$/.test(trimmed))
    return "gibberish";
  // Profanity
  if (PROFANITY_RE.test(trimmed)) return "profanity";
  // Excessive special chars
  const specialRatio =
    trimmed.replace(/[\w\s.,!?₹@#\-()+'"/:]/g, "").length / trimmed.length;
  if (specialRatio > 0.5 && trimmed.length > 3) return "gibberish";
  return null;
}

// Safe sessionStorage helpers (private mode / SSR tolerant)
function ssGet(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}
function ssSet(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

// Stable per-visit session id so the server can stitch the conversation
// together for analytics. Anonymous, regenerated each browser session.
function getSessionId(): string {
  let sid = ssGet(STORE_SID);
  if (!sid) {
    sid =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `s-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    ssSet(STORE_SID, sid);
  }
  return sid;
}

export default function EzyHelpersAssistant() {
  const [open, setOpen] = useState(false);
  const [seed, setSeed] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  // Open from the hero search bar (or anywhere) via a custom event.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ query?: string }>)?.detail;
      setSeed(detail?.query?.trim() || null);
      setOpen(true);
      setShowBubble(false);
    };
    window.addEventListener("ezy:open", handler);
    return () => window.removeEventListener("ezy:open", handler);
  }, []);

  // Show greeting bubble after BUBBLE_DELAY (first page this session only).
  // No auto-open — the visitor stays in control.
  useEffect(() => {
    if (ssGet(SESSION_KEY)) return;
    const bubbleTimer = setTimeout(() => setShowBubble(true), BUBBLE_DELAY);
    return () => clearTimeout(bubbleTimer);
  }, []);

  const handleOpen = () => {
    setSeed(null);
    setOpen(true);
    setShowBubble(false);
    setBubbleDismissed(true);
    ssSet(SESSION_KEY, "1");
  };

  const handleDismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBubble(false);
    setBubbleDismissed(true);
    ssSet(SESSION_KEY, "1");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        .ezw{--teal:#0E7C66;--teal-d:#0A5C4C;--gold:#E8941A;--gold-soft:#FBEAC9;
          --ink:#16241F;--muted:#5F716B;--bg:#F1EFE7;--line:#E4E0D5;--line-g:#DCEAE4;
          font-family:'Inter',system-ui,sans-serif;}
        .ezw *{box-sizing:border-box;}

        /* ── Launcher button ── */
        .ezw-launcher{position:fixed;right:22px;bottom:22px;z-index:2147483000;display:flex;align-items:center;gap:10px;
          background:var(--teal);color:#fff;border:none;border-radius:999px;padding:13px 18px 13px 14px;cursor:pointer;
          box-shadow:0 16px 36px -12px rgba(14,124,102,.7);font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;
          transition:background .15s,transform .15s;
          animation:ezwPulse 2.5s ease-in-out infinite;}
        .ezw-launcher:hover{background:var(--teal-d);transform:scale(1.05);animation:none;}
        .ezw-launcher svg{width:22px;height:22px;}
        @keyframes ezwPulse{
          0%,100%{box-shadow:0 16px 36px -12px rgba(14,124,102,.7);}
          50%{box-shadow:0 16px 36px -8px rgba(14,124,102,.9),0 0 0 8px rgba(14,124,102,.15);}
        }
        @media (max-width:767px){
          .ezw-launcher{bottom:80px;}
        }

        /* ── Greeting bubble ── */
        .ezw-bubble{position:fixed;right:22px;bottom:80px;z-index:2147482999;max-width:260px;
          background:#fff;color:var(--ink);border:1px solid var(--line-g);border-radius:16px 16px 4px 16px;
          padding:12px 16px;font-size:13.5px;line-height:1.5;cursor:pointer;
          box-shadow:0 12px 32px -8px rgba(16,40,32,.25);
          animation:ezwBubbleIn .4s ease-out both;}
        .ezw-bubble::after{content:'';position:absolute;right:24px;bottom:-8px;width:0;height:0;
          border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff;}
        .ezw-bubble-close{position:absolute;top:6px;right:8px;background:none;border:none;color:var(--muted);
          cursor:pointer;font-size:16px;line-height:1;padding:2px 4px;border-radius:4px;}
        .ezw-bubble-close:hover{color:var(--ink);background:rgba(0,0,0,.05);}
        @keyframes ezwBubbleIn{
          from{opacity:0;transform:translateY(10px) scale(.95);}
          to{opacity:1;transform:translateY(0) scale(1);}
        }
        @media (max-width:767px){
          .ezw-bubble{bottom:138px;right:16px;max-width:240px;}
        }

        /* ── Chat panel ── */
        .ezw-panel{position:fixed;right:22px;bottom:22px;z-index:2147483000;width:380px;max-width:calc(100vw - 28px);
          height:560px;max-height:calc(100vh - 44px);background:#fff;border:1px solid var(--line);border-radius:20px;
          display:flex;flex-direction:column;overflow:hidden;box-shadow:0 30px 70px -30px rgba(16,40,32,.6);
          animation:ezwPanelIn .3s ease-out both;}
        @keyframes ezwPanelIn{
          from{opacity:0;transform:translateY(20px) scale(.97);}
          to{opacity:1;transform:translateY(0) scale(1);}
        }
        @media (max-width:767px){
          .ezw-panel{right:0;bottom:0;width:100vw;max-width:100vw;height:100vh;max-height:100vh;border-radius:0;}
        }
        .ezw-head{display:flex;align-items:center;gap:11px;padding:14px 16px;background:linear-gradient(135deg,var(--teal),var(--teal-d));color:#fff;}
        .ezw-logo{width:36px;height:36px;border-radius:11px;background:#fff;display:grid;place-items:center;flex:none;}
        .ezw-name{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:15px;}
        .ezw-sub{font-size:11.5px;opacity:.85;display:flex;align-items:center;gap:6px;}
        .ezw-pdot{width:6px;height:6px;border-radius:50%;background:#7BE3B4;}
        .ezw-close{margin-left:auto;background:rgba(255,255,255,.16);border:none;color:#fff;width:30px;height:30px;border-radius:9px;cursor:pointer;display:grid;place-items:center;}
        .ezw-close:hover{background:rgba(255,255,255,.28);}
        .ezw-feed{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:11px;background:var(--bg);}
        .ezw-row{display:flex;gap:8px;max-width:88%;}
        .ezw-row.user{align-self:flex-end;flex-direction:row-reverse;}
        .ezw-av{width:26px;height:26px;border-radius:8px;flex:none;display:grid;place-items:center;font-weight:800;font-size:11px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--gold-soft);color:var(--gold);}
        .ezw-av.u{background:#DCEAE4;color:var(--teal);}
        .ezw-bub{padding:10px 13px;border-radius:13px;font-size:13.5px;line-height:1.5;white-space:pre-wrap;overflow-wrap:break-word;}
        .ezw-row.bot .ezw-bub{background:#fff;border:1px solid var(--line-g);border-top-left-radius:4px;}
        .ezw-row.user .ezw-bub{background:var(--teal);color:#fff;border-top-right-radius:4px;}
        .ezw-typing{display:flex;gap:4px;padding:12px 13px;background:#fff;border:1px solid var(--line-g);border-radius:13px;border-top-left-radius:4px;width:fit-content;}
        .ezw-typing span{width:6px;height:6px;border-radius:50%;background:#B7C4BF;animation:ezwb 1.2s infinite;}
        .ezw-typing span:nth-child(2){animation-delay:.18s;}.ezw-typing span:nth-child(3){animation-delay:.36s;}
        @keyframes ezwb{0%,60%,100%{opacity:.3;transform:translateY(0);}30%{opacity:1;transform:translateY(-3px);}}
        .ezw-bar{display:flex;gap:8px;padding:11px 13px;background:#fff;border-top:1px solid var(--line);}
        .ezw-bar input{flex:1;border:1px solid var(--line);border-radius:11px;padding:10px 13px;font-size:16px;font-family:inherit;outline:none;background:var(--bg);}
        .ezw-bar input:focus{border-color:var(--teal);background:#fff;}
        .ezw-bar button{width:42px;height:42px;flex:none;border:none;border-radius:11px;cursor:pointer;background:var(--teal);color:#fff;display:grid;place-items:center;}
        .ezw-bar button:disabled{opacity:.45;}

        /* ── Quick replies (rendered inside the scrollable feed) ── */
        .ezw-qr{margin-top:2px;padding-left:34px;}
        .ezw-qr-chips{display:flex;flex-wrap:wrap;gap:6px;}
        .ezw-qr button{background:#fff;border:1px solid var(--line-g);color:var(--teal);border-radius:999px;
          padding:7px 14px;font-size:12.5px;font-family:inherit;font-weight:500;cursor:pointer;
          transition:all .15s;}
        .ezw-qr button:hover{background:var(--teal);color:#fff;border-color:var(--teal);}
        .ezw-qr-label{font-size:11px;font-weight:600;letter-spacing:.04em;
          text-transform:uppercase;color:var(--muted);margin:0 0 6px 2px;}
        .ezw-qr button.q{color:var(--ink);border-color:var(--line);background:#FAFAF7;font-weight:400;}
        .ezw-qr button.q:hover{background:var(--gold-soft);border-color:var(--gold);color:var(--ink);}

        /* ── Feedback thumbs ── */
        .ezw-fb{display:flex;align-items:center;gap:14px;justify-content:center;padding:10px 16px;
          background:#FAFAF7;border-top:1px solid var(--line);}
        .ezw-fb-label{font-size:12px;color:var(--muted);}
        .ezw-fb button{background:none;border:1px solid var(--line);border-radius:8px;padding:6px 10px;
          cursor:pointer;font-size:16px;transition:all .15s;}
        .ezw-fb button:hover{background:var(--line-g);}
        .ezw-fb button.selected{border-color:var(--teal);background:var(--line-g);}

        @media (prefers-reduced-motion: reduce){
          .ezw-typing span{animation:none;}
          .ezw-launcher{animation:none;}
          .ezw-bubble{animation:none;}
          .ezw-panel{animation:none;}
        }
      `}</style>

      <div className="ezw">
        {!open && (
          <>
            {/* Greeting bubble */}
            {showBubble && !bubbleDismissed && (
              <div className="ezw-bubble" onClick={handleOpen}>
                <button
                  className="ezw-bubble-close"
                  onClick={handleDismissBubble}
                  aria-label="Dismiss"
                >
                  ×
                </button>
                {BUBBLE_TEXT}
              </div>
            )}

            {/* Launcher button */}
            <button
              className="ezw-launcher"
              onClick={handleOpen}
              aria-label="Open EzyHelpers assistant"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.4A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
              </svg>
              Need help finding help?
            </button>
          </>
        )}
        {open && <Panel seed={seed} onClose={() => setOpen(false)} />}
      </div>
    </>
  );
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function loadSavedMessages(): Message[] {
  const raw = ssGet(STORE_MSGS);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch {
      /* corrupted — start fresh */
    }
  }
  return [{ role: "assistant", content: GREETING }];
}

function Panel({ seed, onClose }: { seed: string | null; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(loadSavedMessages);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [leadComplete, setLeadComplete] = useState(
    () => ssGet(STORE_LEAD) === "1"
  );
  const [showQuickReplies, setShowQuickReplies] = useState(
    () => loadSavedMessages().every((m) => m.role === "assistant")
  );
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const leadSent = useRef(ssGet(STORE_LEAD) === "1");
  const seeded = useRef(false);
  const transcriptDone = useRef(ssGet(STORE_TX) === "1");
  const feedbackRef = useRef<"up" | "down" | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<Message[]>(messages);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleNudged = useRef(false);
  messagesRef.current = messages;

  // Persist conversation so it survives page navigation / reopening the panel
  useEffect(() => {
    ssSet(STORE_MSGS, JSON.stringify(messages.slice(-40)));
  }, [messages]);

  // ── Idle timeout (3 min) ──
  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (idleNudged.current) return; // only nudge once
    idleTimer.current = setTimeout(() => {
      idleNudged.current = true;
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Still there? No worries if you need a moment! Just type whenever you're ready, or you can always call us at 080-31411776.",
        },
      ]);
    }, IDLE_TIMEOUT);
  }, []);

  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [resetIdleTimer]);

  // Reset idle timer on every new message
  useEffect(() => {
    if (messages.length > 1) resetIdleTimer();
  }, [messages, resetIdleTimer]);

  // Send transcript email on close (fire-and-forget, once per session)
  const sendTranscript = useCallback(() => {
    const msgs = messagesRef.current;
    const hasUserMessages = msgs.some((m) => m.role === "user");
    if (!hasUserMessages || transcriptDone.current) return;
    transcriptDone.current = true;
    ssSet(STORE_TX, "1");
    const payload = JSON.stringify({
      messages: msgs,
      action: "transcript",
      feedback: feedbackRef.current,
      sessionId: getSessionId(),
      page: window.location.pathname,
    });
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon(
        "/api/assistant",
        new Blob([payload], { type: "application/json" })
      );
    if (!sent) {
      fetch("/api/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  }, []);

  const handleClose = useCallback(() => {
    sendTranscript();
    onClose();
  }, [onClose, sendTranscript]);

  // Also send transcript if user navigates away / closes the tab while chat is open
  useEffect(() => {
    window.addEventListener("beforeunload", sendTranscript);
    return () => window.removeEventListener("beforeunload", sendTranscript);
  }, [sendTranscript]);

  useEffect(() => {
    // Don't auto-scroll on first open (greeting + suggestion chips should be
    // read from the top); only follow the conversation once it has started.
    if (messages.length <= 1 && !busy) return;
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  const send = useCallback(
    async (text: string) => {
      const clean = (text || "").trim();
      if (!clean || busy) return;

      // ── Client-side spam / profanity filter ──
      const spamType = isSpamOrGibberish(clean);
      if (spamType === "profanity") {
        setMessages((m) => [
          ...m,
          { role: "user", content: clean },
          {
            role: "assistant",
            content:
              "I'd love to help you, but let's keep things friendly! Could you rephrase that? I'm here to help you find great home help.",
          },
        ]);
        setInput("");
        return;
      }
      if (
        (spamType === "gibberish" || spamType === "too_short") &&
        messages.length <= 1
      ) {
        // Canned reply ONLY before the conversation has started (drive-by spam
        // guard). Mid-conversation, unclear input goes to the assistant, which
        // knows the context and can ask properly ("Sorry Arun, could you re-type
        // your number?") instead of derailing the lead flow with a re-greeting.
        setMessages((m) => [
          ...m,
          { role: "user", content: clean },
          {
            role: "assistant",
            content:
              "I didn't quite catch that. Could you tell me what kind of help you're looking for? We can arrange maids, cooks, nannies, drivers, and more!",
          },
        ]);
        setInput("");
        return;
      }
      if (spamType === "too_long") {
        setMessages((m) => [
          ...m,
          { role: "user", content: clean.slice(0, 100) + "…" },
          {
            role: "assistant",
            content:
              "That's quite a long message! Could you give me the short version? Just tell me what type of help you need and your area.",
          },
        ]);
        setInput("");
        return;
      }

      // Hide quick replies after first user message
      setShowQuickReplies(false);

      const history: Message[] = [...messages, { role: "user", content: clean }];
      setMessages(history);
      setInput("");
      setBusy(true);
      try {
        const res = await fetch("/api/assistant", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            messages: history,
            leadSent: leadSent.current,
            sessionId: getSessionId(),
            page: window.location.pathname,
          }),
        });
        const data = await res.json();
        if (data.emailed) {
          leadSent.current = true;
          setLeadComplete(true);
          ssSet(STORE_LEAD, "1");
        }
        // Safety net: never show internal lead tags even if the server missed one
        const replyText = String(data.reply || "…")
          .replace(/<lead>[\s\S]*?(<\/lead>|$)/gi, "")
          .trim();
        setMessages((m) => [
          ...m,
          { role: "assistant", content: replyText || "…" },
        ]);
      } catch {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "Sorry — I couldn't connect just now. Please try sending that again, or call us at 080-31411776.",
          },
        ]);
        // Restore their text so one tap re-sends it
        setInput(clean);
      } finally {
        setBusy(false);
        inputRef.current?.focus();
      }
    },
    [messages, busy]
  );

  useEffect(() => {
    if (seed && !seeded.current) {
      seeded.current = true;
      send(seed);
    }
  }, [seed, send]);

  const handleFeedback = (value: "up" | "down") => {
    setFeedback(value);
    feedbackRef.current = value;
  };

  return (
    <div className="ezw-panel" role="dialog" aria-label="EzyHelpers assistant">
      <div className="ezw-head">
        <div className="ezw-logo">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0E7C66"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
          </svg>
        </div>
        <div>
          <div className="ezw-name">EzyHelpers</div>
          <div className="ezw-sub">
            <span className="ezw-pdot" />
            Asha · online
          </div>
        </div>
        <button className="ezw-close" onClick={handleClose} aria-label="Close">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="ezw-feed" ref={scrollRef} aria-live="polite">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`ezw-row ${m.role === "user" ? "user" : "bot"}`}
          >
            <div className={`ezw-av ${m.role === "user" ? "u" : ""}`}>
              {m.role === "user" ? "You" : "A"}
            </div>
            <div className="ezw-bub">{m.content}</div>
          </div>
        ))}
        {busy && (
          <div className="ezw-row bot">
            <div className="ezw-av">A</div>
            <div className="ezw-typing">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        {/* Quick replies + suggested questions — inside the scrollable feed so
            they never cover the greeting message */}
        {showQuickReplies && !busy && (
          <div className="ezw-qr">
            <div className="ezw-qr-label">I&apos;m looking for…</div>
            <div className="ezw-qr-chips">
              {QUICK_REPLIES.map((qr) => (
                <button key={qr.label} onClick={() => send(qr.message)}>
                  {qr.label}
                </button>
              ))}
            </div>
            <div className="ezw-qr-label" style={{ marginTop: 10 }}>
              Or ask me…
            </div>
            <div className="ezw-qr-chips">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button key={q} className="q" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Feedback thumbs (shown after lead is captured) */}
      {leadComplete && !feedback && (
        <div className="ezw-fb">
          <span className="ezw-fb-label">How was your experience?</span>
          <button onClick={() => handleFeedback("up")} aria-label="Thumbs up">
            👍
          </button>
          <button
            onClick={() => handleFeedback("down")}
            aria-label="Thumbs down"
          >
            👎
          </button>
        </div>
      )}
      {feedback && (
        <div className="ezw-fb">
          <span className="ezw-fb-label">
            {feedback === "up"
              ? "Thanks for the feedback! We're glad we could help."
              : "Sorry about that. We'll work on improving!"}
          </span>
        </div>
      )}

      <div className="ezw-bar">
        <input
          ref={inputRef}
          placeholder="Type your message…"
          value={input}
          maxLength={MAX_INPUT_CHARS}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send(input);
          }}
          aria-label="Message"
        />
        <button
          disabled={busy || !input.trim()}
          onClick={() => send(input)}
          aria-label="Send"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
