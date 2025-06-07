import SeoHead from '../components/SeoHead';

export default function Terms() {
  return (
    <>
      <SeoHead title="Terms of Service | MyRentRange" description="Read the terms of service for using MyRentRange." />
      <main style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
        <h1>Terms of Service</h1>
        <p>By using MyRentRange, you agree to use the site for informational purposes only. We strive to provide accurate data, but cannot guarantee completeness or accuracy. Use your own judgment when making rental decisions.</p>
        <p>For questions about these terms, please use our <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDwllMZmCZvLQzw97gNQRoPswjwwcYXvzFCG69W69m8KfVkA/viewform?usp=header" target="_blank" rel="noopener noreferrer">Feedback form</a>.</p>
      </main>
    </>
  );
} 