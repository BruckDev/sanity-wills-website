import {ButtonLink} from '@/components/site/ButtonLink'

const planOptions = [
  {
    title: 'Will plan',
    subtitle: 'Put the essentials in place',
    description:
      'Create a straightforward plan that documents your wishes and identifies the people you want to rely on.',
    features: [
      [
        'Select guardians',
        'Identify the people you would want to raise your children if you cannot.',
      ],
      [
        'Decide who receives property',
        'Provide instructions for assets that pass through your will.',
      ],
      ['Appoint an executor', 'Choose someone to handle your estate and follow your directions.'],
    ],
    href: '/create-a-will#page-hero',
    cta: 'Create my will',
    tone: 'will',
  },
  {
    title: 'Trust plan',
    subtitle: 'More flexibility for your future',
    description:
      'Learn how a trust can help you manage assets during your lifetime and provide direction for those you leave behind.',
    features: [
      [
        'Help protect privacy',
        'Properly funded trust assets may avoid the public probate process.',
      ],
      [
        'Create lasting instructions',
        'Set guidelines for how and when assets may be managed or shared.',
      ],
      [
        'Plan for the unexpected',
        'Name a trusted person to oversee trust assets if you become unable to do so.',
      ],
    ],
    href: '/trusts#page-hero',
    cta: 'Learn about trusts',
    tone: 'trust',
  },
  {
    title: 'Still deciding?',
    subtitle: 'Get guidance on where to begin',
    description:
      'Answer a few brief questions about your family, assets, and goals. We’ll point you toward helpful educational information to consider.',
    features: [
      ['About 3 minutes', 'Complete simple questions written in everyday language.'],
      [
        'Understand the differences',
        'See when a will, trust, or more coordinated approach could make sense.',
      ],
      ['Private and free to use', 'Explore your options without creating an account.'],
    ],
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
          Start with what fits today
        </div>
        <h2
          id="plan-chooser-title"
          className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl"
        >
          What kind of estate plan are you looking for?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg md:leading-8">
          Choose the option that best reflects where you are right now. You can review the details
          and make an informed choice as you go.
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

            {'href' in option && 'cta' in option ? (
              <ButtonLink href={option.href} label={`${option.cta} →`} className="mt-7 w-full" />
            ) : null}
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
