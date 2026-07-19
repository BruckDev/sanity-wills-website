'use client'

import Link from 'next/link'
import {useState} from 'react'

type LinkItem = {label?: string | null; href?: string | null}
type SiteHeaderProps = {
  brandEyebrow?: string | null
  siteTitle?: string | null
  navigation?: LinkItem[] | null
}

export function SiteHeader({navigation = []}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const navItems = navigation || []

  return (
    <header className="sticky top-0 z-40 border-b border-[#dce6ec] bg-white/95 text-[color:var(--fg)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-4 md:px-8 lg:px-12">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="font-serif text-3xl tracking-[-0.06em] text-[#071f33]">Wills<span className="text-[color:var(--accent)]">.com</span></span>
          <span className="sr-only">Wills.com</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => <Link key={item.href} href={item.href || '/'} className="text-sm font-semibold text-[#173a55] hover:text-[color:var(--accent-strong)]">{item.label}</Link>)}
          <Link href="/estate-planning" className="rounded-lg bg-[color:var(--accent)] px-4 py-2.5 text-sm font-semibold text-[#061e31] hover:bg-[color:var(--accent-strong)] hover:text-white">Start planning</Link>
        </nav>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#cbdbe4] text-[#071f33] lg:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          <span className="text-xl" aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>
      {open ? <nav aria-label="Mobile navigation" className="border-t border-[#dce6ec] bg-white px-4 py-5 lg:hidden"><div className="mx-auto grid max-w-7xl gap-4"><>{navItems.map((item) => <Link key={item.href} href={item.href || '/'} className="text-base font-semibold text-[#173a55]" onClick={() => setOpen(false)}>{item.label}</Link>)}</><Link href="/estate-planning" className="mt-2 rounded-lg bg-[color:var(--accent)] px-4 py-3 text-center text-sm font-semibold text-[#061e31]" onClick={() => setOpen(false)}>Start planning</Link></div></nav> : null}
    </header>
  )
}
