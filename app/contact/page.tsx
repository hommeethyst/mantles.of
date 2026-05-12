'use client'

import { useState, type FormEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface FormState {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

  return (
    <main className="bg-mantles-surface">
      <Header />

      {/* Page Header */}
      <section className="section-padding pt-36 md:pt-48 border-b border-black/10">
        <div className="container-max">
          <p className="text-xs tracking-[0.3em] uppercase text-mantles-muted mb-6">
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-mantles-content leading-tight tracking-tight text-balance">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="py-12">
                  <p className="text-xl font-bold text-mantles-content mb-3">Message received.</p>
                  <p className="text-sm text-mantles-muted font-light leading-relaxed">
                    Thank you for reaching out. We will get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-[0.15em] uppercase text-mantles-content font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-mantles-bg border border-black/20 px-4 py-3 text-sm text-mantles-content placeholder:text-mantles-muted focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-[0.15em] uppercase text-mantles-content font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-mantles-bg border border-black/20 px-4 py-3 text-sm text-mantles-content placeholder:text-mantles-muted focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-[0.15em] uppercase text-mantles-content font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full bg-mantles-bg border border-black/20 px-4 py-3 text-sm text-mantles-content placeholder:text-mantles-muted focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="border-t border-black/10 pt-8 md:border-t-0 md:pt-0 md:border-l md:border-black/10 md:pl-16">
              <h2 className="text-xs tracking-[0.2em] uppercase font-bold text-mantles-content mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-mantles-muted mb-2">Email</p>
                  <a
                    href="mailto:hello@mantles.co"
                    className="text-sm text-mantles-content font-light hover:opacity-50 transition-opacity duration-200"
                  >
                    hello@mantles.co
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-mantles-muted mb-2">Phone</p>
                  <a
                    href="tel:+12125550100"
                    className="text-sm text-mantles-content font-light hover:opacity-50 transition-opacity duration-200"
                  >
                    +1 (212) 555-0100
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-mantles-muted mb-2">Hours</p>
                  <p className="text-sm text-mantles-content font-light">
                    Monday &ndash; Friday<br />
                    9:00 AM &ndash; 6:00 PM EST
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-mantles-muted mb-2">
                    Response Time
                  </p>
                  <p className="text-sm text-mantles-content font-light">
                    We aim to respond within 1&ndash;2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
