import { useEffect, useState } from 'react';

export default function AdBlockerNotice() {
  const [isAdBlockerDetected, setIsAdBlockerDetected] = useState(false);

  useEffect(() => {
    const testAd = document.createElement('div');
    testAd.className = 'ad-banner';
    testAd.style.display = 'none';
    document.body.appendChild(testAd);

    // Ad blockers often hide elements with 'ad' in the class name
    const isBlocked = window.getComputedStyle(testAd).display === 'none';
    setIsAdBlockerDetected(isBlocked);

    document.body.removeChild(testAd);
  }, []);

  const [dismissed, setDismissed] = useState(false);

  if (!isAdBlockerDetected || dismissed) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-3 px-4 z-50 shadow-md flex items-center justify-between">
      <span className="text-sm sm:text-base">
        We noticed you might be using an ad blocker. Some features may not work as expected.
      </span>
      <button
        className="ml-4 bg-white text-red-600 px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100 transition"
        onClick={() => setDismissed(true)}
      >
        Dismiss
      </button>
    </div>
  );
} 