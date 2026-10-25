import {attorneyProgramContent} from '@/sanity/lib/attorneyProgramContent'
import {getDynamicFetchOptions, type DynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import {stegaClean} from 'next-sanity'
import {draftMode} from 'next/headers'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {Suspense} from 'react'
import {getSampleArticleContent} from '../../articleContent'
import {
  findSampleAttorneyArticle,
  sampleAttorneyArticles,
  type SampleAttorneyArticle,
} from '../../articleData'

export function generateStaticParams() {
  return sampleAttorneyArticles.map((article) => ({slug: article.slug}))
}

export async function generateMetadata({
  params,
}: PageProps<'/featured-attorneys/freidman-berenstein-anderson/articles/[slug]'>): Promise<Metadata> {
  const {slug} = await params
  const options = await getDynamicFetchOptions()
  const {articles} = await getSampleArticleContent({...options, stega: false})
  const article = findSampleAttorneyArticle(slug, articles)
  return article
    ? {title: `${article.title} | Sample attorney article`, description: article.summary}
    : {}
}

export default async function SampleAttorneyArticlePage({
  params,
}: PageProps<'/featured-attorneys/freidman-berenstein-anderson/articles/[slug]'>) {
  const {slug} = await params
  const {isEnabled} = await draftMode()
  return isEnabled ? (
    <Suspense
      fallback={
        <ArticleBody
          article={findSampleAttorneyArticle(slug)}
          sourcesLabel={attorneyProgramContent.sampleArticles.sourcesLabel}
        />
      }
    >
      <DynamicArticle slug={slug} />
    </Suspense>
  ) : (
    <CachedArticle slug={slug} perspective="published" stega={false} />
  )
}

async function DynamicArticle({slug}: {slug: string}) {
  return <CachedArticle slug={slug} {...await getDynamicFetchOptions()} />
}

async function CachedArticle({slug, ...options}: DynamicFetchOptions & {slug: string}) {
  'use cache'
  const {articles, sourcesLabel} = await getSampleArticleContent(options)
  return (
    <ArticleBody article={findSampleAttorneyArticle(slug, articles)} sourcesLabel={sourcesLabel} />
  )
}

function ArticleBody({
  article,
  sourcesLabel,
}: {
  article?: SampleAttorneyArticle
  sourcesLabel: string
}) {
  if (!article) notFound()

  return (
    <article className="mx-auto max-w-4xl space-y-10 md:space-y-12">
      <Link
        href="/featured-attorneys/freidman-berenstein-anderson/articles"
        className="inline-flex text-sm font-semibold text-[color:var(--accent-strong)] hover:underline"
      >
        ← All sample articles
      </Link>
      <header className="rounded-[2rem] bg-[#071f33] px-7 py-12 text-white md:px-12 md:py-16">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Illustrative attorney-authored format · {article.readingTime}
        </div>
        <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{article.summary}</p>
      </header>
      <div className="space-y-10 rounded-[2rem] border border-[color:var(--border)] bg-white p-7 md:p-10">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
              {section.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">{section.body}</p>
          </section>
        ))}
      </div>
      {article.sources?.length ? (
        <section className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
          <h2 className="font-serif text-2xl text-[color:var(--fg)]">{sourcesLabel}</h2>
          <ul className="mt-4 space-y-2">
            {article.sources.map((source) => (
              <li key={source.href}>
                <a
                  href={stegaClean(source.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[color:var(--accent-strong)] underline underline-offset-4"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <aside className="rounded-2xl border border-[#d6e2e8] bg-[#eaf3f6] p-6 text-sm leading-6 text-[color:var(--muted)]">
        <strong className="text-[color:var(--fg)]">Sample content notice:</strong> This is fictional
        demonstration copy for a marketing layout. It is general educational information, not legal
        advice, and does not create an attorney-client relationship.
      </aside>
    </article>
  )
}
