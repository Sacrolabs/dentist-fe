import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

// Compute once in UTC to minimize SSR/CSR differences
const CURRENT_YEAR_UTC = new Date().getUTCFullYear()

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-6 footer-logo">
              <Image src="/logo-without-bg.png" alt="Northcote Family Dentist" width={150} height={42} className="h-auto" />
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-white flex-shrink-0" />
                <span>Serving Northcote, Birkenhead, Takapuna, Beach Haven, Birkdale</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <a href="tel:+64273000004" className="footer-link hover:text-white transition-colors">
                  +64 27 300 0004
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <Link
                  href="mailto:info@northcotefamilydentist.co.nz"
                  className="footer-link hover:text-white transition-colors"
                >
                  info@northcotefamilydentist.co.nz
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-white flex-shrink-0" />
                <div>
                  <p>Monday - Friday: 8AM - 6PM</p>
                  <p>Saturday: 9AM - 2PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-link hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="footer-link hover:text-white transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#checkups" className="footer-link hover:text-white transition-colors">
                  Routine Exams & Check-ups
                </Link>
              </li>
              <li>
                <Link href="/services#implants" className="footer-link hover:text-white transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services#invisalign" className="footer-link hover:text-white transition-colors">
                  Invisalign
                </Link>
              </li>
              <li>
                <Link href="/services#crowns" className="footer-link hover:text-white transition-colors">
                  Same Day Crowns
                </Link>
              </li>
              <li>
                <Link href="/services#whitening" className="footer-link hover:text-white transition-colors">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link hover:text-white transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Map/Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Find Us</h3>
            <div className="bg-gray-700 aspect-video w-full max-w-md rounded-lg overflow-hidden mb-4">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps?q=46c+Lake+Road+Northcote+Auckland+0627+New+Zealand&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Northcote Family Dentist Location"
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-200">
              &copy; {CURRENT_YEAR_UTC} Northcote Family Dentist. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-200">
              <Link href="/privacy" className="footer-link hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-link hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
