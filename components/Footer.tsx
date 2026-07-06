import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-ink-300 mt-20">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl text-white">
              <span className="text-2xl">⚡</span>
              <span>LocalServices1</span>
            </div>
            <p className="mt-3 text-sm text-ink-400 max-w-xs">
              Licensed and insured electrical services proudly serving Austin, Texas
              and the surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-brand-400">Services</Link></li>
              <li><Link href="/team" className="hover:text-brand-400">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-400">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-brand-400">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Austin, Texas</li>
              <li><a href="tel:+15125550123" className="hover:text-brand-400">(512) 555-0123</a></li>
              <li><a href="mailto:hello@localservices1.com" className="hover:text-brand-400">hello@localservices1.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-800 text-sm text-ink-500">
          &copy; {year} LocalServices1. All rights reserved.
        </div>
      </div>
    </footer>
  )
}