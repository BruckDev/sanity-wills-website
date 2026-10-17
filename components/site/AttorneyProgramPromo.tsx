import {getAttorneyProgram} from '@/sanity/lib/attorneyProgram'
import {getDynamicFetchOptions} from '@/sanity/lib/live'
import Link from 'next/link'

export async function AttorneyProgramPromo() {
  const page = await getAttorneyProgram(await getDynamicFetchOptions())
  return (
    <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7">
      <h2 className="font-serif text-3xl text-[color:var(--fg)]">{page.contactPromoTitle}</h2>
      <p className="mt-4 leading-7 text-[color:var(--muted)]">{page.contactPromoCopy}</p>
      <Link
        href="/for-attorneys"
        className="mt-4 inline-flex font-semibold text-[color:var(--accent-strong)] underline"
      >
        {page.contactPromoLabel}
      </Link>
    </article>
  )
}
