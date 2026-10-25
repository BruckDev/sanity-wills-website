import {getDynamicFetchOptions, type DynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import {Suspense} from 'react'
import {getSampleArticleContent} from '../articleContent'
import {sampleAttorneyArticles, type SampleAttorneyArticle} from '../articleData'

export const metadata: Metadata = {
  title: 'Sample attorney articles',
  description: 'Illustrative attorney-authored article formatting for a featured office profile.',
}

export default async function SampleAttorneyArticlesPage() {
  const {isEnabled} = await draftMode()
  return isEnabled ? (
    <Suspense fallback={<ArticleList articles={sampleAttorneyArticles} />}>
      <DynamicArticles />
    </Suspense>
  ) : (
    <CachedArticles perspective="published" stega={false} />
  )
}

async function DynamicArticles() {
  return <CachedArticles {...await getDynamicFetchOptions()} />
}

async function CachedArticles(options: DynamicFetchOptions) {
  'use cache'
  return <ArticleList articles={(await getSampleArticleContent(options)).articles} />
}

function ArticleList({articles}: {articles: SampleAttorneyArticle[]}) {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="rounded-[2rem] bg-[#071f33] px-7 py-12 text-white md:px-12 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Illustrative content format
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Articles by Christopher Freidman
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/80">
            These sample educational articles demonstrate how a featured attorney can share useful
            planning guidance with readers.
          </p>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/featured-attorneys/freidman-berenstein-anderson/articles/${article.slug}`}
            className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={article.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {article.readingTime}
              </div>
              <h2 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {article.title}
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">{article.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Read sample article →
              </span>
            </div>
          </Link>
        ))}
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">
        This fictional content is a marketing demonstration and is not legal advice or a
        representation that this attorney authored the articles.
      </p>
    </div>
  )
}
