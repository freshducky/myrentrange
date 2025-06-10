import Head from 'next/head';
import Link from 'next/link';

export default function BlogHome() {
  return (
    <>
      <Head>
        <title>Blog | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg mb-8 text-gray-700">
          Insights, tips, and ideas about renting, budgeting, and making smarter housing choices.
        </p>

        <ul className="space-y-6">
          <li>
            <Link href="/blog/why-i-created-myrentrange" className="text-blue-600 text-xl font-semibold hover:underline">
              Why I Created MyRentRange
            </Link>
            <p className="text-gray-500 text-sm">by Kevon Turner</p>
          </li>
        </ul>
      </main>
    </>
  );
} 