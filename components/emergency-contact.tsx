import { AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

type EmergencyContactProps = {
  bannerTitle?: string
  bannerDescription?: string
  emergencyPhone?: string
  whenToCallTitle?: string
  whenToCallItems?: string[]
}

export default function EmergencyContact({
  bannerTitle = "Dental Emergency?",
  bannerDescription = "Severe toothache, broken teeth, or dental trauma? Don't wait - call us immediately.",
  emergencyPhone = "+64273000004",
  whenToCallTitle = "When to Call for Emergency Care:",
  whenToCallItems = [
    "Severe, persistent toothache",
    "Knocked-out or broken teeth",
    "Lost fillings or crowns",
    "Facial swelling or abscess",
    "Bleeding that won't stop",
    "Jaw injury or trauma",
  ],
}: EmergencyContactProps) {
  return (
    <section className="py-12 bg-red-50 border-t-4 border-red-500">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">{bannerTitle}</h2>
          </div>

          <p className="text-red-600 mb-6 text-lg">
            {bannerDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href={`tel:${emergencyPhone}`}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold text-lg"
            >
              <Phone className="h-5 w-5" />
              Emergency: {emergencyPhone.replace(/(\d{2})(\d{3})(\d{4})/, '($1) $2 $3')}
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="font-semibold text-red-700 mb-3">{whenToCallTitle}</h3>
            <ul className="text-left text-red-600 space-y-2">
              {whenToCallItems.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
