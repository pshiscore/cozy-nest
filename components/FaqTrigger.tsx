"use client";

import { useState } from "react";
import FaqModal from "./FaqModal";

export default function FaqTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border border-[#3d5c44] text-[#3d5c44] text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#e8e2d9] transition-colors"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        Read the FAQ
      </button>
      {open && <FaqModal onClose={() => setOpen(false)} />}
    </>
  );
}
