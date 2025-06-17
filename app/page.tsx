import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import DentistSection from "@/components/dentist-section"
import Testimonials from "@/components/testimonials"
import InsurancePartners from "@/components/insurance-partners"
import TechnologyHighlights from "@/components/technology-highlights"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <TechnologyHighlights />
      <DentistSection />
      <Testimonials />
      <InsurancePartners />
      <CtaSection />
    </main>
  )
}
