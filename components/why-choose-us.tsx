import { BadgeCheck } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      id: "ethical",
      title: "Ethical & Patient-Focused Care",
      description:
        "We believe dentistry should never be about pressure or sales targets. Our goal is to provide affordable, unbiased treatment options.",
    },
    {
      id: "transparent",
      title: "Transparent & Educational Approach",
      description:
        "We take the time to educate and involve you in every step of your treatment plan, explaining options in plain English.",
    },
    {
      id: "technology",
      title: "Cutting-Edge Dental Technology",
      description:
        "We've invested in advanced dental technology to make your visits faster, safer, and more comfortable.",
    },
    {
      id: "affordable",
      title: "Affordable Dentistry That Doesn't Cut Corners",
      description:
        "We're committed to keeping our prices competitive and our pricing transparent. No surprises, no hidden fees.",
    },
    {
      id: "community",
      title: "Local, Friendly, and Community-Focused",
      description:
        "We're proud to be part of the Northshore community, and even prouder to serve it with integrity and heart.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose Northcote Family Dentist?</h2>
          <p className="text-gray-600">
            We are not just your local dentists—we are your partners in long-term oral health. Our patient-first
            philosophy drives everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BadgeCheck size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
