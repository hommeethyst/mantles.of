import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lookbook — MANTLES.',
  description: 'MANTLES. Fall/Winter 29 Lookbook collection.',
}

// --- BAGIAN INI YANG TADI KURANG ---
// Ini membuat daftar 20 foto secara otomatis agar bisa dibaca oleh kode di bawah
const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/lookbook/photo${i + 1}.jpg`, 
  alt: `Lookbook Fall/Winter 29 - Item ${i + 1}`
}))

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

      {/* Gallery Section - Sekarang sudah bisa membaca data 'photos' di atas */}
      <section className="section-padding border-b border-black/10">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative aspect-[3/4] overflow-hidden bg-gray-100 group">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 left-2 text-[8px] text-black/20 font-mono">
                  {photo.id.toString().padStart(2, '0')}
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