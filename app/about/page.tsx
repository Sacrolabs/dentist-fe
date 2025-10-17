import type { Metadata } from "next"
import AboutContentSanity from "@/components/about-content-sanity"

export const metadata: Metadata = {
  title: "About Us | Northcote Family Dentist",
  description: "Learn about our story, philosophy, and commitment to providing exceptional dental care to the Northcote and Northshore community",
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AboutContentSanity />
    </main>
  )
}
