import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@sanity/client'

async function run() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN
  const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01'

  if (!projectId || !dataset || !token) {
    throw new Error('Missing required env vars')
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const emergencyContent = {
    _id: 'emergency.default',
    _type: 'emergency',
    heroTitle: 'Dental Emergency Services',
    heroSubtitle: 'We\'re Here When You Need Us Most',
    heroDescription: 'Experiencing a dental emergency? Don\'t wait. Our experienced team is ready to help you with urgent dental care. Call us immediately for prompt, professional emergency dental services.',
    hotlineTitle: 'Emergency Dental Hotline',
    hotlineDescription: 'Dental emergency? Don\'t wait - we\'re here to help 24/7',
    emergencyPhone: '+64273000004',
    emergencyPhoneLabel: 'Emergency:',
    availabilityText: 'Available for urgent dental care',
    emergencyTypes: 'Severe toothache, broken teeth, lost fillings, dental trauma',
    whenToCallTitle: 'When to Call for Emergency Care:',
    whenToCallItems: [
      'Severe, persistent toothache',
      'Knocked-out or broken teeth',
      'Lost fillings or crowns',
      'Facial swelling or abscess',
      'Bleeding that won\'t stop',
      'Jaw injury or trauma',
    ],
    bannerTitle: 'Dental Emergency?',
    bannerDescription: 'Severe toothache, broken teeth, or dental trauma? Don\'t wait - call us immediately.',
  }

  const tx = client.transaction()
  tx.createOrReplace(emergencyContent as any)
  await tx.commit()

  console.log('Seeded emergency content to Sanity')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
