import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Services | LocalServices1',
  description: 'Explore our full range of professional electrical services in Austin, TX.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="What We Do"
        title="Our Electrical Services"
        description="Professional, licensed electrical solutions for homes and businesses across Austin."
      />

      {services.length === 0 ? (
        <p className="mt-12 text-ink-500">No services available at the moment.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}