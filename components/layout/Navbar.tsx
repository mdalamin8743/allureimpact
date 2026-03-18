'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : '1px solid transparent',
        }}
        className="md:!px-12 lg:!px-20"
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#ffffff', letterSpacing: '2px' }}>
            ALLURE
          </span>
          <span style={{ fontSize: '10px', fontWeight: 500, color: '#C9A96E', letterSpacing: '4px', textTransform: 'uppercase' }}>
            IMPACT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none', alignItems: 'center', gap: '40px' }} className="md:!flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', letterSpacing: '3px', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'flex', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', zIndex: 1001 }}
          className="md:!hidden"
          aria-label="Toggle menu"
        >
          <span style={{ width: '24px', height: '1px', background: mobileOpen ? '#C9A96E' : '#ffffff', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
          <span style={{ width: '24px', height: '1px', background: mobileOpen ? 'transparent' : '#ffffff', transition: 'all 0.3s ease' }} />
          <span style={{ width: '24px', height: '1px', background: mobileOpen ? '#C9A96E' : '#ffffff', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(8,8,8,0.98)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#ffffff', textDecoration: 'none', letterSpacing: '4px' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
