import { Play } from "lucide-react"

export default function VideoTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Video Testimonials</h2>
          <p className="text-gray-600">Hear directly from our patients about their experience</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((video) => (
            <div
              key={video}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Patient Story {video}</h3>
                <p className="text-sm opacity-90">Dental Implant Success</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
