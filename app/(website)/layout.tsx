import '@/styles/index.css'
import {SiteFooter} from '@/components/site/SiteFooter'
import {SiteHeader} from '@/components/site/SiteHeader'
import {
  getDynamicFetchOptions,
  sanityFetch,
  SanityLive,
  type DynamicFetchOptions,
} from '@/sanity/lib/live'
import {fallbackSettings} from '@/sanity/lib/siteFallbacks'
import {settingsQuery} from '@/sanity/lib/siteQueries'
import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata, Viewport} from 'next'
import {VisualEditing} from 'next-sanity/visual-editing'
import {draftMode} from 'next/headers'
import {Suspense} from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {template: '%s | Wills.com', default: 'Wills.com | Estate planning guidance'},
    description: 'Clear educational guidance about wills, trusts, and estate planning.',
    openGraph: {title: 'Wills.com | Estate planning guidance', description: 'Clear educational guidance about wills, trusts, and estate planning.'},
  }
}

export const viewport: Viewport = {themeColor: '#071f33'}

export default async function WebsiteLayout({children}: LayoutProps<'/'>) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <>
      <div className="site-shell flex min-h-screen flex-col bg-transparent text-[color:var(--fg)]">
        {isDraftMode ? (
          <Suspense fallback={<WebsiteHeader data={fallbackSettings} />}>
            <DynamicWebsiteHeader />
          </Suspense>
        ) : (
          <CachedWebsiteHeader perspective="published" stega={false} />
        )}
        <main className="flex-grow px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
        {isDraftMode ? (
          <Suspense fallback={<WebsiteFooter data={fallbackSettings} />}>
            <DynamicWebsiteFooter />
          </Suspense>
        ) : (
          <CachedWebsiteFooter perspective="published" stega={false} />
        )}
      </div>
      <Suspense fallback={null}>
        <SpeedInsights />
      </Suspense>
      <SanityLive includeDrafts={isDraftMode} />
      {isDraftMode ? <VisualEditing /> : null}
    </>
  )
}

async function DynamicWebsiteHeader() {
  return <CachedWebsiteHeader {...await getDynamicFetchOptions()} />
}

async function CachedWebsiteHeader(fetchOptions: DynamicFetchOptions) {
  'use cache'
  return <WebsiteHeader data={await fetchSettings(fetchOptions)} />
}

async function DynamicWebsiteFooter() {
  return <CachedWebsiteFooter {...await getDynamicFetchOptions()} />
}

async function CachedWebsiteFooter(fetchOptions: DynamicFetchOptions) {
  'use cache'
  return <WebsiteFooter data={await fetchSettings(fetchOptions)} />
}

async function fetchSettings(fetchOptions: DynamicFetchOptions) {
  'use cache'
  const {data} = await sanityFetch({
    query: settingsQuery,
    ...fetchOptions,
  })

  return (data as any) || fallbackSettings
}

function WebsiteHeader({data}: {data: any}) {
  return (
    <SiteHeader
      navigation={[
        {label: 'Wills', href: '/wills'},
        {label: 'Trusts', href: '/trusts'},
        {label: 'Estate planning', href: '/estate-planning'},
        {label: 'Find an attorney', href: '/find-an-attorney'},
        {label: 'Articles', href: '/insights'},
        {label: 'For attorneys', href: '/contact'},
      ]}
    />
  )
}

function WebsiteFooter({data}: {data: any}) {
  return <SiteFooter />
}
