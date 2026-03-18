'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactBlockProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  email?: string;
  location?: string;
  phone?: string;
  successMessage?: string;
}

export default function ContactBlock({
  eyebrow = 'Get In Touch',
  title = "Let's Talk",
  description = 'We respond within 24 hours.',
  email = 'admin@allureimpact.ca',
  location = 'Canada',
  phone = '',
  successMessage = 'Message sent! We will be in touch soon.',
}: ContactBlockProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,169,110,0.2)',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <section style={{ background: '#080808', padding: '96px 0' }} className="md:!py-32">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="md:px-12 lg:px-20">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px' }} className="lg:!grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
              <span style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase' }}>{eyebrow}</span>
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 400, color: '#ffffff', marginBottom: '16px' }}>{title}</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}>{description}</p>

            {submitted ? (
              <div style={{ padding: '32px', border: '1px solid rgba(201,169,110,0.3)', textAlign: 'center' }}>
                <div style={{ color: '#C9A96E', fontFamily: 'Playfair Display, serif', fontSize: '20px' }}>{successMessage}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }} className="md:!grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; }}
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; }}
                />
                <button
                  type="submit"
                  style={{ padding: '18px 48px', background: '#C9A96E', color: '#080808', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'background 0.3s ease', alignSelf: 'flex-start' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#b8944d'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A96E'; }}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' }}
          >
            <div>
              <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px' }}>Email</div>
              <a href={`mailto:${email}`} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{email}</a>
            </div>
            {location && (
              <div>
                <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px' }}>Location</div>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>{location}</p>
              </div>
            )}
            {phone && (
              <div>
                <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px' }}>Phone</div>
                <a href={`tel:${phone}`} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{phone}</a>
              </div>
            )}
            {/* Decorative element */}
            <div style={{ marginTop: '24px', padding: '32px', border: '1px solid rgba(201,169,110,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1px', left: '0', width: '60px', height: '1px', background: '#C9A96E' }} />
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                &ldquo;We believe every interaction is an opportunity to create lasting impact.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
