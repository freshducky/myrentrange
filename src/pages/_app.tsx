import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AdBlockerNotice from '@/components/AdBlockerNotice';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header style={{ width: '100%', background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '12px 0', marginBottom: 24, boxShadow: '0 2px 8px rgba(63, 136, 197, 0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ display: 'inline-block', height: 48 }}>
            <img src="/logo-horizontal.png" alt="MyRentRange logo" style={{ height: 48, width: 'auto', display: 'block' }} />
          </a>
        </div>
      </header>
      <AdBlockerNotice />
      <Component {...pageProps} />
    </>
  );
} 