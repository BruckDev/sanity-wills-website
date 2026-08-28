'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

type LinkItem = {label?: string | null; href?: string | null}
type SiteHeaderProps = {
  brandEyebrow?: string | null
  siteTitle?: string | null
  navigation?: LinkItem[] | null
}

export function SiteHeader({navigation = []}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const navItems = navigation || []

  function isCurrent(href?: string | null) {
    if (!href) return false
    return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
  }

  return (
    <header className="sticky top-0 z-40 select-none border-b border-[#dce6ec] bg-white/95 text-[color:var(--fg)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[96rem] items-center justify-between gap-5 px-4 py-4 md:px-8 md:py-5 lg:px-12">
        <Link href="/" className="cursor-pointer shrink-0" onClick={() => setOpen(false)}>
          <span className="font-serif text-4xl tracking-[-0.06em] text-[#071f33] md:text-[2.65rem]">
            Wills<span className="text-[color:var(--accent)]">.com</span>
          </span>
          <span className="sr-only">Wills.com</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1.5 min-[1400px]:flex">
          {navItems.map((item) => {
            const active = isCurrent(item.href)

            return (
              <Link
                key={item.href}
                href={item.href || '/'}
                aria-current={active ? 'page' : undefined}
                className={`cursor-pointer rounded-md border-b-2 px-2.5 py-2.5 text-base font-semibold transition ${
                  active
                    ? 'border-[color:var(--accent)] bg-[#eaf6f1] text-[#0b6246]'
                    : 'border-transparent text-[#173a55] hover:bg-[#f1f6f8] hover:text-[#0b6246]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/find-an-attorney"
            aria-current={isCurrent('/find-an-attorney') ? 'page' : undefined}
            className={`w-56 cursor-pointer rounded-lg border-2 px-5 py-2.5 text-center text-base font-semibold leading-snug transition ${
              isCurrent('/find-an-attorney')
                ? 'border-[#075f43] bg-[#dff3ea] text-[#075f43]'
                : 'border-[color:var(--accent)] bg-[color:var(--accent)] text-[#061e31] hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)] hover:text-[#061e31]'
            }`}
          >
            Find an estate planning professional
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-[#cbdbe4] text-[#071f33] hover:bg-[#f1f6f8] min-[1400px]:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-2xl" aria-hidden="true">
            {open ? '×' : '☰'}
          </span>
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#dce6ec] bg-white px-4 py-5 min-[1400px]:hidden"
        >
          <div className="mx-auto grid max-w-[96rem] gap-4">
            <>
              {navItems.map((item) => {
                const active = isCurrent(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href || '/'}
                    aria-current={active ? 'page' : undefined}
                    className={`cursor-pointer rounded-lg border-l-4 px-4 py-3 text-lg font-semibold ${
                      active
                        ? 'border-[color:var(--accent)] bg-[#eaf6f1] text-[#0b6246]'
                        : 'border-transparent text-[#173a55] hover:bg-[#f1f6f8]'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </>
            <Link
              href="/find-an-attorney"
              aria-current={isCurrent('/find-an-attorney') ? 'page' : undefined}
              className={`mt-2 cursor-pointer rounded-lg border-2 px-4 py-3.5 text-center text-lg font-semibold ${
                isCurrent('/find-an-attorney')
                  ? 'border-[#075f43] bg-[#dff3ea] text-[#075f43]'
                  : 'border-[color:var(--accent)] bg-[color:var(--accent)] text-[#061e31]'
              }`}
              onClick={() => setOpen(false)}
            >
              Find an estate planning professional
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
