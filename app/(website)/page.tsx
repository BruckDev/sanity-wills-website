import {AttorneyZipSearch} from '@/components/site/AttorneyZipSearch'
import {ButtonLink} from '@/components/site/ButtonLink'
import {PlanChooser} from '@/components/site/PlanChooser'
import {homeArticleCards, type HomeArticleCard} from '@/sanity/lib/homeArticleCards'
import {getDynamicFetchOptions, sanityFetch, type DynamicFetchOptions} from '@/sanity/lib/live'
import {homeAppearanceQuery} from '@/sanity/lib/siteQueries'
import {draftMode} from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import {Suspense} from 'react'

type HeroBenefitIcon = 'children' | 'home' | 'guidance' | 'wishes'

const heroPaths: Array<{
  icon: HeroBenefitIcon
  label: string
  detail: string
  href: string
}> = [
  {
    icon: 'children',
    label: 'Protect your children',
    detail: 'Help ensure the people you love are cared for.',
    href: '/life-events/new-parents',
  },
  {
    icon: 'home',
    label: 'Protect your home',
    detail: 'Safeguard what you have worked so hard for.',
    href: '/trusts',
  },
  {
    icon: 'guidance',
    label: 'Reduce family conflict',
    detail: 'Provide clarity today for a more peaceful tomorrow.',
    href: '/estate-planning',
  },
  {
    icon: 'wishes',
    label: 'Make your wishes known',
    detail: 'Ensure your values and wishes are honored.',
    href: '/#attorney-search',
  },
]

function HeroBenefitIcon({
  icon,
  className = 'h-7 w-7',
}: {
  icon: HeroBenefitIcon
  className?: string
}) {
  if (icon === 'children') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <circle cx="8" cy="8" r="2.5" strokeWidth="1.6" />
        <circle cx="16" cy="8" r="2.5" strokeWidth="1.6" />
        <path
          d="M3.5 19c.4-3 2.2-4.8 4.5-4.8S12.2 16 12.5 19M11.5 19c.4-3 2.2-4.8 4.5-4.8s4.2 1.8 4.5 4.8"
          strokeWidth="1.6"
        />
      </svg>
    )
  }

  if (icon === 'home') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" strokeWidth="1.6" />
        <path d="M9 21v-6h6v6" strokeWidth="1.6" />
      </svg>
    )
  }

  if (icon === 'guidance') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path
          d="M4 11.5 8.3 16l3.2-3.2-4.3-4.5L4 11.5Zm8.5 1.3 3.2 3.2 4.3-4.5-3.2-3.2-4.3 4.5Z"
          strokeWidth="1.6"
        />
        <path d="M9.8 14.5 12 16.7l2.2-2.2M9.8 9.5 12 7.3l2.2 2.2" strokeWidth="1.6" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path d="M6 3h9l3 3v15H6V3Z" strokeWidth="1.6" />
      <path d="M15 3v4h4M9 12h6M9 16h6" strokeWidth="1.6" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-14 w-14"
    >
      <path d="M12 21s7-6.2 7-12A7 7 0 1 0 5 9c0 5.8 7 12 7 12Z" strokeWidth="1.7" />
      <circle cx="12" cy="9" r="2.4" strokeWidth="1.7" />
    </svg>
  )
}

export default async function HomePage() {
  const {isEnabled} = await draftMode()
  return isEnabled ? (
    <Suspense fallback={<HomeContent />}>
      <DynamicHome />
    </Suspense>
  ) : (
    <CachedHome perspective="published" stega={false} />
  )
}

async function DynamicHome() {
  return <CachedHome {...await getDynamicFetchOptions()} />
}

async function CachedHome(fetchOptions: DynamicFetchOptions) {
  'use cache'
  const {data} = await sanityFetch({query: homeAppearanceQuery, ...fetchOptions})
  return (
    <HomeContent
      eyebrow={data?.planningEyebrow}
      background={data?.attorneySearchBackground}
      planHeading={data?.planChooserHeading}
      articleCards={data?.articleCards
        ?.filter((card) => card.title && card.href)
        .map((card) => ({
          title: card.title!,
          href: card.href!,
          description: card.description || '',
          image: card.image || homeArticleCards[0].image,
          alt: card.alt || '',
        }))}
    />
  )
}

function HomeContent({
  eyebrow,
  background,
  planHeading,
  articleCards,
}: {
  eyebrow?: string | null
  background?: string | null
  articleCards?: HomeArticleCard[] | null
  planHeading?: string | null
}) {
  return (
    <div>
      <div className="-mt-8 space-y-0 md:-mt-12 lg:-mt-14">
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#e5ece7] bg-[radial-gradient(circle_at_84%_22%,#e2f4ec_0,transparent_26rem),linear-gradient(110deg,#fffcf7_0%,#f8f4ec_54%,#f0faf6_100%)]">
          <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-6 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-0 md:px-12 md:py-6 lg:py-0 xl:px-16">
            <div className="max-w-xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#597385]">
                {eyebrow || 'estate planning made simple'}
              </div>
              <h1 className="mt-3 font-serif text-[clamp(2.9rem,5.5vw,4.55rem)] leading-[1.03] tracking-[-0.045em] text-[#082d4c]">
                Protect What Matters Most
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#3b596b] md:text-lg">
                Create a will, protect your family, and make your wishes clear—with guidance that
                meets you where you are.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink
                  href="/create-a-will"
                  label="Start my will  →"
                  style="teal"
                  className="rounded-full px-7"
                />
                <Link
                  href="/find-an-attorney"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#07304d] underline decoration-[#10a88a] decoration-2 underline-offset-4 hover:text-[#0c8b78]"
                >
                  Find an attorney <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[48rem] md:w-[calc(100%+3rem)] md:translate-x-10 md:-translate-y-2">
              <div className="absolute -left-5 bottom-2 h-40 w-40 rounded-full bg-[#dff2e9] blur-2xl" />
              <div className="relative aspect-[1.62] overflow-hidden rounded-[42%_4%_37%_4%] shadow-[0_10px_30px_rgba(22,56,72,0.06)]">
                <Image
                  src="/images/estate-planning/hero-protect-what-matters.png"
                  alt="A multigenerational family spending time together at home"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-64 sm:block">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 256 160"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path d="M0 160C38 132 43 65 98 39C145 17 206 28 256 0V160Z" fill="#eaf6f0" />
                </svg>
                <div className="absolute bottom-6 right-10 w-44 -rotate-6 text-center font-cursive text-base font-semibold leading-7 text-[#0c4462]">
                  A brighter
                  <br />
                  tomorrow, together
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 12"
                    className="ml-auto mr-3 mt-1 h-3 w-28"
                    fill="none"
                  >
                    <path
                      d="M3 10Q56 1 117 4"
                      stroke="#80cec1"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 border-b border-[#dbe9e3] bg-[#eff9f5]">
          <div className="mx-auto grid w-full max-w-[88rem] sm:grid-cols-2 md:grid-cols-4">
            {heroPaths.map((path, index) => (
              <Link
                key={path.href}
                href={path.href}
                data-guide-attorney-zip={path.href === '/#attorney-search' || undefined}
                className={`group px-5 py-5 text-center transition hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[color:var(--teal)] ${
                  index === 1
                    ? 'border-t border-[#dbe9e3] sm:border-l sm:border-t-0'
                    : index === 2
                      ? 'border-t border-[#dbe9e3]'
                      : index === 3
                        ? 'border-t border-[#dbe9e3] sm:border-l sm:border-t-0'
                        : ''
                } ${index > 0 ? 'md:border-l md:border-t-0' : ''}`}
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center text-[#083f63]">
                  <HeroBenefitIcon icon={path.icon} className="h-8 w-8" />
                </span>
                <span className="mt-2 block font-serif text-xl text-[#062842]">{path.label}</span>
                <span className="mt-2 block text-base leading-6 text-[#547080]">{path.detail}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <PlanChooser heading={planHeading} />

      <section
        id="attorney-search"
        className="relative left-1/2 isolate w-screen -translate-x-1/2 scroll-mt-28 overflow-hidden bg-[#082e4b] px-6 py-10 text-white md:px-10 md:py-7"
      >
        <Image
          src={background || '/images/estate-planning/attorney-search-hillside.png'}
          alt=""
          fill
          className="-z-20 object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[#082e4b]/75" />
        <div className="mx-auto grid max-w-[52rem] gap-7 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-6">
          <div className="flex gap-5">
            <span className="hidden shrink-0 text-[#b8d9d1] sm:block">
              <LocationIcon />
            </span>
            <div>
              <h2 className="font-serif text-2xl leading-tight tracking-[-0.03em] md:text-[1.7rem]">
                Find Estate-Planning Guidance Near You
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                Estate planning laws vary by state. Find experienced estate-planning attorneys in
                your area and explore their profiles to get the support you need.
              </p>
            </div>
          </div>
          <div className="p-0 sm:p-0">
            <AttorneyZipSearch compact />
            <p className="mt-3 text-xs leading-5 text-white/65">
              Connect with qualified estate-planning professionals in your area.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[72rem] py-12 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-[#062842]">
              Learn From Estate-Planning Professionals
            </h2>
            <p className="mt-2 text-lg text-[#547080]">
              Helpful articles and insights on the topics that matter most.
            </p>
          </div>
          <ButtonLink
            href="/insights"
            label="Explore articles  →"
            style="secondary"
            className="rounded-full"
          />
        </div>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {(articleCards?.length ? articleCards : homeArticleCards).map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-xl border border-[#e0e9ed] bg-white shadow-[0_6px_18px_rgba(8,35,58,0.04)]"
            >
              <div className="relative aspect-[1.55] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 365px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl leading-7 tracking-[-0.03em] text-[#062842]">
                  {article.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#547080]">{article.description}</p>
                <Link
                  href={article.href}
                  className="mt-auto inline-flex pt-5 text-base font-semibold text-[color:var(--teal)] underline underline-offset-4 hover:text-[#063e5b]"
                >
                  Read more <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-6 grid w-full max-w-[52rem] gap-5 rounded-md border border-[#d9eee5] bg-[#ecfaf4] px-6 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:px-9">
        <span className="flex h-14 w-14 items-center justify-center border-r border-[#91cfc0] pr-4 text-[#0b987e] md:w-20">
          <HeroBenefitIcon icon="children" />
        </span>
        <div>
          <h2 className="font-serif text-3xl tracking-[-0.035em] text-[#062842]">
            Are You an Estate-Planning Professional?
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#547080]">
            Share your knowledge and help others make informed decisions. Contribute an article to
            be featured on Wills.com, a resource for attorney-reviewed guidance.
          </p>
        </div>
        <ButtonLink
          href="/contact"
          label="Contribute an article  →"
          style="secondary"
          className="rounded-full"
        />
      </section>
    </div>
  )
}
