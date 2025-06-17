import type { Metadata } from "next"
import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsGrid from "@/components/testimonials-grid"
import VideoTestimonials from "@/components/video-testimonials"
import ShareExperience from "@/components/share-experience"

export const metadata: Metadata = {
  title: "Patient Testimonials | Northcote Family Dentist",
  description: "Read what our patients say about their experience at Northcote Family Dentist",
}

export default function TestimonialsPage() {
  return (
    <main className="pt-16">
      <TestimonialsHero />
      <TestimonialsGrid />
      <VideoTestimonials />
      <ShareExperience />
    </main>
  )
}
