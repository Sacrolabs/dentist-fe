"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

type ServiceItem = {
  serviceId: string
  title: string
  shortDescription: string
  imageUrl?: string
  benefits: string[]
}

export default function ServiceFlipCard({ service }: { service: ServiceItem }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)

  return (
    <div
      id={service.serviceId}
      className="relative h-[340px] md:h-[360px] lg:h-[340px] scroll-mt-28"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative h-full [perspective:1000px]`}
        style={{ WebkitPerspective: "1000px" }}
      >
        <div
          className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''} transform-gpu will-change-transform`}
          style={{ WebkitTransformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 !bg-white !text-foreground hover:!bg-white hover:!text-foreground hover:shadow-lg [backface-visibility:hidden] overflow-hidden transform-gpu"
            onClick={toggle}
            tabIndex={0}
            role="button"
            aria-label={`${service.title} details`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle()}
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {/* Background image */}
            {service.imageUrl && (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt=""
                  fill
                  className="object-cover blur-sm scale-110 opacity-40"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-white/30" />
              </div>
            )}

            <CardHeader className="p-6 relative z-10">
              <CardTitle className="text-xl font-semibold mb-2 text-secondary">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base text-gray-600">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 p-6 relative z-10">
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 bg-primary text-primary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden transform-gpu"
            onClick={toggle}
            tabIndex={0}
            role="button"
            aria-label={`${service.title} more details`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle()}
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {/* Background image */}
            {service.imageUrl && (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt=""
                  fill
                  className="object-cover blur-md scale-110 opacity-30"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
              </div>
            )}

            <CardHeader className="p-6 relative z-10">
              <CardTitle className="text-lg font-semibold">
                {service.title}
              </CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Key Benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 relative z-10">
              <ul className="space-y-2 mb-4">
                {service.benefits?.slice(0, 5).map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 mr-2 mt-0.5 text-xs font-medium">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="btn-texture bg-primary-foreground/20 text-primary hover:bg-primary-foreground/20 focus-visible:bg-white/90">
                <Link href={`/services/${service.serviceId}`} className="flex items-center gap-2">
                  View full details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
