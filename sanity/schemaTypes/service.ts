import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceId',
      title: 'Service ID',
      type: 'string',
      description: 'Stable ID used in routes (e.g., checkups, root-canal)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        defineField({
          name: 'detail',
          title: 'Detail',
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'content', title: 'Content', type: 'text' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'text',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'serviceId' },
  },
})
