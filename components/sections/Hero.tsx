"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
            Welcome to Allure Impact
          </span>
          <div className="h-[1px] w-12 bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight mb-6"
        >
          Elevating Brands
          <br />
          <span className="italic text-gold">With Purpose</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/50 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          We craft extraordinary experiences that leave a lasting impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
            href="/services"
            className="px-10 py-4 bg-gold text-dark text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Our Services
          </a>
          
            href="/contact"
            className="px-10 py-4 border border-white/20 text-white text-sm tracking-[0.2em] uppercase font-light hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>

    </section>
  );
}
