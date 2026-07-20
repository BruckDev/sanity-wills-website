import {planningTools} from '@/sanity/lib/estatePlanningContent'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free estate planning tools',
  description:
    'Interactive free estate planning quizzes calculators and practical guides from Wills.com.',
}

export default function ToolsPage() {
  return (
    <div className="space-y-14 pb-8 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Free estate planning tools
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Useful planning help should be easy to start.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Explore a growing library of free quizzes calculators and guides built to turn
            uncertainty into a clearer next step.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Start anywhere
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Private tools that help you prepare.
            </h2>
          </div>
          <span className="text-sm font-semibold text-[color:var(--muted)]">
            No sign-in required
          </span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {planningTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_14px_35px_rgba(8,35,58,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {tool.eyebrow}
                </div>
                <span className="text-xs font-semibold text-[color:var(--muted)]">{tool.time}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {tool.title}
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{tool.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Open free tool →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
