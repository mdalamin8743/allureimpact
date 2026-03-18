'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroBlockProps {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showScrollIndicator?: boolean;
}

export default function HeroBlock({
  eyebrow = 'Welcome',
  title = 'Your Big Headline Here',
  titleAccent = 'Accent Line',
  description = 'Your description here.',
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink = '/about',
  showScrollIndicator = true,
}: HeroBlockProps) {
  return (
    <section
      style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative gold line */}
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, #C9A96E 30%, #C9A96E 70%, transparent)', opacity: 0.15 }} />
      <div style={{ position: 'absolute', top: 0, right: '15%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, #C9A96E 40%, #C9A96E 60%, transparent)', opacity: 0.1 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }} className="md:px-12 lg:px-20">
        <div style={{ maxWidth: '900px' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
            <span style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 500 }}>
              {eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 400, lineHeight: 1.1, color: '#ffffff', marginBottom: '8px' }}
          >
            {title}
          </motion.h1>

          {/* Title Accent */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 400, lineHeight: 1.1, color: '#C9A96E', fontStyle: 'italic', marginBottom: '32px' }}
          >
            {titleAccent}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: '550px', marginBottom: '48px' }}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link
              href={primaryButtonLink}
              style={{ padding: '16px 40px', background: '#C9A96E', color: '#080808', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#b8944d'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A96E'; }}
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              style={{ padding: '16px 40px', border: '1px solid rgba(201,169,110,0.4)', color: '#C9A96E', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'; }}
            >
              {secondaryButtonText}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #C9A96E, transparent)' }}
          />
        </motion.div>
      )}
    </section>
  );
}
