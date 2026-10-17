import {attorneyProgramContent} from '@/sanity/lib/attorneyProgramContent'
import {defineType, type FieldDefinition} from 'sanity'

// Keep the launch defaults and editable Studio fields in sync, including all display copy.
function contentFields(content: Record<string, unknown>): FieldDefinition[] {
  return Object.entries(content).map(([name, value]): FieldDefinition => {
    const title = name.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())
    if (Array.isArray(value)) {
      return {
        name,
        title,
        type: 'array',
        of:
          typeof value[0] === 'string'
            ? [{type: 'string'}]
            : [{type: 'object', fields: contentFields(value[0])}],
      }
    }
    if (value && typeof value === 'object')
      return {name, title, type: 'object', fields: contentFields(value as Record<string, unknown>)}
    if (name.endsWith('Url')) {
      return {
        name,
        title,
        type: 'url',
        description: 'Optional HTTPS link. Leave empty to use the application or email fallback.',
        validation: (rule) => rule.uri({scheme: ['https']}),
      }
    }
    return {name, title, type: typeof value === 'string' && value.length > 140 ? 'text' : 'string'}
  })
}

export default defineType({
  name: 'attorneyProgram',
  title: 'For Attorneys / Advertise',
  type: 'document',
  initialValue: attorneyProgramContent,
  fields: contentFields(attorneyProgramContent),
  preview: {prepare: () => ({title: 'Founding Attorney Program'})},
})
