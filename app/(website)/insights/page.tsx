import {ButtonLink} from '@/components/site/ButtonLink'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Estate-planning articles',
  description:
    'Attorney-informed educational articles about wills, trusts, and estate-planning decisions.',
}

export default function InsightsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="rounded-[2rem] border border-[#d5d7cb] bg-[#eef1e8] px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Wills.com journal
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-[color:var(--fg)] md:text-7xl">
            Better questions make for better planning conversations.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            Our editorial library is being built for clear, attorney-informed explanations of
            estate-planning concepts. Articles will identify their author and the jurisdictional
            context they address.
          </p>
        </div>
      </section>
      <section className="grid gap-7 overflow-hidden rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            A common planning question
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Avoid probate when possible.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Probate can add time cost and public records to a difficult moment. Learn when a living
            trust or other planning choices may help your loved ones reduce delays and keep more of
            your affairs private.
          </p>
          <div className="mt-7">
            <ButtonLink href="/trusts" label="Learn about trusts and probate" />
          </div>
        </div>
        <div className="rounded-2xl border border-[#cbdce3] bg-white p-6 md:p-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            Start with the right questions
          </div>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-[color:var(--fg)]">
            <li className="border-t border-[#d6e2e8] pt-4">
              What property may need a different ownership or beneficiary arrangement?
            </li>
            <li className="border-t border-[#d6e2e8] pt-4">
              Who should manage property for the people you love?
            </li>
            <li className="border-t border-[#d6e2e8] pt-4">
              Which choices need state-specific legal advice?
            </li>
          </ul>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Coming soon
          </div>
          <h2 className="mt-5 font-serif text-3xl text-[color:var(--fg)]">
            How beneficiary designations fit into an estate plan
          </h2>
          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            A practical look at why account forms, ownership, and estate documents need to be
            reviewed together.
          </p>
        </article>
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Coming soon
          </div>
          <h2 className="mt-5 font-serif text-3xl text-[color:var(--fg)]">
            Choosing an executor or trustee
          </h2>
          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            Questions to consider before asking someone to take on a fiduciary role.
          </p>
        </article>
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Coming soon
          </div>
          <h2 className="mt-5 font-serif text-3xl text-[color:var(--fg)]">
            When it is time to revisit your plan
          </h2>
          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            Life events and legal changes that should prompt a conversation with an adviser.
          </p>
        </article>
      </section>
      <section className="rounded-2xl bg-[#173f36] px-7 py-10 text-white md:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5ca8c]">
            For legal professionals
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em]">
            Interested in contributing?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            We welcome original, public-facing educational content from attorney offices. Help
            readers understand a topic without turning a general article into individualized legal
            advice.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="/contact"
              label="Share an article idea"
              className="border-[#e7d2a1] bg-[#e7d2a1] !text-[#123c34] hover:bg-[#f3e5c7]"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
