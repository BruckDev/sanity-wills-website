import {
  attorneyProgramContent,
  type AttorneyProgramContent,
} from '@/sanity/lib/attorneyProgramContent'
import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter({program = attorneyProgramContent}: {program?: AttorneyProgramContent}) {
  return (
    <footer className="mt-0 border-t border-[#dce7e4] bg-white text-[#173a55]">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-7">
          <Link href="/" aria-label="Wills.com home" className="shrink-0">
            <Image src="/brand/wills-logo.png" alt="" width={180} height={56} className="h-auto w-36" />
          </Link>
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
            <Link href="/for-attorneys" className="hover:text-[#0b987e]">
              {program.eyebrow}
            </Link>
            <Link href="/privacy" className="hover:text-[#0b987e]">
              {program.privacyLabel}
            </Link>
            <Link href="/terms" className="hover:text-[#0b987e]">
              {program.trustPages.termsTitle}
            </Link>
            <Link href="/editorial-policy" className="hover:text-[#0b987e]">
              {program.trustPages.editorialTitle}
            </Link>
            <Link href="/how-listings-work" className="hover:text-[#0b987e]">
              {program.trustPages.listingsTitle}
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
