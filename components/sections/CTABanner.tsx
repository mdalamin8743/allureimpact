"use client";

import { motion } from "framer-motion";

interface CTABannerProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTABanner({
  title = "Ready to elevate your brand?",
  buttonText = "Get In Touch",
  buttonLink = "/contact",
}: CTABannerProps) {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Subtle gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
            <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif", color: "white" }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-10"
          >
            {title}
          </h2>

          <a
            href={buttonLink}
            className="inline-block px-12 py-5 text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300"
            style={{ backgroundColor: "#C9A96E", color: "#080808" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4B97E")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A96E")}
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
