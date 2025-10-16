import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-Demand Revalidation API Route
 *
 * This endpoint can be called by Sanity webhooks to trigger instant updates
 * when content is changed in the CMS, without waiting for the 60-second ISR timer.
 *
 * Usage from Sanity webhook:
 * POST https://your-domain.com/api/revalidate
 * Headers: { "x-revalidate-secret": "your-secret-token" }
 * Body: { "path": "/services", "type": "service" }
 *
 * Setup in Sanity Studio:
 * 1. Go to: https://sanity.io/manage/personal/projects/xjbiwocx
 * 2. API → Webhooks → Create webhook
 * 3. Name: "Revalidate Amplify Site"
 * 4. URL: https://main.d9vk69z76yibz.amplifyapp.com/api/revalidate
 * 5. Dataset: production
 * 6. Trigger on: Create, Update, Delete
 * 7. Filter: _type == "service" || _type == "teamMember" || _type == "emergency"
 * 8. HTTP Headers: { "x-revalidate-secret": "your-secret-here" }
 */
export async function POST(request: NextRequest) {
  try {
    // Verify the revalidation secret to prevent unauthorized revalidation
    const secret = request.headers.get('x-revalidate-secret')
    const expectedSecret = process.env.REVALIDATE_SECRET

    if (!expectedSecret) {
      console.error('REVALIDATE_SECRET not configured')
      return NextResponse.json(
        { error: 'Revalidation not configured' },
        { status: 500 }
      )
    }

    if (secret !== expectedSecret) {
      console.error('Invalid revalidation secret')
      return NextResponse.json(
        { error: 'Invalid secret' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { path, type, tag } = body

    // Revalidate by path (e.g., /services, /team)
    if (path) {
      await revalidatePath(path)
      console.log(`Revalidated path: ${path}`)
    }

    // Revalidate by tag (if using cache tags)
    if (tag) {
      await revalidateTag(tag)
      console.log(`Revalidated tag: ${tag}`)
    }

    // Revalidate based on content type
    if (type) {
      switch (type) {
        case 'service':
          await revalidatePath('/services')
          await revalidatePath('/services/[serviceId]', 'page')
          console.log('Revalidated all service pages')
          break
        case 'teamMember':
          await revalidatePath('/team')
          console.log('Revalidated team page')
          break
        case 'emergency':
          await revalidatePath('/emergency')
          console.log('Revalidated emergency page')
          break
        case 'hero':
        case 'siteSettings':
          await revalidatePath('/')
          console.log('Revalidated home page')
          break
        default:
          // Revalidate all if type is unknown
          await revalidatePath('/', 'layout')
          console.log('Revalidated all pages')
      }
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path,
      type,
      tag,
    })
  } catch (error) {
    console.error('Error revalidating:', error)
    return NextResponse.json(
      {
        error: 'Error revalidating',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Also support GET for manual testing
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const path = request.nextUrl.searchParams.get('path') || '/'

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: 'Invalid secret' },
      { status: 401 }
    )
  }

  await revalidatePath(path)

  return NextResponse.json({
    revalidated: true,
    path,
    now: Date.now(),
  })
}
