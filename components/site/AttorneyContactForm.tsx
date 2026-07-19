'use client'

import {type FormEvent, useState} from 'react'

type FormValues = {
  firmName: string
  contactName: string
  email: string
  phone: string
  message: string
}

const initialValues: FormValues = {firmName: '', contactName: '', email: '', phone: '', message: ''}

export function AttorneyContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({...current, [field]: value}))
    setErrors((current) => ({...current, [field]: undefined}))
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof FormValues, string>> = {}

    if (!values.firmName.trim()) nextErrors.firmName = 'Enter your firm name.'
    if (!values.contactName.trim()) nextErrors.contactName = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Enter a valid email address.'
    if (!values.phone.trim()) nextErrors.phone = 'Enter a phone number.'
    if (!values.message.trim()) nextErrors.message = 'Tell us a little about your firm or inquiry.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const body = [
      `Firm: ${values.firmName.trim()}`,
      `Contact: ${values.contactName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      '',
      'Message:',
      values.message.trim(),
    ].join('\n')

    window.location.href = `mailto:partnerships@wills.com?subject=${encodeURIComponent(`Wills.com attorney inquiry — ${values.firmName.trim()}`)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Firm name" name="firmName" value={values.firmName} onChange={updateValue} error={errors.firmName} />
        <Field label="Your name" name="contactName" value={values.contactName} onChange={updateValue} error={errors.contactName} />
        <Field label="Email" name="email" type="email" value={values.email} onChange={updateValue} error={errors.email} />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={updateValue} error={errors.phone} />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[color:var(--fg)]" htmlFor="message">Tell us about your firm or inquiry</label>
        <textarea id="message" name="message" rows={7} value={values.message} onChange={(event) => updateValue('message', event.target.value)} className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[color:var(--fg)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)] ${errors.message ? 'border-red-500' : 'border-[color:var(--border-strong)]'}`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
      </div>
      <div>
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#061e31] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]">Submit inquiry</button>
        {submitted ? <p role="status" className="mt-3 text-sm leading-6 text-[color:var(--muted)]">Your email application should now be open with your inquiry addressed to partnerships@wills.com.</p> : null}
      </div>
    </form>
  )
}

function Field({label, name, type = 'text', value, onChange, error}: {label: string; name: keyof FormValues; type?: string; value: string; onChange: (field: keyof FormValues, value: string) => void; error?: string}) {
  const id = name
  const errorId = `${id}-error`

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[color:var(--fg)]" htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} value={value} onChange={(event) => onChange(name, event.target.value)} className={`min-h-12 w-full rounded-lg border bg-white px-4 py-3 text-sm text-[color:var(--fg)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)] ${error ? 'border-red-500' : 'border-[color:var(--border-strong)]'}`} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
      {error ? <p id={errorId} className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  )
}
