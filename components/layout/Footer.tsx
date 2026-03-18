"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Logo + tagline */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span
                style={{ fontFamily: "Playfair Display, serif", color: "white" }}
                className="text-xl font-semibold tracking-[0.15em] uppercase"
              >
                Allure
              </span>
              <span
                className="text-[10px] font-light tracking-[0.45em] uppercase"
                style={{ color: "#C9A96E" }}
              >
                Impact
              </span>
            </div>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Elevating brands with purpose, precision, and elegance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "#C9A96E" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "#C9A96E" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li
                className="text-sm font-light"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                admin@allureimpact.ca
              </li>
              <li
                className="text-sm font-light"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Canada
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs font-light tracking-wider"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()} Allure Impact. All rights reserved.
          </p>
          <div
            className="h-[1px] w-12"
            style={{ backgroundColor: "#C9A96E" }}
          />
        </div>

      </div>
    </footer>
  );
}
