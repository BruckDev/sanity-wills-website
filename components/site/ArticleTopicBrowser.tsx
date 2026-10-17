'use client'

import type {ArticleDirectoryContent} from '@/sanity/lib/articleDirectoryContent'
import type {HomeArticleCard} from '@/sanity/lib/homeArticleCards'
import {stegaClean} from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

export function ArticleTopicBrowser({
  cards,
  content,
}: {
  cards: HomeArticleCard[]
  content: ArticleDirectoryContent
}) {
  const [topic, setTopic] = useState<string | null>(null)
  const topics = [...new Set(cards.map((card) => stegaClean(card.category)))]
  const visible = topic ? cards.filter((card) => stegaClean(card.category) === topic) : cards
  return (
    <section id="articles" className="scroll-mt-28">
      <h2 className="text-3xl font-bold tracking-tight text-[#082d4c] md:text-4xl">
        {content.allTitle}
      </h2>
      <div
        className="mt-6 flex flex-wrap items-center gap-2 border-b border-[#d8e3df] pb-6"
        role="group"
        aria-label={content.exploreLabel}
      >
        <span className="mr-3 text-xs font-bold uppercase tracking-[0.12em] text-[#547080]">
          {content.exploreLabel}
        </span>
        {[null, ...topics].map((item) => (
          <button
            key={item || 'all'}
            type="button"
            aria-pressed={topic === item}
            onClick={() => setTopic(item)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007f72] ${topic === item ? 'border-[#082d4c] bg-[#082d4c] text-white' : 'border-[#cbdad4] bg-white text-[#082d4c] hover:bg-[#edf7f2]'}`}
          >
            {item || content.allLabel}
          </button>
        ))}
      </div>
      <div aria-live="polite" aria-atomic="true" className="mt-2 grid gap-x-10 md:grid-cols-2">
        {visible.map((article) => (
          <article
            key={article.href}
            className="grid grid-cols-[6rem_1fr] items-start gap-5 border-b border-[#d8e3df] py-7 sm:grid-cols-[9rem_1fr]"
          >
            <Link
              href={article.href}
              aria-label={article.title}
              className="relative block aspect-[1.35] overflow-hidden rounded-md"
            >
              <Image
                src={article.image}
                alt={article.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 144px, 96px"
              />
            </Link>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#007668]">
                {article.category}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug text-[#082d4c] sm:text-xl">
                <Link href={article.href} className="hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 hidden text-sm leading-6 text-[#547080] sm:block">
                {article.description}
              </p>
              <Link
                href={article.href}
                className="mt-3 inline-block text-xs font-bold text-[#007668] underline underline-offset-4"
              >
                {content.readLabel} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
