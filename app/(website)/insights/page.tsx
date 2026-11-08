import {ArticleTopicBrowser} from '@/components/site/ArticleTopicBrowser'
import {ButtonLink} from '@/components/site/ButtonLink'
import {
  articleDirectoryContent,
  type ArticleDirectoryContent,
} from '@/sanity/lib/articleDirectoryContent'
import {
  homeArticleCards,
  resolveHomeArticleCards,
  type HomeArticleCard,
} from '@/sanity/lib/homeArticleCards'
import {getDynamicFetchOptions, sanityFetch, type DynamicFetchOptions} from '@/sanity/lib/live'
import {homeAppearanceQuery, insightsLandingQuery} from '@/sanity/lib/siteQueries'
import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import {Suspense} from 'react'

export const metadata: Metadata = {
  title: 'Estate-planning articles',
  description: 'Educational articles about wills, trusts, and estate-planning decisions.',
}

export default async function InsightsPage() {
  const {isEnabled} = await draftMode()
  return isEnabled ? (
    <Suspense
      fallback={<InsightsContent cards={homeArticleCards} content={articleDirectoryContent} />}
    >
      <DynamicInsights />
    </Suspense>
  ) : (
    <CachedInsights perspective="published" stega={false} />
  )
}

async function DynamicInsights() {
  return <CachedInsights {...await getDynamicFetchOptions()} />
}

async function CachedInsights(options: DynamicFetchOptions) {
  'use cache'
  const [{data}, {data: landing}] = await Promise.all([
    sanityFetch({query: homeAppearanceQuery, ...options}),
    sanityFetch({query: insightsLandingQuery, ...options}),
  ])
  const content = {
    ...articleDirectoryContent,
    ...Object.fromEntries(
      Object.entries(landing?.directory || {}).filter(([, value]) => value != null),
    ),
  }
  return <InsightsContent cards={resolveHomeArticleCards(data?.articleCards)} content={content} />
}

function InsightsContent({
  cards,
  content,
}: {
  cards: HomeArticleCard[]
  content: ArticleDirectoryContent
}) {
  const [lead, ...remaining] = cards
  return (
    <div className="relative left-1/2 -mt-8 w-screen -translate-x-1/2 bg-white text-[#082d4c] md:-mt-12 lg:-mt-14">
      <section className="relative isolate pb-12 pt-8 md:pb-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(160deg,#00766b_0%,#064c4d_50%,#082d4c_100%)] md:h-[35rem]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[36rem] opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px] md:h-[35rem]"
        />
        <div className="mx-auto max-w-[76rem] px-5 md:px-10">
          <div className="flex justify-end">
            <Link
              href="/editorial-policy"
              className="text-xs text-white/90 underline underline-offset-4"
            >
              {content.policyLabel}
            </Link>
          </div>
          <header className="mx-auto max-w-4xl pb-9 pt-7 text-center text-white md:pb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c2e7dc]">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              {content.description}
            </p>
          </header>
          {lead && (
            <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
              <article className="overflow-hidden rounded-xl bg-white p-4 shadow-[0_12px_36px_rgba(7,31,51,0.12)] md:p-5">
                <Link
                  href={lead.href}
                  aria-label={lead.title}
                  className="relative block aspect-[1.9] overflow-hidden rounded-md"
                >
                  <Image
                    src={lead.image}
                    alt={lead.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                  />
                </Link>
                <div className="px-1 pb-3 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#007668]">
                    {content.featuredLabel}{' '}
                    <span aria-hidden="true" className="px-1 text-[#8ca69d]">
                      ·
                    </span>{' '}
                    {lead.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] md:text-3xl">
                    <Link href={lead.href} className="hover:underline">
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base leading-7 text-[#547080]">{lead.description}</p>
                  <Link
                    href={lead.href}
                    className="mt-1 inline-block text-sm font-semibold text-[#007668] underline underline-offset-4"
                  >
                    {content.readLabel} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
              <div className="grid gap-5">
                {remaining.slice(0, 3).map((article) => (
                  <article
                    key={article.href}
                    className="grid grid-cols-[6.5rem_1fr] items-center gap-4 rounded-xl bg-white p-4 shadow-[0_10px_30px_rgba(7,31,51,0.1)] sm:grid-cols-[9rem_1fr] md:p-5 lg:grid-cols-[8rem_1fr]"
                  >
                    <Link
                      href={article.href}
                      aria-label={article.title}
                      className="relative block aspect-[1.3] overflow-hidden rounded-md"
                    >
                      <Image
                        src={article.image}
                        alt={article.alt}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </Link>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-[#007668]">
                        {article.category}
                      </p>
                      <h2 className="mt-2 text-base font-bold leading-snug md:text-lg">
                        <Link href={article.href} className="hover:underline">
                          {article.title}
                        </Link>
                      </h2>
                      <Link
                        href={article.href}
                        className="mt-3 inline-block text-xs font-semibold text-[#007668] underline underline-offset-4"
                      >
                        {content.readLabel} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="mx-auto max-w-[76rem] space-y-14 px-5 pb-14 md:px-10 md:pb-20">
        <ArticleTopicBrowser cards={cards} content={content} />
        <aside className="flex flex-col gap-6 border-y border-[#d8e3df] bg-[#f1f8f5] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-9">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight">{content.guidanceTitle}</h2>
            <p className="mt-3 text-base leading-7 text-[#547080]">{content.guidanceCopy}</p>
          </div>
          <ButtonLink
            href="/find-an-attorney"
            label={content.guidanceLabel}
            style="teal"
            className="shrink-0 rounded-full"
          />
        </aside>
        <section className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#007668]">
            {content.contributeEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{content.contributeTitle}</h2>
          <p className="mt-4 text-base leading-7 text-[#547080]">{content.contributeCopy}</p>
          <ButtonLink
            href="/contact"
            label={content.contributeLabel}
            style="text"
            className="mt-3"
          />
        </section>
      </div>
    </div>
  )
}
