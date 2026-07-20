import {ButtonLink} from '@/components/site/ButtonLink'
import {directoryLocations, getDirectoryLocation} from '@/sanity/lib/attorneyDirectoryContent'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export function generateStaticParams() {
  return directoryLocations.map(({state, city}) => ({state, city}))
}
export async function generateMetadata({
  params,
}: PageProps<'/find-an-attorney/[state]/[city]'>): Promise<Metadata> {
  const {state, city} = await params
  const location = getDirectoryLocation(state, city)
  return location
    ? {
        title: `Estate planning attorneys in ${location.cityName}`,
        description: location.description,
      }
    : {}
}

export default async function CityDirectoryPage({
  params,
}: PageProps<'/find-an-attorney/[state]/[city]'>) {
  const {state, city} = await params
  const location = getDirectoryLocation(state, city)
  if (!location) notFound()
  return (
    <div className="space-y-12 pb-8 md:space-y-16">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {location.stateName} attorney directory
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Estate planning in {location.cityName}.
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/80">
            {location.description} Start with a clear list of questions then choose the attorney
            conversation that fits your needs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink
              href="/create-a-will"
              label="Create a will"
              className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31]"
            />
            <ButtonLink
              href="/find-an-attorney"
              label="Search another location"
              style="secondary"
              className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
            />
          </div>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        {[
          [
            'Start prepared',
            'List the people property and questions that matter before you make a call.',
          ],
          [
            'Review fit',
            'Look for relevant focus areas clear contact options and useful local context.',
          ],
          [
            'Confirm details',
            'Ask about availability fees jurisdiction and what to bring to a first meeting.',
          ],
        ].map(([title, copy]) => (
          <div key={title} className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
            <h2 className="font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-[color:var(--muted)]">{copy}</p>
          </div>
        ))}
      </section>
      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Example rich profile
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">
              See what a complete attorney profile can include.
            </h2>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              Detailed attorney information articles badges FAQs and consultation expectations help
              visitors feel ready before contact.
            </p>
          </div>
          <Link
            href="/featured-attorneys/freidman-berenstein-anderson"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#071f33] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#123852]"
          >
            View sample profile
          </Link>
        </div>
      </section>
      <section>
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Local FAQs
        </div>
        <div className="mt-6 divide-y divide-[#d6e2e8] rounded-2xl border border-[#d6e2e8] bg-white px-6">
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold text-[color:var(--fg)]">
              What should I bring to a first meeting?
              <span className="float-right text-[color:var(--accent-strong)] group-open:hidden">
                +
              </span>
              <span className="float-right hidden text-[color:var(--accent-strong)] group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              A short list of family members property accounts existing documents and questions is a
              helpful place to begin. The office can tell you what else is relevant.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold text-[color:var(--fg)]">
              Can an online directory answer legal questions?
              <span className="float-right text-[color:var(--accent-strong)] group-open:hidden">
                +
              </span>
              <span className="float-right hidden text-[color:var(--accent-strong)] group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              No. Directory content is educational. An attorney licensed in the relevant
              jurisdiction can advise on your specific circumstances.
            </p>
          </details>
        </div>
      </section>
    </div>
  )
}
