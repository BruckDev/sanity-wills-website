import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-[#dce7e4] bg-white text-[#173a55]">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-7">
          <div className="font-serif text-3xl tracking-[-0.06em] text-[#071f33]">
            Wills<span className="text-[color:var(--accent)]">.com</span>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#355267]"
          >
            <Link href="/wills" className="hover:text-[#0b987e]">
              Wills
            </Link>
            <Link href="/trusts" className="hover:text-[#0b987e]">
              Trusts
            </Link>
            <Link href="/estate-planning" className="hover:text-[#0b987e]">
              Estate Planning
            </Link>
            <Link href="/life-events" className="hover:text-[#0b987e]">
              Life Events
            </Link>
            <Link href="/tools" className="hover:text-[#0b987e]">
              Free Tools
            </Link>
            <Link href="/insights" className="hover:text-[#0b987e]">
              Articles
            </Link>
          </nav>
        </div>
        <div className="max-w-sm text-xs leading-5 text-[#718292] md:text-right">
          Wills.com provides general information, not legal advice. Please consult a qualified
          professional for your specific situation.
        </div>
      </div>
      <div className="mx-auto flex max-w-[88rem] flex-col gap-1 border-t border-[#edf1ef] px-5 py-3 text-[11px] text-[#7b8c99] md:flex-row md:items-center md:justify-between md:px-8">
        <span>© {new Date().getFullYear()} Wills.com. All rights reserved.</span>
        <span className="font-serif italic">A more secure future for the people you love.</span>
      </div>
    </footer>
  )
}
