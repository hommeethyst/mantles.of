import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — MANTLES.',
  description: 'MANTLES. is built on the belief that true luxury is precision, not abundance. Learn our story.',
}

interface StatItem {
  label: string
  description: string
}

const stats: StatItem[] = [
  { label: '100% Sustainable', description: 'Every material is responsibly sourced from certified suppliers.' },
  { label: 'Ethical Production', description: 'Crafted in small-batch workshops with fair wages and safe conditions.' },
  { label: 'Timeless Design', description: 'No trends. Only silhouettes and fabrics built to outlast any season.' },
]

export default function AboutPage() {
  return (
    <main className="bg-mantles-surface">
      <Header />

      {/* Hero Section */}
      <section className="section-padding pt-36 md:pt-48 border-b border-black/10">
        <div className="container-max">
          <p className="text-xs tracking-[0.3em] uppercase text-mantles-muted mb-6">
            Lookbook
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-mantles-content leading-tight tracking-tight text-balance max-w-3xl">
            Fall/Winter 29
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding border-b border-black/10">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-mantles-muted font-light leading-relaxed mb-8">
              MANTLES. began with a single question: what does a wardrobe look like when built
              with intention? Not assembled out of trend cycles and fast retail, but considered —
              each piece chosen for what it does and how long it will do it.
            </p>
            <p className="text-base md:text-lg text-mantles-muted font-light leading-relaxed mb-8">
              We design for the long run. Our collections are small on purpose. Every silhouette
              is refined over months, every fabric sourced with care. We reject the noise of seasonal
              fashion in favour of essentials that age with grace.
            </p>
            <p className="text-base md:text-lg text-mantles-muted font-light leading-relaxed mb-8">
              The brand was founded in 2022 with a commitment to two things: exceptional quality and
              radical restraint. We believe the best garment is the one you never need to replace.
              That is the MANTLES. standard.
            </p>
            <p className="text-base md:text-lg text-mantles-muted font-light leading-relaxed">
              Everything we make is produced in small runs, in workshops where the people who
              make your clothes are paid fairly and work safely. Luxury, to us, includes knowing
              where your clothes come from.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" aria-label="Brand values">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-black/10 pt-8">
                <h2 className="text-lg font-bold text-mantles-content mb-3">{stat.label}</h2>
                <p className="text-sm text-mantles-muted font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
