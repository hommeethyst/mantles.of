import Link from 'next/link'

const shopLinks = [
  { label: 'All Products', href: '/shop' },
  { label: 'Outerwear', href: '/shop' },
  { label: 'Bottoms', href: '/shop' },
  { label: 'Tops', href: '/shop' },
  { label: 'Knitwear', href: '/shop' },
]

const infoLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Shipping & Returns', href: '/contact' },
  { label: 'Size Guide', href: '/contact' },
  { label: 'Care Instructions', href: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Twitter', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mantles-surface border-t border-black/10 py-16 px-6" role="contentinfo">
      <div className="container-max">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Col 1-2: Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold text-mantles-content tracking-tight hover:opacity-70 transition-opacity duration-200 block mb-4"
              aria-label="MANTLES. — Home"
            >
              MANTLES.
            </Link>
            <p className="text-sm text-mantles-muted font-light leading-relaxed max-w-xs mb-8">
              Essential luxury for the considered wardrobe. Fewer pieces, crafted better.
            </p>
            {/* Social */}
            <div className="flex gap-3" aria-label="Social media links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={`MANTLES. on ${link.label}`}
                  className="border border-black/20 px-4 py-2 text-xs tracking-widest uppercase text-mantles-content hover:opacity-50 transition-opacity duration-200"
                >
                  {link.label === 'Instagram' ? 'IG' : link.label === 'Pinterest' ? 'Pin' : link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Shop */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-mantles-content mb-6">
              Shop
            </h3>
            <nav aria-label="Shop navigation">
              <ul className="space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mantles-muted font-light hover:text-mantles-content hover:opacity-80 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4: Info */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-mantles-content mb-6">
              Info
            </h3>
            <nav aria-label="Info navigation">
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mantles-muted font-light hover:text-mantles-content hover:opacity-80 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mantles-muted font-light">
            &copy; {currentYear} MANTLES. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-mantles-muted font-light hover:text-mantles-content transition-opacity duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-mantles-muted font-light hover:text-mantles-content transition-opacity duration-200">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
