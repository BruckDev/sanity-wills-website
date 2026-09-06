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
    detail: 'Help ensure the people you love are cared for.',
    href: '/life-events/new-parents',
  },
  {
    icon: 'home',
    label: 'Protect your home',
    detail: 'Safeguard what you have worked so hard for.',
    href: '/trusts',
  },
  {
    icon: 'guidance',
    label: 'Reduce family conflict',
    detail: 'Provide clarity today for a more peaceful tomorrow.',
    href: '/estate-planning',
  },
  {
    icon: 'wishes',
    label: 'Make your wishes known',
    detail: 'Ensure your values and wishes are honored.',
    href: '/#attorney-search',
  },
]

const articles = [
  {
    title: 'Will vs. Trust: Which Is Right for Your Family?',
    description: 'Understand the key differences and find the option that may fit your goals.',
    href: '/trusts',
    image: '/images/estate-planning/will-document.png',
    alt: 'A will and testament with a pen',
  },
  {
    title: 'Naming Guardians for Minor Children',
    description: 'Learn what to consider when choosing guardians and making your wishes clear.',
    href: '/life-events/new-parents',
    image: '/images/estate-planning/hero-family-young.png',
    alt: 'A family spending time together outdoors',
  },
  {
    title: 'Estate Planning for New Homeowners',
    description: 'Discover key steps to protect your home and plan for the future.',
    href: '/life-events/new-homeowners',
    image: '/images/home/life-events/new-homeowners.jpg',
    alt: 'A family in front of their home',
  },
]

function HeroBenefitIcon({icon}: {icon: HeroBenefitIcon}) {
  const className = 'h-8 w-8'

  if (icon === 'children') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
      >
        <circle cx="8" cy="8" r="2.5" strokeWidth="1.6" />
        <circle cx="16" cy="8" r="2.5" strokeWidth="1.6" />
        <path
          d="M3.5 19c.4-3 2.2-4.8 4.5-4.8S12.2 16 12.5 19M11.5 19c.4-3 2.2-4.8 4.5-4.8s4.2 1.8 4.5 4.8"
          strokeWidth="1.6"
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
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" strokeWidth="1.6" />
        <path d="M9 21v-6h6v6" strokeWidth="1.6" />
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
          d="M4 11.5 8.3 16l3.2-3.2-4.3-4.5L4 11.5Zm8.5 1.3 3.2 3.2 4.3-4.5-3.2-3.2-4.3 4.5Z"
          strokeWidth="1.6"
        />
        <path d="M9.8 14.5 12 16.7l2.2-2.2M9.8 9.5 12 7.3l2.2 2.2" strokeWidth="1.6" />
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
      <path d="M6 3h9l3 3v15H6V3Z" strokeWidth="1.6" />
      <path d="M15 3v4h4M9 12h6M9 16h6" strokeWidth="1.6" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-14 w-14"
    >
      <path d="M12 21s7-6.2 7-12A7 7 0 1 0 5 9c0 5.8 7 12 7 12Z" strokeWidth="1.7" />
      <circle cx="12" cy="9" r="2.4" strokeWidth="1.7" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <div className="-mt-8 space-y-0 md:-mt-12 lg:-mt-14">
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#e5ece7] bg-[radial-gradient(circle_at_84%_22%,#e2f4ec_0,transparent_26rem),linear-gradient(110deg,#fffcf7_0%,#f8f4ec_54%,#f0faf6_100%)]">
          <div className="mx-auto grid w-full max-w-[88rem] gap-9 px-6 py-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-12 xl:px-16 xl:py-12">
            <div className="max-w-xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#597385]">
                Estate planning, made clearer
              </div>
              <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.055em] text-[#062842] sm:text-6xl md:text-7xl">
                Protect What Matters Most
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#3b596b] md:text-xl">
                Create a will, protect your family, and make your wishes clear—with guidance that
                meets you where you are.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink
                  href="/create-a-will"
                  label="Start my will  →"
                  className="rounded-full px-7"
                />
                <Link
                  href="/find-an-attorney"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#07304d] underline decoration-[#10a88a] decoration-2 underline-offset-4 hover:text-[#0c8b78]"
                >
                  Find an attorney <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[42rem]">
              <div className="absolute -left-5 bottom-2 h-40 w-40 rounded-full bg-[#dff2e9] blur-2xl" />
              <div className="relative aspect-[1.13] overflow-hidden rounded-[42%_4%_37%_4%] shadow-[0_24px_60px_rgba(22,56,72,0.18)]">
                <Image
                  src="/images/estate-planning/hero-protect-what-matters.png"
                  alt="A multigenerational family spending time together at home"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-6 right-0 hidden max-w-44 -rotate-6 rounded-[1.5rem] bg-[#e7f6f0] px-5 py-4 font-serif text-lg leading-6 text-[#0c4462] shadow-[0_12px_24px_rgba(25,79,91,0.12)] sm:block">
                A brighter tomorrow, together
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 border-b border-[#dbe9e3] bg-[#eff9f5]">
          <div className="mx-auto grid w-full max-w-[88rem] sm:grid-cols-2 lg:grid-cols-4">
            {heroPaths.map((path, index) => (
              <Link
                key={path.href}
                href={path.href}
                data-guide-attorney-zip={path.href === '/#attorney-search' || undefined}
                className={`group px-6 py-6 text-center transition hover:bg-white/55 ${index > 0 ? 'border-t border-[#dbe9e3] sm:border-t-0 lg:border-l' : ''}`}
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center text-[#083f63]">
                  <HeroBenefitIcon icon={path.icon} />
                </span>
                <span className="mt-3 block font-serif text-xl text-[#062842]">{path.label}</span>
                <span className="mt-1 block text-sm leading-5 text-[#547080]">{path.detail}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <PlanChooser />

      <section
        id="attorney-search"
        className="relative isolate overflow-hidden rounded-[1.8rem] bg-[#082e4b] px-6 py-10 text-white shadow-[0_18px_42px_rgba(8,46,75,0.18)] md:px-10 md:py-12"
      >
        <Image
          src="/images/estate-planning/attorney-directory-team.png"
          alt=""
          fill
          className="-z-20 object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[#082e4b]/80" />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex gap-5">
            <span className="hidden shrink-0 text-[#b8d9d1] sm:block">
              <LocationIcon />
            </span>
            <div>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                Find estate-planning guidance near you
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                Estate planning laws vary by state. Find experienced estate-planning attorneys in
                your area and explore their profiles to get the support you need.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
            <AttorneyZipSearch compact />
            <p className="mt-3 text-xs leading-5 text-white/65">
              Connect with qualified estate-planning professionals in your area.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-[#062842] md:text-5xl">
              Learn From Estate-Planning Professionals
            </h2>
            <p className="mt-2 text-lg text-[#547080]">
              Helpful articles and insights on the topics that matter most.
            </p>
          </div>
          <ButtonLink
            href="/insights"
            label="Explore articles  →"
            style="secondary"
            className="rounded-full"
          />
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl border border-[#dce7e4] bg-white shadow-[0_12px_28px_rgba(8,35,58,0.06)]"
            >
              <div className="relative aspect-[1.7]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl leading-7 tracking-[-0.03em] text-[#062842]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#547080]">{article.description}</p>
                <Link
                  href={article.href}
                  className="mt-4 inline-flex text-sm font-semibold text-[#0b987e] hover:text-[#063e5b]"
                >
                  Read more <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 rounded-[1.6rem] border border-[#d9eee5] bg-[#ecfaf4] px-6 py-7 md:grid-cols-[auto_1fr_auto] md:items-center md:px-9">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0b987e]">
          <HeroBenefitIcon icon="children" />
        </span>
        <div>
          <h2 className="font-serif text-3xl tracking-[-0.035em] text-[#062842]">
            Are You an Estate-Planning Professional?
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#547080]">
            Share your knowledge and help others make informed decisions. Contribute an article to
            be featured on Wills.com, a resource for attorney-reviewed guidance.
          </p>
        </div>
        <ButtonLink
          href="/contact"
          label="Contribute an article  →"
          style="secondary"
          className="rounded-full"
        />
      </section>

      <section className="border-t border-[#dce7e4] pt-5 text-sm leading-6 text-[color:var(--muted)]">
        <strong className="font-semibold text-[color:var(--fg)]">Important:</strong> Wills.com
        provides general educational information, not legal, tax, or financial advice. Reading this
        site does not create an attorney-client relationship. Consult a licensed professional in
        your state about your circumstances.
      </section>
    </div>
  )
}
