import {getLocationsForState} from '@/sanity/lib/attorneyDirectoryContent'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export function generateStaticParams() {
  return ['illinois', 'new-york', 'california', 'texas'].map((state) => ({state}))
}
export async function generateMetadata({
  params,
}: PageProps<'/find-an-attorney/[state]'>): Promise<Metadata> {
  const {state} = await params
  const location = getLocationsForState(state)[0]
  return location
    ? {
        title: `Estate planning attorneys in ${location.stateName}`,
        description: `Browse estate planning resources and local attorney profiles in ${location.stateName}.`,
      }
    : {}
}

export default async function StateDirectoryPage({params}: PageProps<'/find-an-attorney/[state]'>) {
  const {state} = await params
  const locations = getLocationsForState(state)
  if (!locations.length) notFound()
  const stateName = locations[0].stateName
  return (
    <div className="space-y-12 pb-8 md:space-y-16">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Attorney directory
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Estate-planning guidance in {stateName}.
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Explore local starting points and prepare for a more useful conversation with an
            estate-planning attorney.
          </p>
        </div>
      </section>
      <section>
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Local pages
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.city}
              href={`/find-an-attorney/${location.state}/${location.city}`}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_14px_35px_rgba(8,35,58,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {location.cityName}
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{location.description}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Explore {location.cityName} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
