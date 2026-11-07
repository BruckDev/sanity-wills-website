import {AttorneyContactForm} from '@/components/site/AttorneyContactForm'
import {ButtonLink} from '@/components/site/ButtonLink'
import {getAttorneyProgram} from '@/sanity/lib/attorneyProgram'
import {getDynamicFetchOptions} from '@/sanity/lib/live'
import type {Metadata} from 'next'
import Image from 'next/image'
import {stegaClean} from 'next-sanity'
import {Suspense} from 'react'

export const metadata: Metadata = {
  title: 'Estate planning professionals',
  description:
    'Connect with Wills.com about educational contributions, professional partnerships, and the Founding Attorney Program.',
}

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="grid gap-8 rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-stretch">
        <div className="max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Estate planning professionals
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Help people take the next right step.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            Our valuable domain, Wills.com, has attracted significant attention and growing traffic
            from consumers and professionals seeking reliable estate-planning information. As we
            continue expanding our resources, reach, and expert partnerships, we anticipate even
            greater interest in the months ahead.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            We welcome article submissions from esteemed estate-planning, legal, financial, and
            related industry professionals who would like to be featured on Wills.com. To submit an
            article or ask a question, please contact us at{' '}
            <a
              href="mailto:partnerships@wills.com"
              className="font-semibold text-[color:var(--accent)] underline"
            >
              partnerships@wills.com
            </a>
            .
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-[#0e2e48] lg:min-h-[30rem] lg:aspect-auto">
          <Image
            src="/images/contact/estate-planning-professionals-conference-hero.png"
            alt="Estate-planning professionals attending a conference presentation"
            fill
            priority
            sizes="(min-width: 1024px) 38vw, (min-width: 768px) 42rem, calc(100vw - 3rem)"
            className="object-cover"
          />
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
          <h2 className="font-serif text-3xl text-[color:var(--fg)]">Contribute an article</h2>
          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            Share original, educational content on wills, trusts, probate, incapacity planning, or
            related topics. Articles should clearly state their author, jurisdiction, and date.
          </p>
        </article>
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
          <h2 className="font-serif text-3xl text-[color:var(--fg)]">Build public trust</h2>
          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            Help readers understand the issues that make a professional conversation worthwhile,
            without promising outcomes or offering individualized advice online.
          </p>
        </article>
      </section>

      <Suspense fallback={null}>
        <FoundingProfile />
      </Suspense>

      <section
        id="directory-listing"
        className="scroll-mt-32 rounded-[2rem] border border-[#071f33] bg-[#071f33] p-7 text-white md:p-10"
      >
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Start a conversation
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em]">Tell us about your firm.</h2>
          <p className="mt-4 leading-7 text-white/78">
            Share your contact information, the work your firm does, and how you would like to
            participate in Wills.com.
          </p>
        </div>
        <div className="mt-8">
          <AttorneyContactForm />
        </div>
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">
        Wills.com is an informational publisher and is not a law firm, referral service, or
        substitute for professional advice.
      </p>
    </div>
  )
}

async function FoundingProfile() {
  const page = await getAttorneyProgram(await getDynamicFetchOptions())
  const plan = page.plans[0]
  if (!plan) return null

  let checkout: string | undefined
  try {
    const url = stegaClean(plan.checkoutUrl || '')
    if (new URL(url).protocol === 'https:') checkout = url
  } catch {
    // Use the application form when checkout is unavailable.
  }

  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-[color:var(--border)] bg-white p-7 md:p-9">
      <h2 className="font-serif text-3xl">{plan.name}</h2>
      <p className="mt-5 font-serif text-6xl tracking-[-0.04em]">
        {plan.price}
        <span className="ml-2 font-sans text-sm tracking-normal text-[color:var(--muted)]">
          {page.monthlyLabel}
        </span>
      </p>
      <p className="mt-4 leading-7 text-[color:var(--muted)]">{plan.description}</p>
      <ul className="mb-8 mt-6 space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-sm leading-6">
            <span aria-hidden="true" className="font-bold text-[color:var(--accent-strong)]">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <ButtonLink
        href={checkout || '/for-attorneys#apply'}
        label={checkout ? page.payLabel : page.payFallbackLabel}
        className="w-full"
      />
      <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">{page.paymentNote}</p>
    </section>
  )
}
