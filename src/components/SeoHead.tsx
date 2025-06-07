import Head from 'next/head';

interface SeoHeadProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function SeoHead({
  title = 'MyRentRange — Know Your Rent, Protect Your Wallet',
  description = 'See rent ranges in your area, avoid overpaying, and make informed rental decisions with MyRentRange.',
  url = 'https://myrentrange.com',
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
} 