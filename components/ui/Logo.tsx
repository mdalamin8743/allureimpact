import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none group">
      <span
        style={{ fontFamily: "Playfair Display, serif" }}
        className="text-xl font-semibold text-white tracking-[0.15em] uppercase group-hover:text-gold transition-colors duration-300"
      >
        Allure
      </span>
      <span
        style={{ fontFamily: "Inter, sans-serif" }}
        className="text-[10px] font-light text-gold tracking-[0.45em] uppercase"
      >
        Impact
      </span>
    </Link>
  );
}