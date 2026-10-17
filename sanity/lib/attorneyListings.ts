import {defineQuery} from 'next-sanity'
import {attorneyProgramContent} from './attorneyProgramContent'
import {initialAttorneyListings, type AttorneyListing} from './initialAttorneyListings'
import {sanityFetch, type DynamicFetchOptions} from './live'

const listingsQuery = defineQuery(`{
  "listings": *[_type == "directoryListing"]{id, name, state, city, zip, address, phone, summary, websiteUrl, sourceUrl, practiceSourceUrl, sourceCheckedAt, suppressed},
  "copy": *[_type == "attorneyProgram" && _id == "attorneyProgram"][0].directory
}`)

export async function getAttorneyListings(options: DynamicFetchOptions) {
  'use cache'
  const {data} = await sanityFetch({query: listingsQuery, ...options})
  const records = (data?.listings || []) as (AttorneyListing & {suppressed?: boolean})[]
  const byId = new Map(initialAttorneyListings.map((listing) => [listing.id, listing]))
  for (const record of records) {
    if (record.suppressed) byId.delete(record.id)
    else if (record.id && record.name && record.zip && /^https:\/\//.test(record.websiteUrl || ''))
      byId.set(record.id, record)
  }
  return {
    listings: [...byId.values()].sort((a, b) => a.name.localeCompare(b.name)),
    copy: {...attorneyProgramContent.directory, ...(data?.copy || {})},
  }
}
