import Head from 'next/head';
import Link from 'next/link';

export default function BlogLayout({
  children,
  title,
  description,
  author = 'Kevon Turner',
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  author?: string;
}) {
  return (
    <>
      <Head>
        <title>{title} | MyRentRange</title>
        <meta name="description" content={description} />
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Top links */}
        <div className="mb-6 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">← Return to Calculator</Link>
          <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>
          <Link href="/glossary" className="text-blue-600 hover:underline">Glossary</Link>
          <Link href="/blog" className="text-blue-600 hover:underline">Blog Home</Link>
        </div>

        {/* Page content */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-8">by {author}</p>

        <article className="prose prose-lg prose-blue max-w-none">
          {children}
        </article>

        <div className="mt-8 text-sm">
          <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog Home</Link>
        </div>
      </main>
    </>
  );
} 