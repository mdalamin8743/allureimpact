'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTABlockProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  style?: 'gold' | 'outline' | 'dark';
}

export default function CTABlock({
  eyebrow = 'Ready to start?',
  title = 'Ready to Elevate Your Brand?',
  description = 'Get in touch today.',
  buttonText = 'Get In Touch',
  buttonLink = '/contact',
  style = 'gold',
}: CTABlockProps) {
  const buttonStyles: Record<string, React.CSSProperties> = {
    gold: { background: '#C9A96E', color: '#080808', border: 'none' },
    outline: { background: 'transparent', color: '#C9A96E', border: '1px solid #C9A96E' },
    dark: { background: '#111111', color: '#C9A96E', border: '1px solid rgba(201,169,110,0.3)' },
  };

  return (
    <section style={{ background: '#080808', padding: '96px 0' }} className="md:!py-32">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }} className="md:px-12 lg:px-20">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
            <span style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase' }}>{eyebrow}</span>
            <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 400, color: '#ffffff', marginBottom: '16px' }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href={buttonLink}
              style={{
                display: 'inline-block',
                padding: '18px 48px',
                fontSize: '12px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                ...buttonStyles[style],
              }}
              onMouseEnter={(e) => {
                if (style === 'gold') {
                  e.currentTarget.style.background = '#b8944d';
                } else {
                  e.currentTarget.style.background = '#C9A96E';
                  e.currentTarget.style.color = '#080808';
                }
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, buttonStyles[style]);
              }}
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
