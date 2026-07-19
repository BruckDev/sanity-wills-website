import {ButtonLink} from '@/components/site/ButtonLink'
import {directoryStates} from './directory'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Find an estate planning attorney',
  description: 'Browse Wills.com’s estate planning attorney directory by state and city.',
}

export default function FindAnAttorneyPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Attorney directory</div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">Find estate-planning guidance near you.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Choose your state, then a city, to explore local estate-planning attorney directory pages. Attorney offices can contact Wills.com to be considered for a featured listing.</p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Browse by state</div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">Start with the state where you need help.</h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {directoryStates.map((state) => (
            <Link key={state.slug} href={`/find-an-attorney/${state.slug}`} className="group flex items-center justify-between rounded-xl border border-[color:var(--border)] bg-white px-5 py-4 text-[color:var(--fg)] shadow-[0_8px_20px_rgba(8,35,58,0.05)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]">
              <span className="font-semibold">{state.name}</span>
              <span className="text-[color:var(--accent)] transition group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-6 md:p-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">For attorney offices</div>
          <h2 className="mt-4 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)] md:text-4xl">Want your office considered for the directory?</h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">We are building a useful, location-based resource for people looking for estate-planning counsel. Tell us about your firm and the communities you serve.</p>
          <div className="mt-7"><ButtonLink href="/contact" label="Request a directory listing" /></div>
        </div>
      </section>
    </div>
  )
}
