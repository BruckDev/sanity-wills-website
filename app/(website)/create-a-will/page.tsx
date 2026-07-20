import {WillDraftBuilder} from '@/components/site/WillDraftBuilder'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Create a will outline',
  description: 'Prepare a private, attorney-review planning outline for a future will conversation.',
}

export default function CreateAWillPage() {
  return <div className="space-y-12 pb-8 md:space-y-16">
    <section className="rounded-[2rem] bg-[#071f33] px-6 py-12 text-white md:px-12 md:py-16">
      <div className="max-w-4xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Private planning tool</div><h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">Prepare a will outline before you meet an attorney.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">Answer a few questions to create a private planning summary you can print and take to an attorney. It is a discussion tool, not a legally valid will.</p></div>
    </section>
    <div className="rounded-xl border border-[#d7d8ca] bg-[#f8f7f0] px-5 py-4 text-sm leading-6 text-[color:var(--fg)]"><strong>Important:</strong> Wills.com does not create legal documents or give legal advice. Laws, signing requirements, and notarization rules vary by state and personal circumstances. A qualified attorney must review any document you intend to use.</div>
    <WillDraftBuilder />
  </div>
}
