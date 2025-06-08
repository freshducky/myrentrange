import Head from 'next/head';
import Link from 'next/link';

export default function GlossaryPage() {
  return (
    <>
      <Head>
        <title>Glossary | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Top links */}
        <div className="mb-6 flex space-x-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">← Return to Calculator</Link>
          <Link href="/faq" className="text-blue-600 hover:underline">Go to FAQ →</Link>
        </div>

        {/* Page title */}
        <h1 className="text-4xl font-bold mb-8">Glossary of Housing & Rental Terms</h1>

        {/* Glossary content */}
        <dl>
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
            ["Renter's Insurance", 'Optional insurance that protects your belongings in case of theft, fire, etc.'],
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
          ].map(([term, definition]) => ([
            <dt key={term} className="mt-8 text-xl font-semibold text-gray-800">{term}</dt>,
            <dd key={term + '-def'} className="mb-4 text-gray-700">{definition}</dd>
          ]))}
        </dl>
      </main>
    </>
  );
} 