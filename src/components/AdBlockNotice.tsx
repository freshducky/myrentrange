import React, { useEffect, useState } from 'react';
import { detectAdBlock } from '@/lib/adblock-detect';

const AdBlockNotice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('adblockNoticeDismissed');
      if (dismissed) return;

      const isBlocked = detectAdBlock();
      if (isBlocked) {
        setShowNotice(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('adblockNoticeDismissed', 'true');
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-xl shadow-lg z-50 flex items-center space-x-4 max-w-md w-full mx-2">
      <span className="text-sm">
        We noticed you're using an ad blocker. MyRentRange is free to use and supported by minimal ads — please consider whitelisting us to support this tool.
      </span>
      <button
        onClick={handleDismiss}
        className="ml-auto text-gray-500 hover:text-gray-700 text-lg font-bold px-2"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
};

export default AdBlockNotice; 