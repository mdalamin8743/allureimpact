'use client';

import { motion } from 'framer-motion';

interface PageHeroBlockProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function PageHeroBlock({
  eyebrow = 'Page Label',
  title = 'Page Title',
  description = 'Page description here.',
}: PageHeroBlockProps) {
  return (
    <section style={{ background: '#080808', paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }} className="md:!pb-32">
      {/* Decorative lines */}
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, #C9A96E 30%, #C9A96E 70%, transparent)', opacity: 0.1 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }} className="md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
        >
          <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
          <span style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase' }}>{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: '24px', maxWidth: '700px' }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', maxWidth: '550px' }}
        >
          {description}
        </motion.p>

        {/* Decorative gold line at bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ marginTop: '64px', height: '1px', background: 'linear-gradient(to right, #C9A96E, transparent)', transformOrigin: 'left' }}
        />
      </div>
    </section>
  );
}
