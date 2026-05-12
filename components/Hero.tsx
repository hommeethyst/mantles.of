import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative section-padding pt-36 md:pt-48 min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/heropart.PNG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero"
    >
      {/* Overlay Gelap: Supaya teks putih tetap kontras dan gampang dibaca */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container-max w-full relative z-10">
        <div className="max-w-3xl">
          {/* Teks: The First Drop */}
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/90 mb-6">
            The First Drop
          </p>
          
          {/* Teks Utama: Fall/Winter 29 */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight text-balance mb-8">
            Fall/Winter<br />29
          </h1>
          
          {/* Teks Deskripsi */}
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-md mb-12">
            Minimal forms. Considered materials. A wardrobe built to endure.
          </p>
          
          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-4">
            {/* Shop Now: Solid White */}
            <Link 
              href="/shop" 
              className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all"
            >
              Shop Now
            </Link>
            
            {/* Lookbook: Outline White */}
            <Link 
              href="/about" 
              className="px-8 py-4 border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}