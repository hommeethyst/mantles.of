export interface Product {
  id: number
  name: string
  category: string
  price: string
  slug: string
  color: string
  desc: string
  features: string[]
  images: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Layered Cargo Pants',
    category: 'Bottoms',
    price: 'Rp 1.850.000',
    slug: 'layered-cargo-pants-blue',
    color: 'Blue',
    desc: 'Distinctive layered cargo pants featuring a unique skirt-over-trousers silhouette, paint-splatter distressing, adjustable belt system with tie closure, and multiple functional pockets. A statement piece that bridges workwear utility with avant-garde design.',
    features: [
      'Layered skirt-over-trousers design',
      'Paint-splatter distressed details',
      'Adjustable belt tie waist',
      'Multiple cargo pockets',
      'Side buckle adjusters',
      'Premium cotton twill',
      'MANTLES. label patch',
    ],
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluedepan.png-j4qX4qZDluNQhu7uhaZ8lIEVirOUj6.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluebelakang.png-JE3lzTekjW6BbmsKzJJcK1dRkCnm9B.jpeg',
    ],
  },
  {
    id: 2,
    name: 'Layered Cargo Pants',
    category: 'Bottoms',
    price: 'Rp 1.850.000',
    slug: 'layered-cargo-pants-khaki',
    color: 'Khaki',
    desc: 'Distinctive layered cargo pants featuring a unique skirt-over-trousers silhouette, clean minimalist finish, adjustable belt system with buckles, and refined welt pockets. The quintessential fusion of military heritage and contemporary design.',
    features: [
      'Layered skirt-over-trousers design',
      'Clean minimalist finish',
      'Adjustable belt with buckles',
      'Welt back pockets',
      'Side buckle adjusters',
      'Premium cotton twill',
      'Burgundy MANTLES. leather label',
    ],
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khakidepan.png-uEgMIMxt62eKc88LWwmMxiSIA9VNK0.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khakidepan.png-VtRVoNjpldKwPI0xh59DE3AqhpJ1mK.jpeg',
    ],
  },
  {
    id: 3,
    name: 'Embossed Logo Long Sleeve Tee',
    category: 'Tops',
    price: 'Rp 950.000',
    slug: 'embossed-logo-long-sleeve-tee',
    color: 'Off-White',
    desc: 'Architectural long-sleeve tee featuring a unique double-layer construction with cutout vest overlay, tone-on-tone embossed MANTLES logo, and raw-edge hem details. A sophisticated take on the classic long sleeve.',
    features: [
      'Double-layer construction',
      'Cutout vest overlay',
      'Embossed MANTLES logo',
      'Raw-edge hem details',
      'Oversized relaxed fit',
      'Premium cotton jersey',
      'Woven neck label',
    ],
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Belakang-G42EQY84m7sd9w6lIAJEaPr8LkEmjH.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Belakang-SVvsK6JAHgymTQIb9cWuxKQhdJVSEz.png',
    ],
  },
  {
    id: 4,
    name: 'Deconstructed Hoodie',
    category: 'Tops',
    price: 'Rp 1.250.000',
    slug: 'deconstructed-hoodie',
    color: 'Charcoal',
    desc: 'An oversized hoodie with deconstructed seams and raw-edge details. Features asymmetric hem, exposed stitching, and a relaxed silhouette that redefines casual luxury.',
    features: [
      'Deconstructed seam details',
      'Raw-edge finishing',
      'Asymmetric hem',
      'Exposed stitching',
      'Oversized fit',
      'Premium heavyweight cotton',
      'Woven MANTLES. label',
    ],
    images: [],
  },
  {
    id: 5,
    name: 'Structured Wide Trousers',
    category: 'Bottoms',
    price: 'Rp 1.450.000',
    slug: 'structured-wide-trousers',
    color: 'Black',
    desc: 'Architectural wide-leg trousers with sharp pleats and a high-rise waist. The perfect balance of formal tailoring and contemporary streetwear aesthetics.',
    features: [
      'Sharp front pleats',
      'High-rise waist',
      'Wide-leg silhouette',
      'Side seam pockets',
      'Back welt pockets',
      'Premium wool blend',
      'Leather MANTLES. patch',
    ],
    images: [],
  },
  {
    id: 6,
    name: 'Layered Vest',
    category: 'Tops',
    price: 'Rp 1.150.000',
    slug: 'layered-vest',
    color: 'Stone',
    desc: 'A versatile layered vest with multiple pockets and adjustable straps. Designed for utility without compromising on the minimalist aesthetic.',
    features: [
      'Multiple utility pockets',
      'Adjustable side straps',
      'Layered panel design',
      'Snap button closure',
      'Relaxed fit',
      'Durable cotton canvas',
      'MANTLES. hardware',
    ],
    images: [],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
