import { sanityReadClient } from "@/lib/sanity.client"
import { teamMembersQuery } from "@/lib/sanity.queries"
import TeamMemberCardOriginal from "@/components/team-member-card-original"

export default async function TeamGrid() {
  const teamMembers = await sanityReadClient.fetch(teamMembersQuery)
  
  const dentists = teamMembers.filter((m: any) => m.isDentist)
  const supportTeam = teamMembers.filter((m: any) => !m.isDentist)

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Dentists Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Our Dentists
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Meet our experienced dental professionals who are passionate about
            providing exceptional care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentists.map((dentist: any) => (
              <TeamMemberCardOriginal key={dentist._id} member={dentist} isDentist={true} />
            ))}
          </div>
        </div>

        {/* Support Team Section */}
        {supportTeam.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
              Our Support Team
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              The backbone of our practice - dedicated professionals who ensure
              your visit is comfortable and seamless
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportTeam.map((member: any) => (
                <TeamMemberCardOriginal key={member._id} member={member} isDentist={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
