import {AttorneyContactForm} from '@/components/site/AttorneyContactForm'
import type {Metadata} from 'next'

export const metadata: Metadata = {title: 'Contribute to Wills.com', description: 'Connect with Wills.com about attorney-authored educational articles and future advertising opportunities.'}

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-12 md:py-16">
        <div className="max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Attorney and firm partnerships</div>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">Help people take the next right step.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">Wills.com is creating an editorial destination for understandable, trustworthy estate-planning education. We welcome conversations with attorney offices that want to publish useful, public-facing guidance.</p>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7"><h2 className="font-serif text-3xl text-[color:var(--fg)]">Contribute an article</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">Share original, educational content on wills, trusts, probate, incapacity planning, or related topics. Articles should clearly state their author, jurisdiction, and date.</p></article>
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7"><h2 className="font-serif text-3xl text-[color:var(--fg)]">Build public trust</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">Help readers understand the issues that make a professional conversation worthwhile, without promising outcomes or offering individualized advice online.</p></article>
        <article className="rounded-2xl border border-[color:var(--border)] bg-white p-7"><h2 className="font-serif text-3xl text-[color:var(--fg)]">Future advertising</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">As the audience grows, Wills.com expects to offer clearly labeled sponsorship and advertising opportunities designed to preserve editorial clarity.</p></article>
      </section>
      <section className="rounded-[2rem] border border-[#071f33] bg-[#071f33] p-7 text-white md:p-10">
        <div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Start a conversation</div><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em]">Tell us about your firm.</h2><p className="mt-4 leading-7 text-white/78">Share your contact information, the work your firm does, and how you would like to participate in Wills.com.</p></div>
        <div className="mt-8"><AttorneyContactForm /></div>
      </section>
      <p className="text-sm leading-6 text-[color:var(--muted)]">Wills.com is an informational publisher and is not a law firm, referral service, or substitute for professional advice.</p>
    </div>
  )
}
