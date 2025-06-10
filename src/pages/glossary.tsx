import Head from 'next/head';
import Link from 'next/link';

const glossary = [
  { term: 'Affordable Rent', definition: 'Generally defined as rent that is 30% or less of your take-home income.' },
  { term: 'Rent Burden', definition: 'Spending more than 30% of income on rent is considered rent burdened.' },
  { term: 'Security Deposit', definition: 'Refundable fee paid to cover potential damage or missed rent.' },
  { term: 'Lease', definition: 'Legal contract between landlord and tenant outlining rental terms.' },
  { term: 'Month-to-Month Lease', definition: 'Rental agreement that renews automatically each month.' },
  { term: 'Fixed-Term Lease', definition: 'Lease with a set end date (e.g. 12 months).' },
  { term: 'Tenant', definition: 'Person renting a property.' },
  { term: 'Landlord', definition: 'Owner of the property being rented.' },
  { term: 'Utilities', definition: 'Services like electricity, gas, water, trash — may or may not be included in rent.' },
  { term: "Renter's Insurance", definition: 'Optional insurance that protects your belongings in case of theft, fire, etc.' },
  { term: 'Eviction', definition: 'Legal process where a landlord removes a tenant for violating lease terms.' },
  { term: 'Rent Control', definition: 'Local law limiting how much rent can be increased annually.' },
  { term: 'Habitability', definition: 'Legal standard requiring a rental to be safe and livable.' },
  { term: 'Late Fee', definition: 'Extra charge for paying rent after the due date.' },
  { term: 'Notice to Vacate', definition: 'Written notice given by tenant or landlord to end a lease.' },
  { term: 'Joint & Several Liability', definition: 'Clause stating all roommates are equally responsible for the full rent.' },
  { term: 'Sublet', definition: 'Renting out your apartment (with permission) to another person for part of the lease term.' },
  { term: 'Guarantor', definition: 'Person who agrees to pay the rent if the tenant fails to do so.' },
  { term: 'Credit Check', definition: 'Landlord review of your credit history during application.' },
  { term: 'Fair Housing Laws', definition: 'Federal & state laws prohibiting discrimination in rental housing.' },
];

export default function GlossaryPage() {
  return (
    <>
      <Head>
        <title>Glossary | MyRentRange</title>
      </Head>
      <main className="flex justify-center px-2 py-10 bg-gray-50 min-h-screen">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          {/* Top links */}
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm">
            <Link href="/" className="text-blue-700 underline hover:text-blue-900 transition">← Return to Calculator</Link>
            <span className="text-gray-400">|</span>
            <Link href="/faq" className="text-blue-700 underline hover:text-blue-900 transition">Go to FAQ →</Link>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-2 text-center">Glossary of Housing & Rental Terms</h1>
          <p className="text-center text-gray-500 mb-8">
            Clear definitions for renters, first-timers, and anyone navigating the rental market.
          </p>

          {/* (Optional) A-Z nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
              <span key={letter} className="text-gray-400 text-sm px-1">{letter}</span>
            ))}
          </div>

          {/* Glossary entries */}
          <dl>
            {glossary.map(({ term, definition }) => (
              <div key={term} className="py-6 border-b last:border-b-0">
                <dt className="text-lg font-bold text-gray-900 mb-1">{term}</dt>
                <dd className="text-base text-gray-700">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </>
  );
} 