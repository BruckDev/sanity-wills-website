// Factual, unpaid listings compiled from each firm's own public website on 2026-10-17.
// No affiliation, recommendation, or bar-status verification is implied.
export const initialAttorneyListings = [
  {
    id: 'levenfeld-pearlstein',
    name: 'Levenfeld Pearlstein, LLC',
    state: 'illinois',
    city: 'chicago',
    zip: '60606',
    address: '120 S Riverside Plaza, Suite 1800, Chicago, IL 60606',
    phone: '+13123468380',
    websiteUrl: 'https://www.lplegal.com/',
    sourceUrl: 'https://www.lplegal.com/contact/',
    practiceSourceUrl: 'https://www.lplegal.com/services/trusts-estates/',
    summary:
      'The firm lists estate planning, trust and estate administration, and related litigation among its practice areas.',
    sourceCheckedAt: '2026-10-17',
  },
  {
    id: 'morgan-legal-group',
    name: 'Morgan Legal Group',
    state: 'new-york',
    city: 'new-york',
    zip: '10038',
    address: '15 Maiden Lane, Suite 905, New York, NY 10038',
    phone: '+18885291315',
    websiteUrl: 'https://www.morganlegalny.com/',
    sourceUrl: 'https://www.morganlegalny.com/',
    practiceSourceUrl: 'https://www.morganlegalny.com/',
    summary:
      'The firm lists estate planning, wills, trusts, probate, and elder law among its practice areas.',
    sourceCheckedAt: '2026-10-17',
  },
  {
    id: 'keystone-law-group',
    name: 'Keystone Law Group, P.C.',
    state: 'california',
    city: 'los-angeles',
    zip: '90064',
    address: '11300 West Olympic Blvd., Suite 910, Los Angeles, CA 90064',
    phone: '+13104449060',
    websiteUrl: 'https://keystone-law.com/',
    sourceUrl: 'https://keystone-law.com/contact-us/',
    practiceSourceUrl: 'https://keystone-law.com/contact-us/',
    summary:
      'The firm lists probate and estate litigation services. Ask the office whether it handles the type of matter you need.',
    sourceCheckedAt: '2026-10-17',
  },
  {
    id: 'texas-trust-law',
    name: 'Texas Trust Law',
    state: 'texas',
    city: 'austin',
    zip: '78701',
    address: '1601 Rio Grande, Suite 550, Austin, TX 78701',
    phone: '+15124808828',
    websiteUrl: 'https://www.texastrustlaw.com/',
    sourceUrl: 'https://www.texastrustlaw.com/contact-us/',
    practiceSourceUrl: 'https://www.texastrustlaw.com/',
    summary: 'The firm lists estate planning, trusts, and probate among its practice areas.',
    sourceCheckedAt: '2026-10-17',
  },
]

export type AttorneyListing = (typeof initialAttorneyListings)[number]
