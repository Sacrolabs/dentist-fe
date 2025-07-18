import Image from "next/image"

export default function ServicesBanner() {
  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-secondary overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dental-equipment.jpg"
          alt="Modern dental equipment and treatment room with advanced technology"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-secondary/20"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Comprehensive Dental Care Services</h1>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg">
          From preventive care to advanced restorative treatments, we provide a full range of dental services for your
          whole family.
        </p>
      </div>
    </section>
  )
}
