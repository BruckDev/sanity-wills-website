import {ButtonLink} from '@/components/site/ButtonLink'
import {
  getLifeEvent,
  lifeEventQuery,
  lifeEvents,
  mergeLifeEvent,
  type LifeEvent,
} from '@/sanity/lib/estatePlanningContent'
import {getDynamicFetchOptions, sanityFetch, type DynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {Suspense} from 'react'

export function generateStaticParams() {
  return lifeEvents.map(({slug}) => ({slug}))
}

export async function generateMetadata({
  params,
}: PageProps<'/life-events/[slug]'>): Promise<Metadata> {
  const {slug} = await params
  const event = getLifeEvent(slug)
  return event ? {title: `${event.title} estate planning`, description: event.summary} : {}
}

export default async function LifeEventPage({params}: PageProps<'/life-events/[slug]'>) {
  const {isEnabled: isDraftMode} = await draftMode()
  if (isDraftMode)
    return (
      <Suspense fallback={<LifeEventFallback />}>
        <DynamicLifeEventPage params={params} />
      </Suspense>
    )
  const {slug} = await params
  return <CachedLifeEventPage slug={slug} perspective="published" stega={false} />
}

async function DynamicLifeEventPage({params}: Pick<PageProps<'/life-events/[slug]'>, 'params'>) {
  const [{slug}, options] = await Promise.all([params, getDynamicFetchOptions()])
  return <CachedLifeEventPage slug={slug} {...options} />
}

async function CachedLifeEventPage({
  slug,
  perspective,
  stega,
}: {slug: string} & DynamicFetchOptions) {
  'use cache'
  const fallback = getLifeEvent(slug)
  if (!fallback) notFound()
  const {data} = await sanityFetch({query: lifeEventQuery, params: {slug}, perspective, stega})
  return <LifeEventView event={mergeLifeEvent(data as Partial<LifeEvent> | null, fallback)} />
}

function LifeEventView({event}: {event: LifeEvent}) {
  return (
    <div className="space-y-14 pb-8 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {event.eyebrow}
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Estate planning for {event.title.toLowerCase()}.
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/80">{event.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink
              href="/create-a-will"
              label="Create a will"
              className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31]"
            />
            <ButtonLink
              href="/find-an-attorney"
              label="Find an attorney"
              style="secondary"
              className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
            />
          </div>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-2xl border border-[#b8cdb6] bg-[#eef5f0] p-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            Why now matters
          </div>
          <p className="mt-4 font-serif text-3xl leading-tight tracking-[-0.03em] text-[color:var(--fg)]">
            {event.urgency}
          </p>
        </aside>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-7 md:p-9">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            A practical starting list
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">
            Take the next right step.
          </h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {event.checklist.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[#d6e2e8] bg-[#f7fafc] p-4 text-sm leading-6 text-[color:var(--fg)]"
              >
                <span className="mr-2 font-bold text-[color:var(--accent-strong)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Common questions
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            A clearer way to prepare.
          </h2>
        </div>
        <div className="mt-7 divide-y divide-[#d6e2e8] rounded-2xl border border-[#d6e2e8] bg-white px-6">
          {event.faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-[color:var(--fg)] marker:hidden">
                {faq.question}
                <span className="float-right text-[color:var(--accent-strong)] group-open:hidden">
                  +
                </span>
                <span className="float-right text-[color:var(--accent-strong)] group-open:inline hidden">
                  −
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[color:var(--muted)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">
        This page is educational and not legal advice. Rules and outcomes can differ by state and
        personal circumstances.
      </p>
    </div>
  )
}
function LifeEventFallback() {
  return <div className="min-h-[32rem] animate-pulse rounded-[2rem] bg-[#eef5f0]" aria-busy />
}
