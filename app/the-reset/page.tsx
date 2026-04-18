import Link from "next/link";

export const metadata = {
  title: "The Home Reset — Cozy Nest by Lidia",
  description:
    "A short, regular visit designed to bring your home back to calm. Not a scrub-down. A beautiful, gentle reset.",
};

export default function TheResetPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#e8ede9] py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            The Service
          </p>
          <h1
            className="text-5xl md:text-6xl text-[#3d5c44] mb-6"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            The{" "}
            <em className="text-[#c87c6a]">Home Reset.</em>
          </h1>
          <p
            className="text-[#5a6b5c] text-lg font-light italic leading-relaxed max-w-xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            A short, regular visit designed to bring your home back to calm. Not
            a scrub-down. Not a deep clean. Just a beautiful, gentle reset you
            can rely on.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["~ 30 – 90 minute visits", "~ Daily or weekly", "~ Tidy, reset, maintain"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-[#7a9478] text-[#3d5c44] text-xs px-4 py-2 rounded-full"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-[#f0ece4] py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 divide-x divide-[#e8e2d9]">
            {[
              {
                num: "i.",
                title: "Short by design",
                desc: "Half-hour to ninety minutes — enough to reset, never enough to disrupt your day.",
              },
              {
                num: "ii.",
                title: "The same hands",
                desc: "You're not handed off. The same quiet visit, every time.",
              },
              {
                num: "iii.",
                title: "Calm, not chaos",
                desc: "No machinery, no commotion. Soft music if you'd like.",
              },
            ].map((p) => (
              <div key={p.num} className="px-8 py-6 text-center">
                <p
                  className="text-2xl italic text-[#c87c6a] mb-3"
                  style={{ fontFamily: "var(--font-lora), serif" }}
                >
                  {p.num}
                </p>
                <h3
                  className="text-base text-[#3d5c44] mb-2"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[#5a6b5c] font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is / isn't */}
      <section className="bg-[#f0ece4] py-6 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#e8ddd8] rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3
                className="text-lg text-[#3d5c44] font-medium mb-6"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                What a Reset is
              </h3>
              <ul className="space-y-3">
                {[
                  "Daily or weekly tidy + organize",
                  "Surfaces, sinks, bathrooms, floors",
                  "Restoring order, not deep scrubbing",
                  "A maintenance ritual, not a project",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#3d5c44] flex items-start gap-2 font-light"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    <span className="text-[#7a9478] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-lg text-[#3d5c44] font-medium mb-6"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                What a Reset isn&apos;t
              </h3>
              <ul className="space-y-3">
                {[
                  "A move-in or move-out clean",
                  "Oven, fridge or grout deep work",
                  "An all-day commitment",
                  "Something you have to prepare for",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#5a6b5c] flex items-start gap-2 font-light"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    <span className="text-[#c87c6a] mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3d5c44] py-14">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-[#e8e2d9] text-xl italic"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Ready for a calmer week?
          </p>
          <Link
            href="/book"
            className="bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#b36a5a] transition-colors"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book Your First Reset
          </Link>
        </div>
      </section>
    </>
  );
}
