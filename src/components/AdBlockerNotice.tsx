import { useState, useEffect } from 'react';

export default function AdBlockerNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Check if ad blocker is active
    const checkAdBlocker = () => {
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      document.body.appendChild(testAd);

      setTimeout(() => {
        if (testAd.offsetHeight === 0) {
          setShowNotice(true);
        }
        document.body.removeChild(testAd);
      }, 100);
    };

    checkAdBlocker();
  }, []);

  if (!showNotice) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-100 border-b border-yellow-400 p-4 text-center z-50">
      <p className="text-lg font-semibold text-yellow-800">
        It looks like you're using an ad blocker. Please consider disabling it to support our site.
      </p>
      <button
        onClick={() => setShowNotice(false)}
        className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      >
        Dismiss
      </button>
    </div>
  );
} 