import { NextResponse } from 'next/server'

// Cache duration: 12 hours
export const revalidate = 43200 // 12 hours in seconds

type SerpApiReview = {
  user: {
    name: string
    thumbnail?: string
  }
  rating: number
  snippet: string
  date: string
  link: string
}

type SerpApiResponse = {
  place_info?: {
    reviews: number
  }
  reviews?: SerpApiReview[]
  error?: string
}

type TransformedReview = {
  id: string
  name: string
  text: string
  stars: number
  avatarUrl: string | null
  relativeTime: string
  timestamp: number
  reviewLink: string
}

function getRelativeTime(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp * 1000 // Convert to milliseconds
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  return 'Just now'
}

export async function GET() {
  try {
    const apiKey = process.env.SERPAPI_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID

    if (!apiKey) {
      console.error('Missing SERPAPI_API_KEY environment variable')
      return NextResponse.json(
        {
          error: 'API configuration error',
          message: 'Please add SERPAPI_API_KEY to your .env.local file',
          reviews: [],
          totalReviews: 0
        },
        { status: 200 }
      )
    }

    if (!placeId) {
      console.error('Missing GOOGLE_PLACE_ID environment variable')
      return NextResponse.json(
        {
          error: 'Place ID configuration error',
          message: 'Please add GOOGLE_PLACE_ID to your .env.local file',
          reviews: [],
          totalReviews: 0
        },
        { status: 200 }
      )
    }

    // Step 1: Get data_id from place_id using Google Maps Place Results API
    const placeUrl = new URL('https://serpapi.com/search')
    placeUrl.searchParams.set('engine', 'google_maps')
    placeUrl.searchParams.set('type', 'place')
    placeUrl.searchParams.set('place_id', placeId)
    placeUrl.searchParams.set('api_key', apiKey)

    const placeResponse = await fetch(placeUrl.toString(), {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!placeResponse.ok) {
      console.error('Failed to get data_id from place_id:', placeResponse.status)
      return NextResponse.json(
        {
          error: 'Failed to fetch place data',
          message: 'Could not convert place_id to data_id',
          reviews: [],
          totalReviews: 0
        },
        { status: 200 }
      )
    }

    const placeData = await placeResponse.json()
    const dataId = placeData.place_results?.data_id

    if (!dataId) {
      console.error('No data_id found in place results')
      return NextResponse.json(
        {
          error: 'Place data error',
          message: 'Could not find data_id for this place',
          reviews: [],
          totalReviews: 0
        },
        { status: 200 }
      )
    }

    // Step 2: Fetch reviews using data_id
    const url = new URL('https://serpapi.com/search')
    url.searchParams.set('engine', 'google_maps_reviews')
    url.searchParams.set('data_id', dataId)
    url.searchParams.set('api_key', apiKey)
    url.searchParams.set('hl', 'en')
    url.searchParams.set('sort_by', 'most_relevant')

    const response = await fetch(url.toString(), {
      next: { revalidate: 43200 }, // 12-hour cache
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('SerpApi error:', response.status, errorText)

      // Provide helpful error messages
      if (response.status === 401) {
        return NextResponse.json(
          {
            error: 'SerpApi authentication failed',
            message: 'Please check your SERPAPI_API_KEY is correct',
            reviews: [],
            totalReviews: 0
          },
          { status: 200 } // Return 200 so the page doesn't break
        )
      }

      return NextResponse.json(
        {
          error: 'Failed to fetch reviews',
          message: errorText,
          reviews: [],
          totalReviews: 0
        },
        { status: 200 } // Return 200 so the page doesn't break
      )
    }

    const data: SerpApiResponse = await response.json()

    // Check for API errors
    if (data.error) {
      console.error('SerpApi returned error:', data.error)
      return NextResponse.json({
        error: 'SerpApi error',
        message: data.error,
        reviews: [],
        totalReviews: 0
      })
    }

    // Check if we have valid data
    if (!data.reviews || data.reviews.length === 0) {
      console.warn('No reviews found in SerpApi response')
      return NextResponse.json({
        reviews: [],
        totalReviews: 0,
        count: 0
      })
    }

    const totalReviews = data.place_info?.reviews || 0

    // Transform the reviews to our format (limit to 12 most relevant)
    const reviews: TransformedReview[] = data.reviews
      .filter((review) => review.snippet && review.snippet.trim() !== '')
      .slice(0, 12) // Ensure we only return 12
      .map((review, index) => ({
        id: `${placeId}-${index}`,
        name: review.user.name || 'Anonymous',
        text: review.snippet,
        stars: review.rating || 5,
        avatarUrl: review.user.thumbnail || null,
        relativeTime: review.date || '',
        timestamp: Date.now() / 1000, // Approximate timestamp
        reviewLink: review.link || '',
      }))

    return NextResponse.json({
      reviews,
      count: reviews.length,
      totalReviews: totalReviews || reviews.length,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch reviews',
        message: error instanceof Error ? error.message : 'Unknown error',
        reviews: [],
        totalReviews: 0
      },
      { status: 200 }
    )
  }
}
