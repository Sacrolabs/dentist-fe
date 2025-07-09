import { Calendar, Award, Users } from "lucide-react"

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Our Story</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">Founded in 2005</h3>
              <p className="text-gray-600 mb-6">
                Northcote Family Dentist was established with a simple mission: to provide high-quality, ethical, and
                accessible dental care to families in the Northcote and North Shore communities. Founded in 2005, we've
                served 15,000+ North Shore patients, always maintaining our core values of patient-first care and
                community commitment.
              </p>
              <p className="text-gray-600">
                Our practice has grown from a small local clinic to a comprehensive dental facility, always maintaining
                our core values of patient-first care and community commitment.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">18+ Years</h4>
                    <p className="text-gray-600 text-sm">Serving the North Shore</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">15,000+ Patients</h4>
                    <p className="text-gray-600 text-sm">Trusted by our community</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">175+ Reviews</h4>
                    <p className="text-gray-600 text-sm">5-star patient satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
