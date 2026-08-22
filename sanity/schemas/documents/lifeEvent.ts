import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'lifeEvent',
  title: 'Life event',
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
    defineField({name: 'urgency', title: 'Why act now', type: 'text', rows: 3}),
    defineField({name: 'checklist', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({
      name: 'article',
      title: 'Detailed article',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({
          name: 'intro',
          type: 'array',
          of: [defineArrayMember({type: 'text', rows: 3})],
        }),
        defineField({
          name: 'sections',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'heading', type: 'string'}),
                defineField({
                  name: 'paragraphs',
                  type: 'array',
                  of: [defineArrayMember({type: 'text', rows: 3})],
                }),
                defineField({
                  name: 'questions',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
                defineField({
                  name: 'afterQuestions',
                  title: 'Paragraphs after questions',
                  type: 'array',
                  of: [defineArrayMember({type: 'text', rows: 3})],
                }),
                defineField({
                  name: 'items',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({name: 'title', type: 'string'}),
                        defineField({name: 'description', type: 'text', rows: 3}),
                      ],
                    }),
                  ],
                }),
                defineField({
                  name: 'checklist',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
                defineField({
                  name: 'afterChecklist',
                  title: 'Paragraphs after checklist',
                  type: 'array',
                  of: [defineArrayMember({type: 'text', rows: 3})],
                }),
              ],
            }),
          ],
        }),
        defineField({name: 'conclusion', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
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
