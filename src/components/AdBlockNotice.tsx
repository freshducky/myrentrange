import React, { useEffect, useState } from 'react';
import { detectAdBlock } from '@/lib/adblock-detect';

const AdBlockNotice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBlocked = detectAdBlock();
      if (isBlocked) {
        setShowNotice(true);
      }
    }
  }, []);

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black px-4 py-2 rounded shadow z-50 text-sm">
      We noticed you're using an ad blocker. MyRentRange is free to use and supported by minimal ads — please consider whitelisting us to support this tool.
    </div>
  );
};

export default AdBlockNotice; 