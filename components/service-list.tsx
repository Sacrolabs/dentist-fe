import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServiceList() {
  const services = [
    {
      id: "checkups",
      title: "Routine Oral Exams & Check-Ups",
      shortDescription: "Regular check-ups to catch small problems early before they turn into serious issues.",
      image: "/images/dental-examination.jpg",
      benefits: [
        "Early Detection & Prevention",
        "Comprehensive Oral Health Monitoring",
        "Professional Cleaning for Healthy Smile",
        "Patient Education",
        "Avoiding Emergencies",
      ],
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      shortDescription: "Relieve pain and save your natural tooth with modern, comfortable root canal therapy.",
      image: "/images/dental-equipment.jpg",
      benefits: [
        "Relieves Tooth Pain",
        "Saves Your Natural Tooth",
        "Stops Infection Spread",
        "Restores Function",
        "Prevents Extraction & More Extensive Work",
      ],
    },
    {
      id: "crowns",
      title: "Dental Crowns",
      shortDescription: "Restore damaged teeth with durable, natural-looking dental crowns.",
      image: "/images/dental-crown-treatment.jpg",
      benefits: [
        "Protects Weak or Damaged Teeth",
        "Restores Function",
        "Natural, Aesthetic Appearance",
        "Long-Lasting Solution",
        "Same-Day Option Available",
      ],
    },
    {
      id: "fillings",
      title: "Tooth-Colored Fillings (White Fillings)",
      shortDescription: "Repair cavities with natural-looking composite resin fillings that blend with your teeth.",
      image: "/images/white-fillings-procedure.png",
      benefits: [
        "Natural Appearance",
        "Mercury-Free & Safe",
        "Conserves Tooth Structure",
        "Strong and Versatile",
        "Reduced Sensitivity",
      ],
    },
    {
      id: "implants",
      title: "Dental Implants",
      shortDescription: "Replace missing teeth with the gold standard in tooth replacement.",
      image: "/images/dental-implants.jpg",
      benefits: [
        "Closest Thing to Natural Teeth",
        "Longevity and Reliability",
        "Preserves Jawbone Health",
        "Protects Adjacent Teeth",
        "Enhanced Comfort and Confidence",
      ],
    },
    {
      id: "invisalign",
      title: "Invisalign",
      shortDescription: "Straighten your teeth discreetly with clear, removable aligners.",
      image: "/images/invisalign-treatment.jpg",
      benefits: [
        "Nearly Invisible Appearance",
        "Removable Convenience",
        "Greater Comfort",
        "Predictable, Effective Results",
        "Fewer Appointments & No Emergencies",
      ],
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="border-b border-gray-200 pb-12 md:pb-16" id={service.id}>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>

                  <h3 className="text-xl font-semibold text-secondary mb-3">Benefits</h3>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-primary/20 text-primary flex-shrink-0 mr-3 mt-0.5 text-center text-sm">
                          ✓
                        </span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="bg-primary hover:bg-primary/90 btn-texture mt-2 text-white">
                    <Link href={`/services/${service.id}`} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} - Professional dental procedure and treatment`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
