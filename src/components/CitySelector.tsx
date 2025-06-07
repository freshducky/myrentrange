import React, { useEffect } from 'react';
import cityData from '../data/cityData.json';

const safeCityData = cityData as Record<string, Record<string, any>>;

// Map of states that should default to a single city
const stateDefaultCityMap: Record<string, string> = {
  'District of Columbia': 'Washington',
  // Add more special cases here if needed
};

interface CitySelectorProps {
  state: string;
  onCitySelect: (city: string) => void;
  selectedCity: string | null;
}

const CitySelector: React.FC<CitySelectorProps> = ({
  state,
  onCitySelect,
  selectedCity
}) => {
  const defaultCity = stateDefaultCityMap[state] || null;

  const citiesInState = defaultCity
    ? [defaultCity]
    : state && safeCityData[state]
      ? Object.keys(safeCityData[state])
      : [];

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = event.target.value;
    onCitySelect(selectedCityName);
  };

  // Sync parent selectedCity when defaultCity applies
  useEffect(() => {
    if (defaultCity) {
      onCitySelect(defaultCity);
    }
  }, [defaultCity, onCitySelect]);

  return (
    <div className="city-selector">
      <label htmlFor="city-select">Select City:</label>
      <select
        id="city-select"
        value={defaultCity ? defaultCity : (selectedCity || '')}
        onChange={handleCityChange}
        className="city-dropdown"
        disabled={!!defaultCity}
        style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 12, border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)' }}
      >
        {defaultCity ? (
          <option value={defaultCity}>{defaultCity}</option>
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
      {!defaultCity && citiesInState.length === 0 && (
        <p className="no-cities-message">
          No cities available for {state}
        </p>
      )}
    </div>
  );
};

export default CitySelector; 