import type {attorneyProgramContent} from '@/sanity/lib/attorneyProgramContent'
import type {AttorneyListing} from '@/sanity/lib/initialAttorneyListings'
import Link from 'next/link'

export function AttorneyListingCards({
  listings,
  copy,
}: {
  listings: AttorneyListing[]
  copy: typeof attorneyProgramContent.directory
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {listings.map((listing) => (
        <article
          key={listing.id}
          data-attorney-profile={listing.id}
          className="rounded-2xl border border-[color:var(--border)] bg-white p-6 text-[color:var(--fg)]"
        >
          <p className="text-xs font-semibold text-[color:var(--accent-strong)]">
            {copy.publicLabel}
          </p>
          <h3 className="mt-3 font-serif text-2xl">{listing.name}</h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{listing.address}</p>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{listing.summary}</p>
          <Link
            href={`/find-an-attorney/profiles/${listing.id}`}
            className="mt-5 inline-flex font-semibold text-[color:var(--accent-strong)] underline"
          >
            {copy.profileLabel} →
          </Link>
        </article>
      ))}
    </div>
  )
}
