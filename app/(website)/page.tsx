import {AttorneyZipSearch} from '@/components/site/AttorneyZipSearch'
import {ButtonLink} from '@/components/site/ButtonLink'
import {PlanChooser} from '@/components/site/PlanChooser'
import Image from 'next/image'
import Link from 'next/link'

type HeroBenefitIcon = 'children' | 'home' | 'guidance' | 'wishes'

const heroPaths: Array<{
  icon: HeroBenefitIcon
  label: string
  detail: string
  href: string
}> = [
  {
    icon: 'children',
    label: 'Protect your children',
    detail: 'Choose the people who will care for them.',
    href: '/life-events/new-parents',
  },
  {
    icon: 'home',
    label: 'Protect your home',
    detail: 'Decide who receives your property.',
    href: '/trusts',
  },
  {
    icon: 'guidance',
    label: 'Reduce family conflict',
    detail: 'Leave clear guidance behind.',
    href: '/estate-planning',
  },
  {
    icon: 'wishes',
    label: 'Make your wishes known',
    detail: 'Choose trusted decision-makers.',
    href: '/find-an-attorney',
  },
]

function HeroBenefitIcon({icon}: {icon: HeroBenefitIcon}) {
  const className = 'h-5 w-5'

  if (icon === 'children') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path
          d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (icon === 'home') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" strokeWidth="1.8" />
        <path d="M9 21v-6h6v6" strokeWidth="1.8" />
      </svg>
    )
  }

  if (icon === 'guidance') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <path
          d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          strokeWidth="1.8"
        />
        <path d="m8.5 12 2.2 2.2 4.8-4.8M9 7h6" strokeWidth="1.8" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" strokeWidth="1.8" />
      <path d="m8.5 12 2.2 2.2 4.8-4.8" strokeWidth="1.8" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-[#102536] bg-[#102536] px-5 py-7 text-[#faf8f5] shadow-[0_28px_70px_rgba(16,37,54,0.24)] sm:px-8 md:px-10 md:py-9 xl:px-14 xl:py-12">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#14a86f]/25" />
        <div className="absolute bottom-0 right-0 h-72 w-2/3 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,168,111,0.22),transparent_64%)]" />
        <div className="relative mx-auto grid max-w-none gap-7 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] md:items-center lg:gap-10">
          <div className="text-left">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#14a86f]">
              Estate planning, made clearer
            </div>
            <h1 className="hero-title mt-4 font-serif">Protect What Matters Most</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#bac7cf] md:text-xl">
              Create a will, protect your family, and make your wishes clear—with guidance that
              meets you where you are.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href="/create-a-will"
                label="Start my will"
                className="hero-button-primary"
              />
            </div>
            <div className="mt-5 max-w-xl border-t border-white/15 pt-4">
              <div className="text-sm font-semibold text-white">
                Find an estate-planning attorney
              </div>
              <AttorneyZipSearch compact redirectOnSubmit />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[#faf8f5]/25 bg-[#eaf2ed] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/estate-planning/hero-protect-what-matters.png"
              alt="A multigenerational family spending time together at home"
              fill
              priority
              className="object-cover object-center opacity-95"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#eaf2ed]/10" />
          </div>
        </div>
        <div className="relative mx-auto mt-5 grid max-w-none gap-1 overflow-hidden rounded-[18px] border border-[#d6e2db] bg-[#eaf2ed] sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          {heroPaths.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className={`group flex items-start gap-3 bg-[#eaf2ed] p-4 text-left transition hover:bg-[#f2e5e3] lg:px-5 ${index > 0 ? 'md:border-l md:border-[#cddbd3]' : ''}`}
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2e5e3] text-[#14a86f]">
                <HeroBenefitIcon icon={path.icon} />
              </span>
              <span>
                <span className="block text-base font-semibold tracking-normal text-[#102536]">
                  {path.label}
                </span>
                <span className="mt-1 block text-sm leading-6 text-[#5a707a] group-hover:text-[#102536]">
                  {path.detail}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl">
        <div
          role="region"
          aria-label="Scrollable will or trust comparison guide"
          tabIndex={0}
          className="overflow-x-auto rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_22px_55px_rgba(8,35,58,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          <Image
            src="/images/home/will-or-trust-simple-guide.png"
            alt="A simple illustrated guide comparing what goes in a will with what a trust can do"
            width={1536}
            height={1024}
            className="h-auto w-full min-w-[40rem] sm:min-w-0"
            sizes="(min-width: 1024px) 56rem, calc(100vw - 2rem)"
          />
        </div>
      </section>

      <PlanChooser />

      <section className="grid gap-6 rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Attorney directory
          </div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
            Find estate-planning guidance near you.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[color:var(--muted)]">
            Search by ZIP code to see attorney profiles as firms join the Wills.com directory.
          </p>
          <Link
            href="/find-an-attorney"
            className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)] underline decoration-[color:var(--accent)] underline-offset-4 hover:text-[color:var(--fg)]"
          >
            How the directory works →
          </Link>
        </div>
        <div className="rounded-2xl bg-[#071f33] p-5 text-white md:p-6">
          <div className="relative aspect-[16/6] overflow-hidden rounded-xl border border-white/15">
            <Image
              src="/images/estate-planning/attorney-directory-team.png"
              alt="Estate-planning attorneys"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <div className="mt-5">
            <ButtonLink
              href="/find-an-attorney"
              label="Open the attorney directory"
              className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!border-[color:var(--accent-strong)] hover:!bg-[color:var(--accent-strong)] hover:!text-[#061e31]"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-10 md:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Estate planning professionals
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.035em] md:text-5xl">
            Share useful guidance with people who are ready to plan.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            We are building an editorial home for attorney-reviewed articles and practical
            explanations. Help readers understand the questions to ask before they seek legal
            advice.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <ButtonLink
            href="/contact"
            label="Contribute an article"
            className="!border-[color:var(--accent)] !bg-[color:var(--accent)] !text-[#061e31] hover:!bg-[color:var(--accent-strong)] hover:!text-[#061e31]"
          />
        </div>
      </section>

      <section className="!mt-10 border-t border-[color:var(--border)] pt-5 text-sm leading-6 text-[color:var(--muted)] md:!mt-12">
        <strong className="font-semibold text-[color:var(--fg)]">Important:</strong> Wills.com
        provides general educational information, not legal, tax, or financial advice. Reading this
        site does not create an attorney-client relationship. Consult a licensed professional in
        your state about your circumstances.
      </section>
    </div>
  )
}
