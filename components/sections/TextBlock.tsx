"use client";

import { motion } from "framer-motion";

interface TextBlockProps {
  label?: string;
  title?: string;
  body?: string;
  alignment?: "left" | "center" | "right";
}

export default function TextBlock({
  label,
  title,
  body,
  alignment = "left",
}: TextBlockProps) {
  const alignClass =
    alignment === "center"
      ? "text-center mx-auto"
      : alignment === "right"
        ? "text-right ml-auto"
        : "text-left";

  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`max-w-3xl ${alignClass}`}
        >
          {label && (
            <div className={`flex items-center gap-4 mb-6 ${alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : ""}`}>
              <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
              <span
                className="text-xs tracking-[0.4em] uppercase font-light"
                style={{ color: "#C9A96E" }}
              >
                {label}
              </span>
            </div>
          )}

          {title && (
            <h2
              style={{ fontFamily: "Playfair Display, serif", color: "white" }}
              className="text-3xl md:text-5xl font-semibold leading-tight mb-8"
            >
              {title}
            </h2>
          )}

          {body && (
            <div
              className="text-base font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
