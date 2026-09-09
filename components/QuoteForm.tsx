'use client'

import { FormEvent, useState } from 'react'
import { EMAIL, ORIGEN_COUNTRIES } from '@/lib/site'

const passengers = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', '+Diez']

export function QuoteForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Nombres: ${data.get('nombres')}`,
      `Apellido: ${data.get('apellido')}`,
      `Móvil: ${data.get('movil')}`,
      `Email: ${data.get('email')}`,
      `Origen: ${data.get('origen')}`,
      `Destino: ${data.get('destino')}`,
      `Fecha ida: ${data.get('fecha_ida')}`,
      `Fecha vuelta: ${data.get('fecha_vuelta')}`,
      `Pasajeros: ${data.get('pasajeros')}`,
      `Notas: ${data.get('notas')}`,
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Cotiza tu vuelo')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <div>
        <label htmlFor="nombres">Nombres *</label>
        <input id="nombres" name="nombres" required />
      </div>
      <div>
        <label htmlFor="apellido">Apellido *</label>
        <input id="apellido" name="apellido" required />
      </div>
      <div>
        <label htmlFor="movil">Móvil *</label>
        <input id="movil" name="movil" type="tel" required />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="origen">Origen *</label>
        <select id="origen" name="origen" defaultValue="España" required>
          {ORIGEN_COUNTRIES.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="destino">Destino *</label>
        <input id="destino" name="destino" required />
      </div>
      <div>
        <label htmlFor="fecha_ida">Fecha Ida *</label>
        <input id="fecha_ida" name="fecha_ida" type="date" required />
      </div>
      <div>
        <label htmlFor="fecha_vuelta">Fecha Vuelta *</label>
        <input id="fecha_vuelta" name="fecha_vuelta" type="date" required />
      </div>
      <div>
        <label htmlFor="pasajeros">Número de pasajeros (Adultos - niños) *</label>
        <select id="pasajeros" name="pasajeros" required defaultValue="">
          <option value="" disabled>
            Seleccionar
          </option>
          {passengers.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="notas">Notas</label>
        <textarea id="notas" name="notas" />
      </div>
      <div className="full">
        <button className="btn btn-navy" type="submit" style={{ width: 'auto', paddingInline: '2rem' }}>
          Cotizar
        </button>
        {sent ? <p className="form-note">Se abrirá tu correo para enviar la cotización a {EMAIL}.</p> : null}
      </div>
    </form>
  )
}
