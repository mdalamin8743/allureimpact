"use client";

import { motion } from "framer-motion";

interface AboutTeaserProps {
  label?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  statNumber?: string;
  statLabel?: string;
  quote?: string;
}

export default function AboutTeaser({
  label = "Who We Are",
  title = "Excellence Is Not",
  titleAccent = "An Option",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n\nQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  buttonText = "Our Story",
  buttonLink = "/about",
  statNumber = "10+",
  statLabel = "Years of Excellence",
  quote = "Dedicated to delivering extraordinary results for every client.",
}: AboutTeaserProps) {
  const paragraphs = description.split("\n\n");

  return (
    <section
      className="pt-24 md:pt-32 pb-24 md:pb-32"
      style={{ backgroundColor: "#111111", scrollMarginTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
              <span className="text-xs tracking-[0.4em] uppercase font-light" style={{ color: "#C9A96E" }}>
                {label}
              </span>
            </div>
            <h2
              style={{ fontFamily: "Playfair Display, serif", color: "white" }}
              className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
            >
              {title}
              <br />
              <span className="italic" style={{ color: "#C9A96E" }}>{titleAccent}</span>
            </h2>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base font-light leading-relaxed ${i < paragraphs.length - 1 ? "mb-6" : "mb-10"}`}
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {p}
              </p>
            ))}
            <a
              href={buttonLink}
              className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300"
              style={{ backgroundColor: "#C9A96E", color: "#080808" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4B97E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A96E")}
            >
              {buttonText}
            </a>
          </motion.div>

          {/* Right side - decorative box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="w-full aspect-square max-w-md mx-auto relative"
            >
              {/* Outer border box */}
              <div
                className="absolute inset-0"
                style={{ border: "1px solid rgba(201,169,110,0.2)" }}
              />
              {/* Inner content box */}
              <div
                className="absolute inset-6 flex flex-col items-center justify-center text-center p-8"
                style={{ backgroundColor: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.1)" }}
              >
                <div
                  style={{ fontFamily: "Playfair Display, serif", color: "#C9A96E" }}
                  className="text-7xl font-semibold mb-2"
                >
                  {statNumber}
                </div>
                <div
                  className="text-sm tracking-[0.3em] uppercase font-light mb-8"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {statLabel}
                </div>
                <div
                  className="w-12 h-[1px] mb-8"
                  style={{ backgroundColor: "#C9A96E" }}
                />
                <p
                  className="text-sm font-light leading-relaxed italic"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
