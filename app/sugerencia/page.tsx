'use client'

import { FormEvent, useState } from 'react'
import { EMAIL } from '@/lib/site'

export default function SugerenciaPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Nombre: ${data.get('nombre')}`,
      `Email: ${data.get('email')}`,
      `Sugerencia: ${data.get('mensaje')}`,
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Sugerencia Smart Travel')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="container page-hero">
      <h1>Envía tu sugerencia</h1>
      <p>Ayúdanos a mejorar y a crecer juntos.</p>
      <form className="form-grid" onSubmit={onSubmit}>
        <div>
          <label htmlFor="nombre">Nombre *</label>
          <input id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="full">
          <label htmlFor="mensaje">Sugerencia *</label>
          <textarea id="mensaje" name="mensaje" required />
        </div>
        <div className="full">
          <button className="btn btn-navy" type="submit" style={{ width: 'auto', paddingInline: '2rem' }}>
            Enviar
          </button>
          {sent ? <p className="form-note">Se abrirá tu correo para enviar el mensaje a {EMAIL}.</p> : null}
        </div>
      </form>
    </section>
  )
}
