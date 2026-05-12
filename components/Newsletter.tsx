'use client'

import { useState, type FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-mantles-bg section-padding border-t border-black/10" aria-label="Newsletter">
      <div className="container-max">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-mantles-muted mb-4">
            Stay Informed
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-mantles-content mb-4 text-balance">
            Join the Edit
          </h2>
          <p className="text-sm text-mantles-muted font-light leading-relaxed mb-10">
            Receive early access to new collections, editorial notes, and considered recommendations.
          </p>

          {submitted ? (
            <p className="text-sm font-medium text-mantles-content tracking-wide">
              Thank you. You&apos;re on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-mantles-surface border border-black/20 px-4 py-3 text-sm text-mantles-content placeholder:text-mantles-muted focus:outline-none focus:border-black transition-colors duration-200"
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
