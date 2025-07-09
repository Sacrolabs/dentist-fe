import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ShareExperience() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-bold text-secondary mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear about your visit! Your feedback helps us continue providing exceptional dental care and
            helps other patients feel confident in choosing us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary btn-texture">
              <Link target="_blank" href="https://search.google.com/local/writereview?placeid=ChIJ9XtjnoU5DW0RiV8s8lHeOos" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Leave a Google Review
              </Link>
            </Button>

            <Button asChild variant="outline" className="btn-secondary hover:bg-secondary/70">
              <Link target="_blank" href="https://www.google.com/search?sca_esv=357ad7a5e4d8ecec&sxsrf=AE3TifM2H2ZHSG8cwvzMDmn7rVqvg67_iA:1752037021296&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8s5ME1NN5FPLPaIwmFUKB34bie4OF38sQc1V1x1LLkMWqAsBoNAOhM_8K7ypy0aWUx66GuJgw9UnF1osiR0ZPo66dp0QOHXMiDjZVaocxnVT1i_Wg%3D%3D&q=Sunnynook+Dentist+Reviews&sa=X&ved=2ahUKEwiarabC_q6OAxVrSmwGHcHvFaMQ0bkNegQIJhAE&biw=1480&bih=750&dpr=1.25" className="flex items-center gap-2">
                View all reviews
                <span className="arrow-icon">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
