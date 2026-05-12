export default function BrandStatement() {
  return (
    <section
      className="bg-mantles-surface section-padding"
      aria-label="Brand Philosophy"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Divider top */}
          <div className="w-12 h-px bg-mantles-content mb-12" aria-hidden="true" />

          <blockquote>
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-mantles-content leading-tight tracking-tight text-balance mb-12">
              Less, but better.
            </p>
          </blockquote>

          <p className="text-base md:text-lg text-mantles-muted font-light leading-relaxed max-w-2xl">
            MANTLES. was built on a single belief: that true luxury is not abundance, but precision.
            Each piece is conceived with restraint — chosen materials, deliberate construction, and
            a silhouette that respects the body and transcends the season. We make less, so that
            what we make is better.
          </p>

          {/* Divider bottom */}
          <div className="w-12 h-px bg-black/20 mt-16" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
