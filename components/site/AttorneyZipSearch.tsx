'use client'

import {type FormEvent, useState} from 'react'

export function AttorneyZipSearch() {
  const [zip, setZip] = useState('')
  const [submittedZip, setSubmittedZip] = useState<string | null>(null)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedZip = zip.trim()

    if (!/^\d{5}$/.test(normalizedZip)) {
      setError('Enter a five-digit U.S. ZIP code.')
      setSubmittedZip(null)
      return
    }

    setError('')
    setSubmittedZip(normalizedZip)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row" noValidate>
        <label className="sr-only" htmlFor="attorney-zip">ZIP code</label>
        <input
          id="attorney-zip"
          value={zip}
          onChange={(event) => setZip(event.target.value.replace(/\D/g, '').slice(0, 5))}
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="Enter your ZIP code"
          className="min-h-14 flex-1 rounded-lg border border-white/25 bg-white px-5 text-base font-medium text-[#071f33] placeholder:text-[#5d7080] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]"
          aria-describedby={error ? 'attorney-zip-error' : undefined}
        />
        <button type="submit" className="min-h-14 rounded-lg border border-[color:var(--accent)] bg-[color:var(--accent)] px-6 text-sm font-semibold text-[#061e31] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]">Search near me</button>
      </form>
      {error ? <p id="attorney-zip-error" role="alert" className="mt-3 text-sm font-medium text-[#ffcfb4]">{error}</p> : null}
      {submittedZip ? (
        <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.08] p-6" aria-live="polite">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">Results for {submittedZip}</div>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em]">No local attorney profiles are available yet.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/80">We are adding qualified estate-planning firms to Wills.com. Check back soon, or ask a local attorney office to request a directory listing.</p>
          <a href="/contact" className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent)] underline underline-offset-4 hover:text-white">Request a directory listing →</a>
        </div>
      ) : null}
    </div>
  )
}
