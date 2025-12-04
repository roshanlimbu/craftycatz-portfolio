"use client";

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function Contributions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = {
    light: ['#f4f4f4', '#e5e5e5', '#a3a3a3', '#525252', '#171717'],
    dark: ['#1a1a1a', '#333333', '#666666', '#999999', '#ededed'],
  };

  return (
    <section className="section">
      <h2 className="section-title">Contributions</h2>
      <div style={{ 
        border: '1px solid var(--border)', 
        padding: '1.5rem', 
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'auto',
        minHeight: '150px' // Prevent layout shift
      }}>
        {mounted ? (
          <GitHubCalendar 
            username="roshanlimbu" 
            theme={theme}
            fontSize={12}
            blockSize={12}
            blockMargin={5}
          />
        ) : (
          <div style={{ color: 'var(--gray-medium)' }}>Loading contributions...</div>
        )}
      </div>
    </section>
  );
}
