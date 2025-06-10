import { useEffect } from 'react';

export default function EzoicAd({ id }: { id: number }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ezstandalone && window.ezstandalone.cmd) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone.showAds(id);
      });
    }
  }, [id]);

  return <div id={`ezoic-pub-ad-placeholder-${id}`}></div>;
} 