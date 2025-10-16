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

  const hero = {
    _id: 'hero.home',
    _type: 'hero',
    title: 'Northcote Family Dentist',
    subtitle: 'Affordable, Ethical, and Accessible Dentistry',
    description: 'At Northcote Family Dentist, our mission is simple: To make high-quality dentistry affordable, ethical, and accessible for every family in the Northcote and Northshore community.',
    ctaPrimaryText: 'Book Appointment',
    ctaPrimaryUrl: 'https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01',
    ctaSecondaryText: 'Call Today',
    ctaSecondaryUrl: 'tel:+64273000004',
  }

  const siteSettings = {
    _id: 'siteSettings.main',
    _type: 'siteSettings',
    siteName: 'Northcote Family Dentist',
    phone: '+64 27 300 0004',
    email: 'info@northcotefamilydentist.co.nz',
    address: 'Sunnynook, Auckland',
    servingAreas: 'Northcote, Birkenhead, Takapuna, Beach Haven, Birkdale',
    hours: [
      { day: 'Monday - Friday', hours: '8AM - 6PM' },
      { day: 'Saturday', hours: '9AM - 2PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    socialFacebook: 'https://www.facebook.com/sunnynookdentist',
    socialInstagram: 'https://www.instagram.com/sunnynookdentist',
    bookingUrl: 'https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01',
  }

  const tx = client.transaction()
  tx.createOrReplace(hero as any)
  tx.createOrReplace(siteSettings as any)
  await tx.commit()

  console.log('Seeded hero and site settings to Sanity')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
