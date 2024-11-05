import {defineField, defineType} from 'sanity'

export const Header = defineType({
  name: 'header',
  title: 'Heading element',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'bottom',
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'bottomOne',
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'bottomTwo',
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'bottomThree',
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),    
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date'
    }
  ],
  preview: {
    select: {
      title: 'header',
      subtitle: 'releaseDate'
    }
  }
}) 


export const FeatureSection = defineType({
  name: 'featureSection', // Changed from "string" to a unique identifier
  title: "Post One Section",
  type: 'document',
  fields: [
    defineField({
      name: 'sectionHead',
      title: 'Section Heading', // Added title for clarity
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'sectionContent',
      title: 'Section Content', // Added title for clarity
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'sectionImage', // Fixed capitalization to match preview
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: rule => rule.required(),
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'sectionHead', // Fixed to match the actual field name
      media: 'sectionImage'
    }
  }
})
export const FeatureSectionTwo = defineType({
  name: 'featureSectionTwo', // Changed from "string" to a unique identifier
  title: "Post Two Section",
  type: 'document',
  fields: [
    defineField({
      name: 'sectionHead',
      title: 'Section Heading', // Added title for clarity
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'sectionContent',
      title: 'Section Content', // Added title for clarity
      type: 'string',
      validation: rule => rule.required().min(10).max(80)
    }),
    defineField({
      name: 'sectionImage', // Fixed capitalization to match preview
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: rule => rule.required(),
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'sectionHead', // Fixed to match the actual field name
      media: 'sectionImage'
    }
  }
})

export const AboutImage = defineType({
  name: "Image",
  type: "document",
  title: "About Image",

  fields: [
    defineField({
      name: 'Image',
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: rule => rule.required(),
        }
      ]
    })
  ]
}) 