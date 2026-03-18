'use client';

import { motion } from 'framer-motion';

interface TeamMember {
  name?: string;
  role?: string;
  bio?: string;
}

interface TeamBlockProps {
  eyebrow?: string;
  title?: string;
  members?: TeamMember[];
}

export default function TeamBlock({
  eyebrow = 'Our Team',
  title = 'Meet the Team',
  members = [
    { name: 'Jane Doe', role: 'CEO & Founder', bio: 'Lorem ipsum dolor sit amet.' },
    { name: 'John Smith', role: 'Creative Director', bio: 'Lorem ipsum dolor sit amet.' },
  ],
}: TeamBlockProps) {
  return (
    <section style={{ background: '#080808', padding: '96px 0' }} className="md:!py-32">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="md:px-12 lg:px-20">
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
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

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="md:!grid-cols-2 lg:!grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ border: '1px solid rgba(201,169,110,0.15)', padding: '40px', position: 'relative', transition: 'border-color 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)'; }}
            >
              {/* Decorative corner */}
              <div style={{ position: 'absolute', top: '-1px', left: '0', width: '40px', height: '1px', background: '#C9A96E' }} />
              <div style={{ position: 'absolute', top: '0', left: '-1px', width: '1px', height: '40px', background: '#C9A96E' }} />

              {/* Initials circle */}
              <div style={{ width: '64px', height: '64px', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#C9A96E' }}>
                  {member.name?.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 400, color: '#ffffff', marginBottom: '4px' }}>{member.name}</h3>
              <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>{member.role}</div>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
