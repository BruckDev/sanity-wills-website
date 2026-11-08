import styles from './ChecklistGraphic.module.css'

const lineWidths = [82, 65, 88, 73, 82, 62]

export function ChecklistGraphic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 280"
      className="mx-auto h-auto w-full max-w-[21rem]"
      fill="none"
    >
      <circle cx="170" cy="140" r="122" fill="#dce9dc" />
      <path
        d="M52 164c-15 24 7 52 40 65 58 23 149 10 188-30 22-22 22-43 6-55"
        stroke="#a3c9b3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 7"
      />
      <path
        d="M63 66v20m-10-10h20m197 130v16m-8-8h16m12-151v12m-6-6h12"
        stroke="#478f78"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="70" cy="201" r="4" fill="#e4a985" />
      <circle cx="281" cy="113" r="4" fill="#e4a985" />
      <rect x="105" y="48" width="146" height="202" rx="17" fill="#b9d4c5" />
      <rect
        x="96"
        y="40"
        width="146"
        height="202"
        rx="17"
        fill="#fffdf6"
        stroke="#153c45"
        strokeWidth="2"
      />
      <rect
        x="137"
        y="31"
        width="64"
        height="22"
        rx="9"
        fill="#f4c996"
        stroke="#153c45"
        strokeWidth="2"
      />
      {lineWidths.map((width, index) => (
        <g key={index} transform={`translate(114 ${72 + index * 25})`}>
          <rect width="17" height="17" rx="4" fill="#e5f3e8" stroke="#9bbdaa" strokeWidth="1.5" />
          <path
            d="m4 8 3 3 6-6"
            pathLength="1"
            stroke="#167553"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.check}
            style={{animationDelay: `${450 + index * 430}ms`}}
          />
          <rect x="27" y="6" width={width} height="5" rx="2.5" fill="#9bbdaa" />
        </g>
      ))}
    </svg>
  )
}
