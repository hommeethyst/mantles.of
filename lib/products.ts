export interface Product {
  id: number
  name: string
  category: string
  price: string
  slug: string
  color: string
  desc: string
  features: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Convertible Cargo Pants',
    category: 'Bottoms',
    price: '$385',
    slug: 'convertible-cargo-pants-beige',
    color: 'Beige',
    desc: '2-in-1 convertible pants with detachable overlay, belt tie waist, functional pockets, side buckles.',
    features: ['Detachable overlay', 'Belt tie waist', 'Cargo pockets', 'Side buckles', 'Cotton blend', 'MANTLES. label'],
  },
  {
    id: 2,
    name: 'Convertible Cargo Pants',
    category: 'Bottoms',
    price: '$385',
    slug: 'convertible-cargo-pants-gray',
    color: 'Gray',
    desc: '2-in-1 convertible pants with detachable overlay, belt tie waist, functional pockets, side buckles.',
    features: ['Detachable overlay', 'Belt tie waist', 'Cargo pockets', 'Side buckles', 'Cotton blend', 'MANTLES. label'],
  },
  {
    id: 3,
    name: 'Structured Wool Blazer',
    category: 'Outerwear',
    price: '$495',
    slug: 'structured-wool-blazer',
    color: 'Black',
    desc: 'Tailored virgin wool blazer with sharp shoulders and relaxed fit.',
    features: ['Virgin wool', 'Sharp shoulders', 'Single-breasted', 'Fully lined', 'Signature stitching'],
  },
  {
    id: 4,
    name: 'Silk Relaxed Shirt',
    category: 'Tops',
    price: '$285',
    slug: 'silk-relaxed-shirt',
    color: 'Off-white',
    desc: 'Luxurious silk shirt with relaxed fit and mother-of-pearl buttons.',
    features: ['100% mulberry silk', 'Oversized fit', 'Pearl buttons', 'Curved hem', 'Dry clean only'],
  },
  {
    id: 5,
    name: 'Wide-Leg Trousers',
    category: 'Bottoms',
    price: '$325',
    slug: 'wide-leg-tailored-trousers',
    color: 'Navy',
    desc: 'High-waisted Italian wool blend trousers with flowing wide leg.',
    features: ['Wool blend', 'High-rise', 'Wide-leg', 'Side zip', 'Unlined'],
  },
  {
    id: 6,
    name: 'Cashmere Crewneck',
    category: 'Knitwear',
    price: '$395',
    slug: 'cashmere-crewneck-sweater',
    color: 'Camel',
    desc: 'Ultra-soft Grade A cashmere sweater, lightweight yet warm.',
    features: ['100% cashmere', 'Crew neck', 'Ribbed cuffs/hem', 'Lightweight knit', 'Hand wash'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
