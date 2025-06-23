import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function InsurancePartners() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Insurance Partners</h2>
          <p className="text-gray-600">
            We accept most major insurance plans. Contact us to verify your coverage options.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
          {[1, 2, 3, 4, 5].map((logo) => (
            <div key={logo} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
              <Image
                src="/placeholder-logo.svg"
                alt="Insurance logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 btn-texture">
            <Link href="/contact" className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Verify Your Coverage</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
