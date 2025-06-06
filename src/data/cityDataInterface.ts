export interface City {
  medianRent: number;
  medianIncome: number;
}

export interface CityData {
  [state: string]: {
    [city: string]: City;
  };
}
