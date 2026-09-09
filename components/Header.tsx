'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { WHATSAPP } from '@/lib/site'

const links = [
  { href: '/', label: 'Home' },
  { href: '/cotizar/', label: 'Cotizar' },
  { href: WHATSAPP, label: 'Contactar', external: true },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Smart Travel Events">
          <img src="/images/logo-azul.png" alt="Smart Travel Events" width={330} height={155} />
        </Link>
        <nav>
          <ul className="nav">
            {links.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setOpen((v) => !v)} aria-label="Menú">
          ☰
        </button>
      </div>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        {links.map((item) =>
          item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ),
        )}
      </div>
    </header>
  )
}
