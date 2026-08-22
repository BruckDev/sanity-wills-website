import {defineQuery} from 'next-sanity'

export type PlanningFaq = {question: string; answer: string}

export type LifeEventArticleItem = {title: string; description: string}

export type LifeEventArticleSection = {
  heading: string
  paragraphs?: string[]
  questions?: string[]
  afterQuestions?: string[]
  items?: LifeEventArticleItem[]
  checklist?: string[]
}

export type LifeEventArticle = {
  title: string
  intro: string[]
  sections: LifeEventArticleSection[]
  conclusion?: string
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
  `*[_type == "lifeEvent" && slug.current == $slug][0]{title, "slug": slug.current, eyebrow, summary, urgency, checklist, faqs, article{title, intro, sections[]{heading, paragraphs, questions, afterQuestions, items[]{title, description}, checklist}, conclusion}}`,
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
