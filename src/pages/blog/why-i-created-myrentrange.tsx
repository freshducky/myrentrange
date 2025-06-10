import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Why I Created MyRentRange | Blog</title>
      </Head>
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-10 text-gray-900 leading-relaxed">
        <article>
          <h1 className="text-4xl font-bold mb-4">Why I Created MyRentRange</h1>
          <p className="text-lg text-gray-700 mb-8">By Kevon Turner</p>

          <p className="mb-6">
            As modern cities become ever more populated with expensive lofts and luxury apartments — peppered with amenities and fresh coats of paint — it's more important than ever for renters to evaluate the true worth of these residences against their budgets.
          </p>

          <p className="mb-6">
            In my opinion, quality of life is more about what you can afford to do inside and outside your home — not just floor-to-ceiling windows or a stripped-down gym. A beautiful apartment that stretches your budget too thin can quickly diminish your freedom and peace of mind.
          </p>

          <p className="mb-6">
            I created <strong>MyRentRange</strong> with one goal in mind: to empower renters with real, actionable data. Too many rent calculators oversimplify the math or fail to reflect the nuances of modern living. MyRentRange helps you understand what's truly affordable for your situation — so you can make smarter housing choices, protect your wallet, and live better.
          </p>

          <p className="mb-6">
            Whether you're moving to a new city, evaluating a lease renewal, or simply curious about your options, I hope this tool helps you find the balance between comfort and financial well-being. Because at the end of the day, where you live should support the life you want — not strain it.
          </p>

          <p className="text-base mt-8">— Kevon Turner</p>
        </article>
      </main>

      <Footer />
    </>
  );
} 