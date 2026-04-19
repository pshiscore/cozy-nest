"use client";

import { useState } from "react";
import FaqModal from "./FaqModal";

export default function FaqTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[#b8c8b0] text-xs tracking-widest uppercase underline underline-offset-4 hover:text-[#f0ece4] transition-colors mt-4 block mx-auto"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        Have questions? See our FAQ
      </button>
      {open && <FaqModal onClose={() => setOpen(false)} />}
    </>
  );
}
