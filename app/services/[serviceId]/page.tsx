import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { sanityReadClient } from "@/lib/sanity.client"
import { servicesQuery, serviceByIdQuery } from "@/lib/sanity.queries"
import { Button } from "@/components/ui/button"

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export async function generateStaticParams() {
  const services = await sanityReadClient.fetch(servicesQuery)
  return services.map((s: any) => ({ serviceId: s.serviceId }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await sanityReadClient.fetch(serviceByIdQuery, { serviceId: params.serviceId })
  if (!service) {
    return {
      title: "Service | Northcote Family Dentist",
    }
  }
  return {
    title: `${service.title} | Northcote Family Dentist`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await sanityReadClient.fetch(serviceByIdQuery, { serviceId: params.serviceId })

  if (!service) {
    return (
      <main className="pt-24 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-primary hover:underline">
          Return to Services
        </Link>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link href="/services" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:mb-8 mb-6">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-4 whitespace-pre-line">
              {service.shortDescription}
            </p>
          </div>

          {/* Image */}
          {service.imageUrl && (
            <div className="relative w-full md:w-1/2 md:max-w-md mb-6 md:mb-0 rounded-xl overflow-hidden shadow-md flex justify-center items-center min-h-[120px]">
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={420}
                height={360}
                className="w-full max-h-[220px] object-cover rounded-xl"
              />
            </div>
          )}
        </div>

        {/* Details & Benefits Sections - Parallel Flex on Desktop */}
        <div className="flex flex-col md:flex-row md:gap-8 mb-6">
          {/* Details Sections */}
          <div className="md:w-1/2">
            {service.details?.map((section, i) => (
              <section key={i} className="mb-6 max-w-2xl">
                <h2 className="text-xl font-semibold text-secondary mb-2">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Benefits */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-secondary mb-2">Key Benefits</h2>
            <ul className="space-y-2 mb-6">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 text-primary flex-shrink-0 mr-2 mt-0.5 text-xs font-medium">
                    ✓
                  </span>
                  <span className="text-gray-700 text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        {service.cta && (
          <div className="bg-primary/60 p-4 rounded-lg mb-6 max-w-2xl">
            <p className="text-base text-gray-800 mb-4 whitespace-pre-line">{service.cta}</p>
            <Button asChild className="btn-primary btn-texture text-white px-6 py-2 text-base">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
