import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Mom of three, founder of Cozy Nest. Short, consistent visits that bring your home back to calm — from one mom to another.",
  openGraph: {
    title: "About — Cozy Nest by Lidia",
    description:
      "Mom of three, founder of Cozy Nest. Short, consistent visits that bring your home back to calm — serving Northville and Metro Detroit.",
    url: "https://cozynestbylidia.com/about",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    title: "About — Cozy Nest by Lidia",
    description:
      "Mom of three, founder of Cozy Nest. Short, consistent visits that bring your home back to calm.",
    images: ["/opengraph-image"],
  },
};

const ff = { fontFamily: "var(--font-poppins), sans-serif" };
const ffSerif = { fontFamily: "var(--font-lora), serif" };

const callouts = [
  "Not a deep clean — a daily exhale.",
  "Tiny resets. Big relief.",
  "Your home, gently given back to you.",
  "Order, softly restored.",
  "While the baby naps, we tidy.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0ece4] py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-[#7a9478] mb-4" style={ff}>
            The story behind the studio
          </p>
          <h1 className="text-4xl md:text-5xl text-[#3d5c44] mb-10" style={ffSerif}>
            Hi, I&apos;m <em className="text-[#c87c6a]">Lidia.</em> 🤍
          </h1>

          <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
            {/* Main copy */}
            <div className="space-y-5 text-[#5a6b5c] text-sm font-light leading-relaxed" style={ff}>
              <p>
                I&apos;m a mom of three beautiful, busy kids — and life in our home moves fast.
                Between sports schedules, hockey practices, grocery runs, dinners that need to get
                on the table, and the constant coming and going… I know how quickly a home can
                shift from calm to overwhelming.
              </p>
              <p className="text-[#3d5c44] italic" style={ffSerif}>
                And I also know how much it matters.
              </p>
              <p>
                Because home isn&apos;t just where we live — it&apos;s where we land. It&apos;s
                where our kids grow, where we rest, where we try to catch our breath in between
                everything else.
              </p>
              <p>
                Cozy Nest started from a very simple place in my heart: the belief that your home
                should feel like a soft landing every single day — not just after a big clean.
              </p>
              <p>
                Not everyone needs a deep clean all the time. What most of us really need is a
                reset. A way to press the button and bring things back to calm. To walk into your
                kitchen and feel peace instead of pressure. To sit down at night and not see
                everything left undone.
              </p>
              <p className="text-[#3d5c44] italic" style={ffSerif}>
                That&apos;s where I come in.
              </p>
              <p>
                I created Cozy Nest to feel different — more personal, more gentle, more
                consistent. Short, thoughtful visits that bring your home back to itself again and
                again. I&apos;m not coming in as a stranger with a checklist. I become a steady,
                trusted part of your home — someone who knows your rhythm, your spaces, your
                little details.
              </p>
              <p className="text-[#3d5c44] font-normal" style={ff}>
                The same hands. The same care. The same quiet understanding of what your home
                needs.
              </p>
              <p>
                From one mom to another… I see you. I know how full your days are, and how heavy
                the mental load can feel. You don&apos;t need perfection. You just need a little
                help carrying it.
              </p>

              <p className="text-[#5a6b5c] italic text-xs mt-2" style={ff}>
                Serving Northville · Plymouth · Novi · Canton · Livonia · Farmington Hills
              </p>

              <Link
                href="/book"
                className="inline-block bg-[#3d5c44] text-[#f0ece4] text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#2c3a2e] transition-colors mt-2"
                style={ff}
              >
                Book a Visit
              </Link>
            </div>

            {/* Callout card */}
            <div className="bg-[#e8e2d9] rounded-2xl p-7 space-y-4">
              {callouts.map((line) => (
                <p
                  key={line}
                  className="text-[#3d5c44] text-base italic border-b border-[#d4cfc6] pb-3 last:border-0 last:pb-0"
                  style={ffSerif}
                >
                  ✨ {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#e8e2d9] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-[#7a9478] mb-3" style={ff}>
            Service Area
          </p>
          <h2 className="text-2xl text-[#3d5c44] mb-3" style={ffSerif}>
            Northville &amp; Metro Detroit suburbs
          </h2>
          <p className="text-sm text-[#5a6b5c] font-light" style={ff}>
            Northville · Plymouth · Novi · Canton · Livonia · Farmington Hills
          </p>
          <p className="text-sm text-[#7a9478] mt-2 italic" style={ff}>
            Other neighborhoods — just ask.
          </p>
        </div>
      </section>
    </>
  );
}
