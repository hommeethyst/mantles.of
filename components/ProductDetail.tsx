'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Product } from '@/lib/products'

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <div className="pt-24 pb-0 px-6 section-padding">
      <div className="container-max">
        {/* Back link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-mantles-muted font-light hover:text-mantles-content transition-opacity duration-200 mb-10"
          aria-label="Back to Shop"
        >
          &larr; Back to Shop
        </Link>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div
              className="aspect-[3/4] bg-mantles-bg border border-black/10 flex items-center justify-center"
              aria-label="Product front view"
            >
              <span className="text-xs tracking-widest uppercase text-mantles-muted font-medium">
                [Front]
              </span>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-[3/4] bg-mantles-bg border border-black/10 flex items-center justify-center"
                aria-label="Product back view"
              >
                <span className="text-xs tracking-widest uppercase text-mantles-muted font-medium">
                  [Back]
                </span>
              </div>
              <div
                className="aspect-[3/4] bg-mantles-bg border border-black/10 flex items-center justify-center"
                aria-label="Product detail view"
              >
                <span className="text-xs tracking-widest uppercase text-mantles-muted font-medium">
                  [Detail]
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category + Color */}
            <p className="text-xs tracking-[0.25em] uppercase text-mantles-muted mb-4">
              {product.category} &mdash; {product.color}
            </p>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-mantles-content leading-tight tracking-tight mb-4 text-balance">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl text-mantles-content font-light mb-6">
              {product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-mantles-muted font-light leading-relaxed mb-8">
              {product.desc}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-10" aria-label="Product features">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-mantles-muted font-light"
                >
                  <span className="w-1 h-1 rounded-full bg-mantles-muted flex-shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-mantles-content font-bold mb-3">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Size selection">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`w-12 h-12 border text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-mantles-content bg-mantles-content text-mantles-surface'
                        : 'border-black/20 text-mantles-content hover:border-mantles-content'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="btn-primary w-full text-center mb-6"
              aria-label={`Add ${product.name} to cart${selectedSize ? ` — Size ${selectedSize}` : ''}`}
            >
              Add to Cart
            </button>

            {/* Shipping / Returns */}
            <div className="border-t border-black/10 pt-6 space-y-3">
              <p className="text-xs text-mantles-muted font-light">
                <span className="font-medium text-mantles-content">Free shipping</span> on orders over $300.
              </p>
              <p className="text-xs text-mantles-muted font-light">
                <span className="font-medium text-mantles-content">Free returns</span> within 30 days.
              </p>
              <p className="text-xs text-mantles-muted font-light">
                Dry cleaning and care instructions included with each garment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
