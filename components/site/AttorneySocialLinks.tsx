import {type AttorneyProgramContent} from '@/sanity/lib/attorneyProgramContent'
import {stegaClean} from 'next-sanity'

function SocialIcon({platform}: {platform: string}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      {platform === 'linkedin' ? (
        <>
          <rect x="3" y="8" width="4" height="13" rx="0.5" />
          <circle cx="5" cy="4" r="2" />
          <path d="M10 8h4v1.8c1-1.5 2.4-2.1 4-2.1 3.1 0 4 2 4 5.3v8h-4v-7.2c0-1.8-.4-2.8-1.9-2.8-1.6 0-2.1 1.2-2.1 2.8V21h-4Z" />
        </>
      ) : platform === 'facebook' ? (
        <path d="M14 22v-9h3l.5-4H14V6.5c0-1.2.4-2 2-2h2V1.2C17.3 1.1 16.3 1 15 1c-3.2 0-5 2-5 5v3H7v4h3v9Z" />
      ) : platform === 'x' ? (
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.5 5.4 22H2.2l8.3-9.5L2.8 2h6.4l4.4 6.8L18.9 2Zm-1.1 18h1.7L8.3 4H6.5Z" />
      ) : platform === 'instagram' ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </g>
      ) : (
        <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18M5 6.5h14M5 17.5h14" />
        </g>
      )}
    </svg>
  )
}

export function AttorneySocialLinks({content}: {content: AttorneyProgramContent['sampleSocials']}) {
  return (
    <ul className="ml-0 mt-4 flex list-none flex-wrap gap-3 p-0">
      {content.links.map((link, index) => {
        let href: string | undefined
        try {
          const url = new URL(stegaClean(link.profileUrl))
          if (url.protocol === 'https:') href = url.href
        } catch {
          // Sample profiles can display an icon before an editor adds its destination.
        }
        const icon = <SocialIcon platform={stegaClean(link.platform)} />
        const className =
          'flex h-11 w-11 items-center justify-center rounded-full border border-[#a6c9c2] text-[#082d4c]'
        return (
          <li key={index}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className={`${className} transition hover:border-[#008e94] hover:bg-[#e8f8f8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008e94]`}
              >
                {icon}
              </a>
            ) : (
              <span
                role="img"
                aria-label={`${link.label}: ${content.unavailableLabel}`}
                title={`${link.label}: ${content.unavailableLabel}`}
                className={className}
              >
                {icon}
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
