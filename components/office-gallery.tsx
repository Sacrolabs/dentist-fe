import Image from "next/image"

export default function OfficeGallery() {
  const galleryImages = [
    {
      src: "/images/clinic-reception.jpg",
      alt: "Modern dental reception area with comfortable seating and welcoming atmosphere",
    },
    {
      src: "/images/modern-treatment-room.jpg",
      alt: "State-of-the-art dental treatment room with advanced equipment and comfortable patient chair",
    },
    {
      src: "/images/consultation-area.jpg",
      alt: "Professional dental consultation area for patient discussions",
    },
    {
      src: "/images/waiting-area.jpg",
      alt: "Clean and modern dental clinic interior with natural lighting",
    },
    {
      src: "/images/dental-equipment.jpg",
      alt: "Advanced dental technology and equipment for precise treatments",
    },
    {
      src: "/images/sterilization-room.jpg",
      alt: "Sterile equipment preparation area maintaining highest hygiene standards",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Office Tour</h2>
          <p className="text-gray-600">
            Take a virtual tour of our modern, comfortable dental facility designed with your comfort in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
