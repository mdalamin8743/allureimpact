'use client';

import { motion } from 'framer-motion';

interface DividerBlockProps {
  style?: 'line' | 'gold-line' | 'blank';
  spacing?: 'small' | 'medium' | 'large';
}

export default function DividerBlock({
  style = 'gold-line',
  spacing = 'medium',
}: DividerBlockProps) {
  const paddingMap = { small: '24px 0', medium: '48px 0', large: '80px 0' };

  if (style === 'blank') {
    return <div style={{ padding: paddingMap[spacing] }} />;
  }

  return (
    <div style={{ padding: paddingMap[spacing], background: '#080808' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="md:px-12 lg:px-20">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            height: '1px',
            background: style === 'gold-line'
              ? 'linear-gradient(to right, transparent, #C9A96E, transparent)'
              : 'rgba(255,255,255,0.08)',
            transformOrigin: 'center',
          }}
        />
      </div>
    </div>
  );
}
