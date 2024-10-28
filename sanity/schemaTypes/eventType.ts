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
    defineField({
      name: 'bottom',
      type: 'string',
    }),
    defineField({
      name: 'bottomOne',
      type: 'string',
    }),
    defineField({
      name: 'bottomTwo',
      type: 'string',
    }),
    defineField({
      name: 'bottomThree',
      type: 'string',
    }),
  ],
})