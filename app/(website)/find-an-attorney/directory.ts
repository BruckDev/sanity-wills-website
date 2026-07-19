export type DirectoryState = {
  name: string
  slug: string
  cities: string[]
}

export const directoryStates: DirectoryState[] = [
  {name: 'Alabama', slug: 'alabama', cities: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile']},
  {name: 'Alaska', slug: 'alaska', cities: ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla']},
  {name: 'Arizona', slug: 'arizona', cities: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale']},
  {name: 'Arkansas', slug: 'arkansas', cities: ['Little Rock', 'Fayetteville', 'Fort Smith', 'Jonesboro']},
  {name: 'California', slug: 'california', cities: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco']},
  {name: 'Colorado', slug: 'colorado', cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins']},
  {name: 'Connecticut', slug: 'connecticut', cities: ['Bridgeport', 'New Haven', 'Stamford', 'Hartford']},
  {name: 'Delaware', slug: 'delaware', cities: ['Wilmington', 'Dover', 'Newark', 'Middletown']},
  {name: 'Florida', slug: 'florida', cities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando']},
  {name: 'Georgia', slug: 'georgia', cities: ['Atlanta', 'Augusta', 'Savannah', 'Athens']},
  {name: 'Hawaii', slug: 'hawaii', cities: ['Honolulu', 'Hilo', 'Kailua', 'Kahului']},
  {name: 'Idaho', slug: 'idaho', cities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls']},
  {name: 'Illinois', slug: 'illinois', cities: ['Chicago', 'Aurora', 'Naperville', 'Rockford']},
  {name: 'Indiana', slug: 'indiana', cities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend']},
  {name: 'Iowa', slug: 'iowa', cities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Iowa City']},
  {name: 'Kansas', slug: 'kansas', cities: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka']},
  {name: 'Kentucky', slug: 'kentucky', cities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro']},
  {name: 'Louisiana', slug: 'louisiana', cities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette']},
  {name: 'Maine', slug: 'maine', cities: ['Portland', 'Lewiston', 'Bangor', 'South Portland']},
  {name: 'Maryland', slug: 'maryland', cities: ['Baltimore', 'Annapolis', 'Frederick', 'Rockville']},
  {name: 'Massachusetts', slug: 'massachusetts', cities: ['Boston', 'Worcester', 'Springfield', 'Cambridge']},
  {name: 'Michigan', slug: 'michigan', cities: ['Detroit', 'Grand Rapids', 'Warren', 'Ann Arbor']},
  {name: 'Minnesota', slug: 'minnesota', cities: ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth']},
  {name: 'Mississippi', slug: 'mississippi', cities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg']},
  {name: 'Missouri', slug: 'missouri', cities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia']},
  {name: 'Montana', slug: 'montana', cities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman']},
  {name: 'Nebraska', slug: 'nebraska', cities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island']},
  {name: 'Nevada', slug: 'nevada', cities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas']},
  {name: 'New Hampshire', slug: 'new-hampshire', cities: ['Manchester', 'Nashua', 'Concord', 'Dover']},
  {name: 'New Jersey', slug: 'new-jersey', cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth']},
  {name: 'New Mexico', slug: 'new-mexico', cities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe']},
  {name: 'New York', slug: 'new-york', cities: ['New York City', 'Buffalo', 'Yonkers', 'Rochester']},
  {name: 'North Carolina', slug: 'north-carolina', cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham']},
  {name: 'North Dakota', slug: 'north-dakota', cities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot']},
  {name: 'Ohio', slug: 'ohio', cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo']},
  {name: 'Oklahoma', slug: 'oklahoma', cities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow']},
  {name: 'Oregon', slug: 'oregon', cities: ['Portland', 'Eugene', 'Salem', 'Gresham']},
  {name: 'Pennsylvania', slug: 'pennsylvania', cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie']},
  {name: 'Rhode Island', slug: 'rhode-island', cities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket']},
  {name: 'South Carolina', slug: 'south-carolina', cities: ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant']},
  {name: 'South Dakota', slug: 'south-dakota', cities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings']},
  {name: 'Tennessee', slug: 'tennessee', cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga']},
  {name: 'Texas', slug: 'texas', cities: ['Houston', 'San Antonio', 'Dallas', 'Austin']},
  {name: 'Utah', slug: 'utah', cities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan']},
  {name: 'Vermont', slug: 'vermont', cities: ['Burlington', 'South Burlington', 'Rutland', 'Montpelier']},
  {name: 'Virginia', slug: 'virginia', cities: ['Virginia Beach', 'Chesapeake', 'Norfolk', 'Richmond']},
  {name: 'Washington', slug: 'washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver']},
  {name: 'West Virginia', slug: 'west-virginia', cities: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg']},
  {name: 'Wisconsin', slug: 'wisconsin', cities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha']},
  {name: 'Wyoming', slug: 'wyoming', cities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette']},
]

export function citySlug(city: string) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function findDirectoryState(slug: string) {
  return directoryStates.find((state) => state.slug === slug)
}

export function findDirectoryCity(state: DirectoryState, slug: string) {
  return state.cities.find((city) => citySlug(city) === slug)
}
