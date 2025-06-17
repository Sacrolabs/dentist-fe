import { Zap, Smile, Clock, Stethoscope } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      id: "checkups",
      title: "Routine Exams & Check-ups",
      description: "Regular check-ups to catch small problems before they become serious issues.",
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      link: "/services#checkups",
    },
    {
      id: "implants",
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth.",
      icon: <Zap className="h-8 w-8 text-primary" />,
      link: "/services#implants",
    },
    {
      id: "invisalign",
      title: "Invisalign",
      description: "Straighten your teeth discreetly with clear, removable aligners.",
      icon: <Smile className="h-8 w-8 text-primary" />,
      link: "/services#invisalign",
    },
    {
      id: "crowns",
      title: "Same Day Crowns",
      description: "Custom-made crowns in a single visit with our advanced technology.",
      icon: <Clock className="h-8 w-8 text-primary" />,
      link: "/services#crowns",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Comprehensive Dental Care</h2>
          <p className="text-gray-600">
            From routine check-ups to advanced restorative treatments, we offer a full range of dental services to meet
            your family's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary hover:text-primary/80 text-sm font-medium">
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 btn-texture">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
