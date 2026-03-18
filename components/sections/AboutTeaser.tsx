"use client";

import { motion } from "framer-motion";

export default function AboutTeaser() {
  return (
    <section className="py-32" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

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
                Who We Are
              </span>
            </div>
            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-8"
            >
              Excellence Is Not
              <br />
              <span className="italic" style={{ color: "#C9A96E" }}>An Option</span>
            </h2>
            <p
              className="text-base font-light leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p
              className="text-base font-light leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
            
              href="/about"
              className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300"
              style={{ backgroundColor: "#C9A96E", color: "#080808" }}
            >
              Our Story
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
                className="absolute inset-0 border"
                style={{ borderColor: "rgba(201,169,110,0.2)" }}
              />
              {/* Inner content box */}
              <div
                className="absolute inset-6 flex flex-col items-center justify-center text-center p-8"
                style={{ backgroundColor: "rgba(201,169,110,0.05)", borderColor: "rgba(201,169,110,0.1)", border: "1px solid" }}
              >
                <div
                  style={{ fontFamily: "Playfair Display, serif", color: "#C9A96E" }}
                  className="text-7xl font-semibold mb-2"
                >
                  10+
                </div>
                <div className="text-sm tracking-[0.3em] uppercase font-light text-white/50 mb-8">
                  Years of Excellence
                </div>
                <div
                  className="w-12 h-[1px] mb-8"
                  style={{ backgroundColor: "#C9A96E" }}
                />
                <p
                  className="text-sm font-light leading-relaxed italic"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  "Dedicated to delivering extraordinary results for every client."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
