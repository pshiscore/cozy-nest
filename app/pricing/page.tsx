import Link from "next/link";

export const metadata = {
  title: "Pricing — Cozy Nest by Lidia",
  description: "Three subscription rhythms. No long contracts, no fine print.",
};

const plans = [
  {
    name: "The Soft Weekly",
    visits: "1 Visit / Week",
    price: "$135",
    unit: "/wk",
    perVisit: "≈ $135 / visit · 90 min",
    features: [
      "One longer reset per week",
      "Whole-home tidy & refresh",
      "Best for low-traffic homes",
      "Pause anytime",
    ],
    featured: false,
    cta: "Choose Soft",
  },
  {
    name: "The Daily Reset",
    visits: "5 Visits / Week",
    price: "$525",
    unit: "/wk",
    perVisit: "≈ $21 / visit · 60 min",
    features: [
      "One reset every weekday",
      "All rooms, every visit",
      "Mommy Reset add-ons included",
      "Priority booking · Pause anytime",
    ],
    featured: true,
    cta: "Choose Daily",
  },
  {
    name: "The Light Reset",
    visits: "2 Visits / Week",
    price: "$240",
    unit: "/wk",
    perVisit: "≈ $30 / visit · 30 min",
    features: [
      "Two short tidy visits each week",
      "Kitchen, living, bathroom touch-up",
      "Same Lidia, every time",
      "Pause anytime",
    ],
    featured: false,
    cta: "Choose Light",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0ece4] py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Subscriptions
          </p>
          <h1
            className="text-5xl md:text-6xl text-[#3d5c44] mb-6"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Calm, on a{" "}
            <em className="text-[#c87c6a]">gentle</em> rhythm.
          </h1>
          <p
            className="text-[#5a6b5c] text-base font-light italic leading-relaxed"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Three subscription rhythms — pick the cadence that matches your
            week. Pause or change anytime. No long contracts, no fine print.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-[#f0ece4] pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.featured
                    ? "bg-[#3d5c44] text-[#f0ece4]"
                    : "bg-[#e8e2d9] text-[#3d5c44]"
                }`}
              >
                {plan.featured && (
                  <span
                    className="self-start bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-6"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    Most Loved
                  </span>
                )}
                <h2
                  className={`text-xl mb-1 ${plan.featured ? "text-[#f0ece4]" : "text-[#3d5c44]"}`}
                  style={{ fontFamily: "var(--font-lora), serif" }}
                >
                  {plan.name}
                </h2>
                <p
                  className={`text-xs tracking-widest uppercase mb-5 ${plan.featured ? "text-[#b8c8b0]" : "text-[#7a9478]"}`}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {plan.visits}
                </p>
                <div className="mb-2">
                  <span
                    className={`text-4xl font-light ${plan.featured ? "text-[#f0ece4]" : "text-[#3d5c44]"}`}
                    style={{ fontFamily: "var(--font-lora), serif" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${plan.featured ? "text-[#b8c8b0]" : "text-[#7a9478]"}`}
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {plan.unit}
                  </span>
                </div>
                <p
                  className={`text-xs mb-7 ${plan.featured ? "text-[#b8c8b0]" : "text-[#7a9478]"}`}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {plan.perVisit}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm font-light flex items-start gap-2 ${plan.featured ? "text-[#e8e2d9]" : "text-[#5a6b5c]"}`}
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${plan.featured ? "bg-[#c87c6a]" : "bg-[#7a9478]"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={`text-xs tracking-widest uppercase px-6 py-3 rounded-full text-center transition-colors ${
                    plan.featured
                      ? "bg-[#c87c6a] text-[#f0ece4] hover:bg-[#b36a5a]"
                      : "border border-[#3d5c44] text-[#3d5c44] hover:bg-[#ddd8cf]"
                  }`}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Mommy Reset add-on */}
          <div className="mt-8 bg-[#e8e2d9] rounded-xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span
                className="text-sm text-[#3d5c44] font-medium"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Mommy Reset add-on:
              </span>{" "}
              <span
                className="text-sm text-[#5a6b5c] font-light"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                bottles + laundry fold + toy reset
              </span>
            </div>
            <span
              className="text-sm text-[#7a9478] whitespace-nowrap"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              + $15 / visit · skip anytime
            </span>
          </div>

          <p
            className="text-center text-xs text-[#7a9478] mt-6 italic"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Pricing is a starting point — Lidia will confirm based on your home
            size and location.
          </p>
        </div>
      </section>
    </>
  );
}
