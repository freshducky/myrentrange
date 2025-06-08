import Head from 'next/head';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Top links */}
        <div className="mb-6 flex space-x-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">← Return to Calculator</Link>
          <Link href="/glossary" className="text-blue-600 hover:underline">Go to Glossary →</Link>
        </div>

        {/* Page title */}
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        {/* FAQ Sections */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">💸 Budgeting & Rent</h2>
          <div className="space-y-4">
            <p><strong>How much of my income should go to rent?</strong> Most experts recommend spending no more than 30% of your take-home income on rent to avoid rent burden. MyRentRange helps you estimate a comfortable rent range for your specific situation.</p>
            <p><strong>What if I live in an expensive city?</strong> You may need to adjust expectations. In high-cost markets, spending 35–40% may be unavoidable — but be mindful of balancing other expenses.</p>
            <p><strong>How do I build a rental budget?</strong> Start with income after taxes. Subtract essentials (utilities, transportation, groceries). The remainder helps set your max rent.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🏡 Finding & Inspecting Apartments</h2>
          <div className="space-y-4">
            <p><strong>How do I find a good apartment?</strong> Check local listings (Zillow, Craigslist, Apartments.com), join community groups, and ask friends. Visit in person when possible.</p>
            <div>
              <p><strong>What should I inspect before signing a lease?</strong></p>
              <ul className="list-disc ml-6 space-y-1 mt-1">
                <li>Check water pressure</li>
                <li>Look for mold/damage</li>
                <li>Test appliances & outlets</li>
                <li>Ask about heating/cooling</li>
                <li>Read the lease carefully</li>
              </ul>
            </div>
            <div>
              <p><strong>What fees should I expect upfront?</strong></p>
              <ul className="list-disc ml-6 space-y-1 mt-1">
                <li>Security deposit (usually 1 month's rent)</li>
                <li>First month's rent</li>
                <li>Application fee</li>
                <li>Sometimes last month's rent</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">👥 Roommates</h2>
          <div className="space-y-4">
            <p><strong>How do I find a trustworthy roommate?</strong> Use sites like Roommates.com or trusted Facebook groups. Meet in person first, and discuss expectations clearly.</p>
            <p><strong>Should we have a roommate agreement?</strong> Yes — outline who pays what, cleaning responsibilities, quiet hours, etc. It helps avoid conflicts later.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">⚖️ Renter Rights</h2>
          <div className="space-y-4">
            <p><strong>What are my basic rights as a renter?</strong> Rights vary by state, but generally include:</p>
            <ul className="list-disc ml-6 space-y-1 mt-1">
              <li>Right to a safe, habitable home</li>
              <li>Right to privacy (landlord notice required before entry)</li>
              <li>Protection against illegal eviction</li>
            </ul>
            <p><strong>Can my landlord raise the rent anytime?</strong> Depends on local laws. Some cities have rent control; others allow increases with proper notice (typically 30–60 days).</p>
            <p><strong>How can I report unsafe conditions?</strong> Contact your local housing authority or code enforcement office.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🔍 Using MyRentRange</h2>
          <div className="space-y-4">
            <p><strong>Is MyRentRange free to use?</strong> Yes — MyRentRange is a free tool to help you understand rent ranges and affordability.</p>
            <p><strong>Does MyRentRange guarantee housing availability?</strong> No — we provide data-driven insights to inform your search but do not list specific rental units.</p>
          </div>
        </section>
      </main>
    </>
  );
} 