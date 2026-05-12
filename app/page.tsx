import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import BrandStatement from '@/components/BrandStatement'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
      <BrandStatement />
      <Newsletter />
      <Footer />
    </main>
  )
}
