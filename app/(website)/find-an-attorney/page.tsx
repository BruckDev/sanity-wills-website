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
