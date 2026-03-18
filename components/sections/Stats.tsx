"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Years of Excellence" },
  { number: "200+", label: "Clients Worldwide" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Industry Awards" },
];

export default function Stats() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        scrollMarginTop: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                style={{ fontFamily: "Playfair Display, serif", color: "#C9A96E" }}
                className="text-4xl md:text-5xl font-semibold mb-2"
              >
                {stat.number}
              </div>
              <div
                className="text-xs tracking-[0.2em] uppercase font-light"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
