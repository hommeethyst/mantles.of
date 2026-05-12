import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="bg-mantles-bg section-padding pt-36 md:pt-48 min-h-[90vh] flex items-center"
      aria-label="Hero"
    >
      <div className="container-max w-full">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-mantles-muted mb-6">
            The First Drop
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-mantles-content leading-none tracking-tight text-balance mb-8">
            Fall/Winter<br />29
          </h1>
          <p className="text-base md:text-lg text-mantles-muted font-light leading-relaxed max-w-md mb-12">
            Minimal forms. Considered materials. A wardrobe built to endure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
