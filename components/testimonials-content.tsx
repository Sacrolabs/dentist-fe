"use client"

import { useState } from "react"
import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsGridClient from "@/components/testimonials-grid-client"
import ShareExperience from "@/components/share-experience"

export default function TestimonialsContent() {
  const [totalReviews, setTotalReviews] = useState(0)

  return (
    <main className="pt-16">
      <TestimonialsHero totalReviews={totalReviews} />
      <TestimonialsGridClient onReviewsLoad={setTotalReviews} />
      <ShareExperience />
    </main>
  )
}
