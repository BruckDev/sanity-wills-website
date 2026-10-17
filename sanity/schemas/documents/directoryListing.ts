import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'directoryListing',
  title: 'Public-source directory listing',
  type: 'document',
  description:
    'Unpaid factual listings. These records are never rendered as sponsored or bar-verified.',
  fields: [
    ...['id', 'name', 'state', 'city', 'zip', 'address', 'phone', 'summary'].map((name) =>
      defineField({
        name,
        type: name === 'summary' ? 'text' : 'string',
        validation: (rule) => rule.required(),
      }),
    ),
    ...['websiteUrl', 'sourceUrl', 'practiceSourceUrl'].map((name) =>
      defineField({
        name,
        type: 'url',
        validation: (rule) => rule.required().uri({scheme: ['https']}),
      }),
    ),
    defineField({name: 'sourceCheckedAt', type: 'date', validation: (rule) => rule.required()}),
    defineField({
      name: 'suppressed',
      title: 'Hide listing (including launch fallback with the same ID)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'address'}},
})
