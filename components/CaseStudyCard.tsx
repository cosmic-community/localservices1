import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const projectTitle = getMetafieldValue(study.metadata?.project_title) || study.title
  const summary = getMetafieldValue(study.metadata?.summary)
  const location = getMetafieldValue(study.metadata?.location)
  const gallery = study.metadata?.gallery
  const coverImage = gallery && gallery.length > 0 ? gallery[0] : undefined

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-lg transition-all"
    >
      {coverImage?.imgix_url && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={`${coverImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={projectTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
        </div>
      )}
      <div className="p-6">
        {location && (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            📍 {location}
          </p>
        )}
        <h3 className="mt-2 text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
          {projectTitle}
        </h3>
        {summary && (
          <p className="mt-3 text-sm text-ink-500 line-clamp-3">{summary}</p>
        )}
      </div>
    </Link>
  )
}