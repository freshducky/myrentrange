import React from 'react';
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
  // Get city names for the selected state
  const isDC = state === 'District of Columbia';
  const citiesInState = isDC
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
        value={isDC ? 'Washington' : (selectedCity || '')}
        onChange={handleCityChange}
        className="city-dropdown"
        disabled={isDC} // prevent changing for DC
      >
        {isDC ? (
          <option value="Washington">Washington</option>
        ) : (
          <>
            <option value="">Choose a city...</option>
            {citiesInState.map((cityName: string) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </>
        )}
      </select>
      {!isDC && citiesInState.length === 0 && (
        <p className="no-cities-message">
          No cities available for {state}
        </p>
      )}
    </div>
  );
};

export default CitySelector; 