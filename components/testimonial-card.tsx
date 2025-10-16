"use client"

import { useState } from "react"
import { Star, ExternalLink } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: string
  name: string
  text: string
  stars: number
  avatarUrl?: string | null
  relativeTime?: string
  reviewLink?: string
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const shouldTruncate = testimonial.text.length > 150

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
      {/* Google Review Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </span>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-2 mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
        {testimonial.relativeTime && (
          <span className="text-gray-500 text-sm ml-2">{testimonial.relativeTime}</span>
        )}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-4">
        {shouldTruncate && !isExpanded
          ? `${testimonial.text.substring(0, 150)}...`
          : testimonial.text}
      </p>

      {/* Read More/Less Button */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm font-medium hover:underline mb-4"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {testimonial.avatarUrl && !imageError ? (
            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 relative">
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">
                {testimonial.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-secondary">{testimonial.name}</p>
          </div>
        </div>

        {/* View on Google Link */}
        {testimonial.reviewLink && (
          <a
            href={testimonial.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            title="View on Google"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}
