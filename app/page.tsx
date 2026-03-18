"use client";

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@/lib/builder';
import '@/lib/builder-registry';
import { useEffect, useState } from 'react';

builder.init('1223b1f041f142f19142c068c0cf70ee');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePage() {
  const [content, setContent] = useState<any>(null);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    builder.get('page', { url: '/' }).promise().then(setContent);
  }, []);

  if (!content && !isPreviewing) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px', background: '#080808' }}>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', color: 'white' }}>Allure Impact</div>
        <div style={{ color: '#C9A96E', letterSpacing: '4px', fontSize: '12px', textTransform: 'uppercase' }}>Connect Builder.io to start editing</div>
        <a href="https://builder.io" target="_blank" style={{ marginTop: '16px', padding: '14px 32px', background: '#C9A96E', color: '#080808', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none' }}>
          Open Builder.io Dashboard →
        </a>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}
