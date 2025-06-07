export const detectAdBlock = (): boolean => {
  const bait = document.createElement('div');
  bait.className = 'ad-banner adsbox ad-placement pub_300x250';
  bait.style.position = 'absolute';
  bait.style.left = '-999px';
  document.body.appendChild(bait);

  const isBlocked = window.getComputedStyle(bait).getPropertyValue('display') === 'none' ||
                    bait.offsetHeight === 0;

  document.body.removeChild(bait);
  return isBlocked;
}; 