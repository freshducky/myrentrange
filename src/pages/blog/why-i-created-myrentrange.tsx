import Head from 'next/head';

export default function WhyICreatedMyRentRange() {
  return (
    <>
      <Head>
        <title>Why I Created MyRentRange | MyRentRange Blog</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Why I Created MyRentRange</h1>
        <p className="text-gray-600 mb-8">by Kevon Turner</p>

        <p>As modern cities become ever more populated with expensive lofts and luxury apartments — peppered with amenities and fresh coats of paint — it's more important than ever for renters to evaluate the true worth of these residences against their budgets.</p>

        <p>In my opinion, quality of life is more about what you can afford to do inside and outside your home — not just floor-to-ceiling windows or a stripped-down gym. A beautiful apartment that stretches your budget too thin can quickly diminish your freedom and peace of mind.</p>

        <p>I created <strong>MyRentRange</strong> with one goal in mind: to empower renters with real, actionable data. Too many rent calculators oversimplify the math or fail to reflect the nuances of modern living. MyRentRange helps you understand what's truly affordable for your situation — so you can make smarter housing choices, protect your wallet, and live better.</p>

        <p>Whether you're moving to a new city, evaluating a lease renewal, or simply curious about your options, I hope this tool helps you find the balance between comfort and financial well-being. Because at the end of the day, where you live should support the life you want — not strain it.</p>

        <p className="mt-8">— Kevon Turner</p>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-600 space-x-4">
          <a href="/">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/glossary">Glossary</a>
          <a href="/blog">Blog</a>
        </div>
      </main>
    </>
  );
} 