import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products } from '@/lib/products'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop — MANTLES.',
  description: 'Browse the full MANTLES. collection. Minimal luxury essentials crafted with intention.',
}

export default function ShopPage() {
  return (
    <main>
      <Header />

      {/* Page Header */}
      <section className="bg-mantles-surface pt-32 pb-12 px-6 border-b border-black/10">
        <div className="container-max">
          <p className="text-xs tracking-[0.3em] uppercase text-mantles-muted mb-3">
            MANTLES.
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-mantles-content">Shop</h1>
          <p className="text-sm text-mantles-muted font-light mt-3">
            Essential pieces for the considered wardrobe.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-mantles-surface" aria-label="All products">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group block hover:opacity-80 transition-opacity duration-300"
                aria-label={`${product.name} in ${product.color} — ${product.price}`}
              >
                {/* Product Image */}
                <div className="aspect-[3/4] bg-mantles-bg border border-black/10 mb-4 overflow-hidden relative">
                  {product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} in ${product.color}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs tracking-[0.2em] uppercase text-mantles-muted">Image</span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-mantles-muted">{product.category}</p>
                  <h2 className="text-sm font-bold text-mantles-content">{product.name}</h2>
                  <p className="text-xs text-mantles-muted font-light">{product.color}</p>
                  <p className="text-sm text-mantles-content font-light">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer count */}
          <p className="mt-16 text-xs text-mantles-muted font-light border-t border-black/10 pt-6">
            Total {products.length} products
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
