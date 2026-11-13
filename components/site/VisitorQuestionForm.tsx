'use client'

import type {VisitorQuestionCopy} from '@/sanity/lib/visitorQuestionCopy'
import {useRef, useState, type FormEvent} from 'react'

export function VisitorQuestionForm({copy}: {copy: VisitorQuestionCopy}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const question = useRef<HTMLTextAreaElement>(null)
  const submitting = useRef(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const [emailLink, setEmailLink] = useState('')

  async function sendQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return
    const field = question.current
    if (!field) return
    const message = field.value.trim()
    if (!message) {
      field.setCustomValidity(copy.emptyQuestion)
      field.reportValidity()
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') ?? '').trim()
    submitting.current = true
    setStatus('sending')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, question: message, website: data.get('website')}),
      })
      if (!response.ok) throw new Error('Visitor question delivery failed')
      form.reset()
      setStatus('sent')
    } catch {
      const body = encodeURIComponent(`${message}\r\n\r\nReply email: ${email}`)
      setEmailLink(`mailto:gbruck@wills.com?subject=Wills.com%20visitor%20question&body=${body}`)
      setStatus('failed')
    } finally {
      submitting.current = false
    }
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="visitor-question-dialog"
        onClick={() => dialog.current?.showModal()}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-30 min-h-12 rounded-full border border-white/30 bg-[#071f33] px-5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#173a55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08765c] print:hidden"
      >
        {copy.title}
      </button>
      <dialog
        ref={dialog}
        id="visitor-question-dialog"
        aria-labelledby="visitor-question-title"
        aria-describedby="visitor-question-description"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overscroll-contain rounded-2xl border border-[color:var(--border)] bg-white p-5 text-[color:var(--fg)] shadow-2xl backdrop:bg-[#071f33]/60 sm:p-7 print:hidden"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 id="visitor-question-title" className="text-2xl font-bold leading-tight">
            {copy.title}
          </h2>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label={copy.closeLabel}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-2xl leading-none hover:bg-[#edf5f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#08765c]"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p id="visitor-question-description" className="mb-5 mt-2 text-sm leading-6 text-[#355267]">
          {copy.description}
        </p>
        <form
          action="/api/visitor-question"
          method="post"
          onSubmit={sendQuestion}
          onChange={() => {
            if (status === 'sent' || status === 'failed') setStatus('idle')
          }}
          className="grid gap-4"
        >
          <div hidden>
            <input type="text" name="website" autoComplete="off" tabIndex={-1} />
          </div>
          <label className="grid gap-1.5 text-sm font-semibold">
            {copy.emailLabel}
            <input
              autoFocus
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              required
              readOnly={status === 'sending'}
              className="min-h-12 w-full rounded-lg border border-[#718292] bg-white px-3 py-2 text-base font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#08765c]"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            {copy.questionLabel}
            <textarea
              ref={question}
              name="message"
              rows={4}
              maxLength={3000}
              required
              readOnly={status === 'sending'}
              onChange={(event) => event.currentTarget.setCustomValidity('')}
              className="w-full resize-y rounded-lg border border-[#718292] bg-white px-3 py-2 text-base font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#08765c]"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="min-h-12 justify-self-start rounded-lg bg-[#08765c] px-5 text-sm font-bold text-white transition-colors hover:bg-[#065b48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08765c] disabled:cursor-wait disabled:opacity-70"
          >
            {status === 'sending' ? copy.sending : copy.submitLabel}
          </button>
          {status === 'sent' && (
            <p role="status" className="text-sm text-[#355267]">
              {copy.success}
            </p>
          )}
          {status === 'failed' && (
            <div className="text-sm text-[#355267]">
              <p role="alert">{copy.failure}</p>
              <a href={emailLink} className="font-semibold text-[#08765c] underline">
                {copy.emailFallback}
              </a>
            </div>
          )}
        </form>
      </dialog>
    </>
  )
}
