'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink-100">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-ink-900">
            <span className="text-2xl">⚡</span>
            <span>LocalServices1</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-600 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15125550123"
              className="inline-flex items-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-brand-400 transition-colors"
            >
              Call Now
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-ink-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-ink-700 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15125550123"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-900"
            >
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}