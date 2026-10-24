export const homeIntroduction = {
  title: 'Protect what matters\nwith guidance from Wills.com',
  description:
    'Straightforward guidance, trusted tools, and estate-planning education for every stage of life.',
  ctaLabel: 'Explore your options',
  ctaHref: '#plan-chooser-title',
  attorneyCtaLabel: 'Find an attorney',
  attorneyCtaHref: '/find-an-attorney',
  photoAlt: 'A multigenerational family spending time together at home',
  lifeStages: [
    {
      label: 'Starting a family',
      href: '/life-events/new-parents',
      imagePath: '/images/estate-planning/icons/family.svg',
    },
    {
      label: 'Buying a home',
      href: '/life-events/new-homeowners',
      imagePath: '/images/estate-planning/icons/home.svg',
    },
    {
      label: 'Planning your legacy',
      href: '/estate-planning',
      imagePath: '/images/estate-planning/icons/legacy.svg',
    },
    {
      label: 'Supporting someone after a loss',
      href: '/life-events',
      imagePath: '/images/estate-planning/icons/support.svg',
    },
  ],
  planningTopics: [
    {
      label: 'Financial POA',
      href: '/estate-planning',
      imagePath: '/images/estate-planning/icons/financial-poa.svg',
    },
    {
      label: 'Advance Healthcare Directive',
      href: '/estate-planning',
      imagePath: '/images/estate-planning/icons/healthcare-directive.svg',
    },
    {
      label: 'Living Trust',
      href: '/trusts',
      imagePath: '/images/estate-planning/icons/living-trust.svg',
    },
    {label: 'Probate', href: '/wills', imagePath: '/images/estate-planning/icons/probate.svg'},
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
