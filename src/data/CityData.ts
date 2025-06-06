// Import city data from JSON and export with proper typing
import cityDataJson from './cityData.json';
import { CityData } from './cityDataInterface';

export const cityData: CityData = cityDataJson as any; 