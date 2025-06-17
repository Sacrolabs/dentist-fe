import Image from "next/image"

export default function TeamHero() {
  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-secondary overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team/team-group.jpg"
          alt="Professional dental team working together in modern clinic environment"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/90"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet Our Dental Family</h1>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg">
          Compassionate Experts Dedicated to Your Smile - Serving North Shore Since 2005
        </p>
      </div>
    </section>
  )
}
