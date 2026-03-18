'use client';

import { motion } from 'framer-motion';

interface TextBlockProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  alignment?: 'left' | 'center' | 'right';
  backgroundColor?: 'dark' | 'darker';
}

export default function TextBlock({
  eyebrow,
  title = 'Section Title',
  body,
  alignment = 'center',
  backgroundColor = 'dark',
}: TextBlockProps) {
  const bg = backgroundColor === 'darker' ? '#080808' : '#111111';
  const textAlign = alignment as 'left' | 'center' | 'right';

  return (
    <section style={{ background: bg, padding: '96px 0' }} className="md:!py-32">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign }} className="md:px-12 lg:px-20">
        <div style={{ maxWidth: alignment === 'center' ? '800px' : '100%', margin: alignment === 'center' ? '0 auto' : undefined }}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', justifyContent: alignment === 'center' ? 'center' : 'flex-start' }}
            >
              <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
              <span style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase' }}>{eyebrow}</span>
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 400, color: '#ffffff', marginBottom: body ? '24px' : '0' }}
          >
            {title}
          </motion.h2>
          {body && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
