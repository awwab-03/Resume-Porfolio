import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/data';

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${SITE.name} — ${SITE.role}`;
export const ogContentType = 'image/png';

/** Renders the shared social-card image used for both Open Graph and Twitter. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(120% 120% at 0% 0%, #0f1b14 0%, #0a0e1a 55%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#22c55e',
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#22c55e',
              color: '#0a0e1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 26,
            }}
          >
            AA
          </div>
          {SITE.location}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#f8fafc',
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {SITE.name}
          </div>
          <div style={{ fontSize: 40, color: '#22c55e', fontWeight: 600 }}>
            {SITE.role}
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#94a3b8',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Full-stack web apps, AI-powered platforms, and computer-vision
            systems — from data model to deployment.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 28,
            fontSize: 24,
            color: '#cbd5e1',
            fontWeight: 500,
          }}
        >
          <span>React</span>
          <span style={{ color: '#334155' }}>•</span>
          <span>Next.js</span>
          <span style={{ color: '#334155' }}>•</span>
          <span>Node.js</span>
          <span style={{ color: '#334155' }}>•</span>
          <span>Python</span>
        </div>
      </div>
    ),
    ogSize
  );
}
