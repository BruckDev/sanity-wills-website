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
      imagePath: '/images/estate-planning/family-miniature.png',
    },
    {
      label: 'Buying a home',
      href: '/life-events/new-homeowners',
      imagePath: '/images/estate-planning/home-miniature.png',
    },
    {
      label: 'Planning your legacy',
      href: '/estate-planning',
      imagePath: '/images/estate-planning/legacy-miniature.png',
    },
    {
      label: 'Supporting someone after a loss',
      href: '/life-events',
      imagePath: '/images/estate-planning/support-miniature.png',
    },
  ],
  planningTopics: [
    {
      label: 'Financial POA',
      href: '/estate-planning',
      imagePath: '/images/estate-planning/financial-poa-miniature.png',
    },
    {
      label: 'Advance Healthcare Directive',
      href: '/estate-planning',
      imagePath: '/images/estate-planning/healthcare-directive-miniature.png',
    },
    {label: 'Living Trust', href: '/trusts', imagePath: '/images/estate-planning/living-trust-miniature.png'},
    {label: 'Probate', href: '/wills', imagePath: '/images/estate-planning/probate-miniature.png'},
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
