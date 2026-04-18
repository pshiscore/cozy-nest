import Link from "next/link";

export const metadata = {
  title: "Add-Ons — Cozy Nest by Lidia",
  description:
    "Extra touches for when you need a little more. Add any of these to your regular reset.",
};

const addOns = [
  {
    key: "f",
    title: "Fridge Cleaning",
    desc: "Everything out, shelves wiped, expired items removed. Your fridge, fresh again.",
    time: "30–45 min",
  },
  {
    key: "p",
    title: "Pantry Reset",
    desc: "Grouped, labelled, and ordered. Snacks where snacks go. Calm where chaos was.",
    time: "30–45 min",
  },
  {
    key: "o",
    title: "Organization Projects",
    desc: "A drawer, a closet, a mudroom. One space transformed from cluttered to calm.",
    time: "60–90 min",
  },
  {
    key: "d",
    title: "Deep Clean",
    desc: "Baseboards, ceiling fans, inside cabinets. The thorough once-over your home deserves.",
    time: "2–4 hrs",
  },
  {
    key: "t",
    title: "Toy Purge",
    desc: "Sort, donate, and rehome. You choose what stays — we do the rest with care.",
    time: "60 min",
  },
];

export default function AddOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0ece4] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            A little more, when you need it
          </p>
          <h1
            className="text-5xl md:text-6xl text-[#3d5c44] mb-6"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            The{" "}
            <em className="text-[#c87c6a]">Add-Ons.</em>
          </h1>
          <p
            className="text-[#5a6b5c] text-base font-light leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Your regular reset handles the daily rhythm. Add-ons go a layer
            deeper — one space, one project, one thorough refresh. Stack them
            onto any visit or book them standalone.
          </p>
        </div>
      </section>

      {/* Add-on cards */}
      <section className="bg-[#f0ece4] pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.key}
                className="bg-[#e8e2d9] rounded-2xl p-8 flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#b8c8b0] flex items-center justify-center">
                  <span
                    className="text-base italic text-[#3d5c44]"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                  >
                    {addon.key}
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2
                      className="text-base text-[#3d5c44] font-medium"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {addon.title}
                    </h2>
                    <span
                      className="text-xs text-[#7a9478] tracking-wide"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      ~ {addon.time}
                    </span>
                  </div>
                  <p
                    className="text-sm text-[#5a6b5c] font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {addon.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Booking nudge card */}
            <div className="bg-[#3d5c44] rounded-2xl p-8 flex flex-col justify-between">
              <p
                className="text-[#e8e2d9] text-xl italic mb-6"
                style={{ fontFamily: "var(--font-lora), serif" }}
              >
                Not sure which add-on fits? Just tell us — Lidia will suggest
                the right one.
              </p>
              <Link
                href="/book"
                className="bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#b36a5a] transition-colors self-start"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Book with Add-Ons
              </Link>
            </div>
          </div>

          <p
            className="text-center text-xs text-[#7a9478] mt-10 tracking-wide"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Add-on pricing quoted at booking. Most add-ons can be combined with
            any subscription plan.
          </p>
        </div>
      </section>
    </>
  );
}
