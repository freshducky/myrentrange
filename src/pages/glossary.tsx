import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Glossary | MyRentRange</title>
      </Head>
      <main className="flex justify-center px-2 py-8">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          {/* Top links with vertical bar */}
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm">
            <Link href="/" className="text-blue-700 underline hover:text-blue-900 transition">← Return to Calculator</Link>
            <span className="text-gray-400">|</span>
            <Link href="/faq" className="text-blue-700 underline hover:text-blue-900 transition">Go to FAQ →</Link>
          </div>

          <h1 className="text-3xl font-bold mb-8 text-center">Glossary of Housing & Rental Terms</h1>

          <div className="divide-y divide-gray-200">
            {glossary.map(({ term, definition }, idx) => (
              <div key={term}>
                <button
                  className="w-full flex flex-row gap-3 items-center py-4 text-left font-bold text-lg text-gray-900 focus:outline-none justify-center sm:justify-between"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`def-${idx}`}
                >
                  {term}
                  <span className={`transition-transform ${open === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {open === idx && (
                  <div
                    id={`def-${idx}`}
                    className="pl-2 pb-4 text-gray-700 text-base animate-fade-in"
                  >
                    {definition}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-4px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
      `}</style>
    </>
  );
} 