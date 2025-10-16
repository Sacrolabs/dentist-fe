import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const sanityReadClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for better performance on Amplify
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN, // Required for private datasets
})

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
})
