import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3d5c44] text-[#e8e2d9]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-sm italic text-[#b8c8b0] mb-2"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              come home to calm.
            </p>
            <p
              className="text-xs text-[#7a9478]"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Cozy Nest by Lidia — Home Reset Studio · Northville, MI
            </p>
            <p
              className="text-xs text-[#7a9478] mt-1"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Serving Northville · Plymouth · Novi · Canton · Livonia · Farmington Hills
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <p
              className="text-xs tracking-widest uppercase text-[#b8c8b0]"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <Link href="/" className="hover:text-[#f0ece4] transition-colors">
                cozynestbylidia.com
              </Link>
            </p>
            <a
              href="mailto:hello@cozynestbylidia.com"
              className="text-xs text-[#b8c8b0] hover:text-[#f0ece4] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              hello@cozynestbylidia.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
