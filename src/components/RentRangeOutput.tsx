import React from 'react';

interface RentRangeOutputProps {
  netIncome: number;
  livingAlone: boolean;
}

const RentRangeOutput: React.FC<RentRangeOutputProps> = ({ netIncome, livingAlone }) => {
  const percentages = livingAlone ? [0.2, 0.25, 0.3] : [0.2, 0.3, 0.4];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {percentages.map(pct => (
        <div
          key={pct}
          className="rent-range-card"
        >
          <span style={{ color: '#3F88C5', fontWeight: 600 }}>{Math.round(pct * 100)}% of net income</span>
          <span style={{ float: 'right', color: '#D72638', fontWeight: 700, fontSize: 20 }}>${(netIncome * pct).toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</span>
        </div>
      ))}
    </div>
  );
};

export default RentRangeOutput; 