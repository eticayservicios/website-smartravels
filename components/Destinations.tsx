'use client'

import { useRef } from 'react'
import { DESTINATIONS } from '@/lib/site'

export function Destinations() {
  const track = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('.dest-card')
    const width = card instanceof HTMLElement ? card.offsetWidth + 62 : 320
    el.scrollBy({ left: dir * width, behavior: 'smooth' })
  }

  return (
    <div className="dest-wrap">
      <div className="dest-track" ref={track}>
        {DESTINATIONS.map((item) => (
          <article className="dest-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="body">
              <h3>{item.title}</h3>
              {item.prices.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="dest-nav">
        <button type="button" aria-label="Anterior" onClick={() => scrollByCard(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Siguiente" onClick={() => scrollByCard(1)}>
          ›
        </button>
      </div>
    </div>
  )
}
