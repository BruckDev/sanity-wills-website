import {getAttorneyListings} from '@/sanity/lib/attorneyListings'
import {getDynamicFetchOptions} from '@/sanity/lib/live'
import {AttorneyListingCards} from './AttorneyListingCards'

export async function DirectoryInventory({city}: {city?: string}) {
  const {listings, copy} = await getAttorneyListings(await getDynamicFetchOptions())
  return (
    <section>
      <h2 className="font-serif text-4xl tracking-[-0.035em]">{copy.title}</h2>
      <p className="mb-7 mt-4 max-w-3xl leading-7 text-[color:var(--muted)]">{copy.intro}</p>
      <AttorneyListingCards
        listings={city ? listings.filter((listing) => listing.city === city) : listings}
        copy={copy}
      />
    </section>
  )
}
