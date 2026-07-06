import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import {
  getServices,
  getTeamMembers,
  getCaseStudies,
  getTestimonials,
} from '@/lib/cosmic'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredTeam = team.slice(0, 4)
  const featuredCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services */}
      {featuredServices.length > 0 && (
        <section className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="What We Do"
              title="Our Electrical Services"
              description="Professional solutions for every electrical need, big or small."
            />
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* Team */}
      {featuredTeam.length > 0 && (
        <section className="bg-ink-50 py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader
                eyebrow="Meet The Crew"
                title="Our Expert Team"
                description="Licensed, certified, and dedicated to quality work."
              />
              <Link
                href="/team"
                className="text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Meet the whole team →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredTeam.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Our Work"
              title="Recent Projects"
              description="See how we've powered up homes and businesses across Austin."
            />
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View all projects →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="bg-ink-900 py-20">
          <div className="container-page">
            <SectionHeader
              eyebrow="Reviews"
              title="What Our Clients Say"
              center
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-3xl bg-brand-500 px-8 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-ink-800 max-w-xl mx-auto">
            Contact us today for a free estimate on your next electrical project.
          </p>
          <a
            href="tel:+15125550123"
            className="mt-8 inline-flex items-center rounded-lg bg-ink-900 px-8 py-4 font-semibold text-white hover:bg-ink-800 transition-colors"
          >
            Call (512) 555-0123
          </a>
        </div>
      </section>
    </>
  )
}