import { Heart, Users, Gift } from "lucide-react"

export default function CommunityCommitment() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Community Commitment</h2>
          <p className="text-gray-600">
            We believe in giving back to the community that has supported us for over 18 years. Proud sponsors of
            Northcote Junior Sports Club.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Local Sponsorships</h3>
            <p className="text-gray-600">
              We proudly sponsor Northcote Junior Sports Club, local school events, and community initiatives throughout
              the North Shore.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Free Dental Camps</h3>
            <p className="text-gray-600">
              Regular community dental health camps providing free check-ups and education to underserved families.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-4">School Programs</h3>
            <p className="text-gray-600">
              Educational visits to local schools teaching children about oral health and proper dental hygiene.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
