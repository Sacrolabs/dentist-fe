import { sanityReadClient } from "@/lib/sanity.client"
import { servicesQuery } from "@/lib/sanity.queries"
import HeaderClient from "@/components/header-client"

export default async function Header() {
  const services = await sanityReadClient.fetch(servicesQuery)
  
  return <HeaderClient services={services} />
}
