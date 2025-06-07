import SeoHead from '../components/SeoHead';

export default function About() {
  return (
    <>
      <SeoHead title="About | MyRentRange" description="Learn about MyRentRange, the free rent range calculator helping renters make informed decisions." />
      <main style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
        <h1>About MyRentRange</h1>
        <p>MyRentRange was created to help renters across the U.S. understand what is truly affordable based on their income and local rent data. Our mission is to empower you to make smarter, safer rental decisions and avoid rent burden.</p>
        <p>We use up-to-date data and simple tools to give you a clear picture of your rent range, so you can protect your wallet and plan your next move with confidence.</p>
      </main>
    </>
  );
} 