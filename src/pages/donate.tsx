import Head from "next/head";

export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Support MyRentRange — Donate</title>
        <meta name="description" content="Support MyRentRange — a solo project to empower renters." />
      </Head>
      <main className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Support MyRentRange</h1>
        <p className="text-lg mb-6 text-gray-700">
          MyRentRange is a solo project built to help renters understand fair housing costs and avoid overpaying.
          If this site helped you, please consider supporting it — every donation helps cover hosting, development, and research.
        </p>

        <a
          href="https://cash.app/$kevonturner97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 bg-green-600 text-white text-lg rounded-xl shadow-lg hover:bg-green-700 transition">
            Donate via Cash App
          </button>
        </a>

        <p className="mt-8 text-gray-600 text-sm">
          Thank you for helping make fair housing data more accessible!
        </p>
      </main>
    </>
  );
} 