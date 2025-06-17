import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import OurStory from "@/components/our-story"
import CommunityCommitment from "@/components/community-commitment"
import OfficeGallery from "@/components/office-gallery"
import AboutTimeline from "@/components/about-timeline"

export const metadata: Metadata = {
  title: "About Us | Northcote Family Dentist",
  description: "Learn about our story, commitment to the community, and our modern dental facility",
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AboutHero />
      <OurStory />
      <AboutTimeline />
      <CommunityCommitment />
      <OfficeGallery />
    </main>
  )
}
