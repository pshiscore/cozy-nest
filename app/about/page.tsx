import Link from "next/link";

export const metadata = {
  title: "About — Cozy Nest by Lidia",
  description:
    "A small studio for tidy, calm homes. Serving Northville and Metro Detroit.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f0ece4] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              A small studio for tidy, calm homes
            </p>
            <h1
              className="text-4xl md:text-5xl text-[#3d5c44] mb-8"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Hi, I&apos;m{" "}
              <em className="text-[#c87c6a]">Lidia.</em>
            </h1>
            <div
              className="space-y-5 text-[#5a6b5c] text-base font-light leading-relaxed"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <p>
                Cozy Nest started from a simple belief: your home should feel
                like a soft landing, every single day — not just after a big
                clean.
              </p>
              <p>
                I built this studio around short, frequent visits that restore
                the quiet. Not a deep clean. Not a project. Just the gentle
                daily rhythm that makes a house feel like itself again.
              </p>
              <p>
                I serve Northville and the surrounding Metro Detroit suburbs —
                Plymouth, Novi, Canton, Livonia, and Farmington Hills. Every
                client gets the same hands, the same routine, and the same care.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Brand callouts */}
            {[
              "— Not a deep clean. A daily exhale.",
              "— Tiny resets. Big relief.",
              "— Your home, given back to you.",
              "— Order, gently restored.",
              "— While the baby naps, we tidy.",
            ].map((line) => (
              <p
                key={line}
                className="text-[#3d5c44] text-lg italic border-b border-[#e8e2d9] pb-4 last:border-0"
                style={{ fontFamily: "var(--font-lora), serif" }}
              >
                {line}
              </p>
            ))}

            <Link
              href="/book"
              className="inline-block bg-[#3d5c44] text-[#f0ece4] text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#2c3a2e] transition-colors mt-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#e8e2d9] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#7a9478] mb-3"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Service Area
          </p>
          <h2
            className="text-2xl text-[#3d5c44] mb-4"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Northville & Metro Detroit suburbs
          </h2>
          <p
            className="text-sm text-[#5a6b5c] font-light"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Northville · Plymouth · Novi · Canton · Livonia · Farmington Hills
          </p>
          <p
            className="text-sm text-[#7a9478] mt-2 italic"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Other neighborhoods — just ask.
          </p>
        </div>
      </section>
    </>
  );
}
