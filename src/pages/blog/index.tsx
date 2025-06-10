import Head from 'next/head';

export default function BlogHome() {
  return (
    <>
      <Head>
        <title>Blog | MyRentRange</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">MyRentRange Blog</h1>
        <p className="text-gray-600 mb-8">Insights on rent, budgeting, housing, and smarter living.</p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="/blog/why-i-created-myrentrange" className="text-blue-600 hover:underline">
              Why I Created MyRentRange
            </a>
          </li>
        </ul>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-600 space-x-4">
          <a href="/">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/glossary">Glossary</a>
        </div>
      </main>
    </>
  );
} 