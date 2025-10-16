import type { Metadata } from "next"
import ServiceList from "@/components/service-list-server"
import ServicesBanner from "@/components/services-banner"

export const metadata: Metadata = {
  title: "Services | Northcote Family Dentist",
  description: "Comprehensive dental care services offered by Northcote Family Dentist",
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <ServicesBanner />
      <ServiceList />
    </main>
  )
}
