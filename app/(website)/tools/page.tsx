import {planningTools} from '@/sanity/lib/estatePlanningContent'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
              Start anywhere
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Private tools that help you prepare.
            </h2>
          </div>
          <span className="text-sm font-semibold text-[color:var(--muted)]">
            No sign-in required
          </span>
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
    </div>
  )
}
