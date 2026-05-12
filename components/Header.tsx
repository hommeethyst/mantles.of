'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-mantles-bg/95 backdrop-blur-sm border-b border-black/10"
      role="banner"
    >
      <div className="container-max h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-mantles-content tracking-tight hover:opacity-70 transition-opacity duration-200"
          aria-label="MANTLES. — Home"
        >
          MANTLES.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mantles-content tracking-wide hover:opacity-50 transition-opacity duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 hover:opacity-50 transition-opacity duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-px bg-mantles-content transition-transform duration-200 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-mantles-content transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-mantles-content transition-transform duration-200 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-mantles-bg border-b border-black/10 px-6 pb-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-mantles-content tracking-wide border-b border-black/10 last:border-0 hover:opacity-50 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
