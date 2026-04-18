export const metadata = {
  title: "What's Included — Cozy Nest by Lidia",
  description: "Room by room, every visit follows the same calm rhythm.",
};

const rooms = [
  {
    key: "k",
    title: "Kitchen Reset",
    time: "10–15 MIN",
    items: [
      "Load & unload dishwasher",
      "Hand wash a few items if needed",
      "Wipe counters & sink",
      "Quick stovetop wipe",
      "Take out trash if full",
    ],
  },
  {
    key: "l",
    title: "Living Areas",
    time: "10–15 MIN",
    items: [
      "Pick up & organize clutter",
      "Fluff pillows & fold blankets",
      "Quick surface wipe — coffee & side tables",
      "Toys, throws, misc items rehomed",
    ],
  },
  {
    key: "f",
    title: "Quick Floor Refresh",
    time: "5–10 MIN",
    items: [
      "Light vacuum or sweep of main areas",
      "Tidy entryway shoes & bags",
      "Spot-clean visible scuffs",
    ],
  },
  {
    key: "b",
    title: "Bathroom Touch-Up",
    time: "5–10 MIN",
    items: [
      "Wipe counters & sink",
      "Quick toilet wipe (as needed)",
      "Replace towels",
      "Restock toilet paper",
    ],
  },
  {
    key: "z",
    title: "Bedroom Reset",
    time: "5–10 MIN",
    items: [
      "Make beds or straighten linens",
      "Tidy nightstands & surfaces",
      "Put away visible clutter",
    ],
  },
  {
    key: "m",
    title: "Mom-Life Touches",
    time: "AS TIME ALLOWS",
    items: [
      "Toy reset & play area organize",
      "Fold a basket of laundry",
      "Prep bottles or tidy feeding area",
      '"End of day" reset — peace, restored',
    ],
  },
];

export default function IncludedPage() {
  return (
    <>
      <section className="bg-[#f0ece4] py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-[#7a9478] mb-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Inside a Reset
            </p>
            <h1
              className="text-4xl md:text-5xl text-[#3d5c44] mb-4"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Room by room,{" "}
              <em className="text-[#c87c6a]">gently</em>
            </h1>
            <p
              className="text-[#5a6b5c] text-base font-light max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Every visit follows the same calm rhythm — small, intentional
              touches that put the home back in order without taking over your
              day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <div
                key={room.key}
                className="bg-[#e8e2d9] rounded-2xl p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b8c8b0] flex items-center justify-center">
                      <span
                        className="text-sm text-[#3d5c44] italic"
                        style={{ fontFamily: "var(--font-lora), serif" }}
                      >
                        {room.key}
                      </span>
                    </div>
                    <h2
                      className="text-base text-[#3d5c44] font-medium"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {room.title}
                    </h2>
                  </div>
                  <span
                    className="text-xs text-[#7a9478] tracking-wide"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {room.time}
                  </span>
                </div>
                <ul className="space-y-2">
                  {room.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#5a6b5c] font-light flex items-start gap-2"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7a9478] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
