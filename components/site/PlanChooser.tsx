import {ButtonLink} from '@/components/site/ButtonLink'

const planOptions = [
  {
    title: 'Will Plan',
    description: 'Create a clear will outline, name guardians, and make your wishes known.',
    features: [
      'Name guardians for minor children',
      'Show how your assets are shared',
      'Bring peace of mind to your family',
    ],
    href: '/create-a-will#page-hero',
    cta: 'Create my will  →',
    icon: 'document',
  },
  {
    title: 'Trust Plan',
    description:
      'Explore how a trust can help you protect your assets and provide for your loved ones.',
    features: [
      'Help manage and protect your assets',
      'Provide for your loved ones',
      'Explore options for your unique goals',
    ],
    href: '/trusts#page-hero',
    cta: 'Learn about trusts  →',
    icon: 'shield',
  },
  {
    title: 'Still Deciding?',
    description:
      'Not sure where to start? Answer a few questions to get personalized guidance on what may be right for you.',
    features: [
      'Quick, helpful questions',
      'Learn about your options',
      'Take the next step with confidence',
    ],
    href: '/tools',
    cta: 'Find my starting point  →',
    icon: 'compass',
  },
] as const

function PlanIcon({type}: {type: (typeof planOptions)[number]['icon']}) {
  const className = 'h-9 w-9'

  if (type === 'document') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path d="M6 3h8l4 4v14H6V3Z" strokeWidth="1.7" />
        <path d="M14 3v5h4M9 12h6M9 16h6" strokeWidth="1.7" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path d="M12 3 19 6v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6l7-3Z" strokeWidth="1.7" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" strokeWidth="1.7" />
      <path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" strokeWidth="1.7" />
    </svg>
  )
}

export function PlanChooser() {
  return (
    <section
      aria-labelledby="plan-chooser-title"
      className="rounded-[2rem] bg-[#fbf8f1] px-6 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="plan-chooser-title"
          className="font-serif text-4xl tracking-[-0.045em] text-[#062842] md:text-5xl"
        >
          Start With What Fits Today
        </h2>
        <p className="mt-2 text-lg text-[#547080]">What kind of estate plan are you looking for?</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {planOptions.map((option) => (
          <article
            key={option.title}
            className="flex h-full flex-col rounded-xl border border-[#e0e8e5] bg-white p-6 shadow-[0_12px_30px_rgba(8,35,58,0.06)] md:p-7"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f8f3] text-[#0b987e]">
              <PlanIcon type={option.icon} />
            </span>
            <h3 className="mt-5 font-serif text-3xl tracking-[-0.035em] text-[#062842]">
              {option.title}
            </h3>
            <p className="mt-2 min-h-20 text-sm leading-6 text-[#547080]">{option.description}</p>
            <ul className="mt-5 space-y-3 text-sm leading-5 text-[#385568]">
              {option.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="font-bold text-[#0b987e]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={option.href}
              label={option.cta}
              style={option.title === 'Will Plan' ? 'primary' : 'secondary'}
              className="mt-7 w-full rounded-full"
            />
          </article>
        ))}
      </div>
    </section>
  )
}
