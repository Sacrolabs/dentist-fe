"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ServiceList() {
  // Source of truth kept local to match homepage cards, can be moved to lib if needed
  const services = [
    {
      id: "checkups",
      title: "Routine Oral Exams & Check-Ups",
      shortDescription: "Regular check-ups to catch small problems early before they turn into serious issues.",
      image: "/images/oral_checkup.webp",
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Our Dental Services</h2>
          <p className="text-gray-600">Explore our comprehensive range of treatments. Hover or tap a card to see details.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceFlipCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

type ServiceItem = {
  id: string
  title: string
  shortDescription: string
  image?: string
  benefits: string[]
}

function ServiceFlipCard({ service }: { service: ServiceItem }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)

  return (
    <div
      id={service.id}
      className="relative h-[340px] md:h-[360px] lg:h-[340px] scroll-mt-28"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative h-full [perspective:1000px]`}
      >
        <div
          className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 !bg-white !text-foreground hover:!bg-white hover:!text-foreground hover:shadow-lg [backface-visibility:hidden] overflow-hidden"
            onClick={toggle}
            tabIndex={0}
            role="button"
            aria-label={`${service.title} details`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle()}
          >
            {/* Background image */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover blur-sm scale-110 opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-white/30" />
            </div>

            <CardHeader className="p-6 relative z-10">
              <CardTitle className="text-xl font-semibold mb-2 text-secondary">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base text-gray-600">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 p-6 relative z-10">
              {/* <Button
                variant="ghost"
                className="px-0 !text-primary hover:!text-primary/80 focus-visible:!text-primary active:!text-primary"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 bg-primary text-primary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden"
            onClick={toggle}
            tabIndex={0}
            role="button"
            aria-label={`${service.title} more details`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle()}
          >
            {/* Background image with stronger blur and darker overlay for contrast */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover blur-md scale-110 opacity-30"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
            </div>

            <CardHeader className="p-6 relative z-10">
              <CardTitle className="text-lg font-semibold">
                {service.title}
              </CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Key Benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 relative z-10">
              <ul className="space-y-2 mb-4">
                {service.benefits.slice(0, 5).map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 mr-2 mt-0.5 text-xs font-medium">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="btn-texture bg-primary-foreground/20 text-primary hover:bg-primary-foreground/20 focus-visible:bg-white/90">
                <Link href={`/services/${service.id}`} className="flex items-center gap-2">
                  View full details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
