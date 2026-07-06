import SectionHeader from '@/components/SectionHeader'
import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export const metadata = {
  title: 'Case Studies | LocalServices1',
  description: 'Explore our completed electrical projects across Austin, Texas.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Our Work"
        title="Case Studies"
        description="A closer look at the projects we've powered across Austin."
      />

      {caseStudies.length === 0 ? (
        <p className="mt-12 text-ink-500">No case studies available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      )}
    </div>
  )
}