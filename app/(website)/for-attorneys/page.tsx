import {AttorneyContactForm} from '@/components/site/AttorneyContactForm'
import {ButtonLink} from '@/components/site/ButtonLink'
import {getAttorneyProgram} from '@/sanity/lib/attorneyProgram'
import {
  attorneyProgramContent,
  type AttorneyProgramContent,
} from '@/sanity/lib/attorneyProgramContent'
import {getDynamicFetchOptions, type DynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import {stegaClean} from 'next-sanity'
import {draftMode} from 'next/headers'
import Link from 'next/link'
import {Suspense} from 'react'

export const metadata: Metadata = {
  title: 'For Attorneys / Advertise — Founding Attorney Program',
  description:
    'Join the Wills.com Founding Attorney Program. $29.99/month for the first 100 firms, or $99/month with video or featured educational content. Fixed-fee, labeled advertising.',
  alternates: {canonical: 'https://wills.com/for-attorneys'},
}

export default async function ForAttorneysPage() {
  const {isEnabled} = await draftMode()
  return isEnabled ? (
    <Suspense fallback={<ProgramPage page={attorneyProgramContent} />}>
      <DynamicProgram />
    </Suspense>
  ) : (
    <CachedProgram perspective="published" stega={false} />
  )
}

async function DynamicProgram() {
  return <CachedProgram {...await getDynamicFetchOptions()} />
}

async function CachedProgram(options: DynamicFetchOptions) {
  'use cache'
  return <ProgramPage page={await getAttorneyProgram(options)} />
}

function httpsLink(value: string) {
  const clean = stegaClean(value)
  try {
    return new URL(clean).protocol === 'https:' ? clean : undefined
  } catch {
    return undefined
  }
}

function ProgramPage({page}: {page: AttorneyProgramContent}) {
  const callUrl = httpsLink(page.callUrl)
  return (
    <div className="space-y-14 pb-10 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-12 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          {page.eyebrow}
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.045em] md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3" data-program-cta="hero">
              <ButtonLink href="#apply" label={page.applyLabel} />
              <ButtonLink
                href={callUrl || stegaClean(page.callEmail)}
                label={callUrl ? page.callLabel : page.callFallbackLabel}
                style="secondary"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/[0.06] p-7 md:p-9">
            <p className="text-sm font-semibold text-[color:var(--accent)]">{page.badge}</p>
            <p className="mt-6 font-serif text-7xl tracking-[-0.05em]">
              {page.plans[0]?.price}
              <span className="ml-2 font-sans text-base tracking-normal text-white/75">
                {page.monthlyLabel}
              </span>
            </p>
            <p className="mt-3 text-lg">{page.plans[0]?.name}</p>
            <p className="mt-6 border-t border-white/20 pt-5 text-sm leading-6 text-white/75">
              {page.termsLine}
            </p>
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-28">
        <h2 className="font-serif text-4xl tracking-[-0.035em] md:text-5xl">{page.plansTitle}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
          {page.plansIntro}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {page.plans.map((plan, index) => {
            const checkout = httpsLink(plan.checkoutUrl)
            return (
              <article
                key={index}
                className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-white p-7 md:p-9"
              >
                <h3 className="font-serif text-3xl">{plan.name}</h3>
                <p className="mt-5 font-serif text-6xl tracking-[-0.04em]">
                  {plan.price}
                  <span className="ml-2 font-sans text-sm tracking-normal text-[color:var(--muted)]">
                    {page.monthlyLabel}
                  </span>
                </p>
                <p className="mt-4 leading-7 text-[color:var(--muted)]">{plan.description}</p>
                <ul className="mb-8 mt-6 flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-6">
                      <span
                        aria-hidden="true"
                        className="font-bold text-[color:var(--accent-strong)]"
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div data-program-cta={`plan-${index}`}>
                  <ButtonLink
                    href={checkout || '#apply'}
                    label={checkout ? page.payLabel : page.payFallbackLabel}
                    style={index ? 'secondary' : 'primary'}
                    className="w-full"
                  />
                </div>
              </article>
            )
          })}
        </div>
        <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">{page.paymentNote}</p>
      </section>

      <section className="rounded-[2rem] border border-[color:var(--border)] bg-[#eaf3f6] p-7 md:p-10">
        <h2 className="font-serif text-3xl tracking-[-0.035em] md:text-4xl">
          {page.coverageTitle}
        </h2>
        <p className="mt-5 max-w-4xl leading-8 text-[color:var(--muted)]">{page.coverageCopy}</p>
        <p className="mt-5 max-w-4xl border-t border-[#cbdce3] pt-5 text-sm leading-6 text-[color:var(--muted)]">
          {page.launchNote}
        </p>
      </section>

      <section
        id="sample-report"
        className="scroll-mt-28 rounded-[2rem] border border-[color:var(--border)] bg-white p-6 md:p-10"
      >
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
          {page.reportEyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-5xl">
          {page.reportTitle}
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-[color:var(--muted)]">{page.reportIntro}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.reportMetrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-xl border border-[color:var(--border)] bg-[#f7fafc] p-5"
            >
              <dt className="text-sm font-semibold">{metric.label}</dt>
              <dd className="mt-3 font-serif text-4xl">{metric.value}</dd>
              <dd className="mt-3 text-xs leading-5 text-[color:var(--muted)]">{metric.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm leading-6 text-[color:var(--muted)]">{page.reportNote}</p>
      </section>

      <section>
        <h2 className="font-serif text-4xl tracking-[-0.035em] md:text-5xl">{page.processTitle}</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {page.steps.map((step, i) => (
            <li key={i} className="border-t border-[color:var(--border-strong)] pt-6">
              <span className="text-sm font-bold text-[color:var(--accent-strong)]">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="how-listings-work" className="scroll-mt-28">
        <h2 className="font-serif text-4xl tracking-[-0.035em] md:text-5xl">
          {page.policiesTitle}
        </h2>
        <div className="mt-7 divide-y divide-[color:var(--border)] rounded-2xl border border-[color:var(--border)] bg-white px-6 md:px-8">
          {page.policies.map((policy, i) => (
            <details key={i} className="py-6" open={i === 0}>
              <summary className="cursor-pointer text-lg font-semibold">{policy.title}</summary>
              <p className="mt-4 max-w-4xl leading-8 text-[color:var(--muted)]">{policy.copy}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 rounded-[2rem] bg-[#071f33] p-6 md:p-10">
        <h2 className="font-serif text-4xl tracking-[-0.035em] text-white">
          {page.applicationTitle}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/80">{page.applicationCopy}</p>
        <div className="mt-7">
          <AttorneyContactForm copy={page.form} />
        </div>
        <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/80">
          <Link href="/privacy" className="underline">
            {page.privacyLabel}
          </Link>
          <Link href="/contact" className="underline">
            {page.contactLabel}
          </Link>
        </div>
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">{page.disclaimer}</p>
    </div>
  )
}
