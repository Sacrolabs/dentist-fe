import { AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

type EmergencyHotlineProps = {
  hotlineTitle?: string
  hotlineDescription?: string
  emergencyPhone?: string
  availabilityText?: string
  emergencyTypes?: string
}

export default function EmergencyHotline({
  hotlineTitle = "Emergency Dental Hotline",
  hotlineDescription = "Dental emergency? Don't wait - we're here to help 24/7",
  emergencyPhone = "+64273000004",
  availabilityText = "Available for urgent dental care",
  emergencyTypes = "Severe toothache, broken teeth, lost fillings, dental trauma",
}: EmergencyHotlineProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="emergency-hotline">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-white" />
              <h2 className="text-2xl md:text-3xl font-bold">{hotlineTitle}</h2>
            </div>

            <p className="text-white/90 mb-6 text-lg">{hotlineDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`tel:${emergencyPhone}`}
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors text-white font-semibold text-lg"
              >
                <Phone className="h-5 w-5" />
                {emergencyPhone.replace(/(\d{2})(\d{3})(\d{4})/, '($1) $2 $3')}
              </Link>

              <div className="text-white/80 text-sm">{availabilityText}</div>
            </div>

            <div className="mt-6 text-white/70 text-sm">
              <p>Common emergencies: {emergencyTypes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
