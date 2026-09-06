import {directoryLocations} from '@/sanity/lib/attorneyDirectoryContent'
import {lifeEvents, planningTools} from '@/sanity/lib/estatePlanningContent'
import {sanityFetchMetadata} from '@/sanity/lib/live'
import type {MetadataRoute} from 'next'
import {defineQuery} from 'next-sanity'

const baseUrl = 'https://wills.com'
const documentPaths: Record<string, string> = {
  insight: '/insights',
  caseStudy: '/insights/case-studies',
  industry: '/industries',
  service: '/services',
  lifeEvent: '/life-events',
  planningTool: '/tools',
}
const singletonPaths: Record<string, string> = {
  home: '',
  about: '/about',
  government: '/government',
  contactPage: '/contact',
  privacyPage: '/privacy',
  accessibilityPage: '/accessibility',
  insightsLanding: '/insights',
  servicesLanding: '/services',
  industriesLanding: '/industries',
}

const sitemapQuery = defineQuery(`*[
  !(_id in path("drafts.**")) && !(_id in path("versions.**")) &&
  _type in ["insight", "caseStudy", "industry", "service", "lifeEvent", "planningTool", "home", "about", "government", "contactPage", "privacyPage", "accessibilityPage", "insightsLanding", "servicesLanding", "industriesLanding"]
]{_type, _updatedAt, "slug": slug.current}`)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Only published content belongs in a public sitemap, including during Draft Mode.
  const {data} = await sanityFetchMetadata({query: sitemapQuery, perspective: 'published'})
  const paths = new Set([
    '',
    '/wills',
    '/trusts',
    '/estate-planning',
    '/create-a-will',
    '/insights',
    '/about',
    '/contact',
    '/privacy',
    '/accessibility',
    '/tools',
    '/life-events',
    '/find-an-attorney',
    ...planningTools.map(({slug}) => `/tools/${slug}`),
    ...lifeEvents.map(({slug}) => `/life-events/${slug}`),
    ...directoryLocations.flatMap(({state, city}) => [
      `/find-an-attorney/${state}`,
      `/find-an-attorney/${state}/${city}`,
    ]),
  ])
  const entries = new Map<string, MetadataRoute.Sitemap[number]>(
    [...paths].map((path) => [path, {url: `${baseUrl}${path}`}]),
  )
  for (const document of (data || []) as {_type: string; _updatedAt: string; slug?: string}[]) {
    let path = singletonPaths[document._type]
    if (path === undefined) {
      if (!document.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(document.slug)) continue
      const prefix = documentPaths[document._type]
      if (!prefix) continue
      path = `${prefix}/${document.slug}`
      // These routes deliberately only render the known local slugs.
      if (['lifeEvent', 'planningTool'].includes(document._type) && !paths.has(path)) continue
    }
    const updated = new Date(document._updatedAt)
    entries.set(path, {
      url: `${baseUrl}${path}`,
      ...(!Number.isNaN(updated.getTime()) ? {lastModified: updated} : {}),
    })
  }
  // Static fallback pages have no reliable stored modification date: omit lastmod.
  // Legacy 404 routes, login flows, sample profiles, and consulting-template fallbacks are excluded.
  return [...entries.values()].sort((a, b) => a.url.localeCompare(b.url))
}
