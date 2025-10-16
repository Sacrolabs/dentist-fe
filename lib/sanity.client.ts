import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const sanityReadClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for fresh data
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN, // Required for private datasets
})

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
})
