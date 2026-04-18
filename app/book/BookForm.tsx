"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_TYPES = [
  "Free Walkthrough · 20 min",
  "Home Reset · 60 min",
  "Home Reset · 90 min",
  "Mommy Reset · 1 hr",
  "Not sure — help me decide",
] as const;

const FREQUENCIES = [
  "2× / week",
  "1× / week",
  "One-time visit",
  "Not sure — help me decide",
] as const;

const ADDONS: { value: string; time: string }[] = [
  { value: "Fridge Cleaning", time: "30–45 min" },
  { value: "Pantry Reset", time: "30–45 min" },
  { value: "Organization Projects", time: "60–90 min" },
  { value: "Deep Clean", time: "2–4 hrs" },
  { value: "Toy Purge", time: "60 min" },
];

const labelClass =
  "block text-xs tracking-widest uppercase text-[#7a9478] mb-2";
const inputClass =
  "w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] placeholder:text-[#b8a898] focus:outline-none focus:border-[#7a9478] transition-colors";
const selectClass = inputClass + " appearance-none";
const ff = { fontFamily: "var(--font-poppins), sans-serif" };

export default function BookForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  function toggleAddon(value: string) {
    setSelectedAddons((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
    );
  }

  function validate(fd: FormData): Record<string, string> {
    const errors: Record<string, string> = {};
    if (!fd.get("firstName")?.toString().trim()) errors.firstName = "First name is required.";
    if (!fd.get("email")?.toString().trim()) errors.email = "Email is required.";
    if (!fd.get("serviceType")) errors.serviceType = "Please select a service.";
    if (!fd.get("serviceFrequency")) errors.serviceFrequency = "Please select a rhythm.";
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const errors = validate(fd);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStatus("submitting");

    const payload = {
      firstName: fd.get("firstName"),
      email: fd.get("email"),
      neighborhood: fd.get("neighborhood") || undefined,
      serviceType: fd.get("serviceType"),
      serviceFrequency: fd.get("serviceFrequency"),
      addons: selectedAddons.length > 0 ? selectedAddons : undefined,
      message: fd.get("message") || undefined,
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
          <span className="text-xl italic text-[#3d5c44]" style={{ fontFamily: "var(--font-lora), serif" }}>
            ✓
          </span>
        </div>
        <h2 className="text-2xl text-[#3d5c44] mb-4" style={{ fontFamily: "var(--font-lora), serif" }}>
          We&apos;ll be in touch.
        </h2>
        <p className="text-[#5a6b5c] text-sm font-light leading-relaxed max-w-sm" style={ff}>
          Lidia will reply personally within a day — usually sooner. Check your inbox for a
          confirmation from <span className="text-[#3d5c44]">hello@cozynestbylidia.com</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#e8e2d9] rounded-2xl p-8 md:p-10">
      <h2 className="text-lg text-[#3d5c44] mb-8" style={ff}>
        A few gentle questions
      </h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* First Name + Email */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} style={ff}>
              First Name <span className="text-[#c87c6a]">*</span>
            </label>
            <input name="firstName" type="text" placeholder="Sarah" className={inputClass} style={ff} />
            {fieldErrors.firstName && (
              <p className="text-xs text-[#c87c6a] mt-1" style={ff}>{fieldErrors.firstName}</p>
            )}
          </div>
          <div>
            <label className={labelClass} style={ff}>
              Email <span className="text-[#c87c6a]">*</span>
            </label>
            <input name="email" type="email" placeholder="sarah@hello.com" className={inputClass} style={ff} />
            {fieldErrors.email && (
              <p className="text-xs text-[#c87c6a] mt-1" style={ff}>{fieldErrors.email}</p>
            )}
          </div>
        </div>

        {/* Neighborhood (full width) */}
        <div>
          <label className={labelClass} style={ff}>
            Neighborhood
          </label>
          <input
            name="neighborhood"
            type="text"
            placeholder="Northville, MI"
            className={inputClass}
            style={ff}
          />
        </div>

        {/* Which Reset + Rhythm */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} style={ff}>
              Which Reset <span className="text-[#c87c6a]">*</span>
            </label>
            <select name="serviceType" defaultValue="" className={selectClass} style={ff}>
              <option value="" disabled>Select service</option>
              {SERVICE_TYPES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            {fieldErrors.serviceType && (
              <p className="text-xs text-[#c87c6a] mt-1" style={ff}>{fieldErrors.serviceType}</p>
            )}
          </div>
          <div>
            <label className={labelClass} style={ff}>
              Rhythm <span className="text-[#c87c6a]">*</span>
            </label>
            <select name="serviceFrequency" defaultValue="" className={selectClass} style={ff}>
              <option value="" disabled>Select frequency</option>
              {FREQUENCIES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            {fieldErrors.serviceFrequency && (
              <p className="text-xs text-[#c87c6a] mt-1" style={ff}>{fieldErrors.serviceFrequency}</p>
            )}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <div className="mb-3">
            <span className={labelClass} style={ff}>Add-Ons</span>
            <span className="text-xs text-[#b8a898] ml-2" style={ff}>Optional — pick any that apply</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {ADDONS.map(({ value, time }) => {
              const checked = selectedAddons.includes(value);
              return (
                <label
                  key={value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    checked
                      ? "bg-[#b8c8b0] border border-[#7a9478]"
                      : "bg-[#f0ece4] border border-[#d4cfc6] hover:border-[#7a9478]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleAddon(value)}
                    className="sr-only"
                  />
                  {/* Custom checkbox indicator */}
                  <span
                    className={`w-4 h-4 rounded shrink-0 flex items-center justify-center border transition-colors ${
                      checked
                        ? "bg-[#3d5c44] border-[#3d5c44]"
                        : "bg-[#f0ece4] border-[#b8a898]"
                    }`}
                  >
                    {checked && (
                      <svg className="w-2.5 h-2.5 text-[#f0ece4]" fill="none" viewBox="0 0 10 10">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span>
                    <span className="text-sm text-[#3d5c44]" style={ff}>{value}</span>
                    <span className="text-xs text-[#7a9478] ml-1.5" style={ff}>· {time}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass} style={ff}>
            Anything we should know?
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="The dog is friendly. Baby naps 1–2 pm."
            className={inputClass + " resize-none"}
            style={ff}
          />
        </div>

        {/* Form-level error */}
        {status === "error" && (
          <p className="text-sm text-[#c87c6a]" style={ff}>{errorMsg}</p>
        )}

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-[#7a9478] italic" style={ff}>
            No payment today — Lidia will reply first.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#b36a5a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={ff}
          >
            {status === "submitting" ? "Sending…" : "Send to Lidia →"}
          </button>
        </div>
      </form>
    </div>
  );
}
