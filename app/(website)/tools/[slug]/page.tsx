import {ButtonLink} from '@/components/site/ButtonLink'
import {PlanningToolExperience} from '@/components/site/PlanningToolExperience'
import {
  getPlanningTool,
  mergePlanningTool,
  planningToolQuery,
  planningTools,
  type PlanningTool,
} from '@/sanity/lib/estatePlanningContent'
import {getDynamicFetchOptions, sanityFetch, type DynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {Suspense} from 'react'

export function generateStaticParams() {
  return planningTools.map(({slug}) => ({slug}))
}
export async function generateMetadata({params}: PageProps<'/tools/[slug]'>): Promise<Metadata> {
  const {slug} = await params
  const tool = getPlanningTool(slug)
  return tool ? {title: tool.title, description: tool.summary} : {}
}

export default async function ToolPage({params}: PageProps<'/tools/[slug]'>) {
  const {isEnabled: isDraftMode} = await draftMode()
  if (isDraftMode)
    return (
      <Suspense fallback={<ToolFallback />}>
        <DynamicToolPage params={params} />
      </Suspense>
    )
  const {slug} = await params
  return <CachedToolPage slug={slug} perspective="published" stega={false} />
}
async function DynamicToolPage({params}: Pick<PageProps<'/tools/[slug]'>, 'params'>) {
  const [{slug}, options] = await Promise.all([params, getDynamicFetchOptions()])
  return <CachedToolPage slug={slug} {...options} />
}
async function CachedToolPage({slug, perspective, stega}: {slug: string} & DynamicFetchOptions) {
  'use cache'
  const fallback = getPlanningTool(slug)
  if (!fallback) notFound()
  const {data} = await sanityFetch({query: planningToolQuery, params: {slug}, perspective, stega})
  return <ToolView tool={mergePlanningTool(data as Partial<PlanningTool> | null, fallback)} />
}
function ToolView({tool}: {tool: PlanningTool}) {
  return (
    <div className="space-y-12 pb-8 md:space-y-16">
      <section className="max-w-4xl">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          {tool.eyebrow} · {tool.time}
        </div>
        <h1 className="mt-4 font-serif text-5xl tracking-[-0.045em] text-[color:var(--fg)] md:text-7xl">
          {tool.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">{tool.summary}</p>
      </section>
      <PlanningToolExperience kind={tool.kind} />
      <section className="flex flex-col gap-5 rounded-[2rem] bg-[#071f33] p-7 text-white md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Ready for a next step
          </div>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em]">
            Turn your answers into a plan.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href="/create-a-will"
            label="Create a will"
            className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31]"
          />
          <ButtonLink
            href="/find-an-attorney"
            label="Find an attorney"
            style="secondary"
            className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
          />
        </div>
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">
        Tools are educational only. They do not provide legal advice and do not save your answers.
      </p>
    </div>
  )
}
function ToolFallback() {
  return <div className="min-h-[32rem] animate-pulse rounded-[2rem] bg-[#eef5f0]" aria-busy />
}
