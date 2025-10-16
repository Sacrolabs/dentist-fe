import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@sanity/client'
import { services } from '@/lib/services-data'

async function run() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN
  const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01'

  if (!projectId || !dataset) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local')
  }
  if (!token) {
    throw new Error('Missing SANITY_API_TOKEN (or SANITY_API_READ_TOKEN) in .env.local for seeding')
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const ops = services.map((s) => {
    const doc = {
      _id: `service.${s.id}`,
      _type: 'service',
      serviceId: s.id,
      title: s.title,
      shortDescription: s.shortDescription,
      benefits: s.benefits || [],
      details: (s.details || []).map((d) => ({ heading: d.heading, content: d.content })),
      cta: s.cta || undefined,
      // image intentionally skipped in seed; upload in Studio
    }

    return {
      createOrReplace: doc,
    }
  })

  const tx = client.transaction()
  ops.forEach((op) => tx.createOrReplace(op.createOrReplace as any))

  await tx.commit()
  console.log(`Seeded ${ops.length} services to Sanity`) 
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
