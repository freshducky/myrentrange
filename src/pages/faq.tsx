import Head from 'next/head';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8" style={{ background: '#fff', borderRadius: 12, marginTop: 32, marginBottom: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex flex-row gap-4 mb-6">
          <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Return to Calculator</a>
          <a href="/glossary" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Go to Glossary</a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">💸 Budgeting & Rent</h2>
          <p className="mb-2"><strong>How much of my income should go to rent?</strong> Most experts recommend spending no more than 30% of your take-home income on rent to avoid rent burden. MyRentRange helps you estimate a comfortable rent range for your specific situation.</p>
          <p className="mb-2"><strong>What if I live in an expensive city?</strong> You may need to adjust expectations. In high-cost markets, spending 35–40% may be unavoidable — but be mindful of balancing other expenses.</p>
          <p className="mb-2"><strong>How do I build a rental budget?</strong> Start with income after taxes. Subtract essentials (utilities, transportation, groceries). The remainder helps set your max rent.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🏡 Finding & Inspecting Apartments</h2>
          <p className="mb-2"><strong>How do I find a good apartment?</strong> Check local listings (Zillow, Craigslist, Apartments.com), join community groups, and ask friends. Visit in person when possible.</p>
          <p className="mb-2"><strong>What should I inspect before signing a lease?</strong></p>
          <ul className="list-disc ml-6 mb-2">
            <li>Check water pressure</li>
            <li>Look for mold/damage</li>
            <li>Test appliances & outlets</li>
            <li>Ask about heating/cooling</li>
            <li>Read the lease carefully</li>
          </ul>
          <p className="mb-2"><strong>What fees should I expect upfront?</strong></p>
          <ul className="list-disc ml-6 mb-2">
            <li>Security deposit (usually 1 month's rent)</li>
            <li>First month's rent</li>
            <li>Application fee</li>
            <li>Sometimes last month's rent</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">👥 Roommates</h2>
          <p className="mb-2"><strong>How do I find a trustworthy roommate?</strong> Use sites like Roommates.com or trusted Facebook groups. Meet in person first, and discuss expectations clearly.</p>
          <p className="mb-2"><strong>Should we have a roommate agreement?</strong> Yes — outline who pays what, cleaning responsibilities, quiet hours, etc. It helps avoid conflicts later.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">⚖️ Renter Rights</h2>
          <p className="mb-2"><strong>What are my basic rights as a renter?</strong> Rights vary by state, but generally include:</p>
          <ul className="list-disc ml-6 mb-2">
            <li>Right to a safe, habitable home</li>
            <li>Right to privacy (landlord notice required before entry)</li>
            <li>Protection against illegal eviction</li>
          </ul>
          <p className="mb-2"><strong>Can my landlord raise the rent anytime?</strong> Depends on local laws. Some cities have rent control; others allow increases with proper notice (typically 30–60 days).</p>
          <p className="mb-2"><strong>How can I report unsafe conditions?</strong> Contact your local housing authority or code enforcement office.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🔍 Using MyRentRange</h2>
          <p className="mb-2"><strong>Is MyRentRange free to use?</strong> Yes — MyRentRange is a free tool to help you understand rent ranges and affordability.</p>
          <p className="mb-2"><strong>Does MyRentRange guarantee housing availability?</strong> No — we provide data-driven insights to inform your search but do not list specific rental units.</p>
        </section>
      </main>
    </>
  );
} 