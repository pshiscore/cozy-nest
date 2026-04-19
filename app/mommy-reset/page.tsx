import Link from "next/link";

export const metadata = {
  title: "Mommy Reset",
  description:
    "One soft hour while the baby naps. The kitchen put back together. Peace waiting when the nap ends.",
  openGraph: {
    title: "Mommy Reset — Cozy Nest by Lidia",
    description:
      "One soft hour while the baby naps. The kitchen put back together. Toys rehomed, laundry folded. Peace waiting when the nap ends.",
    url: "https://cozynestbylidia.com/mommy-reset",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    title: "Mommy Reset — Cozy Nest by Lidia",
    description:
      "One soft hour while the baby naps. The kitchen put back together. Peace waiting when the nap ends.",
    images: ["/opengraph-image"],
  },
};

const steps = [
  {
    num: "i",
    title: "Tell us your rhythm",
    desc: "Nap window, doors, pets, anything we should know.",
  },
  {
    num: "ii",
    title: "We arrive softly",
    desc: "Quiet entry, no loud machinery, no fuss.",
  },
  {
    num: "iii",
    title: "One gentle hour",
    desc: "Reset the kitchen, fold the basket, tidy the play space.",
  },
  {
    num: "iv",
    title: "You wake to calm",
    desc: "Same hands, same routine, every visit.",
  },
];

export default function MommyResetPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0e8e4] py-10 md:py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8ddd8] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-16 w-48 h-48 bg-[#b8c8b0] rounded-full opacity-30 translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <p
              className="text-xs tracking-widest uppercase text-[#7a9478] mb-6"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              For the moms running quiet marathons
            </p>
            <h1
              className="text-5xl md:text-6xl text-[#3d5c44] leading-tight mb-6"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              While the baby
              <br />
              <em className="text-[#c87c6a]">naps</em>, we tidy.
            </h1>
            <p
              className="text-[#5a6b5c] text-base font-light italic leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              One soft hour. The kitchen put back together. Toys returned to
              their baskets. Bottles ready. So when the nap ends, you don&apos;t
              open your eyes to a mountain — you open them to peace.
            </p>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Four steps */}
      <section className="bg-[#f0ece4] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest uppercase text-[#7a9478] mb-3"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              How a Mommy Reset works
            </p>
            <h2
              className="text-4xl text-[#3d5c44]"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Four <em className="text-[#c87c6a]">small</em> steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#e8e2d9] rounded-2xl p-6 text-center"
              >
                <p
                  className="text-2xl italic text-[#c87c6a] mb-3"
                  style={{ fontFamily: "var(--font-lora), serif" }}
                >
                  {step.num}
                </p>
                <h3
                  className="text-sm text-[#3d5c44] font-medium mb-2"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs text-[#5a6b5c] font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#3d5c44] py-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote>
            <p
              className="text-[#e8e2d9] text-xl md:text-2xl italic leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              &ldquo;It&apos;s the only hour of the week I don&apos;t feel
              behind. I lie down, and I know when I get up the kitchen will be a
              kitchen again.&rdquo;
            </p>
            <cite
              className="text-xs tracking-widest uppercase text-[#b8c8b0] not-italic"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              — A new mom of two · Northville
            </cite>
          </blockquote>
          <Link
            href="/book"
            className="mt-10 inline-block bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#b36a5a] transition-colors"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Mommy Reset
          </Link>
        </div>
      </section>
    </>
  );
}
