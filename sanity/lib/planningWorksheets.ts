export type PlanningWorksheet = {
  title: string
  intro: string
  privacyNote: string
  statusLabel: string
  unansweredLabel: string
  doneLabel: string
  followUpLabel: string
  notApplicableLabel: string
  notesLabel: string
  summaryTitle: string
  progressLabel: string
  nextSteps: string
  printLabel: string
  downloadLabel: string
  disclaimer: string
  questions: {_key: string; prompt: string; help: string}[]
}

const shared = {
  privacyNote:
    'Your answers stay in this page and disappear when you reload or leave. Download or print a copy to keep them. Use general notes; do not enter passwords, account numbers, or other sensitive details.',
  statusLabel: 'Your progress',
  unansweredLabel: 'Not reviewed yet',
  doneLabel: 'Reviewed',
  followUpLabel: 'Needs follow-up',
  notApplicableLabel: 'Not applicable',
  notesLabel: 'Notes or questions (optional)',
  summaryTitle: 'Your planning summary',
  progressLabel: 'Items reviewed',
  nextSteps:
    'Bring your follow-up questions to the people or professionals involved. Reviewing this worksheet does not mean your legal documents are complete.',
  printLabel: 'Print / Save as PDF',
  downloadLabel: 'Download summary (.txt)',
  disclaimer:
    'This worksheet organizes a conversation. It does not create or change a will, guardian nomination, beneficiary designation, or other legal document. A qualified attorney can advise on your circumstances and state law.',
}

export const planningWorksheets: Record<string, PlanningWorksheet> = {
  'family-records-checklist': {
    ...shared,
    title: 'Make important records easier to find.',
    intro:
      'Work through the places, records, and contacts your family may need. Note what is organized and what still needs a conversation. You can also print a blank worksheet.',
    questions: [
      {
        _key: 'documents',
        prompt: 'Where are your planning documents kept?',
        help: 'Identify where to find your will, any trust documents, powers of attorney, and health-care instructions. Note a location rather than copying private details.',
      },
      {
        _key: 'contacts',
        prompt: 'Who are the key people to contact?',
        help: 'Consider your attorney, financial professional, executor, and trusted family contact. Keep their actual contact information in your secure records.',
      },
      {
        _key: 'accounts',
        prompt: 'Is there a list of financial institutions and policies?',
        help: 'Include banks, retirement plans, insurance providers, and any employer benefits. Avoid recording account numbers here.',
      },
      {
        _key: 'property',
        prompt: 'Can someone locate property and debt records?',
        help: 'Think about deeds, mortgages, vehicle records, business interests, and outstanding obligations.',
      },
      {
        _key: 'digital',
        prompt: 'Have you planned how digital records can be found?',
        help: 'Identify important digital services and ask about their legacy-contact options. Do not put passwords or access codes in this worksheet.',
      },
      {
        _key: 'share',
        prompt: 'Does a trusted person know where to start?',
        help: 'Plan a conversation about where your records are stored and how to request access appropriately. Choose a future review date.',
      },
    ],
  },
  'beneficiary-review': {
    ...shared,
    title: 'Review the people named on your accounts.',
    intro:
      'Use this worksheet alongside records from your account providers. Track what you have checked and the questions to resolve before requesting any changes.',
    questions: [
      {
        _key: 'inventory',
        prompt: 'Which accounts and policies need a review?',
        help: 'Consider retirement accounts, life insurance, employer benefits, and accounts with payable-on-death or transfer-on-death designations.',
      },
      {
        _key: 'current',
        prompt: 'Have you confirmed the current designations with each provider?',
        help: 'Use current provider records rather than relying on memory or the wording of your will. Record only a general reminder here.',
      },
      {
        _key: 'backup',
        prompt: 'Have you reviewed primary and backup beneficiaries?',
        help: 'Check the names and allocations shown in the provider records, including what happens if a named person cannot receive the benefit.',
      },
      {
        _key: 'changes',
        prompt: 'Have family or life changes prompted new questions?',
        help: 'Consider a marriage, divorce, birth, death, or a change in relationships. Ask the provider and your attorney what needs attention.',
      },
      {
        _key: 'care',
        prompt: 'Does anyone need special planning?',
        help: 'Ask an attorney about intended beneficiaries who are minors, receive means-tested benefits, or may need help managing property.',
      },
      {
        _key: 'confirm',
        prompt: 'Do you know the next step for unresolved items?',
        help: 'List questions for your provider or attorney. If you request changes separately, confirm they were accepted and keep the confirmation securely.',
      },
    ],
  },
  'guardian-conversation': {
    ...shared,
    title: 'Prepare for a thoughtful guardian conversation.',
    intro:
      'Explore the practical questions before asking someone to care for your children. Use general notes to prepare for a family conversation and an attorney appointment.',
    questions: [
      {
        _key: 'values',
        prompt: 'What matters most in your children’s daily care?',
        help: 'Think about routines, education, cultural or religious traditions, sibling relationships, and connections with extended family.',
      },
      {
        _key: 'people',
        prompt: 'Who could provide that care?',
        help: 'Consider willingness, health, location, household circumstances, and the relationship your children already have with each person.',
      },
      {
        _key: 'conversation',
        prompt: 'Have you asked about willingness and practical concerns?',
        help: 'Discuss expectations openly. Make room for questions about housing, time, work, and the support that would be available.',
      },
      {
        _key: 'backup',
        prompt: 'Have you considered a backup person?',
        help: 'Think through who you would want to discuss if your first choice could not take on the role.',
      },
      {
        _key: 'money',
        prompt: 'Who would help manage money for your children?',
        help: 'Prepare questions about financial support and whether the person managing property should be different from the person providing daily care.',
      },
      {
        _key: 'legal',
        prompt: 'What needs to be discussed with an attorney?',
        help: 'Ask how to document your wishes under applicable law and when to review them. This conversation worksheet does not appoint a guardian.',
      },
    ],
  },
}
