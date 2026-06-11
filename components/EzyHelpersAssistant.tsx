"use client";
// components/EzyHelpersAssistant.tsx
// Floating chat widget. Also opens from your hero search bar via a window event:
//   window.dispatchEvent(new CustomEvent("ezy:open", { detail: { query: "part-time cook in HSR" } }))
// Drop <EzyHelpersAssistant /> once in your root layout. No keys or business logic here.

import React, { useState, useRef, useEffect, useCallback } from "react";

const GREETING =
  "Namaste \u{1F64F} I'm Asha from EzyHelpers. Looking for a maid, cook, nanny, or other home help? Tell me what you need and I'll connect you with our team!";

const BUBBLE_TEXT = "Hi! Need help finding trusted home help? \u{1F44B}";
const AUTO_OPEN_DELAY = 4000; // ms before auto-open on first visit
const BUBBLE_DELAY = 2000; // ms before greeting bubble appears
const SESSION_KEY = "ezw_opened"; // sessionStorage key to track if already shown

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

  // Show greeting bubble after BUBBLE_DELAY, then auto-open after AUTO_OPEN_DELAY (first visit only)
  useEffect(() => {
    // Skip if already opened this session
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      /* SSR or private mode */
    }

    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, BUBBLE_DELAY);

    const autoOpenTimer = setTimeout(() => {
      setShowBubble(false);
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, AUTO_OPEN_DELAY);

    return () => {
      clearTimeout(bubbleTimer);
      clearTimeout(autoOpenTimer);
    };
  }, []);

  const handleOpen = () => {
    setSeed(null);
    setOpen(true);
    setShowBubble(false);
    setBubbleDismissed(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const handleDismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBubble(false);
    setBubbleDismissed(true);
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
        .ezw-bub{padding:10px 13px;border-radius:13px;font-size:13.5px;line-height:1.5;white-space:pre-wrap;}
        .ezw-row.bot .ezw-bub{background:#fff;border:1px solid var(--line-g);border-top-left-radius:4px;}
        .ezw-row.user .ezw-bub{background:var(--teal);color:#fff;border-top-right-radius:4px;}
        .ezw-typing{display:flex;gap:4px;padding:12px 13px;background:#fff;border:1px solid var(--line-g);border-radius:13px;border-top-left-radius:4px;width:fit-content;}
        .ezw-typing span{width:6px;height:6px;border-radius:50%;background:#B7C4BF;animation:ezwb 1.2s infinite;}
        .ezw-typing span:nth-child(2){animation-delay:.18s;}.ezw-typing span:nth-child(3){animation-delay:.36s;}
        @keyframes ezwb{0%,60%,100%{opacity:.3;transform:translateY(0);}30%{opacity:1;transform:translateY(-3px);}}
        .ezw-bar{display:flex;gap:8px;padding:11px 13px;background:#fff;border-top:1px solid var(--line);}
        .ezw-bar input{flex:1;border:1px solid var(--line);border-radius:11px;padding:10px 13px;font-size:13.5px;font-family:inherit;outline:none;background:var(--bg);}
        .ezw-bar input:focus{border-color:var(--teal);background:#fff;}
        .ezw-bar button{width:42px;height:42px;flex:none;border:none;border-radius:11px;cursor:pointer;background:var(--teal);color:#fff;display:grid;place-items:center;}
        .ezw-bar button:disabled{opacity:.45;}
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

function Panel({ seed, onClose }: { seed: string | null; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const leadSent = useRef(false);
  const seeded = useRef(false);
  const transcriptSent = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>(messages);
  messagesRef.current = messages;

  // Send transcript email on close (fire-and-forget)
  const handleClose = useCallback(() => {
    const msgs = messagesRef.current;
    const hasUserMessages = msgs.some((m) => m.role === "user");
    if (hasUserMessages && !transcriptSent.current) {
      transcriptSent.current = true;
      // Use sendBeacon for reliability (works even if page is closing),
      // fall back to fetch
      const payload = JSON.stringify({ messages: msgs, action: "transcript" });
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
    }
    onClose();
  }, [onClose]);

  // Also send transcript if user navigates away / closes the tab while chat is open
  useEffect(() => {
    const beforeUnload = () => {
      const msgs = messagesRef.current;
      const hasUserMessages = msgs.some((m) => m.role === "user");
      if (hasUserMessages && !transcriptSent.current) {
        transcriptSent.current = true;
        const payload = JSON.stringify({ messages: msgs, action: "transcript" });
        if (typeof navigator.sendBeacon === "function") {
          navigator.sendBeacon(
            "/api/assistant",
            new Blob([payload], { type: "application/json" })
          );
        }
      }
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  const send = useCallback(
    async (text: string) => {
      const clean = (text || "").trim();
      if (!clean || busy) return;
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
          }),
        });
        const data = await res.json();
        if (data.emailed) leadSent.current = true;
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.reply || "…" },
        ]);
      } catch {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "Sorry — I couldn't connect just now. Please try again.",
          },
        ]);
      } finally {
        setBusy(false);
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

      <div className="ezw-feed" ref={scrollRef}>
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
      </div>

      <div className="ezw-bar">
        <input
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send(input);
          }}
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
