'use client'

import { useEffect, useState } from 'react'
import { HERO_SLIDES } from '@/lib/site'

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div>
      <div className="hero-slide">
        <img src={HERO_SLIDES[index]} alt="Smart Travel Events" />
      </div>
      <div className="dots">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={HERO_SLIDES[i]}
            type="button"
            className={i === index ? 'active' : ''}
            aria-label={`Imagen ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
