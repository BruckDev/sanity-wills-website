import type {Metadata} from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sample featured attorney listing',
  description: 'A marketing demonstration of a featured attorney office profile on Wills.com.',
}

const qualifications = [
  'Licensed to practice in Illinois and Federal Courts',
  'Graduate of The Chicago-Kent College of Law',
  'Over two decades of courtroom and planning experience',
  'Known for a hands-on, accessible, and responsive client approach',
]

const services = [
  'Charitable Trusts',
  'Deeds',
  'Estate Planning',
  'Estate Tax Planning',
  'Irrevocable Insurance Trusts',
  'Life Insurance Trusts',
  'Living Wills',
  'Postnuptial Agreements',
  'Powers of Attorney',
  'Powers of Attorney for Healthcare',
  'Powers of Attorney for Property',
  'Prenuptial Agreements',
  'Probate Administration',
  'QPRTS – Qualified Personal Residence Trusts',
  'QTIP Trusts',
  'Revocable Living Trusts',
  'Special Needs Trusts',
  'Tax Planning',
  'Transfer on Death Instruments for Real Estate',
  'Trust Administration',
  'Trusts',
  'Wills',
]

export default function FeaturedAttorneySamplePage() {
  return (
    <div className="space-y-12 pb-8 md:space-y-16">
      <div className="rounded-xl border border-[color:var(--accent)] bg-[#eaf3f6] px-5 py-4 text-sm leading-6 text-[color:var(--fg)]">
        <strong>Marketing sample:</strong> This is a fictional featured-attorney advertisement created to demonstrate a potential Wills.com office profile.
      </div>

      <section className="overflow-hidden rounded-[2rem] bg-[#071f33] text-white lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-7 py-10 md:px-12 md:py-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Featured attorney office</div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.045em] md:text-6xl">Freidman, Berenstein and Anderson Law Group</h1>
          <p className="mt-6 text-lg leading-8 text-white/80">Practical estate-planning guidance from a Chicago law office focused on responsive counsel, clear communication, and long-term planning.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+16306257571" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#061e31] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] hover:text-white">Call +1-630-625-7571</a>
            <a href="mailto:freidman@fbalaw.com" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">Email the office</a>
          </div>
          <p className="mt-5 text-sm font-semibold text-[color:var(--accent)]">Free consultations available</p>
        </div>
        <div className="relative min-h-[28rem] border-t border-white/15 lg:border-l lg:border-t-0"><Image src="/images/featured-attorneys/christopher-freidman.png" alt="Christopher Freidman, sample featured attorney" fill priority className="object-cover object-top" sizes="(min-width: 1024px) 40vw, 100vw" /></div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start">
        <div className="rounded-[2rem] border border-[color:var(--border)] bg-white p-7 shadow-[0_18px_45px_rgba(8,35,58,0.06)] md:p-10">
          <div className="relative aspect-[3/2] max-w-md overflow-hidden"><Image src="/images/featured-attorneys/freidman-berenstein-anderson-logo.png" alt="Freidman, Berenstein and Anderson Attorneys at Law" fill className="object-contain" sizes="(min-width: 768px) 28rem, 100vw" /></div>
          <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Meet the attorney</div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">Christopher Freidman</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">For people planning for the future, the right attorney relationship can make complex decisions easier to approach. This sample profile highlights the kind of clear, human-focused information an office could share with Wills.com readers.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {qualifications.map((qualification) => (
              <li key={qualification} className="rounded-xl border border-[#d6e2e8] bg-[#f7fafc] p-5 text-sm leading-6 text-[color:var(--fg)]"><span className="mr-2 font-bold text-[color:var(--accent)]">✓</span>{qualification}</li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Office details</div>
          <h2 className="mt-4 font-serif text-3xl tracking-[-0.035em] text-[color:var(--fg)]">Chicago, Illinois</h2>
          <address className="mt-5 not-italic leading-7 text-[color:var(--muted)]">411 A Wacker Dr<br />Suite 7007<br />Chicago, IL 60606</address>
          <dl className="mt-7 space-y-5 border-t border-[#cbdce3] pt-6 text-sm">
            <div><dt className="font-semibold text-[color:var(--fg)]">Phone</dt><dd className="mt-1"><a className="text-[color:var(--accent-strong)] hover:underline" href="tel:+16306257571">+1-630-625-7571</a></dd></div>
            <div><dt className="font-semibold text-[color:var(--fg)]">Email</dt><dd className="mt-1 break-all"><a className="text-[color:var(--accent-strong)] hover:underline" href="mailto:freidman@fbalaw.com">freidman@fbalaw.com</a></dd></div>
          </dl>
        </aside>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white lg:grid lg:grid-cols-2">
        <div className="relative min-h-[24rem]"><Image src="/images/featured-attorneys/fba-corporate-leadership.png" alt="Sample corporate leadership team at Freidman, Berenstein and Anderson Law Group" fill className="object-cover object-center" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
        <div className="p-7 md:p-10 lg:flex lg:flex-col lg:justify-center"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Corporate leadership</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)]">A team built around responsive counsel.</h2><p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">This sample section shows how a featured office can introduce its leadership team and give prospective clients a more personal view of the people behind the practice.</p></div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e2e8] bg-[#eaf3f6] p-7 md:p-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Services</div>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[color:var(--fg)] md:text-5xl">Our Estate Planning Services</h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">A sample featured office can make its focus areas easy for readers to scan before reaching out.</p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service} className="rounded-xl border border-[#d6e2e8] bg-white px-5 py-4 text-sm font-semibold leading-6 text-[color:var(--fg)]">{service}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[2rem] border border-[#071f33] bg-[#071f33] px-7 py-10 text-white md:px-10 md:py-12">
        <div className="max-w-4xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">A sample advertising format</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-5xl">Make your firm easier for readers to understand.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">A featured listing can introduce your office, attorney credentials, location, and preferred contact details alongside educational Wills.com content.</p></div>
      </section>

      <p className="text-sm leading-6 text-[color:var(--muted)]">This sample profile is for marketing demonstration only. It does not constitute legal advice, an attorney-client relationship, a referral, or an endorsement by Wills.com.</p>
    </div>
  )
}
