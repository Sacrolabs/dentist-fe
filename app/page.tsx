import Hero from "@/components/hero";
import Advantages from "@/components/advantages";
import Services from "@/components/services"
import PromoCards from "@/components/promo-cards"
import WhyChooseUs from "@/components/why-choose-us"
import DentistSection from "@/components/dentist-section"
import Testimonials from "@/components/testimonials"
import TechnologyHighlights from "@/components/technology-highlights"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <PromoCards />
      <WhyChooseUs />
      <Services />
      <TechnologyHighlights />
      <DentistSection />
      <Testimonials />
      <Advantages />
      <CtaSection />
    </main>
  )
}
