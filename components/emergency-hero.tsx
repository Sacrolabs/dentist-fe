import { sanityReadClient } from "@/lib/sanity.client"
import { emergencyQuery } from "@/lib/sanity.queries"
import { AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

export default async function EmergencyHero() {
  const emergency = await sanityReadClient.fetch(emergencyQuery)

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="h-12 w-12 md:h-16 md:w-16 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {emergency?.heroTitle || "Dental Emergency Services"}
            </h1>
          </div>

          {emergency?.heroSubtitle && (
            <p className="text-xl md:text-2xl font-semibold mb-4 text-red-100">
              {emergency.heroSubtitle}
            </p>
          )}

          {emergency?.heroDescription && (
            <p className="text-lg md:text-xl text-red-50 max-w-3xl mx-auto mb-8">
              {emergency.heroDescription}
            </p>
          )}

          {/* Emergency Call Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`tel:${emergency?.emergencyPhone || '+64273000004'}`}
              className="inline-flex items-center gap-3 bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-lg transition-colors font-bold text-xl shadow-lg"
            >
              <Phone className="h-6 w-6" />
              {emergency?.emergencyPhone || '+64 27 300 0004'}
            </Link>
          </div>

          <p className="mt-6 text-red-100 text-sm">
            Available 24/7 for Dental Emergencies
          </p>
        </div>
      </div>
    </section>
  )
}
