import React from 'react';
import { cities, City } from '../data/cities';

interface CitySelectorProps {
  state: string;
  onCitySelect: (city: string) => void;
  selectedCity?: string;
}

const CitySelector: React.FC<CitySelectorProps> = ({ 
  state, 
  onCitySelect, 
  selectedCity 
}) => {
  // Filter cities for the selected state
  const citiesInState = cities.filter(city => city.state === state);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = event.target.value;
    onCitySelect(selectedCityName);
  };

  return (
    <div className="city-selector">
      <label htmlFor="city-select">Select City:</label>
      <select 
        id="city-select" 
        value={selectedCity || ''}
        onChange={handleCityChange}
        className="city-dropdown"
        style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 12, border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)' }}
      >
        <option value="">Choose a city...</option>
        {citiesInState.map((city: City) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      {citiesInState.length === 0 && (
        <p className="no-cities-message" style={{ color: '#666', marginTop: 8 }}>
          No cities available for {state}
        </p>
      )}
    </div>
  );
};

export default CitySelector; 