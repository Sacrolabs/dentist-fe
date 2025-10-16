import { sanityReadClient } from "@/lib/sanity.client"
import { servicesQuery } from "@/lib/sanity.queries"
import ServiceFlipCard from "@/components/service-flip-card"

export default async function ServiceList() {
  const services = await sanityReadClient.fetch(servicesQuery)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Our Dental Services</h2>
          <p className="text-gray-600">Explore our comprehensive range of treatments. Hover or tap a card to see details.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <ServiceFlipCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
