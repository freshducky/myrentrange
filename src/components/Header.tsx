import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 mb-8">
      <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          MyRentRange
        </Link>
        <div className="space-x-4 text-sm text-blue-600">
          <Link href="/">Calculator</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/glossary">Glossary</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
} 