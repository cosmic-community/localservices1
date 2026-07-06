// app/services/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.featured_image

  return (
    <article>
      {image?.imgix_url && (
        <div className="relative h-72 sm:h-96 bg-ink-900">
          <img
            src={`${image.imgix_url}?w=2000&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover opacity-70"
            width={2000}
            height={800}
          />
        </div>
      )}

      <div className="container-page py-12 max-w-3xl">
        <Link
          href="/services"
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          ← Back to services
        </Link>

        <div className="mt-6 flex items-center gap-4">
          {icon && <span className="text-4xl">{icon}</span>}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900">{name}</h1>
        </div>

        {price && (
          <p className="mt-4 inline-block rounded-lg bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
            Starting at {price}
          </p>
        )}

        {shortDesc && (
          <p className="mt-6 text-lg text-ink-600">{shortDesc}</p>
        )}

        {fullDesc && (
          <div
            className="prose prose-lg mt-8 max-w-none text-ink-700"
            dangerouslySetInnerHTML={{ __html: fullDesc }}
          />
        )}

        <div className="mt-12 rounded-2xl bg-ink-50 p-8 text-center">
          <h2 className="text-xl font-bold text-ink-900">Interested in this service?</h2>
          <a
            href="tel:+15125550123"
            className="mt-4 inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 hover:bg-brand-400 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </article>
  )
}