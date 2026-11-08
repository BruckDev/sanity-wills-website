'use client'

import {useState} from 'react'
import {stateOutlines} from './stateOutlines'

const stateCities = {
  'Alabama': ['Birmingham', 'Huntsville'],
  'Alaska': ['Anchorage', 'Fairbanks'],
  'Arizona': ['Phoenix', 'Tucson'],
  'Arkansas': ['Little Rock', 'Fayetteville'],
  'California': ['Los Angeles', 'San Diego'],
  'Colorado': ['Denver', 'Colorado Springs'],
  'Connecticut': ['Bridgeport', 'Stamford'],
  'Delaware': ['Wilmington', 'Dover'],
  'Florida': ['Jacksonville', 'Miami'],
  'Georgia': ['Atlanta', 'Columbus'],
  'Hawaii': ['Honolulu', 'East Honolulu'],
  'Idaho': ['Boise', 'Meridian'],
  'Illinois': ['Chicago', 'Aurora'],
  'Indiana': ['Indianapolis', 'Fort Wayne'],
  'Iowa': ['Des Moines', 'Cedar Rapids'],
  'Kansas': ['Wichita', 'Overland Park'],
  'Kentucky': ['Louisville', 'Lexington'],
  'Louisiana': ['New Orleans', 'Baton Rouge'],
  'Maine': ['Portland', 'Lewiston'],
  'Maryland': ['Baltimore', 'Frederick'],
  'Massachusetts': ['Boston', 'Worcester'],
  'Michigan': ['Detroit', 'Grand Rapids'],
  'Minnesota': ['Minneapolis', 'Saint Paul'],
  'Mississippi': ['Jackson', 'Gulfport'],
  'Missouri': ['Kansas City', 'St. Louis'],
  'Montana': ['Billings', 'Missoula'],
  'Nebraska': ['Omaha', 'Lincoln'],
  'Nevada': ['Las Vegas', 'Henderson'],
  'New Hampshire': ['Manchester', 'Nashua'],
  'New Jersey': ['Newark', 'Jersey City'],
  'New Mexico': ['Albuquerque', 'Las Cruces'],
  'New York': ['New York City', 'Buffalo'],
  'North Carolina': ['Charlotte', 'Raleigh'],
  'North Dakota': ['Fargo', 'Bismarck'],
  'Ohio': ['Columbus', 'Cleveland'],
  'Oklahoma': ['Oklahoma City', 'Tulsa'],
  'Oregon': ['Portland', 'Salem'],
  'Pennsylvania': ['Philadelphia', 'Pittsburgh'],
  'Rhode Island': ['Providence', 'Warwick'],
  'South Carolina': ['Charleston', 'Columbia'],
  'South Dakota': ['Sioux Falls', 'Rapid City'],
  'Tennessee': ['Nashville', 'Memphis'],
  'Texas': ['Houston', 'San Antonio'],
  'Utah': ['Salt Lake City', 'West Valley City'],
  'Vermont': ['Burlington', 'South Burlington'],
  'Virginia': ['Virginia Beach', 'Chesapeake'],
  'Washington': ['Seattle', 'Spokane'],
  'West Virginia': ['Charleston', 'Huntington'],
  'Wisconsin': ['Milwaukee', 'Madison'],
  'Wyoming': ['Cheyenne', 'Casper'],
} satisfies Record<keyof typeof stateOutlines, [string, string]>

type State = keyof typeof stateCities
const states = Object.keys(stateCities) as State[]

export function StateCoverageMap() {
  const [selected, setSelected] = useState<State>('Illinois')
  const [hovered, setHovered] = useState<State>()
  const [focused, setFocused] = useState<State>()
  const active = hovered ?? focused ?? selected

  return (
    <div className="mt-6 grid items-center gap-4 rounded-2xl border border-[#cbdce3] bg-white p-3 sm:p-5 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-6">
      <div className="rounded-xl bg-[#eaf3f6] p-4 text-[#071f33]">
        <select
          aria-label="Choose a state to see its cities"
          className="w-full rounded-lg border border-[#071f33] bg-white px-3 py-2 text-base font-semibold"
          value={active}
          onChange={(event) => {
            setHovered(undefined)
            setFocused(undefined)
            setSelected(event.currentTarget.value as State)
          }}
        >
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
        <ol aria-live="polite" aria-atomic="true" className="mt-3 list-decimal space-y-1 pl-6">
          {stateCities[active].map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ol>
      </div>
      <svg
        aria-label="Interactive map of the United States"
        role="group"
        viewBox="-65 5 1030 610"
        className="h-auto w-full"
      >
        {states.map((state) => (
          <path
            key={state}
            d={stateOutlines[state]}
            role="button"
            tabIndex={0}
            aria-label={`${state}: ${stateCities[state].join(', ')}`}
            aria-pressed={selected === state}
            fillRule="evenodd"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            className={`cursor-pointer stroke-[#071f33] stroke-1 focus-visible:stroke-[2.5] focus-visible:outline-none ${
              active === state ? 'fill-[#77cbbb]' : 'fill-[#d7f4ea]'
            }`}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setHovered(state)
            }}
            onPointerLeave={() => setHovered(undefined)}
            onFocus={() => setFocused(state)}
            onBlur={() => setFocused(undefined)}
            onClick={() => setSelected(state)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setSelected(state)
              }
            }}
          />
        ))}
      </svg>
    </div>
  )
}
