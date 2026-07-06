import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const clientName = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const location = getMetafieldValue(testimonial.metadata?.location)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const rating = testimonial.metadata?.rating ?? 5
  const relatedService = testimonial.metadata?.related_service

  return (
    <div className="rounded-2xl bg-white border border-ink-100 shadow-sm p-6 flex flex-col">
      <StarRating rating={typeof rating === 'number' ? rating : 5} />
      {quote && (
        <blockquote className="mt-4 text-ink-700 italic leading-relaxed flex-1">
          “{quote}”
        </blockquote>
      )}
      <div className="mt-5 pt-4 border-t border-ink-100">
        <p className="font-semibold text-ink-900">{clientName}</p>
        {location && <p className="text-sm text-ink-500">{location}</p>}
        {relatedService?.metadata?.service_name && (
          <p className="mt-1 text-xs font-medium text-brand-600">
            {getMetafieldValue(relatedService.metadata.service_name)}
          </p>
        )}
      </div>
    </div>
  )
}