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
    <section
      className="pt-24 md:pt-32 pb-24 md:pb-32"
      style={{ backgroundColor: "#080808", scrollMarginTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

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
            style={{ fontFamily: "Playfair Display, serif", color: "white" }}
            className="text-4xl md:text-6xl font-semibold"
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
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-10 cursor-pointer"
            >
              <span
                className="text-sm font-light"
                style={{ color: "#C9A96E", minWidth: "48px" }}
              >
                {service.number}
              </span>
              <h3
                style={{ fontFamily: "Playfair Display, serif", color: "white" }}
                className="text-2xl md:text-4xl font-semibold transition-colors duration-300 md:w-1/3"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {service.title}
              </h3>
              <p
                className="text-sm md:text-base font-light leading-relaxed md:w-1/2"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {service.description}
              </p>
              <div className="md:ml-auto">
                <span
                  className="text-2xl inline-block transition-transform duration-300 group-hover:translate-x-2"
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
              e.currentTarget.style.borderColor = "#C9A96E";
              e.currentTarget.style.color = "#C9A96E";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "white";
            }}
          >
            View All Services
          </a>
        </motion.div>

      </div>
    </section>
  );
}
