"use client";

import { motion } from "framer-motion";

interface StatsProps {
  stat1Number?: string;
  stat1Label?: string;
  stat2Number?: string;
  stat2Label?: string;
  stat3Number?: string;
  stat3Label?: string;
  stat4Number?: string;
  stat4Label?: string;
}

export default function Stats({
  stat1Number = "10+",
  stat1Label = "Years of Excellence",
  stat2Number = "200+",
  stat2Label = "Clients Worldwide",
  stat3Number = "98%",
  stat3Label = "Client Satisfaction",
  stat4Number = "50+",
  stat4Label = "Industry Awards",
}: StatsProps) {
  const stats = [
    { number: stat1Number, label: stat1Label },
    { number: stat2Number, label: stat2Label },
    { number: stat3Number, label: stat3Label },
    { number: stat4Number, label: stat4Label },
  ];

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
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
