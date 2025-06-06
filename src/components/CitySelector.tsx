import React from 'react';
import cityData from '../data/cityData.json';

const safeCityData = cityData as Record<string, Record<string, any>>;

interface CitySelectorProps {
  state: string;
  onCitySelect: (city: any) => void;
  selectedCity?: string;
}

const CitySelector: React.FC<CitySelectorProps> = ({ 
  state, 
  onCitySelect, 
  selectedCity 
}) => {
  // Filter cities by state
  const citiesInState = Object.values(safeCityData)
    .flat()
    .filter((city: any) => city.state && city.state.toLowerCase() === state.toLowerCase());

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = event.target.value;
    const city = citiesInState.find((c: any) => c.name === selectedCityName);
    if (city) {
      onCitySelect(city);
    }
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
        {citiesInState.map((city: any) => (
          <option key={city.name} value={city.name}>
            {city.name}
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