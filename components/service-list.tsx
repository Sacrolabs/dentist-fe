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
      image: "/images/root-canal-treatment.jpg",
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
      image: "/images/dental-crown-procedure.jpg",
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
      image: "/images/white-fillings.jpg",
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
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div key={service.id} className="border-b border-gray-200 pb-12 md:pb-16 last:border-b-0" id={service.id}>
                <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? 'md:grid-flow-col' : 'md:grid-flow-col-dense'
                }`}>
                  {/* Content Section */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-secondary mb-4">Key Benefits</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start group">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary flex-shrink-0 mr-3 mt-0.5 text-sm font-medium group-hover:bg-primary group-hover:text-white transition-colors">
                                ✓
                              </span>
                              <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="bg-primary hover:bg-primary/90 btn-texture text-white px-8 py-3 text-lg">
                        <Link href={`/services/${service.id}`} className="flex items-center gap-2">
                          Learn More About {service.title.split(' ')[0]}
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="relative group">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={`${service.title} - Professional dental procedure and treatment`}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Decorative overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
