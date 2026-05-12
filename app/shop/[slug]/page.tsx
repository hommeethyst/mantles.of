import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/ProductDetail'
import { products, getProductBySlug } from '@/lib/products'

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <main>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
