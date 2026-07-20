export type DirectoryLocation = {
  state: string
  stateName: string
  city: string
  cityName: string
  description: string
}

export const directoryLocations: DirectoryLocation[] = [
  {
    state: 'illinois',
    stateName: 'Illinois',
    city: 'chicago',
    cityName: 'Chicago',
    description: 'Find estate-planning guidance and educational resources for Chicago families.',
  },
  {
    state: 'new-york',
    stateName: 'New York',
    city: 'new-york',
    cityName: 'New York City',
    description:
      'Find estate-planning guidance and educational resources for New York City families.',
  },
  {
    state: 'california',
    stateName: 'California',
    city: 'los-angeles',
    cityName: 'Los Angeles',
    description:
      'Find estate-planning guidance and educational resources for Los Angeles families.',
  },
  {
    state: 'texas',
    stateName: 'Texas',
    city: 'austin',
    cityName: 'Austin',
    description: 'Find estate-planning guidance and educational resources for Austin families.',
  },
]

export function getDirectoryLocation(state: string, city?: string) {
  return directoryLocations.find(
    (location) => location.state === state && (!city || location.city === city),
  )
}

export function getLocationsForState(state: string) {
  return directoryLocations.filter((location) => location.state === state)
}
