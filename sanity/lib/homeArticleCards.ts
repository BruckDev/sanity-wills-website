export const homeArticleCards = [
  {
    title: 'Will vs. Trust: Which Is Right for Your Family?',
    description: 'Understand the key differences and find the option that may fit your goals.',
    href: '/trusts',
    image: '/images/estate-planning/will-document.png',
    alt: 'A will and testament with a pen',
  },
  {
    title: 'Naming Guardians for Minor Children',
    description: 'Learn what to consider when choosing guardians and making your wishes clear.',
    href: '/life-events/new-parents',
    image: '/images/estate-planning/hero-family-young.png',
    alt: 'A family spending time together outdoors',
  },
  {
    title: 'Estate Planning for New Homeowners',
    description: 'Discover key steps to protect your home and plan for the future.',
    href: '/life-events/new-homeowners',
    image: '/images/home/life-events/new-homeowners.jpg',
    alt: 'A family in front of their home',
  },
  {
    title: 'Understanding Wills: Where to Start',
    description:
      'Explore the basics of wills and the questions to bring to your planning conversation.',
    href: '/wills',
    image: '/images/wills/wills-101.png',
    alt: 'Illustrated will with family and property symbols',
  },
  {
    title: 'Estate Planning When You Get Married',
    description: 'Explore planning questions for the next chapter of your life together.',
    href: '/life-events/getting-married',
    image: '/images/home/life-events/getting-married.jpg',
    alt: 'A couple celebrating their marriage',
  },
  {
    title: 'Estate Planning for Business Owners',
    description:
      'Consider how your business fits into the plans you make for your family and future.',
    href: '/life-events/starting-a-business',
    image: '/images/home/life-events/business-owners.jpg',
    alt: 'A small business owner in her shop',
  },
]

export type HomeArticleCard = (typeof homeArticleCards)[number]
