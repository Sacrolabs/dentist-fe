import type { Metadata } from "next"
import EmergencyHero from "@/components/emergency-hero"
import EmergencyHotline from "@/components/emergency-hotline"
import EmergencyContact from "@/components/emergency-contact"
import { sanityReadClient } from "@/lib/sanity.client"
import { emergencyQuery } from "@/lib/sanity.queries"

export const metadata: Metadata = {
  title: "Emergency Dental Services | Northcote Family Dentist",
  description:
    "Need urgent dental care? Call our emergency hotline 24/7. We're here to help with severe toothaches, broken teeth, and other dental emergencies.",
}

export default async function EmergencyPage() {
  const emergency = await sanityReadClient.fetch(emergencyQuery)

  return (
    <main className="pt-16">
      <EmergencyHero />
      {emergency && (
        <>
          <EmergencyHotline
            hotlineTitle={emergency.hotlineTitle}
            hotlineDescription={emergency.hotlineDescription}
            emergencyPhone={emergency.emergencyPhone}
            availabilityText={emergency.availabilityText}
            emergencyTypes={emergency.emergencyTypes}
          />
          <EmergencyContact
            bannerTitle={emergency.bannerTitle}
            bannerDescription={emergency.bannerDescription}
            emergencyPhone={emergency.emergencyPhone}
            whenToCallTitle={emergency.whenToCallTitle}
            whenToCallItems={emergency.whenToCallItems}
          />
        </>
      )}
    </main>
  )
}
