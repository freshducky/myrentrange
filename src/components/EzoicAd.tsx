// TypeScript declaration for Ezoic
declare global {
  interface Window {
    ezstandalone?: {
      cmd?: Array<() => void>;
      showAds?: (...ids: number[]) => void;
    };
  }
}

import { useEffect } from 'react';

export default function EzoicAd({ id }: { id: number }) {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.ezstandalone &&
      window.ezstandalone.cmd &&
      window.ezstandalone.showAds
    ) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone!.showAds!(id);
      });
    }
  }, [id]);

  return <div id={`ezoic-pub-ad-placeholder-${id}`}></div>;
} 