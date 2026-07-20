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
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-[#071f33] bg-[#071f33] px-6 py-10 text-white shadow-[0_28px_70px_rgba(7,31,51,0.24)] md:px-12 md:py-12 lg:px-16">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#00bb78]/25" />
        <div className="absolute bottom-0 right-0 h-72 w-2/3 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,187,120,0.22),transparent_64%)]" />
        <div className="relative">
          <div className="mx-auto max-w-4xl translate-y-3 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Estate planning, made clearer</div>
            <h1 className="mt-4 font-serif text-4xl leading-[0.97] tracking-[-0.045em] md:text-6xl xl:text-7xl">
              Make your wishes easier to carry out
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              Wills.com is a practical starting point for understanding wills, trusts, and the decisions that help protect the people and work that matter to you.
            </p>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.22)]"><Image src="/images/estate-planning/hero-family-young.png" alt="A young family spending time together outdoors" fill priority className="object-cover" sizes="(min-width: 1280px) 18rem, (min-width: 768px) 25vw, 30vw" /></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.22)]"><Image src="/images/estate-planning/hero-family-couple.png" alt="A couple enjoying time together outdoors" fill priority className="object-cover" sizes="(min-width: 1280px) 18rem, (min-width: 768px) 25vw, 30vw" /></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.22)]"><Image src="/images/estate-planning/hero-family-grandparent.png" alt="A multigenerational family spending time together" fill priority className="object-cover" sizes="(min-width: 1280px) 18rem, (min-width: 768px) 25vw, 30vw" /></div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/wills" label="Learn about wills" className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white" />
              <ButtonLink href="/trusts" label="Explore trusts" className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white" />
              <ButtonLink href="/find-an-attorney" label="Find professionals near me" className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white" />
            </div>
          </div>
          <aside className="mt-8 -translate-y-3">
            <div><div className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Start with these questions</div>
              <ul className="mt-4 grid gap-3 text-left text-sm leading-6 text-white/85 md:grid-cols-3 md:gap-4 [&_li]:!rounded-2xl [&_li]:!border [&_li]:!border-white/15 [&_li]:!bg-white/[0.07] [&_li]:!p-4 md:[&_li]:!min-h-40">
                <li className="border-t border-white/15 pt-5 first:border-0 first:pt-0">Who should receive your property—and who should receive it if they cannot?</li>
                <li className="border-t border-white/15 pt-5">Who do you trust to handle money, paperwork, and decisions?</li>
                <li className="border-t border-white/15 pt-5">What needs special care: children, a home, a business, pets, or a loved one with disabilities?</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">The foundation</div>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">A will and a trust solve different problems.</h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">For many plans, the question is not “will or trust?” A well-considered plan can use a will as a safety net and a trust where ongoing management, privacy, or a more tailored distribution plan is useful.</p>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/wills" className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]">
            <div className="relative -mx-7 -mt-7 mb-7 aspect-[16/10] overflow-hidden rounded-t-2xl"><Image src="/images/estate-planning/will-document.png" alt="Will and testament document with a pen" fill className="object-cover" sizes="(min-width: 640px) 24rem, 100vw" /></div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Wills</div>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">Give clear directions.</h3>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">Name an executor, nominate guardians for minor children, and direct probate assets to the people or causes you choose.</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">Read the will guide →</span>
          </Link>
          <Link href="/trusts" className="group rounded-2xl border border-[color:var(--border)] bg-[#eef5f7] p-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]">
            <div className="relative -mx-7 -mt-7 mb-7 aspect-[16/10] overflow-hidden rounded-t-2xl"><Image src="/images/estate-planning/family-protection.png" alt="A family, home, and savings protected beneath an umbrella" fill className="object-cover" sizes="(min-width: 640px) 24rem, 100vw" /></div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Trusts</div>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">Set terms for stewardship.</h3>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">A trust can hold property for beneficiaries and spell out how a trustee manages or distributes it under the terms you establish.</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">Read the trust guide →</span>
          </Link>
          <Link href="/estate-planning" className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]">
            <div className="relative -mx-7 -mt-7 mb-7 aspect-[16/10] overflow-hidden rounded-t-2xl"><Image src="/images/estate-planning/estate-planning-overview.png" alt="Estate planning overview showing wills, trusts, probate, powers of attorney, and health-care directives" fill className="object-cover object-center" sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 100vw" /></div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Estate planning</div>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">See the whole picture.</h3>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">Bring your will, trust, powers of attorney, health-care wishes, and other decisions into one coordinated plan.</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent)] group-hover:underline">Use the planning checklist →</span>
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white md:grid md:grid-cols-2">
        <div className="relative min-h-72"><Image src="/images/estate-planning/tax-planning.png" alt="Tax and estate-planning paperwork with a calculator" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div>
        <div className="p-7 md:p-10"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">A coordinated conversation</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">Bring the right advisers into the room.</h2><p className="mt-5 leading-8 text-[color:var(--muted)]">Legal, tax, insurance, and financial considerations can overlap. A qualified attorney can help determine when other professionals should be part of the planning process.</p><div className="mt-7"><ButtonLink href="/find-an-attorney" label="Find an adviser near you" className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white" /></div></div>
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

      <section className="grid gap-8 rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">For attorneys and firms</div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.035em] md:text-5xl">Share useful guidance with people who are ready to plan.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">We are building an editorial home for attorney-reviewed articles and practical explanations. Help readers understand the questions to ask before they seek legal advice.</p>
        </div>
        <div className="lg:justify-self-end"><ButtonLink href="/contact" label="Contribute an article" className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white" /></div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-6 md:p-10 lg:p-12">
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

      <section className="border-t border-[color:var(--border)] pt-8 text-sm leading-6 text-[color:var(--muted)]">
        <strong className="font-semibold text-[color:var(--fg)]">Important:</strong> Wills.com provides general educational information, not legal, tax, or financial advice. Reading this site does not create an attorney-client relationship. Consult a licensed professional in your state about your circumstances.
      </section>
    </div>
  )
}
