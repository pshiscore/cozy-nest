"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "What exactly is a Home Reset?",
    a: "A Home Reset is a short, focused tidy — not a deep clean. Lidia arrives, puts the kitchen back together, fluffs the throw, wipes the counters, and leaves your home feeling like itself again. Visits run 30–90 minutes depending on your plan.",
  },
  {
    q: "Do I need to clean before you arrive?",
    a: "No. The whole point is that you don't have to. Just leave things as they are — that's exactly what a Reset is for.",
  },
  {
    q: "Will I get the same person every visit?",
    a: "Yes. You'll always have Lidia. No rotating staff, no strangers. Same hands, same routine, every time.",
  },
  {
    q: "How does the subscription work?",
    a: "You choose a rhythm — 1, 2, or 5 visits per week. There are no long-term contracts. You can pause or cancel with a week's notice, no questions asked.",
  },
  {
    q: "What areas do you serve?",
    a: "Northville, Plymouth, Novi, Canton, Livonia, and Farmington Hills. If you're nearby but not on the list, just ask — Lidia will let you know.",
  },
  {
    q: "What's a Mommy Reset?",
    a: "A gentle one-hour visit timed around nap time. Lidia arrives quietly, resets the kitchen, folds a basket of laundry, tidies the play area, and leaves before the baby wakes. You rest — we reset.",
  },
  {
    q: "Are add-ons included in my subscription?",
    a: "Most add-ons are priced separately and can be stacked onto any visit. The exception is the Daily Reset plan (5×/week), which includes the Mommy Reset add-on at no extra charge.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the short booking form — it takes two minutes. Lidia will reply personally within a day with a soft hello and a couple of times that work.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "No contracts, no fine print. Pricing is a starting point that Lidia confirms after learning about your home. Pause or stop anytime with a week's notice.",
  },
  {
    q: "Are you bonded and insured?",
    a: "Yes. Cozy Nest by Lidia is bonded and insured for your peace of mind.",
  },
];

const ff = { fontFamily: "var(--font-poppins), sans-serif" };
const ffSerif = { fontFamily: "var(--font-lora), serif" };

export default function FaqModal({ onClose }: { onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/40 backdrop-blur-[2px]"
    >
      <div
        className="bg-[#f0ece4] w-full md:max-w-2xl md:rounded-2xl rounded-t-2xl max-h-[88vh] md:max-h-[80vh] flex flex-col shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Frequently asked questions"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-[#e8e2d9] shrink-0">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#7a9478] mb-1" style={ff}>
              Questions
            </p>
            <h2 className="text-2xl text-[#3d5c44]" style={ffSerif}>
              A few things people ask
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-[#e8e2d9] flex items-center justify-center text-[#3d5c44] hover:bg-[#ddd8cf] transition-colors shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* FAQ list */}
        <div className="overflow-y-auto px-7 py-5 space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  isOpen ? "bg-[#e8e2d9] border-[#d4cfc6]" : "bg-[#e8e2d9]/50 border-transparent hover:border-[#d4cfc6]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm text-[#3d5c44] font-medium leading-snug" style={ff}>
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-5 h-5 rounded-full border border-[#7a9478] flex items-center justify-center text-[#7a9478] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{ fontSize: "14px", lineHeight: 1 }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm text-[#5a6b5c] font-light leading-relaxed" style={ff}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer nudge */}
        <div className="px-7 py-5 border-t border-[#e8e2d9] shrink-0">
          <p className="text-xs text-[#7a9478] italic text-center" style={ffSerif}>
            Still wondering about something? Lidia is happy to answer — just{" "}
            <a
              href="mailto:hello@cozynestbylidia.com"
              className="text-[#3d5c44] underline underline-offset-2 hover:text-[#c87c6a] transition-colors"
            >
              send a note
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
