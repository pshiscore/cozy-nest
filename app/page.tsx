import Link from "next/link";
import type { Metadata } from "next";
import FaqTrigger from "@/components/FaqTrigger";

export const metadata: Metadata = {
  title: "Cozy Nest by Lidia — Home Resets in Northville, MI",
  description:
    "A subscription cleaning studio built around short, frequent visits. Come home to calm.",
  openGraph: {
    title: "Cozy Nest by Lidia — Home Resets in Northville, MI",
    description:
      "A subscription cleaning studio built around short, frequent visits. Come home to calm.",
    url: "https://cozynestbylidia.com",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    title: "Cozy Nest by Lidia — Home Resets in Northville, MI",
    description:
      "A subscription cleaning studio built around short, frequent visits. Come home to calm.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Cozy Nest by Lidia",
  description:
    "A subscription home-reset studio in Northville, MI. Short, frequent visits that bring your home back to calm.",
  url: "https://cozynestbylidia.com",
  email: "hello@cozynestbylidia.com",
  // TODO: add "telephone" once business number is confirmed
  // TODO: add "sameAs" for Instagram / Google Business Profile URLs
  address: {
    "@type": "PostalAddress",
    addressLocality: "Northville",
    addressRegion: "MI",
    addressCountry: "US",
  },
  areaServed: [
    "Northville, MI",
    "Plymouth, MI",
    "Novi, MI",
    "Canton, MI",
    "Livonia, MI",
    "Farmington Hills, MI",
  ],
  // TODO: confirm exact hours before adding openingHoursSpecification
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#f0ece4] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-[#e8e2d9] rounded-full opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#d4cfc6] rounded-full opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-2 gap-12 items-center relative">
          {/* Left: copy */}
          <div>
            <p
              className="text-xs tracking-widest uppercase text-[#7a9478] mb-6"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              A small cleaning studio in Northville, MI
            </p>
            <h1
              className="text-5xl md:text-6xl text-[#3d5c44] leading-tight mb-6"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Come home
              <br />
              to{" "}
              <em className="text-[#c87c6a]">
                calm.
              </em>
            </h1>
            <p
              className="text-[#5a6b5c] text-base font-light leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              We don&apos;t do deep cleans. We do tiny, beautiful resets —
              short visits that put the kitchen back together, fluff the throw,
              fold the laundry. So your home feels like itself again, every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="bg-[#3d5c44] text-[#f0ece4] text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#2c3a2e] transition-colors"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Start with a Reset
              </Link>
              <Link
                href="/the-reset/included"
                className="border border-[#3d5c44] text-[#3d5c44] text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#e8e2d9] transition-colors"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                See What&apos;s Included
              </Link>
            </div>
          </div>

          {/* Right: card with testimonial */}
          <div className="relative">
            <div className="bg-[#e8e2d9] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-32 h-32 bg-[#b8c8b0] rounded-full opacity-50" />
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-[#7a9478] rounded-full opacity-30" />
              <div className="relative">
                <p
                  className="text-xs tracking-widest uppercase text-[#7a9478] mb-16"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  est. 2026
                </p>
                <blockquote>
                  <p
                    className="text-[#3d5c44] text-lg italic leading-snug mb-3"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                  >
                    &ldquo;I came home and could finally breathe.&rdquo;
                  </p>
                  <cite
                    className="text-xs tracking-widest uppercase text-[#7a9478] not-italic"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    — Sarah · Northville
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-[#e8e2d9] bg-[#ede9e1]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            {[
              "30 – 90 Minute Visits",
              "Bonded & Insured",
              "Subscription Based",
              "Eco-Conscious",
            ].map((item) => (
              <span
                key={item}
                className="text-xs tracking-widest uppercase text-[#7a9478] flex items-center gap-2"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7a9478] inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three ways we help */}
      <section className="bg-[#f0ece4] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest uppercase text-[#7a9478] mb-3"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Three ways we help
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#3d5c44]"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              A daily exhale,{" "}
              <em className="text-[#c87c6a]">in three forms</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                letter: "r",
                title: "The Home Reset",
                desc: "A short, frequent tidy that brings your space back to calm — kitchen, surfaces, floors, the basics.",
                href: "/the-reset",
              },
              {
                letter: "m",
                title: "Mommy Reset",
                desc: "An hour while baby naps. Bottles tidied, toys rehomed, laundry folded. You wake up to peace.",
                href: "/mommy-reset",
              },
              {
                letter: "w",
                title: "Weekly Rituals",
                desc: "Subscriptions of 2–5 visits per week. Same tidy hands, same quiet routine, every week.",
                href: "/pricing",
              },
            ].map((card) => (
              <Link
                key={card.letter}
                href={card.href}
                className="group bg-[#e8e2d9] rounded-2xl p-8 hover:bg-[#ddd8cf] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#b8c8b0] flex items-center justify-center mb-6">
                  <span
                    className="text-sm text-[#3d5c44] italic"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                  >
                    {card.letter}
                  </span>
                </div>
                <h3
                  className="text-xl text-[#3d5c44] mb-3"
                  style={{ fontFamily: "var(--font-lora), serif" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm text-[#5a6b5c] font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#3d5c44] py-10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#b8c8b0] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Northville · Plymouth · Novi · Canton
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#f0ece4] mb-8"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Ready for a calmer home?
          </h2>
          <Link
            href="/book"
            className="bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#b36a5a] transition-colors inline-block"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book Your First Reset
          </Link>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-[#f0ece4] py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#7a9478] mb-3"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Questions
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#3d5c44] mb-4"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            A few things people ask
          </h2>
          <p
            className="text-sm text-[#5a6b5c] font-light mb-8"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            From what a reset actually covers to how subscriptions work.
          </p>
          <FaqTrigger />
        </div>
      </section>
    </>
  );
}
