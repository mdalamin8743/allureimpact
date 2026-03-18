'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 40px' }} className="md:px-12 lg:px-20">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', marginBottom: '64px' }} className="md:!grid-cols-3">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#ffffff', letterSpacing: '2px' }}>
                ALLURE
              </span>
              <span style={{ fontSize: '10px', fontWeight: 500, color: '#C9A96E', letterSpacing: '4px', textTransform: 'uppercase' }}>
                IMPACT
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: '280px' }}>
              Elevating brands through strategic excellence and creative innovation.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '24px' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '24px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:admin@allureimpact.ca"
                style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                admin@allureimpact.ca
              </a>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Canada</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #C9A96E, transparent)', marginBottom: '24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Allure Impact. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
