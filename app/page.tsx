"use client";

import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-react';
import { BUILDER_API_KEY } from '@/lib/builder';
import { customComponents } from '@/lib/builder-registry';
import { useEffect, useState } from 'react';

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOneEntry({
      model: 'page',
      apiKey: BUILDER_API_KEY,
      userAttributes: { urlPath: '/' },
    }).then((data) => {
      setContent(data);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  if (!content && !isPreviewing()) {
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

  return (
    <Content
      model="page"
      apiKey={BUILDER_API_KEY}
      content={content}
      customComponents={customComponents}
    />
  );
}
