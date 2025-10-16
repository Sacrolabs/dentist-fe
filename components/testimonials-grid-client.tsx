"use client"

import useSWR from 'swr'
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
  count?: number
  error?: string
  message?: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function TestimonialsGridClient({ onReviewsLoad }: { onReviewsLoad?: (count: number) => void }) {
  const { data, error, isLoading } = useSWR<ReviewsResponse>(
    '/api/google-reviews',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      dedupingInterval: 43200000, // 12 hours in milliseconds
      revalidateOnMount: true,
      onSuccess: (data) => {
        // Pass review count to parent when data loads
        if (onReviewsLoad && data.totalReviews) {
          onReviewsLoad(data.totalReviews)
        }
      }
    }
  )

  // Loading state - show skeleton cards
  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                  <div className="flex gap-2 mb-4">
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state or no reviews
  if (error || data?.error || !data?.reviews || data.reviews.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {(error || data?.error) && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-yellow-800 font-medium mb-2">⚠️ Unable to Load Google Reviews</p>
                <p className="text-gray-600 text-sm">
                  {data?.message || 'Please check your API configuration'}
                </p>
              </div>
            )}
            <p className="text-gray-600">
              {!error && !data?.error && 'No reviews available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // Success state - show reviews
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
