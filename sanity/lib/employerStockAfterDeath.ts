import body from './employerStockAfterDeathBody.json'

const slug = 'employer-stock-after-death'
const title =
  'My spouse died unexpectedly and had employer stock. Why is the company asking for a court certificate?'
const excerpt =
  'Learn why an employer or stock-plan administrator may ask for proof of court appointment, what to gather, and when a simpler estate procedure may apply.'
const image = '/images/insights/employer-stock-after-death.webp'
const alt = 'Estate planning papers and a checklist beside a framed family photo'

export const employerStockAfterDeathCard = {
  title,
  description: excerpt,
  href: `/insights/${slug}`,
  category: 'Family planning',
  image,
  alt,
}

export const employerStockAfterDeathInsight = {
  slug,
  title,
  excerpt,
  articleType: 'Article',
  estimatedReadTime: '5 min read',
  coverImage: {asset: {url: image}, alt},
  body,
  seo: {title: 'Employer Stock After a Spouse Dies', description: excerpt},
  display: {
    closingTitle: 'Find local probate guidance',
    closingText:
      'An estate-planning or probate attorney can help you understand which documents and procedures apply to your situation.',
    closingCta: {href: '/find-an-attorney', label: 'Find an attorney', style: 'primary'},
  },
}
