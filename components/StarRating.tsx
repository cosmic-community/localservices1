export default function StarRating({ rating }: { rating: number }) {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <div className="flex items-center gap-0.5" aria-label={`${safeRating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < safeRating ? 'text-brand-500' : 'text-ink-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.69h4.171c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.363 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.175 0l-3.376 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.967a1 1 0 00-.362-1.118L2.98 9.394c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.951-.69l1.286-3.968z" />
        </svg>
      ))}
    </div>
  )
}