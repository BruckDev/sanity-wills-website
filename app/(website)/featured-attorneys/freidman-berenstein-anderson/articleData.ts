import {sampleAdditionalArticles} from '@/sanity/lib/sampleAdditionalArticles'
import {stegaClean} from 'next-sanity'

export type SampleAttorneyArticle = {
  slug: string
  title: string
  summary: string
  readingTime: string
  image: string
  sources?: Array<{title: string; href: string}>
  sections: Array<{heading: string; body: string}>
}

const originalArticles: SampleAttorneyArticle[] = [
  {
    slug: 'when-to-update-an-estate-plan',
    image: '/images/estate-planning/will-document.png',
    title: 'When should you update an estate plan in Illinois?',
    summary:
      'Life changes, beneficiary designations, and state-law differences can all make a review worthwhile.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Review after major life changes',
        body: 'Marriage, divorce, a birth, a death, a move, a new business, or a material change in assets can affect the assumptions behind an estate plan. A review can help identify documents, titles, and beneficiary designations that may need attention.',
      },
      {
        heading: 'Look beyond the will',
        body: 'Trusts, retirement accounts, insurance policies, jointly owned property, powers of attorney, and health-care documents can work alongside a will. An effective review considers how those pieces fit together rather than treating any one document in isolation.',
      },
      {
        heading: 'Ask state-specific questions',
        body: 'Signing requirements, probate rules, taxes, and default inheritance rules vary by state. A licensed attorney can explain how the current rules apply to your family and whether documents prepared in another state should be updated.',
      },
    ],
  },
  {
    slug: 'will-versus-trust-questions',
    image: '/images/estate-planning/family-hero.png',
    title: 'Will versus trust: questions families often ask',
    summary: 'A will and a trust can serve different roles in a coordinated estate plan.',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'What can a will do?',
        body: 'A will can name an executor, state how certain probate assets should pass, and nominate guardians for minor children. It generally does not control assets that pass by beneficiary designation, joint ownership, or a properly funded trust.',
      },
      {
        heading: 'What can a trust do?',
        body: 'A trust can hold and manage property under terms you establish. Depending on the plan, it may help provide ongoing stewardship for beneficiaries, add privacy, or coordinate the management of property after incapacity or death.',
      },
      {
        heading: 'The right question is often how they work together',
        body: 'Many plans use both a will and a trust. The appropriate structure depends on the assets involved, family dynamics, goals for beneficiaries, and the law that applies to the plan.',
      },
    ],
  },
  {
    slug: 'preparing-for-an-estate-planning-consultation',
    image: '/images/estate-planning/advisor-consultation.png',
    title: 'How to prepare for an estate-planning consultation',
    summary: 'A little preparation can make a first conversation more focused and productive.',
    readingTime: '3 min read',
    sections: [
      {
        heading: 'Bring a practical inventory',
        body: 'Make a list of major assets, debts, insurance policies, retirement accounts, real estate, business interests, and accounts with beneficiary designations. You do not need perfect records to start, but a broad picture is helpful.',
      },
      {
        heading: 'Think about people and roles',
        body: 'Consider who you trust to act as executor, trustee, guardian, financial agent, and health-care decision-maker. It is usually helpful to think about alternate choices as well.',
      },
      {
        heading: 'Write down your questions',
        body: 'Questions about family needs, incapacity, taxes, probate, or an existing plan are all worth bringing to the meeting. An attorney can help distinguish general information from advice that fits your own circumstances.',
      },
    ],
  },
]

export function resolveSampleAttorneyArticles(
  additions = sampleAdditionalArticles,
): SampleAttorneyArticle[] {
  return [
    ...originalArticles,
    ...additions.map((article) => ({...article, slug: stegaClean(article.slug)})),
  ]
}

export const sampleAttorneyArticles = resolveSampleAttorneyArticles()

export function findSampleAttorneyArticle(slug: string, articles = sampleAttorneyArticles) {
  return articles.find((article) => article.slug === slug)
}
