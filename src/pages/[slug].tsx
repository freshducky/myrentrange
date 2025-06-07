import { useRouter } from 'next/router';
import SeoHead from '../components/SeoHead';
import Home from './index';

const stateSlugMap: Record<string, string> = {
  al: 'AL', alabama: 'AL',
  ak: 'AK', alaska: 'AK',
  az: 'AZ', arizona: 'AZ',
  ar: 'AR', arkansas: 'AR',
  ca: 'CA', california: 'CA',
  co: 'CO', colorado: 'CO',
  ct: 'CT', connecticut: 'CT',
  de: 'DE', delaware: 'DE',
  fl: 'FL', florida: 'FL',
  ga: 'GA', georgia: 'GA',
  hi: 'HI', hawaii: 'HI',
  id: 'ID', idaho: 'ID',
  il: 'IL', illinois: 'IL',
  in: 'IN', indiana: 'IN',
  ia: 'IA', iowa: 'IA',
  ks: 'KS', kansas: 'KS',
  ky: 'KY', kentucky: 'KY',
  la: 'LA', louisiana: 'LA',
  me: 'ME', maine: 'ME',
  md: 'MD', maryland: 'MD',
  ma: 'MA', massachusetts: 'MA',
  mi: 'MI', michigan: 'MI',
  mn: 'MN', minnesota: 'MN',
  ms: 'MS', mississippi: 'MS',
  mo: 'MO', missouri: 'MO',
  mt: 'MT', montana: 'MT',
  ne: 'NE', nebraska: 'NE',
  nv: 'NV', nevada: 'NV',
  nh: 'NH', 'new-hampshire': 'NH', newhampshire: 'NH',
  nj: 'NJ', 'new-jersey': 'NJ', newjersey: 'NJ',
  nm: 'NM', 'new-mexico': 'NM', newmexico: 'NM',
  ny: 'NY', 'new-york': 'NY', newyork: 'NY',
  nc: 'NC', 'north-carolina': 'NC', northcarolina: 'NC',
  nd: 'ND', 'north-dakota': 'ND', northdakota: 'ND',
  oh: 'OH', ohio: 'OH',
  ok: 'OK', oklahoma: 'OK',
  or: 'OR', oregon: 'OR',
  pa: 'PA', pennsylvania: 'PA',
  ri: 'RI', 'rhode-island': 'RI', rhodeisland: 'RI',
  sc: 'SC', 'south-carolina': 'SC', southcarolina: 'SC',
  sd: 'SD', 'south-dakota': 'SD', southdakota: 'SD',
  tn: 'TN', tennessee: 'TN',
  tx: 'TX', texas: 'TX',
  ut: 'UT', utah: 'UT',
  vt: 'VT', vermont: 'VT',
  va: 'VA', virginia: 'VA',
  wa: 'WA', washington: 'WA',
  wv: 'WV', 'west-virginia': 'WV', westvirginia: 'WV',
  wi: 'WI', wisconsin: 'WI',
  wy: 'WY', wyoming: 'WY',
  dc: 'DC', 'district-of-columbia': 'DC', districtcolumbia: 'DC',
};

const stateNameMap: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming', DC: 'District of Columbia',
};

export default function StateSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  const stateAbbr = slugStr ? stateSlugMap[slugStr.toLowerCase()] : undefined;
  const stateFull = stateAbbr ? stateNameMap[stateAbbr] : undefined;

  return (
    <>
      <SeoHead
        title={stateFull
          ? `Rent Range Calculator for ${stateFull} | MyRentRange`
          : 'MyRentRange | Free Rent Range & Affordability Calculator'}
        description={stateFull
          ? `See rent ranges and affordability for ${stateFull}. Use MyRentRange to find out how much rent you can afford in ${stateFull} based on your income and local data.`
          : 'See rent ranges in your area, protect your wallet, and make informed rental decisions with MyRentRange.'}
        url={`https://myrentrange.com/${slugStr || ''}`}
      />
      {stateFull && (
        <section style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
          <h1>Rent Range Calculator for {stateFull}</h1>
          <p>
            Welcome to MyRentRange's {stateFull} rent calculator. Instantly see what's affordable in {stateFull} based on your income, local rent data, and more. Start planning your next move with confidence.
          </p>
        </section>
      )}
      <Home prefillState={stateAbbr} />
    </>
  );
} 