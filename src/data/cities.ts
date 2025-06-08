export interface City {
  id: string;
  name: string;
  state: string;
  fullName: string;
  isSpecialCase?: boolean;
  medianRent: number;
  medianIncome: number;
}

export const cities: City[] = [
  // Alabama
  {
    id: 'birmingham-al',
    name: 'Birmingham',
    state: 'AL',
    fullName: 'Birmingham, AL',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'montgomery-al',
    name: 'Montgomery',
    state: 'AL',
    fullName: 'Montgomery, AL',
    medianRent: 850,
    medianIncome: 45000
  },

  // Alaska
  {
    id: 'anchorage-ak',
    name: 'Anchorage',
    state: 'AK',
    fullName: 'Anchorage, AK',
    medianRent: 1250,
    medianIncome: 62000
  },
  {
    id: 'fairbanks-ak',
    name: 'Fairbanks',
    state: 'AK',
    fullName: 'Fairbanks, AK',
    medianRent: 1150,
    medianIncome: 58000
  },
  {
    id: 'juneau-ak',
    name: 'Juneau',
    state: 'AK',
    fullName: 'Juneau, AK',
    medianRent: 1350,
    medianIncome: 65000
  },

  // Arizona
  {
    id: 'phoenix-az',
    name: 'Phoenix',
    state: 'AZ',
    fullName: 'Phoenix, AZ',
    medianRent: 1350,
    medianIncome: 52000
  },
  {
    id: 'tucson-az',
    name: 'Tucson',
    state: 'AZ',
    fullName: 'Tucson, AZ',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'mesa-az',
    name: 'Mesa',
    state: 'AZ',
    fullName: 'Mesa, AZ',
    medianRent: 1250,
    medianIncome: 50000
  },

  // Arkansas
  {
    id: 'little-rock-ar',
    name: 'Little Rock',
    state: 'AR',
    fullName: 'Little Rock, AR',
    medianRent: 850,
    medianIncome: 45000
  },
  {
    id: 'fayetteville-ar',
    name: 'Fayetteville',
    state: 'AR',
    fullName: 'Fayetteville, AR',
    medianRent: 950,
    medianIncome: 48000
  },

  // California
  {
    id: 'los-angeles-ca',
    name: 'Los Angeles',
    state: 'CA',
    fullName: 'Los Angeles, CA',
    medianRent: 2450,
    medianIncome: 52000
  },
  {
    id: 'san-francisco-ca',
    name: 'San Francisco',
    state: 'CA',
    fullName: 'San Francisco, CA',
    medianRent: 3100,
    medianIncome: 70000
  },
  {
    id: 'san-diego-ca',
    name: 'San Diego',
    state: 'CA',
    fullName: 'San Diego, CA',
    medianRent: 2450,
    medianIncome: 52000
  },
  {
    id: 'san-jose-ca',
    name: 'San Jose',
    state: 'CA',
    fullName: 'San Jose, CA',
    medianRent: 2450,
    medianIncome: 52000
  },
  {
    id: 'fresno-ca',
    name: 'Fresno',
    state: 'CA',
    fullName: 'Fresno, CA',
    medianRent: 1350,
    medianIncome: 48000
  },
  {
    id: 'sacramento-ca',
    name: 'Sacramento',
    state: 'CA',
    fullName: 'Sacramento, CA',
    medianRent: 1650,
    medianIncome: 55000
  },
  {
    id: 'oakland-ca',
    name: 'Oakland',
    state: 'CA',
    fullName: 'Oakland, CA',
    medianRent: 2200,
    medianIncome: 58000
  },
  {
    id: 'long-beach-ca',
    name: 'Long Beach',
    state: 'CA',
    fullName: 'Long Beach, CA',
    medianRent: 1950,
    medianIncome: 52000
  },

  // Colorado
  {
    id: 'denver-co',
    name: 'Denver',
    state: 'CO',
    fullName: 'Denver, CO',
    medianRent: 1650,
    medianIncome: 58000
  },
  {
    id: 'colorado-springs-co',
    name: 'Colorado Springs',
    state: 'CO',
    fullName: 'Colorado Springs, CO',
    medianRent: 1350,
    medianIncome: 52000
  },
  {
    id: 'aurora-co',
    name: 'Aurora',
    state: 'CO',
    fullName: 'Aurora, CO',
    medianRent: 1450,
    medianIncome: 55000
  },

  // Connecticut
  {
    id: 'hartford-ct',
    name: 'Hartford',
    state: 'CT',
    fullName: 'Hartford, CT',
    medianRent: 1450,
    medianIncome: 62000
  },
  {
    id: 'new-haven-ct',
    name: 'New Haven',
    state: 'CT',
    fullName: 'New Haven, CT',
    medianRent: 1350,
    medianIncome: 58000
  },

  // Delaware
  {
    id: 'wilmington-de',
    name: 'Wilmington',
    state: 'DE',
    fullName: 'Wilmington, DE',
    medianRent: 1250,
    medianIncome: 55000
  },
  {
    id: 'dover-de',
    name: 'Dover',
    state: 'DE',
    fullName: 'Dover, DE',
    medianRent: 1150,
    medianIncome: 52000
  },

  // District of Columbia
  {
    id: 'washington-dc',
    name: 'Washington',
    state: 'DC',
    fullName: 'Washington, DC',
    isSpecialCase: true,
    medianRent: 2200,
    medianIncome: 75000
  },

  // Florida
  {
    id: 'miami-fl',
    name: 'Miami',
    state: 'FL',
    fullName: 'Miami, FL',
    medianRent: 1450,
    medianIncome: 48000
  },
  {
    id: 'orlando-fl',
    name: 'Orlando',
    state: 'FL',
    fullName: 'Orlando, FL',
    medianRent: 1350,
    medianIncome: 48000
  },
  {
    id: 'jacksonville-fl',
    name: 'Jacksonville',
    state: 'FL',
    fullName: 'Jacksonville, FL',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'tampa-fl',
    name: 'Tampa',
    state: 'FL',
    fullName: 'Tampa, FL',
    medianRent: 1350,
    medianIncome: 48000
  },
  {
    id: 'st-petersburg-fl',
    name: 'St. Petersburg',
    state: 'FL',
    fullName: 'St. Petersburg, FL',
    medianRent: 1250,
    medianIncome: 48000
  },
  {
    id: 'fort-lauderdale-fl',
    name: 'Fort Lauderdale',
    state: 'FL',
    fullName: 'Fort Lauderdale, FL',
    medianRent: 1450,
    medianIncome: 48000
  },
  {
    id: 'tallahassee-fl',
    name: 'Tallahassee',
    state: 'FL',
    fullName: 'Tallahassee, FL',
    medianRent: 1150,
    medianIncome: 48000
  },

  // Georgia
  {
    id: 'atlanta-ga',
    name: 'Atlanta',
    state: 'GA',
    fullName: 'Atlanta, GA',
    medianRent: 1240,
    medianIncome: 56000
  },
  {
    id: 'savannah-ga',
    name: 'Savannah',
    state: 'GA',
    fullName: 'Savannah, GA',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'augusta-ga',
    name: 'Augusta',
    state: 'GA',
    fullName: 'Augusta, GA',
    medianRent: 950,
    medianIncome: 45000
  },

  // Hawaii
  {
    id: 'honolulu-hi',
    name: 'Honolulu',
    state: 'HI',
    fullName: 'Honolulu, HI',
    medianRent: 1950,
    medianIncome: 58000
  },
  {
    id: 'hilo-hi',
    name: 'Hilo',
    state: 'HI',
    fullName: 'Hilo, HI',
    medianRent: 1450,
    medianIncome: 52000
  },

  // Idaho
  {
    id: 'boise-id',
    name: 'Boise',
    state: 'ID',
    fullName: 'Boise, ID',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'meridian-id',
    name: 'Meridian',
    state: 'ID',
    fullName: 'Meridian, ID',
    medianRent: 1250,
    medianIncome: 50000
  },

  // Illinois
  {
    id: 'chicago-il',
    name: 'Chicago',
    state: 'IL',
    fullName: 'Chicago, IL',
    medianRent: 1800,
    medianIncome: 55000
  },
  {
    id: 'aurora-il',
    name: 'Aurora',
    state: 'IL',
    fullName: 'Aurora, IL',
    medianRent: 1350,
    medianIncome: 52000
  },
  {
    id: 'springfield-il',
    name: 'Springfield',
    state: 'IL',
    fullName: 'Springfield, IL',
    medianRent: 950,
    medianIncome: 48000
  },

  // Indiana
  {
    id: 'indianapolis-in',
    name: 'Indianapolis',
    state: 'IN',
    fullName: 'Indianapolis, IN',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'fort-wayne-in',
    name: 'Fort Wayne',
    state: 'IN',
    fullName: 'Fort Wayne, IN',
    medianRent: 850,
    medianIncome: 45000
  },

  // Iowa
  {
    id: 'des-moines-ia',
    name: 'Des Moines',
    state: 'IA',
    fullName: 'Des Moines, IA',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'cedar-rapids-ia',
    name: 'Cedar Rapids',
    state: 'IA',
    fullName: 'Cedar Rapids, IA',
    medianRent: 850,
    medianIncome: 45000
  },

  // Kansas
  {
    id: 'wichita-ks',
    name: 'Wichita',
    state: 'KS',
    fullName: 'Wichita, KS',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'overland-park-ks',
    name: 'Overland Park',
    state: 'KS',
    fullName: 'Overland Park, KS',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'topeka-ks',
    name: 'Topeka',
    state: 'KS',
    fullName: 'Topeka, KS',
    medianRent: 850,
    medianIncome: 45000
  },

  // Kentucky
  {
    id: 'louisville-ky',
    name: 'Louisville',
    state: 'KY',
    fullName: 'Louisville, KY',
    medianRent: 850,
    medianIncome: 45000
  },
  {
    id: 'lexington-ky',
    name: 'Lexington',
    state: 'KY',
    fullName: 'Lexington, KY',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'frankfort-ky',
    name: 'Frankfort',
    state: 'KY',
    fullName: 'Frankfort, KY',
    medianRent: 850,
    medianIncome: 45000
  },

  // Louisiana
  {
    id: 'new-orleans-la',
    name: 'New Orleans',
    state: 'LA',
    fullName: 'New Orleans, LA',
    medianRent: 950,
    medianIncome: 45000
  },
  {
    id: 'baton-rouge-la',
    name: 'Baton Rouge',
    state: 'LA',
    fullName: 'Baton Rouge, LA',
    medianRent: 950,
    medianIncome: 45000
  },

  // Maine
  {
    id: 'portland-me',
    name: 'Portland',
    state: 'ME',
    fullName: 'Portland, ME',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'lewiston-me',
    name: 'Lewiston',
    state: 'ME',
    fullName: 'Lewiston, ME',
    medianRent: 850,
    medianIncome: 42000
  },
  {
    id: 'augusta-me',
    name: 'Augusta',
    state: 'ME',
    fullName: 'Augusta, ME',
    medianRent: 850,
    medianIncome: 42000
  },

  // Maryland
  {
    id: 'baltimore-md',
    name: 'Baltimore',
    state: 'MD',
    fullName: 'Baltimore, MD',
    medianRent: 1450,
    medianIncome: 62000
  },
  {
    id: 'silver-spring-md',
    name: 'Silver Spring',
    state: 'MD',
    fullName: 'Silver Spring, MD',
    medianRent: 1650,
    medianIncome: 65000
  },
  {
    id: 'annapolis-md',
    name: 'Annapolis',
    state: 'MD',
    fullName: 'Annapolis, MD',
    medianRent: 1450,
    medianIncome: 62000
  },

  // Massachusetts
  {
    id: 'boston-ma',
    name: 'Boston',
    state: 'MA',
    fullName: 'Boston, MA',
    medianRent: 1650,
    medianIncome: 65000
  },
  {
    id: 'worcester-ma',
    name: 'Worcester',
    state: 'MA',
    fullName: 'Worcester, MA',
    medianRent: 1250,
    medianIncome: 55000
  },
  {
    id: 'cambridge-ma',
    name: 'Cambridge',
    state: 'MA',
    fullName: 'Cambridge, MA',
    medianRent: 2200,
    medianIncome: 70000
  },

  // Michigan
  {
    id: 'detroit-mi',
    name: 'Detroit',
    state: 'MI',
    fullName: 'Detroit, MI',
    medianRent: 1050,
    medianIncome: 52000
  },
  {
    id: 'grand-rapids-mi',
    name: 'Grand Rapids',
    state: 'MI',
    fullName: 'Grand Rapids, MI',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'lansing-mi',
    name: 'Lansing',
    state: 'MI',
    fullName: 'Lansing, MI',
    medianRent: 950,
    medianIncome: 48000
  },

  // Minnesota
  {
    id: 'minneapolis-mn',
    name: 'Minneapolis',
    state: 'MN',
    fullName: 'Minneapolis, MN',
    medianRent: 1250,
    medianIncome: 58000
  },
  {
    id: 'saint-paul-mn',
    name: 'Saint Paul',
    state: 'MN',
    fullName: 'Saint Paul, MN',
    medianRent: 1150,
    medianIncome: 55000
  },

  // Mississippi
  {
    id: 'jackson-ms',
    name: 'Jackson',
    state: 'MS',
    fullName: 'Jackson, MS',
    medianRent: 850,
    medianIncome: 42000
  },
  {
    id: 'gulfport-ms',
    name: 'Gulfport',
    state: 'MS',
    fullName: 'Gulfport, MS',
    medianRent: 950,
    medianIncome: 45000
  },

  // Missouri
  {
    id: 'st-louis-mo',
    name: 'St. Louis',
    state: 'MO',
    fullName: 'St. Louis, MO',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'kansas-city-mo',
    name: 'Kansas City',
    state: 'MO',
    fullName: 'Kansas City, MO',
    medianRent: 1050,
    medianIncome: 52000
  },
  {
    id: 'jefferson-city-mo',
    name: 'Jefferson City',
    state: 'MO',
    fullName: 'Jefferson City, MO',
    medianRent: 850,
    medianIncome: 45000
  },

  // Montana
  {
    id: 'billings-mt',
    name: 'Billings',
    state: 'MT',
    fullName: 'Billings, MT',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'missoula-mt',
    name: 'Missoula',
    state: 'MT',
    fullName: 'Missoula, MT',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'helena-mt',
    name: 'Helena',
    state: 'MT',
    fullName: 'Helena, MT',
    medianRent: 950,
    medianIncome: 48000
  },

  // Nebraska
  {
    id: 'omaha-ne',
    name: 'Omaha',
    state: 'NE',
    fullName: 'Omaha, NE',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'lincoln-ne',
    name: 'Lincoln',
    state: 'NE',
    fullName: 'Lincoln, NE',
    medianRent: 950,
    medianIncome: 48000
  },

  // Nevada
  {
    id: 'las-vegas-nv',
    name: 'Las Vegas',
    state: 'NV',
    fullName: 'Las Vegas, NV',
    medianRent: 1350,
    medianIncome: 52000
  },
  {
    id: 'henderson-nv',
    name: 'Henderson',
    state: 'NV',
    fullName: 'Henderson, NV',
    medianRent: 1450,
    medianIncome: 55000
  },
  {
    id: 'reno-nv',
    name: 'Reno',
    state: 'NV',
    fullName: 'Reno, NV',
    medianRent: 1350,
    medianIncome: 52000
  },
  {
    id: 'carson-city-nv',
    name: 'Carson City',
    state: 'NV',
    fullName: 'Carson City, NV',
    medianRent: 1150,
    medianIncome: 48000
  },

  // New Hampshire
  {
    id: 'manchester-nh',
    name: 'Manchester',
    state: 'NH',
    fullName: 'Manchester, NH',
    medianRent: 1250,
    medianIncome: 55000
  },
  {
    id: 'nashua-nh',
    name: 'Nashua',
    state: 'NH',
    fullName: 'Nashua, NH',
    medianRent: 1350,
    medianIncome: 58000
  },
  {
    id: 'concord-nh',
    name: 'Concord',
    state: 'NH',
    fullName: 'Concord, NH',
    medianRent: 1150,
    medianIncome: 52000
  },

  // New Jersey
  {
    id: 'jersey-city-nj',
    name: 'Jersey City',
    state: 'NJ',
    fullName: 'Jersey City, NJ',
    medianRent: 1650,
    medianIncome: 62000
  },
  {
    id: 'newark-nj',
    name: 'Newark',
    state: 'NJ',
    fullName: 'Newark, NJ',
    medianRent: 1450,
    medianIncome: 58000
  },
  {
    id: 'trenton-nj',
    name: 'Trenton',
    state: 'NJ',
    fullName: 'Trenton, NJ',
    medianRent: 1150,
    medianIncome: 52000
  },

  // New Mexico
  {
    id: 'albuquerque-nm',
    name: 'Albuquerque',
    state: 'NM',
    fullName: 'Albuquerque, NM',
    medianRent: 950,
    medianIncome: 45000
  },
  {
    id: 'santa-fe-nm',
    name: 'Santa Fe',
    state: 'NM',
    fullName: 'Santa Fe, NM',
    medianRent: 1250,
    medianIncome: 52000
  },

  // New York
  {
    id: 'new-york-ny',
    name: 'New York City',
    state: 'NY',
    fullName: 'New York City, NY',
    medianRent: 3200,
    medianIncome: 60000
  },
  {
    id: 'buffalo-ny',
    name: 'Buffalo',
    state: 'NY',
    fullName: 'Buffalo, NY',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'rochester-ny',
    name: 'Rochester',
    state: 'NY',
    fullName: 'Rochester, NY',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'albany-ny',
    name: 'Albany',
    state: 'NY',
    fullName: 'Albany, NY',
    medianRent: 1150,
    medianIncome: 52000
  },

  // North Carolina
  {
    id: 'charlotte-nc',
    name: 'Charlotte',
    state: 'NC',
    fullName: 'Charlotte, NC',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'raleigh-nc',
    name: 'Raleigh',
    state: 'NC',
    fullName: 'Raleigh, NC',
    medianRent: 1250,
    medianIncome: 55000
  },
  {
    id: 'durham-nc',
    name: 'Durham',
    state: 'NC',
    fullName: 'Durham, NC',
    medianRent: 1150,
    medianIncome: 52000
  },

  // North Dakota
  {
    id: 'fargo-nd',
    name: 'Fargo',
    state: 'ND',
    fullName: 'Fargo, ND',
    medianRent: 850,
    medianIncome: 52000
  },
  {
    id: 'bismarck-nd',
    name: 'Bismarck',
    state: 'ND',
    fullName: 'Bismarck, ND',
    medianRent: 850,
    medianIncome: 52000
  },

  // Ohio
  {
    id: 'cleveland-oh',
    name: 'Cleveland',
    state: 'OH',
    fullName: 'Cleveland, OH',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'columbus-oh',
    name: 'Columbus',
    state: 'OH',
    fullName: 'Columbus, OH',
    medianRent: 950,
    medianIncome: 48000
  },
  {
    id: 'cincinnati-oh',
    name: 'Cincinnati',
    state: 'OH',
    fullName: 'Cincinnati, OH',
    medianRent: 950,
    medianIncome: 48000
  },

  // Oklahoma
  {
    id: 'oklahoma-city-ok',
    name: 'Oklahoma City',
    state: 'OK',
    fullName: 'Oklahoma City, OK',
    medianRent: 850,
    medianIncome: 45000
  },
  {
    id: 'tulsa-ok',
    name: 'Tulsa',
    state: 'OK',
    fullName: 'Tulsa, OK',
    medianRent: 850,
    medianIncome: 45000
  },

  // Oregon
  {
    id: 'portland-or',
    name: 'Portland',
    state: 'OR',
    fullName: 'Portland, OR',
    medianRent: 1350,
    medianIncome: 55000
  },
  {
    id: 'eugene-or',
    name: 'Eugene',
    state: 'OR',
    fullName: 'Eugene, OR',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'salem-or',
    name: 'Salem',
    state: 'OR',
    fullName: 'Salem, OR',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'philadelphia-pa',
    name: 'Philadelphia',
    state: 'PA',
    fullName: 'Philadelphia, PA',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'pittsburgh-pa',
    name: 'Pittsburgh',
    state: 'PA',
    fullName: 'Pittsburgh, PA',
    medianRent: 1150,
    medianIncome: 52000
  },

  // Rhode Island
  {
    id: 'providence-ri',
    name: 'Providence',
    state: 'RI',
    fullName: 'Providence, RI',
    medianRent: 1250,
    medianIncome: 55000
  },
  {
    id: 'warwick-ri',
    name: 'Warwick',
    state: 'RI',
    fullName: 'Warwick, RI',
    medianRent: 1150,
    medianIncome: 52000
  },

  // South Carolina
  {
    id: 'charleston-sc',
    name: 'Charleston',
    state: 'SC',
    fullName: 'Charleston, SC',
    medianRent: 1050,
    medianIncome: 48000
  },
  {
    id: 'columbia-sc',
    name: 'Columbia',
    state: 'SC',
    fullName: 'Columbia, SC',
    medianRent: 950,
    medianIncome: 45000
  },

  // South Dakota
  {
    id: 'sioux-falls-sd',
    name: 'Sioux Falls',
    state: 'SD',
    fullName: 'Sioux Falls, SD',
    medianRent: 850,
    medianIncome: 48000
  },
  {
    id: 'rapid-city-sd',
    name: 'Rapid City',
    state: 'SD',
    fullName: 'Rapid City, SD',
    medianRent: 850,
    medianIncome: 48000
  },

  // Tennessee
  {
    id: 'nashville-tn',
    name: 'Nashville',
    state: 'TN',
    fullName: 'Nashville, TN',
    medianRent: 1150,
    medianIncome: 48000
  },
  {
    id: 'memphis-tn',
    name: 'Memphis',
    state: 'TN',
    fullName: 'Memphis, TN',
    medianRent: 950,
    medianIncome: 45000
  },

  // Texas
  {
    id: 'austin-tx',
    name: 'Austin',
    state: 'TX',
    fullName: 'Austin, TX',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'dallas-tx',
    name: 'Dallas',
    state: 'TX',
    fullName: 'Dallas, TX',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'houston-tx',
    name: 'Houston',
    state: 'TX',
    fullName: 'Houston, TX',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'san-antonio-tx',
    name: 'San Antonio',
    state: 'TX',
    fullName: 'San Antonio, TX',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'fort-worth-tx',
    name: 'Fort Worth',
    state: 'TX',
    fullName: 'Fort Worth, TX',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'plano-tx',
    name: 'Plano',
    state: 'TX',
    fullName: 'Plano, TX',
    medianRent: 1350,
    medianIncome: 58000
  },
  {
    id: 'frisco-tx',
    name: 'Frisco',
    state: 'TX',
    fullName: 'Frisco, TX',
    medianRent: 1450,
    medianIncome: 62000
  },

  // Utah
  {
    id: 'salt-lake-city-ut',
    name: 'Salt Lake City',
    state: 'UT',
    fullName: 'Salt Lake City, UT',
    medianRent: 1250,
    medianIncome: 52000
  },
  {
    id: 'provo-ut',
    name: 'Provo',
    state: 'UT',
    fullName: 'Provo, UT',
    medianRent: 1150,
    medianIncome: 48000
  },

  // Vermont
  {
    id: 'burlington-vt',
    name: 'Burlington',
    state: 'VT',
    fullName: 'Burlington, VT',
    medianRent: 1250,
    medianIncome: 52000
  },
  {
    id: 'montpelier-vt',
    name: 'Montpelier',
    state: 'VT',
    fullName: 'Montpelier, VT',
    medianRent: 1150,
    medianIncome: 48000
  },

  // Virginia
  {
    id: 'arlington-va',
    name: 'Arlington',
    state: 'VA',
    fullName: 'Arlington, VA',
    medianRent: 1350,
    medianIncome: 58000
  },
  {
    id: 'virginia-beach-va',
    name: 'Virginia Beach',
    state: 'VA',
    fullName: 'Virginia Beach, VA',
    medianRent: 1250,
    medianIncome: 55000
  },
  {
    id: 'richmond-va',
    name: 'Richmond',
    state: 'VA',
    fullName: 'Richmond, VA',
    medianRent: 1150,
    medianIncome: 52000
  },

  // Washington
  {
    id: 'seattle-wa',
    name: 'Seattle',
    state: 'WA',
    fullName: 'Seattle, WA',
    medianRent: 1450,
    medianIncome: 62000
  },
  {
    id: 'spokane-wa',
    name: 'Spokane',
    state: 'WA',
    fullName: 'Spokane, WA',
    medianRent: 1150,
    medianIncome: 52000
  },
  {
    id: 'vancouver-wa',
    name: 'Vancouver',
    state: 'WA',
    fullName: 'Vancouver, WA',
    medianRent: 1250,
    medianIncome: 55000
  },

  // West Virginia
  {
    id: 'charleston-wv',
    name: 'Charleston',
    state: 'WV',
    fullName: 'Charleston, WV',
    medianRent: 850,
    medianIncome: 42000
  },
  {
    id: 'morgantown-wv',
    name: 'Morgantown',
    state: 'WV',
    fullName: 'Morgantown, WV',
    medianRent: 950,
    medianIncome: 45000
  },

  // Wisconsin
  {
    id: 'milwaukee-wi',
    name: 'Milwaukee',
    state: 'WI',
    fullName: 'Milwaukee, WI',
    medianRent: 1050,
    medianIncome: 52000
  },
  {
    id: 'madison-wi',
    name: 'Madison',
    state: 'WI',
    fullName: 'Madison, WI',
    medianRent: 1150,
    medianIncome: 55000
  },

  // Wyoming
  {
    id: 'cheyenne-wy',
    name: 'Cheyenne',
    state: 'WY',
    fullName: 'Cheyenne, WY',
    medianRent: 950,
    medianIncome: 52000
  },
  {
    id: 'casper-wy',
    name: 'Casper',
    state: 'WY',
    fullName: 'Casper, WY',
    medianRent: 850,
    medianIncome: 48000
  }
];

export const getCityById = (id: string): City | undefined => {
  return cities.find(city => city.id === id);
};

export const getCityByFullName = (fullName: string): City | undefined => {
  return cities.find(city => city.fullName === fullName);
}; 