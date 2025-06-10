import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog | MyRentRange</title>
      </Head>
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-10 text-gray-900 leading-relaxed">
        <h1 className="text-4xl font-bold mb-6">MyRentRange Blog</h1>
        <p className="mb-8 text-lg text-gray-700">
          Insights, tips, and perspectives on rent, housing, budgeting, and modern living.
        </p>

        <ul className="space-y-4">
          <li>
            <Link href="/blog/why-i-created-myrentrange" className="text-blue-600 hover:underline text-xl font-semibold">
              Why I Created MyRentRange →
            </Link>
            <p className="text-gray-600 text-sm">By Kevon Turner</p>
          </li>
          {/* You can add more blog posts here as <li> items */}
        </ul>
      </main>

      <Footer />
    </>
  );
} 