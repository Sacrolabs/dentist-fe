import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'emergency',
  title: 'Emergency Content',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Emergency Hotline Section
    defineField({
      name: 'hotlineTitle',
      title: 'Hotline Title',
      type: 'string',
      initialValue: 'Emergency Dental Hotline',
    }),
    defineField({
      name: 'hotlineDescription',
      title: 'Hotline Description',
      type: 'text',
      initialValue: 'Dental emergency? Don\'t wait - we\'re here to help 24/7',
    }),
    defineField({
      name: 'emergencyPhone',
      title: 'Emergency Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emergencyPhoneLabel',
      title: 'Emergency Phone Label',
      type: 'string',
      initialValue: 'Emergency:',
    }),
    defineField({
      name: 'availabilityText',
      title: 'Availability Text',
      type: 'string',
      initialValue: 'Available for urgent dental care',
    }),
    defineField({
      name: 'emergencyTypes',
      title: 'Common Emergency Types',
      type: 'string',
      description: 'Comma-separated list',
      initialValue: 'Severe toothache, broken teeth, lost fillings, dental trauma',
    }),

    // When to Call Section
    defineField({
      name: 'whenToCallTitle',
      title: 'When to Call Title',
      type: 'string',
      initialValue: 'When to Call for Emergency Care:',
    }),
    defineField({
      name: 'whenToCallItems',
      title: 'When to Call Items',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Severe, persistent toothache',
        'Knocked-out or broken teeth',
        'Lost fillings or crowns',
        'Facial swelling or abscess',
        'Bleeding that won\'t stop',
        'Jaw injury or trauma',
      ],
    }),

    // Emergency Contact Banner
    defineField({
      name: 'bannerTitle',
      title: 'Emergency Banner Title',
      type: 'string',
      initialValue: 'Dental Emergency?',
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Emergency Banner Description',
      type: 'text',
      initialValue: 'Severe toothache, broken teeth, or dental trauma? Don\'t wait - call us immediately.',
    }),
  ],
  preview: {
    select: { title: 'heroTitle' },
  },
})
