"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, CalendarPlus, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type Service = {
  serviceId: string
  title: string
}

export default function HeaderClient({ services }: { services: Service[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 fixed-header shadow-lg bg-secondary-foreground")}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center header-logo py-2">
          <Image src="/logo.png" alt="Northcote Family Dentist" width={90} height={20} className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 p-2">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              "text-secondary",
            )}
          >
            Home
          </Link>
          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors",
                "text-secondary",
              )}
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            {/* Dropdown panel */}
            <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {services.map((service) => (
                <Link
                  key={service.serviceId}
                  href={`/services/${service.serviceId}`}
                  className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-primary"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/services"
                className="block px-4 py-2 text-sm font-semibold text-primary border-t border-gray-200 hover:bg-gray-100"
              >
                View All Services
              </Link>
            </div>
          </div>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              "text-secondary",
            )}
          >
            About
          </Link>
          <Link
            href="/team"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              "text-secondary",
            )}
          >
            Team
          </Link>
          <Link
            href="/testimonials"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              "text-secondary",
            )}
          >
            Testimonials
          </Link>
          <Link
            href="/emergency"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              "text-secondary",
            )}
          >
            Emergency
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              "text-secondary",
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+64273000004"
            className={cn(
              "hidden sm:flex items-center gap-2 text-sm font-medium transition-colors",
              "text-secondary",
            )}
          >
            <Phone size={16} />
            <span>Call Today: +64 27 300 0004</span>
          </a>
          <Button asChild size="sm" className="btn-primary btn-texture hero-cta hidden md:flex">
            <Link
              href="https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <CalendarPlus size={16} />
              Book Appointment
            </Link>
          </Button>

          {/* Mobile menu toggle */}
          <button className="ml-2 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="text-secondary" />
            ) : (
              <Menu className="text-secondary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <Link
              href="/"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <details className="py-2">
              <summary className="list-none text-secondary hover:text-primary cursor-pointer inline-flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </summary>
              <ul className="pl-4 mt-2 space-y-1">
                {services.map((service) => (
                  <li key={service.serviceId}>
                    <Link
                      href={`/services/${service.serviceId}`}
                      className="text-sm text-secondary hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link
              href="/about"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/testimonials"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/emergency"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Emergency
            </Link>
            <Link
              href="/contact"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+64273000004"
              className="py-2 text-primary flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={16} />
              Call Today: +64 27 300 0004
            </a>
            <Button asChild size="sm" className="btn-primary btn-texture hero-cta">
            <Link
              href="https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <CalendarPlus size={16} />
              Book Appointment
            </Link>
          </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
