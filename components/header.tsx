"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, CalendarPlus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 fixed-header", isScrolled && "scrolled")}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center header-logo">
          <Image src="/logo.png" alt="Northcote Family Dentist" width={180} height={50} className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            About
          </Link>
          <Link
            href="/team"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            Team
          </Link>
          <Link
            href="/testimonials"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="tel:094492006"
            className={cn(
              "hidden sm:flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            <Phone size={16} />
            <span>Call Today: (09) 449 2006</span>
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

          {/* Mobile menu toggle */}
          <button className="ml-2 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-secondary" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-secondary" : "text-white"} />
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
            <Link
              href="/services"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
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
              href="/contact"
              className="py-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:094492006"
              className="py-2 text-primary flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={16} />
              Call Today: (09) 449 2006
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
