const palette = {
  teal: '#0A9396',
  seafoam: '#94D2BD',
  sand: '#E9D8A6',
  amber: '#CA6702',
  rust: '#BB3E03',
}

export function LifeStageArt({index}: {index: number}) {
  const {teal, seafoam, sand, amber, rust} = palette
  return (
    <svg
      viewBox="0 0 220 128"
      fill="none"
      aria-hidden="true"
      className="h-28 w-full"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="110" cy="64" r="53" fill={seafoam} opacity="0.18" />
      <circle cx="168" cy="29" r="6" fill={sand} />
      <path d="M47 91h8m-4-4v8" stroke={seafoam} strokeWidth="3" />
      {index === 0 ? (
        <>
          <path d="M63 108V79a23 23 0 0 1 46 0v29" fill={teal} />
          <path d="M111 108V79a23 23 0 0 1 46 0v29" fill={amber} />
          <circle cx="86" cy="39" r="16" fill={sand} />
          <path d="M71 36a16 16 0 0 1 31-5c-10 4-19 3-25-2" fill={teal} />
          <circle cx="134" cy="39" r="16" fill={sand} />
          <path d="M120 32c2-16 30-15 30 7v10l-9-5V31c-8 4-14 3-21 1" fill={rust} />
          <path d="M78 86c8 17 20 24 33 24s26-8 34-24" stroke={sand} strokeWidth="10" />
          <path d="M93 96c0-13 8-19 17-19s18 6 18 19l-18 13Z" fill={seafoam} />
          <circle cx="110" cy="76" r="10" fill={sand} />
          <path d="m106 96 4 4 6-7" stroke={teal} strokeWidth="3" />
          <path d="M54 114h112" stroke={teal} strokeWidth="3" />
        </>
      ) : index === 1 ? (
        <>
          <path d="M64 59 107 24l43 35v52H64Z" fill={sand} />
          <path d="m56 61 51-42 51 42" stroke={teal} strokeWidth="7" />
          <path d="M130 37V24h12v23" fill={rust} />
          <path d="M96 79a11 11 0 0 1 22 0v32H96Z" fill={teal} />
          <rect x="76" y="61" width="15" height="16" rx="3" fill={seafoam} />
          <rect x="124" y="61" width="15" height="16" rx="3" fill={seafoam} />
          <path d="M62 113h90" stroke={teal} strokeWidth="3" />
          <circle cx="156" cy="91" r="20" fill={amber} />
          <circle cx="151" cy="87" r="6" stroke={sand} strokeWidth="4" />
          <path d="m156 92 11 11m-5-5 4-4" stroke={sand} strokeWidth="4" />
        </>
      ) : index === 2 ? (
        <>
          <rect x="76" y="77" width="69" height="37" rx="6" fill={sand} />
          <path d="M87 99h19m-19 7h34" stroke={amber} strokeWidth="3" />
          <path d="M110 89V38m0 34L86 52m24 8 24-22" stroke={rust} strokeWidth="5" />
          <path d="M108 48c-19 2-30-8-29-25 19-1 31 9 29 25Z" fill={teal} />
          <path d="M113 55c-1-20 12-33 31-32 1 19-11 33-31 32Z" fill={seafoam} />
          <path d="M106 75c-21 1-34-11-33-29 20-1 34 10 33 29Z" fill={seafoam} />
          <path d="M114 79c-1-18 11-29 29-28 1 18-11 29-29 28Z" fill={teal} />
          <circle cx="150" cy="68" r="8" fill={amber} />
          <path d="m128 102 4 4 9-10" stroke={teal} strokeWidth="3" />
        </>
      ) : (
        <>
          <path d="M110 75 89 54c-16-17 8-38 21-20 13-18 37 3 21 20Z" fill={teal} />
          <path d="M84 39c-5 6-4 12 0 17" stroke={seafoam} strokeWidth="3" />
          <path d="m60 89 12-16c4-5 11-5 16-1l17 14h19c10 0 13 11 5 15l-16 8H82Z" fill={sand} />
          <path d="m160 89-12-16c-4-5-11-5-16-1l-12 10" stroke={amber} strokeWidth="9" />
          <path d="m76 78 23 19h25m35-8-26 22c-3 3-7 4-11 4H89" stroke={rust} strokeWidth="4" />
          <path d="m48 91 15-19 20 16-15 20Zm124 0-15-19-20 16 15 20Z" fill={amber} />
          <path d="m151 48 5-5m-90 0 5 5M110 14v7" stroke={seafoam} strokeWidth="3" />
        </>
      )}
    </svg>
  )
}
