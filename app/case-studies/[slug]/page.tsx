// app/case-studies/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'
import type { CosmicImage } from '@/types'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = await getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  const projectTitle = getMetafieldValue(study.metadata?.project_title) || study.title
  const summary = getMetafieldValue(study.metadata?.summary)
  const fullDesc = getMetafieldValue(study.metadata?.full_description)
  const location = getMetafieldValue(study.metadata?.location)
  const gallery: CosmicImage[] = study.metadata?.gallery || []
  const relatedService = study.metadata?.related_service
  const coverImage = gallery.length > 0 ? gallery[0] : undefined
  const restGallery = gallery.slice(1)

  return (
    <article>
      {coverImage?.imgix_url && (
        <div className="relative h-72 sm:h-96 bg-ink-900">
          <img
            src={`${coverImage.imgix_url}?w=2000&h=800&fit=crop&auto=format,compress`}
            alt={projectTitle}
            className="w-full h-full object-cover"
            width={2000}
            height={800}
          />
        </div>
      )}

      <div className="container-page py-12 max-w-4xl">
        <Link
          href="/case-studies"
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          ← Back to case studies
        </Link>

        {location && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-600">
            📍 {location}
          </p>
        )}
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink-900">
          {projectTitle}
        </h1>

        {relatedService?.metadata?.service_name && (
          <Link
            href={`/services/${relatedService.slug}`}
            className="mt-4 inline-block rounded-full bg-ink-100 px-4 py-1.5 text-sm font-medium text-ink-700 hover:bg-ink-200 transition-colors"
          >
            {getMetafieldValue(relatedService.metadata.service_name)}
          </Link>
        )}

        {summary && <p className="mt-6 text-lg text-ink-600">{summary}</p>}

        {fullDesc && (
          <div
            className="prose prose-lg mt-8 max-w-none text-ink-700"
            dangerouslySetInnerHTML={{ __html: fullDesc }}
          />
        )}

        {restGallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-ink-900">Project Gallery</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {restGallery.map((img, i) => (
                <img
                  key={i}
                  src={`${img.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={`${projectTitle} photo ${i + 2}`}
                  className="w-full rounded-xl object-cover shadow-sm"
                  width={400}
                  height={300}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}