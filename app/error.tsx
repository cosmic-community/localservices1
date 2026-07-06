'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container-page py-32 text-center">
      <h2 className="text-2xl font-bold text-ink-900">Something went wrong</h2>
      <p className="mt-3 text-ink-500">
        We couldn&apos;t load this content. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 hover:bg-brand-400 transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}