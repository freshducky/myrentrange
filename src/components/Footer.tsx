import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12 pt-6 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        <div>© 2025 MyRentRange</div>
        <div className="space-x-4">
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/glossary" className="hover:underline">Glossary</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </div>
      </div>
    </footer>
  );
} 