import {AttorneyZipSearch} from '@/components/site/AttorneyZipSearch'
import {ButtonLink} from '@/components/site/ButtonLink'
import {directoryLocations} from '@/sanity/lib/attorneyDirectoryContent'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Find an estate planning attorney',
  description: 'Search Wills.com’s estate planning attorney directory by ZIP code.',
}

export default function FindAnAttorneyPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Attorney directory
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Find estate-planning guidance near you.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Enter your ZIP code to search for estate-planning attorney profiles in your area.
          </p>
          <AttorneyZipSearch />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Featured profile format
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Profiles that help people choose with more confidence.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
              Rich listings can highlight focus areas locations practical articles consultation
              information and clearly labeled recognition.
            </p>
          </div>
          <Link
            href="/featured-attorneys/freidman-berenstein-anderson"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#071f33] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#123852]"
          >
            View sample profile
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              'Detailed profile',
              'Focus areas credentials and office information in one clear view.',
            ],
            [
              'Useful education',
              'Articles and FAQs help visitors prepare before they contact an office.',
            ],
            [
              'Clear signals',
              'Badges and consultation details give people useful context at a glance.',
            ],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-xl border border-[#d6e2e8] bg-[#f7fafc] p-5">
              <div className="text-sm font-bold text-[color:var(--accent-strong)]">{title}</div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Browse by location
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Local pages built for the questions people actually bring.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {directoryLocations.map((location) => (
            <Link
              key={`${location.state}-${location.city}`}
              href={`/find-an-attorney/${location.state}/${location.city}`}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {location.stateName}
              </div>
              <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
                {location.cityName}
              </h3>
              <span className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Explore local guidance →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            How the directory works
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            A clearer path to the right conversation.
          </h2>
        </div>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [
              '01',
              'Search by ZIP code',
              'Start with the location where you need estate-planning help.',
            ],
            [
              '02',
              'Review verified profiles',
              'As offices join, compare their jurisdiction, focus areas, and contact options.',
            ],
            [
              '03',
              'Contact the office',
              'Reach out directly to ask about availability, fit, and next steps.',
            ],
          ].map(([number, title, copy]) => (
            <li
              key={number}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_14px_35px_rgba(8,35,58,0.05)]"
            >
              <span className="text-sm font-bold text-[color:var(--accent)]">{number}</span>
              <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Directory questions
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Know what the directory can help you do.
          </h2>
        </div>
        <div className="mt-7 divide-y divide-[#cbdce3] rounded-2xl border border-[#cbdce3] bg-white px-6">
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold text-[color:var(--fg)]">
              How are profiles presented?
              <span className="float-right text-[color:var(--accent-strong)] group-open:hidden">
                +
              </span>
              <span className="float-right hidden text-[color:var(--accent-strong)] group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              Profiles can show information supplied by an office including location focus areas
              contact choices articles and clearly labeled recognitions. Readers should
              independently confirm credentials and fit.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold text-[color:var(--fg)]">
              Does Wills.com provide legal advice or referrals?
              <span className="float-right text-[color:var(--accent-strong)] group-open:hidden">
                +
              </span>
              <span className="float-right hidden text-[color:var(--accent-strong)] group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              No. Wills.com offers educational information and directory formats. Contacting an
              attorney is your choice and does not create an attorney-client relationship with
              Wills.com.
            </p>
          </details>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-6 md:p-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            For attorney offices
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)] md:text-4xl">
            Want your office considered for the directory?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
            We are building a useful, location-based resource for people looking for estate-planning
            counsel. Tell us about your firm and the communities you serve.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact" label="Request a directory listing" />
          </div>
        </div>
      </section>
    </div>
  )
}
