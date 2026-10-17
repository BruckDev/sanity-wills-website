import {getAttorneyProgram} from '@/sanity/lib/attorneyProgram'
import {getDynamicFetchOptions, type DynamicFetchOptions} from '@/sanity/lib/live'
import {draftMode} from 'next/headers'
import Link from 'next/link'
import {Suspense} from 'react'

type PolicyKind = 'terms' | 'editorial' | 'listings'

export async function ProgramPolicyPage({kind}: {kind: PolicyKind}) {
  const {isEnabled} = await draftMode()
  return isEnabled ? (
    <Suspense fallback={null}>
      <DynamicPolicy kind={kind} />
    </Suspense>
  ) : (
    <CachedPolicy kind={kind} perspective="published" stega={false} />
  )
}

async function DynamicPolicy({kind}: {kind: PolicyKind}) {
  return <CachedPolicy kind={kind} {...await getDynamicFetchOptions()} />
}

async function CachedPolicy({kind, ...options}: DynamicFetchOptions & {kind: PolicyKind}) {
  'use cache'
  const page = await getAttorneyProgram(options)
  const copy = page.trustPages
  const title =
    kind === 'terms'
      ? copy.termsTitle
      : kind === 'editorial'
        ? copy.editorialTitle
        : copy.listingsTitle
  const sections =
    kind === 'terms'
      ? [...copy.termsSections, page.policies[3]]
      : kind === 'editorial'
        ? [page.policies[2]]
        : [page.policies[0], page.policies[1], page.policies[4]]
  return (
    <article className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-[color:var(--border)] bg-white p-6 md:p-12">
      <h1 className="font-serif text-5xl tracking-[-0.035em]">{title}</h1>
      <p className="text-sm text-[color:var(--muted)]">{copy.updated}</p>
      {sections.filter(Boolean).map((section, i) => (
        <section key={i}>
          {i === 0 && kind !== 'terms' ? null : (
            <h2 className="font-serif text-3xl">{section.title}</h2>
          )}
          <p className="mt-4 leading-8 text-[color:var(--muted)]">{section.copy}</p>
        </section>
      ))}
      <Link
        href="/contact"
        className="inline-flex font-semibold text-[color:var(--accent-strong)] underline"
      >
        {page.contactLabel}
      </Link>
    </article>
  )
}
