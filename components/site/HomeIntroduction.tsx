import {ButtonLink} from '@/components/site/ButtonLink'
import {LifeStageArt} from '@/components/site/LifeStageArt'
import {WillsWordmark} from '@/components/site/WillsWordmark'
import {type HomeIntroductionContent} from '@/sanity/lib/homeIntroduction'
import Image from 'next/image'
import Link from 'next/link'

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
