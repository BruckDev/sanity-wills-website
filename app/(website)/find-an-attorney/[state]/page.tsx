import {ButtonLink} from '@/components/site/ButtonLink'
import {citySlug, directoryStates, findDirectoryState} from '../directory'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export function generateStaticParams() {
  return directoryStates.map((state) => ({state: state.slug}))
}

export async function generateMetadata({params}: PageProps<'/find-an-attorney/[state]'>): Promise<Metadata> {
  const {state: stateSlug} = await params
  const state = findDirectoryState(stateSlug)

  if (!state) {
    return {}
  }

  return {
    title: `Estate planning attorneys in ${state.name}`,
    description: `Browse estate-planning attorney directory pages by city in ${state.name}.`,
  }
}

export default async function StateDirectoryPage({params}: PageProps<'/find-an-attorney/[state]'>) {
  const {state: stateSlug} = await params
  const state = findDirectoryState(stateSlug)

  if (!state) {
    notFound()
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--muted)]"><Link href="/find-an-attorney" className="hover:text-[color:var(--accent)]">Attorney directory</Link><span className="px-2">/</span><span>{state.name}</span></nav>
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">{state.name} attorney directory</div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">Find estate-planning counsel in {state.name}.</h1>
          <p className="mt-5 text-lg leading-8 text-white/80">Choose a city to visit its local directory page. Requirements for wills, trusts, probate, and other planning documents vary by state and by individual circumstances.</p>
        </div>
      </section>
      <section>
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Browse cities</div>
        <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">Explore {state.name} by city.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {state.cities.map((city) => (
            <Link key={city} href={`/find-an-attorney/${state.slug}/${citySlug(city)}`} className="group flex min-h-24 items-center justify-between rounded-xl border border-[color:var(--border)] bg-white p-5 font-semibold text-[color:var(--fg)] shadow-[0_8px_20px_rgba(8,35,58,0.05)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]">
              <span>{city}</span><span className="text-[color:var(--accent)] transition group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-6 md:p-10"><h2 className="font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)]">Are you an estate-planning attorney in {state.name}?</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">We are inviting qualified attorney offices to share useful information and be considered for local directory listings.</p><div className="mt-7"><ButtonLink href="/contact" label="Request a directory listing" /></div></section>
    </div>
  )
}
