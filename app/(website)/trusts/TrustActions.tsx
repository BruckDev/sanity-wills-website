'use client'

import {useState} from 'react'

const scenes = [
  // Grantor, trustee, and beneficiary connected by the trust.
  <>
    <path d="M96 110h33m-8-8 8 8-8 8m70-8h33m-8-8 8 8-8 8" />
    <circle cx="68" cy="110" r="27" fill="#f8d9bb" />
    <circle cx="160" cy="110" r="27" fill="#b4e2ce" />
    <circle cx="252" cy="110" r="27" fill="#f6e6a8" />
    <path d="M68 105a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-10 15a10 10 0 0 1 20 0m77-22h10v24h-10zm3 6h4m-4 6h4m90 9-9-9a5 5 0 0 1 9-5 5 5 0 0 1 9 5Z" />
  </>,
  // A pencil revises a living trust document.
  <>
    <rect x="107" y="58" width="91" height="112" rx="13" fill="#fff9e8" />
    <path d="M125 82h47m-47 18h54m-54 18h33m-33 18h23" stroke="#75a895" />
    <path d="m157 140 8-22 49-49a8 8 0 0 1 12 12l-49 49Z" fill="#f8d9bb" />
    <path d="m204 79 12 12m-51 27 12 12" />
    <path d="M221 149a24 24 0 0 1-24 24m0 0 7-7m-7 7 9 2" stroke="#22765c" />
  </>,
  // A trustee weighs decisions and safeguards assets.
  <>
    <circle cx="126" cy="91" r="20" fill="#f8d9bb" />
    <path d="M85 154v-9a41 41 0 0 1 82 0v9Z" fill="#b4e2ce" />
    <path
      d="M209 77c11 7 21 10 34 11v27c0 23-16 39-34 48-18-9-34-25-34-48V88c13-1 23-4 34-11Z"
      fill="#fff9e8"
    />
    <path d="m194 119 10 10 20-22" stroke="#22765c" strokeWidth="4" />
  </>,
  // One fund branches into different distributions.
  <>
    <circle cx="160" cy="74" r="23" fill="#f6e6a8" />
    <path d="M151 74h18m-9-9v18m0 14v21m-71 16v-16h142v16m-71-16v16" />
    <rect x="65" y="134" width="48" height="38" rx="8" fill="#b4e2ce" />
    <rect x="136" y="134" width="48" height="38" rx="8" fill="#f8d9bb" />
    <rect x="207" y="134" width="48" height="38" rx="8" fill="#f6e6a8" />
    <path d="m78 151 11-5 11 5-11 5Zm82 11-9-9a5 5 0 0 1 9-5 5 5 0 0 1 9 5Zm64-7h14m-7-7v14" />
  </>,
  // Property and account records come together in a trust folder.
  <>
    <rect x="84" y="68" width="58" height="48" rx="9" fill="#f8d9bb" />
    <rect x="178" y="68" width="58" height="48" rx="9" fill="#f6e6a8" />
    <path d="m101 93 12-10 12 10m-21-2v11h18V91m70-3h30m-30 9h20m-74 15 13 15m31-15-13 15" />
    <path d="M113 133h29l8 7h57v36h-94Z" fill="#b4e2ce" />
    <path d="m152 156 6 6 11-12" stroke="#22765c" strokeWidth="4" />
  </>,
  // Different needs call for different arrangements.
  <>
    <rect
      x="66"
      y="97"
      width="47"
      height="47"
      rx="12"
      fill="#f8d9bb"
      transform="rotate(-10 90 120)"
    />
    <circle cx="160" cy="120" r="27" fill="#b4e2ce" />
    <path d="m229 91 29 46a6 6 0 0 1-5 9h-48a6 6 0 0 1-5-9Z" fill="#f6e6a8" />
    <path d="M77 166h26m45 0h24m45 0h24m-70-80v-8m-22 8-4-7m50 11 6-7" stroke="#498772" />
  </>,
]

function TrustScene({index}: {index: number}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 220" className="mx-auto block w-full max-w-sm">
      <ellipse cx="160" cy="112" rx="129" ry="85" fill="#e0f1e8" />
      <path
        d="M45 64h12m-6-6v12m212 85h12m-6-6v12"
        stroke="#74ae99"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="258" cy="69" r="4" fill="#e4ad84" />
      <circle cx="64" cy="159" r="4" fill="#e4ad84" />
      <g
        key={index}
        className="motion-safe:animate-rise"
        fill="none"
        stroke="#123b48"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {scenes[index]}
      </g>
    </svg>
  )
}

export function TrustActions({sections}: {sections: {title: string; text: string}[]}) {
  const [active, setActive] = useState(0)

  return (
    <section className="grid items-start gap-5 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.6fr)]">
      <div className="hidden rounded-3xl border border-[#cddfd6] bg-[#f0f7f3] px-5 pb-5 text-center lg:sticky lg:top-28 lg:block">
        <TrustScene index={active} />
        <p aria-live="polite" className="font-serif text-2xl text-[color:var(--fg)]">
          {sections[active].title}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(({title, text}, index) => (
          <article
            key={title}
            className={`rounded-2xl border p-5 md:p-6 ${
              active === index
                ? 'border-[#589a84] bg-[#f0f7f3]'
                : 'border-[color:var(--border)] bg-white'
            }`}
          >
            <h2>
              <button
                type="button"
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                className="group flex w-full cursor-pointer items-start justify-between gap-3 rounded text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22765c]"
              >
                <span>
                  <span className="block text-xs font-bold tracking-[0.18em] text-[#22765c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-2 block font-serif text-2xl leading-tight text-[color:var(--fg)] group-hover:underline">
                    {title}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-7 w-7 shrink-0 rounded-full bg-[#e0f1e8] p-1.5 text-[#22765c]"
                >
                  <path
                    d={active === index ? 'm5 10 3 3 7-7' : 'm7 5 5 5-5 5'}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h2>
            <p className="mt-3 leading-7 text-[color:var(--muted)]">{text}</p>
            {active === index && (
              <div className="mt-3 lg:hidden">
                <TrustScene index={index} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
