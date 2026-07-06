import SectionHeader from '@/components/SectionHeader'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team | LocalServices1',
  description: 'Meet the licensed, certified electricians behind LocalServices1.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Meet The Crew"
        title="Our Expert Team"
        description="Skilled, certified professionals dedicated to safe, quality electrical work."
      />

      {team.length === 0 ? (
        <p className="mt-12 text-ink-500">No team members to display.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}