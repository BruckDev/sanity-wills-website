import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {sampleAttorneyArticles} from './articleData'

export const metadata: Metadata = {
  title: 'Sample featured attorney listing',
  description: 'A marketing demonstration of a featured attorney office profile on Wills.com.',
}

const practiceAreas = [
  {
    icon: '▤',
    title: 'Wills & Trusts',
    copy: 'Create a clear plan to protect the people and property that matter most.',
  },
  {
    icon: '◆',
    title: 'Probate',
    copy: 'Guidance through the probate process with care, clarity, and next steps in view.',
  },
  {
    icon: '▣',
    title: 'Business Succession',
    copy: 'Help business owners prepare for a thoughtful transition.',
  },
  {
    icon: '↗',
    title: 'Estate Tax Planning',
    copy: 'Explore strategies that may help preserve wealth for future generations.',
  },
]

const articleImages = [
  '/images/estate-planning/will-document.png',
  '/images/estate-planning/family-hero.png',
  '/images/estate-planning/advisor-consultation.png',
]

const sampleReviews = [
  [
    '“Christopher made our trust options clear and helped us choose a plan that felt right for our family.”',
    'David M., customer',
  ],
  [
    '“We left every conversation with practical answers and more confidence about protecting the people we love.”',
    'Tammy A., customer',
  ],
  [
    '“His thoughtful trust advice made a complex process feel organized, personal, and manageable.”',
    'Dorothy S., customer',
  ],
]

const benefitItems = [
  ['✦', 'Personalized guidance', 'Support tailored to the questions you want to discuss.'],
  ['✓', 'Experienced counsel', 'Clear information for an informed conversation.'],
  ['◆', 'A more secure tomorrow', 'Planning that keeps the people you value in view.'],
]

export default function FeaturedAttorneySamplePage() {
  return (
    <div className="space-y-12 pb-8 md:space-y-16">
      <div className="rounded-xl border border-[color:var(--accent)] bg-[#eaf3f6] px-5 py-4 text-sm leading-6 text-[color:var(--fg)]">
        <strong>Marketing sample:</strong> This is a fictional featured-attorney advertisement
        created to demonstrate a potential Wills.com office profile.
      </div>

      <section className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[color:var(--border)] bg-[#f3f6f7] shadow-[0_12px_30px_rgba(8,35,58,0.07)] lg:aspect-auto lg:min-h-[31rem]">
          <Image
            src="/images/featured-attorneys/christopher-freidman.png"
            alt="Christopher Freidman, sample featured attorney"
            fill
            priority
            className="object-cover object-top"
            sizes="(min-width: 1024px) 18rem, 100vw"
          />
        </div>

        <div className="lg:flex lg:flex-col lg:justify-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
            Trusted. Experienced. Here for what matters.
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[color:var(--fg)] md:text-6xl">
            Christopher Freidman
          </h1>
          <p className="mt-2 font-serif text-2xl leading-8 text-[color:var(--fg)] md:text-3xl">
            Freidman, Berenstein &amp; Anderson
          </p>
          <p className="mt-3 text-lg font-medium text-[color:var(--fg)]">
            Estate planning attorney in Chicago, Illinois
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            This sample profile illustrates how a featured attorney can introduce clear,
            client-focused guidance on wills, trusts, and coordinated estate-planning questions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:freidman@fbalaw.com"
              className="button-lift inline-flex min-h-12 items-center justify-center rounded-lg bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#061e31] transition hover:bg-[color:var(--accent-strong)]"
            >
              Schedule a consultation
            </a>
            <a
              href="tel:+16306257571"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#008e94] px-5 py-3 text-sm font-semibold text-[#067b81] transition hover:bg-[#e8f8f8]"
            >
              Call +1-630-625-7571
            </a>
          </div>
          <p className="mt-4 text-sm text-[color:var(--muted)]">Free consultations available.</p>
        </div>
      </section>

      <section className="grid gap-5 border-y border-[color:var(--border)] py-7 md:grid-cols-3 md:gap-0 md:py-8">
        {benefitItems.map(([icon, title, copy], index) => (
          <div
            key={title}
            className={`flex gap-4 px-1 md:px-7 ${index > 0 ? 'md:border-l md:border-[color:var(--border)]' : ''}`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4f5f6] text-xl font-bold text-[#0b6d7a]">
              {icon}
            </span>
            <div>
              <h2 className="font-semibold text-[color:var(--fg)]">{title}</h2>
              <p className="mt-1 text-sm leading-5 text-[color:var(--muted)]">{copy}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid overflow-hidden rounded-xl border border-[color:var(--border)] bg-[#f2f6f7] md:grid-cols-[1.05fr_0.6fr_0.95fr] md:items-center">
        <div className="relative min-h-[12rem] overflow-hidden border-b border-[color:var(--border)] bg-white md:border-b-0 md:border-r">
          <Image
            src="/images/featured-attorneys/freidman-berenstein-anderson-logo.png"
            alt="Freidman, Berenstein and Anderson Attorneys at Law"
            fill
            className="object-contain scale-150"
            sizes="(min-width: 768px) 34vw, 100vw"
          />
        </div>
        <div className="relative mx-auto h-40 w-40 md:h-44 md:w-44">
          <Image
            src="/images/featured-attorneys/best-law-firms-badge.png"
            alt="Best Law Firms badge, shown as a sample recognition placement"
            fill
            className="object-contain"
            sizes="11rem"
          />
        </div>
        <div className="border-t border-[color:var(--border)] p-7 md:border-l md:border-t-0 md:p-9">
          <div className="font-serif text-2xl text-[color:var(--fg)]">
            Recognized for excellence
          </div>
          <p className="mt-3 leading-7 text-[color:var(--muted)]">
            A sample placement for an office recognition or professional distinction.
          </p>
        </div>
      </section>

      <section id="practice-areas">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              Practice areas
            </div>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Planning for the questions ahead.
            </h2>
          </div>
          <a
            href="#all-practice-areas"
            className="text-sm font-semibold text-[#067b81] hover:underline"
          >
            View all practice areas →
          </a>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-[color:var(--border)] bg-white p-6 text-center shadow-[0_10px_24px_rgba(8,35,58,0.04)]"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e4f5f6] font-serif text-2xl text-[#0b6d7a]">
                {area.icon}
              </span>
              <h3 className="mt-5 font-serif text-2xl tracking-[-0.03em] text-[color:var(--fg)]">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{area.copy}</p>
            </article>
          ))}
        </div>
        <p id="all-practice-areas" className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
          Sample practice areas include charitable trusts, deeds, probate administration, powers of
          attorney, revocable living trusts, special-needs trusts, tax planning, and wills.
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              Illustrative attorney articles
            </div>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Articles by Christopher Freidman
            </h2>
          </div>
          <Link
            href="/featured-attorneys/freidman-berenstein-anderson/articles"
            className="text-sm font-semibold text-[#067b81] hover:underline"
          >
            View all articles →
          </Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {sampleAttorneyArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/featured-attorneys/freidman-berenstein-anderson/articles/${article.slug}`}
              className="group overflow-hidden rounded-xl border border-[color:var(--border)] bg-white shadow-[0_10px_24px_rgba(8,35,58,0.04)] transition hover:-translate-y-1 hover:border-[#89cfd1]"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={articleImages[index]}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-[color:var(--muted)]">
                  {article.readingTime}
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-7 tracking-[-0.03em] text-[color:var(--fg)]">
                  {article.title}
                </h3>
                <p className="mt-3 leading-6 text-[color:var(--muted)]">{article.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
          Article titles and copy are illustrative marketing content for this fictional sample
          profile.
        </p>
      </section>

      <section className="grid overflow-hidden rounded-xl border border-[color:var(--border)] bg-[#f2f6f7] md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[16rem]">
          <Image
            src="/images/featured-attorneys/chicago-office-building.jpg"
            alt="Chicago office building near the sample firm location"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="p-7 md:p-9">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
            Office details
          </div>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)] md:text-4xl">
            Serving Chicago &amp; the greater Illinois area
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <address className="not-italic text-sm leading-6 text-[color:var(--muted)]">
              <span className="mb-2 block font-semibold text-[color:var(--fg)]">
                Freidman, Berenstein &amp; Anderson
              </span>
              411 A Wacker Dr
              <br />
              Suite 7007
              <br />
              Chicago, IL 60606
            </address>
            <div className="border-t border-[color:var(--border)] pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <p className="text-sm leading-6 text-[color:var(--muted)]">
                A sample office panel for location, availability, and the preferred way to get in
                touch.
              </p>
              <a
                href="mailto:freidman@fbalaw.com"
                className="mt-4 inline-flex text-sm font-semibold text-[#067b81] hover:underline"
              >
                Contact the office →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sample-client-feedback">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              Sample client feedback
            </div>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">
              Thoughtful trust advice, illustrated.
            </h2>
          </div>
          <a
            href="mailto:freidman@fbalaw.com"
            className="text-sm font-semibold text-[#067b81] hover:underline"
          >
            Ask a question →
          </a>
        </div>
        <p className="mt-4 max-w-3xl text-[color:var(--muted)]">
          These fictional examples show how a featured office could present verified client feedback
          about clear, caring trust-planning guidance.
        </p>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {sampleReviews.map(([quote, attribution], index) => (
            <figure
              key={quote}
              className={`rounded-xl p-6 ${
                index === 0 ? 'bg-[#dff7f7]' : index === 1 ? 'bg-[#fae2e2]' : 'bg-[#fff0d2]'
              }`}
            >
              <div
                className="text-lg tracking-[0.16em] text-[#07858a]"
                aria-label="Sample five-star rating"
              >
                ★★★★★
              </div>
              <blockquote className="mt-5 text-lg leading-7 text-[color:var(--fg)]">
                {quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-[color:var(--muted)]">
                — {attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-[#071f33] px-7 py-10 text-white md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Get in touch
            </div>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-5xl">
              Ready to protect what matters most?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
              This sample contact panel shows how a featured office can make the next step clear.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="tel:+16306257571"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call the office
            </a>
            <a
              href="mailto:freidman@fbalaw.com"
              className="button-lift inline-flex min-h-12 items-center justify-center rounded-lg bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#061e31] transition hover:bg-[color:var(--accent-strong)]"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </section>

      <p className="text-sm leading-6 text-[color:var(--muted)]">
        This sample profile is for marketing demonstration only. It does not constitute legal
        advice, an attorney-client relationship, a referral, or an endorsement by Wills.com.
      </p>
    </div>
  )
}
