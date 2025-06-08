import Head from 'next/head';

export default function GlossaryPage() {
  return (
    <>
      <Head>
        <title>Glossary | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Glossary of Housing & Rental Terms</h1>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold">Affordable Rent</dt>
            <dd>Generally defined as rent that is 30% or less of your take-home income.</dd>
          </div>
          <div>
            <dt className="font-semibold">Rent Burden</dt>
            <dd>Spending more than 30% of income on rent is considered rent burdened.</dd>
          </div>
          <div>
            <dt className="font-semibold">Security Deposit</dt>
            <dd>Refundable fee paid to cover potential damage or missed rent.</dd>
          </div>
          <div>
            <dt className="font-semibold">Lease</dt>
            <dd>Legal contract between landlord and tenant outlining rental terms.</dd>
          </div>
          <div>
            <dt className="font-semibold">Month-to-Month Lease</dt>
            <dd>Rental agreement that renews automatically each month.</dd>
          </div>
          <div>
            <dt className="font-semibold">Fixed-Term Lease</dt>
            <dd>Lease with a set end date (e.g. 12 months).</dd>
          </div>
          <div>
            <dt className="font-semibold">Tenant</dt>
            <dd>Person renting a property.</dd>
          </div>
          <div>
            <dt className="font-semibold">Landlord</dt>
            <dd>Owner of the property being rented.</dd>
          </div>
          <div>
            <dt className="font-semibold">Utilities</dt>
            <dd>Services like electricity, gas, water, trash — may or may not be included in rent.</dd>
          </div>
          <div>
            <dt className="font-semibold">Renter's Insurance</dt>
            <dd>Optional insurance that protects your belongings in case of theft, fire, etc.</dd>
          </div>
          <div>
            <dt className="font-semibold">Eviction</dt>
            <dd>Legal process where a landlord removes a tenant for violating lease terms.</dd>
          </div>
          <div>
            <dt className="font-semibold">Rent Control</dt>
            <dd>Local law limiting how much rent can be increased annually.</dd>
          </div>
          <div>
            <dt className="font-semibold">Habitability</dt>
            <dd>Legal standard requiring a rental to be safe and livable.</dd>
          </div>
          <div>
            <dt className="font-semibold">Late Fee</dt>
            <dd>Extra charge for paying rent after the due date.</dd>
          </div>
          <div>
            <dt className="font-semibold">Notice to Vacate</dt>
            <dd>Written notice given by tenant or landlord to end a lease.</dd>
          </div>
          <div>
            <dt className="font-semibold">Joint & Several Liability</dt>
            <dd>Clause stating all roommates are equally responsible for the full rent.</dd>
          </div>
          <div>
            <dt className="font-semibold">Sublet</dt>
            <dd>Renting out your apartment (with permission) to another person for part of the lease term.</dd>
          </div>
          <div>
            <dt className="font-semibold">Guarantor</dt>
            <dd>Person who agrees to pay the rent if the tenant fails to do so.</dd>
          </div>
          <div>
            <dt className="font-semibold">Credit Check</dt>
            <dd>Landlord review of your credit history during application.</dd>
          </div>
          <div>
            <dt className="font-semibold">Fair Housing Laws</dt>
            <dd>Federal & state laws prohibiting discrimination in rental housing.</dd>
          </div>
        </dl>
      </main>
    </>
  );
} 