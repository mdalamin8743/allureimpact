"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:admin@allureimpact.ca?subject=${subject}&body=${body}`;
  };

  return (
    <main style={{ backgroundColor: "#080808" }}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Gold glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
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
              Contact
            </span>
            <div className="h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ fontFamily: "Playfair Display, serif", color: "white" }}
            className="text-4xl md:text-7xl font-semibold leading-tight mb-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Ready to elevate your brand? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">

            {/* Gold Divider — visible on desktop only */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px]"
              style={{ backgroundColor: "rgba(201,169,110,0.2)" }}
            />

            {/* Left — Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:pr-16"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block uppercase mb-3"
                  style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm font-light outline-none transition-all duration-300"
                  style={{
                    color: "white",
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(201,169,110,0.3)",
                    padding: "16px",
                    borderRadius: "0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)")}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block uppercase mb-3"
                  style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm font-light outline-none transition-all duration-300"
                  style={{
                    color: "white",
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(201,169,110,0.3)",
                    padding: "16px",
                    borderRadius: "0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)")}
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block uppercase mb-3"
                  style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm font-light outline-none transition-all duration-300"
                  style={{
                    color: "white",
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(201,169,110,0.3)",
                    padding: "16px",
                    borderRadius: "0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)")}
                  placeholder="Your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block uppercase mb-3"
                  style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-sm font-light outline-none resize-none transition-all duration-300"
                  style={{
                    color: "white",
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(201,169,110,0.3)",
                    padding: "16px",
                    borderRadius: "0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)")}
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full uppercase font-medium transition-colors duration-300"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#080808",
                  padding: "18px",
                  letterSpacing: "3px",
                  fontSize: "13px",
                  border: "none",
                  borderRadius: "0",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4B97E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9A96E";
                }}
              >
                Send Message
              </motion.button>
            </motion.form>

            {/* Right — Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-12 lg:pl-16"
              style={{ borderLeft: "none" }}
            >
              <div className="space-y-12">
                {/* Email */}
                <div>
                  <h3
                    className="uppercase mb-4"
                    style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:admin@allureimpact.ca"
                    className="text-lg font-light transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                    }
                  >
                    admin@allureimpact.ca
                  </a>
                </div>

                {/* Location */}
                <div>
                  <h3
                    className="uppercase mb-4"
                    style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                  >
                    Location
                  </h3>
                  <p
                    className="text-lg font-light"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Canada
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3
                    className="uppercase mb-4"
                    style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "3px" }}
                  >
                    Hours
                  </h3>
                  <p
                    className="text-lg font-light"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Mon – Fri, 9AM – 6PM EST
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="w-16"
                  style={{ height: "1px", backgroundColor: "rgba(201,169,110,0.3)" }}
                />

                {/* Tagline */}
                <p
                  className="text-sm font-light leading-relaxed max-w-sm"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  We respond within 24 hours. Let&apos;s create something
                  extraordinary together.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
