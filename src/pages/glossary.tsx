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
        <dl className="space-y-8">
          <div>
            <dt className="text-xl font-semibold text-gray-800">Affordable Rent</dt>
            <dd className="text-gray-700 mt-1">Generally defined as rent that is 30% or less of your take-home income.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Rent Burden</dt>
            <dd className="text-gray-700 mt-1">Spending more than 30% of income on rent is considered rent burdened.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Security Deposit</dt>
            <dd className="text-gray-700 mt-1">Refundable fee paid to cover potential damage or missed rent.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Lease</dt>
            <dd className="text-gray-700 mt-1">Legal contract between landlord and tenant outlining rental terms.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Month-to-Month Lease</dt>
            <dd className="text-gray-700 mt-1">Rental agreement that renews automatically each month.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Fixed-Term Lease</dt>
            <dd className="text-gray-700 mt-1">Lease with a set end date (e.g. 12 months).</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Tenant</dt>
            <dd className="text-gray-700 mt-1">Person renting a property.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Landlord</dt>
            <dd className="text-gray-700 mt-1">Owner of the property being rented.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Utilities</dt>
            <dd className="text-gray-700 mt-1">Services like electricity, gas, water, trash — may or may not be included in rent.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Renter's Insurance</dt>
            <dd className="text-gray-700 mt-1">Optional insurance that protects your belongings in case of theft, fire, etc.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Eviction</dt>
            <dd className="text-gray-700 mt-1">Legal process where a landlord removes a tenant for violating lease terms.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Rent Control</dt>
            <dd className="text-gray-700 mt-1">Local law limiting how much rent can be increased annually.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Habitability</dt>
            <dd className="text-gray-700 mt-1">Legal standard requiring a rental to be safe and livable.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Late Fee</dt>
            <dd className="text-gray-700 mt-1">Extra charge for paying rent after the due date.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Notice to Vacate</dt>
            <dd className="text-gray-700 mt-1">Written notice given by tenant or landlord to end a lease.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Joint & Several Liability</dt>
            <dd className="text-gray-700 mt-1">Clause stating all roommates are equally responsible for the full rent.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Sublet</dt>
            <dd className="text-gray-700 mt-1">Renting out your apartment (with permission) to another person for part of the lease term.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Guarantor</dt>
            <dd className="text-gray-700 mt-1">Person who agrees to pay the rent if the tenant fails to do so.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Credit Check</dt>
            <dd className="text-gray-700 mt-1">Landlord review of your credit history during application.</dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-gray-800">Fair Housing Laws</dt>
            <dd className="text-gray-700 mt-1">Federal & state laws prohibiting discrimination in rental housing.</dd>
          </div>
        </dl>
      </main>
    </>
  );
} 