// app/team/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTeamMember, getMetafieldValue } from '@/lib/cosmic'

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) {
    notFound()
  }

  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const years = member.metadata?.years_experience
  const certifications = getMetafieldValue(member.metadata?.certifications)
  const photo = member.metadata?.photo

  return (
    <div className="container-page py-12 max-w-4xl">
      <Link
        href="/team"
        className="text-sm font-semibold text-brand-600 hover:text-brand-700"
      >
        ← Back to team
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[300px_1fr] items-start">
        {photo?.imgix_url && (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full rounded-2xl object-cover shadow-md"
            width={300}
            height={300}
          />
        )}

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900">{name}</h1>
          {role && <p className="mt-2 text-lg font-medium text-brand-600">{role}</p>}

          <div className="mt-4 flex flex-wrap gap-3">
            {typeof years === 'number' && (
              <span className="rounded-full bg-ink-100 px-4 py-1.5 text-sm font-medium text-ink-700">
                {years}+ years experience
              </span>
            )}
          </div>

          {certifications && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Certifications
              </h2>
              <p className="mt-2 text-ink-700">{certifications}</p>
            </div>
          )}

          {bio && (
            <div
              className="prose mt-6 max-w-none text-ink-700"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          )}
        </div>
      </div>
    </div>
  )
}