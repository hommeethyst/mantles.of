import Link from 'next/link'

interface Product {
  id: number
  name: string
  category: string
  price: string
  slug: string
  color: string
  desc: string
  features: string[]
}

const products: Product[] = [
  { id: 1, name: 'Convertible Cargo Pants', category: 'Bottoms', price: '$385', slug: 'convertible-cargo-pants-beige', color: 'Beige', desc: '2-in-1 convertible pants with detachable overlay, belt tie waist, functional pockets, side buckles.', features: ['Detachable overlay', 'Belt tie waist', 'Cargo pockets', 'Side buckles', 'Cotton blend', 'MANTLES. label'] },
  { id: 2, name: 'Convertible Cargo Pants', category: 'Bottoms', price: '$385', slug: 'convertible-cargo-pants-gray', color: 'Gray', desc: '2-in-1 convertible pants with detachable overlay, belt tie waist, functional pockets, side buckles.', features: ['Detachable overlay', 'Belt tie waist', 'Cargo pockets', 'Side buckles', 'Cotton blend', 'MANTLES. label'] },
  { id: 3, name: 'Structured Wool Blazer', category: 'Outerwear', price: '$495', slug: 'structured-wool-blazer', color: 'Black', desc: 'Tailored virgin wool blazer with sharp shoulders and relaxed fit.', features: ['Virgin wool', 'Sharp shoulders', 'Single-breasted', 'Fully lined', 'Signature stitching'] },
  { id: 4, name: 'Silk Relaxed Shirt', category: 'Tops', price: '$285', slug: 'silk-relaxed-shirt', color: 'Off-white', desc: 'Luxurious silk shirt with relaxed fit and mother-of-pearl buttons.', features: ['100% mulberry silk', 'Oversized fit', 'Pearl buttons', 'Curved hem', 'Dry clean only'] },
  { id: 5, name: 'Wide-Leg Trousers', category: 'Bottoms', price: '$325', slug: 'wide-leg-tailored-trousers', color: 'Navy', desc: 'High-waisted Italian wool blend trousers with flowing wide leg.', features: ['Wool blend', 'High-rise', 'Wide-leg', 'Side zip', 'Unlined'] },
  { id: 6, name: 'Cashmere Crewneck', category: 'Knitwear', price: '$395', slug: 'cashmere-crewneck-sweater', color: 'Camel', desc: 'Ultra-soft Grade A cashmere sweater, lightweight yet warm.', features: ['100% cashmere', 'Crew neck', 'Ribbed cuffs/hem', 'Lightweight knit', 'Hand wash'] },
]

const featuredProducts = products.slice(0, 3)

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block hover:opacity-80 transition-opacity duration-300"
      aria-label={`${product.name} in ${product.color} — ${product.price}`}
    >
      {/* Image Placeholder */}
      <div className="aspect-[3/4] bg-mantles-bg border border-black/10 flex items-center justify-center mb-4 overflow-hidden">
        <span className="text-xs tracking-widest uppercase text-mantles-muted font-medium">
          [Image]
        </span>
      </div>
      {/* Info */}
      <div className="space-y-1">
        <p className="text-xs tracking-[0.15em] uppercase text-mantles-muted">{product.category}</p>
        <h3 className="text-sm font-bold text-mantles-content">{product.name}</h3>
        <p className="text-xs text-mantles-muted font-light">{product.color}</p>
        <p className="text-sm text-mantles-content font-light">{product.price}</p>
      </div>
    </Link>
  )
}

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
            aria-label="View all 6 products"
          >
            View All (6) &rarr;
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center sm:hidden">
          <Link href="/shop" className="link-minimal">
            View All (6) &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
