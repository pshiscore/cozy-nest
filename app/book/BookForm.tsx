"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: fd.get("firstName"),
      email: fd.get("email"),
      neighborhood: fd.get("neighborhood"),
      homeSize: fd.get("homeSize"),
      whichReset: fd.get("whichReset"),
      rhythm: fd.get("rhythm"),
      notes: fd.get("notes"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#e8e2d9] rounded-2xl p-10 flex flex-col items-start justify-center min-h-[420px]">
        <div className="w-12 h-12 rounded-full bg-[#b8c8b0] flex items-center justify-center mb-6">
          <span
            className="text-xl italic text-[#3d5c44]"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            ✓
          </span>
        </div>
        <h2
          className="text-2xl text-[#3d5c44] mb-4"
          style={{ fontFamily: "var(--font-lora), serif" }}
        >
          We&apos;ll be in touch.
        </h2>
        <p
          className="text-[#5a6b5c] text-sm font-light leading-relaxed max-w-sm"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Lidia will reply personally within a day — usually sooner. Check your
          inbox for a confirmation from{" "}
          <span className="text-[#3d5c44]">hello@cozynestbylidia.com</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#e8e2d9] rounded-2xl p-8 md:p-10">
      <h2
        className="text-lg text-[#3d5c44] mb-8"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        A few gentle questions
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="Sarah"
              className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] placeholder:text-[#b8a898] focus:outline-none focus:border-[#7a9478] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            />
          </div>
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Email <span className="text-[#c87c6a]">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="sarah@hello.com"
              className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] placeholder:text-[#b8a898] focus:outline-none focus:border-[#7a9478] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Neighborhood
            </label>
            <input
              name="neighborhood"
              type="text"
              placeholder="Northville, MI"
              className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] placeholder:text-[#b8a898] focus:outline-none focus:border-[#7a9478] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            />
          </div>
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Home Size
            </label>
            <select
              name="homeSize"
              className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] focus:outline-none focus:border-[#7a9478] transition-colors appearance-none"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <option value="">Select size</option>
              <option>1 bed · 1 bath</option>
              <option>2 bed · 1 bath</option>
              <option>2 bed · 2 bath</option>
              <option>3 bed · 2 bath</option>
              <option>4+ bed · 3+ bath</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Which Reset
            </label>
            <select
              name="whichReset"
              className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] focus:outline-none focus:border-[#7a9478] transition-colors appearance-none"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <option value="">Select service</option>
              <option>Home Reset · 30 min</option>
              <option>Home Reset · 60 min</option>
              <option>Home Reset · 90 min</option>
              <option>Mommy Reset · 1 hr</option>
            </select>
          </div>
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Rhythm
            </label>
            <select
              name="rhythm"
              className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] focus:outline-none focus:border-[#7a9478] transition-colors appearance-none"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <option value="">Select frequency</option>
              <option>Daily · weekdays</option>
              <option>2× / week</option>
              <option>1× / week</option>
              <option>One-time visit</option>
            </select>
          </div>
        </div>

        <div>
          <label
            className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Anything we should know?
          </label>
          <textarea
            name="notes"
            rows={4}
            placeholder="The dog is friendly. Baby naps 1–2 pm."
            className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] placeholder:text-[#b8a898] focus:outline-none focus:border-[#7a9478] transition-colors resize-none"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          />
        </div>

        {status === "error" && (
          <p
            className="text-sm text-[#c87c6a]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {errorMsg}
          </p>
        )}

        <div className="flex items-center justify-between pt-2">
          <p
            className="text-xs text-[#7a9478] italic"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            No payment today — Lidia will reply first.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#b36a5a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {status === "submitting" ? "Sending…" : "Send to Lidia →"}
          </button>
        </div>
      </form>
    </div>
  );
}
