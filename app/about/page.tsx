import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lookbook — MANTLES.',
  description: 'MANTLES. Fall/Winter 29 Lookbook collection.',
}

// Data foto model yang sudah disesuaikan dengan nama file kamu
const photos = [
  { id: 1, src: '/TheLaughable.png', alt: 'Look 01 - The Laughable' },
  { id: 2, src: '/TheTomboy.png', alt: 'Look 02 - The Tomboy' },
  { id: 3, src: '/TheMysterious.png', alt: 'Look 03 - The Mysterious' },
  { id: 4, src: '/TheBimbo.png', alt: 'Look 04 - The Bimbo' },
  { id: 5, src: '/TheRaver.png', alt: 'Look 05 - The Raver' },
  { id: 6, src: '/TheNerd.png', alt: 'Look 06 - The Nerd' },
]

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

      {/* Gallery Section */}
      <section className="section-padding border-b border-black/10">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="relative aspect-[3/4] overflow-hidden bg-gray-100 group shadow-sm">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-4 left-4 text-[10px] text-black/30 font-mono tracking-widest uppercase">
                  {photo.alt.split(' - ')[1]}
                </div>
              </div>
            ))}
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