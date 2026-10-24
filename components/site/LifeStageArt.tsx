const palette = {
  teal: '#618986',
  seafoam: '#99B9A9',
  sand: '#F1E7D3',
  amber: '#C79B68',
  rust: '#A6825D',
  autumnAccent: '#CA6702',
}

export function LifeStageArt({index}: {index: number}) {
  const {teal, seafoam, sand, amber, rust, autumnAccent} = palette
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="35 4 150 120"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 shrink-0 lg:h-20 lg:w-20"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="110"
        cy="64"
        r="53"
        fill={index === 1 ? '#b8e6ff' : seafoam}
        opacity={index === 1 ? 1 : 0.18}
      />
      <circle cx="168" cy="29" r="6" fill={sand} />
      <path d="M47 91h8m-4-4v8" stroke={seafoam} strokeWidth="3" />
      {index === 0 ? (
        <>
          <path d="M63 108V79a23 23 0 0 1 46 0v29" fill="#add6fc" />
          <path d="M111 108V79a23 23 0 0 1 46 0v29" fill="#fdc2e1" />
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
          <path d="M64 59 107 24l43 35v52H64Z" fill="#ffdebc" />
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
          <path d="M108 48c-19 2-30-8-29-25 19-1 31 9 29 25Z" fill="#6da655" />
          <path d="M113 55c-1-20 12-33 31-32 1 19-11 33-31 32Z" fill="#6da655" />
          <path d="M106 75c-21 1-34-11-33-29 20-1 34 10 33 29Z" fill="#6da655" />
          <path d="M114 79c-1-18 11-29 29-28 1 18-11 29-29 28Z" fill="#6da655" />
          <circle cx="150" cy="68" r="8" fill={autumnAccent} opacity="0.65" />
          <path d="m128 102 4 4 9-10" stroke={teal} strokeWidth="3" />
        </>
      ) : index === 3 ? (
        <>
          <path d="M110 75 89 54c-16-17 8-38 21-20 13-18 37 3 21 20Z" fill="#f29595" />
          <path d="M84 39c-5 6-4 12 0 17" stroke={seafoam} strokeWidth="3" />
          <path d="m60 89 12-16c4-5 11-5 16-1l17 14h19c10 0 13 11 5 15l-16 8H82Z" fill={sand} />
          <path d="m160 89-12-16c-4-5-11-5-16-1l-12 10" stroke={amber} strokeWidth="9" />
          <path d="m76 78 23 19h25m35-8-26 22c-3 3-7 4-11 4H89" stroke={rust} strokeWidth="4" />
          <path d="m48 91 15-19 20 16-15 20Zm124 0-15-19-20 16 15 20Z" fill={amber} />
          <path d="m151 48 5-5m-90 0 5 5M110 14v7" stroke={seafoam} strokeWidth="3" />
        </>
      ) : index === 4 ? (
        <>
          <path d="M76 22h53l18 18v65H76Z" fill="#ffecd7" />
          <path d="M129 22v18h18" fill={seafoam} />
          <path d="M88 49h35M88 59h30M88 69h20" stroke={teal} strokeWidth="4" />
          <path d="m101 87 7-5 7 5 10-9" stroke={rust} strokeWidth="3" />
          <path d="m133 85 22-35 7 5-22 35-10 7Z" fill={teal} />
          <path d="m130 97 3-12 7 5Z" fill={amber} />
          <ellipse cx="75" cy="101" rx="17" ry="7" fill={amber} />
          <path d="M58 101v9c0 9 34 9 34 0v-9" fill={amber} />
          <ellipse cx="75" cy="101" rx="17" ry="7" fill={sand} stroke={amber} strokeWidth="3" />
          <path d="M64 108v6m8-4v6m9-6v5" stroke={rust} strokeWidth="2" />
        </>
      ) : index === 5 ? (
        <>
          <path d="M74 21h57l16 17v72H74Z" fill="#ffecd7" />
          <path d="M131 21v17h16" fill={seafoam} />
          <path d="M96 42h13V30h12v12h13v12h-13v13h-12V54H96Z" fill="#3d85c6" />
          <path d="M87 79h34M87 89h25M87 99h17" stroke={amber} strokeWidth="4" />
          <path d="m144 109-18-18c-13-15 6-31 18-17 12-14 31 2 18 17Z" fill="#ea9999" />
          <path d="m129 88 8 1 4-8 6 17 4-9h9" stroke={teal} strokeWidth="3" />
        </>
      ) : index === 6 ? (
        <>
          <path d="M75 64 111 34l35 30v43H75Z" fill="#fadcbd" />
          <path d="m67 66 44-37 44 37" stroke="#fa8585" strokeWidth="6" />
          <path d="M101 84a10 10 0 0 1 20 0v23h-20Z" fill={teal} />
          <rect x="84" y="67" width="11" height="13" rx="2" fill={seafoam} />
          <rect x="127" y="67" width="11" height="13" rx="2" fill={seafoam} />
          <path d="M85 111C57 108 45 87 52 65c22 8 33 24 33 46Z" fill={seafoam} />
          <path d="M138 111c28-3 40-24 33-46-22 8-33 24-33 46Z" fill={teal} />
          <path d="m59 80 20 29m84-29-20 29" stroke={sand} strokeWidth="2" />
          <path d="M83 114h57" stroke={rust} strokeWidth="3" />
        </>
      ) : (
        <>
          <path d="m61 47 49-26 49 26Z" fill={teal} />
          <path d="M62 52h96v9H62Z" fill={amber} />
          <path d="M72 61h13v40H72Zm31 0h13v40h-13Zm31 0h13v40h-13Z" fill={sand} />
          <path d="M77 66v30m31-30v30m31-30v30" stroke={amber} strokeWidth="2" />
          <path d="M66 101h88v9H66Zm-7 9h102v7H59Z" fill={seafoam} />
          <circle cx="110" cy="40" r="5" fill={sand} />
          <path d="M147 78h22v31h-22Z" fill={sand} />
          <path d="M152 86h12m-12 7h12" stroke={teal} strokeWidth="2" />
          <circle cx="158" cy="104" r="6" fill={amber} />
          <path d="m155 104 2 2 4-4" stroke={sand} strokeWidth="2" />
        </>
      )}
    </svg>
  )
}
