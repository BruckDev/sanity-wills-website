import {lifeEvents} from '@/sanity/lib/estatePlanningContent'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Estate planning for life events',
  description:
    'Free estate planning guidance for the moments that change who and what you protect.',
}

export default function LifeEventsPage() {
  return (
    <div className="space-y-14 pb-8 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Life event planning
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Life changes fast. Your plan should not fall behind.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Find a clear next step for the moments that change who depends on you and what needs
            protecting.
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Choose your moment
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Guidance shaped around the life you are living now.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {lifeEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/life-events/${event.slug}`}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_14px_35px_rgba(8,35,58,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {event.eyebrow}
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {event.title}
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{event.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                See your next steps →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
