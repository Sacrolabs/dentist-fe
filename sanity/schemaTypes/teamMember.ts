import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'memberId',
      title: 'Member ID',
      type: 'string',
      description: 'Stable ID (e.g., lakshay, sherin)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
    }),
    defineField({
      name: 'fullBio',
      title: 'Full Bio',
      type: 'text',
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'string',
    }),
    defineField({
      name: 'readMore',
      title: 'Read More',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'isDentist',
      title: 'Is Dentist',
      type: 'boolean',
      description: 'Check if this is a dentist (vs support staff)',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'position', media: 'image' },
  },
})
