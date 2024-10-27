import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'header',
  title: 'Heading element',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
    }),
  ],
})
export const typeForm = defineType({
  name: 'navigation',
  title: 'Heading element',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
    }),
  ],
})