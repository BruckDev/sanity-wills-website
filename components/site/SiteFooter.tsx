import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-[#102f29] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8 lg:px-12">
        <div><div className="font-serif text-4xl tracking-[-0.06em]">Wills<span className="text-[#e5ca8c]">.com</span></div><p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Clear, thoughtful education for people preparing to make important estate-planning decisions.</p></div>
        <div><div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5ca8c]">Learn</div><div className="mt-5 grid gap-3 text-sm text-white/75"><Link href="/wills" className="hover:text-white">Wills</Link><Link href="/trusts" className="hover:text-white">Trusts</Link><Link href="/estate-planning" className="hover:text-white">Estate-planning checklist</Link><Link href="/insights" className="hover:text-white">Articles</Link></div></div>
        <div><div className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5ca8c]">Work with us</div><div className="mt-5 grid gap-3 text-sm text-white/75"><Link href="/contact" className="hover:text-white">Contribute an article</Link><Link href="/about" className="hover:text-white">About Wills.com</Link><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/accessibility" className="hover:text-white">Accessibility</Link></div></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-4 py-5 text-xs leading-6 text-white/55 md:px-8 lg:px-12">© {new Date().getFullYear()} Wills.com. General information only; not legal, tax, or financial advice. Laws and outcomes vary by jurisdiction and individual circumstances.</div></div>
    </footer>
  )
}
