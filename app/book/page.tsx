import { Suspense } from "react";
import BookForm from "./BookForm";

export const metadata = {
  title: "Book a Visit — Cozy Nest by Lidia",
  description: "Tell us a little about your home. Lidia replies personally within a day.",
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0ece4] via-[#e8ddd8] to-[#e8ede9] py-10 md:py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Begin
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#3d5c44] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Let&apos;s get your week
            <br />
            back to <em className="text-[#c87c6a]">calm.</em>
          </h1>
          <p
            className="text-[#5a6b5c] text-base font-light italic leading-relaxed"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Tell us a little about your home and rhythm. Lidia replies
            personally within a day, usually with a soft hello and a couple of
            times that might work.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-[#f0ece4] py-10 pb-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-10">
          <Suspense fallback={<div className="bg-[#e8e2d9] rounded-2xl p-8 min-h-[420px]" />}>
            <BookForm />
          </Suspense>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#e8e2d9] rounded-2xl p-7">
              <p
                className="text-xs tracking-widest uppercase text-[#7a9478] mb-3"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Service Area
              </p>
              <h3
                className="text-lg text-[#3d5c44] mb-2"
                style={{ fontFamily: "var(--font-lora), serif" }}
              >
                Northville & nearby
              </h3>
              <p
                className="text-sm text-[#5a6b5c] font-light leading-relaxed"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Northville, Plymouth, Novi, Canton, Livonia, Farmington Hills.
                Other neighborhoods — just ask.
              </p>
            </div>

            <div className="bg-[#e8e2d9] rounded-2xl p-7">
              <p
                className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Hours
              </p>
              <div className="space-y-3">
                {[
                  { day: "Mon – Fri", time: "8a – 5p" },
                  { day: "Saturday", time: "9a – 1p" },
                  { day: "Sunday", time: "Closed" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-center border-b border-[#d4cfc6] pb-2 last:border-0"
                  >
                    <span
                      className="text-sm text-[#5a6b5c] font-light"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {row.day}
                    </span>
                    <span
                      className="text-sm text-[#3d5c44]"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#3d5c44] rounded-2xl p-7">
              <p
                className="text-xs tracking-widest uppercase text-[#b8c8b0] mb-3"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Reach Lidia
              </p>
              <a
                href="mailto:hello@cozynestbylidia.com"
                className="text-[#f0ece4] font-medium hover:text-[#e8e2d9] transition-colors block mb-2"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                hello@cozynestbylidia.com
              </a>
              <p
                className="text-sm text-[#b8c8b0] font-light leading-relaxed"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Or text the studio line. We reply within a day, almost always
                sooner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
