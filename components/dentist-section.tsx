import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DentistSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Your Trusted Dental Team</h2>
            <p className="text-gray-600 mb-6">
              We are proud to be an extension of the trusted team at Sunnynook Dentist—a highly rated dental clinic with
              close to 200 5 Star google reviews, that has been serving the Northshore Auckland community for over 20
              years.
            </p>
            <p className="text-gray-600 mb-6">
              Known for its patient-first approach and outstanding clinical care, Sunnynook Dentist has built a
              reputation for quality, compassion, and integrity—and Northcote Family Dentist carries that same legacy
              forward.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 btn-texture text-white">
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/team/dental-team.jpg"
                alt="Trusted dental team providing professional patient care in modern clinical setting"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
