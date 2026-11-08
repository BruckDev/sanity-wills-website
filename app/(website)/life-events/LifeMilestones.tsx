'use client'

import {useState} from 'react'
import styles from './LifeMilestones.module.css'

export function LifeMilestones() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#12364a] lg:justify-self-end">
      <svg
        aria-hidden="true"
        viewBox="0 0 360 224"
        className={`block h-auto w-full ${paused ? styles.paused : ''}`}
      >
        <circle cx="180" cy="110" r="82" fill="#1b4755" />
        <circle cx="180" cy="110" r="69" fill="#d8f1e7" />
        <path
          d="M76 158c25 15 63 24 104 24s79-9 104-24"
          fill="none"
          stroke="#6ccab1"
          strokeDasharray="2 8"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M76 61v18m-9-9h18m191 62v18m-9-9h18"
          stroke="#f9d691"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M270 48v12m-6-6h12m-177 77v12m-6-6h12"
          stroke="#a7e6d4"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <circle cx="58" cy="120" r="3" fill="#a7e6d4" />
        <circle cx="304" cy="91" r="3" fill="#f9d691" />
        <ellipse cx="180" cy="159" rx="51" ry="7" fill="#a9d9cb" />

        <g stroke="#09283c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5">
          {/* New baby */}
          <g className={styles.scene}>
            <path d="M135 105h50V66a48 48 0 0 0-50 39Z" fill="#f6bdad" />
            <path d="M135 105h85v7c0 15-12 27-27 27h-31c-15 0-27-12-27-27Z" fill="#fff4d8" />
            <path d="M218 105l8-15h12m-72 49-8 12m34-12 8 12" fill="none" />
            <circle cx="157" cy="151" r="9" fill="#69c7ae" />
            <circle cx="201" cy="151" r="9" fill="#69c7ae" />
            <path
              d="M171 118c3 4 7 4 10 0 3-4 9-2 9 2 0 4-6 8-9 10-3-2-9-6-9-10"
              fill="#f6bdad"
              stroke="none"
            />
          </g>

          {/* Wedding */}
          <g className={styles.scene}>
            <path
              d="M180 93c-11-7-20-13-20-23 0-12 14-16 20-6 6-10 20-6 20 6 0 10-9 16-20 23Z"
              fill="#f6bdad"
            />
            <circle cx="164" cy="128" r="24" fill="none" strokeWidth="11" />
            <circle cx="164" cy="128" r="24" fill="none" stroke="#f9d691" strokeWidth="5" />
            <circle cx="195" cy="128" r="24" fill="none" strokeWidth="11" />
            <circle cx="195" cy="128" r="24" fill="none" stroke="#fff4d8" strokeWidth="5" />
            <path d="M141 94l-6-6m85 6 6-6" stroke="#31937f" />
          </g>

          {/* New home */}
          <g className={styles.scene}>
            <path d="M144 101v51h72v-51l-36-29Z" fill="#fff4d8" />
            <path d="M209 82V70h-11v8m-63 30 45-39 45 39" fill="none" />
            <path d="M169 152v-24a11 11 0 0 1 22 0v24Z" fill="#f6bdad" />
            <path d="M151 111h12v12h-12zm46 0h12v12h-12z" fill="#69c7ae" strokeWidth="2.5" />
            <path d="M133 152h94" fill="none" />
            <circle cx="184" cy="138" r="1.5" fill="#09283c" stroke="none" />
          </g>

          {/* New business */}
          <g className={styles.scene}>
            <path d="M144 105h72v47h-72z" fill="#fff4d8" />
            <path
              d="M138 102l10-22h64l10 22c0 9-12 11-16 4-4 7-13 7-17 0-4 7-13 7-17 0-4 7-13 7-17 0-4 7-17 5-17-4Z"
              fill="#f6bdad"
            />
            <path
              d="M155 106l5-26m12 26 2-26m15 26-2-26m19 26-5-26"
              fill="none"
              strokeWidth="2.5"
            />
            <path d="M153 120h25v17h-25zm34 0h19v32h-19z" fill="#69c7ae" />
            <path d="M138 152h84m-57-82h30" fill="none" />
          </g>
        </g>
      </svg>
      <button
        type="button"
        aria-label={paused ? 'Play life event animation' : 'Pause life event animation'}
        onClick={() => setPaused(!paused)}
        className="absolute bottom-2.5 right-2.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-[#071f33] text-[#d8f1e7] hover:bg-[#1b4755] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          {paused ? (
            <path d="M6 3.5 16 10 6 16.5Z" />
          ) : (
            <path d="M5 4h3.5v12H5zm6.5 0H15v12h-3.5z" />
          )}
        </svg>
      </button>
    </div>
  )
}
