import React from 'react';
import statesData from '../data/statesData.json';

type Props = {
  stateAbbr: string;
  displayName: string;
  estimatedRent: number;
  netMonthlyIncome: number;
  mode?: 'manual' | 'location';
  city?: string;
  cityData?: any;
  neighborhood?: string;
};

export default function InsightsPanel({ 
  stateAbbr, 
  displayName, 
  estimatedRent, 
  netMonthlyIncome, 
  mode, 
  city, 
  cityData,
  neighborhood 
}: Props) {
  const stateData = statesData[displayName as keyof typeof statesData];
  const cityStats = city && cityData && cityData[displayName] && cityData[displayName][city] 
    ? cityData[displayName][city] 
    : null;
  const neighborhoodStats = stateAbbr === 'DC' && city === 'Washington' && neighborhood && cityStats?.neighborhoods
    ? cityStats.neighborhoods[neighborhood]
    : null;

  // Calculate rent burden
  let burden = 0;
  if (netMonthlyIncome > 0 && estimatedRent > 0) {
    burden = estimatedRent / netMonthlyIncome;
  }

  let burdenLabel = '';
  let burdenClass = '';
  let burdenIcon = '';
  if (burden >= 0.4) {
    burdenLabel = 'Severe Rent Burden';
    burdenClass = 'text-red-600';
    burdenIcon = '🎯';
  } else if (burden >= 0.3) {
    burdenLabel = 'High Rent Burden';
    burdenClass = 'text-orange-600';
    burdenIcon = '⚠️';
  } else if (burden > 0) {
    burdenLabel = 'Safe Rent Load';
    burdenClass = 'text-green-600';
    burdenIcon = '✅';
  }

  // Comparative stats
  let comparison = null;
  if (mode === 'manual' && neighborhoodStats && estimatedRent) {
    const diff = estimatedRent - neighborhoodStats.medianRent;
    comparison = (
      <p className="text-xs mt-2 text-center">
        {diff > 0 ? (
          <>You're paying <span className="font-bold text-red-600">${diff.toLocaleString()}</span> more than the {neighborhood} median rent.</>
        ) : diff < 0 ? (
          <>You're paying <span className="font-bold text-green-600">${Math.abs(diff).toLocaleString()}</span> less than the {neighborhood} median rent.</>
        ) : (
          <>You're paying exactly the {neighborhood} median rent.</>
        )}
      </p>
    );
  } else if (mode === 'manual' && cityStats && estimatedRent) {
    const diff = estimatedRent - cityStats.medianRent;
    comparison = (
      <p className="text-xs mt-2 text-center">
        {diff > 0 ? (
          <>You're paying <span className="font-bold text-red-600">${diff.toLocaleString()}</span> more than the city median rent.</>
        ) : diff < 0 ? (
          <>You're paying <span className="font-bold text-green-600">${Math.abs(diff).toLocaleString()}</span> less than the city median rent.</>
        ) : (
          <>You're paying exactly the city median rent.</>
        )}
      </p>
    );
  } else if (mode === 'location' && neighborhoodStats) {
    const diff = neighborhoodStats.medianRent - cityStats.medianRent;
    comparison = (
      <p className="text-xs mt-2 text-center">
        In {neighborhood}, median rent is <span className={diff > 0 ? 'text-red-600' : 'text-green-600'}>${Math.abs(diff).toLocaleString()}</span> {diff > 0 ? 'higher' : 'lower'} than the city median.
      </p>
    );
  } else if (mode === 'location' && cityStats) {
    const diff = cityStats.medianRent - stateData.medianRent;
    comparison = (
      <p className="text-xs mt-2 text-center">
        In {city}, median rent is <span className={diff > 0 ? 'text-red-600' : 'text-green-600'}>${Math.abs(diff).toLocaleString()}</span> {diff > 0 ? 'higher' : 'lower'} than the state median.
      </p>
    );
  }

  return (
    <div className="space-y-2 text-sm leading-relaxed text-gray-800 bg-white rounded-lg shadow-md p-6 text-center">
      {mode && (
        <div className="mb-2 flex justify-center">
          {mode === 'manual' ? (
            <span className="inline-block bg-[#D72638] text-white text-xs font-semibold px-3 py-1 rounded-full">Based on Your Input</span>
          ) : (
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Based on Location Data</span>
          )}
        </div>
      )}
      <div className="flex items-center justify-center mb-4 gap-2">
        <h2 style={{ fontSize: '2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
          <span style={{ color: '#D72638', fontWeight: 800 }}>{displayName}</span>
          <span style={{ color: '#222', fontWeight: 800 }}>Insights</span>
        </h2>
      </div>
      {neighborhoodStats && (
        <div className="space-y-1 text-center">
          <p>🏘️ <strong>{neighborhood} Median Rent:</strong> ${neighborhoodStats.medianRent.toLocaleString()}</p>
          <p>💼 <strong>{neighborhood} Median Income:</strong> ${neighborhoodStats.medianIncome.toLocaleString()}</p>
        </div>
      )}
      {cityStats && !neighborhoodStats && (
        <div className="space-y-1 text-center">
          <p>🏙️ <strong>City Median Rent:</strong> ${cityStats.medianRent.toLocaleString()}</p>
          <p>💼 <strong>City Median Income:</strong> ${cityStats.medianIncome.toLocaleString()}</p>
        </div>
      )}
      {stateData ? (
        <div className="space-y-1 text-center">
          <p>💼 <strong>Median Salary:</strong> ${stateData.medianSalary.toLocaleString()}</p>
          {stateData.avgSalary && (
            <p>📈 <strong>Average Salary:</strong> ${stateData.avgSalary.toLocaleString()}</p>
          )}
          <p>🏠 <strong>Median Monthly Rent:</strong> ${stateData.medianRent.toLocaleString()}</p>
          {stateData.avgRentTopCity && (
            <p>🏙️ <strong>Average Rent:</strong> ${stateData.avgRentTopCity.toLocaleString()}</p>
          )}
          <p>💸 <strong>State Income Tax:</strong> {stateData.stateTax}</p>
        </div>
      ) : (
        <p className="text-gray-500 mt-2">State data not available.</p>
      )}
      {comparison}
      {/* Rent Burden Indicator */}
      {burden > 0 && (
        <>
          <p className={`${burdenClass} font-medium mt-2`}>{burdenIcon} <strong>{burdenLabel}:</strong> {(burden * 100).toFixed(1)}%</p>
          <p className="text-xs text-gray-500 mt-2 text-center">
            <strong>What does this mean?</strong> This percentage shows what portion of your net monthly income would go to <strong>median rent</strong> in your state.<br />
            <span className="block mt-1">
              <span className="text-green-600 font-semibold">Safe:</span> under 30% &nbsp;|&nbsp;
              <span className="text-orange-600 font-semibold">High:</span> 30–50% &nbsp;|&nbsp;
              <span className="text-red-600 font-semibold">Severe:</span> over 50%
            </span>
          </p>
        </>
      )}
      {/* What MyRentRange Actually Does */}
      <div className="border-t pt-4 mt-4">
        <h3 className="font-semibold text-md mb-2 text-center">What MyRentRange Actually Does</h3>
        <p className="mb-2 text-gray-700 text-center">
          Most rent calculators rely on <strong>gross income</strong> and ignore your actual lifestyle costs.
          MyRentRange uses your <strong>net (after-tax) income</strong> and adjusts based on:
        </p>
        <p className="mb-2 text-xs text-gray-500 text-center">
          <strong>Note:</strong> Rent burden is calculated using the <strong>median rent</strong> for your selected state, not your actual rent.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-gray-700 text-left inline-block">
          <li>🚗 Car ownership subtracts $500/month</li>
          <li>🧍 Living alone? Rent cap tightened to 25%</li>
          <li>📊 Rent burden guidance: Conservative (20%), Balanced (25%), Stretch (33%)</li>
        </ul>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Data sourced from&nbsp;
          <a href="https://www.bls.gov/bls/news-release/wages.htm" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">BLS</a>,&nbsp;
          <a href="https://www.zillow.com/research/data/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Zillow</a>,&nbsp;
          <a href="https://www.census.gov/data/datasets.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Census Bureau</a>,&nbsp;
          <a href="https://www.huduser.gov/portal/datasets/50per.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">HUD</a>,&nbsp;and&nbsp;
          <a href="https://taxfoundation.org/publications/state-individual-income-tax-rates-and-brackets/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Tax Foundation</a>.
          Median and average values updated for 2025.
        </p>
        <div className="border-t pt-4 mt-6">
          <h3 className="font-semibold text-md mb-2 text-center">What is Severe Rent Burden?</h3>
          <p className="mb-2 text-gray-700 text-center">
            <strong>Severe rent burden</strong> is a term used by housing experts and policymakers to describe when a household spends a very high percentage of its income on rent—typically more than <strong>50%</strong> of gross monthly income.
          </p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 text-left inline-block">
            <li>⚠️ <strong>Standard rent burden:</strong> Paying more than 30% of income on rent</li>
            <li>🚨 <strong>Severe rent burden:</strong> Paying more than 50% of income on rent</li>
            <li>Households with severe rent burden often struggle to afford other essentials like food, healthcare, and savings</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Learn more from&nbsp;
            <a href="https://www.huduser.gov/portal/glossary/glossary_c.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">HUD</a>&nbsp;and&nbsp;
            <a href="https://www.jchs.harvard.edu/blog/what-rent-burden" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Harvard JCHS</a>.
          </p>
        </div>
      </div>
    </div>
  );
} 