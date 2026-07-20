import {AttorneyZipSearch} from '@/components/site/AttorneyZipSearch'
import {ButtonLink} from '@/components/site/ButtonLink'
import {lifeEvents, planningTools} from '@/sanity/lib/estatePlanningContent'
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

const heroPaths = [
  {
    label: 'Protect your children',
    detail: 'Choose who would care for them.',
    href: '/life-events/new-parents',
  },
  {label: 'Protect your home', detail: 'Clarify where it should go.', href: '/trusts'},
  {
    label: 'Avoid family conflict',
    detail: 'Leave clear directions behind.',
    href: '/estate-planning',
  },
  {
    label: 'Protect your wishes',
    detail: 'Choose trusted decision makers.',
    href: '/find-an-attorney',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-20 pb-8 md:space-y-28">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-[#071f33] bg-[#071f33] px-5 py-7 text-white shadow-[0_28px_70px_rgba(7,31,51,0.24)] sm:px-8 md:px-12 md:py-12 lg:px-14 lg:py-14">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#00bb78]/25" />
        <div className="absolute bottom-0 right-0 h-72 w-2/3 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,187,120,0.22),transparent_64%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Estate planning, made clearer
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-[0.98] tracking-[-0.045em] md:text-6xl xl:text-7xl">
            If something happened tomorrow would your family know what to do?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Create a will protect your children and make your wishes clear. Start your estate plan
            in minutes or connect with an estate-planning attorney near you.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href="/create-a-will"
              label="Create my will"
              className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white"
            />
            <ButtonLink
              href="/find-an-attorney"
              label="Find an estate-planning attorney"
              style="secondary"
              className="!border-white/35 !bg-white !text-[#071f33] hover:!border-white hover:!bg-white/90"
            />
          </div>
        </div>
        <div className="relative mx-auto mt-10 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroPaths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group flex min-h-32 flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-left transition hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-white/[0.1]"
            >
              <span>
                <span className="block text-lg font-semibold tracking-[-0.02em]">{path.label}</span>
                <span className="mt-1 block text-sm text-white/70">{path.detail}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="relative mx-auto mt-3 grid max-w-6xl grid-cols-3 gap-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/estate-planning/hero-family-couple.png"
              alt="A couple enjoying time together outdoors"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 22rem, 30vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/estate-planning/hero-family-young.png"
              alt="A young family spending time together outdoors"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 22rem, 30vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/estate-planning/hero-family-grandparent.png"
              alt="A multigenerational family spending time together"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 22rem, 30vw"
            />
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white px-6 py-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:px-8 md:py-8">
        <div className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
          Start with these questions
        </div>
        <ul className="mt-5 grid gap-4 text-left text-sm leading-6 text-[color:var(--muted)] md:grid-cols-3">
          <li className="border-t-2 border-[#b8cdb6] pt-4">
            Who should receive your property—and who should receive it if they cannot?
          </li>
          <li className="border-t-2 border-[#b8cdb6] pt-4">
            Who do you trust to handle money, paperwork, and decisions?
          </li>
          <li className="border-t-2 border-[#b8cdb6] pt-4">
            What needs special care: children, a home, a business, pets, or a loved one with
            disabilities?
          </li>
        </ul>
      </section>

      <section className="rounded-[2rem] border border-[#b8cdb6] bg-[#eef5f0] p-7 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              When life changes
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              A new chapter is a reason to check your plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              A new child home marriage business retirement or health change can alter the people
              and decisions your plan should protect.
            </p>
          </div>
          <ButtonLink href="/life-events" label="Explore life events" />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lifeEvents.slice(0, 4).map((event) => (
            <Link
              key={event.slug}
              href={`/life-events/${event.slug}`}
              className="group rounded-xl border border-[#cbdce3] bg-white p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {event.eyebrow}
              </div>
              <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
                {event.title}
              </h3>
              <span className="mt-4 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Find your next step →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
          <ButtonLink href="/tools" label="Browse free tools" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {planningTools.slice(0, 3).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_35px_rgba(8,35,58,0.05)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {tool.eyebrow}
                </div>
                <span className="text-xs font-semibold text-[color:var(--muted)]">{tool.time}</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
                {tool.title}
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{tool.summary}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
                Use the free tool →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Attorney directory
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Find estate-planning guidance near you.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[color:var(--muted)]">
            Search by ZIP code to see attorney profiles as firms join the Wills.com directory.
          </p>
          <Link
            href="/find-an-attorney"
            className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] underline decoration-[color:var(--accent)] underline-offset-4 hover:text-[color:var(--fg)]"
          >
            How the directory works →
          </Link>
        </div>
        <div className="rounded-2xl bg-[#071f33] p-5 text-white md:p-6">
          <div className="relative aspect-[16/6] overflow-hidden rounded-xl border border-white/15">
            <Image
              src="/images/estate-planning/attorney-directory-team.png"
              alt="Estate-planning attorneys"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <div className="mt-5 text-sm font-semibold text-white">Search by ZIP code</div>
          <AttorneyZipSearch />
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
            href="/estate-planning"
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

      <section className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white md:grid md:grid-cols-2">
        <div className="relative min-h-72">
          <Image
            src="/images/estate-planning/tax-planning.png"
            alt="Tax and estate-planning paperwork with a calculator"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="p-7 md:p-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            A coordinated conversation
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">
            Bring the right advisers into the room.
          </h2>
          <p className="mt-5 leading-8 text-[color:var(--muted)]">
            Legal, tax, insurance, and financial considerations can overlap. A qualified attorney
            can help determine when other professionals should be part of the planning process.
          </p>
          <div className="mt-7">
            <ButtonLink
              href="/find-an-attorney"
              label="Find an adviser near you"
              className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white"
            />
          </div>
        </div>
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
          <div className="mt-7">
            <ButtonLink href="/estate-planning" label="See the planning checklist" />
          </div>
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
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
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

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Wills.com journal
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Helpful guides for the questions ahead.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              Explore practical, attorney-informed topics designed to make your next step easier to
              understand.
            </p>
          </div>
          <ButtonLink href="/insights" label="Browse articles" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Link
            href="/insights"
            className="group rounded-2xl border border-[#d6e2e8] bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Guide
            </div>
            <h3 className="mt-4 font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
              How a will fits into a plan
            </h3>
            <p className="mt-3 leading-7 text-[color:var(--muted)]">
              Start with the role a will can play when documenting directions and naming key people.
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
              Explore the topic →
            </span>
          </Link>
          <Link
            href="/insights"
            className="group rounded-2xl border border-[#d6e2e8] bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Guide
            </div>
            <h3 className="mt-4 font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
              Questions to ask about trusts
            </h3>
            <p className="mt-3 leading-7 text-[color:var(--muted)]">
              Understand the decisions that may matter when property needs stewardship over time.
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
              Explore the topic →
            </span>
          </Link>
          <Link
            href="/insights"
            className="group rounded-2xl border border-[#d6e2e8] bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Guide
            </div>
            <h3 className="mt-4 font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
              Preparing for an attorney meeting
            </h3>
            <p className="mt-3 leading-7 text-[color:var(--muted)]">
              Bring the right people, documents, and questions into the conversation.
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] group-hover:underline">
              Explore the topic →
            </span>
          </Link>
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            For attorneys and firms
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.035em] md:text-5xl">
            Share useful guidance with people who are ready to plan.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            We are building an editorial home for attorney-reviewed articles and practical
            explanations. Help readers understand the questions to ask before they seek legal
            advice.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <ButtonLink
            href="/contact"
            label="Contribute an article"
            className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white"
          />
        </div>
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
            className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-white"
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

      <section className="border-t border-[color:var(--border)] pt-8 text-sm leading-6 text-[color:var(--muted)]">
        <strong className="font-semibold text-[color:var(--fg)]">Important:</strong> Wills.com
        provides general educational information, not legal, tax, or financial advice. Reading this
        site does not create an attorney-client relationship. Consult a licensed professional in
        your state about your circumstances.
      </section>
    </div>
  )
}
