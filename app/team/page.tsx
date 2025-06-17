import type { Metadata } from "next"
import TeamHero from "@/components/team-hero"
import TeamGrid from "@/components/team-grid"

export const metadata: Metadata = {
  title: "Meet Our Dental Family | Northcote Family Dentist",
  description: "Meet our compassionate dental experts dedicated to your smile at Northcote Family Dentist",
}

export default function TeamPage() {
  return (
    <main className="pt-16">
      <TeamHero />
      <TeamGrid />
    </main>
  )
}
