import SectionHeader from '@/components/SectionHeader'
import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials | LocalServices1',
  description: 'Read what our Austin clients have to say about our electrical work.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Reviews"
        title="Client Testimonials"
        description="Real feedback from real customers across Austin, Texas."
      />

      {testimonials.length === 0 ? (
        <p className="mt-12 text-ink-500">No testimonials available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  )
}