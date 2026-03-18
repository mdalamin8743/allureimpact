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
    <section className="border-t border-b border-white/10 py-16 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-4xl md:text-5xl font-semibold text-gold mb-2"
              >
                {stat.number}
              </div>
              <div className="text-white/40 text-xs tracking-[0.2em] uppercase font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}