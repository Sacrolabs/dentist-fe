import { sanityReadClient } from "@/lib/sanity.client"
import { aboutUsQuery } from "@/lib/sanity.queries"
import { PortableText } from '@portabletext/react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarPlus } from "lucide-react"

export default async function AboutContentSanity() {
  const aboutUs = await sanityReadClient.fetch(aboutUsQuery)

  if (!aboutUs) {
    return (
      <div className="container px-4 py-16">
        <p className="text-center text-gray-600">About Us content is being updated...</p>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {aboutUs.pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {aboutUs.sections?.map((section: any, index: number) => (
              <div key={index} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  {section.sectionTitle}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <PortableText value={section.content} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      {aboutUs.promiseItems && aboutUs.promiseItems.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                Our Promise
              </h2>
              <ul className="space-y-4">
                {aboutUs.promiseItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-lg text-gray-700 leading-relaxed pt-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg text-gray-700 text-center italic">
                At Northcote Family Dentist, your smile matters — but so do you.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {aboutUs.ctaText && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-white mb-8">
                {aboutUs.ctaText}
              </p>
              <Button
                asChild
                size="lg"
                className="hero-cta bg-primary hover:bg-primary/90 btn-texture text-white text-lg px-8 py-6 h-auto"
              >
                <Link
                  href={aboutUs.ctaButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <CalendarPlus size={20} />
                  {aboutUs.ctaButtonText || 'Book Now'}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
