import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <img
        src="https://imgix.cosmicjs.com/3d792190-7971-11f1-a959-df6e945f2fa2-autopilot-photo-1621905251189-08b45d6a269e-1783366269296.jpeg?w=2000&h=1000&fit=crop&auto=format,compress"
        alt="Electrician at work"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        width={2000}
        height={1000}
      />
      <div className="relative container-page py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 border border-brand-500/40 px-4 py-1.5 text-sm font-semibold text-brand-300">
            ⚡ Licensed & Insured · Austin, TX
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Powering Austin homes & businesses
          </h1>
          <p className="mt-6 text-lg text-ink-300 max-w-xl">
            From panel upgrades to full rewires, our expert electricians deliver
            safe, reliable, and beautiful electrical work backed by years of
            experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 hover:bg-brand-400 transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}