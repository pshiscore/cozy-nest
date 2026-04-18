export const metadata = {
  title: "Book a Visit — Cozy Nest by Lidia",
  description: "Tell us a little about your home. Lidia replies personally within a day.",
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0ece4] via-[#e8ddd8] to-[#e8ede9] py-20 md:py-28">
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
      <section className="bg-[#f0ece4] py-16 pb-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-10">
          {/* Form */}
          <div className="bg-[#e8e2d9] rounded-2xl p-8 md:p-10">
            <h2
              className="text-lg text-[#3d5c44] mb-8"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              A few gentle questions
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase text-[#7a9478] mb-2"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    First Name
                  </label>
                  <input
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
                    Email
                  </label>
                  <input
                    type="email"
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
                  rows={4}
                  placeholder="The dog is friendly. Baby naps 1–2 pm."
                  className="w-full bg-[#f0ece4] border border-[#d4cfc6] rounded-lg px-4 py-3 text-sm text-[#3d5c44] placeholder:text-[#b8a898] focus:outline-none focus:border-[#7a9478] transition-colors resize-none"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <p
                  className="text-xs text-[#7a9478] italic"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  No payment today — Lidia will reply first.
                </p>
                <button
                  type="submit"
                  className="bg-[#c87c6a] text-[#f0ece4] text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#b36a5a] transition-colors"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Send to Lidia →
                </button>
              </div>
            </form>
          </div>

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
              <p
                className="text-[#f0ece4] font-medium mb-2"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                hello@cozynestbylidia.com
              </p>
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
