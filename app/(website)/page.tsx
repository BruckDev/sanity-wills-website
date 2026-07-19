import {ButtonLink} from '@/components/site/ButtonLink'
import Link from 'next/link'
import Image from 'next/image'

const planningSteps = [
  ['01', 'Take stock', 'List what you own, what you owe, the people who depend on you, and the accounts that already have beneficiary designations.'],
  ['02', 'Choose people carefully', 'Think through executors, trustees, guardians, health-care decision-makers, and backups. Talk with them before naming them.'],
  ['03', 'Create documents that work together', 'A will, trust, powers of attorney, health-care documents, beneficiary designations, and asset titles can each play a different role.'],
  ['04', 'Keep it current', 'Review after a marriage, divorce, birth, death, move, major purchase, business change, or a meaningful change in the law.'],
]

const consequences = [
  ['State law decides', 'Without a valid will, a state’s intestacy rules generally determine who inherits. Those rules may not match your relationships or intentions.'],
  ['No guardian nomination', 'A court may need to decide who will care for minor children if no legally effective nomination is in place.'],
  ['More pressure on loved ones', 'Family members may need to locate records, open an estate, satisfy creditors, and make difficult choices with less direction.'],
  ['Assets can pass differently', 'Joint ownership, beneficiary designations, and trust-owned property may pass outside a will—sometimes with results that surprise families.'],
]

export default function HomePage() {
  return (
    <div className="space-y-20 pb-8 md:space-y-28">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-[#173f36] bg-[#123c34] px-6 py-14 text-white shadow-[0_28px_70px_rgba(17,55,48,0.24)] md:px-12 md:py-20 lg:px-16">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#e9dcbd]/20" />
        <div className="absolute bottom-0 right-0 h-72 w-2/3 bg-[radial-gradient(ellipse_at_bottom_right,rgba(228,192,111,0.22),transparent_64%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.82fr)] lg:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5ca8c]">Estate planning, made clearer</div>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.97] tracking-[-0.045em] md:text-7xl xl:text-8xl">
              Make your wishes easier to carry out.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Wills.com is a practical starting point for understanding wills, trusts, and the decisions that help protect the people and work that matter to you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/wills" label="Learn about wills" className="border-[#e7d2a1] bg-[#e7d2a1] !text-[#123c34] hover:bg-[#f3e5c7]" />
              <ButtonLink href="/trusts" label="Explore trusts" style="secondary" className="border-white/30 bg-transparent !text-white hover:border-white hover:bg-white/10" />
            </div>
          </div>
          <aside className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-sm">
            <div className="relative aspect-[4/3]"><Image src="/images/estate-planning/advisor-consultation.png" alt="An estate-planning professional meeting with an older couple" fill priority className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" /></div>
            <div className="p-6 md:p-8"><div className="text-xs font-bold uppercase tracking-[0.18em] text-[#e5ca8c]">Start with these questions</div>
              <ul className="mt-6 space-y-5 text-base leading-7 text-white/85">
                <li className="border-t border-white/15 pt-5 first:border-0 first:pt-0">Who should receive your property—and who should receive it if they cannot?</li>
                <li className="border-t border-white/15 pt-5">Who do you trust to handle money, paperwork, and decisions?</li>
                <li className="border-t border-white/15 pt-5">What needs special care: children, a home, a business, pets, or a loved one with disabilities?</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">The foundation</div>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">A will and a trust solve different problems.</h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">For many plans, the question is not “will or trust?” A well-considered plan can use a will as a safety net and a trust where ongoing management, privacy, or a more tailored distribution plan is useful.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Link href="/wills" className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_18px_45px_rgba(29,46,41,0.06)] transition hover:-translate-y-1 hover:border-[#6a927a]">
            <div className="relative -mx-2 -mt-2 mb-6 aspect-[16/9] overflow-hidden rounded-xl"><Image src="/images/estate-planning/will-document.png" alt="Will and testament document with a pen" fill className="object-cover" sizes="(min-width: 640px) 24rem, 100vw" /></div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Wills</div>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">Give clear directions.</h3>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">Name an executor, nominate guardians for minor children, and direct probate assets to the people or causes you choose.</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">Read the will guide →</span>
          </Link>
          <Link href="/trusts" className="group rounded-2xl border border-[color:var(--border)] bg-[#f2f3eb] p-7 shadow-[0_18px_45px_rgba(29,46,41,0.06)] transition hover:-translate-y-1 hover:border-[#6a927a]">
            <div className="relative -mx-2 -mt-2 mb-6 aspect-[16/9] overflow-hidden rounded-xl"><Image src="/images/estate-planning/family-protection.png" alt="A family, home, and savings protected beneath an umbrella" fill className="object-cover" sizes="(min-width: 640px) 24rem, 100vw" /></div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Trusts</div>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">Set terms for stewardship.</h3>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">A trust can hold property for beneficiaries and spell out how a trustee manages or distributes it under the terms you establish.</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">Read the trust guide →</span>
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d7d8ca] bg-[#e9ede1] p-6 md:p-10 lg:p-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Why planning matters</div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">When there is no plan, there is still a process.</h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">The difference is that more of the important choices may be made by default rules, a court, or the practical limits facing the people left behind.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {consequences.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-[#cfd4c4] bg-[#f9faf6] p-6">
              <h3 className="font-serif text-2xl text-[color:var(--fg)]">{title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-7 text-sm leading-6 text-[color:var(--muted)]">Inheritance, probate, guardianship, creditor, tax, and trust rules differ by state and circumstances. A qualified attorney can explain how the rules apply to you.</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/images/estate-planning/family-legacy.png" alt="A multigenerational family spending time together outdoors" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" /></div>
        <div><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Planning for people</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">Your estate plan is about the people who count on you.</h2><p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">A thoughtful plan can help you name the people you trust, care for different generations, and leave clearer instructions during an already difficult time.</p><div className="mt-7"><ButtonLink href="/estate-planning" label="See the planning checklist" /></div></div>
      </section>

      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">A practical path</div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">Planning is a series of decisions, not a single document.</h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {planningSteps.map(([number, title, text]) => (
            <li key={number} className="border-t-2 border-[#b8cdb6] pt-5">
              <div className="text-sm font-bold tracking-[0.15em] text-[color:var(--accent)]">{number}</div>
              <h3 className="mt-3 font-serif text-2xl text-[color:var(--fg)]">{title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white md:grid md:grid-cols-2">
        <div className="relative min-h-72"><Image src="/images/estate-planning/tax-planning.png" alt="Tax and estate-planning paperwork with a calculator" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div>
        <div className="p-7 md:p-10"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">A coordinated conversation</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">Bring the right advisers into the room.</h2><p className="mt-5 leading-8 text-[color:var(--muted)]">Legal, tax, insurance, and financial considerations can overlap. A qualified attorney can help determine when other professionals should be part of the planning process.</p></div>
      </section>

      <section className="grid gap-8 rounded-[2rem] bg-[#173f36] px-6 py-12 text-white md:px-10 md:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5ca8c]">For attorneys and firms</div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.035em] md:text-5xl">Share useful guidance with people who are ready to plan.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">We are building an editorial home for attorney-reviewed articles and practical explanations. Help readers understand the questions to ask before they seek legal advice.</p>
        </div>
        <div className="lg:justify-self-end"><ButtonLink href="/contact" label="Contribute an article" className="border-[#e7d2a1] bg-[#e7d2a1] !text-[#123c34] hover:bg-[#f3e5c7]" /></div>
      </section>

      <section className="border-t border-[color:var(--border)] pt-8 text-sm leading-6 text-[color:var(--muted)]">
        <strong className="font-semibold text-[color:var(--fg)]">Important:</strong> Wills.com provides general educational information, not legal, tax, or financial advice. Reading this site does not create an attorney-client relationship. Consult a licensed professional in your state about your circumstances.
      </section>
    </div>
  )
}
