import {ButtonLink} from '@/components/site/ButtonLink'
import {getAttorneyListings} from '@/sanity/lib/attorneyListings'
import {initialAttorneyListings} from '@/sanity/lib/initialAttorneyListings'
import {getDynamicFetchOptions, type DynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {Suspense} from 'react'

export function generateStaticParams() {
  return initialAttorneyListings.map(({id}) => ({slug: id}))
}

export async function generateMetadata({
  params,
}: PageProps<'/find-an-attorney/profiles/[slug]'>): Promise<Metadata> {
  const {slug} = await params
  const {listings} = await getAttorneyListings({perspective: 'published', stega: false})
  const listing = listings.find(({id}) => id === slug)
  return {title: listing?.name || 'Firm details', description: listing?.summary}
}

export default async function ListingPage({
  params,
}: PageProps<'/find-an-attorney/profiles/[slug]'>) {
  const {isEnabled} = await draftMode()
  const {slug} = await params
  return isEnabled ? (
    <Suspense fallback={null}>
      <DynamicListing slug={slug} />
    </Suspense>
  ) : (
    <CachedListing slug={slug} perspective="published" stega={false} />
  )
}

async function DynamicListing({slug}: {slug: string}) {
  return <CachedListing slug={slug} {...await getDynamicFetchOptions()} />
}

async function CachedListing({slug, ...options}: DynamicFetchOptions & {slug: string}) {
  'use cache'
  const {listings, copy} = await getAttorneyListings(options)
  const listing = listings.find(({id}) => id === slug)
  if (!listing) notFound()
  return (
    <article
      data-attorney-profile={listing.id}
      className="mx-auto max-w-4xl space-y-7 rounded-[2rem] border border-[color:var(--border)] bg-white p-6 md:p-12"
    >
      <p className="text-sm font-semibold text-[color:var(--accent-strong)]">{copy.publicLabel}</p>
      <h1 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">{listing.name}</h1>
      <p className="text-lg leading-8 text-[color:var(--muted)]">{listing.summary}</p>
      <p className="leading-7">{listing.address}</p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={listing.websiteUrl} label={copy.websiteLabel} />
        <ButtonLink href={`tel:${listing.phone}`} label={copy.phoneLabel} style="secondary" />
      </div>
      <p className="border-t border-[color:var(--border)] pt-6 text-sm leading-7 text-[color:var(--muted)]">
        {copy.intro}
      </p>
      <p className="text-sm">
        {copy.checkedLabel}: {listing.sourceCheckedAt}
      </p>
      <div className="flex flex-wrap gap-5 text-sm font-semibold text-[color:var(--accent-strong)]">
        <a href={listing.sourceUrl} className="underline">
          {copy.sourceLabel}
        </a>
        <a href={listing.practiceSourceUrl} className="underline">
          {copy.practiceSourceLabel}
        </a>
        <Link href="/contact" className="underline">
          {copy.correctionLabel}
        </Link>
      </div>
    </article>
  )
}
