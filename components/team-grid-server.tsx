import { sanityReadClient } from "@/lib/sanity.client"
import { teamMembersQuery } from "@/lib/sanity.queries"
import TeamMemberCard from "@/components/team-member-card"

export default async function TeamGrid() {
  const teamMembers = await sanityReadClient.fetch(teamMembersQuery)
  
  const dentists = teamMembers.filter((m: any) => m.isDentist)
  const supportTeam = teamMembers.filter((m: any) => !m.isDentist)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Dentists */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
            Our Dentists
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dentists.map((dentist: any) => (
              <TeamMemberCard key={dentist._id} member={dentist} />
            ))}
          </div>
        </div>

        {/* Support Team */}
        {supportTeam.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Support Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {supportTeam.map((member: any) => (
                <TeamMemberCard key={member._id} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
