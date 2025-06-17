import type { Metadata } from "next"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import EmergencyHotline from "@/components/emergency-hotline"
import EmergencyContact from "@/components/emergency-contact"

export const metadata: Metadata = {
  title: "Contact Us | Northcote Family Dentist",
  description:
    "Get in touch with Northcote Family Dentist. Book appointments, ask questions, or reach us for emergencies.",
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactHero />
      <ContactForm />
      <EmergencyHotline />
      <EmergencyContact />
    </main>
  )
}
