export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink-500">{description}</p>
      )}
    </div>
  )
}