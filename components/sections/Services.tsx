"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. We craft strategies that position your brand for lasting impact.",
  },
  {
    number: "02",
    title: "Marketing Consulting",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Data-driven insights to accelerate your business growth.",
  },
  {
    number: "03",
    title: "Business Development",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Building meaningful partnerships and expanding your reach.",
  },
];

export default function Services() {
  return (
    <section className="py-32" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
            <span className="text-xs tracking-[0.4em] uppercase font-light" style={{ color: "#C9A96E" }}>
              What We Do
            </span>
          </div>
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl md:text-6xl font-semibold text-white"
          >
            Our Services
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center gap-6 py-10 cursor-pointer"
            >
              <span
                className="text-sm font-light"
                style={{ color: "#C9A96E", minWidth: "48px" }}
              >
                {service.number}
              </span>
              <h3
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl md:text-4xl font-semibold text-white group-hover:text-[#C9A96E] transition-colors duration-300 md:w-1/3"
              >
                {service.title}
              </h3>
              <p
                className="text-base font-light leading-relaxed md:w-1/2"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {service.description}
              </p>
              <div className="md:ml-auto">
                <span
                  className="text-2xl group-hover:translate-x-2 transition-transform duration-300 inline-block"
                  style={{ color: "#C9A96E" }}
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/services"
            className="inline-block px-12 py-4 border text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A96E";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
          >
            View All Services
          </a>
        </motion.div>

      </div>
    </section>
  );
}
