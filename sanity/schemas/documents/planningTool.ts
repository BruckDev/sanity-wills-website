import {defineArrayMember, defineField, defineType} from 'sanity'

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
    defineField({
      name: 'worksheet',
      title: 'Interactive worksheet',
      type: 'object',
      description:
        'Overrides the built-in worksheet for family-records-checklist, beneficiary-review, or guardian-conversation. Leave fields empty to use the default copy.',
      fields: [
        ...[
          'title',
          'statusLabel',
          'unansweredLabel',
          'doneLabel',
          'followUpLabel',
          'notApplicableLabel',
          'notesLabel',
          'summaryTitle',
          'progressLabel',
          'printLabel',
          'downloadLabel',
        ].map((name) => defineField({name, type: 'string'})),
        ...['intro', 'privacyNote', 'nextSteps', 'disclaimer'].map((name) =>
          defineField({name, type: 'text', rows: 3}),
        ),
        defineField({
          name: 'questions',
          type: 'array',
          validation: (rule) => rule.min(1).max(20),
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'prompt',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'help',
                  type: 'text',
                  rows: 3,
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {select: {title: 'prompt', subtitle: 'help'}},
            }),
          ],
        }),
      ],
    }),
  ],
})
