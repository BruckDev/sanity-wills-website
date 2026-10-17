import {ButtonLink} from '@/components/site/ButtonLink'
import {WillsWordmark} from '@/components/site/WillsWordmark'
import {type HomeIntroductionContent} from '@/sanity/lib/homeIntroduction'
import Image from 'next/image'
import Link from 'next/link'

function LifeStageArt({index}: {index: number}) {
  return (
    <svg viewBox="0 0 220 128" fill="none" aria-hidden="true" className="h-28 w-full">
      <ellipse cx="110" cy="115" rx="89" ry="8" fill="#e8f0ec" />
      <g stroke="#698d80" strokeWidth="3" strokeLinecap="round">
        <path d="M32 113Q38 85 25 65M39 113Q48 86 60 76M182 113Q176 85 190 64M175 112Q163 88 159 79" />
      </g>
      <g fill="#99b9a9">
        <ellipse cx="26" cy="75" rx="7" ry="15" transform="rotate(-24 26 75)" />
        <ellipse cx="49" cy="90" rx="7" ry="14" transform="rotate(35 49 90)" />
        <ellipse cx="187" cy="77" rx="7" ry="16" transform="rotate(25 187 77)" />
        <ellipse cx="168" cy="96" rx="7" ry="13" transform="rotate(-35 168 96)" />
      </g>
      {index === 0 ? (
        <>
          <path d="M57 113V78Q57 60 83 60Q106 60 109 86L113 113" fill="#83a9a5" />
          <path d="M109 113L116 78Q120 63 143 65Q165 69 164 89V113" fill="#dcb880" />
          <ellipse cx="82" cy="42" rx="15" ry="20" fill="#e7bd9e" />
          <path d="M66 44V29Q76 13 92 28L98 41Q81 40 74 29L72 48" fill="#51493e" />
          <ellipse cx="140" cy="48" rx="14" ry="18" fill="#edc8a9" />
          <path
            d="M124 50Q115 26 135 26Q158 25 159 63L150 69L148 42Q133 43 129 35"
            fill="#55453a"
          />
          <path d="M79 86Q107 65 133 88L145 106Q106 124 76 101Z" fill="#f5eee2" />
          <circle cx="110" cy="84" r="11" fill="#edc8a9" />
          <path
            d="M66 86Q78 106 104 104M151 86Q146 104 119 106"
            stroke="#e7bd9e"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </>
      ) : index === 1 ? (
        <>
          <path d="M57 63L110 19L166 63" fill="#2f6070" />
          <path d="M67 59L110 25L155 60V114H67Z" fill="#f1e7d3" />
          <path d="M110 25L155 60V114H110Z" fill="#e4d5bb" />
          <path d="M70 64L110 31L151 64" stroke="#faf7ed" strokeWidth="5" />
          <path d="M98 84H120V114H98Z" fill="#618986" />
          <path d="M79 65H92V80H79ZM128 65H141V80H128Z" fill="#98bcc2" />
          <path d="M133 22V41L146 51V22Z" fill="#d3c1a4" />
          <path d="M91 117H130" stroke="#c1b7a5" strokeWidth="5" />
        </>
      ) : index === 2 ? (
        <>
          <circle cx="158" cy="27" r="12" fill="#edbc76" />
          <path d="M46 90Q82 48 118 80Q151 44 178 83V113H46" fill="#c6d8cb" />
          <path d="M68 105V73Q70 58 88 59Q106 60 106 77V105" fill="#6d9397" />
          <path d="M108 105V76Q111 61 128 62Q147 65 147 80V105" fill="#a2b6a5" />
          <circle cx="87" cy="48" r="14" fill="#e0bea2" />
          <path d="M73 48Q69 28 86 29Q103 29 102 47L93 42L78 43" fill="#b5b9b3" />
          <circle cx="126" cy="52" r="13" fill="#e5c3a8" />
          <path d="M114 52Q105 32 124 32Q143 32 141 58L133 52L128 40" fill="#d9d8cf" />
          <path d="M59 85H159M59 97H159" stroke="#a6825d" strokeWidth="9" />
          <path d="M66 82V119M153 82V119" stroke="#4b625d" strokeWidth="5" />
        </>
      ) : (
        <g stroke="#65877b" strokeWidth="3" strokeLinecap="round">
          <path d="M110 115Q104 70 119 18M94 113Q77 76 75 41M124 114Q151 84 152 45M106 113Q117 81 102 62" />
          <g fill="#8eafa0" stroke="none">
            <ellipse cx="117" cy="34" rx="7" ry="17" transform="rotate(16 117 34)" />
            <ellipse cx="103" cy="51" rx="7" ry="16" transform="rotate(-42 103 51)" />
            <ellipse cx="124" cy="65" rx="7" ry="17" transform="rotate(40 124 65)" />
            <ellipse cx="98" cy="84" rx="7" ry="16" transform="rotate(-42 98 84)" />
            <ellipse cx="75" cy="54" rx="6" ry="16" transform="rotate(-10 75 54)" />
            <ellipse cx="87" cy="75" rx="6" ry="15" transform="rotate(40 87 75)" />
            <ellipse cx="145" cy="66" rx="6" ry="15" transform="rotate(-28 145 66)" />
            <ellipse cx="153" cy="88" rx="6" ry="16" transform="rotate(43 153 88)" />
          </g>
        </g>
      )}
    </svg>
  )
}

export function HomeIntroduction({content}: {content: HomeIntroductionContent}) {
  return (
    <div className="relative left-1/2 -mt-8 w-screen -translate-x-1/2 bg-white md:-mt-12 lg:-mt-14">
      <section className="relative isolate overflow-hidden bg-[#07324d] pb-16 text-white md:pb-0">
        <div className="relative z-10 mx-auto flex max-w-[88rem] items-center px-6 pb-5 pt-10 md:min-h-[36rem] md:px-10 md:pb-32 md:pt-16 lg:px-12">
          <div className="py-4 md:max-w-[52%] lg:max-w-[48%] lg:py-10">
            <h1 className="whitespace-pre-line font-serif text-[clamp(2.75rem,4.6vw,4.65rem)] leading-[1.04] tracking-[-0.045em]">
              {content.title
                .split(/(Wills\.com)/i)
                .map((part, index) =>
                  part.toLowerCase() === 'wills.com' ? (
                    <WillsWordmark key={index} headline />
                  ) : (
                    part
                  ),
                )}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 lg:text-xl">
              {content.description}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={content.ctaHref}
                label={content.ctaLabel}
                style="teal"
                className="min-h-12 rounded-full !px-3 sm:!px-6"
              />
              <ButtonLink
                href={content.attorneyCtaHref}
                label={content.attorneyCtaLabel}
                style="secondary"
                className="min-h-12 rounded-full !px-3 sm:!px-6"
              />
            </div>
          </div>
        </div>
        <div className="home-hero-photo relative -mt-4 aspect-[1.62] w-full md:absolute md:inset-y-0 md:right-0 md:mt-0 md:aspect-auto lg:w-[78%]">
          <Image
            src="/images/estate-planning/hero-protect-what-matters.png"
            alt={content.photoAlt}
            fill
            priority
            sizes="(min-width: 1024px) 78vw, 100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="home-hero-wash pointer-events-none absolute inset-0 hidden md:block"
        />
      </section>
      <nav
        aria-label={content.beginningEyebrow}
        className="relative z-10 mx-4 -mt-20 grid max-w-[74rem] grid-cols-2 overflow-hidden rounded-2xl bg-white p-3 shadow-[0_14px_45px_rgba(7,31,51,0.09)] md:mx-10 md:grid-cols-4 md:p-5 xl:mx-auto"
      >
        {content.lifeStages.map((stage, index) => (
          <Link
            key={stage.href}
            href={stage.href}
            className={`group rounded-lg px-2 py-4 text-center text-[#082d4c] transition hover:bg-[#eff7f3] focus-visible:outline-2 focus-visible:outline-[#008a80] ${index % 2 ? 'border-l border-[#e4e9e6]' : ''} ${index === 2 ? 'md:border-l' : ''}`}
          >
            <LifeStageArt index={index} />
            <span className="mx-auto mt-2 block max-w-56 font-serif text-lg leading-6 md:text-xl">
              {stage.label}
            </span>
          </Link>
        ))}
      </nav>
      <section className="mx-auto max-w-[88rem] px-6 pb-12 pt-10 md:px-10 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#082d4c]">
          {content.beginningEyebrow}
        </p>
        <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-[#082d4c] md:text-5xl">
          {content.beginningTitle}
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr_0.8fr]">
          {[
            {
              title: content.basicsTitle,
              description: content.basicsDescription,
              href: content.basicsHref,
              symbol: 'book',
            },
            {
              title: content.attorneyTitle,
              description: content.attorneyDescription,
              href: content.attorneyHref,
              symbol: 'pin',
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex items-center gap-5 rounded-2xl border border-[#e3e8e7] p-5 text-[#082d4c] transition hover:border-[#7bb9ad] hover:bg-[#f8fbfa]"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#edf5f2] text-[#577e7d]">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="h-12 w-12"
                >
                  {card.symbol === 'book' ? (
                    <>
                      <path
                        d="M24 12Q12 5 4 11V37Q14 33 24 40Q34 33 44 37V11Q34 5 24 12V40"
                        fill="#f5e8d4"
                      />
                      <path d="M9 16L19 18M9 22L19 24M29 18L39 16M29 24L39 22" />
                    </>
                  ) : (
                    <>
                      <path
                        d="M24 32S11 21 11 13a13 13 0 0 1 26 0c0 8-13 19-13 19Z"
                        fill="#729b9c"
                        stroke="none"
                      />
                      <circle cx="24" cy="13" r="4" fill="white" stroke="none" />
                      <path d="M10 29L3 44L18 40L32 44L45 37L38 26M18 32L18 40M32 32L32 44" />
                    </>
                  )}
                </svg>
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl leading-7">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#547080]">{card.description}</p>
              </div>
              <span aria-hidden="true" className="text-xl">
                →
              </span>
            </Link>
          ))}
          <Link
            href={content.insightHref}
            className="flex items-center gap-5 rounded-2xl bg-[#eaf4f1] p-6 text-[#082d4c] transition hover:bg-[#deeee8]"
          >
            <div>
              <p className="text-xs font-semibold">{content.insightEyebrow}</p>
              <h3 className="mt-3 font-serif text-2xl leading-8">{content.insightTitle}</h3>
            </div>
            <span aria-hidden="true" className="ml-auto text-xl">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
