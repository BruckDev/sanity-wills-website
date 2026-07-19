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

  return (
    <header className="sticky top-0 z-40 border-b border-[#d9d8cb] bg-[#fbfbf6]/95 text-[color:var(--fg)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-4 md:px-8 lg:px-12">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="font-serif text-3xl tracking-[-0.06em] text-[#173f36]">Wills<span className="text-[#8a6d38]">.com</span></span>
          <span className="sr-only">Wills.com</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href || '/'} className="text-sm font-semibold text-[#334d43] hover:text-[#0c6b49]">{item.label}</Link>)}
          <Link href="/estate-planning" className="rounded-lg bg-[#173f36] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0c6b49]">Start planning</Link>
        </nav>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#c8cec1] text-[#173f36] lg:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          <span className="text-xl" aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>
      {open ? <nav aria-label="Mobile navigation" className="border-t border-[#d9d8cb] bg-[#fbfbf6] px-4 py-5 lg:hidden"><div className="mx-auto grid max-w-7xl gap-4"><>{navigation.map((item) => <Link key={item.href} href={item.href || '/'} className="text-base font-semibold text-[#334d43]" onClick={() => setOpen(false)}>{item.label}</Link>)}</><Link href="/estate-planning" className="mt-2 rounded-lg bg-[#173f36] px-4 py-3 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>Start planning</Link></div></nav> : null}
    </header>
  )
}
