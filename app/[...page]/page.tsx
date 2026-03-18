"use client";

import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-react';
import { BUILDER_API_KEY } from '@/lib/builder';
import { customComponents } from '@/lib/builder-registry';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DynamicPage() {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchOneEntry({
      model: 'page',
      apiKey: BUILDER_API_KEY,
      userAttributes: { urlPath: pathname },
    }).then((data) => {
      if (!data) setNotFound(true);
      else setContent(data);
    });
  }, [pathname]);

  if (notFound && !isPreviewing()) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080808' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '80px', color: '#C9A96E' }}>404</div>
          <div style={{ color: 'white', marginTop: '16px' }}>Page not found</div>
          <a href="/" style={{ display: 'inline-block', marginTop: '32px', padding: '14px 32px', border: '1px solid #C9A96E', color: '#C9A96E', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none' }}>
            Go Home
          </a>
        </div>
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
