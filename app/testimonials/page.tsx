import type { Metadata } from "next"
import TestimonialsContent from "@/components/testimonials-content"

export const metadata: Metadata = {
  title: "Patient Testimonials | Northcote Family Dentist",
  description: "Read what our patients say about their experience at Northcote Family Dentist",
}

export default function TestimonialsPage() {
  return <TestimonialsContent />
}
