'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  number?: string;
  title?: string;
  description?: string;
  link?: string;
}

interface ServicesBlockProps {
  eyebrow?: string;
  title?: string;
  ctaText?: string;
  ctaLink?: string;
  services?: Service[];
}

export default function ServicesBlock({
  eyebrow = 'What We Do',
  title = 'Our Services',
  ctaText = 'View All Services',
  ctaLink = '/services',
  services = [
    { number: '01', title: 'Brand Strategy', description: 'Lorem ipsum dolor sit amet.', link: '/services' },
    { number: '02', title: 'Marketing Consulting', description: 'Lorem ipsum dolor sit amet.', link: '/services' },
    { number: '03', title: 'Business Development', description: 'Lorem ipsum dolor sit amet.', link: '/services' },
  ],
}: ServicesBlockProps) {
  return (
    <section style={{ background: '#080808', padding: '96px 0' }} className="md:!py-32">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="md:px-12 lg:px-20">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}
            >
              <div style={{ width: '40px', height: '1px', background: '#C9A96E' }} />
              <span style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase' }}>{eyebrow}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 400, color: '#ffffff' }}
            >
              {title}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={ctaLink}
              style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '4px' }}
            >
              {ctaText} &rarr;
            </Link>
          </motion.div>
        </div>

        {/* Services List */}
        <div>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.link || '/services'}
                style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', alignItems: 'center', gap: '24px', padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                className="group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = 'rgba(201,169,110,0.3)';
                  e.currentTarget.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.paddingLeft = '0px';
                }}
              >
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', color: '#C9A96E' }}>{service.number}</span>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 400, color: '#ffffff', marginBottom: '8px' }}>{service.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{service.description}</p>
                </div>
                <span style={{ color: '#C9A96E', fontSize: '20px', transition: 'transform 0.3s ease' }}>&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
