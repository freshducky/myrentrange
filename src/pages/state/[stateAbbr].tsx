import { useRouter } from 'next/router';
import SeoHead from '../../components/SeoHead';
import Home from '../index';

const stateNameMap: { [key: string]: string } = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
  'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
  'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
  'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
  'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
  'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
  'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
  'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
  'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
  'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
  'WI': 'Wisconsin', 'WY': 'Wyoming'
};

export default function StateLanding() {
  const router = useRouter();
  const { stateAbbr } = router.query;
  const stateFull = typeof stateAbbr === 'string' ? stateNameMap[stateAbbr.toUpperCase()] : '';

  return (
    <>
      <SeoHead
        title={`Rent Range Calculator for ${stateFull} | MyRentRange`}
        description={`See rent ranges and affordability for ${stateFull}. Use MyRentRange to find out how much rent you can afford in ${stateFull} based on your income and local data.`}
        url={`https://myrentrange.com/state/${stateAbbr}`}
      />
      <main style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
        <h1>Rent Range Calculator for {stateFull}</h1>
        <p>Welcome to MyRentRange's {stateFull} rent calculator. Instantly see what's affordable in {stateFull} based on your income, local rent data, and more. Start planning your next move with confidence.</p>
      </main>
      {/* You can render your main app here, pre-filling the state if needed */}
      {/* <Home prefillState={stateAbbr?.toUpperCase()} /> */}
    </>
  );
} 