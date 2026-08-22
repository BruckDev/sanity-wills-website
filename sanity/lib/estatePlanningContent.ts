import {defineQuery} from 'next-sanity'

export type PlanningFaq = {question: string; answer: string}

export type LifeEventArticleItem = {title: string; description: string}

export type LifeEventArticleResource = {label: string; href: string}

export type LifeEventArticleSection = {
  heading: string
  paragraphs?: string[]
  questions?: string[]
  afterQuestions?: string[]
  items?: LifeEventArticleItem[]
  checklist?: string[]
  afterChecklist?: string[]
  resources?: LifeEventArticleResource[]
}

export type LifeEventArticle = {
  title: string
  intro: string[]
  sections: LifeEventArticleSection[]
  conclusion?: string
  disclaimer?: string
}

export type LifeEvent = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  urgency: string
  checklist: string[]
  faqs: PlanningFaq[]
  article?: LifeEventArticle
}

export type PlanningTool = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  kind: 'readiness' | 'will-trust' | 'calculator' | 'guide'
  time: string
}

export const lifeEvents: LifeEvent[] = [
  {
    slug: 'new-parents',
    title: 'New Parents',
    eyebrow: 'A new family chapter',
    summary: 'Make sure the people you trust are ready to care for your child if you cannot.',
    urgency: 'A guardian nomination and clear instructions are easiest to make while life is calm.',
    checklist: [
      'Name primary and backup guardians',
      'Choose someone to manage property for your child',
      'Review life insurance beneficiaries',
      'Write down the people and records your family would need',
    ],
    faqs: [
      {
        question: 'Can I name a guardian in a will?',
        answer:
          'A will is commonly used to nominate a guardian for minor children. A court makes the final appointment under the law that applies to your family.',
      },
      {
        question: 'When should we update our plan?',
        answer:
          'Review it after a birth or adoption and again whenever your family or financial circumstances change.',
      },
    ],
    article: {
      title: 'Estate Planning for New Parents: A Quick Summary',
      intro: [
        'Having a child is a good reason to create or update an estate plan. The most important decision is naming a guardian—someone you trust to care for your child if both parents die or cannot care for them. Name both a first choice and a backup, and discuss the responsibility with them first.',
        'You should also decide who would manage money for your child. This may be the same person as the guardian, but it does not have to be. A will can name a guardian and direct how assets should be handled. Many families also consider a revocable living trust to hold assets for children, appoint a trustee, and set rules for when and how funds may be used.',
        'Update beneficiary designations on life insurance, retirement accounts, and financial accounts. These designations can control who receives the money, even if your will says something different. Avoid naming a young child directly without legal guidance, since a court process may be needed to manage the funds.',
        'Finally, create durable powers of attorney and health-care documents so trusted people can handle financial and medical decisions if you are alive but unable to act. Review your plan after major changes, such as another child, a move, a divorce, or a change in the people you trust.',
      ],
      sections: [
        {
          heading: 'Essential Checklist',
          checklist: [
            'Name a guardian and backup guardian for your children.',
            'Name someone to manage money left for them.',
            'Create or update your will—and consider a trust if appropriate.',
            'Review beneficiaries on life insurance and retirement accounts.',
            'Complete financial and health-care powers of attorney.',
          ],
        },
      ],
      disclaimer:
        'This is general information, not legal advice. An estate-planning attorney can tailor these documents to your family and state law.',
    },
  },
  {
    slug: 'getting-married',
    title: 'Getting Married',
    eyebrow: 'Build a shared foundation',
    summary:
      'Align the documents and beneficiary choices that protect the life you are building together.',
    urgency:
      'Marriage can change how assets pass. A quick review now can prevent conflicting instructions later.',
    checklist: [
      'Compare existing beneficiary designations',
      'Decide who can make financial decisions if needed',
      'Discuss property brought into the marriage',
      'Create or update core planning documents',
    ],
    faqs: [
      {
        question: 'Does marriage replace an existing will?',
        answer:
          'The effect of marriage on an existing will depends on state law. Review an existing plan with a qualified attorney.',
      },
      {
        question: 'Should we plan together?',
        answer:
          'Couples often coordinate their plans while keeping decisions and documents tailored to each person.',
      },
    ],
    article: {
      title: 'Getting Married? How to Approach Estate Planning as a Couple',
      intro: [
        'Marriage is one of life’s happiest milestones—and one of the most important times to review your estate plan.',
        'Even if you do not own a home, have children, or consider yourselves wealthy, marriage changes the people you may want to protect and the decisions you may want someone else to make. A thoughtful plan can help your spouse access the resources they need, reduce uncertainty, and make sure your wishes are clear.',
      ],
      sections: [
        {
          heading: 'Start with an honest conversation',
          paragraphs: ['Before completing documents, talk through the decisions that matter most:'],
          questions: [
            'Who should receive your property if one of you dies?',
            'Would the surviving spouse have enough money to remain in the home and maintain their lifestyle?',
            'Who should make financial or medical decisions if one of you cannot?',
            'Are there children from a prior relationship, aging parents, a business, or family members with special needs to consider?',
            'Do you want assets to pass directly to your spouse, remain separate, or be managed in a trust?',
          ],
          afterQuestions: [
            'You do not have to agree on every detail immediately. The goal is to understand each other’s priorities before creating documents.',
          ],
        },
        {
          heading: 'What to update after you get married',
          paragraphs: ['At a minimum, most couples should review or create:'],
          items: [
            {
              title: 'A will.',
              description:
                'A will lets you name an executor, state who should receive property that passes through your estate, and coordinate your wishes with the rest of your plan.',
            },
            {
              title: 'Beneficiary designations.',
              description:
                'Review life insurance, retirement accounts, bank accounts, health savings accounts, and investment accounts. These forms can control who receives certain assets, so they should match your overall estate plan.',
            },
            {
              title: 'Powers of attorney and health care documents.',
              description:
                'Marriage alone may not give your spouse authority to manage every financial account or make every medical decision if you are incapacitated. Durable financial powers of attorney and health care directives help avoid confusion during an emergency.',
            },
            {
              title: 'Insurance coverage.',
              description:
                'Review life insurance, disability coverage, and employer benefits. Consider whether the surviving spouse could cover housing, debt, childcare, and everyday expenses if one income disappeared.',
            },
            {
              title: 'Property ownership.',
              description:
                'If you buy a home or already own property, confirm how it is titled and what would happen if one spouse dies. The answer can vary by state and by the type of ownership.',
            },
          ],
        },
        {
          heading: 'The pros of planning together',
          paragraphs: [
            'Estate planning soon after marriage has real advantages. It creates clarity at a time when you are making shared financial decisions, helps prevent outdated beneficiaries from remaining on accounts, and gives each spouse a voice in how the other would be cared for.',
            'It can also reduce stress for the surviving spouse. A clear plan may make it easier to locate important documents, handle financial matters, access insurance proceeds, and work with professionals after a death or incapacity.',
            'Most importantly, it gives you the chance to build a plan around your shared values—not simply rely on default state laws.',
          ],
        },
        {
          heading: 'Potential downsides to consider',
          paragraphs: [
            'A joint approach does not mean every asset or decision must be combined. Couples may have different financial histories, children from previous relationships, family businesses, inherited property, or obligations to parents and siblings.',
            'Some common mistakes include assuming marriage automatically updates every account, naming a spouse without a backup beneficiary, or creating overly rigid documents that no longer fit if circumstances change.',
            'A trust can offer more control and privacy in some situations, but it can also require more planning, administration, and cost than a simple will. The right choice depends on your assets, family structure, state law, and long-term goals.',
          ],
        },
        {
          heading: 'A practical next-step checklist',
          checklist: [
            'Make a list of your assets, debts, insurance policies, and financial accounts.',
            'Review every beneficiary designation.',
            'Decide who should act as executor, financial agent, and health care agent.',
            'Create or update wills.',
            'Consider whether a trust would help protect your spouse, children, or future inheritance.',
            'Check how your home and other property are titled.',
            'Store your documents securely and tell each other where to find them.',
            'Review the plan after buying a home, having a child, changing jobs, moving states, or experiencing another major life event.',
          ],
        },
      ],
      conclusion:
        'Marriage is a new chapter. Estate planning is simply one way to make sure the person you chose to build a life with is protected if life does not go as expected.',
    },
  },
  {
    slug: 'new-homeowners',
    title: 'New Homeowners',
    eyebrow: 'Protect what you have built',
    summary:
      'A home changes the picture. Make sure ownership and planning documents tell the same story.',
    urgency:
      'The way a home is titled can affect what happens next. Review it before a crisis forces the question.',
    checklist: [
      'Confirm how the deed is titled',
      'Save deed and mortgage records in one secure place',
      'Review insurance and beneficiary designations',
      'Consider whether a trust could support your goals',
    ],
    faqs: [
      {
        question: 'Does a will control my home?',
        answer:
          'It depends on how the home is owned and whether beneficiary or trust arrangements apply. Local legal advice matters.',
      },
      {
        question: 'Should I change my deed?',
        answer:
          'Deed changes can have legal and tax consequences. Speak with a qualified professional before making one.',
      },
    ],
    article: {
      title: 'Buying a New Home? Estate-Planning Steps Every Homeowner Should Consider',
      intro: [
        'A new home is often one of the largest assets a family owns. It is also a major reason to review your estate plan.',
        'The question is not simply, “Who gets the house?” It is: Who can manage it if you are sick, who can sell or maintain it after a death, and how can you make the transfer as clear and efficient as possible for the people you love?',
      ],
      sections: [
        {
          heading: 'Should you buy the home in a trust?',
          paragraphs: [
            'For many families, a revocable living trust is the trust most commonly considered for a primary residence.',
            'You can buy the home directly in the trust’s name at closing, or buy it in your individual names and later transfer it to the trust with a new deed. Neither timing is automatically better. Buying in the trust from the start can avoid a later transfer. Buying personally first may be simpler if your lender, title company, or closing process is not prepared to title the property in the trust.',
            'The important point is coordination: if you create a trust, the home must actually be transferred into it for the trust to control that property.',
          ],
        },
        {
          heading: 'What kind of trust is usually used?',
          paragraphs: [
            'A revocable living trust is often appropriate when a couple wants to retain full control during life. You can usually serve as your own trustees, change the trust, refinance or sell the home, and name a successor trustee to step in if you become incapacitated or die.',
            'An irrevocable trust is a very different tool. It may be used for more specialized goals, such as advanced asset-protection, tax, Medicaid, or long-term-care planning. But it can mean giving up flexibility and control. It is not usually the default choice for a typical couple buying a primary home.',
            'If one spouse has children from a prior relationship, substantial separate assets, a family business, or concerns about long-term support for a child with disabilities, an attorney may recommend more tailored trust provisions.',
          ],
        },
        {
          heading: 'Pros of placing a home in a revocable living trust',
          items: [
            {
              title: 'Continuity during incapacity.',
              description:
                'If one or both owners cannot manage the home, the successor trustee may have authority to handle trust-owned property without first asking a court to appoint someone.',
            },
            {
              title: 'Potentially easier transfer after death.',
              description:
                'Property properly held in the trust may avoid probate in the state where the property is located. This can reduce delays, paperwork, and public court involvement.',
            },
            {
              title: 'More control.',
              description:
                'A trust can state whether the surviving spouse may remain in the home, whether it should be sold, and how proceeds should ultimately pass to children or other beneficiaries.',
            },
            {
              title: 'Useful for multiple properties.',
              description:
                'A trust can be especially helpful if you own a vacation home, rental property, or real estate in more than one state.',
            },
          ],
        },
        {
          heading: 'Cons and tradeoffs',
          items: [
            {
              title: 'More upfront work and cost.',
              description:
                'A trust must be drafted correctly, and the deed must be prepared and recorded correctly.',
            },
            {
              title: 'It must be maintained.',
              description:
                'Buying the trust document is not enough. You need to keep title, insurance, beneficiary designations, and successor-trustee information coordinated.',
            },
            {
              title: 'A trust does not solve every problem.',
              description:
                'It does not eliminate a mortgage, property taxes, insurance costs, creditor issues, or the need for a will and incapacity documents.',
            },
            {
              title: 'Lender and title-company coordination matters.',
              description:
                'Before closing or transferring an existing mortgaged home, ask your lender, closing attorney, title company, and estate-planning attorney about their requirements. Never assume a deed transfer will have no loan or insurance implications.',
            },
          ],
        },
        {
          heading: 'What filing or paperwork is required?',
          paragraphs: [
            'Requirements vary by state and county, but a typical transfer after purchase may involve:',
          ],
          checklist: [
            'Creating and signing the trust.',
            'Preparing a deed that transfers title from the owners to the trustees of the trust.',
            'Signing and notarizing the deed as required by state law.',
            'Recording the deed with the county recorder where the home is located.',
            'Updating homeowner’s insurance, title records, and any relevant lender or association records.',
            'Keeping a certification of trust available for a title company, bank, or other third party.',
          ],
          afterChecklist: [
            'In Illinois, transferring real property to a trust requires a written instrument conveying legal title to the trustee. Illinois law also allows third parties to request a certification of trust rather than the full trust document.',
            'For federal income-tax purposes, a revocable living trust is commonly treated as a grantor trust during the creator’s lifetime, meaning income and deductions are generally reported under the owner’s tax identity. However, tax reporting can change after death, incapacity, or if the trust becomes irrevocable.',
          ],
        },
      ],
      conclusion:
        'Before closing, ask your estate-planning attorney and title company whether the home should be titled in your individual names or in your revocable trust. If you already closed, do not assume you missed your opportunity; a properly prepared and recorded deed may still transfer the property afterward. Then make sure the rest of your plan matches: update your will, powers of attorney, health care documents, life insurance, and beneficiary designations. A home is not just an asset—it is the place your family depends on. Your estate plan should make clear who can protect it.',
    },
  },
  {
    slug: 'starting-a-business',
    title: 'Business Owners',
    eyebrow: 'Keep a business moving',
    summary:
      'Plan for the people who would need authority and information if you are suddenly unavailable.',
    urgency:
      'A business can be disrupted quickly when only one person holds the records relationships and authority.',
    checklist: [
      'List key accounts agreements and contacts',
      'Identify a continuity decision maker',
      'Review ownership and succession documents',
      'Coordinate business and personal planning conversations',
    ],
    faqs: [
      {
        question: 'Is a personal will enough for a business?',
        answer:
          'Business ownership and succession arrangements may require separate documents. An attorney can help identify the right coordination.',
      },
      {
        question: 'Who can access business accounts?',
        answer:
          'Authority depends on the account agreements and governing documents. Record keeping and a continuity plan can reduce delays.',
      },
    ],
    article: {
      title: 'Estate Planning for Business Owners',
      intro: [
        'A business can be one of the most important assets a person owns—and one of the easiest to disrupt when the owner becomes ill, incapacitated, or dies. Estate planning for a business owner is not only about who inherits the company. It is also about making sure the right people can keep payroll moving, communicate with customers, access accounts, and make decisions when you cannot.',
      ],
      sections: [
        {
          heading:
            'Plan for the people who would need authority and information if you are suddenly unavailable.',
          paragraphs: [
            'Start by identifying the people who would need to step in. This may include a spouse, co-owner, key employee, accountant, attorney, bookkeeper, or trusted family member. Be specific about their roles. Who can sign checks? Who can approve payroll? Who can speak with the bank, insurer, landlord, vendors, or clients? Who has the authority to run the company temporarily—and who should ultimately own it?',
            'Your core estate plan should usually coordinate a will or revocable living trust with durable powers of attorney, health-care documents, and your business’s governing records. For an LLC, corporation, or partnership, review the operating agreement, bylaws, shareholder agreement, or partnership agreement. These documents may control who can vote, manage, buy, sell, or inherit an ownership interest. They should work with—not conflict with—your personal estate plan.',
            'A succession plan is especially important if there are co-owners. Consider a buy-sell agreement that explains what happens if an owner dies, becomes disabled, retires, or wants to leave. It can set a valuation method, identify who may buy the interest, and provide a path for funding the purchase, often through insurance or a planned payment arrangement.',
            'Just as important: create a secure, organized business-information file. Include entity documents, EIN and tax records, banking contacts, insurance policies, payroll and accounting access instructions, key contracts, vendor and client lists, licenses, passwords stored through a secure password manager, and a brief “how the business runs” guide. Keep it current and tell the right people where to find it. A continuity plan should identify critical functions, a team, and recovery steps—an approach also recommended by the U.S. Small Business Administration.',
            'Do not assume a personal power of attorney automatically lets someone handle every business or tax matter. Authority can depend on your entity documents, state law, bank policies, and the specific agency involved. For example, IRS representation commonly requires a separate Form 2848 authorization.',
          ],
          resources: [
            {
              label: 'U.S. Small Business Administration: Managing your business',
              href: 'https://www.sba.gov/counseling/manage-your-business/',
            },
            {
              label: 'IRS Form 2848 authorization guidance',
              href: 'https://www.taxpayeradvocate.irs.gov/news/nta-blog/nta-blog-when-to-use-a-durable-power-of-attorney-to-authorize-representation-before-the-irs/2022/10/',
            },
          ],
        },
      ],
      conclusion:
        'A practical starting point is to meet with an estate-planning attorney and your tax or business adviser, then ask: If I could not respond tomorrow, who would know what to do—and would they have the legal authority and information to do it?',
      disclaimer:
        'This article is general information, not legal or tax advice. Business succession and estate-planning rules vary by state and by entity type.',
    },
  },
  {
    slug: 'caring-for-an-aging-parent',
    title: 'Caring for an Aging Parent',
    eyebrow: 'Prepare before decisions feel urgent',
    summary:
      'Create space for clear conversations about care choices records and the people your parent trusts.',
    urgency:
      'Waiting until a health event can leave families making critical choices with less clarity and less time.',
    checklist: [
      'Talk about health-care preferences',
      'Confirm powers of attorney and health-care documents',
      'Locate insurance account and contact information',
      'Ask how your parent wants important decisions handled',
    ],
    faqs: [
      {
        question: 'Can an adult child make decisions automatically?',
        answer:
          'No. Authority can depend on valid documents and state law. A qualified attorney can explain the options.',
      },
      {
        question: 'How should we start the conversation?',
        answer:
          'Lead with support and practical preparation. Ask what matters most and listen before trying to solve every issue.',
      },
    ],
  },
  {
    slug: 'retiring',
    title: 'Retiring',
    eyebrow: 'Turn a lifetime of work into a plan',
    summary:
      'Review the accounts documents and people that support your next chapter and the people you love.',
    urgency:
      'Retirement accounts and beneficiaries can sit outside a will. A coordinated review helps avoid surprises.',
    checklist: [
      'Review retirement account beneficiaries',
      'Update a current inventory of accounts and property',
      'Choose people for key roles',
      'Set a regular plan review date',
    ],
    faqs: [
      {
        question: 'Do retirement accounts pass through a will?',
        answer:
          'Many retirement accounts pass through beneficiary designations. Review those designations as part of a full plan.',
      },
      {
        question: 'How often should I review documents?',
        answer:
          'A review after a major life change and every few years can help surface outdated information.',
      },
    ],
  },
  {
    slug: 'navigating-divorce',
    title: 'Navigating Divorce',
    eyebrow: 'Reset important decisions',
    summary: 'Review the people documents and designations that may no longer reflect your wishes.',
    urgency:
      'Separation and divorce can affect legal rights differently by state. Do not assume an old plan will update itself.',
    checklist: [
      'Ask about state-specific planning effects',
      'Review executor and health-care decision maker choices',
      'Check beneficiary designations',
      'Create a plan to update documents at the right time',
    ],
    faqs: [
      {
        question: 'Does divorce update beneficiary designations?',
        answer:
          'The effect varies by account type and state law. Confirm each designation rather than relying on a general rule.',
      },
      {
        question: 'When can I update documents?',
        answer:
          'Timing can depend on local law and court orders. A qualified attorney can help you avoid unintended consequences.',
      },
    ],
  },
]

export const lifeEventImages: Record<string, {src: string; alt: string}> = {
  'new-parents': {
    src: '/images/home/life-events/new-parents.jpg',
    alt: 'Parents holding their newborn child',
  },
  'getting-married': {
    src: '/images/home/life-events/getting-married.jpg',
    alt: 'A newly married couple on their wedding day',
  },
  'new-homeowners': {
    src: '/images/home/life-events/new-homeowners.jpg',
    alt: 'A family standing in front of their new home',
  },
  'starting-a-business': {
    src: '/images/home/life-events/business-owners.jpg',
    alt: 'A small business owner at work in her crepe shop',
  },
}

export const planningTools: PlanningTool[] = [
  {
    slug: 'estate-planning-readiness',
    title: 'Estate Planning Readiness Quiz',
    eyebrow: 'Free interactive quiz',
    summary: 'See which planning conversations may deserve your attention in about two minutes.',
    kind: 'readiness',
    time: '2 minutes',
  },
  {
    slug: 'will-or-trust',
    title: 'Will or Trust Explorer',
    eyebrow: 'Free interactive quiz',
    summary: 'Explore the questions that can shape a will trust or coordinated plan conversation.',
    kind: 'will-trust',
    time: '3 minutes',
  },
  {
    slug: 'estate-value-planner',
    title: 'Estate Value Planner',
    eyebrow: 'Free calculator',
    summary:
      'Create a simple starting estimate of assets debts and people who depend on your plan.',
    kind: 'calculator',
    time: '3 minutes',
  },
  {
    slug: 'family-records-checklist',
    title: 'Family Records Checklist',
    eyebrow: 'Free planning guide',
    summary:
      'Build a practical list of records and contacts that can make a difficult time less overwhelming.',
    kind: 'guide',
    time: '5 minutes',
  },
  {
    slug: 'beneficiary-review',
    title: 'Beneficiary Review Guide',
    eyebrow: 'Free planning guide',
    summary: 'Use a clear prompt list to review the designations that may sit outside a will.',
    kind: 'guide',
    time: '4 minutes',
  },
  {
    slug: 'guardian-conversation',
    title: 'Guardian Conversation Guide',
    eyebrow: 'Free planning guide',
    summary:
      'Prepare for a thoughtful conversation with the people you may ask to care for your children.',
    kind: 'guide',
    time: '5 minutes',
  },
]

export const lifeEventQuery = defineQuery(
  `*[_type == "lifeEvent" && slug.current == $slug][0]{title, "slug": slug.current, eyebrow, summary, urgency, checklist, faqs, article{title, intro, sections[]{heading, paragraphs, questions, afterQuestions, items[]{title, description}, checklist, afterChecklist, resources[]{label, href}}, conclusion, disclaimer}}`,
)
export const planningToolQuery = defineQuery(
  `*[_type == "planningTool" && slug.current == $slug][0]{title, "slug": slug.current, eyebrow, summary, kind, time}`,
)

export function getLifeEvent(slug: string) {
  return lifeEvents.find((event) => event.slug === slug)
}

export function getPlanningTool(slug: string) {
  return planningTools.find((tool) => tool.slug === slug)
}

export function mergeLifeEvent(data: Partial<LifeEvent> | null, fallback: LifeEvent): LifeEvent {
  return {
    ...fallback,
    ...data,
    checklist: data?.checklist?.length ? data.checklist : fallback.checklist,
    faqs: data?.faqs?.length ? data.faqs : fallback.faqs,
    article: data?.article?.title ? data.article : fallback.article,
  }
}

export function mergePlanningTool(
  data: Partial<PlanningTool> | null,
  fallback: PlanningTool,
): PlanningTool {
  return {...fallback, ...data}
}
