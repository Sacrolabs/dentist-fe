import { Star } from "lucide-react"
import Image from "next/image"
import { getTotalReviewsCount } from "./testimonials-grid-server"

export default async function TestimonialsHero() {
  const totalReviews = await getTotalReviewsCount()

  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/happy-patients-smiling.jpg"
          alt="Happy dental patients smiling after successful treatment"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-secondary/20"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-full mb-4">
          <span className="font-semibold">Northcote's Trusted Dental Team Since 2005</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Patient Testimonials</h1>
        <div className="flex items-center justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-6 w-6 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg">
          {totalReviews > 0
            ? `Over ${totalReviews} five-star reviews from our happy patients`
            : 'Read what our patients say about their experience'}
        </p>
      </div>
    </section>
  )
}
