export const homeIntroduction = {
  title: 'Plan with clarity.\nProtect what matters.',
  description:
    'Straightforward guidance, trusted tools, and estate-planning education for every stage of life.',
  ctaLabel: 'Explore your options',
  ctaHref: '#plan-chooser-title',
  photoAlt: 'A multigenerational family spending time together at home',
  lifeStages: [
    {label: 'Starting a family', href: '/life-events/new-parents'},
    {label: 'Buying a home', href: '/life-events/new-homeowners'},
    {label: 'Planning your legacy', href: '/estate-planning'},
    {label: 'Supporting someone after a loss', href: '/life-events'},
  ],
  beginningEyebrow: 'Estate planning, made clear',
  beginningTitle: 'A clear place to begin.',
  basicsTitle: 'Learn the basics',
  basicsDescription:
    'Plain-language guides to help you understand your options at every stage of life.',
  basicsHref: '/wills',
  attorneyTitle: 'Find an estate attorney',
  attorneyDescription: 'Explore estate-planning firms and office information in your area.',
  attorneyHref: '/find-an-attorney',
  insightEyebrow: 'Planning insight',
  insightTitle: 'Will or trust: where should you start?',
  insightHref: '/trusts',
}

export type HomeIntroductionContent = typeof homeIntroduction
