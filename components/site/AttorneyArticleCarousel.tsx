'use client'

import {type AttorneyProgramContent} from '@/sanity/lib/attorneyProgramContent'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

type ArticleCard = {slug: string; title: string; image: string; readingTime: string}

export function AttorneyArticleCarousel({
  articles,
  content,
}: {
  articles: ArticleCard[]
  content: AttorneyProgramContent['sampleArticles']
}) {
  const [active, setActive] = useState(0)
  function move(direction: number) {
    setActive((current) => (current + direction + articles.length) % articles.length)
  }

  return (
    <section
      aria-labelledby="sample-articles-heading"
      aria-roledescription="carousel"
      className="rounded-2xl bg-white px-3 py-9 md:px-6 md:py-12"
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
    >
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
          {content.eyebrow}
        </p>
        <h2
          id="sample-articles-heading"
          className="mt-3 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl"
        >
          {content.heading}
        </h2>
        <Link
          href="/featured-attorneys/freidman-berenstein-anderson/articles"
          className="mt-5 inline-flex items-center gap-2 border-b border-[#067b81] pb-1 text-sm font-bold uppercase tracking-[0.08em] text-[#067b81] hover:text-[#004b50]"
        >
          {content.allArticlesLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="attorney-article-stage mt-8">
        {articles.map((article, index) => {
          const offset = (index - active + articles.length) % articles.length
          const position = offset === 0 ? 'active' : offset === 1 ? 'next' : 'previous'
          const body = (
            <>
              <Image
                src={article.image}
                alt=""
                fill
                sizes="(min-width: 768px) 55vw, 85vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="attorney-article-copy absolute inset-x-0 bottom-0 p-4 text-left text-white md:p-6">
                <div className="attorney-article-byline mb-4 flex flex-wrap items-center justify-between gap-3 text-xs font-medium md:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <Image
                      src="/images/featured-attorneys/christopher-freidman.png"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover object-top"
                    />
                    {content.authorName}
                  </span>
                  <span>{article.readingTime}</span>
                </div>
                <h3 className="attorney-article-title font-sans font-bold leading-snug">
                  {article.title}
                </h3>
              </div>
            </>
          )
          return (
            <article className="attorney-article-slide" data-position={position} key={article.slug}>
              {index === active ? (
                <Link
                  href={`/featured-attorneys/freidman-berenstein-anderson/articles/${article.slug}`}
                  className="absolute inset-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                >
                  {body}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`${content.selectLabel}: ${article.title}`}
                  className="absolute inset-0 w-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                >
                  {body}
                </button>
              )}
            </article>
          )
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-1 md:gap-2">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label={content.previousLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f6f4] text-[#067b81] transition hover:bg-[#e0eee8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#067b81]"
        >
          <Chevron />
        </button>
        {articles.map((article, index) => (
          <button
            type="button"
            key={article.slug}
            onClick={() => setActive(index)}
            aria-label={`${content.selectLabel} ${index + 1}: ${article.title}`}
            aria-pressed={index === active}
            className="flex h-11 w-9 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-[#067b81]"
          >
            <span
              aria-hidden="true"
              className={`h-2.5 w-2.5 rounded-full border border-[#008a76] ${index === active ? 'bg-[#008a76]' : 'bg-white'}`}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={() => move(1)}
          aria-label={content.nextLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f6f4] text-[#067b81] transition hover:bg-[#e0eee8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#067b81]"
        >
          <Chevron next />
        </button>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {articles[active].title}
      </p>
      <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-[color:var(--muted)]">
        {content.disclaimer}
      </p>
    </section>
  )
}

function Chevron({next = false}: {next?: boolean}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={`h-5 w-5 ${next ? 'rotate-180' : ''}`}
    >
      <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
