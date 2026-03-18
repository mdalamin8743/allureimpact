'use client';

import { motion } from 'framer-motion';

interface Stat {
  number?: string;
  label?: string;
}

interface StatsBlockProps {
  stats?: Stat[];
}

export default function StatsBlock({
  stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '200+', label: 'Clients Worldwide' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industry Awards' },
  ],
}: StatsBlockProps) {
  return (
    <section style={{ background: '#111111', borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }} className="md:px-12 lg:px-20">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="md:!grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 600, color: '#C9A96E', marginBottom: '8px' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
