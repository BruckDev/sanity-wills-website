'use client'

import type {PlanningWorksheet as WorksheetContent} from '@/sanity/lib/planningWorksheets'
import {useState} from 'react'

type Status = '' | 'done' | 'follow-up' | 'not-applicable'
type Answer = {status: Status; notes: string}

export function PlanningWorksheet({
  content,
  title,
  slug,
}: {
  content: WorksheetContent
  title: string
  slug: string
}) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const labels = {
    '': content.unansweredLabel,
    'done': content.doneLabel,
    'follow-up': content.followUpLabel,
    'not-applicable': content.notApplicableLabel,
  }
  const reviewed = content.questions.filter((question) => answers[question._key]?.status).length
  function update(key: string, patch: Partial<Answer>) {
    setAnswers((current) => ({
      ...current,
      [key]: {...{status: '' as Status, notes: ''}, ...current[key], ...patch},
    }))
  }
  function download() {
    const lines = [
      title,
      content.summaryTitle,
      `${content.progressLabel}: ${reviewed} / ${content.questions.length}`,
      '',
      ...content.questions.flatMap((question) => [
        question.prompt,
        labels[answers[question._key]?.status || ''],
        question.help,
        answers[question._key]?.notes || '',
        '',
      ]),
      content.nextSteps,
      '',
      content.disclaimer,
    ]
    const url = URL.createObjectURL(
      new Blob([lines.join('\n')], {type: 'text/plain;charset=utf-8'}),
    )
    const link = document.createElement('a')
    link.href = url
    link.download = `${slug}-summary.txt`
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return (
    <section className="planning-worksheet space-y-8" aria-labelledby="worksheet-title">
      <div className="max-w-3xl">
        <h2 id="worksheet-title" className="font-serif text-3xl tracking-tight md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 leading-7 text-[color:var(--muted)]">{content.intro}</p>
        <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]" data-print-hidden>
          {content.privacyNote}
        </p>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-5" data-print-hidden>
          {content.questions.map((question, index) => (
            <fieldset
              key={question._key}
              className="min-w-0 rounded-2xl border border-[color:var(--border)] bg-white p-5 md:p-7"
            >
              <legend className="sr-only">{question.prompt}</legend>
              <h3 className="font-serif text-2xl">
                <span className="mr-3 text-[color:var(--accent-strong)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {question.prompt}
              </h3>
              <p
                id={`${question._key}-help`}
                className="mt-3 text-sm leading-6 text-[color:var(--muted)]"
              >
                {question.help}
              </p>
              <label
                className="mt-5 block text-sm font-semibold"
                htmlFor={`${question._key}-status`}
              >
                {content.statusLabel}
              </label>
              <select
                id={`${question._key}-status`}
                aria-describedby={`${question._key}-help`}
                className="mt-2 min-h-12 w-full rounded-lg border border-[color:var(--border)] bg-white px-3 text-base"
                value={answers[question._key]?.status || ''}
                onChange={(event) => update(question._key, {status: event.target.value as Status})}
              >
                {Object.entries(labels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <label
                className="mt-4 block text-sm font-semibold"
                htmlFor={`${question._key}-notes`}
              >
                {content.notesLabel}
              </label>
              <textarea
                id={`${question._key}-notes`}
                rows={3}
                maxLength={2000}
                className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-white p-3 text-base"
                value={answers[question._key]?.notes || ''}
                onChange={(event) => update(question._key, {notes: event.target.value})}
              />
            </fieldset>
          ))}
        </div>
        <aside className="worksheet-summary rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 lg:sticky lg:top-28">
          <h3 className="font-serif text-2xl">{content.summaryTitle}</h3>
          <p className="mt-4 text-sm" role="status">
            {content.progressLabel}:{' '}
            <strong>
              {reviewed} / {content.questions.length}
            </strong>
          </p>
          <progress
            className="mt-3 h-2 w-full accent-[color:var(--accent-strong)]"
            value={reviewed}
            max={content.questions.length}
            aria-label={content.progressLabel}
          />
          <div className="mt-6 flex flex-col gap-3" data-print-hidden>
            <button
              type="button"
              className="min-h-12 rounded-lg bg-[#071f33] px-4 py-3 text-sm font-semibold text-white hover:bg-[#123852]"
              onClick={() => window.print()}
            >
              {content.printLabel}
            </button>
            <button
              type="button"
              className="min-h-12 rounded-lg border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold hover:bg-[color:var(--surface)]"
              onClick={download}
            >
              {content.downloadLabel}
            </button>
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {content.questions.map((question) => (
              <li key={question._key}>
                <p className="font-semibold">{question.prompt}</p>
                <p className="mt-1 text-[color:var(--muted)]">
                  {labels[answers[question._key]?.status || '']}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">{content.nextSteps}</p>
        </aside>
      </div>
      <div className="worksheet-print-answers hidden">
        {content.questions.map((question) => (
          <section key={question._key} className="mb-6">
            <h3 className="font-semibold">{question.prompt}</h3>
            <p>{labels[answers[question._key]?.status || '']}</p>
            <p className="mt-2 text-sm">{question.help}</p>
            <p className="mt-3 whitespace-pre-wrap break-words">
              {content.notesLabel}: {answers[question._key]?.notes || '\n\n'}
            </p>
          </section>
        ))}
      </div>
      <p className="text-sm leading-6 text-[color:var(--muted)]">{content.disclaimer}</p>
    </section>
  )
}
