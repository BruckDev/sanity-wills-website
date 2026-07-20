'use client'

import {useMemo, useState} from 'react'

type Answers = {
  fullName: string
  state: string
  zip: string
  executor: string
  alternateExecutor: string
  guardian: string
  primaryBeneficiary: string
  alternateBeneficiary: string
  distributionNotes: string
  specificGifts: string
  attorneyQuestions: string
}

const initialAnswers: Answers = {
  fullName: '',
  state: '',
  zip: '',
  executor: '',
  alternateExecutor: '',
  guardian: '',
  primaryBeneficiary: '',
  alternateBeneficiary: '',
  distributionNotes: '',
  specificGifts: '',
  attorneyQuestions: '',
}

const steps = [
  ['About you', 'Start with the state where you expect to work with an attorney.'],
  ['People you trust', 'Identify the people you may want to discuss as decision-makers.'],
  ['Your distribution plan', 'Capture the people and priorities you want to talk through.'],
  ['Questions for review', 'Flag gifts, family circumstances, and issues for an attorney.'],
]

function Field({label, value, onChange, placeholder, type = 'text', inputMode}: {label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: 'text'; inputMode?: 'numeric'}) {
  return <label className="grid gap-2 text-sm font-semibold text-[color:var(--fg)]"><span>{label}</span><input value={value} onChange={(event) => onChange(event.target.value)} type={type} inputMode={inputMode} placeholder={placeholder} className="min-h-12 rounded-lg border border-[color:var(--border-strong)] bg-white px-4 text-base font-normal text-[color:var(--fg)] outline-none transition placeholder:text-[#778b9a] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]" /></label>
}

function TextArea({label, value, onChange, placeholder}: {label: string; value: string; onChange: (value: string) => void; placeholder?: string}) {
  return <label className="grid gap-2 text-sm font-semibold text-[color:var(--fg)]"><span>{label}</span><textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={4} className="rounded-lg border border-[color:var(--border-strong)] bg-white px-4 py-3 text-base font-normal leading-7 text-[color:var(--fg)] outline-none transition placeholder:text-[#778b9a] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]" /></label>
}

export function WillDraftBuilder() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers)
  const [step, setStep] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [notaryZip, setNotaryZip] = useState('')
  const [notarySearch, setNotarySearch] = useState('')
  const [notaryError, setNotaryError] = useState('')

  const update = (field: keyof Answers) => (value: string) => setAnswers((current) => ({...current, [field]: value}))
  const totalSteps = steps.length
  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(answers.fullName.trim() && answers.state.trim())
    if (step === 1) return Boolean(answers.executor.trim())
    if (step === 2) return Boolean(answers.primaryBeneficiary.trim())
    return true
  }, [answers, step])

  function nextStep() {
    if (!canContinue) return
    if (step === totalSteps - 1) {
      setShowResult(true)
      setNotaryZip(answers.zip)
      return
    }
    setStep((current) => current + 1)
  }

  function searchNotaries() {
    const normalizedZip = notaryZip.trim()
    if (!/^\d{5}$/.test(normalizedZip)) {
      setNotaryError('Enter a five-digit U.S. ZIP code to search for nearby notaries.')
      setNotarySearch('')
      return
    }
    setNotaryError('')
    setNotarySearch(normalizedZip)
  }

  if (showResult) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`notary public near ${notarySearch}`)}`

    return <div className="space-y-10 md:space-y-12">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-10 text-white md:px-10 md:py-12">
        <div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Your attorney-review draft</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] md:text-5xl">A planning outline for {answers.fullName}.</h2><p className="mt-5 text-lg leading-8 text-white/80">Use this summary to organize a conversation with a qualified attorney. It is not a will, cannot be signed as a will, and has no legal effect.</p><div className="mt-7 flex flex-wrap gap-3"><button type="button" onClick={() => window.print()} className="min-h-12 rounded-lg border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#061e31] transition hover:bg-[color:var(--accent-strong)] hover:text-white">Print this outline</button><button type="button" onClick={() => { setShowResult(false); setStep(0) }} className="min-h-12 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">Edit answers</button></div></div>
      </section>

      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white p-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-10">
        <div className="flex flex-col gap-4 border-b border-[color:var(--border)] pb-7 md:flex-row md:items-end md:justify-between"><div><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Sample will outline</div><h3 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">Discussion notes for attorney review</h3></div><p className="text-sm leading-6 text-[color:var(--muted)]">Prepared from answers entered in this browser.</p></div>
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          <section><h4 className="font-serif text-2xl text-[color:var(--fg)]">Personal details</h4><dl className="mt-4 space-y-3 leading-7 text-[color:var(--muted)]"><div><dt className="font-semibold text-[color:var(--fg)]">Name</dt><dd>{answers.fullName}</dd></div><div><dt className="font-semibold text-[color:var(--fg)]">State to discuss with attorney</dt><dd>{answers.state}</dd></div></dl></section>
          <section><h4 className="font-serif text-2xl text-[color:var(--fg)]">People to discuss</h4><dl className="mt-4 space-y-3 leading-7 text-[color:var(--muted)]"><div><dt className="font-semibold text-[color:var(--fg)]">Potential executor</dt><dd>{answers.executor}</dd></div>{answers.alternateExecutor ? <div><dt className="font-semibold text-[color:var(--fg)]">Potential alternate executor</dt><dd>{answers.alternateExecutor}</dd></div> : null}{answers.guardian ? <div><dt className="font-semibold text-[color:var(--fg)]">Potential guardian</dt><dd>{answers.guardian}</dd></div> : null}</dl></section>
          <section><h4 className="font-serif text-2xl text-[color:var(--fg)]">Distribution priorities</h4><dl className="mt-4 space-y-3 leading-7 text-[color:var(--muted)]"><div><dt className="font-semibold text-[color:var(--fg)]">Primary person or people to discuss</dt><dd>{answers.primaryBeneficiary}</dd></div>{answers.alternateBeneficiary ? <div><dt className="font-semibold text-[color:var(--fg)]">Alternate person or people</dt><dd>{answers.alternateBeneficiary}</dd></div> : null}{answers.distributionNotes ? <div><dt className="font-semibold text-[color:var(--fg)]">Priorities or distribution notes</dt><dd>{answers.distributionNotes}</dd></div> : null}</dl></section>
          <section><h4 className="font-serif text-2xl text-[color:var(--fg)]">Items for attorney review</h4><dl className="mt-4 space-y-3 leading-7 text-[color:var(--muted)]">{answers.specificGifts ? <div><dt className="font-semibold text-[color:var(--fg)]">Specific gifts or property concerns</dt><dd>{answers.specificGifts}</dd></div> : null}{answers.attorneyQuestions ? <div><dt className="font-semibold text-[color:var(--fg)]">Questions and circumstances</dt><dd>{answers.attorneyQuestions}</dd></div> : null}</dl><p className="mt-4 rounded-xl bg-[#f8f7f0] p-4 text-sm leading-6 text-[color:var(--muted)]">An attorney can help identify missing issues, explain state-specific signing rules, and prepare documents appropriate for your situation.</p></section>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-10">
        <div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Nearby notary search</div><h3 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">Find notary options near you.</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Use a ZIP code to open a nearby-notary search. Whether notarization is needed, and what signing steps apply, depends on your state and the document your attorney prepares.</p></div>
        <div className="mt-7 flex max-w-2xl flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="notary-zip">ZIP code</label><input id="notary-zip" value={notaryZip} onChange={(event) => setNotaryZip(event.target.value.replace(/\D/g, '').slice(0, 5))} inputMode="numeric" autoComplete="postal-code" placeholder="Enter your ZIP code" className="min-h-12 flex-1 rounded-lg border border-[color:var(--border-strong)] bg-white px-4 text-base text-[color:var(--fg)] outline-none focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]" /><button type="button" onClick={searchNotaries} className="min-h-12 shrink-0 whitespace-nowrap rounded-lg bg-[color:var(--accent)] px-5 text-sm font-semibold text-[#061e31] transition hover:bg-[color:var(--accent-strong)] hover:text-white">Search notaries</button></div>
        {notaryError ? <p className="mt-3 text-sm font-medium text-[#a73a22]" role="alert">{notaryError}</p> : null}
        {notarySearch ? <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 items-center rounded-lg border border-[#071f33] bg-[#071f33] px-5 text-sm font-semibold text-white transition hover:bg-[#173a55]">View notaries near {notarySearch}</a> : null}
      </section>

      <p className="text-sm leading-6 text-[color:var(--muted)]">For privacy, answers remain in this browser unless you choose to print them. Wills.com does not receive or store this information. This tool is educational only and does not create a will, attorney-client relationship, or legal advice.</p>
    </div>
  }

  return <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
    <aside className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_12px_32px_rgba(8,35,58,0.05)] lg:sticky lg:top-24"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Your progress</div><ol className="mt-5 grid gap-4">{steps.map(([title], index) => <li key={title} className={`flex items-center gap-3 text-sm ${index === step ? 'font-semibold text-[color:var(--fg)]' : index < step ? 'text-[color:var(--accent-strong)]' : 'text-[color:var(--muted)]'}`}><span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${index === step ? 'bg-[#071f33] text-white' : index < step ? 'bg-[color:var(--accent)] text-[#071f33]' : 'bg-[#eaf3f6] text-[color:var(--muted)]'}`}>{index + 1}</span>{title}</li>)}</ol><p className="mt-7 border-t border-[color:var(--border)] pt-5 text-sm leading-6 text-[color:var(--muted)]">Your answers are not saved to Wills.com.</p></aside>
    <section className="rounded-[2rem] border border-[color:var(--border)] bg-white p-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-10"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Step {step + 1} of {totalSteps}</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">{steps[step][0]}</h2><p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted)]">{steps[step][1]}</p>
      <div className="mt-8 grid gap-5">{step === 0 ? <><Field label="Your full name" value={answers.fullName} onChange={update('fullName')} placeholder="Name to discuss with your attorney" /><Field label="State" value={answers.state} onChange={update('state')} placeholder="For example, Illinois" /><Field label="ZIP code (optional for now)" value={answers.zip} onChange={(value) => update('zip')(value.replace(/\D/g, '').slice(0, 5))} placeholder="60606" inputMode="numeric" /></> : null}{step === 1 ? <><Field label="Potential executor" value={answers.executor} onChange={update('executor')} placeholder="Person you may want to discuss" /><Field label="Potential alternate executor" value={answers.alternateExecutor} onChange={update('alternateExecutor')} placeholder="Optional backup" /><Field label="Potential guardian for minor children" value={answers.guardian} onChange={update('guardian')} placeholder="Leave blank if not applicable" /></> : null}{step === 2 ? <><Field label="Primary person or people to receive property" value={answers.primaryBeneficiary} onChange={update('primaryBeneficiary')} placeholder="Names and relationship" /><Field label="Alternate person or people" value={answers.alternateBeneficiary} onChange={update('alternateBeneficiary')} placeholder="Optional backups" /><TextArea label="Priorities or distribution notes" value={answers.distributionNotes} onChange={update('distributionNotes')} placeholder="For example, equal shares, a family home, or considerations to discuss" /></> : null}{step === 3 ? <><TextArea label="Specific gifts or property concerns" value={answers.specificGifts} onChange={update('specificGifts')} placeholder="Optional: items, charitable goals, businesses, pets, or property questions" /><TextArea label="Questions or circumstances for your attorney" value={answers.attorneyQuestions} onChange={update('attorneyQuestions')} placeholder="Optional: blended-family concerns, past documents, special needs, beneficiary forms, or anything else to review" /><div className="rounded-xl border border-[#d7d8ca] bg-[#f8f7f0] p-5 text-sm leading-6 text-[color:var(--muted)]"><strong className="text-[color:var(--fg)]">Before creating your outline:</strong> This tool creates discussion notes only. Do not sign or use the result as a will. A qualified attorney should prepare or review legal documents and explain the required signing process in your state.</div></> : null}</div>
      <div className="mt-9 flex items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6"><button type="button" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0} className="min-h-12 rounded-lg border border-[color:var(--border-strong)] px-5 text-sm font-semibold text-[color:var(--fg)] transition hover:border-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-40">Back</button><button type="button" onClick={nextStep} disabled={!canContinue} className="min-h-12 rounded-lg bg-[color:var(--accent)] px-5 text-sm font-semibold text-[#061e31] transition hover:bg-[color:var(--accent-strong)] hover:text-white disabled:cursor-not-allowed disabled:opacity-40">{step === totalSteps - 1 ? 'Create my draft outline' : 'Continue'}</button></div>
    </section>
  </div>
}
