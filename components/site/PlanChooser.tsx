import {ButtonLink} from '@/components/site/ButtonLink'

const planOptions = [
  {
    title: 'Will plan',
    subtitle: 'Cover the essentials',
    description:
      'Create a practical foundation for recording your wishes and naming the people you trust.',
    features: [
      ['Nominate guardians', 'State who you would want to care for minor children.'],
      ['Name who inherits', 'Direct property that is handled through your will.'],
      ['Choose an executor', 'Name someone to carry out your instructions.'],
    ],
    href: '/create-a-will',
    cta: 'Start my will',
    tone: 'will',
  },
  {
    title: 'Trust plan',
    subtitle: 'Add privacy and control',
    description:
      'Explore a more flexible way to manage property for yourself and the people you care about.',
    features: [
      ['Plan for privacy', 'A funded trust can keep certain transfers outside public probate.'],
      ['Set terms over time', 'Guide how and when property is managed or distributed.'],
      ['Prepare for incapacity', 'Choose who can manage trust assets if needed.'],
    ],
    href: '/trusts',
    cta: 'Explore trusts',
    badge: 'Added privacy & control',
    tone: 'trust',
  },
  {
    title: 'Not sure?',
    subtitle: 'Find your starting point',
    description:
      'Answer a few simple questions about your family, property, and priorities. We will suggest educational topics to explore next.',
    features: [
      ['Takes about 3 minutes', 'Move through clear, plain-language questions.'],
      ['Compare your options', 'See where a will, trust, or coordinated plan may fit.'],
      ['No sign-in required', 'Use the free tool privately and at your own pace.'],
    ],
    href: '/tools/will-or-trust',
    cta: 'Take the free quiz',
    tone: 'quiz',
  },
] as const

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path d="m8 12.2 2.5 2.5 5.5-5.6" strokeWidth="1.8" />
    </svg>
  )
}

export function PlanChooser() {
  return (
    <section
      aria-labelledby="plan-chooser-title"
      className="rounded-[2rem] border border-[#d6e2db] bg-[#f6f4ed] px-5 py-10 sm:px-7 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
          Choose your starting point
        </div>
        <h2
          id="plan-chooser-title"
          className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl"
        >
          Which plan do you need?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg md:leading-8">
          Start with the path that feels closest to your needs. You can always learn more before
          making a decision.
        </p>
      </div>

      <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 min-[900px]:grid-cols-3">
        {planOptions.map((option) => (
          <article
            key={option.title}
            className={`relative flex h-full flex-col rounded-[1.4rem] border bg-white p-6 shadow-[0_14px_34px_rgba(8,35,58,0.06)] sm:last:col-span-2 md:p-7 min-[900px]:last:col-span-1 ${
              option.tone === 'trust'
                ? 'border-2 border-[color:var(--accent)]'
                : option.tone === 'quiz'
                  ? 'border-[#dbcac6] bg-[#fbf6f4]'
                  : 'border-[color:var(--border)]'
            }`}
          >
            {'badge' in option ? (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#071f33] px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                {option.badge}
              </div>
            ) : null}

            <div className="border-b border-[#d6e2e8] pb-5 text-center">
              <h3 className="font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)]">
                {option.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[color:var(--accent-strong)]">
                {option.subtitle}
              </p>
            </div>

            <p className="mt-5 leading-7 text-[color:var(--muted)]">{option.description}</p>

            <ul className="mt-5 space-y-4">
              {option.features.map(([title, detail]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[color:var(--accent)]">
                    <CheckIcon />
                  </span>
                  <span>
                    <span className="block font-semibold text-[color:var(--fg)]">{title}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-[color:var(--muted)]">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <ButtonLink href={option.href} label={`${option.cta} →`} className="mt-7 w-full" />
          </article>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-[color:var(--muted)]">
        These paths provide general educational information. A licensed attorney can help you choose
        documents for your state and circumstances.
      </p>
    </section>
  )
}
