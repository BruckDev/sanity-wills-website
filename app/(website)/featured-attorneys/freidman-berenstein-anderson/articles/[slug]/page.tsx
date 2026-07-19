import {findSampleAttorneyArticle, sampleAttorneyArticles} from '../../articleData'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export function generateStaticParams() {
  return sampleAttorneyArticles.map((article) => ({slug: article.slug}))
}

export async function generateMetadata({params}: PageProps<'/featured-attorneys/freidman-berenstein-anderson/articles/[slug]'>): Promise<Metadata> {
  const {slug} = await params
  const article = findSampleAttorneyArticle(slug)
  return article ? {title: `${article.title} | Sample attorney article`, description: article.summary} : {}
}

export default async function SampleAttorneyArticlePage({params}: PageProps<'/featured-attorneys/freidman-berenstein-anderson/articles/[slug]'>) {
  const {slug} = await params
  const article = findSampleAttorneyArticle(slug)
  if (!article) notFound()

  return (
    <article className="mx-auto max-w-4xl space-y-10 md:space-y-12">
      <Link href="/featured-attorneys/freidman-berenstein-anderson/articles" className="inline-flex text-sm font-semibold text-[color:var(--accent-strong)] hover:underline">← All sample articles</Link>
      <header className="rounded-[2rem] bg-[#071f33] px-7 py-12 text-white md:px-12 md:py-16"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Illustrative attorney-authored format · {article.readingTime}</div><h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">{article.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{article.summary}</p></header>
      <div className="space-y-10 rounded-[2rem] border border-[color:var(--border)] bg-white p-7 md:p-10">{article.sections.map((section) => <section key={section.heading}><h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">{section.heading}</h2><p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">{section.body}</p></section>)}</div>
      <aside className="rounded-2xl border border-[#d6e2e8] bg-[#eaf3f6] p-6 text-sm leading-6 text-[color:var(--muted)]"><strong className="text-[color:var(--fg)]">Sample content notice:</strong> This is fictional demonstration copy for a marketing layout. It is general educational information, not legal advice, and does not create an attorney-client relationship.</aside>
    </article>
  )
}
