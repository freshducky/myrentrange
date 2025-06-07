import React, { useState, useEffect } from 'react';
import SalaryInput from '../components/SalaryInput';
import StateSelector from '../components/StateSelector';
import CitySelector from '../components/CitySelector';
import OptionToggles from '../components/OptionToggles';
import RentRangeOutput from '../components/RentRangeOutput';
import InsightsPanel from '../components/InsightsPanel';
import taxRates from '../../data/taxRates.json';
import SeoHead from '../components/SeoHead';

// Add this map for state abbreviations to full names
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

type SalaryType = 'hourly' | 'monthly' | 'annual';

function grossToMonthly(gross: number, type: SalaryType): number {
  if (type === 'hourly') return gross * 40 * 52 / 12;
  if (type === 'annual') return gross / 12;
  return gross;
}

function calcNetMonthly(gross: number, type: SalaryType, state: string, ownCar: boolean): number {
  const monthlyGross = grossToMonthly(gross, type);
  const taxRate = (taxRates as Record<string, number>)[state] ?? 0.05;
  // Assume 7.65% FICA + state tax
  const fica = 0.0765;
  let net = monthlyGross * (1 - fica - taxRate);
  if (ownCar) {
    net -= 500; // Subtract $500 if own a car
  }
  return net > 0 ? net : 0;
}

export default function Home({ prefillState }: { prefillState?: string } = {}) {
  const [salary, setSalary] = useState(60000);
  const [salaryType, setSalaryType] = useState<SalaryType>('annual');
  const [state, setState] = useState(prefillState || '');
  const [city, setCity] = useState('');
  const [ownCar, setOwnCar] = useState(false);
  const [livingAlone, setLivingAlone] = useState(false);
  const [netMonthly, setNetMonthly] = useState(0);
  const [mode, setMode] = useState<'manual' | 'location' | 'burden'>('location');
  const [manualRent, setManualRent] = useState<number | ''>('');

  useEffect(() => {
    setNetMonthly(calcNetMonthly(salary, salaryType, state, ownCar));
  }, [salary, salaryType, state, ownCar]);

  useEffect(() => {
    if (prefillState) {
      setState(prefillState);
    }
  }, [prefillState]);

  useEffect(() => {
    // Only run on first load and if state is not already set
    if (!state) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            // Try to get state and city from address
            const foundState = data.address?.state || data.address?.region || data.address?.state_district;
            const foundCity = data.address?.city || data.address?.town || data.address?.village || data.address?.hamlet;
            // Try to match state to abbreviation
            const abbr = Object.keys(stateNameMap).find(key => stateNameMap[key].toLowerCase() === String(foundState).toLowerCase());
            if (abbr) setState(abbr);
            if (foundCity) setCity(foundCity);
          } catch (e) {
            // Fail silently
          }
        });
      }
    }
  }, []);

  // Map abbreviation to full state name for InsightsPanel
  const displayName = stateNameMap[state] || state;

  useEffect(() => {
    if (state === 'DC' || stateNameMap[state] === 'District of Columbia' || displayName === 'District of Columbia') {
      setCity('Washington');
    }
  }, [state, displayName]);

  // Get median rent for the selected state
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const statesData = require('../data/statesData.json');
  const cityData = require('../data/cityData.json');
  const stateData = statesData[displayName as keyof typeof statesData];
  const estimatedRent = stateData ? stateData.medianRent : 0;
  const cityMedianRent = city && cityData[displayName] && cityData[displayName][city] ? cityData[displayName][city].medianRent : null;

  // Get the appropriate rent value based on selections
  const getRentValue = () => {
    if (mode === 'manual' && manualRent) {
      return Number(manualRent);
    }
    if (displayName === 'District of Columbia' && city === 'Washington') {
      return cityData[displayName][city].neighborhoods[city].medianRent;
    }
    if (city && cityData[displayName]?.[city]) {
      return cityData[displayName][city].medianRent;
    }
    return stateData?.medianRent || 0;
  };

  const rentForBurden = getRentValue();

  return (
    <>
      <SeoHead title="MyRentRange | Free Rent Range & Affordability Calculator" description="See rent ranges in your area, protect your wallet, and make informed rental decisions with MyRentRange." />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
        <h2 style={{ fontFamily: 'Poppins, Inter, Work Sans, Arial, sans-serif', fontWeight: 700, fontSize: 32, letterSpacing: '-1px', marginBottom: 8, color: '#222', textAlign: 'left' }}>
          What is <span className="accent">My</span><span className="secondary-accent">RentRange</span>?
        </h2>
        <section style={{ marginBottom: 32 }}>
          <p>MyRentRange is your free rent range calculator, designed to help you understand how much rent you can afford based on your real take-home pay and local data. Whether you're moving to a new city or just want to make sure you're not overpaying, MyRentRange gives you clear, data-driven rent ranges for every U.S. state.</p>
          <p>Use our rent range calculator to compare your income to local rent data, see what's affordable, and make smarter rental decisions. Protect your wallet and avoid rent burden with MyRentRange.</p>
        </section>
        {/* Mode Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
          <button
            className={mode === 'location' ? 'active' : ''}
            style={{ padding: '8px 18px', borderRadius: 8, fontWeight: 600, background: mode === 'location' ? '#3F88C5' : '#eee', color: mode === 'location' ? '#fff' : '#222', border: 'none', cursor: 'pointer' }}
            onClick={() => setMode('location')}
          >
            Use My State
          </button>
          <button
            className={mode === 'manual' ? 'active' : ''}
            style={{ padding: '8px 18px', borderRadius: 8, fontWeight: 600, background: mode === 'manual' ? '#D72638' : '#eee', color: mode === 'manual' ? '#fff' : '#222', border: 'none', cursor: 'pointer' }}
            onClick={() => setMode('manual')}
          >
            Enter My Rent
          </button>
          <button
            className={mode === 'burden' ? 'active' : ''}
            style={{ padding: '8px 18px', borderRadius: 8, fontWeight: 600, background: mode === 'burden' ? '#222' : '#eee', color: mode === 'burden' ? '#fff' : '#222', border: 'none', cursor: 'pointer' }}
            onClick={() => setMode('burden')}
          >
            Rent Burden Calculator
          </button>
        </div>
        <main style={{ maxWidth: 480, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Poppins, Inter, Work Sans, Arial, sans-serif', fontWeight: 700, fontSize: 36, letterSpacing: '-1px', marginBottom: 8, color: '#222', textAlign: 'center' }}>
            <span className="accent">My</span><span className="secondary-accent">RentRange</span>
          </h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: 32, fontSize: 18 }}>Find your affordable rent based on your real take-home pay.</p>
          <section className="card">
            <h2 style={{ color: '#3F88C5', fontWeight: 600 }}>Where You Live</h2>
            <StateSelector value={state} onChange={setState} />
            <CitySelector state={displayName} onCitySelect={setCity} selectedCity={displayName === 'District of Columbia' ? 'Washington' : city} />
          </section>
          {mode === 'location' && (
            <section className="card">
              <h2 style={{ color: '#3F88C5', fontWeight: 600 }}>Gross Salary</h2>
              <SalaryInput value={salary} onChange={setSalary} type={salaryType} onTypeChange={setSalaryType} />
            </section>
          )}
          {mode === 'manual' && (
            <section className="card">
              <h2 style={{ color: '#3F88C5', fontWeight: 600 }}>Your Rent</h2>
              <input
                type="number"
                min={0}
                value={manualRent}
                onChange={e => setManualRent(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Enter your monthly rent"
                style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 12, border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)' }}
              />
            </section>
          )}
          {mode === 'burden' && (
            <>
              <section className="card">
                <h2 style={{ color: '#3F88C5', fontWeight: 600 }}>Your Monthly Rent</h2>
                <input
                  type="number"
                  min={0}
                  value={manualRent}
                  onChange={e => setManualRent(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="Enter your monthly rent"
                  style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 12, border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)' }}
                />
              </section>
              <section className="card">
                <h2 style={{ color: '#3F88C5', fontWeight: 600 }}>Your Annual Salary (Pre-Tax)</h2>
                <input
                  type="number"
                  min={0}
                  value={salaryType === 'annual' ? salary : ''}
                  onChange={e => {
                    setSalaryType('annual');
                    setSalary(e.target.value === '' ? 0 : Number(e.target.value));
                  }}
                  placeholder="Enter your annual salary"
                  style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 12, border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)' }}
                />
              </section>
            </>
          )}
          <section className="card">
            <h2 style={{ color: '#3F88C5', fontWeight: 600 }}>Options</h2>
            <OptionToggles ownCar={ownCar} onOwnCarChange={setOwnCar} livingAlone={livingAlone} onLivingAloneChange={setLivingAlone} />
          </section>
          <h2 style={{ color: '#D72638', fontWeight: 700 }}>Rent Range</h2>
          <RentRangeOutput netIncome={netMonthly} livingAlone={livingAlone} />
        </main>
        <div style={{ marginTop: 24, width: '100%' }}>
          <InsightsPanel
            stateAbbr={state}
            displayName={displayName}
            estimatedRent={rentForBurden}
            netMonthlyIncome={netMonthly}
            mode={mode}
            city={city}
            cityData={cityData}
          />
        </div>
      </div>
      <footer style={{ textAlign: 'center', marginTop: 40, padding: '24px 0', color: '#888', fontSize: 15 }}>
        <a href="/about" style={{ margin: '0 12px', color: '#3F88C5', textDecoration: 'underline' }}>About</a>
        <a href="/terms" style={{ margin: '0 12px', color: '#3F88C5', textDecoration: 'underline' }}>Terms</a>
        <a href="/privacy" style={{ margin: '0 12px', color: '#3F88C5', textDecoration: 'underline' }}>Privacy</a>
      </footer>
    </>
  );
} 