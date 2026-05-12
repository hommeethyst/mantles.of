import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-mantles-bg" aria-label="New Arrivals">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 border-b border-black/10 pb-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-mantles-muted mb-2">
              New Arrivals
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-mantles-content">
              The Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-mantles-content tracking-wide hover:opacity-50 transition-opacity duration-200 hidden sm:block"
            aria-label={`View all ${products.length} products`}
          >
            View All ({products.length}) &rarr;
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                <h3 className="text-sm font-bold text-mantles-content">{product.name}</h3>
                <p className="text-xs text-mantles-muted font-light">{product.color}</p>
                <p className="text-sm text-mantles-content font-light">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center sm:hidden">
          <Link href="/shop" className="link-minimal">
            View All ({products.length}) &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
