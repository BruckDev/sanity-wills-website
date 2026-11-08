'use client'

import {useMemo, useState} from 'react'

type ToolKind = 'readiness' | 'will-trust' | 'calculator' | 'guide'

const readinessPrompts = [
  'I have a current will or trust.',
  'I have chosen people to make financial and health-care decisions if needed.',
  'My beneficiary designations are up to date.',
  'The people close to me know where to find important records.',
  'I have reviewed my plan after a major life change.',
]

export function PlanningToolExperience({kind}: {kind: ToolKind}) {
  const [checks, setChecks] = useState<string[]>([])
  const [estateValue, setEstateValue] = useState('')
  const [debts, setDebts] = useState('')
  const [dependents, setDependents] = useState('')
  const [answers, setAnswers] = useState<Record<string, boolean>>({})

  const netValue = useMemo(
    () => Math.max(0, Number(estateValue || 0) - Number(debts || 0)),
    [debts, estateValue],
  )
  const answered = Object.keys(answers).length
  const needsConversation = [answers.children, answers.privacy, answers.management].filter(
    Boolean,
  ).length

  if (kind === 'guide') {
    return (
      <div className="rounded-2xl border border-[#d6e2e8] bg-[#f7fafc] p-6 md:p-8">
        <h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
          Use this as a conversation starter.
        </h2>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-[color:var(--fg)]">
          {[
            'Write down your key people and their contact details',
            'List accounts property policies and digital access information',
            'Note questions for an estate-planning attorney',
            'Set a date to review the list with the people you trust',
          ].map((item) => (
            <li key={item} className="rounded-xl border border-[#d6e2e8] bg-white px-5 py-4">
              <span className="mr-2 font-bold text-[color:var(--accent-strong)]">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-[color:var(--muted)]">
          This free guide is educational and does not create legal advice or an attorney-client
          relationship.
        </p>
      </div>
    )
  }

  if (kind === 'calculator') {
    return (
      <div className="rounded-2xl border border-[#d6e2e8] bg-[#f7fafc] p-6 md:p-8">
        <h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
          Start with a simple snapshot.
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <NumberField
            id="assets"
            label="Estimated assets"
            value={estateValue}
            onChange={setEstateValue}
          />
          <NumberField id="debts" label="Estimated debts" value={debts} onChange={setDebts} />
          <NumberField
            id="dependents"
            label="People who depend on you"
            value={dependents}
            onChange={setDependents}
          />
        </div>
        <div className="mt-7 rounded-2xl bg-[#071f33] p-6 text-white">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Estimated net value
          </div>
          <div className="mt-2 font-serif text-5xl tracking-[-0.04em]">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            }).format(netValue)}
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
            This is a planning prompt not a legal valuation.{' '}
            {Number(dependents || 0) > 0
              ? 'Because others depend on you consider who would have authority and clear instructions.'
              : 'Add the people who depend on you to make the prompt more personal.'}
          </p>
        </div>
      </div>
    )
  }

  if (kind === 'will-trust') {
    const prompts: Array<[keyof typeof answers, string]> = [
      ['children', 'Do you want to set directions for children or younger beneficiaries?'],
      ['privacy', 'Is privacy or ongoing property management important to you?'],
      ['management', 'Do you have property or a business that may need continued management?'],
    ]
    return (
      <div className="rounded-2xl border border-[#d6e2e8] bg-[#f7fafc] p-6 md:p-8">
        <h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
          Explore the questions behind the choice.
        </h2>
        <div className="mt-6 space-y-4">
          {prompts.map(([key, prompt]) => (
            <div key={key} className="rounded-xl border border-[#d6e2e8] bg-white p-5">
              <p className="font-semibold leading-6 text-[color:var(--fg)]">{prompt}</p>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setAnswers((current) => ({...current, [key]: true}))}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold ${answers[key] === true ? 'bg-[#071f33] text-white' : 'border border-[#cbdce3] text-[color:var(--fg)]'}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setAnswers((current) => ({...current, [key]: false}))}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold ${answers[key] === false ? 'bg-[#071f33] text-white' : 'border border-[#cbdce3] text-[color:var(--fg)]'}`}
                >
                  Not sure
                </button>
              </div>
            </div>
          ))}
        </div>
        {answered === prompts.length ? (
          <div className="mt-6 rounded-2xl border border-[#b8cdb6] bg-[#eef5f0] p-5 text-[color:var(--fg)]">
            <strong>
              {needsConversation > 0
                ? 'A coordinated will and trust conversation may be useful.'
                : 'A will may be a useful place to begin.'}
            </strong>
            <p className="mt-2 text-sm leading-6">
              Your answers do not determine a legal solution. They help you prepare a more focused
              conversation with a qualified attorney.
            </p>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[#d6e2e8] bg-[#f7fafc] p-6 md:p-8">
      <h2 className="font-serif text-3xl tracking-[-0.03em] text-[color:var(--fg)]">
        See what is already in place.
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-[color:var(--muted)]">
        Choose each statement that is true today. This is a private planning prompt and nothing is
        saved.
      </p>
      <div className="mt-6 space-y-3">
        {readinessPrompts.map((prompt) => (
          <label
            key={prompt}
            className="flex cursor-pointer gap-3 rounded-xl border border-[#d6e2e8] bg-white p-5 text-sm font-medium leading-6 text-[color:var(--fg)]"
          >
            <input
              type="checkbox"
              checked={checks.includes(prompt)}
              onChange={() =>
                setChecks((current) =>
                  current.includes(prompt)
                    ? current.filter((item) => item !== prompt)
                    : [...current, prompt],
                )
              }
              className="mt-1 h-4 w-4 accent-[#00a86b]"
            />
            {prompt}
          </label>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-[#071f33] p-5 text-white">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
          Your starting point
        </div>
        <p className="mt-2 font-serif text-3xl tracking-[-0.03em]">
          {checks.length} of {readinessPrompts.length} foundations in place
        </p>
        <p className="mt-2 text-sm leading-6 text-white/75">
          {checks.length >= 4
            ? 'You have a strong base. A regular review can help keep it current.'
            : 'A short list of next steps can make the process feel much more manageable.'}
        </p>
      </div>
    </div>
  )
}

function NumberField({
  id,
  label,
  value,
  onChange,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[color:var(--fg)]" htmlFor={id}>
      {label}
      <input
        id={id}
        type="number"
        min="0"
        inputMode="numeric"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="0"
        className="min-h-12 rounded-lg border border-[#cbdce3] bg-white px-4 font-medium outline-none transition focus:border-[color:var(--accent-strong)] focus:ring-2 focus:ring-[color:var(--accent)]"
      />
    </label>
  )
}
