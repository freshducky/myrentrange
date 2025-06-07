import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AdBlockNotice from '@/components/AdBlockNotice';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AdBlockNotice />
    </>
  );
} 