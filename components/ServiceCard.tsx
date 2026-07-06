import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon)
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-lg transition-all"
    >
      {image?.imgix_url && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={225}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
        </div>
        {shortDesc && (
          <p className="mt-3 text-sm text-ink-500 line-clamp-3">{shortDesc}</p>
        )}
        {price && (
          <p className="mt-4 text-sm font-semibold text-brand-600">
            Starting at {price}
          </p>
        )}
      </div>
    </Link>
  )
}