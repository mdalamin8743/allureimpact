"use client";

import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Hero({
  title = "Elevating Brands",
  subtitle = "With Purpose",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We craft extraordinary experiences that leave a lasting impression.",
  buttonText = "Our Services",
  buttonLink = "/services",
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#080808", scrollMarginTop: "80px" }}
    >

      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold glow top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      {/* Gold glow bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
          <span
            className="text-xs tracking-[0.4em] uppercase font-light"
            style={{ color: "#C9A96E" }}
          >
            Welcome to Allure Impact
          </span>
          <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ fontFamily: "Playfair Display, serif", color: "white" }}
          className="text-4xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6"
        >
          {title}
          <br />
          <span className="italic" style={{ color: "#C9A96E" }}>{subtitle}</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buttonLink}
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300"
            style={{ backgroundColor: "#C9A96E", color: "#080808" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4B97E")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A96E")}
          >
            {buttonText}
          </a>

          <a
            href="/contact"
            className="px-10 py-4 border text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C9A96E";
              e.currentTarget.style.color = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "white";
            }}
          >
            Get In Touch
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8"
          style={{ background: "linear-gradient(to bottom, #C9A96E, transparent)" }}
        />
      </motion.div>

    </section>
  );
}
