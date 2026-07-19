import {ButtonLink} from '@/components/site/ButtonLink'
import {citySlug, directoryStates, findDirectoryCity, findDirectoryState} from '../../directory'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export function generateStaticParams() {
  return directoryStates.flatMap((state) => state.cities.map((city) => ({state: state.slug, city: citySlug(city)})))
}

export async function generateMetadata({params}: PageProps<'/find-an-attorney/[state]/[city]'>): Promise<Metadata> {
  const {state: stateSlug, city: citySlugValue} = await params
  const state = findDirectoryState(stateSlug)
  const city = state ? findDirectoryCity(state, citySlugValue) : undefined

  if (!state || !city) {
    return {}
  }

  return {
    title: `Estate planning attorneys in ${city}, ${state.name}`,
    description: `Explore the estate-planning attorney directory page for ${city}, ${state.name}.`,
  }
}

export default async function CityDirectoryPage({params}: PageProps<'/find-an-attorney/[state]/[city]'>) {
  const {state: stateSlug, city: citySlugValue} = await params
  const state = findDirectoryState(stateSlug)
  const city = state ? findDirectoryCity(state, citySlugValue) : undefined

  if (!state || !city) {
    notFound()
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--muted)]"><Link href="/find-an-attorney" className="hover:text-[color:var(--accent)]">Attorney directory</Link><span className="px-2">/</span><Link href={`/find-an-attorney/${state.slug}`} className="hover:text-[color:var(--accent)]">{state.name}</Link><span className="px-2">/</span><span>{city}</span></nav>
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">{city}, {state.name}</div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">Estate-planning attorneys in {city}.</h1>
          <p className="mt-5 text-lg leading-8 text-white/80">Wills.com is building a local resource for people who want to connect with estate-planning professionals. Featured attorney listings for this area will be added as participating offices are reviewed.</p>
        </div>
      </section>
      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-6 md:p-10"><div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">For attorney offices</div><h2 className="mt-4 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)] md:text-4xl">Serve clients in {city}?</h2><p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">Tell us about your firm, practice areas, and the communities you support to be considered for this directory page.</p><div className="mt-7"><ButtonLink href="/contact" label="Request a directory listing" /></div></div></section>
      <section><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">More in {state.name}</div><h2 className="mt-4 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)]">Explore other cities.</h2><div className="mt-7 flex flex-wrap gap-3">{state.cities.filter((item) => item !== city).map((item) => <Link key={item} href={`/find-an-attorney/${state.slug}/${citySlug(item)}`} className="rounded-lg border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--fg)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">{item}</Link>)}</div></section>
    </div>
  )
}
