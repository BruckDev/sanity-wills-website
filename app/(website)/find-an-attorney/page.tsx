import {AttorneyZipSearch} from '@/components/site/AttorneyZipSearch'
import {ButtonLink} from '@/components/site/ButtonLink'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Find an estate planning attorney',
  description: 'Search Wills.com’s estate planning attorney directory by ZIP code.',
}

export default function FindAnAttorneyPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Attorney directory</div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">Find estate-planning guidance near you.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Enter your ZIP code to search for estate-planning attorney profiles in your area.</p>
          <AttorneyZipSearch />
        </div>
      </section>

      <section>
        <div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">How the directory works</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">A clearer path to the right conversation.</h2></div>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">{[['01', 'Search by ZIP code', 'Start with the location where you need estate-planning help.'], ['02', 'Review verified profiles', 'As offices join, compare their jurisdiction, focus areas, and contact options.'], ['03', 'Contact the office', 'Reach out directly to ask about availability, fit, and next steps.']].map(([number, title, copy]) => <li key={number} className="rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_14px_35px_rgba(8,35,58,0.05)]"><span className="text-sm font-bold text-[color:var(--accent)]">{number}</span><h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">{title}</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">{copy}</p></li>)}</ol>
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
