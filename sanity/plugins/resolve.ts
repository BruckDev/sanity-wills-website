/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import {resolveHref} from '@/sanity/lib/utils'
import {defineDocuments, defineLocations} from 'sanity/presentation'

export const mainDocuments = defineDocuments([
  {route: '/for-attorneys', filter: `_type == "attorneyProgram" && _id == "attorneyProgram"`},
  {
    route: '/projects/:slug',
    filter: `_type == "project" && slug.current == $slug`,
  },
  {
    route: '/:slug',
    filter: `_type == "page" && slug.current == $slug`,
  },
])

export const locations = {
  attorneyProgram: defineLocations({
    locations: [
      {title: 'For Attorneys / Advertise', href: '/for-attorneys'},
      {title: 'Terms', href: '/terms'},
      {title: 'Editorial policy', href: '/editorial-policy'},
      {title: 'How listings work', href: '/how-listings-work'},
    ],
  }),
  settings: defineLocations({
    message: 'This document is used on all pages',
    tone: 'caution',
  }),
  home: defineLocations({
    message: 'This document is used to render the front page',
    tone: 'positive',
    locations: [{title: 'Home', href: resolveHref('home')!}],
  }),
  project: defineLocations({
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('project', doc?.slug)!,
        },
      ],
    }),
  }),
  page: defineLocations({
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('page', doc?.slug)!,
        },
      ],
    }),
  }),
}
