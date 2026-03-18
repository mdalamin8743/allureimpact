'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface TwoColumnBlockProps {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
  buttonLink?: string;
  statNumber?: string;
  statLabel?: string;
  quote?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'dark' | 'darker';
}

export default function TwoColumnBlock({
  eyebrow = 'Who We Are',
  title = 'Section Title',
  titleAccent = 'Accent Words',
  description1 = 'First paragraph.',
  description2 = 'Second paragraph.',
  buttonText = 'Learn More',
  buttonLink = '/about',
  statNumber = '10+',
  statLabel = 'Years of Excellence',
  quote = 'Your quote here.',
  imagePosition = 'right',
  backgroundColor = 'darker',
}: TwoColumnBlockProps) {
  const bg = backgroundColor === 'darker' ? '#080808' : '#111111';

  const textContent = (
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
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 400, color: '#ffffff', lineHeight: 1.2, marginBottom: '8px' }}>
        {title}
      </h2>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 400, color: '#C9A96E', fontStyle: 'italic', marginBottom: '32px' }}>
        {titleAccent}
      </h3>
      <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>{description1}</p>
      <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>{description2}</p>
      <Link
        href={buttonLink}
        style={{ display: 'inline-block', padding: '16px 40px', border: '1px solid #C9A96E', color: '#C9A96E', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A96E'; e.currentTarget.style.color = '#080808'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A96E'; }}
      >
        {buttonText}
      </Link>
    </motion.div>
  );

  const decorativeContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
    >
      {/* Stat Box */}
      <div style={{ border: '1px solid rgba(201,169,110,0.2)', padding: '40px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-1px', left: '0', width: '60px', height: '1px', background: '#C9A96E' }} />
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 600, color: '#C9A96E', marginBottom: '8px' }}>{statNumber}</div>
        <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{statLabel}</div>
      </div>

      {/* Quote Box */}
      <div style={{ borderLeft: '2px solid #C9A96E', padding: '24px 32px', background: 'rgba(201,169,110,0.03)' }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );

  return (
    <section style={{ background: bg, padding: '96px 0' }} className="md:!py-32">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="md:px-12 lg:px-20">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', alignItems: 'center' }} className="lg:!grid-cols-2">
          {imagePosition === 'right' ? (
            <>
              {textContent}
              {decorativeContent}
            </>
          ) : (
            <>
              {decorativeContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
