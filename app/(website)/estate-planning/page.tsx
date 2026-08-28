import {ButtonLink} from '@/components/site/ButtonLink'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

const checklist = [
  'A current list of assets, debts, business interests, and digital accounts',
  'Account titles and beneficiary designations for retirement, insurance, and transfer-on-death accounts',
  'Names and contact details for potential executors, trustees, guardians, agents, and backups',
  'Questions about family circumstances, prior marriages, blended families, dependents, and charitable goals',
  'Existing estate-planning documents and any property agreements',
  'A plan for storing originals and telling the right people how to find them',
]
export const metadata: Metadata = {
  title: 'Estate-planning checklist',
  description: 'A practical checklist to help you prepare for an estate-planning conversation.',
}

export default function EstatePlanningPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="overflow-hidden rounded-[2rem] border border-[#d5d7cb] bg-[#eef1e8] px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Estate-planning checklist
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-[color:var(--fg)] md:text-7xl">
            Arrive prepared. Leave with better questions.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            Preparation can make a conversation with an estate-planning attorney more focused. This
            checklist is a starting point—not a substitute for legal advice or a complete list for
            every family.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/create-a-will" label="Start a will outline" />
            <ButtonLink href="/find-an-attorney" label="Find an attorney" style="secondary" />
          </div>
        </div>
      </section>
      <section className="space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            The foundation
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            A will and a trust solve different problems.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            For many plans, the question is not “will or trust?” A well-considered plan can use a
            will as a safety net and a trust where ongoing management, privacy, or a more tailored
            distribution plan is useful.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/wills"
            className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#eaf3f6]">
              <Image
                src="/images/estate-planning/will-document.png"
                alt="Will and testament document with a pen"
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 24rem, 100vw"
              />
            </div>
            <div className="p-7">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Wills
              </div>
              <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                Give clear directions.
              </h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">
                Name an executor, nominate guardians for minor children, and direct probate assets
                to the people or causes you choose.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">
                Read the will guide →
              </span>
            </div>
          </Link>
          <Link
            href="/trusts"
            className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[#eef5f7] shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#dce9e7] p-3">
              <Image
                src="/images/estate-planning/family-protection.png"
                alt="A family, home, and savings protected beneath an umbrella"
                fill
                className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 24rem, 100vw"
              />
            </div>
            <div className="p-7">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Trusts
              </div>
              <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                Set terms for stewardship.
              </h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">
                A trust can hold property for beneficiaries and spell out how a trustee manages or
                distributes it under the terms you establish.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">
                Read the trust guide →
              </span>
            </div>
          </Link>
          <Link
            href="#checklist"
            className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#edf4f0] p-3">
              <Image
                src="/images/estate-planning/estate-planning-overview.png"
                alt="Estate planning overview showing wills, trusts, probate, powers of attorney, and health-care directives"
                fill
                className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 100vw"
              />
            </div>
            <div className="p-7">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Estate planning
              </div>
              <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                See the whole picture.
              </h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">
                Bring your will, trust, powers of attorney, health-care wishes, and other decisions
                into one coordinated plan.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">
                Use the planning checklist →
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/estate-planning/family-estate-checklist.png"
            alt="Family estate-planning checklist with a will and trust included"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Start with a clear picture
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">
            Bring your family assets and goals into focus.
          </h2>
          <p className="mt-5 leading-8 text-[color:var(--muted)]">
            A simple inventory gives your attorney a more useful starting point and helps make sure
            no important account, property interest, or person is overlooked.
          </p>
        </div>
      </section>
      <section id="checklist" className="grid scroll-mt-32 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Before you begin
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">
            Gather information then prioritize the decisions.
          </h2>
          <p className="mt-5 leading-7 text-[color:var(--muted)]">
            You do not need every answer before meeting an attorney. A clear snapshot of your
            assets, people, and concerns gives the conversation a useful starting place.
          </p>
        </div>
        <ol className="grid gap-4">
          {checklist.map((item, index) => (
            <li
              key={item}
              className="flex gap-5 rounded-xl border border-[color:var(--border)] bg-white p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5eee2] text-sm font-bold text-[#176648]">
                {index + 1}
              </span>
              <span className="pt-1 leading-7 text-[color:var(--fg)]">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/estate-planning/family-legacy.png"
            alt="A multigenerational family spending time together outdoors"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Planning for people
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Your estate plan is about the people who count on you.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            A thoughtful plan can help you name the people you trust, care for different
            generations, and leave clearer instructions during an already difficult time.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d7d8ca] bg-[#f8f7f0] p-7 md:p-10">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Questions to ask a professional
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <p className="leading-7 text-[color:var(--muted)]">
            What documents are appropriate for my family and goals under this state’s laws? How will
            my assets actually pass at death or incapacity?
          </p>
          <p className="leading-7 text-[color:var(--muted)]">
            What must be done after documents are signed—such as updating titles, beneficiary
            designations, or records? When should the plan be reviewed?
          </p>
        </div>
        <div className="mt-8">
          <ButtonLink href="/wills" label="Review wills" />
          <ButtonLink href="/trusts" label="Review trusts" style="secondary" className="ml-3" />
        </div>
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">
        This material is educational and may not address all relevant issues. Consult a qualified
        attorney licensed in your state and a tax professional where appropriate.
      </p>
    </div>
  )
}
