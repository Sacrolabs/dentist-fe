import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ShareExperience() {
  // Use environment variable with fallback
  const reviewLink = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_LINK ||
    "https://g.page/r/CYlfLPJR3jqLEAE/review"

  const viewReviewsLink = process.env.NEXT_PUBLIC_GOOGLE_VIEW_REVIEWS_LINK ||
    "https://www.google.com/search?q=sunnynook+dentist&oq=su#mpd=~12828877675563599308/customers/reviews"

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-bold text-secondary mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear about your visit! Your feedback helps us continue providing exceptional dental care and
            helps other patients feel confident in choosing us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary btn-texture">
              <Link target="_blank" href={reviewLink} className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Leave a Google Review
              </Link>
            </Button>

            <Button asChild variant="outline" className="btn-secondary hover:bg-secondary/70">
              <Link target="_blank" href={viewReviewsLink} className="flex items-center gap-2">
                View all reviews
                <span className="arrow-icon">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
