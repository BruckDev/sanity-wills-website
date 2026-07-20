import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'planningTool',
  title: 'Planning tool',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'eyebrow', title: 'Label', type: 'string'}),
    defineField({name: 'summary', type: 'text', rows: 3}),
    defineField({
      name: 'kind',
      type: 'string',
      options: {list: ['readiness', 'will-trust', 'calculator', 'guide']},
    }),
    defineField({name: 'time', title: 'Estimated time', type: 'string'}),
  ],
})
