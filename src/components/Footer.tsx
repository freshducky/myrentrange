import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 mt-12">
      <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} MyRentRange</div>
        <nav className="flex gap-6">
          <Link href="/faq" className="text-sm text-gray-500 hover:underline">FAQ</Link>
          <Link href="/glossary" className="text-sm text-gray-500 hover:underline">Glossary</Link>
          <Link href="/blog" className="text-sm text-gray-500 hover:underline">Blog</Link>
        </nav>
      </div>
    </footer>
  );
} 