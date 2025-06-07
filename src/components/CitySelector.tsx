import React, { useEffect } from 'react';
import cityData from '../data/cityData.json';

const safeCityData = cityData as Record<string, Record<string, any>>;

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
  // Special case for DC
  useEffect(() => {
    if (state === 'District of Columbia') {
      onCitySelect('Washington');
    }
  }, [state, onCitySelect]);

  // Get city names for the selected state
  const citiesInState = state === 'District of Columbia'
    ? ['Washington']
    : state && safeCityData[state]
      ? Object.keys(safeCityData[state])
      : [];

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
      >
        <option value="">Choose a city...</option>
        {citiesInState.map((cityName: string) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
      
      {citiesInState.length === 0 && (
        <p className="no-cities-message">
          No cities available for {state}
        </p>
      )}
    </div>
  );
};

export default CitySelector; 