import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'attorneyProfile',
  title: 'Attorney profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Attorney or firm name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'location', type: 'string'}),
    defineField({name: 'summary', type: 'text', rows: 3}),
    defineField({name: 'focusAreas', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({name: 'badges', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({
      name: 'faqs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'question', type: 'string'}),
            defineField({name: 'answer', type: 'text', rows: 3}),
          ],
        }),
      ],
    }),
  ],
})
