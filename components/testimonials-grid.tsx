"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Pediatric", "Cosmetic", "Emergency"]

  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      category: "Cosmetic",
      avatar: "/images/patient-avatar-1.jpg",
      text: "Dr. Smith transformed my smile! The Invisalign treatment was comfortable and the results exceeded my expectations. Professional, caring, and the results are fantastic.",
      stars: 5,
      service: "Invisalign",
    },
    {
      id: 2,
      name: "Michael T.",
      category: "Emergency",
      avatar: "/images/patient-avatar-2.jpg",
      text: "Pain-free root canal experience! I was dreading the procedure but Dr. Kumar made it completely comfortable. Amazing technique and gentle care.",
      stars: 5,
      service: "Root Canal",
    },
    {
      id: 3,
      name: "The Chen Family",
      category: "Pediatric",
      avatar: "/images/patient-avatar-3.jpg",
      text: "Friendly team, modern facility! Our kids actually look forward to dental visits now. The staff are wonderful with children and make them feel comfortable.",
      stars: 5,
      service: "Family Dentistry",
    },
    {
      id: 4,
      name: "David Thompson",
      category: "Cosmetic",
      avatar: "/images/patient-avatar-2.jpg",
      text: "Same-day crown service was incredible. Walked in with a broken tooth, left with a perfect crown. The technology here is impressive!",
      stars: 5,
      service: "Same Day Crowns",
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      category: "Pediatric",
      avatar: "/images/patient-avatar-1.jpg",
      text: "The entire team is wonderful with kids. They explain everything in a way children understand and make them feel comfortable throughout.",
      stars: 5,
      service: "Family Dentistry",
    },
    {
      id: 6,
      name: "James Wilson",
      category: "Emergency",
      avatar: "/images/patient-avatar-3.jpg",
      text: "Severe toothache on a Sunday, they arranged emergency care. Professional, compassionate, and got me out of pain quickly. Thank you!",
      stars: 5,
      service: "Emergency Care",
    },
  ]

  const filteredTestimonials =
    activeFilter === "All" ? testimonials : testimonials.filter((testimonial) => testimonial.category === activeFilter)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} - Happy dental patient sharing positive experience`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
