import {ArticleCardGrid} from '@/components/site/ArticleCardGrid'
import {AttorneyZipSearch} from '@/components/site/AttorneyZipSearch'
import {ButtonLink} from '@/components/site/ButtonLink'
import {HomeIntroduction} from '@/components/site/HomeIntroduction'
import {PlanChooser} from '@/components/site/PlanChooser'
import {
  homeArticleCards,
  resolveHomeArticleCards,
  type HomeArticleCard,
} from '@/sanity/lib/homeArticleCards'
import {homeIntroduction, type HomeIntroductionContent} from '@/sanity/lib/homeIntroduction'
import {getDynamicFetchOptions, sanityFetch, type DynamicFetchOptions} from '@/sanity/lib/live'
import {homeAppearanceQuery} from '@/sanity/lib/siteQueries'
import {draftMode} from 'next/headers'
import Image from 'next/image'
import {Suspense} from 'react'

type HeroBenefitIcon = 'children' | 'home' | 'guidance' | 'wishes'

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
      introduction={{
        ...homeIntroduction,
        ...Object.fromEntries(
          Object.entries(data?.introduction || {}).filter(([, value]) => value != null),
        ),
        lifeStages: data?.introduction?.lifeStages?.length
          ? data.introduction.lifeStages
              .filter((stage) => stage.label && stage.href)
              .map((stage) => ({label: stage.label!, href: stage.href!}))
          : homeIntroduction.lifeStages,
        planningTopics: homeIntroduction.planningTopics.map((topic, index) => ({
          label: data?.introduction?.planningTopics?.[index]?.label || topic.label,
          href: data?.introduction?.planningTopics?.[index]?.href || topic.href,
          imagePath: data?.introduction?.planningTopics?.[index]?.imagePath || topic.imagePath,
        })),
      }}
      background={data?.attorneySearchBackground}
      planHeading={data?.planChooserHeading}
      articleCards={resolveHomeArticleCards(data?.articleCards)}
    />
  )
}

function HomeContent({
  introduction = homeIntroduction,
  background,
  planHeading,
  articleCards,
}: {
  introduction?: HomeIntroductionContent
  background?: string | null
  articleCards?: HomeArticleCard[] | null
  planHeading?: string | null
}) {
  return (
    <div>
      <HomeIntroduction content={introduction} />

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
        <div className="mt-8">
          <ArticleCardGrid cards={articleCards?.length ? articleCards : homeArticleCards} />
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
