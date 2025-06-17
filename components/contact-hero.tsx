import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dental-consultation.jpg"
          alt="Modern dental consultation room with comfortable seating and advanced equipment"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/90"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg">
          Get in touch with our friendly team. We're here to help with appointments, questions, and emergencies.
        </p>
      </div>
    </section>
  )
}
