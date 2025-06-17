import { Award } from "lucide-react"

export default function TechnologyHighlights() {
  const technologies = [
    {
      id: "crowns",
      title: "Same Day Crowns",
      description: "In-house 3D scanning & milling technology",
    },
    {
      id: "xrays",
      title: "3D Digital X-rays",
      description: "Ultra-precise diagnostics with minimal radiation",
    },
    {
      id: "invisalign",
      title: "Invisalign",
      description: "Certified provider for invisible aligners",
    },
    {
      id: "painless",
      title: "Pain-Free Dentistry",
      description: "Modern techniques for comfortable care",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-secondary mb-4">Technology Highlights</h2>
          <p className="text-gray-600">
            We've invested in some of the most advanced dental technology to make your visits faster, safer, and more
            comfortable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-1">{tech.title}</h3>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
