import React from 'react';
import { cityData } from '../data/cityData';

interface NeighborhoodSelectorProps {
  state: string;
  city: string;
  neighborhood: string;
  onChange: (neighborhood: string) => void;
}

const NeighborhoodSelector: React.FC<NeighborhoodSelectorProps> = ({ 
  state, 
  city, 
  neighborhood, 
  onChange 
}) => {
  // Show neighborhoods if they exist for the selected city
  const neighborhoods =
    state && city && cityData[state]?.[city]?.neighborhoods
      ? Object.keys(cityData[state][city].neighborhoods)
      : [];

  if (neighborhoods.length === 0) return null;

  return (
    <div className="mt-4">
      <h2 style={{ color: '#3F88C5', fontWeight: 600, marginBottom: 8 }}>Neighborhood (optional)</h2>
      <select
        value={neighborhood}
        onChange={e => onChange(e.target.value)}
        style={{ 
          width: '100%', 
          padding: 12, 
          fontSize: 16, 
          borderRadius: 12, 
          border: '1px solid #e0e0e0', 
          boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)'
        }}
      >
        <option value="">Select a neighborhood (optional)</option>
        {neighborhoods.map(neighborhoodName => (
          <option key={neighborhoodName} value={neighborhoodName}>
            {neighborhoodName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NeighborhoodSelector; 