import TestimonialCard from "@/components/testimonial-card"

type GoogleReview = {
  id: string
  name: string
  text: string
  stars: number
  avatarUrl: string | null
  relativeTime: string
  timestamp: number
  reviewLink: string
}

type ReviewsResponse = {
  reviews: GoogleReview[]
  totalReviews?: number
  error?: string
  message?: string
}

async function fetchGoogleReviews(): Promise<ReviewsResponse> {
  try {
    // Use absolute URL in production, relative in development
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
    const response = await fetch(`${baseUrl}/api/google-reviews`, {
      next: { revalidate: 43200 }, // 12-hour cache
    })

    if (!response.ok) {
      console.error('Failed to fetch reviews:', response.status)
      return { reviews: [], totalReviews: 0 }
    }

    const data = await response.json()
    return {
      reviews: data.reviews || [],
      totalReviews: data.totalReviews || 0,
      error: data.error,
      message: data.message
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return { reviews: [], totalReviews: 0 }
  }
}

export default async function TestimonialsGrid() {
  const data = await fetchGoogleReviews()

  if (data.error || data.reviews.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {data.error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">⚠️ Unable to Load Google Reviews</p>
                <p className="text-gray-600 text-sm">{data.message || 'Please check your Outscraper API configuration'}</p>
              </div>
            )}
            <p className="text-gray-600">
              {!data.error && 'No reviews available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.reviews.map((review) => (
              <TestimonialCard key={review.id} testimonial={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Export total reviews count for use in hero
export async function getTotalReviewsCount(): Promise<number> {
  const data = await fetchGoogleReviews()
  return data.totalReviews || 0
}
