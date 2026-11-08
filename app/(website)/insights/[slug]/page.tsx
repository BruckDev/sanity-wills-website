import {CustomPortableText} from '@/components/CustomPortableText'
import {ButtonLink} from '@/components/site/ButtonLink'
import {PageHero} from '@/components/site/PageHero'
import {getDynamicFetchOptions, sanityFetch, sanityFetchMetadata} from '@/sanity/lib/live'
import {fallbackInsights, toBlocks} from '@/sanity/lib/siteFallbacks'
import {insightBySlugQuery} from '@/sanity/lib/siteQueries'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export function generateStaticParams() {
  return fallbackInsights.map((insight) => ({slug: insight.slug}))
}

export async function generateMetadata({params}: PageProps<'/insights/[slug]'>): Promise<Metadata> {
  const {slug} = await params
  const {data} = await sanityFetchMetadata({
    query: insightBySlugQuery,
    params: {slug},
    perspective: 'published',
  })
  const insight: any = data || fallbackInsights.find((item) => item.slug === slug)
  return {
    title: insight?.seo?.title || insight?.title,
    description: insight?.seo?.description || insight?.excerpt,
  }
}

export default async function InsightDetailPage({params}: PageProps<'/insights/[slug]'>) {
  const {slug} = await params
  const fetchOptions = await getDynamicFetchOptions()
  const {data} = await sanityFetch({
    query: insightBySlugQuery,
    params: {slug},
    ...fetchOptions,
  })
  const insight: any = data || fallbackInsights.find((item) => item.slug === slug)

  if (!insight) {
    notFound()
  }

  const cover = insight.coverImage
  const backCta = insight.display?.backCta || {
    label: 'Back to Insights',
    href: '/insights',
    style: 'secondary',
  }

  return (
    <div className="space-y-16 md:space-y-20">
      {!cover?.asset?.url && (
        <PageHero
          eyebrow={insight.articleType || 'Insight'}
          title={insight.title || ''}
          description={insight.excerpt ? toBlocks([insight.excerpt]) : []}
          secondaryCta={backCta}
          stats={[
            {
              value: insight.estimatedReadTime,
              label: insight.display?.readTimeLabel || 'Estimated read time',
            },
          ]}
        />
      )}

      <article className="mx-auto max-w-4xl space-y-8 border border-[color:var(--border)] bg-white p-6 md:p-10">
        {cover?.asset?.url ? (
          <>
            <header>
              <ButtonLink {...backCta} />
              <p className="mt-6 text-sm font-semibold text-[color:var(--muted)]">
                {[insight.articleType, insight.estimatedReadTime].filter(Boolean).join(' · ')}
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                {insight.title}
              </h1>
              <p className="mt-4 text-lg leading-7 text-[color:var(--muted)]">{insight.excerpt}</p>
            </header>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={cover.asset.url}
                alt={cover.alt || ''}
                fill
                sizes="(min-width: 896px) 816px, calc(100vw - 5rem)"
                className="object-cover"
              />
            </div>
          </>
        ) : null}
        <div className="prose prose-slate max-w-none">
          <CustomPortableText
            id={insight._id || null}
            type={insight._id ? 'insight' : null}
            path={['body']}
            value={insight.body || []}
          />
        </div>
      </article>

      {(insight.relatedServices || []).length || (insight.relatedIndustries || []).length ? (
        <section className="grid gap-8 lg:grid-cols-2">
          {(insight.relatedServices || []).length ? (
            <article className="border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--fg)]">
                {insight.display?.relatedServicesTitle || 'Related services'}
              </h2>
              <div className="mt-5 grid gap-2">
                {(insight.relatedServices || []).map((service: any) => (
                  <Link
                    key={service.slug || service.title}
                    href={`/services/${service.slug}`}
                    className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </article>
          ) : null}
          {(insight.relatedIndustries || []).length ? (
            <article className="border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--fg)]">
                {insight.display?.relatedIndustriesTitle || 'Related industries'}
              </h2>
              <div className="mt-5 grid gap-2">
                {(insight.relatedIndustries || []).map((industry: any) => (
                  <Link
                    key={industry.slug || industry.title}
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            </article>
          ) : null}
        </section>
      ) : null}

      <section className="border border-[color:var(--border)] bg-[color:var(--charcoal)] p-6 text-white md:p-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          {insight.display?.closingTitle || 'Want to discuss a related initiative?'}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/76">
          {insight.display?.closingText ||
            'We can help turn themes from strategy, operations, and technology into a practical next step.'}
        </p>
        <div className="mt-8">
          <ButtonLink
            {...(insight.display?.closingCta || {
              href: '/contact',
              label: 'Talk to Our Team',
              style: 'primary',
            })}
          />
        </div>
      </section>
    </div>
  )
}
