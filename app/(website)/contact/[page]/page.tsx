import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

const pageNumbers = Array.from({length: 20}, (_, index) => index + 1)

function getPageNumber(value: string) {
  const pageNumber = Number(value)
  return pageNumbers.includes(pageNumber) ? pageNumber : null
}

export function generateStaticParams() {
  return pageNumbers.map((page) => ({page: String(page)}))
}

export async function generateMetadata({params}: PageProps<'/contact/[page]'>): Promise<Metadata> {
  const {page} = await params
  const pageNumber = getPageNumber(page)

  return pageNumber
    ? {
        title: `Estate planning professionals | ${pageNumber}`,
        description: `Estate planning professionals page ${pageNumber} of ${pageNumbers.length}.`,
      }
    : {}
}

export default async function EstatePlanningProfessionalsPage({
  params,
}: PageProps<'/contact/[page]'>) {
  const {page} = await params
  const pageNumber = getPageNumber(page)

  if (!pageNumber) {
    notFound()
  }

  return (
    <div className="space-y-10 md:space-y-14">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-12 md:py-16">
        <div className="max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Estate planning professionals
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Page {pageNumber}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            Professional resources and partnership information for estate-planning professionals.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white p-7 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Professional pages
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)]">
              Page {pageNumber} of {pageNumbers.length}
            </h2>
          </div>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[color:var(--accent-strong)] underline underline-offset-4"
          >
            Back to Estate Planning Professionals
          </Link>
        </div>
        <nav
          aria-label="Estate planning professional pages"
          className="mt-8 grid grid-cols-5 gap-2 sm:grid-cols-10"
        >
          {pageNumbers.map((number) => {
            const isCurrentPage = number === pageNumber

            return (
              <Link
                key={number}
                href={`/contact/${number}`}
                aria-current={isCurrentPage ? 'page' : undefined}
                className={`rounded-lg border px-3 py-2 text-center text-sm font-semibold transition ${
                  isCurrentPage
                    ? 'border-[#071f33] bg-[#071f33] text-white'
                    : 'border-[color:var(--border)] text-[color:var(--fg)] hover:border-[color:var(--accent)] hover:bg-[#edf4f0]'
                }`}
              >
                {number}
              </Link>
            )
          })}
        </nav>
      </section>
    </div>
  )
}
