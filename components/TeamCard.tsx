import Link from 'next/link'
import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const years = member.metadata?.years_experience
  const photo = member.metadata?.photo

  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-lg transition-all"
    >
      {photo?.imgix_url && (
        <div className="aspect-square overflow-hidden">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={300}
            height={300}
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {role && <p className="mt-1 text-sm text-brand-600 font-medium">{role}</p>}
        {typeof years === 'number' && (
          <p className="mt-2 text-xs text-ink-500">{years}+ years experience</p>
        )}
      </div>
    </Link>
  )
}