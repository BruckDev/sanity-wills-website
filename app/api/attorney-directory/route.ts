import {getAttorneyListings} from '@/sanity/lib/attorneyListings'
import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  const zip = new URL(request.url).searchParams.get('zip') || ''
  if (!/^\d{5}$/.test(zip)) return NextResponse.json({error: 'Invalid ZIP'}, {status: 400})
  const {listings, copy} = await getAttorneyListings({perspective: 'published', stega: false})
  return NextResponse.json({listings: listings.filter((listing) => listing.zip === zip), copy})
}
