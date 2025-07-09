"use client"

import { useState, useEffect } from "react"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Devank Shah",
      avatar: "",
      text: "I recently had a root canal done and was extremely impressed with the entire experience. Dr. Lakshay did an outstanding job—he was precise, professional, and made me feel completely at ease throughout the procedure. The whole team was friendly and efficient, and everything was spot on from start to finish. Highly recommend!",
      stars: 5,
    },
    {
      id: 2,
      name: "Jenn Sus",
      avatar: "",
      text: "Had all 4 wisdom teeth removed in one go. Was surprised I didn’t need to be put to sleep as that is the feedback I had got from other dentists, but incredibly I didn’t feel a thing. Recovery was smooth and service was outstanding from Dr. Lakshay and the team. Price was also reasonable compared to multiple quotes I had before. Highly recommend.",
      stars: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      avatar: "",
      text: "Was feeling extremely nervous to have all 4 wisdom teeth extracted, my mind was quickly put to ease by Dr. Lakshay Kumar.\n Great communication and care, I'm pleasantly surprised how fast and painless the whole process was.\n Most affordable teeth extraction on the shore.\n Highly recommend",
      stars: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000) // Change testimonial every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Patients Say</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary font-medium">175+ 5-Star Reviews</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                    <div className="flex flex-col items-center text-center">
                      {/* <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={`${testimonial.name} - Happy dental patient testimonial`}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div> */}

                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                      <p className="font-semibold text-secondary">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5 text-secondary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5 text-secondary" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  activeIndex === index ? "bg-primary" : "bg-gray-300",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
