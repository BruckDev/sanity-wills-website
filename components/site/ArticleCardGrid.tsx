import type {HomeArticleCard} from '@/sanity/lib/homeArticleCards'
import Image from 'next/image'
import Link from 'next/link'

export function ArticleCardGrid({
  cards,
  headingLevel = 3,
}: {
  cards: HomeArticleCard[]
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((article) => (
        <article
          key={article.title}
          className="flex flex-col overflow-hidden rounded-xl border border-[#e0e9ed] bg-white shadow-[0_6px_18px_rgba(8,35,58,0.04)]"
        >
          <Link
            href={article.href}
            aria-label={article.title}
            className="relative block aspect-[1.55] overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 400px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            />
          </Link>
          <div className="flex flex-1 flex-col p-6">
            <Heading className="font-serif text-2xl leading-7 tracking-[-0.03em] text-[#062842]">
              <Link href={article.href} className="hover:underline">
                {article.title}
              </Link>
            </Heading>
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
  )
}
