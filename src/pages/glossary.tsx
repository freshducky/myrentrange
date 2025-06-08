import Head from 'next/head';

export default function GlossaryPage() {
  return (
    <>
      <Head>
        <title>Glossary | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8" style={{ background: '#fff', borderRadius: 12, marginTop: 32, marginBottom: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex flex-row gap-4 mb-6">
          <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Return to Calculator</a>
          <a href="/faq" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Go to FAQ</a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Glossary of Housing & Rental Terms</h1>
        <dl className="space-y-6">
          {[
            ['Affordable Rent', 'Generally defined as rent that is 30% or less of your take-home income.'],
            ['Rent Burden', 'Spending more than 30% of income on rent is considered rent burdened.'],
            ['Security Deposit', 'Refundable fee paid to cover potential damage or missed rent.'],
            ['Lease', 'Legal contract between landlord and tenant outlining rental terms.'],
            ['Month-to-Month Lease', 'Rental agreement that renews automatically each month.'],
            ['Fixed-Term Lease', 'Lease with a set end date (e.g. 12 months).'],
            ['Tenant', 'Person renting a property.'],
            ['Landlord', 'Owner of the property being rented.'],
            ['Utilities', 'Services like electricity, gas, water, trash — may or may not be included in rent.'],
            ['Renter\'s Insurance', 'Optional insurance that protects your belongings in case of theft, fire, etc.'],
            ['Eviction', 'Legal process where a landlord removes a tenant for violating lease terms.'],
            ['Rent Control', 'Local law limiting how much rent can be increased annually.'],
            ['Habitability', 'Legal standard requiring a rental to be safe and livable.'],
            ['Late Fee', 'Extra charge for paying rent after the due date.'],
            ['Notice to Vacate', 'Written notice given by tenant or landlord to end a lease.'],
            ['Joint & Several Liability', 'Clause stating all roommates are equally responsible for the full rent.'],
            ['Sublet', 'Renting out your apartment (with permission) to another person for part of the lease term.'],
            ['Guarantor', 'Person who agrees to pay the rent if the tenant fails to do so.'],
            ['Credit Check', 'Landlord review of your credit history during application.'],
            ['Fair Housing Laws', 'Federal & state laws prohibiting discrimination in rental housing.'],
          ].map(([term, definition]) => (
            <div key={term} className="border-b border-gray-200 pb-4">
              <dt className="text-lg font-semibold mb-1">{term}</dt>
              <dd className="text-gray-700">{definition}</dd>
            </div>
          ))}
        </dl>
      </main>
    </>
  );
} 