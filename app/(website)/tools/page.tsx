import {ButtonLink} from '@/components/site/ButtonLink'
import {planningTools} from '@/sanity/lib/estatePlanningContent'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

const planningSteps = [
  [
    '01',
    'Learn the essentials',
    'Start with plain-language guides to the documents and decisions that may be relevant to you.',
  ],
  [
    '02',
    'Find the right conversation',
    'Search for an estate-planning attorney near you when you are ready for guidance about your circumstances.',
  ],
  [
    '03',
    'Prepare with confidence',
    'Gather questions, people, and information so you can make the most of your next planning conversation.',
  ],
]

const consequences = [
  [
    'State law decides',
    'Without a valid will, a state’s intestacy rules generally determine who inherits. Those rules may not match your relationships or intentions.',
  ],
  [
    'No guardian nomination',
    'A court may need to decide who will care for minor children if no legally effective nomination is in place.',
  ],
  [
    'More pressure on loved ones',
    'Family members may need to locate records, open an estate, satisfy creditors, and make difficult choices with less direction.',
  ],
  [
    'Assets can pass differently',
    'Joint ownership, beneficiary designations, and trust-owned property may pass outside a will—sometimes with results that surprise families.',
  ],
]

export const metadata: Metadata = {
  title: 'Free estate planning tools',
  description:
    'Interactive free estate planning quizzes calculators and practical guides from Wills.com.',
}

export default function ToolsPage() {
  return (
    <div className="space-y-14 pb-8 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Free estate planning tools
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-6xl">
            Useful planning help should be easy to start.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Explore a growing library of free quizzes calculators and guides built to turn
            uncertainty into a clearer next step.
          </p>
        </div>
      </section>
      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white px-6 py-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:px-8 md:py-8">
        <div className="text-center text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)] md:text-base">
          Start with these questions
        </div>
        <ul className="mt-5 grid gap-4 text-left text-base leading-7 text-[color:var(--muted)] md:grid-cols-3 md:text-lg">
          <li className="border-t-2 border-[#b8cdb6] pt-4">
            <p>Who should receive your property—and who should receive it if they cannot?</p>
            <Image
              src="/images/home/starting-questions/property.svg"
              alt="A welcoming family home"
              width={800}
              height={640}
              sizes="(min-width: 768px) 30vw, 100vw"
              className="mt-5 aspect-[5/4] w-full rounded-2xl bg-[#f6faf9] object-contain p-2"
            />
          </li>
          <li className="border-t-2 border-[#b8cdb6] pt-4">
            <p>Who do you trust to handle money, paperwork, and decisions?</p>
            <Image
              src="/images/home/starting-questions/special-care.png"
              alt="An estate-planning professional with a checklist and protective shield"
              width={1254}
              height={1254}
              sizes="(min-width: 768px) 30vw, 100vw"
              className="mt-5 aspect-[5/4] w-full rounded-2xl bg-[#f6faf9] object-contain p-2"
            />
          </li>
          <li className="border-t-2 border-[#b8cdb6] pt-4">
            <p>
              What needs special care: children, a home, a business, pets, or a loved one with
              disabilities?
            </p>
            <Image
              src="/images/home/starting-questions/decisions.svg"
              alt="A welcoming family business"
              width={800}
              height={640}
              sizes="(min-width: 768px) 30vw, 100vw"
              className="mt-5 aspect-[5/4] w-full rounded-2xl bg-[#f6faf9] object-contain p-2"
            />
          </li>
        </ul>
      </section>
      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Free planning tools
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              A private place to get clarity before you decide.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              Use free interactive quizzes calculators and guides to organize your thoughts. No
              sign-in required.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {planningTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_14px_35px_rgba(8,35,58,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {tool.eyebrow}
                </div>
                <span className="text-xs font-semibold text-[color:var(--muted)]">{tool.time}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {tool.title}
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{tool.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Open free tool →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            How Wills.com helps
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            A better planning conversation starts here.
          </h2>
        </div>
        <ol className="mt-10 grid list-none gap-5 md:grid-cols-3">
          {planningSteps.map(([number, title, text]) => (
            <li key={number} className="border-t-2 border-[#b8cdb6] pt-5">
              <div className="text-sm font-bold tracking-[0.15em] text-[color:var(--accent)]">
                {number}
              </div>
              <h3 className="mt-3 font-serif text-2xl text-[color:var(--fg)]">{title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[2rem] border border-[#071f33] bg-[#071f33] p-6 text-white md:p-10 lg:p-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Do not leave it to chance
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-5xl">
            What can happen without a will?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            The difference is that more of the important choices may be made by default rules, a
            court, or the practical limits facing the people left behind.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {consequences.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-white/15 bg-white/[0.06] p-6">
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-white/75">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ButtonLink
            href="/create-a-will"
            label="Create my estate plan"
            className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-[#061e31]"
          />
          <ButtonLink
            href="/trusts"
            label="Learn about trusts and probate"
            style="secondary"
            className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
          />
        </div>
        <p className="mt-7 text-sm leading-6 text-white/60">
          Inheritance, probate, guardianship, creditor, tax, and trust rules differ by state and
          circumstances. A qualified attorney can explain how the rules apply to you.
        </p>
      </section>
    </div>
  )
}
